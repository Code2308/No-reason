import React, { useEffect, useState } from "react";

export default function Loading({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 text-center">
      {/* 🏛️ Ikon bangunan putih */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-20 h-20 sm:w-28 sm:h-28 mb-6 animate-pulse drop-shadow-lg"
      >
        <path d="M12 2 2 7v2h2v9H2v2h20v-2h-2V9h2V7L12 2Zm6 16H6V9h12v9Z" />
      </svg>

      {/* Judul Loading */}
      <h1 className="text-lg sm:text-2xl font-semibold mb-4">
        Memuat Budaya Nusantara...
      </h1>

      {/* Progress bar */}
      <div className="w-full max-w-xs sm:max-w-md bg-white/30 rounded-full h-2 overflow-hidden">
        <div
          className="bg-white h-2 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Persentase */}
      <p className="mt-3 text-sm sm:text-base">{progress}%</p>
    </div>
  );
}
