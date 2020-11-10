<template>
  <grid-view>
    <goods-list-item
      v-for="(item, index) in categoryDetail"
      :key="index"
      :goods-item="item"
      @imageLoad="imageLoad"
    ></goods-list-item>
  </grid-view>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  name: "TabContentDetail",
  components: {
    GridView,
    GoodsListItem,
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      this.$emit("imageLoad");
    },
  },
};
</script>

<style scoped>
</style>
 