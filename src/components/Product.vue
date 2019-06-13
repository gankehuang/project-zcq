<template>
  <div class="Product">
    <div class="container-main clearfix">
      <!-- <div class="title-img" v-if="location.href.indexOf('list')>0" style="background: url(/static/img/IndustryAndProduct.jpg) no-repeat center; background-size: cover;"></div> -->
      <div class="container-main">
      	<router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data: function(){
  	return {
  		'location': window.location
  	}
  }
}
</script>

<style lang="less" scoped>
  @media only screen and (max-width: 800px) {
    .container-main{
        width: 100% !important;
        .title-img{
            display: none !important;
        }
    }
    .Product{
        margin-top: 0.4rem !important;
    }
  }
</style>