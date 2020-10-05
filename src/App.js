import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import requestslinks from "./requests";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <Movies
        title="Trending Now"
        urlLink={requestslinks.trendingNow}
        isTrending
      />
      <Movies title="Popular" urlLink={requestslinks.getPopularMovies} />
      <Movies title="Romance" urlLink={requestslinks.getRomanceMovies} />
      <Movies title="Action" urlLink={requestslinks.getActionMovies} />
      <Movies title="Comedy" urlLink={requestslinks.getComedyMovies} />
      <Movies title="Fiction" urlLink={requestslinks.getScienceFictionMovies} />
      <Movies title="Top Rated" urlLink={requestslinks.getTopRatedMovies} />
      <Movies title="TV Movies" urlLink={requestslinks.getTvMovies} />
    </div>
  );
}

export default App;
//! Link to see the app: netflix-clone-6be82.web.app
