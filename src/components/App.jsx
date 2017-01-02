import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList.js'
import AddTodoContainer from '../containers/AddTodoContainer.js'

class App extends React.Component {
  render () {
    return (
      <div>
        <AddTodoContainer />
        <VisibleTodoList />
      </div>
    )
  }
}

export default App
