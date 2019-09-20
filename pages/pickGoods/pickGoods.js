// pages/pickGoods/pickGoods.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 订单详情数据
    goods: {
      name: 1
    },
    // 酒数量
    num: 123
  },
  affirmNum() {

    wx.showModal({
      title: '确认提货信息',
      content: `A酒(${this.data.num}瓶)`,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.showToast({
            title: '提货完成',
            icon: 'success',
            duration: 2000
          })
          // 同时返回到订单公海页面
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})