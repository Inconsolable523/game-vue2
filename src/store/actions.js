import { STATUS } from './mutation-types';
import {shuffle} from '../util/shuffle';

const cardNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
  'that-guy', 'zeppelin'];


export default {
  reset({ commit }){
    commit('reset', {
      leftmathed: 8,
      highestScore: localStorage.getItem('highestScore') || 9999,
      status: STATUS.READY,
      cards: shuffle(cardNames.concat(cardNames)).map(name => ({ flipped: false, cardName: name })),
      takeTime: 0
    })
  }
}