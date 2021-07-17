import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Notification from "../pages/Notifications.vue";
import Messages from "../pages/Messages.vue";
import Profile from "../pages/Profile.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";

const routes = [
  {
    path: "/",
    component: Home,
    title: "홈",
    icon: "fas fa-home fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/",
    component: Home,
    title: "탐색하기",
    icon: "fas fa-hashtag fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/notifications",
    title: "알림",
    icon: "far fa-bell fa-fw text-2xl",
    component: Notification,
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/messages",
    title: "쪽지",
    icon: "far fa-envelope fa-fw text-2xl",
    component: Messages,
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/",
    component: Home,
    title: "북마크",
    icon: "far fa-bookmark fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/",
    component: Home,
    title: "리스트",
    icon: "far fa-list-alt fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/Profile",
    title: "프로필",
    icon: "far fa-user fa-fw text-2xl",
    component: Profile,
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/",
    component: Home,
    title: "더보기",
    icon: "fas fa-ellipsis-h fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
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

export default router;
