// Services
import { getMovieById, getPlanetsById } from "@/services/moviesServices";
// Pages
import { notFound } from "next/navigation";
// Components
import Image from "next/image";
import Link from "next/link";
import CardPlanet from "@/app/components/CardPlanet";
import OpeningInfo from "@/app/components/OpeningInfo";
import FooterDetailMovie from "@/app/components/FooterDetailMovie";

interface MovieDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: MovieDetailsProps) {
  const { id: movieId } = await params;
  const dataMovie = await getMovieById(movieId);
  const planets = await Promise.all(
    dataMovie.planets.map(planetUrl => {
      const planetId = planetUrl.slice(-1);
      return getPlanetsById(planetId);
    })
  );

  if (!dataMovie) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <Image
            className="dark:invert"
            src="/assets/logo.png"
            alt="Logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <Link
          href="/"
          className="inline-flex items-center text-white hover:text-yellow-400 mb-4"
        >
          <span className="mr-2 text-3xl font-bold">‹</span>
          <span className="text-3xl font-bold">{dataMovie.title}</span>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 max-w-8xl mx-auto">
          <div className="col-span-10 md:col-span-6 space-y-8">
            <OpeningInfo openingCrawl={dataMovie.opening_crawl} />
            <div className="space-y-3 text-sm">
              <FooterDetailMovie
                release_date={dataMovie.release_date}
                director={dataMovie.director}
                producer={dataMovie.producer}
              />
            </div>
            <div className="w-full md:w-full lg:w-lg h-px bg-[#28282A] my-8" />
          </div>
          <div className="col-span-10 md:col-span-6 ">
            <CardPlanet planets={planets} />
          </div>
        </div>
      </div>
    </main>
  );
}
