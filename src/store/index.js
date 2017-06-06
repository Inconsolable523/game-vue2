import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  leftmathed: 0,
  bestScore: 0,
  status: '',
  cards: [],
  takeTime: 0
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict: process.env.NODE_ENV !== 'production' // 生产环境下不使用严格模式'
})
