"""Rebuild lossless Latin delivery subsets from the unchanged bundled originals."""

from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

FONT_DIR = Path(__file__).resolve().parent
LATIN_RANGE = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,"
    "U+0300-036F,U+2000-206F,U+20AC,U+2122,U+2191-2193,U+2197,U+2212,U+2215,"
    "U+FEFF,U+FFFD"
)
FONT_NAMES = (
    "SourceSans3-400", "SourceSans3-600",
    "PlayfairDisplay-500", "PlayfairDisplay-600",
)


def build_subset(name: str) -> None:
    font = TTFont(FONT_DIR / f"{name}.woff2", recalcTimestamp=False)
    options = subset.Options()
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.name_legacy = True
    options.name_languages = ["*"]
    options.glyph_names = True
    options.notdef_outline = True
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=subset.parse_unicodes(LATIN_RANGE))
    subsetter.subset(font)
    # Four originals have .woff2 names but contain raw TrueType data.
    font.flavor = "woff2"
    font.save(FONT_DIR / f"{name}-latin.woff2")


if __name__ == "__main__":
    for font_name in FONT_NAMES:
        build_subset(font_name)
