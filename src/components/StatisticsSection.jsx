import React, { useState, useEffect, useRef } from 'react';

const StatisticsSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  const statsData = [
    { number: 1000, title: "Budaya & Tradisi", suffix: "+" },
    { number: 700, title: "Bahasa Daerah", suffix: "+" },
    { number: 34, title: "Provinsi", suffix: "+" },
    { number: 50, title: "Pengguna", suffix: "+" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('SECTION VISIBLE - STARTING ANIMATION');
          setStartAnimation(true);
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-teal-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kekayaan Budaya Dalam Angka
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Jejak digital warisan Nusantara yang terus bertumbuh dan berkembang
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <SimpleStatItem 
              key={index} 
              stat={stat} 
              start={startAnimation} 
              delay={index * 400} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SimpleStatItem = ({ stat, start, delay }) => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (start) {
      console.log(`Starting count for ${stat.title}`);
      
      // Clear any existing interval
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      setCount(0); // Reset to 0 before starting
      
      const duration = 2000;
      const steps = 60;
      const increment = stat.number / steps;
      let current = 0;

      intervalRef.current = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCount(stat.number);
          clearInterval(intervalRef.current);
          console.log(`Completed: ${stat.title} = ${stat.number}`);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [start, stat.number, stat.title]);

  return (
    <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
      <div className="text-5xl font-bold text-yellow-400 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-lg text-white font-medium">
        {stat.title}
      </div>
    </div>
  );
};

export default StatisticsSection;