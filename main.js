/* Import Vue Packages
 * axios - https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
 * v-select - https://vue-select.org/
 * v-pagination - https://www.npmjs.com/package/vuejs-paginate */
import Vue from "vue"
import vSelect from "vue-select"
import vPaginate from "vuejs-paginate"
import vSlider from "vue-slider-component"
import {ToggleButton} from "vue-js-toggle-button"

Vue.component("v-select", vSelect)
Vue.component("v-paginate", vPaginate)
Vue.component("v-slider", vSlider)
Vue.component("vToggleButton", ToggleButton)

/* Google Authentication and Google Analytics
   * Generate oauth2 token and gtag token and give permissions to app url
   * Use console.developers.google.com to get oauth2 token
   * Use analytics.google.com to get gtag token */
import gAuth from "@/gAuth"
import gAnalytics from "@/gAnalytics"

/* Learn more about state management
   * https://vuex.vuejs.org/guide/state.html */
import store from "@/store"

/* Learn more about router
   * https://router.vuejs.org/ */
import router from "@/router"

/* Learn more about filters
   * https://vuejs.org/v2/guide/filters.html */
import filter from "@/filter"

// Import base app template
import App from "@/App.vue"

import "vue-slider-component/theme/default.css"


Vue.config.productionTip = false

new Vue({
    store,
    router,
    filter,
    "render": h => h(App)
}).$mount("#app")
