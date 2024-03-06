import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slices/settings-slice.js";
export default configureStore({
   reducer:{
       settings: settingsReducer,
   }
});