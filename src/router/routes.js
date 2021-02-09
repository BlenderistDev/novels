
const routes = [
  {
    path: '/',
    component: () => import('layouts/PagesLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Main.vue') }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/PagesLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/Login.vue') }
    ],
    name: 'login'
  },

  {
    path: '/registration',
    component: () => import('layouts/PagesLayout.vue'),
    children: [
      { path: '/registration', component: () => import('pages/Registration.vue') }
    ],
    name: 'registration'
  },

  {
    path: '/editor',
    component: () => import('layouts/EditorLayout.vue'),
    children: [
      { path: '/editor', component: () => import('pages/Index.vue') }
    ],
    name: 'editor'
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
