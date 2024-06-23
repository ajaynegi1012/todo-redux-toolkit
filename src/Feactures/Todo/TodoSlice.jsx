import { createSlice, nanoid } from "@reduxjs/toolkit";
//Nanoid is used to create a unquie id.

let initialState = {
    tasks: [{
        id: 1,
        val: "Hello world"
    }]
}

//If we want to create a separte funtion we can do it like this and have to pass to addToDo.
// let printSometing = (state, action) => {
//     console.log("This is a reducer and its printing something here");
// }

export let TodoSlice = createSlice({
    name: "toDo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            let addToDo = {
                id: nanoid(),
                val: action.payload
            }
            state.tasks.push(addToDo);
        },
        removeToDo: (currentState, action) => {
            currentState.tasks = currentState.tasks.filter((val) => (
                val.id !== action.payload
            ))
        }
    }
})

export let { addToDo, removeToDo } = TodoSlice.actions;   //Here we are exporting all the individual. Cause they can come in the picture during working in components. 
export default TodoSlice.reducer;