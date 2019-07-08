// 对于 GET 方法，会将数据转换为 query string。例如 { name: 'name', age: 18 } 转换后的结果是 name=name&age=18。
// 对于 POST 方法且 header['content-type'] 为 application/json 的数据，会进行 JSON 序列化。
// 对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换为 query string
const baseUrl = 'https://www.easy-mock.com/mock/5b307069835738790e9914b7/front/'
function apiRequest(method, url, params, headers) {
  let tempUrl = url.indexOf('http') > -1 ? url : baseUrl + url
  return new Promise((resolve, reject) => {
    uni
      .request({
        method: method,
        dataType: 'json',
        url:
          method === 'GET'
            ? tempUrl.indexOf('?') > -1
              ? tempUrl + '&time=' + new Date().getTime()
              : tempUrl + '?time=' + new Date().getTime()
            : tempUrl,
        data: params,
        header: Object.assign({}, headers)
      })
      .then(response => {
        resolve(response[1].data)
      })
      .catch(err => {
        if (err) {
          reject(err)
        }
      })
  })
}
/**
 *  get post put delete请求方法
 * @param url
 * @param params
 * @param data
 * @returns {Promise}
 */
export default {
  get: function(url, params = {}, headers) {
    return apiRequest('GET', url, params, headers)
  },
  post: function(url, data = {}, headers = {}) {
    return apiRequest('POST', url, data, headers)
  },
  put: function(url, data = {}) {
    return apiRequest('PUT', url, data, {})
  },
  delete: function(url, data = {}, headers = {}) {
    return apiRequest('DELETE', url, data, headers)
  },
  patch: function(url, data = {}, headers = {}) {
    return apiRequest('PATCH', url, data, headers)
  }
}
