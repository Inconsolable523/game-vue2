import { STATUS } from './mutation-types';
import random from '../util/random';

const cardNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
  'that-guy', 'zeppelin'];


export default {
  reset({ commit }){
    commit('reset', {
      leftmathed: 8,
      highestScore: localStorage.getItem('highestScore') || 9999,
      status: STATUS.READY,
      cards: random(cardNames.concat(cardNames)).map(name => ({ flipped: false, cardNames: name })),
      takeTime: 0
    })
  }
}