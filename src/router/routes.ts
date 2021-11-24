import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'esqueci-minha-senha', name: 'forgotPassword', component: () => import('pages/ForgotPassword.vue') },
      { path: 'notificar-senha', name: 'notificationPassword', component: () => import('pages/NotificationPassword.vue') },
      { path: 'recuperar-senha', name: 'resetPassword', component: () => import('pages/ResetPassword.vue') }
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
    component: () => import('pages/Error404.vue')
  }
]

export default routes
