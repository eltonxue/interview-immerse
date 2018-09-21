import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ContactsRow = ({ url, firstName, lastName, email }) => (
  <div className="contacts-row-container">
    <img className="image" src={url} alt="60x60" />
    <span className="name">{`${firstName} ${lastName}`}</span>
    <span className="email">{email}</span>
  </div>
);

ContactsRow.propTypes = {
  url: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default ContactsRow;
