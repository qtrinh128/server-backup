import * as TYPES from '../../constants/ActionType';
import {findIndex} from '../../constants/TruyenThong';

let initialState = [];

const TruyenThongReducer = (state = initialState, action)=>{
    switch (action.type) {
        case TYPES.TRUYENTHONG.FECTH_COMMUNICATION:
            state = action.communications;            
            return [...state]

        case TYPES.TRUYENTHONG.ADD_COMMUNICATION:
            state.push(action.communication);
            return [...state];

        case TYPES.TRUYENTHONG.DELETE_COMMUNICATION:
            let index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
            
        default: return state;
            
    }
}

export default TruyenThongReducer;