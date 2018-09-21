import React from 'react';

import ContactsHeader from './ContactsHeader';
import ContactsRow from './ContactsRow';

import ContactsListPresenter from './Presenter';

import axios from 'axios';

const API_ENDPOINT =
  'https://tx5f2mou8e.execute-api.us-west-2.amazonaws.com/dev/get/interview';

class ContactsListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/dev/get/interview')
      .then(response => this.setState({ contacts: response.data.contacts }))
      .catch(err => console.log(err));
  }

  render() {
    const Contacts = this.state.contacts.map(contact => (
      <ContactsRow {...contact} />
    ));

    return (
      <div className="contacts-list-container">
        <ContactsHeader />
        <ContactsListPresenter contacts={Contacts} />
      </div>
    );
  }
}

export default ContactsListContainer;
