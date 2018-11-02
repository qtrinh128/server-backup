import * as TYPES from '../../constants/ActionType';

let initialState = "bo-suu-tap";

const DanhMucDuocChon = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TRUYENTHONG.CATEGORY_SELECTED:
            state = action.category;
            return state;

        default:
            return state;

    }
}

export default DanhMucDuocChon;