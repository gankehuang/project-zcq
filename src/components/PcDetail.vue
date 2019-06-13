<template>
  <div class="PolicyDetail">
    <div class="container-main clearfix">
      
      <Card class="block-l content" id="block-l">
          <!-- 面包屑导航开始 -->
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="/home">首页</Breadcrumb-item>
              <Breadcrumb-item onclick="history.go(-1)"><a>返回上一级</a></Breadcrumb-item>
              <Breadcrumb-item>{{this.$route.params.name}}</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <!-- 面包屑导航结束 -->

          <div class="layout-content" v-if="this.$route.params.typeid == 1">
            <div class="ArticleName" style="text-align:center;">
                禽流感高效疫苗成果获国际转化
            </div>
            <div class="ArticleNews" id="ArticleNews">
                <!-- <div id="countryContent"></div> -->
                <div style="width:90%;font-size:16px;margin:0px auto; margin-top:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;禽流感被卫生专家称为“当今世界人类面临的最严重的健康威胁之一。”我院哈尔滨兽医研究所国家禽流感参考实验室研发的高效疫苗却成为了疫情“克星”，使得曾经被国人谈之色变的禽流感逐渐淡出了关注视野。</div>
                <div style="width:90%;font-size:16px;margin:0px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国农业科学院哈尔滨兽医研究所陈化兰带领团队，实时监测新病毒，评估其对人类和动物健康的风险；探究病毒究竟发生了什么变化，致其现在的生物学特性；为国家对动物流感疫病防控、人流感预警提供科学依据，确保禽流感疫苗的研发和更新。该团队在禽流感基础和应用研究方面成绩出色，相关科研成果先后获得国家科技进步一等奖（2005年）、国家技术发明二等奖（2007年）和国家自然科学二等奖（2013年）。通过建立反向遗传技术等先进技术平台，开展了新型、高效防控疫苗的研究，先后研制成功一系列H5N1亚型反向遗传操作技术灭活疫苗、禽流感-新城疫重组二联活疫苗等多种具有国际先进技术水平的禽流感疫苗，并及时转让技术给农业部指定的高致病性禽流感疫苗定点生产企业投产，不仅应用于我国禽流感防控的生产实际，而且大量出口东南亚及非洲国家。截至2017年底，疫苗已累计超过2200亿份，为H5亚型高致病性禽流感的有效防控发挥了重要作用，创造了巨大的经济和社会效益。</div>
                <div style="width:90%;font-size:16px;margin:0px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了进行兽用生物制品科研成果的国际转化，从中获得相关管理与研发方面的可借鉴经验，2016年，哈兽研下属哈尔滨维科生物技术开发公司与康友制药控股有限公司合作，在印度尼西亚合资建厂，主要生产禽流感疫苗产品，同时生产新城疫疫苗等禽类其他疫苗产品。预计年产能为灭活疫苗30亿羽份，活疫苗50亿羽份。</div>
                <div style="width:90%;font-size:16px;margin:0px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多年来，陈化兰带领的科研团队向印尼、越南、朝鲜、蒙古国等国家和地区提供禽流感防控技术指导，帮助监测、诊断禽流感疫情，得到国际社会的高度认可。禽流感疫苗出口印尼、越南、埃及等国家和地区，有效支持了当地的疫病防控。</div>
            </div>
          </div>

          <div class="layout-content" v-if="this.$route.params.typeid == 2">
            <div class="ArticleName" style="text-align:center;">
                “绿色超级稻”在第三世界
            </div>
            <div class="ArticleNews" id="ArticleNews">
                <!-- <div id="countryContent"></div> -->
                <div style="width:90%;font-size:16px;margin:0px auto; margin-top:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2008年，“为非洲和亚洲资源贫瘠地区培育绿色超级稻”项目得到了比尔和梅琳达·盖茨基金会资助，成为建国以来农业领域最大的国际合作项目。项目的领军人物就是中国农业科学院作物科学研究所“作物基因资源与基因改良国家重大科学工程”首席科学家黎志康先生。</div>
                <div style="width:90%;font-size:16px;margin:0px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2003年，作为中国农业科学院的引进人才，黎志康带着他的科研团队集体回国。他设计的水稻分子育种技术路线自2001年起，是农业部‘948’项目两期10年的核心引进技术。应用这一技术路线，以全球34个国家195份微核心种质为供体，我国水稻分子育种协作网的科研人员培育了中国45个优良常规稻和杂交稻亲本背景下的回交群体数千个和数万份目标性状导入系，建立了我国绿色超级稻分子育种的材料平台。2010年以来，该技术作为国家科技部重大专项‘绿色超级稻’的关键育种技术，育成通过省级以上审定的水稻新品种、杂交稻新组合近百个，累计推广面积9000余万亩。如今，这项技术已成为绿色超级稻走出国门的核心技术支撑。</div>
                <div style="width:90%;font-size:16px;margin:0px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;十年来，黎志康先生带领的项目团队已经在6个亚洲国家和3个非洲目标国家共审定64个绿色超级稻（GSR）品种，其中常规稻42个，杂交稻22个，累积推广面积超过300万公顷。这些GSR新品种比当地主栽品种显著增产。在菲律宾，绿色超级稻已开始大面积推广，当地农民种植GSR品种比非GSR品种每公顷平均增产约一吨，增收200多美元；在孟加拉，GSR品种BRRIdhan69比地方当家品种平均增产30%，农民每公顷增收300多美元。2016年，“为非洲和亚洲资源贫瘠地区培育绿色超级稻”项目进入第三个执行期，进入GSR品种规模化审定和大面积推广阶段，项目三期共计获得比尔·盖茨基金会资助经费四千三百余万美元，来自中国和目标亚非国家的农业科技人员300余人参与了项目的绿色超级稻品种研发和推广工作，成为建国以来科研力量投入最多、国内和国际资助力度最大、历时最长、成效最显著的重大农业国际科技合作项目。</div>
            </div>
          </div>

          <div class="layout-content" v-if="this.$route.params.typeid == 3">
            <div class="ArticleName" style="text-align:center;">
                微生物蛋白质新农药“阿泰灵”走向海外市场
            </div>
            <div class="ArticleNews" id="ArticleNews">
                <!-- <div id="countryContent"></div> -->
                <div style="width:90%;font-size:16px;margin:0px auto; margin-top:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国农业科学院植物保护研究所邱德文带领的研究团队经历十余年，成功研究开发出了诱导植物免疫和提高农作物抗性的微生物蛋白质新农药“阿泰灵”。</div>
                <div style="width:90%;font-size:16px;margin:0px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上市第一年，“阿泰灵”销售额就突破了7000万人民币，2017年销售额突破一亿元人民币。相继荣获“中国农科院科技成果奖”、“中国植物保护学会科学技术奖一等奖”、“中国产学研合作创新成果一等奖”、“植保产品贡献奖”等各种奖项。2016年2月美国爱利思达公司成为“阿泰灵”的海外独家代理机构。2017年8月“阿泰灵”获农业部正式登记，成为我国生物农药市场上一个重要新产品。</div>
            </div>
          </div>

          <div class="layout-content" v-if="this.$route.params.typeid == 4">
            <div class="ArticleName" style="text-align:center;">
                植物保护研究所引领国际生物入侵研究
            </div>
            <div class="ArticleNews" id="ArticleNews">
                <!-- <div id="countryContent"></div> -->
                <div style="width:90%;font-size:16px;margin:0px auto; margin-top:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国是全球遭受外来生物入侵最严重国家之一。入侵物种遍布中国，涉及几乎所有生态系统，每年造成上千亿元的经济损失。在以中国农业科学院植物保护研究所万方浩为代表的植物保护科学家的努力下，逐步建立了完善的学科理论体系，阐明了外来有害生物的入侵机理和成灾机制，构建了外来生物入侵的防控技术与方法管理体系，并在国际合作上发挥了重要作用。</div>
                <div style="width:90%;font-size:16px;margin:0px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2015年，万方浩和以色列共同执行了“中以利用寄生蜂持续防控温室蔬菜烟粉虱的关键技术研发”项目，项目成果“天敌昆虫组合释放技术及增强天敌控害能力的生态调控技术“在我国京津冀露地区推广应用1300多万亩次，降低了温室蔬菜上烟粉虱的发生水平，每亩收益提高60%以上，共减少损失24.6亿元。这些技术目前已被转移至合作方以色列，用于约600公顷的设施蔬菜烟粉虱的生物防治，取得了显著的控制效果。</div>
                <div style="width:90%;font-size:16px;margin:0px auto;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016年，万方浩任中国农业科学院任命为海外农业研究中心植物保护研究室主任，他通过“一带一路”沿线国家政策互通和协同研究的平台，发起建立的“国际入侵生物学大会”和中国植物保护学会学术会议，他起草了《长春宣言》，倡议成立了“一带一路”国际植物保护联盟，提出了“关口外移，源头监控，技术共享、联防联控”的合作原则，并筹划建立了“一带一路”跨区农业有害生物预警大数据平台。他与浙江大学、西北农林科技大学、中国农业科学院深圳基因组研究所以及美国堪萨斯大学、德国联邦库恩研究所、捷克科学院、法国农业科学研究院和澳大利亚默多克大学等国内外单位合作，构建了生物入侵基础研究的分子平台，提出了IAS1000计划，即完成对1000入侵生物种的全基因组测序。由万方浩作为总设计师的 “生物入侵：中国方案”，又称“4E行动”，也向国际社会公布。根据方案设计，将开展1000种外来入侵生物的早期预防预警、800种外来入侵生物早期监测与快速检测、100种外来入侵生物的早期根除与阻截以及100种外来入侵生物的区域减灾与全程控制。这是中国领衔全球生物入侵研究，在国家舞台发出“中国声音”所迈出的一大步。</div>
            </div>
          </div>
      </Card>
    
    </div>
  </div>

  
