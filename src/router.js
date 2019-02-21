import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import List from './views/List.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/list/:id', name: 'list', component: List },
        { path: '/detail/:id', name: 'detail', component: Detail }
    ]
})

// router.afterEach((to, from) => {
//     console.log(to, from);
// })

// router.beforeEach((to, from, next) => {
   
// })

export default router;
