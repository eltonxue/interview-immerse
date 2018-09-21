import React from 'react';
import axios from 'axios';

import ContactsRow from './ContactsRow';

import ContactsListPresenter from './Presenter';

import './styles.css';

const API_ENDPOINT = '/api/dev/get/interview';

class ContactsListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios
      .get(API_ENDPOINT)
      .then(response => this.setState({ contacts: response.data.contacts }))
      .catch(err => console.log(err));
  }

  render() {
    const Contacts = this.state.contacts.map(contact => (
      <ContactsRow {...contact} />
    ));

    return (
      <div className="contacts-table">
        <div className="contacts-header-container">
          <h3 className="name-column">Name</h3>
          <h3 className="email-column">Email</h3>
        </div>
        <ContactsListPresenter contacts={Contacts} />
      </div>
    );
  }
}

export default ContactsListContainer;
