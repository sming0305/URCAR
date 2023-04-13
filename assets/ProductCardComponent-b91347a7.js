import{p as c}from"./productStore-9e4882d1.js";import{m as l,h as d,_,r as m,o,c as n,F as h,i as u,a as t,t as e,d as a,b as p,w as f}from"./index-77b9432d.js";const g={methods:{...l(c,["getProduct"])},computed:{...d(c,["showProductList"])},mounted(){this.getProduct(this.$route.name)}},x={class:"row row-cols-1 row-cols-lg-3 g-10"},w={class:"card h-100 rounded-0 border-0 justify-content-between"},b={class:"flex-grow-1 d-flex flex-column"},k=["src","alt"],v={class:"py-5 flex-grow-1 d-flex flex-column"},y={class:"card-title fw-bold"},P={class:"card-text mb-10"},$={class:"d-flex justify-content-between align-items-end flex-grow-1"},L={class:"fs-7"},C={class:"m-0"},B={class:"d-grid gap-2"};function N(i,S,V,j,F,R){const r=m("RouterLink");return o(),n("ul",x,[(o(!0),n(h,null,u(i.showProductList,s=>(o(),n("li",{class:"col",key:s.title},[t("div",w,[t("div",b,[t("img",{src:s.imageUrl,class:"card-img-top rounded-0",alt:s.title,style:{height:"220px"}},null,8,k),t("div",v,[t("h5",y,e(s.title),1),t("p",P,e(s.description),1),t("div",$,[t("span",L,[a("原價 : "),t("del",null,e(s.origin_price),1)]),t("p",C,e(s.price)+" / 天",1)])])]),t("div",B,[p(r,{to:`/product/${s.id}`,class:"btn btn-outline-dark rounded-0"},{default:f(()=>[a("立即預約")]),_:2},1032,["to"])])])]))),128))])}const E=_(g,[["render",N]]);export{E as P};
