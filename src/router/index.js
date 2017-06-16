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
      component: menu //菜单
    },
    {
      path:'/menu',
      component:menu
    },
    {
      path: '/easy',
      component: easy //容易关卡
    },
    {
      path: '/normal',
      component: normal //普通关卡
    },
    {
      path: '/hard',
      component: hard  //困难关卡
    }
  ]
})

export default router;
