import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Entry from './Entry';

class Start extends Component {
  constructor() {
    super();

    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    this.setState({ name });
    this.props.history.push('/entry');
  }
  render() {
    return (
      <div className="container">
        <div className="info-bar">
          <h2>Start your journey... here.</h2>
          <p>The ART ART WORLD is where all the cool kids go, to do ART things.</p>
          <p>The ART ART WORLD is where you find yourself.</p>
          <p>The ART ART WORLD is a place you can get lost.</p>
          <p>Isn't it beautiful?</p>
        </div>
        <div className="main-title">
          <h1 className="entry-link">ART ART WORLD</h1>
          <div className="start-form">
            <form onSubmit={this.handleSubmit}>
              <label>WHO ARE YOU?</label>
              <br />
              <input type="text" name="name" required />
              <i />
              <button type="submit">ONWARDS</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
