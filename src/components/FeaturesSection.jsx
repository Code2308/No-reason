import React from 'react';

// SVG Icons
const icons = {
  exploration: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  translator: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  ),
  ai: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  multimedia: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  map: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.447-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  community: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
};

const FeaturesSection = () => {
  const features = [
    {
      icon: icons.exploration,
      title: "Penjelajahan Budaya",
      description: "Akses berbagai konten budaya dari seluruh Indonesia dalam satu platform lengkap. Jelajahi kekayaan tradisi, adat istiadat, seni, dan warisan budaya nusantara dengan mudah dan menyenangkan.",
      items: [
        "Katalog budaya terlengkap",
        "Konten terkurasi ahli",
        "Navigasi intuitif"
      ],
      buttonText: "Jelajahi Sekarang"
    },
    {
      icon: icons.translator,
      title: "Penerjemah Bahasa Daerah",
      description: "Terjemahkan teks antar bahasa daerah dengan akurat. Dukung pelestarian bahasa lokal dan pahami makna kata dalam berbagai bahasa daerah Indonesia.",
      items: [
        "30+ bahasa daerah",
        "Terjemahan real-time",
        "Audio pengucapan"
      ],
      buttonText: "Coba Penerjemah"
    },
    {
      icon: icons.ai,
      title: "Asisten Budaya AI",
      description: "Dapatkan jawaban instan tentang budaya Indonesia dari asisten AI yang cerdas. Tanya tentang adat, tradisi, sejarah, dan makna filosofis budaya nusantara.",
      items: [
        "24/7 tersedia",
        "Jawaban akurat",
        "Kontekstual & detail"
      ],
      buttonText: "Tanya Asisten"
    },
    {
      icon: icons.multimedia,
      title: "Konten Multimedia",
      description: "Nikmati pengalaman belajar yang imersif melalui video dokumenter, audio tradisional, galeri foto, dan artikel mendalam tentang berbagai aspek budaya.",
      items: [
        "Video dokumenter",
        "Audio tradisional",
        "Galeri foto HD"
      ],
      buttonText: "Lihat Konten"
    },
    {
      icon: icons.map,
      title: "Peta Budaya Interaktif",
      description: "Jelajahi distribusi budaya di seluruh Indonesia melalui peta interaktif. Temukan kekhasan budaya setiap daerah dengan visualisasi yang menarik.",
      items: [
        "Peta real-time",
        "Filter daerah",
        "Info lengkap"
      ],
      buttonText: "Buka Peta"
    },
    {
      icon: icons.community,
      title: "Komunitas Budaya",
      description: "Bergabung dengan komunitas pecinta budaya, berbagi pengetahuan, dan ikuti event budaya seru. Terhubung dengan sesama pelestari budaya Indonesia.",
      items: [
        "Forum diskusi",
        "Event rutin",
        "Networking"
      ],
      buttonText: "Gabung Komunitas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fitur Unggulan Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan semua yang Anda butuhkan untuk mempelajari budaya, 
            berinteraksi dengan komunitas, dan menjelajahi kekayaan platform terintegrasi
          </p>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Komponen Kartu Fitur dengan SVG Icons
const FeatureCard = ({ feature, index }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 overflow-hidden transform hover:-translate-y-2">
      <div className="p-8">
        {/* Header dengan Icon dan Nomor */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            <div className="text-teal-600 mr-4">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
              {feature.title}
            </h3>
          </div>
          <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">
            {index + 1}
          </div>
        </div>

        {/* Deskripsi */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {feature.description}
        </p>

        {/* Fitur-fitur */}
        <ul className="space-y-3 mb-8">
          {feature.items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg">
          {feature.buttonText}
        </button>
      </div>
    </div>
  );
};

export default FeaturesSection;