import React, { Component } from 'react';

import MainHeader from '../components/MainHeader';
import ListView from '../components/ListView';
import ListItem from '../components/ListItem';

export default class Links extends Component {
  render() {
    return (
      <div className="Links">
        <MainHeader title="andyrewlee" />
        <ListView>
          <ListItem
            link="https://www.github.com/andyrewlee"
            title="github"
          />
          <ListItem
            link="https://www.linkedin.com/in/andyrewlee"
            title="linkedin"
          />
        </ListView>
      </div>
    );
  }
}
