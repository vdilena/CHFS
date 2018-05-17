import React ,{ Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import {todoList, todoFromList, getTodosStartingA} from '../actions'

class TodoList extends Component {

  componentDidMount() {

    this.props.getTodos()
    //this.props.todoFromList(2)
    //this.props.todosStarting("A")
    //console.log(this.props.sumSubTodos())
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
      <li>{ this.props.sumSubTareas}</li>
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  sumSubTareas: state.todos.reduce( 
                      (acumulador, todo) => todo.cant_subtareas + acumulador 
                , 0)
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
