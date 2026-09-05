import { useEffect, useRef, useState } from "react";
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";
import { useLanguage, t } from "@/lib/i18n";
import { education as educationText } from "@/data/uiText";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  BookOpen,
  Award,
};

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
            {t(educationText.badge, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(educationText.title, lang)}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-transparent" />

          {education.map((edu, i) => {
            const Icon = iconMap[edu.icon] || BookOpen;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.15 * i}s` }}
              >
                {/* Desktop Layout */}
                <div className="hidden sm:grid sm:grid-cols-2 sm:gap-8 w-full">
                  {/* Content - placed in the left or right column depending on isLeft */}
                  <div
                    className={`${isLeft ? "text-right pr-8" : "col-start-2 pl-8"}`}
                  >
                    <div
                      className={`glass rounded-xl p-6 relative ${
                        isLeft ? "animate-slide-in-left" : "animate-slide-in-right"
                      }`}
                    >
                      {/* Arrow */}
                      <div
                        className={`absolute top-6 w-3 h-3 bg-white/10 border-r border-b border-white/10 rotate-45 ${
                          isLeft
                            ? "-right-1.5 border-t-0 border-l-0"
                            : "-left-1.5 border-t-0 border-l-0 rotate-[225deg]"
                        }`}
                      />

                      <div className="flex items-center gap-2 mb-2 justify-end">
                        <span className="text-sm font-medium text-cyan-400 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {t(edu.period, lang)}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-1">
                        {t(edu.degree, lang)}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3 justify-end">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {t(edu.location, lang)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{t(edu.school, lang)}</p>
                      {t(edu.description, lang) && (
                        <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                          {t(edu.description, lang)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-6`}
                  >
                    <div className="w-12 h-12 rounded-full glass border-glow flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="sm:hidden flex gap-4 w-full">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full glass border-glow flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-sm font-medium text-cyan-400">
                        {t(edu.period, lang)}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {t(edu.degree, lang)}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">{t(edu.school, lang)}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                      <MapPin className="w-3 h-3" />
                      {t(edu.location, lang)}
                    </div>
                    {t(edu.description, lang) && (
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {t(edu.description, lang)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
