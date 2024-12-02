import React from 'react';
import { useNavigate } from '@tanstack/react-location';
import { AstroChart } from '../components/AstroChart';
import { ArrowLeft, Download, Share2 } from 'lucide-react';

export const ChartPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => navigate({ to: '/' })}
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Yeni Harita Oluştur
            </button>
            <div className="flex gap-4">
              <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                <Download className="w-5 h-5 mr-2" />
                İndir
              </button>
              <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                <Share2 className="w-5 h-5 mr-2" />
                Paylaş
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6">
            <AstroChart />
          </div>
        </div>
      </div>
    </div>
  );
};