import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
        <li className="ListItem">
          <a href={this.props.link}>{this.props.title}</a>
        </li>
    );
  }
}
