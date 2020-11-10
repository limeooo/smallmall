<template>
  <div id="user-info" class="clear-fix">
    <slot name="user-icon">
      <span class="privateImage-svg left"
        ><i class="iconfont icongeren1"></i>
      </span>
    </slot>
    <div class="login-info left">
      <slot name="user-nickname">
        <div>登录/注册</div>
      </slot>
      <div class="phone">
        <i class="iconfont iconshouji54"></i>
        <slot name="user-phone">暂无绑定手机号</slot>
      </div>
    </div>
    <i class="iconfont iconyoujiantou"></i>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
#user-info {
  background-color: var(--color-tint);
  padding: 15px;
  margin-top: -5px;
}

#user-info .privateImage-svg {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
}
.icongeren1 {
  font-size: 45px;
  margin-left: 7px;
  color: #e3e3e3;
}

.left {
  float: left;
}

#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}

#user-info .login-info .phone {
  position: relative;

  font-size: 13px;
  margin-top: 5px;
  margin-left: 15px;
  font-weight: 300;
}

.iconshouji54 {
  position: absolute;
  left: -15px;
  top: -2px;
}

.iconyoujiantou {
  font-weight: 200;
  font-size: 30px;
  position: relative;
  top: 13px;
  left: 130px;
  color: #e3e3e3;
}
</style>
