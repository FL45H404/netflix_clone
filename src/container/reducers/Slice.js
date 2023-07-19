import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import instance from '../../api'
import request from '../../request'
let KEY='e1750a266b775f7cb65ea1e56fa16b80'

export const fetchMovie=createAsyncThunk('movies/fetchMovie',
 async (id)=>{
    const data=await instance.get(`/movie/${id}?api_key=${KEY}&language=en-US`)
    console.log(data.data)
    return data.data
})
export const searchMovies=createAsyncThunk('movies/searchMovies',
async (term)=>{
    const data=await instance.get(`${request.searchMovies}&query=${term}`)
    return data.data.results
})
const initialState={
    movie:{},
    watchList:[ ],
    searchMovies:{},
    isLogin:false,

}
export const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        removeMovie:(state)=>{
            state.movie={};
        },
        addWatchList:(state,{payload})=>{
            state.watchList=[payload,...state.watchList]
        },
        clearSearch:(state)=>{
            state.searchMovies={};
        },clearWatchList:(state)=>{
            state.watchList=[]
        },removeWatchList:(state,action)=>{
        state.watchList=state.watchList.filter((item)=>item.id !==action.payload)
        },addUser:(state,action)=>{
            state.isLogin=true
        },removeUser:(state)=>{
            state.isLogin=false
        }
    },
    extraReducers:{
        [fetchMovie.pending]:()=>{
            console.log('pending')
        },
        [fetchMovie.fulfilled]:(state,action)=>{
            console.log('fetching data')
            return {...state, movie:action.payload};
        },
        [fetchMovie.rejected]:()=>{
            console.log('rejected')
        },
        [searchMovies.pending]:()=>{
            console.log('pending')
        },[searchMovies.fulfilled]:(state,action)=>{
            return {...state,searchMovies:action.payload}
        },[searchMovies.rejected]:()=>{
            console.log('rejected')
        }
    }
})

export const {addMovieId,removeMovie,addWatchList ,clearSearch,clearWatchList,removeWatchList,addUser,removeUser} = movieSlice.actions;
export const getMovie=(state)=>state.movies.movie;
export const getUser=(state)=>state.movies.isLogin;
export const getSearchMovie=(state)=>state.movies.searchMovies
export const getWatchList=(state)=>state.movies.watchList;
export default movieSlice.reducer;