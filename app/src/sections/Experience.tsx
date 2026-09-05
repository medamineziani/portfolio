import { useEffect, useRef, useState } from "react";
import { Users, UserCheck, Calendar, Building2 } from "lucide-react";
import { responsibilities, interests, softSkills } from "@/data/portfolio";
import { useLanguage, t } from "@/lib/i18n";
import { experience as experienceText } from "@/data/uiText";

const respIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  UserCheck,
};

const interestIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal: Code2,
  Trophy,
  Brain,
  Github,
  Dumbbell,
  Waves,
  Goal: Target,
  Atom,
  Shield,
};

import {
  Code2,
  Trophy,
  Brain,
  Github,
  Dumbbell,
  Waves,
  Target,
  Atom,
  Shield,
} from "lucide-react";

export default function Experience() {
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

  return (
    <section
      id="experience"
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
            {t(experienceText.badge, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(experienceText.title, lang)}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Responsibilities */}
          <div
            className={`space-y-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-cyan-400" />
              {t(experienceText.responsibilities, lang)}
            </h3>

            {responsibilities.map((resp, i) => {
              const Icon = respIconMap[resp.icon] || UserCheck;

              return (
                <div
                  key={i}
                  className="glass rounded-xl p-5 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {t(resp.role, lang)}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          {t(resp.organization, lang)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {t(resp.period, lang)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                        {t(resp.description, lang)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interests */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              {t(experienceText.interests, lang)}
            </h3>

            <div className="glass rounded-xl p-5">
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, i) => {
                  const Icon = interestIconMap[interest.icon] || Brain;

                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-cyan-500/10 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {t(interest.name, lang)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mt-4 glass rounded-xl p-5">
              <h4 className="text-sm font-semibold text-white mb-3">
                {t(experienceText.softSkillsTitle, lang)}
              </h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((quality, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs bg-white/5 text-gray-400 rounded-lg border border-white/10"
                  >
                    {t(quality, lang)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
