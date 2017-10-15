import React, { Component } from 'react';

class Start extends Component {
  render() {
    return (
      <div className="start-form">
        <form>
          <label>WHO ARE YOU?</label>
          <br />
          <input type="text" />
          <button type="submit">OKAY</button>
        </form>
      </div>
    );
  }
}

export default Start;
