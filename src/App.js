import React, { Component } from 'react';
import './App.css';
import Person  from './Person/Person.js'

class App extends Component {

  state = {
    persons : [
      { name: 'Max', age : 28 },
      { name: 'Louis', age : 48 },
      { name: 'Alex', age : 12 }
    ]
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Francisco'; Don't do this
    this.setState({
      persons: [
        { name: newName, age : 28 },
        { name: 'Louis', age : 48 },
        { name: 'Alex', age : 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age : 28 },
        { name: 'Manu', age : 48 },
        { name: 'Alex', age : 27 }
      ]
    })
  }
  

  render() {

    const style = {
      backgroundColor: 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
 
    return (
      <div className="App">
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Francisco')} 
          changed={this.nameChangedHandler}></Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} ></Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} ></Person>
      </div>
    );
  }
}

export default App;
