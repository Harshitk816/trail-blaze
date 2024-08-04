import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[30%] md:pt-[15%] lg:pt-[15%] px-6 md:px-24 lg:px-24  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-6xl lg:text-6xl font-bold drop-shadow'>{title}</h1>
        <p className='hidden md:inline-block lg:inline-block py-6 text-lg w-1/4 drop-shadow'>{overview}</p>
        <div className='pt-3 md:pt-0 lg:pt-0'>
            <button className='bg-white text-black font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md hover:bg-opacity-50'><i className='bx bx-play bx-xs'></i>Play</button>
            <button className='mx-2 bg-gray-500 bg-opacity-50 text-white font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md'><i className='bx bx-info-circle' ></i> More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle