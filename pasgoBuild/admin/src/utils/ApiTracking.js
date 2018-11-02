import axios from 'axios';
import * as Config from './../constants/Config';

export const apiGetDataTracking = (endpoint, method = 'GET' ,body) => {
  
    return axios({
       method : method,
       url : `${Config.URL_API}/${endpoint}`,
       data : body
     
     }).catch(err => {
       console.log(err);
     });

}

