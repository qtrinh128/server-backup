import React, { Component } from 'react';
import Title from './components/Title';
import Tabs from './components/Tabs';

class App extends Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="container pt-5 title-menu">
            <Title />
            <Tabs />
        </div>
        <hr />
      </div>

    );
  }
}

export default App;
