(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9eae4e6a"],{"0843":function(t,a,i){},"12a1":function(t,a,i){},1944:function(t,a,i){},"27d9":function(t,a,i){t.exports=i.p+"static/img/jifen.a8858025.svg"},"29d4":function(t,a,i){t.exports=i.p+"static/img/alipaybig.c84117a9.png"},"2d81":function(t,a,i){t.exports=i.p+"static/img/weixinbig.2d3ba528.png"},"530d":function(t,a,i){t.exports=i.p+"static/img/zhifubaorenzheng.7ad2afce.svg"},"6c1c":function(t,a,i){},"7e7e":function(t,a,i){"use strict";i("1944")},"960e":function(t,a,i){"use strict";i("12a1")},"9c02":function(t,a,i){"use strict";var e=i("b775");a["a"]={ftofPay:function(t){return Object(e["a"])({url:"/Pay-api/ali-pay/test-ftof/"+t,method:"post"})},ftofPayTemp:function(t){return Object(e["a"])({url:"/Pay-api/ali-pay/temp-ftof/"+t,method:"post"})},ftofPayLogin:function(t,a){return Object(e["a"])({url:"/Pay-api/ali-pay/login-ftof/"+t+"/"+a,method:"post"})},ftofPayVipIntegralLogin:function(t,a){return Object(e["a"])({url:"/Pay-api/ali-pay/vipIntegral-ftof/"+t+"/"+a,method:"post"})},ftofPayForVipLogin:function(t,a,i){return Object(e["a"])({url:"/Pay-api/ali-pay/vip-ftof/"+t+"/"+a+"/"+i,method:"post"})},cancel:function(t){return Object(e["a"])({url:"/Pay-api/ali-pay/cancel/"+t,method:"post"})},refunds:function(t,a){return Object(e["a"])({url:"/Pay-api/ali-pay/refunds/"+t+"/"+a,method:"post"})}}},"9ff9":function(t,a,i){"use strict";i("c093")},a71f:function(t,a,i){"use strict";i("0843")},b3e3:function(t,a,i){"use strict";i("6c1c")},c093:function(t,a,i){},c24f:function(t,a,i){"use strict";i.d(a,"g",(function(){return s})),i.d(a,"h",(function(){return o})),i.d(a,"e",(function(){return n})),i.d(a,"b",(function(){return r})),i.d(a,"a",(function(){return c})),i.d(a,"d",(function(){return l})),i.d(a,"f",(function(){return d})),i.d(a,"c",(function(){return u}));var e=i("b775");function s(){return Object(e["a"])({url:"/UserRole/getAllUserName",method:"get"})}function o(){return Object(e["a"])({url:"/UserRole/getAllUserRole",method:"get"})}function n(t){return Object(e["a"])({url:"/User/GetUserInfoByid/"+t,method:"get"})}function r(t,a){return Object(e["a"])({url:"/User/ChangeUser/"+t,method:"post",data:a})}function c(t,a,i,s){return Object(e["a"])({url:"/User/ChangePassword/"+t+"/"+a+"/"+i+"/"+s,method:"post"})}function l(t,a,i){return Object(e["a"])({url:"/User/CreateVip/"+t+"/"+a+"/"+i,method:"get"})}function d(t,a,i){return Object(e["a"])({url:"/User/UpdateIntegral/"+t+"/"+a+"/"+i,method:"get"})}function u(t){return Object(e["a"])({url:"/User/CheckVip/"+t,method:"get"})}},c585:function(t,a,i){"use strict";var e=i("b775");a["a"]={nativePay:function(t){return Object(e["a"])({url:"/Pay-api/wx-pay/test-native/"+t,method:"post"})},nativePayTemp:function(t){return Object(e["a"])({url:"/Pay-api/wx-pay/temp-native/"+t,method:"post"})},nativePayLogin:function(t,a){return Object(e["a"])({url:"/Pay-api/wx-pay/login-native/"+t+"/"+a,method:"post"})},nativePayVipIntegralLogin:function(t,a){return Object(e["a"])({url:"/Pay-api/wx-pay/vipIntegral-native/"+t+"/"+a,method:"post"})},nativePayVipLogin:function(t,a,i){return Object(e["a"])({url:"/Pay-api/wx-pay/vip-native/"+t+"/"+a+"/"+i,method:"post"})},cancel:function(t){return Object(e["a"])({url:"/Pay-api/wx-pay/cancel/"+t,method:"post"})},refunds:function(t,a){return Object(e["a"])({url:"/Pay-api/wx-pay/refunds/"+t+"/"+a,method:"post"})}}},e0ee:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",[e("el-dialog",{attrs:{visible:t.wxDialogVisible,"show-close":!1,width:"320px",center:""},on:{"update:visible":function(a){t.wxDialogVisible=a},close:t.closeDialog}},[e("h5",{staticClass:"outh5"},[e("img",{staticClass:"alipaybig_icon",attrs:{src:i("2d81")}})]),e("h5",{staticClass:"outh5"},[e("div",{staticClass:"bottom alipay"},[t._v(" 使用扫码支付 "+t._s(this.form.integral)+"元 ")])]),e("h5",{staticClass:"outh5"},[e("qriously",{attrs:{value:t.codeUrl,size:190}})],1),e("div",{staticStyle:{height:"40px"}}),e("h5",{staticClass:"outh7"},[e("div",{staticClass:"bottom alipay",staticStyle:{color:"#e0e0e0"}},[t._v(" 请使用微信扫一扫"),e("br"),t._v("扫描二维码支付"),e("br")])])])],1),e("div",[e("el-dialog",{attrs:{visible:t.aliDialogVisible,"show-close":!1,width:"320px",center:""},on:{"update:visible":function(a){t.aliDialogVisible=a},close:t.closeDialog}},[e("h5",{staticClass:"outh5"},[e("img",{staticClass:"alipaybig_icon",attrs:{src:i("29d4")}})]),e("h5",{staticClass:"outh5"},[e("div",{staticClass:"bottom alipay"},[t._v(" 使用扫码支付 "+t._s(this.form.integral)+"元 ")])]),e("h5",{staticClass:"outh5"},[e("qriously",{attrs:{value:t.codeUrl,size:190}})],1),e("div",{staticStyle:{height:"40px"}}),e("h5",{staticClass:"outh6"},[e("div",{staticClass:"bottom alipay",staticStyle:{color:"#e0e0e0"}},[t._v(" 请使用支付宝扫一扫"),e("br"),t._v("扫描二维码支付"),e("br")])])])],1),e("el-dialog",{attrs:{visible:t.PaymentDialogVisibleLogin,"show-close":!1,width:"320px",center:""},on:{"update:visible":function(a){t.PaymentDialogVisibleLogin=a},close:t.closeDialog}},[e("h6",{staticClass:"outh5"},[t._v("请选择支付方式")]),e("div",{staticClass:"swal2-content"},[e("div",{staticStyle:{display:"block"},attrs:{id:"swal2-content"}},[e("div",{staticClass:"pay-button-box"},[e("div",{staticClass:"pay-item",attrs:{id:"alipay","data-type":"1"},on:{click:function(a){return t.selectPayTypeLogin("alipay")}}},[e("img",{staticStyle:{"margin-right":"14px"},attrs:{height:"40",width:"40",src:i("530d")}}),e("span",[t._v("支付宝")])]),e("div",{staticClass:"pay-item",attrs:{id:"weixinpay","data-type":"2"},on:{click:function(a){return t.selectPayTypeLogin("wxpay")}}},[e("img",{staticStyle:{margin:"12px"},attrs:{height:"40",width:"40",src:i("f360")}}),e("span",[t._v("微信支付")])]),e("div",{staticClass:"pay-item",attrs:{id:"weixinpay","data-type":"2"},on:{click:function(a){return t.selectPayTypeLogin("wxpay")}}},[e("img",{staticStyle:{margin:"12px"},attrs:{height:"40",width:"40",src:i("27d9")}}),e("span",[t._v("积分支付")])])]),e("p",{staticStyle:{"font-size":"13px",padding:"0",margin:"0"}})]),e("input",{staticClass:"swal2-input",staticStyle:{display:"none"}}),e("input",{staticClass:"swal2-file",staticStyle:{display:"none"},attrs:{type:"file"}}),e("div",{staticClass:"swal2-range",staticStyle:{display:"none"}},[e("input",{attrs:{type:"range"}}),e("output")]),e("select",{staticClass:"swal2-select",staticStyle:{display:"none"}}),e("div",{staticClass:"swal2-radio",staticStyle:{display:"none"}}),e("label",{staticClass:"swal2-checkbox",staticStyle:{display:"none"},attrs:{for:"swal2-checkbox"}},[e("input",{attrs:{type:"checkbox"}}),e("span",{staticClass:"swal2-label"})]),e("textarea",{staticClass:"swal2-textarea",staticStyle:{display:"none"}}),e("div",{staticClass:"swal2-validation-message",staticStyle:{display:"none"},attrs:{id:"swal2-validation-message"}})])]),e("div",{staticClass:"homeContent"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-row",{attrs:{gutter:12}},[e("el-col",{attrs:{span:8}},[e("div",{on:{click:function(a){return t.Byclick1()}}},[e("el-card",{staticStyle:{"border-radius":"12px"},style:t.cardStyle1,attrs:{shadow:"hover"}},[t._v(" 20积分 ")])],1)]),e("el-col",{attrs:{span:8}},[e("div",{on:{click:function(a){return t.Byclick2()}}},[e("el-card",{staticStyle:{"border-radius":"12px"},style:t.cardStyle2,attrs:{shadow:"hover"}},[t._v(" 78积分 ")])],1)]),e("el-col",{attrs:{span:8}},[e("div",{on:{click:function(a){return t.Byclick3()}}},[e("el-card",{staticStyle:{"border-radius":"12px"},style:t.cardStyle3,attrs:{shadow:"hover"}},[t._v(" 988积分 ")])],1)])],1),e("div",{staticStyle:{height:"40px"}}),e("el-form-item",{staticStyle:{display:"flex","line-height":"40px",position:"relative","font-size":"14px","flex-wrap":"nowrap","justify-content":"center"}},[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即充值")])],1)],1)],1)],1)},s=[],o=i("c585"),n=i("9c02"),r=i("c24f"),c={data:function(){return{payid:"",cardStyle1:"background-color: #027CFF",cardStyle2:"background-color: #6DAE48",cardStyle3:"background-color: #B0332E",payJudej:!0,payBtnDisabled:!1,orderNo:"",codeUrl:"url",payOrder:{productId:"",payType:"wxpay"},PaymentDialogVisibleLogin:!1,wxDialogVisible:!1,aliDialogVisible:!1,form:{integral:""}}},methods:{Byclick1:function(){this.payid="2",this.form.integral="20",this.cardStyle1="background-color: rgba(0, 0, 0, 0.438);",this.cardStyle2="background-color: #6DAE48",this.cardStyle3="background-color: #B0332E"},Byclick2:function(){this.payid="3",this.form.integral="78",this.cardStyle1="background-color: #027CFF",this.cardStyle2="background-color: rgba(0, 0, 0, 0.438);",this.cardStyle3="background-color: #B0332E"},Byclick3:function(){this.payid="4",this.form.integral="98",this.cardStyle1="background-color: #027CFF",this.cardStyle2="background-color: #6DAE48",this.cardStyle3="background-color: rgba(0, 0, 0, 0.438);"},queryOrderStatus:function(){var t=this,a=JSON.parse(window.localStorage.getItem("access-admin"));console.log("查询订单状态"),Object(r["d"])(a.data.userid,this.payid,this.orderNo).then((function(a){console.log(a),402==a.data.code||400==a.data.code||200==a.data.code&&(console.log("清除定时器"),clearInterval(t.timer),t.wxDialogVisible=!1,t.aliDialogVisible=!1,t.$notify({title:"支付成功",message:"您已成功购买",type:"success",offset:50}))}))},closeDialog:function(){console.log("close................."),this.payBtnDisabled=!1,console.log("清除定时器"),clearInterval(this.timer)},selectPayTypeLogin:function(t){var a=this;if(console.log("支付方式："+t),this.payOrder.payType=t,this.PaymentDialogVisibleLogin=!1,"alipay"===this.payOrder.payType){this.aliDialogVisible=!0;var i=JSON.parse(window.localStorage.getItem("access-admin"));n["a"].ftofPayForVipLogin(this.form.integral,i.data.userid,this.payid).then((function(t){a.codeUrl=t.data.data.codeUrl,a.orderNo=t.data.data.orderNo,a.timer=setInterval((function(){a.queryOrderStatus()}),3e3)}))}if("wxpay"===this.payOrder.payType){this.wxDialogVisible=!0;var e=JSON.parse(window.localStorage.getItem("access-admin"));o["a"].nativePayVipLogin(this.form.integral,e.data.userid,this.payid).then((function(t){console.log(t.data.data.codeUrl),a.codeUrl=t.data.data.codeUrl,a.orderNo=t.data.data.orderNo,a.timer=setInterval((function(){a.queryOrderStatus()}),3e3)}))}},onSubmit:function(){var t=JSON.parse(window.localStorage.getItem("access-admin"));this.userJudje=null==t,this.userJudje||(this.userid=t.data.userid),this.userJudje?this.$notify({title:"失败",message:"暂未登录请登录后重试",type:"warning",offset:50}):(console.log("登录用户购买"),this.payBtnDisabled=!0,this.PaymentDialogVisibleLogin=!0)}}},l=c,d=(i("a71f"),i("9ff9"),i("7e7e"),i("b3e3"),i("960e"),i("2877")),u=Object(d["a"])(l,e,s,!1,null,"4ac0eec5",null);a["default"]=u.exports},f360:function(t,a,i){t.exports=i.p+"static/img/weixinzhifu.7f392fa3.svg"}}]);