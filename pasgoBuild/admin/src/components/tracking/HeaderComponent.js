import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        // let { dataFilter } = this.dataFilter;
        let dataFilter = this.props.dataFilter
        return (
            <React.Fragment>
                <div className="row container">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-display">
                        <div className="row ">
                            <div className="widget-text text-center container">DISPLAY <br></br> <span> {dataFilter.numberDisplay}</span></div>
                            {/* <div className="widget-text text-center container">DISPLAY <br></br> <span> 3233</span></div> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-hover">
                        <div className="row ">
                            <div className="widget-text text-center container">HOVER <br></br><span> {dataFilter.numberHover}</span></div>
                            {/* <div className="widget-text text-center container">HOVER <br></br><span> 45343</span></div> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 widget-click">
                        <div className="row ">
                            <div className="widget-text text-center container">CLICK <br></br><span> {dataFilter.numberClick}</span></div>
                            {/* <div className="widget-text text-center container">CLICK <br></br><span>46454</span></div> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderComponent;