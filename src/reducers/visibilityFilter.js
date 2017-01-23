
var visibilityFilter = (state = 'all', action) => {
  switch(action.type) {
    case 'CHANGE_FILTER':
      console.log('Handling action CHANGE_FILTER')
      return action.payload.data
      break

    default:
      return state
  }
}

export default visibilityFilter
