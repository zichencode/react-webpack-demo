/**
 * 路由配置项
 */
import { lazy } from 'react';
import BasicLayout from '@/layouts/BasicLayout/index';

export default [
  {
    path: '/user',
    component: BasicLayout,
    children: [
      {
        path: '/user/login',
        component: lazy(() => import('@/pages/User/Login')),
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/index',
        exact: true,
        component: lazy(() => import('@/pages/Home')),
      },
      {
        path: '/detail/:id',
        component: lazy(() => import('@/pages/Detail')),
      },
      {
        path: '/my',
        component: lazy(() => import('@/pages/My')),
      },
      {
        path: '/exception',
        children: [
          {
            path: '/exception/403',
            component: lazy(() => import('@/pages/Exception/403')),
          },
          {
            path: '/exception/404',
            exact: true,
            component: lazy(() => import('@/pages/Exception/404')),
          },
          {
            path: '/exception/500',
            component: lazy(() => import('@/pages/Exception/500')),
          },
        ],
      },
      { path: '/', exact: true, redirect: '/index' },
      { path: '*', exact: true, redirect: '/exception/404' },
    ],
  },
];
