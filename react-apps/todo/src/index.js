import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import TodoList from './components/todo-list';
import './index.css';

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

ReactDOM.render(<App/>, document.getElementById('root'));
