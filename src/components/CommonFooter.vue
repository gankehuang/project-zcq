<template>
  <div class="CommonFooter container-main">
    <Row class="box-content">
      <Col span="10" class="content-l">
        <div class="footerInfo">
          <ul class="shortcut">
            <router-link :to="{name:'aboutus', params:{typeid:1}}">
              <li class="item"><a href="javascript:;" style="color: #D8D6DE;font-size: 16px;">关于我们</a></li>
            </router-link>
            <router-link :to="{name:'aboutus', params:{typeid:2}}">
              <li class="item"><a href="javascript:;" style="color: #D8D6DE;font-size: 16px;">联系我们</a></li>
            </router-link>
            <router-link :to="{name:'aboutus', params:{typeid:3}}">
              <li class="item"><a href="javascript:;" style="color: #D8D6DE;font-size: 16px;">法律声明</a></li>
            </router-link>
            <!-- <li class="item"><a href="#">帮助中心</a></li> -->
          </ul>
          <!-- <div class="box-logo">
            <img class="img-logo" width="60" src="/static/img/logo-border.png" />
            <span class="title-unit">京ICP备09089781号-34</span><br/>
          </div>
          <ul class="unit-list">
            <span class="title-unit">承办单位：</span>
            <li class="item">中国农业科学院海外农业研究中心</li>
            <li class="item">中国农业科学院农业信息研究所</li>
          </ul>
          
          <div class="tips">
            <Icon type="alert-circled"></Icon>
            建议您使用IE11版本以上的浏览器
          </div> -->
        </div>
      </Col>
     <!--  <Col span="14" class="content-r">
       <img class="img-wap" src="/static/img/code-wap.jpg" width="108" alt="网站二维码" />
       <a style="float:left; height: 100px;margin-top:30px; color:white" href="http://ciar.caas.cn">
         <img class="img-wx" src="/static/img/ff.png" width="150" alt="微信二维码" style="vertical-align: top" />
         <div style="display: inline-block; text-align: left" >
             <h3>中国农业科学院</h3>
             <h3>海外研究中心</h3>
         </div>
       </a>
       <a style="float:left; height: 100px;color:white;margin-top:30px;">
         <img class="img-wx" src="/static/img/fr.png" width="150" alt="微信二维码" style="vertical-align: top" />
         <div style="display: inline-block; text-align: left">
             <h3>中国农业科学院</h3>
             <h3>海外研究中心</h3>
         </div>
       </a>
       <img class="img-wx" src="/static/img/ewm.png" width="80" height="80" alt="微信二维码" />
       <a href="http://ciar.caas.cn" target="_blank" style="float:right"><img src="/static/img/logo_02.png" alt="" style="width:280px;"></a>
     </Col> -->
    </Row>
  </div>
</template>
  
<script>
export default {
  name: 'CommonFooter'
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';


@media only screen and (max-width: 960px) {
  .CommonFooter{
    display: none;
  }
}

.CommonFooter{
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0px;
  background:url('/static/img/ditu6.png') no-repeat center; 
  background-size: cover;
  height: 200px;

  .content-l{
    .footerInfo{
      display: inline-block;
      width: 100%;
      text-align: left;
      vertical-align: top;
    }
  }

  .shortcut{
    display: flex;
    justify-content: space-between;
    margin-bottom: 150px;
    margin-left: 40px;
    width: 300px;
    .item{
      display: inline-block;
      margin: 0 10px;

      &:first-of-type{
        margin-left: 0;
      }
    }
  }

  .box-logo{
    text-align: left;

    .img-logo{
      display: inline-block;
      vertical-align: middle;
      margin-right: 20px;
    }
  }

  .title-unit{
    /*float: left;*/
    line-height: 60px;
  }

  .unit-list{
    position: relative;
    margin-left: 80px;
    margin-top: 25px;

    .title-unit{
      position: absolute;
      top: 0;
      left: -80px;
      line-height: 1;
    }
  }

  .tips{
    margin-top: 15px;
    color: @text-light-color;
  }

  .box-content{
    display: flex;
    align-items: center;
    width: 100%;
  }

  .content-l{
    padding-right: 10px;
  }

  .content-r{
    display: flex;
    justify-content: space-between;
  }
}
</style>
