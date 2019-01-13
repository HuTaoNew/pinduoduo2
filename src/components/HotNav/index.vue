<template>
  <div class="hot-nav">
    <!-- 滚动区域 -->
    <div class="hot-nav-content" >
      <div class="nav-content-inner">
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon01.png" alt>
          <span>限时秒杀</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon02.png" alt>
          <span>断码清仓</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon03.png" alt>
          <span>品牌馆</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon04.png" alt>
          <span>多多果园</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon05.png" alt>
          <span>9块9特卖</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon06.gif" alt>
          <span>助力享免单</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon07.png" alt>
          <span>组队寻宝</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon08.png" alt>
          <span>1分抽大奖</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon09.png" alt>
          <span>充值中心</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon10.png" alt>
          <span>爱逛街</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon11.png" alt>
          <span>现金签到</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon12.png" alt>
          <span>食品超市</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon13.png" alt>
          <span>电器城</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon14.png" alt>
          <span>时尚穿搭</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon15.png" alt>
          <span>砍价免费拿</span>
        </div>
        <div class="inner-item">
          <img src="@/common/img/nav/nav_icon16.png" alt>
          <span>帮帮免费团</span>
        </div>
      </div>
    </div>
    <div class="hot-nav-botton">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotnav",
  data() {
    return {
      // 屏幕的宽度
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      // 滚动内容的宽度
      scrollContentW: 720,
      // 滚动条背景长度
      bgBarW: 100,
      // 滚动条的长度
      barXWidth: 0,
      // 起点
      startX: 0,
      //记录结束点
      endFlag: 0,
      //移动距离
      barMoveWidth: 0
    };
  },
  computed:{
    innerBarStyle(){
      return {
        width: `${this.barXWidth}px`,
        left: `${this.barMoveWidth}px`
      }
    }
  },
  mounted(){
    this.getBottomBarWidth();
    this.bindEvent();
  },
  methods:{
    getBottomBarWidth(){
      this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW);
    },
    // 移动端的事件监听
    bindEvent(){
      this.$el.addEventListener('touchstart', this.handleTouchStart,false);
      this.$el.addEventListener('touchmove', this.handleTouchMove,false);
      this.$el.addEventListener('touchend', this.handleTouchEnd,false);
    },
    // 开始触摸
    handleTouchStart(event){
      // console.log(event.touches);

      let touch = event.touches[0];
      this.startX = Number(touch.pageX);

    },
    // 开始移动
    handleTouchMove(event){
      // console.log('开始移动');
      let touch = event.touches[0];
      let moveWidth = Number(touch.pageX) - this.startX;
      this.barMoveWidth = -(this.bgBarW / this.scrollContentW * moveWidth - this.endFlag);
      if (this.barMoveWidth <=0){
        this.barMoveWidth = 0;
      }else if (this.barMoveWidth >= this.bgBarW - this.barXWidth){
        this.barMoveWidth = this.bgBarW - this.barXWidth;
      }


    },
    // 结束触摸
    handleTouchEnd(){
      // console.log('结束触摸');
      this.endFlag = this.barMoveWidth;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hot-nav-botton {
  width: 100px;
  height: 2px;
  background-color: #ccc;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  bottom: 4px;
}

.hot-nav-bottom-inner {
  position: absolute;
  left: 0;
  height: 100%;
  background-color: orangered;
  width: 5px;
}

.hot-nav {
  width: 100%;
  height: 165px;
  position: relative;
  background-color: #fff;
  padding-bottom: 10px;
}

.hot-nav-content {
  width: 100%;
  overflow-x: scroll;
}
.hot-nav-content::-webkit-scrollbar {
  display: none;
}

.nav-content-inner {
  width: 720px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.inner-item {
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #666666;
}

.inner-item img {
  width: 40%;
  margin-bottom: 5px;
}
</style>
