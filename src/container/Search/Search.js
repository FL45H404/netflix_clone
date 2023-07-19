import React, { useEffect, useState } from 'react'
import './Search.scss'
import Card from './Card'
import {useDispatch,useSelector} from 'react-redux'
import {getSearchMovie, clearSearch, searchMovies} from '../reducers/Slice'
import LoadingSpin from "react-loading-spin";



function Search() {
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
const [text,searchText]=useState('Harry')
const dispatch=useDispatch();
const data=useSelector(getSearchMovie)
    useEffect(()=>{
        dispatch(searchMovies(text))
        return ()=>{
            dispatch(clearSearch())
        }
    },[dispatch])
    const submitHandler=async (e)=>{
e.preventDefault();
dispatch(clearSearch())
dispatch(searchMovies(text))
searchText('')
    }
  return (
    <div className="search">
        <div className="search_box">
            <div className="search_container">
                   <input type="text"  value={text} onChange={(e)=>{
                       searchText(e.target.value)
                   }}/>
                   <button type='submit' onClick={submitHandler}>Search</button>
            </div>
        </div>
        <div className="search_items">
            {Object.keys(data).length!==0 ?
            <div className="item_container">
            {data.map((i,index)=>{
                 return <Card key={index} data={i}/>
            })}
       
        </div>
            :
            <ExampleOfUsingDefaultLoadingSpin/>
            }
            
        </div>
    </div>
  )
}

export default Search