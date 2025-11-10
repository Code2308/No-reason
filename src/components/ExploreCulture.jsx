import React, { useState, useEffect, useRef } from 'react';

const ExploreCulture = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const sectionRef = useRef(null);

  const categories = [
    "Semua",
    "Tradisi",
    "Kesenian",
    "Kuliner",
    "Festival",
    "Pakaian",
    "Arsitektur",
    "Alat Musik",
    "Tarian"
  ];

  const allCultureCards = [
    {
      id: 1,
      title: "Upacara Adat Jawa",
      description: "Ritual tradisional masyarakat Jawa yang kaya akan simbolisme dan filosofi kehidupan. Meliputi berbagai upacara dari kelahiran hingga kematian.",
      image: "https://images.unsplash.com/photo-1557456173-551e7fc7a3d3?w=400&h=250&fit=crop",
      region: "Jawa Tengah",
      category: "Tradisi"
    },
    {
      id: 2,
      title: "Rumah Adat Toraja",
      description: "Arsitektur tradisional Tongkonan dengan atap melengkung khas Sulawesi Selatan. Simbol status sosial dan kepercayaan masyarakat Toraja.",
      image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=400&h=250&fit=crop",
      region: "Sulawesi Selatan",
      category: "Arsitektur"
    },
    {
      id: 3,
      title: "Tradisi Bali - Upacara Ngaben",
      description: "Ritual kremasi dalam tradisi Hindu Bali untuk melepas arwah menuju alam selanjutnya. Prosesi warna-warni yang penuh makna filosofis.",
      image: "https://images.unsplash.com/photo-1537983784403-62a102d0b79f?w=400&h=250&fit=crop",
      region: "Bali",
      category: "Tradisi"
    },
    {
      id: 4,
      title: "Tari Saman Aceh",
      description: "Tarian tradisional Aceh yang menampilkan gerakan harmonis dan tepukan tangan. Ditetapkan sebagai Warisan Budaya Takbenda UNESCO.",
      image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=250&fit=crop",
      region: "Aceh",
      category: "Tarian"
    },
    {
      id: 5,
      title: "Wayang Kulit",
      description: "Seni pertunjukan bayangan menggunakan boneka kulit yang menceritakan epik Mahabharata dan Ramayana.",
      image: "https://images.unsplash.com/photo-1595986630530-969786d19a3b?w=400&h=250&fit=crop",
      region: "Jawa Tengah",
      category: "Kesenian"
    },
    {
      id: 6,
      title: "Rendang Padang",
      description: "Masakan tradisional Minangkabau yang kaya rempah. Dinobatkan sebagai makanan terenak di dunia oleh CNN Travel.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=250&fit=crop",
      region: "Sumatera Barat",
      category: "Kuliner"
    },
    {
      id: 7,
      title: "Festival Danau Sentani",
      description: "Festival tahunan di Papua yang menampilkan tarian perang, ukiran khas, dan keindahan alam Danau Sentani.",
      image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=400&h=250&fit=crop",
      region: "Papua",
      category: "Festival"
    },
    {
      id: 8,
      title: "Tenun Ikat Flores",
      description: "Kain tenun tradisional dengan motif geometris yang memiliki makna spiritual dan status sosial dalam masyarakat Flores.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop",
      region: "Nusa Tenggara Timur",
      category: "Pakaian"
    },
    // Card tambahan untuk kategori yang berbeda
    {
      id: 9,
      title: "Gamelan Jawa",
      description: "Ensembel musik tradisional Jawa yang terdiri dari berbagai alat musik perkusi. Simbol harmonisasi dalam kehidupan.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      region: "Jawa Tengah",
      category: "Alat Musik"
    },
    {
      id: 10,
      title: "Tari Kecak Bali",
      description: "Tarian drama tari khas Bali yang dimainkan oleh puluhan penari laki-laki. Dikenal dengan seni suara 'cak' yang khas.",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=250&fit=crop",
      region: "Bali",
      category: "Tarian"
    },
    {
      id: 11,
      title: "Batik Indonesia",
      description: "Seni melukis di atas kain dengan teknik canting dan cap. Warisan budaya dunia yang diakui UNESCO.",
      image: "https://images.unsplash.com/photo-1584977902618-31d87ae942d0?w=400&h=250&fit=crop",
      region: "Jawa",
      category: "Pakaian"
    },
    {
      id: 12,
      title: "Sate Madura",
      description: "Hidangan sate khas Madura dengan bumbu kacang yang khas. Salah satu kuliner street food terpopuler Indonesia.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
      region: "Jawa Timur",
      category: "Kuliner"
    }
  ];

  // Filter cards berdasarkan kategori aktif
  const filteredCards = activeCategory === "Semua" 
    ? allCultureCards 
    : allCultureCards.filter(card => card.category === activeCategory);

  // Intersection Observer untuk animasi scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSeeMore = () => {
    window.location.href = '/budaya';
  };

  const handleCardClick = (cardId) => {
    window.location.href = `/budaya/${cardId}`;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header Section dengan animasi */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jelajahi Budaya Nusantara
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan kekayaan budaya Indonesia melalui berbagai kategori dan filter yang mudah digunakan
          </p>
        </div>

        {/* Categories Filter dengan animasi stagger */}
        <div 
          className={`mb-12 transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md ${
                  activeCategory === category
                    ? 'bg-teal-500 text-white shadow-md scale-105'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-teal-500 hover:text-white hover:border-teal-500'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 80}ms` : '0ms',
                  animation: isVisible ? 'fadeInUp 0.6s ease-out both' : 'none'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Info kategori aktif */}
        <div 
          className={`text-center mb-8 transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-lg text-gray-600">
            Menampilkan <span className="font-semibold text-teal-600">{filteredCards.length}</span> budaya dalam kategori{' '}
            <span className="font-semibold text-teal-600">"{activeCategory}"</span>
          </p>
        </div>

        {/* Culture Cards Grid dengan animasi saat filter berubah */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filteredCards.map((card, index) => (
            <CultureCard 
              key={card.id}
              card={card}
              index={index}
              isVisible={isVisible}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>

        {/* Pesan jika tidak ada card */}
        {filteredCards.length === 0 && (
          <div 
            className="text-center py-12 transition-all duration-500"
            style={{
              animation: 'fadeIn 0.8s ease-out'
            }}
          >
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              Belum ada budaya dalam kategori ini
            </h3>
            <p className="text-gray-600 mb-6">
              Coba pilih kategori lain untuk melihat kekayaan budaya Indonesia
            </p>
            <button
              onClick={() => setActiveCategory("Semua")}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Lihat Semua Budaya
            </button>
          </div>
        )}

        {/* See More Button dengan animasi */}
        <div 
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <button
            onClick={handleSeeMore}
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-slow"
          >
            Lihat Semua Budaya
          </button>
        </div>
      </div>
    </section>
  );
};

// Komponen Culture Card dengan animasi
const CultureCard = ({ card, index, isVisible, onClick }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsCardVisible(true);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
      onClick={onClick}
      style={{
        animationDelay: isCardVisible ? '0ms' : '0ms',
        animation: isCardVisible ? 'slideInUp 0.6s ease-out both' : 'none'
      }}
    >
      {/* Image dengan animasi zoom */}
      <div className="relative overflow-hidden">
        <img 
          src={card.image} 
          alt={card.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium transform group-hover:scale-110 transition-transform duration-300">
            {card.category}
          </span>
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300 line-clamp-2">
          {card.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {card.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{card.region}</span>
          </div>
          <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center group">
            Selengkapnya
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCulture;