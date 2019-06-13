<template>
  <div class="Login">
    <div class="container-main">
      <div class="top-logo">
      <router-link to="/">
        <img class="logo" src="/static/img/logo.png">
        <div class="logo-name">
          农业对外合作公共信息服务平台
          <span class="en"><br>Foreign Agriculture Cooperation Public Information Service Platform</span>
        </div>
      </router-link>
      </div>
      <div class="box-login clearfix">
        <h2 class="title">登录</h2>
        <!-- <RadioGroup v-model="loginType">
            <Radio label="1">账号密码登录</Radio>
            <Radio label="2">手机验证码登录</Radio>
        </RadioGroup> -->
        <div style="text-align:center">
            <Input v-model="name" placeholder="请输入用户名..." style="width: 100%; margin-top:20px;" />
            <Input v-model="psd" placeholder="请输入密码..." type="password" style="width: 100%;margin-top:20px;margin-bottom:20px;" />
        </div>
        <!-- <div style="text-align:left" v-show="loginType == 2 ? true : false">
            <Input v-model="phone" placeholder="请输入手机号码..." style="width: 100%; margin-top:20px;" />
            <Input v-model="verificationCode" placeholder="请输入手机验证码..." style="width: 100%;margin-top:20px;margin-bottom:20px;" />
            <Button size="small" v-bind:disabled="dis" @click="getCode">{{btnText}}</Button>
        </div> -->
        <div slot="footer">
            <Button type="error" class="btn-login" size="large" long :loading="modal_loading" @click="toLogin">登录</Button>
            <!-- <Button type="error" v-show="loginType == 2 ? true : false" size="large" long :loading="modal_loading" @click="login2">登录</Button> -->
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import secret_AES from '../secret'

