import {  applyMiddleware, combineReducers,createStore } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducer from "./reducers/Reducer";
const middleware = [thunk];
const rootReducer = combineReducers({
    users: Reducer
})

const store =  createStore(
 rootReducer,
  applyMiddleware(...middleware)
);
export default store;