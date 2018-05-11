import React from 'react'
import AddTodo from '../containers/AddTodo'
import EditLastTodo from '../containers/EditLastTodo'
import TodoList from '../components/TodoList'
import RemoveLastTodo from '../containers/RemoveLastTodo'
import RemoveTodoStartingA from '../containers/RemoveTodoStartingA'

const App = () => (
  <div>
    <AddTodo />
    <EditLastTodo />
    <RemoveLastTodo />
    <RemoveTodoStartingA />
    <TodoList />
  </div>
)

export default App
