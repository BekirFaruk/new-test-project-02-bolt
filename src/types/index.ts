export interface Location {
  id: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface BirthData {
  location: Location;
  date: string;
  time: string;
}

export interface PlanetPosition {
  planet: string;
  longitude: number;
  latitude: number;
  distance: number;
  speed: number;
  house: number;
  sign: number;
}