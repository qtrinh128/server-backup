import React, { Component } from 'react';
import TabControl from './../../containers/thongke/TabControl';
import TabView from './../../containers/thongke/TabView';
import TabHeader from '../../containers/thongke/TabHeader';
import ThongkeHeader from '../../containers/thongke/ThongkeHeader';

class TabBodyThongke extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <h2>Thống kê</h2>
          <ThongkeHeader />
          <TabHeader />
          <hr />
          <TabControl />
          <hr />
          <TabView />
        </section>
      </React.Fragment>
    );
  }
}

export default TabBodyThongke;
