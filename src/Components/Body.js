import Login from './Login'
import Browse from './Browse'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MovieInfo from './MovieInfo';



const Body = () => {

    const appRouter =createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/info",
            element:<MovieInfo/>
        }
    ]);
    
  return (
    
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body