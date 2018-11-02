import React, { Component } from 'react';
// import TabBodyThongke from './thongke/TabBodyThongke';
import TrackingContainer from './../containers/tracking/TrackingContainer';
import TabTruyenThong from './../containers/truyenthong/TruyenThong';
import SettingContainer from './../containers/caidat/settingContainer';
import RestaurantIndex from '../containers/restaurant/restaurantContainer';
class TabBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content tab-content">
          {/* <TabBodyThongke /> */}
          <TrackingContainer />
          <TabTruyenThong />
          <RestaurantIndex />
          <SettingContainer />
        </div>
      </React.Fragment>
    );
  }
}

export default TabBody;
