import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Copy,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
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
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Me Contacter
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité de stage ou collaboration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Email */}
          <div
            className={`glass rounded-xl p-5 group hover:bg-white/[0.08] transition-all ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Email</h4>
              </div>
            </div>
            <p className="text-sm text-white mb-3 break-all">
              {personalInfo.email}
            </p>
            <div className="flex gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                <Send className="w-3 h-3" />
                Envoyer
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 transition-colors"
              >
                {copied ? (
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
                {copied ? "Copié" : "Copier"}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div
            className={`glass rounded-xl p-5 group hover:bg-white/[0.08] transition-all ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Téléphone</h4>
              </div>
            </div>
            <p className="text-sm text-white mb-3">{personalInfo.phone}</p>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors"
            >
              <Phone className="w-3 h-3" />
              Appeler
            </a>
          </div>

          {/* LinkedIn */}
          <div
            className={`glass rounded-xl p-5 group hover:bg-white/[0.08] transition-all ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">LinkedIn</h4>
              </div>
            </div>
            <p className="text-sm text-white mb-3 break-all">
              {personalInfo.linkedin}
            </p>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Voir le profil
            </a>
          </div>
        </div>

        {/* Location */}
        <div
          className={`mt-4 glass rounded-xl p-5 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400">Localisation</h4>
            <p className="text-sm text-white">{personalInfo.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
