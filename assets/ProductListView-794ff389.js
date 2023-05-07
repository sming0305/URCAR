import{P as u}from"./ProductCardComponent-ba2cf16a.js";import{P as p}from"./PaginationComponent-6c2572f5.js";import{L as g,_ as f}from"./64_tesla_icon-2ee6852c.js";import{p as r}from"./productStore-343db152.js";import{_ as y,m as _,a as C,r as s,o as l,c as k,b as o,n as i,d,w as h,i as v,f as w}from"./index-806ba022.js";import"./articleStore-1ff38176.js";const P={data(){return{isLoading:!0,fullPage:!1,backgroundColor:"#ffffff",opacity:1}},components:{ProductCardComponent:u,PaginationComponent:p,Loading:g},methods:{..._(r,["getProduct","switchCategory","getAllProduct"]),doAjax(){this.isLoading=!0,setTimeout(()=>{this.getAllProduct(),setTimeout(()=>{this.isLoading=!1},2e3)},0)}},computed:{...C(r,["category"])},mounted(){this.getProduct(this.$route.name),this.$nextTick(()=>{this.doAjax()})}},M={class:"py-30"},L={class:"container pt-30"},$={class:"mb-15"},A=o("h2",{class:"fs-20 fw-bold border-bottom border-2 pb-15 border-dark mb-10"},"熱門方案",-1),B={class:"btn-group mb-8 mb-sm-15 btn-group-sm flex-wrap justify-content-around",role:"group","aria-label":"Basic radio toggle button group"},S=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1"},null,-1),V=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2"},null,-1),j=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3"},null,-1),x=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio4"},null,-1),N=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio5"},null,-1),T={class:"vl-parent"},X=o("div",{class:"loading-circle d-flex align-items-center justify-content-center"},[o("img",{class:"animated-img",src:f})],-1);function Y(e,t,z,E,a,U){const c=s("loading"),m=s("ProductCardComponent"),b=s("PaginationComponent");return l(),k("main",null,[o("section",M,[o("div",L,[o("div",$,[A,o("div",B,[S,o("label",{class:i(["btn btn-outline-dark rounded-0 me-5 flex-grow-0 mb-6",{active:e.category==="all"}]),for:"btnradio1",onClick:t[0]||(t[0]=n=>e.switchCategory("all"))},"所有方案",2),V,o("label",{class:i(["btn btn-outline-dark me-5 flex-grow-0 mb-6",{active:e.category==="Model3"}]),for:"btnradio2",onClick:t[1]||(t[1]=n=>e.switchCategory("Model3"))},"Model 3",2),j,o("label",{class:i(["btn btn-outline-dark me-5 flex-grow-0 mb-6",{active:e.category==="ModelY"}]),for:"btnradio3",onClick:t[2]||(t[2]=n=>e.switchCategory("ModelY"))},"Model Y",2),x,o("label",{class:i(["btn btn-outline-dark me-5 flex-grow-0 mb-6",{active:e.category==="ModelX"}]),for:"btnradio4",onClick:t[3]||(t[3]=n=>e.switchCategory("ModelX"))},"Model X",2),N,o("label",{class:i(["btn btn-outline-dark rounded-0 me-5 flex-grow-0 mb-6",{active:e.category==="ModelS"}]),for:"btnradio5",onClick:t[4]||(t[4]=n=>e.switchCategory("ModelS"))},"Model S",2)]),o("div",T,[d(c,{active:a.isLoading,"onUpdate:active":t[5]||(t[5]=n=>a.isLoading=n),"can-cancel":!1,"is-full-page":a.fullPage,"background-color":a.backgroundColor,opacity:a.opacity,transition:"my-fade-transition",class:"align-items-start pt-90"},{default:h(()=>[X]),_:1},8,["active","is-full-page","background-color","opacity"]),d(m,{class:"mb-20",style:{"overflow-y":"hidden"}})]),e.category==="all"?(l(),v(b,{key:0})):w("",!0)])])])])}const J=y(P,[["render",Y]]);export{J as default};