export default {
  name: 'Login',
  data: function () {
    return {
      name: '',   //用户名
      psd: '',    //密码
      phone: '',
      verificationCode: '',
      loginType: '1',
      btnText: '点击获取验证码',
      dis: false
    }
  },
  mounted: function () {
      this.name = sessionStorage.getItem('name');
  },
  methods: {
    getCode: function() {   //获取手机验证码
        const _this = this;
        if(_this.phone == ''){
            _this.$Message.warning('请输入手机号码！');
            return;
        }else {
            let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if( !myreg.test(_this.phone) ) {
                _this.$Message.warning('手机号码格式不正确！');
                _this.phone = '';
                return;
            }
        }
        $.ajax({
          type: "POST",
          url: _this.global.API.UserManageService.CreatePhoneCode,
          data: {
            Phone: _this.phone
          },
          dataType: "json",
          success: function(data){
            if(data.success == 1){
                //console.log(data);
                _this.dis = true;
                _this.setTimer();
            }else{
                _this.$Message.error(data.message);
            }
          }
        });
        
    },
    setTimer: function() {
        const _this = this;
        let time = 60;
        let timer = setInterval(function() {
            time --;
            if(time <= 0) {
                time = 0;
                _this.dis = false;
                _this.btnText = '点击获取验证码'
                clearInterval(timer);
            }else {
                _this.btnText = time + '秒后获取验证码';
            }
        }, 1000)
    },
    toLogin: function() {
      const _this = this;

      $.ajax({
          type: "POST",
          url: _this.global.API.UserManageService.Login,
          data: {
            userName: _this.name,
            password: _this.psd
          },
          dataType: "json",
          success: function(data){
            if(data.success == 1){
                _this.$root.login = true;
                _this.$root.name = _this.name;

                sessionStorage.setItem('loginBS', 'ok');   //登录成功设置session
                sessionStorage.setItem('name', _this.name);   //登录成功设置session

                let sid = _this.global.getCookie('SId');
                localStorage.setItem('SId', secret_AES.Encrypt_ECB(sid));
                localStorage.setItem('url_cnki', data.resultData+'?'+ window.encodeURIComponent('token='+ localStorage.getItem('SId')));

                if(window.location.href.indexOf('returnUrl')>0){
                  let returnUrl = window.decodeURIComponent(location.href.split('?returnUrl=')[1]).split('?');
                  returnUrl = returnUrl.length>1 ? returnUrl[0]+'?'+window.encodeURIComponent(returnUrl[1]) : returnUrl[0];
                  let connector = returnUrl.indexOf('?')>0 ? window.encodeURIComponent('&') : '?';
                  let url_cnki = returnUrl.indexOf('token')>0 ? returnUrl : (returnUrl + connector + window.encodeURIComponent('token=' + localStorage.getItem('SId')));
                  if(url_cnki){
                    localStorage.setItem('url_cnki', url_cnki);
                    window.location.href = url_cnki;
                    return;
                  }
                }

                _this.$router.push({path: '/home'});
            }else{
                _this.psd = '';
                _this.$Message.error(data.message);
            }
          }
      });
    },
    login2: function() {
        const _this = this;
        $.ajax({
            type: "POST",
            url: _this.global.API.UserManageService.LoginByPhoneCode,
            data: {
              Phone: _this.phone,
              PhoneCode: _this.verificationCode
            },
            dataType: "json",
            success: function(data){
              /*if(data.success == 1){
                sessionStorage.setItem('loginBS', 'ok');   //登录成功设置session
                sessionStorage.setItem('name', _this.phone);   //登录成功设置session
                sessionStorage.setItem('RoleId', data.RoleId);   //登录成功设置session
               
                //console.log(data);

                let sid = _this.global.getCookie('SId');
                localStorage.setItem('SId', secret_AES.Encrypt_ECB(sid));
                localStorage.setItem('url_cnki',  data.resultData+'?'+ window.encodeURIComponent('token='+ localStorage.getItem('SId')));

                _this.modal_loading = true;
                
                _this.$root.login = true;
                _this.$root.name = _this.phone;

                _this.modal_loading = false;
                _this.modal2 = false;
                _this.verificationCode = '';
                _this.$Message.success('登录成功！');
              }else{
                _this.verificationCode = '';
                _this.$Message.error(data.message);
              }*/
                if(data.success == 1){
                    _this.$root.login = true;
                    _this.$root.name = _this.phone;

                    sessionStorage.setItem('loginBS', 'ok');   //登录成功设置session
                    sessionStorage.setItem('name', _this.phone);   //登录成功设置session

                    let sid = _this.global.getCookie('SId');
                    localStorage.setItem('SId', secret_AES.Encrypt_ECB(sid));
                    localStorage.setItem('url_cnki', data.resultData+'?'+ window.encodeURIComponent('token='+ localStorage.getItem('SId')));

                    if(window.location.href.indexOf('returnUrl')>0){
                      let returnUrl = window.decodeURIComponent(location.href.split('?returnUrl=')[1]).split('?');
                      returnUrl = returnUrl.length>1 ? returnUrl[0]+'?'+window.encodeURIComponent(returnUrl[1]) : returnUrl[0];
                      let connector = returnUrl.indexOf('?')>0 ? window.encodeURIComponent('&') : '?';
                      let url_cnki = returnUrl.indexOf('token')>0 ? returnUrl : (returnUrl + connector + window.encodeURIComponent('token=' + localStorage.getItem('SId')));
                      if(url_cnki){
                        localStorage.setItem('url_cnki', url_cnki);
                        window.location.href = url_cnki;
                        return;
                      }
                    }

                    _this.$router.push({path: '/home'});
                }else{
                    _this.verificationCode = '';
                    _this.$Message.error(data.message);
                }
            }
        });
    },
  },
  watch: {
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

.Login{
  /*display: table;*/
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fcf8e7;

  .container-main{
    /*display: inline-block;*/
    display: block;
    top: 50%;
    margin-top: -200px;
    text-align: center;
  }

  .top-logo{
    text-align: center;

    .logo, .logo-name{
      vertical-align: middle;
    }

    .logo{
      width: 70px;
    }

    .logo-name{
      display: inline-block;
      margin-left: 10px;
      font-size: 28px;
      line-height: 1;
      color: @title-color;

      .en{
        font-size: 14px;
      }
    }
  }

  .box-login{
    width: 400px;
    margin: 30px auto 0;
    padding: 50px;
    border: 1px solid #036eb8;
    border-radius: 10px;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.1);

    .title{
      color: #036eb8;
    }

    .btn-login{
      background: #8ec31f;
      border-color: #8ec31f;
    }
  }
}
</style>
