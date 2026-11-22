import type { Bilingual } from "@/lib/i18n";

export const nav = {
  home: { fr: "Accueil", en: "Home" } as Bilingual,
  about: { fr: "À propos", en: "About" } as Bilingual,
  education: { fr: "Formation", en: "Education" } as Bilingual,
  internships: { fr: "Stages", en: "Internships" } as Bilingual,
  projects: { fr: "Projets", en: "Projects" } as Bilingual,
  skills: { fr: "Compétences", en: "Skills" } as Bilingual,
  career: { fr: "PPP", en: "PPP" } as Bilingual,
  contact: { fr: "Contact", en: "Contact" } as Bilingual,
  contactCta: { fr: "Me contacter", en: "Get in touch" } as Bilingual,
};

export const hero = {
  viewProjects: { fr: "Voir mes projets", en: "View my projects" } as Bilingual,
  contactMe: { fr: "Me contacter", en: "Get in touch" } as Bilingual,
};

export const about = {
  badge: { fr: "À propos", en: "About" } as Bilingual,
  title: { fr: "Qui suis-je ?", en: "Who am I?" } as Bilingual,
  cardTitle: {
    fr: "Étudiant ingénieur passionné par le numérique",
    en: "Engineering student passionate about technology",
  } as Bilingual,
  statLanguages: { fr: "Langues", en: "Languages" } as Bilingual,
  statProjects: { fr: "Projets", en: "Projects" } as Bilingual,
  statResponsibilities: { fr: "Responsabilités", en: "Responsibilities" } as Bilingual,
};

export const education = {
  badge: { fr: "Formation", en: "Education" } as Bilingual,
  title: { fr: "Mon Parcours Académique", en: "Academic Background" } as Bilingual,
};

export const internships = {
  badge: { fr: "Stages", en: "Internships" } as Bilingual,
  title: { fr: "Expérience Professionnelle", en: "Work Experience" } as Bilingual,
  subtitle: {
    fr: "Mes stages en entreprise, entre développement logiciel, réseaux et vision par ordinateur.",
    en: "My company internships, spanning software development, networking, and computer vision.",
  } as Bilingual,
};

export const projects = {
  badge: { fr: "Projets", en: "Projects" } as Bilingual,
  title: { fr: "Mes Réalisations", en: "My Projects" } as Bilingual,
  subtitle: {
    fr: "Une sélection de projets académiques et personnels démontrant mes compétences en développement logiciel, intelligence artificielle et réseaux.",
    en: "A selection of academic and personal projects demonstrating my skills in software development, artificial intelligence, and networking.",
  } as Bilingual,
  viewCode: { fr: "Voir le code", en: "View code" } as Bilingual,
  liveDemo: { fr: "Démo en ligne", en: "Live demo" } as Bilingual,
  filterAll: { fr: "Tous", en: "All" } as Bilingual,
  categories: {
    ai: { fr: "IA & Vision", en: "AI & Vision" } as Bilingual,
    agents: { fr: "Agents IA", en: "AI Agents" } as Bilingual,
    apps: { fr: "Applications & SaaS", en: "Apps & SaaS" } as Bilingual,
    data: { fr: "Data & Analytics", en: "Data & Analytics" } as Bilingual,
    systems: { fr: "Systèmes & OS", en: "Systems & OS" } as Bilingual,
    hardware: { fr: "Architecture & FPGA", en: "Architecture & FPGA" } as Bilingual,
    network: { fr: "Réseaux & IoT", en: "Networks & IoT" } as Bilingual,
    cyber: { fr: "Cybersécurité", en: "Cybersecurity" } as Bilingual,
  } as Record<string, Bilingual>,
};

