import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

<<<<<<< HEAD
const routes = [ 
    {
        path: '/',
        name: 'Index', 
        redirect: '/recommend',
        component: () => import('../views/Index.vue'),
        children:[
            {
                path: 'recommend',
                name:  'Recommend',
=======
const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: '/recommend',
        component: () => import('../views/Index.vue'),
        children: [
            {
                path: 'recommend',
                name: 'Recommend',
>>>>>>> dev-wr
                component: () => import('../views/index/Recommend.vue'),
                meta: {
                    title: "今日推荐音乐"
                }
            },
            {
                path: 'hot',
<<<<<<< HEAD
                name:  'Hot',
=======
                name: 'Hot',
>>>>>>> dev-wr
                component: () => import('../views/index/Hot.vue'),
                meta: {
                    title: "Hot热歌榜"
                }
            },
            {
                path: 'search',
<<<<<<< HEAD
                name:  'Search',
=======
                name: 'Search',
>>>>>>> dev-wr
                component: () => import('../views/index/Search.vue'),
                meta: {
                    title: "搜索你喜欢的音乐~"
                }
            }
        ]
    },
    {
<<<<<<< HEAD
        path: '/musicdetails/:id',
        name: 'MusicDetails',
        component: () => import('../views/MusicDetails.vue')
    }
=======
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue'),
        meta: {
            title: "个人中心页"
        }
    },
    {
        path: '/song',
        name: 'Song',
        component: () => import('../views/Song.vue'),
        meta: {
            title: "个人中心页"
        }
    },
>>>>>>> dev-wr
]

const router = new VueRouter({
    linkActiveClass: "link-active",
    routes
})

<<<<<<< HEAD
router.beforeEach((to, from,next) => {
    document.title  = to.meta.title
    next();
=======
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
>>>>>>> dev-wr
})

export default router
