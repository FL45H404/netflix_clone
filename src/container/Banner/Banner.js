import './banner.scss'
import React, { useEffect, useState } from 'react'
import request from '../../request'
import instance from '../../api'
import InfoIcon from '@material-ui/icons/Info';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {Link} from 'react-router-dom'
function Banner() {
  const [movie, setMovie] = useState([]);
  const baseurl = 'https://image.tmdb.org/t/p/original'
  useEffect(() => {
    async function fetch() {
      const data = await instance.get(request.trending)
      setMovie(data.data.results[Math.floor(Math.random() * data.data.results.length - 1)])

    }
    fetch();
  }, [])
  console.warn(movie)
  return (
    <div className="banner" style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${baseurl}${movie?.backdrop_path})` }}>
      <div className="banner-content">
      <div className="banner-title">
        {movie?.title || movie?.original_title ||movie?.original_name}
      </div>
      <div className="desc">
        {movie.overview}
      </div>
     <div className="bottom-btn">
       <div className="ltbtn">
       <PlayArrowIcon className="btn"/> Play
       </div>
       <div className="rtbtn"><Link to={`/movie/${movie.id}`}>
         <InfoIcon className="btn"/> More Info
         </Link>
       </div>
     </div>
    </div>
    <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner