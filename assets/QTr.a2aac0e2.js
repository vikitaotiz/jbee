import{bA as u,c,h as a,bB as s,g as v}from"./index.8b486ad5.js";var i=u({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(t,{slots:e}){const o=v(),n=c(()=>"q-td"+(t.autoWidth===!0?" q-table--col-auto-width":"")+(t.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(t.props===void 0)return a("td",{class:n.value},s(e.default));const d=o.vnode.key,r=(t.props.colsMap!==void 0?t.props.colsMap[d]:null)||t.props.col;if(r===void 0)return;const{row:l}=t.props;return a("td",{class:n.value+r.__tdClass(l),style:r.__tdStyle(l)},s(e.default))}}}),h=u({name:"QTr",props:{props:Object,noHover:Boolean},setup(t,{slots:e}){const o=c(()=>"q-tr"+(t.props===void 0||t.props.header===!0?"":" "+t.props.__trClass)+(t.noHover===!0?" q-tr--no-hover":""));return()=>a("tr",{class:o.value},s(e.default))}});export{i as Q,h as a};
