// Icons
import { ArrowRight } from "lucide-react";

interface CardMovieProps {
  title: string;
}

export default function CardMovie({ title }: CardMovieProps) {
  return (
    <div className="bg-[#26262A] rounded-2xl flex flex-col items-center justify-center hover:bg-neutral-700 transition cursor-pointer min-w-[120px] min-h-[130px] border border-neutral-600 ">
      <h2 className="text-lg font-semibold text-center break-words w-full px-2">
        {title}
      </h2>
      <div className="flex flex-row items-center justify-end w-full px-4 mt-8 gap-1 ">
        <span className="text-xs text-neutral-400  hover:text-yellow-400">
          Ver más
        </span>
        <ArrowRight color="#FFFF" size={20} className="hover:text-yellow-400" />
      </div>
    </div>
  );
}
