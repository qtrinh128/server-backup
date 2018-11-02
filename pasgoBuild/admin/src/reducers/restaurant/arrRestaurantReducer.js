import * as Types from '../../constants/ActionType';

let initialState = [];

const arrRestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.RESTAURANT.GET_ALL_RESTAURANT:
            state = action.infoRestaurant
            return [...state]
        default: return state
    }
}

export default arrRestaurantReducer;