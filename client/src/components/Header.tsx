import React, { useState } from 'react';
import { Gavel } from '@/lib/icons';
import { ExternalLink, Users, XCircle, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Header: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [section, setSection] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent, type: string = 'suggestion') => {
    e.preventDefault();
    try {
      const response = await fetch('/api/legal-contributions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          suggestion,
          section,
          type, // 'suggestion' or 'review'
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setSuggestion('');
          setSection('');
        }, 3000);
      } else {
        console.error('Error submitting contribution:', data.message);
        alert('Failed to submit: ' + data.message);
      }
    } catch (error) {
      console.error('Error submitting contribution:', error);
      alert('Network error, please try again.');
    }
  };

  return (
    <header className="bg-gradient-to-r from-[#002E5B] to-[#003366] text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        {/* Top bar with links */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex-1"></div> {/* Spacer */}
          
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="text-xs text-blue-200 hover:text-white transition-colors p-0 h-auto">
                  <Users className="w-3 h-3 mr-1" />
                  <span>Kontribusi Pakar Hukum</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-bold">Kontribusi Pakar Hukum</DialogTitle>
                </DialogHeader>
                
                <Tabs defaultValue="suggestion" className="w-full mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="suggestion">Usulkan Perubahan</TabsTrigger>
                    <TabsTrigger value="review">Review Analisis</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="suggestion" className="space-y-4 pt-4">
                    {isSubmitted ? (
                      <div className="bg-green-50 text-green-700 p-4 rounded-md flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        <p>Terima kasih! Usulan Anda telah dikirim untuk ditinjau.</p>
                      </div>
                    ) : (
                      <form onSubmit={(e) => handleSubmit(e, 'suggestion')} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Nama
                            </label>
                            <Input 
                              id="name" 
                              value={name} 
                              onChange={(e) => setName(e.target.value)} 
                              placeholder="Nama Lengkap"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input 
                              id="email" 
                              type="email" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)} 
                              placeholder="email@example.com"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="section" className="text-sm font-medium">
                            Bagian yang Diusulkan
                          </label>
                          <Input 
                            id="section" 
                            value={section} 
                            onChange={(e) => setSection(e.target.value)} 
                            placeholder="Misalnya: Pasal 4 UU No. 1/2025"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="suggestion" className="text-sm font-medium">
                            Usulan Perubahan
                          </label>
                          <Textarea 
                            id="suggestion"
                            value={suggestion}
                            onChange={(e) => setSuggestion(e.target.value)}
                            placeholder="Deskripsikan usulan perubahan atau koreksi Anda secara detail..."
                            rows={5}
                            required
                          />
                        </div>
                        
                        <DialogFooter>
                          <Button type="submit" className="w-full">
                            Kirim Usulan
                          </Button>
                        </DialogFooter>
                      </form>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="review" className="space-y-4 pt-4">
                    <div className="bg-blue-50 text-blue-700 p-4 rounded-md flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      <p>Fitur ini memungkinkan Anda memberikan review terhadap analisis perbandingan UU BUMN.</p>
                    </div>
                    
                    {isSubmitted ? (
                      <div className="bg-green-50 text-green-700 p-4 rounded-md flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        <p>Terima kasih! Review Anda telah dikirim.</p>
                      </div>
                    ) : (
                      <form onSubmit={(e) => handleSubmit(e, 'review')} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="reviewName" className="text-sm font-medium">
                              Nama
                            </label>
                            <Input 
                              id="reviewName" 
                              value={name} 
                              onChange={(e) => setName(e.target.value)} 
                              placeholder="Nama Lengkap"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="reviewEmail" className="text-sm font-medium">
                              Email
                            </label>
                            <Input 
                              id="reviewEmail" 
                              type="email" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)} 
                              placeholder="email@example.com"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="reviewSection" className="text-sm font-medium">
                            Bagian yang Direview
                          </label>
                          <Input 
                            id="reviewSection" 
                            value={section} 
                            onChange={(e) => setSection(e.target.value)} 
                            placeholder="Misalnya: Analisis Aspek Keuangan"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="reviewContent" className="text-sm font-medium">
                            Catatan Review
                          </label>
                          <Textarea 
                            id="reviewContent"
                            value={suggestion}
                            onChange={(e) => setSuggestion(e.target.value)}
                            placeholder="Berikan komentar, koreksi, atau penambahan referensi untuk analisis ini..."
                            rows={5}
                            required
                          />
                        </div>
                        
                        <DialogFooter>
                          <Button type="submit" className="w-full">
                            Kirim Review
                          </Button>
                        </DialogFooter>
                      </form>
                    )}
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
            
            <a 
              href="https://lucaxyzz-digest.replit.app/" 
              className="flex items-center text-xs text-blue-200 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visit Our Platform</span>
              <ExternalLink className="ml-1 w-3 h-3" />
            </a>
          </div>
        </div>
        
        {/* Main header content with unified title */}
        <div className="flex justify-between items-center">
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white bg-opacity-10 p-2 rounded-full mr-3">
              <Gavel />
            </div>
            
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight">
                Analisis Perbandingan UU BUMN
              </h1>
              
              <div className="flex items-center mt-1 text-sm">
                <div>
                  <span className="text-blue-200 mr-1">UU No. 19/2003</span>
                  <span className="text-xs text-blue-100">(Lama)</span>
                </div>
                
                <span className="mx-2 font-bold text-xs">VS</span>
                
                <div>
                  <span className="text-blue-200 mr-1">UU No. 1/2025</span>
                  <span className="text-xs text-blue-100">(Baru)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
