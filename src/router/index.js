import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Midmain from "@/components/midmain/midmain";
import Deminfilter from "@/components/deminfilter/deminfilter"
import NotFound from "@/components/404notfound/404NotFound.vue";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/midmain',
          name: 'midmain',
          component: Midmain
        },
        {
          path: '/deminfilter',
          name: 'deminfilter',
          component: Deminfilter,

        },
      ]

    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
router.afterEach((to, from) => {
  // console.log(from)
})
export default router


