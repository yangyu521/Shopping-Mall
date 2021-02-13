import Vue from "vue";
import VueRouter from "vue-router";

//1.安装插件
Vue.use(VueRouter);
//2.创建路由对象
//懒加载
const category = () => import("views/category/category.vue");
const home = () => import("views/home/home.vue");
const profile = () => import("views/profile/profile.vue");
const shopcart = () => import("views/shopcart/shopcart.vue");
const Detail = ()=> import("views/detail/Detail.vue")
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/category",
    component: category
  },

  {
    path: "/profile",
    component: profile
  },
  {
    path: "/shopcart",
    component: shopcart
  },
  {
    path:"/detail/:iid",
    component:Detail
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
