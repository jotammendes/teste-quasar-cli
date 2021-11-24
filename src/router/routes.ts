import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('src/pages/auth/Login.vue') },
      { path: 'esqueci-minha-senha', name: 'forgotPassword', component: () => import('src/pages/auth/ForgotPassword.vue') },
      { path: 'notificar-senha', name: 'notificationPassword', component: () => import('src/pages/auth/NotificationPassword.vue') },
      { path: 'recuperar-senha', name: 'resetPassword', component: () => import('src/pages/auth/ResetPassword.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'home', component: () => import('pages/Index.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/errors/Error404.vue')
  }
]

export default routes
