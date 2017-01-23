import React from 'react'

class FilterChanger extends React.Component {

  handleShowDone = (event) => {
    event.preventDefault()
    this.props.showOnlyCompleted()
  }

  handleShowIncomplete = (event) => {
    event.preventDefault()
    this.props.showOnlyIncomplete()
  }

  handleShowAll = (event) => {
    event.preventDefault()
    this.props.showAll()
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShowDone}>Show Done</button>
        <button onClick={this.handleShowIncomplete}>Show Incomplete</button>
        <button onClick={this.handleShowAll}>Show All</button>
      </div>
    )
  }
}

FilterChanger.propTypes = {
  showOnlyCompleted: React.PropTypes.func.isRequired,
  showOnlyIncomplete: React.PropTypes.func.isRequired,
  showAll: React.PropTypes.func.isRequired
}

export default FilterChanger
