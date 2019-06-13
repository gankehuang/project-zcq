// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import global from './global'
import iView from 'iview'
// import axios from 'axios'
import router from './router'

// 引入echarts

 // import echarts from 'echarts' 

// import fontAwesome from 'font-awesome' 
import holidaySuspended from  './components/HolidaySuspended'
Vue.use(holidaySuspended)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import 'font-awesome/css/font-awesome.min.css'
import 'iview/dist/styles/iview.css'
//import './assets/theme/dist/iview.css'
import './assets/styles/common.less'

import locale from 'iview/dist/locale/zh-CN'
// import onePageNav from 'nav'

//import '../bootstrap/dist/js/bootstrap.min.js'
//import '../bootstrap/dist/css/bootstrap.min.css'

//import $ from 'jquery'

Vue.prototype.global = global;
Vue.prototype.router = router;
// Vue.prototype.$http=axios;
// Vue.prototype.$echarts = echarts; 



Vue.use(iView, {locale})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data() {
    return {
      name: '',
      login: false
    };
  },
  mounted: function(){
    const _this = this;
    router.beforeEach((to, from, next) => { 
        if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆 
            if (sessionStorage.getItem('RoleId') !== "") { // 查询本地存储信息是否已经登陆 
              next(); 
            } else {
              _this.$Message.warning('请先登录！');
              next({ 
                path: '/dataanalyse', // 未登录则跳转至login页面 
                query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面 
              }); 
              
            } 
        } else { 
            next(); 
        } 
    });
  }
})




/******************************** H5+平台相关处理 ***********************************/
let backbutton_click = false;

if(window.plus){
	plusReady();
}else{
	document.addEventListener('plusready',plusReady,false);
}
function plusReady(){
  var ws=null;
  const plus = window.plus;
  const location = window.location;
  const history = window.history;
  ws = plus.webview.currentWebview();

  // Android处理返回键
  plus.key.addEventListener('backbutton',function(){
  	if(location.hash == '#/' || location.hash == '#/home'){
  		global.toast('再按一次退出');
  		if(backbutton_click){
			ws.close('auto');
  		}
  		else{
  			backbutton_click = true;
  			window.setTimeout(function(){
  				backbutton_click = false;
  			}, 3000);
  		}
	}
	else{
	    if(history.length>1){
	      history.back();
	      // ws.back();
	    }else{
	    	router.push('/home');
	    }
	}
  },false);
}