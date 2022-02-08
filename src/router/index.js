import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../components/Login.vue"
import AddInfo from "../components/AddInfo.vue"
import Dashboard from "../components/Dashboard.vue"
import Home from "../components/Home.vue"


const routes = [
  { path: '/login', component: Login },
  { path: '/addInfo', component: AddInfo },
  {path:'/',component:Home},
  {path:'/dashboard',component:Dashboard}
]

const router = createRouter({
    history: createWebHashHistory(),
  routes
})

export default router


