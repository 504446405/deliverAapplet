// import { getStorageToken } from "../utils/storage";
//同时发送出去的异步请求的个数
let ajaxTimes = 0;
export const request = (params) => {
  // // 定义请求头  设置token
  let header = { ...params.header };
  // //  判断是否是私有路径
  // if (params.url.includes('/my/')) {
  //   const token = getStorageToken();
  // 要带上token
  // }
  header["Authorization"] = "Bearer_eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3d3cuZ3l0eC5jb20iLCJleHAiOjE1NzAxNTM1MzQsInVzZXJOYW1lIjoiYWRtaW4iLCJ1c2VySWQiOiIxIiwiY29tcGFueUlkIjoiMSIsImF1ZCI6Imd5dHggYXBwIiwiaWF0IjoxNTY5Mjg5NTM0fQ.Awsj_6qQPvAi2JMB4mC4D84vZ6bbTWwU3KZx83BybieMdYqdaOO1e_nQgKpeG7_Ef3s2Gw-X9thjLUv5Fv5TKg";
  wx.showLoading({
    title: "加载中。。。"
  });
  ajaxTimes++;
  // 统一的接口的前缀
  const baseUrl = "http://120.79.38.107:8088";
  return new Promise((reslove, reject) => {
    wx.request({
      ...params,
      header:header,
      // header: {
      //   'content-type': 'application/json' // 默认值
      // },
      url: baseUrl + params.url,
      success: (result) => {
        // reslove(result.data.message);
        reslove(result);
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
