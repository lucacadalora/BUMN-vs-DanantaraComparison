
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Admin: React.FC = () => {
  const { data: contributions, isLoading } = useQuery({
    queryKey: ['legal-contributions'],
    queryFn: async () => {
      const response = await fetch('/api/legal-contributions');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      return data.data;
    }
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Komentar Pakar</h1>
      <div className="space-y-4">
        {contributions?.map((contribution: any) => (
          <div key={contribution.id} className="border p-4 rounded-lg">
            <div className="font-bold">{contribution.name}</div>
            <div className="text-gray-600">{contribution.email}</div>
            <div className="mt-2">{contribution.suggestion}</div>
            <div className="mt-2 text-sm text-gray-500">
              {new Date(contribution.timestamp).toLocaleString()}
            </div>
            {contribution.section && (
              <div className="mt-1 text-sm text-blue-600">
                Bagian: {contribution.section}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
