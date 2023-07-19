import React, { useEffect } from 'react'
import './Movie.scss';
import { useParams } from 'react-router-dom';
import LoadingSpin from "react-loading-spin";
import StarIcon from '@material-ui/icons/Star';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie, getMovie, removeMovie,addWatchList ,getWatchList,removeWatchList} from '../reducers/Slice';

function Movie() {
  const dispatch = useDispatch()
  const baseurl = 'https://image.tmdb.org/t/p/original'
  const { id } = useParams();
  const ExampleOfUsingDefaultLoadingSpin = () => (
    <div className={"ExampleOfUsage"}>
      <LoadingSpin
        width="50px"
        timingFunction="ease-in-out"
        direction="alternate"
        size="200px"
        primaryColor="yellow"
        secondaryColor="#333"
        numberOfRotationsInAnimation={2}
      />
    </div>
  );
  const data=useSelector(getWatchList)
  const details = useSelector(getMovie)
  useEffect(() => {
    dispatch(fetchMovie(id))
    return () => {
      dispatch(removeMovie())
    }
  }, [dispatch, id])

  return (<>
    {Object.keys(details).length !== 0 ?
      <div className='movie_detail'>
        <div className="movie_container">
          <div className="movie_img">
            <img src={`${baseurl}${details.poster_path}`} alt="movie_poster" />
          </div>
          <div className="movie_items">
            <div className="title">{details?.title || details?.original_title || details?.original_name}</div>
            <div className="desc">{details.overview}</div>
            <div className="sub-item">
              <div className="date">
                Release Date <CalendarTodayIcon className='cl' />:- {details.release_date}
              </div>
              <div className="rating">
                Rating <StarIcon className='yl' />:- {details.vote_average}
              </div>
              <div className="age">
                Adult <NotInterestedIcon className='rd' />:- {details.adult ? '18+' : 'NO'}
              </div>
              <div className="popularity">
                Popularity:- {details.popularity || ''}
              </div>
              <div className="genres">
                Genre:- {details.genres.map((i, index) => {
                  return <p key={index}>{i.name} </p>
                })}
              </div>
            </div>
            <div className="mylist">
{(data.filter(e=>e.id===details.id).length>0) ? <button onClick={()=>{
                alert('movie removed from My List')
                dispatch(removeWatchList(details.id))
              }}>Remove From WatchList</button>
:<button onClick={()=>{
  dispatch(addWatchList(details))
  alert(`${details.title} movie added to My List`)
}}>Add to WatchList</button>
}
            </div>
          </div>
        </div>
      </div>
      : <ExampleOfUsingDefaultLoadingSpin />}
  </>)
}

export default Movie