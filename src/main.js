import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebookF, faTwitter, faLinkedin, faGooglePlus } from "@fortawesome/free-brands-svg-icons/";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookF, faTwitter, faLinkedin, faGooglePlus, faChevronLeft, faChevronRight);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
