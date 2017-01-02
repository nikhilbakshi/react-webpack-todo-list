import React, {PropTypes} from 'react'

class AddTodo extends React.Component {
  constructor () {
    super()

    this.state = {
      text: ''
    }
  }

  handleTextChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.text)
    this.setState({text: ''})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleTextChange} value={this.state.text} />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddTodo
