import { getUrlQuery } from '@jmfe/jm-common';

// 获取url参数示例
export const columnid = getUrlQuery('id');

export const activityId = '00164347';

export const adGroupMapper = [
  {
    type: 'advertGroup',
    id: '01110815', // 头图
    mapTo: 'header'
  }, {
    type: 'advertGroup',
    id: '01181344', // 时间轴
    mapTo: 'timeLine'
  }
];
