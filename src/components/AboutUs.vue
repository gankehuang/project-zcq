<template>
  <div class="PolicyList">
    <div class="container-main clearfix">
      
      <!-- 面包屑导航开始 -->
      <div class="layout-breadcrumb" style="margin-top: 20px;">
        <Breadcrumb>
          <Breadcrumb-item href="/home">首页</Breadcrumb-item>
          <Breadcrumb-item onclick="history.go(-1)"><a>返回上一级</a></Breadcrumb-item>
          <Breadcrumb-item>{{title}}</Breadcrumb-item>
        </Breadcrumb>
      </div>
      <!-- 面包屑导航结束 -->


        <div v-if="this.$route.params.typeid == 1">
            <h1 style="text-align:center; margin-top: 50px;border-bottom:1px solid #EEEEEE">关于我们</h1>
            <div style="width:70%;font-size:18px;margin:30px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在农业对外合作部际联席会议制度支持下，受农业农村部国际合作司委托，中国农业科学院海外农业研究中心、中国农业科学院农业信息研究所承担建设了农业对外合作公共信息服务平台。平台立足信息所资源优势，充分发挥农业大数据技术支撑功能，面向全社会打造发布快捷、灵活、及时、专业、权威的信息产品，并提供专业战略咨询与信息服务，全面服务于于“一带一路”倡议和农业“走出去”战略。</div>
        </div>

        <div v-if="this.$route.params.typeid == 2">
            <h1 style="text-align:center; margin-top: 50px;border-bottom:1px solid #EEEEEE">联系我们</h1>
            <div style="width:60%;font-size:18px;margin:30px; float:left">
              <p style="margin-left:100px; margin-bottom:10px;"><b>主办单位：</b>010-82105219</p>
              <p style="margin-left:100px; margin-bottom:10px;"><b>地址：</b>北京市海淀区中关村南大街12号中国农业科学院农业信息研究所</p>
              <p style="margin-left:100px; margin-bottom:10px;"><b>邮编：</b>100081</p>
              <p style="margin-left:100px; margin-bottom:10px;"><b>邮箱：</b>facisp@caas.cn </p>
              <p style="margin-left:100px; margin-bottom:10px;"><b>网址：</b>www.facisp.cn</p>
            </div>
            <div style="width:20%;font-size:18px;margin:30px; float:left; text-align: right">
              <p style="margin-left:100px; margin-bottom:10px;"><img src="/static/img/ewm.png" style=" vertical-align: top"></p>
              <p style="margin-left:100px; margin-bottom:10px;"><b style="padding-right: 10px;">微信公众号</b></p>
            </div>
        </div>
        
        <div v-if="this.$route.params.typeid == 3">

            
            <div style="width:90%;font-size:18px;margin:30px auto;">温馨提醒：请您务必阅读本声明。您可以选择不使用“农业对外合作公共信息服务平台”（以下简称本平台），但如果您使用，则视为您认可本声明的全部内容。</div>
            

            <h1 style="text-align:center; margin-top: 50px;border-bottom:1px solid #EEEEEE">版权声明</h1>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 农业对外合作公共信息服务平台为公益性信息服务。除注明权利人或另有法律规定、合同约定外，中国农业科学院农业信息研究所对本平台享有知识产权。</div>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 本平台所涉及的任何资料（包括但不限于文字报导、图片、数据、声音、录像、图表、域名、软件、程序、版面设计、专栏目录与名称、内容分类标准）的版权均属本平台和资料提供者所有。未经书面许可，任何人不得引用、复制、转载、摘编或以其他任何方式非法使用本平台的上述内容。</div>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 已获得本平台书面授权的机构或个人，在引用、复制、转载、摘编、下载使用本网站内容时必须注明“稿件来源：农业对外合作公共信息服务平台”。否则，本平台将依法追究其法律责任。对于非法使用本平台的行为，本平台将保留追究法律责任的权利。</div>

            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本声明相关条款及产生的诉讼适用于中华人民共和国现行法律法规，包括但不限于《著作权法》《反不正当竞争法》《信息网络传播权保护条例》。本平台倡导并尽可能敦促您遵守相关法律和中国农业科学研究所信息研究所相关政策、尊重他人知识产权、合法合理使用本平台。</div>

            <h1 style="text-align:center; margin-top: -10px;border-bottom:1px solid #EEEEEE">免责声明</h1>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 本平台严格按照授权范围提供文献资源服务，但对所提供文献的具体内容不进行审查，中国农业科学院农业信息研究所对因使用（或不能使用）本平台资料而导致的任何直接或间接损失不承担责任。</div>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、您在访问和使用本平台时，须遵守中华人民共和国互联网管理以及著作权法等相关法律法规和相关规定，不得做出任何违背上述规定和损害本平台的行为，否则由用户承担一切后果和责任。</div>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、本平台部分内容转载自第三方媒体，目的在于传递更多信息，不代表本平台观点。您在使用上述内容时必须保留本平台注明的“稿件来源”，并自负法律责任。如擅自篡改为“稿件来源：农业对外合作公共信息服务平台、农业对外合作公共信息服务平台网站、农业对外合作公共信息服务平台各有关单位”，本平台将依法追究责任。</div>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、本平台尊重知识产权和个人隐私，如您认为本平台侵害了您的权利，请您及时通知。为妥善解决您的投诉，请您提供您的姓名、单位、住所地、联系方式、权利凭证、侵权事实，中国农业科学院农业信息研究所将依据您的资料进行处理，必要时将联系您。</div>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、本平台严格按照法律规定的用户隐私保护政策保护您的个人信息。</div>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、 擅自使用本平台名义转载不规范来源的信息、版权不明的资讯，或盗用本平台名义发布信息，本平台将依法追究其法律责任。</div>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7、本平台如因系统维护或升级而需暂停服务时，将事先公告。若因线路及非本网站控制范围外的硬件故障或其它不可抗力而导致暂停服务，对于暂停服务期间造成的一切不便与损失，本平台不负任何责任。</div>
            <div style="width:90%;font-size:18px;margin:10px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本法律声明以及其修改权、更新权及最终解释权均属中国农业科学院农业信息研究所所有。与本平台相关的争议适用中华人民共和国法律，由中国农业科学院农业信息研究所所在地法院管辖。</div>
            
            
        </div>
    </div>  
  </div>
