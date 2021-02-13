<template>
  <div class="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
      <navcontrol
        class="tab-nav"
        :navcontrols="navcontrols"
        @tabControl="tabControl"
        ref='Control1' 
        v-show="isTabFixed"
      />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll" :pull-up-load="true" @pullingUp="loadMore">
      <child-swiper :banners="banners" @swiperLmageLoad="swiperLmageLoad"/>
      <recommend :recommends="recommends" />
      <feature />
      <navcontrol
        class="tab-nav"
        :navcontrols="navcontrols"
        @tabControl="tabControl"
        ref='Control2' 
      />
      <goods-list :goods="showMessage" />
    </scroll>
    <back-top @click.native="backTop" v-show='isShowBackTop' />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from "components/common/navbar/NavBar";
import navcontrol from "components/common/navControl/navcontrol";
import Sroll from "components/common/scroll/scroll";

import goodsList from "components/content/goods/goodsList";
import backTop from "components/content/backTop/backTop";

import childSwiper from "./childcom/childSwiper";
import Recommend from "./childcom/Recommen";
import feature from "./childcom/featureview";

import { getHomeMultidata, getHomeGoods } from "network/home";
import Navcontrol from "../../components/common/navControl/navcontrol.vue";
import Scroll from "../../components/common/scroll/scroll.vue";
import BScroll from "better-scroll";
import BackTop from "../../components/content/backTop/backTop.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "home",
  components: {
    NavBar,
    childSwiper,
    Recommend,
    feature,
    navcontrol,
    goodsList,
    Scroll,
    backTop,
    BackTop
  },
  data() {
    //这里存放数据
    return {
      banners: [],
      recommends: [],
      navcontrols: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
      
    };
  },
  //监听属性 类似于data概念
  computed: {
    showMessage() {
      return this.goods[this.currentType].list;
    },
  },
   activated(){
   this.$refs.scroll.scrollTo(0,this.saveY,0)
   this.$refs.scroll.refresh()
  },
  deactivated(){
   this.saveY = this.$refs.scroll.getScrollY()
  },

  //监控data中的数据变化
  //方法集合
  methods: {

    debounce(func,delay){
      let timer = null;
      return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    },

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        (this.banners = res.data.banner.list),
          (this.recommends = res.data.recommend.list);
        // console.log(this.recommends)
      });
         },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },
    // 拿到子组件的数据
    tabControl(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.Control1.currentIndex = index;
      this.$refs.Control2.currentIndex = index;
    },
     contentscroll(position){
       this.isShowBackTop = (-position.y)>1000
       this.isTabFixed = (-position.y)>this.tabOffsetTop
      },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    
    loadMore(){
     this.getHomeGoods(this.currentType)
    },
    swiperLmageLoad(){
     this.tabOffsetTop = this.$refs.Control2.$el.offsetTop
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //请求多条数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    //请求商品数据
    //监听item图片加载完成
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted(){
    //  this.$bus.$on('itemImageLoad',()=>{
    //  this.$refs.scroll.scroll.refresh()
    // })
    const refresh = this.debounce(this.$refs.scroll.refresh,100)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
  },
 
};
</script>
<style scoped>
.home {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: pink;
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999; */
}
.tab-nav {
  position: sticky;
  top: 44px;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
