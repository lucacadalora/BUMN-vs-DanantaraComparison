import React, { useState } from 'react';
import Header from '@/components/Header';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import { ppComparisonData } from '@/data/ppComparisonData';
import { MessageSquare, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Link } from 'wouter';

const PPComparison: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, name, comment });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setComment('');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="bg-gradient-to-r from-[#002E5B] to-[#003366] text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          {/* Top bar with links */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex-1"></div> {/* Spacer */}
            
            <div className="flex items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="text-xs text-blue-200 hover:text-white transition-colors p-0 h-auto">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    <span>Kontribusi Pakar Hukum</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold">Kontribusi Pakar Hukum</DialogTitle>
                  </DialogHeader>
                  
                  {isSubmitted ? (
                    <div className="bg-green-50 text-green-700 p-4 rounded-md text-center my-4">
                      <p>Terima kasih! Komentar Anda telah dikirim.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="ppName" className="text-sm font-medium">
                            Nama
                          </label>
                          <Input 
                            id="ppName" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Nama Lengkap"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="ppEmail" className="text-sm font-medium">
                            Email
                          </label>
                          <Input 
                            id="ppEmail" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="email@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="ppComment" className="text-sm font-medium">
                          Komentar atau Tanya
                        </label>
                        <Textarea 
                          id="ppComment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Tulis komentar, pertanyaan, atau saran Anda tentang PP No. 10/2025..."
                          rows={4}
                          required
                        />
                      </div>
                      
                      <DialogFooter>
                        <Button type="submit" className="w-full">
                          Kirim Komentar
                        </Button>
                      </DialogFooter>
                    </form>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Main header content with unified title */}
          <div className="flex justify-between items-center">
            <div className="flex-1 flex items-center justify-center">
              <div>
                <h1 className="text-lg md:text-xl font-bold tracking-tight">
                  Analisis PP No. 10 Tahun 2025
                </h1>
                
                <div className="flex items-center mt-1 text-sm">
                  <div>
                    <span className="text-blue-200 mr-1">Implementasi dari UU No. 1/2025</span>
                    <span className="text-xs text-blue-100">(Danantara)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <Button variant="outline" className="mb-4 flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Kembali ke UU BUMN
          </Button>
        </Link>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-2">
        <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-center text-[#34495E] max-w-3xl mx-auto">
            Analisis mendalam tentang PP No. 10 Tahun 2025 tentang Organisasi dan Tata Kelola Badan Pengelola 
            Investasi Daya Anagata Nusantara (Danantara) yang mengimplementasikan perubahan dalam UU No. 1 Tahun 2025
          </p>
        </div>

        <div className="space-y-8" id="pp-comparison-sections">
          {ppComparisonData.map((section) => (
            <ComparisonSection 
              key={section.id}
              id={section.id}
              title={section.title}
              icon={section.icon}
              categories={section.categories}
            />
          ))}
        </div>
      </main>
      
      <Footer />
      
      {/* Floating Quick Comment Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              <MessageSquare className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center">Komentar Cepat</DialogTitle>
            </DialogHeader>
            
            {isSubmitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-md text-center my-4">
                <p>Terima kasih! Komentar Anda telah dikirim.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="quickPPName" className="text-sm font-medium">
                      Nama
                    </label>
                    <Input 
                      id="quickPPName" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Nama Lengkap"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quickPPEmail" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="quickPPEmail" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="quickPPComment" className="text-sm font-medium">
                    Komentar atau Tanya
                  </label>
                  <Textarea 
                    id="quickPPComment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tulis komentar, pertanyaan, atau saran Anda..."
                    rows={4}
                    required
                  />
                </div>
                
                <DialogFooter>
                  <Button type="submit" className="w-full">
                    Kirim Komentar
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PPComparison;