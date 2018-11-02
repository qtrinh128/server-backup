import * as TYPES from '../../constants/ActionType';
import { findIndex, updateIndex } from '../../constants/TruyenThong';
import { sortId } from './../../constants/TruyenThong';

let initialState = [];

const ThongBaoChoTungDanhMuc = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TRUYENTHONG.FILTER_NOTIFI_CATEGORY:
            state = sortId(action.communications);
            return [...state];

        case TYPES.TRUYENTHONG.DELETE_COMMUNICATION:
            let index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];

        case TYPES.TRUYENTHONG.UPDATE_IS_ACTIVE:
            let result = updateIndex(state, action.id);
            state = result;
            return [...state];

        default:
            return state;
    }
}

export default ThongBaoChoTungDanhMuc;