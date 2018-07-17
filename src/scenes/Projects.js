import React, { Component } from 'react';

import SubHeader from '../components/SubHeader';
import ListView from '../components/ListView';
import ListItem from '../components/ListItem';

export default class Projects extends Component {
  render() {
    return (
      <div class="Projects">
        <SubHeader title="projects" />
        <ListView>
          <ListItem
            link="https://www.bitbutter.com"
            title="bitbutter"
          />
          <ListItem
            link="https://www.youtube.com/watch?v=C6cqkNTq4Fg"
            title="stats royale integration"
          />
          <ListItem
            link="https://medium.com/@alexpark/goodbye-nooma-tv-67fa89ca863"
            title="nooma"
          />
          <ListItem
            link="https://www.codingdojo.com/what-is-ios-development"
            title="ios course"
          />
        </ListView>
      </div>
    );
  }
}
