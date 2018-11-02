import {apiGetDataTracking} from '../utils/ApiTracking';
import * as Types from '../constants/ActionType';



export const actFecthTrackingDataReq = () => {
    return (dispatch) => {
        return apiGetDataTracking('tracking', 'GET', null).then(res => {
            dispatch(actFecthTrackingData(res.data));
        });
    }
}

export const actFecthTrackingData = (trackingData) => {
    return {
        type: Types.TRACKING.FECTH_DATA_TRACKING,
        trackingData
    }
}