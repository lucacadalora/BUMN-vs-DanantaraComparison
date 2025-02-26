import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import CategoryComparison from './CategoryComparison';
import { useSectionToggle } from '@/hooks/useSectionToggle';

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
  icon: React.ReactNode;
  categories: Category[];
  isActive: boolean;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ 
  id, 
  title, 
  icon, 
  categories,
  isActive
}) => {
  const { isOpen, toggle } = useSectionToggle(isActive);

  // Effect to open the section if it becomes active
  useEffect(() => {
    if (isActive && !isOpen) {
      toggle();
    }
  }, [isActive, isOpen, toggle]);

  return (
    <section id={id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="flex items-center p-4 cursor-pointer bg-[#003366] bg-opacity-5 hover:bg-opacity-10 transition-all"
        onClick={toggle}
      >
        <span className="text-[#003366] mr-3">{icon}</span>
        <h3 className="text-xl font-semibold flex-grow">{title}</h3>
        <ChevronDown 
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>
      
      {isOpen && (
        <div className="p-4">
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
      )}
    </section>
  );
};

export default ComparisonSection;
