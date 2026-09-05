import { useState, useEffect } from "react";
import { Menu, X, Code2, Languages } from "lucide-react";
import { useLanguage, type Lang, t } from "@/lib/i18n";
import { nav } from "@/data/uiText";

function LangToggle({
  lang,
  onToggle,
  className = "",
}: {
  lang: Lang;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5 ${className}`}
    >
      <Languages className="w-4 h-4" />
      {lang === "fr" ? "FR" : "EN"}
    </button>
  );
}

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t(nav.home, lang), href: "#hero" },
    { label: t(nav.about, lang), href: "#about" },
    { label: t(nav.education, lang), href: "#education" },
    { label: t(nav.projects, lang), href: "#projects" },
    { label: t(nav.skills, lang), href: "#skills" },
    { label: t(nav.contact, lang), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-strong border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              AZ
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Language Toggle + CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <LangToggle lang={lang} onToggle={toggleLang} />
            <button
              onClick={() => scrollTo("#contact")}
              className="px-4 py-2 text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-all"
            >
              {t(nav.contactCta, lang)}
            </button>
          </div>

          {/* Mobile: Lang Toggle + Menu Button */}
          <div className="flex items-center gap-1 md:hidden">
            <LangToggle lang={lang} onToggle={toggleLang} className="px-2" />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-400 hover:text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-4 py-2.5 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full mt-2 px-4 py-2.5 text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-all"
            >
              {t(nav.contactCta, lang)}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
