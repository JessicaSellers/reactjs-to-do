import React, { Component } from 'react'
import './App.css';

class TodoList extends Component {
   componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
    
    render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input 
                placeholder="To Do Item.." 
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
            />
            <button type="submit"> Add To Do Item </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList