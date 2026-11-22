"""Build the CV in French and English (one A4 page each) as PDF.

Single source of truth: the CONTENT dict below. Rendering = LaTeX (preferred) or HTML +
headless Chrome/Edge as a fallback.

    python cv/build_cv.py            # LaTeX (pdflatex) -> cv/CV_Mohamed_Amine_Ziani_{FR,EN}.{tex,pdf}
    python cv/build_cv.py --html     # force the HTML/Chrome renderer
                                     # PDFs are also copied to app/public/cv/

Keep names/dates identical to app/src/data/portfolio.ts (CV, LinkedIn and the
e-portfolio must say the same thing).
"""
import html
import pathlib
import shutil
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent
OUT = ROOT
PUBLIC = ROOT.parent / "app" / "public" / "cv"

# --- contact (edit here) ------------------------------------------------------
# The CAM course requires the school address prenom.nom@etu.toulouse-inp.fr on
# the CV. Replace EMAIL with it once you have confirmed the exact address.
EMAIL = "medamine.ziani85@gmail.com"
PHONE = "+33 7 73 96 39 17"
LINKEDIN = "linkedin.com/in/mohamed-amine-ziani"
GITHUB = "github.com/medamineziani"
SITE = "medamineziani.github.io/portfolio"

GH = "https://github.com/medamineziani/"

