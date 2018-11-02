import React, { Component } from 'react';
import { connect } from 'react-redux';
import ControlComponent from './../../components/tracking/ControlComponent';
import { filterDataDropdown, filterDataHeader, filterDataChart } from './../../constants/trackingFuncTemp';
import HeaderComponent from '../../components/tracking/HeaderComponent';
import ContentComponent from '../../components/tracking/ContentComponent';
import {actFecthTrackingDataReq} from './../../actions/tracking';

class TrackingContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listDate : [],
            slugLink: 'tat-ca'
        }
    }

    componentDidMount(){
        this.props.actFecthTrackingDataReq()
    }

    getListDate = (listDate) => {
        this.setState({
            listDate
        });

    }

    getChangeSelect =(value)=>{
        this.setState({
            slugLink: value
        });
    }
    render() {
        let listDate  = this.state.listDate;
        let slugLink  = this.state.slugLink;
        let { trackingData } = this.props;
        
        let dropdownOptions = filterDataDropdown(trackingData);
        let dataFilter = filterDataHeader(listDate,trackingData, slugLink);
        let dataChart = filterDataChart(listDate, trackingData,slugLink);
        return (
            <React.Fragment>
                <section>
                    <HeaderComponent
                        dataFilter={dataFilter}
                    />
                    <br />
                    <ControlComponent
                        getListDate={this.getListDate}
                        dropdownOptions={dropdownOptions}
                        getChangeSelect = {this.getChangeSelect}
                    />
                    <ContentComponent
                        labelDate={this.state.listDate}
                        dataChartt = {dataChart}
                    />
                </section>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        trackingData: state.trackingData,
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actFecthTrackingDataReq: ()=>{
            dispatch(actFecthTrackingDataReq());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackingContainer);