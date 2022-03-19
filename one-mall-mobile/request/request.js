const BASE_URL = 'http://10.23.79.240:7777/';

class HLORequest {
  request(options) {
    return new Promise((resolve, reject) => {
      uni.showLoading({
        title: '加载中'
      });
      uni.request({
        url: BASE_URL + options.url,
        method: options.method || 'GET',
        data: options.data || {},
        success: (res) => {
          uni.hideLoading();
          if (res.statusCode !== 200) {
            return uni.showToast({
              title: res.data,
              icon: 'error'
            });
          }
          resolve(res.data); //成功,将数据返回
        },
        fail: (err) => {
          //失败操作
          uni.showToast({
            title: '请求接口失败！'
          });
          uni.hideLoading();
          reject(err);
        }
      });
    });
  }
  get(options) {
    return this.request({ ...options, method: 'GET' });
  }
  post(options) {
    return this.request({ ...options, method: 'POST' });
  }
  delete(options) {
    return this.request({ ...options, method: 'DELETE' });
  }
  put(options) {
    return this.request({ ...options, method: 'PUT' });
  }
}

export default HLORequest;
