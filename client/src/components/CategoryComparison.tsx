import React from 'react';
import ComparisonCard from './ComparisonCard';

interface CategoryComparisonProps {
  title: string;
  old: {
    title: string;
    points: string[];
  };
  new: {
    title: string;
    points: string[];
  };
  isLastItem: boolean;
}

const CategoryComparison: React.FC<CategoryComparisonProps> = ({ 
  title, 
  old, 
  new: newLaw,
  isLastItem
}) => {
  return (
    <div className={`${isLastItem ? '' : 'mb-8'}`}>
      <h4 className="text-lg font-medium mb-4 pb-2 border-b border-[#E5E5E5]">{title}</h4>
      
      <div className="grid md:grid-cols-2 gap-6">
        <ComparisonCard 
          title={old.title}
          points={old.points}
          type="old"
        />
        
        <ComparisonCard 
          title={newLaw.title}
          points={newLaw.points}
          type="new"
        />
      </div>
    </div>
  );
};

export default CategoryComparison;
