import React from 'react'
import { Link } from 'react-router-dom'
function Card({data}) {
  const baseurl = 'https://image.tmdb.org/t/p/original'
    
  return (<>
  <Link to={`/movie/${data.id}`}>
    <div className='container-item'>
                     <div className='container-img'>
                     <img src={`${baseurl}${data?.poster_path || data?.backdrop_path }`} alt={data.title}  />
                     </div>
                   </div>
                   </Link></>)
}

export default Card