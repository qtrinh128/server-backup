import React, { Component } from 'react';
import { connect } from 'react-redux';
import TabBodyThongkeControl from '../../components/thongke/TabBodyThongkeControl';
import { setDateChart, loadDefaultChartDate, loadDefaultBarChart, } from './../../actions/thongke';

class TabControl extends Component {


  onChangeSlug = (value)=>{    
    let chartDate = this.props.TabControl;
    chartDate.restaurantSlugDefault = value;    
    this.props.loadDefaultChartDate(chartDate)

  }

  render() {
    let { BarChart, setDateChart, loadCurrentBarChar, loadDefaultChartDate, TabControl, AllTracking } = this.props;

    return (
      <React.Fragment>
        <TabBodyThongkeControl
          TabControl={TabControl}
          BarChart={BarChart}
          loadDefaultChartDate={loadDefaultChartDate}
          setDateChart={setDateChart}
          loadCurrentBarChar={loadCurrentBarChar}
          onChangeSlug={this.onChangeSlug}
          AllTracking={AllTracking}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    TabControl: state.TabControl,
    BarChart: state.BarChart,
    AllTracking: state.AllTracking
  }
};


const mapDispatchToProps = (dispatch, props) => {
  return {
    setDateChart: (chartDate) => {
      dispatch(setDateChart(chartDate));
    },
    loadDefaultBarChart: (dataX, dataY, text) => {
      dispatch(loadDefaultBarChart(dataX, dataY, text));
    },
    loadDefaultChartDate: (chartDate) => {
      dispatch(loadDefaultChartDate(chartDate));
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabControl);
