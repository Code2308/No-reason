import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";
import Loading from "./components/Loading";
import StatisticsSection from './components/StatisticsSection';
import FeaturesSection from './components/FeaturesSection';
import ExploreCulture from './components/ExploreCulture';
import LanguageTranslator from './components/LanguageTranslator';
import Footer from './components/Footer'; // Import Footer

export default function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {loading ? (
        <Loading onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <StatisticsSection />
          <Chatbot />
          <FeaturesSection />
          <ExploreCulture />
          <LanguageTranslator />
          <Footer /> {/* Tambahkan Footer di sini */}
        </>
      )}
    </>
  );
}