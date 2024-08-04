import React from 'react'
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../Utils/constants';
import Header from './Header';

const MovieInfo = () => {
    const movieDetails = useSelector(store=>store.detail.detail);
  return (
  /* 
    background img
    movie poster
    name - desc
    rating
    trailer vid
   */
    <div className=''>
        
        <img className='fixed h-screen w-screen object-cover md:h-screen lg:h-screen bg-black ' src={IMG_CDN_URL+movieDetails.background_image} alt="background"/> 
        <div className='fixed h-screen w-screen object-cover md:h-screen lg:h-screen bg-gradient-to-t from-black  backdrop-blur-sm'>
            <div className='flex flex-col mx-5 text-white'>
                <img
                className='w-36 md:w-48 lg:w-48'
                alt='Movie Card'
                src={IMG_CDN_URL+movieDetails.posterPath}>
                </img>
                <h1 className='text-xl md:text-6xl lg:text-6xl font-bold drop-shadow'>{movieDetails.title}</h1>
                <p className=' py-6 text-lg w-full drop-shadow  '>{movieDetails.description}</p>
              {/*
              <div className=' flex gap-3 pt-3 md:pt-0 lg:pt-0'>
                    <button className='bg-white text-black font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md hover:bg-opacity-50'><i className='bx bx-play bx-xs'></i>Play</button>
                    <button className='bg-red-700 text-white font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md' onClick={handleMovieDetailView}>Close</button>
            
                </div> */}  
            </div>
        </div> 
    </div>
  )
}

export default MovieInfo