import React, { Component } from 'react';

export default class SubHeader extends Component {
  render() {
    return (
      <h2 className="SubHeader">{this.props.title}</h2>
    );
  }
}
