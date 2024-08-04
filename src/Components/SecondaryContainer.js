import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store=>store.movies);
  return movies && (
    <div className='bg-black w-screen'>
        {/* 
            Movielist - Popular
                moviecards*n
            Movielist - Now Playing
            Movielist - Trending
            Movielist - Horror

        */}
        <div className='mt-0 md:-mt-52 lg:-mt-52 relative z-20 '>
        <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies = {movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies = {movies.nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies = {movies.upcomingMovies}/>
        
        
        </div>
       
    </div>
  )
}

export default SecondaryContainer