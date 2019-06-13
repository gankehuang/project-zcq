<template>
  <div class="ProductDetail">
  <!-- 面包屑导航开始 -->
      <!-- <div class="layout-breadcrumb">
          <Breadcrumb>
              <Breadcrumb-item href="/home">首页</Breadcrumb-item>
              <Breadcrumb-item href="/product/list">行业与产品</Breadcrumb-item>
              <Breadcrumb-item>{{detail.Name}}</Breadcrumb-item>
          </Breadcrumb>
      </div> -->
    <!-- 面包屑导航结束 -->
      

       <div class="content clearfix">

          <div class="" style="width: 100%; border-bottom: 2px solid #545454; margin-top: 0px;">
              <span class="normal" style="font-size: 26px; font-weight:bold; height:50px; line-height: 50px;">{{detail.Name}}</span>
              <span class="normal" style="font-size: 24px;color: #A7AEB1; height:50px; line-height: 50px;">{{detail.EnglishName}}</span>
              <!-- <Button size="small" style="margin-left: 100px;" @click="toCNKI()">相关文献</Button>
              <router-link :to="{name: 'dataanalysetable', params:{typeid:2, product:detail.Name} }">
                <Button size="small" style="margin-left: 10px;">相关数据</Button>
              </router-link>
              <router-link tag="a" :to="{name:'policynewlistrelatednews', params:{typeid:2, searchTitle: detail.Name }}" >
                  <Button size="small" style="margin-left: 10px;">相关新闻</Button>
              </router-link> -->
              <!-- <Button size="small" style="margin-left: 10px;" @click="modal4 = true">相关新闻</Button> -->

              <!-- <router-link :to="{name:'productdetailen', params:{imageid: productid }}">
                <span style="float:right;">English</span>
              </router-link> -->
              <!-- <span class="normal">动态报告</span> -->
              <a :href="detail.LinkPath?detail.LinkPath:''" v-if="detail.LinkPath==null?false:true" target="_blank"><span class="report">&nbsp;<img src="/static/img/hot_fill.png" class="icon-hot" />产业动态报告</span></a>
              <!-- <Button size="small" style="float:right; margin-right: 50%; margin-top: 20px;" @click="modal5 = true">报告</Button> -->
              <!-- <Button size="small" style="float:right; margin-right: 30%; margin-top: 20px;" @click="modal4 = true">产业竞争力</Button>
              <Button size="small" style="float:right; margin-right: 10px; margin-top: 20px;" @click="modal3 = true">市场状况</Button>
              <Button size="small" style="float:right; margin-right: 10px; margin-top: 20px;" @click="modal2 = true">分布范围</Button> -->
              
          </div>
          
          <div class="" style="width: 100%; margin-top: 0px;">
              <img class="gkImg" :src="imagePath" alt="" style="width: 20%; height: 200px; vertical-align: top">
              <div class="gkCon" style="width: 75%; word-wrap: break-word; word-break: normal; padding: 20px; color: black; display: inline-block; line-height: 28px; font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;{{detail.Introduction}}</div>
          </div>

          <!-- <div class="" style="margin-top: 20px; border: 1px solid #DDDEE1;">
            <Tabs active-key="key1">
          
                <Tab-pane label="基本信息" key="key1">
                  <div class="content" style="padding: 20px;">
                      <div class="image" >
                          <div id="countryContent" class="" v-html="Content" >
                              {{Content}}
                          </div>
                      </div>
                    </div>
                </Tab-pane>
          
                <Tab-pane label="分布范围" key="key2">
                  <div class="content" style="padding: 20px;">
                      <div v-if="detail.DistributionImage[0]" class="image">
                          <div class="content">
                               <img v-for="item in detail.DistributionImage" :src="item" alt="">
                          </div>
                      </div>
                      <div class="image" >
                          <div id="countryContent1" class="" v-html="DistributionContent">
                            {{DistributionContent}}
                          </div>
                      </div>
                    </div>
                </Tab-pane>
          
          
                <Tab-pane label="市场状况" key="key3">
                    <div class="content" style="padding: 20px;">
                      <div v-if="detail.MarketImage[0]" class="image">
                          <div class="content">
                               <img v-for="item in detail.MarketImage" :src="item" alt="">
                          </div>
                      </div>
                      <div class="image" >
                          <div id="countryContent2" class="" v-html="MarketContent">
                             {{MarketContent}}
                          </div>
                      </div>
                    </div>
                </Tab-pane>
          
                <Tab-pane label="产业竞争力" key="key4">
                    <div class="content" style="padding: 20px;">
                      <div v-if="detail.EconomyImage[0]" class="image">
                          <div class="content">
                              <img v-for="item in detail.EconomyImage" :src="item" alt="">
                          </div>
                      </div>
                      <div class="image" >
                          <div id="countryContent3" class="" v-html="EconomyContent">
                             {{EconomyContent}}
                          </div>
                      </div>
                    </div>
                </Tab-pane>
          
                <Tab-pane label="报告" key="key7">
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
          

          <div class="Detail">
             <div class="block-l content" id="block-l" style="width: 100%">

                <!-- 分布范围 -->
                <!-- <Modal v-model="modal2" title="分布范围" width="75%" footer-hide >
                    <div v-if="" class="block profile" data-ref="profile" ref="profile" style="width:100%;height: 600px; overflow-y: auto; ">
                       <div class="content">
                         <div class="content" style="padding: 20px;">
                            <div v-if="detail.DistributionImage[0]" class="image">
                                <div class="content">
                                     <img v-for="item in detail.DistributionImage" :src="item" alt="">
                                </div>
                            </div>
                            <div class="image" >
                                <div id="countryContent1" class="" v-html="DistributionContent">
                                  {{DistributionContent}}
                                </div>
                            </div>
                          </div>
                       </div>
                      </div>
                </Modal> -->
                <!-- 市场状况 -->
                <!-- <Modal v-model="modal3" title="市场状况" width="75%" footer-hide >
                    <div v-if="" class="block position" data-ref="position" ref="position" style="width:100%;height: 600px; overflow-y: auto;">
                       <div v-if="" class="content">
                         <div class="content" style="padding: 20px;">
                            <div v-if="detail.MarketImage[0]" class="image">
                                <div class="content">
                                     <img v-for="item in detail.MarketImage" :src="item" alt="">
                                </div>
                            </div>
                            <div class="image" >
                                <div id="countryContent2" class="" v-html="MarketContent" style="position:relative;z-index:0">
                                  
                                </div>
                            </div>
                          </div>
                       </div>
                      </div>
                </Modal> -->
                <!-- 产业竞争力 -->
                <!-- <Modal v-model="modal4" title="产业竞争力" width="75%" footer-hide >
                    <div v-if="" class="block competitiveness" data-ref="competitiveness" ref="competitiveness" style="width:100%;height: 600px; overflow-y: auto;">
                       <div v-if="" class="content">
                         <div class="content" style="padding: 20px;">
                            <div v-if="detail.EconomyImage[0]" class="image">
                                <div class="content">
                                    <img v-for="item in detail.EconomyImage" :src="item" alt="">
                                </div>
                            </div>
                            <div class="image" >
                                <div id="countryContent3" class="" v-html="EconomyContent">
                                   {{EconomyContent}}
                                </div>
                            </div>
                          </div>
                       </div>
                    </div>
                </Modal> -->
                <!-- 报告 -->
                <!-- <Modal v-model="modal5" title="报告" width="75%" footer-hide >
                    <h3>暂无内容</h3>
                </Modal> -->

                <div v-show="switchOff1" class="block block1 product" data-ref="product" ref="product" style="width: 100%; margin-top: 20px;" :style="{height: height1}">
                
                  <!-- <div class="title section"><Icon type="leaf"></Icon>&nbsp;&nbsp;基本信息<a style="float:right" href="javascript:;" @click="changeHeight(1)">{{More1}}</a></div> -->
                  <div class="title section" style="font-size: 20px"><Icon type="leaf"></Icon>&nbsp;&nbsp;基本信息<a style="float:right" href="javascript:;" @click="changeHeight(1)">{{More1}}</a></div>
                  <div class="content">
                    
                      <div class="content" style="padding:0 20px;">
                        <div class="image" >
                            <div id="countryContent" class="" v-html="JBXX" >
                               
                            </div>
                        </div>
                      </div>
                  
                  </div>
                </div>
                
                <div v-show="switchOff2" class="block block1 profile" data-ref="profile" ref="profile" style="width: 100%; margin-top: 20px;" :style="{height: height2}">
                 <!-- <div class="title section"><Icon type="clipboard"></Icon>&nbsp;&nbsp;分布范围<a style="float:right" href="javascript:;" @click="changeHeight(2)">{{More2}}</a></div> -->
                 <div class="title section" style="font-size: 20px"><Icon type="ios-pulse-strong"></Icon>&nbsp;&nbsp;供需形势<a style="float:right" href="javascript:;" @click="changeHeight(2)">{{More2}}</a></div>
                 <div class="content">
                   <div class="content" style="padding: 0 20px;">
                      <!-- <div v-if="detail.DistributionImage[0]" class="image">
                          <div class="content">
                               <img v-for="item in detail.DistributionImage" :src="item" alt="">
                          </div>
                      </div> -->
                      <div class="image" >
                          <div id="countryContent1" class="" v-html="GXXS">
                            
                          </div>
                      </div>
                    </div>
                 </div>
                </div>
                
                <div v-show="switchOff3" class="block block1 position" data-ref="position" ref="position" style="width: 100%; margin-top: 20px;" :style="{height: height3}">
                 <!-- <div class="title section"><Icon type="earth"></Icon>&nbsp;&nbsp;市场状况<a style="float:right" href="javascript:;" @click="changeHeight(3)">{{More3}}</a></div> -->
                 <div class="title section" style="font-size: 20px"><Icon type="map"></Icon>&nbsp;&nbsp;生产情况<a style="float:right" href="javascript:;" @click="changeHeight(3)">{{More3}}</a></div>
                 <div v-if="" class="content">
                   <div class="content" style="padding: 20px;">
                      <!-- <div v-if="detail.MarketImage[0]" class="image">
                          <div class="content">
                               <img v-for="item in detail.MarketImage" :src="item" alt="">
                          </div>
                      </div> -->
                      <div class="image" >
                          <div id="countryContent2" class="" v-html="SCFB">
                             
                          </div>
                      </div>
                    </div>
                 </div>
                </div>
                
                <div v-show="switchOff4" class="block block1 competitiveness" data-ref="competitiveness" ref="competitiveness" style="width: 100%; margin-top: 20px;" :style="{height: height4}">
                 <!-- <div class="title section"><Icon type="earth"></Icon>&nbsp;&nbsp;产业竞争力<a style="float:right" href="javascript:;" @click="changeHeight(4)">{{More4}}</a></div> -->
                 <div class="title section" style="font-size: 20px"><Icon type="soup-can"></Icon>&nbsp;&nbsp;储存流通<a style="float:right" href="javascript:;" @click="changeHeight(4)">{{More4}}</a></div>
                 <div v-if="" class="content">
                   <div class="content" style="padding: 20px;">
                      <!-- <div v-if="detail.EconomyImage[0]" class="image">
                          <div class="content">
                              <img v-for="item in detail.EconomyImage" :src="item" alt="">
                          </div>
                      </div> -->
                      <div class="image" >
                          <div id="countryContent3" class="" v-html="CCLT">
                             
                          </div>
                      </div>
                    </div>
                 </div>
                </div>
                
                <div v-show="switchOff5" class="block block1 consumptio" data-ref="consumptio" ref="consumptio" style="width: 100%; margin-top: 20px;" :style="{height: height5}">
                 <div class="title section" style="font-size: 20px"><Icon type="social-yen"></Icon>&nbsp;&nbsp;市场状况<a style="float:right" href="javascript:;" @click="changeHeight(5)">{{More5}}</a></div>
                 <div v-if="" class="content">
                   <div class="content" style="padding: 20px;">
                      <!-- <div v-if="detail.EconomyImage[0]" class="image">
                          <div class="content">
                              <img v-for="item in detail.EconomyImage" :src="item" alt="">
                          </div>
                      </div> -->
                      <div class="image" >
                          <div id="countryContent4" class="" v-html="XFGJ">
                             
                          </div>
                      </div>
                    </div>
                 </div>
                </div>
                
                <div v-show="switchOff6" class="block block1 commerce" data-ref="commerce" ref="commerce" style="width: 100%; margin-top: 20px;" :style="{height: height6}">
                 <div class="title section" style="font-size: 20px"><Icon type="android-subway"></Icon>&nbsp;&nbsp;进口贸易<a style="float:right" href="javascript:;" @click="changeHeight(6)">{{More6}}</a></div>
                 <div v-if="" class="content">
                   <div class="content" style="padding: 20px;">
                      <!-- <div v-if="detail.EconomyImage[0]" class="image">
                          <div class="content">
                              <img v-for="item in detail.EconomyImage" :src="item" alt="">
                          </div>
                      </div> -->
                      <div class="image" >
                          <div id="countryContent5" class="" v-html="JKMY">
                           
                          </div>
                      </div>
                    </div>
                 </div>
                </div>
                
                <div v-show="switchOff7" class="block block1 commerce" data-ref="commerce" ref="commerce" style="width: 100%; margin-top: 20px;" :style="{height: height7}">
                 <div class="title section" style="font-size: 20px"><Icon type="android-subway"></Icon>&nbsp;&nbsp;出口贸易<a style="float:right" href="javascript:;" @click="changeHeight(7)">{{More7}}</a></div>
                 <div v-if="" class="content">
                   <div class="content" style="padding: 20px;">
                      <!-- <div v-if="detail.EconomyImage[0]" class="image">
                          <div class="content">
                              <img v-for="item in detail.EconomyImage" :src="item" alt="">
                          </div>
                      </div> -->
                      <div class="image" >
                          <div id="countryContent6" class="" v-html="CKMY">
                             
                          </div>
                      </div>
                    </div>
                 </div>
                </div>

                <div v-show="switchOff8" class="block block1 agriculturalStandard" data-ref="agriculturalStandard" ref="agriculturalStandard" style="width: 100%; margin-top: 20px;" :style="{height: height8}">
                 <div class="title section" style="font-size: 20px"><Icon type="ios-compose"></Icon>&nbsp;&nbsp;农业标准<a style="float:right" href="javascript:;" @click="changeHeight(8)">{{More8}}</a></div>
                 <div v-if="" class="content">
                   <div class="content" style="padding: 20px;">
                      <!-- <div v-if="detail.EconomyImage[0]" class="image">
                          <div class="content">
                              <img v-for="item in detail.EconomyImage" :src="item" alt="">
                          </div>
                      </div> -->
                      <div class="image" >
                          <div id="countryContent7" class="" v-html="NYBZ">
                             
                          </div>
                      </div>
                    </div>
                 </div>
                </div>
                
                <div v-show="switchOff9" class="block block1 agriculturalStandard" data-ref="agriculturalStandard" ref="agriculturalStandard" style="width: 100%; margin-top: 20px;" :style="{height: height9}">
                 <div class="title section" style="font-size: 20px"><Icon type="ios-compose"></Icon>&nbsp;&nbsp;产业竞争力<a style="float:right" href="javascript:;" @click="changeHeight(9)">{{More9}}</a></div>
                 <div v-if="" class="content">
                   <div class="content" style="padding: 20px;">
                      <!-- <div v-if="detail.EconomyImage[0]" class="image">
                          <div class="content">
                              <img v-for="item in detail.EconomyImage" :src="item" alt="">
                          </div>
                      </div> -->
                      <div class="image" >
                          <div id="countryContent8" class="" v-html="KJFZ">
                             
                          </div>
                      </div>
                    </div>
                 </div>
                </div>

             </div>
      
             <!-- <div class="block-r">
               <div class="sidebar">
                 <div class="catalog">
                   <h5 style="font-size: 14px; text-align: center">导航</h5>     
                   <ul class="linklist" id="menu">
                     <li v-for="(item,index) in cataloglist" v-if="item.show" class="item" :id="item.name" :class="{'active':index == num,'nav':index == current}" @click="catalogTo(item.ref);navtab(index)"><a>{{item.name}}</a></li>
                   </ul>   
                 </div>
                 <div class="totop">
                   <Icon type="chevron-up" class="icon"></Icon>
                   <span class="text toTop" @click="catalogTo('top')">回顶部</span>
                 </div>
                 <div class="smallicon clearfix">
                   <ShareInfoBox class="share clearfix" :sharetext="detail.CNLong" :picture="detail.NationalFlag" type= "国家信息"/>
                 </div>
               </div>
             </div> -->
             <div class="block-r">
               <div class="sidebar">
                 <div class="catalog">
                    
                    <Button size="small" type="warning" @click="getSelectData" style="height: 30px">一键生成报告</Button>&nbsp;
                    <Button size="small" type="warning" @click="createChart" style="height: 30px">一键生成图表</Button>
                    
                    <!-- <h5 style="font-size: 14px; text-align: center">导航</h5>   -->   
                    <Tree :data="dataTitle" show-checkbox @on-select-change="sel" ref="tree"></Tree> 
                 </div>
                 <div class="totop">
                   <Icon type="chevron-up" class="icon"></Icon>
                   <span class="text toTop" @click="catalogTo('top')">回顶部</span>
                 </div>
                 <div class="smallicon clearfix">
                   <ShareInfoBox class="share clearfix" :sharetext="detail.CNLong" :picture="detail.NationalFlag" type= "国家信息"/>
                 </div>
               </div>
            </div>

          </div>

          <!-- 相关文献 -->
          <Modal v-model="modal1" title="" width="75%" footer-hide >
              <div v-if="" class="block literature" data-ref="literature" ref="literature" style="width: 100%">
                    <div class="title section" style="font-size: 18px; font-weight: bold; color: #026EB8"><Icon type="document-text"></Icon>&nbsp;&nbsp;主题文献
                        <router-link style="float:right; margin-right: 85%;" :to="{name: 'globalsearch', params: {content: detail.Name, show: 2} }">
                          <div style="color: red; cursor: pointer; font-size: 14px;">[更多>>]</div>
                        </router-link>
                    </div>

                    <div class="content">
                        <ul class="infolist" style="width: 100%;">
                            <div style="height: 500px; overflow: hidden; overflow-y: auto; border: 1px solid lightgray; padding: 5px">
                              <!-- <i-input placeholder="文献检索..." v-model="value" style="width:50%">
                                  <i-button slot="append" icon="ios-search" @click="search()"></i-button>
                              </i-input> -->
                              <ul class="countryinfolist">
                                <li class="item" v-for="item in countryLiterature">
                                  <router-link class="link-text" :key="item.id" :to="{name:'literaturedetailtwo', params:{title: item.file_name, name: item.标题, table_flag: item.table_flag, id: item.id,zrz:item.责任者,xxlyqc:item.信息来源全称, xxlymc:item.信息来源名称,wxjh:item.文献集合, ybkh: item.印本刊号,dzkh:item.电子刊号,dzcbwsh:item.电子出版物书号, year: item.发布年,jq:item.期,ys:item.页数, ztg:item.主题国,gjc:item.关键词,zy: item.摘要,zpyz:item.作品语种,zrzjg:item.责任者机构,unique_code:item.唯一标识 } }">
                                    <h3 class="title1 text-nowrap" style="display:inline-block; float:left;color:#A0B91D;font-size:14px; width:55%">{{ item.标题 }}</h3> 
                                    <span v-if="item.信息来源全称" style="float:right;color:#999999;font-size:12px;margin-left:10px;width:30%">来源平台:[{{item.信息来源名称}}]&nbsp;{{item.信息来源全称}}</span>
                                    <span v-if="item.发布年" style="float:right;color:#999999;font-size:12px;width:10%">发布年:{{item.发布年}}</span>         
                                  </router-link>
                                </li>
                              </ul>
                              <!-- <router-link :to="{name: 'globalsearch', params: {content: detail.NameOfficialEN} }">
                                <div style="width: 90%; color: #87B91D; padding: 2px 5px; margin: 0 auto; cursor: pointer;">搜索更多>></div>
                              </router-link> -->
                            </div>
                        </ul>
                    </div>
                </div>
          </Modal>
          <Modal v-model="modal4" title="相关新闻" width="60%" footer-hide>
              <div class=" block1 product" data-ref="product" style=" height: 600px; overflow-y: auto; padding: 10px;">
                 <div class="content">
                    <ul class="infolist" style="width: 100%; height: 320px; float:right">
                        <div>
                          <ul class="countryinfolist">
                            <li class="item" v-for="item in countryNew">
                              <router-link class="link-text" :key="item.Id" :to="{name:'policydetailwithtype', params:{typeid:1, articleid:item.Id, name:item.Name}}">
                                <h3 class="title1 text-nowrap">{{ item.Name }}</h3>          
                              </router-link>
                            </li>
                          </ul>
                          
                          <div style="width: 90%; color: #87B91D; padding: 2px 5px; cursor: pointer; margin-top: 20px;" @click="getCountryNew(detail.NameOfficialZH, 1000)">更多>></div>
                        </div>
                    </ul>
                 </div>
               </div>
          </Modal>


          <!-- 开始制作PDF提示框 -->
          <Modal v-model="PDFmodal" title="制作PDF" footer-hide>
              
              <Col class="demo-spin-col" span="2" style="margin-top: 10px">
                  <Spin fix>
                      <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                  </Spin>
              </Col>
              <h3 style="margin-left: 20px">正在生成产业报告，请稍后...</h3>
          </Modal>

          <Modal v-model="PDFupload" :title="BGTitle" footer-hide>
              <h2><a :href="PDFUrl" target="_blank">{{PDFname}}</a></h2>
          </Modal>

          
          <!-- <Card class="block-l content">
          <div class="">相关文献</div>
              <ul class="infolist">
                <li class="item" v-for="item in infolist">
                  <router-link class="link-text" :key="item._id" :to="{name:'policydetailwithtype', params:{typeid:type, articleid:item._id}}">
                    
                    <h3 class="title text-nowrap">{{ item.Name }}<span class="time">{{ item.Year }}</span></h3>          
                    <p class="digest text-nowrap">{{ item.ContentText || item.Name }}</p>
                  </router-link>
                </li>
              </ul>
          </Card> -->
            
            <!-- <div class="productImage" v-bind:style="{background:'url('+global.normalResourceUrl(detail.ImagePath)+') no-repeat center',backgroundsize:'cover'}"></div> -->

            <!-- <div class="productmessage">
                <Card class="message-item" v-if="tCountryList.length" >
                    <span class="title">区域：</span>
                    <router-link v-for="item in detail.CountryList" :key="item.countryID" :to="{name:'countrylistwithareaid', params:{areaid:item.areaID}}" class="value">{{item.countryArea}}&nbsp;&nbsp;</router-link>
                </Card> 
                <Card class="message-item" v-if="detail.CountryList.length" >
                    <span class="title">主要生产国家：</span>
                    <router-link v-for="item in detail.CountryList" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.countryID}}" class="value">{{item.countryName}}&nbsp;&nbsp;</router-link>
                </Card>            
                <Card class="message-item" v-if="detail.classify">
                    <span class="title">所属行业：</span>
                    <router-link v-for="item in detail.Classify" :key="item.classifyID" :to="{name:'countrylistwithareaid', params:{areaid:item.areaID}}" class="value">{{item.classifyName}}</router-link>
                </Card>
                <Card class="message-item" v-if="detail.LiteratureList && detail.LiteratureList.length>0">
                    <span class="title">相关报告与文献：</span><br>
                    <router-link v-for="item in detail.LiteratureList" :key="item.literatureID" :to="{name:'policydetail', params:{ articleid:item.literatureID}}" class="value report">《{{item.literatureName}}》-{{item.literatureClassfy}}<br/></router-link>
                </Card>
                <Card class="message-item" v-if="detail.Cycle">
                    <span class="title">出版周期：</span>
                    <b>{{detail.Cycle}}</b>
                </Card>
                <Card class="message-item" v-if="detail.Author">
                    <span class="title">作者：</span>
                    <b>{{detail.Author}}</b>
                </Card>
                <Card class="message-item" v-if="detail.PublishDate">
                    <span class="title">出版时间：</span>
                    <b>{{detail.PublishDate}}</b>
                </Card>
            </div>
            
            <Card class="productImage" v-if="detail.ImagePath" v-bind:style="{background:'url('+global.normalResourceUrl(detail.ImagePath)+') no-repeat center',backgroundsize:'cover'}">
                <span class="title titleImg">产品图片：</span>
            </Card>
            <div class="layout-copy">
                <div class="smallicon clearfix">
                    <ShareInfoBox class="share clearfix" :sharetext="detail.Name" :picture="global.normalResourceUrl(detail.ImagePath)" type="产品信息"/>
                </div>
            </div> -->

        </div>

  </div>
