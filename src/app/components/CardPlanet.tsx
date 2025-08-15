// Types
import { Planet } from "@/types/movie";

interface CardPlanetProps {
  planets: Planet[];
}

export default function CardPlanet({ planets }: CardPlanetProps) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Planets</h2>
      <div className="grid grid-rows-1 gap-6 ">
        {planets.map((planet, index) => (
          <div key={index} className="bg-[#26262A] rounded-xl p-4 relative">
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
    </>
  );
}
