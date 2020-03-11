// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: {},
    othersVideoList: [],
    commentNum: 0,
    commentList: [],
    isShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const videoId = options.id
    const videoId = 1
    //1.获取视频详情信息
    this.getVideoDetail(videoId)
    //2.获取推荐视频的信息
    this.getOtherVideolist(videoId)
    //3.获取评论信息
    this.getCommentData(videoId)
  },

 /**
  * 获取视频详情信息
  */
  getVideoDetail(id){
    wx.request({
      url: "https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videoDetail?id="+id,
      success: (res) =>{
        this.setData({
          videoInfo: res.data.data.videoInfo
        })
      }
    })
  },

  /**
   * 获取推荐视频的信息
   */
  getOtherVideolist(id){
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/othersList?id='+id,
      success: (res) => {
        this.setData({
          othersVideoList: res.data.data.othersList
        })
      }
    })
  },

  /**
   * 获取评论信息
   */
  getCommentData(id){
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/commentsList?id='+id,
      success: (res) =>{
        this.setData({
          commentNum: res.data.data.commentData.commentTotalCount,
          commentList: res.data.data.commentData.commentList
        })
      }
    })
  },
  /**
   * 点击推荐栏
   */
  recommendClick(){
    this.setData({
      isShow: true
    })
  },
  /**
   * 点击评论栏
   */
  commentClick(){
    this.setData({
      isShow: false
    })
  }
})