<template>
<div class="CountryDetail">
  <!-- 头部标题 -->
  <div class="" style="width: 100%; border-bottom: 2px solid #545454; margin-top: 30px;">
      <span class="normal" style="font-size: 26px; font-weight:bold; height:50px; line-height: 50px;">{{detail.NameOfficialEN}}</span>
      <img class="NationalFlag1" :src="detail.NationalFlag"/>
      <router-link   :to="{name:'countrydetail', params:{countryid: countryid }}">
        <span style="float:right;"><a href="javascript:;">中文版</a></span>
      </router-link>

      <Button size="small" style="float:right; margin-right: 5%; margin-top: 20px;" @click="modal7 = true">Reports</Button>
      <Button size="small" style="float:right; margin-right: 10px; margin-top: 20px;" @click="modal6 = true">Agriculture and products</Button>
      <Button size="small" style="float:right; margin-right: 10px; margin-top: 20px;" @click="modal5 = true">Cultural Life</Button>
      <Button size="small" style="float:right; margin-right: 10px; margin-top: 20px;" @click="modal4 = true">People</Button>
      <Button size="small" style="float:right; margin-right: 10px; margin-top: 20px;" @click="modal3 = true">Economy</Button>
      <Button size="small" style="float:right; margin-right: 10px; margin-top: 20px;" @click="modal2 = true">Government and society</Button>
      <Button size="small" style="float:right; margin-right: 10px; margin-top: 20px;" @click="modal1 = true">Natural resource</Button>
  </div>

  <!-- 概况 -->
  <div class="" style="width: 100%; margin-top: 20px;">
      <img class="gkImg" :src="detail.RepImage" alt="" style="width: 20%; height: 200px; vertical-align: top">
      <div class="gkCon" style="width: 79%; word-wrap: break-word; word-break: normal; padding: 20px; color: #A073A0; display: inline-block; height: 190px;overflow:hidden;" v-html="JJtext">&nbsp;&nbsp;&nbsp;&nbsp;{{detail.Introduction}}</div>
  </div>

  <!-- <div class="Name">
    <img class="NationalFlag" :src="detail.NationalFlag" />
    <h1 class="normal">{{detail.NameOfficialZH}}</h1>
    <ul class="infolist">
      <li class="item">
        <span class="key">中文名称：</span><span class="value">{{detail.NameOfficialZH}}</span>
      </li>
      <li class="item">
        <span class="key">英文名称：</span><span class="value">{{detail.NameOfficialEN}}</span>
      </li>
    </ul>
  </div> -->

  <!-- <div class="" style="margin-top: 20px; border: 1px solid #DDDEE1;">
    <Tabs active-key="key1">
  
        <Tab-pane label="Natural resource" key="key1">
          <div class="content" style="padding: 20px;">
              <div v-if="detail.NRImage" class="image">
                  <div class="content">
                       <img v-for="item in detail.NRImage" :src="item" alt="">
                  </div>
              </div>
              <div class="image" >
                  <div id="countryContent" class="" v-html="NRtext">
                     {{NRtext}}
                  </div>
              </div>
            </div>
        </Tab-pane>
  
        <Tab-pane label="Government and society" key="key2">
          <div class="content" style="padding: 20px;">
              <div v-if="detail.GSImage" class="image">
                  <div class="content">
                       <img v-for="item in detail.GSImage" :src="item" alt="">
                  </div>
              </div>
              <div class="image" >
                  <div id="countryContent1" class="" v-html="GStext">
                     {{GStext}}
                  </div>
              </div>
            </div>
        </Tab-pane>
  
        <Tab-pane label="Economy" key="key3">
            <div class="content" style="padding: 20px;">
              <div v-if="detail.EImage" class="image">
                  <div class="content">
                       <img v-for="item in detail.EImage" :src="item" alt="">
                  </div>
              </div>
              <div class="image" >
                  <div id="countryContent2" class="" v-html="Etext">
                     {{Etext}}
                  </div>
              </div>
            </div>
        </Tab-pane>
  
        <Tab-pane label="People" key="key4">
            <div class="content" style="padding: 20px;">
              <div v-if="detail.PImage" class="image">
                  <div class="content">
                       <img v-for="item in detail.PImage" :src="item" alt="">
                  </div>
              </div>
              <div class="image" >
                  <div id="countryContent3" class="" v-html="Ptext">
                     {{Ptext}}
                  </div>
              </div>
            </div>
        </Tab-pane>
  
        <Tab-pane label="Cultural Life" key="key5">
            <div class="content" style="padding: 20px;">
              <div v-if="detail.CLImage" class="image">
                  <div class="content">
                       <img v-for="item in detail.CLImage" :src="item" alt="">
                  </div>
              </div>
              <div class="image" >
                  <div id="countryContent4" class="" v-html="CLtext">
                     {{CLtext}}
                  </div>
              </div>
            </div>
        </Tab-pane>  
  
        <Tab-pane label="Agriculture and products" key="key6">
            <div class="content" style="padding: 20px;">
              <div v-if="detail.APImage" class="image">
                  <div class="content">
                       <img v-for="item in detail.APImage" :src="item" alt="">
                  </div>
              </div>
              <div class="image" >
                  <div id="countryContent5" class="" v-html="APtext">
                     {{APtext}}
                  </div>
              </div>
            </div>
        </Tab-pane>
  
        <Tab-pane label="Reports" key="key7">
            <div class="content" style="padding: 20px;">
                <ul class="reportlist">
                  <li class="item">
                    <router-link class="link-text" :key="1" :to="{name:'policydetailwithtype', params:{typeid:1, articleid:1}}">
                      <Icon class="icon" type="arrow-right-a" />
                      <h3 class="title text-nowrap">世界末日到底何时到来，相关砖家正在研究<span class="time">2018-9-5</span></h3>          
                      <p class="digest text-nowrap">根据相关报道，一些砖家认为世界末日将很快到来，忘广大民众且行且珍惜</p>
                    </router-link>
                  </li>
                </ul>
            </div>
        </Tab-pane>
  
    </Tabs>
  </div> -->
  
  <Card class="block-l content" style="margin-top: 10px;">
      <div class="ArticleName" style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #DDDEE1">Related articles
          <router-link style="float:right;display:inline-block;margin-right:83%" :to="{name: 'globalsearch', params: {content: detail.NameOfficialEN, show: 1} }">
            <div style="color: red; cursor: pointer; font-size: 14px;">[更多>>]</div>
          </router-link>
      </div>
      

      <ul class="countryinfolist">
        <li class="item" v-for="item in countryLiterature">
          <router-link class="link-text" :key="item.id" :to="{name:'literaturedetailtwo', params:{title: item.file_name, name: item.标题, flag_base: item.flag_base, flag_content:item.flag_content, id: item.id, status:item.碎片化任务状态, zrz:item.责任者,xxlyqc:item.信息来源全称, xxlymc:item.信息来源名称,wxjh:item.文献集合, ybkh: item.印本刊号,dzkh:item.电子刊号,dzcbwsh:item.电子出版物书号, year: item.发布年,jq:item.期,ys:item.页数, ztg:item.主题国,gjc:item.关键词,zy: item.摘要,zpyz:item.作品语种,zrzjg:item.责任者机构,unique_code:item.唯一标识 } }">
            <h3 class="title1 text-nowrap" style="display:inline-block; float:left;color:#A0B91D;font-size:14px; width:55%">{{ item.标题 }}</h3>
            <span v-if="item.信息来源全称" style="float:right;color:#999999;font-size:12px;margin-left:10px;width:30%">来源平台:[{{item.信息来源名称}}]&nbsp;{{item.信息来源全称}}</span>
            <span v-if="item.发布年" style="float:right;color:#999999;font-size:12px;width:10%">发布年:{{item.发布年}}</span>          
          </router-link>
        </li>
      </ul>
  </Card>
 
  <!-- Natural resource -->
  <Modal v-model="modal1" title="Natural resource" width="75%" footer-hide >
      <div class="content" style="padding: 20px; width:100%; height:600px;overflow-y:auto">
        <div v-if="detail.NRImage" class="image">
            <div class="content">
                 <img v-for="item in detail.NRImage" :src="item" alt="">
            </div>
        </div>
        <div class="image" >
            <div id="countryContent" class="" v-html="NRtext">
               {{NRtext}}
            </div>
        </div>
      </div>
  </Modal>
  <!-- Government and society -->
  <Modal v-model="modal2" title="Government and society" width="75%" footer-hide >
      <div class="content" style="padding: 20px; width:100%; height:600px;overflow-y:auto">
        <div v-if="detail.GSImage" class="image">
            <div class="content">
                 <img v-for="item in detail.GSImage" :src="item" alt="">
            </div>
        </div>
        <div class="image" >
            <div id="countryContent1" class="" v-html="GStext">
               {{GStext}}
            </div>
        </div>
      </div>
  </Modal>
  <!-- Economy -->
  <Modal v-model="modal3" title="Economy" width="75%" footer-hide >
      <div class="content" style="padding: 20px; height:600px;overflow-y:auto">
        <div v-if="detail.EImage" class="image">
            <div class="content">
                 <img v-for="item in detail.EImage" :src="item" alt="">
            </div>
        </div>
        <div class="image" >
            <div id="countryContent2" class="" v-html="Etext">
               {{Etext}}
            </div>
        </div>
      </div>
  </Modal>
  <!-- People -->
  <Modal v-model="modal4" title="People" width="75%" footer-hide >
      <div class="content" style="padding: 20px; height:600px;overflow-y:auto">
        <div v-if="detail.PImage" class="image">
            <div class="content">
                 <img v-for="item in detail.PImage" :src="item" alt="">
            </div>
        </div>
        <div class="image" >
            <div id="countryContent3" class="" v-html="Ptext">
               {{Ptext}}
            </div>
        </div>
      </div>
  </Modal>
  <!-- Cultural Life -->
  <Modal v-model="modal5" title="Cultural Life" width="75%" footer-hide >
      <div class="content" style="padding: 20px; height:600px;overflow-y:auto">
        <div v-if="detail.CLImage" class="image">
            <div class="content">
                 <img v-for="item in detail.CLImage" :src="item" alt="">
            </div>
        </div>
        <div class="image" >
            <div id="countryContent4" class="" v-html="CLtext">
               {{CLtext}}
            </div>
        </div>
      </div>
  </Modal>
  <!-- Agriculture and products -->
  <Modal v-model="modal6" title="Agriculture and products" width="75%" footer-hide >
      <div class="content" style="padding: 20px; height:600px;overflow-y:auto">
          <div v-if="detail.APImage" class="image">
              <div class="content">
                   <img v-for="item in detail.APImage" :src="item" alt="">
              </div>
          </div>
          <div class="image" >
              <div id="countryContent5" class="" v-html="APtext">
                 {{APtext}}
              </div>
          </div>
        </div>
  </Modal>
  <!-- Reports -->
  <Modal v-model="modal7" title="Reports" width="75%" footer-hide >
      <h3>暂无内容</h3>
  </Modal>

   <!-- <div class="block-r">
     <div class="sidebar">
       <div class="catalog">
         <h5 style="font-size: 20px; text-align: center">contents</h5>     
         <ul class="linklist" id="menu">
           <li v-for="(item,index) in cataloglist" v-if="item.show" class="item" :id="item.name" :class="{'active':index == num,'nav':index == current}" @click="catalogTo(item.ref);navtab(index)"><a>{{item.name}}</a></li>
         </ul>   
       </div>
       <div class="totop">
         <Icon type="chevron-up" class="icon"></Icon>
         <span class="text toTop" @click="catalogTo('top')">Top</span>
       </div>
       <div class="smallicon clearfix">
         <ShareInfoBox class="share clearfix" :sharetext="detail.CNLong" :picture="detail.NationalFlag" type= "国家信息"/>
       </div>
     </div>
   </div> -->

