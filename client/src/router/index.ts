import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PrestazioniGenerali from '../views/prestazioni-generali.vue'
import ProcessoProduttivo from '../views/processo-produttivo.vue'
import ModificaParametri from '../views/modifica-parametri.vue'
import StatoMacchine from '../views/stato-macchine.vue'
import Anomalie from '../views/anomalie.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/prestazioni-generali'
  },
  {
    path: '/prestazioni-generali',
    name: 'prestazioni-generali',
    component: PrestazioniGenerali
  },
  {
    path: '/processo-produttivo',
    name: 'processo-produttivo',
    component: ProcessoProduttivo
  },
  {
    path: '/modifica-parametri',
    name: 'modifica-parametri',
    component: ModificaParametri
  },
  {
    path: '/stato-macchine',
    name: 'stato-macchine',
    component: StatoMacchine
  },
  {
    path: '/anomalie',
    name: 'anomalie',
    component: Anomalie
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
