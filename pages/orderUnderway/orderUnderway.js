// pages/orderUnderway/orderUnderway.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // tab栏切换变量
    tabBl: false,
    // 订单详情显示隐藏变量
    detailsBl: true,
    // 资料填写详情显示隐藏变量
    dataBl: true,
    // 订单详情数据
    obj: {},
    // 弹框变量
    showModalBl: false
  },
  // tab栏切换函数
  switcherFn(e) {
    let { index } = e.currentTarget.dataset
    if (index == 1) {
      this.setData({
        tabBl: true
      })
    } else {
      this.setData({
        tabBl: false
      })
    }
  },
  // 下拉显示函数 订单
  pullDownShowDetails() {
    this.setData({
      detailsBl: !this.data.detailsBl
    })
  },
  // 下拉显示函数 资料
  pullDownShowFeast() {
    this.setData({
      dataBl: !this.data.dataBl
    })
  },
  // 图片上传功能
  addImage() {
    wx.chooseImage({
      count: 1,  //选择图片数量
      sourceType: ['album', 'camera'], //图片来源
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        // const tempFilePaths = res.tempFilePaths
      }
    })
  },
  // 信息填写完成 显示弹框
  alertShow() {
    this.setData({
      showModalBl: true
    })
  },
  // 取消函数
  cancel() {
    this.setData({
      showModalBl: false
    })
  },
  // 确认函数
  confirm() {
    this.setData({
      showModalBl: false
    })
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 1000
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