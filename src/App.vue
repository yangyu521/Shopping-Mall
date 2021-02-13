<template>
  <div id="app">
     <main-tabbar></main-tabbar>
    
    <keep-alive exclude="Detail">
      <router-view/>
   </keep-alive>
  </div>
</template>

<script>
import mainTabbar from 'components/content/mainTabbar'

export default {
  name: 'App',
  components: {
    mainTabbar,
    
  }
}
</script>
   
<style>
@import 'assets/css/base.css';

</style>
