import { useEffect, useRef, useState } from "react";
import { Download, FileText, Linkedin, ExternalLink, Globe2, UserRound } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { careerCvs, pitchVideoUrl, roleModels, mobilityProjects } from "@/data/career";
import { useLanguage, t } from "@/lib/i18n";
import { career as text } from "@/data/uiText";

export default function Career() {
  const { lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const reveal = `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
  const card = "glass rounded-2xl p-6 hover:bg-white/[0.08] transition-colors";
  const btn =
    "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 transition-colors";

  return (
    <section id="career" ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 ${reveal}`}>
          <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
            {t(text.badge, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t(text.title, lang)}</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">{t(text.subtitle, lang)}</p>
        </div>

        <div className={`grid sm:grid-cols-3 gap-6 ${reveal}`}>
          {careerCvs.map((cv) => (
            <div key={cv.lang} className={card}>
              <FileText className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-base font-semibold text-white mb-4">{t(cv.label, lang)}</h3>
              <a
                href={`${import.meta.env.BASE_URL}${cv.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className={btn}
              >
                <Download className="w-4 h-4" />
                {t(text.download, lang)}
              </a>
            </div>
          ))}
          <div className={card}>
            <Linkedin className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-base font-semibold text-white mb-4">{t(text.linkedin, lang)}</h3>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className={btn}>
              <ExternalLink className="w-4 h-4" />
              {t(text.linkedinOpen, lang)}
            </a>
          </div>
        </div>

        {pitchVideoUrl && (
          <div className={`mt-10 ${reveal}`}>
            <h3 className="text-lg font-semibold text-white mb-4">{t(text.pitch, lang)}</h3>
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src={pitchVideoUrl}
                title={t(text.pitch, lang)}
                loading="lazy"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        )}

        {roleModels.length > 0 && (
          <div className={`mt-10 ${reveal}`}>
            <h3 className="text-lg font-semibold text-white mb-4">{t(text.roleModels, lang)}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {roleModels.map((r) => (
                <div key={r.name} className={card}>
                  <UserRound className="w-6 h-6 text-cyan-400 mb-3" />
                  <p className="font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-gray-500 mb-3">
                    {t(r.jobTitle, lang)} · {r.company}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">{t(r.insight, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {mobilityProjects.length > 0 && (
          <div className={`mt-10 ${reveal}`}>
            <h3 className="text-lg font-semibold text-white mb-4">{t(text.mobility, lang)}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {mobilityProjects.map((m, i) => (
                <div key={i} className={card}>
                  <Globe2 className="w-6 h-6 text-cyan-400 mb-3" />
                  <p className="font-semibold text-white mb-1">{t(m.destination, lang)}</p>
                  <p className="text-xs text-cyan-400 mb-3">{t(m.alignedWith, lang)}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{t(m.description, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
