<template>
<div>
  <div class="wrapper">
  <ul class="content">
    <li>滚动11</li>
    <li>滚动21</li>
    <li>滚动31</li>
    <li>滚动41</li>
    <li>滚动51</li>
    <li>滚动61</li>
    <li>滚动71</li>
    <li>滚动81</li>
    <li>滚动91</li>
    <li>滚动101</li>
    <li>滚动111</li>
    <li>滚动121</li>
    <li>滚动131</li>
    <li>滚动141</li>
    <li>滚动151</li>
    <li>滚动161</li>
    <li>滚动171</li>
    <li>滚动181</li>
    <li>滚动191</li>
    <li>滚动201</li>
    <li>滚动211</li>
    <li>滚动221</li>
    <li>滚动231</li>
    <li>滚动241</li>
    <li>滚动251</li>
    <li>滚动261</li>
    <li>滚动271</li>
    <li>滚动281</li>
    <li>滚动291</li>
    <li>滚动301</li>
    <li>滚动311</li>
    <li>滚动321</li>
    <li>滚动331</li>
    <li>滚动341</li>
    <li>滚动351</li>
    <li>滚动361</li>
    <li>滚动371</li>
    <li>滚动381</li>
    <li>滚动391</li>
    <li>滚动401</li>
    <li>滚动411</li>
    <li>滚动421</li>
    <li>滚动431</li>
    <li>滚动441</li>
    <li>滚动451</li>
    <li>滚动461</li>
    <li>滚动471</li>
    <li>滚动481</li>
    <li>滚动491</li>
    <li>滚动501</li>
    <li>滚动511</li>
    <li>滚动521</li>
    <li>滚动531</li>
    <li>滚动541</li>
    <li>滚动551</li>
    <li>滚动561</li>
    <li>滚动571</li>
    <li>滚动581</li>
    <li>滚动591</li>
    <li>滚动601</li>
    <li>滚动611</li>
    <li>滚动621</li>
    <li>滚动631</li>
    <li>滚动641</li>
    <li>滚动651</li>
    <li>滚动661</li>
    <li>滚动671</li>
    <li>滚动681</li>
    <li>滚动691</li>
    <li>滚动701</li>
    <li>滚动711</li>
    <li>滚动721</li>
    <li>滚动731</li>
    <li>滚动741</li>
    <li>滚动751</li>
    <li>滚动761</li>
    <li>滚动771</li>
    <li>滚动781</li>
    <li>滚动791</li>
    <li>滚动801</li>
    <li>滚动811</li>
    <li>滚动821</li>
    <li>滚动831</li>
    <li>滚动841</li>
    <li>滚动851</li>
    <li>滚动861</li>
    <li>滚动871</li>
    <li>滚动881</li>
    <li>滚动891</li>
    <li>滚动901</li>
    <li>滚动911</li>
    <li>滚动921</li>
    <li>滚动931</li>
    <li>滚动941</li>
    <li>滚动951</li>
    <li>滚动961</li>
    <li>滚动971</li>
    <li>滚动981</li>
    <li>滚动991</li>
    <li>滚动1001</li>
  </ul>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from "better-scroll"
export default {
//import引入的组件需要注入到对象中才能使用
name:"category",
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  let scroll =  new BScroll('.wrapper',{
     probeType:3,
     pullUpLoad:true
    })
    scroll.on('scroll',(position)=>{
        console.log(position)
    })
    scroll.on('pullingUp',()=>{
      console.log("上拉更多")
    })
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
*{
  margin: 0;
  padding: 0;
}
.wrapper{
 height: 150px;
 background-color: red;
}
</style>