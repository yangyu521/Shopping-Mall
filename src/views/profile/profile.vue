<!--  -->
<template>
 <scroll class="wrapp">
   <ul class="btn">
  <li>你好1</li>
  <li>你好2</li>
  <li>你好3</li>
  <li>你好4</li>
  <li>你好5</li>
  <li>你好6</li>
  <li>你好7</li>
  <li>你好8</li>
  <li>你好9</li>
  <li>你好10</li>
  <li>你好11</li>
  <li>你好12</li>
  <li>你好13</li>
  <li>你好14</li>
  <li>你好15</li>
  <li>你好16</li>
  <li>你好17</li>
  <li>你好18</li>
  <li>你好19</li>
  <li>你好20</li>
  <li>你好21</li>
  <li>你好22</li>
  <li>你好23</li>
  <li>你好24</li>
  <li>你好25</li>
  <li>你好26</li>
  <li>你好27</li>
  <li>你好28</li>
  <li>你好29</li>
  <li>你好30</li>
  <li>你好31</li>
  <li>你好32</li>
  <li>你好33</li>
  <li>你好34</li>
  <li>你好35</li>
  <li>你好36</li>
  <li>你好37</li>
  <li>你好38</li>
  <li>你好39</li>
  <li>你好40</li>
  <li>你好41</li>
  <li>你好42</li>
  <li>你好43</li>
  <li>你好44</li>
  <li>你好45</li>
  <li>你好46</li>
  <li>你好47</li>
  <li>你好48</li>
  <li>你好49</li>
  <li>你好50</li>
  </ul>
 </scroll>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Scroll from "components/common/scroll/scroll"
export default {
//import引入的组件需要注入到对象中才能使用
name:"profile",
components: {
  Scroll
},
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
.wrapp{
  height: 150px;
  background-color: red;
}
</style>