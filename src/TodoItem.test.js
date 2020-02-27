import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from './TodoItem';

test('display the name of the Todo', () => {

    let { getByText } = render(<TodoItem name={"name to be found"}/>);

    expect(getByText('name to be found')).toBeInTheDocument();
});

test('display important todos as important', () => {
    let { container } = render(<TodoItem important={true} name={"test"}/>);

    expect(container.firstChild.classList.contains('important')).toBe(true);
});

test('display non-important todos as non-important', () => {
    let { container } = render(<TodoItem name={"test"}/>);

    expect(container.firstChild.classList.contains('important')).toBe(false);
});

// <li className={props.important && "important"}><input type={"checkbox"} /> {props.name}</li>
