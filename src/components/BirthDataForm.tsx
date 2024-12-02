import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { searchLocations } from '@/utils/locationService';
import { Location } from '@/types';

interface BirthDataFormProps {
  onSubmit: (data: any) => void;
}

export const BirthDataForm: React.FC<BirthDataFormProps> = ({ onSubmit }) => {
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const { data: locations, isLoading } = useQuery({
    queryKey: ['locations', locationQuery],
    queryFn: () => searchLocations(locationQuery),
    enabled: locationQuery.length >= 2,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLocation) return;
    
    onSubmit({
      location: selectedLocation,
      date,
      time,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="w-4 h-4 inline-block mr-2" />
          Doğum Yeri
        </label>
        <input
          type="text"
          value={locationQuery}
          onChange={(e) => {
            setLocationQuery(e.target.value);
            setSelectedLocation(null);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Şehir adı girin..."
          required
        />
        {locations && locations.length > 0 && !selectedLocation && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedLocation(loc);
                  setLocationQuery(`${loc.name}, ${loc.country}`);
                }}
              >
                {loc.name}, {loc.country}
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar className="w-4 h-4 inline-block mr-2" />
          Doğum Tarihi
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Clock className="w-4 h-4 inline-block mr-2" />
          Doğum Saati
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        disabled={!selectedLocation}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Harita Oluştur
      </button>
    </form>
  );
};