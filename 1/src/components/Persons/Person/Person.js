import React, { Component } from 'react';
import styles from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);

    // console.log('[Person.js] constructor', props);
  }

  componentWillMount() {
    // console.log('[Person.js] comp will mount');
  }
  componentDidMount() {
    // console.log('[Person.js] comp did mount');
  }

  render() {
    //console.log('[Person.js] render');
    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}>
          im {this.props.name} and I am {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );

    // return [
    //   <p key="1" onClick={this.props.click}>
    //     im {this.props.name} and I am {this.props.age}
    //   </p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input
    //     key="3"
    //     type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />,
    // ];
  }
}

export default Person;
