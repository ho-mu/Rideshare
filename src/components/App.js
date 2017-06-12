import React, { Component } from 'react';

import Calendar from './Calendar';

import './../styles/styles.css';
import './../styles/react-big-calendar.css';

class App extends Component {
  render() {
    return (
        <div id='app'>
            <h1>NM Rideshare</h1>
            <Calendar />
        </div>
    );
  }
}

export default App;
