import React, { Component } from 'react';
import BarChart from './../../containers/thongke/BarChart';

class TabBodyThongkeView extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row  justify-content-center">
          <BarChart />
        </div>


      </React.Fragment>
    );
  }
}

export default TabBodyThongkeView;
