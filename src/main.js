import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import './assets/scss/comon.scss'
Vue.config.productionTip = false

import {
    Card,
    Button,
    Badge,
    Col,
    Row,
    Icon,
    Input,
    Layout,
    Avatar,
    Menu,
    Switch
} from 'ant-design-vue'

Vue.use(Card)
Vue.use(Button)
Vue.use(Badge)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Layout)
Vue.use(Avatar)
Vue.use(Menu)
Vue.use(Row)
Vue.use(Switch)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
