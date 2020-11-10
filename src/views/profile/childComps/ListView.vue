<template>
  <div id="list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <i class="iconfont" :class="item.icon"> </i>
      <div class="info">{{ item.info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    listData: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
}

#list .item {
  height: 44px;
  line-height: 44px;
  position: relative;
}

.iconfont {
  width: 18px;
  height: 18px;
  margin-top: 10px;
  position: absolute;
  left: 12px;
  top: -10px;
  font-size: 22px;
  color: var(--color-tint);
}

.item .info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-left: 5px;
}

.item:last-of-type .info {
  border-bottom: none;
}
</style>
 