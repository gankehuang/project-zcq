<template>
  <div class="GlobalSearch">
    <div class="container-main clearfix">
        <div class="info-box top" style="">
            <Card :bordered="true" dis-hover style="">
                
                <!-- <div style="width: 150px; height: 150px; display: inline-block; float:left; padding: 10px;">
                    <p style="text-align: center; background: #026EB8; color: white; padding: 5px 0;">一级搜索</p>
                    <p style="text-align: center; background: #026EB8; color: white; padding: 5px 0; margin-top: 15px;" >高级搜索</p>
                </div> -->

              <Tabs type="card">
                  <Tab-pane label="全文检索" v-if="this.$route.params.show != 1 && this.$route.params.show != 2">
                      <i-input style="width: 80%; margin-left: 10%; margin-top:70px;" v-model="value" placeholder="请输入检索内容...">
                          <span slot="prepend">全文检索</span>
                          <i-button style="font-weight: bold;" slot="append" icon="ios-search" @click="fullTextSearch()"></i-button>
                      </i-input>
                      <Checkbox v-model="single" style="float:right;margin-top:-25px;margin-right:30px;">精准发现</Checkbox>
                      <i-input style="width: 80%; margin-left: 10%; margin-top:20px;" v-model="catalogueValue" placeholder="请输入检索内容...">
                          <span slot="prepend">目录检索</span>
                          <i-button type="success" slot="append" icon="ios-search" @click="catalogueSearch()"></i-button>
                      </i-input>
                  </Tab-pane>
                  <Tab-pane label="高级检索">
                      <div style="width: 100%; display: inline-block; float:left; padding: 0px 10px;">
                     

                        <Select v-model="headline1" filterable placeholder="请选择标题" style="width:15%;">
                            <Option value="标题">标题</Option> 
                            <Option value="关键词">关键词</Option>
                            <Option value="责任者">作者</Option>
                            <Option value="责任者机构">作者机构</Option>
                            <Option value="摘要">摘要</Option>
                            <Option value="主题国">主题国</Option>
                            <Option value="产品类别">产品</Option>
                        </Select>
                        <Input v-model="headlineInt1" placeholder="请输入..." style="width:30%;" /><br/>
                       
                        <Form ref="formDynamic" :model="formDynamic" style="width: 100%;">
                          <FormItem style=" margin-bottom: 0"
                                  v-for="(item, index) in formDynamic.items"
                                  v-if="item.status"
                                  :key="index"
                                  >
                              <Row>
                                  <Select v-model="item.type" filterable placeholder="请选择" style="width:10%; margin-top: 5px;">
                                      <Option value="and">并且</Option> 
                                      <Option value="or">或者</Option>
                                  </Select>
                                  <Select v-model="item.headline2" filterable placeholder="请选择标题" style="width:15%; margin-top: 5px;">
                                      <Option value="标题">标题</Option> 
                                      <Option value="关键词">关键词</Option>
                                      <Option value="责任者">作者</Option>
                                      <Option value="责任者机构">作者机构</Option>
                                      <Option value="摘要">摘要</Option>
                                      <Option value="主题国">主题国</Option>
                                      <Option value="产品类别">产品</Option>
                                  </Select>
                                  <Input v-model="item.headlineInt2" placeholder="请输入..." style="width:30%; margin-top: 5px;" />
                                  
                              </Row>
                          </FormItem>
                          <FormItem>
                              <Row>
                                  <Button style="background-color:#026EB8; color: white; text-align:center;" @click="handleAdd()"><Icon type="plus-round"></Icon></Button>
                              </Row>
                          </FormItem>
                        </Form>

                        <Tabs size="small">
                            <TabPane label="信息来源">
                                <CheckboxGroup v-model="informationSource">
                                    <Checkbox :label="key" v-for="value,key in field.信息来源全称[0]" style="width: 200px; height: 20px; float:left;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow: hidden;" :title="value"><span v-if="value">[{{value}}]</span><span>{{key}}</span></Checkbox>
                                </CheckboxGroup>
                            </TabPane>
                            <TabPane label="作品语种">
                                <CheckboxGroup v-model="language">
                                    <Checkbox :label="item" v-for="item in field.作品语种"><span>{{item}}</span></Checkbox>
                                </CheckboxGroup>
                            </TabPane>
                            <TabPane label="国家">
                                <CheckboxGroup v-model="country">
                                    <Checkbox :label="item" v-for="item in field.出版国"><span>{{item}}</span></Checkbox>
                                </CheckboxGroup>
                            </TabPane>
                            <TabPane label="年份">
                                <Button style="margin-right: 3px; margin-top: 3px;" type="primary" size="small" v-for="(item, index) in yearTitle" @click="titleClick(index)">{{item}}</Button>
                                <CheckboxGroup v-model="publishyear">
                                    <Checkbox :label="item" v-for="item in field.发布年"><span>{{item}}</span></Checkbox>
                                </CheckboxGroup>
                            </TabPane>
                        </Tabs>
                       
                        <i-button type="primary" long @click="handleSubmit()" style="width: 120px; margin-top: 5px; float:right; margin-right: 3%; background: #026EB8;">检索</i-button>
                      </div>
                  </Tab-pane>
              </Tabs>

            </Card>
            
        </div>

        <!-- 内容部分 -->
        <div class="info-box1 second searchresult">
            <!-- 左侧检索部分 -->
            <div style="width:20%; float:left; border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD">
                    
                <p style="padding: 5px; background: #026EB8; color: white;">作品语种</p>
                <CheckboxGroup v-model="language">
                    <Checkbox :label="item" v-for="item in field.作品语种"><span>{{item}}</span></Checkbox>
                </CheckboxGroup>
                <p style="padding: 5px; background: #026EB8; color: white;">国家</p>
                <CheckboxGroup v-model="country">
                    <Checkbox :label="item" v-for="item in field.出版国"><span>{{item}}</span></Checkbox>
                </CheckboxGroup>
                <p style="padding: 5px; background: #026EB8; color: white;">年份</p>
                
                <Button style="margin-right: 3px; margin-top: 3px;" type="primary" size="small" v-for="(item, index) in yearTitle" @click="titleClick(index)">{{item}}</Button>
                <!-- <Tag color="blue" size="small" v-for="(item, index) in yearTitle" @click="titleClick">{{item}}</Tag> -->

                <CheckboxGroup v-model="publishyear">
                    <Checkbox :label="item" v-for="item in field.发布年"><span>{{item}}</span></Checkbox>
                </CheckboxGroup>
                <p style="padding: 5px; background: #026EB8; color: white;">信息来源</p>
                <CheckboxGroup v-model="informationSource">
                    <Checkbox :label="key" v-for="value,key in field.信息来源全称[0]" style="width: 200px; height: 20px; float:left;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow: hidden;" :title="key"><span v-if="value">[{{value}}]</span><span>{{key}}</span></Checkbox>
                </CheckboxGroup>

                <Select v-model="headline1" filterable placeholder="请选择标题" style="width:70%; margin-top: 10px">
                    <Option value="标题">标题</Option> 
                    <Option value="关键词">关键词</Option>
                    <Option value="责任者">作者</Option>
                    <Option value="责任者机构">作者机构</Option>
                    <Option value="摘要">摘要</Option>
                    <Option value="主题国">主题国</Option>
                    <Option value="产品类别">产品</Option>
                </Select>
                <Input v-model="headlineInt1" placeholder="请输入..." style="width:90%; margin-top: 5px;" /><br/>
                
                <Form ref="formDynamic" :model="formDynamic" style="width: 100%;">
                  <FormItem style=" margin-bottom: 0"
                          v-for="(item, index) in formDynamic.items"
                          v-if="item.status"
                          :key="index"
                          >
                      <Row>
                          <Select v-model="item.type" filterable placeholder="请选择" style="width:38%; margin-top: 5px;">
                              <Option value="and">并且</Option> 
                              <Option value="or">或者</Option>
                          </Select>
                          <Select v-model="item.headline2" filterable placeholder="请选择标题" style="width:55%; margin-top: 5px;">
                              <Option value="标题">标题</Option> 
                              <Option value="关键词">关键词</Option>
                              <Option value="责任者">作者</Option>
                              <Option value="责任者机构">作者机构</Option>
                              <Option value="摘要">摘要</Option>
                              <Option value="主题国">主题国</Option>
                              <Option value="产品类别">产品</Option>
                          </Select>
                          <Input v-model="item.headlineInt2" placeholder="请输入..." style="width:90%; margin-top: 5px;" />
                          
                      </Row>
                  </FormItem>
                  <FormItem>
                      <Row>
                          <Button style="background-color:#026EB8; color: white; text-align:center;" @click="handleAdd()"><Icon type="plus-round"></Icon></Button>
                      </Row>
                  </FormItem>
                </Form>


                <i-button type="primary" long @click="handleSubmit()" style="width: 100%; margin-top: 5px; background: #026EB8;">检索</i-button>
            </div>

            <!-- 右侧列表部分 初始化内容 -->
            <ul class="countryinfolist" v-if="countryLiterature" style="float:right; width: 79%; margin-left: 10px;">
              <p style="height: 30px; line-height:30px; background:#026EB8">
                  <span style="width: 3%; text-align:center;display:inline-block;color:white;font-size:14px;">序号</span>
                  <span style="font-size:14px;color:#8EC31F; width:60%; display:inline-block;color:white">标题</span>
                  <span style="display: inline-block; float:right;margin-left: 10px; width: 20%;height:20px;color:white;font-size:14px;">来源平台</span>
                  <span style="display: inline-block; float:right;margin-left: 10px; width:10%;color:white;font-size:14px;">发布年</span>
              </p>
              <li class="item" v-for="(item, index) in countryLiterature" style="height: 40px;">
                <router-link class="link-text" :key="item.id" :to="{name:'literaturedetailtwo', params:{title: item.file_name, name: item.标题, table_flag: item.table_flag, id: item.id,zrz:item.责任者,xxlyqc:item.信息来源全称, xxlymc:item.信息来源名称,wxjh:item.文献集合, ybkh: item.印本刊号,dzkh:item.电子刊号,dzcbwsh:item.电子出版物书号, year: item.发布年,jq:item.期,ys:item.页数, ztg:item.主题国,gjc:item.关键词,zy: item.摘要,zpyz:item.作品语种,zrzjg:item.责任者机构, status:item.碎片化任务状态 , unique_code: item.唯一标识} }" style="height:40px;">
                  <!-- <h3 class="title1 text-nowrap">{{ item.标题 }}</h3>           -->
                    <p style="">
                      <span style="width: 3%; text-align:center;display:inline-block">{{index+1}}</span>
                      <span v-html="item.标题" style="font-size:16px;color:#8EC31F; width:60%; display:inline-block"></span>
                      <span style="display: inline-block; float:right;margin-left: 10px; width: 20%;height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;"><span v-if="item.信息来源名称">[{{item.信息来源名称}}]</span>{{item.信息来源全称}}</span>
                      <span style="display: inline-block; float:right;margin-left: 10px; width:10%">{{item.发布年}}</span>
                    </p>
                    <span v-html="item.content" style="display: inline-block;width: 60%;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow: hidden;"></span>
                </router-link>
              </li>
            </ul>

            <!-- 全文检索 -->
              
              <div class= "list" v-if="searchtext&&!single" style="float:right; width: 79%; margin-left: 10px;">
                <p style="height: 30px; line-height:30px; background:#026EB8">
                  <span style="width: 4%; text-align:center;display:inline-block;color:white;font-size:14px;">序号</span>
                  <span style="font-size:14px;color:#8EC31F; width:60%; display:inline-block;color:white">标题</span>
                  <span style="display: inline-block; float:right;margin-left: 10px; width: 20%;height:20px;color:white;font-size:14px;">来源平台</span>
                  <span style="display: inline-block; float:right;margin-left: 10px; width:10%;color:white;font-size:14px;">发布年</span>
                </p>
                <router-link v-for="(item, index) in searchtext" class="link-text" :key="item.id" :to="{name:'literaturedetailtwo', params:{title: item.file_name, name: item.标题, table_flag: item.table_flag, id: item.id,zrz:item.责任者,xxlyqc:item.信息来源全称, xxlymc:item.信息来源名称,wxjh:item.文献集合, ybkh: item.印本刊号,dzkh:item.电子刊号,dzcbwsh:item.电子出版物书号, year: item.发布年,jq:item.期,ys:item.页数, ztg:item.主题国,gjc:item.关键词,zy: item.摘要,zpyz:item.作品语种,zrzjg:item.责任者机构, status:item.碎片化任务状态, unique_code: item.唯一标识 } }" style="padding: 3px 10px;">
                    <p style="">
                      <span style="width: 3%; text-align:center;display:inline-block">{{index+1}}</span>
                      <span v-html="item.标题" style="font-size:16px;color:#8EC31F; width:60%; display:inline-block"></span>
                      <span style="display: inline-block; float:right;margin-left: 10px; width: 20%;height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;"><span v-if="item.信息来源名称">[{{item.信息来源名称}}]</span>{{item.信息来源全称}}</span>
                      <span style="display: inline-block; float:right;margin-left: 10px; width:10%">{{item.发布年}}</span>
                    </p>
                    <span v-if="item.content" style="display: inline-block;width: 60%;margin-left:3%;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow: hidden;">
                      摘要：<font v-html="item.content"></font>
                    </span>
                    <!-- <span><b>摘要：</b>{{item.摘要}}</span> -->
                </router-link> 
              </div>
              <!-- 精准发现 -->
              <div class= "list" v-if="searchtext&&single" style="float:right; width: 79%; margin-left: 10px;">
                <p style="height: 30px; line-height:30px; background:#026EB8">
                  <span style="width: 3%; text-align:center;display:inline-block;color:white;font-size:14px;">序号</span>
                  <span style="font-size:14px;color:#8EC31F; width:60%; display:inline-block;color:white">标题</span>
                  <span style="display: inline-block; float:right;margin-left: 10px; width: 20%;height:20px;color:white;font-size:14px;">来源平台</span>
                  <span style="display: inline-block; float:right;margin-left: 10px; width:10%;color:white;font-size:14px;">发布年</span>
                </p>
                <router-link v-for="(item, index) in searchtext" class="link-text" :key="item.id" :to="{name:'literaturedetailtwo', params:{title: item.file_name, name: item.标题, table_flag: item.table_flag, id: item.id,zrz:item.责任者,xxlyqc:item.信息来源全称, xxlymc:item.信息来源名称,wxjh:item.文献集合, ybkh: item.印本刊号,dzkh:item.电子刊号,dzcbwsh:item.电子出版物书号, year: item.发布年,jq:item.期,ys:item.页数, ztg:item.主题国,gjc:item.关键词,zy: item.摘要,zpyz:item.作品语种,zrzjg:item.责任者机构, status:item.碎片化任务状态, unique_code: item.唯一标识 } }" style="padding: 3px 10px;">
                    <p style="">
                      <span style="width: 3%; text-align:center;display:inline-block">{{index+1}}</span>
                      <span v-html="item.title||item.标题" style="font-size:16px;color:#8EC31F; width:60%; display:inline-block"></span>
                      <span style="display: inline-block; float:right;margin-left: 10px; width: 20%;height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;">
                        <span v-if="item.信息来源名称">[{{item.信息来源名称}}]</span>{{item.信息来源全称}}
                      </span>
                      <span style="display: inline-block; float:right;margin-left: 10px; width:10%" v-if="item.发布年">
                        {{item.发布年}}
                      </span>
                    </p>
                    <span v-html="item.标题" style="display: inline-block;width: 60%;margin-left:3%;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow: hidden;"></span>
                    <!-- <span><b>摘要：</b>{{item.摘要}}</span> -->
                </router-link>            
              </div>



              <!-- 高级检索 -->
            
                <div class= "list" v-if="erJirestData" style="float:right; width: 79%; margin-left: 10px;">
                  <p style="height: 30px; line-height:30px; background:#026EB8">
                    <span style="width: 3%; text-align:center;display:inline-block;color:white;font-size:14px;">序号</span>
                    <span style="font-size:14px;color:#8EC31F; width:60%; display:inline-block;color:white">标题</span>
                    <span style="display: inline-block; float:right;margin-left: 10px; width: 20%;height:20px;color:white;font-size:14px;">来源平台</span>
                    <span style="display: inline-block; float:right;margin-left: 10px; width:10%;color:white;font-size:14px;">发布年</span>
                  </p>
                  <router-link v-for="(item, index) in erJirestData" class="link-text" :key="item.id" :to="{name:'literaturedetailfour', params:{title: item.file_name, name: item.标题, table_flag: item.table_flag, id: item.id,zrz:item.责任者,xxlyqc:item.信息来源全称, xxlymc:item.信息来源名称,wxjh:item.文献集合, ybkh: item.印本刊号,dzkh:item.电子刊号,dzcbwsh:item.电子出版物书号, year: item.发布年,jq:item.期,ys:item.页数, ztg:item.主题国,gjc:item.关键词,zy: item.摘要,zpyz:item.作品语种,zrzjg:item.责任者机构, status:item.碎片化任务状态, unique_code: item.唯一标识 } }" style="padding: 3px 10px;">
                      <p style="">
                        <span style="width: 3%; text-align:center;display:inline-block;float:left">{{index+1}}</span>
                        <span v-html="item.标题" style="font-size:16px;color:#8EC31F; width:60%; display:inline-block"></span>
                        <span style="display: inline-block; float:right;margin-left: 10px; width: 20%;height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;"><span v-if="item.信息来源名称">[{{item.信息来源名称}}]</span>{{item.信息来源全称}}</span>
                        <span style="display: inline-block; float:right; width:10%">{{item.发布年}}</span>
                      </p>
                      <span v-if="item.中英文作者"><b>中英文作者：</b>{{item.中英文作者}}</span>
                  </router-link>            
                </div>
            

            <div style="margin-left: 40%">
                <Page :total="total" page-size="20" show-total @on-change="changePage" v-if="searchtext"></Page>
                <Page :total="total2" page-size="20" show-total @on-change="changePage2" v-if="erJirestData"></Page>
                <Page :total="total3" page-size="20" show-total @on-change="changePage3" v-if="countryLiterature"></Page>
            </div>
            


        </div>
    </div>
  </div>
