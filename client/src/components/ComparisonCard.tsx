import React from 'react';

interface ComparisonCardProps {
  title: string;
  points: string[];
  type: 'old' | 'new';
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, points, type }) => {
  const isOld = type === 'old';
  const headerClass = isOld ? 'bg-[#003366]' : 'bg-[#557153]';

  // Function to check if a point starts with a letter followed by a period (a., b., etc.)
  const isSubPoint = (point: string) => {
    return /^[a-z]\.\s.+/i.test(point);
  };

  return (
    <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden">
      <div className={`${headerClass} text-white py-2 px-4`}>
        <h5 className="font-medium">{title}</h5>
      </div>
      <div className="p-4">
        <ul className="list-disc pl-5 space-y-2">
          {points.map((point, index) => {
            // Check if this is a sub-point (starts with a., b., etc.)
            if (isSubPoint(point)) {
              // This is a nested item, it will be rendered as part of the parent
              return null;
            }
            
            // Check if the next items are subpoints
            const subPoints: string[] = [];
            let nextIndex = index + 1;
            while (nextIndex < points.length && isSubPoint(points[nextIndex])) {
              subPoints.push(points[nextIndex]);
              nextIndex++;
            }

            return (
              <li key={index} className="leading-relaxed">
                {point}
                {subPoints.length > 0 && (
                  <ul className="list-none pl-5 mt-2 space-y-1">
                    {subPoints.map((subPoint, subIndex) => (
                      <li key={`${index}-${subIndex}`} className="leading-relaxed">
                        {subPoint}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ComparisonCard;