CONTENT = {
    "fr": {
        "lang": "fr",
        "title": "Élève-ingénieur ENSEEIHT — Architecture des Ordinateurs et Réseaux (ASR)",
        "avail": "Recherche un stage de 2 mois entre juin et septembre 2027",
        "city": "Toulouse, France",
        "h_profile": "Profil",
        "profile": (
            "Élève-ingénieur en 2ᵉ année à l'ENSEEIHT (ASR), issu des CPGE scientifiques au Maroc. "
            "Je conçois des systèmes de bout en bout : VHDL sur FPGA et C système (fork/exec, tubes, signaux), "
            "réseaux Cisco (VLAN, OSPF, QoS), vision par ordinateur et applications web. "
            "Deux stages en entreprise (réseau IT, Industrie 4.0)."
        ),
        "h_edu": "Formation",
        "edu": [
            ("ENSEEIHT · INP Toulouse — 2ᵉ année ingénieur, Architecture des Ordinateurs et Réseaux (ASR)", "2026 – présent",
             "Architecture des systèmes, réseaux, systèmes d'exploitation, sécurité informatique"),
            ("ENSEEIHT · INP Toulouse — 1ʳᵉ année ingénieur, Sciences du Numérique", "2025 – 2026",
             "Algorithmique, programmation, bases de données, réseaux, systèmes d'exploitation"),
            ("CPGE scientifique (Maroc) — Mathématiques, Physique, Informatique", "2023 – 2025",
             "Baccalauréat Sciences Mathématiques B, mention Bien (2023)"),
        ],
        "h_exp": "Expérience professionnelle",
        "exp": [
            {
                "title": "Ingénieur informatique (stage) — AGRIDATA CONSULTING, équipe PackOne",
                "date": "Juil. 2026 · 3 mois",
                "sub": "Région d'Agadir (hybride) · Deux projets Industrie 4.0",
                "bullets": [
                    "Simulateur IoT client/serveur en Python/C (sockets TCP/IP) d'une balance industrielle et d'un scanner de palettes (poids brut, identifiant de contenant).",
                    "Conception de l'infrastructure réseau cible d'une station de conditionnement sous Cisco Packet Tracer : segmentation VLAN, routage dynamique OSPF, QoS priorisant le trafic de pesée temps réel.",
                    "PoC Python/OpenCV de contrôle qualité des palettes (hauteur, nombre de couches de cartons) depuis une caméra en plongée, validé face à une configuration de référence par type de palette.",
                ],
            },
            {
                "title": "Ingénieur réseaux IT (stage) — FIRST COMPÉTENCE",
                "date": "Juin 2026 · 1 mois",
                "sub": "Agadir (sur site) · Infrastructure IT et administration réseau",
                "bullets": [
                    "Analyse de l'architecture réseau, adressage IP, VLANs, configuration DHCP/DNS, dépannage et sécurité réseau ; documentation de l'infrastructure IT de l'entreprise.",
                ],
            },
        ],
        "h_proj": "Projets",
        "proj": [
            ("Contrôleur SPI pour joystick sur FPGA", "VHDL · Nexys 4 DDR", "fpga-joystick-spi",
             "Maître SPI : échange d'un octet (automate à états), trames de 3 puis 5 octets décodant axes X/Y sur 10 bits et 3 boutons du Pmod JSTK, banc de test."),
            ("Minishell : interpréteur de commandes", "C · POSIX", "minishell",
             "fork/execvp/waitpid, pipelines, redirections <, > et >>, jobs en arrière-plan, SIGCHLD/SIGINT ; compilé en -Wall -Wextra -Werror."),
            ("PowerForm AI", "Next.js · TypeScript · Supabase · Stripe", "powerform-ai",
             "MVP SaaS d'analyse vidéo de powerlifting par IA : authentification et base Supabase, paiements Stripe, API Claude, rapports PDF, déployé sur Vercel."),
            ("Medora : SaaS de gestion de cabinet médical", "Next.js · Prisma · PostgreSQL", None,
             "SaaS multi-cabinets (isolation des données par cabinet), rôles Titulaire/Médecin/Secrétaire, agenda, facturation, rappels."),
            ("Laboratoire de Cybersécurité", "Kali Linux · VirtualBox", None,
             "Environnement de pentest isolé (VM Kali + cible Ubuntu) : reconnaissance, exploitation, post-exploitation."),
        ],
        "h_skills": "Compétences",
        "skills": [
            ("Langages", "C, Python, Java, SQL, VHDL, TypeScript"),
            ("Systèmes & réseaux", "Linux, POSIX (fork/exec, tubes, signaux), TCP/IP, VLAN, OSPF, QoS, DHCP/DNS, Cisco Packet Tracer"),
            ("Architecture", "VHDL, FPGA (Nexys 4 DDR), automates à états, GHDL"),
            ("IA & vision", "OpenCV, MediaPipe, YOLO, API Claude"),
            ("Web & données", "Next.js, React, Prisma, PostgreSQL, Pandas, NumPy"),
            ("Sécurité & outils", "Kali Linux (pentest), Git, Docker, LaTeX · Agile, tests unitaires, revue de code"),
        ],
        "h_lead": "Engagement",
        "lead": ("Responsable BDE (Bureau des Élèves) et délégué de classe — CPGE, Maroc", "2023 – 2025",
                 "Ateliers maths/informatique pour 10 à 20 participants, supports pédagogiques, coordination d'événements ; médiation avec l'administration."),
        "h_misc": "Langues & centres d'intérêt",
        "langs": "Français (langue maternelle) · Anglais (courant) · Arabe (courant) · Tamazight (courant)",
        "interests": "Powerlifting · Natation · Football · LeetCode / Codeforces · Veille IA · Open source",
    },
    "en": {
        "lang": "en",
        "title": "Engineering Student, ENSEEIHT — Computer Architecture & Networks (ASR)",
        "avail": "Seeking a 2-month internship between June and September 2027",
        "city": "Toulouse, France",
        "h_profile": "Profile",
        "profile": (
            "2nd-year engineering student at ENSEEIHT (ASR), coming from scientific preparatory classes in Morocco. "
            "I build systems end to end: VHDL on FPGA and systems C (fork/exec, pipes, signals), "
            "Cisco networking (VLAN, OSPF, QoS), computer vision and web applications. "
            "Two company internships (IT networking, Industry 4.0)."
        ),
        "h_edu": "Education",
        "edu": [
            ("ENSEEIHT · INP Toulouse — 2nd-year engineering, Computer Architecture & Networks (ASR)", "2026 – present",
             "Systems architecture, networks, operating systems, computer security"),
            ("ENSEEIHT · INP Toulouse — 1st-year engineering, Digital Sciences", "2025 – 2026",
             "Algorithms, programming, databases, networks, operating systems"),
            ("Scientific preparatory classes (CPGE, Morocco) — Mathematics, Physics, Computer Science", "2023 – 2025",
             "Baccalaureate, Mathematical Sciences B, with honors (2023)"),
        ],
        "h_exp": "Professional experience",
        "exp": [
            {
                "title": "Computer Engineer (internship) — AGRIDATA CONSULTING, PackOne team",
                "date": "Jul 2026 · 3 mos",
                "sub": "Agadir area (hybrid) · Two Industry 4.0 projects",
                "bullets": [
                    "Built a client/server IoT simulator in Python/C (TCP/IP sockets) for an industrial scale and a pallet scanner (gross weight, container ID).",
                    "Designed the target network of a packaging station in Cisco Packet Tracer: VLAN segmentation, OSPF dynamic routing, QoS prioritizing real-time weighing traffic.",
                    "Developed a Python/OpenCV PoC for pallet quality control (height, number of carton layers) from an overhead camera, validated against a reference configuration per pallet type.",
                ],
            },
            {
                "title": "IT Network Engineer (internship) — FIRST COMPÉTENCE",
                "date": "Jun 2026 · 1 mo",
                "sub": "Agadir (on site) · IT infrastructure and network administration",
                "bullets": [
                    "Analyzed the network architecture, IP addressing, VLANs, DHCP/DNS configuration, troubleshooting and network security; documented the company's IT infrastructure.",
                ],
            },
        ],
        "h_proj": "Projects",
        "proj": [
            ("SPI Joystick Controller on FPGA", "VHDL · Nexys 4 DDR", "fpga-joystick-spi",
             "SPI master: single-byte exchange (state machine), then 3- and 5-byte frames decoding the Pmod JSTK's 10-bit X/Y axes and 3 buttons, with a testbench."),
            ("Minishell: Command Interpreter", "C · POSIX", "minishell",
             "fork/execvp/waitpid, pipelines, <, > and >> redirections, background jobs, SIGCHLD/SIGINT; built with -Wall -Wextra -Werror."),
            ("PowerForm AI", "Next.js · TypeScript · Supabase · Stripe", "powerform-ai",
             "SaaS MVP for AI powerlifting video analysis: Supabase auth and database, Stripe payments, Claude API, PDF reports, deployed on Vercel."),
            ("Medora: Medical Practice SaaS", "Next.js · Prisma · PostgreSQL", None,
             "Multi-practice SaaS (per-practice data isolation), Owner/Doctor/Secretary roles, scheduling, billing, reminders."),
            ("Cybersecurity Lab", "Kali Linux · VirtualBox", None,
             "Isolated pentesting environment (Kali VM + Ubuntu target): reconnaissance, exploitation, post-exploitation."),
        ],
        "h_skills": "Skills",
        "skills": [
            ("Languages", "C, Python, Java, SQL, VHDL, TypeScript"),
            ("Systems & networks", "Linux, POSIX (fork/exec, pipes, signals), TCP/IP, VLAN, OSPF, QoS, DHCP/DNS, Cisco Packet Tracer"),
            ("Architecture", "VHDL, FPGA (Nexys 4 DDR), finite-state machines, GHDL"),
            ("AI & vision", "OpenCV, MediaPipe, YOLO, Claude API"),
            ("Web & data", "Next.js, React, Prisma, PostgreSQL, Pandas, NumPy"),
            ("Security & tools", "Kali Linux (pentesting), Git, Docker, LaTeX · Agile, unit testing, code review"),
        ],
        "h_lead": "Leadership",
        "lead": ("BDE Lead (Student Union) and class representative — CPGE, Morocco", "2023 – 2025",
                 "Ran math/CS workshops for 10–20 participants, created teaching materials, coordinated events; mediated with the administration."),
        "h_misc": "Languages & interests",
        "langs": "French (native) · English (fluent) · Arabic (fluent) · Tamazight (fluent)",
        "interests": "Powerlifting · Swimming · Football · LeetCode / Codeforces · AI watch · Open source",
    },
}

