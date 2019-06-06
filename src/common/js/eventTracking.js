import {
  activityId
} from './param';

/* eslint-disable camelcase */
/* eslint-disable object-shorthand */

function Babel_dev_adv_Fas_Time(mapper) {
  return {
    eventId: 'Babel_dev_adv_Fas_Time',
    eventParam: `${activityId}_${mapper.advertId}_${mapper.id}_1`
  };
}

function Babel_dev_adv_Fas_Huashen(deepth) {
  return {
    eventId: 'Babel_dev_adv_Fas_Huashen',
    eventParam: deepth
  };
}


const eventTracking = {
  Babel_dev_adv_Fas_Time: Babel_dev_adv_Fas_Time,
  Babel_dev_adv_Fas_Huashen: Babel_dev_adv_Fas_Huashen
};

export default eventTracking;
