import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo, sortTodos } from '../actions'

class AddTodo extends Component {
  
  input;

  onSubmit = event => {
    event.preventDefault()
      if (!this.input.value.trim()) {
        return
      }
      this.props.addTodo(this.input.value)
      this.input.value = ''
      this.input.focus()
  }

    render() {

      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <input ref={node => this.input = node} />
            <button type="submit">
              Add Todo
            </button>
            <button onClick={() => this.props.sortTodos()}>
              Sort
            </button>
          </form>
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  sortTodos: () => dispatch(sortTodos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