CSS = """
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { width: 210mm; height: 297mm; padding: 10mm 13mm 9mm; font-family: "Segoe UI", Arial, Helvetica, sans-serif;
       font-size: 8.9pt; line-height: 1.32; color: #1f2937; overflow: hidden; }
header { text-align: center; padding-bottom: 5px; border-bottom: 1.4px solid #0e7490; }
h1 { margin: 0; font-size: 21pt; letter-spacing: .2px; color: #111827; }
.title { margin: 2px 0 1px; font-size: 10.2pt; font-weight: 600; color: #0e7490; }
.avail { margin: 0 0 4px; font-size: 8.8pt; font-weight: 600; color: #374151; }
.contact { font-size: 8.4pt; color: #374151; display: flex; flex-wrap: wrap; justify-content: center; column-gap: 7px; }
.contact span { white-space: nowrap; }
.contact span:not(:last-child)::after { content: "|"; margin-left: 7px; color: #9ca3af; }
h2 { margin: 7px 0 3px; font-size: 9.6pt; font-weight: 700; letter-spacing: .6px; text-transform: uppercase;
     color: #0e7490; border-bottom: 1px solid #0e7490; padding-bottom: 1px; }
p { margin: 0; }
.row { display: flex; justify-content: space-between; gap: 10px; }
.row .l { font-weight: 700; color: #111827; }
.row .r { white-space: nowrap; color: #4b5563; font-style: italic; }
.sub { color: #4b5563; font-style: italic; }
.entry { margin-bottom: 3px; }
ul { margin: 1px 0 0; padding-left: 13px; }
li { margin: 0; padding-left: 1px; }
li::marker { color: #0e7490; }
.tag { color: #0e7490; font-weight: 600; }
.link { color: #0e7490; }
.skills { display: grid; grid-template-columns: 33mm 1fr; column-gap: 6px; row-gap: 1px; }
.skills b { color: #111827; }
.misc b { color: #111827; }
"""


