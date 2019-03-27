import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({todoList}) => {
  const elements = todoList.map((elem) => {

    const {id, ...rest} = elem;
    return (
      <li key={id}>
        <TodoListItem {...rest}/>
      </li>
    );
  });

  return (
    <ul>
      {elements}
    </ul>
  );
};

export default TodoList;