import React from 'react';
import Header from '@/components/Header';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import { comparisonData } from '@/data/comparisonData';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-center text-[#34495E] max-w-3xl mx-auto">
            <span className="font-semibold text-[#003366]">Disediakan oleh Daily Digest:</span> Analisis mendalam tentang 
            perubahan regulasi BUMN dan implikasi yuridisnya terhadap tata kelola dan 
            pengembangan Badan Usaha Milik Negara di Indonesia
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
