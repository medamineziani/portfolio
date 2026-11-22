import type { Bilingual } from "@/lib/i18n";

/**
 * Data of the "PPP" section (ENSEEIHT e-portfolio framework, CAM course).
 * Optional parts are hidden while empty/null (e.g. the pitch video).
 */
export const careerCvs = [
  { lang: "fr", label: { fr: "CV en français", en: "CV in French" } as Bilingual, file: "cv/CV_Mohamed_Amine_Ziani_FR.pdf" },
  { lang: "en", label: { fr: "CV en anglais", en: "CV in English" } as Bilingual, file: "cv/CV_Mohamed_Amine_Ziani_EN.pdf" },
];

/** Embeddable URL of the 2-3 min English elevator pitch (YouTube/Vimeo embed link). Set it once recorded. */
export const pitchVideoUrl: string | null = null;

/** Elevator pitch script (English, about 2.5 minutes). Same text as /ppp/PPP.md. */
export const pitchScript: string[] = [
  "Hello, I'm Mohamed Amine Ziani, a second-year engineering student at ENSEEIHT in Toulouse, majoring in Computer Architecture and Networks.",
  "Present. I build systems from the hardware up. I wrote an SPI controller in VHDL that reads a joystick on an FPGA board, a Unix shell in C with pipes and signals, and a multi-tenant SaaS for medical practices. What I bring is rigor at the low level and the ability to ship a complete, working product.",
  "Past, briefly. I did two years of scientific preparatory classes in Morocco, where I led the student union and ran maths and computer science workshops. This summer I completed two internships in Agadir: IT network administration, then Industry 4.0 projects, where I built an IoT simulator in Python and C, designed a VLAN, OSPF and QoS network in Cisco Packet Tracer, and prototyped a computer-vision pallet check with OpenCV.",
  "Future. I want to work on the infrastructure and hardware that everything else runs on. To understand the paths, I studied three role models: Radia Perlman, who designed the Spanning Tree Protocol and showed me how one simple network algorithm can scale the Internet; Bruce Schneier, who taught me that security is about systems and people, not only code; and David Patterson, who changed processor design with RISC and RISC-V. For my 17-week mobility in semester 9, I am considering three projects, one per profile: a network engineering team in the Netherlands or Germany, a cybersecurity team in Québec, and a hardware design lab in Switzerland. Before that, I am looking for a two-month internship between June and September 2027.",
  "My unique value: I connect the layers, from silicon and protocols to the application, and I deliver. Thank you.",
];

export interface RoleModel {
  name: string;
  jobTitle: Bilingual;
  path: Bilingual;
  takeaway: Bilingual;
  sourceUrl: string;
}

/**
 * 3 role models analysed from public sources (not interviews).
 * Facts are limited to what the cited source states; "takeaway" is my own analysis.
 */
