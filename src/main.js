import App from './App'
import Vue from 'vue'
import router from './router'
Vue.config.productionTip = false

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('serviceWorker registed')
      }).catch(err => {
        console.log('serviceWorker registed error')
      })
    })
  }
}

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
