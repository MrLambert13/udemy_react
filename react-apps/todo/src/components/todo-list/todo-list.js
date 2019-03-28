import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = ({todoList}) => {
  const elements = todoList.map((elem) => {

    const {id, ...rest} = elem;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...rest}/>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;