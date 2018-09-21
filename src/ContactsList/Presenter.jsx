import React from 'react';

import './styles.css';

const ContactsListPresenter = ({ contacts }) => {
  return <div className="contacts-list-container">{contacts}</div>;
};

export default ContactsListPresenter;
