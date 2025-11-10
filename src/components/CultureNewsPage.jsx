import React from 'react';

const CultureNewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Festival Budaya Nusantara 2024 Resmi Dibuka",
      excerpt: "Festival tahunan yang menampilkan kekayaan budaya dari 34 provinsi Indonesia dibuka dengan meriah di Jakarta.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop",
      date: "15 November 2024",
      category: "Event",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Pengakuan UNESCO untuk Tenun Indonesia",
      excerpt: "Teknik tenun tradisional Indonesia diakui sebagai Warisan Budaya Takbenda UNESCO.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop",
      date: "12 November 2024",
      category: "Pengakuan",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Revitalisasi Bahasa Daerah di Era Digital",
      excerpt: "Upaya pelestarian bahasa daerah melalui platform digital dan aplikasi mobile.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      date: "10 November 2024",
      category: "Teknologi",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Wisata Budaya Jadi Primadona Pariwisata",
      excerpt: "Kenaikan signifikan pengunjung objek wisata budaya pasca pandemi.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=250&fit=crop",
      date: "8 November 2024",
      category: "Pariwisata",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Generasi Muda dan Pelestarian Budaya",
      excerpt: "Peran anak muda dalam melestarikan dan mengembangkan budaya tradisional.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop",
      date: "5 November 2024",
      category: "Edukasi",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Digitalisasi Naskah Kuno Nusantara",
      excerpt: "Proyek ambisius untuk mendigitalkan naskah kuno dari berbagai daerah di Indonesia.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      date: "3 November 2024",
      category: "Teknologi",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Berita & Artikel Budaya
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Update terbaru seputar perkembangan budaya Indonesia dan kegiatan pelestarian
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Kembali ke Jelajah Budaya
          </button>
        </div>
      </div>
    </div>
  );
};

// Komponen News Card
const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center group">
          Baca Selengkapnya
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CultureNewsPage;