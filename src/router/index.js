import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const routes = [
    {
        path: '',
        name: 'dashboard',
        component: () => import('@/views')
    }
]

const router = new Router({
    mode: 'history',
    routes
});

export default router
