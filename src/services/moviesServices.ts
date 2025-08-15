// Services
import { apiClient } from "./apiClient";
// Types
import { FilmsResponse, Movie, Planet } from "@/types/movie";

const BASE_URL = "https://swapi.info/api";

export async function getMovies(): Promise<FilmsResponse> {
  return await apiClient<FilmsResponse>(`${BASE_URL}/films`, {
    next: { revalidate: 86400 }, // Cache for 24 hours
  });
}

export async function getMovieById(id: string): Promise<Movie> {
  return apiClient<Movie>(`${BASE_URL}/films/${id}`, {
    cache: "no-store",
  });
}

export async function getPlanetsById(id: string): Promise<Planet> {
  return apiClient<Planet>(`${BASE_URL}/planets/${id}`, {
    cache: "no-store",
  });
}
