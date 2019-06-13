<template>
  <div class="Home">

    <div class="container-main clearfix">

      
      <div class="info-box9 second">
        <PcInfoBox icon-type="ios-book" info-name="投资指南" more-link="/foreigncooperation/list/1" class-id="" type="1" length="8"/>
      </div>
       <div class="info-box9 second" style="margin-left: 1%">
          <PcInfoBox icon-type="ios-paper" info-name="风险预警" more-link="/foreigncooperation/list/2" class-id="" type="2" length="8"/>
       </div>
      <div class="info-box9 second">
        <PcInfoBox icon-type="ios-pulse-strong" info-name="案例分析" more-link="/foreigncooperation/list/3" class-id="" type="3" length="8"/>
      </div>
      <div class="info-box9 second" style="margin-left: 1%">
        <Card class="card" style="height:350px; margin-top: 10px; width: 100%">
            <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>科技成果</p>
            <router-link tag="a" :to="{name:'cckjcginfobox'}" slot="extra" class="link-more">More&nbsp;<Icon class="icon" type="arrow-right-b"></Icon></router-link>
                <ul class="infolist9">
                  <li class="item" v-for="(item, index) in product" style="padding: 5px 10px">
                    <router-link class="link-text" :key="index" :to="{name:'pcdetail', params:{ typeid: index+1}}">
                      <b class="title text-nowrap" style="font-size: 14px;color:black;">{{ item }}</b>
                      <!-- <p class="digest">{{item.Zhaiyao}}</p> -->
                    </router-link>
                  </li>
                </ul>
          </Card>
      </div>
      <!-- <div class="info-box second" style="margin-left: 1%">
        <PcInfoBox icon-type="ios-pulse-strong" info-name="合作项目" more-link="/foreigncooperation/list/4" class-id="" type="4" length="9"/>
      </div> -->
      <!-- <div class="info-box second">
        <PcInfoBox icon-type="ios-pulse-strong" info-name="涉农企业" more-link="/foreigncooperation/list/5" class-id="" type="5" length="5"/>
      </div> -->
      
     
    </div>
  </div>
</template>
<script>
// import HomeInfoBox from '@/components/HomeInfoBox'
import PcInfoBox from '@/components/PcInfoBox'


export default {
  name: 'ForeignCooperation',
  components: {
    // HomeInfoBox: HomeInfoBox,
    PcInfoBox: PcInfoBox
  },
  data: function () {
    return {
      product: ['禽流感高效疫苗成果获国际转化', '绿色超级稻”在第三世界', '微生物蛋白质新农药“阿泰灵”走向海外市场', '植物保护研究所引领国际生物入侵研究']
    }
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

  .info-box9{
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
    
    .infolist9{
        .item{
          &:hover{
              background: #EBF7FF;
              text-decoration: none;
          }
        }
    }
    
  
    
  }
}
</style>
