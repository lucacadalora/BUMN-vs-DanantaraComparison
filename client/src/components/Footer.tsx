import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003366] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">Tentang Perbandingan</h4>
            <p className="text-sm opacity-80">
              Analisis komprehensif perubahan UU BUMN yang menunjukkan transformasi paradigma hukum, 
              kelembagaan, dan tata kelola BUMN di Indonesia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Referensi</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>UU No. 19 Tahun 2003 tentang BUMN</li>
              <li>UU No. 1 Tahun 2025 tentang BUMN</li>
              <li>Naskah Akademik RUU BUMN</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <p className="text-sm opacity-80">
              Untuk informasi lebih lanjut mengenai analisis perbandingan UU BUMN, 
              silakan hubungi tim pengelola.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white border-opacity-20 text-center text-sm opacity-70">
          <p>© 2023 Perbandingan UU BUMN Indonesia. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
