import { createSlice } from '@reduxjs/toolkit'

const detailSlice=createSlice({
    name:'detail',
    initialState:{
        showDetail:false,
        detail:{
            title:null,
            description:null,
            poster_url:null,
            id:null,
            background_image:null,
            avgRating:null
        },
        trailerVideo:null,
    },
    reducers:{
        toggleDetailView:(state, action)=>{
            state.showDetail = !state.showDetail;
        },
        addMovieDetails:(state,action)=>{
            state.detail=action.payload;
        },
        addTrailerVideoDetails:(state,action)=>{
            state.trailerVideo=action.payload;
        },
    }
})
export default detailSlice.reducer;
export const{toggleDetailView,addMovieDetails, addTrailerVideoDetails}=detailSlice.actions;