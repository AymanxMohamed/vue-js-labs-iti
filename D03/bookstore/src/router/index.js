import { createRouter, createWebHistory } from 'vue-router'
import BookView from '../views/BookView.vue'
import WishlistView from '../views/WishListView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: BookView
  },
  {
    path: '/books',
    name: 'books',
    component: BookView
  },
  {
    path: '/wishlist',
    name: '/wishlist',
    component: WishlistView,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
