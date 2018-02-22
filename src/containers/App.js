import React, { Component } from 'react';
import classes from './App.css';
import Persons  from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props)
    this.state = {
      persons : [
        { id: '23asd', name: 'Max', age : 28 },
        { id: '3323', name: 'Louis', age : 48 },
        { id: '123sd', name: 'Alex', age : 12 }
      ],
      showPersons : false
    }
  }

  componentWillMount(){
    console.log('[App.js] inside componentWillMount')
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount')
  }

  componentWillReceiveProps(nextProps){
    console.log('Update Persons.js inside ComponentWillreceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Update Persons.js inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('Update Persons.js inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('Update Persons.js inside componentDidUpdate');
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
    console.log('[App.js] inside render')
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} />
    }

    return (
      <Aux>
        <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons} 
            clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
