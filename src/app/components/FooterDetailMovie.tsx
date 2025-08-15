import { CircleUser, Clock4 } from "lucide-react";

interface FooterDetailMovieProps {
  release_date: string;
  director: string;
  producer: string;
}

export default function FooterDetailMovie({
  release_date,
  director,
  producer,
}: FooterDetailMovieProps) {
  return (
    <>
      <div className="flex items-center space-x-3">
        <div className="w-5 h-5 flex items-center justify-center">
          <Clock4 size={20} color="#FFFF" />
        </div>
        <span>{release_date}</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-5 h-5 flex items-center justify-center">
          <CircleUser size={20} color="#FFFF" />
        </div>
        <span>{director}</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-5 h-5 flex items-center justify-center">
          <CircleUser size={20} color="#FFFF" />
        </div>
        <span>{producer}</span>
      </div>
    </>
  );
}