</template>



<script>
import qrcode from '../../static/lib/jquery.qrcode.min.js'
import FavoriteInfoBox from '@/components/FavoriteInfoBox'
import ShareInfoBox from '@/components/ShareInfoBox'



export default {
  name: 'PcDetail',
  components: {
    FavoriteInfoBox: FavoriteInfoBox,
    ShareInfoBox: ShareInfoBox,
  },
  data: function(){
    return {
      'detail': {},
      'text':"",
      'disclaimer': "",
      'current':false,
      'cataloglist':[],
      // 'active_shareToWX': false,
       'id':this.$route.params.typeid,
      }
  },
  mounted: function(){
    this.getPolicyDetail();
    //this.getSimilar();
    this.getDisclaimer();
  },
  methods: {
    'getPolicyDetail':function() {
        const _this = this;
      // 获取文献详情
      const prommise_getPolicyDetail = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.Policy.GetLiteratureInfoByLiteratureID,
        'data': {
          literatureID: _this.$route.params.articleid
        },
        'f_resolve': function(data){
            console.log('%%%%%%%%%%%%%%%%',data);
            var newData = data;
            newData.Label = JSON.parse(data.Label);
            newData.pCountry = JSON.parse(data.pCountry);
            newData.ImagePath = _this.global.normalResourceUrl(data.ImagePath);
            //newData.product = JSON.parse(data.product);
            //newData.tCountry = JSON.parse(data.tCountry);
            console.log('%%%%%%%%%%%%%%%%',newData)
          _this.detail = newData;

          data.Content = _this.global.normalResourceUrl(data.Content);
          _this.getApiData(data.Content);
          
        }
      });
    },
    'getDisclaimer': function() {
          const _this = this;
          // 获取免责声明
         /* const prommise_getPolicyDetail = _this.global.$post({
            '_this': _this,
            'url': _this.global.API.Policy.getDisclaimer,
            'f_resolve': function(data){
                console.log('%%%%%%%%%%%%%%%%',data);
                _this.disclaimer = data.resultData;
            }
          });*/

          $.ajax({
            'url': _this.global.API.Policy.getDisclaimer,
            'type': 'POST',
            'success': function(data, status){
              console.log(data);
               _this.disclaimer = data.resultData;
            },
              'error': function(err){
              
            }
          });

    },
    'getApiData':function(url) {
      const _this = this;

      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.text = data;
            setTimeout(function(){
              $('#countryContent').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.Content = null;
          }
        },
        'error': function(err){
          _this.text = null;
          _this.detail.Content = null;
        }
      });
    },

    'getSimilar':function () {
      const _this = this;
  
      const prommise_getMessage = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.Policy.GetSimilarLiterature,
        'data': {
          literatureID: _this.$route.params.articleid,
        },

        'f_resolve': function(data){
          _this.cataloglist = data;
          // console.log('@@@@@@@@@@@@@@@@@@@',data);    
        }
      });
    },
    'doPrint': function() {
        if (oper < 10){
          bdhtml=window.document.body.innerHTML; //获取当前页的html代码
          sprnstr="<!--startprint"+oper+"-->"; //设置打印开始区域
          eprnstr="<!--endprint"+oper+"-->"; //设置打印结束区域
          prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+18); //从开始代码向后取html
          prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//从结束代码向前取html
          window.document.body.innerHTML=prnhtml;
          window.print();
          window.document.body.innerHTML=bdhtml;
        } else {
          window.print();
        }
    }

  },

   watch: {
    $route: function(){
      // this.text = '';
      this.getPolicyDetail();
      this.getSimilar(); 
    }
  }
} 
</script>



