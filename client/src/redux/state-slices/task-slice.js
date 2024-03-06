import {createSlice} from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name:"task",
    initialState:{
        new:[],
        completed:[],
        progress:[],
        canceled:[],
    },
    reducers:{
        setNew:(state,action)=>{
          state.new = action.payload;
        },
        setCompleted:(state,action)=>{
            state.completed = action.payload;
        },
        setProgress:(state,action)=>{
            state.progress = action.payload;
        },
        setCanceled:(state,action)=>{
            state.canceled = action.payload;
        }
    }
});

export const {setNew,setCompleted,setProgress,setCanceled} = taskSlice.actions;
export default taskSlice.reducer;