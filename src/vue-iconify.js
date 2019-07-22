/**
  * vue-iconify
  * (c) 2019
  * @license MIT
  */
import VIconify from "./VIconify";

const vueIconify = {};

/**
 * Plugin API
 */
vueIconify.install = function (Vue, options) {
  Vue.component(VIconify.name, VIconify);
};

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueIconify)
}

export default vueIconify

