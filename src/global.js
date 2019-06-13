import env from './env'
import secret_AES from './secret'

const Domain = env.Domain;

/*const Domain = {
  // 服务器环境
  //'api': '/api',
  //'resource': '/resource',
  'loginApi': 'http://10.200.30.215:8803',

  // 周珊珊
   // 'api': 'http://10.123.56.137:8008',  
   // 'resource': 'http://10.123.56.137:8008/File', //资源服务器地址
  
    //'api1': 'http://111.203.20.102:8888',
    'api1': 'http://www.facisp.cn/api2',
    //'api1': 'http://111.203.20.96:8888',
    // 
  // 郑满满
    //'api': 'http://10.123.56.198:8007',   //api.facisp.cn
   'api': 'http://api.facisp.cn',

   //'resource': 'http://10.123.56.198:8007/File' //资源服务器地址    //api.facisp.cn
   'resource': 'http://api.facisp.cn/File', //资源服务器地址    //api.facisp.cn

}*/

const API = {
  'Area': {
    'getList': Domain.api + '/AreaManageService.asmx/GetAllArea',
    // 'getDetailByID': Domain.api + '/AreaManageService.asmx/GetAreaInfoByAreaID',
    'getAllList': Domain.api + '/AreaManageService.asmx/GetAllArea_Front',
  },
  'Country': {
    'getList': Domain.api + '/CountryManageService.asmx/GetAllCountry',
    // 'getDetailByID': Domain.api + '/CountryManageService.asmx/GetCountryInfoByCountryID',
    'getDetailByID': Domain.api + '/CountryManageService.asmx/GetCountryInfo_Front',

  },
  'Policy': {
    'getClassify': Domain.api + '/ClassifyManageService.asmx/GetClassify_Front',
    'GetLiteratureInfo': Domain.api + '/LiteratureManageService.asmx/GetLiteratureInfo_Front', 
    'GetLiteratureInfoByLiteratureID': Domain.api + '/LiteratureManageService.asmx/GetLiteratureInfoByLiteratureID', //获取新闻详情
    'GetSimilarLiterature':Domain.api + '/LiteratureManageService.asmx/GetSimilarLiterature',
    'getDisclaimer':Domain.api + '/NewsManageService.asmx/getDisclaimer',  //获取免责声明  
    'GetLable':Domain.api + '/NewsManageService.asmx/GetLable',  //获取新闻标签 

    'GetAllPolicyLaws':Domain.api + '/PolicyLawsManageService.asmx/GetAllPolicyLaws',  //政策与法规列表 
    'GetPolicyLawsInfoByID':Domain.api + '/PolicyLawsManageService.asmx/GetPolicyLawsInfoByID',  //政策与法规列表详情 
  },
   'Product': {
    'getClassify': Domain.api + '/ClassifyManageService.asmx/GetClassifyTree_Front',
    'GetClassify': Domain.api + '/ClassifyManageService.asmx/GetClassify',
    'GetProductFront': Domain.api + '/ProductManageService.asmx/GetProduct_Front',
    'GetLiteratureInfo': Domain.api + '/ProductManageService.asmx/GetProductInfo_Front',
    'GetAllProduct': Domain.api + '/ProductManageService.asmx/GetAllProduct',
    'GetProductInfoByProductID': Domain.api + '/ProductManageService.asmx/GetProductInfoByProductID',
  },
  'Literature': {
    //'getListByPage': Domain.api + '/LiteratureManageService.asmx/GetLiterature_Front',   //获取列表页后面各个页的数据
    'getListByPage': Domain.api + '/LiteratureManageService.asmx/GetAllLiterature',   //获取列表页后面各个页的数据
  },
  'MyFavorites': {
    'AddToMyFavorites': Domain.api + '/MyFavoritesService.asmx/AddToMyFavorites',
    'IsMyFavorites': Domain.api + '/MyFavoritesService.asmx/IsMyFavorites',
  },
  'SearchList': {
    'SearchAll_Front': Domain.api + '/SeachService.asmx/SearchAll_Front',
  },
  'getNewsPhoto': {   //获取轮播图信息接口
    'GetRecomLiterature_Front': Domain.api + '/LiteratureManageService.asmx/GetRecomLiterature',
  },

  'HwyjManageService': {
      //海外农业研究
        'GetAllData': Domain.api + '/HwyjManageService.asmx/GetAllData',    //国家报告，海外观察，农产品市场列表
        'DeleteData': Domain.api + '/HwyjManageService.asmx/DeleteData',    //删除国家报告，海外观察，农产品市场列表
        'DeleteScience': Domain.api + '/HwyjManageService.asmx/DeleteScience',    //批量删除科技成果
        'GatDataInfo': Domain.api + '/HwyjManageService.asmx/GatDataInfo',    //获取国家报告，海外观察，农产品市场详情
        'GatScienceInfo': Domain.api + '/HwyjManageService.asmx/GatScienceInfo',    //获取科技成果详情
        'GetScience': Domain.api + '/HwyjManageService.asmx/GetScience',    //获取科技成果列表
        'SaveData': Domain.api + '/HwyjManageService.asmx/SaveData',    //添加修改国家报告，海外观察，农产品市场
        'SaveScience': Domain.api + '/HwyjManageService.asmx/SaveScience',    //添加修改科技成果
  },
  'CountryManageService': {
      'GetAllCountry': Domain.api + '/CountryManageService.asmx/GetAllCountry',
      'GetCountryInfoByCountryID': Domain.api + '/CountryManageService.asmx/GetCountryInfoByCountryID',
      'GetArea': Domain.api + '/AreaManageService.asmx/GetArea',
      'GetCountryLetter': Domain.api + '/CountryManageService.asmx/GetCountryLetter', 
      'GetCountryName': Domain.api + '/CountryManageService.asmx/GetCountry', 
      'GetCountryENInfo': Domain.api + '/CountryManageService.asmx/GetCountryENInfo',   //获取英文版国家详情
      'GetCountryMapLetter': Domain.api + '/CountryManageService.asmx/GetCountryMapLetter',   //获取国家首字母
      'ConvertToPDF': Domain.api + '/CountryManageService.asmx/ConvertToPDF',   //一键生成国家行业PDF
      'GetAllLiterature': Domain.api + '/LiteratureManageService.asmx/GetAllLiterature',   //相关新闻

  },
  'FCManageService': {
      'GetAllForeignCooperation': Domain.api + '/FCManageService.asmx/GetAllForeignCooperation',  //对外合作列表
      'GetForeignCooperationInfoByID': Domain.api + '/FCManageService.asmx/GetForeignCooperationInfoByID',  //对外合作列表
  },
  'dataAndAnalysis': {
      'GetTargetMap': Domain.api + '/DataAnalyzeService.asmx/GetTargetMap',    //数据分析树
      'GetCountryMap': Domain.api + '/DataAnalyzeService.asmx/GetCountryMap',    //国家  
      'GetYearMap': Domain.api + '/DataAnalyzeService.asmx/GetYearMap',    //年份
      'GetDataAnalyzeMap': Domain.api + '/DataAnalyzeService.asmx/GetDataAnalyzeMap',    //表格数据
      
      'GetCountryMapLetter': Domain.api + '/DataAnalyzeService.asmx/GetCountryMapLetter',    //表格数据

      'Getroot': Domain.api + '/DataAnalyzeService.asmx/Getroot',    //获取农产品数据一级目录 
      'GetSub1': Domain.api + '/DataAnalyzeService.asmx/GetSub1',    //获取农产品数据二级目录 
      'GetSub2': Domain.api + '/DataAnalyzeService.asmx/GetSub2',    //获取农产品数据三级目录 
      'Gettable': Domain.api + '/DataAnalyzeService.asmx/Gettable',    //获取农产品数据表格 
      'GetDataAnalyzeSR': Domain.api + '/DataAnalyzeService.asmx/GetDataAnalyzeSR',    //获取特色报告   
      'Gettable': Domain.api + '/DataAnalyzeService.asmx/Gettable',    //获取特色报告   
      'GetColumns': Domain.api + '/DataAnalyzeService.asmx/GetColumns', //获取表中所有字段
  },
  'UserManageService': {
      'Login': Domain.api + '/UserManageService.asmx/Login',     //登录
      'LogOff': Domain.api + '/UserManageService.asmx/LogOff',      //退出登录
      'GetCurrentUser': Domain.api + '/UserManageService.asmx/GetCurrentUser',     //通过sessionid获取用户登录信息
      'RegisterNewUser': Domain.api + '/UserManageService.asmx/RegisterNewUser2',   //注册用户
      'CreatePhoneCode': Domain.api + '/UserManageService.asmx/CreatePhoneCode',    //获取手机验证码
      'CreateEmailCode': Domain.api + '/UserManageService.asmx/CreateEmailCode',    //获取手机验证码
      
      //'LoginByPhoneCode':  Domain.api + '/UserManageService.asmx/LoginByPhoneCode'  //手机验证码登录
  }

}

