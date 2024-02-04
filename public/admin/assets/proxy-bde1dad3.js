
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as I}from"./index-7911c6db.js";import{a as b}from"./config-b4a9e7c0.js";import{d as H,Q as P,r as h,x as S,o as L,c as T,e,f as l,a as i,k as c,E as v,h as a,q as V}from"./index-4eef28ae.js";const J={class:"flex justify-between"},q=i("b",null,[c("MJ参数设置：（推荐使用支持的"),i("a",{href:"https://api.lightai.io",target:"_blank",style:{"margin-right":"10px"}},"第三方中转"),c("）")],-1),E=i("h4",null,"绘图代理设置",-1),O=i("h4",null,"绘图可选设置",-1),Q=i("div",{style:{width:"250px"}}," 隐藏客户端绘图页面的【不需要的元素模块】【翻译联想模块】。隐藏后用户不可选择无法选中模块 ",-1),R=i("div",{style:{width:"250px"}}," 默认会存储图片到配置的存储中、如果开启此选择则表示不保存原图到我们配置的存储上、那么则必须配置一个图片反代地址、直接反代访问原始图片、这样可以进一步节省空间、需要您部署mj-proxy项目并填写基础地址即可！ ",-1),F=H({__name:"proxy",setup(W){const o=P({mjTimeoutMs:"500000",mjProxyUrl:"",mjKey:"",mjLimitCount:"2",mjNotSaveImg:"0",mjHideNotBlock:"0",mjHideWorkIn:"0"}),k=h({}),_=h();async function p(){const m=await b.queryConfig({keys:["mjTimeoutMs","mjKey","mjProxyUrl","mjLimitCount","mjNotSaveImg","mjHideNotBlock","mjHideWorkIn"]});Object.assign(o,m.data)}function w(){var m;(m=_.value)==null||m.validate(async t=>{if(t){try{await b.setConfig({settings:C(o)}),v.success("变更配置信息成功")}catch{}p()}else v.error("请填写完整信息")})}function C(m){return Object.keys(m).map(t=>({configKey:t,configVal:m[t]}))}return S(()=>{p()}),(m,t)=>{const f=a("el-alert"),N=I,U=a("el-button"),r=a("el-input"),s=a("el-form-item"),d=a("el-col"),u=a("el-row"),M=a("el-divider"),j=a("el-switch"),x=a("QuestionFilled"),g=a("el-icon"),y=a("el-tooltip"),K=a("el-form"),B=a("el-card");return L(),T("div",null,[e(N,null,{default:l(()=>[e(f,{closable:!1,"show-icon":"",title:"MJ参数说明",description:"已支持使用 MJ-PROXY-PLUS 的第三方中转，代理地址填中转地址，Key 填在中转获取到的 Key。第三方中转推荐使用：https://api.lightai.io",type:"success"})]),_:1}),e(B,{style:{margin:"20px"}},{header:l(()=>[i("div",J,[q,e(U,{class:"button",text:"",onClick:w},{default:l(()=>[c(" 保存设置 ")]),_:1})])]),default:l(()=>[e(K,{ref_key:"formRef",ref:_,rules:k.value,model:o,"label-width":"150px"},{default:l(()=>[E,e(u,null,{default:l(()=>[e(d,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"请填写代理地址",prop:"mjProxyUrl","label-width":"150"},{default:l(()=>[e(r,{modelValue:o.mjProxyUrl,"onUpdate:modelValue":t[0]||(t[0]=n=>o.mjProxyUrl=n),placeholder:"请填写代理地址、详细使用请访问教程！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(d,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"MJ 绘图 Key",prop:"mjKey","label-width":"150"},{default:l(()=>[e(r,{modelValue:o.mjKey,"onUpdate:modelValue":t[1]||(t[1]=n=>o.mjKey=n),placeholder:"请填 MJ 绘图使用的 Key",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(d,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"绘画超时时间设置ms",prop:"mjTimeoutMs","label-width":"150"},{default:l(()=>[e(r,{modelValue:o.mjTimeoutMs,"onUpdate:modelValue":t[2]||(t[2]=n=>o.mjTimeoutMs=n),placeholder:"请设置绘画超时时间、单位为ms、根据慢速快速定义（后续优化逻辑）",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(d,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"单人绘图并发限制",prop:"mjLimitCount","label-width":"150"},{default:l(()=>[e(r,{modelValue:o.mjLimitCount,"onUpdate:modelValue":t[3]||(t[3]=n=>o.mjLimitCount=n),placeholder:"单人同时绘制限制数量、同一时间最多可以绘制几张！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(M),O,e(u,null,{default:l(()=>[e(d,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"隐藏页面高级功能",prop:"mjHideNotBlock","label-width":"150"},{default:l(()=>[e(j,{modelValue:o.mjHideNotBlock,"onUpdate:modelValue":t[4]||(t[4]=n=>o.mjHideNotBlock=n),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Q]),default:l(()=>[e(g,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(x)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(d,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"不存储图片",prop:"mjNotSaveImg"},{default:l(()=>[e(j,{modelValue:o.mjNotSaveImg,"onUpdate:modelValue":t[5]||(t[5]=n=>o.mjNotSaveImg=n),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[R]),default:l(()=>[e(g,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(x)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof V=="function"&&V(F);export{F as default};
