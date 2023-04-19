import{P as c}from"./ProductCardComponent-e381410a.js";import{P as b}from"./PaginationComponent-a38b5105.js";import{p as r}from"./productStore-4e81a065.js";import{bt as m,br as p,bs as u,aG as s,at as i,p as g,q as o,ad as n,y as f,n as C,o as y}from"./index-287e9003.js";import"./articleStore-b8af7681.js";const k={components:{ProductCardComponent:c,PaginationComponent:b},methods:{...p(r,["getProduct","switchCategory","getAllProduct"])},computed:{...u(r,["category"])},mounted(){this.getProduct(this.$route.name),this.getAllProduct()}},h={class:"py-30"},v={class:"container pt-30"},w={class:"mb-15"},P=o("h2",{class:"fs-20 fw-bold border-bottom border-2 pb-15 border-dark mb-10"},"熱門方案",-1),M={class:"btn-group mb-8 mb-sm-15 btn-group-sm flex-wrap justify-content-around",role:"group","aria-label":"Basic radio toggle button group"},_=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1"},null,-1),$=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2"},null,-1),B=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3"},null,-1),S=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio4"},null,-1),V=o("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio5"},null,-1);function A(t,e,N,X,Y,j){const d=s("ProductCardComponent"),l=s("PaginationComponent");return i(),g("main",null,[o("section",h,[o("div",v,[o("div",w,[P,o("div",M,[_,o("label",{class:n(["btn btn-outline-dark rounded-0 me-5 flex-grow-0 mb-6",{active:t.category==="all"}]),for:"btnradio1",onClick:e[0]||(e[0]=a=>t.switchCategory("all"))},"所有方案",2),$,o("label",{class:n(["btn btn-outline-dark me-5 flex-grow-0 mb-6",{active:t.category==="Model3"}]),for:"btnradio2",onClick:e[1]||(e[1]=a=>t.switchCategory("Model3"))},"Model 3",2),B,o("label",{class:n(["btn btn-outline-dark me-5 flex-grow-0 mb-6",{active:t.category==="ModelY"}]),for:"btnradio3",onClick:e[2]||(e[2]=a=>t.switchCategory("ModelY"))},"Model Y",2),S,o("label",{class:n(["btn btn-outline-dark me-5 flex-grow-0 mb-6",{active:t.category==="ModelX"}]),for:"btnradio4",onClick:e[3]||(e[3]=a=>t.switchCategory("ModelX"))},"Model X",2),V,o("label",{class:n(["btn btn-outline-dark rounded-0 me-5 flex-grow-0 mb-6",{active:t.category==="ModelS"}]),for:"btnradio5",onClick:e[4]||(e[4]=a=>t.switchCategory("ModelS"))},"Model S",2)]),f(d,{class:"mb-20"}),t.category==="all"?(i(),C(l,{key:0})):y("",!0)])])])])}const D=m(k,[["render",A]]);export{D as default};