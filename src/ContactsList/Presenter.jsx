import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ContactsListPresenter = ({ contacts }) => {
  return <div className="contacts-list-container">{contacts}</div>;
};

ContactsListPresenter.defaultProps = {
  contacts: []
};

ContactsListPresenter.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactsListPresenter;
