import React, { Component } from 'react'
import * as ActionTruyenThong from '../../actions/truyenthong';
import { connect } from 'react-redux';
import Header from '../../components/truyenthong/Header';
import { filter, setSortIdForArr, getDataReq } from '../../constants/TruyenThong';

export class TruyenThong extends Component {
    componentDidMount() {
        this.props.actFecthCommunication();
        setTimeout(() => {
            let communicationNotifi = filter(this.props.communications, this.props.KhuVuc, this.props.DanhMucDuocChon);
            this.props.filterNotifiCategory(communicationNotifi);
        }, 5000);
    }
    getSelectedCategory = (category) => {
        this.props.selectedCatogory(category);
        let communicationNotifi = filter(this.props.communications, this.props.KhuVuc, category);
        this.props.filterNotifiCategory(communicationNotifi);
    }
    getSelectedLocations = (locations) => {
        this.props.selectedLocations(locations);
        let communicationNotifi = filter(this.props.communications, locations, this.props.DanhMucDuocChon);
        this.props.filterNotifiCategory(communicationNotifi);
    }
    getAddCommunication = (communication) => {
        this.props.actAddCommunication(communication);
        setTimeout(() => {
            let communicationNotifi = filter(this.props.communications, this.props.KhuVuc, this.props.DanhMucDuocChon);
            this.props.filterNotifiCategory(communicationNotifi);
        }, 3000);
    }
    getIdItem = (id) => {
        this.props.actDeleteCommunication(id);
    }
    getNotifi = (notifi) => {
        this.props.atcUpdateNotifi(notifi.id);
    }
    getSortId = (id1, id2) => {
        let data = {
            id1,
            id2
        }
        this.props.atcUpdateSortId(data);
    }
    getArrCommunicationsSorted = (arrCommunicationsSorted) => {
        let arrCommunicationsSortId = setSortIdForArr(arrCommunicationsSorted);
        this.props.filterNotifiCategory(arrCommunicationsSortId);
        let dataReq = getDataReq(arrCommunicationsSortId);
        this.props.atcUpdateSortId(dataReq);
    }
    render() {
        return (
            <React.Fragment>
                <Header
                    communications={this.props.ThongBaoChoTungDanhMuc}
                    getSelectedCategory={this.getSelectedCategory}
                    getSelectedLocations={this.getSelectedLocations}
                    getAddCommunication={this.getAddCommunication}
                    getIdItem={this.getIdItem}
                    getNotifi={this.getNotifi}
                    getSortId={this.getSortId}
                    getArrCommunicationsSorted={this.getArrCommunicationsSorted}
                    settingColor={this.props.settingColor.theme_options}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        communications: state.TruyenThong,
        ThongBaoChoTungDanhMuc: state.ThongBaoChoTungDanhMuc,
        DanhMucDuocChon: state.DanhMucDuocChon,
        KhuVuc: state.KhuVuc,
        settingColor : state.settingColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actFecthCommunication: () => {
            dispatch(ActionTruyenThong.actFecthCommunicationReq());
        },
        actAddCommunication: (communication) => {
            dispatch(ActionTruyenThong.actAddCommunicationReq(communication));
        },
        filterNotifiCategory: (communications) => {
            dispatch(ActionTruyenThong.filterNotifiCategory(communications));
        },
        selectedCatogory: (category) => {
            dispatch(ActionTruyenThong.selectedCatogory(category));
        },
        selectedLocations: (locations) => {
            dispatch(ActionTruyenThong.selectedLocations(locations));
        },
        actDeleteCommunication: (id) => {
            dispatch(ActionTruyenThong.actDeleteCommunicationReq(id));
        },
        atcUpdateNotifi: (id) => {
            dispatch(ActionTruyenThong.atcUpdateNotifiReq(id));
        },
        atcUpdateSortId: (data) => {
            dispatch(ActionTruyenThong.atcUpdateSortIdReq(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TruyenThong)
