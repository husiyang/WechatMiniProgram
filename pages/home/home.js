// pages/home/home.js
//获取全局变量
const app = getApp()
const name = app.globalData.name;
const age = app.globalData.age;

Page({
  //------------------------   1监听页面的生命周期
  onLoad(){
    //网络请求获取数据并保存
    const _this = this;
    wx.request({
      url: 'blackfeather.xyz',
      /*success: (res) => {
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }  */
      success: function(res){
        const data = res.data.data.list;
        _this.setData({
          list: data
        })
      }
    })
  },
  onShow() {

  },
  onReady(){

  },
  
  onHide(){

  },
  onUnload(){

  },
  //---------------------  初始化数据
  data:{
    list:[],
    name: 'world',
    age: 18,
    students:[
      {id:  110, name:  'kobe',age: 30},
      { id: 110, name: 'james', age: 30 },
      { id: 110, name: 'curry', age: 30 },
      { id: 110, name: 'jordan', age: 30 },
    ],
    counter: 0
  },
  //------------------------  监听wxml中事件
  numberInc(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  numberDec(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){

  },
  onPullDownRefresh(){
    console.log("aaaaa")
  }
})