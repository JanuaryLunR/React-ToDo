import React from 'react'
import TodoList from './Todo/TodoList';

function App() {
  const todos = [
    {id: 1, completed: false, title: 'Изучить JS'},
    {id: 2, completed: false, title: 'Изучить NodeJS'},
    {id: 3, completed: false, title: 'Изучить React'},
    {id: 4, completed: false, title: 'Получить работу мечты'},
  ]

  return (
    <div className='wrapper'>
      <h1>Hi</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
/*navanyanskiy*/
