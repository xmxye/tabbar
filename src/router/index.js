import Vue from 'vue'
import Router from 'vue-router'

// vue-router 3.1以上版本，需要重写push和 replace方法，处理相同路径
// const [routerPush, routerReplace] = [Router.prototype.push, Router.prototype.replace];
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error);
// };
// Router.prototype.replace = function replace(location) {
//   return routerReplace.call(this, location).catch(error => error);
// };

const Home = () => import('@/views/home/index');
const About = () => import('@/views/about/index');
const Shopping = () => import('@/views/shopping/index');
const Profile = () => import('@/views/profile/index');

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
