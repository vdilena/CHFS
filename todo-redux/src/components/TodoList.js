import React ,{ Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import {todoList, todoFromList, getTodosStartingA} from '../actions'

class TodoList extends Component {

  componentDidMount() {

    //this.props.getTodos()
    //this.props.todoFromList(2)
    this.props.todosStarting("A")
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
  todoFromList: (todoId) => dispatch( todoFromList(todoId) ),
  todosStarting: (startingChar) => dispatch(getTodosStartingA(startingChar)  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
