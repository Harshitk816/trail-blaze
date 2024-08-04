import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { addNowPlayingMovies } from '../Redux/Slices/moviesSlice'
import { useSelector} from 'react-redux'

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
const getNowPlayingMovies = async()=>{
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?page=1',
    API_OPTIONS
  );
  const json = await data.json();
  dispatch(addNowPlayingMovies(json.results));
};

useEffect(()=>{
  if(!nowPlayingMovies) getNowPlayingMovies();
  
},[])

}
export default useNowPlayingMovies;
