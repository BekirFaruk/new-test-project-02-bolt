import axios from 'axios';
import { Location } from '../types';

const GEOCODING_API_URL = 'https://nominatim.openstreetmap.org/search';

export async function searchLocations(query: string): Promise<Location[]> {
  if (query.length < 2) return [];

  const response = await axios.get(GEOCODING_API_URL, {
    params: {
      q: query,
      format: 'json',
      limit: 5,
    },
    headers: {
      'Accept-Language': 'tr',
    },
  });

  return response.data.map((item: any) => ({
    id: item.place_id,
    name: item.display_name.split(',')[0],
    country: item.display_name.split(',').slice(-1)[0].trim(),
    latitude: parseFloat(item.lat),
    longitude: parseFloat(item.lon),
  }));
}