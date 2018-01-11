import React, { Component } from 'react';
import './App.css';
import Person  from './Person/Person.js'

class App extends Component {

  state = {
    persons : [
      { id: '23asd', name: 'Max', age : 28 },
      { id: '3323', name: 'Louis', age : 48 },
      { id: '123sd', name: 'Alex', age : 12 }
    ],
    showPersons : false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => { 
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons : persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  

  render() {

    const style = {
      backgroundColor: 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
 
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key = {person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                changed = {(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div> 
      );
    }

    return (
      <div className="App">
        <button 
        style={style}
        onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
