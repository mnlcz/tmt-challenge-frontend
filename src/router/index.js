import { createWebHistory, createRouter } from "vue-router"
import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NewPostView from '@/views/NewPostView.vue'
import EditPostView from '@/views/EditPostView.vue'

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: HomeView
  },
  {
    path: "/signin",
    name: "Iniciar sesión",
    component: SignInView
  },
  {
    path: "/signup",
    name: "Registro",
    component: SignUpView
  },
  {
    path: "/profile/:user",
    name: "Mi perfil",
    component: ProfileView
  },
  {
    path: "/newpost",
    name: "Nuevo post",
    component: NewPostView
  },
  {
    path:"/editpost/:id",
    name: "Editar post",
    component: EditPostView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router