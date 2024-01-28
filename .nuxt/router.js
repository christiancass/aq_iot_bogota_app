import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f906fa58 = () => interopDefault(import('..\\pages\\alarms.vue' /* webpackChunkName: "pages/alarms" */))
const _1e27e7f2 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _5a3bd73b = () => interopDefault(import('..\\pages\\devices.vue' /* webpackChunkName: "pages/devices" */))
const _4d606572 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _570ad617 = () => interopDefault(import('..\\pages\\mapa.vue' /* webpackChunkName: "pages/mapa" */))
const _58087d29 = () => interopDefault(import('..\\pages\\maps.vue' /* webpackChunkName: "pages/maps" */))
const _e81b1b96 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _3e24e617 = () => interopDefault(import('..\\pages\\templates.vue' /* webpackChunkName: "pages/templates" */))
const _07f645a4 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _714a1854 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))
const _0fa82a30 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/alarms",
    component: _f906fa58,
    name: "alarms"
  }, {
    path: "/dashboard",
    component: _1e27e7f2,
    name: "dashboard"
  }, {
    path: "/devices",
    component: _5a3bd73b,
    name: "devices"
  }, {
    path: "/login",
    component: _4d606572,
    name: "login"
  }, {
    path: "/mapa",
    component: _570ad617,
    name: "mapa"
  }, {
    path: "/maps",
    component: _58087d29,
    name: "maps"
  }, {
    path: "/register",
    component: _e81b1b96,
    name: "register"
  }, {
    path: "/templates",
    component: _3e24e617,
    name: "templates"
  }, {
    path: "/test",
    component: _07f645a4,
    name: "test"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _714a1854,
    name: "GeneralViews-NotFoundPage"
  }, {
    path: "/",
    component: _0fa82a30,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
