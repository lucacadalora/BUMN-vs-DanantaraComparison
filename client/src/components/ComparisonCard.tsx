import React from 'react';
import { Check, History } from 'lucide-react';

interface ComparisonCardProps {
  title: string;
  points: string[];
  type: 'old' | 'new';
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, points, type }) => {
  const isOld = type === 'old';
  
  // Styling based on whether it's old or new UU
  const cardStyle = isOld 
    ? 'border-blue-100 bg-blue-50'
    : 'border-green-100 bg-green-50';
    
  const headerStyle = isOld 
    ? 'bg-gradient-to-r from-[#002E5B] to-[#003366] text-white'
    : 'bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white';
    
  const bulletStyle = isOld 
    ? 'bg-blue-100 text-[#003366]'
    : 'bg-green-100 text-[#1B5E20]';
    
  const iconComponent = isOld ? History : Check;

  // Function to check if a point starts with a letter followed by a period (a., b., etc.)
  const isSubPoint = (point: string) => {
    return /^[a-z]\.\s.+/i.test(point);
  };

  // Find the impact section if present
  const impactPoints: string[] = [];
  const regularPoints: string[] = [];
  
  points.forEach(point => {
    if (point.startsWith("Dampak:")) {
      impactPoints.push(point);
    } else {
      regularPoints.push(point);
    }
  });

  return (
    <div className={`rounded-lg border ${cardStyle} shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md`}>
      <div className={`${headerStyle} py-3 px-4 flex items-center`}>
        {React.createElement(iconComponent, { className: 'w-4 h-4 mr-2' })}
        <h5 className="font-medium">{title}</h5>
      </div>
      <div className="p-5">
        <ul className="space-y-3">
          {regularPoints.map((point, index) => {
            // Check if this is a sub-point (starts with a., b., etc.)
            if (isSubPoint(point)) {
              // This is a nested item, it will be rendered as part of the parent
              return null;
            }
            
            // Check if the next items are subpoints
            const subPoints: string[] = [];
            let nextIndex = index + 1;
            while (nextIndex < regularPoints.length && isSubPoint(regularPoints[nextIndex])) {
              subPoints.push(regularPoints[nextIndex]);
              nextIndex++;
            }

            return (
              <li key={index} className="flex items-start">
                <span className={`${bulletStyle} flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-3 mt-1`}>
                  {index + 1}
                </span>
                <div className="flex-grow">
                  <p className="leading-relaxed text-gray-700">{point}</p>
                  {subPoints.length > 0 && (
                    <ul className="pl-5 mt-2 space-y-2">
                      {subPoints.map((subPoint, subIndex) => (
                        <li key={`${index}-${subIndex}`} className="flex items-start">
                          <span className={`inline-block w-2 h-2 rounded-full ${isOld ? 'bg-blue-300' : 'bg-green-300'} mr-2 mt-2`}></span>
                          <p className="leading-relaxed text-gray-600 text-sm">{subPoint.replace(/^[a-z]\.\s/i, '')}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        
        {impactPoints.length > 0 && type === 'new' && (
          <div className="mt-6 border-t pt-4 border-green-200">
            <div className="bg-green-100 border border-green-200 rounded-lg p-4">
              <h6 className="text-green-800 font-semibold mb-2 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-green-600 mr-2"></span>
                Dampak
              </h6>
              <ul className="space-y-2 pl-4">
                {impactPoints.map((point, index) => (
                  <li key={index} className="text-green-800">
                    {point.replace("Dampak:", "").split(";").map((impact, idx) => (
                      <p key={idx} className="mb-1 leading-relaxed text-green-800">
                        {idx > 0 && <span className="inline-block w-1 h-1 rounded-full bg-green-700 mr-2"></span>}
                        {impact.trim()}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonCard;
