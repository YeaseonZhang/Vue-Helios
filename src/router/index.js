import Vue from 'vue';
import Router from 'vue-router';
import Blank from '@/page/blank';

// redis
import RedisManage from '@/page/redis-manage/redisTaskManage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/demo',
      component: Blank
    },
    {
      path: '/redis',
      component: Blank,
      name: 'redis',
      children: [
        {
          path: 'taskManage',
          name: 'redisTaskManage',
          component: RedisManage,
          props: true
        }
      ]
    }
  ]
});
