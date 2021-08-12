import useLocalStorageState from './useLocalStorageState';
import { v4 } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: v4(), task: newTodoText, completed: false }]);
        },
        removeTodo: todoId => {
            setTodos([...todos.filter(todo => todo.id !== todoId)]);
        },
        toggleTodo: todoId => {
            const toggleTodo = todos.filter(todo => todoId === todo.id)[0];
            toggleTodo.completed = !toggleTodo.completed;
            setTodos([...todos.map(todo => (todoId === todo.id) ? toggleTodo : todo)])
        },
        editTodo: (todoId, newTask) => {
            const toggleTodo = todos.filter(todo => todoId === todo.id)[0];
            console.log(todos.filter(todo => todoId === todo.id));
            toggleTodo.task = newTask;
            setTodos([...todos.map(todo => (todoId === todo.id) ? toggleTodo : todo)])
        }
    }
}
