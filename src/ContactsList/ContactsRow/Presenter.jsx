import React from 'react';

import './styles.css';

const ContactsRow = ({ url, firstName, lastName, email }) => (
  <div className="contacts-row-container">
    <img className="image" src={url} />
    <span className="name">
      `$
      {firstName} ${lastName}`
    </span>
    <span className="email">{email}</span>
  </div>
);

export default ContactsRow;
