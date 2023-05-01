import{P as _}from"./PaginationComponent-3da3807d.js";import{A as f}from"./ArticleCardComponent-3ffb7039.js";import{L as b}from"./LoadingComponent-eb0b5371.js";import{a as i}from"./articleStore-65ec444b.js";import{_ as h,m as C,a as k,r as a,o as c,c as v,b as o,l as e,d as r,i as y,f as g,F as u,p as w,k as x}from"./index-12309520.js";import"./productStore-71e291ca.js";import"./64_tesla_icon-7d5a48e9.js";const $={components:{PaginationComponent:_,ArticleCardComponent:f,LoadingComponent:b},methods:{...C(i,["switchCategory"])},computed:{...k(i,["category"])}},l=s=>(w("data-v-b3c5bf54"),s=s(),x(),s),A={class:"pt-30 pb-15"},L={class:"container pt-30"},S=l(()=>o("div",{class:"border-bottom border-2 border-dark mb-10"},[o("h2",{class:"fs-20 fw-bold"},"文章專欄")],-1)),V={class:"row mb-15"},B={class:"col-12 col-xl-2"},I={class:"p-8 bg-gray mb-10 sticky-top top-80"},P=l(()=>o("h3",{class:"fw-bold mb-12"},"文章分類",-1)),N={class:"d-flex d-xl-block justify-content-start flex-wrap"},j={class:"mb-0 mb-sm-10 me-sm-10 flex-shrink-0 p-3"},F={class:"mb-0 mb-sm-10 me-sm-10 flex-shrink-0 py-3 px-4"},R={class:"mb-0 mb-sm-10 me-sm-10 flex-shrink-0 p-3"},E={class:"mb-0 mb-sm-10 me-sm-10 flex-shrink-0 p-3"},M={class:"mb-0 mb-sm-10 flex-shrink-0 p-3"},U={class:"col-12 col-xl-10"},q={class:"d-flex justify-content-end"};function z(s,t,D,G,H,J){const m=a("ArticleCardComponent"),d=a("PaginationComponent"),p=a("LoadingComponent");return c(),v(u,null,[o("main",null,[o("section",A,[o("div",L,[S,o("div",V,[o("div",B,[o("div",I,[P,o("ul",N,[o("li",j,[o("a",{href:"#",class:"link-secondary",onClick:t[0]||(t[0]=e(n=>s.switchCategory("all"),["prevent"]))},"所有文章")]),o("li",F,[o("a",{href:"#",class:"link-secondary",onClick:t[1]||(t[1]=e(n=>s.switchCategory("車輛介紹"),["prevent"]))},"車輛介紹")]),o("li",R,[o("a",{href:"#",class:"link-secondary",onClick:t[2]||(t[2]=e(n=>s.switchCategory("優惠新訊"),["prevent"]))},"優惠新訊")]),o("li",E,[o("a",{href:"#",class:"link-secondary",onClick:t[3]||(t[3]=e(n=>s.switchCategory("旅程推薦"),["prevent"]))},"旅程推薦")]),o("li",M,[o("a",{href:"#",class:"link-secondary",onClick:t[4]||(t[4]=e(n=>s.switchCategory("URCAR服務介紹"),["prevent"]))},"服務介紹")])])])]),o("div",U,[r(m)])]),o("div",q,[s.category==="all"?(c(),y(d,{key:0})):g("",!0)])])])]),r(p)],64)}const Z=h($,[["render",z],["__scopeId","data-v-b3c5bf54"]]);export{Z as default};
