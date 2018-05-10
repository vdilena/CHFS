import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <Todo
        key={todo.id}
        todoId = {  todo.id }
        text={todo.text}
      />
    )}
  </ul>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(
  mapStateToProps,
)(TodoList)