def e(s: str) -> str:
    return html.escape(s, quote=False)


def render(c: dict) -> str:
    out = [f'<!doctype html><html lang="{c["lang"]}"><head><meta charset="utf-8">'
           f'<title>CV - Mohamed Amine Ziani</title><style>{CSS}</style></head><body>']
    out.append(
        f'<header><h1>Mohamed Amine Ziani</h1><div class="title">{e(c["title"])}</div>'
        f'<div class="avail">{e(c["avail"])}</div>'
        f'<div class="contact"><span>{e(EMAIL)}</span><span>{e(PHONE)}</span><span>{e(c["city"])}</span>'
        f'<span>{e(LINKEDIN)}</span><span>{e(GITHUB)}</span><span>{e(SITE)}</span></div></header>'
    )
    out.append(f'<h2>{e(c["h_profile"])}</h2><p>{e(c["profile"])}</p>')

    out.append(f'<h2>{e(c["h_edu"])}</h2>')
    for t, d, s in c["edu"]:
        out.append(f'<div class="entry"><div class="row"><span class="l">{e(t)}</span><span class="r">{e(d)}</span></div>'
                   f'<div class="sub">{e(s)}</div></div>')

    out.append(f'<h2>{e(c["h_exp"])}</h2>')
    for x in c["exp"]:
        lis = "".join(f"<li>{e(b)}</li>" for b in x["bullets"])
        out.append(f'<div class="entry"><div class="row"><span class="l">{e(x["title"])}</span><span class="r">{e(x["date"])}</span></div>'
                   f'<div class="sub">{e(x["sub"])}</div><ul>{lis}</ul></div>')

    out.append(f'<h2>{e(c["h_proj"])}</h2>')
    for name, stack, repo, desc in c["proj"]:
        link = f'<span class="r link">github.com/medamineziani/{e(repo)}</span>' if repo else ""
        out.append(f'<div class="entry"><div class="row"><span><span class="l">{e(name)}</span> '
                   f'<span class="tag">· {e(stack)}</span></span>{link}</div><div>{e(desc)}</div></div>')

    out.append(f'<h2>{e(c["h_skills"])}</h2><div class="skills">')
    for k, v in c["skills"]:
        out.append(f"<b>{e(k)}</b><span>{e(v)}</span>")
    out.append("</div>")

    t, d, s = c["lead"]
    out.append(f'<h2>{e(c["h_lead"])}</h2><div class="entry"><div class="row"><span class="l">{e(t)}</span>'
               f'<span class="r">{e(d)}</span></div><div>{e(s)}</div></div>')

    lang_label = "Langues" if c["lang"] == "fr" else "Languages"
    int_label = "Centres d'intérêt" if c["lang"] == "fr" else "Interests"
    out.append(f'<h2>{e(c["h_misc"])}</h2><div class="misc"><b>{lang_label} :</b> {e(c["langs"])}<br>'
               f'<b>{int_label} :</b> {e(c["interests"])}</div>')
    out.append("</body></html>")
    return "".join(out)



