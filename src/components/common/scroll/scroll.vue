<template>
  <div class="wrapper" ref="aaa">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from "better-scroll";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "scroll",
  components: {},
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    //这里存放数据
    return {
      scroll: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, (time = 300));
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.scroll = new BScroll(this.$refs.aaa, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click:true
    });
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit('scroll',position)
    });
    //监听上拉事件
    if(this.pullUpLoad){
 this.scroll.on("pullingUp", () => {
      this.$emit('pullingUp')
       console.log('到底了')
    });
    }
   
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped></style>
