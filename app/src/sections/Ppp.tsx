import { useEffect, useRef, useState } from "react";
import {
  Download,
  FileText,
  Linkedin,
  ExternalLink,
  Globe2,
  UserRound,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Dumbbell,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { personalInfo, projects, responsibilities, languages, interests } from "@/data/portfolio";
import {
  careerCvs,
  pitchVideoUrl,
  pitchScript,
  roleModels,
  mobilityProjects,
} from "@/data/career";
import { useLanguage, t } from "@/lib/i18n";
import { ppp as text, projects as projectsText } from "@/data/uiText";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tabs = [
  { id: "welcome", icon: Sparkles },
  { id: "course", icon: GraduationCap },
  { id: "mobility", icon: Globe2 },
  { id: "civic", icon: HeartHandshake },
  { id: "sport", icon: Dumbbell },
  { id: "career", icon: Briefcase },
] as const;

const card = "glass rounded-2xl p-6 hover:bg-white/[0.08] transition-colors";
const btn =
  "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 transition-colors";
const btnGhost =
  "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl glass text-white hover:bg-white/10 transition-colors";

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Ppp() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const reveal = `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
  const categoryCounts = (Object.keys(projectsText.categories) as string[])
    .map((c) => ({ c, n: projects.filter((p) => (p.categories as string[]).includes(c)).length }))
    .filter((x) => x.n > 0);
  const sportInterests = interests.filter((i) => ["Powerlifting", "Natation", "Football"].includes(i.name.fr));
  const otherInterests = interests.filter((i) => !sportInterests.includes(i));

  return (
    <section id="ppp" ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${reveal}`}>
          <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
            {t(text.badge, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t(text.title, lang)}</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">{t(text.subtitle, lang)}</p>
        </div>

        <Tabs defaultValue="welcome" className={reveal}>
          <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0">
            {tabs.map(({ id, icon: Icon }) => (
              <TabsTrigger
                key={id}
                value={id}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-500 data-[state=active]:text-black hover:text-cyan-400"
              >
                <Icon className="h-4 w-4" />
                {t(text.tabs[id], lang)}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 1. Welcome */}
          <TabsContent value="welcome">
            <div className={`${card} text-center max-w-3xl mx-auto`}>
              <h3 className="text-xl font-semibold text-white mb-3">{t(text.welcomeTitle, lang)}</h3>
              <p className="text-gray-400 leading-relaxed mb-4">{t(personalInfo.description, lang)}</p>
              <p className="text-cyan-400 text-sm font-medium mb-6">{t(personalInfo.availability, lang)}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className={btn} onClick={() => scrollTo("#projects")}>
                  {t(text.seeProjects, lang)}
                </button>
                <button className={btnGhost} onClick={() => scrollTo("#education")}>
                  {t(text.seeEducation, lang)}
                </button>
                <button className={btnGhost} onClick={() => scrollTo("#internships")}>
                  {t(text.seeInternships, lang)}
                </button>
              </div>
            </div>
          </TabsContent>

          {/* 2. Engineering course */}
          <TabsContent value="course">
            <div className={`${card} max-w-3xl mx-auto`}>
              <h3 className="text-xl font-semibold text-white mb-3">{t(text.courseTitle, lang)}</h3>
              <p className="text-gray-400 leading-relaxed mb-5">{t(text.courseText, lang)}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {categoryCounts.map(({ c, n }) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {t(projectsText.categories[c], lang)}
                    <span className="ml-2 text-xs text-cyan-400">
                      {n} {t(text.projectsLabel, lang)}
                    </span>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button className={btn} onClick={() => scrollTo("#projects")}>
                  {t(text.seeProjects, lang)}
                </button>
                <button className={btnGhost} onClick={() => scrollTo("#internships")}>
                  {t(text.seeInternships, lang)}
                </button>
              </div>
            </div>
          </TabsContent>

          {/* 3. International mobility */}
          <TabsContent value="mobility">
            <h3 className="text-xl font-semibold text-white mb-2">{t(text.mobilityTitle, lang)}</h3>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-3xl">{t(text.mobilityText, lang)}</p>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs text-gray-500 mr-1">{t(text.languagesLabel, lang)}</span>
              {languages.map((l, i) => (
                <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                  {t(l.name, lang)} · {t(l.level, lang)}
                </span>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {mobilityProjects.map((m, i) => (
                <div key={i} className={card}>
                  <Globe2 className="w-6 h-6 text-cyan-400 mb-3" />
                  <p className="font-semibold text-white mb-1">{t(m.destination, lang)}</p>
                  <p className="text-xs text-cyan-400 mb-3">
                    {t(text.alignedWith, lang)} : {m.alignedWith}
                  </p>
                  <p className="text-sm text-gray-300 mb-2">{t(m.host, lang)}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{t(m.goal, lang)}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">{t(text.mobilityNote, lang)}</p>
          </TabsContent>

          {/* 4. Sustainability & civic engagement */}
          <TabsContent value="civic">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className={card}>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-1">
                  <HeartHandshake className="w-5 h-5 text-cyan-400" />
                  {t(text.civicTitle, lang)}
                </h3>
                <p className="text-xs text-cyan-400 mb-4">{t(text.civicDone, lang)}</p>
                <div className="space-y-4">
                  {responsibilities.map((r, i) => (
                    <div key={i}>
                      <p className="text-sm font-semibold text-white">
                        {t(r.role, lang)} <span className="text-gray-500 font-normal">· {t(r.period, lang)}</span>
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">{t(r.description, lang)}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-xs text-cyan-400 mb-1">{t(text.civicGoal, lang)}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{t(text.civicGoalText, lang)}</p>
                </div>
              </div>
              <div className={card}>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-1">
                  <Leaf className="w-5 h-5 text-cyan-400" />
                  {t(text.sustainTitle, lang)}
                </h3>
                <p className="text-xs text-cyan-400 mb-4">{t(text.civicDone, lang)}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{t(text.sustainText, lang)}</p>
              </div>
            </div>
          </TabsContent>

          {/* 5. Sport & other activities */}
          <TabsContent value="sport">
            <div className={`${card} max-w-3xl mx-auto`}>
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-3">
                <Dumbbell className="w-5 h-5 text-cyan-400" />
                {t(text.sportTitle, lang)}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-5">{t(text.sportText, lang)}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {sportInterests.map((i, k) => (
                  <span key={k} className="px-3 py-1.5 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                    {t(i.name, lang)}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {otherInterests.map((i, k) => (
                  <span key={k} className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {t(i.name, lang)}
                  </span>
                ))}
              </div>
              <button className={btn} onClick={() => scrollTo("#projects")}>
                {t(text.seeProjects, lang)}
              </button>
            </div>
          </TabsContent>

          {/* 6. Career development */}
          <TabsContent value="career">
            <h3 className="text-xl font-semibold text-white mb-4">{t(text.careerTitle, lang)}</h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {careerCvs.map((cv) => (
                <div key={cv.lang} className={card}>
                  <FileText className="w-6 h-6 text-cyan-400 mb-3" />
                  <h4 className="text-base font-semibold text-white mb-4">{t(cv.label, lang)}</h4>
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
                <h4 className="text-base font-semibold text-white mb-4">{t(text.linkedin, lang)}</h4>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className={btn}>
                  <ExternalLink className="w-4 h-4" />
                  {t(text.linkedinOpen, lang)}
                </a>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-white mb-1">{t(text.roleModels, lang)}</h4>
            <p className="text-xs text-gray-500 mb-4">{t(text.roleModelsNote, lang)}</p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {roleModels.map((r) => (
                <div key={r.name} className={card}>
                  <UserRound className="w-6 h-6 text-cyan-400 mb-3" />
                  <p className="font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-cyan-400 mb-3">{t(r.jobTitle, lang)}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{t(r.path, lang)}</p>
                  <p className="text-xs text-gray-500 mb-1">{t(text.takeaway, lang)}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-3">{t(r.takeaway, lang)}</p>
                  <a
                    href={r.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {t(text.source, lang)}
                  </a>
                </div>
              ))}
            </div>

            {pitchVideoUrl && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">{t(text.pitch, lang)}</h4>
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

            <details className={card}>
              <summary className="cursor-pointer text-base font-semibold text-white">
                {t(text.pitchScript, lang)}
              </summary>
              <div className="mt-4 space-y-3 text-sm text-gray-400 leading-relaxed">
                {pitchScript.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
