<template>
 <div class="minirefresh minirefresh-wrap">
    <div class="minirefresh-scroll">
         <router-link tag="a" :to="moreLink || '/'" slot="extra">More</router-link>
    </div>
</div>
</template>
 
<script>
import MiniRefreshTools from 'minirefresh';
import 'minirefresh/dist/debug/minirefresh.css'


export default {
  name: 'CommonRefresh',
  data: function(){
    return {
      moreLink: '/hello'
    }
  },
  mounted: function(){
    var miniRefresh = new MiniRefresh({
      container: '.minirefresh',
      up: {
        callback: function() {
          // 上拉事件

          // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
          miniRefresh.endUpLoading(true);
        }
      }
    });
    miniRefresh.endUpLoading(true);
  },
  methods: {
  }
}
</script>
