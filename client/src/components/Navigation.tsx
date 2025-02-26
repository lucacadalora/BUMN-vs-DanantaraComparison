import React from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: "paradigma", label: "Paradigma Hukum" },
    { id: "kelembagaan", label: "Kelembagaan" },
    { id: "keuangan", label: "Keuangan & Aset" },
    { id: "pengawasan", label: "Pengawasan" },
    { id: "penugasan", label: "Penugasan Khusus" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto py-2">
          <div className="flex space-x-4 min-w-max">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionChange(item.id);
                }}
                className={`text-sm font-medium py-2 px-3 rounded-md transition-all ${
                  activeSection === item.id 
                    ? 'text-[#003366] border-b-2 border-[#003366]' 
                    : 'text-[#34495E] hover:text-[#003366] hover:bg-[#F8F8F8]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
