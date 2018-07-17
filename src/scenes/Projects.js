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
            title="Bitbutter"
          />
          <ListItem
            link="https://www.nooma.tv"
            title="Nooma"
          />
          <ListItem
            link="https://www.youtube.com/watch?v=C6cqkNTq4Fg"
            title="Stats Royale integration"
          />
          <ListItem
            link="https://www.codingdojo.com/what-is-ios-development"
            title="iOS course"
          />
        </ListView>
      </div>
    );
  }
}
