import React, {PropTypes} from 'react'

// data is passed in to an object as props.
// A Presentational Component can be defined either as a function, or as a class.
// If we define a Presentational Component as a function, then the function can clearly identify what data it accepts, through it's arguments list.
// It is recommended that most React Presentational components that do not need to keep local state, or use lifecycle methods, should be defined using just functions. In JS functions are full objects and can be passed around.
// However, if you do need to use lifecycle methods, or keep local state, then you have to define a class, which extends from React.Component.
// How does this class accept data from outside?
// When we think of a class, how do we pass data to one of it's objects? By calling it's functions. Either by calling it's constructor or one of it's member methods.
// So how will our React class component be called?
// All React components are called in one of the following ways:
// 1. Without using JSX:
//    React.createElement('div', {propsObject}, childrenObjects)
// For Eg:
//    var MyLabel = React.createClass({
//      render: function() {
//        return React.createElement("label", {className: "label"},
//          React.createElement("span", {className: "label"}, this.props.label),
//          this.props.children
//        );
//      }
//    });
//
//    var App = React.createClass({
//      render: function() {
//        return React.createElement(MyLabel, {label: "Here is the label prop"},
//          React.createElement("div", {},
//            React.createElement("input", {type: "text", value: "And here is a child"})
//          )
//        );
//      }
//    });
//
// 2. Using JSX:
//    var MyLabel = React.createClass({
//      render: function() {
//        return
//          <label className='label'>
//            <span className='label'>this.props.label</span>
//            this.props.children
//          </label>
//      }
//    });
//
//    var App = React.createClass({
//      render: function() {
//        return
//          <MyLabel label='Here is the label prop'>
//            <div>
//              <input type='text' value='And here is a child' />
//            </div>
//          </MyLabel>
//      }
//    });
//
// When called by JSX element, the attributes of the element become the propsObject to nonJSX createElement, and the nested children for JSX become the childrenObjects.
//
// How is the propsObject and childrenObjects passed to your Presentational Component?
// For class based Presentational Components, the propsObject is passed in as this.props.
// I believe the children are passed in as this.props.children, but I have to check this.

class Todo extends React.Component {
  render() {
    return (
      <li onClick={this.props.onClick}
        style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
        {this.props.text}
      </li>
    )
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
