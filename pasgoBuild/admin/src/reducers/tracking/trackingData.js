import * as Types from './../../constants/ActionType';

let initialState = [
    { 
        "id": "1",
        "action": "display",
        "link_notify": "87765",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "display",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "display",
        "link_notify": "11306",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "display",
        "link_notify": "91437",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "display",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "display",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "display",
        "link_notify": "21859",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "display",
        "link_notify": "87765",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "display",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "display",
        "link_notify": "11306",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "display",
        "link_notify": "91437",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "display",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "display",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "display",
        "link_notify": "21859",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "hover",
        "link_notify": "87765",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "hover",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "hover",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "hover",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "hover",
        "link_notify": "21859",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "click",
        "link_notify": "6554",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "click",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "click",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "click",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "click",
        "link_notify": "6554",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "click",
        "link_notify": "91437",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "click",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "click",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "click",
        "link_notify": "21859",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "display",
        "link_notify": "87765",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "display",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "display",
        "link_notify": "11306",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "display",
        "link_notify": "91437",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "display",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "display",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "display",
        "link_notify": "21859",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "display",
        "link_notify": "87765",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "display",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "display",
        "link_notify": "11306",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "display",
        "link_notify": "91437",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "display",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "display",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "display",
        "link_notify": "21859",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "hover",
        "link_notify": "87765",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "hover",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "hover",
        "link_notify": "3425",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "hover",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "hover",
        "link_notify": "21859",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "click",
        "link_notify": "6554",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "click",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "click",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "click",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "click",
        "link_notify": "6554",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "click",
        "link_notify": "91437",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "click",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "click",
        "link_notify": "3425",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "click",
        "link_notify": "21859",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "display",
        "link_notify": "87765",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "display",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "display",
        "link_notify": "11306",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "display",
        "link_notify": "91437",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "display",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "display",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "display",
        "link_notify": "21859",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "display",
        "link_notify": "87765",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "display",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "display",
        "link_notify": "3425",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "display",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "display",
        "link_notify": "11306",
        "time_current": "24/10/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "display",
        "link_notify": "91437",
        "time_current": "23/10/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "display",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "display",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "display",
        "link_notify": "3425",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "hover",
        "link_notify": "87765",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    },
    {
        "id": "2",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 2"
    },
    {
        "id": "3",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 3"
    },
    {
        "id": "4",
        "action": "hover",
        "link_notify": "73680",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 4"
    },
    {
        "id": "5",
        "action": "hover",
        "link_notify": "3425",
        "time_current": "02/09/2018",
        "name_notify": "name_notify 5"
    },
    {
        "id": "6",
        "action": "hover",
        "link_notify": "11306",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 6"
    },
    {
        "id": "7",
        "action": "hover",
        "link_notify": "21859",
        "time_current": "04/09/2018",
        "name_notify": "name_notify 7"
    },
    {
        "id": "8",
        "action": "hover",
        "link_notify": "6554",
        "time_current": "05/09/2018",
        "name_notify": "name_notify 8"
    },
    {
        "id": "9",
        "action": "hover",
        "link_notify": "3425",
        "time_current": "03/09/2018",
        "name_notify": "name_notify 9"
    },
    {
        "id": "1",
        "action": "click",
        "link_notify": "6554",
        "time_current": "01/09/2018",
        "name_notify": "name_notify 1"
    }
];

const trackingData = (state = initialState, action)=>{
    switch (action.type) {
        case Types.TRACKING.FECTH_DATA_TRACKING:
            state = action.trackingData;
            console.log(state);
            
            return [...state]
        default: return state;
            
    }
}

export default trackingData;