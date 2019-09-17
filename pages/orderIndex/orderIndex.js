// pages/orderIndex/orderIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //选择栏目
    currentIdx: "0",
    left: 235,
    //获取列表
    hasAcceptList: true,
    hasCompleteList: true,
    acceptList: [],
    completeList: [],
    //是否展示占位图片
    hasList: true,
    showUser: false,
    //控制用户中心
    userLeft: -600,
    //是否弹窗
    isShowAlert: false,
    //是否显示特派任务
    isShowDistribute: true,
    isShowNext: false,
    //获取拒绝任务的原因
    cancelReason: ''
  },
  // 自写
  // 跳转详情页面
  skipDetails() {
    console.log(123)
    wx.navigateTo({
      url: '/pages/orderDetails/orderDatails'
    })
  },
  // 跳转帮助页面
  jumpHelp() {
    wx.navigateTo({
      url: '/pages/help/help',
      event: {

      }
    })
  },
  //取消派送任务 进入下一步填写原因或返回
  goNextCancel() {
    this.setData({
      isShowNext: !this.data.isShowNext
    })
  },
  //填写拒绝任务的原因
  goFillReason(e) {
    let value = e.detail.value
    console.log(value)
    this.setData({
      cancelReason: value
    })
  },
  //确定拒绝任务
  goCancelDistribute() {
    let reason = this.data.cancelReason
    if (!reason) {
      wx.showModal({
        content: '请填写取消原因',
        showCancel: false
      })
      return
    }
    this.setData({
      isShowDistribute: false
    })
  },
  //接受任务
  goAcceptDistribute() {
    this.setData({
      isShowDistribute: false
    })
    //请求接口  确定接受任务
  },

  //修改底部弹出框的位置
  goShowAlert() {
    this.setData({
      isShowAlert: !this.data.isShowAlert
    })
  },
  // 显示隐藏用户中心
  goHideShow() {
    this.setData({
      showUser: !this.data.showUser,
    })
    let showUser = this.data.showUser
    if (showUser) {
      wx.nextTick(() => {
        this.setData({
          userLeft: 0
        })
      })
    } else {
      wx.nextTick(() => {
        this.setData({
          userLeft: -600
        })
      })
    }
  },
  // 选择订单公海或完成订单
  selectOption(e) {
    let value = e.currentTarget.dataset.index;
    if (value == "0") {
      this.setData({
        currentIdx: value,
        left: '230'
      })
    } else {
      this.setData({
        currentIdx: value,
        left: '535'
      })
    }
    console.log(this.data.currentIdx)
  },
  // 自写
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