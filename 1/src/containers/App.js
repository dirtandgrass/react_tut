import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Joe', age: 31 },
      { id: 2, name: 'Beth', age: 36 },
      { id: 3, name: 'Fred', age: 27 },
    ],
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

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPerson={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
