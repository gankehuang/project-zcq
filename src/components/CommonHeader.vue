<template>
  <div>
      <div class="CommonHeader container-main">
        <router-link to="/"><img class="logo" src="/static/img/logo.png"></router-link>
        <div class="logo-name">
          农业对外合作公共信息服务平台
          <br><span class="en">Foreign Agriculture Cooperation Public Information Service Platform</span>
        </div>
        <div class="shortcut">
          <span class="username">{{$root.name}}&nbsp;欢迎访问！</span>
          <a href="javascript:;" class="link go-login" @click="login" v-if='!$root.login'>登录</a>
          <a href="javascript:;" class="link go-register" @click="rest">注册</a>
          <a href="javascript:;" class="link go-register" v-if='$root.login' @click="useExit">退出</a>
          <!-- <router-link to="/hello" class="link go-register">注册</router-link> -->
        </div>
        <!-- <div class="search">
          <form>
            <input class="search-key" type="text" placeholder="搜索从这里开始..." v-model.trim = "searchKey"/>
            <router-link class="link-text" :key="searchKey" :to="{name:'searchlist', params:{searchkey:searchKey}}">
                <Button class="search-btn" type="primary" shape="circle" icon="ios-search"></Button>
              <button type="submit"></button>
            </router-link>
          </form>
        </div> -->
      </div>

      <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#21C070;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>登录</span>
        </p>
        <!-- <RadioGroup v-model="loginType">
            <Radio label="1">账号密码登录</Radio>
            <Radio label="2">手机验证码登录</Radio>
        </RadioGroup> -->
        <div style="text-align:center">
            <Input v-model="name" placeholder="请输入用户名..." style="width: 100%; margin-top:20px;" />
            <Input v-model="psd" placeholder="请输入密码..." type="password" style="width: 100%;margin-top:20px;margin-bottom:20px;" />
        </div>
        <!-- <div style="text-align:left" v-show="loginType == 2 ? true : false ">
            <Input v-model="phone" placeholder="请输入手机号码..." style="width: 100%; margin-top:20px;" />
            <Input v-model="verificationCode" placeholder="请输入手机验证码..." style="width: 100%;margin-top:20px;margin-bottom:20px;" />
            <Button size="small" v-bind:disabled="dis" @click="getCode">{{btnText}}</Button>
        </div> -->
        <div slot="footer">
            <Button type="success" size="large" long :loading="modal_loading" @click="login1">登录</Button>
            <!-- <Button type="error" v-show="loginType == 2 ? true : false " size="large" long :loading="modal_loading" @click="login2">登录</Button> -->
        </div>
    </Modal>
      
    <Modal v-model="modal6" width="450">
        <p slot="header" style="color:#21C070;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>注册</span>
        </p>
        <Form ref="formItem" :model="formItem" :label-width="80">
            <FormItem label="用户类别" style="margin-bottom: 0">
                <RadioGroup v-model="formItem.type">
                    <Radio label="7">普通用户</Radio>
                    <Radio label="8">本院用户</Radio>
                    <Radio label="9" disabled>VIP用户</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="用户性质" v-show="formItem.type == '7' ? true : false" style="margin-bottom: 0px">
                <RadioGroup v-model="formItem.NatureType">
                    <Radio label="个人">个人</Radio>
                    <Radio label="政府单位">政府单位</Radio>
                    <Radio label="高校">高校</Radio>
                    <Radio label="研究机构">研究机构</Radio>
                    <Radio label="公司企业">公司企业</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="用户性质" v-show="formItem.type == '9' ? true : false" style="margin-bottom: 0px">
                <RadioGroup v-model="formItem.NatureType" >
                    <Radio label="企业或个人缴费用户">企业或个人缴费用户</Radio>
                    <Radio label="指定政府单位">指定政府单位</Radio>
                    <Radio label="指定特殊用户">指定特殊用户</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="用户性质" v-show="formItem.type == '8' ? true : false" style="margin-bottom: 0px">
                <RadioGroup v-model="formItem.NatureType">
                    <Radio label="中国农科学院用户">中国农科学院用户</Radio>
                </RadioGroup>
            </FormItem>

            <FormItem label="账户名" style="margin-bottom: 10px">
                <Input v-model="formItem.loginName" :placeholder="placeholder" ></Input>
            </FormItem>
            <FormItem label="密码" style="margin-bottom: 10px">
                <Input type="password" v-model="formItem.password" placeholder="请输入密码..." ></Input>
            </FormItem>
            <FormItem label="确认密码" style="margin-bottom: 10px">
                <Input type="password" v-model="formItem.rPassword" placeholder="请输入确认密码..." ></Input>
            </FormItem>
            <FormItem label="手机号码" v-show="formItem.type == '7'? true : false" style="margin-bottom: 10px">
                <Input v-model="formItem.phone" placeholder="请输入手机号码..." ></Input>
            </FormItem>
            <FormItem label="座机号码" v-show="formItem.type == '9'? true : false" style="margin-bottom: 10px">
                <Input v-model="formItem.telephone" placeholder="请输入座机号码..." ></Input>
            </FormItem>

            <FormItem label="电子邮件" v-show="formItem.type !== '8'" style="margin-bottom: 10px">
                <Input v-model="formItem.email" placeholder="请输入电子邮件..." ></Input>
            </FormItem>

            <FormItem label="验证方式" style="margin-bottom: 10px">
                <RadioGroup v-model="verificationMode">
                    <Radio label="1" v-show="formItem.type==8?false:true">手机验证</Radio>
                    <Radio label="2">邮箱验证</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="验证码">
                <div style="text-align:left" v-show="verificationMode == 1 ? true : false ">
                    <Input v-model="verificationCode" placeholder="请输入手机验证码..." style="width: 100%;" />
                    <Button size="small" v-bind:disabled="dis" @click="getCode(1)">{{btnText}}</Button>
                </div>
                <div style="text-align:left" v-show="verificationMode == 2 ? true : false ">
                    <Input v-model="verificationCode" placeholder="请输入邮箱验证码..." style="width: 100%;" />
                    <Button size="small" v-bind:disabled="dis" @click="getCode(2)">{{btnText}}</Button>
                </div>
            </FormItem>
        </Form>
        <div slot="footer">
            <Button type="success" size="large" long :loading="modal_loading" @click="register1">注册</Button>
        </div>
    </Modal>
      
  </div>
