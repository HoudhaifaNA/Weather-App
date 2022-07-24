/* eslint-disable no-undef */

type Params = { id: string } | { lat: number; lon: number } | { q: string };

export interface QueryConfig {
  url: string;
  params: Params;
}

export interface Position {
  lat: number;
  lon: number;
}

export interface PositionState {
  location: Position | null;
  error: GeolocationPositionError | null;
}

export interface City {
  id: number;
  name: string;
  weather: { main: string; icon: string; description: string }[];
  main: { temp_max: number; temp_min: number };
}
