import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className={props.important && "important"}><input type={"checkbox"} /> {props.name}</li>
    );
}

export default TodoItem;
