import{p as c}from"./productStore-71e291ca.js";import{m as l,a as _,_ as u,r as p,o as a,c as d,F as m,j as h,d as f,w as g,b as t,t as o,e as x,p as w,k as v}from"./index-12309520.js";const y={data(){return{routeName:""}},methods:{...l(c,["getProduct"])},computed:{..._(c,["showProductList"]),aos(){return this.routeName==="home"?"fade-up":""}},mounted(){this.getProduct(this.$route.name),this.routeName=this.$route.name}},b=s=>(w("data-v-cd3c1595"),s=s(),v(),s),k={class:"row row-cols-1 row-cols-lg-3 g-10"},P=["data-aos","data-aos-delay"],C={class:"flex-grow-1 d-flex flex-column"},N={class:"overflow-hidden"},S=["src","alt"],$={class:"py-5 flex-grow-1 d-flex flex-column"},L={class:"card-title fw-bold"},I={class:"card-text mb-10"},j={class:"d-flex justify-content-between align-items-end flex-grow-1"},B={class:"fs-7"},V={class:"m-0"},F=b(()=>t("div",{class:"d-grid gap-2"},[t("button",{type:"button",class:"btn btn-outline-dark rounded-0"},"立即預約")],-1));function R(s,A,D,E,T,n){const r=p("RouterLink");return a(),d("ul",k,[(a(!0),d(m,null,h(s.showProductList,(e,i)=>(a(),d("li",{class:"col",key:e.title,"data-aos":n.aos,"data-aos-delay":300*i},[f(r,{to:`/product/${e.id}`,class:"card h-100 rounded-0 border-0 justify-content-between text-dark"},{default:g(()=>[t("div",C,[t("div",N,[t("img",{src:e.imageUrl,class:"card-img-top rounded-0 card__image",alt:e.title,style:{height:"220px"}},null,8,S)]),t("div",$,[t("h5",L,o(e.title),1),t("p",I,o(e.description),1),t("div",j,[t("span",B,[x("原價 : "),t("del",null,o(e.origin_price),1)]),t("p",V,o(e.price)+" / 天",1)])])]),F]),_:2},1032,["to"])],8,P))),128))])}const z=u(y,[["render",R],["__scopeId","data-v-cd3c1595"]]);export{z as P};
