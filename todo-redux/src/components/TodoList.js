import React ,{ Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import {todoList} from '../actions'

class TodoList extends Component {

  componentDidMount() {

    this.props.getTodos()
  }

  render () {
    return (

      <ul>
        { this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            todoId = {  todo.id }
            text={todo.text}
          />
        )}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch( todoList() )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
