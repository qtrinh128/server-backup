import * as Types from './../../constants/ActionType';

let initialState = [
    {
        "createdAt": 1539184959194,
        "updatedAt": 1539270555741,
        "id": "5bbe193f1573c000163dd169",
        "theme_options": {
            "title_color": "#2f4f4f",
            "background_color": "#add8e6",
            "action_color": "#dc143c",
            "content_color": "#47a183"
        },
        "display_option": {
            "display_time": 2,
            "delay_time": 5,
            "is_show_mobile": "true",
            "mobile_position": 5,
            "desktop_position": 4
        },
        "type": "basic",
        "is_active": false
    },
    {
        "createdAt": 1539185015013,
        "updatedAt": 1539188149329,
        "id": "5bbe19771573c000163dd16a",
        "theme_options": {
            "title_color": "#cccc00",
            "background_color": "#0000cc",
            "action_color": "#fff222",
            "content_color": "#fffccc"
        },
        "display_option": {
            "display_time": 5,
            "delay_time": 3,
            "is_show_mobile": "false",
            "mobile_position": 5,
            "desktop_position": 4
        },
        "type": "custom",
        "is_active": true
    }
]

const settingState = (state = initialState, action) => {
    switch (action.type) {
        case Types.SETTING.SET_ARR_SETTING:
            state = action.settings;
            return [...state]
        case Types.SETTING.FETCH_SETTING:                
            state = action.settings;
            return [...state]
        default: return state;
    }
}


export default settingState;