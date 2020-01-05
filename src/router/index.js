import Vue from "vue";
import VueRouter from "vue-router";

import PostList from "../components/PostList.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/",
    name: "home",
    components: {
      main: PostList
    }
  },
  {
    path: "/post/:id&author=:name",
    name: "post_content",
    components: {
      main: () =>
        import(/* webpackChunkName: "Article" */ "../components/Article.vue"),
      sidebar: () =>
        import(/* webpackChunkName: "SideBar" */ "../components/SideBar.vue")
    }
  },
  {
    path: "/userinfo/:name",
    name: "user_info",
    components: {
      main: () =>
        import(/* webpackChunkName: "UserInfo" */ "../components/UserInfo.vue")
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
