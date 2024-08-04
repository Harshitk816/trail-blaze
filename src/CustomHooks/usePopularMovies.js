import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { addPopularMovies } from '../Redux/Slices/moviesSlice'
import {useSelector} from 'react-redux'

const usePopularMovies=()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies)
const getPopularMovies = async()=>{
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/popular?page=1',
    API_OPTIONS
  );
  const json = await data.json();
  dispatch(addPopularMovies(json.results));
  console.log(json)
};

useEffect(()=>{
  if(!popularMovies)  getPopularMovies();
 
},[])

}
export default usePopularMovies;
