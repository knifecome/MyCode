/**
 * Created by Kevin on 2017/8/7.
 */
export default[
    {
      path: '/admin',
      name: 'admin',
      component: resolve => require(['@/projects/ele-admin/admin'], resolve)
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: resolve => require(['@/projects/ele-admin/navbar'], resolve)
    }
  ]