</template>

<script>
import secret_AES from '../secret'

export default {
  name: 'CommonHeader',
  data: function () {
    return {
      // username: 'LOS',
      searchKey: '' ,    //input框里输入的内容
      modal2: false,
      name: this.$root.name,
      psd: '',    //密码
      modal6: false,
      modal_loading: false,
      placeholder: '请输入账户名...',

      formItem: {     //注册表单数据
          loginName: '',
          password: '',
          rPassword: '',
          type: '7',
          NatureType: '个人',
          phone: '',
          telephone: '',
          email: '',
      },
      btnText: '点击获取验证码',
      dis: false,   //点击获取验证码按钮可用
      //loginType: '1',
      phone: '',   //手机号码
      verificationCode: '',  //手机验证码
      verificationMode: '1'  //验证方式
    }
  },
  mounted: function(){
    const _this = this;

    let data = sessionStorage.getItem('loginBS');
    console.log(data);
    if(data == "ok"){
      //_this.modal2 = false;
      _this.$root.login = true;
      _this.$root.name = sessionStorage.getItem('name');

     // _this.modal_loading = false;
      //_this.modal2 = false;
    }else if(data == ""){
      _this.$root.login = false;
      _this.$root.name = '';
    }

    
  },
  methods: {
    getCode: function(num) {   //获取验证码
        if(num == 1) {
            const _this = this;
            if(_this.formItem.phone == ''){
                _this.$Message.warning('请输入手机号码！');
                return;
            }else {
                let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                if( !myreg.test(_this.formItem.phone) ) {
                    _this.$Message.warning('手机号码格式不正确！');
                    _this.phone = '';
                    return;
                }
            }
            $.ajax({
              type: "POST",
              url: _this.global.API.UserManageService.CreatePhoneCode,
              data: {
                Phone: _this.formItem.phone
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
        }
            
        
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
    getLoginsHref: function(val){  // console.log(this.global.Domain.api);
      return val == 1 ? this.global.Domain.loginApi + "/index.html" : this.global.Domain.loginApi + "/register.html";
      // return val == 1 ? "http://localhost/admin/index.html" : this.global.Domain.loginApi + "/register.html";
      //return Domain.api + val;
    },
    login1: function() {
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
              sessionStorage.setItem('loginBS', 'ok');   //登录成功设置session
              sessionStorage.setItem('name', _this.name);   //登录成功设置session
              sessionStorage.setItem('RoleId', data.RoleId);   //登录成功设置session
             
              //console.log(data);

              let sid = _this.global.getCookie('SId');
              localStorage.setItem('SId', secret_AES.Encrypt_ECB(sid));
              localStorage.setItem('url_cnki',  data.resultData+'?'+ window.encodeURIComponent('token='+ localStorage.getItem('SId')));

              _this.modal_loading = true;
              
              _this.$root.login = true;
              _this.$root.name = _this.name;

              _this.modal_loading = false;
              _this.modal2 = false;
              _this.psd = '';
              _this.$Message.success('登录成功！');
            }else{
              _this.psd = '';
              _this.$Message.error(data.message);
            }
          }
      });

      /*_this.modal_loading = true;
      setTimeout(() => {
          _this.modal2 = false;
          _this.$root.login = false;

          _this.modal_loading = false;
          _this.modal2 = false;
          _this.$Message.success('登录成功！');
      }, 1000);*/
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
              if(data.success == 1){
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
              }
            }
        });
    },
    useExit: function() {
      const _this = this;
      sessionStorage.setItem('RoleId', '');
      $.ajax({
          type: "POST",
          url: _this.global.API.UserManageService.LogOff,
          dataType: "json",
          success: function(data){
            if(data.success == 1){
                sessionStorage.removeItem('loginBS');
                _this.$root.login = false;
                _this.$root.name = "";
                localStorage.setItem('SId', null);
                _this.global.clearCookie('SId');
                _this.global.clearCookie('ASP.NET_SessionId');
                _this.global.clearCookie('UM_distinctid');
                _this.global.clearCookie('cna');
            }
          }
      });
    },
    register1: function() {  //注册
      const _this = this;
      if( _this.formItem.loginName == ''){
          _this.$Message.warning('请填写账户名！');
          return;
      }else {
          let phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;
          if( _this.formItem.type == 8 ) {
              let filter = /^([a-zA-Z0-9_\.\-])+\@(([caas])+\.)+([cn])+$/;
              if (!filter.test(_this.formItem.loginName) ) {
                  _this.$Message.warning('账户名格式不正确，请用本院邮箱！');
                  return;
              }
          } /*else {
              let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              if (filter.test(_this.formItem.loginName) || phoneReg.test(_this.formItem.loginName)) {
                  
              } else {
                  _this.$Message.warning('账户名请用邮箱或手机号！');
                  return; 
              }
          }*/
          
      }
      if( _this.formItem.password == '' || _this.formItem.rPassword == '' ) {
          _this.$Message.warning('请填写密码或确认密码！');
          return;
      }else if( _this.formItem.password !== _this.formItem.rPassword ){
          _this.$Message.warning('确认密码与密码不一致！');
          _this.formItem.rPassword = '';
          return;
      }
      if( _this.formItem.NatureType == '' ){
          _this.$Message.warning('请选择用户性质！');
          return;
      }
      if( _this.formItem.type != 8 ) {
          if(_this.formItem.email == ''){
              _this.$Message.warning('请输入电子邮箱！');
              return;
          }else {
              let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              if (!filter.test(_this.formItem.email)) {
                  _this.$Message.warning('电子邮箱格式不正确！');
                  return; 
              }
          }
      }
      if( _this.formItem.type == 7 ) {
          if(_this.formItem.phone == ''){
              _this.$Message.warning('请输入手机号码！');
              return;
          }else {
              let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
              if( !myreg.test(_this.formItem.phone) ) {
                  _this.$Message.warning('手机号码格式不正确！');
                  _this.formItem.phone = '';
                  return;
              }
          }
      }
      if( _this.formItem.type == 9 ) {
          if(_this.formItem.telephone == ''){
              _this.$Message.warning('请输入座机号码！');
              return;
          }else {
              let reg =  /^(\d{3,4}-)?\d{6,8}$/;
              if( !reg.test(_this.formItem.telephone) ) {
                  _this.$Message.warning('座机号码格式不正确！');
                  _this.formItem.telephone = '';
                  return;
              }
          }
      }
          
      $.ajax({
          type: "POST",
          url: _this.global.API.UserManageService.RegisterNewUser,
          data: _this.formItem,
          dataType: "json",
          success: function(data){
            if(data.success == 1){
                _this.modal6 = false;
                _this.modal_loading = false;
                _this.modal6 = false;
                _this.$Message.success('注册成功！');
            }else{
              _this.$Message.error(data.message);
            }
          }
      });

    },
    rest: function() {
        const _this = this;
        _this.modal6 = true;
        _this.formItem =  {     //注册表单数据
          loginName: '',
          password: '',
          rPassword: '',
          type: '7',
          NatureType: '',
          phone: '',
          telephone: '',
          email: ''
        };
    },
    login: function() {
        const _this = this;
        _this.modal2 = true;
        _this.name = '';
        _this.psd = '';
        _this.phone = '';
        _this.verificationCode = '';
        _this.loginType = '1';
    }
    
  },
  watch: {
    "formItem.type": function() {
        if(this.formItem.type == 7) {
            this.formItem.NatureType = "个人";
            this.placeholder = '请输入账户名...';
            this.verificationMode = '1';
        }else if(this.formItem.type == 8) {
            this.formItem.NatureType = "中国农科学院用户";
            this.placeholder = '请使用本院邮箱注册账户名...';
            this.verificationMode = '2';
        } else if(this.formItem.type == 9) {
            this.formItem.NatureType = "企业或个人缴费用户";
            this.placeholder = '请输入账户名...';
        }
    },
  }
  
};

