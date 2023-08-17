import{o as ae,l as j,j as m,k as o,n as le}from"./rtl.1feb46b5.js";import{Q as L}from"./QSeparator.99083d2e.js";import{Q as $,b as k}from"./QCard.37cbc9f7.js";import{aJ as x,a6 as S,a7 as s,d as e,bb as a,bD as Y,ad as u,Q as d,N as te,r as b,u as _,a4 as T,bE as V,a5 as P}from"./index.8b486ad5.js";import{Q as U}from"./QInput.37d87d58.js";import{Q as se}from"./QBtnGroup.1acb9e3f.js";import{Q as oe,c as F}from"./QSpace.b8199aac.js";import{a as de,Q as q}from"./QToolbar.cffbf362.js";import{e as ue,a as ce}from"./excel.5d19a2ad.js";import{a as ne}from"./use-quasar.13a6ed5a.js";import{a as re,u as G}from"./index.93b17eb1.js";import{u as ie}from"./account-store.429b0035.js";import{u as _e}from"./auth-store.f0699302.js";import{h as I}from"./helpers.d6d0b5ed.js";import"./module_calls.eba83624.js";const J=[{name:"production_cost",required:!0,label:"Expense",align:"left",field:n=>n.production_cost,format:n=>`${n}`,sortable:!0},{name:"total_sales",required:!0,label:"Expected Sales",align:"left",field:n=>n.total_sales,format:n=>`${n}`,sortable:!0},{name:"expected_cash",align:"center",label:"Expected Cash",field:"expected_cash",sortable:!0},{name:"expected_mpesa",align:"center",label:"Expected Mpesa",field:"expected_mpesa",sortable:!0},{name:"actual_cash",align:"center",label:"Actual Cash",field:"actual_cash",sortable:!0},{name:"actual_mpesa",align:"center",label:"Actual Mpesa",field:"actual_mpesa",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0}],me={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},fe={class:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},pe={class:"text-center q-pa-sm"},he={style:{color:"#017951"}},xe={class:"row q-pa-sm"},ve={class:"q-pa-xs col-xs-12 col-sm-4 col-md-4"},be=s("hr",null,null,-1),ye={class:"q-ma-sm"},ge={class:"q-pa-xs col-xs-12 col-sm-4 col-md-4"},we=s("hr",null,null,-1),qe={class:"q-ma-sm"},Ae={class:"q-pa-xs col-xs-12 col-sm-4 col-md-4"},Ce={key:0},Qe={key:1},Ee=s("hr",null,null,-1),$e={class:"q-ma-sm"},ke={__name:"AccountsBarCharts",props:["account_store"],setup(n){return(D,B)=>(x(),S("div",me,[s("div",fe,[e($,null,{default:a(()=>{var t,f;return[s("div",pe,[s("b",he,[e(Y,{name:"grain"}),u(" Today")])]),e(L,{color:"primary"}),s("div",xe,[s("div",ve,[e($,{dark:"",class:"bg-primary"},{default:a(()=>[e(k,{class:"text-center"},{default:a(()=>{var r;return[u(" Total Sales "),be,s("h5",ye,d((r=n.account_store)==null?void 0:r.total_daily_sales),1)]}),_:1})]),_:1})]),s("div",ge,[e($,{dark:"",class:"bg-orange"},{default:a(()=>[e(k,{class:"text-center"},{default:a(()=>{var r;return[u(" Total Expense "),we,s("h5",qe,d((r=n.account_store)==null?void 0:r.total_daily_expense),1)]}),_:1})]),_:1})]),s("div",Ae,[e($,{dark:"",class:te(`${n.account_store&&((t=n.account_store)==null?void 0:t.total_daily_sales)-((f=n.account_store)==null?void 0:f.total_daily_expense)>0?"bg-blue":"bg-red"}`)},{default:a(()=>[e(k,{class:"text-center"},{default:a(()=>{var r,y,p,A;return[n.account_store&&((r=n.account_store)==null?void 0:r.total_daily_sales)-((y=n.account_store)==null?void 0:y.total_daily_expense)>0?(x(),S("span",Ce," Profit ")):(x(),S("span",Qe,"Loss")),Ee,s("h5",$e,d(((p=n.account_store)==null?void 0:p.total_daily_sales)-((A=n.account_store)==null?void 0:A.total_daily_expense)),1)]}),_:1})]),_:1},8,["class"])])])]}),_:1})])]))}};const Se={class:"q-pa-md"},Ve={key:0},Ne={key:1},Te=["onClick"],De={style:{color:"white"}},Be={style:{color:"white"}},Me={style:{color:"white"}},Pe=s("small",null,[s("i",null,"(Total Sales - Expenses)")],-1),Ue=s("br",null,null,-1),Ie=s("small",null,[s("i",null,"(Total Sales - Expense)")],-1),Le={class:"text-center q-pt-sm"},ze={class:"text-h6"},Oe={style:{"text-align":"center"}},je=s("i",null,"Expected Values",-1),Fe=s("hr",null,null,-1),Ge=s("br",null,null,-1),Je=s("br",null,null,-1),Ye={class:"text-center error_msg"},na={__name:"Accounts",setup(n){const D=ne(),B=re(),t=ie(),f=_e(),r=b(!1),y=b(!1),p=b(!1),A=b(""),N=b(""),h=b(0),g=b(0),M=b(""),C=b(""),{data:z,isLoading:H,isError:O}=G("accounts",()=>t.fetchAccounts());G("account_stats_today",()=>t.fetchTodaySalesStats());const K=()=>{N.value="Close Accounts for the day",r.value=!0,y.value=!1},R=i=>{var c,l;I((l=(c=f==null?void 0:f.user)==null?void 0:c.user)==null?void 0:l.roles)?(y.value=!0,N.value=`Edit Account for ${i.created_at}`,M.value=i.uuid,h.value=i.actual_cash,g.value=i.actual_mpesa,r.value=!0):alert("You are not authorized to edit the accounts. Contact admin.")},W=async()=>{var i,c,l,Q;if(p.value=!0,C.value="",I((c=(i=f==null?void 0:f.user)==null?void 0:i.user)==null?void 0:c.roles)){const E={user_departments:(Q=(l=f==null?void 0:f.user)==null?void 0:l.user)==null?void 0:Q.departments.map(v=>v.name),actual_cash:Number(h.value),actual_mpesa:Number(g.value),expected_cash:t==null?void 0:t.total_daily_cash_sales,expected_mpesa:t==null?void 0:t.total_daily_mpesa_sales,expected_mpesa_cash:t==null?void 0:t.total_daily_mpesa_cash_sales,expected_card:t==null?void 0:t.total_daily_card_sales,expected_debt:t==null?void 0:t.total_daily_debt_sales,total_sales:t==null?void 0:t.total_daily_sales,total_expense:t==null?void 0:t.total_daily_expense};if(E.actual_cash&&E.actual_mpesa){const v=await t.createAccount(E);v.status==="success"?(B.refetchQueries("accounts"),h.value=1,g.value=1,r.value=!1,w(v.message,"green","top"),p.value=!1):(C.value=v.message,w(v.message,"red","top-right"),p.value=!1)}else C.value="Name is required!",w("Name is required!","red","top-right"),p.value=!1}else w("Permission denied! Only cashier or admin is allowed","red","top")},X=async()=>{p.value=!0;const i={account_uuid:M.value,actual_cash:Number(h.value),actual_mpesa:Number(g.value),expected_cash:t==null?void 0:t.total_daily_cash_sales,expected_mpesa:t==null?void 0:t.total_daily_mpesa_sales,expected_mpesa_cash:t==null?void 0:t.total_daily_mpesa_cash_sales,expected_card:t==null?void 0:t.total_daily_card_sales,expected_debt:t==null?void 0:t.total_daily_debt_sales,total_sales:t==null?void 0:t.total_daily_sales,total_expense:t==null?void 0:t.total_daily_expense};if(i.actual_cash&&i.actual_mpesa){const c=await t.updateAccount(i);c.status==="success"?(B.refetchQueries("accounts"),h.value=1,g.value=1,r.value=!1,y.value=!1,N.value="",w(c.message,"green","top"),p.value=!1):(p.value=!1,w("There was an error","red","top-right"))}else C.value="Name is required!",w("Name is required!","red","top-right"),p.value=!1},Z=()=>{r.value=!1,h.value=1,g.value=1,M.value="",C.value=""},w=(i,c,l)=>{D.notify({message:i,color:c,position:l})},ee=i=>{const c=i.map(l=>({name:l.name,users:l.users.length,created_at:l.created_at}));ue(c,J,ce,D,"AccountsData")};return(i,c)=>(x(),S("div",Se,[e(ke,{account_store:_(t)},null,8,["account_store"]),_(H)?(x(),S("div",Ve,"Loading accounts...")):_(O)?(x(),S("div",Ne,"An error has occurred: "+d(_(O)),1)):(x(),T(oe,{key:2,title:"Accounts",rows:_(z),columns:_(J),separator:"cell","row-key":"name",filter:A.value,dense:"",grid:""},{item:a(l=>[s("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 select_account",style:{cursor:"pointer"},onClick:Q=>R(l.row)},[e($,{bordered:"",ripple:"",style:{border:"1px solid orange"}},{default:a(()=>[e(k,null,{default:a(()=>[e(j,{dense:"",bordered:"",separator:""},{default:a(()=>[e(m,{class:"bg-primary text-white"},{default:a(()=>[e(o,null,{default:a(()=>[u(" Accounts closed on ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",De,d(l.row.created_at),1)]),_:2},1024)]),_:2},1024),e(m,{class:"bg-blue text-white"},{default:a(()=>[e(o,null,{default:a(()=>[u(" Accounts closed by ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",Be,d(l.row.user),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Expected Total Sales ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.total_sales),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Expected Cash ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_cash),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Expected Mpesa ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_mpesa),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Expected Mpesa & Cash")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_mpesa_cash),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Expected Card")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_card),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Expected Debt")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_debt),1)]),_:2},1024)]),_:2},1024),e(m,{class:"bg-orange text-white"},{default:a(()=>[e(o,null,{default:a(()=>[u(" Expenses ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",Me,d(l.row.production_cost),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Expected Profit "),Pe]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_profit),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(L,{color:"primary"}),u(),Ue,e(L,{color:"orange"}),e(j,{dense:"",bordered:"",separator:""},{default:a(()=>[e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Actual Total Sales ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_total_sales),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Actual Cash ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_cash),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Actual Mpesa ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_mpesa),1)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>[e(o,null,{default:a(()=>[u(" Actual Profit "),Ie]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_profit),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),s("div",Le,[s("small",null,[s("i",null,"Department: "+d(l.row.department),1)])])]),_:2},1024)]),_:2},1024)],8,Te)]),"top-right":a(()=>{var l,Q,E;return[e(U,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:A.value,"onUpdate:modelValue":c[0]||(c[0]=v=>A.value=v),placeholder:"Search",class:"q-mr-md"},{append:a(()=>[e(Y,{name:"search"})]),_:1},8,["modelValue"]),_(I)((E=(Q=(l=_(f))==null?void 0:l.user)==null?void 0:Q.user)==null?void 0:E.roles)?(x(),T(se,{key:0},{default:a(()=>[e(V,{onClick:K,round:"",dense:"",color:"primary",size:"small",icon:"add"}),e(V,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:c[1]||(c[1]=v=>ee(_(z)))})]),_:1})):P("",!0)]}),_:1},8,["rows","columns","filter"])),e(ae,{modelValue:r.value,"onUpdate:modelValue":c[4]||(c[4]=l=>r.value=l),persistent:""},{default:a(()=>[e($,{style:{width:"700px"}},{default:a(()=>[e(de,null,{default:a(()=>[s("div",ze,d(N.value),1),e(F),s("small",Oe,[je,Fe,e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[u("Total: "+d((l=_(t))==null?void 0:l.total_daily_sales),1)]}),_:1}),e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[u("Cash: "+d((l=_(t))==null?void 0:l.total_daily_cash_sales),1)]}),_:1}),e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[u("Mpesa: "+d((l=_(t))==null?void 0:l.total_daily_mpesa_sales),1)]}),_:1}),Ge,e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[u("Mpesa & Cash: "+d((l=_(t))==null?void 0:l.total_daily_mpesa_cash_sales),1)]}),_:1}),e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[u("Card: "+d((l=_(t))==null?void 0:l.total_daily_card_sales),1)]}),_:1}),e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[u("Debt: "+d((l=_(t))==null?void 0:l.total_daily_debt_sales),1)]}),_:1}),Je,e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[u("Expense: "+d((l=_(t))==null?void 0:l.total_daily_expense),1)]}),_:1})])]),_:1}),e(k,{class:"q-pt-none"},{default:a(()=>[e(U,{outlined:"",dense:"",label:"Actual Cash",modelValue:h.value,"onUpdate:modelValue":c[2]||(c[2]=l=>h.value=l),type:"number",min:"0",oninput:"validity.valid||(value='');"},null,8,["modelValue"])]),_:1}),e(k,{class:"q-pt-none"},{default:a(()=>[e(U,{outlined:"",dense:"",label:"Actual Mpesa",modelValue:g.value,"onUpdate:modelValue":c[3]||(c[3]=l=>g.value=l),type:"number",min:"0",oninput:"validity.valid||(value='');"},null,8,["modelValue"])]),_:1}),s("div",Ye,[s("small",null,d(C.value),1)]),e(le,{align:"right"},{default:a(()=>[e(V,{flat:"",label:"Cancel",color:"red",onClick:Z}),e(F),h.value&&!y.value?(x(),T(V,{key:0,flat:"",label:"Close Day",color:"primary",onClick:W,loading:p.value},null,8,["loading"])):P("",!0),h.value&&y.value?(x(),T(V,{key:1,flat:"",label:"Edit Account",color:"primary",onClick:X,loading:p.value},null,8,["loading"])):P("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{na as default};
