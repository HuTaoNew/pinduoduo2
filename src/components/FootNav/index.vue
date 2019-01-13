<template>
  <div class="foot-nav">
    <div class="foot-items">
      <div class="foot-item" @click="switchTo('/home')">
        <img :src="'/home' === $route.path ? imgArr[0].selected : imgArr[0].normal" alt>
        <div :class="{selected:'/home' === $route.path}">首页</div>
      </div>
      <div class="foot-item" @click="switchTo('/recommend')">
        <img :src="'/recommend' === $route.path ? imgArr[1].selected : imgArr[1].normal" alt>
        <div :class="{selected:'/recommend' === $route.path}">推荐</div>
      </div>
      <div class="foot-item" @click="switchTo('/search')">
        <img :src="'/search' === $route.path ? imgArr[2].selected : imgArr[2].normal" alt>
        <div :class="{selected:'/search' === $route.path}">搜索</div>
      </div>
      <div class="foot-item" @click="switchTo('/chat')">
        <img :src="'/chat' === $route.path ? imgArr[3].selected : imgArr[3].normal" alt>
        <div :class="{selected:'/chat' === $route.path}">聊天</div>
      </div>
      <div class="foot-item" @click="switchTo('/mine')">
        <img :src="'/mine' === $route.path ? imgArr[4].selected : imgArr[4].normal" alt>
        <div :class="{selected:'/mine' === $route.path}">个人中心</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footnav",
  methods: {
    switchTo(path) {
      this.$router.replace(path);
    }
  },
  data() {
    return {
      imgArr: [
        { normal: require("@/common/img/icon_home.png"), selected: require("@/common/img/icon_home_selected.png") },
        { normal: require("@/common/img/icon_intro.png"), selected: require("@/common/img/icon_intro_selected.png") },
        { normal: require("@/common/img/icon_search.png"), selected: require("@/common/img/icon_search_selected.png") },
        { normal: require("@/common/img/icon_chat.png"), selected: require("@/common/img/icon_chat_selected.png") },
        { normal: require("@/common/img/icon_mine.png"), selected: require("@/common/img/icon_mine_selected.png") }
      ]
    };
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.foot-items {
  width: 100%;
  height: 52px;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 999;
}

.foot-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666666;
}

.foot-item img {
  width: 35%;
  margin-bottom: 2px;
}

.selected {
  color: red;
}
</style>