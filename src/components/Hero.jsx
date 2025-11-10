// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/e3/7d/08/e37d0869a62d95a3e1af46ce658656d2.jpg')", // Ganti nanti dengan path kamu
      }}
    >
      {/* Lapisan overlay transparan */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

      {/* SEGITIGA 3D BESAR DENGAN GLOW */}
      <div className="absolute inset-0 z-0 flex items-center justify-center triangle-3d">
        <div className="triangle-3d-inner animate-float-slow">
          <div className="w-[180vw] h-[180vh] bg-gray-300/25 clip-triangle blur-[2px] shadow-[0_0_80px_20px_rgba(255,255,255,0.1)]"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay"></div>
        </div>
      </div>

      {/* Konten utama */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Jelajahi Kekayaan Budaya Indonesia
        </h1>
        <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed">
          Platform digital lengkap untuk mempelajari, melestarikan, dan
          merayakan warisan budaya Nusantara dari Sabang sampai Merauke.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#jelajahi"
            className="bg-yellow-400 text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 shadow-md transition-all duration-300"
          >
            Mulai Menjelajahi
          </a>
          <a
            href="#fitur"
            className="border border-white/80 text-white px-6 py-3 rounded-full hover:bg-white hover:text-teal-700 font-medium transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
}
