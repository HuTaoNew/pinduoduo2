<template>
  <div class="popular">
    <!-- Slider main container -->
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide"><img src="@/common/img/rowing/s1.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="@/common/img/rowing/s2.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="@/common/img/rowing/s3.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="@/common/img/rowing/s4.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="@/common/img/rowing/s5.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="@/common/img/rowing/s6.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="@/common/img/rowing/s7.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="@/common/img/rowing/s8.png" alt="" width="100%"></div>
        <div class="swiper-slide"><img src="@/common/img/rowing/s9.png" alt="" width="100%"></div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <HotNav></HotNav>

    <div class="hot-ad">
      <img src="@/common/img/hot_ad/home_ad.gif" alt="" width="100%">
    </div>
    
    <Shoplist></Shoplist>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HotNav from '@/components/HotNav'
import Shoplist from '@/components/Shoplist'

export default {
  name: "Popular",
  components:{
    HotNav,
    Shoplist
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.popular {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  padding-top: 46px;
}
</style>