export const roleModels: RoleModel[] = [
  {
    name: "Radia Perlman",
    jobTitle: {
      fr: "Ingénieure réseaux, inventrice du Spanning Tree Protocol",
      en: "Network engineer, inventor of the Spanning Tree Protocol",
    },
    path: {
      fr: "Mathématiques au MIT (licence 1973, master 1976), BBN, puis Digital Equipment Corporation où elle publie le Spanning Tree Protocol (1985), doctorat en informatique au MIT (1988), puis Sun Microsystems et Intel.",
      en: "Mathematics at MIT (bachelor's 1973, master's 1976), BBN, then Digital Equipment Corporation where she published the Spanning Tree Protocol (1985), computer science PhD at MIT (1988), then Sun Microsystems and Intel.",
    },
    takeaway: {
      fr: "Un problème concret (les boucles dans Ethernet) résolu par un algorithme simple a changé l'échelle d'Internet. J'en retiens le poids des bases mathématiques et de la conception de protocoles, que je pratique avec le SPI en VHDL et le routage OSPF.",
      en: "A concrete problem (loops in Ethernet) solved by a simple algorithm changed the scale of the Internet. I take away the weight of mathematical foundations and protocol design, which I practise with SPI in VHDL and OSPF routing.",
    },
    sourceUrl: "https://www.internethalloffame.org/inductee/radia-perlman/",
  },
  {
    name: "Bruce Schneier",
    jobTitle: {
      fr: "Spécialiste de la sécurité, chercheur associé et enseignant à la Harvard Kennedy School",
      en: "Security technologist, fellow and lecturer at Harvard Kennedy School",
    },
    path: {
      fr: "Fondateur et directeur technique de Counterpane Internet Security, auteur du blog Schneier on Security et d'ouvrages de référence en sécurité, fellow et lecturer à la Harvard Kennedy School.",
      en: "Founder and CTO of Counterpane Internet Security, author of the Schneier on Security blog and of reference books on security, fellow and lecturer at Harvard Kennedy School.",
    },
    takeaway: {
      fr: "La sécurité est un problème de systèmes et de personnes, pas seulement de code. Cela rejoint mon laboratoire de pentest : comprendre l'attaque pour mieux concevoir la défense.",
      en: "Security is a problem of systems and people, not only of code. This matches my pentest lab: understanding the attack to design the defence better.",
    },
    sourceUrl: "https://www.schneier.com/blog/about/bio/",
  },
  {
    name: "David Patterson",
    jobTitle: {
      fr: "Architecte de processeurs, pionnier du RISC, prix Turing 2017",
      en: "Computer architect, RISC pioneer, 2017 Turing Award",
    },
    path: {
      fr: "Licence de mathématiques, master et doctorat d'informatique à UCLA, professeur à UC Berkeley (processeur RISC-I en 1982), Google Distinguished Engineer depuis 2016, acteur de RISC-V, prix Turing 2017 avec John Hennessy.",
      en: "Bachelor's in mathematics, master's and PhD in computer science at UCLA, professor at UC Berkeley (RISC-I processor in 1982), Google Distinguished Engineer since 2016, RISC-V leader, 2017 Turing Award with John Hennessy.",
    },
    takeaway: {
      fr: "Une approche quantitative et ouverte de l'architecture a transformé l'industrie des microprocesseurs. Elle prolonge ce que je fais en VHDL sur FPGA et ce que j'étudie en filière ASR.",
      en: "A quantitative and open approach to architecture transformed the microprocessor industry. It extends what I do in VHDL on FPGA and what I study in the ASR track.",
    },
    sourceUrl: "https://awards.acm.org/award_winners/patterson_2316693",
  },
];

export interface MobilityProject {
  destination: Bilingual;
  host: Bilingual;
  goal: Bilingual;
  alignedWith: string;
  tags: string[];
}

/** 3 international mobility projects for the 17-week S9 mobility, one per role model. Ideas to confirm with the PPP tutor. */
export const mobilityProjects: MobilityProject[] = [
  {
    destination: { fr: "Pays-Bas ou Allemagne", en: "Netherlands or Germany" },
    host: {
      fr: "Équipe réseau/infrastructure d'un opérateur, d'un fournisseur cloud ou d'un point d'échange Internet",
      en: "Network/infrastructure team at an operator, a cloud provider or an Internet exchange",
    },
    goal: {
      fr: "Approfondir le routage (de OSPF vers BGP), l'automatisation et la supervision réseau, dans la continuité de mon stage Cisco (VLAN, OSPF, QoS).",
      en: "Deepen routing (from OSPF to BGP), network automation and monitoring, building on my Cisco internship work (VLAN, OSPF, QoS).",
    },
    alignedWith: "Radia Perlman",
    tags: ["Routage", "Réseaux", "Linux"],
  },
  {
    destination: { fr: "Québec, Canada", en: "Québec, Canada" },
    host: {
      fr: "Équipe sécurité d'une entreprise ou laboratoire de recherche en cybersécurité",
      en: "Security team at a company or cybersecurity research lab",
    },
    goal: {
      fr: "Pratiquer le test d'intrusion et la modélisation des menaces en contexte professionnel, en français et en anglais, dans la continuité de mon laboratoire Kali.",
      en: "Practise penetration testing and threat modelling in a professional setting, in French and English, building on my Kali lab.",
    },
    alignedWith: "Bruce Schneier",
    tags: ["Pentest", "Threat modelling", "Linux"],
  },
  {
    destination: { fr: "Suisse", en: "Switzerland" },
    host: {
      fr: "Laboratoire ou entreprise de conception matérielle (FPGA, RISC-V)",
      en: "Hardware design lab or company (FPGA, RISC-V)",
    },
    goal: {
      fr: "Passer de mon contrôleur SPI en VHDL à la conception de processeurs RISC-V et à la vérification matérielle.",
      en: "Move from my VHDL SPI controller to RISC-V processor design and hardware verification.",
    },
    alignedWith: "David Patterson",
    tags: ["VHDL", "FPGA", "RISC-V"],
  },
];