</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 960px) {
  .CommonHeader{
     display: none !important;
  }
}

.CommonHeader{
  padding: 10px 0;


.search {
  position: absolute;
  right: 0;
  top: 50px;
}

  .search:after {
    content:""; 
    clear:both; 
    display:table
  }
  .search form {
    position: relative;
    margin: 0 auto;
    width: auto;
    float: right;
  }
  .search input {
    width: 250px;
    height: 38px;
    padding-left: 15px;
    border-radius: 42px;
    border: 1px solid @primary-color;
    background: #F9F0DA;
    outline: none;
    position: relative;
    transition: .3s linear;
  }
  .search input:focus {
    width: 300px;
  }
  .search button {
    width: 42px;
    height: 42px;
    background: none;
    border: none;
    position: absolute;
    top: -2px;
    right: 0;
    outline:none;
    cursor:pointer;
  }
  .search button:before{
    content: "\f002";
    font-family: FontAwesome;
    color:@primary-color;
  }
  .logo, .logo-name{
    vertical-align: middle;
  }

  .logo{
    width: 100px;
  }

  .logo-name{
    display: inline-block;
    margin-left: 10px;
    font-size: 33px;
    font-weight: bold;
    color: @title-color;

    .en{
      font-size: 14px;
      font-weight: bold;
    }
  }

  .shortcut{
    position: absolute;
    right: 0;
    top: 10px;

    .link{
      padding: 0 10px;

      &.go-login{
        border-right: 1px solid @division-color;
      }
    }
  }

  /*.search{
    position: absolute;
    right: 0;
    top: 40px;

    .search-key{
      width: 300px;
    }*/

   /* .search-btn{
      margin-left: 10px;
    }*/
  /*}*/
}

.fix .CommonHeader{
  .logo{
    width: 35px;
  }

  .logo-name{
    font-size: 16px;

    .en{
      font-size: 12px;
    }
  }

  .shortcut{
    line-height: 32px;
  }

  .search{
    top: 10px;
    right: 250px;
  }
}


</style>
