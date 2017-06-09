let timerId;
let statusHandler = {
  PLAYING: function ({ commit }) {
    timerId = setInterval(function () {
      commit('count')
    }, 1000);
  },
  PASS: function ({ commit }) {
    clearInterval(timerId);
    commit('updateBestScore');
  }
}
export default {

  flipCard({ commit }, card){
    commit('flip', card);
  },
  updateStatus(context, newStatus){
    context.commit('updateStatus', newStatus);
    statusHandler[newStatus] && statusHandler[newStatus](context)
  },
  match: function ({ commit }) {
    commit('decreaseMatch');
  },
  flipCards: function ({ commit }, cards) {
    commit('flips', cards);
  }
}