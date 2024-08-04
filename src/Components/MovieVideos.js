import React from "react";
import { useSelector } from "react-redux";


const MovieVideos = () => {
  const movieVideos = useSelector((store) => store.detail.detail.trailerVideo);
  console.log(movieVideos);
  if (!movieVideos || movieVideos.length === 0) return null;

  return (
    <div className="bg-black py-1 md:px-14 px-10 font-[poppins]">
      <div className="md:mb-5 mb-3 pt-4">
        <span className="font-bold text-4xl text-orange-600">Videos</span>
      </div>
      <div className="my-5">
        <div className="flex flex-row gap-10 overflow-x-scroll">
          {movieVideos.map((movieVideo) => (
            <div key={movieVideo?.key} className=" w-full md:w-auto">
              <iframe
                className="w-[310px] h-[250px] md:w-[560px] md:h-[315px]"
                src={
                  "https://www.youtube-nocookie.com/embed/" + movieVideo?.key
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieVideos;