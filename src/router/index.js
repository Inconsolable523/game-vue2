import Vue from 'vue';
import Router from 'vue-router';
import easy from '../pages/easy';
import normal from '../pages/normal';
import hard from '../pages/hard';
import menu from '../pages/menu';

// 显示全局注册
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path:'',
      component: menu
    },
    {
      path:'/menu',
      component:menu
    },
    {
      path: '/easy',
      component: easy
    },
    {
      path: '/normal',
      component: normal
    },
    {
      path: '/hard',
      component: hard
    }
  ]
})

export default router;