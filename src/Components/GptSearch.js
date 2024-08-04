import React from 'react'
import SearchBar from './SearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND } from '../Utils/constants'
import { useSelector }  from "react-redux";
import MovieDetail from './MovieDetail';

const GptSearch = () => {
  const toggleMovieDetail = useSelector(store=>store.detail.showDetail);
  return (
    <>
     {toggleMovieDetail && <MovieDetail/>}
       <div className='fixed -z-10'>
      <img className='h-screen object-cover md:h-auto lg:h-auto' src={BACKGROUND} alt="background"/>
      </div>
    <div className=' '>
     
      <SearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch