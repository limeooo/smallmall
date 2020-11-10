import { createStore } from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  currentIndex: 0,
  cartList: [],
  allChecked: false,
  checkedNumber: 0
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})