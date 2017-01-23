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

var todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed
      }

      break;

    case 'TOGGLE_TODO':
      if (state.id !== action.payload.id) {
        return state
      }

      console.log('Toggle todo with ID: ' + state.id)

      return Object.assign({}, state, {
        completed: !state.completed
      })
      break;

    default:
      return state
  }
}

var todoList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      action.payload.id = state.length + 1
      return [
        ...state,
        todo(undefined, action)
      ]

      break;
  
    case 'TOGGLE_TODO':
      return state.map(t => {
        return todo(t, action)
      })
      break;

    default:
      return state
  }
}

export default todoList
