import { get, post } from './http';
import { initUrl } from './url-config';

const ajaxUrlBase = {};

ajaxUrlBase.initGet = param => get(initUrl, param);
ajaxUrlBase.initPost = param => post(initUrl, param);

export { ajaxUrlBase };
