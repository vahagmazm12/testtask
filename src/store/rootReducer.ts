import { combineReducers } from "@reduxjs/toolkit";
import listReducer from "../feature/list/listSlice";

const rootReducer = combineReducers({
  list: listReducer,
});

export default rootReducer;
