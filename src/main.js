import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import formatDate from "./utils/formatDate.js";
import formatTab from "./utils/formatTab.js";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.filter("formatDate", formatDate);
Vue.filter("formatTab", formatTab);
