import React from 'react';
import './TodoList.css';
import TodoItem from "./TodoItem";

function TodoList() {
    return (
        <div className={"todoList"}>
            <h1>To Do</h1>
            <ul>
                <TodoItem name={"Make vanilla pudding."} />
                <TodoItem name={"Put pudding in a mayo jar."} />
                <TodoItem important={true} name={"Eat it in a public place."} />
            </ul>
        </div>
    );
}

export default TodoList;
