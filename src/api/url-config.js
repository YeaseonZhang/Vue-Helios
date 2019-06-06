const BETA = false;

// 根据项目修改正式&预发域名
const apiBase = BETA ? '//beta-api.m.jd.com/client.action' : '//api.m.jd.com/client.action';

// demo 接口
export const initUrl = `${apiBase}/init`;
