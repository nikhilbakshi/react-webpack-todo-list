import {connect} from 'react-redux'
import {addTodo} from '../actions/actions.js'
import AddTodo from '../components/AddTodo.jsx'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text, false))
    }
  }
}

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddTodoContainer
