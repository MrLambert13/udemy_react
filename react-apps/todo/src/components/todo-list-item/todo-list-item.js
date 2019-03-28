import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({label, important = false}) => {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  return (
    <span className="todo-list-item">
      <span style={style}
            className="todo-list-item-label">
        {label}
      </span>

      <button
        className="btn btn-outline-success btn-sm float-right"
        type="button">
        <i className="fa fa-exclamation"></i>
      </button>
      <button
        className="btn btn-outline-danger btn-sm float-right"
        type="button">
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
};

export default TodoListItem;