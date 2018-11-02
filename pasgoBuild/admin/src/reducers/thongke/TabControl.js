import * as types from './../../constants/ActionType';

let initialState = {};

const tabControl = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_DATE_CHART:
            state = action.chartDate;
            return {...state};

        case types.LOAD_DEFAULT_CHART_DATE:
            state = action.chartDate            
            return {...state};

        default: return state;
    }
};


export default tabControl;




// [
//     {
//         "id": "1",
//         "action": "display",
//         "restaurantSlug": 87765,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 1"
//     },
//     {
//         "id": "2",
//         "action": "display",
//         "restaurantSlug": 11306,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 2"
//     },
//     {
//         "id": "3",
//         "action": "display",
//         "restaurantSlug": 11306,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 3"
//     },
//     {
//         "id": "4",
//         "action": "display",
//         "restaurantSlug": 73680,
//         "timeCurrent": "02/09/2018",
//         "notification": "notification 4"
//     },
//     {
//         "id": "5",
//         "action": "display",
//         "restaurantSlug": 11306,
//         "timeCurrent": "02/09/2018",
//         "notification": "notification 5"
//     },
//     {
//         "id": "6",
//         "action": "display",
//         "restaurantSlug": 91437,
//         "timeCurrent": "03/09/2018",
//         "notification": "notification 6"
//     },
//     {
//         "id": "7",
//         "action": "display",
//         "restaurantSlug": 21859,
//         "timeCurrent": "04/09/2018",
//         "notification": "notification 7"
//     },
//     {
//         "id": "8",
//         "action": "display",
//         "restaurantSlug": 6554,
//         "timeCurrent": "05/09/2018",
//         "notification": "notification 8"
//     },
//     {
//         "id": "9",
//         "action": "display",
//         "restaurantSlug": 21859,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 9"
//     },
//     {
//         "id": "1",
//         "action": "display",
//         "restaurantSlug": 87765,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 1"
//     },
//     {
//         "id": "2",
//         "action": "display",
//         "restaurantSlug": 11306,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 2"
//     },
//     {
//         "id": "3",
//         "action": "display",
//         "restaurantSlug": 11306,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 3"
//     },
//     {
//         "id": "4",
//         "action": "display",
//         "restaurantSlug": 73680,
//         "timeCurrent": "02/09/2018",
//         "notification": "notification 4"
//     },
//     {
//         "id": "5",
//         "action": "display",
//         "restaurantSlug": 11306,
//         "timeCurrent": "02/09/2018",
//         "notification": "notification 5"
//     },
//     {
//         "id": "6",
//         "action": "display",
//         "restaurantSlug": 91437,
//         "timeCurrent": "03/09/2018",
//         "notification": "notification 6"
//     },
//     {
//         "id": "7",
//         "action": "display",
//         "restaurantSlug": 21859,
//         "timeCurrent": "04/09/2018",
//         "notification": "notification 7"
//     },
//     {
//         "id": "8",
//         "action": "display",
//         "restaurantSlug": 6554,
//         "timeCurrent": "05/09/2018",
//         "notification": "notification 8"
//     },
//     {
//         "id": "9",
//         "action": "display",
//         "restaurantSlug": 21859,
//         "timeCurrent": "03/09/2018",
//         "notification": "notification 9"
//     },
//     {
//         "id": "1",
//         "action": "hover",
//         "restaurantSlug": 87765,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 1"
//     },
//     {
//         "id": "2",
//         "action": "hover",
//         "restaurantSlug": 11306,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 2"
//     },
//     {
//         "id": "3",
//         "action": "hover",
//         "restaurantSlug": 11306,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 3"
//     },
//     {
//         "id": "4",
//         "action": "hover",
//         "restaurantSlug": 73680,
//         "timeCurrent": "02/09/2018",
//         "notification": "notification 4"
//     },
//     {
//         "id": "5",
//         "action": "hover",
//         "restaurantSlug": 11306,
//         "timeCurrent": "02/09/2018",
//         "notification": "notification 5"
//     },
//     {
//         "id": "6",
//         "action": "hover",
//         "restaurantSlug": 11306,
//         "timeCurrent": "03/09/2018",
//         "notification": "notification 6"
//     },
//     {
//         "id": "7",
//         "action": "hover",
//         "restaurantSlug": 21859,
//         "timeCurrent": "04/09/2018",
//         "notification": "notification 7"
//     },
//     {
//         "id": "8",
//         "action": "hover",
//         "restaurantSlug": 6554,
//         "timeCurrent": "05/09/2018",
//         "notification": "notification 8"
//     },
//     {
//         "id": "9",
//         "action": "hover",
//         "restaurantSlug": 21859,
//         "timeCurrent": "03/09/2018",
//         "notification": "notification 9"
//     },
//     ,
//     {
//         "id": "1",
//         "action": "click",
//         "restaurantSlug": 6554,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 1"
//     },
//     {
//         "id": "2",
//         "action": "click",
//         "restaurantSlug": 11306,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 2"
//     },
//     {
//         "id": "3",
//         "action": "click",
//         "restaurantSlug": 11306,
//         "timeCurrent": "01/09/2018",
//         "notification": "notification 3"
//     },
//     {
//         "id": "4",
//         "action": "click",
//         "restaurantSlug": 73680,
//         "timeCurrent": "02/09/2018",
//         "notification": "notification 4"
//     },
//     {
//         "id": "5",
//         "action": "click",
//         "restaurantSlug": 6554,
//         "timeCurrent": "02/09/2018",
//         "notification": "notification 5"
//     },
//     {
//         "id": "6",
//         "action": "click",
//         "restaurantSlug": 91437,
//         "timeCurrent": "03/09/2018",
//         "notification": "notification 6"
//     },
//     {
//         "id": "7",
//         "action": "click",
//         "restaurantSlug": 21859,
//         "timeCurrent": "04/09/2018",
//         "notification": "notification 7"
//     },
//     {
//         "id": "8",
//         "action": "click",
//         "restaurantSlug": 6554,
//         "timeCurrent": "05/09/2018",
//         "notification": "notification 8"
//     },
//     {
//         "id": "9",
//         "action": "click",
//         "restaurantSlug": 21859,
//         "timeCurrent": "05/09/2018",
//         "notification": "notification 9"
//     },
    
// ]