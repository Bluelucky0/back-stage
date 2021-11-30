import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../src/assets/style/common.css'
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

import { container,aside,header,main,menu,submenu,menuItem,MenuItemGroup,Button,dropdown,DropdownMenu,DropdownItem,Row,Col,Card,Table,TableColumn} from 'element-ui';
Vue.use(container)
Vue.use(aside)
Vue.use(header)
Vue.use(main)
Vue.use(menu)
Vue.use(submenu)
Vue.use(menuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)

if(process.env.NODE_ENV ==='development') require('@/mock/index.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
