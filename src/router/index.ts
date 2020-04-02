import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '@/plugins/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/playground',
    name: 'playground',
    component: () => import('@/views/Playground.vue')
    // meta: { requireAuth: true }
  },
  {
    path: '/create/room',
    name: 'CreateRoom',
    component: () => import('@/views/CreateRoom.vue')
    // meta: { requireAuth: true }
  },
  {
    path: '/search/room',
    name: 'SearchRoom',
    component: () => import('@/views/SearchRoom.vue')
    // meta: { requireAuth: true }
  },
  {
    path: '/room/:id',
    name: 'Room',
    component: () => import('@/views/Room.vue')
    // meta: { requireAuth: true }
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: () => import('@/views/Game.vue')
    // meta: { requireAuth: true }
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: () => import('@/views/Canvas.vue')
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: () => import('@/views/Kanban.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/project/:id',
    name: 'project',
    component: () => import('@/views/Project.vue'),
    meta: { requireAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _from, next) => {
  const requireAuth = to.matched.some(record => record.meta.requireAuth)
  const currentUser = auth.currentUser

  if (!requireAuth || currentUser) {
    next()
    return
  }

  next({
    path: '/login',
    query: { redirect: to.fullPath }
  })
})

export default router
