// 获取登录token 
// import { getStorageToken } from "../utils/storage";
//同时发送出去的异步请求的个数
let ajaxTimes = 0;
export const request = (params) => {
  // // 定义请求头  设置token
  // let header = { ...params.header };
  // //  判断是否是私有路径
  // if (params.url.includes('/my/')) {
  //   const token = getStorageToken();
  //   // 要带上token
  //   header["Authorization"] = token;
  // }
  wx.showLoading({
    title: "加载中。。。"
  });
  ajaxTimes++;
  // 统一的接口的前缀
  const baseUrl = "https://api.zbztb.cn/api/public/v1";
  return new Promise((reslove, reject) => {
    wx.request({
      ...params,
      header: header,
      url: baseUrl + params.url,
      success: (result) => {
        reslove(result.data.message);
      },
      fail: (error) => {
        reject(error);
      },
      complete: () => {
        ajaxTimes--;
        if (ajaxTimes === 0) {
          // 同时发送出去的请求 都回来了
          wx.hideLoading();
        }
      }
    });
  })
}
