import Taro from '@tarojs/taro'

const foodstp = "https://www.wqz.com:2014";
const localhost = "http://www.wqz.com:2012";

const hearder = {
    'X-Requested-With': 'XMLHttpRequest',
    'content-type': 'application/json',
    'ApiKey': '',
    'access-token':""
}

function handleMessage (type,response) {
  Taro.showToast({
    title: response.message || response.msg || "系统错误!"+response.statusCode+";请重新下拉刷新",
    icon: type,
    duration: 2000
  })
}

function Fetch(url, body,method){
    const params = {
        url: foodstp+url,
        method:method || "post",
        data: body,
        header: hearder,
        success: function (response) { //暂时 无用
          if (response.statusCode >= 200 && response.statusCode <= 304) {
             return response.data;
          } else {
              handleMessage('none',response)
          }
        },
        fail: function (error) { //暂时 无用
          if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              handleMessage('none',error)
          } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              handleMessage('none',{message:"已发出请求，未收到答复！"})
          } else {
              // Something happened in setting up the request that triggered an Error
              handleMessage('none',error)
          }
          return { statusCode: 500 };
        }
    }
    return new Promise(function (reslove, reject) {
      Taro.showLoading({
        title: ''
      })
      Taro.request(params).then(response=>{
        Taro.hideLoading()
        if (response.statusCode >= 200 && response.statusCode <= 304) {
           return reslove(response.data);
        } else {
            console.log("服务器有异常!")
            handleMessage('none',response)
            // Taro.showToast({
            //   title: response.statusCode || "服务器错误！",
            //   icon: "none",
            //   duration: 2000
            // })
            reject(response.data)
        }
      }).catch(function(error){
        Taro.hideLoading()
        console.log("系统有异常!")
        handleMessage('none',{msg:"系统错误!请重新下拉刷新"})
        // Taro.showToast({
        //   title: "系统错误!请重新下拉刷新",
        //   icon: "none",
        //   duration: 2000
        // })
        reject(error)
      })
    });

  }

export {hearder,Fetch}
