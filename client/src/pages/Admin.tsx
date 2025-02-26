
import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Admin: React.FC = () => {
  const queryClient = useQueryClient();
  
  const { data: contributions, isLoading } = useQuery({
    queryKey: ['legal-contributions'],
    queryFn: async () => {
      const response = await fetch('/api/legal-contributions');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      return data.data;
    }
  });

  const approveMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/legal-contributions/${id}/approve`, {
        method: 'POST'
      });
      if (!response.ok) throw new Error('Failed to approve');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['legal-contributions'] });
      toast({
        title: "Berhasil",
        description: "Kontribusi telah disetujui",
      });
    },
    onError: () => {
      toast({
        title: "Gagal",
        description: "Gagal menyetujui kontribusi",
        variant: "destructive"
      });
    }
  });

  if (isLoading) return <div>Loading...</div>;

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'suggestion': 'Usulan Perubahan',
      'review': 'Review Analisis',
      'comment': 'Komentar Cepat'
    };
    return labels[type] || type;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kontribusi Pakar Hukum</h1>
      <div className="space-y-4">
        {contributions?.map((contribution: any) => (
          <div key={contribution.id} className="border p-4 rounded-lg bg-white shadow">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold">{contribution.name}</div>
                <div className="text-gray-600">{contribution.email}</div>
              </div>
              <div className="flex gap-2">
                <Badge variant={contribution.approved ? "success" : "secondary"}>
                  {contribution.approved ? "Disetujui" : "Menunggu"}
                </Badge>
                <Badge variant="outline">{getTypeLabel(contribution.type)}</Badge>
              </div>
            </div>
            
            <div className="mt-4 text-gray-800">{contribution.suggestion}</div>
            
            {contribution.section && (
              <div className="mt-2 text-sm text-blue-600">
                Bagian: {contribution.section}
              </div>
            )}
            
            <div className="mt-2 text-sm text-gray-500">
              {new Date(contribution.timestamp).toLocaleString()}
            </div>
            
            {!contribution.approved && (
              <div className="mt-4">
                <Button 
                  onClick={() => approveMutation.mutate(contribution.id)}
                  disabled={approveMutation.isPending}
                >
                  {approveMutation.isPending ? "Memproses..." : "Setujui"}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
