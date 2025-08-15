// Services
import { getMovieById, getPlanetsById } from "@/services/moviesServices";
// Components
import Image from "next/image";
import Link from "next/link";
// Pages
import { notFound } from "next/navigation";
// Icons
import { CircleUser, Clock4 } from "lucide-react";

interface MovieDetailsProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: MovieDetailsProps) {
  const movieId = await params.id;
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
            <div className="w-full md:w-full lg:w-lg">
              <h2 className="text-lg mb-3">Opening</h2>
              <div className="space-y-4 text-gray-300 text-md leading-relaxed">
                <p>{dataMovie.opening_crawl}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Clock4 size={20} color="#FFFF" />
                </div>
                <span>{dataMovie.release_date}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <CircleUser size={20} color="#FFFF" />
                </div>
                <span>{dataMovie.director}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <CircleUser size={20} color="#FFFF" />
                </div>
                <span>{dataMovie.producer}</span>
              </div>
            </div>
            <div className="w-full md:w-full lg:w-lg h-px bg-[#28282A] my-8" />
          </div>
          <div className="col-span-10 md:col-span-6 ">
            <h2 className="text-2xl font-semibold mb-4">Planets</h2>
            <div className="grid grid-rows-1 gap-6 ">
              {planets.map((planet, index) => (
                <div
                  key={index}
                  className="bg-[#26262A] rounded-xl p-4 relative"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg">{planet?.name}</h3>
                      <p className="text-sm text-[#A2A2A2] space-y-1">
                        {planet?.population} población
                      </p>
                      <p className="text-sm text-[#A2A2A2] space-y-1">
                        {planet?.diameter} km de diámetro
                      </p>
                      <p className="text-sm text-[#A2A2A2] space-y-1">
                        Período de rotación: {planet?.rotation_period} días
                      </p>
                    </div>
                    <button className="bg-[#6F00ED] hover:bg-purple-700 px-4 py-2 rounded-md text-sm transition-colors">
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
