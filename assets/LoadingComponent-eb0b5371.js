import{L as i,_ as c}from"./64_tesla_icon-7d5a48e9.js";import{_ as l,r,o as d,c as g,d as u,w as p,b as n}from"./index-12309520.js";const f={data(){return{isLoading:!0,fullPage:!0,backgroundColor:"#ffffff",opacity:1}},props:{loadingProcess1:{type:Function,default:null}},components:{Loading:i},methods:{doAjax(){this.loadingProcess1!==null?(this.isLoading=!0,setTimeout(()=>{this.loadingProcess1(),setTimeout(()=>{this.isLoading=!1},2e3)},0)):setTimeout(()=>{this.isLoading=!1},2e3)},onCancel(){console.log("User cancelled the loader.")}},mounted(){this.$nextTick(()=>{this.doAjax()})}},_={class:"vl-parent"},m=n("div",{class:"loading-circle d-flex align-items-center justify-content-center"},[n("img",{class:"animated-img",src:c})],-1);function h(L,e,v,x,o,t){const s=r("loading");return d(),g("div",_,[u(s,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=a=>o.isLoading=a),"can-cancel":!1,"on-cancel":t.onCancel,"is-full-page":o.fullPage,"background-color":o.backgroundColor,opacity:o.opacity,transition:"my-fade-transition"},{default:p(()=>[m]),_:1},8,["active","on-cancel","is-full-page","background-color","opacity"])])}const k=l(f,[["render",h]]);export{k as L};