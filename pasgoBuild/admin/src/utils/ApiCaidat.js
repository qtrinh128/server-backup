import axios from 'axios';
import * as Config from './../constants/Config';


export const apiGetSetting = (endpoint, method = 'GET' ,body) => {
  
    return axios({
       method : method,
       url : `${Config.URL_API}/${endpoint}`,
       data : body
     }).catch(err => {
       console.log(err);
     });

}



export const apiPostUpdateSetting = (endpoint, body) => {
  
  return axios.post(
    `${Config.URL_API}/${endpoint}`,
    JSON.stringify(body), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
      }
    }
  )
    .catch(function (err) {
      alert('Có lỗi xảy ra vui lòng thử lại sau');
    });
}
