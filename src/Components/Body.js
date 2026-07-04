import Login from './Login'
import Browse from './Browse'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MovieInfo from './MovieInfo';
import ErrorPage from './ErrorPage';



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
        },
        {
            path:"/error",
            element:<ErrorPage/>
        },
        {
            path:"*",
            element:<ErrorPage/>
        }
    ]);
    
  return (
    
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body