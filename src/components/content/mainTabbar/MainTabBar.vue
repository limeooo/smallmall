<template>
  <div class="footer_guide top-border-1px">
    <router-link
      class="guide_item"
      :class="{ on: '/home' === $route.path }"
      to="/home"
    >
      <span class="item_icon">
        <i class="iconfont iconshouye"></i>
      </span>
      <span>首页</span>
    </router-link>
    <router-link
      class="guide_item"
      :class="{ on: '/category' === $route.path }"
      to="/category"
    >
      <span class="item_icon">
        <i class="iconfont iconleimupinleifenleileibie"></i>
      </span>
      <span>分类</span>
    </router-link>
    <router-link
      class="guide_item"
      :class="{ on: '/cart' === $route.path }"
      to="/cart"
    >
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>购物车</span>
    </router-link>
    <router-link
      class="guide_item"
      :class="{ on: '/profile' === $route.path }"
      to="/profile"
    >
      <span class="item_icon">
        <i class="iconfont icongeren"></i>
      </span>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script type='es6'>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer_guide {
  border-top: 1px solid #e4e4e4;
  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;

    &.on {
      color: #00a1d6;
    }

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;

      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>
 