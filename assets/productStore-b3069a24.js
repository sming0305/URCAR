import{u as l,x as p}from"./index-8cd31790.js";const{VITE_API_PATH:u,VITE_API_URL:n}={VITE_API_PATH:"truth",VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",BASE_URL:"/URCAR/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},h=l("homePageStore",{state:()=>({productList:[],allProductList:[],productTemp:{},productPagination:{},currentRoute:"",category:"all",test:0}),actions:{getProduct(t,e){p.get(`${n}api/${u}/products?page=${e}`).then(r=>{this.productList=this.formattedPrice(r.data.products),this.productPagination=r.data.pagination,this.currentRoute=t}).catch(r=>{alert(`${r}，頁面載入錯誤，請連繫客服人員，謝謝。`)})},getAllProduct(){p.get(`${n}api/${u}/products/all`).then(t=>{this.allProductList=this.formattedPrice(t.data.products)}).catch(t=>{alert(`${t}，頁面載入錯誤，請連繫客服人員，謝謝。`)})},switchCategory(t){this.category=t},getTargetProduct(t){this.productTemp={},p.get(`${n}api/${u}/product/${t}`).then(e=>{this.productTemp=e.data.product,this.productTemp.price=this.productTemp.price.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2}),this.productTemp.origin_price=this.productTemp.origin_price.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2})}).catch(e=>{alert(`${e.message}，頁面載入錯誤，請連繫客服人員，謝謝。`)})},formattedPrice(t){let e=t;return t.forEach((r,a)=>{const s=r.price.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2}),c=r.origin_price.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2});e[a].price=s,e[a].origin_price=c}),e}},getters:{showProductList:({productList:t,currentRoute:e,category:r,allProductList:a})=>{if(e==="home"){const c=t.filter(i=>i.category==="Model3"||i.category==="ModelY"||i.category==="ModelX").reduce((i,o)=>((!i[o.category]||o.price<i[o.category].price)&&(i[o.category]=o),i),{});return Object.values(c).sort(function(i,o){return i.price>o.price?1:-1})}else if(e==="productlist")return r==="all"?t:a.filter(c=>c.category===r)}}});export{h as p};
