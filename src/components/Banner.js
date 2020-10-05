import { useEffect } from "react";
import { useState } from "react";
import requestslinks from "../requests";
import requester from "../axiosConfig";
import React from "react";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const errorMsg = "An Error ocurred !!";
  useEffect(() => {
    async function getMovie() {
      const bannerMovie = await requester.get(requestslinks.trendingNow);
      setMovie(
        bannerMovie.data.results[
          Math.floor(Math.random() * bannerMovie.data.results.length - 1)
        ]
      );
      return bannerMovie;
    }

    getMovie();
  }, []);

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <nav
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.poster_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1>{movie?.title || movie?.original_name || movie?.name}</h1>
        <p>
          {movie?.overview ? (
            truncateString(movie.overview, 200)
          ) : (
            <strong>{errorMsg}</strong>
          )}
        </p>
        <div className="banner__buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
      </div>
    </nav>
  );
};
export default Banner;
