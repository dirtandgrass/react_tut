import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Joe', age: 31 },
      { id: 2, name: 'Beth', age: 36 },
      { id: 3, name: 'Fred', age: 27 },
    ],
    users: [{ username: 'user1' }, { username: 'user2' }],
    showPersons: false,
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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => {
                    this.deletePersonHandler(i);
                  }}
                  name={person.name}
                  age={person.age}
                  changed={e => {
                    this.nameChangedHandler(e, person.id);
                  }}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = styles.red;
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
      if (this.state.persons.length <= 1) {
        classes.push(styles.bold);
      }
    }

    return (
      <div className={styles.App}>
        <h1>Hello!</h1>
        <p className={classes.join(' ')}>React!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
