import React, { Component } from 'react';

import Dashboard from './Dashboard';

import './../styles/styles.css';

class App extends Component {
  render() {
    return (
        <div id='app'>
            <Dashboard />
        </div>
    );
  }
}

export default App;
