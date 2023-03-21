import{u as d,x as s}from"./index-8cd31790.js";const{VITE_API_PATH:o,VITE_API_URL:a}={VITE_API_PATH:"truth",VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",BASE_URL:"/URCAR/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},c=d("payStore",{state:()=>({form:{},order:{},orderId:"",router:{},payError:!1}),actions:{sendOrder(r,e,t){s.post(`${a}api/${o}/order`,r).then(i=>{this.orderId=i.data.orderId,this.getOrder(e),t.resetForm(),e.push("/pay")}).catch(()=>{alert('目前沒有預約的車款資訊，請您於"方案選擇"預約並確定資訊後再行填寫，謝謝。')})},getOrder(r,e){this.orderId===""&&(e==null?void 0:e.name)==="pay"?(alert("此為結帳頁面，請由預訂車輛步驟或查詢訂單後再進入此頁進行結帳，謝謝。"),setTimeout(function(){r.push("/productList")},1e3)):this.orderId!==""&&s.get(`${a}api/${o}/order/${this.orderId}`).then(t=>{this.order=t.data.order,this.order.total=this.order.total.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2})}).catch(t=>{console.log(t)})},focusNext(r,e){const t=e.querySelectorAll("input");t&&t[r-1].value.length===4&&t[r].focus()},cardNumberCheck(r){this.payError=!1;const e=r.cardNumber.find(t=>t.length<4);return(e==null?void 0:e.length)<4?(this.payError=!0,!1):r.securityCode<3?(this.payError=!0,!1):!0},pay(r,e){this.cardNumberCheck(r)&&s.post(`${a}api/${o}/pay/${this.order.id}`,this.order.id).then(()=>{e.push("/paySuccess")}).then(()=>{})}},getters:{}});export{c as p};
