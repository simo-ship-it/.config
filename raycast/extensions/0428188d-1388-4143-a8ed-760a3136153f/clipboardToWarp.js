"use strict";var n=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var d=(r,t)=>{for(var o in t)n(r,o,{get:t[o],enumerable:!0})},w=(r,t,o,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of l(t))!m.call(r,s)&&s!==o&&n(r,s,{get:()=>t[s],enumerable:!(a=i(t,s))||a.enumerable});return r};var u=r=>w(n({},"__esModule",{value:!0}),r);var L={};d(L,{default:()=>y});module.exports=u(L);var e=require("@raycast/api");var c=require("node:child_process");async function p(r){if(process.platform!=="darwin")throw new Error("macOS only");let t=process.env.LC_ALL;delete process.env.LC_ALL;let{stdout:o}=(0,c.spawnSync)("osascript",["-e",r]);return process.env.LC_ALL=t,o.toString()}var y=async()=>{let t=`
      set command to "open -a /Applications/Warp.app " & "${await e.Clipboard.readText()}"
      do shell script command
  `;try{let o=await p(t);await(0,e.showToast)(e.Toast.Style.Success,"Done",o)}catch{await(0,e.showToast)(e.Toast.Style.Failure,"Something went wrong")}};0&&(module.exports={});
