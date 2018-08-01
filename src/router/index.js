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
const HxMember = r => require.ensure([], () => r(require('@/components/hxmember')), 'hxmember')
const Activemore = r => require.ensure([], () => r(require('@/components/hxmember')), 'activemore')
const Logistics = r => require.ensure([], () => r(require('@/components/hxmember')), 'logistics')
const Shouhuoadd = r => require.ensure([], () => r(require('@/components/hxmember')), 'shouhuoadd')
const Addresslist = r => require.ensure([], () => r(require('@/components/hxmember')), 'addresslist')
const Toursign = r => require.ensure([], () => r(require('@/components/hxmember')), 'toursign')
const Studying = r => require.ensure([], () => r(require('@/components/hxmember')), 'studying')
const Bycarmore = r => require.ensure([], () => r(require('@/components/hxmember')), 'bycarmore')
const Membermotion = r => require.ensure([], () => r(require('@/components/hxmember')), 'membermotion')
const Membermotion1 = r => require.ensure([], () => r(require('@/components/hxmember')), 'membermotion1')
const Membermotion2 = r => require.ensure([], () => r(require('@/components/hxmember')), 'membermotion2')
const Tourmore = r => require.ensure([], () => r(require('@/components/hxmember')), 'tourmore')
const Collect = r => require.ensure([], () => r(require('@/components/hxmember')), 'collect')
const Shopcart = r => require.ensure([], () => r(require('@/components/shopcart')), 'shopcart')

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
        //好象会员卡页面
        {
            path: '/hxmember',
            name: 'hxmember',
            component: HxMember
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
        //物流信息
        {
            path: '/logistics',
            name: 'logistics',
            component: Logistics
        },
        //活动详情页
        {
            path: '/activemore',
            name: 'activemore',
            component: Activemore
        },
        //收货地址添加
        {
            path: '/shouhuoadd',
            name: 'shouhuoadd',
            component: Shouhuoadd
        },
        //收货地址列表
        {
            path: '/addresslist',
            name: 'addresslist',
            component: Addresslist
        },
        //旅行特卖报名成功
        {
            path: '/toursign',
            name: 'toursign',
            component: Toursign
        },
        //叮叮驾考活动页面
        {
            path: '/bycarmore',
            name: 'bycarmore',
            component: Bycarmore
        },
        //出国留学活动页面
        {
            path: '/studying',
            name: 'studying',
            component: Studying
        },
        //旅游特卖活动页面
        {
            path: '/tourmore',
            name: 'tourmore',
            component: Tourmore
        },
        //好象会员示意（已过期）
        {
            path: '/membermotion',
            name: 'membermotion',
            component: Membermotion
        },
        //好象会员示意（去开通）
        {
            path: '/membermotion1',
            name: 'membermotion1',
            component: Membermotion1
        },
        //好象会员示意（体验）
        {
            path: '/membermotion2',
            name: 'membermotion2',
            component: Membermotion2
        },
        //收藏页列表
        {
            path: '/collect',
            name: 'collect',
            component: Collect
        },
        // 购物车
        {
            path: '/shopcart',
            name: 'shopcart',
            component: Shopcart
        }


    ]
})
