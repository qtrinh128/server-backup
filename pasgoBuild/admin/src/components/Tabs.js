import React, { Component } from 'react';
import TabMenu from './TabMenu';
import TabBody from './TabBody';
class Taps extends Component {
  render() {
    return (
      <div className="tabs">
        <TabMenu />
        <TabBody />
      </div>
    );
  }
}

export default Taps;
