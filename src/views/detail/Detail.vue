<template>
  <div>
      <detail-nav-bar/>
      <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import detailNavBar from "./childComs/detailNavBar";
import DetailSwiper from './childComs/DetailSwiper'
import {getDetail} from 'network/detail'
export default {
name:'Detail',
components:{
        detailNavBar,
        DetailSwiper
},
data(){
    return{
        iid:null,
        topImages:[],
        goods:{}
    }
},
created(){
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res=>{
        console.log(res)
        this.topImages = res.result.itemInfo.topImages
    })
}

}
</script>

<style code>

</style>