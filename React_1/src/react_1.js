import React, { Component } from 'react';
import Person from './person';
import Contact from './child';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts : [
        { firstName: "Sunmi", lastName: "Yim", phoneNumber: "919-609-0279" },
        { firstName: "David", lastName: "Snyder", phoneNumber: "919-609-0231" },
        { firstName: "Chang", lastName: "Park", phoneNumber: "919-609-0380" },
      ]
    }
  };

  render() {
    return (
      <div>
        <Person name="Kelly">
          {/* HARD CHALLENGE */}
          {this.state.contacts.map(contact => {
            return (
              <Contact 
              firstName = {contact.firstName} 
              lastName = {contact.lastName}
              phoneNumber = {contact.phoneNumber} />
            )
          })}
        </Person>
      </div>
    );
  }
}

export default Hello;