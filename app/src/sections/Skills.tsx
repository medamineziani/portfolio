import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Globe,
  Brain,
  Wrench,
  GitBranch,
  CheckCircle2,
} from "lucide-react";
import { skills } from "@/data/portfolio";

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
  isVisible: boolean;
}

function SkillBar({ name, level, delay, isVisible }: SkillBarProps) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
          {name}
        </span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

const skillCategories = [
  {
    title: "Langages de Programmation",
    icon: Code2,
    skills: skills.languages,
  },
  {
    title: "Web & Data Science",
    icon: Globe,
    skills: skills.webData,
  },
  {
    title: "IA & Vision par Ordinateur",
    icon: Brain,
    skills: skills.aiVision,
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
            Compétences
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mes Expertises
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un ensemble de compétences techniques développées à travers mes formations
            et projets pratiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Skill Categories */}
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.15 * i}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, j) => (
                  <SkillBar
                    key={j}
                    name={skill.name}
                    level={skill.level}
                    delay={0.1 * j + 0.15 * i}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Methods */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {/* Tools */}
          <div
            className={`glass rounded-2xl p-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-semibold text-white">Outils</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-lg border border-white/10"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Methods */}
          <div
            className={`glass rounded-2xl p-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-semibold text-white">Méthodologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.methods.map((method, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-lg border border-white/10"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div
          className={`mt-8 glass rounded-2xl p-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-base font-semibold text-white mb-5">Langues</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Français", level: "Langue maternelle", dots: 5 },
              { name: "Anglais", level: "Courant", dots: 4 },
              { name: "Arabe", level: "Courant", dots: 5 },
              { name: "Tamazight", level: "Courant", dots: 5 },
            ].map((lang, i) => (
              <div key={i} className="text-center">
                <div className="text-sm font-medium text-white mb-1">
                  {lang.name}
                </div>
                <div className="text-xs text-gray-500 mb-2">{lang.level}</div>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className={`w-2 h-2 rounded-full ${
                        j < lang.dots ? "bg-cyan-400" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