# --- LaTeX rendering (preferred: needs pdflatex) -----------------------------------------------
_TEX_MAP = {"\\": r"\textbackslash{}", "&": r"\&", "%": r"\%", "$": r"\$", "#": r"\#", "_": r"\_",
            "{": r"\{", "}": r"\}", "~": r"\textasciitilde{}", "^": r"\textasciicircum{}",
            "<": r"\textless{}", ">": r"\textgreater{}", "|": r"\textbar{}",
            "ᵉ": r"\textsuperscript{e}", "ʳ": r"\textsuperscript{r}"}


def tx(s: str) -> str:
    return "".join(_TEX_MAP.get(ch, ch) for ch in s)


TEX_PREAMBLE = r"""\documentclass[10pt,a4paper]{article}
\usepackage[top=9mm,bottom=8mm,left=13mm,right=13mm]{geometry}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage[%(babel)s]{babel}
\usepackage{tgheros}
\renewcommand{\familydefault}{\sfdefault}
\usepackage{xcolor}
\definecolor{accent}{HTML}{0E7490}
\definecolor{darktext}{HTML}{1F2937}
\definecolor{graytext}{HTML}{4B5563}
\color{darktext}
\usepackage{hyperref}
\hypersetup{colorlinks=true,urlcolor=accent,linkcolor=accent,pdftitle={CV - Mohamed Amine Ziani}}
\usepackage{enumitem}
\setlist[itemize]{leftmargin=11pt,itemsep=0pt,topsep=1pt,parsep=0pt,label=\textcolor{accent}{\textbullet}}
\usepackage{tabularx}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}
\pagestyle{empty}
\newcommand{\sect}[1]{\vspace{5pt}{\color{accent}\bfseries\fontsize{9.6}{11}\selectfont\MakeUppercase{#1}}\\[-1pt]{\color{accent}\rule{\linewidth}{0.7pt}}\vspace{2pt}\par}
\newcommand{\row}[2]{\noindent{\bfseries #1}\hfill{\color{graytext}\itshape #2}\par}
"""


