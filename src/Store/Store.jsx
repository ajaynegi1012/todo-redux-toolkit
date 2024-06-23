import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from '../Feactures/Todo/TodoSlice'

export let store = configureStore({
    reducer: toDoReducer
});