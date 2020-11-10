<template>
  <div class="bottom-menu">
    <div
      class="icon-selector select-all"
      :class="{ 'selector-active': $store.state.allChecked }"
      @click="checkBtnClick"
    ></div>
    <span>全选</span>
    <span class="total-price">合计: ¥{{ allPrice }}</span>
    <span class="buy-product" @click="buyClick"
      >去计算({{ $store.state.checkedNumber }})</span
    >
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import { mapGetters } from "vuex";
import Message from "@/../node_modules/element3/packages/message/index.js";

export default {
  name: "BottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["isSelectAll", "allPrice", "oneChecked"]),
  },
  methods: {
    checkBtnClick() {
      if (!this.isSelectAll) {
        this.$store.commit("setAllChecked");
      } else {
        this.$store.commit("setAllNoChecked");
      }
    },
    buyClick() {
      if (this.oneChecked) {
        Message({
          message: "结算成功",
          duration: 2000,
          type: "success",
          verticalOffset: 250,
        });
      } else {
        Message({
          message: "请选择商品结算",
          duration: 2000,
          type: "warning",
          verticalOffset: 250,
        });
      }
    },
  },
};
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: var(--color-high-text);
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}

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
