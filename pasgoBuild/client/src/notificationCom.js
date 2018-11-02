import * as Settings from './constants';
import { isMobileScreen, timeSince, generateImage, generateTitle, generateRestaurantName } from './helperCom';
import {
    ACTION_DISPLAY,
    ACTION_HOVER,
    ACTION_CLICK,
} from './constants';

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
        
        this.request.postTracking(ACTION_DISPLAY, this.notification);
    }
    onHover() {
        this.request.postTracking(ACTION_HOVER, this.notification);
    }
    onClick() {
        this.request.postTracking(ACTION_CLICK, this.notification);
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
        // console.log(this.settings);

        const { themeOptions: { backgroundColor } } = this.settings;
        
        this.wrapTheme = document.createElement('div');
        this.wrapTheme.className = 'wrapper-theme';
        this.wrapTheme.appendChild(this.renderClose());
        this.wrapTheme.appendChild(this.renderTitle());
        this.wrapTheme.appendChild(this.renderThumbnail());
        this.wrapTheme.appendChild(this.renderBody());
        this.wrapTheme.appendChild(this.renderTime())
        this.wrapTheme.style.backgroundColor = backgroundColor;
        
    }
    renderClose() {
        const close = document.createElement('div');
        close.className = 'close-noti';
        const imgClose = document.createElement('span');
        imgClose.innerText = '×';
        close.appendChild(imgClose);
        close.onclick = this.onClose;
        return close;
    }
    renderTitle() { 
        const { themeOptions: { titleColor } } = this.settings;
        const title = document.createElement('div');
        title.className = 'noti-title';
        const spanTitle = document.createElement('span');
        spanTitle.style.color = titleColor;
        
        spanTitle.innerText = generateTitle(this.settings.messageText.title, this.notification);
        title.appendChild(spanTitle);
        // console.log(this.notification);
        
        return title;
    } 
    renderThumbnail() {
        const imageSrc = generateImage(this.notification);
        const restaurantThumbnail = document.createElement('div');
        restaurantThumbnail.className = 'restaurant-image-com img-thumbnail';
        const img = document.createElement('img');
        img.src = imageSrc;
        restaurantThumbnail.appendChild(img);
        return restaurantThumbnail;
    }
    renderBody() {
        const { themeOptions: {contentColor } } = this.settings;

        

        const linkCommunication = this.notification.linkCommunication || this.notification.linkRestaurant;
        const body = document.createElement('div');
        body.className = 'noti-body message_ticker';
        const restaurantName = document.createElement('a');
        restaurantName.target = '_blank';
        restaurantName.href = linkCommunication;        
        restaurantName.innerText = generateRestaurantName(this.settings.messageText.restaurantName, this.notification);
        restaurantName.onclick = this.onClick;
        restaurantName.style.color = contentColor;
    
        body.appendChild(restaurantName);
        return body;
    }
    renderTime() {
        const { themeOptions: { actionColor } } = this.settings;
        const timeEl = document.createElement('div');
        timeEl.style.color = actionColor;
        
        timeEl.className = 'noti-time';
        timeEl.innerText = timeSince(this.notification);
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
