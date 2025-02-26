import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import { comparisonData } from '@/data/comparisonData';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("paradigma");

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Scroll to section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center text-[#2C3E50]">Analisis Perbandingan UU BUMN</h2>
          <p className="text-center text-[#34495E] mt-2 max-w-2xl mx-auto">
            Studi komprehensif terhadap perubahan regulasi dalam UU No. 19/2003 dan UU No. 1/2025 
            tentang Badan Usaha Milik Negara (BUMN)
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
              isActive={activeSection === section.id}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
