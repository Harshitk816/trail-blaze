import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
   if(movies==null) return;
   console.log(movies)
  return (
    <div className='px-6 w-screen'>
        <h1 className='text-xl md:text-3xl lg:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            
            <div className='flex'>
                {movies?.map((movie)=>{
                    return <MovieCard
                            key={movie.id} 
                            posterPath={movie.poster_path}
                            title={movie.original_title}
                            avgRating={movie.vote_average}
                            description={movie.overview}
                            id={movie.id}
                            background_image={movie.backdrop_path}
                            
                             />
                })}
            </div>
        </div>
    </div>
  )
}

export default MovieList