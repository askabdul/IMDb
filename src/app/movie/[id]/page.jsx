import Image from "next/image";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const result = await res.json();
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          alt={result.name}
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {result.title || result.name}
          </h2>
          <p className="text-lg mb-3">{result.overview}</p>
          <p className="mb-3">
            <span className="font-semi-bold mr-1">Date Released:</span>
            {result.release_date || result.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semi-bold mr-1">Rating:</span>

            {result.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
