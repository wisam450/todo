import React, { Component } from 'react'
import InputTodo from './InputTodo'
import ListTodo from './ListTodo'
import './App.css'

class TodoList extends Component {
  state = {
    todoValue: '',
    todoList: []
  }
  cgangeToDoV(e){
    this.setState({
      todoValue: e.target.value
    })
  }
  addTolist(){
    let list = this.state.todoList;
    list.push(this.state.todoValue);

    this.setState({todoList: list, todoValue: ''})
    console.log(this.state.todoList);
  }

  


  render() {
    return (
      <div className='App'>
        <InputTodo todoV = {this.state.todoValue} 
        changed = {(e) => this.cgangeToDoV(e)} />

        
        <button onClick = {()=> this.addTolist()}>
          Add to The List
        </button>

        <ListTodo list = {this.state.todoList} />
        
      </div>
    )
  }
}

export default TodoList;


