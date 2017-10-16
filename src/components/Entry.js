import React, { Component } from 'react';

class Entry extends Component {
  render() {
    return (
      <div>
        <h2 className="welcome-heading">HELLO, {this.props.name}!</h2>
      </div>
    )
  }
}

export default Entry;
