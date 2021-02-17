
const routes = [
  {
    path: '/',
    component: () => import('layouts/PagesLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Main.vue') }
    ]
  },

  {
    path: '/user',
    component: () => import('layouts/PagesLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/Login.vue'),
        name: 'login'
      },
      {
        path: 'registration',
        component: () => import('pages/Registration.vue'),
        name: 'registration'
      }
    ]
  },

  {
    path: '/category',
    component: () => import('layouts/PagesLayout'),
    children: [
      {
        path: 'categories',
        component: () => import('pages/Categories'),
        name: 'categories'
      },
      {
        path: 'category/:category',
        component: () => import('pages/Category'),
        name: 'category',
        props: true
      }
    ]
  },

  {
    path: '/editor',
    component: () => import('layouts/EditorLayout.vue'),
    children: [
      {
        path: 'editor',
        component: () => import('pages/Index.vue'),
        name: 'editor'
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
