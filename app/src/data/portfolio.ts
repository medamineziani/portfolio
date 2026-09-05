import type { Bilingual } from "@/lib/i18n";

export const personalInfo = {
  name: "Mohamed Amine Ziani",
  shortName: "Amine Ziani",
  title: {
    fr: "Étudiant Ingénieur ENSEEIHT",
    en: "Engineering Student at ENSEEIHT",
  } as Bilingual,
  subtitle: {
    fr: "Architecture des Ordinateurs et Réseaux (ASR)",
    en: "Computer Architecture & Networks (ASR)",
  } as Bilingual,
  description: {
    fr: "Étudiant ingénieur en 2ème année à l'ENSEEIHT, filière Architecture des Ordinateurs et Réseaux (ASR), issu des CPGE scientifiques au Maroc. Rigoureux et passionné par le développement logiciel, les systèmes/réseaux et l'IA.",
    en: "2nd-year engineering student at ENSEEIHT, majoring in Computer Architecture & Networks (ASR), coming from scientific preparatory classes (CPGE) in Morocco. Rigorous and passionate about software development, systems/networks, and AI.",
  } as Bilingual,
  email: "medamine.ziani85@gmail.com",
  phone: "+33 7 73 96 39 17",
  address: "12 rue des Blanchers, Toulouse",
  linkedin: "linkedin.com/in/mohamed-amine-ziani-a4698935b",
  linkedinUrl: "https://www.linkedin.com/in/mohamed-amine-ziani-a4698935b",
  github: "github.com/medamineziani",
  githubUrl: "https://github.com/medamineziani",
  availability: {
    fr: "Stage de 2 mois entre juin et septembre 2027",
    en: "2-month internship between June and September 2027",
  } as Bilingual,
};

export const education = [
  {
    school: { fr: "ENSEEIHT · INP", en: "ENSEEIHT · INP" } as Bilingual,
    location: { fr: "Toulouse, France", en: "Toulouse, France" } as Bilingual,
    degree: {
      fr: "2ème année Ingénieur - Architecture des Ordinateurs et Réseaux (ASR)",
      en: "2nd Year Engineering - Computer Architecture & Networks (ASR)",
    } as Bilingual,
    period: { fr: "2026 - Présent", en: "2026 - Present" } as Bilingual,
    description: {
      fr: "Architecture des systèmes, réseaux, systèmes d'exploitation, sécurité informatique",
      en: "Systems architecture, networks, operating systems, computer security",
    } as Bilingual,
    icon: "GraduationCap",
  },
  {
    school: { fr: "ENSEEIHT · INP", en: "ENSEEIHT · INP" } as Bilingual,
    location: { fr: "Toulouse, France", en: "Toulouse, France" } as Bilingual,
    degree: {
      fr: "1ère année Ingénieur - Sciences du Numérique",
      en: "1st Year Engineering - Digital Sciences",
    } as Bilingual,
    period: { fr: "2025 - 2026", en: "2025 - 2026" } as Bilingual,
    description: {
      fr: "Algorithmique, programmation, bases de données, réseaux, systèmes d'exploitation",
      en: "Algorithms, programming, databases, networks, operating systems",
    } as Bilingual,
    icon: "GraduationCap",
  },
  {
    school: {
      fr: "CPGE Scientifique",
      en: "Scientific Preparatory Classes (CPGE)",
    } as Bilingual,
    location: { fr: "Maroc", en: "Morocco" } as Bilingual,
    degree: {
      fr: "Classes Préparatoires aux Grandes Écoles",
      en: "Preparatory Classes for Engineering Schools",
    } as Bilingual,
    period: { fr: "2023 - 2025", en: "2023 - 2025" } as Bilingual,
    description: {
      fr: "Mathématiques, Physique, Informatique - Préparation aux concours des grandes écoles",
      en: "Mathematics, Physics, Computer Science - Preparation for engineering school entrance exams",
    } as Bilingual,
    icon: "BookOpen",
  },
  {
    school: {
      fr: "Baccalauréat Sciences Mathématiques B",
      en: "Baccalaureate, Mathematical Sciences B",
    } as Bilingual,
    location: { fr: "Maroc", en: "Morocco" } as Bilingual,
    degree: { fr: "Mention Bien", en: "With Honors" } as Bilingual,
    period: { fr: "2023", en: "2023" } as Bilingual,
    description: { fr: "", en: "" } as Bilingual,
    icon: "Award",
  },
];

