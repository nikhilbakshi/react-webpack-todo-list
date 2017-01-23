import React, {PropTypes} from 'react'
import Todo from './Todo.jsx'

// TodoList is the top level Presentational Component, that manages all the lower level components.
// If I want to read the TodoList from a static array, or a file, I should define the array here, or write the file reading logic in this class.

// However, I want to remove any business logic from this class.
// I just want this to be a Presentational Component, which displays what is given to it.
// So, I assume that all the business data is passed/injected into this class through props.
// I just take the passed in data through props, and create child Presentational Components as required, to create the UI.

// Remember inside any JSX tag, to use a JS variable, or to write JS code inside a JSX tag, always surround the code or variable call with {}, like arount todoListItems or around {todo.text} below.
class TodoList extends React.Component {
  render () {
    console.log(this.props.todoList)
    
    var todoListItems = this.props.todoList.map(todo => {
      return <Todo key={todo.id} text={todo.text} completed={todo.completed} onClick={() => this.props.onTodoClick(todo.id)} />
    })

    return(
      <ul>
        {todoListItems}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
