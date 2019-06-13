<template>
  <div class="Home">

    <div class="container-main clearfix">
      
      <div class="info-box second">
        <PolicyInfoBox icon-type="ios-book" info-name="营商环境" more-link="/policyalllist/list/1" class-id="" type="1" length="25"/>
      </div>
       <div class="info-box second" style="margin-left: 1%">
          <PolicyInfoBox icon-type="ios-paper" info-name="农业政策" more-link="/policyalllist/list/2" class-id="" type="2" length="25"/>
       </div>
      <!-- <div class="info-box second">
        <PolicyInfoBox icon-type="ios-pulse-strong" info-name="农业标准" more-link="/policyalllist/list/3" class-id="" type="3" length="5"/>
      </div> -->
      
     
    </div>
  </div>
</template>
<script>
// import HomeInfoBox from '@/components/HomeInfoBox'
import PolicyInfoBox from '@/components/PolicyInfoBox'


export default {
  name: 'PolicyAllList',
  components: {
    // HomeInfoBox: HomeInfoBox,
    PolicyInfoBox: PolicyInfoBox
  },
  data: function () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.Home{

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

  margin-top: 10px;

  .info-box{
    float: left;
    display: inline-block;
    width: 49.5%;
    margin: 0;
    border: none;

    &:nth-of-type(2n){
      padding-right: 5px;
    }

    &.news{
      width: 100%;
      display: inline-block;
      padding: 0;
    }
    
    
  
    
  }
}
</style>