export interface Project {
  title: Bilingual;
  organization: Bilingual;
  year: string;
  description: Bilingual;
  tags: string[];
  icon: string;
  githubUrl: string | null;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: { fr: "Deadlift AI", en: "Deadlift AI" },
    organization: { fr: "Projet personnel", en: "Personal project" },
    year: "2026",
    description: {
      fr: "Analyse vidéo en temps réel du mouvement de deadlift : estimation de pose (YOLO11), calcul des angles articulaires, suivi de la trajectoire de la barre, et rapport de coaching PDF généré par l'API Claude.",
      en: "Real-time deadlift video analysis: pose estimation (YOLO11), joint-angle computation, barbell trajectory tracking, and an AI-generated (Claude API) PDF coaching report.",
    },
    tags: ["Python", "OpenCV", "YOLO", "IA", "Computer Vision"],
    icon: "Dumbbell",
    githubUrl: "https://github.com/medamineziani/deadlift-ai",
  },
  {
    title: {
      fr: "PowerForm AI",
      en: "PowerForm AI",
    },
    organization: { fr: "Projet personnel", en: "Personal project" },
    year: "2026",
    description: {
      fr: "MVP SaaS complet d'analyse vidéo de powerlifting par IA : authentification et base de données Supabase, paiements Stripe, analyse par l'API Claude et génération de rapports PDF, déployé sur Vercel.",
      en: "Full SaaS MVP for AI-powered powerlifting video analysis: Supabase auth & database, Stripe payments, Claude API analysis, and PDF report generation — deployed on Vercel.",
    },
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Claude API", "Tailwind"],
    icon: "LineChart",
    githubUrl: "https://github.com/medamineziani/powerform-ai",
  },
  {
    title: {
      fr: "Contrôle Qualité Vidéo des Palettes",
      en: "Pallet Video Quality Control",
    },
    organization: { fr: "Stage AGRIDATA CONSULTING · PackOne", en: "AGRIDATA CONSULTING Internship · PackOne" },
    year: "2026",
    description: {
      fr: "PoC Python/OpenCV développé lors d'un stage Industrie 4.0 chez AGRIDATA CONSULTING (équipe PackOne) : contrôle automatisé de la hauteur et du nombre de couches de cartons d'une palette à partir d'une caméra en plongée sur la ligne de palettisation, validé par rapport à une configuration de référence par type de palette.",
      en: "Python/OpenCV PoC built during an Industry 4.0 internship at AGRIDATA CONSULTING (PackOne team): automated control of pallet height and carton-layer count from an overhead camera on the palletizing line, validated against a reference pallet-type configuration.",
    },
    tags: ["Python", "OpenCV", "Vision par ordinateur", "Industrie 4.0", "Tests unitaires"],
    icon: "ScanEye",
    githubUrl: "https://github.com/medamineziani/palette-vision-qc",
  },
  {
    title: {
      fr: "Simulateur IoT & Routage Réseau",
      en: "IoT Simulator & Network Routing",
    },
    organization: { fr: "Stage AGRIDATA CONSULTING · PackOne", en: "AGRIDATA CONSULTING Internship · PackOne" },
    year: "2026",
    description: {
      fr: "Projet réalisé lors du même stage : simulateur client/serveur Python/C (sockets TCP/IP) d'une balance industrielle et d'un scanner de palettes, et conception de l'infrastructure réseau cible sous Cisco Packet Tracer (segmentation VLAN, routage dynamique OSPF, politique QoS pour prioriser le trafic de pesée temps réel) pour une station de conditionnement.",
      en: "Project built during the same internship: a Python/C client-server simulator (TCP/IP sockets) for an industrial scale and pallet scanner, plus the target network design in Cisco Packet Tracer (VLAN segmentation, OSPF dynamic routing, QoS policy prioritizing real-time weighing traffic) for a packaging station.",
    },
    tags: ["Python", "C", "TCP/IP", "Sockets", "Cisco Packet Tracer", "VLAN", "OSPF", "QoS"],
    icon: "Network",
    githubUrl: "https://github.com/medamineziani/iot-weighing-network-sim",
  },
  {
    title: { fr: "Fruizy", en: "Fruizy" },
    organization: { fr: "Projet personnel", en: "Personal project" },
    year: "2026",
    description: {
      fr: "Landing page marketing pour Fruizy, une marque de smoothies aux fruits congelés (Agadir, Maroc). Site vitrine mono-page en HTML/CSS pur, orienté conversion vers la commande WhatsApp.",
      en: "Marketing landing page for Fruizy, a frozen-fruit smoothie brand (Agadir, Morocco). Single-page vanilla HTML/CSS site optimized for WhatsApp-order conversion.",
    },
    tags: ["HTML5", "CSS3", "SEO", "Design responsive"],
    icon: "ShoppingBag",
    githubUrl: "https://github.com/medamineziani/fruizy",
  },
  {
    title: {
      fr: "Agent IA de recherche de logement",
      en: "AI Apartment-Search Agent",
    },
    organization: { fr: "Projet personnel", en: "Personal project" },
    year: "2026",
    description: {
      fr: "Agent piloté par Claude qui surveille Leboncoin, SeLoger et BienIci pour une recherche de logement, rédige des messages de candidature personnalisés, et ne les envoie qu'après validation humaine explicite. Pilotage du navigateur via l'extension Claude in Chrome et exécution planifiée.",
      en: "Claude-powered agent that monitors Leboncoin, SeLoger, and BienIci for an apartment search, drafts personalized application messages, and only sends them after explicit human approval. Browser automation via the Claude in Chrome extension with scheduled runs.",
    },
    tags: ["Claude Agent SDK", "Automatisation", "Claude in Chrome", "Tâches planifiées"],
    icon: "Home",
    githubUrl: null,
  },
  {
    title: {
      fr: "Laboratoire de Cybersécurité",
      en: "Cybersecurity Lab",
    },
    organization: { fr: "Auto-formation", en: "Self-study" },
    year: "2026",
    description: {
      fr: "Environnement de pentest personnel (VM Kali Linux + cible Ubuntu, VirtualBox) pour l'auto-formation aux tests d'intrusion : reconnaissance, exploitation et post-exploitation dans un cadre isolé et légal.",
      en: "Personal pentesting environment (Kali Linux VM + Ubuntu target, VirtualBox) for self-study in penetration testing: reconnaissance, exploitation, and post-exploitation in an isolated, legal setting.",
    },
    tags: ["Kali Linux", "VirtualBox", "Pentest", "Auto-formation"],
    icon: "Shield",
    githubUrl: null,
  },
];

