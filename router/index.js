import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
    "mode": "history",
    "routes": [
        {
            "path": "",
            "name": "Home",
            "component": () => import(/* webpackChunkName: "Home" */ "@/views/Home"),
            "meta": {
                "guest": true
            }
        },
        {
            "path": "*",
            "name": "Errors",
            "component": () => import(/* webpackChunkName: "Errors" */ "@/views/Errors"),
            "meta": {
                "guest": true
            }
        }
    ]
})

export default router
