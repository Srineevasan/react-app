import {configureStore,applyMiddleware} from "@reduxjs/toolkit";
//import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";

//const  middlewares = [reduxThunk];

//const store = configureStore({reducer:rootReducer,},applyMiddleware(...middlewares));
const store = configureStore({reducer:rootReducer})
export type RootState = ReturnType<typeof store.getState>
export default store;