
const routes = [
  {
    path: '/',
    component: () => import('pages/Main.vue'),
    name: 'index'
  },

  {
    path: '/editor',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
