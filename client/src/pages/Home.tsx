import React, { useState } from 'react';
import Header from '@/components/Header';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import { comparisonData } from '@/data/comparisonData';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const Home: React.FC = () => {
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
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-center text-[#34495E] max-w-3xl mx-auto">
            Analisis mendalam tentang perubahan regulasi BUMN dan implikasi yuridisnya 
            terhadap tata kelola dan pengembangan Badan Usaha Milik Negara di Indonesia
          </p>
        </div>

        <div className="space-y-8" id="comparison-sections">
          {comparisonData.map((section) => (
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
                    <label htmlFor="quickName" className="text-sm font-medium">
                      Nama
                    </label>
                    <Input 
                      id="quickName" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Nama Lengkap"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quickEmail" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="quickEmail" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="quickComment" className="text-sm font-medium">
                    Komentar atau Tanya
                  </label>
                  <Textarea 
                    id="quickComment"
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

export default Home;
