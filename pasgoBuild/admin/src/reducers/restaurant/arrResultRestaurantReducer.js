import * as Types from '../../constants/ActionType';
import {updateArticleIsActive} from './../../constants/FuncTemp';

let initialState = [];

const arrResultRestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.RESTAURANT.SAVE_RESTAURANT_FILTER:
            state = action.arrRestaurantFilter
            return [...state]
        case Types.RESTAURANT.UPDATE_ITEMPOST:
            let id = action.id;
            let result = updateArticleIsActive(state, id)
            state = result;
            return [...state];
        default: return state
    }
}

export default arrResultRestaurantReducer;