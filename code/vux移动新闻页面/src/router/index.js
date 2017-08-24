import Vue from 'vue'
import Router from 'vue-router'
import projectConf from '@/routes.conf.js'

Vue.use(Router);

const routes = () => {
  let routes = [];
  projectConf.forEach(name => {
    let route = require(`@/projects/${name}/route`).default;  //默认对了一个default属性，里面才是对象
    routes = routes.concat( route );
  });
  routes.push({
    path: '*',
    name: '404',
    component: resolve => require(['@/components/bs-404'], resolve)
  })
  return routes;
};
export default new Router({
  routes:routes()
})

