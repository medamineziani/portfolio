import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { internships } from "@/data/portfolio";
import { useLanguage, t } from "@/lib/i18n";
import { internships as internshipsText } from "@/data/uiText";

export default function Internships() {
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
      id="internships"
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
            {t(internshipsText.badge, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(internshipsText.title, lang)}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t(internshipsText.subtitle, lang)}
          </p>
        </div>

        <div className="space-y-6">
          {internships.map((job, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.08] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.15 * i}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white">
                      {t(job.role, lang)}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                      {t(job.companyType, lang)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-300 mb-2">{job.company}</p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {t(job.period, lang)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {t(job.location, lang)}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {t(job.summary, lang)}
                  </p>

                  {job.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{t(h, lang)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className="inline-block mt-4 px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-lg border border-white/10">
                    {t(job.skillTag, lang)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
