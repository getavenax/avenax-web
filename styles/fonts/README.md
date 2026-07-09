# Font License Verification Record

> Mandated by `docs/BRAND_DNA.md` §4.3. Every face self-hosted; zero third-party font requests at runtime.
> Verified by: Claude (AVENAX engineering session), 2026-07-09.

| Family | File | Source | License | Verified |
|---|---|---|---|---|
| Archivo (variable, wght 100–900, latin subset) | `archivo/Archivo-Variable-latin.woff2` | fonts.gstatic.com (Google Fonts v25, unmodified) | SIL OFL 1.1 (`LICENSE-OFL.txt`) | 2026-07-09 |
| Instrument Sans (variable, wght 400–700, latin subset) | `instrument-sans/InstrumentSans-Variable-latin.woff2` | fonts.gstatic.com (Google Fonts v4, unmodified) | SIL OFL 1.1 (`LICENSE-OFL.txt`) | 2026-07-09 |
| Geist Mono (variable, wght 100–900, latin subset) | `geist-mono/GeistMono-Variable-latin.woff2` | fonts.gstatic.com (Google Fonts v6, unmodified) | SIL OFL 1.1 (`LICENSE-OFL.txt`) | 2026-07-09 |

## Verification notes

- **All three faces (OFL 1.1):** commercial use, self-hosting, and redistribution of unmodified files with the license text are all expressly permitted. No Reserved Font Name is declared in any copyright line. Files are Google Fonts' latin-subset variable builds, redistributed unmodified. **No restrictions relevant to this repository — the font directory is 100% OFL.**
- **Cabinet Grotesk (removed 2026-07-09, ADR-017):** the original display face's Fontshare FF EULA §02 prohibits distribution ("uploading them in a public server"), which is incompatible with this public repository (ADR-013). Founder decision: replaced with the pre-approved OFL fallback **Archivo** (`docs/BRAND_DNA.md` §4.3). No Fontshare files or license texts remain in the repository. Secondary fallback if Archivo shows visual issues: Familjen Grotesk (OFL).
- Latin subsets (Google builds) retain arrows (↑↓), euro (€), minus (−), and general punctuation — sufficient for product data surfaces; latin-ext can be added later as separate files.
- Fonts are loaded exclusively through `next/font/local` in `app/layout.tsx` (build-time self-hosting, preload, zero CLS). Files live here — **not** in `public/` — so they ship once, as hashed immutable assets.
