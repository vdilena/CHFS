import React, {Component} from 'react'
import { connect } from 'react-redux'
import { removeTodoStartingA } from '../actions'

class RemoveTodoStartingA extends Component {

    render() {
      return (
        <div>
          <button onClick={() => this.props.removeTodoStartingA()}>
            Remove Todo Starting A
          </button>
        </div>
      )
  }

  
}

const mapDispatchToProps = (dispatch) => ({
  removeTodoStartingA: () => dispatch(removeTodoStartingA())
})

export default connect(
  null,
  mapDispatchToProps
)(RemoveTodoStartingA)
