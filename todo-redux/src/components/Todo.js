import React from 'react'
import { removeTodo } from '../actions'
import { connect } from 'react-redux'

const Todo = (props) => (
  <li onClick={() => props.removeTodo(props.todoId)}>
    {props.text}
  </li>
)

const mapDispatchToProps = dispatch => ({
  removeTodo: (todoId) => dispatch(removeTodo(todoId))
})

export default connect(
  null,
  mapDispatchToProps
)(Todo)
