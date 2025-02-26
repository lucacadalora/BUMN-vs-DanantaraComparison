import React from 'react';
import ComparisonCard from './ComparisonCard';
import { ArrowRight, BookOpen } from 'lucide-react';

export interface Citation {
  author: string;
  refId: string;
}

export interface CategoryData {
  title: string;
  old: {
    title: string;
    points: string[];
  };
  new: {
    title: string;
    points: string[];
  };
  citation?: Citation;
}

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
  citation?: Citation;
}

const CategoryComparison: React.FC<CategoryComparisonProps> = ({ 
  title, 
  old, 
  new: newLaw,
  isLastItem,
  citation
}) => {
  return (
    <div className={`${isLastItem ? '' : 'mb-10'}`}>
      <h4 className="text-lg font-medium mb-5 pb-2 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-[#003366] mr-2"></span>
          {title}
          {citation && (
            <a 
              href={`#${citation.refId}`} 
              className="ml-2 text-xs text-blue-600 hover:text-blue-800 flex items-center bg-blue-50 px-2 py-1 rounded-full"
              title={`Referensi: ${citation.author}`}
            >
              <BookOpen className="w-3 h-3 mr-1" />
              <span>{citation.author}</span>
            </a>
          )}
        </div>
      </h4>
      
      <div className="grid md:grid-cols-2 gap-6 relative">
        <ComparisonCard 
          title={old.title}
          points={old.points}
          type="old"
        />
        
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-white p-2 rounded-full shadow-md">
            <ArrowRight className="text-[#003366] w-5 h-5" />
          </div>
        </div>
        
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
