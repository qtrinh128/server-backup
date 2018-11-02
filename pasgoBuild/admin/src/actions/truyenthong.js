import {
    getAPI,
    deleteAPI,
    postAPI,
    updateNotifi,
    updateSortId
} from '../utils/APITruyenThong';
import * as Types from '../constants/ActionType';

export const actFecthCommunicationReq = () => {
    return (dispatch) => {
        return getAPI('communication', 'GET', null).then(res => {
            dispatch(actFecthCommunication(res.data.communications));
        });
    }
}

export const actFecthCommunication = (communications) => {
    return {
        type: Types.TRUYENTHONG.FECTH_COMMUNICATION,
        communications
    }
}

export const actAddCommunicationReq = (communication) => {
    return (dispatch) => {
        return postAPI('communication', communication).then((res) => {
            dispatch(actAddCommunication(res.data.record));
        });
    }
}

export const actAddCommunication = (communication, ) => {
    return {
        type: Types.TRUYENTHONG.ADD_COMMUNICATION,
        communication
    }
}

export const filterNotifiCategory = (communications) => {
    return {
        type: Types.TRUYENTHONG.FILTER_NOTIFI_CATEGORY,
        communications
    }
}

export const selectedCatogory = (category) => {
    return {
        type: Types.TRUYENTHONG.CATEGORY_SELECTED,
        category
    }
}

export const selectedLocations = (locations) => {
    return {
        type: Types.TRUYENTHONG.LOCATIONS_SELECTED,
        locations
    }
}

export const actDeleteCommunicationReq = (id) => {
    return (dispatch) => {
        return deleteAPI('communication/delete', id).then(() => {
            dispatch(actDeleteCommunication(id));
        });
    }
}

export const actDeleteCommunication = (id) => {
    return {
        type: Types.TRUYENTHONG.DELETE_COMMUNICATION,
        id
    }
}

export const atcUpdateNotifiReq = (id) => {
    return (dispatch) => {
        return updateNotifi('communication/update', id).then(() => {
            dispatch(actUpdateNotifi(id));
        });
    }
}

export const actUpdateNotifi = (id) => {
    return {
        type: Types.TRUYENTHONG.UPDATE_IS_ACTIVE,
        id
    }
}

export const atcUpdateSortIdReq = (data) => {
    return (dispatch) => {
        return updateSortId('communication/update', data).then(() => {
            dispatch(actUpdateSordId(data));
        });
    }
}

export const actUpdateSordId = (data) => {
    return {
        type: Types.TRUYENTHONG.UPDATE_SORTID,
        data
    }
}