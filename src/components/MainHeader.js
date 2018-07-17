import React, { Component } from 'react';

export default class MainHeader extends Component {
  render() {
    const title = this.props.title;
    const substringIndex = title.length - 1;
    const mainStr = title.substring(0, substringIndex);
    const accentStr = title.substring(substringIndex);

    return (
      <h1 className="MainHeader">
        {mainStr}<span class="Accent">{accentStr}</span>
      </h1>
    );
  }
}
