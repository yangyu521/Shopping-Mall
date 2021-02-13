<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "backTop",
  components: {}
};
</script>
<style scoped>
.backTop {
  position: fixed;
  z-index: 999;
  right: 8px;
  bottom: 60px;
}
.backTop img {
  width: 40px;
  height: 40px;
}
</style>
