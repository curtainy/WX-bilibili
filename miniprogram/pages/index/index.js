// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    currentIndex: 0,
    swiperList: [],
    videoList: []
  },

  //获取导航数据
  getNavList(){
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/navList',
      success: (res) => {
        this.setData({
          navList: res.data.data.navList
        })
      }
    })
  },

  //点击导航
  itemClick(event){
    this.setData({
      currentIndex: event.currentTarget.dataset.index
    })
  },
 
 //获取轮播图数据
  getSwipierList(){
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/swiperList',
      success: (res) => {
        this.setData({
          swiperList: res.data.data.swiperList
        })
      }
    })
  },

  //获取视频数据
  getVideoList(){
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videosList',
      success: (res) => {
        this.setData({
          videoList: res.data.data.videosList
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.请求导航栏数据
    this.getNavList()
    //2.获取轮播图数据
    this.getSwipierList()
    //3.获取视频数据
    this.getVideoList()
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