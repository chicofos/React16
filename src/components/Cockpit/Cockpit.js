import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }


    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <div className={assignedClasses.join(' ')}> This is really Working</div>
            
            <div className='content'>
                <button
                    className={btnClass} 
                    onClick={props.clicked}>Toggle Persons
                </button>
            </div>
        </Aux>
    );
}

export default cockpit;