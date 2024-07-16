"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Nav";
import MovieCard from "./MovieCard";
import { api } from "@/utils/network/axios";
import { Movie } from "@/types/movie";
import Link from "next/link";

function MovieList() {
  const [category, setCategory] = useState("now_playing");
  const [page, setPage] = useState("1");
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async (category: string) => {
    const response = await api.get(`/${category}`, {
      params: { language: "en-US", page: `${page}` },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDBiOGM2MzhkODQxY2Y5YzU0M2U4OWMwMTFkMjliMiIsIm5iZiI6MTcyMTEyODA4Mi44MzcxOTUsInN1YiI6IjY1OTRlZmNiOTkyZmU2MmIyNzFlNmUwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJFn8FS2UYWcowGQtA8Xv1Dhc2T6ZYtIBrDfwiswArY",
      },
    });
    setMovies(response.data.results);
  };

  useEffect(() => {
    loadMovies(category);
  }, [category]);

  return (
    <>
      <Navigation setCategory={setCategory} />
      <div className="flex flex-wrap gap-4">
        {movies.map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <MovieCard title={movie.title} poster_path={movie.poster_path} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MovieList;
