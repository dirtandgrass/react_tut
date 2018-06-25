import React from 'react';
import Person from './Person/Person';

const Persons = props =>
  props.persons.map((person, i) => {
    return (
      <Person
        click={() => {
          props.clicked(i);
        }}
        key={person.id}
        name={person.name}
        age={person.age}
        changed={e => {
          props.changed(e, person.id);
        }}
      />
    );
  });

export default Persons;
