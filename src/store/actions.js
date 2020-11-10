// vuex异步处理actions
const actions = {
  addCart({ state, commit }, info) {
    return new Promise((resolve, rejecet) => {
      // 查看是否添加过
      const oldInfo = state.cartList.find(item => item.iid === info.iid)
      // +1或者新添加
      if (oldInfo) {
        commit('addCounter', oldInfo)
        resolve('当前商品数量+1')
      } else {
        info.count = 1
        info.checked = false
        commit('addToCart', info)
        resolve('添加购物车成功')
      }
    })
  }
}

export default actions

