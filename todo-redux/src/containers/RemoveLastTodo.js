import React, {Component} from 'react'
import { connect } from 'react-redux'
import { removeLastTodo } from '../actions'

class RemoveLastTodo extends Component {

    render() {
      return (
        <div>
          <button onClick={() => this.props.removeLastTodo()}>
            Remove Last Todo
          </button>
        </div>
      )
  }

  
}

const mapDispatchToProps = (dispatch) => ({
  removeLastTodo: () => dispatch(removeLastTodo())
})

export default connect(
  null,
  mapDispatchToProps
)(RemoveLastTodo)
