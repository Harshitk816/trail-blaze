import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { addUpcomingMovies } from '../Redux/Slices/moviesSlice'
import { useSelector} from 'react-redux'

const useUpcomingMovies=()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies)
const getUpcomingMovies = async()=>{
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?page=1',
    API_OPTIONS
  );
  const json = await data.json();
  dispatch(addUpcomingMovies(json.results));
 
};

useEffect(()=>{
  if(!upcomingMovies) getUpcomingMovies();
},[])

}
export default useUpcomingMovies;
