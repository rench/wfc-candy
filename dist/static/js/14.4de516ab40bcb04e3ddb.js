webpackJsonp([14],{1001:function(t,e,r){var a=r(649);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(196)("d728ea8e",a,!0)},508:function(t,e,r){r(1001);var a=r(197)(r(547),r(974),"data-v-17164b61",null);t.exports=a.exports},547:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入wfc地址：",trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;console.log(e.ruleForm.username);var r="/getcandy/"+e.ruleForm.username;console.log(r),e.$axios.get(r).then(function(t){console.log("res.data-"+t.data),alert(t.data)})}}}},649:function(t,e,r){e=t.exports=r(87)(void 0),e.push([t.i,".login-wrap[data-v-17164b61]{position:relative;width:100%;height:100%}.ms-title[data-v-17164b61]{margin-top:-330px}.ms-title2[data-v-17164b61],.ms-title[data-v-17164b61]{position:absolute;top:50%;width:100%;text-align:center;font-size:30px;color:#fff}.ms-title2[data-v-17164b61]{margin-top:-250px}.ms-login[data-v-17164b61]{position:absolute;left:50%;top:50%;width:300px;height:160px;margin:-150px 0 0 -190px;padding:40px;border-radius:5px;background:#fff}.login-btn[data-v-17164b61]{text-align:center}.login-btn button[data-v-17164b61]{width:100%;height:36px}",""])},974:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-wrap"},[r("div",{staticClass:"ms-title"},[t._v("WFC 糖果领取")]),t._v(" "),r("div",{staticClass:"ms-login"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"wfc地址"},model:{value:t.ruleForm.username,callback:function(e){t.$set(t.ruleForm,"username",e)},expression:"ruleForm.username"}})],1),t._v(" "),r("div",{staticClass:"login-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("获取糖果")])],1)],1)],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ms-title2"},[r("a",{attrs:{href:"https://wfc.kunteng.org/"}},[t._v("WFC钱包")])])}]}}});