</template>

<script>



export default {
  name: 'AboutUs',
  data: function () {
    return {
       title: '',
    }
  },
  mounted: function () {

     if(this.$route.params.typeid == 1){
        this.title = '关于我们';
     }else if(this.$route.params.typeid == 2){
        this.title = '联系我们';
     }else{
        this.title = '法律声明';
     }
  },
  
   methods: {
    
  },
  watch: {
    //'$route': 'getParams'
  }
}
</script>


<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 800px) {
  .container-main{
      width: 100% !important;
  }
  .search{
      text-align: center !important;
      .searchbox{
          width: 70% !important;
      }
  }
}

.PolicyList{
  height: auto;
  overflow: hidden;
  padding: 6px;

  .fontSize{
    height: 20px;
    list-style: none;
    float: right;
    li{
      float:left;
      padding: 2px 5px;
    }
  }

  .layout-breadcrumb{
    padding:10px 30px;
    background: #eee;
  }
  
  .container{
     font-size: 14px;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      margin-left: 20px;

      .navtext{
        float: left;
        margin-right: 6px;

        &.nav{
          background: @title-color;
          
          a{
            color: #fff;
          }
        }
      }
      a{
        display: inline-block;
        padding: 5px 15px;
      }
  }
  .nav{
    background: #026eb8;
  }
  .search {
      text-align: right;
      margin-right: 20px;
      margin-bottom: 14px;
      height :20px;
      padding: 0;
      }
  .searchbox{
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    padding: 2px 4px;
  }
  .navlist{
    float:left;
    margin: 2px 10px;
  }
  .ivu-input{
    padding: 0px 4px;
    height: auto;
  }
  .containermain{
      width: 100%;
   }
   .ivu-tabs-bar{
    margin-bottom: 0px;
   }
   .ivu-card{
     margin-bottom: 10px;
     vertical-align: middle;
     
   }
    .ivu-card-body{
      padding: 20px 10px;
      vertical-align: middle;
    }

    .ivu-btn-text{
      font-size: 14px;
      color: @title-color;
    }
}
</style>