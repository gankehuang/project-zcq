import Vue from 'vue'
import Router from 'vue-router'
/*import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
import Country from '@/components/Country'
import CountryList from '@/components/CountryList'
import CountryDetail from '@/components/CountryDetail'
import CountryDetailEN from '@/components/CountryDetailEN'
import Policy from '@/components/Policy'
import PolicyList from '@/components/PolicyList'
import PolicyDetail from '@/components/PolicyDetail'
import Product from '@/components/Product'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'
import ProductDetailEN from '@/components/ProductDetailEN'
import SearchList from '@/components/SearchList'
import SearchDetail from '@/components/SearchDetail'
import DataAnalyse from '@/components/DataAnalyse'
import SlideshowPhoto from '@/components/SlideshowPhoto'
import CountryMaplist from '@/components/CountryMaplist'
import Overseas from '@/components/Overseas'
import Pdf from '@/components/Pdf'
import PolicyAllList from '@/components/PolicyAllList'
import NewList from '@/components/NewList'
import PolicyAllDetail from '@/components/PolicyAllDetail'
import ForeignCooperation from '@/components/ForeignCooperation'
import PcList from '@/components/PcList'
import PcInfoBox from '@/components/PcInfoBox'
import PcAllDetail from '@/components/PcAllDetail'
import ProductListEN from '@/components/ProductListEN'
import CountryListEN from '@/components/CountryListEN'
import LiteratureDetail from '@/components/LiteratureDetail'
import LiteratureDetailTwo from '@/components/LiteratureDetailTwo'
import GlobalSearch from '@/components/GlobalSearch'
import PolicyNewList from '@/components/PolicyNewList'
import DataAnalyseTable from '@/components/DataAnalyseTable'
import CountryReportAllList from '@/components/CountryReportAllList'
import AboutUs from '@/components/AboutUs'     
import LiteratureDetailThree from '@/components/LiteratureDetailThree'    
import LiteratureDetailFour from '@/components/LiteratureDetailFour'    
import PcKJCGInfoBox from '@/components/PcKJCGInfoBox'    
import PcDetail from '@/components/PcDetail'*/    


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      //component: Login,
      component: resolve => require(['@/components/Login'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      //component: Home,
      component: resolve => require(['@/components/Home'], resolve),
      meta: {
        'title': '首页',
        'back_show': false
      }
    },
    {
      path: '/aboutus/:typeid',
      name: 'aboutus',
      //component: AboutUs
      component: resolve => require(['@/components/AboutUs'], resolve)
    },
    {
      path: '/countrymaplist',
      name: 'countrymaplist',
      //component: CountryMaplist
      component: resolve => require(['@/components/CountryMaplist'], resolve),
    },
    {
      path: '/countryreportalllist/:typeid',
      name: 'countryreportalllist',
      //component: CountryReportAllList
      component: resolve => require(['@/components/CountryReportAllList'], resolve),
    },
    {
      path: '/globalsearch/:show',
      name: 'globalsearch',
      //component: GlobalSearch,
      component: resolve => require(['@/components/GlobalSearch'], resolve),
      meta: { keepAlive: true }   //当前的.vue文件需要缓存
    },
    {
      path: '/searchlist/:searchkey',
      name: 'searchlist',
      //component: SearchList
      component: resolve => require(['@/components/SearchList'], resolve),
    },
    {
      path: '/searchdetail/:typetext/:searchkey',
      name: 'searchdetail',
      //component: SearchDetail
      component: resolve => require(['@/components/SearchDetail'], resolve),
    },
    {
    	path: '/hello',
      name: 'hello',
    	//component: HelloWorld
      component: resolve => require(['@/components/HelloWorld'], resolve),
    },
    {
      path: '/literaturedetail/:title',
      name: 'literaturedetail',
      //component: LiteratureDetail
      component: resolve => require(['@/components/LiteratureDetail'], resolve),
    },
    {
      path: '/literaturedetailtwo/:title',
      name: 'literaturedetailtwo',
      //component: LiteratureDetailTwo
      component: resolve => require(['@/components/LiteratureDetailTwo'], resolve),
    },
    {
      path: '/literaturedetailfour/:title',
      name: 'literaturedetailfour',
      //component: LiteratureDetailFour
      component: resolve => require(['@/components/LiteratureDetailFour'], resolve),
    },
    {
      path: '/literaturedetailthree/:unique_code',
      name: 'literaturedetailthree',
      //component: LiteratureDetailThree
      component: resolve => require(['@/components/LiteratureDetailThree'], resolve)
    },
    {
      path: '/country',
      //component: Country,
      component: resolve => require(['@/components/Country'], resolve),
      children: [{
        path: 'list',
        name: 'countrylist',
        //component: CountryList,
        component: resolve => require(['@/components/CountryList'], resolve),
        meta: {
          'title': '国家列表',
          'back_show': true,
          'back_url': '/home'
        }
      },{
        path: 'listen',
        name: 'countrylisten',
        //component: CountryListEN
        component: resolve => require(['@/components/CountryListEN'], resolve)
      },{
        path: 'list/:areaid',
        name: 'countrylistwithareaid',
        //component: CountryList
        component: resolve => require(['@/components/CountryList'], resolve)
      },{
        path: 'detail/:countryid',
        name: 'countrydetail',
        //component: CountryDetail
        component: resolve => require(['@/components/CountryDetail'], resolve)
      },{
        path: 'detailen/:countryid',
        name: 'countrydetailen',
        //component: CountryDetailEN
        component: resolve => require(['@/components/CountryDetailEN'], resolve)
      }]
    },
    {
      path: '/overseas',
      name: 'overseas',
      //component: Overseas
      component: resolve => require(['@/components/Overseas'], resolve)
      /*children: [{
        path: 'pdf/',
        name: 'pdf',
        component: Pdf
      }]*/
    },
    {
      path: 'overseaslist/:srcPath',
      name: 'pdf',
      //component: Pdf
      component: resolve => require(['@/components/Pdf'], resolve)
    },
    {
      path: '/policyalllist',
      name: 'policyalllist',
      //component: PolicyAllList
      component: resolve => require(['@/components/PolicyAllList'], resolve)
    },
    {
      path: '/policynewlist/:typeid',
      name: 'policynewlist',
      //component: PolicyNewList
      component: resolve => require(['@/components/PolicyNewList'], resolve)
    },
    {
      path: '/policynewlistrelatednews/:typeid',
      name: 'policynewlistrelatednews',
      //component: PolicyNewList
      component: resolve => require(['@/components/PolicyNewListRelatedNews'], resolve)
    },
    {
      path: '/policyalllist/list/:typeid',
      name: 'newlist',
      //component: NewList
      component: resolve => require(['@/components/NewList'], resolve)
    },
    {
      path: '/policyalllist/detail/:articleid',
      name: 'policyalldetail',
      //component: PolicyAllDetail
      component: resolve => require(['@/components/PolicyAllDetail'], resolve)
    },

    {
      path: '/foreigncooperation',
      name: 'foreigncooperation',
      //component: ForeignCooperation
      component: resolve => require(['@/components/ForeignCooperation'], resolve)
    },
    {
      path: '/cckjcginfobox',
      name: 'cckjcginfobox',
      //component: PcKJCGInfoBox
      component: resolve => require(['@/components/PcKJCGInfoBox'], resolve)
    },
    {
      path: '/foreigncooperation/list/:typeid',
      name: 'pclist',
      //component: PcList
      component: resolve => require(['@/components/PcList'], resolve)
    },
    {
      path: '/pcalllist/detail/:articleid',
      name: 'pcalldetail',
      //component: PcAllDetail
      component: resolve => require(['@/components/PcAllDetail'], resolve)
    },
    {
      path: '/pcdetail/:typeid',
      name: 'pcdetail',
      //component: PcDetail
      component: resolve => require(['@/components/PcDetail'], resolve)
    },
    {
      path: '/policy',
      //component: Policy,
      component: resolve => require(['@/components/Policy'], resolve),
      children: [{
        path: 'list/:typeid',
        //path: 'list',
        name: 'policylist',
        //component: PolicyList
        component: resolve => require(['@/components/PolicyList'], resolve)
      },{
        path: 'list/:policyid',
        name: 'policylistwithareaid',
        //component: PolicyList
        component: resolve => require(['@/components/PolicyList'], resolve)
      },{
        path: 'detail/:articleid',
        name: 'policydetail',
        //component: PolicyDetail
        component: resolve => require(['@/components/PolicyDetail'], resolve)
      },{
        path: 'detail/:typeid/:articleid',
        name: 'policydetailwithtype',
        //component: PolicyDetail
        component: resolve => require(['@/components/PolicyDetail'], resolve)
      }]
    },
    {
      path: '/Product',
      //component: Product,
      component: resolve => require(['@/components/Product'], resolve),
      children: [{
        path: 'list',
        name: 'productlist',
        //component: ProductList
        component: resolve => require(['@/components/ProductList'], resolve)
      },{
        path: 'listen',
        name: 'productlisten',
        //component: ProductListEN
        component: resolve => require(['@/components/ProductListEN'], resolve)
      },{
        path: 'list/:productid',
        name: 'productlistwithareaid',
        //component: ProductList
        component: resolve => require(['@/components/ProductList'], resolve)
      },{
        path: 'detail/:imageid',
        name: 'productdetail',
        //component: ProductDetail
        component: resolve => require(['@/components/ProductDetail'], resolve)
      },{
        path: 'detailen/:imageid',
        name: 'productdetailen',
        //component: ProductDetailEN
        component: resolve => require(['@/components/ProductDetailEN'], resolve)
      }]
    },
    {
      path: '/dataanalyse',
      name: 'dataanalyse',
      //component: DataAnalyse
      component: resolve => require(['@/components/DataAnalyse'], resolve)
    },
    {
      path: '/dataanalysetable/:typeid',
      name: 'dataanalysetable',
      meta: { 
          requireAuth: true  // 配置此条，进入页面前判断是否需要登陆 
      },
      //component: DataAnalyseTable
      component: resolve => require(['@/components/DataAnalyseTable'], resolve)
    }
  ]
})
