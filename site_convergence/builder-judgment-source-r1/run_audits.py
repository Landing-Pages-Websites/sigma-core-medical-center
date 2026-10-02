"""Unchanged installed handoff audit, exact declared-route scope, no allowances."""
import hashlib
import json
import shlex
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
ROOT = Path('/var/lib/megaclaw/workspace/website-lp-build-research-data/b380819e-88b6-48bd-8f1e-bfe6a580d72a')
SCANNER = Path('/var/lib/megaclaw/workspace/skills/website-orchestrator/scripts/audit_design_handoff.py')
ROUTES = ROOT / 'design_refs/review_routes.json'


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def run_route(slug, plan_set):
    refs = ROOT / 'design_refs/pages' / slug
    plan = ((ROOT / 'design_assets/pages') if plan_set == 'canonical' else (REPO / 'public/images/design')) / slug / 'extraction_plan.json'
    directory = OUT / 'audits' / plan_set
    directory.mkdir(parents=True, exist_ok=True)
    report = directory / f'{slug}.json'
    inputs = [SCANNER, SCANNER.with_name('design_handoff_schema.py'), SCANNER.with_name('route_reachability.py'), refs / 'section_manifest.json', refs / 'composition_map.json', plan, ROUTES]
    argv = [sys.executable, str(SCANNER), '--manifest', str(inputs[3]), '--composition-map', str(inputs[4]), '--extraction-plan', str(plan), '--assets-dir', str(REPO / 'public/images/design' / slug), '--source-root', str(REPO), '--routes-file', str(ROUTES), '--out', str(report), '--check']
    result = subprocess.run(argv, cwd=REPO, capture_output=True, text=True, timeout=120)
    (directory / f'{slug}.log').write_text(result.stdout + result.stderr)
    payload = json.loads(report.read_text())
    print(plan_set, slug, payload['checks'], flush=True)
    return {'slug': slug, 'plan_set': plan_set, 'argv': argv, 'command_sha256': hashlib.sha256(shlex.join(argv).encode()).hexdigest(), 'exit_code': result.returncode, 'status': payload['status'], 'checks': payload['checks'], 'input_sha256': {str(p): sha(p) for p in inputs}, 'report_sha256': sha(report), 'source_scope': payload.get('source_scope')}


def main():
    slugs = sorted(p.parent.name for p in (REPO / 'public/images/design').glob('*/extraction_plan.json'))
    results = [run_route(slug, kind) for kind in ['canonical', 'repository'] for slug in slugs]
    status = 'PASS' if all(r['exit_code'] == 0 and r['status'] == 'PASS' for r in results) else 'FAIL'
    (OUT / 'audit-run.json').write_text(json.dumps({'status': status, 'routes': results}, indent=2) + '\n')
    return 0 if status == 'PASS' else 1


if __name__ == '__main__':
    sys.exit(main())
