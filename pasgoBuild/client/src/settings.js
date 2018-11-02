import * as Settings from "./constants";

export const defaultSettings = {
    displayOption: {
        displayTime: 5,
        delayTime: 3,
        isRandomNotification: false,
        isShowMobile: true,
        mobilePosition: Settings.MOBILE_POSITION_BOTTOM,
        desktopPosition: Settings.DESKTOP_POSITION_BOTTOM_LEFT,
    },
    messageText: {
        title: "{{customer_name}} vừa đặt chỗ ",
        restaurantName: "{{restaurant_title}}"
    },
    themeOption: {
        type: 1,
        notificationType: Settings.NOTIFICATION_TYPE_BASIC,
        titleColor: '#333',
        backgroundColor: '#FFFFFF',
        timeColor: '#333',
        restaurantColor: '#333',
    },
};


export const defaultSettingsCommunication = {
    displayOption: {
        displayTime: 20,
        delayTime: 1,
        isRandomNotification: false,
        isShowMobile: true,
        mobilePosition: Settings.MOBILE_POSITION_BOTTOM,
        desktopPosition: Settings.DESKTOP_POSITION_BOTTOM_LEFT,
    },
    messageText: {
        title: "{{title}}",
        restaurantName: "{{title}}"
    },
    themeOption: {
        type: 1,
        notificationType: Settings.NOTIFICATION_TYPE_BASIC,
        titleColor: '#333',
        backgroundColor: '#FFFFFF',
        timeColor: '#333',
        restaurantColor: '#333',
    },
};



export const defaultSettingsBlog = {
    displayOption: {
        displayTime: 5,
        delayTime: 3,
        isRandomNotification: false,
        isShowMobile: true,
        mobilePosition: Settings.MOBILE_POSITION_BOTTOM,
        desktopPosition: Settings.DESKTOP_POSITION_BOTTOM_LEFT,
    },
    messageText: {
        title: "{{title}}",
        restaurantName: "{{restaurant_title}}"
    },
    themeOption: {
        type: 1,
        notificationType: Settings.NOTIFICATION_TYPE_BASIC,
        titleColor: '#333',
        backgroundColor: '#FFFFFF',
        timeColor: '#333',
        restaurantColor: '#333',
    },
};
