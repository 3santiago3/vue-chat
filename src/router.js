import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login";
import Chat from "./views/Chat";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({ name: "login" });
        }
      }
    }
  ]
});
