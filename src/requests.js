const API_KEY = "eabeaeb1ae9b2fac397786a035889bfb";

const requestslinks = {
  getLatestMovies: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  getTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  getHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=27`,
  getActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=28`,
  getScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=878`,
  getTvMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=10770`,
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=35`,
  getRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=10749`,
  getMusic: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=10402`,
  trendingNow: `/trending/all/day?api_key=${API_KEY}`,
};

export default requestslinks;
