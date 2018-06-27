import React from 'react';
import styles from './Cockpit.css';

const Cockpit = props => {
  const classes = [];
  let btnClass = styles.Button;

  if (props.showPersons) {
    btnClass = [styles.Button, styles.red].join(' ');
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
    if (props.persons.length <= 1) {
      classes.push(styles.bold);
    }
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>React!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
