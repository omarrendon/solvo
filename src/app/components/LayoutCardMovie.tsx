// Services
import { getMovies } from "@/services/moviesServices";
// Types
import { Movie } from "@/types/movie";
// Components
import Link from "next/link";
import CardMovie from "./CardMovie";

export default async function LayoutCardMovie() {
  const results = await getMovies();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {results?.map((movie: Movie) => {
        const movieId = movie.url.slice(-1);
        return (
          <Link href={`/movies/${movieId}`} key={movie.episode_id}>
            <CardMovie title={movie.title} />
          </Link>
        );
      })}
    </div>
  );
}
