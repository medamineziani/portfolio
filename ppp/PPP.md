# PPP — Career Project (CAM, M1 Module 1)

Deliverables asked for the e-portfolio "Career Project" section, and what is done:

| Deliverable | Status |
|---|---|
| CV in English and in French | Done: `cv/CV_Mohamed_Amine_Ziani_{EN,FR}.pdf` (also downloadable on the e-portfolio) |
| LinkedIn in English and French (optional) | Texts drafted below, to paste into LinkedIn |
| Elevator pitch video, 2-3 min, in English (present, very brief past, future) | Script final below (same text on the site), **video to record**, then set `pitchVideoUrl` in `app/src/data/career.ts` |
| 3 role-model profiles analysed | Done on the site with 3 public figures (public sources, not interviews). Replace or complement with real interviews if the course requires it |
| 3 international mobility projects aligned with the 3 role models | Done on the site as ideas, to confirm with the PPP tutor |

Before sending: the course requires the school address `prenom.nom@etu.toulouse-inp.fr` on the CV.
Set `EMAIL` at the top of `cv/build_cv.py`, then run `python cv/build_cv.py --html`.
Keep dates, titles and project names identical on the CV, LinkedIn and the e-portfolio.

---

## 1. LinkedIn

**Headline (limit 220 characters)**

- EN (154): `2nd-year engineering student at ENSEEIHT (ASR) | Systems, networks & FPGA | C, VHDL, Python | Seeking a 2-month internship, June-September 2027 | Toulouse`
- FR (137): `Élève-ingénieur 2A ENSEEIHT (ASR) | Systèmes, réseaux & FPGA | C, VHDL, Python | Recherche un stage de 2 mois, juin-sept. 2027 | Toulouse`

**About (EN)**

2nd-year engineering student at ENSEEIHT (Toulouse INP), majoring in Computer Architecture & Networks, coming from scientific preparatory classes in Morocco.

I like to understand a system from the hardware up to the application. Recent work: an SPI controller in VHDL that reads a joystick on a Nexys 4 DDR FPGA; a Unix shell in C (fork/exec, pipes, redirections, signals); a multi-tenant SaaS for medical practices (Next.js, Prisma, PostgreSQL); an AI powerlifting video-analysis SaaS.

Internships in Agadir: IT network administration (VLAN, DHCP/DNS, troubleshooting) and Industry 4.0 projects (IoT simulator in Python/C, VLAN/OSPF/QoS network design in Cisco Packet Tracer, OpenCV pallet quality-control PoC).

Looking for a 2-month internship between June and September 2027 in systems, networking, embedded/FPGA or cybersecurity. Code: github.com/medamineziani | Portfolio: medamineziani.github.io/portfolio

**About (FR)**

Élève-ingénieur en 2ᵉ année à l'ENSEEIHT (Toulouse INP), filière Architecture des Ordinateurs et Réseaux, issu des CPGE scientifiques au Maroc.

J'aime comprendre un système du matériel jusqu'à l'application. Travaux récents : un contrôleur SPI en VHDL qui lit un joystick sur FPGA Nexys 4 DDR ; un shell Unix en C (fork/exec, tubes, redirections, signaux) ; un SaaS multi-cabinets pour la gestion médicale (Next.js, Prisma, PostgreSQL) ; un SaaS d'analyse vidéo de powerlifting par IA.

Stages à Agadir : administration réseau IT (VLAN, DHCP/DNS, dépannage) et projets Industrie 4.0 (simulateur IoT Python/C, réseau VLAN/OSPF/QoS sous Cisco Packet Tracer, PoC de contrôle qualité de palettes avec OpenCV).

Je recherche un stage de 2 mois entre juin et septembre 2027 en systèmes, réseaux, embarqué/FPGA ou cybersécurité. Code : github.com/medamineziani | Portfolio : medamineziani.github.io/portfolio

