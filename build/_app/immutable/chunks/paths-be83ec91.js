import{E as b,s as m,F as q,G as w,H as z}from"./index-e0faf73a.js";const o=[];function A(s,i){return{subscribe:x(s,i).subscribe}}function x(s,i=b){let u;const n=new Set;function a(t){if(m(s,t)&&(s=t,u)){const r=!o.length;for(const e of n)e[1](),o.push(e,s);if(r){for(let e=0;e<o.length;e+=2)o[e][0](o[e+1]);o.length=0}}}function l(t){a(t(s))}function f(t,r=b){const e=[t,r];return n.add(e),n.size===1&&(u=i(a)||b),t(s),()=>{n.delete(e),n.size===0&&(u(),u=null)}}return{set:a,update:l,subscribe:f}}function G(s,i,u){const n=!Array.isArray(s),a=n?[s]:s,l=i.length<2;return A(u,f=>{let t=!1;const r=[];let e=0,d=b;const _=()=>{if(e)return;d();const c=i(n?r[0]:r,f);l?f(c):d=z(c)?c:b},h=a.map((c,p)=>q(c,y=>{r[p]=y,e&=~(1<<p),t&&_()},()=>{e|=1<<p}));return t=!0,_(),function(){w(h),d()}})}let g="",E="";function H(s){g=s.base,E=s.assets||g}export{E as a,g as b,G as d,H as s,x as w};
