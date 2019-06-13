<template>
<div class="CountryDetail">
  <!-- 头部标题 -->
  <div class="" style="width: 100%; border-bottom: 2px solid #545454; margin-top: 5px;">
      <img class="NationalFlag1" :src="detail.NationalFlag"/>
      <span class="normal" style="font-size: 26px; font-weight:bold; height:50px; line-height: 50px;">{{detail.NameOfficialZH}}</span>
      <span class="normal" style="font-size: 24px; color: #A7AEB1; margin-left: 15px;">{{detail.NameOfficialEN}}</span>
      <Button size="small" style=" margin-left: 100px;" @click="toCNKI()">相关文献</Button>
      <router-link :to="{name: 'dataanalysetable', params:{typeid:2, country:detail.NameOfficialZH} }">
        <Button size="small" style="margin-left: 10px;">相关数据</Button>
      </router-link>

      <router-link  tag="a" :to="{name:'policynewlistrelatednews', params:{typeid:2, searchTitle: detail.NameOfficialZH }}" >
          <Button size="small" style="margin-left: 10px;">相关新闻</Button>
      </router-link>

      
      <router-link  :to="{name:'countrydetailen', params:{countryid: countryid }}">
        <span style="float:right;margin-top:5px;">English</span>
      </router-link>

      <!-- <Button style="float:right; margin:10px 40% 0px 0" @click="modal1 = true">地理位置</Button>
      <Button style="float:right; margin:10px 10px 0px 0" @click="modal2 = true">国家概况</Button>
      <Button style="float:right; margin:10px 10px 0px 0" @click="modal3 = true">主要农产品</Button> -->
  </div>
  <!-- 概况 -->
  <!-- <div class="" style="width: 100%; margin-top: 20px;">
      <img class="gkImg" :src="detail.RepImage" alt="" style="width: 20%; height: 200px;">
      <div class="gkCon" style="width: 75%; word-wrap: break-word; word-break: normal; padding: 20px; color: #A073A0; display: inline-block; ">&nbsp;&nbsp;&nbsp;&nbsp;{{detail.Brief}}</div>
  </div> -->

 

  
  <!-- <div class="" style="margin-top: 20px; border: 1px solid #DDDEE1;">
    <Tabs active-key="key1">
        <Tab-pane label="基本信息" key="key1">
          <div class="content" style="padding: 20px;">
            <ul class="infolist">
              <li class="item">
                <span class="key">简况：</span><span class="value">{{detail.Brief}}</span>
              </li>
              <li class="item">
                <span class="key">区域：</span><span class="value">{{detail.AreaName}}</span>
              </li>
              <li class="item">
                <span class="key">国家归属跨国区域：</span>
                <router-link v-for="item in detail.AreaList" :key="item.areaID" :to="{name:'countrylistwithareaid', params:{areaid:item.areaID}}" class="value">{{item.areaName}}</router-link>
              </li>
              <li class="item">
                <span class="key">国家归属的洲：</span><span class="value">{{detail.Continent}}</span>
              </li>
              <li class="item">
                <span class="key">首都：</span><span class="value">{{detail.Capital}}</span>
              </li>
              <li class="item">
                <span class="key">国土面积：</span><span class="value">{{detail.LandArea}}</span>
              </li>
              <li class="item">
                <span class="key">人口数量：</span><span class="value">{{detail.Population}}</span>
              </li>
              <li class="item">
                <span class="key">国家元首：</span><span class="value">{{detail.Head}}</span>
              </li>
              <li class="item">
                <span class="key">重要节日：</span><span class="value">{{detail.Festival}}</span>
              </li>
              <li class="item">
                <span class="key">货币：</span><span class="value">{{detail.currency}}</span>
              </li>
              <li class="item">
                <span class="key">主要宗教：</span><span class="value">{{detail.Religion}}</span>
              </li>
              <li class="item">
                <span class="key">官方语言：</span><span class="value">{{detail.Language}}</span>
              </li>
              <li class="item">
                <span class="key">国家代码：</span><span class="value">{{detail.CountryCode}}</span>
              </li>
              <li class="item">
                <span class="key">道路通行：</span><span class="value">{{detail.Traffic==1? "靠左驾驶" : "靠右驾驶"}}</span>
              </li>
  
            </ul>
          </div>
  
        </Tab-pane>
        <Tab-pane label="主要农产品" key="key2">
        
          <div class="image" data-ref="baseinfo" ref="baseinfo">
             <div class="title">图片</div>
             <div class="content">
                  <img v-for="item in detail.ProductsImages" :src="item" alt="">
             </div>
          </div>
  
          <div class="image" data-ref="baseinfo" ref="baseinfo">
             <div class="title">内容</div>
             <div id="countryContent" class="content" v-html="text">
                {{text}}
             </div>
          </div>
  
        </Tab-pane>
  
  
        <Tab-pane label="国家概况" key="key3">
            <div class="image" data-ref="baseinfo" ref="baseinfo">
               <div class="title">图片</div>
               <div class="content">
                 <img v-for="item1 in detail.CountryGkImages" :src="item1" alt="">
               </div>
            </div>
            
            <div class="image" data-ref="baseinfo" ref="baseinfo">
               <div class="title">内容</div>
               <div id="countryContent1" class="content" v-html="GKtext">
                  {{GKtext}}
               </div>
            </div>
        </Tab-pane>
  
  
        <Tab-pane label="地理位置" key="key4">
            <div class="image" data-ref="baseinfo" ref="baseinfo">
               <div class="title">图片</div>
               <div class="content">
                 <img v-for="item2 in detail.GeographyImage" :src="item2" alt="">
               </div>
            </div>
  
            <div class="image" data-ref="baseinfo" ref="baseinfo">
               <div class="title">内容</div>
               <div id="countryContent2" class="content" v-html="WZtext">
                  {{WZtext}}
               </div>
            </div>
        </Tab-pane>
    </Tabs>
  </div> -->
  

  <div class="Detail">
   <div class="block-l content" id="block-l" style="width: 100%;">

    <div class="block block1" style="width: 100%;">
        <div style="width: 100%; display: inline-block">
            <div class="content" style="background: #9FCBEF; height: 300px;">
                <ul class="infolist" style="width: 55%; padding-top: 40px; padding-left: 25px;">
                  <li class="item">
                    <span class="key" style="font-weight: bold;">基本信息</span>
                  </li>
                  <!-- <li class="item">
                    <span class="key">简况：</span><span class="value" style="color: white">{{detail.Brief}}</span>
                  </li> -->
                  <li class="item" style="margin-top: 10px">
                    <span class="key">国家归属的洲：</span><span class="value" style="color: white">{{detail.Continent}}</span>
                  </li>
                  <li class="item">
                    <span class="key">首都：</span><span class="value" style="color: white">{{detail.Capital}}</span>
                  </li>
                  <li class="item">
                    <span class="key">货币：</span><span class="value" style="color: white">{{detail.currency}}</span>
                  </li>
                  <li class="item">
                    <span class="key">人口数量：</span><span class="value" style="color: white">{{detail.Population}}</span>
                  </li>
                  <!-- <li class="item">
                    <span class="key">国家代码：</span><span class="value" style="color: white">{{detail.CountryCode}}</span>
                  </li> -->
                  <li class="item">
                    <span class="key">主要宗教：</span><span class="value" style="color: white">{{detail.Religion}}</span>
                  </li>
                  <li class="item">
                    <span class="key">官方语言：</span><span class="value" style="color: white">{{detail.Language}}</span>
                  </li>
                  <!-- <li class="item">
                    <span class="key">道路通行：</span><span class="value" style="color: white">{{detail.Traffic==1? "靠左驾驶" : "靠右驾驶"}}</span>
                  </li> -->
                  <li class="item">
                    <span class="key">国土面积：</span><span class="value" style="color: white">{{detail.LandArea}}</span>
                  </li>
                  <!-- <li class="item">
                    <span class="key">国家元首：</span><span class="value" style="color: white">{{detail.Head}}</span>
                  </li> -->
                  <li class="item">
                    <span class="key" style="vertical-align: top;">重要节日：</span><span class="value" style="display: inline-block; width: 75%; color: white">{{detail.Festival}}</span>
                  </li>
                </ul>
                
                <img :src="detail.GeographyImage[0]" style="float:right; height:300px; width: 45%">
            </div>
        </div>
    </div>

    <!-- 横向基本信息 -->
     <!-- <div class="block block1 baseinfo" data-ref="baseinfo" ref="baseinfo" style="width: 100%;">
        <div style="width: 100%; display: inline-block">
            <div class="title section"><Icon type="document-text"></Icon>&nbsp;&nbsp;基本信息
            <Button size="small" style="float:right; margin-right: 70%;" @click="modal1 = true">地理位置</Button>
            <Button size="small" style="float:right; margin-right: 10px;" @click="modal2 = true">国家概况</Button>
            </div>
            
            <div class="content">
                <ul class="infolist" style="width: 25%;">
                  <li class="item">
                    <span class="key">简况：</span><span class="value">{{detail.Brief}}</span>
                  </li>
                  <li class="item">
                    <span class="key">国家归属的洲：</span><span class="value">{{detail.Continent}}</span>
                  </li>
                  <li class="item">
                    <span class="key">首都：</span><span class="value">{{detail.Capital}}</span>
                  </li>
                  <li class="item">
                    <span class="key">货币：</span><span class="value">{{detail.currency}}</span>
                  </li>
                </ul>
                <ul class="infolist" style="width: 25%;">
                    <li class="item">
                      <span class="key">人口数量：</span><span class="value">{{detail.Population}}</span>
                    </li>
                    <li class="item">
                      <span class="key">国家代码：</span><span class="value">{{detail.CountryCode}}</span>
                    </li>
                    
                </ul>
                <ul class="infolist" style="width: 25%;">
                    <li class="item">
                      <span class="key">主要宗教：</span><span class="value">{{detail.Religion}}</span>
                    </li>
                    <li class="item">
                      <span class="key">官方语言：</span><span class="value">{{detail.Language}}</span>
                    </li>
                    
                    
                </ul>
                <ul class="infolist" style="width: 25%;">
                    <li class="item">
                      <span class="key">道路通行：</span><span class="value">{{detail.Traffic==1? "靠左驾驶" : "靠右驾驶"}}</span>
                    </li>
                    <li class="item">
                      <span class="key">国土面积：</span><span class="value">{{detail.LandArea}}</span>
                    </li>
     
                </ul>
                <ul class="infolist" style="width: 70%;">
                    <li class="item">
                      <span class="key">国家元首：</span><span class="value">{{detail.Head}}</span>
                    </li>
                </ul>
                <ul class="infolist" style="width: 100%;">
                    <li class="item">
                      <span class="key" style="vertical-align: top;">重要节日：</span><span class="value" style="display: inline-block;">{{detail.Festival}}</span>
                    </li>
                </ul>
            </div>
        </div>
     </div> -->

     <!-- <div class="block baseinfo" data-ref="baseinfo" ref="baseinfo" style="width: 100%; margin-top: 10px;">
        <div style="width: 100%; display: inline-block">
             <div class="titleXG section"><Icon type="document-text"></Icon>&nbsp;&nbsp;主题文献
              <router-link style="float:right; margin-right: 85%;" :to="{name: 'globalsearch', params: {show: 1, content: detail.NameOfficialEN} }">
                <div style="color: red; cursor: pointer; font-size: 14px;">[更多>>]</div>
              </router-link>
            </div>
            <div class="" >
                <ul class="infolist" style="width: 100%;">
                    <Card>
                      <i-input placeholder="文献检索..." v-model="value" style="width: 50%;">
                          <i-button slot="append" icon="ios-search" @click="search()"></i-button>
                      </i-input>
                      <ul class="countryinfolist">
                        <li class="item" v-for="item in countryLiterature">
                          <router-link class="link-text" :key="item.id" :to="{name:'literaturedetailtwo', params:{title: item.file_name, name: item.标题, flag_base: item.flag_base, flag_content:item.flag_content, id: item.id, status:item.碎片化任务状态, zrz:item.责任者,xxlyqc:item.信息来源全称, xxlymc:item.信息来源名称,wxjh:item.文献集合, ybkh: item.印本刊号,dzkh:item.电子刊号,dzcbwsh:item.电子出版物书号, year: item.发布年,jq:item.期,ys:item.页数, ztg:item.主题国,gjc:item.关键词,zy: item.摘要,zpyz:item.作品语种,zrzjg:item.责任者机构,unique_code:item.唯一标识 } }">
                            <span style="display:inline-block; float:left;color:#A0B91D;font-size:14px; width:55%">{{ item.标题 }}</span>
                            <span v-if="item.信息来源全称" style="float:right;color:#999999;font-size:12px;margin-left:10px;width:30%">来源平台:[{{item.信息来源名称}}]&nbsp;{{item.信息来源全称}}</span>
                            <span v-if="item.发布年" style="float:right;color:#999999;font-size:12px;width:10%">发布年:{{item.发布年}}</span>  
                                    
                          </router-link>
                        </li>
                      </ul>
                      <router-link :to="{name: 'globalsearch', params: {content: detail.NameOfficialEN} }">
                        <div style="width: 90%; color: #87B91D; padding: 2px 5px; margin: 0 auto; cursor: pointer;">搜索更多>></div>
                      </router-link>
                    </Card>
                </ul>
            </div>
        </div>
     </div> -->
  
    <!-- 地理位置 -->
    <!-- <Modal v-model="modal1" title="地理位置" @on-ok="ok" @on-cancel="cancel" width="75%" footer-hide >
        <div v-if="detail.Geography || detail.GeographyImage" class="block block1 position" data-ref="position" ref="position" style=" height: 600px; overflow-y: auto; padding: 10px;">
           <div class="title section"><Icon type="earth"></Icon>&nbsp;&nbsp;地理位置</div>
           <div v-if="detail.Geography" class="content">
             {{detail.Geography}}
             <img class="img" v-if="detail.GeographyImage" :src="detail.GeographyImage" />
             <div v-if="detail.GeographyImage[0]" class="image" data-ref="baseinfo" ref="baseinfo">
                   
                   <div class="content">
                     <img v-for="item2 in detail.GeographyImage" :src="item2" alt="" style="width: 70%;">
                   </div>
                </div>
           
                <div class="image" data-ref="baseinfo" ref="baseinfo">
                   
                   <div id="countryContent2" class="" v-html="WZtext"> 
                      
                   </div>
                </div>
           </div>
         </div>
    </Modal> -->
    <!-- 国家概况 -->
    <!-- <Modal v-model="modal2" title="国家概况" @on-ok="ok" @on-cancel="cancel" width="75%" footer-hide >
        <div class="block block1 profile" data-ref="profile" ref="profile" style=" height: 600px; overflow-y: auto; padding: 10px;">
           <div class="content">
             <div v-if="detail.CountryGkImages[0]" class="image" data-ref="baseinfo" ref="baseinfo">
                   
                   <div class="content">
                     <img v-for="item1 in detail.CountryGkImages" :src="item1" alt="" style="width: 100%">
                   </div>
                </div>
                
                <div class="image" data-ref="baseinfo" ref="baseinfo">
                   
                   <div id="countryContent1" class="" v-html="GKtext">
                      
                   </div>
                </div>
           </div>
         </div>
    </Modal> -->
    <!-- 主要农产品 -->
    <Modal v-model="modal3" title="相关文献" width="60%" footer-hide>
        <div class=" block1 product" data-ref="product" style=" height: 600px; overflow-y: auto; padding: 10px;">
           <div class="content">
              <ul class="infolist" style="width: 100%; height: 320px; float:right">
                  <Card>
                    <i-input placeholder="文献检索..." v-model="value">
                        <i-button slot="append" icon="ios-search" @click="search()"></i-button>
                    </i-input>
                    <ul class="countryinfolist">
                      <li class="item" v-for="item in countryLiterature">
                        <router-link class="link-text" :key="item.id" :to="{name:'literaturedetail', params:{title: item.file_name, name: item.标题}}">
                          <h3 class="title1 text-nowrap">{{ item.标题 }}</h3>          
                        </router-link>
                      </li>
                    </ul>
                    <router-link :to="{name: 'globalsearch', params: {content: detail.NameOfficialEN} }">
                      <div style="width: 90%; color: #87B91D; padding: 2px 5px; margin: 0 auto; cursor: pointer;">搜索更多>></div>
                    </router-link>
                  </Card>
              </ul>
           </div>
         </div>
    </Modal>
    <!-- <Modal v-model="modal4" title="相关新闻" @on-ok="ok" @on-cancel="cancel" width="60%" footer-hide>
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
    </Modal> -->
    <!-- <div class="block baseinfo" data-ref="baseinfo" ref="baseinfo" style="width: 50%; float:left">
       <div class="title section"><Icon type="document-text"></Icon>&nbsp;&nbsp;相关文献</div>
       <div class="content">
          <ul class="infolist" style="width: 100%; height: 320px; float:right">
              <Card>
                <i-input placeholder="文献检索..." v-model="value">
                    <i-button slot="append" icon="ios-search" @click="search()"></i-button>
                </i-input>
                <ul class="countryinfolist">
                  <li class="item" v-for="item in countryLiterature">
                    <router-link class="link-text" :key="item.id" :to="{name:'literaturedetail', params:{title: item.file_name, name: item.标题}}">
                      <h3 class="title1 text-nowrap">{{ item.标题 }}</h3>          
                    </router-link>
                  </li>
                </ul>
                <router-link :to="{name: 'globalsearch', params: {content: detail.NameOfficialEN} }">
                  <div style="width: 90%; color: #87B91D; padding: 2px 5px; margin: 0 auto; cursor: pointer;">搜索更多>></div>
                </router-link>
              </Card>
          </ul>
       </div>
     </div> -->
    
    <div v-show="switchOff1" class="block block1 product" data-ref="product" ref="product" style="width: 100%; margin-top: 20px;" :style="{height: height1}">
       <!-- <div class="title section"><Icon type="leaf"></Icon>&nbsp;&nbsp;主要农产品<a style="float:right" href="javascript:;" @click="changeHeight(1)">{{More1}}</a></div> -->
       <div class="title section" style="font-size: 20px"><Icon type="social-euro"></Icon>&nbsp;&nbsp;政治经济<a style="float:right" href="javascript:;" @click="changeHeight(1)">{{More1}}</a></div>
       <div class="content">
         <router-link class="item" v-for="item in detail.ProductList" :key="item.productID" :to="{name:'productdetail', params:{imageid:item.productID}}">{{item.productName}}</router-link>
     
          <!-- <div v-if="detail.ProductsImages[0]" class="image" data-ref="baseinfo" >
             <div class="content">
                  <img v-for="item in detail.ProductsImages" :src="item" alt="">
             </div>
          </div> -->
          <div class="image" data-ref="baseinfo" >
             
             <div id="countryContent" class="" v-html="ZZJJ">
                
             </div>
          </div>
       </div>
     </div>
     
     <div v-show="switchOff2" class="block block1 profile" data-ref="profile" ref="profile" style="width: 100%; margin-top: 20px;" :style="{height: height2}">
       <!-- <div class="title section"><Icon type="clipboard"></Icon>&nbsp;&nbsp;国家概况<a style="float:right" href="javascript:;" @click="changeHeight(2)">{{More2}}</a></div> -->
       <div class="title section" style="font-size: 20px"><Icon type="earth"></Icon>&nbsp;&nbsp;文化生活<a style="float:right" href="javascript:;" @click="changeHeight(2)">{{More2}}</a></div>
       <div class="content">
          <!-- <div v-if="detail.CountryGkImages[0]" class="image" data-ref="baseinfo">
            <div class="content">
              <img v-for="item1 in detail.CountryGkImages" :src="item1" alt="" style="width: 100%">
            </div>
          </div> -->
          <div class="image" data-ref="baseinfo" >
            <div id="countryContent1" class="" v-html="WHSH"></div>
          </div>
        </div>
     </div>
     
    <div v-show="switchOff3" class="block block1 position" data-ref="position" ref="position" style="width: 100%; margin-top: 20px;" :style="{height: height3}">
        <!-- <div class="title section"><Icon type="earth"></Icon>&nbsp;&nbsp;地理位置<a style="float:right" href="javascript:;" @click="changeHeight(3)">{{More3}}</a></div> -->
        <div class="title section" style="font-size: 20px"><Icon type="ios-timer"></Icon>&nbsp;&nbsp;农业发展现状<a style="float:right" href="javascript:;" @click="changeHeight(3)">{{More3}}</a></div>
        <div class="content">
            <!-- <img class="img" v-if="detail.GeographyImage" :src="detail.GeographyImage" />
            <div v-if="detail.GeographyImage[0]" class="image" data-ref="baseinfo">
                <div class="content">
                  <img v-for="item2 in detail.GeographyImage" :src="item2" alt="">
                </div>
            </div> -->
            <div class="image" data-ref="baseinfo" >
                <div id="countryContent2" class="" v-html="NYFZXZ"> 
                  
                </div>
            </div>
        </div>
    </div>
     
    <div v-show="switchOff4" class="block block1 teamwork" data-ref="teamwork" ref="teamwork" style="width: 100%; margin-top: 20px;" :style="{height: height4}">
        <!-- <div class="title section"><Icon type="earth"></Icon>&nbsp;&nbsp;地理位置<a style="float:right" href="javascript:;" @click="changeHeight(3)">{{More3}}</a></div> -->
        <div class="title section" style="font-size: 20px"><Icon type="person-stalker"></Icon>&nbsp;&nbsp;农业投资与合作<a style="float:right" href="javascript:;" @click="changeHeight(4)">{{More4}}</a></div>
        <div class="content">
            <!-- <img class="img" v-if="detail.GeographyImage" :src="detail.GeographyImage" />
            <div v-if="detail.GeographyImage[0]" class="image" data-ref="baseinfo">
                <div class="content">
                  <img v-for="item2 in detail.GeographyImage" :src="item2" alt="">
                </div>
            </div> -->
            <div class="image" data-ref="baseinfo" >
                <div id="countryContent3" class="" v-html="NYTZYHZ"> 
                  
                </div>
            </div>
        </div>
    </div>

    <div v-show="switchOff5" class="block block1 professionalKnowledge" data-ref="professionalKnowledge" ref="professionalKnowledge" style="width: 100%; margin-top: 20px;" :style="{height: height5}">
        <!-- <div class="title section"><Icon type="earth"></Icon>&nbsp;&nbsp;地理位置<a style="float:right" href="javascript:;" @click="changeHeight(3)">{{More3}}</a></div> -->
        <div class="title section" style="font-size: 20px"><Icon type="ios-bookmarks"></Icon>&nbsp;&nbsp;涉农政策与法规<a style="float:right" href="javascript:;" @click="changeHeight(5)">{{More5}}</a></div>
        <div class="content">
            <!-- <img class="img" v-if="detail.GeographyImage" :src="detail.GeographyImage" />
            <div v-if="detail.GeographyImage[0]" class="image" data-ref="baseinfo">
                <div class="content">
                  <img v-for="item2 in detail.GeographyImage" :src="item2" alt="">
                </div>
            </div> -->
            <div class="image" data-ref="baseinfo" >
                <div id="countryContent4" class="" v-html="SNZCYFG"> 
                
                </div>
            </div>
        </div>
    </div>
    
    <div v-show="switchOff6" class="block block1 professionalKnowledge" data-ref="professionalKnowledge" ref="professionalKnowledge" style="width: 100%; margin-top: 20px;" :style="{height: height6}">
        <!-- <div class="title section"><Icon type="earth"></Icon>&nbsp;&nbsp;地理位置<a style="float:right" href="javascript:;" @click="changeHeight(3)">{{More3}}</a></div> -->
        <div class="title section" style="font-size: 20px"><Icon type="ios-bookmarks"></Icon>&nbsp;&nbsp;涉农机构与企业<a style="float:right" href="javascript:;" @click="changeHeight(6)">{{More6}}</a></div>
        <div class="content">
            <!-- <img class="img" v-if="detail.GeographyImage" :src="detail.GeographyImage" />
            <div v-if="detail.GeographyImage[0]" class="image" data-ref="baseinfo">
                <div class="content">
                  <img v-for="item2 in detail.GeographyImage" :src="item2" alt="">
                </div>
            </div> -->
            <div class="image" data-ref="baseinfo" >
                <div id="countryContent5" class="" v-html="SNJGYQY"> 
                  
                </div>
            </div>
        </div>
    </div>

   </div>
     <!-- <div class="block-r">
       <div class="sidebar">
         <div class="catalog">
           <h5 style="font-size: 20px; text-align: center">导航</h5>     
           <ul class="linklist" id="menu">
             <li v-for="(item,index) in cataloglist" v-if="item.show" class="item" :id="item.name" :class="{'active':index == num,'nav':index == current}" @click="catalogTo(item.ref);navtab(index)"><input type="checkbox" name=""><a>{{item.name}}</a></li>
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
              <Button size="small" type="warning" @click="getSelectData" style="height: 30px;">一键生成报告</Button>&nbsp;
              <Button size="small" type="warning" @click="createChart" style="height: 30px;">一键生成图表</Button>
              <!-- <h5 style="font-size: 14px; text-align: center">导航</h5>  -->    
              <Tree :data="dataTitle" show-checkbox @on-select-change="sel" ref="tree" check-strictly></Tree> 
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
  <!-- 开始制作PDF提示框 -->
  
  <Modal v-model="PDFmodal" title="制作PDF" footer-hide>
      <Col class="demo-spin-col" span="2" style="margin-top: 10px">
          <Spin fix>
              <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
          </Spin>
      </Col>
      <h3 style="margin-left: 20px">正在生成国别报告，请稍后...</h3>
  </Modal>

  <Modal v-model="PDFupload" :title="BGTitle" footer-hide>
      <h2><a :href="PDFUrl" target="_blank">{{PDFname}}</a></h2>
  </Modal>
