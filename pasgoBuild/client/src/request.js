import humps from 'humps';
import {CONFIG_URL_API} from './configURL'
const token = '4N2EXFt2daSWWD38ja8SW7mB7U96GvNRHmsNUzKH';
const headers = {
    'Authorization': token,
    'Content-Type': 'application/json',
};

class Request {

    //GET API SETTING BEGIN
    getSetting() {
        return fetch(CONFIG_URL_API + '/setting?is_active=true', {
            method: 'GET',
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                return Promise.resolve(humps.camelizeKeys(data));
            })
    }
    //GET API SETTING END

    //GET API NOTIFICATIONS_COMMUNICATION BEGIN
    getNotificationsCommunication() {
        return fetch(CONFIG_URL_API + '/communication', {
            method: 'GET',
        }).then(response => {
            return response.json();
        })
            .then(data => {
                return Promise.resolve(humps.camelizeKeys(data));
            })
    }

    getARestaurant(link){
        return fetch(CONFIG_URL_API + '/restaurant/dbsetting?link_restaurant='+link, {
            method: 'GET',
        }).then(response => {
            return response.json();
        })
            .then(data => {
                return Promise.resolve(humps.camelizeKeys(data));
            })
    }
    //GET API NOTIFICATIONS_COMMUNICATION END

    // POST API TRACKING BEGIN
    postTracking(action, notification) {
        const body = {
            action: action,
            link_notify: notification.linkCommunication,
            name_notify: notification.title,
            time_current: Date.now()
        };
        return fetch(CONFIG_URL_API + '/tracking', {
            method: 'POST',
            headers,
            mode: 'no-cors',
            body: JSON.stringify(body),
        })
            .then(response => console.log(response.status))
    }
    // POST API TRACKING END
}

export default Request;
