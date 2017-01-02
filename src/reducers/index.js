/*
this is where you define the shape of your global state object.
for this app:
var todoApp = {
  todoList: [
    {
      text: 'item 1',
      completed: false
    },
    {
      text: 'item 2',
      completed: true
    }
  ]
}
*/
import {combineReducers} from 'redux'
import todoList from './todoList.js'

/*
todoApp is your top level reducer.
A reducer is a pure function that takes the previous state of the app, and an action as args, and returns the new state of the app.
The following statement effectively amounts to:
var todoApp = function (previousState = {}, action) {
  return {
    todoList: todoList(previousState.todoList, action)
  }
}

This todoApp reducer will be passed into createStore(todoApp) to create the actual store in top level index.js.

But the actual structure of the store can be deduced from here in the code.

The previousState={} part is a ES6 thing. Usually, if no ={} is passed, then when the function is called first time, previousState is undefined.
In the todoList reducer, you can then check for if previousState == undefined, then return initialState, which is the same as what is happening here.
This is just a compact form.
*/
const todoApp = combineReducers({
  todoList
})

export default todoApp
