import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {

    componentDidMount(){
        console.log("Component Person.js did mount");
        if(this.props.position === 0){
            this.inputElement.focus();
        }
        
    }

    render(){
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                type="text"
                ref = {(input) => {this.inputElement = input}}
                onChange={this.props.changed}  
                value={this.props.name}/>
            </div>
        )
    }
}

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func
};

export default Person;