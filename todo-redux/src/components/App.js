import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../components/TodoList'
import RemoveLastTodo from '../containers/RemoveLastTodo'

const App = () => (
  <div>
    <AddTodo />
    <RemoveLastTodo />
    <TodoList />
  </div>
)

export default App