def render_tex(c: dict) -> str:
    babel = "french" if c["lang"] == "fr" else "english"
    o = [TEX_PREAMBLE % {"babel": babel}, r"\begin{document}", r"\fontsize{8.9}{11.4}\selectfont"]
    sep = r"\ \textcolor{graytext}{\textbar}\ "
    contact = sep.join([
        rf"\href{{mailto:{EMAIL}}}{{{tx(EMAIL)}}}", tx(PHONE), tx(c["city"]),
        rf"\href{{https://{LINKEDIN}}}{{{tx(LINKEDIN)}}}", rf"\href{{https://{GITHUB}}}{{{tx(GITHUB)}}}",
        rf"\href{{https://{SITE}}}{{{tx(SITE)}}}",
    ])
    o.append(
        r"\begin{center}{\fontsize{21}{23}\selectfont\bfseries Mohamed Amine Ziani}\\[2pt]"
        rf"{{\fontsize{{10.2}}{{12}}\selectfont\bfseries\color{{accent}} {tx(c['title'])}}}\\[1pt]"
        rf"{{\bfseries {tx(c['avail'])}}}\\[3pt]{{\fontsize{{8.4}}{{10}}\selectfont {contact}}}\end{{center}}"
        r"\vspace{-6pt}{\color{accent}\rule{\linewidth}{1.2pt}}"
    )
    o.append(rf"\sect{{{tx(c['h_profile'])}}}{tx(c['profile'])}")
    o.append(rf"\sect{{{tx(c['h_edu'])}}}")
    for t, d, sub in c["edu"]:
        o.append(rf"\row{{{tx(t)}}}{{{tx(d)}}}" + "\n" + rf"{{\color{{graytext}}\itshape {tx(sub)}}}\par\vspace{{2pt}}")
    o.append(rf"\sect{{{tx(c['h_exp'])}}}")
    for x in c["exp"]:
        items = "\n".join(rf"\item {tx(b)}" for b in x["bullets"])
        o.append(rf"\row{{{tx(x['title'])}}}{{{tx(x['date'])}}}" + "\n"
                 + rf"{{\color{{graytext}}\itshape {tx(x['sub'])}}}" + "\n"
                 + rf"\begin{{itemize}}{items}\end{{itemize}}\vspace{{2pt}}")
    o.append(rf"\sect{{{tx(c['h_proj'])}}}")
    for name, stack, repo, desc in c["proj"]:
        right = rf"\href{{https://github.com/medamineziani/{repo}}}{{github.com/medamineziani/{repo}}}" if repo else ""
        o.append(rf"\noindent{{\bfseries {tx(name)}}} {{\bfseries\color{{accent}}$\cdot$ {tx(stack)}}}\hfill{{\itshape {right}}}\par"
                 + "\n" + rf"{tx(desc)}\par\vspace{{2pt}}")
    o.append(rf"\sect{{{tx(c['h_skills'])}}}")
    rows = r"\\[1pt]".join(rf"\textbf{{{tx(k)}}} & {tx(v)}" for k, v in c["skills"])
    o.append(rf"\begin{{tabularx}}{{\linewidth}}{{@{{}}>{{\raggedright\arraybackslash}}p{{29mm}}X@{{}}}}{rows}\end{{tabularx}}")
    t, d, sub = c["lead"]
    o.append(rf"\sect{{{tx(c['h_lead'])}}}\row{{{tx(t)}}}{{{tx(d)}}}" + "\n" + rf"{tx(sub)}\par")
    ll = "Langues" if c["lang"] == "fr" else "Languages"
    il = "Centres d'intérêt" if c["lang"] == "fr" else "Interests"
    o.append(rf"\sect{{{tx(c['h_misc'])}}}\textbf{{{ll} :}} {tx(c['langs'])}\\\textbf{{{il} :}} {tx(c['interests'])}")
    o.append(r"\end{document}")
    return "\n".join(o) + "\n"


def tex_to_pdf(tex_path: pathlib.Path) -> pathlib.Path:
    build = tex_path.parent / "build"
    build.mkdir(exist_ok=True)
    cmd = ["pdflatex", "-interaction=nonstopmode", "-halt-on-error", f"-output-directory={build}", str(tex_path)]
    for _ in range(2):
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=600)
        if r.returncode != 0:
            sys.exit("pdflatex failed:\n" + (build / (tex_path.stem + ".log")).read_text(errors="replace")[-2500:])
    return build / (tex_path.stem + ".pdf")


def find_browser() -> str:
    for p in (
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser",
    ):
        if pathlib.Path(p).exists():
            return p
    sys.exit("Chrome/Edge not found")


def to_pdf(browser: str, html_text: str, pdf: pathlib.Path) -> None:
    with tempfile.TemporaryDirectory() as td:
        src = pathlib.Path(td) / "cv.html"
        src.write_text(html_text, encoding="utf-8")
        subprocess.run(
            [browser, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
             f"--print-to-pdf={pdf}", src.as_uri()],
            check=True, capture_output=True, timeout=120,
        )


def main() -> None:
    use_latex = shutil.which("pdflatex") is not None and "--html" not in sys.argv
    browser = None if use_latex else find_browser()
    PUBLIC.mkdir(parents=True, exist_ok=True)
    for code in ("fr", "en"):
        pdf = OUT / f"CV_Mohamed_Amine_Ziani_{code.upper()}.pdf"
        if use_latex:
            tex = OUT / f"CV_Mohamed_Amine_Ziani_{code.upper()}.tex"
            tex.write_text(render_tex(CONTENT[code]), encoding="utf-8")
            shutil.copy(tex_to_pdf(tex), pdf)
        else:
            to_pdf(browser, render(CONTENT[code]), pdf)
        shutil.copy(pdf, PUBLIC / pdf.name)
        print("wrote", pdf, "(latex)" if use_latex else "(html)")


if __name__ == "__main__":
    main()
