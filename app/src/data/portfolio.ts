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
    year: "2025",
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
    year: "2025",
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
    organization: { fr: "Projet personnel", en: "Personal project" },
    year: "2025",
    description: {
      fr: "Proof of concept Python/OpenCV validant automatiquement, à partir d'une vidéo de palettisation, la conformité du colisage (nombre de couches, hauteur, emprise au sol) par rapport à un référentiel — verdict CONFORME / NON CONFORME avec écarts mesurés.",
      en: "Python/OpenCV proof of concept that automatically validates pallet packaging conformity (carton layer count, height, footprint) from a palletizing video against a reference spec — CONFORMING / NON-CONFORMING verdict with measured deviations.",
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
    organization: { fr: "ENSEEIHT", en: "ENSEEIHT" },
    year: "2025",
    description: {
      fr: "Projet académique combinant un simulateur IoT client/serveur (sockets TCP, Python) pour une station de pesée industrielle, et une infrastructure réseau Cisco complète (routage, DNS, DHCP, NAT).",
      en: "Academic project combining a client/server IoT simulator (Python TCP sockets) for an industrial weighing station with a full Cisco network infrastructure (routing, DNS, DHCP, NAT).",
    },
    tags: ["Python", "TCP/IP", "Sockets", "Cisco IOS", "Réseaux"],
    icon: "Network",
    githubUrl: "https://github.com/medamineziani/iot-weighing-network-sim",
  },
  {
    title: { fr: "Fruizy", en: "Fruizy" },
    organization: { fr: "Projet personnel", en: "Personal project" },
    year: "2025",
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
    year: "2025",
    description: {
      fr: "Environnement de pentest personnel (VM Kali Linux + cible Ubuntu, VirtualBox) pour l'auto-formation aux tests d'intrusion : reconnaissance, exploitation et post-exploitation dans un cadre isolé et légal.",
      en: "Personal pentesting environment (Kali Linux VM + Ubuntu target, VirtualBox) for self-study in penetration testing: reconnaissance, exploitation, and post-exploitation in an isolated, legal setting.",
    },
    tags: ["Kali Linux", "VirtualBox", "Pentest", "Auto-formation"],
    icon: "Shield",
    githubUrl: null,
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
