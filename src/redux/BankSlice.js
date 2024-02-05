import { createSlice } from "@reduxjs/toolkit";

const initialState = 0
const bankSlice = createSlice({
    name:"bank",
    initialState,
    reducers:{
        //action
        withdraw:(state,action)=>{
            return state = state - parseInt(action.payload)
        },
        deposit:(state,action)=>{
            return state = state + parseInt(action.payload)
        }
    }
})

export const {withdraw,deposit} = bankSlice.actions;
export default bankSlice.reducer