import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Discover from '@/views/Discover'
import Fitness from '@/views/Fitness'
import Mine from '@/views/Mine'
import Login from '@/views/Login'
import Register from '@/views//Register'
import Sports from '@/views/HomeSubviews/Sports'
import Walking from '@/views/HomeSubviews/Walking'
import Running from '@/views/HomeSubviews/Running'
import Riding from '@/views/HomeSubviews/Riding'
import Cover from '@/views/DiscoverSubviews/Cover'
import Dynamic from '@/views/DiscoverSubviews/Dynamic'
import Train from '@/views/FitnessSubviews/Train'
import Coach from '@/views/FitnessSubviews/Coach'
import Course from '@/views/FitnessSubviews/Course'
import Material from '@/views/FitnessSubviews/Material'
import Runset from '@/views/HomeSubviews/RunSubviews/Runset'
import Runmap from '@/views/HomeSubviews/RunSubviews/Runmap'
import Runrecord from '@/views/HomeSubviews/RunSubviews/Runrecord'
import Account from '@/views/MineSubviews/Account'
//绑定页面
import Binding from '@/views/MineSubviews/Binding'
import Myset from '@/views/MineSubviews/Myset'
import Personal from '@/views/MineSubviews/Personal'
import Dynamicdetails from '@/views/DiscoverSubviews/Dynamicdetails'
import Release from '@/views/DiscoverSubviews/Release'
import Select from '@/views/DiscoverSubviews/Subviews/Select'
import Food from '@/views/DiscoverSubviews/Subviews/Food'
import Shop from '@/views/DiscoverSubviews/Subviews/Shop'
import Fitcircle from '@/views/DiscoverSubviews/Subviews/Fitcircle'
import Focus from '@/views/DiscoverSubviews/Subviews/Focus'
import Near from '@/views/DiscoverSubviews/Subviews/Near'
import Fitdetails from '@/views/FitdetailsSubview/fitdetails'

//商城详情页
import ShopDetails from "../components/ShopDetails/ShopDetailsView.vue"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: "/home/sports",
      children: [
        {
          path: "sports",
          name: "Sports",
          component: Sports
        },
        {
          path: "walking",
          name: "Walking",
          component: Walking
        },
        {
          path: "running",
          name: "Running",
          component: Running,
        },
        {
          path: "riding",
          name: "Riding",
          component: Riding
        }
      ]
    },
    {
      path: "/discover",
      name: "Discover",
      component: Discover,
      redirect:"/discover/cover",
      children:[
        {
          path: "cover",
          name: "Cover",
          component: Cover,
          redirect:"/discover/cover/select",
          children: [
            {
              path: "select",
              name: "Select",
              component: Select
            },
            {
              path: "food",
              name: "Food",
              component: Food
            },
            {
              path: "shop",
              name: "Shop",
              component: Shop
            }
          ]
        },
        {
          path: "dynamic",
          name: "Dynamic",
          component: Dynamic,
          redirect:"/discover/dynamic/fitcircle",
          children: [
            {
              path: "fitcircle",
              name: "Fitcircle",
              component: Fitcircle
            },
            {
              path: "focus",
              name: "Focus",
              component: Focus
            },
            {
              path: "near",
              name: "Near",
              component: Near
            }
          ]
        }
      ]
    },
    {
      path: "/fitness",
      name: "Fitness",
      component: Fitness,
      redirect:"/fitness/train",
      children:[
        {
          path: "train",
          name: "Train",
          component: Train
        },
        {
          path: "coach",
          name: "Coach",
          component: Coach
        },
        {
          path: "course",
          name: "Course",
          component: Course
        },
        {
          path: "material",
          name: "Material",
          component: Material
        },
      ]
    },
    {
      path: "/mine",
      name: "Mine",
      component: Mine
    },
    {
      path: "/runset",
      name: "Runset",
      component: Runset
    },
    {
      path: "/runmap",
      name: "Runmap",
      component: Runmap
    },
    {
      path: "/runrecord",
      name: "Runrecord",
      component: Runrecord
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    // 发布动态
    {
      path: "/release",
      name: "Release",
      component: Release
    },
    // 个人资料
    {
      path: "/personal",
      name: "Personal",
      component: Personal
    },
    // 个人设置
    {
      path: "/myset",
      name: "Myset",
      component: Myset
    },
    // 账号管理
    {
      path: "/account",
      name: "Account",
      component: Account
    },
    // 动态详情
    {
      path: "/dynamicdetails/:uname/:zan",
      name: "Dynamicdetails",
      component: Dynamicdetails
    },
    //绑定
    {
      path:"/binding",
      name:"Binding",
      component:Binding
    },

    // 健身教程视频详情页
    {
      path: "/fitdetails",
      name: "Fitdetails",
      component: Fitdetails
    },
    //商城详情页
    {
      path:"/shopDetails",
      name:"ShopDetails",
      component:ShopDetails

    }
  ]
})
