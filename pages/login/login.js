var netRq = require('../../utils/CircleNetRequest.js')


Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   
    
  },
  onReady:function(){
    // 页面渲染完成
   
  },
  onShow:function(){
   
  },
  onHide:function(){
  
  },
  onUnload:function(){
    // 页面关闭
 
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var param = {"pwd":e.detail.value.password,
    "deviceno":"3ed01affb4f644c7b4c73d24ce4c05c8",
    "useraccount":e.detail.value.count,
    "tel":e.detail.value.count,
    "accounttype":"1",
    "phonetype":"2",
    "RegistrationID":""}
    netRq.netPostRequest('Login',param,function(res){

        console.log(res)
        wx.navigateBack({
          delta: 1, // 回退前 delta(默认为1) 页面
          
        })


    })

  }
})