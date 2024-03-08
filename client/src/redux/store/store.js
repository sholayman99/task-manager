import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slices/settings-slice.js";
import taskReducer from "../state-slices/task-slice.js";
import summaryReducer from "../state-slices/summary-slice.js";
import profileReducer from "../state-slices/profile-slice.js";
export default configureStore({
   reducer:{
       settings: settingsReducer,
       task:taskReducer,
       summary:summaryReducer,
       profile:profileReducer
   }
});