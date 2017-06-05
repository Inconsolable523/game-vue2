export default {
  reset(state,payload){
    state.leftmathed=payload.leftmathed;
    state.highestScore=payload.highestScore;
    state.status=payload.status;
    state.cards=payload.cards;
    state.takeTime=payload.takeTime;
  }
}