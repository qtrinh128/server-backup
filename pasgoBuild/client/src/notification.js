import * as Settings from './constants';
import { isMobileScreen, timeSince, generateTitle, generateRestaurantName } from './helper';
import {
    ACTION_DISPLAY,
    ACTION_HOVER,
    ACTION_CLICK,
} from './constants';

const imageCloseLink = '/images/CloseIcon.svg';

const generateClassNamePosition = (displayOption) => {
    let position = 'a';
    let active = 'b';
    
    const {
        isShowMobile,
        mobilePosition,
        desktopPosition,
    } = displayOption;
    const isMobile = isMobileScreen();
    if (isMobile) {
        if (isShowMobile) {
            if (mobilePosition === Settings.MOBILE_POSITION_TOP) {
                position = 'top';
                active = 'slide-top-enter'
            } else {
                position = 'bottom';
                active = 'slide-bottom-enter'
            }
        }
    } else {
        switch (desktopPosition) {
            case Settings.DESKTOP_POSITION_BOTTOM_LEFT:
                position = 'bottom-left';
                active = 'slide-bottom-left-enter';
                break;
            case Settings.DESKTOP_POSITION_BOTTOM_RIGHT:
                position = 'bottom-right';
                active = 'slide-bottom-right-enter';
                break;
            case Settings.DESKTOP_POSITION_TOP_LEFT:
                position = 'top-left';
                active = 'slide-top-left-enter';
                break;
            case Settings.DESKTOP_POSITION_TOP_RIGHT:
                position = 'top-right';
                active = 'slide-top-right-enter';
                break;
            default: break;
        }
    }
    return {
        position,
        active,
    };
};

class Notification {
    constructor(request) {
        this.request = request;
        this.onHover = this.onHover.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    init(settings) {
        this.settings = settings;
        this.initContainer(settings);
    } 
    onDisplay() {
        this.request.postTracking(ACTION_DISPLAY, this.notification.restaurantSlug);
    }
    onHover() {
        this.request.postTracking(ACTION_HOVER, this.notification.restaurantSlug);
    }
    onClick() {
        this.request.postTracking(ACTION_CLICK, this.notification.restaurantSlug);
    }
    onClose() {
        this.hide();
    }
    initContainer(settings) {
        this.className = generateClassNamePosition(settings.displayOption);
        this.container = document.createElement('div');
        this.container.className = 'container wrapper-noti basicRounded light';
        this.container.classList.add(this.className.position);
        this.container.classList.add(this.className.active);
        this.container.onmouseenter = this.onHover;
        document.body.appendChild(this.container);
    }
    render() {
        const { themeOption: { notificationType, backgroundColor } } = this.settings;
        this.wrapTheme = document.createElement('div');
        this.wrapTheme.className = 'wrapper-theme';
        this.wrapTheme.appendChild(this.renderClose());
        this.wrapTheme.appendChild(this.renderTitle());
        this.wrapTheme.appendChild(this.renderThumbnail());
        this.wrapTheme.appendChild(this.renderBody());
        this.wrapTheme.appendChild(this.renderTime())
        if (notificationType === Settings.NOTIFICATION_TYPE_CUSTOM) {
            this.wrapTheme.style.backgroundColor = backgroundColor;
        }
    }
    renderClose() {
        const close = document.createElement('div');
        close.className = 'close-noti';
        const imgClose = document.createElement('img');
        imgClose.src = imageCloseLink;
        close.appendChild(imgClose);
        close.onclick = this.onClose;
        return close;
    }
    renderTitle() { 
        const { themeOption: { notificationType, titleColor } } = this.settings;
        const title = document.createElement('div');
        title.className = 'noti-title';
        const spanTitle = document.createElement('span');
        if (notificationType === Settings.NOTIFICATION_TYPE_CUSTOM) {
            spanTitle.style.color = titleColor;
        }
        spanTitle.innerText = generateTitle(this.settings.messageText.title, this.notification);
        title.appendChild(spanTitle);
        return title;
    } 
    renderThumbnail() {
        const imageSrc = this.notification.restaurantThumbnail;
        const restaurantThumbnail = document.createElement('div');
        restaurantThumbnail.className = 'restaurant-image';
        const img = document.createElement('img');
        img.src = imageSrc;
        restaurantThumbnail.appendChild(img);
        return restaurantThumbnail;
    }
    renderBody() {
        const { themeOption: { notificationType, restaurantColor } } = this.settings;
        const restaurantLink = this.notification.restaurantSlug;
        const body = document.createElement('div');
        body.className = 'noti-body';
        const restaurantName = document.createElement('a');
        restaurantName.target = '_blank';
        restaurantName.href = 'nha-hang/' + restaurantLink;        
        restaurantName.innerText = generateRestaurantName(this.settings.messageText.restaurantName, this.notification);
        restaurantName.onclick = this.onClick;
        if (notificationType === Settings.NOTIFICATION_TYPE_CUSTOM) {
            restaurantName.style.color = restaurantColor;
        }
        body.appendChild(restaurantName);
        return body;
    }
    renderTime() {
        const { themeOption: { notificationType, timeColor } } = this.settings;
        const time = this.notification.createdAt;
        const timeEl = document.createElement('div');
        if (notificationType === Settings.NOTIFICATION_TYPE_CUSTOM) {
            timeEl.style.color = timeColor;
        }
        timeEl.className = 'noti-time';
        timeEl.innerText = timeSince(new Date(time));
        return timeEl;
    }
    show(notification) {
        if (notification) this.notification = notification;
        else return;
        this.onDisplay(notification.id, notification.restaurant);
        this.render();
        this.container.appendChild(this.wrapTheme);
        this.container.classList.remove(this.className.active);
    }
    hide() {
        setTimeout(() => {
            this.container.innerHTML = '';
        }, 800);
        this.container.classList.add(this.className.active);
    }
}

export default Notification;
