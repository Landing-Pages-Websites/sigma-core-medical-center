"""Offline HTML/bundle verification; no browser or external requests."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from xml.etree import ElementTree

CANONICAL = re.search(r'export const SITE_URL = "([^"]+)"', Path("src/content/site-url.ts").read_text())[1]
BUILD = Path(".next/server/app")


class Markup(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.tags = []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

    def elements(self, tag):
        return [attrs for name, attrs in self.tags if name == tag]


def check_html(slug):
    source = (BUILD / f"{slug}.html").read_text()
    markup = Markup(source)
    canonical = [tag["href"] for tag in markup.elements("link") if tag.get("rel") == "canonical"]
    expected = CANONICAL if slug == "index" else f"{CANONICAL}/{slug}"
    assert canonical == [expected], (slug, canonical)
    optimizer = 'https://cdn.gomega.ai/scripts/optimizer.min.js'
    assert len([tag for tag in markup.elements("script") if tag.get("src") == optimizer]) == 1
    assert source.index("window.MEGA_TAG_CONFIG=") < source.index(f'src="{optimizer}"')
    assert "49774b7nqtttt6ue" in source
    assert "window.API_ENDPOINT=" in source and "window.TRACKING_API_ENDPOINT=" in source
    assert len([tag for tag in markup.elements("script") if tag.get("type") == "application/ld+json"]) == (2 if slug.startswith("blog/") else 1)
    assert len(markup.elements("h1")) == 1, slug
    return markup


def check_form(slug):
    markup = check_html(slug)
    forms = markup.elements("form")
    assert len(forms) == 1 and forms[0]["action"] == "/api/lead", slug
    inputs = markup.elements("input")
    required = [tag for tag in inputs if "required" in tag]
    assert {tag["name"] for tag in required} == {"firstName", "lastName", "email", "phone"}
    labels = {tag.get("for") for tag in markup.elements("label")}
    assert all(tag["id"] in labels and "autocomplete" in tag for tag in required)
    assert len({tag["name"] for tag in inputs}) == len(inputs)
    assert not any(tag.get("type") == "submit" for tag in markup.elements("button"))
    assert not markup.elements("textarea")
    assert any(tag.get("aria-live") == "polite" for tag in markup.elements("div"))
    ids = [attrs["id"] for _, attrs in markup.tags if "id" in attrs]
    assert len(ids) == len(set(ids)), (slug, "duplicate IDs")


inventory = json.loads(Path("src/content/blog/_inventory.json").read_text())
for post in inventory["posts"]:
    check_html(post["target"].lstrip("/"))
for slug in ["index", "services", "contact", "book", "blog", "about", "services/neuropathy", "services/pain-relief"]:
    check_html(slug)
for slug in ["services", "contact"]:
    check_form(slug)

sitemap = ElementTree.fromstring((BUILD / "sitemap.xml.body").read_text())
urls = [element.text for element in sitemap.iter() if element.tag.endswith("}loc")]
assert len(urls) == 52 and len(set(urls)) == 52
assert all(url.startswith(CANONICAL + "/") for url in urls)
assert all(CANONICAL + post["target"] in urls for post in inventory["posts"])
for slug in ["contact", "book", "educational-guide", "privacy", "notice-of-privacy-practices", "accessibility", "terms",
             "services/hormone-optimization", "services/pelvic-floor-incontinence", "services/regenerative-medicine"]:
    markup = Markup((BUILD / f"{slug}.html").read_text())
    assert any(tag.get("name") == "robots" and "noindex" in tag.get("content", "") for tag in markup.elements("meta"))
    assert f"{CANONICAL}/{slug}" not in urls

chunks = "\n".join(path.read_text() for path in Path(".next/static/chunks").glob("*.js"))
for marker in ["lead-pow-v1", "powNonce", "6LfnJvctAAAAAN5cOLIqvKpaw_X5gGZeR8Ys6ux7"]:
    assert marker in chunks, marker
for private in ["LEAD_PROOF_CLAIM_TOKEN", "RECAPTCHA_API_KEY", "TURNSTILE_SECRET", "x-mega-proof-claim-token", "recaptcha-staging-bypass-key"]:
    assert private not in chunks, private
print(json.dumps({"articles": len(inventory["posts"]), "sitemap_urls": len(urls), "forms": 2,
                  "canonical": CANONICAL, "html_a11y": "passed", "client_boundary": "passed"}))
