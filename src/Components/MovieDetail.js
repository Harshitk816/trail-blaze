import React,{useState, useEffect} from 'react'
import {useDispatch} from  "react-redux";
import { toggleDetailView } from '../Redux/Slices/detailSlice';
import {useSelector} from 'react-redux'
import { IMG_CDN_URL } from '../Utils/constants';
import useDetailTrailer from '../CustomHooks/useDetailTrailer';
import { Link } from 'react-router-dom';


const MovieDetail = () => {

  const id =  useSelector(store=> store.detail.detail.id);
  useDetailTrailer(id);
    const movieDetails=useSelector(store=>store.detail.detail);
    const movieTrailer =useSelector(store=>store.detail.trailerVideo);
    const dispatch=useDispatch();
    const handleMovieDetailView =()=>{
      dispatch(toggleDetailView());
    } 
    
  return (<div className=' fixed overflow-scroll z-30 w-screen h-screen bg-black backdrop-blur-sm'>
            <div className='pt-[45%]  md:pt-0 lg:pt-0'>
        
        <img className='fixed h-screen w-screen object-cover md:h-screen lg:h-screen bg-black ' src={IMG_CDN_URL+movieDetails.background_image} alt="background"/> 
        <div className='fixed h-screen w-screen object-cover md:h-screen lg:h-screen bg-gradient-to-t from-black  backdrop-blur-sm'>
            <div className='flex px-4 pt-[5%] flex flex-col mx-5 text-white'>
                <img
                className='py-4 w-36 md:w-48 lg:w-48'
                alt='Movie Card'
                src={IMG_CDN_URL+movieDetails.posterPath}>
                </img>
                <div className=' flex gap-3 py-4 md:py-4 lg:py-4'>
                    <a href='#trailer'><button className='bg-white text-black font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md hover:bg-opacity-50'><i className='bx bx-play bx-xs'></i>Trailer</button></a>
                    <button className='bg-red-700 text-white font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md' onClick={handleMovieDetailView}>Close</button>
            
                </div> 
                <h1 className='text-xl md:text-6xl lg:text-6xl font-bold drop-shadow'>{movieDetails.title}</h1>
                <p className=' py-4 text-2xl w-full drop-shadow  '>⭐ {movieDetails.avgRating.toFixed(1)}</p>
                <p className=' py-4 text-xl w-full drop-shadow  '>{movieDetails.description}</p>

                <h1 className='text-xl md:text-6xl lg:text-4xl font-bold drop-shadow'>Official Trailer</h1>
                <div id='trailer' className=" pt-4 w-full md:w-auto">
              <iframe
                className="w-[310px] h-[250px] md:w-[560px] md:h-[315px]"
                src={
                  "https://www.youtube-nocookie.com/embed/" + movieTrailer?.key
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
               
              
              
            </div>
        </div> 
    </div>
  </div>
  
  )
}

export default MovieDetail