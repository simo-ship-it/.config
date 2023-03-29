"use strict";var O=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var o in e)O(t,o,{get:e[o],enumerable:!0})},K=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of q(e))!Y.call(t,n)&&n!==o&&O(t,n,{get:()=>e[n],enumerable:!(a=G(e,n))||a.enumerable});return t};var Q=t=>K(O({},"__esModule",{value:!0}),t);var et={};z(et,{default:()=>j});module.exports=Q(et);var s=require("@raycast/api"),V=require("react");var y=require("@raycast/api"),$=require("react");var f=t=>{let e=Math.floor(t/3600),o=String(Math.floor(t%3600/60)).padStart(2,"0"),a=String(Math.floor(t%60)).padStart(2,"0");return`${e}:${o}:${a}`},A=t=>{let e=new Date(t),o=[e.getFullYear().toString(),e.getMonth().toString().padStart(2,"0"),e.getDate().toString().padStart(2,"0")],a=[e.getHours(),e.getMinutes(),e.getSeconds()].map(T=>T.toString().padStart(2,"0")),n=o.join("-"),g=a.join(":");return`${n} ${g}`},h=t=>(t.d1=t.d1=="----"?void 0:t.d1,t.d2=t.d2=="----"?void 0:t.d2,Math.round((t.d1?new Date(t.d1):new Date).getTime()-(t.d2?new Date(t.d2):new Date).getTime())/1e3);var u=require("@raycast/api"),W=require("child_process"),b=require("crypto"),r=require("fs"),F=require("path");var i=u.environment.supportPath+"/raycast-stopwatches.json",w=()=>{(0,r.existsSync)(i)||(0,r.writeFileSync)(i,JSON.stringify([]))},v=(t="")=>({name:t,swID:(0,b.randomUUID)(),timeStarted:new Date,timeElapsed:-99,lastPaused:"----",pauseElapsed:0}),X=t=>(t.map(e=>{if(e.lastPaused!="----")e.timeElapsed=Math.max(0,h({d1:e.lastPaused,d2:e.timeStarted})-e.pauseElapsed);else{let o=Math.max(0,h({d2:e.timeStarted}));e.timeElapsed=o-e.pauseElapsed}}),t),R=()=>{w();let t=JSON.parse((0,r.readFileSync)(i).toString()),e=Z(t),o=X(e);return o.sort((a,n)=>a.timeElapsed-n.timeElapsed),o},U=async(t="Untitled")=>{w();let e=JSON.parse((0,r.readFileSync)(i).toString()),o=v(t);e.push(o),(0,r.writeFileSync)(i,JSON.stringify(e)),(0,u.popToRoot)(),await(0,u.showHUD)(`Stopwatch "${t}" started! \u{1F389}`)},k=t=>{w();let e=JSON.parse((0,r.readFileSync)(i).toString());e=e.map(o=>o.swID==t?{...o,lastPaused:new Date}:o),(0,r.writeFileSync)(i,JSON.stringify(e))},L=t=>{w();let e=JSON.parse((0,r.readFileSync)(i).toString());e=e.map(o=>o.swID==t?{...o,pauseElapsed:o.pauseElapsed+h({d2:o.lastPaused}),lastPaused:"----"}:o),(0,r.writeFileSync)(i,JSON.stringify(e))},M=t=>{w();let e=JSON.parse((0,r.readFileSync)(i).toString());e=e.filter(o=>o.swID!==t),(0,r.writeFileSync)(i,JSON.stringify(e))},Z=t=>((0,r.readdirSync)(u.environment.supportPath).forEach(o=>{if((0,F.extname)(o)==".stopwatch"){let a=v((0,r.readFileSync)(u.environment.supportPath+"/"+o).toString()),n=o.replace(/__/g,":").replace(".stopwatch","");a.timeStarted=new Date(n),a.timeElapsed=Math.max(0,h({})),(0,W.execSync)(`rm "${u.environment.supportPath}/${o}"`),t.push(a)}}),(0,r.writeFileSync)(i,JSON.stringify(t)),t),x=(t,e)=>{w();let a=JSON.parse((0,r.readFileSync)(i,"utf8")).map(n=>n.swID==t?{...n,name:e}:n);(0,r.writeFileSync)(i,JSON.stringify(a))};function N(){let[t,e]=(0,$.useState)(void 0),[o,a]=(0,$.useState)(t===void 0),n=()=>{let l=R();e(l),a(!1)};return{stopwatches:t,isLoading:o,refreshSWes:n,handleStartSW:()=>{U(),n()},handleStopSW:l=>{(0,y.getPreferenceValues)().copyOnSwStop&&y.Clipboard.copy(f(l.timeElapsed)),M(l.swID),n()},handlePauseSW:l=>{k(l),n()},handleUnpauseSW:l=>{L(l),n()}}}var c=require("@raycast/api");var S=require("@raycast/api");var d=require("fs");var D=S.environment.supportPath+"/customTimers.json";function _(t,e){let o=S.environment.supportPath+"/"+t;(0,d.writeFileSync)(o,e)}function tt(){(0,d.existsSync)(D)||(0,d.writeFileSync)(D,JSON.stringify({}))}function H(t,e){tt();let o=JSON.parse((0,d.readFileSync)(D,"utf8"));o[t].name=e,(0,d.writeFileSync)(D,JSON.stringify(o))}var P=require("react/jsx-runtime");function C(t){let e=o=>{if(o===""||o===t.currentName)new c.Toast({style:c.Toast.Style.Failure,title:"No new name given!"}).show();else{switch((0,c.popToRoot)(),t.originalFile){case"customTimer":H(t.ctID?t.ctID:"-99",o);break;case"stopwatch":x(t.ctID?t.ctID:"-99",o);break;default:_(t.originalFile,o);break}new c.Toast({style:c.Toast.Style.Success,title:`Renamed to ${o}!`}).show()}};return(0,P.jsx)(c.Form,{actions:(0,P.jsx)(c.ActionPanel,{children:(0,P.jsx)(c.Action.SubmitForm,{title:"Rename",onSubmit:o=>e(o.newName)})}),children:(0,P.jsx)(c.Form.TextField,{id:"newName",title:"New name",placeholder:t.currentName})})}var m=require("react/jsx-runtime");function j(){let{stopwatches:t,isLoading:e,refreshSWes:o,handleStartSW:a,handleStopSW:n,handlePauseSW:g,handleUnpauseSW:T}=N(),{push:I}=(0,s.useNavigation)();(0,V.useEffect)(()=>{o(),setInterval(()=>{o()},1e3)},[]);let E={tag:{value:"Paused",color:s.Color.Red}},l={tag:{value:"Running",color:s.Color.Green}},J={source:s.Icon.Clock,tintColor:s.Color.Red},B={source:s.Icon.Clock,tintColor:s.Color.Green};return(0,m.jsx)(s.List,{isLoading:e,children:(0,m.jsxs)(s.List.Section,{title:t?.length!==0&&t!=null?"Currently Running":"No Stopwatches Running",children:[t?.map(p=>(0,m.jsx)(s.List.Item,{icon:p.lastPaused=="----"?B:J,title:p.name,subtitle:f(p.timeElapsed)+" elapsed",accessories:[{text:"Started at "+A(p.timeStarted)},p.lastPaused=="----"?l:E],actions:(0,m.jsxs)(s.ActionPanel,{children:[p.lastPaused=="----"?(0,m.jsx)(s.Action,{title:"Pause Stopwatch",onAction:()=>g(p.swID)}):(0,m.jsx)(s.Action,{title:"Unpause Stopwatch",onAction:()=>T(p.swID)}),(0,m.jsx)(s.Action,{title:"Rename Stopwatch",onAction:()=>I((0,m.jsx)(C,{currentName:p.name,originalFile:"stopwatch",ctID:p.swID}))}),(0,m.jsx)(s.Action,{title:"Copy Current Time",shortcut:{modifiers:["opt"],key:"c"},onAction:()=>s.Clipboard.copy(f(p.timeElapsed))}),(0,m.jsx)(s.Action,{title:"Stop Stopwatch",shortcut:{modifiers:["ctrl"],key:"x"},onAction:()=>n(p)})]})},p.swID)),(0,m.jsx)(s.List.Item,{icon:s.Icon.Clock,title:"Create a new stopwatch",subtitle:"Press Enter to start a stopwatch",actions:(0,m.jsx)(s.ActionPanel,{children:(0,m.jsx)(s.Action,{title:"Start Stopwatch",onAction:()=>a()})})},0)]})})}0&&(module.exports={});