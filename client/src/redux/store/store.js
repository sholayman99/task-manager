import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slices/settings-slice.js";
import taskReducer from "../state-slices/task-slice.js"
export default configureStore({
   reducer:{
       settings: settingsReducer,
       task:taskReducer
   }
});