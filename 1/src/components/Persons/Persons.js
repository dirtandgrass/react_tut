import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);

    // console.log('[Persons.js] constructor', props);
  }

  componentWillMount() {
    // console.log('[Persons.js] comp will mount');
  }
  componentDidMount() {
    // console.log('[Persons.js] comp did mount');
  }

  componentWillReceiveProps(props) {}

  render() {
    // console.log('[Persons.js] render');
    return this.props.persons.map((person, i) => {
      return (
        <Person
          click={() => {
            this.props.clicked(i);
          }}
          key={person.id}
          name={person.name}
          age={person.age}
          changed={e => {
            this.props.changed(e, person.id);
          }}
        />
      );
    });
  }
}

export default Persons;
