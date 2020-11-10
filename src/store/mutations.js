// vuex同步处理mutation
const mutations = {
  setCurrentIndex(state, index) {
    state.currentIndex = index
  },
  addCounter(state, info) {
    info.count++
  },
  addToCart(state, info) {
    state.cartList.push(info)
  },
  setChecked(state, info) {
    let yes = 0, no = 0;
    for (let item of state.cartList) {
      //判断ID是否相同，改变选中项的checked值
      if (item.iid === info.iid) {
        item.checked = !item.checked
      }
      //判断列表中选中和未选中的数量
      if (item.checked === true) {
        yes++
      } else {
        no++
      }
    }
    //改变选中的数量值
    state.checkedNumber = yes
    //如果全部选中改allChecked的值为true,否则为false
    if (no == 0) { state.allChecked = true }
    else {
      state.allChecked = false
    }
  },
  setAllChecked(state) {
    for (let item of state.cartList) {
      item.checked = true
    }
    state.allChecked = true
  },
  setAllNoChecked(state) {
    for (let item of state.cartList) {
      item.checked = false
    }
    state.allChecked = false
  },
}

export default mutations

