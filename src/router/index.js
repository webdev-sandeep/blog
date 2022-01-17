import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import CreateBlog from '../views/CreateBlog.vue'
import Tags from '../views/Tags.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs/:id',
    name: 'Details',
    component: Details,
    props:true
  },
  {
    path: '/create-blog',
    name: 'CreateBlog',
    component: CreateBlog,
  },
  {
    path: '/tags/:tag',
    name: 'Tags',
    component: Tags,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
