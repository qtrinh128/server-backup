import axios from 'axios';
import * as Config from './../constants/Config';

export const apiBlog = (endpoint, method = 'GET' ,body) => {
  
    return axios({
       method : method,
       url : `${Config.URL_API}/${endpoint}`,
       headers: { 'Content-type':'application/x-www-form-urlencoded'},
       data : body
     
     }).catch(err => {
       console.log(err);
     });
 
}

//Get Arr Restaurant
export const postAPIIsActive = (endpoint, addRestaurant) => {
  
  return axios.post(
      `${Config.URL_API}/${endpoint}`,
      JSON.stringify(addRestaurant), {
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

export const putAPI = (endpoint, id) => {
  let body = {id:id};
  return axios.post(
      `${Config.URL_API}/${endpoint}/${id}`,
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

export const updateSortId = (endpoint,data) => {
  
  return axios.post(
    `${Config.URL_API}/${endpoint}`,
    data,
    { 
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

