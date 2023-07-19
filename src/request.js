const KEY='e1750a266b775f7cb65ea1e56fa16b80'
const request ={
    trending:`/trending/all/week?api_key=${KEY}&language=en-US`,
discover:`/discover/movie?api_key=${KEY}&language=en-US`,
topRated:`/movie/top_rated?api_key=${KEY}&language=en-US`,
actionMovies:`/discover/movie?api_key=${KEY}&with_genres=28`,
comedyMovies:`/discover/movie?api_key=${KEY}&with_genres=35`,
horrorMovies:`/discover/movie?api_key=${KEY}&with_genres=27`,
romanceMovies:`/discover/movie?api_key=${KEY}&with_genres=10749`,
documentaries:`/discover/movie?api_key=${KEY}&with_genres=99`,
searchMovies:`/search/multi?api_key=${KEY}&language=en-US`,
}
export default request