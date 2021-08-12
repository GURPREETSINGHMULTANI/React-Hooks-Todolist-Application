import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';

function EditTodoForm({ task, id, toggleEditForm }) {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form style={{ width: '50%', marginLeft: '1rem' }} onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "EDIT", id: id, newTask: value })
            toggleEditForm();
            reset();
        }}>
            <TextField autoFocus margin="normal" value={value} onChange={handleChange} fullWidth />
        </form>
    )
}

export default EditTodoForm;