import { JSX } from "react";

export interface Movie {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  url: string;
  opening_crawl: string;
  producer: string;
  planets: string[];
}

export interface Planet {
  name: string;
  population: string;
  diameter: string;
  rotation_period: string;
}

export interface FilmsResponse {
  map(arg0: (movie: Movie) => JSX.Element): import("react").ReactNode;
  count: number;
  next: string | null;
  previous: string | null;
  results: Movie[];
}
