import React from 'react'
import request from '../../request';
import Row from '../content/Row';
import './Movies.scss'
import Banner from '../Banner/Banner';
function Movies() {
  return (<>
<Banner/>
  <div className="movie_section">
    <Row title="Recently Added" fetch={request.trending}/>
    <Row title="Action Movies" fetch={request.actionMovies}/>
    <Row title="Comedy Movies" fetch={request.comedyMovies}/>
    <Row title="Top Rated Movies" fetch={request.topRated}/>
    <Row title="Romantic Movies" fetch={request.romanceMovies}/>    
    <Row title="Horror Movies" fetch={request.horrorMovies}/>
    <Row title="Discover" fetch={request.discover}/>
    <Row title="Documentaries" fetch={request.documentaries}/>
    </div>
    </>
  )
}

export default Movies