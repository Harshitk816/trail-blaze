import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addNowPlayingMovies } from '../Redux/Slices/moviesSlice'
import { useSelector} from 'react-redux'

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
useEffect(()=>{
  if (nowPlayingMovies) return;

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  getNowPlayingMovies();
  
},[dispatch, nowPlayingMovies])

}
export default useNowPlayingMovies;
