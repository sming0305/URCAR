import{_ as h,m as u,h as b,T as f,r as g,o,c as i,a as e,t as l,F as a,i as c,f as r,b as d,w as _,d as v,R as k,S as y}from"./index-77b9432d.js";import{a as m}from"./articleStore-0e1704bd.js";const T={methods:{...u(m,["getTargetArticle","getArticles"])},computed:{...b(m,["articleTemp","articleConvert","showArticleList"])},mounted(){this.getTargetArticle(this.$route.params.id),this.getArticles(this.$route.name)},components:{RouterLink:f}},p=t=>(k("data-v-02438908"),t=t(),y(),t),w={class:"pt-30 pb-15"},A={class:"container pt-30"},L=p(()=>e("div",{class:"border-bottom border-2 border-dark mb-15"},[e("h2",{class:"fs-20 fw-bold"},"文章專欄")],-1)),$={class:"row"},x={class:"col-12 col-lg-8"},C={class:"mb-15"},S={class:"mb-5"},V={class:"d-flex"},I=["src","alt"],N=["innerHTML"],R={class:"d-flex justify-content-center"},j={class:"col-4 d-none d-lg-block border-start"},B={class:"sticky-top top-80"},F=p(()=>e("h3",{class:"mb-10"},"相關文章",-1)),H={class:"me-10 d-flex flex-column justify-content-between py-2"},M={class:"mb-10 fs-9"},D=["src","alt"];function E(t,q,z,G,J,K){const n=g("RouterLink");return o(),i("main",null,[e("section",w,[e("div",A,[L,e("div",$,[e("div",x,[e("div",C,[e("h3",S,l(t.articleTemp.title),1),e("div",V,[(o(!0),i(a,null,c(t.articleTemp.tag,s=>(o(),i("p",{class:"mb-10 ms-5 me-5 text-gray-600",key:s},[e("small",null,"#"+l(s),1)]))),128))]),t.articleTemp.image!==void 0?(o(),i("img",{key:0,src:t.articleTemp.image,alt:t.articleTemp.title,class:"mb-10",style:{width:"100%",height:"350px"}},null,8,I)):r("",!0),t.articleTemp.content!==void 0?(o(),i("div",{key:1,innerHTML:t.articleConvert},null,8,N)):r("",!0)]),e("div",R,[d(n,{to:"/articleList",class:"btn btn-dark rounded-0 px-20"},{default:_(()=>[v("返回列表")]),_:1})])]),e("div",j,[e("div",B,[F,e("ul",null,[(o(!0),i(a,null,c(t.showArticleList,s=>(o(),i("li",{key:s.title},[d(n,{to:`/article/${s.id}`,class:"d-flex mb-10 border-bottom pb-10 justify-content-between link-dark",onClick:O=>t.getTargetArticle(s.id)},{default:_(()=>[e("div",H,[e("h4",M,l(s.title),1)]),e("img",{src:s.image,alt:s.title,style:{height:"100px",width:"100px"}},null,8,D)]),_:2},1032,["to","onClick"])]))),128))])])])])])])])}const U=h(T,[["render",E],["__scopeId","data-v-02438908"]]);export{U as default};
