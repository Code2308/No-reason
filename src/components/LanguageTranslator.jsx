import React, { useState } from 'react';

const LanguageTranslator = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('indonesia');
  const [targetLanguage, setTargetLanguage] = useState('jawa');
  const [isTranslating, setIsTranslating] = useState(false);

  const languages = [
    { value: 'indonesia', label: 'Bahasa Indonesia' },
    { value: 'jawa', label: 'Bahasa Jawa' },
    { value: 'sunda', label: 'Bahasa Sunda' },
    { value: 'bali', label: 'Bahasa Bali' },
    { value: 'madura', label: 'Bahasa Madura' },
    { value: 'minang', label: 'Bahasa Minangkabau' },
    { value: 'batak', label: 'Bahasa Batak' },
    { value: 'bugis', label: 'Bahasa Bugis' },
    { value: 'aceh', label: 'Bahasa Aceh' },
    { value: 'banjar', label: 'Bahasa Banjar' }
  ];

  // Contoh data terjemahan sederhana (dalam real app, ini akan dari API)
  const translationExamples = {
    'indonesia-jawa': {
      'selamat pagi': 'sugeng enjang',
      'terima kasih': 'matur nuwun',
      'apa kabar': 'piye kabare',
      'saya baik-baik saja': 'aku apik-apik wae'
    },
    'indonesia-sunda': {
      'selamat pagi': 'wilujeng enjing',
      'terima kasih': 'hatur nuhun',
      'apa kabar': 'kumaha damang',
      'saya baik-baik saja': 'abdi sae-sae wae'
    },
    'indonesia-bali': {
      'selamat pagi': 'rahajeng semeng',
      'terima kasih': 'suksma',
      'apa kabar': 'kenken kabare',
      'saya baik-baik saja': 'tiang becik-becik kemanten'
    }
  };

  const handleTranslate = () => {
    if (!sourceText.trim()) {
      setTranslatedText('Masukkan teks untuk diterjemahkan');
      return;
    }

    setIsTranslating(true);

    // Simulasi proses terjemahan (dalam real app, ini akan panggil API)
    setTimeout(() => {
      const translationKey = `${sourceLanguage}-${targetLanguage}`;
      const examples = translationExamples[translationKey];
      
      if (examples && examples[sourceText.toLowerCase()]) {
        setTranslatedText(examples[sourceText.toLowerCase()]);
      } else {
        // Fallback untuk teks yang tidak ada dalam contoh
        const fallbackText = `[Terjemahan ${languages.find(l => l.value === targetLanguage)?.label}]: "${sourceText}"`;
        setTranslatedText(fallbackText);
      }
      
      setIsTranslating(false);
    }, 1000);
  };

  const handleSwapLanguages = () => {
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
    
    // Swap teks juga
    const tempText = sourceText;
    setSourceText(translatedText);
    setTranslatedText(tempText);
  };

  const getLanguageName = (value) => {
    return languages.find(lang => lang.value === value)?.label || 'Bahasa';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Penerjemah Bahasa Daerah
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Terjemahkan teks antar berbagai bahasa daerah Indonesia dengan mudah dan akurat
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Language Selection */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Dari Bahasa */}
              <div className="flex-1 w-full">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Dari Bahasa:
                </label>
                <select
                  value={sourceLanguage}
                  onChange={(e) => setSourceLanguage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                >
                  {languages.map((lang) => (
                    <option key={`source-${lang.value}`} value={lang.value}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <button
                onClick={handleSwapLanguages}
                className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 transform hover:scale-110 mt-6 md:mt-0"
                title="Tukar Bahasa"
              >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>

              {/* Ke Bahasa */}
              <div className="flex-1 w-full">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Ke Bahasa:
                </label>
                <select
                  value={targetLanguage}
                  onChange={(e) => setTargetLanguage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                >
                  {languages.map((lang) => (
                    <option key={`target-${lang.value}`} value={lang.value}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Translation Area */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Text Area */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Teks yang akan diterjemahkan:
                </label>
                <div className="relative">
                  <textarea
                    value={sourceText}
                    onChange={(e) => setSourceText(e.target.value)}
                    placeholder="Ketik teks yang ingin diterjemahkan..."
                    className="w-full h-64 px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 bg-gray-50"
                    rows={6}
                  />
                  {sourceText && (
                    <button
                      onClick={() => setSourceText('')}
                      className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  {sourceText.length} karakter
                </div>
              </div>

              {/* Output Text Area */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Hasil Terjemahan:
                </label>
                <div className="relative">
                  <textarea
                    value={translatedText}
                    readOnly
                    placeholder="Hasil terjemahan akan muncul di sini..."
                    className="w-full h-64 px-4 py-4 border border-gray-300 rounded-xl resize-none transition-all duration-300 bg-gray-50 text-gray-700"
                    rows={6}
                  />
                  {isTranslating && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-xl">
                      <div className="flex items-center space-x-2 text-blue-600">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                        <span>Menerjemahkan...</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  {translatedText.length} karakter
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-gray-200"></div>

            {/* Translate Button */}
            <div className="text-center">
              <button
                onClick={handleTranslate}
                disabled={isTranslating || !sourceText.trim()}
                className={`px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isTranslating || !sourceText.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isTranslating ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Menerjemahkan...</span>
                  </div>
                ) : (
                  'Terjemahkan'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>30+ Bahasa Daerah</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Terjemahan Akurat</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span>Gratis Digunakan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageTranslator;