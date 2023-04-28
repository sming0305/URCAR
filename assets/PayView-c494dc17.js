import{p as k}from"./payStore-139f0972.js";import{c as C}from"./cartStore-71292c1d.js";import{_ as U,m as V,a as D,o as r,c,b as s,t,F as S,i as T,l as a,q as i,f as $,e as j}from"./index-20243ac2.js";const B={data(){return{payInfo:{cardNumber:["","","",""],securityCode:""}}},methods:{...V(k,["getOrder","focusNext","pay"]),...V(C,["currentRoute"])},computed:{...D(k,["order","payError"])},mounted(){this.getOrder(this.$router,this.$route),this.currentRoute(this.$route.name)}},E={class:"pb-30 pb-15"},K={class:"container"},q={class:"mb-15"},F=s("div",{class:"border-bottom border-2 border-dark mb-20"},[s("h2",{class:"fs-20 fw-bold"},"付款")],-1),O={class:"row"},R={class:"col-12 col-xl-5 col-xxl-4 offset-xl-1 offset-xxl-2 mb-15"},A={class:"p-6 bg-gray"},L={class:"mb-10"},M={class:"fw-bold"},P={class:"mb-10"},z={class:"fw-bold"},G={class:"mb-10"},H={class:"fw-bold"},J={class:"mb-10"},Q={class:"fw-bold"},W={class:"pb-12 border-bottom border-dark"},X={class:"fw-bold"},Y={class:"p-6 bg-gray"},Z={class:"row mt-6"},ss={class:"col-sm-6 col-12 mb-2"},es={class:"col-sm-6 col-12 mb-2"},os={class:"col-sm-6 col-12 mb-2"},ts={class:"col-sm-6 col-12 mb-2"},ls={class:"col-sm-6 col-12 mb-2"},ns={class:"col-sm-6 col-12 mb-2"},as={class:"col-12 col-xl-5 col-xxl-4"},is={class:"d-flex justify-content-center align-items-center h-100"},rs=s("h3",{class:"fw-bold fs-20 text-center mb-20"},"請輸入信用卡卡號",-1),cs={action:""},ds={class:"row mb-15"},ms={class:"col-3 col-sm-2 offset-sm-2"},fs={class:"col-3 col-sm-2"},_s={class:"col-3 col-sm-2"},bs={class:"col-3 col-sm-2"},us={class:"row mb-15"},ps={class:"col-4 offset-4 col-sm-2 offset-sm-5 mb-5"},hs=s("div",{class:"d-flex justify-content-center"},[s("label",{for:"safety",class:"fw-bold fs-10 mb-4 flex-shrink-0"},"安全碼")],-1),ys={key:0,class:"text-danger text-center"},vs={class:"d-flex justify-content-center"};function xs(l,o,gs,Is,n,Ns){var d,m,f,_,b,u,p,h,y;return r(),c("main",null,[s("section",E,[s("div",K,[s("div",q,[F,s("div",O,[s("div",R,[s("ul",A,[s("li",L,[s("span",M,"訂單編號 : "+t((d=l.order)==null?void 0:d.id),1)]),s("li",P,[s("span",z,"姓名 : "+t((f=(m=l.order)==null?void 0:m.user)==null?void 0:f.name),1)]),s("li",G,[s("span",H,"電話 : "+t((b=(_=l.order)==null?void 0:_.user)==null?void 0:b.tel),1)]),s("li",J,[s("span",Q,"預約人地址 : "+t((p=(u=l.order)==null?void 0:u.user)==null?void 0:p.address),1)]),s("li",W,[s("span",X,"總計金額 : "+t((h=l.order)==null?void 0:h.total),1)])]),s("ul",Y,[(r(!0),c(S,null,T((y=l.order)==null?void 0:y.products,e=>{var v,x,g,I,N,w;return r(),c("li",{class:"fw-bold mb-15 pb-5",key:e},[j(t((v=e==null?void 0:e.product)==null?void 0:v.title)+" ",1),s("ul",Z,[s("li",ss," 取車日期 :  "+t((x=e==null?void 0:e.rentInfo)==null?void 0:x.startDate),1),s("li",es," 還車日期 :  "+t((g=e==null?void 0:e.rentInfo)==null?void 0:g.endDate),1),s("li",os," 取車時間 :  "+t((I=e==null?void 0:e.rentInfo)==null?void 0:I.startTime),1),s("li",ts," 還車時間 :  "+t((N=e==null?void 0:e.rentInfo)==null?void 0:N.endTime),1),s("li",ls," 取車地點 :  "+t((w=e==null?void 0:e.rentInfo)==null?void 0:w.location),1),s("li",ns,"租用天數 :  "+t(e==null?void 0:e.qty),1)])])}),128))])]),s("div",as,[s("div",is,[s("div",null,[rs,s("form",cs,[s("div",ds,[s("div",ms,[a(s("input",{type:"text",class:"form-control rounded-0 me-2 me-sm-5 text-center p-0",oninput:"value=value.replace(/^(0+)|[^\\d]+/g,'')",onKeyup:o[0]||(o[0]=e=>l.focusNext(1,this.$el)),maxlength:"4","onUpdate:modelValue":o[1]||(o[1]=e=>n.payInfo.cardNumber[0]=e)},null,544),[[i,n.payInfo.cardNumber[0]]])]),s("div",fs,[a(s("input",{type:"text",class:"form-control rounded-0 me-2 me-sm-5 text-center p-0",oninput:"value=value.replace(/[^\\d]+/g,'')",onKeyup:o[2]||(o[2]=e=>l.focusNext(2,this.$el)),maxlength:"4","onUpdate:modelValue":o[3]||(o[3]=e=>n.payInfo.cardNumber[1]=e)},null,544),[[i,n.payInfo.cardNumber[1]]])]),s("div",_s,[a(s("input",{type:"text",class:"form-control rounded-0 me-2 me-sm-5 text-center p-0",oninput:"value=value.replace(/[^\\d]+/g,'')",onKeyup:o[4]||(o[4]=e=>l.focusNext(3,this.$el)),maxlength:"4","onUpdate:modelValue":o[5]||(o[5]=e=>n.payInfo.cardNumber[2]=e)},null,544),[[i,n.payInfo.cardNumber[2]]])]),s("div",bs,[a(s("input",{type:"text",class:"form-control rounded-0 text-center p-0",oninput:"value=value.replace(/[^\\d]+/g,'')",maxlength:"4","onUpdate:modelValue":o[6]||(o[6]=e=>n.payInfo.cardNumber[3]=e)},null,512),[[i,n.payInfo.cardNumber[3]]])])]),s("div",us,[s("div",ps,[s("div",null,[hs,a(s("input",{id:"safety",type:"text",class:"form-control rounded-0 text-center p-0",oninput:"value=value.replace(/[^\\d]+/g,'')",maxlength:"3","onUpdate:modelValue":o[7]||(o[7]=e=>n.payInfo.securityCode=e)},null,512),[[i,n.payInfo.securityCode]])])])]),l.payError===!0?(r(),c("p",ys," 請輸入完整卡號後再進行付款 ")):$("",!0),s("div",vs,[s("button",{type:"button",class:"btn btn-dark px-20 rounded-0",onClick:o[8]||(o[8]=e=>l.pay(n.payInfo,this.$router))}," 付款 ")])])])])])])])])])])}const Cs=U(B,[["render",xs]]);export{Cs as default};
