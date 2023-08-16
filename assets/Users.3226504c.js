import{Q as h,a as ve}from"./QTr.62d54393.js";import{Q as F,a as pe}from"./QToolbar.43a05758.js";import{bA as fe,c as Z,h as J,bD as L,cp as _e,c1 as ge,r,aJ as u,a6 as d,u as x,Q as p,a4 as k,bb as o,d as t,ad as w,F as ee,aP as ae,a5 as A,bE as B,a7 as U}from"./index.dd34d1b3.js";import{Q as $}from"./QInput.4b988aaf.js";import{Q as be}from"./QBtnGroup.13dd3f47.js";import{u as ye,a as he,b as ke,Q as we,c as le,d as te}from"./QSpace.de21bdc2.js";import{Q as Ue,b as Ve}from"./QCard.0409bdf8.js";import{o as Qe,n as Ce}from"./rtl.bfa9a4fe.js";import{e as qe,a as xe}from"./excel.5d19a2ad.js";import{a as Ae}from"./use-quasar.a3a7a307.js";import{a as Se,u as M}from"./index.258a485c.js";import{g as De,p as Y}from"./module_calls.eba83624.js";import{u as Ee}from"./role-store.6f3a15f3.js";import{u as Ne}from"./department-store.abdf93fa.js";import"./QSeparator.4ba7cdcd.js";import"./helpers.d6d0b5ed.js";var Te=fe({name:"QToggle",props:{...ye,icon:String,iconColor:String},emits:he,setup(s){function n(_,V){const I=Z(()=>(_.value===!0?s.checkedIcon:V.value===!0?s.indeterminateIcon:s.uncheckedIcon)||s.icon),z=Z(()=>_.value===!0?s.iconColor:null);return()=>[J("div",{class:"q-toggle__track"}),J("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},I.value!==void 0?[J(L,{name:I.value,color:z.value})]:void 0)]}return ke("toggle",n)}});const se=[{name:"name",required:!0,label:"Name",align:"left",field:s=>s.name,format:s=>`${s}`,sortable:!0},{name:"email",align:"center",label:"Email",field:"email",sortable:!0},{name:"roles",align:"center",label:"Roles",field:"roles",sortable:!0},{name:"departments",align:"center",label:"Departments",field:"departments",sortable:!0},{name:"active",align:"center",label:"Status",field:"active",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}],S=_e(),f=S==null?void 0:S.token,Be=ge("users",{state:()=>({users:[]}),actions:{async fetchUsers(){if(f){const s=await De("users",f);return this.users=s==null?void 0:s.data,this.users}},async createUser(s){var n;if(s.user_uuid=(n=S==null?void 0:S.user)==null?void 0:n.uuid,f)return await Y(s,"users",f)},async updateUser(s){if(f)return await Y(s,"update_user",f)},async deleteUser(s){if(f)return await Y(s,"delete_user",f)}}});const $e={class:"q-pa-md"},Ie={key:0},Re={key:1},Pe=U("br",null,null,-1),Fe={key:0},Le=U("small",null,"No Role Assigned",-1),ze=[Le],Oe=U("br",null,null,-1),Ge={key:0},Je=U("small",null,"No Department Assigned",-1),Me=[Je],Ye={class:"text-h6"},je={class:"text-center error_msg"},ma={__name:"Users",setup(s){const n=Ae(),_=Se(),V=Be(),I=Ee(),z=Ne(),D=r(!1),E=r(!1),g=r(!1),O=r(""),R=r(""),i=r(""),m=r(""),Q=r(""),C=r(!0),c=r(""),b=r([]),q=r(""),j=r(""),P=r(""),H=r([]),K=r([]),{data:W,isLoading:oe,isError:X}=M("users",()=>V.fetchUsers());M("roles",()=>I.fetchRoles(),{onSuccess:l=>{H.value=l.map(a=>({name:a.name,uuid:a.uuid}))}}),M("departments",()=>z.fetchDepartments(),{onSuccess:l=>{K.value=l.map(a=>({name:a.name,uuid:a.uuid}))}});const re=async l=>{if(confirm(`Continue with the operation. Delete ${l.name} ?`)){const e=await V.deleteUser({uuid:l.uuid});e.status==="success"?(_.refetchQueries("users"),v(e.message,"green","top")):v("There was an error","red","top-right")}},ue=()=>{R.value="Add New User",D.value=!0,E.value=!1},ne=l=>{C.value=!!l.active,E.value=!0;const a=l.departments.map(e=>e.name)[0];j.value=l.uuid,i.value=l.name,Q.value=l.email,m.value=l.phone,c.value=l.password,q.value=l.departments.find(e=>e.name===a),b.value=l.roles.map(e=>({name:e.name,uuid:e.uuid})),R.value=`Edit ${l.name}`,D.value=!0},de=async()=>{g.value=!0;const l={name:i.value.trim(),active:C.value?1:0,email:Q.value.trim(),phone:m.value.trim(),role_uuids:b.value.map(a=>a.uuid),department_uuid:q.value.uuid,password:c.value.trim()};if(l.name&&l.email&&l.password){const a=await V.createUser(l);console.log(a),a.status==="success"?(_.refetchQueries("users"),g.value=!1,G(),v(a.message,"green","top")):(P.value=a.message,g.value=!1,v(a.message,"red","top-right"))}else g.value=!1,P.value="All fields are required!",v("All fields are required!","red","top-right")},ie=async()=>{const l={user_uuid:j.value,name:i.value.trim(),active:C.value?1:0,email:Q.value.trim(),phone:m.value?m.value.trim():m.value,role_uuids:b.value.map(a=>a.uuid),department_uuid:q.value.uuid,password:c.value?c.value.trim():c.value};if(l.name&&l.email&&b.value.length>0){const a=await V.updateUser(l);a.status==="success"?(_.refetchQueries("users"),G(),v(a.message,"green","top")):v("There was an error","red","top-right")}else P.value="All fields are required!",v("All fields are required!","red","top-right")},me=()=>G(),v=(l,a,e)=>{n.notify({message:l,color:a,position:e})},G=()=>{Q.value="",i.value="",m.value="",b.value=[],q.value="",c.value="",D.value=!1,E.value=!1,R.value="",g.value=!1},ce=l=>{const a=l.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));qe(a,se,xe,n,"UsersData")};return(l,a)=>(u(),d("div",$e,[x(oe)?(u(),d("div",Ie,"Loading users...")):x(X)?(u(),d("div",Re,"An error has occurred: "+p(x(X)),1)):(u(),k(we,{key:2,title:"Users",rows:x(W),columns:x(se),separator:"cell","row-key":"name",filter:O.value,dense:""},{body:o(e=>[t(ve,{props:e},{default:o(()=>[t(h,{key:"name",props:e},{default:o(()=>[w(p(e.row.name),1)]),_:2},1032,["props"]),t(h,{key:"email",props:e},{default:o(()=>[w(p(e.row.email),1)]),_:2},1032,["props"]),t(h,{key:"roles",props:e},{default:o(()=>{var y,N;return[(u(!0),d(ee,null,ae(e.row.roles,T=>(u(),d("div",{key:T.uuid},[t(F,{color:"blue"},{default:o(()=>[w(p(T.name),1)]),_:2},1024),Pe]))),128)),((N=(y=e.row)==null?void 0:y.roles)==null?void 0:N.length)===0?(u(),d("div",Fe,ze)):A("",!0)]}),_:2},1032,["props"]),t(h,{key:"departments",props:e},{default:o(()=>{var y,N;return[(u(!0),d(ee,null,ae(e.row.departments,T=>(u(),d("div",{key:T.uuid},[t(F,{color:"green"},{default:o(()=>[w(p(T.name),1)]),_:2},1024),Oe]))),128)),((N=(y=e.row)==null?void 0:y.departments)==null?void 0:N.length)===0?(u(),d("div",Ge,Me)):A("",!0)]}),_:2},1032,["props"]),t(h,{key:"active",props:e},{default:o(()=>[e.row.active?(u(),k(F,{key:0},{default:o(()=>[w(" Enabled ")]),_:1})):(u(),k(F,{key:1,color:"red"},{default:o(()=>[w(" Disbled ")]),_:1}))]),_:2},1032,["props"]),t(h,{key:"created_at",props:e},{default:o(()=>[w(p(e.row.created_at),1)]),_:2},1032,["props"]),t(h,{key:"actions",props:e},{default:o(()=>[e.row.name!=="Administrator"?(u(),k(L,{key:0,color:"blue",name:"edit",onClick:y=>ne(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"])):A("",!0),e.row.name!=="Administrator"?(u(),k(L,{key:1,color:"red",name:"delete",onClick:y=>re(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])):A("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":o(()=>[t($,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:O.value,"onUpdate:modelValue":a[0]||(a[0]=e=>O.value=e),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[t(L,{name:"search"})]),_:1},8,["modelValue"]),t(be,null,{default:o(()=>[t(B,{onClick:ue,dense:"",color:"primary",icon:"add",label:"Add"}),t(B,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>ce(x(W)))})]),_:1})]),_:1},8,["rows","columns","filter"])),t(Qe,{modelValue:D.value,"onUpdate:modelValue":a[9]||(a[9]=e=>D.value=e),persistent:""},{default:o(()=>[t(Ue,{style:{width:"500px"}},{default:o(()=>[t(pe,null,{default:o(()=>[U("div",Ye,p(R.value),1),t(le),t(Te,{modelValue:C.value,"onUpdate:modelValue":a[2]||(a[2]=e=>C.value=e),"checked-icon":"check",color:"green","unchecked-icon":"clear",label:`${C.value?"User active.":"User disabled."}`},null,8,["modelValue","label"])]),_:1}),t(Ve,{class:"q-pt-none"},{default:o(()=>[t($,{class:"q-mb-sm",outlined:"",dense:"",label:"Name",modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=e=>i.value=e)},null,8,["modelValue"]),t($,{class:"q-mb-sm",outlined:"",dense:"",label:"Phone (Optional)",modelValue:m.value,"onUpdate:modelValue":a[4]||(a[4]=e=>m.value=e)},null,8,["modelValue"]),t($,{class:"q-mb-sm",outlined:"",dense:"",label:"Email",modelValue:Q.value,"onUpdate:modelValue":a[5]||(a[5]=e=>Q.value=e),type:"email"},null,8,["modelValue"]),t(te,{dense:"",multiple:"","use-chips":"",hint:"You can assign a user multiple roles.",outlined:"",modelValue:b.value,"onUpdate:modelValue":a[6]||(a[6]=e=>b.value=e),options:H.value,"option-value":"uuid","option-label":"name",label:"Select Role",class:"q-mb-sm"},null,8,["modelValue","options"]),t(te,{dense:"",outlined:"",modelValue:q.value,"onUpdate:modelValue":a[7]||(a[7]=e=>q.value=e),options:K.value,"option-value":"uuid","option-label":"name",label:"Select Department",class:"q-mb-sm"},null,8,["modelValue","options"]),t($,{class:"q-mb-sm",outlined:"",dense:"",label:"Password",modelValue:c.value,"onUpdate:modelValue":a[8]||(a[8]=e=>c.value=e),type:"password"},null,8,["modelValue"])]),_:1}),U("div",je,[U("small",null,p(P.value),1)]),t(Ce,{align:"right"},{default:o(()=>[t(B,{flat:"",label:"Cancel",color:"red",onClick:me}),t(le),i.value&&!E.value?(u(),k(B,{key:0,flat:"",label:"Add User",color:"primary",onClick:de,loading:g.value},null,8,["loading"])):A("",!0),i.value&&E.value?(u(),k(B,{key:1,flat:"",label:"Edit User",color:"primary",onClick:ie,loading:g.value},null,8,["loading"])):A("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{ma as default};