</template>


<script>
import qrcode from '../../static/lib/jquery.qrcode.min.js'
import ShareInfoBox from '@/components/ShareInfoBox'

export default {
  name: 'ProductDetail',
  components: {
    ShareInfoBox: ShareInfoBox,
  },
  data: function(){
    return {
      global: this.global,
      'detail': {},
      'BGTitle': '您好，报告已完成，请点击下载！',
      'imagePath': '',
      'cataloglist': [],
      'current':false,
      'curr': false,
      'num': 0,
      //'active_shareToWX': false,
      'tCountryList':[],
      'Content': '',
      'DistributionContent': '',
      'MarketContent': '',
      'EconomyContent': '',
      'productid': '',

      'value': '',
      'countryLiterature': [],

      'modal1': false,
      'modal2': false,
      'modal3': false,
      'modal4': false,
      'modal5': false,
      'modal6': false,
      'modal7': false,
      'modal8': false,
      'modal9': false,

      'height1': 'auto',
      'height2': 'auto',
      'height3': 'auto',
      'height4': 'auto',
      'height5': 'auto',
      'height6': 'auto',
      'height7': 'auto',
      'height8': 'auto',
      'height9': 'auto',

      'flag1': true,
      'flag2': true,
      'flag3': true,
      'flag4': true,
      'flag5': true,
      'flag6': true,
      'flag7': true,
      'flag8': true,
      'flag9': true,

      'More1': '',
      'More2': '',
      'More3': '',
      'More4': '',
      'More5': '',
      'More6': '',
      'More7': '',
      'More8': '',
      'More9': '',

      'switchOff1': true,
      'switchOff2': false,
      'switchOff3': false,
      'switchOff4': false,
      'switchOff5': false,
      'switchOff6': false,
      'switchOff7': false,
      'switchOff8': false,
      'switchOff9': false,

      'PDFmodal': false,
      'PDFtitle': '您要开始制作PDF吗？',
      'PDFupload': false,
      'PDFname': '',
      'PDFUrl': '',
      'dataTitle': [
          {
              title: '全选（请选择报告内容）',
              expand: true,
              children: [ 
                  { title: '基本信息', Id: 24 },
                  //{ title: '供需形势', Id: 25 },
                  { title: '生产情况', Id: 26 },
                  //{ title: '储存流通', Id: 27 },
                  { title: '市场状况', Id: 28 },
                  //{ title: '进口贸易', Id: 29 },
                  //{ title: '出口贸易', Id: 30 },
                  //{ title: '农业标准', Id: 31 },
                  { title: '产业竞争力', Id: 32 }
              ]
          }
      ],

      'JBXX': '',  //基本信息
      'GXXS': '',
      'SCFB': '',  //生产情况
      'CCLT': '',
      'XFGJ': '',  //市场状况
      'JKMY': '',
      'CKMY': '',
      'NYBZ': '',
      'KJFZ': '',  //产业竞争力

    }
  },
  mounted: function(){
    let _this = this;
    _this.productid = _this.$route.params.imageid
    // 获取产品详情
    const prommise_getProductDetail = _this.global.$post({

      '_this': _this,

      'url': _this.global.API.Product.GetProductInfoByProductID,
      'data': {
        productID: _this.$route.params.imageid
      },
      'f_resolve': function(data){
       
          //_this.detail = data;
          //console.log("******************", data);

          let imagePath = data.ImagePath.split(",");
          imagePath.forEach(function(val, index) {
            imagePath[index] = _this.global.normalResourceUrl(val)
          })

          _this.imagePath = imagePath[0];
          data.ImagePath = imagePath;  //处理代表性图片

          data.Content = _this.global.normalResourceUrl(data.Content);      //基本信息word

          data.DistributionContent = _this.global.normalResourceUrl(data.DistributionContent);  //分布范围
          if(data.DistributionImage) {
              let DistributionImageArr = data.DistributionImage.split(",");
              for(let i=0; i<DistributionImageArr.length; i++) {
                DistributionImageArr[i] = _this.global.normalResourceUrl(DistributionImageArr[i]);
              }
              data.DistributionImage = DistributionImageArr;
          }else {
              data.DistributionImage = [""];
          }
          

          data.MarketContent = _this.global.normalResourceUrl(data.MarketContent);  //市场状况
          if(data.MarketImage) {
              let MarketImageArr = data.MarketImage.split(",");
              for(let i=0; i<MarketImageArr.length; i++) {
                MarketImageArr[i] = _this.global.normalResourceUrl(MarketImageArr[i]);
              }
              data.MarketImage = MarketImageArr;
          }else {
              data.MarketImage = [""];
          }
          


          data.EconomyContent = _this.global.normalResourceUrl(data.EconomyContent);  //市场状况
          if(data.EconomyImage) {
              let EconomyImageArr = data.EconomyImage.split(",");
              for(let i=0; i<EconomyImageArr.length; i++) {
                EconomyImageArr[i] = _this.global.normalResourceUrl(EconomyImageArr[i]);
              }
              data.EconomyImage = EconomyImageArr;
          }else {
              data.EconomyImage = [""];
          }
          

          let reportUrl = JSON.parse(data.report);
          console.log('*************', reportUrl);

          if(reportUrl[0]) {

              if(reportUrl[0]) {
                  //console.log( _this.global.normalResourceUrl(reportUrl[0].path ) );
                  let a = _this.global.normalResourceUrl( reportUrl[0].path )
                  _this.getApiDataCommon( a );
              }
              if(reportUrl[1]) {
                  //console.log( _this.global.normalResourceUrl(reportUrl[1].path ) );
                  let b = _this.global.normalResourceUrl( reportUrl[1].path )
                  _this.getApiDataCommon1( b );
              }
              if(reportUrl[1]) {
                  let c = _this.global.normalResourceUrl( reportUrl[1].path )
                  _this.getApiDataCommon2( c );
              }
              if(reportUrl[3]) {
                  let d = _this.global.normalResourceUrl( reportUrl[3].path )
                  _this.getApiDataCommon3( d );
              }
              if(reportUrl[2]) {
                  let e = _this.global.normalResourceUrl( reportUrl[2].path )
                  _this.getApiDataCommon4( e );
              }
              if(reportUrl[5]) {
                  let f = _this.global.normalResourceUrl( reportUrl[5].path )
                  _this.getApiDataCommon5( f );
              }
              if(reportUrl[6]) {
                  let g = _this.global.normalResourceUrl( reportUrl[6].path )
                  _this.getApiDataCommon6( g );
              }
              if(reportUrl[7]) {
                  let h = _this.global.normalResourceUrl( reportUrl[7].path )
                  _this.getApiDataCommon7( h );
              }
              if(reportUrl[3]) {
                  let i = _this.global.normalResourceUrl( reportUrl[3].path )
                  _this.getApiDataCommon8( i );
              }
          }
          


          /*_this.getApiData(data.Content);
          _this.getApiData1(data.DistributionContent);
          _this.getApiData2(data.MarketContent);
          _this.getApiData3(data.EconomyContent);*/

          _this.getCountryLiterature(data.Name, 20);   //获取相关文献
          _this.getCountryNew(data.Name, 25);  //获取相关新闻

          _this.detail = data;
          //console.log('wwwwwwwwwwww', data);
          //提取区域
          //var areaArr = [];

         /* data.CountryList.forEach(function(val, index){
            if(val.countryArea != ""){
              areaArr.push(val.countryArea)
            }
          })
          console.log(areaArr);
          _this.tCountryList = areaArr;*/
          setTimeout(function(){
            $('.block-l .block').map(function(index, item){
              _this.cataloglist.push({
                'ref': $(item).data('ref'),
                'name': $(item).find('.title').text(),
                'show': true
              });
            });          
          }, 500);

      }

    });
    
  },
  methods: {
    //意见生成图表
    'createChart': function() {
        const _this = this;
        /*if(sessionStorage.getItem('RoleId') == 7 ) {
            _this.$Message.warning('无权访问！');
            return;
        }*/
        if(sessionStorage.getItem('RoleId') == "") {
            _this.$Message.warning('请先登录！');
            return;
        }

        _this.$Modal.confirm({
            title: '制作PDF',
            content: _this.PDFtitle,
            onOk: () => {
                _this.PDFmodal = true;
                
                if( _this.detail.TubiaoPath ) {
                    let a = _this.detail.TubiaoPath;
                    let b = _this.detail.TubiaoPath.split('/');
                    _this.PDFname = b[b.length-1];

                     _this.PDFUrl = _this.global.normalResourceUrl(a); 
                    _this.BGTitle = '您好，图表已完成，请点击下载！'; 
                    //console.log(data.resultData);
                   
                    _this.PDFmodal = false;
                    _this.PDFupload = true;
                }else {
                     _this.PDFUrl = 'javascript:;'
                    _this.PDFname = '暂无图表！';
                    _this.BGTitle = '您好，图表已完成，请点击下载！';
                    _this.PDFmodal = false;
                    _this.PDFupload = true;
                }

            }
        });
    },
    //获取导航树勾选  一键生成报告
    'getSelectData' : function() {
        const _this = this;
        /*if(sessionStorage.getItem('RoleId') == 7 ) {
            _this.$Message.warning('无权访问！');
            return;
        }*/
        if(sessionStorage.getItem('RoleId') == "") {
            _this.$Message.warning('请先登录！');
            return;
        }

        _this.$Modal.confirm({
            title: '制作PDF',
            content: _this.PDFtitle,
            onOk: () => {
                _this.PDFmodal = true;
                let checkId = _this.$refs.tree.getCheckedNodes();
                let a = ''
                for(let i=0; i<checkId.length; i++) {
                  if(checkId[i].Id){
                    a += checkId[i].Id + ','
                  }
                }
                a = a.substring(0,a.length-1);
                console.log(a);
                $.ajax({
                      type: "POST",
                      url: _this.global.API.CountryManageService.ConvertToPDF,
                      data: {
                          reportId: a,  //报告类型id
                          Id:  _this.detail.id,   //国家id
                          type:  2   //类型
                      },
                      dataType: "json",
                      success: function(data){
                          let pdfUrl = data.resultData;
                          if(data.resultData) {
                              let a = data.resultData.split('/');
                              _this.PDFname = a[a.length-1];
                               _this.PDFUrl = _this.global.normalResourceUrl(pdfUrl);  //_this.global.normalResourceUrl(
                              //console.log(data.resultData);
                              _this.BGTitle = '您好，报告已完成，请点击下载！';
                              _this.PDFmodal = false;
                              _this.PDFupload = true;
                          }else {
                              _this.PDFUrl = 'javascript:;'
                              _this.PDFname = '暂无报告！';
                              _this.BGTitle = '您好，报告已完成，请点击下载！';
                              _this.PDFmodal = false;
                              _this.PDFupload = true;
                          }
                         
                      }
                });
            }
        });
    },
    //导航定位
    'sel': function(data) {
        //console.log(data[0].title);
        // $('.block-l .block').map(function(index, item){
        //     let itemName = $(item).find('.title').text();      
        //     itemName=itemName.substring(0,itemName.length-1).replace(/\s*/g,"");
        //     console.log(data[0].title);
        //     if( data[0].title == itemName ) {
        //         $(window).scrollTop(this.offsetTop);
        //     } 
        // }) 
        $(window).scrollTop(0);
        let titleContent = data[0].title;
        this.switchOff1 = false; 
        this.switchOff2 = false; 
        this.switchOff3 = false; 
        this.switchOff4 = false; 
        this.switchOff5 = false; 
        this.switchOff6 = false; 
        this.switchOff7 = false; 
        this.switchOff8 = false; 
        this.switchOff9 = false; 
        if( titleContent == '基本信息' ) {
            this.switchOff1 = true; 
        } else if( titleContent == '供需形势' ){
            this.switchOff2 = true; 
        } else if( titleContent == '生产情况' ){
            this.switchOff3 = true; 
        } else if( titleContent == '储存流通' ){
            this.switchOff4 = true; 
        } else if( titleContent == '市场状况' ){
            this.switchOff5 = true; 
        } else if( titleContent == '进口贸易' ){
            this.switchOff6 = true; 
        } else if( titleContent == '出口贸易' ){
            this.switchOff7 = true; 
        } else if( titleContent == '农业标准' ){
            this.switchOff8 = true; 
        } else if( titleContent == '产业竞争力' ){
            this.switchOff9 = true; 
        }
    }, 
    'search': function() {   //搜索文献
        const _this = this;
        //document/search/fulltext
        const searchLiterature = _this.global.$post({
          '_this': _this,
          'url': _this.global.Domain.api1 +'/document/search/fulltext',  
          'data': {
            keyword: _this.value,
            page_size: 7
          },
          'f_resolve': function(data){
              //console.log('%%%%%%%%%%%%%%%%', data);
              _this.countryLiterature = data;
          }
        });
    },
    'getCountryLiterature': function(name, len) {  
        const _this = this;
        /*const getCountryLiterature = _this.global.$post({
          '_this': _this,
          'url': _this.global.Domain.api1 +'/document/search',
          'data': {
            country: name,
            page_size: len
          },
          'f_resolve': function(data){
              //console.log('#############', data);
              _this.countryLiterature = data;
          }
        });*/
        let keyWordList = [
            {'name': '产品类别', 'type': '', 'keyword': name}, 
        ]
          
        // let fieldList = {"信息来源": "", "作品语种": "", "出版国": ""};
        //console.log(fieldList);

        $.ajax({
              type: "POST",
              url: _this.global.Domain.api1 +'/document/search',
              data: {
                keywordlist: JSON.stringify(keyWordList),
                // fieldlist:  fieldList,   
                index_start:  0,   //开始条数 
                page_size: len,        //获取条数 
              },
              dataType: "json",
              // traditional: true,
              success: function(data){
                console.log(data);
                _this.countryLiterature = data.resultData;
                
              }
        });
    },
    'getCountryNew': function(name, len) {  
        const _this = this;
        $.ajax({
              type: "POST",
              url: _this.global.API.CountryManageService.GetAllLiterature,
              data: {
                draw: 0,
                start: 0,
                length: len,    
                retrievalInfo: JSON.stringify({ "type":"","labelid":"","literatureName":name })
              },
              dataType: "json",
              success: function(data){
                console.log(data.resultData);
                _this.countryNew = JSON.parse(JSON.parse(data.resultData).data);
                
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
    'changeHeight': function(num) {  //改变文章栏目高度
        const _this = this;
        if(num == 1 ) {
          if( _this.flag1 == false ) {
            _this.height1 = 'auto';
            _this.flag1 = true;
            _this.More1 = '▲';
          }else {
            _this.height1 = '50px';
            _this.flag1 = false;
            _this.More1 = '▼';
          }
        }else if(num == 2) {
          if( _this.flag2 == false ) {
            _this.height2 = 'auto';
            _this.flag2 = true;
            _this.More2 = '▲';
          }else {
            _this.height2 = '50px';
            _this.flag2 = false;
            _this.More2 = '▼';
          }
        }else if(num == 3) {
          if( _this.flag3 == false ) {
            _this.height3 = 'auto';
            _this.flag3 = true;
            _this.More3 = '▲';
          }else {
            _this.height3 = '50px';
            _this.flag3 = false;
            _this.More3 = '▼';
          }
        }else if(num == 4) {
          if( _this.flag4 == false ) {
            _this.height4 = 'auto';
            _this.flag4 = true;
            _this.More4 = '▲';
          }else {
            _this.height4 = '50px';
            _this.flag4 = false;
            _this.More4 = '▼';
          }
        }else if(num == 5) {
          if( _this.flag5 == false ) {
            _this.height5 = 'auto';
            _this.flag5 = true;
            _this.More5 = '▲';
          }else {
            _this.height5 = '50px';
            _this.flag5 = false;
            _this.More5 = '▼';
          }
        }else if(num == 6) {
          if( _this.flag6 == false ) {
            _this.height6 = 'auto';
            _this.flag6 = true;
            _this.More6 = '▲';
          }else {
            _this.height6 = '50px';
            _this.flag6 = false;
            _this.More6 = '▼';
          }
        }else if(num == 7) {
          if( _this.flag7 == false ) {
            _this.height7 = 'auto';
            _this.flag7 = true;
            _this.More7 = '▲';
          }else {
            _this.height7 = '50px';
            _this.flag7 = false;
            _this.More7 = '▼';
          }
        }else if(num == 8) {
          if( _this.flag8 == false ) {
            _this.height8 = 'auto';
            _this.flag8 = true;
            _this.More8 = '▲';
          }else {
            _this.height8 = '50px';
            _this.flag8 = false;
            _this.More8 = '▼';
          }
        }else if(num == 9) {
          if( _this.flag9 == false ) {
            _this.height9 = 'auto';
            _this.flag9 = true;
            _this.More9 = '▲';
          }else {
            _this.height9 = '50px';
            _this.flag9 = false;
            _this.More9 = '▼';
          }
        }
    },

    'getApiDataCommon':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.JBXX = data;
            setTimeout(function(){
              $('#countryContent').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{}
        },
        'error': function(err){}
      });
    },
    'getApiDataCommon1':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.GXXS = data;
            setTimeout(function(){
              $('#countryContent1').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{}
        },
        'error': function(err){}
      });
    },
    'getApiDataCommon2':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.SCFB = data;
            setTimeout(function(){
              $('#countryContent2').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{}
        },
        'error': function(err){}
      });
    },
    'getApiDataCommon3':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.CCLT = data;
            setTimeout(function(){
              $('#countryContent3').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{}
        },
        'error': function(err){}
      });
    },
    'getApiDataCommon4':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.XFGJ = data;
            setTimeout(function(){
              $('#countryContent4').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{}
        },
        'error': function(err){}
      });
    },
    'getApiDataCommon5':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.JKMY = data;
            setTimeout(function(){
              $('#countryContent5').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{}
        },
        'error': function(err){}
      });
    },
    'getApiDataCommon6':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.CKMY = data;
            setTimeout(function(){
              $('#countryContent6').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{}
        },
        'error': function(err){}
      });
    },
    'getApiDataCommon7':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.NYBZ = data;
            setTimeout(function(){
              $('#countryContent7').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{}
        },
        'error': function(err){}
      });
    },
    'getApiDataCommon8':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.KJFZ = data;
            setTimeout(function(){
              $('#countryContent8').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{}
        },
        'error': function(err){}
      });
    },


    'getApiData':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.Content = data;
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
          _this.detail.Content = null;
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
            _this.DistributionContent = data;
            setTimeout(function(){
              $('#countryContent1').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.DistributionContent = null;
          }
        },
        'error': function(err){
          _this.detail.DistributionContent = null;
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
            _this.MarketContent = data;
            setTimeout(function(){
              $('#countryContent2').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.MarketContent = null;
          }
        },
        'error': function(err){
          _this.detail.MarketContent = null;
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
            _this.EconomyContent = data;
            setTimeout(function(){
              $('#countryContent3').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.EconomyContent = null;
          }
        },
        'error': function(err){
          _this.detail.EconomyContent = null;
        }
      });
    },
    'toCNKI': function(){
      let data = sessionStorage.getItem('loginBS');
      if(data == null){
          this.$Message.success('请先登录！');
          return;
      } else{
        this.global.toCNKI();
      }
    }
  }
} 
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 800px) {
  .report{
    margin-left: 0 !important;
  }
  .gkImg{ width: 100% !important;}
  .gkCon{ width: 100% !important;}
  .content{
    width: 100% !important;
    img{
      width: 100% !important;
    }
  }
  .infolist{
      width: 100% !important;
  }
}

