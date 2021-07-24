import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Notification from "../pages/Notifications.vue";
import Messages from "../pages/Messages.vue";
import Profile from "../pages/Profile.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import store from "../store";
const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    title: "홈",
    icon: "fas fa-home fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/",
    component: Home,
    title: "탐색하기",
    name: "explore",
    icon: "fas fa-hashtag fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/notifications",
    title: "알림",
    name: "notifications",
    icon: "far fa-bell fa-fw text-2xl",
    component: Notification,
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/messages",
    title: "쪽지",
    name: "messages",
    icon: "far fa-envelope fa-fw text-2xl",
    component: Messages,
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/",
    component: Home,
    name: "bookmark",
    title: "북마크",
    icon: "far fa-bookmark fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/",
    component: Home,
    title: "리스트",
    name: "list",
    icon: "far fa-list-alt fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/Profile",
    title: "프로필",
    name: "profile",
    icon: "far fa-user fa-fw text-2xl",
    component: Profile,
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/",
    component: Home,
    name: "more",
    title: "더보기",
    icon: "fas fa-ellipsis-h fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout", requireAuth: true },
  },
  {
    path: "/register",
    component: Register,
    meta: { isMenu: false, layout: "EmptyLayout" },
  },
  {
    path: "/login",
    component: Login,
    meta: { isMenu: false, layout: "EmptyLayout" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// navigation guard
router.beforeEach((to, from, next) => {
  const currentUser = store.state.user;
  const requireAuth = to.matched.some((record) => record.meta.requireAuth);
  //not quthenticated
  if (requireAuth && !currentUser) next("/login");
  //authenticated
  else next();
});

export default router;
