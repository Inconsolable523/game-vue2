export default {
  reset(state, payload){
    state.leftmathed = payload.leftmathed;
    state.highestScore = payload.highestScore;
    state.status = payload.status;
    state.cards = payload.cards;
    state.takeTime = payload.takeTime;
  },
  flip(state, card){
    // 匹配点击的纸牌，然后翻转
    let second = state.cards.find(second => second === card);
    second.flipped = !second.flipped;
  },
  updateStatus(state, newStatus){
    state.status = newStatus;
  },
  count(state){
    state.takeTime++;
  },
  updateHighetScore(state){
    if (!localStorage.getItem('highestScore')) {
      return localStorage.setItem('highestScore', state.highestScore);
    }
    if (localStorage.getItem('highestScore') > state.highestScore) {
      return localStorage.setItem('highestScore', state.highestScore);
    }
  },
  decreaseMatch(state){
    state.leftmathed--;
  },
  flips(state, cards){
    state.cards.filter(twoCards => cards.indexOf(twoCards) >= 0)
      .forEach(card => card.flipped = !card.flipped);
  }
}