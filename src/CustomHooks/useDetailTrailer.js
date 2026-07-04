import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../Utils/constants';
import { useSelector} from 'react-redux'
import { addTrailerVideoDetails } from '../Redux/Slices/detailSlice';


const useDetailTrailer = (movieId) => {
    const dispatch =useDispatch();
    const trailerVideo = useSelector(store=>store.detail.detail.trailerVideo)
    useEffect(()=>{
        if (!movieId || trailerVideo) return;

        const getMoviesVideos = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);
            const json = await data.json();
            const filterTrailers = json.results.filter((video)=>video.type === "Trailer")
            const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];

            dispatch(addTrailerVideoDetails(trailer));
        };

        getMoviesVideos();
    },[dispatch, movieId, trailerVideo]);
    
}

export default useDetailTrailer