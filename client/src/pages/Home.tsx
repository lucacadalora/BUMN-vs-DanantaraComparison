import React from 'react';
import Header from '@/components/Header';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import { comparisonData } from '@/data/comparisonData';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="text-center text-[#34495E] mt-2 max-w-3xl mx-auto text-lg">
            Studi komprehensif yang menganalisis perubahan regulasi dan implikasi yuridis 
            untuk memahami transformasi pengelolaan BUMN di Indonesia
          </p>
        </div>

        <div className="space-y-8" id="comparison-sections">
          {comparisonData.map((section) => (
            <ComparisonSection 
              key={section.id}
              id={section.id}
              title={section.title}
              icon={section.icon}
              categories={section.categories}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
