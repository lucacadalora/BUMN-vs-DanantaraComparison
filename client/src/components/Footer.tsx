import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003366] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div>
            <h4 className="font-semibold text-lg mb-4">Referensi</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>UU No. 19 Tahun 2003 tentang BUMN</li>
              <li>UU No. 1 Tahun 2025 tentang BUMN</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white border-opacity-20 text-center text-sm opacity-70">
          <p>© 2025 Daily Digest. All rights reserved</p>
          <a href="https://lucaxyzz-digest.replit.app/" className="text-white hover:underline">
            https://lucaxyzz-digest.replit.app/
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
