import React from 'react';
import './TodoItem.css';
import pigLatinize from "./pigLatinize";

function TodoItem(props) {
    return (
        <li className={props.important && "important"}><input type={"checkbox"} /> {pigLatinize(props.name)}</li>
    );
}

export default TodoItem;
