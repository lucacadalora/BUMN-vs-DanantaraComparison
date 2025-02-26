import React from 'react';

interface ComparisonCardProps {
  title: string;
  points: string[];
  type: 'old' | 'new';
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, points, type }) => {
  const isOld = type === 'old';
  const headerClass = isOld ? 'bg-[#003366]' : 'bg-[#557153]';

  return (
    <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden">
      <div className={`${headerClass} text-white py-2 px-4`}>
        <h5 className="font-medium">{title}</h5>
      </div>
      <div className="p-4">
        <ul className="list-disc pl-5 space-y-2">
          {points.map((point, index) => {
            // Check if the point is a sublist (usually contains a + b + c or similar)
            if (point.includes('a.') || point.includes('b.') || point.includes('c.') || point.includes('d.')) {
              // Find the main text before the a. b. c. points
              const mainText = point.split('a.')[0].trim();
              const subItems = [];
              
              // Extract the letters and their points
              const regex = /([a-d]).\s*(.*?)(?=(?:[a-d].\s*)|$)/g;
              let match;
              while ((match = regex.exec(point)) !== null) {
                subItems.push(match[2].trim());
              }
              
              return (
                <li key={index}>
                  {mainText}
                  {subItems.length > 0 && (
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {subItems.map((subItem, subIndex) => (
                        <li key={`${index}-${subIndex}`}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ComparisonCard;
