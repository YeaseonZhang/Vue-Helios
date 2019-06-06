const menuList = [
  {
    path: '/redis',
    name: 'Redis管理',
    icon: 'lg-icon-layout',
    children: [
      {
        path: '/redis/overview',
        name: 'Redis 数据概览'
      }, {
        path: '/redis/taskManage',
        name: '导入配置列表'
      }, {
        path: '/redis/key',
        name: 'Redis key 列表'
      }
    ]
  }, {
    path: '/demo',
    name: 'Demo',
    icon: 'lg-icon-chart'
  }
];

export default menuList;
