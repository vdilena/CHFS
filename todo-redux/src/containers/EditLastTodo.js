import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editLastTodo } from '../actions'

class EditLastTodo extends Component {
  
  input;

  onSubmit = event => {
    event.preventDefault()
      if (!this.input.value.trim()) {
        return
      }
      this.props.editLastTodo(this.input.value)
      this.input.value = ''
      this.input.focus()
  }

    render() {

      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <input ref={node => this.input = node} />
            <button type="submit">
              Edit last Todo
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
  editLastTodo: (text) => dispatch(editLastTodo(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLastTodo)
