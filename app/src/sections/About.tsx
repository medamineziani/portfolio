import { useEffect, useRef, useState } from "react";
import { User, Target, Rocket, BookOpen } from "lucide-react";
import { useLanguage, t, type Bilingual } from "@/lib/i18n";
import { about as aboutText } from "@/data/uiText";

const highlights: { icon: typeof User; title: Bilingual; description: Bilingual }[] = [
  {
    icon: BookOpen,
    title: { fr: "Formation d'excellence", en: "Excellence-driven education" },
    description: {
      fr: "CPGE scientifiques au Maroc, actuellement en 2ème année à l'ENSEEIHT (filière ASR)",
      en: "Scientific CPGE in Morocco, currently in 2nd year at ENSEEIHT (ASR major)",
    },
  },
  {
    icon: Target,
    title: { fr: "Orienté résultats", en: "Results-oriented" },
    description: {
      fr: "Passionné par le développement logiciel, l'algorithmique et l'IA",
      en: "Passionate about software development, algorithms, and AI",
    },
  },
  {
    icon: Rocket,
    title: { fr: "Projets concrets", en: "Hands-on projects" },
    description: {
      fr: "Expérience en vision par ordinateur, réseaux et développement collaboratif",
      en: "Experience in computer vision, networking, and collaborative development",
    },
  },
  {
    icon: User,
    title: { fr: "Leadership", en: "Leadership" },
    description: {
      fr: "Responsable de club académique et délégué de classe",
      en: "Academic club lead and class representative",
    },
  },
];

export default function About() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bioParagraphs: Bilingual[] = [
    {
      fr: "Je suis Mohamed Amine Ziani, étudiant ingénieur en 2ème année à l'ENSEEIHT (filière Architecture des Ordinateurs et Réseaux) à Toulouse, issu des classes préparatoires aux grandes écoles scientifiques au Maroc.",
      en: "I'm Mohamed Amine Ziani, a 2nd-year engineering student at ENSEEIHT (Computer Architecture & Networks major) in Toulouse, coming from scientific preparatory classes for engineering schools in Morocco.",
    },
    {
      fr: "Rigoureux et passionné par le développement logiciel, l'algorithmique et l'intelligence artificielle, je recherche un stage pour consolider mes compétences dans un environnement professionnel stimulant.",
      en: "Rigorous and passionate about software development, algorithms, and artificial intelligence, I'm looking for an internship to strengthen my skills in a stimulating professional environment.",
    },
    {
      fr: "Mon parcours m'a permis de développer une solide base en programmation (Python, C, Java), en vision par ordinateur et en réseaux, tout en cultivant des qualités de leadership à travers mes engagements associatifs.",
      en: "My journey has given me a solid foundation in programming (Python, C, Java), computer vision, and networking, while cultivating leadership qualities through my community involvement.",
    },
  ];

  const stats = [
    { value: "4", label: aboutText.statLanguages },
    { value: "5+", label: aboutText.statProjects },
    { value: "2", label: aboutText.statResponsibilities },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
            {t(aboutText.badge, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(aboutText.title, lang)}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t(aboutText.cardTitle, lang)}
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                {bioParagraphs.map((p, i) => (
                  <p key={i}>{t(p, lang)}</p>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{t(stat.label, lang)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div
            className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="glass rounded-xl p-5 hover:bg-white/[0.08] transition-all group"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {t(item.title, lang)}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {t(item.description, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
