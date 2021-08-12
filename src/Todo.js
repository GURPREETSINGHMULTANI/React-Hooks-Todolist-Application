import React, { useContext, memo } from 'react';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { ListItemSecondaryAction } from '@material-ui/core';
import useToggle from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './context/todos.context';

function Todo({ id, task, completed }) {
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggle] = useToggle(false);
    return (
        <ListItem style={{ height: '64px' }}>
            {isEditing ? <EditTodoForm toggleEditForm={toggle} task={task} id={id} /> :
                <>
                    <Checkbox onClick={() => dispatch({ type: "TOGGLE", id: id })} tabIndex={-1} checked={completed} />
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => dispatch({ type: "REMOVE", id: id })} aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={toggle} aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem >
    )
}

export default memo(Todo);