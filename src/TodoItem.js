import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li key={props.id} className={props.important && "important"}>
            {props.complete ? <input type={"checkbox"} checked={true} onChange={() => props.toggleComplete(props.id)} /> : <input type={"checkbox"} onChange={() => props.toggleComplete(props.id)} />}
            {props.name}
            {props.complete && <button className={"button"} onClick={() => props.deleteTodo(props.id)}>X</button>}
        </li>
    );
}

export default TodoItem;
