import router from 'vue-router'
import Vue from 'vue'

Vue.use(router)

export default new router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/HelloWorld')
    },
    {
      path: '/a',
      component: () => import('@/views/A')
    }
  ]
})
