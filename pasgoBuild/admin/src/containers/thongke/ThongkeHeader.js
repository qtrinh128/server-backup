import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDefaultBarChart } from './../../actions/thongke';
import { actionFetchDataTrackingReq } from './../../actions/index';
import { chartObj } from './../../constants/Property';
import * as FuncTemp from './../../constants/FuncTemp';

class ThongkeHeader extends Component {
    componentWillMount() {
        this.props.fetchAllDataTracking();
        
        let { TabControl } = this.props;
        let chartObject = chartObj;
        let resultTracking = FuncTemp.getAllInfoChart(this.props.AllTracking, TabControl.restaurantSlugDefault, TabControl.rangeFromToDate);
        let resultDataTracking = FuncTemp.getDataTracking(resultTracking);
        
        chartObject.Data.labels = TabControl.rangeFromToDate
        chartObject.Data.datasets[0].data = resultDataTracking.display;
        chartObject.Data.datasets[1].data = resultDataTracking.hover;
        chartObject.Data.datasets[2].data = resultDataTracking.click;
        chartObject.Options.title.text = TabControl.restaurantSlugDefault;
        chartObject.Header.countDisplay = resultDataTracking.countDisplay;
        chartObject.Header.countHover = resultDataTracking.countHover;
        chartObject.Header.countClick = resultDataTracking.countClick;
        
        this.props.loadDefaultBarChart(chartObject);

    }


    render() {


        return (
            <div>
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
        fetchAllDataTracking: ()=>{
            dispatch(actionFetchDataTrackingReq());
        }

    }
};



export default connect(mapStateToProps, mapDispatchToProps)(ThongkeHeader);