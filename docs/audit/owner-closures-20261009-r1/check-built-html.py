"""Read-only checks of generated HTML; no browser or visual acceptance."""
from html.parser import HTMLParser
from pathlib import Path
import json

ROUTES = ['services', 'services/pain-relief', 'services/regenerative-medicine',
          'about', 'educational-guide', 'book', 'services/neuropathy',
          'services/hormone-optimization', 'services/pelvic-floor-incontinence']
VOID_TAGS = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
             'meta', 'param', 'source', 'track', 'wbr'}
FORBIDDEN = ['Booking Cta', 'GoHighLevel', 'Review status: Approved',
             'Reviewed by clinician', 'Current as of May 2025',
             'Trusted sources used and approved', 'Dr. Jason Hurst',
             'Team Publication Gate', 'secure booking', 'secure online form',
             'kept confidential', 'reviewed by our clinical team',
             'before clinical copy goes live', 'Do not render public provider']

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.root = {'tag': 'root', 'attrs': {}, 'children': []}
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = {'tag': tag, 'attrs': dict(attrs), 'children': []}
        self.stack[-1]['children'].append(node)
        if tag not in VOID_TAGS:
            self.stack.append(node)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index]['tag'] == tag:
                self.stack = self.stack[:index]
                return

    def handle_data(self, data):
        self.stack[-1]['children'].append(data)


def nodes(node):
    yield node
    for child in node['children']:
        if isinstance(child, dict):
            yield from nodes(child)


def words(node):
    if node['tag'] in {'script', 'style'}:
        return ''
    return ' '.join(child if isinstance(child, str) else words(child)
                    for child in node['children']).strip()


def inspect(route):
    doc = Document()
    doc.feed(Path(f'.next/server/app/{route}.html').read_text())
    main = next(node for node in nodes(doc.root) if node['tag'] == 'main')
    elements = list(nodes(main))
    content = ' '.join(words(main).split())
    assert not any(term.casefold() in content.casefold() for term in FORBIDDEN), route
    assert not any(node['tag'] in {'input', 'form', 'iframe', 'select', 'textarea'} for node in elements), route
    assert all('alt' in node['attrs'] for node in elements if node['tag'] == 'img'), route
    assert len([node for node in elements if node['tag'] == 'h1']) == 1, route
    links = [node for node in elements if node['tag'] == 'a']
    assert all('Check booking status' in words(node) for node in links if node['attrs'].get('href') == '/book'), route
    assert all('status' in words(node).lower() for node in links if node['attrs'].get('href') in {'/terms', '/privacy', '/notice-of-privacy-practices', '/contact'}), route
    assert all(node['attrs'].get('type') == 'button' for node in elements if node['tag'] == 'button'), route
    return {'route': '/' + route, 'h1': 1, 'forms_inputs_iframes': 0,
            'book_link_count': sum(node['attrs'].get('href') == '/book' for node in links),
            'status_copy_checks': 'PASS'}, elements


def special_checks(all_elements):
    about = all_elements['about']
    removed = ['hormone-orientation-lobby-v3', 'hormone-decision-reception-v3', 'neuropathy-faq-lobby-v2']
    assert not any(name in node['attrs'].get('src', '') for node in about for name in removed)
    panel = next(node for node in all_elements['book'] if 'book-status-panel' in node['attrs'].get('class', ''))
    assert not any(node['tag'] in {'a', 'button', 'input'} or 'tabindex' in node['attrs'] for node in nodes(panel))
    for route in ['services/hormone-optimization', 'services/regenerative-medicine']:
        dialogs = [node for node in all_elements[route] if node['tag'] == 'dialog']
        assert len(dialogs) == 1
        assert 'request form are unavailable' in words(dialogs[0])
        assert 'availability date have not been supplied' in words(dialogs[0])
    for variant in ['a', 'b']:
        stub = Path(f'app/variant-{variant}/page.tsx').read_text()
        assert stub == "import { permanentRedirect } from 'next/navigation';\n\nexport default function Page() {\n  permanentRedirect('/');\n}\n"


results, all_elements = [], {}
for route in ROUTES:
    result, elements = inspect(route)
    results.append(result)
    all_elements[route] = elements
special_checks(all_elements)
print(json.dumps({'scope': 'Generated HTML only; no runtime, browser, pixel, or accessibility certification',
                  'routes': results, 'about_image_removals': 'PASS',
                  'book_panel_noninteractive': 'PASS', 'local_guide_dialog_copy': 'PASS',
                  'retired_stub_grammar': 'PASS'}, indent=2))
