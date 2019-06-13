<template>
  <div class="Policy">
    <div class="container-main clearfix">
      <div class="title-img" v-if="location.href.indexOf('list')>0" v-bind:style="{background:'url('+ title_img +') center center / cover no-repeat'}"></div>
    	<div class="container-main">
      	<router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Policy',
  data: function () {
  	return {
  		'location': window.location,
  		'title_img': ''
  	}
  },
  mounted: function(){
  	this.page_init();
  },
  methods: {
  	'page_init': function(){
    	switch(parseInt(this.$route.params.typeid)){
    		// 新闻动态
    		case 1:
    			this.title_img = '/static/img/DataAndAnalysis.jpg';
    			break;
    		// 政策法规
    		case 2:
    			this.title_img = '/static/img/PolicyAndStatute.jpg';
    			break;
    		// 监测预警
    		case 3:
    			this.title_img = '/static/img/SurveyAndWarning.jpg';
    			break;
    		// 投资实务
    		case 4:
    			this.title_img = '/static/img/InvestmentPractice.jpg';
    			break;
    		// 研究报告
    		case 5:
    			this.title_img = '/static/img/ResearchReport.jpg';
    			break;
    		default:
    			this.title_img = '/static/img/ResearchReport.jpg';
    	}
  	}
  },
  watch: {
    $route: function(){
    	this.page_init();
    }
  }
}
</script>

<style lang="less" scoped>


@media only screen and (max-width: 800px) {
  .container-main{
      width: 100% !important;
      margin-top: 0.1rem !important;
  }
  .title-img{
      display: none !important;
  }

}
</style>