// 返回上一页
function goBack(e){
  e.preventDefault();
  window.history.back();
}

// h5+环境检测
function checkPlus(){
  if(window.plus){
    return true;
  }
  else{
    alert('当前环境不支持硬件及系统相关操作，请使用APP完成相关操作！');
    return false;
  }
}

// 自定义alert
function alert_custom(str){
  if(window.plus){
    window.plus.nativeUI.alert(str);
  }
  else{
    alert(str);
  }
}

// 自定义confirm
function confirm_custom(str, callback_ok){
  if(window.plus){
    window.plus.nativeUI.confirm(str, function(e){
      if(e.index == 0){
        callback_ok();
      }
    });
  }
  else{
    let conf = window.confirm(str);
    if(conf == true){
      callback_ok();
    }
  }
}

// 自定义toast
function toast(str){
  if(window.plus){
    window.plus.nativeUI.toast(str);
  }
  else{
    alert(str);
  }
}
  
// 获取cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');    //把cookie分割成组    
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];                      //取得字符串    
        while (c.charAt(0) == ' ') {          //判断一下字符串有没有前导空格    
            c = c.substring(1, c.length);      //有的话，从第二位开始取    
        }
        if (c.indexOf(nameEQ) == 0) {       //如果含有我们要的name    
            return unescape(c.substring(nameEQ.length, c.length));    //解码并截取我们要值    
        }
    }
    return false;
}

