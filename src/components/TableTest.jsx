import React from 'react'
import ReactDataGrid from 'react-data-grid'

class TableTest extends React.Component {
  constructor() {
    super()

    this.state = {
      rowCount: 100,
      rows: this.getInitialRows(100),
      selectedIndexes: []
    }
  }

  getColumns = () => {
    return [
      {
        key: 'id',
        name: 'ID',
        width: 40
      },
      {
        key: 'task',
        name: 'Title'
      },
      {
        key: 'priority',
        name: 'Priority'
      }
    ]
  }

  getInitialRows = (numOfRows) => {
    return [...Array(numOfRows).keys()].map(x => {
      return {
        id: x,
        task: 'Task ' + x,
        priority: x+1
      }
    })
  }

  rowGetter = (rowIndex) => {
    return this.state.rows[rowIndex]
  }

  handleTextChange = (event) => {
    event.preventDefault()
    this.setState({rowCount: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Row Count Requested = ' + this.state.rowCount)
    this.setState({rows: this.getInitialRows(Number(this.state.rowCount))})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Number of Rows in Table: </label>
          <input type='text' id='rowCount'  onChange={this.handleTextChange} value={this.state.rowCount} />
          <input type='submit' value='submit' />
        </form>
        <ReactDataGrid
          rowKey='id'
          columns={this.getColumns()}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
        />
      </div>
    )
  }
}

export default TableTest