Course reminders: city filled in (Toulouse, not only France), a real photo (never AI-generated), 2 or 3 short recommendations (internship supervisors).

---

## 2. Elevator pitch script (English, about 2.5 minutes)

Final text. Change the role models or mobility ideas here and in `app/src/data/career.ts` together.

> Hello, I'm Mohamed Amine Ziani, a second-year engineering student at ENSEEIHT in Toulouse, majoring in Computer Architecture and Networks.
>
> **Present.** I build systems from the hardware up. I wrote an SPI controller in VHDL that reads a joystick on an FPGA board, a Unix shell in C with pipes and signals, and a multi-tenant SaaS for medical practices. What I bring is rigor at the low level and the ability to ship a complete, working product.
>
> **Past, briefly.** I did two years of scientific preparatory classes in Morocco, where I led the student union and ran maths and computer science workshops. This summer I completed two internships in Agadir: IT network administration, then Industry 4.0 projects, where I built an IoT simulator in Python and C, designed a VLAN, OSPF and QoS network in Cisco Packet Tracer, and prototyped a computer-vision pallet check with OpenCV.
>
> **Future.** I want to work on the infrastructure and hardware that everything else runs on. To understand the paths, I studied three role models: Radia Perlman, who designed the Spanning Tree Protocol and showed me how one simple network algorithm can scale the Internet; Bruce Schneier, who taught me that security is about systems and people, not only code; and David Patterson, who changed processor design with RISC and RISC-V. For my 17-week mobility in semester 9, I am considering three projects, one per profile: a network engineering team in the Netherlands or Germany, a cybersecurity team in Québec, and a hardware design lab in Switzerland. Before that, I am looking for a two-month internship between June and September 2027.
>
> **Unique value.** I connect the layers, from silicon and protocols to the application, and I deliver. Thank you.

Recording checklist: 2-3 minutes, English, camera at eye level, one take without reading, present then very brief past then future.

---

## 3. Role models (chosen, from public sources)

| Role model | Profile | Source |
|---|---|---|
| Radia Perlman | Network engineering: inventor of the Spanning Tree Protocol (DEC, 1985); MIT maths then computer science PhD; BBN, DEC, Sun, Intel | [Internet Hall of Fame](https://www.internethalloffame.org/inductee/radia-perlman/) |
| Bruce Schneier | Security: founder and CTO of Counterpane Internet Security; fellow and lecturer, Harvard Kennedy School | [schneier.com bio](https://www.schneier.com/blog/about/bio/) |
| David Patterson | Computer architecture: RISC pioneer at UC Berkeley, RISC-V, Google Distinguished Engineer, 2017 Turing Award | [ACM](https://awards.acm.org/award_winners/patterson_2316693) |

Facts come from the sources above; the "what I take from it" texts on the site are your own analysis (edit them in your own words).
These are public figures, not people you interviewed. The course suggests MyJobGlasses or alumni interviews: if you can interview a real
professional per profile, add them in `app/src/data/career.ts` (same structure). Interview questions: What does a typical week look like?
Which skills do you use daily? What was the decisive experience of your early career? How did an international experience help?
What would you do differently at my stage?

---

## 4. International mobility projects (17 weeks, semester 9)

Ideas to confirm with the PPP tutor and the international office, not commitments.

| # | Aligned with | Idea | Builds on |
|---|---|---|---|
| 1 | Radia Perlman | Network/infrastructure team (operator, cloud provider or Internet exchange), Netherlands or Germany | Cisco internship: VLAN, OSPF, QoS |
| 2 | Bruce Schneier | Security team or cybersecurity research lab, Québec, Canada | Kali pentest lab |
| 3 | David Patterson | Hardware design lab or company (FPGA, RISC-V), Switzerland | VHDL SPI controller on FPGA |

Also required for the diploma (course slides): English B2+ by S9, 17-week mobility in S9, 40 h civic engagement in S9, internships in S6 and S8.
