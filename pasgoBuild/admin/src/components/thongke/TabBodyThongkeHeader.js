import React, { Component } from 'react';

class TabBodyThongkeHeader extends Component {
  render() {
    let {BarChart} = this.props;
    
    let countDisplay = BarChart.Header.countDisplay;    
    let countHover = BarChart.Header.countHover;
    let countClick = BarChart.Header.countClick;
    
    return (
      <React.Fragment>
        <div className="row container">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-display">
            <div className="row ">
            <div className="widget-text text-center container">DISPLAY <br></br> <span> {countDisplay}</span></div>
            {/* <div className="widget-text text-center container">DISPLAY <br></br> <span> 3233</span></div> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-hover">
            <div className="row ">
            <div className="widget-text text-center container">HOVER <br></br><span> {countHover}</span></div>
            {/* <div className="widget-text text-center container">HOVER <br></br><span> 45343</span></div> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-click">
            <div className="row ">
            <div className="widget-text text-center container">CLICK <br></br><span> {countClick}</span></div>
            {/* <div className="widget-text text-center container">CLICK <br></br><span>46454</span></div> */}
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default TabBodyThongkeHeader;
