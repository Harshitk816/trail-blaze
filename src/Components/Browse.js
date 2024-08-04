
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies'
import usePopularMovies from '../CustomHooks/usePopularMovies'
import useTopRatedMovies from '../CustomHooks/useTopRatedMovies'
import useUpcomingMovies from '../CustomHooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux'


const Browse = () => {

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
 
  return (
    <div>
      <Header/>
      {showGptSearch ? (<GptSearch/>) :(
        <>
        <MainContainer/>
       <SecondaryContainer/>
       </>
       )
      }
      
      {/* 
      -MainContainer
        -VideoBackground
        -Video Title
      
      -MovieList*N
        -cards*N

       */}
       
      
    </div>
  )
}

export default Browse