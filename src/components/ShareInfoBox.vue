<template>
  <div class="ShareInfoBox">
  	<!-- <div class="share">
    	<div class="shareitem clearfix">
      		分享到：
      		<a class="item sina" href="javascript:void(0);" @click="shareToXL()"></a>
      		<a class="item qq" href="javascript:void(0);" @click="shareToQQ('www.baidu.com')"></a>
      		<a class="item wx" href="javascript:void(0);" @mouseover="shareToWX(true)" @mouseout="shareToWX(false)"></a>
      		<div class="shareToWX top" :class="{'active':active_shareToWX}" ></div>
    	</div>
  	</div> -->


    <div id='ss_menu'>
      <div>
        <a class="item qq" href="javascript:void(0);"  @click="shareToQQ('www.baidu.com')"><i class="fa fa-qq"></i></a>
      </div>
      <div>
        <a class="item sina" href="javascript:void(0);"  @click="shareToXL()"><i class="fa fa-weibo" ></i></a>
      </div>
      <div>
        <a class="item wx" href="javascript:void(0);" @mouseover="shareToWX(true)" @mouseout="shareToWX(false)"><i class="fa fa-weixin"></i></a>
        <div class="shareToWX top" :class="{'active':active_shareToWX}" ></div>
      </div>
      <div>
        <a class="item sina" href="javascript:void(0);" @click="shareToRR()"><i class="fa fa-renren"></i></i></a>
      </div>
      <div class='menu'>
        <div class='share' id='ss_toggle' data-rot='180'>
          <div class='circle'></div>
          <div class='bar'></div>
        </div>
      </div>
    </div>


  </div>   
</div>
</template>

<script>
    
export default {
 name: 'ShareInfoBox',
  data: function () {
    return { 
      'active_shareToWX': false,
      'actived':false,
    }
  },
  props: {
    sharetext: String,
    picture: String,
    type: String
  },
  mounted: function(){
    let _this = this;

    // 生成分享到微信二维码
    $('.share .shareToWX').qrcode({
      render: "canvas",
      width: 100,
      height: 100,
      text: window.location.href
    });


    var toggle = $('#ss_toggle');
    var menu = $('#ss_menu');
    var rot;
    $('#ss_toggle').on('click', function (ev) {
        rot = parseInt($(this).data('rot')) - 180;
        menu.css('transform', 'rotate(' + rot + 'deg)');
        menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
        if (rot / 180 % 2 == 0) {
            toggle.parent().addClass('ss_active');
            toggle.addClass('close');
        } else {
            toggle.parent().removeClass('ss_active');
            toggle.removeClass('close');
        }
        $(this).data('rot', rot);
    });  




    menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (rot / 180 % 2 == 0) {
            $('#ss_menu div i').addClass('ss_animate');
        } else {
            $('#ss_menu div i').removeClass('ss_animate');
        }
    }); 


  },
  methods: {
    // 分享到
    'shareToXL': function (url) {
      let title = encodeURIComponent("农业对外合作公共信息服务平台-"+this.type+"-"+this.sharetext);
      // let link = encodeURIComponent(window.location.href);
      let image = encodeURIComponent(this.picture);


      //分享到新浪微博
      var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&content=utf-8&sourceUrl='+url+'&pic='+image;
      window.open(sharesinastring,window.location.href);
      return false;
    },

    'shareToQQ': function (url) {
      let title = encodeURIComponent("农业对外合作公共信息服务平台-"+this.type+"-"+this.sharetext);
      // let link = encodeURIComponent(window.location.href);
      let image = encodeURIComponent(this.picture);
      var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title+'&url='+url+'&pics='+image;
      window.open(shareqqzonestring,window.location.href);
      return false;
    },
    'shareToRR':function (url) {
      let title = encodeURIComponent("农业对外合作公共信息服务平台-"+this.type+"-"+this.sharetext);
      // let link = encodeURIComponent(window.location.href);
      let image = encodeURIComponent(this.picture);
      var sharerenrenstring='http://share.renren.com/share/buttonshare.do?link='+url+'&title='+title+'&pic='+image;
      window.open(sharerenrenstring,window.location.href);
       return false;
    },
    // 分享到微信二维码滑过显示
    'shareToWX': function(status){
      this.active_shareToWX = status;
    }
  }
} 

</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';
@import '../assets/styles/normalize.css';
@import '../assets/styles/animate.min.css';
@import '../assets/styles/styles.css';



.ShareInfoBox{

  /*.shareitem{
        display: inline-block;
        float: left;
      }*/
      .item{
        display: inline-block;
        /*width: 28px;
        height: 28px;*/
        text-decoration: none;
        /*background: url('/static/img/share.png') no-repeat;*/
        vertical-align: middle;
        color: #fff;
        text-align: center;
/*
        &:nth-of-type(n+2){
          margin-left: 5px;
        }*/
      }

      /*.sina{
        background-position: 0 0;
      }

      .qq{
        background-position: -36px 0;
      }

      .wx{
        background-position: -72px 0;
        position: relative;
      }*/

      .shareToWX{
        display: none;
        position: absolute;
        top: 40px;
        right: 10px;
        padding: 8px;
        width: 120px;
        height: 120px;
        background: white;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        z-index: 500;

        &.active{
          display: block;
        }

        &.top{
          top: -130px;
        }
      }  
      
      #ss_menu {
        bottom: 50px;
        width: 46px;
        height: 46px;
        color: #fff;
        position: fixed;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
        right: 30px;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      #ss_menu > div{
        background: @primary-color;
        width:50px;
        height: 50px;
      }
      #ss_menu > .menu {
        display: block;
        position: absolute;
        border-radius: 50%;
        width: 46px;
        height: 46px;
        text-align: center;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
        background: @primary-color;
        color: #fff;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
      }
       #ss_menu > .menu .share {
        width:116%;
        height: 102%;
        position: absolute;
        left: 0px;
        top: 0px;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
        /*background: @primary-color;*/
      }  
      #ss_menu > .menu .share.close .bar{
        left: 55%;
      }           
}
</style>
