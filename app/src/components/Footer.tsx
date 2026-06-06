import { Code2, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Name */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-black" />
            </div>
            <span className="text-sm font-medium text-gray-400">
              {personalInfo.shortName}
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>&copy; {currentYear}</span>
            <span>·</span>
            <span>Fait avec</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>à Toulouse</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs text-gray-500 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
