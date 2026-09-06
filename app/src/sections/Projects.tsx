import { useEffect, useRef, useState } from "react";
import {
  Dumbbell,
  Network,
  ScanEye,
  ShoppingBag,
  LineChart,
  Home,
  Shield,
  Code2,
  Github,
  Calendar,
  Building2,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import { projectMedia } from "@/data/media";
import { useLanguage, t } from "@/lib/i18n";
import { projects as projectsText } from "@/data/uiText";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell,
  Network,
  ScanEye,
  ShoppingBag,
  LineChart,
  Home,
  Shield,
};

export default function Projects() {
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
      id="projects"
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
            {t(projectsText.badge, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(projectsText.title, lang)}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t(projectsText.subtitle, lang)}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Code2;
            const media = projectMedia[project.title.en];

            return (
              <div
                key={i}
                className={`group glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-500 flex flex-col animate-pulse-glow hover:shadow-lg hover:shadow-cyan-500/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.15 * i}s` }}
              >
                {/* AI-generated visual (optional, see src/data/media.ts) */}
                {media && (media.video || media.image) && (
                  <div className="relative -mx-6 -mt-6 mb-5 aspect-video overflow-hidden rounded-t-2xl border-b border-white/10 bg-black/40">
                    {media.image && (
                      <img
                        src={media.image}
                        alt={t(project.title, lang)}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    {media.video && (
                      <video
                        src={media.video}
                        poster={media.image}
                        muted
                        loop
                        playsInline
                        preload="none"
                        onMouseEnter={(e) => void e.currentTarget.play().catch(() => {})}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {t(project.title, lang)}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          {t(project.organization, lang)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t(projectsText.viewCode, lang)}
                      className="p-2 -m-2 rounded-lg text-gray-600 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {t(project.description, lang)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-lg border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto pt-2 flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      {t(projectsText.viewCode, lang)}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-gray-500 hover:text-cyan-400 transition-colors"
                    >
                      {t(projectsText.liveDemo, lang)}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
