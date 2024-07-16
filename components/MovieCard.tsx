import Image from "next/image";
import React from "react";

type MovieCardProps = {
  title?: string;
  poster_path?: string;
};

function MovieCard({ title, poster_path }: MovieCardProps) {
  return (
    <div className="bg-gray-200 p-5 rounded flex flex-col items-center gap-4 w-[200px] h-fit">
      <Image
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        width={200}
        height={200}
        alt={`${title}`}
        className="rounded"
      />
      <p className="font-bold text-center">{title}</p>
    </div>
  );
}

export default MovieCard;
