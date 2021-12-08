import React from 'react'
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: true, title: 'Изучить JS'},
    {id: 2, completed: true, title: 'Изучить NodeJS'},
    {id: 3, completed: false, title: 'Изучить React'},
    {id: 4, completed: false, title: 'Получить работу мечты'},
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter( todo => todo.id !== id))
  }

  function addTodo(title) { 
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value = {{removeTodo: removeTodo}}>
      <div className='wrapper'>
        <h1>Hi</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>i don't wanna do nothing</p>}
      </div>
    </Context.Provider>
  );  
}

export default App;
/*navanyanskiy*/
