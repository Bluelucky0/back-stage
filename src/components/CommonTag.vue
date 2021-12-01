<template>
  <div class="tabs">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      size="small"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      :style="{ cursor: 'pointer' }"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    changeMenu(item) {
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu", item);
    },
    handleClose(tag, index) {
      let length = this.tags.length - 1;
      this.close(tag);
      //判断是否是最后一个
      if (tag.name !== this.$route.name) {
        return;
      }
      if (index === length) {
        //往左边跳转
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        //往右边跳转
        this.$router.push({ name: this.tags[index].name });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.tabs {
  text-align: left;
  padding: 15px 15px 0 15px;
  .el-teg {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>