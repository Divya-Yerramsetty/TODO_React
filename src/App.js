import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      task_item: '',
      tasks: [],
    }
  }

    inputChange(input){
      this.setState ({task_item: input});
    }

    todoTasks(input) {
      let taskArray = this.state.tasks;

      taskArray.push(input);

      this.setState({
        tasks: taskArray,
        task_item: ''
      })
    }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Do Tasks</h1>
        </header>
        <br /> 
          
            Task Item: 
            <input 
            onChange = {(e) => this.inputChange(e.target.value)} 
            value = {this.state.task_item} 
            />
            <br /><br />
            <button
            onClick = { () => this.todoTasks(this.state.task_item)}>
            Submit 
            </button>

            <ul>
              {this.state.tasks.map ((entry) => <li>{entry}</li>)}
            </ul>
          
      </div>
    );
  }
}

export default App;
