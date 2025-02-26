import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CategoryComparison from './CategoryComparison';

interface Category {
  title: string;
  old: {
    title: string;
    points: string[];
  };
  new: {
    title: string;
    points: string[];
  };
}

interface ComparisonSectionProps {
  id: string;
  title: string;
  icon: React.ComponentType;
  categories: Category[];
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ 
  id, 
  title, 
  icon, 
  categories
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <section 
      id={id} 
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
    >
      <div 
        className={`flex items-center p-5 cursor-pointer ${
          isOpen 
            ? 'bg-gradient-to-r from-[#00264D] to-[#003366] text-white' 
            : 'bg-gradient-to-r from-[#F8FAFC] to-[#EFF6FF] text-[#00264D] hover:bg-[#F0F7FF]'
        } transition-all duration-300`}
        onClick={toggle}
      >
        <span className={`mr-4 ${isOpen ? 'text-white' : 'text-[#003366]'}`}>
          {React.createElement(icon)}
        </span>
        <h3 className="text-xl font-semibold flex-grow">{title}</h3>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
          isOpen ? 'bg-white bg-opacity-20' : 'bg-[#003366] bg-opacity-10'
        }`}>
          <ChevronDown 
            className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </div>
      </div>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 border-t border-gray-100">
          {categories.map((category, index) => (
            <CategoryComparison 
              key={index}
              title={category.title}
              old={category.old}
              new={category.new}
              isLastItem={index === categories.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
