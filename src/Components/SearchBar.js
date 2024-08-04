import React, { useRef } from 'react'
import lang from '../Utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../Utils/openai'
import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addGptMovieResult } from '../Redux/Slices/gptSlice'

const SearchBar = () => {
  const searchText =useRef(null);
  const langKey = useSelector(store=>store.config.lang);
  const dispatch = useDispatch();

  //search movie in TMDB
  const searchMovieTMDB =async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;  

  }


  const handleGptSearchClick=async()=>{
    console.log(searchText.current.value);
    const gptQuery = "Act as a movie recommendation system and suggest some movies containing all the genre in the query" + searchText.current.value+". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    //MAKE api call
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices?.[0]?.message?.content);  //Return of the Jedi, Ferris Bueller's Day Off, Dirty Dancing, Back to the Future, The Terminator
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");  //[Return of the Jedi, Ferris Bueller's Day Off, Dirty Dancing, Back to the Future, The Terminator]

    //For each movies in the array, i will search the TMBD API
    const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie)) ;  //will return [PROMISE, PROMISE, PROMISE, PROMISE]

    const tmdbResults =  await Promise.all(promiseArray);
    console.log(tmdbResults);  
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  }
  return (
    <div className='pt-[45%] md:pt-[10%] lg:md:pt-[10%] flex justify-center'>
      <form className=' w-[90%] md:w-1/2 lg:md:w-1/2 bg-black grid grid-cols-12 rounded-md' onSubmit={(e)=>{e.preventDefault()}}>
        <input ref={searchText} type='text' className='p-2 px-4 md:p-4 lg:p-4 col-span-8 m-4 rounded-md text-sm md:text-lg lg:text-lg' placeholder={lang[langKey].searchBarPlaceholder}></input>
        <button onClick={handleGptSearchClick} className='py-0 md:py-2 lg:py-2 px-4 bg-red-700 col-span-4 m-4 text-white rounded-md text-sm md:text-lg lg:text-lg '>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default SearchBar