import Vue from 'vue'
import App from './App.vue'

Vue.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#page')