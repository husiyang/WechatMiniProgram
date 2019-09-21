//注册小程序示例
App({
  //共享数据，全局变量
  globalData: {
    name: 'husiyang',
    age: 18
  },
  //只执行一次的函数
  onLaunch: function () {
    /*setTimeout(function(){
      const err = new Error()
      throw err
    }, 3000) */
    //获取用户信息
    //判断小程序进入场景
  },

  //多次执行的函数
  onShow: function (options) {
    //判断小程序进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
    }
    //获取用户信息1
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
    //

  },


  onHide: function () {
  },


  onError: function (msg) {
  }
})
