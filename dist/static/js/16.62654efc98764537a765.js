webpackJsonp([16],{"+PxW":function(n,A,t){"use strict";function e(n){t("pOg9")}Object.defineProperty(A,"__esModule",{value:!0});var i=(t("pFYg"),t("Dd8w")),a=t.n(i),o=t("NYxO"),r=(a()({},Object(o.b)({goods_id:function(n){return n.goods_id}}),{moneynum:function(){return this.goods.member_price*this.goodsnum}}),{name:"goodshow",data:function(){return{showbox:!1,goodsnum:1,goods:[],names:"",save_price:"",style_img:"",style_price:"",style_stock:"",choose_spec:[],img:""}},computed:a()({},Object(o.b)({goods_id:function(n){return n.goods_id}}),{moneynum:function(){return this.goods.member_price*this.goodsnum}}),mounted:function(){var n=this;this.$axios.get("/goods/detail",{params:{goods_id:this.goods_id}}).then(function(A){n.goods=A.data.data,n.save_price=n.goods.market_price-n.goods.member_price;for(var t=0;t<n.goods.spec_reg.length;t++)(n.names=n.goods.spec_reg[t])&&(n.style_img=n.goods.spec_reg[t].spec_img_path,n.style_stock=n.goods.spec_reg[t].stock)})},methods:{goodshow:function(){this.showbox=!this.showbox},close:function(){this.showbox=!1},add:function(){this.goodsnum++},reduce:function(){--this.goodsnum<=0&&(this.goodsnum=0)},check:function(n,A,t){this.names=A,this.choose_spec[t]=n;for(var e="",i=0;i<this.choose_spec.length;i++)e+=i==this.choose_spec.length-1?this.choose_spec[i]:this.choose_spec[i]+"-";for(var i=0;i<this.goods.spec_reg.length;i++)this.goods.spec_reg[i].reg_spec_str==e&&(this.style_img=this.goods.spec_reg[i].spec_img_path,this.style_stock=this.goods.spec_reg[i].stock);this.names}}}),d=function(){var n=this,A=n.$createElement,e=n._self._c||A;return e("div",{attrs:{id:"main"}},[e("main",[e("div",{staticClass:"good-info clearfix"},[e("div",{staticClass:"imgbox"},[e("img",{staticClass:"banner",attrs:{src:n.goods.goods_img}})]),n._v(" "),n._m(0),e("p",{staticClass:"description"},[n._v(n._s(n.goods.name))]),n._v(" "),e("p"),n._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"oldprice"},[n._v("￥"+n._s(n.goods.member_price))]),n._v(" "),e("span",{staticClass:"newprice"},[n._v("已省:￥"+n._s(n.save_price))]),n._v(" "),e("span",{staticClass:"number"},[n._v("销量："+n._s(n.goods.sales_volume)+"件")])]),n._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"oldprice oldprice1"},[n._v("原价：￥"+n._s(n.goods.market_price))]),n._v(" "),e("img",{staticClass:"anniu",attrs:{src:t("uQB9")}})]),n._v(" "),e("div",{staticClass:"price price1"},[e("span",{staticClass:"oldprice oldprice1"},[n._v("已选：")]),n._v(" "),e("span",{staticClass:"newprice newprice1"},[n._v("原味，100g")]),n._v(" "),e("img",{staticClass:"anniu anniu1",attrs:{src:t("Gdut")},on:{click:n.goodshow}})]),n._v(" "),n._m(1)]),n._v(" "),e("section",{staticClass:"goodsmore"},[e("div",{staticClass:"goostitle"},[n._v("商品详情")]),n._v(" "),e("div",{staticClass:"imgsbox",domProps:{innerHTML:n._s(n.goods.description)}})]),n._v(" "),e("ul",{staticClass:"yx clearfix"},[e("div",{staticClass:"youxuan"},[n._v("优选好货")]),n._v(" "),n._l(n.goods.about_recommend,function(A){return e("li",{staticClass:"yx-item"},[e("div",{staticClass:"box"},[e("img",{staticClass:"goodstu",attrs:{src:A.goods_img}})]),n._v(" "),e("div",{staticClass:"yx-ginfo clearfix"},[e("span",{staticClass:"yx-gname"},[n._v(n._s(A.goods_name))]),n._v(" "),e("span",{staticClass:"yx-newprice"},[n._v("￥"+n._s(A.shop_price))]),n._v(" "),e("span",{staticClass:"yx-shen"},[n._v("已省:10元")]),n._v(" "),e("span",{staticClass:"yx-oldprice"},[n._v("原价:￥"+n._s(A.market_price)+"元")])])])})],2)]),n._v(" "),e("footer",[e("div",{staticClass:"footbox clearfix"},[n._m(2),n._v(" "),n._m(3),n._v(" "),e("button",{staticClass:"lijishop",on:{click:n.goodshow}},[n._v("立即购买")]),n._v(" "),e("button",{staticClass:"lijishop lijishop1",on:{click:n.goodshow}},[n._v("加入购物车")])]),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.showbox,expression:"showbox"}],staticClass:"zhezhao",on:{touchmove:function(n){n.preventDefault()}}},[e("div",{staticClass:"goods clearfix"},[e("div",{staticClass:"ginfo"},[e("div",{staticClass:"goodsxtu"},[e("img",{attrs:{src:n.style_img,alt:""}})]),n._v(" "),e("span",{staticClass:"sum"},[n._v("共计: "),e("span",{staticClass:"prices"},[n._v("￥"+n._s(n.moneynum))])]),n._v(" "),e("span",{staticClass:"numbers"},[n._v("库存"+n._s(n.style_stock)+"件")]),n._v(" "),e("div",{staticClass:"close",on:{click:n.close}},[n._v("x")]),n._v(" "),n._l(n.goods.spec_group,function(A,t){return e("div",{key:t,staticClass:"group"},[e("span",{staticClass:"style"},[n._v(n._s(A.spec_name)+":")]),n._v(" "),e("div",{staticClass:"stylebox"},n._l(A.spec_value,function(A,i){return e("div",{staticClass:"style1",on:{click:function(e){n.check(A,i,t)}}},[n._v(n._s(A))])}))])}),n._v(" "),e("div",{staticClass:"choose"},[e("span",{staticClass:"num"},[n._v("数量:")]),n._v(" "),e("img",{staticClass:"jh",attrs:{src:t("EPbw")},on:{click:n.reduce}}),n._v(" "),e("span",{staticClass:"numadd"},[n._v(n._s(n.goodsnum))]),n._v(" "),e("img",{staticClass:"jh jhh",attrs:{src:t("vPOW")},on:{click:n.add}})])],2),n._v(" "),e("div",{staticClass:"ok",attrs:{clearfix:""}},[n._v("选好了")])])])])])},s=[function(){var n=this,A=n.$createElement,t=n._self._c||A;return t("p",[t("span",{staticClass:"good-form"},[n._v("[门店自营]")])])},function(){var n=this,A=n.$createElement,e=n._self._c||A;return e("ul",{staticClass:"fuwu"},[e("li",[e("img",{attrs:{src:t("iytc"),alt:""}})]),n._v(" "),e("li",[e("img",{attrs:{src:t("AH0S"),alt:""}})]),n._v(" "),e("li",[e("img",{attrs:{src:t("Oyq1"),alt:""}})])])},function(){var n=this,A=n.$createElement,e=n._self._c||A;return e("div",{staticClass:"ser"},[e("img",{staticClass:"server",attrs:{src:t("ZVqs")}}),n._v(" "),e("span",{staticClass:"kefu"},[n._v("客服")])])},function(){var n=this,A=n.$createElement,e=n._self._c||A;return e("div",{staticClass:"ser like"},[e("img",{staticClass:"server liketu",attrs:{src:t("2O2/")}}),n._v(" "),e("span",{staticClass:"kefu"},[n._v("收藏")])])}],C={render:d,staticRenderFns:s},l=C,m=t("VU/8"),f=e,g=m(r,l,!1,f,"data-v-092f0378",null);A.default=g.exports},"2O2/":function(n,A){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRBNUNEMjBEOEJDODExRThBODVCQTIwMjk1QzUzQjc1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRBNUNEMjBFOEJDODExRThBODVCQTIwMjk1QzUzQjc1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REE1Q0QyMEI4QkM4MTFFOEE4NUJBMjAyOTVDNTNCNzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REE1Q0QyMEM4QkM4MTFFOEE4NUJBMjAyOTVDNTNCNzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4jhDY7AAAFOklEQVR42tyaC1PiOhTHmxbBoggo6Lq61wfo+P0/jS9gBUH08rZAWyi5/zjo7HULTZsUqZlRbKknOb/zSpoQJXgjirxGJcqjq1JGJoCwGw1DqSgB8A2EfHMA3DCILFAnJyfaJpqqqhpFm81mU8MwrEajMQswsL/6jcViyunpaULTtNh7H9Pp1G42mxb64bU8DaKoJySm/NbWVg4Dy+JaX9CxCSh9y7I6pVLJ8mPC3d1dcnBwkIb8XULINm5pLo85YDJwHKd1fX1tcAChfpRdCohZ5/LyMo8BHi4YnPsIKO2MRqOnSqViL3uOyb+4uMjC+j9xGfchf2CaZg3AbQ8gVBQEs5Cay+VOYaF0wFh14NJVWK//aVBvfR4eHmrwhH8E5Vcg/9UPDM0PhGw2y0AUMMgdgaSlslDa29tzWq3WaN7fW59HR0cxQLiYh4GQfMgZQr7Na2zNj4cUCoVfGGRWRgrHYHcA1m6322N2DS/T8MMgbEoQTyA/nUqlet1u1+FJ+ipvVbi6utrBIHMy69nGxsYxEm6C9bG/v38kCcKHkVHETli+WWJk4uYRCx9MJBIkn8+fszwmubYTwIjDcnY8Hj+WPXEA2HgmkzERIqbXs1yKnZ2dsZywqYTQmAvruh5XQmqoPAf46P1hWOpibKpyuY2m7YU55YPl9BBlJ4vFoi6cI9LptAphqSjPrRF2aa8UoHqVFiQxnTOprm1jXsHjEcQjxjaV6LfEJz2J39AATBKLOgUeHVSOmeV3WIarwg+w1e43AOHIAOFEncIfxiSBQUwmE/MbeIQt7BG1Ws3ica11brPZbCQMAh7B3oqNogwCOhgyVp+K4zj9KIdFuVweSQHRQ1MCbpx8eblwnC5C433s1A+Ivx5uNptTCOtFsWAMh8OOjInGB5TxePwSwSTZrVarNi8ILpevVCpmxLyCecPLAv1ooBzx/s+DweCJgY5Ibmg/PDxYy5TnAUHd/n58fLSn02kzChXz+fn5yY+RVR5an0KkhXnFeJ0pWJZV73Q6M96w8AoNVyHohL6+vj6s62wTeax9d3fX51E+SI74nyBkYsu27cc1XFyNMbb6MkMuuqfyPOR27/b2tsc2XteIw7Tf7/82DIMuynHLGs9O16JXXARVxMhms0lCSOKrI2I0GpVRJUyepO92j3fv0w0GgUcoqCKDVCq1DRgbXxURyFvVUqlk+PEAL4/w7RWmaVJVVQfJZHLnK95vYmVZR5h2PTzAM+wXnW3wBQMzuBlg9FcNAxAeb25u2qIQloEQgZFaRZh8giDcREC4wsBnfwuNbcCGlRNQumsIhw6HB3BPqLyO/fiGgezNMngvnU4nJG/zv1UHrIJ/39/f92VC4AERCAZ7vddutwfshA3CZUvSZGkCjytjij8MCCFwaAjBwMCVVqtlZDKZiaZpO4rARhF7ZwpZ5Xq9bglAoGGB8ITBfrGjQdvb28NYLMaSqOYXApu9YqJUnR8BCmp9KssjhGBACRsh0kVF0X3MQh1MlGqoDP+yUFugEOVQmIooJx0Ga/AKUiwW9/F5sKxvtnjC9P1hvqeihA1BUeSezie81+fn50ld13+5VRWEwgtWkE0kRsqpNA0aDqIgRGB83MP6hBwfH/9AIs3Pk6s1PzU7FPSCQFVDZMvfz6ndhfcKhUIyHo+nGo3GC5bR1Idy0iCIgpABw/dLoTAgyADhJYMI9Esl3V8ZiKAwZHiGFAgyBxkmECr4/ZeA4JVJJClHVznodZIrHcCqBkyiAGEVIGT2Q6NmMZn9RfJwSqTbfwIMAMoNe+1XgRoUAAAAAElFTkSuQmCC"},FcbT:function(n,A,t){A=n.exports=t("FZ+f")(!0),A.push([n.i,"\n.group[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float:left;\n}\n.choose[data-v-092f0378]{\n    width: 100%;\n    height: 1.5rem;\n    float:left;\n    position: relative;\n}\n.ginfo[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float:left;\n    position: absolute;\n    bottom:1.02rem;\n    left:0;\n    background: #fff;\n}\nheader[data-v-092f0378]{\n    width: 100%;\n    height: 6vh;\n    background:  -webkit-linear-gradient(left, #ff1c8b , #f37404);\n    background:  linear-gradient(to right, #ff1c8b , #f37404);\n    line-height: 0.50rem;\n    position:fixed;\n    top:0;\n    left:0;\n    z-index:99;\n}\n.back[data-v-092f0378]{\n    width: 0.34rem;\n    height: 0.24rem;\n    margin-left:0.32rem;\n}\n.title[data-v-092f0378]{\n    font-size:0.30rem;\n    color:#fff;\n    margin-left:2.20rem;\n}\n.share[data-v-092f0378]{\n    width: 0.30rem;\n    height: 0.33rem;\n    display: block;\n    margin-right:0.38rem;\n    margin-top: 0.25rem;\n    float:right;\n}\n/*main{*/\n/*width: 100%;*/\n/*margin-top:0.8rem;*/\n/*}*/\n.good-info[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    float:left;\n}\n.imgbox[data-v-092f0378]{\n    width: 100%;\n    height: 5.04rem;\n    position: relative;\n}\n.banner[data-v-092f0378]{\n    width: 100%;\n    height: 5.04rem;\n}\n.love[data-v-092f0378]{\n    width: 0.35rem;\n    height: 0.31rem;\n    position: absolute;\n    top:0.42rem;\n    right:0.40rem;\n}\n.good-form[data-v-092f0378]{\n    font-size:0.32rem;\n    color:#fa3d58;\n    padding-left:0.34rem;\n    padding-top:0.34rem;\n    display: block;\n    float:left;\n}\n.description[data-v-092f0378]{\n    font-size:0.32rem;\n    color:#555555;\n    display: block;\n    padding-left:0.34rem;\n    padding-top:0.40rem;\n    width: 7.0rem;\n}\n.oldprice[data-v-092f0378]{\n    font-size:0.28rem;\n    color:#f84848;\n    display: block;\n    float:left;\n    padding-left: 0.36rem;\n    padding-top:0.28rem;\n    font-weight: bold;\n}\n.newprice[data-v-092f0378]{\n    display: block;\n    float:left;\n    font-size:0.28rem;\n    color:#555555;\n    padding-left: 0.19rem;\n    padding-top:0.28rem;\n}\n.number[data-v-092f0378]{\n    font-size:0.24rem;\n    color:#a2a2a2;\n    float:right;\n    padding-top:0.28rem;\n    padding-right: 0.43rem;\n    display: block;\n}\n.price[data-v-092f0378]{\n    width: 100%;\n    float:left;\n}\n.oldprice1[data-v-092f0378]{\n    color:#a2a2a2;\n    font-weight: normal;\n}\n.anniu[data-v-092f0378]{\n    width: 1.35rem;\n    height: 0.37rem;\n    float:right;\n    margin-top:0.19rem;\n    margin-right: 0.44rem;\n    display: block;\n}\n.price1[data-v-092f0378]{\n    /*margin-top: 0.48rem;*/\n    padding-bottom: 0.16rem;\n    border-bottom: 0.01rem solid #cccccc;\n}\n.newprice1[data-v-092f0378]{\n    font-weight: 600;\n}\n.anniu1[data-v-092f0378]{\n    width: 0.33rem;\n    height: 0.07rem;\n    margin-top:0.42rem;\n    margin-right: 0.44rem;\n}\n.fuwu[data-v-092f0378]{\n    width: 100%;\n    height: 0.72rem;\n    border-bottom:0.01rem solid #e0e0e0;\n    float:left;\n}\n.fuwu li[data-v-092f0378]{\n    width: 33.333333333%;\n    height: 100%;\n    float:left;\n}\n.fuwu li img[data-v-092f0378]{\n    width: 2.11rem;\n    /*height: 0.26rem;*/\n    display: block;\n    margin:0 auto;\n    margin-top: 0.23rem;\n}\n.goodsmore[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float: left;\n    margin-top: 0.07rem;\n}\n.goostitle[data-v-092f0378]{\n    width: 100%;\n    height: 0.82rem;\n    font-size:0.26rem;\n    color:#555555;\n    line-height: 0.82rem;\n    text-align: center;\n    background: #fff;\n}\n.imgsbox[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    background: #fff;\n}\n.imgsbox img[data-v-092f0378]{\n    width: 100%;\n    height: 100%;\n}\n.yx[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float:left;\n    margin-top: 0.08rem;\n}\n.youxuan[data-v-092f0378]{\n    width: 100%;\n    height: 0.70rem;\n    line-height: 0.70rem;\n    font-size:0.26rem;\n    color:#323a45;\n    background: #fff;\n    padding-left:0.33rem;\n}\n.yx-item[data-v-092f0378]{\n    width: 3.745rem;\n    /*height: 4.30rem;*/\n    float:left;\n}\n.yx li[data-v-092f0378]:nth-child(2n+1){\n    float: right;\n    border-left:0.02rem solid #e5e5e5;\n}\n.box[data-v-092f0378]{\n    width: 100%;\n    /*height: 3.07rem;*/\n    border-bottom:0.01rem solid #e5e5e5;\n    position: relative;\n}\n.box img[data-v-092f0378]{\n    width: 100%;\n    height: 100%;\n}\n.yx-ginfo[data-v-092f0378]{\n    width: 100%;\n    /*height: 1.22rem;*/\n    background: #fff;\n    padding-left: 0.21rem;\n}\n.yx-gname[data-v-092f0378]{\n    font-size:0.22rem;\n    color:#2c2c2c;\n    display: block;\n    padding-top: 0.12rem;\n    white-space:nowrap;\n    overflow:hidden;\n    text-overflow: ellipsis;\n    width: 96%;\n}\n.yx-newprice[data-v-092f0378]{\n    font-size:0.26rem;\n    color:#f84848;\n    display: block;\n    line-height: 0.26rem;\n    padding-top: 0.16rem;\n    float: left;\n    font-weight: bold;\n}\n.yx-shen[data-v-092f0378]{\n    font-size:0.24rem;\n    color:#f84848;\n    display: block;\n    line-height: 0.24rem;\n    padding-top: 0.16rem;\n    float: left;\n    padding-left: 0.13rem;\n}\n.yx-item1[data-v-092f0378]{\n    float: right;\n    border-left:0.02rem solid #e5e5e5;\n}\n.yx-oldprice[data-v-092f0378]{\n    font-size: 0.24rem;\n    color: #8a959e;\n    display: block;\n    float: left;\n    width: 100%;\n    padding-top: 0.13rem;\n    margin-right: 0.12rem;\n    margin-bottom: 0.10rem;\n}\n.footbox[data-v-092f0378]{\n    width: 100%;\n    height: 0.96rem;\n    background: #fff;\n    position: fixed;\n    left:0;\n    bottom:0rem;\n    border-top:0.01rem solid #e0e0e0;\n}\nmain[data-v-092f0378]{\n    margin-bottom: 1.04rem;\n    width: 100%;\n    float:left;\n}\n.ser[data-v-092f0378]{\n    width: 0.48rem;\n    height: 100%;\n    margin-left: 0.53rem;\n    float: left;\n}\n.server[data-v-092f0378]{\n    width: 0.41rem;\n    height: 0.38rem;\n    display: block;\n    margin:0 auto;\n    margin-top: 0.14rem;\n}\n.kefu[data-v-092f0378]{\n    font-size: 0.22rem;\n    color:#a2a2a2;\n    line-height: 0.22rem;\n    display: block;\n    padding-top: 0.10rem;\n}\n.like[data-v-092f0378]{\n    width: 0.48rem;\n    margin-left: 0.88rem;\n}\n.liketu[data-v-092f0378]{\n    width: 0.48rem;\n    height: 0.38rem;\n}\n.lijishop[data-v-092f0378]{\n    width: 2.14rem;\n    height: 100%;\n    background: -webkit-linear-gradient(left, #ff1c8b , #f37404);\n    background: linear-gradient(to right, #ff1c8b , #f37404);\n    display: block;\n    float:left;\n    border: none;\n    outline: none;\n    margin-left: 0.56rem;\n    font-size:0.36rem;\n    text-align: center;\n    color:#fff;\n}\n.lijishop1[data-v-092f0378]{\n    width: 2.43rem;\n    margin-left: 0;\n}\n.goods[data-v-092f0378]{\n    width: 100%;\n    /*height: 8.6rem;*/\n    background: #fff;\n    position: fixed;\n    left:0;\n    bottom:0;\n}\n.goodsxtu[data-v-092f0378]{\n    width: 2.22rem;\n    height: 2.22rem;\n    background: #f5f5f5;\n    margin:0.35rem 0.22rem 0 0.45rem;\n}\n.goodsxtu img[data-v-092f0378]{\n    width: 100%;\n    height: 100%;\n}\n.sum[data-v-092f0378]{\n    font-size:0.28rem;\n    color:#555555;\n    display: block;\n    position: absolute;\n    top:1.68rem;\n    left:2.95rem;\n}\n.prices[data-v-092f0378]{\n    color: #f9444d;\n    font-weight: bold;\n}\n.numbers[data-v-092f0378]{\n    font-size:0.24rem;\n    color:#a2a2a2;\n    display: block;\n    position: absolute;\n    top:2.18rem;\n    left:2.95rem;\n}\n.close[data-v-092f0378]{\n    width: 0.39rem;\n    height: 0.39rem;\n    position: absolute;\n    top:0.34rem;\n    right:0.40rem;\n    border:0.02rem solid #a2a2a2;\n    border-radius: 50%;\n    text-align: center;\n    font-size:0.18rem;\n    line-height: 0.39rem;\n    color:#a2a2a2;\n}\n.style[data-v-092f0378]{\n    font-size:0.28rem;\n    color:#555555;\n    padding-left: 0.53rem;\n    display: block;\n    padding-top: 0.51rem;\n}\n.style1[data-v-092f0378]{\n    /*width: 1.26rem;*/\n    height: 0.60rem;\n    background: #f5f5f5;\n    border-radius: 0.40rem;\n    padding: 0 0.20rem;\n    font-size:0.26rem;\n    color:#555555;\n    text-align: center;\n    line-height: 0.60rem;\n    margin:0.28rem 0.18rem 0 0rem;\n    float:left;\n}\n.style1[data-v-092f0378]:nth-child(n+2){\n    margin-left:0;\n}\n.style2[data-v-092f0378]{\n    margin-left:0;\n}\n.style1[data-v-092f0378]:hover{\n    color:#f9444d;\n}\n.stylebox[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float: left;\n    padding-left: 0.53rem;\n}\n.num[data-v-092f0378]{\n    display: block;\n    font-size:0.28rem;\n    color:#555555;\n    margin:0.56rem 0 0 0.53rem;\n    float: left;\n}\n.ok[data-v-092f0378]{\n    width: 100%;\n    height: 1.02rem;\n    background: -webkit-linear-gradient(left, #ff1c8b , #f37404);\n    background: linear-gradient(to right, #ff1c8b , #f37404);\n    font-size:0.36rem;\n    color:#fff;\n    position: absolute;\n    left:0;\n    bottom:0;\n    text-align: center;\n    line-height: 1.02rem;\n}\n.jh[data-v-092f0378]{\n    width: 0.36rem;\n    height: 0.36rem;\n    display: block;\n    position: absolute;\n    right:1.41rem;\n    bottom:0.5rem;\n}\n.numadd[data-v-092f0378]{\n    font-size:0.28rem;\n    color:#555555;\n    position: absolute;\n    right:0.97rem;\n    bottom:0.52rem;\n}\n.jhh[data-v-092f0378]{\n    right:0.41rem;\n}\n.zhezhao[data-v-092f0378]{\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0,0,0,0.3);\n    position: fixed;\n    top:0;\n    left:0;\n}\n","",{version:3,sources:["C:/Users/syd02/Desktop/haoxiang/src/components/goodshow.vue"],names:[],mappings:";AACA;IACI,YAAY;IACZ,aAAa;IACb,WAAW;CACd;AACD;IACI,YAAY;IACZ,eAAe;IACf,WAAW;IACX,mBAAmB;CACtB;AACD;IACI,YAAY;IACZ,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,eAAe;IACf,OAAO;IACP,iBAAiB;CACpB;AACD;IACI,YAAY;IACZ,YAAY;IACZ,8DAA8D;IAC9D,0DAA0D;IAC1D,qBAAqB;IACrB,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;CACd;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,kBAAkB;IAClB,WAAW;IACX,oBAAoB;CACvB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;CACf;AACD,SAAS;AACT,gBAAgB;AAChB,sBAAsB;AACtB,KAAK;AACL;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,WAAW;CACd;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;CACtB;AACD;IACI,YAAY;IACZ,gBAAgB;CACnB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,cAAc;CACjB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,qBAAqB;IACrB,oBAAoB;IACpB,eAAe;IACf,WAAW;CACd;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,cAAc;CACjB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,WAAW;IACX,sBAAsB;IACtB,oBAAoB;IACpB,kBAAkB;CACrB;AACD;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,sBAAsB;IACtB,oBAAoB;CACvB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,oBAAoB;IACpB,uBAAuB;IACvB,eAAe;CAClB;AACD;IACI,YAAY;IACZ,WAAW;CACd;AACD;IACI,cAAc;IACd,oBAAoB;CACvB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;CAClB;AACD;IACI,wBAAwB;IACxB,wBAAwB;IACxB,qCAAqC;CACxC;AACD;IACI,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;CACzB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,oCAAoC;IACpC,WAAW;CACd;AACD;IACI,qBAAqB;IACrB,aAAa;IACb,WAAW;CACd;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,cAAc;IACd,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;CACpB;AACD;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;CACpB;AACD;IACI,YAAY;IACZ,aAAa;CAChB;AACD;IACI,YAAY;IACZ,aAAa;IACb,WAAW;IACX,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,qBAAqB;CACxB;AACD;IACI,gBAAgB;IAChB,oBAAoB;IACpB,WAAW;CACd;AACD;IACI,aAAa;IACb,kCAAkC;CACrC;AACD;IACI,YAAY;IACZ,oBAAoB;IACpB,oCAAoC;IACpC,mBAAmB;CACtB;AACD;IACI,YAAY;IACZ,aAAa;CAChB;AACD;IACI,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;IACjB,sBAAsB;CACzB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,wBAAwB;IACxB,WAAW;CACd;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;CACrB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,qBAAqB;IACrB,YAAY;IACZ,sBAAsB;CACzB;AACD;IACI,aAAa;IACb,kCAAkC;CACrC;AACD;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;CAC1B;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,OAAO;IACP,YAAY;IACZ,iCAAiC;CACpC;AACD;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;CACd;AACD;IACI,eAAe;IACf,aAAa;IACb,qBAAqB;IACrB,YAAY;CACf;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,cAAc;IACd,qBAAqB;IACrB,eAAe;IACf,qBAAqB;CACxB;AACD;IACI,eAAe;IACf,qBAAqB;CACxB;AACD;IACI,eAAe;IACf,gBAAgB;CACnB;AACD;IACI,eAAe;IACf,aAAa;IACb,6DAA6D;IAC7D,yDAAyD;IACzD,eAAe;IACf,WAAW;IACX,aAAa;IACb,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;CACd;AACD;IACI,eAAe;IACf,eAAe;CAClB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,OAAO;IACP,SAAS;CACZ;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,iCAAiC;CACpC;AACD;IACI,YAAY;IACZ,aAAa;CAChB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,aAAa;CAChB;AACD;IACI,eAAe;IACf,kBAAkB;CACrB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,aAAa;CAChB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,cAAc;CACjB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,sBAAsB;IACtB,eAAe;IACf,qBAAqB;CACxB;AACD;IACI,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,qBAAqB;IACrB,8BAA8B;IAC9B,WAAW;CACd;AACD;IACI,cAAc;CACjB;AACD;IACI,cAAc;CACjB;AACD;IACI,cAAc;CACjB;AACD;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,sBAAsB;CACzB;AACD;IACI,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,2BAA2B;IAC3B,YAAY;CACf;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,6DAA6D;IAC7D,yDAAyD;IACzD,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,OAAO;IACP,SAAS;IACT,mBAAmB;IACnB,qBAAqB;CACxB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,cAAc;CACjB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,cAAc;IACd,eAAe;CAClB;AACD;IACI,cAAc;CACjB;AACD;IACI,aAAa;IACb,cAAc;IACd,4BAA4B;IAC5B,gBAAgB;IAChB,MAAM;IACN,OAAO;CACV",file:"goodshow.vue",sourcesContent:["\n.group[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float:left;\n}\n.choose[data-v-092f0378]{\n    width: 100%;\n    height: 1.5rem;\n    float:left;\n    position: relative;\n}\n.ginfo[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float:left;\n    position: absolute;\n    bottom:1.02rem;\n    left:0;\n    background: #fff;\n}\nheader[data-v-092f0378]{\n    width: 100%;\n    height: 6vh;\n    background:  -webkit-linear-gradient(left, #ff1c8b , #f37404);\n    background:  linear-gradient(to right, #ff1c8b , #f37404);\n    line-height: 0.50rem;\n    position:fixed;\n    top:0;\n    left:0;\n    z-index:99;\n}\n.back[data-v-092f0378]{\n    width: 0.34rem;\n    height: 0.24rem;\n    margin-left:0.32rem;\n}\n.title[data-v-092f0378]{\n    font-size:0.30rem;\n    color:#fff;\n    margin-left:2.20rem;\n}\n.share[data-v-092f0378]{\n    width: 0.30rem;\n    height: 0.33rem;\n    display: block;\n    margin-right:0.38rem;\n    margin-top: 0.25rem;\n    float:right;\n}\n/*main{*/\n/*width: 100%;*/\n/*margin-top:0.8rem;*/\n/*}*/\n.good-info[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    float:left;\n}\n.imgbox[data-v-092f0378]{\n    width: 100%;\n    height: 5.04rem;\n    position: relative;\n}\n.banner[data-v-092f0378]{\n    width: 100%;\n    height: 5.04rem;\n}\n.love[data-v-092f0378]{\n    width: 0.35rem;\n    height: 0.31rem;\n    position: absolute;\n    top:0.42rem;\n    right:0.40rem;\n}\n.good-form[data-v-092f0378]{\n    font-size:0.32rem;\n    color:#fa3d58;\n    padding-left:0.34rem;\n    padding-top:0.34rem;\n    display: block;\n    float:left;\n}\n.description[data-v-092f0378]{\n    font-size:0.32rem;\n    color:#555555;\n    display: block;\n    padding-left:0.34rem;\n    padding-top:0.40rem;\n    width: 7.0rem;\n}\n.oldprice[data-v-092f0378]{\n    font-size:0.28rem;\n    color:#f84848;\n    display: block;\n    float:left;\n    padding-left: 0.36rem;\n    padding-top:0.28rem;\n    font-weight: bold;\n}\n.newprice[data-v-092f0378]{\n    display: block;\n    float:left;\n    font-size:0.28rem;\n    color:#555555;\n    padding-left: 0.19rem;\n    padding-top:0.28rem;\n}\n.number[data-v-092f0378]{\n    font-size:0.24rem;\n    color:#a2a2a2;\n    float:right;\n    padding-top:0.28rem;\n    padding-right: 0.43rem;\n    display: block;\n}\n.price[data-v-092f0378]{\n    width: 100%;\n    float:left;\n}\n.oldprice1[data-v-092f0378]{\n    color:#a2a2a2;\n    font-weight: normal;\n}\n.anniu[data-v-092f0378]{\n    width: 1.35rem;\n    height: 0.37rem;\n    float:right;\n    margin-top:0.19rem;\n    margin-right: 0.44rem;\n    display: block;\n}\n.price1[data-v-092f0378]{\n    /*margin-top: 0.48rem;*/\n    padding-bottom: 0.16rem;\n    border-bottom: 0.01rem solid #cccccc;\n}\n.newprice1[data-v-092f0378]{\n    font-weight: 600;\n}\n.anniu1[data-v-092f0378]{\n    width: 0.33rem;\n    height: 0.07rem;\n    margin-top:0.42rem;\n    margin-right: 0.44rem;\n}\n.fuwu[data-v-092f0378]{\n    width: 100%;\n    height: 0.72rem;\n    border-bottom:0.01rem solid #e0e0e0;\n    float:left;\n}\n.fuwu li[data-v-092f0378]{\n    width: 33.333333333%;\n    height: 100%;\n    float:left;\n}\n.fuwu li img[data-v-092f0378]{\n    width: 2.11rem;\n    /*height: 0.26rem;*/\n    display: block;\n    margin:0 auto;\n    margin-top: 0.23rem;\n}\n.goodsmore[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float: left;\n    margin-top: 0.07rem;\n}\n.goostitle[data-v-092f0378]{\n    width: 100%;\n    height: 0.82rem;\n    font-size:0.26rem;\n    color:#555555;\n    line-height: 0.82rem;\n    text-align: center;\n    background: #fff;\n}\n.imgsbox[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    background: #fff;\n}\n.imgsbox img[data-v-092f0378]{\n    width: 100%;\n    height: 100%;\n}\n.yx[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float:left;\n    margin-top: 0.08rem;\n}\n.youxuan[data-v-092f0378]{\n    width: 100%;\n    height: 0.70rem;\n    line-height: 0.70rem;\n    font-size:0.26rem;\n    color:#323a45;\n    background: #fff;\n    padding-left:0.33rem;\n}\n.yx-item[data-v-092f0378]{\n    width: 3.745rem;\n    /*height: 4.30rem;*/\n    float:left;\n}\n.yx li[data-v-092f0378]:nth-child(2n+1){\n    float: right;\n    border-left:0.02rem solid #e5e5e5;\n}\n.box[data-v-092f0378]{\n    width: 100%;\n    /*height: 3.07rem;*/\n    border-bottom:0.01rem solid #e5e5e5;\n    position: relative;\n}\n.box img[data-v-092f0378]{\n    width: 100%;\n    height: 100%;\n}\n.yx-ginfo[data-v-092f0378]{\n    width: 100%;\n    /*height: 1.22rem;*/\n    background: #fff;\n    padding-left: 0.21rem;\n}\n.yx-gname[data-v-092f0378]{\n    font-size:0.22rem;\n    color:#2c2c2c;\n    display: block;\n    padding-top: 0.12rem;\n    white-space:nowrap;\n    overflow:hidden;\n    text-overflow: ellipsis;\n    width: 96%;\n}\n.yx-newprice[data-v-092f0378]{\n    font-size:0.26rem;\n    color:#f84848;\n    display: block;\n    line-height: 0.26rem;\n    padding-top: 0.16rem;\n    float: left;\n    font-weight: bold;\n}\n.yx-shen[data-v-092f0378]{\n    font-size:0.24rem;\n    color:#f84848;\n    display: block;\n    line-height: 0.24rem;\n    padding-top: 0.16rem;\n    float: left;\n    padding-left: 0.13rem;\n}\n.yx-item1[data-v-092f0378]{\n    float: right;\n    border-left:0.02rem solid #e5e5e5;\n}\n.yx-oldprice[data-v-092f0378]{\n    font-size: 0.24rem;\n    color: #8a959e;\n    display: block;\n    float: left;\n    width: 100%;\n    padding-top: 0.13rem;\n    margin-right: 0.12rem;\n    margin-bottom: 0.10rem;\n}\n.footbox[data-v-092f0378]{\n    width: 100%;\n    height: 0.96rem;\n    background: #fff;\n    position: fixed;\n    left:0;\n    bottom:0rem;\n    border-top:0.01rem solid #e0e0e0;\n}\nmain[data-v-092f0378]{\n    margin-bottom: 1.04rem;\n    width: 100%;\n    float:left;\n}\n.ser[data-v-092f0378]{\n    width: 0.48rem;\n    height: 100%;\n    margin-left: 0.53rem;\n    float: left;\n}\n.server[data-v-092f0378]{\n    width: 0.41rem;\n    height: 0.38rem;\n    display: block;\n    margin:0 auto;\n    margin-top: 0.14rem;\n}\n.kefu[data-v-092f0378]{\n    font-size: 0.22rem;\n    color:#a2a2a2;\n    line-height: 0.22rem;\n    display: block;\n    padding-top: 0.10rem;\n}\n.like[data-v-092f0378]{\n    width: 0.48rem;\n    margin-left: 0.88rem;\n}\n.liketu[data-v-092f0378]{\n    width: 0.48rem;\n    height: 0.38rem;\n}\n.lijishop[data-v-092f0378]{\n    width: 2.14rem;\n    height: 100%;\n    background: -webkit-linear-gradient(left, #ff1c8b , #f37404);\n    background: linear-gradient(to right, #ff1c8b , #f37404);\n    display: block;\n    float:left;\n    border: none;\n    outline: none;\n    margin-left: 0.56rem;\n    font-size:0.36rem;\n    text-align: center;\n    color:#fff;\n}\n.lijishop1[data-v-092f0378]{\n    width: 2.43rem;\n    margin-left: 0;\n}\n.goods[data-v-092f0378]{\n    width: 100%;\n    /*height: 8.6rem;*/\n    background: #fff;\n    position: fixed;\n    left:0;\n    bottom:0;\n}\n.goodsxtu[data-v-092f0378]{\n    width: 2.22rem;\n    height: 2.22rem;\n    background: #f5f5f5;\n    margin:0.35rem 0.22rem 0 0.45rem;\n}\n.goodsxtu img[data-v-092f0378]{\n    width: 100%;\n    height: 100%;\n}\n.sum[data-v-092f0378]{\n    font-size:0.28rem;\n    color:#555555;\n    display: block;\n    position: absolute;\n    top:1.68rem;\n    left:2.95rem;\n}\n.prices[data-v-092f0378]{\n    color: #f9444d;\n    font-weight: bold;\n}\n.numbers[data-v-092f0378]{\n    font-size:0.24rem;\n    color:#a2a2a2;\n    display: block;\n    position: absolute;\n    top:2.18rem;\n    left:2.95rem;\n}\n.close[data-v-092f0378]{\n    width: 0.39rem;\n    height: 0.39rem;\n    position: absolute;\n    top:0.34rem;\n    right:0.40rem;\n    border:0.02rem solid #a2a2a2;\n    border-radius: 50%;\n    text-align: center;\n    font-size:0.18rem;\n    line-height: 0.39rem;\n    color:#a2a2a2;\n}\n.style[data-v-092f0378]{\n    font-size:0.28rem;\n    color:#555555;\n    padding-left: 0.53rem;\n    display: block;\n    padding-top: 0.51rem;\n}\n.style1[data-v-092f0378]{\n    /*width: 1.26rem;*/\n    height: 0.60rem;\n    background: #f5f5f5;\n    border-radius: 0.40rem;\n    padding: 0 0.20rem;\n    font-size:0.26rem;\n    color:#555555;\n    text-align: center;\n    line-height: 0.60rem;\n    margin:0.28rem 0.18rem 0 0rem;\n    float:left;\n}\n.style1[data-v-092f0378]:nth-child(n+2){\n    margin-left:0;\n}\n.style2[data-v-092f0378]{\n    margin-left:0;\n}\n.style1[data-v-092f0378]:hover{\n    color:#f9444d;\n}\n.stylebox[data-v-092f0378]{\n    width: 100%;\n    height: auto;\n    float: left;\n    padding-left: 0.53rem;\n}\n.num[data-v-092f0378]{\n    display: block;\n    font-size:0.28rem;\n    color:#555555;\n    margin:0.56rem 0 0 0.53rem;\n    float: left;\n}\n.ok[data-v-092f0378]{\n    width: 100%;\n    height: 1.02rem;\n    background: -webkit-linear-gradient(left, #ff1c8b , #f37404);\n    background: linear-gradient(to right, #ff1c8b , #f37404);\n    font-size:0.36rem;\n    color:#fff;\n    position: absolute;\n    left:0;\n    bottom:0;\n    text-align: center;\n    line-height: 1.02rem;\n}\n.jh[data-v-092f0378]{\n    width: 0.36rem;\n    height: 0.36rem;\n    display: block;\n    position: absolute;\n    right:1.41rem;\n    bottom:0.5rem;\n}\n.numadd[data-v-092f0378]{\n    font-size:0.28rem;\n    color:#555555;\n    position: absolute;\n    right:0.97rem;\n    bottom:0.52rem;\n}\n.jhh[data-v-092f0378]{\n    right:0.41rem;\n}\n.zhezhao[data-v-092f0378]{\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0,0,0,0.3);\n    position: fixed;\n    top:0;\n    left:0;\n}\n"],sourceRoot:""}])},ZVqs:function(n,A){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhCN0Y0NjREOEJDQzExRThCNUFCQzQzMEQwMjZFOTk2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhCN0Y0NjRFOEJDQzExRThCNUFCQzQzMEQwMjZFOTk2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEI3RjQ2NEI4QkNDMTFFOEI1QUJDNDMwRDAyNkU5OTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEI3RjQ2NEM4QkNDMTFFOEI1QUJDNDMwRDAyNkU5OTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zYb17AAADFElEQVR42uyYSWhTQRjHJ88Y06p1Q1yxFMS1iOhBQYsKiog0YilKFeyhB0VRUJCiYqkYt4OIeNKTRlxQvFRcqBVcqlW81AUP9uB2EDUKapumuMT/h19g+JiXl6SZVxH/8IO8ed/M/PPevJlvJhCLxVQeGguWgYVgOigFJSAIkiAOPoBn4A5oAh9z7SSYY/wcUA8ioJ9LTBiMZ2aBdeA7uAwOgkfZduZkGTcanAcPwMoMxtzUH1SBh+AMGFkoc4tAO1jtEfcVvAedGWICYA14Cip6a44MXQejDPfegP087oaCIfyEB4NiMB80gJeGutReC6jO11yEX0FIlFNnNaAM7AK3wRcR0w3ugb1gIv/JtyImxEMlkqu5KeCsYWydAOXc6K8sxxvFXQDTuJ4uav80mJStuSA/sYFaWQpsAetBQuWnTh5vUVFOU9ApkxeTuQ08BejaDo6p3ov+5G5DW3N5yslorgjsFGXnwGFVWG0DbaKsQfqR5migj9GuP4HNqvD6AWpBj1ZWxquOq7m14voAG7ShDv7AdFW7maOBuUAM4OPKrvaJSXucm7l5Yupo8pjtCyFaUVaBV5wkHHJb+MtFxRvKH13j8ZZxnpsg7rUr/1QHPvPbCpvMDRcVXvtojl7nMFDJM4bn2vrNR3ODtN/F0txisERUOKoHWhKlUHvAAK1sU3qFInOzwRVDAriRF/+ARXNRXhl0TQU3KZN2OO0JuVRewfmaDU3mlN8kyg/rHTHxmlRhyVyVR7pf6Ri+UmVIBmyoxON+qaP+Yv0398+a89oTJC317dVuwjGky1L3LZnzareNzDWCny4Bd3nza0Mt3L5J5KeRzLXypjcuApr5XCRlyVyK228W5XH205pONi/xsQMtVSPAY8a2aH+yFMwAM/n6FuiSmXAXJwA2RcdiR3j3Vad9jE8Y5Zam21CYl78EnxZE+aCH9JzPUlxl0xx1vIMX9x6Rs6U3VH0yCRdpxpTBWLfhUMc3c6EM6dBV9ecc+WRfmUvy09H1jveoy5X5QNE3czTGtmqbpBectF7MpZHfAgwA45GSGgLPYEsAAAAASUVORK5CYII="},pOg9:function(n,A,t){var e=t("FcbT");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("rjj0")("78828ae8",e,!0,{})}});
//# sourceMappingURL=16.62654efc98764537a765.js.map