</div>
</template>

<script>
import qrcode from '../../static/lib/jquery.qrcode.min.js'
import ShareInfoBox from '@/components/ShareInfoBox'
import BScroll from 'better-scroll'


export default {
  name: 'CountryDetail',
  components: {
   ShareInfoBox: ShareInfoBox,
 },
  data: function(){
    return {
      'BGTitle': '您好，报告已完成，请点击下载！',

      'global': this.global,
      'detail': {},
      'text':"",  //主要农产品
      'GKtext':"",  //国家概况
      'WZtext':"",  //位置
      'source':"",
      'current':false,
      'curr': false,
      'cataloglist': [],
      // 'active_shareToWX': false,
       'num': 0,

      'countryid': '',
      'countryLiterature': '',
      'countryNew': '',
      'height1': 'auto',
      'height2': 'auto',
      'height3': 'auto',
      'height4': 'auto',
      'height5': 'auto',
      'height6': 'auto',

      'flag1': true,
      'flag2': true,
      'flag3': true,
      'flag4': true,
      'flag5': true,
      'flag6': true,

      'More1': '',
      'More2': '',
      'More3': '',
      'More4': '',
      'More5': '',
      'More6': '',

      'switchOff1': true,
      'switchOff2': false,
      'switchOff3': false,
      'switchOff4': false,
      'switchOff5': false,
      'switchOff6': false,

      'value': '',

      'modal1': false,
      'modal2': false,
      'modal3': false,
      'modal4': false,
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
                  {
                      title: '政治经济',
                      expand: true,
                      Id: 1,
                      children: [ { title: '政治', disabled: true }, { title: '经济', disabled: true }, { title: '风险评估', disabled: true } ]
                  },
                  {
                      title: '文化生活',
                      expand: true,
                      Id: 5,
                      children: [ { title: '文化', disabled: true }, { title: '饮食习惯', disabled: true } ]
                  },
                  {
                      title: '农业发展现状',
                      expand: true,
                      Id: 8,
                      children: [ { title: '自然地理', disabled: true }, { title: '农业用地', disabled: true }, { title: '农村人口', disabled: true}, { title: '农业生产', disabled: true }, { title: '农业贸易', disabled: true } ]
                  },
                  {
                      title: '农业投资与合作',
                      expand: true,
                      Id: 14,
                      children: [ { title: 'Swot分析', disabled: true }, { title: '农业投资', disabled: true }, { title: '与中国的合作', disabled: true } ]
                  },
                  {
                      title: '涉农政策与法规',
                      expand: true,
                      Id: 17,
                      children: [ { title: '农业规划与政策', disabled: true }, { title: '农业优惠政策', disabled: true }, { title: '其他相关法律', disabled: true } ]
                  },
                  {
                      title: '涉农机构与企业',
                      expand: true,
                      Id: 21,
                      children: [ { title: '经贸机构', disabled: true }, { title: '研究机构', disabled: true }, { title: '企业名录', disabled: true } ]
                  }
              ]
          }
      ],
      'ZZJJ': '',      //政治经济
      'WHSH': '',      //文化生活
      'NYFZXZ': '',   //农业发展现状
      'NYTZYHZ': '',  //农业投资与合作
      'SNZCYFG': '',  //涉农政策与法规
      'SNJGYQY': '',  //涉农机构与企业
      
      
    }
  },
  mounted: function(){
    $(window).scrollTop(0);
    const _this = this;
    
    //this.getApiData(detail.CountryGkWord);
    _this.countryid = _this.$route.params.countryid;
    // 获取国家详情
    const prommise_getCountryDetail = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.CountryManageService.GetCountryInfoByCountryID,
      'data': {
        countryID: _this.$route.params.countryid
      },
      'f_resolve': function(data){
        //let data1 = JSON.parse(data.resultData);
          console.log('@@@@@@@@@', data);
          if (data.Continent == 1) {
              data.Continent = "亚洲"
          }
          if (data.Continent == 2) {
              data.Continent = "欧州"
          }
          if (data.Continent == 3) {
              data.Continent = "非洲"
          }
          if (data.Continent == 4) {
              data.Continent = "北美洲"
          }
          if (data.Continent == 5) {             
              data.Continent = "南美洲"         
          }
          if (data.Continent == 6) {
              data.Continent = "大洋洲"
          }
          if (data.Continent == 7) {
              data.Continent = "南极洲"
          }

        data.NationalFlag = _this.global.normalResourceUrl(data.NationalFlag);
        data.RepImage = _this.global.normalResourceUrl(data.RepImage);

        //国家概况图片处理
        let CountryGkImagesArr = data.CountryGkImages.split(",");
        for(let i=0; i<CountryGkImagesArr.length; i++) {
          CountryGkImagesArr[i] = _this.global.normalResourceUrl(CountryGkImagesArr[i]);
        }
        data.CountryGkImages = CountryGkImagesArr;
        //data.CountryGkImages = _this.global.normalResourceUrl(data.CountryGkImages);
        data.CountryGkWord = _this.global.normalResourceUrl(data.CountryGkWord);


        //位置图片处理
        let GeographyImageArr = data.GeographyImage.split(",");
        for(let i=0; i<GeographyImageArr.length; i++) {
            GeographyImageArr[i] = _this.global.normalResourceUrl(GeographyImageArr[i]);
        }
        data.GeographyImage = GeographyImageArr;
        //data.GeographyImage = _this.global.normalResourceUrl(data.GeographyImage);
        data.Geography = _this.global.normalResourceUrl(data.Geography);

        //产品信息图片处理
        let ProductsImagesArr = data.ProductsImages.split(",");
        for(let i=0; i<ProductsImagesArr.length; i++) {
            ProductsImagesArr[i] = _this.global.normalResourceUrl(ProductsImagesArr[i]);
        }
        data.ProductsImages = ProductsImagesArr;
        //data.ProductsImages = _this.global.normalResourceUrl(data.ProductsImages);
        data.ProductsWord = _this.global.normalResourceUrl(data.ProductsWord);


        let reportUrl = JSON.parse(data.report);
        console.log('11111111', reportUrl)
        if(reportUrl.length != 0){
            
            let n;
            let z;
            let m;
            let x;
            let q;
            let w;
            for(var i=0; i<reportUrl.length; i++) {
              if(reportUrl[i]){
                  
                  if(reportUrl[i].reportname == "政治经济" ) {
                      n = reportUrl[i].path;
                      let a = _this.global.normalResourceUrl( n )
                      _this.getApiDataCommon( a );
                  } 
                  if(reportUrl[i].reportname == "文化生活" ) {
                      z = reportUrl[i].path;
                      let b = _this.global.normalResourceUrl( z )
                      _this.getApiDataCommon1( b );
                  }
                  if(reportUrl[i].reportname == "农业发展现状" ) {
                      m = reportUrl[i].path;
                      let c = _this.global.normalResourceUrl( m );
                      _this.getApiDataCommon2( c );
                  }
                  if(reportUrl[i].reportname == "农业投资与合作" ) {
                      x = reportUrl[i].path;
                      let d = _this.global.normalResourceUrl( x )
                      _this.getApiDataCommon3( d );
                  }
                  if(reportUrl[i].reportname == "涉农政策与法规" ) {
                      q = reportUrl[i].path;
                      let e = _this.global.normalResourceUrl( q )
                      _this.getApiDataCommon4( e );
                  }
                  if(reportUrl[i].reportname == "涉农机构与企业" ) {
                      w = reportUrl[i].path;
                      let f = _this.global.normalResourceUrl( w )
                      _this.getApiDataCommon5( f );
                  }
              }
            }



            /*if(reportUrl[0]) {
                //console.log( _this.global.normalResourceUrl(reportUrl[0].path ) );
                let a = _this.global.normalResourceUrl( n )
                _this.getApiDataCommon( a );
            }
            if(reportUrl[1]) {
                //console.log( _this.global.normalResourceUrl(reportUrl[1].path ) );
                let b = _this.global.normalResourceUrl( z )
                _this.getApiDataCommon1( b );
            }
            if(reportUrl[2]) {
                let c = _this.global.normalResourceUrl( m );
                _this.getApiDataCommon2( c );
            }
            if(reportUrl[3]) {
              //console.log( _this.global.normalResourceUrl(reportUrl[3].path ) )
                let d = _this.global.normalResourceUrl( x )
                _this.getApiDataCommon3( d );
            }
            if(reportUrl[4]) {
                let e = _this.global.normalResourceUrl( q )
                _this.getApiDataCommon4( e );
            }
            if(reportUrl[5]) {
                let f = _this.global.normalResourceUrl( w )
                _this.getApiDataCommon5( f );
            }*/

            _this.getApiData(data.ProductsWord);
            _this.getApiData1(data.CountryGkWord);
            _this.getApiData2(data.Geography);
        }
          
        
        
       
        
        _this.getCountryLiterature(data.NameOfficialEN, 20);   //获取相关文献
        _this.getCountryNew(data.NameOfficialZH, 25);  //获取相关新闻
        _this.detail = data;
        //console.log(data);
        //_this.getApiData(data.Introduction);
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
        console.log(_this.cataloglist);
      }
    });
  },
  methods: {
    //一键生成图表
    'createChart': function() {
        const _this = this;
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
                    //console.log(data.resultData);
                    _this.BGTitle = '您好，图表已完成，请点击下载！';
                    _this.PDFmodal = false;
                    _this.PDFupload = true;
                }else {
                    _this.PDFname = '暂无报告！';
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
                //console.log(a);
                $.ajax({
                      type: "POST",
                      url: _this.global.API.CountryManageService.ConvertToPDF,
                      data: {
                          reportId: a,  //报告类型id
                          Id:  _this.detail.CountryID,   //国家id
                          type:  1   //类型
                      },
                      dataType: "json",
                      success: function(data){
                          let pdfUrl = data.resultData;
                          if(data.resultData) {
                              let a = data.resultData.split('/');
                              _this.PDFname = a[a.length-1];
                              _this.PDFUrl = _this.global.normalResourceUrl(pdfUrl);  

                              _this.BGTitle = '您好，报告已完成，请点击下载！';
                              _this.PDFmodal = false;
                              _this.PDFupload = true;
                          }else {
                              _this.PDFname = '暂无国别报告！';
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
        //     //console.log(itemName);
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
        if( titleContent == '政治经济' ) {
            this.switchOff1 = true; 
        } else if( titleContent == '文化生活' ){
            this.switchOff2 = true; 
        } else if( titleContent == '农业发展现状' ){
            this.switchOff3 = true; 
        } else if( titleContent == '农业投资与合作' ){
            this.switchOff4 = true; 
        } else if( titleContent == '涉农政策与法规' ){
            this.switchOff5 = true; 
        } else if( titleContent == '涉农机构与企业' ){
            this.switchOff6 = true; 
        } 
    }, 
    'search': function() {   //搜索文献
        const _this = this;
        //document/search/fulltext
        /*const searchLiterature = _this.global.$post({
          '_this': _this,
          'url': _this.global.Domain.api1 +'/document/search/fulltext',  
          'data': {
            keyword: _this.value,
            page_size: 7
          },
          'f_resolve': function(data){
              console.log('%%%%%%%%%%%%%%%%', data);
              _this.countryLiterature = data;
          }
        });*/

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
        }
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
            {'name': '主题国', 'type': '', 'keyword': name}, 
            {'name': "", 'type': "", 'keyword': ""} 
        ]
          
        let fieldList = {"信息来源": "", "作品语种": "", "出版国": ""};
        console.log(fieldList);

        $.ajax({
              type: "POST",
              url: _this.global.Domain.api1 +'/document/search',
              data: {
                keywordlist: JSON.stringify(keyWordList),  
                fieldlist:  JSON.stringify(fieldList),   
                index_start:  0,   //开始条数 
                page_size: len,        //获取条数 
              },
              dataType: "json",
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
    //政治经济
    'getApiDataCommon':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.ZZJJ = data;
            setTimeout(function(){
              $('#countryContent').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            
          }
        },
        'error': function(err){
          
        }
      });
    },
    'getApiDataCommon1':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.WHSH = data;
          }
          else{
            
          }
        },
        'error': function(err){
          
        }
      });
    },
    'getApiDataCommon2':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.NYFZXZ = data;
            
          }
          else{
            
          }
        },
        'error': function(err){
          
        }
      });
    },

    'getApiDataCommon3':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.NYTZYHZ = data;
            setTimeout(function(){
              $('#countryContent3').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            
          }
        },
        'error': function(err){
          
        }
      });
    },
    'getApiDataCommon4':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.SNZCYFG = data;
            setTimeout(function(){
              $('#countryContent4').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            
          }
        },
        'error': function(err){
          
        }
      });
    },
    'getApiDataCommon5':function(url) {
      console.log(url);
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.SNJGYQY = data;
            setTimeout(function(){
              $('#countryContent5').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            
          }
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
              $('#countryContent6').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.Introduction = null;
          }
        },
        'error': function(err){
          _this.detail.Introduction = null;
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
            _this.GKtext = data;
            setTimeout(function(){
              $('#countryContent1').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.Introduction = null;
          }
        },
        'error': function(err){
          _this.detail.Introduction = null;
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
            _this.WZtext = data;
            setTimeout(function(){
              $('#countryContent2').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.Introduction = null;
          }
        },
        'error': function(err){
          _this.detail.Introduction = null;
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
        //$(window).animate({scrollTop: this.$refs[ref][0].offsetTop}, 500)
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
    'ok': function () {
        //this.$Message.info('Clicked ok');
    },
    'cancel': function () {
        //this.$Message.info('Clicked cancel');
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
    .block-r{ 
        display: none !important; 
    }
    .NationalFlag{ display: none !important; }
    .Name{ padding: 20px 30px !important; }
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


.CountryDetail{
  margin-top: 15px;
  background: white;
 /* .current{
    color:red;
  }
*/

  .NationalFlag1{
    height: 30px;
    border: 1px solid #E6E7E9;
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
        color: #026EB8;
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

  .image{
      width: 100%;
      .title1{
          padding: 5px 30px;
          font-size: 16px;
          font-weight: bold;
      }
      .content{
        width: 90%;
          padding: 10px;
          img{
            width: 100%;
            display: inline-block;
            margin-right: 10px;
          }
      }
  }

  .infolist{
    display: inline-block;
    float:left;
    .item{
      line-height: 23px;
      .key{
        display: inline-block;
        width: 100px !important;
        color: @title-color;
      }

      .value{
        &:nth-of-type(n+3){
          margin-left: 3px;
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
    margin-top: 0px;

    .block1{
      overflow: hidden;
    }
    .changeHeight{
      width: 100%; 
      height: 25px; 
      text-align: center; 
      font-size: 14px; 
      display: block;
      border-top: 1px dashed #E6E7E9;
      margin-top: 10px;
    }


    .block-l{
      width: 980px;
      border-right: 1px solid @border-color-base;
    }

    .block{
      .title{
        padding: 5px 30px;
        font-size: 16px;
        /* background: @title-bg; */
        border-bottom: 2px solid @title-bg;
        margin-top: 15px;
        color: #026EB8;
        font-weight: bold;
      }
      .titleXG{
        padding: 5px 30px;
        font-size: 16px;
        background: @title-bg;
        color: #026EB8;
        font-weight: bold;
      }
      .content{
        /*padding: 5px 30px;*/
        padding-left: 30px;
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
      width: 230px;
      top: 230px;
      z-index: 99;

      .catalog{
        padding: 15px;
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
            padding: 2px 10px;
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
} 
</style>

<style lang="less">
.CountryDetail{
  .catalog{
    .ivu-checkbox-disabled .ivu-checkbox-inner{
      background: none;
      border: none;
    }
    .ivu-checkbox-disabled.ivu-checkbox-checked .ivu-checkbox-inner::after{
      border: none;
    }
    .ivu-tree-children{
        .ivu-icon{
          display: none;
        }
    }
    .ivu-tree-title-selected, .ivu-tree-title-selected:hover {
        background-color: #026EB8;
        color: white;
    }
    .ivu-tree ul li{
        margin: 3px 0;
    }
  }
}
</style>