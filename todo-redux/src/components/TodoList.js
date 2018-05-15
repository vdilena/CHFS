import React ,{ Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import {todoList, todoFromList} from '../actions'

class TodoList extends Component {

  componentDidMount() {

    //this.props.getTodos()
    this.props.todoFromList(2)
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
  getTodos: () => dispatch( todoList() ),
  todoFromList: (todoId) => dispatch( todoFromList(todoId) )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
