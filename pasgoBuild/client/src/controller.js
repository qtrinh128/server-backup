import Notification from './notification';
import { isMobileScreen } from './helper';

function getRandom(n) {
    return Math.floor((Math.random() * n));
}

class Controller {
  init(settings) {
      this.currentIndex = Number(localStorage.getItem('fiti:index') || 0);
      this.settings = settings;
      this.noti = new Notification(this.request);
      this.noti.init(settings);
      this.start();
  } 
  setRequest(request) {
      this.request = request;
  }
    setListNotification(list) {
        this.notifications = list;
    }
    generateNotification() {
        const {
            displayOption: {
                isRandomNotification,
            },
        } = this.settings;
        if (isRandomNotification) {
            const index = getRandom(this.notifications.length);
            this.currentIndex = index;
            this.saveIndex(index);
            return this.notifications[index];
        }
        this.currentIndex += 1;
        if (this.currentIndex >= this.notifications.length) this.currentIndex = 0;
        this.saveIndex(this.currentIndex);
        return this.notifications[this.currentIndex];

    }
    saveIndex(index) {
      localStorage.setItem('fiti:index', index);
    }

  start() {
      const {
          displayOption: {
              displayTime,
              delayTime,
              isShowMobile,
          },
      } = this.settings;
      if (!isShowMobile && isMobileScreen()) return;
      this.setInterVal(displayTime, delayTime);
  }

  setInterVal(displayTime, delayTime) {
      this.interval =  setInterval(() => {
          const notification = this.generateNotification();
          if (!notification) clearInterval(this.interval);
          this.noti.show(notification);
          setTimeout(() => {
              this.noti.hide();
          }, displayTime * 1000);
      }, (delayTime + displayTime + 1.6) * 1000);
  }

}

export default Controller;
