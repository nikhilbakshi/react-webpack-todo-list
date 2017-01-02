import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import {Provider} from 'react-redux'

import {createStore} from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

// The Provider basically listens to any state change in the store, and on a change, calls the appropriate container components.
// In this case it would call the VisibleTodoList declared in the App, and the mapStateToProps would parse the state and inject the todoList prop in the TodoList.
// You can do this manually, but the Provider does this listening and some optimizations for you.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
