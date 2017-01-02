import {connect} from 'react-redux'
import TodoList from '../components/TodoList.jsx'

// your mapStateToProps should take in the state, and return an object of properties that TodoList Presentation requires.
// the TodoList Presentational Component requires a property called todoList.
const mapStateToProps = (state) => {
  console.log (state)
  return {
    todoList: state.todoList
  }
}

// this is where you connect the Store to the Presentational Components.
// Here we connect Store to TodoList via the VisibleTodoList container.
// mapStateToProps selects which parts of the Store should be passed to the TodoList as props.
// mapDispatchToProps manages actions.
const VisibleTodoList = connect(
  mapStateToProps
)(TodoList)

export default VisibleTodoList
