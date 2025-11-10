import React, { useState } from "react";
import { Home, Star, Compass, Info, Bot } from "lucide-react";

export default function Navbar({ onToggleLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ID");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLanguageToggle = () => {
    const newLang = language === "ID" ? "EN" : "ID";
    setLanguage(newLang);
    if (onToggleLanguage) onToggleLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-teal-800/95 backdrop-blur-lg text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-bold text-yellow-400 text-lg">
          <span className="text-2xl">🏛️</span>
          <div className="flex flex-col leading-tight">
            <span>Budaya</span>
            <span>Nusantara</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="flex items-center space-x-1 hover:text-emerald-400 transition-colors duration-300"
          >
            <Home className="w-4 h-4" /> <span>Beranda</span>
          </a>
          <a
            href="#fitur"
            className="flex items-center space-x-1 hover:text-emerald-400 transition-colors duration-300"
          >
            <Star className="w-4 h-4" /> <span>Fitur</span>
          </a>
          <a
            href="#jelajahi"
            className="flex items-center space-x-1 hover:text-emerald-400 transition-colors duration-300"
          >
            <Compass className="w-4 h-4" /> <span>Jelajahi</span>
          </a>
          <a
            href="#tentang"
            className="flex items-center space-x-1 hover:text-emerald-400 transition-colors duration-300"
          >
            <Info className="w-4 h-4" /> <span>Tentang</span>
          </a>
        </nav>

        {/* Language + Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLanguageToggle}
            className="bg-yellow-400 text-teal-900 font-semibold px-3 py-1 rounded-md hover:bg-yellow-300 transition"
          >
            {language}
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none hover:text-emerald-400"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-teal-900 text-white px-6 py-4 space-y-3 animate-slideDown">
          <a href="#home" className="block hover:text-emerald-400">
            Beranda
          </a>
          <a href="#fitur" className="block hover:text-emerald-400">
            Fitur
          </a>
          <a href="#jelajahi" className="block hover:text-emerald-400">
            Jelajahi
          </a>
          <a href="#tentang" className="block hover:text-emerald-400">
            Tentang
          </a>
        </nav>
      )}
    </header>
  );
}
