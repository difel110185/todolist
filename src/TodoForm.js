import React, { useState } from 'react';

function TodoForm(props) {
    const [name, setName] = useState("");
    const [important, setImportant] = useState(false);
    const [complete, setComplete] = useState(false);

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleImportant = (e) => {
        setImportant(e.target.checked)
    }

    const handleComplete = (e) => {
        setComplete(e.target.checked)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(name, important, complete)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Name</p>
                <input type="text" onChange={handleName} value={name}/>
            </label>
            <label>
                <p>Important</p>
                <input type="checkbox" onChange={handleImportant} value={important}/>
            </label>
            <label>
                <p>Complete</p>
                <input type="checkbox" onChange={handleComplete} value={complete}/>
            </label>

            <div>
                <input type="submit" value="Add todo" />
            </div>
        </form>
    )
}
export default TodoForm;
