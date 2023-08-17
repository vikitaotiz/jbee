import{Q as y,a as O}from"./QTr.a2aac0e2.js";import{r as d,aJ as i,a6 as k,u as m,Q as c,a4 as Q,bb as s,d as a,ad as w,bD as C,bE as f,a7 as x,a5 as E}from"./index.8b486ad5.js";import{Q as A}from"./QInput.37d87d58.js";import{Q as j,c as G}from"./QSpace.b8199aac.js";import{Q as H,b as T}from"./QCard.37cbc9f7.js";import{o as K,n as P}from"./rtl.1feb46b5.js";import{e as R,a as W}from"./excel.5d19a2ad.js";import{a as X}from"./use-quasar.13a6ed5a.js";import{a as Y,u as Z}from"./index.93b17eb1.js";import{u as ee}from"./department-store.1175bfc2.js";import"./QSeparator.99083d2e.js";import"./module_calls.eba83624.js";import"./helpers.d6d0b5ed.js";const $=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"users",align:"center",label:"Users",field:"users",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const te={class:"q-pa-md"},ae={key:0},re={key:1},se={class:"text-h6"},le={class:"text-center error_msg"},De={__name:"Departments",setup(v){const N=X(),D=Y(),_=ee(),n=d(!1),p=d(!1),h=d(""),g=d(""),l=d(""),b=d(""),u=d(""),{data:V,isLoading:S,isError:q}=Z("departments",()=>_.fetchDepartments()),B=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await _.deleteDepartment({uuid:t.uuid});e.status==="success"?(D.refetchQueries("departments"),o(e.message,"green","top")):o("There was an error","red","top-right")}},U=()=>{g.value="Add New Department",n.value=!0,p.value=!1},z=t=>{p.value=!0,g.value=`Edit ${t.name}`,l.value=t.name,b.value=t.uuid,n.value=!0},I=async()=>{if(u.value="",l.value.trim()){const t=await _.createDepartment({name:l.value.trim()});t.status==="success"?(D.refetchQueries("departments"),l.value="",n.value=!1,o(t.message,"green","top")):(u.value=t.message,o(t.message,"red","top-right"))}else u.value="Name is required!",o("Name is required!","red","top-right")},L=async()=>{const t={name:l.value.trim(),uuid:b.value};if(t.name){const r=await _.updateDepartment(t);r.status==="success"?(D.refetchQueries("departments"),l.value="",n.value=!1,p.value=!1,g.value="",o(r.message,"green","top")):o("There was an error","red","top-right")}else u.value="Name is required!",o("Name is required!","red","top-right")},F=()=>{n.value=!1,l.value="",b.value="",u.value=""},o=(t,r,e)=>{N.notify({message:t,color:r,position:e})},J=t=>{const r=t.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));R(r,$,W,N,"DepartmentsData")};return(t,r)=>(i(),k("div",te,[m(S)?(i(),k("div",ae,"Loading departments...")):m(q)?(i(),k("div",re,"An error has occurred: "+c(m(q)),1)):(i(),Q(j,{key:2,title:"Departments",rows:m(V),columns:m($),separator:"cell","row-key":"name",filter:h.value,dense:""},{body:s(e=>[a(O,{props:e},{default:s(()=>[a(y,{key:"name",props:e},{default:s(()=>[w(c(e.row.name),1)]),_:2},1032,["props"]),a(y,{key:"users",props:e},{default:s(()=>[w(c(e.row.users.length),1)]),_:2},1032,["props"]),a(y,{key:"created_at",props:e},{default:s(()=>[w(c(e.row.created_at),1)]),_:2},1032,["props"]),a(y,{key:"actions",props:e},{default:s(()=>[a(C,{color:"blue",name:"edit",onClick:M=>z(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),a(C,{color:"red",name:"delete",onClick:M=>B(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":s(()=>[a(A,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:h.value,"onUpdate:modelValue":r[0]||(r[0]=e=>h.value=e),placeholder:"Search",class:"q-mr-md"},{append:s(()=>[a(C,{name:"search"})]),_:1},8,["modelValue"]),a(f,{onClick:U,round:"",dense:"",color:"primary",size:"small",icon:"add"}),a(f,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:r[1]||(r[1]=e=>J(m(V)))})]),_:1},8,["rows","columns","filter"])),a(K,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value=e),persistent:""},{default:s(()=>[a(H,{style:{width:"500px"}},{default:s(()=>[a(T,null,{default:s(()=>[x("div",se,c(g.value),1)]),_:1}),a(T,{class:"q-pt-none"},{default:s(()=>[a(A,{outlined:"",dense:"",label:"Name",modelValue:l.value,"onUpdate:modelValue":r[2]||(r[2]=e=>l.value=e)},null,8,["modelValue"])]),_:1}),x("div",le,[x("small",null,c(u.value),1)]),a(P,{align:"right"},{default:s(()=>[a(f,{flat:"",label:"Cancel",color:"red",onClick:F}),a(G),l.value&&!p.value?(i(),Q(f,{key:0,flat:"",label:"Add Department",color:"primary",onClick:I})):E("",!0),l.value&&p.value?(i(),Q(f,{key:1,flat:"",label:"Edit Department",color:"primary",onClick:L})):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{De as default};
