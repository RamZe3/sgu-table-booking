import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/views/MainPage";
import BookingPage from "@/views/BookingPage";
import AdminPage from "@/views/AdminPage";
import ContactsPage from "@/views/ContactsPage";
import MenuPage from "@/views/MenuPage";


const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/booking',
    component: BookingPage
  },
  {
    path: '/admin',
    component: AdminPage
  },
  {
    path: '/menu',
    component: MenuPage
  },
  {
    path: '/contacts',
    component: ContactsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
