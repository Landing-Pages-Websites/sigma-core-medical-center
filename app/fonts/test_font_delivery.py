"""Run with python3 -m unittest discover -s app/fonts -p 'test_*.py'."""

import hashlib
import re
import unittest

from fontTools import subset
from fontTools.pens.recordingPen import DecomposingRecordingPen
from fontTools.ttLib import TTFont

from subset_latin import FONT_DIR, FONT_NAMES, LATIN_RANGE

ORIGINAL_HASHES = {
    "SourceSans3-400": "b6f2cc8d9905e97b5cd7a294367bb529814385f299fb23057060394cbd6bbffb",
    "SourceSans3-600": "26efb7fbad9540df2595fe867a37e454d22973b9e37816d263fdc5295cb084bb",
    "SourceSans3-700": "ae35266f2ab0d5314ff9a04127931eb26c793e4f1269bb240046d4d2db4b7bb1",
    "PlayfairDisplay-500": "b60ffb0ee2b4e09d71d67ff3ea16d6a23cf2e0cf637c5f4e36fff2e3b1465252",
    "PlayfairDisplay-600": "8ab6a1db2d7caeb46c742371da500d0f3de1dc6ec6bea2aef0106f678d7a1f8d",
}


class FontDeliveryTests(unittest.TestCase):
    def test_originals_including_existing_heavy_cut_are_byte_identical(self) -> None:
        for name, digest in ORIGINAL_HASHES.items():
            self.assertEqual(hashlib.sha256((FONT_DIR / f"{name}.woff2").read_bytes()).hexdigest(), digest)

    def test_compact_cmap_is_exact_original_intersection(self) -> None:
        covered = set(subset.parse_unicodes(LATIN_RANGE))
        for name in FONT_NAMES:
            original = TTFont(FONT_DIR / f"{name}.woff2").getBestCmap()
            compact = TTFont(FONT_DIR / f"{name}-latin.woff2").getBestCmap()
            self.assertEqual(compact, {cp: glyph for cp, glyph in original.items() if cp in covered})
            self.assertEqual(set(compact) | (set(original) - covered), set(original))

    def test_every_retained_glyph_preserves_outline_metrics_and_hinting(self) -> None:
        for name in FONT_NAMES:
            original = TTFont(FONT_DIR / f"{name}.woff2")
            compact = TTFont(FONT_DIR / f"{name}-latin.woff2")
            for glyph in compact.getGlyphOrder():
                with self.subTest(font=name, glyph=glyph):
                    pens = [DecomposingRecordingPen(font.getGlyphSet()) for font in (original, compact)]
                    for font, pen in zip((original, compact), pens):
                        font.getGlyphSet()[glyph].draw(pen)
                    self.assertEqual(pens[0].value, pens[1].value)
                    self.assertEqual(original["hmtx"][glyph], compact["hmtx"][glyph])
                    for font in (original, compact):
                        font["glyf"][glyph].expand(font["glyf"])
                    programs = [getattr(font["glyf"][glyph], "program", None) for font in (original, compact)]
                    self.assertEqual(*[program.getBytecode() if program else b"" for program in programs])

    def test_global_metrics_and_license_records_are_preserved(self) -> None:
        fields = {"head": ["unitsPerEm"], "hhea": ["ascent", "descent", "lineGap"],
                  "OS/2": ["sTypoAscender", "sTypoDescender", "sTypoLineGap", "usWinAscent", "usWinDescent"]}
        for name in FONT_NAMES:
            fonts = [TTFont(FONT_DIR / f"{name}{suffix}.woff2") for suffix in ("", "-latin")]
            for table, keys in fields.items():
                for key in keys:
                    self.assertEqual(*[getattr(font[table], key) for font in fonts])
            licenses = [{(n.nameID, n.platformID, n.platEncID, n.langID, n.toUnicode())
                         for n in font["name"].names if n.nameID in (0, 13, 14)} for font in fonts]
            self.assertEqual(*licenses)

    def test_subsets_are_real_woff2_and_reduce_payload(self) -> None:
        for name in FONT_NAMES:
            compact = (FONT_DIR / f"{name}-latin.woff2").read_bytes()
            self.assertEqual(compact[:4], b"wOF2")
            self.assertLess(len(compact), (FONT_DIR / f"{name}.woff2").stat().st_size / 3)

    def test_css_routes_all_other_unicode_to_the_original_same_family(self) -> None:
        css = (FONT_DIR.parent / "globals.css").read_text()
        config = (FONT_DIR.parents[1] / "src/lib/fonts.ts").read_text()
        expected_full = set(range(0x110000)) - set(subset.parse_unicodes(LATIN_RANGE))
        self.assertEqual(config.count(f'value: "{LATIN_RANGE}"'), 2)
        for name in FONT_NAMES:
            family = "Sigma Source Sans Full" if name.startswith("Source") else "Sigma Playfair Full"
            block = next(block for block in re.findall(r"@font-face\s*\{([^}]+)\}", css)
                         if f"/{name}.woff2" in block)
            full_range = re.search(r"unicode-range:\s*([^;]+)", block).group(1)
            self.assertEqual(set(subset.parse_unicodes(full_range)), expected_full)
            self.assertIn(f'font-family: "{family}"', block)
            self.assertIn(f'fallback: ["{family}"', config)
            self.assertIn(f'font-weight: {name.rsplit("-", 1)[1]}', block)


if __name__ == "__main__":
    unittest.main()
