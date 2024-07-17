import SaveButton from "@/components/SaveButton";
import { addwatchList } from "@/reducer/watchListSlice";
import { Movie } from "@/types/movie";
import { api } from "@/utils/network/axios";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

type MetaDataProps = {
  params: { id: string };
};

type Props = {
  params: any;
};

export async function generateMetadata({
  params,
}: MetaDataProps): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const data = await getMovie(id);

  return {
    title: data.title,
    description: data.overview,
  };
}

async function getMovie(id: string) {
  const response = await api.get(`/${id}`, {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDBiOGM2MzhkODQxY2Y5YzU0M2U4OWMwMTFkMjliMiIsIm5iZiI6MTcyMTEyODA4Mi44MzcxOTUsInN1YiI6IjY1OTRlZmNiOTkyZmU2MmIyNzFlNmUwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJFn8FS2UYWcowGQtA8Xv1Dhc2T6ZYtIBrDfwiswArY",
    },
  });

  return response.data;
}

async function MovieDetail({ params }: Props) {
  const { id } = params;
  const data = await getMovie(id);

  return (
    <div className="flex flex-col p-10 items-center">
      <div className="w-full h-[500px]">
        <Image
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          width={1000}
          height={500}
          alt={data.title}
          className="rounded object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-2 mt-5 w-full">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">{data.title}</h1>
          <SaveButton id={id} title={data.title} />
        </div>
        <div className="flex flex-wrap gap-1">
          {data.genres.map((genre: any) => (
            <span
              key={genre.id}
              className="text-xs px-2 py-1 bg-gray-200 rounded"
            >
              {genre.name}
            </span>
          ))}
        </div>
        <p className="w-1/2">{data.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
