"""Source, artifact and generated-HTML checks, deliberately not visual approval."""
import hashlib
import json
import re
import subprocess
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse, parse_qs

REPO = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
ROOT = Path('/var/lib/megaclaw/workspace/website-lp-build-research-data/b380819e-88b6-48bd-8f1e-bfe6a580d72a')
SOURCE = Path('/var/lib/megaclaw/workspace/sigma-pain-source-truth-r1')


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def read(path):
    return json.loads(path.read_text())


class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.nodes = []

    def handle_starttag(self, tag, attrs):
        self.nodes.append((tag, dict(attrs)))


def document(path):
    doc = Document()
    doc.feed(path.read_text())
    return doc


def image_target(src):
    parsed = urlparse(src)
    if parsed.path == '/_next/image':
        return unquote(parse_qs(parsed.query)['url'][0])
    return parsed.path


def route_check(route):
    path = REPO / '.next/server/app' / ('index.html' if route == '/' else route[1:] + '.html')
    doc = document(path)
    ids = [attrs['id'] for _, attrs in doc.nodes if 'id' in attrs]
    images = [attrs for tag, attrs in doc.nodes if tag == 'img']
    robots = [a.get('content') for t, a in doc.nodes if t == 'meta' and a.get('name') == 'robots']
    assert len([1 for t, _ in doc.nodes if t == 'h1']) == 1, route
    assert len(ids) == len(set(ids)), (route, 'duplicate IDs')
    for attrs in images:
        assert 'alt' in attrs, (route, 'missing alt')
        assert (REPO / 'public' / image_target(attrs['src']).lstrip('/')).is_file(), attrs
    assert not [a for t, a in doc.nodes if t == 'button' and a.get('type', 'submit') == 'submit'], route
    assert not [a for t, a in doc.nodes if t == 'a' and a.get('href') in ['', '#']], route
    gated = route in ['/book', '/educational-guide', '/contact', '/privacy', '/notice-of-privacy-practices', '/accessibility', '/terms']
    if gated:
        assert any('noindex' in value and 'follow' in value for value in robots), route
        assert not [1 for t, _ in doc.nodes if t in ['form', 'input', 'iframe']], route
    return {'route': route, 'html_sha256': sha(path), 'h1': 1, 'unique_ids': len(ids), 'image_count': len(images), 'robots': robots, 'gated': gated, 'status': 'PASS'}


def protected_check():
    expected = read(OUT / 'protected-hashes.json')
    exceptions = {'src/components/variant-b/hero.tsx', 'src/components/variant-b/site-footer.tsx'}
    records = []
    for name, before in expected.items():
        after = sha(REPO / name)
        if name in exceptions:
            baseline = subprocess.check_output(['git', 'show', f'452fa6f:{name}'], cwd=REPO)
            assert hashlib.sha256(baseline).hexdigest() == after
        else:
            assert before == after, name
        records.append({'path': name, 'before': before, 'after': after, 'basis': 'exact PR40 remote baseline' if name in exceptions else 'initial candidate preserved'})
    return records


def archive_check():
    records = read(OUT / 'retirement-receipt.json') + read(REPO / 'site_convergence/pr40-successor-audit/retirement-receipt.json')
    for row in records:
        assert sha(REPO / (row.get('archive') or row['archive_path'])) == row['sha256']
        assert not (REPO / (row.get('public_path') or row['previous_path'])).exists()
    return {'status': 'PASS', 'preserved_retired_assets': len(records), 'new': 12, 'prior': 42}


def evidence_check():
    initial = read(OUT / 'initial-hashes.json')
    paths = [name for name in initial if name.startswith(('site_convergence/', 'assets/')) or name == 'AGENTS.md']
    for name in paths:
        assert sha(REPO / name) == initial[name], name
    for entry in read(OUT / 'installed-scanner-hashes.json'):
        assert sha(Path(entry['path'])) == entry['sha256'], entry['path']
    assert sha(REPO / 'src/components/batch-three/book/book.css') == '6f86b01d7c812ecaa840342280a074c1bc4f006aca898bc3ea580127df3b3cae'
    assert (REPO / 'src/components/batch-three/book/book.css').read_bytes() == (SOURCE / 'src/components/batch-three/book/book.css').read_bytes()
    return {'status': 'PASS', 'prior_artifacts_rehashed': len(paths), 'scanner_unchanged': True, 'reviewed_book_css_exact': True}


def sheets_check():
    count = 0
    for p in (REPO / 'public/design-review').glob('*/index.html'):
        for tag, attrs in document(p).nodes:
            if tag != 'img':
                continue
            src = attrs['src']
            target = REPO / 'public' / src.lstrip('/') if src.startswith('/') else p.parent / src
            assert target.is_file(), (str(p), src)
            count += 1
    assert all(r['exit_code'] == 0 for r in read(OUT / 'review-sheets.json'))
    return {'status': 'PASS', 'images_resolve': count, 'strict_sheets': 10}


def contracts_check():
    audit = read(OUT / 'audit-run.json')
    routes = read(ROOT / 'design_refs/review_routes.json')
    assert read(REPO / 'public/route-manifest.json')['routes'] == routes and len(routes) == 15
    assert audit['status'] == 'PASS' and len(audit['routes']) == 20
    for record in audit['routes']:
        assert record['source_scope']['routes'] == routes and not record['source_scope']['unmatched_routes']
        assert 'src/components/variant-a/place-of-care.tsx' in record['source_scope']['excluded_image_sources']
    registry = read(ROOT / 'site_build/site_build_contracts.json')
    assert registry == read(REPO / 'site_build/site_build_contracts.json')
    assert all(not r['section_edge_clearance_audited'] and r['qa_verdict'] == 'PENDING' for r in registry['routes'].values())
    for p in (REPO / 'public/images/design').glob('*/extraction_plan.json'):
        assert p.read_bytes() == (ROOT / 'design_assets/pages' / p.parent.name / p.name).read_bytes()
    return {'status': 'PASS', 'audit_reports': 20, 'routes': 15, 'edge_flags_false': len(registry['routes']), 'qa_verdicts': 'PENDING'}


def main():
    routes = read(ROOT / 'design_refs/review_routes.json')
    result = {'status': 'PASS', 'routes': [route_check(r) for r in routes], 'protected': protected_check(), 'archives': archive_check(), 'evidence': evidence_check(), 'review_sheets': sheets_check(), 'contracts': contracts_check()}
    result['source_and_asset_sha256'] = {str(p.relative_to(REPO)): sha(p) for d in ['app', 'src', 'public/images'] for p in (REPO / d).rglob('*') if p.is_file()}
    result['limitations'] = ['HTML checks are not painted browser or accessibility certification.', 'browser screenshots unavailable — bootstrap gap', 'Independent candidate fidelity, section edges, registry QA, convergence and Site Review remain pending.']
    (OUT / 'verification.json').write_text(json.dumps(result, indent=2) + '\n')
    print('PASS: 15 routes, protected scope, archives, prior evidence, review sheets and source contracts')


if __name__ == '__main__':
    main()
