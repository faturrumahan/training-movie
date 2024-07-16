import MovieList from "@/components/MovieList";
import WatchList from "@/components/WatchList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-10">
      <MovieList />
      <WatchList />
    </main>
  );
}