export interface Internship {
  role: Bilingual;
  company: string;
  companyType: Bilingual;
  period: Bilingual;
  location: Bilingual;
  summary: Bilingual;
  highlights: Bilingual[];
  skillTag: Bilingual;
}

export const internships: Internship[] = [
  {
    role: { fr: "Ingénieur Informatique", en: "Computer Engineer" },
    company: "AGRIDATA CONSULTING",
    companyType: { fr: "Stage", en: "Internship" },
    period: { fr: "Juil. 2026 - Présent · 3 mois", en: "Jul 2026 - Present · 3 mos" },
    location: { fr: "Région d'Agadir · Hybride", en: "Agadir Metropolitan Area · Hybrid" },
    summary: {
      fr: "Stage de fin de première année à l'ENSEEIHT, sur deux projets Industrie 4.0 combinant programmation système, réseaux et vision par ordinateur au sein de l'équipe PackOne.",
      en: "End-of-first-year internship at ENSEEIHT, working on two Industry 4.0 projects combining systems programming, networking, and computer vision within the PackOne team.",
    },
    highlights: [
      {
        fr: "Simulateur IoT industriel en Python/C : simulation continue d'une balance industrielle et d'un scanner de palettes (poids brut, identifiant de contenant) via sockets TCP/IP, en architecture client/serveur.",
        en: "Built an IoT industrial weighing simulator in Python/C: continuous simulation of an industrial scale and a pallet scanner (gross weight, container ID) over TCP/IP sockets, in a client/server architecture.",
      },
      {
        fr: "Conception de l'infrastructure réseau cible d'une station de conditionnement sous Cisco Packet Tracer : segmentation VLAN, routage dynamique OSPF et politique QoS pour prioriser le trafic de pesée temps réel.",
        en: "Designed the target network infrastructure of a packaging station in Cisco Packet Tracer: VLAN segmentation, OSPF dynamic routing, and a QoS policy to prioritize real-time weighing traffic.",
      },
      {
        fr: "Développement d'un prototype d'analyse vidéo (PoC) en Python/OpenCV : contrôle automatisé de la conformité et de l'intégrité des palettes (hauteur, nombre de couches de cartons) à partir d'une caméra en plongée, validé par rapport à une configuration de référence par type de palette.",
        en: "Developed a video analysis prototype (PoC) in Python/OpenCV: automated control of pallet conformity and integrity (height, number of carton layers) from an overhead camera feed, validated against a reference pallet-type configuration.",
      },
    ],
    skillTag: { fr: "Ingénierie", en: "Engineering" },
  },
  {
    role: {
      fr: "Ingénieur Réseaux IT",
      en: "Information Technology Network Engineer",
    },
    company: "FIRST COMPÉTENCE",
    companyType: { fr: "Stage", en: "Internship" },
    period: { fr: "Juin 2026 · 1 mois", en: "Jun 2026 · 1 mo" },
    location: { fr: "Agadir · Sur site", en: "Agadir · On-site" },
    summary: {
      fr: "Travail sur l'infrastructure IT et l'administration réseau : analyse de l'architecture réseau, adressage IP, VLANs, configuration DHCP/DNS, dépannage et sécurité réseau. Contribution à la documentation et à l'optimisation de l'infrastructure IT de l'entreprise.",
      en: "Worked on IT infrastructure and network administration, including network architecture analysis, IP addressing, VLANs, DHCP/DNS configuration, troubleshooting, and network security. Contributed to documenting and optimizing the company's IT infrastructure.",
    },
    highlights: [],
    skillTag: { fr: "Réseaux", en: "Networking" },
  },
];

