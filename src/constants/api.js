import htttRequest from "../utils/request";
const debug=true;//
/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
export const host = "http://gametexts.com/api";
/* eslint-enable */

// pic
export const PIC_URL = "http://gametexts.com/forum/story/pic/";

// home
const URL_HOME_NEW = `${host}/game/released/`;

const API_HOME = debug?``:``;
const API_HOME_SEARCH_COUNT =  debug?``:``;
const API_HOME_PIN =  debug?``:``;
const API_HOME_RECOMMEND =  debug?``:``;

// user
const API_USER =  debug?``:``;
const API_USER_LOGIN =  debug?``:``;
const API_CHECK_LOGIN =  debug?``:``;

const homeArticleNew = (param) => htttRequest(URL_HOME_NEW, param, "GET", true);
export default {
  homeArticleNew,
};
