import { useEffect, useRef, useState } from "react";
import { User, Target, Rocket, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Formation d'excellence",
    description: "CPGE scientifiques au Maroc, actuellement en 1ère année à l'ENSEEIHT",
  },
  {
    icon: Target,
    title: "Orienté résultats",
    description: "Passionné par le développement logiciel, l'algorithmique et l'IA",
  },
  {
    icon: Rocket,
    title: "Projets concrets",
    description: "Expérience en vision par ordinateur, réseaux et développement collaboratif",
  },
  {
    icon: User,
    title: "Leadership",
    description: "Responsable de club académique et délégué de classe",
  },
];

export default function About() {
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
            À propos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Qui suis-je ?
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
                Étudiant ingénieur passionné par le numérique
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Je suis <span className="text-cyan-400 font-medium">Mohamed Amine Ziani</span>,
                  étudiant ingénieur de 20 ans en première année à l'ENSEEIHT (Sciences du Numérique)
                  à Toulouse, issu des classes préparatoires aux grandes écoles scientifiques au Maroc.
                </p>
                <p>
                  Rigoureux et passionné par le développement logiciel, l'algorithmique et l'intelligence
                  artificielle, je recherche un stage pour consolider mes compétences dans un environnement
                  professionnel stimulant.
                </p>
                <p>
                  Mon parcours m'a permis de développer une solide base en programmation (Python, C, Java),
                  en vision par ordinateur et en réseaux, tout en cultivant des qualités de leadership
                  à travers mes engagements associatifs.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4", label: "Langues" },
                { value: "4+", label: "Projets" },
                { value: "2", label: "Responsabilités" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
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
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
