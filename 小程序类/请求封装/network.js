const baseURL="http://vue.thexxdd.cn/"
//封装一个request方法
export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + options.url,
      method:options.method || "get",
      data:options.data || {},
      success:resolve,
      fail:reject
    })
  })
}