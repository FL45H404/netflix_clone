import React, { useEffect } from 'react'
import './MyList.scss'
import {removeWatchList, getWatchList} from '../reducers/Slice'
import {useDispatch,useSelector} from 'react-redux';

function MyList() {

const baseurl = 'https://image.tmdb.org/t/p/original'
const dispatch=useDispatch();
const data=useSelector(getWatchList)
useEffect(()=>{

},[dispatch])
console.log(data)
  return (
    <div className="wishlist">
        <div className="wishlistTitle">
            My List
        </div>
        {Object.keys(data).length!==0 ?<>
          <div className="wishlistcontainer">
          {data.map((i,index)=>{
              return (
                  <div className="list" key={index}>
                  <div className="listimg">
                      <img src={`${baseurl}${i.backdrop_path}`} alt="movie_poster" />
                  </div>
                  <div className="listcontent">
                      <div className="ItemTitle">{i.original_title}</div>
                      <div className="ItemBtn">
                          <button onClick={()=>dispatch(removeWatchList(i.id))}>Remove</button>
                      </div>
                  </div>
              </div>
              
              )
          })}
             
          </div>
      </>
        :
        <div className="wishlistcontainer">
            No movies Added In WatchList
        </div>
        }
      </div>
  )
}

export default MyList