export const skills = {
  badge: { fr: "Compétences", en: "Skills" } as Bilingual,
  title: { fr: "Mes Expertises", en: "My Expertise" } as Bilingual,
  subtitle: {
    fr: "Un ensemble de compétences techniques développées à travers mes formations et projets pratiques.",
    en: "A set of technical skills developed through my education and hands-on projects.",
  } as Bilingual,
  categoryLanguages: { fr: "Langages de Programmation", en: "Programming Languages" } as Bilingual,
  categoryWebData: { fr: "Web & Data Science", en: "Web & Data Science" } as Bilingual,
  categoryAiVision: { fr: "IA & Vision par Ordinateur", en: "AI & Computer Vision" } as Bilingual,
  tools: { fr: "Outils", en: "Tools" } as Bilingual,
  methods: { fr: "Méthodologies", en: "Methodologies" } as Bilingual,
  languagesTitle: { fr: "Langues", en: "Languages" } as Bilingual,
};

export const experience = {
  badge: { fr: "Expériences", en: "Experience" } as Bilingual,
  title: {
    fr: "Responsabilités & Centres d'intérêt",
    en: "Responsibilities & Interests",
  } as Bilingual,
  responsibilities: { fr: "Responsabilités", en: "Responsibilities" } as Bilingual,
  interests: { fr: "Centres d'intérêt", en: "Interests" } as Bilingual,
  softSkillsTitle: { fr: "Qualités personnelles", en: "Personal qualities" } as Bilingual,
};

export const contact = {
  badge: { fr: "Contact", en: "Contact" } as Bilingual,
  title: { fr: "Me Contacter", en: "Get in Touch" } as Bilingual,
  subtitle: {
    fr: "N'hésitez pas à me contacter pour toute opportunité de stage ou collaboration.",
    en: "Feel free to reach out for internship opportunities or collaborations.",
  } as Bilingual,
  email: { fr: "Email", en: "Email" } as Bilingual,
  phone: { fr: "Téléphone", en: "Phone" } as Bilingual,
  location: { fr: "Localisation", en: "Location" } as Bilingual,
  send: { fr: "Envoyer", en: "Send" } as Bilingual,
  copy: { fr: "Copier", en: "Copy" } as Bilingual,
  copied: { fr: "Copié", en: "Copied" } as Bilingual,
  call: { fr: "Appeler", en: "Call" } as Bilingual,
  viewProfile: { fr: "Voir le profil", en: "View profile" } as Bilingual,
};

export const footer = {
  madeIn: { fr: "Fait avec", en: "Made with" } as Bilingual,
  inToulouse: { fr: "à Toulouse", en: "in Toulouse" } as Bilingual,
};

