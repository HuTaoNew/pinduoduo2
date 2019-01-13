<template>
  <div class="home">
    <ly-tab v-model="selectedId" :items="items" :options="options"></ly-tab>
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
        activeColor: "#1d98bd"
        // 可在这里指定labelKey为你数据里文字对应的字段
      }
    };
  },
  components: {}
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
