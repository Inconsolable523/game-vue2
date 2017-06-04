import './style/main.css';
import Vue from 'vue';
import App from './App.vue';
import store from './store';


new Vue({
  el:'#app',
  render(h){
    return h(App);
  },
  store
});