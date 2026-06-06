export const personalInfo = {
  name: "Mohamed Amine Ziani",
  shortName: "Amine Ziani",
  title: "Étudiant Ingénieur ENSEEIHT",
  subtitle: "Sciences du Numérique",
  description:
    "Étudiant ingénieur de 20 ans en 1ère année à l'ENSEEIHT, issu des CPGE scientifiques au Maroc. Rigoureux et passionné par le développement logiciel, l'algorithmique et l'IA.",
  email: "medamine.ziani85@gmail.com",
  phone: "+33 7 73 96 39 17",
  address: "12 rue des Blanchers, Toulouse",
  linkedin: "linkedin.com/in/m-a-ziani",
  linkedinUrl: "https://linkedin.com/in/m-a-ziani",
  github: "https://github.com/m-a-ziani",
  availability: "Recherche de stage",
};

export const education = [
  {
    school: "ENSEEIHT · INP",
    location: "Toulouse, France",
    degree: "1ère année Ingénieur - Sciences du Numérique",
    period: "2025 - Présent",
    description:
      "Algorithmique, programmation, bases de données, réseaux, systèmes d'exploitation",
    icon: "GraduationCap",
  },
  {
    school: "CPGE Scientifique",
    location: "Maroc",
    degree: "Classes Préparatoires aux Grandes Écoles",
    period: "2023 - 2025",
    description:
      "Mathématiques, Physique, Informatique - Préparation aux concours des grandes écoles",
    icon: "BookOpen",
  },
  {
    school: "Baccalauréat Sciences Mathématiques B",
    location: "Maroc",
    degree: "Mention Bien",
    period: "2023",
    description: "",
    icon: "Award",
  },
];

export const projects = [
  {
    title: "Analyse Vidéo IA - Détection de Deadlift",
    organization: "ENSEEIHT",
    year: "2025",
    description:
      "Analyse vidéo en temps réel pour l'estimation de pose (keypoints) et la détection des phases du mouvement de deadlift, avec retour correctif automatisé.",
    tags: ["Python", "OpenCV", "MediaPipe", "IA", "Vision"],
    icon: "Dumbbell",
  },
  {
    title: "Mise en place d'un FAI Simplifié",
    organization: "ENSEEIHT",
    year: "2025",
    description:
      "Simulation complète d'une infrastructure réseau type Fournisseur d'Accès Internet : routage, DNS, DHCP, NAT. Configuration de routeurs et gestion des protocoles TCP/IP, BGP/OSPF.",
    tags: ["Réseaux", "DNS", "DHCP", "NAT", "BGP", "OSPF"],
    icon: "Network",
  },
  {
    title: "Développement Collaboratif d'un IDE Java",
    organization: "ENSEEIHT",
    year: "2025",
    description:
      "Éditeur de code avec coloration syntaxique, compilation et exécution intégrées. Projet de groupe avec gestion de versions Git, revue de code et coordination des tâches.",
    tags: ["Java", "Git", "IDE", "POO", "Collaboration"],
    icon: "Code2",
  },
  {
    title: "TIPE - Reconnaissance Vocale par HMM",
    organization: "CPGE",
    year: "2025",
    description:
      "Implémentation d'un système de reconnaissance vocale basé sur les Modèles de Markov Cachés (HMM). Traitement audio, extraction de features MFCC, entraînement et évaluation du modèle.",
    tags: ["HMM", "MFCC", "Python", "Signal", "IA"],
    icon: "Mic",
  },
];

export const responsibilities = [
  {
    role: "Responsable de Club Académique",
    organization: "CPGE",
    period: "2023 - 2025",
    description:
      "Animation d'ateliers maths/informatique pour 10-20 participants, création de supports pédagogiques, coordination d'événements.",
    icon: "Users",
  },
  {
    role: "Délégué de Classe",
    organization: "CPGE",
    period: "2023 - 2025",
    description:
      "Représentation étudiante auprès de l'administration, médiation et suivi des demandes collectives.",
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
  tools: [
    "Git",
    "Linux",
    "VS Code",
    "Docker",
    "LaTeX",
  ],
  methods: [
    "POO",
    "Tests Unitaires",
    "Modularité",
    "Agile",
    "Revue de Code",
  ],
};

export const languages = [
  { name: "Français", level: "Langue maternelle", proficiency: 100 },
  { name: "Anglais", level: "Courant", proficiency: 85 },
  { name: "Arabe", level: "Courant", proficiency: 90 },
  { name: "Tamazight", level: "Courant", proficiency: 90 },
];

export const interests = [
  { name: "LeetCode", icon: "Terminal" },
  { name: "Codeforces", icon: "Trophy" },
  { name: "Veille IA", icon: "Brain" },
  { name: "Open Source", icon: "Github" },
  { name: "Powerlifting", icon: "Dumbbell" },
  { name: "Natation", icon: "Waves" },
  { name: "Football", icon: "Goal" },
  { name: "Sciences", icon: "Atom" },
];
