<template>
  <div id="cart">
    <NavBar class="nav-bar">
      <template #center>
        <div>购物车({{ cartCount }})</div>
      </template>
    </NavBar>
    <Scroll class="content" v-if="Object.keys(cartList).length !== 0">
      <cart-list :cart-list="cartList"
    /></Scroll>

    <div v-else class="empty">购物车是空的<br />快去添加商品吧</div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import BottomBar from "./childComps/BottomBar";

import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar,
    Scroll,
  },
  computed: {
    ...mapGetters(["cartList", "cartCount"]),
  },
};
</script>

<style scoped>
#cart {
  height: 100vh;
  position: relative;
}

.nav-bar {
  background-image: linear-gradient(#abee95, var(--color-tint));
  color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 94px;
  left: 0;
  right: 0;
}

.empty {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--color-high-text);
}
</style>
