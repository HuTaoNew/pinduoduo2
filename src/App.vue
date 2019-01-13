<template>
  <div id="app">
    <router-view/>
    <FootNav></FootNav>
  </div>
</template>

<script>
import FootNav from '@/components/FootNav'

export default {
  name: "app",
  components: {
    FootNav
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
