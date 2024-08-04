import React, { useState } from 'react'
import { IMG_CDN_URL } from '../Utils/constants'
import MovieDetail from './MovieDetail';
import {useDispatch} from  "react-redux";
import { toggleDetailView } from '../Redux/Slices/detailSlice';
import { addMovieDetails } from '../Redux/Slices/detailSlice';
import useDetailTrailer from '../CustomHooks/useDetailTrailer';


const MovieCard = ({posterPath, title, avgRating, description, id, background_image}) => {
  
  const [isHover, setIsHover]=useState(false);
  const dispatch=useDispatch();
  const handleMovieDetail =()=>{
    
    dispatch(addMovieDetails({title, description, posterPath, id, background_image, avgRating}));
    
    dispatch(toggleDetailView());
    const setCardDetail=()=>{
     
    }
  } 
  const handleHover1=()=>{
    setIsHover(true);
  }
  const handleHover2=()=>{
    setIsHover(false);
  }
  if(!posterPath){
    return (<div className='w-36 md:w-48 lg:w-48 pr-4 transition-transform duration-300 transform hover:scale-105  ' onClick={handleMovieDetail}  onMouseOut={handleHover2} onMouseOver={handleHover1}> 
    <img
    alt='Movie Card'
    src="https://media.comicbook.com/files/img/default-movie.png">
      
    </img>
    <div className='text-white relative bottom-12 bg-gradient-to-t from-black'>
      {isHover && (<><p className='bg-gradient-to-t from-black w-full font-semibold p-3 absolute truncate text-lg drop-shadow-2xl '>{title}</p>


     </>)}
    </div>
    
    
</div>


 )
  }
 
  return (
    <div className='w-36 md:w-48 lg:w-48 pr-4 transition-transform duration-300 transform hover:scale-105 ' onClick={handleMovieDetail} onMouseOut={handleHover2} onMouseOver={handleHover1}> 
    
        <img
        alt='Movie Card'
        src={IMG_CDN_URL+posterPath}>
          
        </img>
        <div className='text-white relative bottom-12 bg-gradient-to-t from-black'>
          {isHover && (<><p className='bg-gradient-to-t from-black w-full font-semibold p-3 absolute truncate text-lg drop-shadow-2xl '>{title}</p>


         </>)}
        </div>
        
        
    </div>
    
   
  )
}

export default MovieCard