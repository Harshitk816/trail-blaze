import React from 'react'
import { useSelector }  from "react-redux";
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import MovieDetail from './MovieDetail';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    const toggleMovieDetail = useSelector(store=>store.detail.showDetail);

    if(!movies) return; //early return. If movies is null then do not render anything

    const mainMovie = movies[0];
     const {original_title, overview, id} =  mainMovie;
 return (
  <>
  {toggleMovieDetail && <MovieDetail/>}
    <div className='pt-[45%] bg-black md:pt-0 lg:pt-0'>
        <VideoTitle title ={original_title} overview={overview}/>
                   
        <VideoBackground movieId={id}/>
        
    </div>
    </>
  )
}

export default MainContainer
