import { configureStore,createSlice } from "@reduxjs/toolkit";
import { string } from "yup";


const userslice = createSlice({
    name:"user",
    initialState:{value:{username: ""}},
    reducers:{
        login: (state,action) =>{
            state.value = action.payload;
        },
        logout: (state) =>{
            state.value = initialState;
        }
    }
})



export const store = configureStore({
   
});