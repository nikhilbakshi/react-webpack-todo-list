
export const addTodo = (text, completed) => {
  return {
    type: 'ADD_TODO',
    payload: {
      text: text,
      completed: completed
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id: id
    }
  }
}

export const changeFilter = (filter) => {
  return {
    type: 'CHANGE_FILTER',
    payload: {
      data: filter
    }
  }
}
