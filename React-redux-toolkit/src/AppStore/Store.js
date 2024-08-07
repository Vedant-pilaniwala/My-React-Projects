import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Todo/TodoSlice/TodoSlice';

let store;

export default store = configureStore({
    reducer: todoReducer,
});