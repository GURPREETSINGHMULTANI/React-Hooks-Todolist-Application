import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from './context/todos.context';

function TodoList() {
    const todos = useContext(TodosContext);
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo {...todo} />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    }
    return null;
}

export default TodoList;