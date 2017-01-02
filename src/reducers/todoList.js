// here we are reading data from a static array.
// we can also read in a json file here if required.
// but this is the place where initiate state of this todoList is defined.
var initialState = [
  {
    id: 1,
    text: 'first item',
    completed: false
  },
  {
    id: 2,
    text: 'second item',
    completed: true
  }
]

var todoList = (state = initialState, action) => {
  // we do not support any actions at the moment.
  // just plain display of initialState.
  return state
}

export default todoList
