import React from 'react';
import { useNavigate } from '@tanstack/react-location';
import { BirthDataForm } from '../components/BirthDataForm';
import { MapPin, Clock, Calendar } from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    // TODO: Implement form submission logic
    navigate({ to: '/chart', search: data });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
            Astroloji Doğum Haritası
          </h1>
          <div className="bg-white rounded-lg shadow-xl p-6">
            <BirthDataForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};