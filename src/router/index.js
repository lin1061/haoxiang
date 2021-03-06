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
const Activemore = r => require.ensure([], () => r(require('@/components/activemore')), 'activemore')
const Logistics = r => require.ensure([], () => r(require('@/components/logistics')), 'logistics')
const Shouhuoadd = r => require.ensure([], () => r(require('@/components/shouhuoadd')), 'shouhuoadd')
const Addresslist = r => require.ensure([], () => r(require('@/components/addresslist')), 'addresslist')
const Toursign = r => require.ensure([], () => r(require('@/components/toursign')), 'toursign')
const Studying = r => require.ensure([], () => r(require('@/components/studying')), 'studying')
const Bycarmore = r => require.ensure([], () => r(require('@/components/bycarmore')), 'bycarmore')
const Membermotion = r => require.ensure([], () => r(require('@/components/membermotion')), 'membermotion')
const Membermotion1 = r => require.ensure([], () => r(require('@/components/membermotion1')), 'membermotion1')
const Membermotion2 = r => require.ensure([], () => r(require('@/components/membermotion2')), 'membermotion2')
const Tourmore = r => require.ensure([], () => r(require('@/components/tourmore')), 'tourmore')
const Collect = r => require.ensure([], () => r(require('@/components/collect')), 'collect')
const Shopcart = r => require.ensure([], () => r(require('@/components/shopcart')), 'shopcart')
const Activegood = r => require.ensure([], () => r(require('@/components/activegood')), 'activegood')
const Signinfo = r => require.ensure([], () => r(require('@/components/signinfo')), 'signinfo')
const Goldlist = r => require.ensure([], () => r(require('@/components/goldlist')), 'goldlist')
const Goldgood = r => require.ensure([], () => r(require('@/components/goldgood')), 'goldgood')
const Confirmorder = r => require.ensure([], () => r(require('@/components/confirmorder')), 'confirmorder')
const Ordershow1 = r => require.ensure([], () => r(require('@/components/ordershow1')), 'ordershow1')
const Goldorder = r => require.ensure([], () => r(require('@/components/goldorder')), 'goldorder')
const Goldrule = r => require.ensure([], () => r(require('@/components/goldrule')), 'goldrule')
const Membership = r => require.ensure([], () => r(require('@/components/membership')), 'membership')
const Userprivary = r => require.ensure([], () => r(require('@/components/userprivary')), 'userprivary')
const Usership = r => require.ensure([], () => r(require('@/components/usership')), 'usership')
const Hxsummary = r => require.ensure([], () => r(require('@/components/hxsummary')), 'hxsummary')
const Contact = r => require.ensure([], () => r(require('@/components/contact')), 'contact')
const Confirmorder1 = r => require.ensure([], () => r(require('@/components/confirmorder1')), 'confirmorder1')
const Paysuccess = r => require.ensure([], () => r(require('@/components/paysuccess')), 'paysuccess')
const Payfailed = r => require.ensure([], () => r(require('@/components/payfail')), 'payfail')
const Activesuccess = r => require.ensure([], () => r(require('@/components/activesuccess')), 'activesuccess')
const Goldsuccess = r => require.ensure([], () => r(require('@/components/goldsuccess')), 'goldsuccess')
const Goldfail = r => require.ensure([], () => r(require('@/components/goldfail')), 'goldfail')
const Schoolsuccess = r => require.ensure([], () => r(require('@/components/schoolsuccess')), 'schoolsuccess')
const Schoolfail = r => require.ensure([], () => r(require('@/components/schoolfail')), 'schoolfail')
const Memberfail = r => require.ensure([], () => r(require('@/components/memberfail')), 'memberfail')
const Billupdate = r => require.ensure([], () => r(require('@/components/billupdate')), 'billupdate')
const Goldadd = r => require.ensure([], () => r(require('@/components/goldadd')), 'goldadd')


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
            path: '/myorder/:id',
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
        },
        //活动商品详情页
        {
            path: '/activegood',
            name: 'activegood',
            component: Activegood
        },
        //报名信息
        {
            path: '/signinfo',
            name: 'signinfo',
            component: Signinfo
        },
        //金币商城列表
        {
            path: '/goldlist',
            name: 'goldlist',
            component: Goldlist
        },
        //金币商品
        {
            path: '/goldgood',
            name: 'goldgood',
            component: Goldgood
        },
        //金币确认订单
        {
            path: '/goldorder',
            name: 'goldorder',
            component: Goldorder
        },
        //购物车确认订单
        {
            path: '/confirmorder',
            name: 'confirmorder',
            component: Confirmorder
        },
        // 订单详情已支付
        {
            path: '/ordershow1',
            name: 'ordershow1',
            component: Ordershow1
        },
        //金币规则
        {
            path: '/goldrule',
            name: 'goldrule',
            component: Goldrule
        },
        //会员协议
        {
            path: '/membership',
            name: 'membership',
            component: Membership
        },
        //用户隐私协议
        {
            path: '/userprivary',
            name: 'userprivary',
            component: Userprivary
        },
        //用户协议
        {
            path: '/usership',
            name: 'usership',
            component: Usership
        },
        //好象有货简介
        {
            path: '/hxsummary',
            name: 'hxsummary',
            component: Hxsummary
        },
        //联系我们
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        //购物车确认订单
        {
            path: '/confirmorder1',
            name: 'confirmorder1',
            component: Confirmorder1
        },
        //订单支付成功页面
        {
            path: '/paysuccess',
            name: 'paysuccess',
            component: Paysuccess
        },
        //订单支付失败页面
        {
            path: '/payfail',
            name: 'payfail',
            component: Payfailed
        },
        //参加活动成功页面
        {
            path: '/activesuccess',
            name: 'activesuccess',
            component: Activesuccess
        },
        //兑换成功页面
        {
            path: '/goldsuccess',
            name: 'goldsuccess',
            component: Goldsuccess
        },
        //兑换失败页面
        {
            path: '/goldfail',
            name: 'goldfail',
            component: Goldfail
        },
        //会员卡失败页面
        {
            path: '/goldfail',
            name: 'goldfail',
            component: Goldfail
        },
        //校园商品成功页面
        {
            path: '/schoolsuccess',
            name: 'schoolsuccess',
            component: Schoolsuccess
        },
        //校园商品失败页面
        {
            path: '/schoolfail',
            name: 'schoolfail',
            component: Schoolfail
        },
        //会员卡失败页面
        {
            path: '/memberfail',
            name: 'memberfail',
            component: Memberfail
        },
        //发票编辑页面
        {
            path: '/billupdate',
            name: 'billupdate',
            component: Billupdate
        },
        //金币签到页面
        {
            path: '/goldadd',
            name: 'goldadd',
            component: Goldadd
        },
    ]
})
