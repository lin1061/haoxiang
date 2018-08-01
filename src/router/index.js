import Vue from 'vue'
import Router from 'vue-router'


const Addbills = r => require.ensure([], () => r(require('@/components/addbills')), 'addbills')
const Billslist = r => require.ensure([], () => r(require('@/components/billslist')), 'billslist')
const Myorder = r => require.ensure([], () => r(require('@/components/myorder')), 'myorder')
const Ordershow = r => require.ensure([], () => r(require('@/components/ordershow')), 'ordershow')
const Member = r => require.ensure([], () => r(require('@/components/member')), 'member')
const Membershow = r => require.ensure([], () => r(require('@/components/membershow')), 'membershow')
const Afterorder = r => require.ensure([], () => r(require('@/components/afterorder')), 'afterorder')
const Shopshow = r => require.ensure([], () => r(require('@/components/shopshow')), 'shopshow')
const Goodshow = r => require.ensure([], () => r(require('@/components/goodshow')), 'goodshow')
const Memberover = r => require.ensure([], () => r(require('@/components/memberover')), 'memberover')


Vue.use(Router)


export default new Router({
  routes: [
      // 新增发票页面
    {
        path: '/addbills',
        name: 'addbills',
        component: Addbills
    },
      // 发票详情页面
    {
        path: '/billslist',
        name: 'billslist',
        component: Billslist
    },//我的订单页面
    {
      path: '/myorder',
      name: 'myorder',
      component: Myorder
    },
      //订单详情页面
      {
          path: '/ordershow',
          name: 'ordershow',
          component: Ordershow
      },
      //开卡成功页面
      {
          path: '/member',
          name: 'member',
          component: Member
      },
      //会员卡内容页
      {
          path: '/membershow',
          name: 'membershow',
          component: Membershow
      },
      //会员过期
      {
          path: '/memberover',
          name: 'memberover',
          component: Memberover
      },
      //订单缺省页
      {
          path: '/afterorder',
          name: 'afterorder',
          component: Afterorder
      },
      //商家详情页
      {
          path: '/shopshow',
          name: 'shopshow',
          component: Shopshow
      },
      //商品详情页
      {
          path: '/goodshow',
          name: 'goodshow',
          component: Goodshow
      },

  ]
})