//清除cookie    
function clearCookie(name) {
    setCookie(name, "", 0);
}

//设置cookie  名 值  秒
function setCookie(name, value, seconds) {   
    var expires = "";
    // if (seconds != 0) {      //设置cookie生存时间    
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toGMTString();
    // }
    document.cookie = name + "=" + escape(value) + expires + "; path=/";   //转码并赋值    
}

export default {
  'Domain': Domain,
  'API': API,


  // 发送ajax POST请求；参数option包含项：_this, url, data, f_resolve
  '$post': function(option){
    let prommise = new Promise(function(resolve, reject){

      /*$.ajaxSetup({
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('PlatForm', 'front');   
        }
      });*/


      $.ajax({
        'url': option.url,
        'type': 'POST',
        'data': option.data,
        'success': function(data, status){
          if(typeof data == 'string') {
             data = JSON.parse(data);
          }
          if('origin' in option){
            resolve(data);
          }
          else if(status == 'success' && data.success == 1){
            if(typeof data.resultData == 'string')
              resolve(JSON.parse(data.resultData));
            else
              resolve(data.resultData);
          }
          else{
            //reject(data.message);
          }
        },
          'error': function(err){
          //reject(err.responseText);
        }
        });



      });

    prommise
    .then(data => {
      option.f_resolve(data);
    })
    .catch(err => {
      /*option._this.$Message.error({
        content: err,
        closable: true
      });*/
    });

    return prommise;
  },


  // 补全服务器资源访问路径
  'normalResourceUrl': function(url, type){
    if (url==null || url=='null' || url==undefined || url.length==0) {
      let img_tmp = '/static/img/img_tmp.jpg';
      if(typeof type == 'string' && type){
        switch(type){
          case 'product': img_tmp = '/static/img/tmp/product_tmp.jpg';break;
          default: img_tmp = '/static/img/tmp/img_tmp.jpg';
        }
      }
      //return img_tmp;
      return "";
    }
    else if(url.indexOf('http://')===0 || url.indexOf('https://')===0){
      return url;
    }
    else{
      return Domain.resource + (url[0]=='/'?'':'/') + url;
    }
  },
  'parseStringToArray': function(arr){
    if(arr instanceof Array){
      return arr;
    }
    else{
      return JSON.parse(arr);
    }
  },

  'getCookie': getCookie,
  'setCookie': setCookie,
  'clearCookie': clearCookie,

  'goBack': goBack,
  'checkPlus': checkPlus,
  'alert': alert_custom,
  'confirm': confirm_custom,
  'toast': toast,
  'toCNKI': function(){
      if(localStorage.getItem('url_cnki')){
        setTimeout(window.open(localStorage.getItem('url_cnki')), 800);
        
      }
      else{
        // _this.$router.push({path: '/home'}); 
        return;
      }
  },
  'toCNKIDetail': function(_this, sysid){
      if(localStorage.getItem('url_cnki')){
        let url_cnki = localStorage.getItem('url_cnki').split('?')
        let url = url_cnki[0] + '/ArticleDetails?'+window.encodeURIComponent('sysid=' + sysid + (url_cnki.length>1?'&'+window.decodeURIComponent(url_cnki[1]):''))
        console.log(url);
        window.open(url);
      }
      else{
        const prommise_getCurrentUser = this.$post({
          '_this': _this,
          'url': this.API.UserManageService.GetCurrentUser,
          'data': {
            'SId': secret_AES.Decrypt_ECB(localStorage.getItem('SId')) || ''
          },
          'origin': true,
          'f_resolve': function(data){
            let resultData = JSON.parse(data.resultData);
            if(data.success==1){
              _this.$root.login = true;
              _this.$root.name = resultData.Name;
              sessionStorage.setItem('loginBS', 'ok');
              sessionStorage.setItem('name', resultData.Name);
              localStorage.setItem('url_cnki', resultData.url+'?'+ window.encodeURIComponent('token='+ localStorage.getItem('SId')));
            }
            else{
              _this.$root.login = false;
              _this.$root.name = "";
              sessionStorage.removeItem('loginBS');
              localStorage.setItem('SId', null);
              if(!localStorage.getItem('url_cnki')){
                localStorage.setItem('url_cnki', resultData.url);
              }
            }
            let url_cnki = localStorage.getItem('url_cnki').split('?')
            let url = url_cnki[0] + '/ArticleDetails?'+window.encodeURIComponent('sysid=' + sysid + (url_cnki.length>1?'&'+window.decodeURIComponent(url_cnki[1]):''))
            console.log(url);
            window.open(url);
          }
        });
      }
  }
}

