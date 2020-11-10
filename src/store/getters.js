// vuex计算属性getters
const getters = {
  cartList(state) {
    return state.cartList
  },
  cartCount(state, getters) {
    return getters.cartList.length
  },
  allPrice(state) {
    return state.cartList.filter(item => {
      return item.checked
    }).reduce((preValue, item) => {
      return preValue + item.count * item.realPrice
    }, 0).toFixed(2)
  },
  isSelectAll(state) {
    return state.cartList.find(item => item.checked === false) === undefined;
  },
  oneChecked(state) {
    let yes = 0, no = 0;
    for (let item of state.cartList) {
      //判断列表中选中和未选中的数量
      if (item.checked === true) {
        yes++
      } else {
        no++
      }
    }
    if (yes > 0) {
      return true
    } else {
      return false
    }
  }
}

export default getters
