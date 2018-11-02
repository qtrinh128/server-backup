import React, { Component } from 'react';
import BarChartComponent from './../../components/thongke/BarChart';
import { connect } from 'react-redux';
import { loadDefaultBarChart } from './../../actions/thongke';
import { chartObj } from './../../constants/Property';
import * as FuncTemp from './../../constants/FuncTemp';

class BarChart extends Component {
    componentWillMount() {
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
                <BarChartComponent
                    data={BarChart.Data}
                    options={BarChart.Options}
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



export default connect(mapStateToProps, mapDispatchToProps)(BarChart);