"""Task-local read-only source/hash check, independent of route_reachability."""
import hashlib
import json
from pathlib import Path
import re
import subprocess

ROOT = Path.cwd()
BASE = '250d324a6caf23b7cbdef533fc493b7613264801'
FREEZE = Path('/var/lib/megaclaw/workspace/.awb-scratch/sigma-owner-final-20261009-r1/approved-home-freeze.json')
HELPER = Path('/var/lib/megaclaw/workspace/skills/website-orchestrator/scripts/route_reachability.py')
AUDIT = 'docs/audit/owner-final-20261009-r1/'
GUIDE = 'src/components/pages/educational-guide/'
EDITED = [GUIDE + 'guide-hero.tsx', GUIDE + 'resource-summary.tsx']
PRIOR = ['app/variant-a/page.tsx', 'app/variant-b/page.tsx',
         'app/services/interior.css', 'src/components/batch-three/book/book.css',
         'app/(site)/educational-guide/page.tsx', GUIDE + 'lead-form-section.tsx',
         GUIDE + 'privacy-note.tsx']
IMPORTS = re.compile(r'''(?:\bfrom\s*|\bimport\s*\(?\s*|\brequire\s*\(\s*|@import\s+)["']([^"']+)["']''')
EXTENSIONS = ['', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.css', '.json']


def digest(path):
    data = path.read_bytes()
    return {'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()}


def committed(path):
    return subprocess.check_output(['git', 'show', f'{BASE}:{path}'])


def resolve_import(importer, spec):
    if spec.startswith('@/'):
        base = ROOT / 'src' / spec[2:]
    elif spec.startswith('.'):
        base = importer.parent / spec
    else:
        return None
    candidates = [Path(str(base) + ext) for ext in EXTENSIONS]
    candidates += [base / ('index' + ext) for ext in EXTENSIONS[1:]]
    matches = [candidate.resolve() for candidate in candidates if candidate.is_file()]
    assert matches, f'Unresolved local import: {importer}: {spec}'
    return matches[0]


def root_closure():
    seen = set()
    queue = [ROOT / 'app/layout.tsx', ROOT / 'app/page.tsx']
    edges = []
    while queue:
        path = queue.pop().resolve()
        if path in seen:
            continue
        seen.add(path)
        for spec in IMPORTS.findall(path.read_text()):
            target = resolve_import(path, spec)
            if target is not None:
                edges.append([str(path.relative_to(ROOT)), str(target.relative_to(ROOT))])
                queue.append(target)
    return sorted(str(path.relative_to(ROOT)) for path in seen), sorted(edges)


freeze = json.loads(FREEZE.read_text())
assert digest(FREEZE)['sha256'] == '5296cb3160526e65ea95a35c41bcf9ae71a98aa2100c0c7c4af1879731a7e002'
assert digest(HELPER)['sha256'] == '8ac142c4c748a317abdfd9657c226ae7ee9358e34b9bebabe589a65538e8269d'
closure, edges = root_closure()
assert 'app/services/interior.css' not in closure
assert not any(path.startswith('app/(') for path in closure)
assert not any('interior-header' in path for path in closure)
protected = freeze['protected_files']
for path in closure:
    assert path in protected, f'Actual Home import missing from initial freeze: {path}'
    assert digest(ROOT / path) == protected[path], f'Home import changed: {path}'
mismatches = {path: {'expected': expected, 'actual': digest(ROOT / path)}
              for path, expected in protected.items() if digest(ROOT / path) != expected}
assert set(mismatches) == {'app/services/interior.css'}, mismatches
assert mismatches['app/services/interior.css']['actual']['sha256'] == 'aa8182a17a78bcc23968c48eda0dc6ecb6bdbcbcfbc379b554e45ddadcfbe651'
for path in PRIOR:
    assert (ROOT / path).read_bytes() == committed(path), f'Prior fix changed: {path}'
for path in EDITED:
    before, after = committed(path).decode(), (ROOT / path).read_text()
    for pattern in [r'className="[^"]*"', r'\bid="[^"]*"', r'<Image\b[^>]*?/>',
                    r'<(?:TallBracket|CornerStripes|StairSteps)\b[^>]*?/>',
                    r'icon: \w+', r'<(?:FileText|Icon)\b[^>]*?/>']:
        assert re.findall(pattern, before) == re.findall(pattern, after), (path, pattern)
    assert not re.search(r'<(?:form|input|textarea|select)\b|fetch\(|XMLHttpRequest|:\s*any\b|console\.|debugger', after)
assert (ROOT / 'next-env.d.ts').read_bytes() == committed('next-env.d.ts').replace(b'./.next/dev/types/', b'./.next/types/')
changed = subprocess.check_output(['git', 'diff', BASE, '--name-only'], text=True).splitlines()
assert set(path for path in changed if not path.startswith(AUDIT)) == set(EDITED + ['next-env.d.ts']), changed
for path in subprocess.check_output(['git', 'ls-tree', '-r', '--name-only', BASE, AUDIT], text=True).splitlines():
    assert (ROOT / path).read_bytes() == committed(path), f'Historical evidence changed: {path}'
untracked = subprocess.check_output(['git', 'ls-files', '--others', '--exclude-standard'], text=True).splitlines()
assert all(path.startswith(AUDIT) for path in untracked), untracked
report = {
    'base': BASE,
    'actual_home_roots': ['app/layout.tsx', 'app/page.tsx'],
    'actual_home_source_count': len(closure),
    'actual_home_sources': closure,
    'actual_home_import_edges': edges,
    'actual_home_source_hashes': {path: digest(ROOT / path) for path in closure},
    'all_actual_home_source_hashes_match_initial_freeze': True,
    'protected_files_checked': len(protected),
    'protected_public_and_font_files_checked': sum(path.startswith('public/') or path.endswith(('.woff', '.woff2', '.ttf', '.otf')) for path in protected),
    'all_other_protected_hashes_match': True,
    'sole_authorized_non_home_mismatch': mismatches,
    'overincluded_sources': sorted(set(freeze['source_closure']) - set(closure)),
    'prior_seven_fixes_unchanged': PRIOR,
    'classes_images_icons_motifs_and_anchors_unchanged': EDITED,
    'exact_generated_two_line_production_path_diff': True,
    'freeze_sha256': digest(FREEZE)['sha256'],
    'canonical_helper_sha256': digest(HELPER)['sha256'],
    'tracked_changes_from_base': changed,
    'note': 'Static imported-source and byte evidence only; no rendered or all-732-files-match claim.',
}
print(json.dumps(report, indent=2))
