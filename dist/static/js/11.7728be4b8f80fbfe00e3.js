webpackJsonp([11],{BPhR:function(n,e,t){"use strict";function A(n){t("MULi")}Object.defineProperty(e,"__esModule",{value:!0});var a={name:"addbills"},r=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},o=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"main"}},[t("main",[t("div",{staticClass:"name clearfix"},[t("span",{staticClass:"michen"},[n._v("名称")]),n._v(" "),t("input",{staticClass:"bill-name",attrs:{type:"text",placeholder:"发票抬头名称"}})]),n._v(" "),t("div",{staticClass:"name billsNO clearfix"},[t("span",{staticClass:"michen billno"},[n._v("税号")]),n._v(" "),t("input",{staticClass:"bill-name billno",attrs:{type:"text",placeholder:"发票抬头税号"}})]),n._v(" "),t("button",{staticClass:"anniu"},[t("span",{staticClass:"anniu-wenzi"},[n._v("添加并使用新抬头")])])])])}],i={render:r,staticRenderFns:o},d=i,l=t("VU/8"),m=A,C=l(a,d,!1,m,"data-v-70b72de4",null);e.default=C.exports},MULi:function(n,e,t){var A=t("dGHV");"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t("rjj0")("7d229310",A,!0,{})},dGHV:function(n,e,t){var A=t("kxFB");e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n#main[data-v-70b72de4]{\n    background: #fff;\n    width: 100%;\n    height: 100vh;\n}\nheader[data-v-70b72de4]{\n    width: 100%;\n    height: 0.93rem;\n    background: #f6f6f8;\n    line-height: 0.53rem;\n}\n.back[data-v-70b72de4]{\n    width: 0.32rem;\n    height: 0.22rem;\n    margin-left:0.32rem;\n}\n.title[data-v-70b72de4]{\n    font-size:0.30rem;\n    color:#555555;\n    margin-left:2.20rem;\n}\n.name[data-v-70b72de4]{\n    width: 6.10rem;\n    /*height: 1.47rem;*/\n    background-color: #fff;\n    margin-left:0.70rem;\n    border-bottom:0.01rem solid #e0e0e0;\n    padding-bottom: 0.5rem;\n}\n.michen[data-v-70b72de4]{\n    display: block;\n    font-size:0.26rem;\n    color:#555555;\n    margin-top:0.82rem;\n    float:left;\n    font-weight: bold;\n}\n.bill-name[data-v-70b72de4]{\n    width: 4.39rem;\n    /*height: 0.26rem;*/\n    /*background-color: blue;*/\n    float:left;\n    border:none;\n    outline:none;\n    margin:0.82rem 0 0 1.18rem;\n    background-color: transparent;\n}\n.billsNO[data-v-70b72de4]{\n    height: 1.19rem;\n}\n.billno[data-v-70b72de4]{\n    margin-top:0.54rem;\n}\n.anniu[data-v-70b72de4]{\n    width: 100%;\n    height: 1.78rem;\n    display: block;\n    margin:0 auto;\n    margin-top:0.78rem;\n    border:none;\n    outline:none;\n    background-color: #fff;\n    background:url("+A(t("kubu"))+") no-repeat center;\n}\n.anniu-wenzi[data-v-70b72de4]{\n    font-size:0.36rem;\n    color:#ffffff;\n    text-align: center;\n}\n","",{version:3,sources:["C:/Users/syd02/Desktop/haoxiang/src/components/addbills.vue"],names:[],mappings:";AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,cAAc;CACjB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;CACxB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,oBAAoB;CACvB;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,uBAAuB;IACvB,oBAAoB;IACpB,oCAAoC;IACpC,uBAAuB;CAC1B;AACD;IACI,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,WAAW;IACX,kBAAkB;CACrB;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;CACjC;AACD;IACI,gBAAgB;CACnB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,0DAA6D;CAChE;AACD;IACI,kBAAkB;IAClB,cAAc;IACd,mBAAmB;CACtB",file:"addbills.vue",sourcesContent:["\n#main[data-v-70b72de4]{\n    background: #fff;\n    width: 100%;\n    height: 100vh;\n}\nheader[data-v-70b72de4]{\n    width: 100%;\n    height: 0.93rem;\n    background: #f6f6f8;\n    line-height: 0.53rem;\n}\n.back[data-v-70b72de4]{\n    width: 0.32rem;\n    height: 0.22rem;\n    margin-left:0.32rem;\n}\n.title[data-v-70b72de4]{\n    font-size:0.30rem;\n    color:#555555;\n    margin-left:2.20rem;\n}\n.name[data-v-70b72de4]{\n    width: 6.10rem;\n    /*height: 1.47rem;*/\n    background-color: #fff;\n    margin-left:0.70rem;\n    border-bottom:0.01rem solid #e0e0e0;\n    padding-bottom: 0.5rem;\n}\n.michen[data-v-70b72de4]{\n    display: block;\n    font-size:0.26rem;\n    color:#555555;\n    margin-top:0.82rem;\n    float:left;\n    font-weight: bold;\n}\n.bill-name[data-v-70b72de4]{\n    width: 4.39rem;\n    /*height: 0.26rem;*/\n    /*background-color: blue;*/\n    float:left;\n    border:none;\n    outline:none;\n    margin:0.82rem 0 0 1.18rem;\n    background-color: transparent;\n}\n.billsNO[data-v-70b72de4]{\n    height: 1.19rem;\n}\n.billno[data-v-70b72de4]{\n    margin-top:0.54rem;\n}\n.anniu[data-v-70b72de4]{\n    width: 100%;\n    height: 1.78rem;\n    display: block;\n    margin:0 auto;\n    margin-top:0.78rem;\n    border:none;\n    outline:none;\n    background-color: #fff;\n    background:url(../assets/images/button.png) no-repeat center;\n}\n.anniu-wenzi[data-v-70b72de4]{\n    font-size:0.36rem;\n    color:#ffffff;\n    text-align: center;\n}\n"],sourceRoot:""}])},kubu:function(n,e,t){n.exports=t.p+"static/img/button.b2b3d3d.png"}});
//# sourceMappingURL=11.7728be4b8f80fbfe00e3.js.map