.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}

.icon-hot{
    display: inline-block;
    margin-right: 5px;
    width: 20px;
    animation: hot-twinkle 1s linear infinite;
}
.report{
    display: flex;
    float:right;
    align-items: center;
    width: 125px;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    color: #0E6FB2;
    background: #F3F3F3;
    border: 1px solid #dddee1;
    padding: 5px 0;
    margin-right: 20px;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #b3b3b3;
}

@keyframes hot-twinkle {
    0%{
        opacity: 1;
    }
    50%{
        opacity: .5;
        transform: scale(.8);
    }
    100%{
        opacity: 1;
    }
}


.ProductDetail{
  
  #countryContent3{
    img{ text-align:center }
  }
  .Detail{
    display: flex;
    border-top: 1px solid @border-color-base;
    margin-top: 0px;
  
    .block1{
      overflow: hidden;
    }

    .content{
        img{
          width: 90%
        }

        .countryinfolist{

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
            .title1{
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
          .link-text{
            display: inline-block;
            padding: 7px 15px;
            width: 100%;

            &:hover{
              text-decoration: none;
              background: @table-td-hover-bg;
            }
          }
        }
    }

    .block-l{
      width: 980px;
      border-right: 1px solid @border-color-base;
    }

    .block{
      .title{
        padding: 5px 30px;
        font-size: 16px;
        /*background: @title-bg;*/
        border-bottom: 2px solid @title-bg;
        color: #026EB8;
        font-weight: bold;
      }
      .titleXG{
        padding: 5px 30px;
        font-size: 16px;
        background: @title-bg;
        color: #87B91D;
        font-weight: bold;
      }
      .content{
          img{
            width: 90%
          }

          .countryinfolist{

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
              .title1{
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
            .link-text{
              display: inline-block;
              padding: 7px 15px;
              width: 100%;

              &:hover{
                text-decoration: none;
                background: @table-td-hover-bg;
              }
            }
          }
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
      z-index: 1000;
      width: 230px;
      bottom: 200px;

      .catalog{
        padding: 20px;
        background: #F3F3F3;

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
            text-align: left;

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

  

  height: auto;
  margin-top: 15px;
  overflow: hidden;
  background: #fff;
  border: none;
   
  .infolist{
    .countryinfolist{
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
        .title1{
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
      .link-text{
        display: inline-block;
        padding: 7px 15px;
        width: 100%;

        &:hover{
          text-decoration: none;
          background: @table-td-hover-bg;
        }
      }
    }
  }
    

    .layout-breadcrumb{
        padding: 10px 30px 0;
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


    .layout-content{
        position:relative;
        min-height: 200px;
        margin: 20px 30px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
      }
    .productImage{
      width: 100%;
      margin-top: 10px; 
      /* border-top: 1px dashed @border-color-base;
      border-bottom: 1px dashed @border-color-base; */
      height: 250px;
      max-height: 300px;
      text-align: left;

      span{
          font-weight: bold;
          width: 160px;
          display: inline-block;
          text-align: right;
      }

    }
    .productmessage{
      margin-top: 20px;
      text-align: center;

      .message-item{
        text-align: left;
        padding: 5px 10px;
        margin-top: 10px;
        
        &.hover{
          background-color: gray;
        }

        span{
          font-weight: bold;
          width: 150px;
          display: inline-block;
          text-align: right;
        }

        .report{
          margin-left: 150px;
          text-align: left;
        }
      }

    }
    .ArticleName{
      height: 40px;
      line-height: 40px;
      width: 100%;
      padding-left: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: solid;
      color: @title-color;
      border: none;
      background-color: #fff;
      /* border-bottom: 1px dashed @border-color-base; */
    }
    .layout-copy{
      text-align: center;
      padding: 10px 0 20px;
      margin-top: 10px;
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
      overflow-y: scroll;
      border: none;
    }
    .ivu-collapse-content-box{
      .title{
        padding: 8px 4px;
      }
    }
    .smallicon{
      margin: 4px 0;
      padding: 0;
    }
    #property{
      display:block;
      padding: 0 8px;
     /* font-size: 16px;*/
      text-align: center;
     }
    
    .nav>li{
       float: right;
       margin:4px 4px;
       padding: 2px;      
    }
    .content{
      position: relative;
      margin: 0;
      padding:0;
    }
    .share{
      position: relative;
      float: right;
      text-align: center;
    }
}
</style>

<style lang="less">
.ProductDetail{
  .catalog{
    .ivu-tree-children{
        padding-left: 0;
        .ivu-icon{
          display: none;
        }
    }
    .ivu-tree-title-selected, .ivu-tree-title-selected:hover {
        background-color: #026EB8;
        color: white;
    }
    .ivu-tree-title{
        font-weight: bold;
    }
  }
  
}
</style>