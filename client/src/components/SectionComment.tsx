import React, { useState } from 'react';
import { MessageCircle, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

interface SectionCommentProps {
  sectionId: string;
  sectionTitle: string;
}

const SectionComment: React.FC<SectionCommentProps> = ({ sectionId, sectionTitle }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send the data to your backend here
    console.log({ 
      sectionId, 
      sectionTitle, 
      email, 
      name, 
      comment 
    });
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setComment('');
    }, 3000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1 text-xs bg-white hover:bg-blue-50 text-blue-600 border border-blue-200"
        >
          <MessageCircle className="h-3 w-3" />
          Komentar Pakar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Komentar Pakar: {sectionTitle}
          </DialogTitle>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-md flex items-center my-4">
            <Check className="w-5 h-5 mr-2" />
            <p>Terima kasih atas kontribusi Anda untuk bagian ini!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="sectionName" className="text-sm font-medium">
                  Nama
                </label>
                <Input 
                  id="sectionName" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="sectionEmail" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="sectionEmail" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="sectionComment" className="text-sm font-medium flex items-center gap-2">
                <span>Analisis Hukum</span>
                <span className="text-xs text-gray-500 font-normal">(dari perspektif pakar)</span>
              </label>
              <Textarea 
                id="sectionComment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Berikan analisis, pendapat, atau saran perbaikan mengenai bagian ini..."
                rows={5}
                required
              />
            </div>
            
            <div className="text-xs text-gray-500 italic">
              Komentar ini akan ditinjau oleh tim editorial sebelum dipublikasikan
            </div>
            
            <DialogFooter>
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Kirim Analisis
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SectionComment;