import React, { Component } from 'react';

export default class MainHeader extends Component {
  render() {
    return (
      <h1 className="MainHeader">{this.props.title}</h1>
    );
  }
}
