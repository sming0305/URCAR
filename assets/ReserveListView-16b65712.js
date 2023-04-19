import{c as v}from"./cartStore-e2e99bac.js";import{br as Y,bs as G,bt as Q,aG as T,at as a,p as i,q as t,F as k,aE as C,bm as g,b9 as W,ad as D,y as w,bk as _,ab as J,aW as B,o as d,ba as A,bb as K,x as u,aU as r,bp as X,w as z,n as y}from"./index-649890ba.js";const Z={data(){return{productTemp:{product:{origin_price:0,price:0},rentInfo:{carColor:"",endDate:"end",endTime:"",location:"",startDate:"start",startTime:""}},range:{start:null,end:null},isDateRepeat:!1,formError:!1,locationError:!1}},methods:{...Y(v,["editProduct","targetModal"]),switchImage(o){this.productTemp.colorImageUrl=o.imageUrl,this.productTemp.rentInfo.carColor=o.color},checkSend(){this.formError=!1,this.locationError=!1;const s=Object.values(this.productTemp.rentInfo).find(n=>n===""),h=/^[\u4E00-\u9FA5]+(?:市|縣)[\u4E00-\u9FA5]+區/.test(this.productTemp.rentInfo.location);if(s===""){this.formError=!0;return}else h?(this.editProduct(this.productTemp.rentInfo,this.productTemp.qty,this.productTemp.id,this.productTemp.product_id),this.modal.hide()):this.locationError=!0}},computed:{...G(v,["modalProduct","modal"]),disabledDates(){return[{start:null,end:new Date}]},parseStartDate(){let o="";return this.range.start!==null&&(o=`${this.range.start.getFullYear()}/${this.range.start.getMonth()+1}/${this.range.start.getDate()}`),o},parseEndDate(){let o="";return this.range.end!==null&&(o=`${this.range.end.getFullYear()}/${this.range.end.getMonth()+1}/${this.range.end.getDate()}`),o}},watch:{modalProduct(){this.productTemp=JSON.parse(JSON.stringify(this.modalProduct))},parseStartDate(){this.isDateRepeat=!1,this.productTemp.rentInfo.startDate=this.parseStartDate,this.parseStartDate===this.parseEndDate&&(this.isDateRepeat=!0,this.range.start=null,this.range.end=null,this.productTemp.rentInfo.startDate="",this.productTemp=JSON.parse(JSON.stringify(this.modalProduct)))},parseEndDate(){this.isDateRepeat=!1,this.productTemp.rentInfo.endDate=this.parseEndDate,this.parseStartDate===this.parseEndDate&&(this.isDateRepeat=!0,this.range.start=null,this.range.end=null,this.productTemp.rentInfo.endDate="",this.productTemp.rentInfo.startDate="",this.productTemp=JSON.parse(JSON.stringify(this.modalProduct)))},range(){const o=new Date(this.range.start),s=new Date(this.range.end),b=Math.abs(s.getTime()-o.getTime()),h=Math.ceil(b/(1e3*60*60*24));this.productTemp.qty=h}},mounted(){this.targetModal(this.$refs.modal)}},tt={class:"modal fade",tabindex:"-1","aria-hidden":"true",ref:"modal",id:"exampleModal","aria-labelledby":"exampleModalLabel"},et={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},ot={class:"modal-content container"},st=t("h2",{class:"fs-15 fw-bold border-bottom border-2 p-10 border-dark"},"調整預約內容",-1),nt={class:"card mb-3 rounded-0 border-0 mb-25 pb-5"},lt={class:"row g-0"},at={class:"col-xl-6"},rt={class:"d-flex align-items-center h-100"},it=["src","alt"],dt={class:"col-xl-6"},ct={class:"card-body d-flex flex-column justify-content-between h-100 mb-5 px-0 px-lg-8 pb-0"},mt=t("h5",{class:"card-title fw-bold mb-6"},null,-1),ut={class:"mb-8"},ht={class:"btn-group align-items-center",role:"group","aria-label":"Basic radio toggle button group"},pt=t("p",{class:"m-0 me-5 fs-8"},"選擇車色 :",-1),_t=["id","checked","value"],bt=["for","onClick"],ft=t("div",{class:"mb-3"},[t("div",{class:"d-flex justify-content-center align-items-center"},[t("label",{for:"editStartDate ",class:"form-label col-4 col-sm-3 col-md-2 mb-0 flex-shrink-0 flex-grow-1"},"取車日期 : "),t("label",{for:"editEndDate",class:"form-label col-4 col-sm-3 col-md-2 mb-0 flex-grow-1"},"還車日期 : ")])],-1),gt={class:"mb-5"},vt={class:"d-flex justify-content-center align-items-center"},kt=["value"],yt=["value"],Tt={key:0,class:"text-danger"},Ct=t("small",null,"旅程最短租賃期為一日(24小時)，跨日租賃不足24小時將以一日計費，請貴賓留意。",-1),Dt=[Ct],wt={class:"mb-5 row align-items-center"},xt=t("label",{for:"startTime",class:"form-label col-4 col-sm-3 col-md-2 mb-0"},"取車時間 ",-1),It={class:"col-8 col-sm-9 col-md-10"},$t=z('<option value="" selected disabled>請選擇取車時間</option><option value="8:00">8:00</option><option value="9:00">9:00</option><option value="10:00">10:00</option><option value="11:00">11:00</option><option value="12:00">12:00</option><option value="13:00">13:00</option><option value="14:00">14:00</option><option value="15:00">15:00</option><option value="16:00">16:00</option><option value="17:00">17:00</option><option value="18:00">18:00</option><option value="19:00">19:00</option><option value="20:00">20:00</option>',14),Et=[$t],St={class:"mb-5 row align-items-center"},Pt=t("label",{for:"endTime",class:"form-label col-4 col-sm-3 col-md-2 mb-0"},"還車時間 ",-1),Mt={class:"col-8 col-sm-9 col-md-10"},Vt=z('<option value="" selected disabled>請選擇還車時間</option><option value="8:00">8:00</option><option value="9:00">9:00</option><option value="10:00">10:00</option><option value="11:00">11:00</option><option value="12:00">12:00</option><option value="13:00">13:00</option><option value="14:00">14:00</option><option value="15:00">15:00</option><option value="16:00">16:00</option><option value="17:00">17:00</option><option value="18:00">18:00</option><option value="19:00">19:00</option><option value="20:00">20:00</option>',14),Rt=[Vt],Nt={class:"mb-5 row align-items-center"},Ut=t("label",{for:"location",class:"form-label col-4 col-sm-3 col-md-2 mb-0"},"取車地址 ",-1),jt={class:"col-8 col-sm-9 col-md-10"},Ot={key:0,class:"text-danger"},Lt=t("small",null,"請輸入正確的台灣(中文)地址格式。",-1),qt=[Lt],Ft={class:"d-flex justify-content-between align-items-center"},Jt={class:"fs-7"},Bt=t("del",null,null,-1),At={class:"fs-9 fw-bold"},Yt={key:0,class:"text-danger"},Gt=t("small",null,"! 預約資訊請填妥完整才可修改 ! ",-1),Qt=[Gt],zt={class:"d-flex justify-content-end"};function Ht(o,s,b,h,n,f){const c=T("VDatePicker");return a(),i("div",tt,[t("div",et,[t("div",ot,[t("div",null,[st,t("div",nt,[t("div",lt,[t("div",at,[t("div",rt,[t("img",{src:n.productTemp.colorImageUrl,alt:n.productTemp.product.title,class:"flex-shrink-1 d-block",style:{width:"100%","max-height":"405px"}},null,8,it)])]),t("div",dt,[t("div",ct,[mt,t("form",null,[t("div",ut,[t("div",ht,[pt,(a(!0),i(k,null,C(n.productTemp.product.carColor,(l,m)=>(a(),i(k,{key:m},[g(t("input",{type:"radio",class:"btn-check",name:"btnradio",id:`btnradio${m}`,checked:l.imageUrl===n.productTemp.colorImageUrl,value:l.color,"onUpdate:modelValue":s[0]||(s[0]=p=>n.productTemp.rentInfo.carColor=p)},null,8,_t),[[W,n.productTemp.rentInfo.carColor]]),t("label",{class:D(["btn rounded-0 me-5 rounded-1 border-gray",{"btn-danger":l.color==="red","btn-blue":l.color==="blue","btn-dark":l.color==="dark","btn-gray-600":l.color==="gray"}]),for:`btnradio${m}`,style:{height:"25px"},onClick:p=>f.switchImage(l)},null,10,bt)],64))),128))])]),ft,t("div",gt,[w(c,{modelValue:n.range,"onUpdate:modelValue":s[1]||(s[1]=l=>n.range=l),"is-range":"","disabled-dates":f.disabledDates},{default:_(({inputEvents:l})=>[t("div",vt,[t("input",J({value:n.productTemp.rentInfo.startDate},B(l.start,!0),{id:"editStartDate",class:"form-control me-4",readonly:""}),null,16,kt),t("input",J({value:n.productTemp.rentInfo.endDate},B(l.end,!0),{id:"editEndDate",class:"form-control",readonly:""}),null,16,yt)])]),_:1},8,["modelValue","disabled-dates"]),n.isDateRepeat===!0?(a(),i("span",Tt,Dt)):d("",!0)]),t("div",wt,[xt,t("div",It,[g(t("select",{name:"",id:"startTime",class:"form-control fs-7","onUpdate:modelValue":s[2]||(s[2]=l=>n.productTemp.rentInfo.startTime=l)},Et,512),[[A,n.productTemp.rentInfo.startTime]])])]),t("div",St,[Pt,t("div",Mt,[g(t("select",{name:"",id:"endTime",class:"form-control fs-7","onUpdate:modelValue":s[3]||(s[3]=l=>n.productTemp.rentInfo.endTime=l)},Rt,512),[[A,n.productTemp.rentInfo.endTime]])])]),t("div",Nt,[Ut,t("div",jt,[g(t("input",{type:"text",class:"form-control",id:"location",placeholder:"請輸入您的取車地點地址","onUpdate:modelValue":s[4]||(s[4]=l=>n.productTemp.rentInfo.location=l)},null,512),[[K,n.productTemp.rentInfo.location]]),n.locationError===!0?(a(),i("span",Ot,qt)):d("",!0)])]),t("div",Ft,[t("p",Jt,[u("原價 : "+r(n.productTemp.product.origin_price),1),Bt]),t("p",At,r(n.productTemp.product.price)+"/ 天",1)]),n.formError===!0?(a(),i("span",Yt,Qt)):d("",!0),t("div",zt,[t("button",{type:"button",class:"btn btn-dark rounded-1 me-10",onClick:s[5]||(s[5]=l=>this.modal.hide())}," 取消修改 "),t("input",{type:"submit",class:"btn btn-dark rounded-1",value:"確認修改",onClick:s[6]||(s[6]=X(l=>f.checkSend(),["prevent"]))})])])])])])])])])])],512)}const Wt=Q(Z,[["render",Ht]]),Kt={components:{ModalComponent:Wt},methods:{...Y(v,["cartChcek","deleteCart","deleteTargetProduct","addCoupon","checkCoupon","openTargetProduct","currentRoute"])},computed:{...G(v,["carts","final_total","discountPrice","couponCodeError"])},mounted(){this.cartChcek(null,null,null,this.$route.name),this.checkCoupon(),this.currentRoute(this.$route.name)}},Xt={class:"pb-30 pb-15"},Zt={class:"container"},te={class:"mb-15"},ee={class:"d-flex justify-content-between align-items-center border-bottom border-2 border-dark mb-10"},oe=t("h2",{class:"fs-20 fw-bold"},"預約清單",-1),se={class:"card mb-3 rounded-0 border-0 mb-15 border-bottom border-2 border-dark pb-10"},ne={key:0,class:"fs-16 fw-bold text-center mb-12"},le={class:"d-flex justify-content-center"},ae={class:"col-xl-6 d-flex align-items-center"},re=["src","alt"],ie={class:"col-xl-6"},de={class:"card-body d-flex flex-column justify-content-between h-100 mb-5 px-0 px-lg-8 pb-0"},ce={class:"card-title fw-bold mb-6"},me={class:"row"},ue={class:"d-flex align-items-center mb-10"},he=t("span",{class:"me-5"},"車色 :",-1),pe={class:"col-12 col-sm-6 mb-7"},_e={class:"col-12 col-sm-6 mb-7"},be={class:"col-12 col-sm-6 mb-7"},fe={class:"col-12 col-sm-6 mb-7"},ge={class:"col-12 mb-7"},ve={class:"col-12 col-sm-6 mb-7"},ke={class:"col-12 col-sm-6 mb-7"},ye={class:"col-12 col-sm-6 mb-7"},Te={class:"col-12 col-sm-6 mb-7"},Ce={class:"d-flex justify-content-end"},De=["onClick"],we=["onClick"],xe=t("h2",{class:"fs-20 fw-bold text-start"},"金額計算",-1),Ie={class:"w-100 text-end mb-10"},$e=t("thead",null,[t("tr",null,[t("th",{width:"25%"}),t("th",{width:"25%"}),t("th",{width:"25%"}),t("th",{width:"25%"})])],-1),Ee=t("td",{colspan:"3"},[t("label",{for:"coupon",class:"me-4 mb-8 fs-10"},"輸入優惠卷 :")],-1),Se={class:"border-bottom border-dark border-2"},Pe={colspan:"4"},Me={key:0,class:"text-danger mb-8"},Ve=t("small",null,"優惠卷折扣碼不存在或已過期，請留意字母大小寫並重新輸入。",-1),Re=[Ve],Ne={key:1,class:"mb-8"},Ue={colspan:"2",class:"text-start pt-5"},je={colspan:"2",class:"pt-5"},Oe={colspan:"2",class:"text-start pt-5"},Le={key:0,colspan:"2",class:"pt-5"},qe=t("td",{colspan:"3",class:"fs-12 pt-5"},"總計 :",-1),Fe={class:"fs-12 pt-5"},Je={class:"d-flex justify-content-end"};function Be(o,s,b,h,n,f){var m,p,x,I,$,E;const c=T("RouterLink"),l=T("ModalComponent");return a(),i("main",null,[t("section",Xt,[t("div",Zt,[t("div",te,[t("div",ee,[oe,((m=o.carts)==null?void 0:m.length)!==0?(a(),i("button",{key:0,type:"button",class:"btn btn-danger mb-5 btn-sm",onClick:s[0]||(s[0]=(...e)=>o.deleteCart&&o.deleteCart(...e))}," 刪除全部預約 ")):d("",!0)]),t("div",se,[((p=o.carts)==null?void 0:p.length)===0?(a(),i("h2",ne," 目前沒有預約的訂單，快選擇心儀的車款出發吧。 ")):d("",!0),t("div",le,[((x=o.carts)==null?void 0:x.length)===0?(a(),y(c,{key:0,to:"/productList",class:"btn btn-dark fit-content rounded-1 fs-9 px-10"},{default:_(()=>[u("前往車輛方案一覽")]),_:1})):d("",!0)]),(a(!0),i(k,null,C(o.carts,e=>{var S,P,M,V,R,N,U,j,O,L,q,F;return a(),i("div",{class:"row g-0 mb-5 border-bottom pb-5 border-dark",key:e.product.title},[t("div",ae,[t("img",{src:e.colorImageUrl,alt:e.product.title,class:"flex-shrink-1 d-block",style:{width:"100%","max-height":"280px"}},null,8,re)]),t("div",ie,[t("div",de,[t("ul",null,[t("li",null,[t("h5",ce,r(e.product.title),1),t("ul",me,[t("li",ue,[he,t("div",{style:{width:"20px",height:"20px"},class:D(["rounded-1",{"bg-danger":((S=e==null?void 0:e.rentInfo)==null?void 0:S.carColor)==="red","bg-blue":((P=e==null?void 0:e.rentInfo)==null?void 0:P.carColor)==="blue","bg-dark":((M=e==null?void 0:e.rentInfo)==null?void 0:M.carColor)==="dark","bg-gray-600":((V=e==null?void 0:e.rentInfo)==null?void 0:V.carColor)==="gray",border:((R=e==null?void 0:e.rentInfo)==null?void 0:R.carColor)==="white","border-gray":((N=e==null?void 0:e.rentInfo)==null?void 0:N.carColor)==="white","border-1":((U=e==null?void 0:e.rentInfo)==null?void 0:U.carColor)==="white"}])},null,2)]),t("li",pe," 取車日期 : "+r((j=e==null?void 0:e.rentInfo)==null?void 0:j.startDate),1),t("li",_e," 還車日期 : "+r((O=e==null?void 0:e.rentInfo)==null?void 0:O.endDate),1),t("li",be," 取車時間 : "+r((L=e==null?void 0:e.rentInfo)==null?void 0:L.startTime),1),t("li",fe," 還車時間 : "+r((q=e==null?void 0:e.rentInfo)==null?void 0:q.endTime),1),t("li",ge,"取車地點 : "+r((F=e.rentInfo)==null?void 0:F.location),1),t("li",ve," 原價 : "+r(e.product.origin_price)+" / 天 ",1),t("li",ke," 優惠 : "+r(e.product.price)+" / 天 ",1),t("li",ye,"租用計價天數 : "+r(e.qty)+" 天",1),t("li",Te,"總計費用 : "+r(e.total)+" 元",1)])])]),t("div",Ce,[t("button",{type:"button",class:"btn btn-danger rounded-1 me-10 btn-sm",onClick:H=>o.deleteTargetProduct(e.id)}," 取消此預約 ",8,De),t("button",{type:"button",class:"btn btn-dark rounded-1 btn-sm",onClick:H=>o.openTargetProduct(e)}," 修改內容 ",8,we),w(l)])])])])}),128))]),t("div",null,[xe,t("table",Ie,[$e,t("tbody",null,[t("tr",null,[Ee,t("td",null,[t("input",{type:"text",class:"form-control py-2 rounded-0 bg-gray border-0 mb-8",id:"coupon",onChange:s[1]||(s[1]=e=>o.addCoupon(e))},null,32)])]),t("tr",Se,[t("td",Pe,[o.couponCodeError===!0?(a(),i("p",Me,Re)):d("",!0),o.couponCodeError===!1?(a(),i("p",Ne,[t("small",null,[u("找不到優惠卷?，參考我們的 "),w(c,{target:"_blank",class:"text-blue",to:"/article/-NQYEpGrnCt0ky7Qq_9q"},{default:_(()=>[u("優惠新訊")]),_:1})])])):d("",!0)])]),(a(!0),i(k,null,C(o.carts,e=>(a(),i("tr",{key:e.product.title},[t("td",Ue,r(e.product.title),1),t("td",je,r(e.total)+" $",1)]))),128)),t("tr",null,[t("td",Oe,r(($=(I=o.carts[0])==null?void 0:I.coupon)==null?void 0:$.title),1),o.discountPrice!==0&&o.discountPrice!=="0"?(a(),i("td",Le," - "+r(o.discountPrice)+" $ ",1)):d("",!0)]),t("tr",null,[qe,t("td",Fe,r(o.final_total)+" $",1)])])]),t("div",Je,[((E=o.carts)==null?void 0:E.length)!==0?(a(),y(c,{key:0,to:"/productList",class:D(["btn btn-dark rounded-0",{"me-20":o.carts.length!==0}])},{default:_(()=>[u("預約其他車款")]),_:1},8,["class"])):d("",!0),o.carts.length!==0?(a(),y(c,{key:1,to:"/createOrder",class:"btn btn-dark rounded-0"},{default:_(()=>[u("填寫預約人資料 ")]),_:1})):d("",!0)])])])])])])}const Ge=Q(Kt,[["render",Be]]);export{Ge as default};
