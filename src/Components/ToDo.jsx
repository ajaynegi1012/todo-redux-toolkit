import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToDo } from '../Feactures/Todo/TodoSlice';

function ToDo() {

    let tasks = useSelector(state => state.tasks);
    let Dispatch = useDispatch();

    return (
        <>
            <h3 className="Heading">ToDos</h3>
            {
                tasks.map((data) => (
                    <>
                        <li className="list-container" key={data.id}>
                            <div>{data.val}</div>
                            <button className="remove-btn" onClick={() => Dispatch(removeToDo(data.id))}>X
                            </button>
                        </li>
                    </>
                ))
            }
        </>
    )
}

export default ToDo