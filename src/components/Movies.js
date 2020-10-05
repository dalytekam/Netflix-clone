import React, { useEffect, useState } from "react";
import requester from "../axiosConfig";
import "../components/Movies.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

const Movies = ({ title, urlLink, isTrending }) => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 0,
    },
  };
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await requester.get(urlLink);
      setMovies(response.data.results);
      return response;
    }
    getData();
  }, [urlLink]);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParameters = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParameters.get("v"));
          console.log(url);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="genre">
      <h2>{title}</h2>
      <div className="genre__poster">
        {movies.map((movie) => (
          <img
            className={`genre__poster__img ${isTrending ? "trending" : ""}`}
            key={movie.id}
            src={`${imageBaseUrl}${
              isTrending ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
export default Movies;
