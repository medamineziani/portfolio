import type { Bilingual } from "@/lib/i18n";

/**
 * "Career Development" tab of the ENSEEIHT e-portfolio framework (PPP).
 * Parts left empty / null are hidden on the page: fill them in once the
 * real material exists (see /ppp/PPP.md at the repo root).
 */
export const careerCvs = [
  { lang: "fr", label: { fr: "CV en français", en: "CV in French" } as Bilingual, file: "cv/CV_Mohamed_Amine_Ziani_FR.pdf" },
  { lang: "en", label: { fr: "CV en anglais", en: "CV in English" } as Bilingual, file: "cv/CV_Mohamed_Amine_Ziani_EN.pdf" },
];

/** Embeddable URL of the 2-3 min English elevator pitch (e.g. a YouTube/Vimeo embed link). */
export const pitchVideoUrl: string | null = null;

export interface RoleModel {
  name: string;
  jobTitle: Bilingual;
  company: string;
  insight: Bilingual;
}
/** 3 analysed role models (real people, with their agreement). */
export const roleModels: RoleModel[] = [];

export interface MobilityProject {
  destination: Bilingual;
  description: Bilingual;
  alignedWith: Bilingual;
}
/** 3 international mobility projects, one per role model. */
export const mobilityProjects: MobilityProject[] = [];
