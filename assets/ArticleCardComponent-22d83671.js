import{a as n}from"./articleStore-d60fda89.js";import{m as r,h as d,_ as l,r as _,o as a,c,i as m,a as t,t as s,b as h,w as u,d as p,F as f}from"./index-8cd31790.js";const x={methods:{...r(n,["getArticles","toDate"])},computed:{...d(n,["showArticleList"])},mounted(){this.getArticles(this.$route.name)}},b={class:"row g-0"},w={class:"col-md-5"},g=["src","alt"],v={class:"col-md-7"},A={class:"card-body d-flex flex-column justify-content-between h-100 mb-5"},k={class:"card-title fw-bold"},y={class:"card-text textLineOverflow--4"},$={class:"card-text d-flex justify-content-between align-items-center"},C={class:"text-muted"};function L(o,B,D,N,S,V){const i=_("router-link");return a(!0),c(f,null,m(o.showArticleList,e=>(a(),c("div",{class:"card mb-3 rounded-0 border-0",key:e.title},[t("div",b,[t("div",w,[t("img",{src:e.image,alt:e.title,style:{width:"100%",height:"260px"}},null,8,g)]),t("div",v,[t("div",A,[t("div",null,[t("h5",k,s(e.title),1),t("p",y,s(e.description),1)]),t("div",null,[t("p",$,[t("small",C,"撰文日期 : "+s(o.toDate(e.create_at)),1),h(i,{to:`/article/${e.id}`,class:"btn btn-outline-dark rounded-0"},{default:u(()=>[p("閱讀全文")]),_:2},1032,["to"])])])])])])]))),128)}const E=l(x,[["render",L]]);export{E as A};