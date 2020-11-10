<template>
  <div
    class="icon-selector"
    :class="{ 'selector-active': itemInfo.checked }"
    @click="selectItem"
  ></div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    itemInfo: Object,
  },
  methods: {
    selectItem() {
      this.checked = !this.checked;
      this.$store.commit("setChecked", this.itemInfo);
    },
  },
};
</script> 

<style scoped>
.icon-selector {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.selector-active {
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>
