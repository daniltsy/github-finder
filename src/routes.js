import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
]
const router = new Router({
  mode: "history",
  routes,
})
export default router