export const ppp = {
  badge: { fr: "PPP", en: "PPP" } as Bilingual,
  title: { fr: "Projet Personnel et Professionnel", en: "Personal & Professional Project" } as Bilingual,
  subtitle: {
    fr: "Mon e-portfolio suit le cadre de l'ENSEEIHT : six onglets pour présenter mon parcours, mes engagements et mon projet de carrière.",
    en: "My e-portfolio follows the ENSEEIHT framework: six tabs presenting my course, my commitments and my career project.",
  } as Bilingual,
  tabs: {
    welcome: { fr: "Bienvenue", en: "Welcome" } as Bilingual,
    course: { fr: "Cursus ingénieur", en: "Engineering course" } as Bilingual,
    mobility: { fr: "Mobilité internationale", en: "International mobility" } as Bilingual,
    civic: { fr: "Développement durable & engagement", en: "Sustainability & civic engagement" } as Bilingual,
    sport: { fr: "Sport & autres activités", en: "Sport & other activities" } as Bilingual,
    career: { fr: "Développement de carrière", en: "Career development" } as Bilingual,
  },
  welcomeTitle: { fr: "Bienvenue sur mon e-portfolio", en: "Welcome to my e-portfolio" } as Bilingual,
  seeProjects: { fr: "Voir mes projets", en: "See my projects" } as Bilingual,
  seeEducation: { fr: "Formation", en: "Education" } as Bilingual,
  seeInternships: { fr: "Stages", en: "Internships" } as Bilingual,
  courseTitle: { fr: "Mon parcours d'ingénieur", en: "My engineering path" } as Bilingual,
  courseText: {
    fr: "2ᵉ année à l'ENSEEIHT en Architecture des Ordinateurs et Réseaux, après une 1ʳᵉ année en Sciences du Numérique. Mes projets sont classés par domaine :",
    en: "2nd year at ENSEEIHT in Computer Architecture & Networks, after a 1st year in Digital Sciences. My projects are grouped by field:",
  } as Bilingual,
  projectsLabel: { fr: "projets", en: "projects" } as Bilingual,
  mobilityTitle: { fr: "Mon projet de mobilité internationale", en: "My international mobility project" } as Bilingual,
  mobilityText: {
    fr: "La mobilité dure 17 semaines en semestre 9, avec un niveau d'anglais B2+ à valider. Trois pistes, chacune alignée sur un modèle professionnel :",
    en: "The mobility lasts 17 weeks in semester 9, with an English level of B2+ to validate. Three ideas, each aligned with a role model:",
  } as Bilingual,
  mobilityNote: {
    fr: "Projets envisagés, à confirmer avec mon tuteur PPP et le service des relations internationales.",
    en: "Ideas under consideration, to be confirmed with my PPP tutor and the international office.",
  } as Bilingual,
  languagesLabel: { fr: "Langues", en: "Languages" } as Bilingual,
  alignedWith: { fr: "Modèle", en: "Role model" } as Bilingual,
  civicTitle: { fr: "Engagement citoyen", en: "Civic engagement" } as Bilingual,
  civicDone: { fr: "Déjà réalisé", en: "Already done" } as Bilingual,
  civicGoal: { fr: "Objectif semestre 9", en: "Semester 9 goal" } as Bilingual,
  civicGoalText: {
    fr: "40 heures d'engagement citoyen. Piste : animer des ateliers d'initiation à l'informatique et à la cybersécurité, dans la continuité de mes ateliers de CPGE.",
    en: "40 hours of civic engagement. Idea: run introductory computing and cybersecurity workshops, continuing the workshops I ran in preparatory classes.",
  } as Bilingual,
  sustainTitle: { fr: "Numérique sobre", en: "Lean digital" } as Bilingual,
  sustainText: {
    fr: "Ce portfolio est un site statique (hébergement GitHub Pages, sans base de données) avec des images compressées : l'image d'accueil pèse environ 110 Ko.",
    en: "This portfolio is a static site (GitHub Pages hosting, no database) with compressed images: the hero image weighs about 110 KB.",
  } as Bilingual,
  sportTitle: { fr: "Sport et autres activités", en: "Sport and other activities" } as Bilingual,
  sportText: {
    fr: "Le powerlifting nourrit mes projets Deadlift AI et PowerForm AI : je relie ma pratique sportive à mon métier d'ingénieur.",
    en: "Powerlifting feeds my Deadlift AI and PowerForm AI projects: I connect my sport to my engineering work.",
  } as Bilingual,
  careerTitle: { fr: "Mon projet de carrière", en: "My career project" } as Bilingual,
  download: { fr: "Télécharger (PDF)", en: "Download (PDF)" } as Bilingual,
  linkedin: { fr: "Profil LinkedIn", en: "LinkedIn profile" } as Bilingual,
  linkedinOpen: { fr: "Ouvrir LinkedIn", en: "Open LinkedIn" } as Bilingual,
  pitch: { fr: "Elevator pitch (en anglais)", en: "Elevator pitch" } as Bilingual,
  pitchScript: { fr: "Script du pitch", en: "Pitch script" } as Bilingual,
  roleModels: { fr: "Trois modèles professionnels", en: "Three role models" } as Bilingual,
  roleModelsNote: {
    fr: "Profils analysés à partir de sources publiques. L'analyse (\"ce que j'en retiens\") est la mienne.",
    en: "Profiles analysed from public sources. The analysis (\"what I take from it\") is my own.",
  } as Bilingual,
  takeaway: { fr: "Ce que j'en retiens", en: "What I take from it" } as Bilingual,
  source: { fr: "Source", en: "Source" } as Bilingual,
};
