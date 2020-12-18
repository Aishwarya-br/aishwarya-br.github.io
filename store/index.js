import Vue from "vue"
import Vuex from "vuex"

import utility from "@/store/modules/utility"
/* global process */

Vue.use(Vuex)

export default new Vuex.Store({
    "strict": process.env.NODE_ENV !== "production",
    "state": {
        "environment": process.env.VUE_APP_ENV,
        "apiBase": `${process.env.VUE_APP_API}/${process.env.VUE_APP_ENV}/`,
        "domain": `${process.env.VUE_APP_URL}`
    },
    "getters": {
        "environment": state => state.environment,
        "apiBase": state => state.apiBase,
        "domain": state => state.domain
    },
    "mutations": {},
    "actions": {},
    "modules": {
        utility
    }
})
