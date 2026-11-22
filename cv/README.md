# CV — LaTeX source

`cv_mohamed_amine_ziani.tex` — one-page French CV, content and branding (cyan
accent) matched to the e-portfolio in `app/`. Built with plain `article` +
`tabularx` + `fontawesome5` + `babel[french]` — compiles with standard
pdfLaTeX, no XeLaTeX/LuaLaTeX or special fonts required.

## Compile (no install needed)

1. Go to [overleaf.com](https://www.overleaf.com) → **New Project** → **Upload Project** (or **Blank Project** then replace `main.tex` with this file's content).
2. Click **Recompile**. Done — download the PDF from there.

## Compile locally (optional)

Needs a TeX distribution (MiKTeX on Windows, TeX Live on Linux/Mac):

```bash
pdflatex cv_mohamed_amine_ziani.tex
pdflatex cv_mohamed_amine_ziani.tex   # run twice so the header rule/links settle
```

## Updating it

Content mirrors `app/src/data/portfolio.ts` — when that file changes
(new internship, project, skill...), update this `.tex` to match so the CV
and the e-portfolio never drift apart. Keep it to one page: trim a project
or a bullet before shrinking margins/font size.

This file was not auto-compiled when generated (no LaTeX engine was
available in that environment) — compile once via Overleaf and skim the
PDF before sending it anywhere; if it spills onto a second page, drop the
"Agent IA de recherche de logement" project entry first.
