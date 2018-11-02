import * as types from './../../constants/ActionType';

let initalState = {}

const BarChart = (state = initalState, action) => {
    switch (action.type) {

        case types.LOAD_DEFAULT_BAR_CHART:
            state = action.chartObject;
            return {...state}

        case types.LOAD_CURRENT_BAR_CHART:
            return [...state]

        default:
            return state
    }
}

export default BarChart;