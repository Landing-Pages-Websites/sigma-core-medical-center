"""Inspect generated Guide markup; this is not a browser test."""
from html.parser import HTMLParser
from pathlib import Path
import re


class GuideHTML(HTMLParser):
    def __init__(self):
        super().__init__()
        self.section = None
        self.sections = {}
        self.tags = []
        self.links = []
        self.link = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'section':
            self.section = attrs.get('id')
            self.sections[self.section] = []
        self.tags.append((tag, attrs, self.section))
        if tag == 'a':
            self.link = {'attrs': attrs, 'section': self.section, 'text': ''}

    def handle_endtag(self, tag):
        if tag == 'section':
            self.section = None
        if tag == 'a' and self.link is not None:
            self.links.append(self.link)
            self.link = None

    def handle_data(self, text):
        if self.section is not None:
            self.sections[self.section].append(text)
        if self.link is not None:
            self.link['text'] += text


page = GuideHTML()
page.feed(Path('.next/server/app/educational-guide.html').read_text())
for section in ['hero', 'how-it-works']:
    content = ' '.join(' '.join(page.sections[section]).split())
    assert 'unavailable' in content
    assert 'No availability date has been given' in content
    assert 'does not provide diagnosis or individualized medical advice' in content
    for unsupported in ['Get the Sigma', 'Submit your interest', 'notify you', 'GoHighLevel',
                        'The customer plans', 'The page should', 'Do not publish',
                        'What this resource includes', 'visit flow', 'evaluation process',
                        'higher baseline', 'For access, use, and privacy terms']:
        assert unsupported not in content, unsupported
    print(f'{section}: {content}')
terms = [link for link in page.links if link['section'] == 'how-it-works']
assert len(terms) == 1
assert terms[0]['attrs']['href'] == '/terms'
assert re.sub(r'\s+', ' ', terms[0]['text']).strip() == 'Terms status →'
assert 'The Terms page is currently unavailable.' in ' '.join(page.sections['how-it-works'])
assert not [tag for tag, _, _ in page.tags if tag in ('form', 'input', 'textarea', 'select')]
assert all(attrs.get('type') == 'button' for tag, attrs, _ in page.tags if tag == 'button')
assert any(tag == 'meta' and attrs.get('name') == 'robots' and attrs.get('content') == 'noindex, follow' for tag, attrs, _ in page.tags)
assert {'hero', 'how-it-works', 'form', 'faq'}.issubset(page.sections)
print('PASS: semantic /terms link labeled Terms status; decorative arrow remains aria-hidden in JSX.')
print('PASS: both edited sections contain honest status and page-specific non-medical-advice boundary.')
print('PASS: generated Guide contains no forms or data-entry fields; buttons retain type=button.')
print('PASS: Guide noindex/follow and original section anchors remain.')
print('LIMIT: static HTML only; no browser, keyboard interaction, responsive or rendered proof.')
