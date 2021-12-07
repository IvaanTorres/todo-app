import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Posts from '../views/Posts.vue'
import newPost from '../views/NewPost.vue'
import postDetails from '../views/PostDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/new',
    name: 'Create new post',
    component: newPost
  },
  {
    path: '/posts/:id',
    name: 'Post Details',
    component: postDetails,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
