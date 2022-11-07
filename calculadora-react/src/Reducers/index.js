import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./inputs";
import {reducer as formReducer} from 'redux-form'


const store = configureStore({
    reducer: combineReducers({
        user: userReducer, 
        form: formReducer
    })
})
export default store