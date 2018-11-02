import axios from 'axios';
import * as Config from '../constants/Config';

export const getAPI = (endpoint, method = 'GET', body) => {
  return axios({
    method: method,
    url: `${Config.URL_API}/${endpoint}`,
    data: body,
  }).catch(err => {
    alert('Có lỗi xảy ra vui kiểm tra kết nối mạng của bạn và thử lại');
  });
}

export const postAPI = (endpoint, body) => {
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

export const deleteAPI = (endpoint, id) => {
  let body = { id: id }
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

export const updateNotifi = (endpoint, id) => {
  let body = { id: id }
  return axios.post(
    `${Config.URL_API}/${endpoint}/${id}`,
    JSON.stringify(body),
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