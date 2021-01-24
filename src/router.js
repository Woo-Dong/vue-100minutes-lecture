import Vue from 'vue' 
import Router from 'vue-router'
import Home from './home.vue'
import Item from './item.vue'

Vue.use(Router) 

export default new Router({ 
    routes: [
        {
            path: '', 
            component: Home
        },
        {
            path: '/home', 
            name: 'name', 
            component: Home
        }, 
        {
            path: '/item', 
            name: 'item', 
            component: Item
        }, 
        {
            path: '/item/:id', 
            component: Item
        }, 
    ]
    
})