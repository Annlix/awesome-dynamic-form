import Vue from 'vue'
import App from './App.vue'
import shortid from '@dllcn/js-shortid'

Vue.productionTip = false

Vue.prototype.guid = shortid

new Vue({
	render: h => h(App)
}).$mount('#page')