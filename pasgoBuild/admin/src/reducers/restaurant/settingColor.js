import * as Types from './../../constants/ActionType';

let initialState = {
    theme_options: {
        title_color: "#2f4f4f",
        background_color: "#add8e6",
        action_color: "#dc143c",
        content_color: "#47a183"
    },
    display_option: {
        display_time: 2,
        delay_time: 1,
        is_show_mobile: "true",
        mobile_position: 5,
        desktop_position: 4
    },
    type: "basic",
    is_active: true
};

const settingColor = (state = initialState, action) => {
    switch (action.type) {
        case Types.RESTAURANT.SETTING_COLOR:
            state = action.settingcolor
            return {...state}

        default: return state
    }
}

export default settingColor;