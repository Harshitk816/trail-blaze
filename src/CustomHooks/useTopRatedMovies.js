import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { addTopRatedMovies } from '../Redux/Slices/moviesSlice'
import { useSelector} from 'react-redux'

const useTopRatedMovies=()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)
const getTopRatedMovies = async()=>{
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?page=1',
    API_OPTIONS
  );
  const json = await data.json();
  dispatch(addTopRatedMovies(json.results));
  
};

useEffect(()=>{
  if(!topRatedMovies) getTopRatedMovies();
},[])

}
export default useTopRatedMovies;
