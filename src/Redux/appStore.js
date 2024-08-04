import {configureStore} from '@reduxjs/toolkit'
import userReducer from './Slices/userSlice';
import movieReducer from './Slices/moviesSlice'
import gptReducer from "./Slices/gptSlice"
import configReducer from './Slices/configSlice';
import detailReducer from './Slices/detailSlice'
const appStore = configureStore(
    {
        reducer:{
            config:configReducer,
            user:userReducer, 
            movies:movieReducer,
            gpt:gptReducer,
            detail:detailReducer
        }, 
    }
);

export default appStore;
