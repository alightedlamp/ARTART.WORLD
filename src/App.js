import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './assets/css/main_styles.css';

import Start from './components/Start';
import Entry from './components/Entry';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Route exact path="/" component={Start} />
        <Route exact path="/entry" component={Entry} />
      </div>
    );
  }
}

export default App;
