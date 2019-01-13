<template>
  <div class="home">
    <ly-tab
      class="lytab"
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleNav"
    ></ly-tab>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "热门" },
        { label: "服饰" },
        { label: "鞋包" },
        { label: "母婴" },
        { label: "百货" },
        { label: "食品" },
        { label: "内衣" },
        { label: "男装" },
        { label: "电器" }
      ],
      options: {
        activeColor: "#e9232d"
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      subRoute: [
        "/home/popular",
        "/home/clothing",
        "/home/shoes",
        "/home/monandbaby",
        "/home/department",
        "/home/food",
        "/home/underwear",
        "/home/mens",
        "/home/electric"
      ]
    };
  },
  methods: {
    handleNav(item, index) {
      this.$router.replace(this.subRoute[index]);
    }
  }
};
</script>

<style scoped>
.home {
  background: #f5f5f5;
  width: 100%;
  height: 100%;
}

.lytab {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
