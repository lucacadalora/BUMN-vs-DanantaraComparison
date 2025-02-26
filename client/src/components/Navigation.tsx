import React from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: "paradigma", label: "1. Paradigma Hukum" },
    { id: "kelembagaan", label: "2. Kelembagaan" },
    { id: "keuangan", label: "3. Keuangan & Aset" },
    { id: "pengawasan", label: "4. Pengawasan" },
    { id: "penugasan", label: "5. Penugasan Khusus" },
    { id: "manajemen", label: "6. Tata Kelola" },
    { id: "monopoli", label: "7. Hak Monopoli" },
    { id: "inovasi", label: "8. Inovasi" },
    { id: "tantangan", label: "9. Tantangan" },
    { id: "poin-krusial", label: "10. Poin Krusial" },
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
