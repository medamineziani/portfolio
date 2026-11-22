# CV (FR / EN)

One-page CVs, same content as the e-portfolio (`app/src/data/portfolio.ts`).
Single source: the `CONTENT` dict in `build_cv.py`.

| File | What |
|---|---|
| `CV_Mohamed_Amine_Ziani_FR.pdf`, `_EN.pdf` | Final PDFs (also copied to `app/public/cv/`, downloadable on the site) |
| `CV_Mohamed_Amine_Ziani_FR.tex`, `_EN.tex` | LaTeX versions generated from the same data |

## Rebuild

```bash
python cv/build_cv.py --html   # PDF via headless Chrome/Edge (used for the current PDFs)
python cv/build_cv.py          # PDF via pdflatex, if installed
```

The `.tex` files have not been compiled yet (no LaTeX engine was available when they were generated).
Compile them on Overleaf (upload the `.tex`, default pdfLaTeX) or locally with `pdflatex`, and skim the result
before using them; the PDFs in this folder come from the HTML renderer, which was checked page by page.

Before sending: set your school address `prenom.nom@etu.toulouse-inp.fr` in `EMAIL` (required by the CAM course),
then rebuild. Keep dates, titles and project names identical on the CV, LinkedIn and the e-portfolio.
