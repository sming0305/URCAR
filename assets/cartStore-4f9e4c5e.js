import{u as _,x as r}from"./index-8cd31790.js";const{VITE_API_PATH:s,VITE_API_URL:n}={VITE_API_PATH:"truth",VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",BASE_URL:"/URCAR/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},C=_("cartStore",{state:()=>({modalProduct:{},carts:[],discountPrice:0,final_total:0,couponCodeError:!1}),actions:{addProduct(t,a){r.post(`${n}api/${s}/cart`,t).then(()=>{a.push("/reserveList")}).catch(e=>{alert(`${e.message}，出現意外錯誤，請連繫客服人員，謝謝。`)})},cartChcek(t,a,e,c,l){r.get(`${n}api/${s}/cart`).then(o=>{const d=o.data.data.carts.find(i=>i.product_id===e);if((c==null?void 0:c.name)==="singleProduct")if(d){l({title:"URCAR",text:"目前同車款(不分車色)，同訂單限同時租賃一輛，請選擇其他車款或結清訂單後再次租賃，謝謝您。",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOut"}});return}else this.addProduct(t,a);this.carts=this.formattedPrice(o.data.data.carts),this.discountPrice=o.data.data.total-o.data.data.final_total,this.discountPrice=this.discountPrice.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2}),this.final_total=o.data.data.final_total.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2}),this.carts.forEach((i,u)=>{const p=i.product.carColor.filter(h=>{var m;return(h==null?void 0:h.color)===((m=i==null?void 0:i.rentInfo)==null?void 0:m.carColor)});this.carts[u].colorImageUrl=p[0].imageUrl;const g=new Date;new Date(i.rentInfo.startDate)<=g&&this.deleteTargetProduct(i.id)})}).catch(o=>{console.log(o)})},openTargetProduct(t){this.modalProduct=t},editProduct(t,a,e,c){const l={data:{product_id:c,qty:a,rentInfo:t}};r.put(`${n}api/${s}/cart/${e}`,l).then(()=>{this.cartChcek()}).catch(o=>{console.log(o)})},deleteCart(){r.delete(`${n}api/${s}/carts`).then(t=>{console.log(t),this.cartChcek()}).catch(t=>{console.log(t)})},deleteTargetProduct(t){r.delete(`${n}api/${s}/cart/${t}`).then(()=>{this.cartChcek()}).catch(()=>{this.couponCodeError=!0})},addCoupon(t){let a=t.target.value;this.couponCodeError=!1,a!==""&&r.post(`${n}api/${s}/coupon`,{data:{code:a}}).then(()=>{this.cartChcek(),t.target.value=""}).catch(()=>{this.couponCodeError=!0,t.target.value=""})},checkCoupon(){r.get(`${n}api/${s}/cart`).then(t=>{const a=t.data.data.carts.find(e=>{var c;return(c=e==null?void 0:e.coupon)==null?void 0:c.code});a&&r.post(`${n}api/${s}/coupon`,{data:{code:a.coupon.code}}).then(()=>{this.cartChcek()}).catch(()=>{})}).catch(()=>{})},formattedPrice(t){let a=t;return t.forEach((e,c)=>{const l=e.product.price.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2}),o=e.product.origin_price.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2}),d=e.total.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2}),i=e.final_total.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2});a[c].product.price=l,a[c].product.origin_price=o,a[c].total=d,a[c].final_total=i}),a}}});export{C as c};
