import axios from 'axios';
import QS from 'qs';

// 请求超时时间
axios.default.timeout = 10000;

// post 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          error.messsage = '请求错误'
          break
        case 401:
          error.messsage = '未授权，请登录'
          break
        case 403:
          error.messsage = '拒绝访问'
          break
        case 404:
          error.messsage = `请求地址出错：${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break

        default:
      }
    }
    return Promise.reject(err);
  }
);

/**
 *  get方法
 *  @param {String} url
 *  @param {Object} params
 * */

export function get(url, params) {
  // 增加时间戳
  params['timestamp'] = new Date().getTime();
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err.data);
    });
  })
};

/**
 * post方法
 * @param {String} url
 * @param {Object} params
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err.data);
    })
  });
}
