import React, { Component } from 'react';
import {connect} from 'react-redux';
import TabBodyThongkeView from './../../components/thongke/TabBodyThongkeView';


class TabView extends Component {


  componentWillMount(){
        
  }

    render() {      
      let { BarChart } = this.props;
      return (
        <React.Fragment>
          <TabBodyThongkeView
            BarChart={BarChart}
          />
        </React.Fragment>
      );
    }
  }


  
  const mapStateToProps = state => {   
    return {
        BarChart: state.BarChart,
        
    }
  };
  
  const mapDispatchToProps = (dispatch, props)=>{
      return {
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(TabView);
  