export const responsibilities = [
  {
    role: {
      fr: "Responsable de Club Académique",
      en: "Academic Club Lead",
    } as Bilingual,
    organization: { fr: "CPGE", en: "CPGE" } as Bilingual,
    period: { fr: "2023 - 2025", en: "2023 - 2025" } as Bilingual,
    description: {
      fr: "Animation d'ateliers maths/informatique pour 10-20 participants, création de supports pédagogiques, coordination d'événements.",
      en: "Ran math/CS workshops for 10-20 participants, created educational materials, and coordinated events.",
    } as Bilingual,
    icon: "Users",
  },
  {
    role: { fr: "Délégué de Classe", en: "Class Representative" } as Bilingual,
    organization: { fr: "CPGE", en: "CPGE" } as Bilingual,
    period: { fr: "2023 - 2025", en: "2023 - 2025" } as Bilingual,
    description: {
      fr: "Représentation étudiante auprès de l'administration, médiation et suivi des demandes collectives.",
      en: "Represented students to the administration, mediated issues, and followed up on collective requests.",
    } as Bilingual,
    icon: "UserCheck",
  },
];

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "C", level: 85 },
    { name: "Java", level: 80 },
    { name: "Ada", level: 60 },
    { name: "SQL", level: 75 },
  ],
  webData: [
    { name: "HTML/CSS", level: 85 },
    { name: "Matlab", level: 70 },
    { name: "Pandas", level: 80 },
    { name: "NumPy", level: 80 },
  ],
  aiVision: [
    { name: "OpenCV", level: 85 },
    { name: "MediaPipe", level: 80 },
    { name: "HMM", level: 75 },
    { name: "MFCC", level: 70 },
  ],
  tools: ["Git", "Linux", "VS Code", "Docker", "LaTeX"],
  methods: {
    fr: ["POO", "Tests Unitaires", "Modularité", "Agile", "Revue de Code"],
    en: ["OOP", "Unit Testing", "Modularity", "Agile", "Code Review"],
  } as { fr: string[]; en: string[] },
};

export const languages = [
  { name: { fr: "Français", en: "French" } as Bilingual, level: { fr: "Langue maternelle", en: "Native" } as Bilingual, dots: 5 },
  { name: { fr: "Anglais", en: "English" } as Bilingual, level: { fr: "Courant", en: "Fluent" } as Bilingual, dots: 4 },
  { name: { fr: "Arabe", en: "Arabic" } as Bilingual, level: { fr: "Courant", en: "Fluent" } as Bilingual, dots: 5 },
  { name: { fr: "Tamazight", en: "Tamazight" } as Bilingual, level: { fr: "Courant", en: "Fluent" } as Bilingual, dots: 5 },
];

export const interests = [
  { name: { fr: "LeetCode", en: "LeetCode" } as Bilingual, icon: "Terminal" },
  { name: { fr: "Codeforces", en: "Codeforces" } as Bilingual, icon: "Trophy" },
  { name: { fr: "Veille IA", en: "AI Trends" } as Bilingual, icon: "Brain" },
  { name: { fr: "Open Source", en: "Open Source" } as Bilingual, icon: "Github" },
  { name: { fr: "Powerlifting", en: "Powerlifting" } as Bilingual, icon: "Dumbbell" },
  { name: { fr: "Natation", en: "Swimming" } as Bilingual, icon: "Waves" },
  { name: { fr: "Football", en: "Football" } as Bilingual, icon: "Goal" },
  { name: { fr: "Sciences", en: "Science" } as Bilingual, icon: "Atom" },
];

export const softSkills: Bilingual[] = [
  { fr: "Rigueur", en: "Rigor" },
  { fr: "Autonomie", en: "Autonomy" },
  { fr: "Esprit d'équipe", en: "Teamwork" },
  { fr: "Curiosité", en: "Curiosity" },
  { fr: "Adaptabilité", en: "Adaptability" },
  { fr: "Communication", en: "Communication" },
];
