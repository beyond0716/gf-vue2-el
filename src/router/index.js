import Vue from 'vue'
import Router from 'vue-router'

const A = {template: '<div>Aaa</div>'}
const B = {template: '<div>Bbb</div>'}
const C = {template: '<div>Ccc</div>'}

Vue.use(Router)

const routes=[
  {
    path: '/',
    name: 'Hello',
    component: resolve => require(['views/hello'], resolve)
  },
  {
    path: '/study',
    component: resolve => require(['views/study'], resolve),
    children:[
      {
        path: '',
        name: 'test',
        component: resolve => require(['views/study/test'], resolve)
      },
      {
        path: 'curry',
        name: 'curry',
        component: resolve => require(['views/study/curry'], resolve)
      }
    ]

  },
  {
    path: '/vue-study',
    component: resolve => require(['views/vue-study'], resolve),
    children:[
      {
        path: '',
        name: 'link',
        component: resolve => require(['views/vue-study/link'], resolve)
      },
      {
        path: 'computed',
        name: 'computed',
        component: resolve => require(['views/vue-study/computed'], resolve)
      },
      {
        path: 'named-views',
        component: resolve => require(['views/vue-study/named-views'], resolve),
        children:[
          {
            path: '',
            name: 'named-views',
            components: {
              a: A,
              b: B,
              c: C
            }
          }
        ]
      }
    ]
  },
  {
    path: '/user/:name',
    component: resolve => require(['views/user'], resolve),
    children:[
      {
        path: '',
        name: 'user',
        component: resolve => require(['views/user/home'], resolve)
      },
      {     
        path: 'profile',
        name: 'profile',
        component: resolve => require(['views/user/profile'], resolve)
      }
    ]
  },
  {
    path: '/count',
    name: 'count',
    component: resolve => require(['views/count'], resolve)
  },
  {
    path: '/article',
    component: resolve => require(['views/article'], resolve),
    children:[
      {
        path: '',
        name: 'list',
        component: resolve => require(['views/article/list'], resolve)
      },
      {
        path: 'detail',
        name: 'detail',
        component: resolve => require(['views/article/detail'], resolve)
      },
      {
        path: 'create',
        name: 'create',
        component: resolve => require(['views/article/create'], resolve)
      }
    ]
  },
  {
    path     : '/radio',
    name     : 'radio',
    component: resolve => require(['views/radio'], resolve)
  },
  {
    path     : '/checkbox',
    name     : 'checkbox',
    component: resolve => require(['views/checkbox'], resolve)
  },
  {
    path     : '/input',
    name     : 'input',
    component: resolve => require(['views/input'], resolve)
  },
  {
    path     : '/select',
    name     : 'select',
    component: resolve => require(['views/select'], resolve)
  },
  {
    path     : '/pagination',
    name     : 'pagination',
    component: resolve => require(['views/pagination'], resolve)
  },
  {
    path:'*',
    name: 'notfound',
    component:resolve => require(['views/notfound'], resolve)
  }
]

export default new Router({
  mode:'history',
  routes
})
