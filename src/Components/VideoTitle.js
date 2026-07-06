import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieDetails, toggleDetailView } from '../Redux/Slices/detailSlice';

const VideoTitle = ({ title, overview, id, posterPath, background_image, avgRating }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();

  const handlePlayTrailer = () => {
    if (!trailerVideo?.key) return;
    window.open(`https://www.youtube.com/watch?v=${trailerVideo.key}`, '_blank', 'noopener,noreferrer');
  };

  const handleMoreInfo = () => {
    dispatch(
      addMovieDetails({
        title,
        description: overview,
        posterPath,
        id,
        background_image,
        avgRating,
      })
    );
    dispatch(toggleDetailView());
  };

  return (
    <div className='w-screen aspect-video pt-[30%] md:pt-[15%] lg:pt-[15%] px-6 md:px-24 lg:px-24  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-6xl lg:text-6xl font-bold drop-shadow'>{title}</h1>
        <p className='hidden md:inline-block lg:inline-block py-6 text-lg w-1/4 drop-shadow'>{overview}</p>
        <div className='pt-3 md:pt-0 lg:pt-0'>
            <button
              className='bg-white text-black font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md hover:bg-opacity-50 disabled:cursor-not-allowed disabled:opacity-60'
              onClick={handlePlayTrailer}
              disabled={!trailerVideo?.key}
            >
              <i className='bx bx-play bx-xs'></i>Play
            </button>
            <button
              className='mx-2 bg-gray-500 bg-opacity-50 text-white font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md'
              onClick={handleMoreInfo}
            >
              <i className='bx bx-info-circle' ></i> More Info
            </button>
        </div>

    </div>
  )
}

export default VideoTitle