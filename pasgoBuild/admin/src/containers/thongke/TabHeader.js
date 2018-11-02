import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDefaultBarChart } from './../../actions/thongke';
import { chartObj } from './../../constants/Property';
import * as FuncTemp from './../../constants/FuncTemp';
import TabBodyThongkeHeader from './../../components/thongke/TabBodyThongkeHeader';

class TabHeader extends Component {
   
    componentWillReceiveProps(nextProps) {
        
        let chartObject = chartObj;
        let { TabControl } = nextProps;
        chartObject.Data.labels = TabControl.rangeFromToDate
        let resultTracking = FuncTemp.getAllInfoChart(nextProps.AllTracking, TabControl.restaurantSlugDefault, TabControl.rangeFromToDate);
        let resultDataTracking = FuncTemp.getDataTracking(resultTracking);
        
        chartObject.Data.labels = TabControl.rangeFromToDate
        chartObject.Data.datasets[0].data = resultDataTracking.display;
        chartObject.Data.datasets[1].data = resultDataTracking.hover;
        chartObject.Data.datasets[2].data = resultDataTracking.click;
        chartObject.Options.title.text = resultTracking.restaurantSlug;
        chartObject.Header.countDisplay = resultDataTracking.countDisplay;
        chartObject.Header.countHover = resultDataTracking.countHover;
        chartObject.Header.countClick = resultDataTracking.countClick;
    }

    render() {
        let { BarChart } = this.props;        
        return (
            <div>
                <TabBodyThongkeHeader
                    BarChart={BarChart}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        BarChart: state.BarChart,
        TabControl: state.TabControl,
        AllTracking: state.AllTracking,

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadDefaultBarChart: (chartObject) => {
            dispatch(loadDefaultBarChart(chartObject));
        },

    }
};



export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);