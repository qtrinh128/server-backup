import { convertBoolean } from './FuncTemp';

export const getTrueSetting = (settings) => {

    for (let i = 0; i < settings.length; i++) {
        const setting = settings[i];
        if (convertBoolean(setting.is_active)) {
            return setting
        }
    }
}

export const getSettingChangeTheme = (settings, colors) => {
    for (let i = 0; i < settings.length; i++) {
        let setting = settings[i];
        if (convertBoolean(setting.is_active)) {
            switch (colors.type) {
                case 'title_color':
                    setting.theme_options.title_color = colors.color
                    break;
                case 'content_color':
                    setting.theme_options.content_color = colors.color
                    break;
                case 'background_color':
                    setting.theme_options.background_color = colors.color
                    break;
                case 'action_color':
                    setting.theme_options.action_color = colors.color
                    break;

                default:
                    break;
            }
        }
    }
    return settings;
}

export const getSettingChangeDisplay = (settings, displays) => {
    for (let i = 0; i < settings.length; i++) {
        let setting = settings[i];
        if (convertBoolean(setting.is_active)) {
            switch (displays.type) {
                case 'is_show_mobile':
                    setting.display_option.is_show_mobile = !convertBoolean(setting.display_option.is_show_mobile)
                    break;
                case 'delay_time':
                    setting.display_option.delay_time = displays.value
                    break;
                case 'display_time':
                    setting.display_option.display_time = displays.value
                    break;
                case 'mobile_position':
                    setting.display_option.mobile_position = displays.value
                    break;
                case 'desktop_position':
                    setting.display_option.desktop_position = displays.value
                    break;

                default:
                    break;
            }
        }
    }
    return settings;
}


export const getSettingWithType = (settings, type) => {
    
    for (let i = 0; i < settings.length; i++) {
        const setting = settings[i];
        console.log(setting);
        
        if(setting.type === type){
            let result = {
                title_color: setting.theme_options.title_color,
                content_color: setting.theme_options.content_color,
                background_color: setting.theme_options.background_color,
                action_color: setting.theme_options.action_color,
                is_active: setting.is_active,
                is_show_mobile: setting.display_option.is_show_mobile,
                delay_time:  setting.display_option.delay_time ,
                display_time: setting.display_option.display_time,
                mobile_position:setting.display_option.mobile_position,
                desktop_position: setting.display_option.desktop_position,
                type: setting.type
            }
            return result;
        }
    }
}