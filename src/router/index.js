import { createRouter, createWebHistory } from "vue-router";
import Signup from "../views/Signup.vue";
import DashboardLinks from "../views/DashboardLinks.vue";
import WelcomePage from "../views/WelcomePage.vue";
import store from "../store/index.js";

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },

  {
    path: "/",
    name: "redirect",
    redirect: "/welcome-page",
  },

  {
    path: "/welcome-page",
    name: "welcome",
    meta: { requiresAuth: true },
    component: WelcomePage,
  },
  {
    path: "/dashboard-links",
    name: "dashboard links",
    meta: { requiresAuth: true },
    component: DashboardLinks,
  },
  {
    path: "/main",
    name: "main",
    meta: { requiresAuth: true },
    component: () => import("../views/Main.vue"),
    children: [
      {
        path: "homework-helper",
        name: "Homework helper",
        meta: { requiresAuth: true, indexNumber: 0 },
        component: () => import("../views/Pages/HomeworkHelper.vue"),
      },
      {
        path: "five-lines-a-day",
        name: "Five lines a day",
        meta: { requiresAuth: true, indexNumber: 1 },
        component: () => import("../views/Pages/FiveLinesAday.vue"),
      },
      {
        path: "story-writer",
        name: "Story writer",
        meta: { requiresAuth: true, indexNumber: 2 },
        component: () => import("../views/Pages/StoryWriter.vue"),
      },
      {
        path: "write-my-diaries",
        name: "Write my diaries",
        meta: { requiresAuth: true, indexNumber: 3 },
        component: () => import("../views/Pages/WriteMyDiaries.vue"),
      },
      // {
      //   path: "settings",
      //   name: "Settings",
      //   meta: { requiresAuth: true, indexNumber: 4 },
      //   component: () => import("../views/Pages/Settings.vue"),
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters["checkAuth"] || localStorage.getItem("token")) {
      next();
    } else {
      next("/signup");
    }
  } else {
    next();
  }
});

export default router;
