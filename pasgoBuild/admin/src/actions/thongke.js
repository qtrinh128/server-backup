import * as types from './../constants/ActionType';

export const loadDefaultBarChart = (chartObject) => {
    return {
        type: types.LOAD_DEFAULT_BAR_CHART,
        chartObject
    }
}

export const loadDefaultChartDate = (chartDate) => {
    return {
        type: types.LOAD_DEFAULT_CHART_DATE,
        chartDate
    }
};

export const setDateChart = (chartDate) => {
    return {
        type: types.SET_DATE_CHART,
        chartDate
    }
};

export const loadCurrentBarChar = (dataX, dataY, text) => {
    return {
        type: types.LOAD_DEFAULT_BAR_CHART,
        dataX,
        dataY,
        text
    }
}

export const loadAllTracking = (allTracking)=>{
    return {
        type: types.LOAD_ALL_TRACKING,
        allTracking
    }
}
