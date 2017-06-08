// import { STATUS } from './mutation-types';
// import { shuffle } from '../util/shuffle';

// const cardNames = ['beauty1', 'beauty2', 'beauty3', 'beauty4', 'boy1', 'boy2',
//   'boy3', 'boy4'];
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
  // reset({ commit }){
  //   commit('reset', {
  //     leftmathed: 8,
  //     bestScore: localStorage.getItem('bestScore') || 9999,
  //     status: STATUS.READY,
  //     cards: shuffle(cardNames.concat(cardNames)).map(name => ({ flipped: false, cardName: name })),
  //     takeTime: 0
  //   })
  // },
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