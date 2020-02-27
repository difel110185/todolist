import React, {useState} from 'react';
import './TodoList.css';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList() {
    const [title, setTitle] = useState("To Do");
    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                name: "Make vanilla pudding.",
                important: true,
                complete: false,
                deleted: false
            },
            {
                id: 2,
                name: "Put pudding in a mayo jar.",
                important: false,
                complete: true,
                deleted: false
            },
            {
                id: 3,
                name: "Eat it in a public place.",
                important: false,
                complete: false,
                deleted: false
            },
        ]
    );

    const addTodo = (name, important, complete) => {
        const newTodo = {
            name,
            important,
            complete,
            id: todos[todos.length-1].id+1
        }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id !== id)
                return todo;

            let completeTodo = todo;
            completeTodo.complete = !todo.complete;

            return completeTodo
        }))
    };

    const editTitle = () => {
        const newTitle = prompt("What is the new title?")
        setTitle(newTitle)
    }

    return (
        <div className={"todoList"}>
            <h1>{title}</h1>
            <button onClick={editTitle}>Edit title</button>
            <ul>
                {todos.map(todo => <TodoItem toggleComplete={toggleComplete} deleteTodo={deleteTodo} {...todo} />)}
            </ul>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default TodoList;
