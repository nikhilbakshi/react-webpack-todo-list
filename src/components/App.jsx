import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList.js'
import AddTodoContainer from '../containers/AddTodoContainer.js'
import FilterChangerContainer from '../containers/FilterChangerContainer.js'
import TableTest from './TableTest.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        {
          /*
            <AddTodoContainer />
            <VisibleTodoList />
            <FilterChangerContainer />
            */
        }
        <TableTest />
      </div>
    )
  }
}

export default App
