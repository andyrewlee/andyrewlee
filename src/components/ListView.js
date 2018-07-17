import React, { Component } from 'react';

export default class ListView extends Component {
  render() {
    return (
      <ul className="ListView">
        {this.props.children}
      </ul>
    );
  }
}