</template>
<script>



export default {
  name: 'GlobalSearch',
  data: function () {
    return {
      //高级检索输入内容
      headline1: '',  
      headlineInt1: '',

      type: '',
      headline2: '',  
      headlineInt2: '',

      informationSource: [],   //信息来源全称
      language: [],    //作品语种
      country: [],
      publishyear: [],

      field: '',
      value: '',               //一级检索框输入内容
      countryLiterature: [],   //一级检索返回内容
      catalogueValue: '',      //目录检索输入框内容

      erJirestData: '',    //二级搜索返回

      searchtext:{},  //主页搜索内容
      active_more: false,

      total: '',
      total2: '',
      total3: '',

      index_start: 1,
      page_size: 20,

      index_start2: 1,
      page_size2: 20,

      index_start3: 1,
      page_size3: 20,

      single: '',  //精准发现状态
      yearTitle: [],
      titleContent: [],
      //oneSearch: this.$route.params.content,
      
      //添加检索框绑定数据
      index: 1,
      formDynamic: {  
          items: [
              {
                  type: '',
                  headline2: '',
                  headlineInt2: '',
                  index: 1,
                  status: 1
              }
          ]
      }
    }
  },
  mounted: function() {
      const _this = this;

      
      
      let data = sessionStorage.getItem('loginBS');
      if(data == null){
          _this.$Message.success('请先登录！');
          return;
      } else{
          _this.getField("出版国,信息来源全称,作品语种,发布年");
          if(_this.$route.params.show == 1) {
             _this.headline1 = '主题国';
             _this.headlineInt1 = _this.$route.params.content;
             _this.handleSubmit();
          } else if(_this.$route.params.show == 0){
              //console.log(_this.$route.params.content);  //首页搜索的内容
              _this.value = _this.$route.params.content;
              _this.fullTextSearch1();
          }
          else if(_this.$route.params.show == 2){
             _this.headline1 = '产品类别';
             _this.headlineInt1 = _this.$route.params.content;
             _this.handleSubmit();
          }
          else if( window.localStorage['fieldlist'] || window.localStorage['keywordlist'] ){

          }
      }

      

      
      
  },
  methods: { 
      'handleAdd': function() {   //添加搜索框
          const _this = this;
          _this.index++;
          //console.log('%%%%%%%%%%%%', _this.formDynamic);
          _this.formDynamic.items.push({
              type: '',
              headline2: '',
              headlineInt2: '',
              index: this.index,
              status: 1
          });
      },
      'changePage': function(page) {  //点击分页
        //console.log(page);
        const _this = this;
          //console.log( (page*20)-20+1 );

        _this.index_start = (page*20)-20+1;
        _this.fullTextSearch();
      },
      'changePage2': function(page) {  //点击高级搜索分页
        const _this = this;
          //console.log( (page*20)-20+1 );

          _this.index_start2 = (page*20)-20+1;
          _this.handleSubmit();
      },
      'changePage3': function(page) {  //点击高级搜索分页
        const _this = this;
          //console.log( (page*20)-20+1 );

          _this.index_start3 = (page*20)-20+1;
          _this.catalogueSearch();
      },
      fullTextSearch1 () {   //全文搜索文献
          const _this = this;
          _this.$Spin.show();  //显示加载中...
          _this.searchtext = '';
          _this.active_more = false;

          $.ajax({
              type: "POST",
              url: _this.global.Domain.api1 +'/document/search/fulltext',
              data: {
                keyword: _this.$route.params.content,
                index_start:  _this.index_start,   //开始条数 
                page_size: _this.page_size,        //获取条数
              },
              dataType: "json",
              success: function(data){
                 //console.log(data);
                 //let resultData = data.resultData;
                 data.resultData.forEach(function(val) {

                    let s = _this.$route.params.content;
                    let reg = new RegExp("(" + s + ")", "g");


                    let str = val.标题;
                    if(str){
                      let newstr = str.replace(reg, "<font color=red>"+ s +"</font>");
                      val.标题 = newstr;
                    }
                    let str1 = val.content;
                    if(str1){
                      let newstr1 = str1.replace(reg, "<font color=red>"+ s +"</font>");
                      val.content = newstr1;
                    }
                 });
                 //data.resultData = resultData;
                 _this.searchtext = data.resultData; 
                 _this.total = data.total;
                 _this.countryLiterature = '';
                 _this.erJirestData = ''; 
                 _this.$Spin.hide();  //隐藏加载中...
                 _this.$Message.success('检索完成，共'+ data.total + '条' );        
              }
           });
      }, 
      catalogueSearch () {   //目录检索
          const _this = this;
          _this.$Spin.show();  //显示加载中...
          //document/search/fulltext
          /*const searchCatalogue = _this.global.$post({
            '_this': _this,
            'url': _this.global.Domain.api1 +'/document/search/catalog',  
            'data': {
              keyword: _this.catalogueValue,
              index_start:  _this.index_start,   //开始条数
              page_size: 20
            },
            'f_resolve': function(data){
                console.log('%%%%%%%%%%%%%%%%', data);
                _this.countryLiterature = data;
                _this.searchtext = "";
                _this.erJirestData = '';
            }
          });*/

          $.ajax({
              type: "POST",
              url: _this.global.Domain.api1 +'/document/search/catalog',
              data: {
                keyword: _this.catalogueValue,
                index_start:  _this.index_start3,   //开始条数 
                page_size: _this.page_size3,        //获取条数
              },
              dataType: "json",
              success: function(data){
                 //console.log(data);
                 //let resultData = data.resultData;
                 data.resultData.forEach(function(val) {

                    let s = _this.value;
                    let reg = new RegExp("(" + s + ")", "g");

                    let str = val.标题;
                    if(str){
                      let newstr = str.replace(reg, "<font color=red>"+ s +"</font>");
                      val.标题 = newstr;
                    }
                    let str1 = val.content;
                    if(str1){
                      let newstr1 = str1.replace(reg, "<font color=red>"+ s +"</font>");
                      val.content = newstr1;
                    }
                 });
                 //data.resultData = resultData;
                 _this.countryLiterature = data.resultData; 
                 _this.total3 = data.total; 
                 _this.searchtext = "";
                 _this.erJirestData = ''; 
                 _this.$Spin.hide();  //隐藏加载中... 
                 _this.$Message.success('检索完成，共'+ data.total + '条' );      
              }
          });
      },
      fullTextSearch () {   //全文搜索文献
          const _this = this;
          _this.$Spin.show();  //显示加载中...
          //console.log(_this.single);
          if(!_this.value){
             _this.value = _this.$route.params.content
          }
          $.ajax({
              type: "POST",
              url: _this.global.Domain.api1 +'/document/search/fulltext',
              data: {
                keyword: _this.value,
                index_start:  _this.index_start,   //开始条数 
                page_size: _this.page_size,        //获取条数
                bypara: _this.single? 1:0          //精准发现
              },
              dataType: "json",
              success: function(data){
                 //console.log(data);
                  let s = _this.value.toString();
                  let reg = new RegExp("(" + s.toLowerCase() + ")", "gi");
                  data.resultData.forEach(function(val, index) {
                    let str = val.标题;
                    if(str){
                      let newstr = str.replace(reg, "<font color=red>$1</font>");
                      val.标题 = newstr;
                    }
                    let str2 = val.title;
                    if(str2){
                      let newstr2 = str2.replace(reg, "<font color=red>$1</font>");
                      val.title = newstr2;
                    }
                    let str1 = val.content;
                    if(str1){
                      let newstr1 = str1.replace(reg, "<font color=red>$1</font>");
                      val.content = newstr1;
                    }
                 });
                 

                 _this.searchtext = data.resultData; 
                 _this.total = data.total; 
                 _this.countryLiterature = ''; 
                 _this.erJirestData = ''; 
                 _this.$Spin.hide();  //隐藏加载中...
                 _this.$Message.success('检索完成，共'+ data.total + '条' );      
              }
           });
      },
      getField (name) {   //获取字段全文检索
          const _this = this;
          _this.$Spin.show();  //显示加载中...
          const getCountryLiterature = _this.global.$post({
            '_this': _this,
            'url': _this.global.Domain.api1+'/document/search/fields',
            'data': {
              fieldlist: name
            },
            'f_resolve': function(data){
                //console.log('%%%%%%%%%%%%%%%%', data);
                //_this.countryLiterature = data;
                //console.log('%%%%%%%%%%%%%%%%%%%%%%', data.发布年);
                let arrobj = [];
                for(var i=0; i<10; i++) {
                  arrobj[i] = [];
                }
                data.发布年.forEach(function(val, index) {
                  //console.log(val.charAt(val.length - 2));
                  if( val.charAt(val.length - 2) == '0' ){
                      arrobj[0].push(val);
                  }else if( val.charAt(val.length - 2) == '1' ) {
                      arrobj[1].push(val);
                  }else if( val.charAt(val.length - 2) == '2' ) {
                      arrobj[2].push(val);
                  }else if( val.charAt(val.length - 2) == '3' ) {
                      arrobj[3].push(val);
                  }else if( val.charAt(val.length - 2) == '4' ) {
                      arrobj[4].push(val);
                  }else if( val.charAt(val.length - 2) == '5' ) {
                      arrobj[5].push(val);
                  }else if( val.charAt(val.length - 2) == '6' ) {
                      arrobj[6].push(val);
                  }else if( val.charAt(val.length - 2) == '7' ) {
                      arrobj[7].push(val);
                  }else if( val.charAt(val.length - 2) == '8' ) {
                      arrobj[8].push(val);
                  }else if( val.charAt(val.length - 2) == '9' ) {
                      arrobj[9].push(val);
                  }


                  //console.log(val);
                })
                let arrobj1 = [];
                arrobj.forEach(function(val, index) {   //.splice(1,1)
                    if(val[0]) {
                      arrobj1.push(val);
                    }
                })
                arrobj = arrobj1;
                //console.log('&&&&&&&&&&&&&&&&&&', arrobj);

                _this.yearContent = arrobj;

                let titlearr = [];
                arrobj.forEach(function(val) {
                    if(val[0]){
                        titlearr.push(val[val.length-1] +'-'+ val[0]);
                    }
                })
                //console.log('%%%%%%%%%%%%%', titlearr);
                _this.yearTitle = titlearr;

                _this.field = data;
                _this.$Spin.hide();  //隐藏加载中...
            }
          });
      },
      titleClick(i) {  //获取区间发布年
          //alert(i);
          const _this = this;
          //console.log('**********', _this.yearContent[i]);
          _this.field.发布年 = _this.yearContent[i];
      },
      handleSubmit () {  //高级检索
        const _this = this;
        _this.$Spin.show();  //显示加载中...

        //let keyWord = '{"'+ _this.headline1 +'":{"type":"","keyword":"'+ _this.headlineInt1 +'"},"'+ _this.headline2 +'":{"type":"'+ _this.type +'","keyword":"'+ _this.headlineInt2 +'"}}'

        let keyWordList = [
            {'name': _this.headline1, 'type': '', 'keyword': _this.headlineInt1}, 
            //{'name': _this.headline2, 'type': _this.type, 'keyword': _this.headlineInt2} 
        ]
        let advancedSearch = _this.formDynamic.items;
        advancedSearch.forEach(function(val) {
            let a = {'name': val.headline2, 'type': val.type, 'keyword': val.headlineInt2};
            keyWordList.push(a);
        })

        let fieldList = {"信息来源全称": _this.informationSource.join(), "作品语种": _this.language.join(), "主题国": _this.country.join(), "发布年":_this.publishyear.join()};
        //console.log(fieldList);

        $.ajax({
              type: "POST",
              url: _this.global.Domain.api1 +'/document/search',
              data: {
                keywordlist: JSON.stringify(keyWordList),  
                fieldlist:  JSON.stringify(fieldList),   
                index_start:  _this.index_start2,   //开始条数 
                page_size: _this.page_size2,        //获取条数 
              },
              dataType: "json",
              success: function(data){
                //console.log(data);
                _this.erJirestData = data.resultData;
                _this.total2 = data.total; 
                _this.searchtext = '';
                _this.countryLiterature = '';
                _this.$Spin.hide();  //隐藏加载中...
                _this.$Message.success('检索完成，共'+ data.total + '条' );
              }
        });


        //console.log(_this.formItem);
      },
      handleReset (name) {
          const _this = this;
          _this.$refs[name].resetFields();
      },
     
      setLocalStorage() {
        const _this = this
        let keyWordList = [
            {'name': _this.headline1, 'type': '', 'keyword': _this.headlineInt1}, 
            {'name': _this.headline2, 'type': _this.type, 'keyword': _this.headlineInt2} 
        ]
        let fieldList = {"信息来源全称": _this.informationSource.join(), "作品语种": _this.language.join(), "主题国": _this.country.join(), "发布年":_this.publishyear.join()};

        window.localStorage['keywordlist'] = JSON.stringify(keyWordList) 
        window.localStorage['fieldlist'] = JSON.stringify(fieldList)
      }
  },
  watch: {
    '$router': function(to, form) {
      console.log(form);
        if( from.name == "globalsearch"){
            //console.log(888);
        } 
    },
    /*headline1: function(){
      this.setLocalStorage()
    },
    headlineInt1: function(){
      this.setLocalStorage()
    },
    headline2: function(){
      this.setLocalStorage()
    },
    headlineInt2: function(){
      this.setLocalStorage()
    },
    informationSource: function(){
      this.setLocalStorage()
    },
    language: function(){
      this.setLocalStorage()
    },
    country: function(){
      this.setLocalStorage()
    },
    publishyear: function(){
      this.setLocalStorage()
    }*/
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';
.GlobalSearch{

  @media only screen and (max-width: 800px) {
    /* margin-top: -0.6rem !important; */
    .container-main{
        width: 100% !important;
        .second{
            width: 100% !important;
            display: inline-block !important;
            padding: 0 !important;
        }
        .slide{ 
            display: block !important;
        }
    }
  }

  margin-top: 20px;

  .info-box{
    float: left;
    display: inline-block;
    width: 20%;
    margin: 0;
    border: none;
    &:nth-of-type(2n){
      padding-right: 0px;
    }
    &.top{
      width: 100%;
      display: inline-block;
      padding: 0;
    }
  }
  .info-box1{
    padding: 10px;
    float: left;
    
    display: inline-block;
    width: 100%;
    margin: 0;
    border: none;
    &:nth-of-type(2n){
      padding-right: 5px;
    }
    &.top{
      width: 100%;
      display: inline-block;
      padding: 0;
    }

    .searchresult{
        font-size: 14px;
        display: inline-block;
        text-align: left;
        vertical-align: middle;
        width: 100%;

        a{
            display: inline-block;
            padding: 2px 15px;

            p{
                
                font-weight: bold;
            }
        }
    }
    .link-text{
        display: inline-block;
        width: 100%;
        height: auto;
        margin-bottom: 5px;
        span{
          color: #999999;
          font-size: 12px;
        }
        &:hover{
            text-decoration: none;
            background: @table-td-hover-bg;
        }
    }


    .countryinfolist{
      .item{
        position: relative;
        width:100%;
        display: inline-block;
        border-bottom: 1px dashed #E9EAEC;

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
  .second{ border: 1px solid #E9EAEC; margin-top: 20px; }

}
</style>
