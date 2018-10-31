
//import '../scss/main.scss'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './main.vue'
import Home from './home.vue'
import Contact from './contact.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    //mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/contact',
            name:'contact',
            component:Contact,
            props:{ pageKey:'2' }
        }
    ]
})

new Vue({
    el:'#root',
    router,
    render:h=>h(Main)

})
