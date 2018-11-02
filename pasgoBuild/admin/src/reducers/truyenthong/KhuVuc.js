import * as TYPES from '../../constants/ActionType';

let initialState = "ha-noi";

const KhuVuc = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TRUYENTHONG.LOCATIONS_SELECTED:
            state = action.locations;
            return state;

        default:
            return state;

    }
}

export default KhuVuc;