<template>
  <div class="Country">
    <div class="container-main clearfix">
      <!-- <div class="title-img" v-if="location.href.indexOf('list')>0" style="background: url(/static/img/CountryAndArea.jpg) no-repeat center; background-size: cover;"></div> -->
      <div class="container-main">
      	<router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Country',
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
        margin-top: 0.5rem !important;
    }
    .title-img{ display: none !important; }
  }
</style>