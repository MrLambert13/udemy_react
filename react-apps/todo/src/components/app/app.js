import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import './app.css';

const App = () => {
  const todoData = [
    {label: 'Drink coffee', important: false, id: 1},
    {label: 'Make Awesome App', important: true, id: 2},
    {label: 'Boil water', important: false, id: 3},
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={13}/>
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList todoList={todoData}/>
    </div>
  );
};

export default App;
