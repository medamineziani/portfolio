import { MapPin, Mail, Phone, Linkedin, ChevronDown, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useLanguage, t } from "@/lib/i18n";
import { hero } from "@/data/uiText";
import HeroBackground from "@/components/HeroBackground";
import profileImage from "../assets/ziani.jpg";

export default function Hero() {
  const { lang } = useLanguage();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated / AI-generated background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-20 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow mb-8 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
          </span>
          <span className="text-sm text-cyan-400 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {t(personalInfo.availability, lang)}
          </span>
        </div>


        {/* Photo */}
        <div className="mb-8 flex justify-center animate-fade-in-up">
          <img
            src={profileImage}
            alt="Mohamed Amine Ziani"
            className="w-48 h-48 rounded-full object-cover border-4 border-cyan-500/30 shadow-xl"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
          <span className="text-white">Mohamed Amine</span>
          <br />
          <span className="text-gradient">Ziani</span>
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-gray-400 mb-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {t(personalInfo.title, lang)}
        </p>
        <p className="text-base sm:text-lg text-gray-500 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {t(personalInfo.subtitle, lang)}
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {t(personalInfo.description, lang)}
        </p>

        {/* Quick Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <MapPin className="w-4 h-4 text-cyan-400" />
            {personalInfo.address}
          </div>
          <span className="hidden sm:inline text-gray-600">·</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            {personalInfo.email}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group"
          >
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-xl glass hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group"
          >
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="p-3 rounded-xl glass hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group"
          >
            <Phone className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={() => scrollTo("#projects")}
            className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
          >
            {t(hero.viewProjects, lang)}
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-3 glass text-white font-medium rounded-xl hover:bg-white/10 transition-colors border-glow"
          >
            {t(hero.contactMe, lang)}
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollTo("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