</div>

</div>
</template>

<script>
import qrcode from '../../static/lib/jquery.qrcode.min.js'
import ShareInfoBox from '@/components/ShareInfoBox'
import BScroll from 'better-scroll'


export default {
  name: 'CountryDetailEN',
  components: {
   ShareInfoBox: ShareInfoBox,
 },
  data: function(){
    return {
      'global': this.global,
      'detail': {},
      'NRtext':"",  //Natural resource
      'GStext':"",  //Government and society
      'Etext':"",  //Economy
      'Ptext':"",  //People
      'CLtext':"",  //Cultural Life
      'APtext':"",  //Agriculture and products
      'JJtext': "", //简介
      'source':"",
      'current':false,
      'curr': false,
      'cataloglist': [],
      // 'active_shareToWX': false,
       'num': 0,

       'countryid': '',
       'countryLiterature': '',

      'modal1': false,
      'modal2': false,
      'modal3': false,
      'modal4': false,
      'modal5': false,
      'modal6': false,
      'modal7': false,
    }
  },
  mounted: function(){
    const _this = this;

    //this.getApiData(detail.CountryGkWord);
    _this.countryid = _this.$route.params.countryid;
    // 获取国家详情
    const prommise_getCountryDetail = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.CountryManageService.GetCountryENInfo,
      'data': {
        countryID: _this.$route.params.countryid
      },
      'f_resolve': function(data){
        //let data1 = JSON.parse(data.resultData);
        //console.log('#######', data);


        data.NationalFlag = _this.global.normalResourceUrl(data.NationalFlag);  //国旗图片处理
        data.RepImage = _this.global.normalResourceUrl(data.RepImage); 
        data.Introduction = _this.global.normalResourceUrl(data.Introduction);  //简介路径处理
        //Natural resource
        if(data.NRImage) {
            let NRImageArr = data.NRImage.split(",");
            for(let i=0; i<NRImageArr.length; i++) {
                NRImageArr[i] = _this.global.normalResourceUrl(NRImageArr[i]);
            }
            data.NRImage = NRImageArr;
        }
        data.NRWord = _this.global.normalResourceUrl(data.NRWord);
        
        //Government and society
        if(data.GSImage) {
            let GSImageArr = data.GSImage.split(",");
            for(let i=0; i<GSImageArr.length; i++) {
                GSImageArr[i] = _this.global.normalResourceUrl(GSImageArr[i]);
            }
            data.GSImage = GSImageArr;
        }
        data.GSWord = _this.global.normalResourceUrl(data.GSWord);

        //Economy
        if(data.EImage){
            let EImageArr = data.EImage.split(",");
            for(let i=0; i<EImageArr.length; i++) {
                EImageArr[i] = _this.global.normalResourceUrl(EImageArr[i]);
            }
            data.EImage = EImageArr;
        }
        data.EWord = _this.global.normalResourceUrl(data.EWord);

        //People
        if(data.PImage) {
            let PImageArr = data.PImage.split(",");
            for(let i=0; i<PImageArr.length; i++) {
                PImageArr[i] = _this.global.normalResourceUrl(PImageArr[i]);
            }
            data.PImage = PImageArr;
        }
        data.PWord = _this.global.normalResourceUrl(data.PWord);

        //Cultural Life
        if(data.CLImage) {
            let CLImageArr = data.CLImage.split(",");
            for(let i=0; i<CLImageArr.length; i++) {
                CLImageArr[i] = _this.global.normalResourceUrl(CLImageArr[i]);
            }
            data.CLImage = CLImageArr;
        }
        data.CLWord = _this.global.normalResourceUrl(data.CLWord);

        //Agriculture and products
        if(data.APImage) {
            let APImageArr = data.APImage.split(",");
            for(let i=0; i<APImageArr.length; i++) {
                APImageArr[i] = _this.global.normalResourceUrl(APImageArr[i]);
            }
            data.APImage = APImageArr;
        }
        
        data.APWord = _this.global.normalResourceUrl(data.APWord);




        _this.getApiData(data.NRWord);
        _this.getApiData1(data.GSWord);
        _this.getApiData2(data.EWord);
        _this.getApiData3(data.PWord);
        _this.getApiData4(data.CLWord);
        _this.getApiData5(data.APWord);

        _this.detail = data;

        _this.getCountryLiterature(data.NameOfficialEN, 7);   //获取相关文献
        console.log(data);
        _this.getApiData6(data.Introduction);
        // _this.getSituationData(_this.detail.SituationList.content);
        /*if(_this.detail.SituationList && _this.detail.SituationList.length>0){
          _this.detail.SituationList.map(function(item,index){
            _this.getSituationData(_this.global.normalResourceUrl(item.content),'countrySituation_'+item._id,index);
          });
        }*/

        /*setTimeout(function(){
          $('.block-l .block').map(function(index, item){
            _this.cataloglist.push({
              'ref': $(item).data('ref'),
              'name': $(item).find('.title').text(),
              'show': true
            });
          });          
        }, 500);*/
      }
    });

    
  },
  methods: {
    'getCountryLiterature': function(name, len) {  
        const _this = this;
        /*const getCountryLiterature = _this.global.$post({
          '_this': _this,
          'url': 'http://10.200.32.96:8888/document/search',
          'data': {
            country: name,
            page_size: len
          },
          'f_resolve': function(data){
              //console.log('%%%%%%%%%%%%%%%%', data);
              _this.countryLiterature = data;
          }
        });*/

        let keyWordList = [
            {'name': '主题国', 'type': '', 'keyword': name}, 
            {'name': "", 'type': "", 'keyword': ""} 
        ]
          
        let fieldList = {"信息来源": "", "作品语种": "", "出版国": ""};
        //console.log(fieldList);

        $.ajax({
              type: "POST",
              url: _this.global.Domain.api1 +'/document/search',
              data: {
                keywordlist: keyWordList,  
                fieldlist:  fieldList,   
                index_start:  0,   //开始条数 
                page_size: len,        //获取条数 
              },
              dataType: "json",
              success: function(data){
                //console.log(data);
                _this.countryLiterature = data.resultData;
                
              }
        });
    },
    //iframe文献解析
    'getApiData':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.NRtext = data;
            setTimeout(function(){
              $('#countryContent').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.NRWord = null;
          }
        },
        'error': function(err){
          _this.detail.NRWord = null;
        }
      });
    },
    'getApiData1':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            //console.log('@@@@@@@@@@@@@@@@@@@',data);
            _this.GStext = data;
            setTimeout(function(){
              $('#countryContent1').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.GSWord = null;
          }
        },
        'error': function(err){
          _this.detail.GSWord = null;
        }
      });
    },
    'getApiData2':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.Etext = data;
            setTimeout(function(){
              $('#countryContent2').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.EWord = null;
          }
        },
        'error': function(err){
          _this.detail.EWord = null;
        }
      });
    },
    'getApiData3':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.Ptext = data;
            setTimeout(function(){
              $('#countryContent3').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.PWord = null;
          }
        },
        'error': function(err){
          _this.detail.PWord = null;
        }
      });
    },
    'getApiData4':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.CLtext = data;
            setTimeout(function(){
              $('#countryContent4').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.CLWord = null;
          }
        },
        'error': function(err){
          _this.detail.CLWord = null;
        }
      });
    },
    'getApiData5':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.APtext = data;
            setTimeout(function(){
              $('#countryContent5').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.APWord = null;
          }
        },
        'error': function(err){
          _this.detail.APWord = null;
        }
      });
    },
    'getApiData6':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.JJtext = data;
            setTimeout(function(){
              $('#countryContent5').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.JJWord = null;
          }
        },
        'error': function(err){
          _this.detail.JJWord = null;
        }
      });
    },


    'getSituationData':function(url,id,index) {
      const _this = this;

      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.detail.SituationList[index].source = data;
            setTimeout(function(){
              $('#'+id).find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            // _this.detail.SituationList[index].title = null;
            _this.detail.SituationList[index].source = null;
          }
        },
        'error': function(err){
          // _this.detail.SituationList[index].title = null;
          _this.detail.SituationList[index].source = null;
        }
      });
    },
  
    // 点击目录定位到对应项
    'catalogTo': function(ref) {
      if(ref === 'top'){
        $(window).scrollTop(0);
      }
      else if(this.$refs[ref] instanceof Array){
        $(window).scrollTop(this.$refs[ref][0].offsetTop);
      }
      else{
        $(window).scrollTop(this.$refs[ref].offsetTop);
      }
    },
    'navtab':function(index){
       this.num = index;
       this.current= index;
    },
    'tab': function(index) {
        this.num = index;
        this.curr= index;     
    },
  }
} 
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 800px) {
    .block-r{ 
        display: none !important; 
    }
    .NationalFlag{ display: none !important; }
    .Name{ padding: 20px 30px !important; }
    .gkImg{ width: 100% !important;}
    .gkCon{ width: 100% !important;}
    .content{
        img{
          width: 100% !important;
        }
    }
    .infolist{
      display: inline-block;
      width: 100% !important;
      vertical-align: middle;
    }
}


