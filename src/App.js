import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Start from './components/Start';

import './assets/css/main_styles.css';

class App extends Component {
  render() {
    return (
      <div class="ART">
        <div className="main-title" style={{ margin: '1em' }}>
          <Link to="/start/entry" className="entry-link">
            <h1>WELCOME TO THE ART ART (DOT) WORLD</h1>
          </Link>
          <Route path="/" component={Start} />
        </div>
      </div>
    );
  }
}

export default App;
