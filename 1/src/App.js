import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Joe', age: 31 },
      { id: 2, name: 'Beth', age: 36 },
      { id: 3, name: 'Fred', age: 27 }
    ],
    users: [{ username: 'user1' }, { username: 'user2' }],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = i => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (e, id) => {
    const pid = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[pid] };
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[pid] = person;

    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <Person
                key={person.id}
                click={() => {
                  this.deletePersonHandler(i);
                }}
                name={person.name}
                age={person.age}
                changed={e => {
                  this.nameChangedHandler(e, person.id);
                }}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
      if (this.state.persons.length <= 1) {
        classes.push('bold');
      }
    }

    return (
      <div className="App">
        <h1>Hello!</h1>
        <p className={classes.join(' ')}>React!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