.CountryDetail{
  margin-top: 15px;
  background: white;
 /* .current{
    color:red;
  }
*/

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
        color: #87B91D;
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



  .NationalFlag1{
    height: 30px;
    border: 1px solid #E6E7E9;
  }


  .image{
      width: 100%;
      .title1{
          padding: 5px 30px;
          font-size: 16px;
          font-weight: bold;
      }
      .content{
        width: 100%;
          padding: 20px;
          img{
            width: 100%;
            display: inline-block;
            margin-right: 10px;
          }
      }
  }

  .reportlist{
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
  .link-text{
    display: inline-block;
    padding: 7px 15px;
    width: 100%;

    &:hover{
      text-decoration: none;
      background: @table-td-hover-bg;
    }
  }

  .infolist{
    display: inline-block;

    .item{
      line-height: 28px;
      text-align: left;

      .key{
        display: inline-block;
        width: 200px;
        color: @title-color;
      }

      .value{
        &:nth-of-type(n+3){
          margin-left: 10px;
        }
      }
    }
  }

  .Name{
    position: relative;
    padding: 20px 100px;

    .infolist{
      margin-top: 20px;
    }
  }
  
  

  .NationalFlag{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 80px;
    height: 100%;
    padding: 20px;
  }

  .Detail{
    display: flex;
    border-top: 1px solid @border-color-base;
    margin-top: 20px;

    .block-l{
      width: 980px;
      border-right: 1px solid @border-color-base;
    }

    .block{
      .title{
        padding: 5px 30px;
        font-size: 16px;
        background: @title-bg;
        color: #87B91D;
        font-weight: bold;
      }

      .content{
        padding: 20px 30px;
      }
    }

    .block-r{
      flex: 1;
      padding: 20px; 
    }
    
    .priview{
      width: 100%;
      height: 500px;
      max-height: 800px;
      overflow-y: scroll;
      border: none;
    }


    .product{
      .item{
        display: inline-block;

        &:nth-of-type(n+2){
          margin-left: 15px;
        }
      }
    }

    .position{
      .img{
        display: block;
        width: 100%;
        margin-top: 15px;
      }
    }
   
    .morestation{
      .sixtitle{
        float: left;
        text-align: center;
        cursor: pointer;
        height: 35px;
        position: relative;
        display: inline-block;
        padding:5px 15px;
        margin: 0;
        border:1px solid @border-color-base;
        /*border-radius: 10px;*/
        border-right: none; 
        font-weight: bold; 
      }
      ul li:last-child{
      border-right:1px solid #ddd;
      }
      .nav{
        background: #026eb8;
        a{
          color: #fff;
        }
      }
      .tabCon{
        margin-top: 20px;
      }
    }

    .literature{
      .item{
        display: block;
      }
    }

    .sidebar{
      position: fixed;
      width: 180px;
      bottom: 210px;

      .catalog{
        padding: 20px;
        background: @title-bg;

        .title{
            text-align: center;
          }

        .linklist{
          margin-top: 10px;
          color: @title-color;
          .nav{
            background: #026eb8;
            a{
              color: #fff;
            }
          }

          .item{
            display: block;
            padding: 2px 16px;
            cursor: pointer;
            text-align: center;

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

      .share{
        position: relative;
        /*margin-top: 10px;*/
        text-align: center;
        vertical-align: middle;
        }
    }
  }
} 
</style>