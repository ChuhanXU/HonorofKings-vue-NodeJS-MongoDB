import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    // 添加了一个子路由
    children:[
      {path:'/categories/create',component:CategoryEdit}
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