<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 800px) {
  .container-main{
      width: 100% !important;
  }
  .block-r{
      display: none !important;
  }
}




.infolist{
  .item{
    position: relative;
    width:100%;
    display: inline-block;

    *{
      line-height: 1.2;
      color: @text-color;
    }
    
    .icon{
      margin-right: 5px;
      display: inline-block;
      color: @title-color;
    }
    .title{
      display: inline-block;
      width: 80%;
      font-size: 14px;
    }
    .time{
      display: inline-block;
      position: absolute;
      right: 20px;
      font-size: 12px;
      font-weight: normal;
    }

    .digest{
      font-size:12px!important;
      color: @text-light-color;
    }
  }
}

.fontSize{
    height: 20px;
    list-style: none;
    float: right;
    li{
      float:left;
      padding: 2px 5px;
    }
}

.PolicyDetail{
  height: auto;
  margin-top: 15px;
  overflow: hidden;
  background: #fff;
  border: none;
  display: flex;

  #countryContent{
    *{ font-size: 20pt !important; }
  }


  .block-l{
    /*width: 980px;*/
    flex: 1.5;
    border-right: 1px solid @border-color-base;
    padding:0;
  }

  .block-r{
    flex: 0.5;
    padding: 20px 0; 
  }
  .sidebar{
        position: fixed;
        width:292px;
        top: 310px;

        .catalog{
          padding: 20px 0;
          background: @title-bg;
          text-align: left;
          .title{   
              padding-left: 16px;
              display: inline-block;
              border-bottom: 1px dotted;
              width: 100%;
            }

          .linklist{
            margin-top: 10px;
            color: @title-color;
          
              a{
                color: #000;
              }

            .item{
              display: block;
              padding: 2px 16px;
              cursor: pointer;
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;

              a{
                display: inline-block;
                padding: 2px;
              }
            }         
          }
        }

        .totop{
          position: relative;
          padding: 5px 0;
          text-align: center;
          background: @title-bg-dark;
          cursor: pointer;

          .text{
            margin-left: 5px;
          }
        }
      }
   
  .layout-breadcrumb{
      padding: 10px 30px 0;
  }

  .layout-content{
    position:relative;
    min-height: 200px;
    margin: 10px 20px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    padding: 0;
  }
  .layout-breadcrumb{
    padding:10px 30px;
    background: #eee;
  }
  .ArticleName{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 100%;
    background-color: #fff;
    font-size: 24px;
    font-weight: solid;
    color:#026eb8;
    border: none;
    padding-left: 10px;
  }
  .ArticleNews{
    position: relative;
    padding-bottom: 36px;
    
  }
  #countryContent{
    margin-bottom: 18px;
    
  }
  .ivu-collapse{
    text-align: right;
    padding: 0 10px;
    border: none;
    background-color: #fff;
  }
  .priview{
    width: 100%;
    min-height: 800px;
    overflow-y: auto;
    border: none;
  }
  
    .value{
      /*padding: 8px 4px;*/
      display: inline-block;
      margin-right: 10px;
    }
  
  
  #property{
    display:block;
    padding: 0 8px;
   /* font-size: 16px;*/
    text-align: center;
  }
  .nav{
    float: right;
  }
  .nav>li{
     float: right;
     margin:4px 4px;
     padding: 2px;      
  }
  
  .content{
    position: relative;
    margin: 10px;
    padding:2px;
  }

 

  .smallicon{
    position: absolute;
    bottom: 0;
    right: 20px;
    text-align: center;

   /* &.top{
      top: 8px;
      right: 100px;
      bottom: auto;
    }*/
  }


    .like{
      font-size:20px;
      color:#000;
      padding: 0;
      display: inline-block;
      float: left;
    }

}
</style>