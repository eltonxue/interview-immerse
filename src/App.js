import React, { Component } from 'react';
import ContactsList from './ContactsList';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ContactsList />
      </div>
    );
  }
}

export default App;
