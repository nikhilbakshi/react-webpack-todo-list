
var addTodo = (text, completed) => {
  return {
    type: 'ADD_TODO',
    payload: {
      text: text,
      completed: completed
    }
  }
}

export default addTodo
