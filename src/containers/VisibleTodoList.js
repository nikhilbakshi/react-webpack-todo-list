import {connect} from 'react-redux'
import TodoList from '../components/TodoList.jsx'
import {toggleTodo} from '../actions/actions.js'

// your mapStateToProps should take in the state, and return an object of properties that TodoList Presentation requires.
// the TodoList Presentational Component requires a property called todoList.
const mapStateToProps = (state, ownProps) => {
  //The visibility filter can come,
  //either from the store-state, or from the URL.
  //If you expect the filter to be in the store, then read it from state.
  //If you expect the filter to be in the url, then expect it to be in ownProps.
  //ownProps is the object of all the props passed to this container from it's parent.
  console.log(state.visibilityFilter)
  if (state.visibilityFilter === 'all') {
    return {
      todoList: state.todoList
    }
  } else if (state.visibilityFilter === 'done') {
    return {
      todoList: state.todoList.filter((todo) => {return todo.completed})
    }
  } else {
    return {
      todoList: state.todoList.filter((todo) => {return !(todo.completed)})
    }
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

// this is where you connect the Store to the Presentational Components.
// Here we connect Store to TodoList via the VisibleTodoList container.
// mapStateToProps selects which parts of the Store should be passed to the TodoList as props.
// mapDispatchToProps manages actions.
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
