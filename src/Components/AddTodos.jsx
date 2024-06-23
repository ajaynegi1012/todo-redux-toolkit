import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Feactures/Todo/TodoSlice';

function AddTodos() {

    let [input, setInput] = useState('');
    let dispatch = useDispatch();

    let formSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(input));
        setInput('');
    }

    return (
        <>
            <form onSubmit={formSubmit}>
                <div className="input-container">
                    <input type="Name" placeholder="Enter your Task..." className="input" value={input} name="name" onChange={(e) => setInput(e.target.value)} />
                    <button type="submit" className="add-btn">Add Contact</button>
                </div>
            </form>
        </>
    )
}

export default AddTodos