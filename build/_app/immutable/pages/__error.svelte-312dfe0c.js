import{S as V,i as g,s as w,a as E,l as d,r as k,a7 as A,h as f,c as b,m as h,n as m,u as q,p as C,b as p,V as _,v as S,E as y}from"../chunks/index-e0faf73a.js";function j(a){let t,s;return{c(){t=d("h1"),s=k(a[0])},l(e){t=h(e,"H1",{});var n=m(t);s=q(n,a[0]),n.forEach(f)},m(e,n){p(e,t,n),_(t,s)},p(e,n){n&1&&S(s,e[0])},d(e){e&&f(t)}}}function D(a){let t,s,e,n,i,c;document.title=t="Error "+(a[0]?` - ${a[0]}`:"");let r=a[0]&&j(a);return{c(){s=E(),e=d("div"),r&&r.c(),n=E(),i=d("p"),c=k(a[1]),this.h()},l(l){A('[data-svelte="svelte-9cjafh"]',document.head).forEach(f),s=b(l),e=h(l,"DIV",{class:!0});var u=m(e);r&&r.l(u),n=b(u),i=h(u,"P",{});var v=m(i);c=q(v,a[1]),v.forEach(f),u.forEach(f),this.h()},h(){C(e,"class","wrapper svelte-1ldjxpt")},m(l,o){p(l,s,o),p(l,e,o),r&&r.m(e,null),_(e,n),_(e,i),_(i,c)},p(l,[o]){o&1&&t!==(t="Error "+(l[0]?` - ${l[0]}`:""))&&(document.title=t),l[0]?r?r.p(l,o):(r=j(l),r.c(),r.m(e,n)):r&&(r.d(1),r=null),o&2&&S(c,l[1])},i:y,o:y,d(l){l&&f(s),l&&f(e),r&&r.d()}}}function P({error:a,status:t}){var e;const s=((e=a==null?void 0:a.message)==null?void 0:e.trim())||"An unexpected error occurred.";return{props:{status:t,error:s.endsWith(".")?s:`${s}.`}}}function H(a,t,s){let{status:e}=t,{error:n}=t;return a.$$set=i=>{"status"in i&&s(0,e=i.status),"error"in i&&s(1,n=i.error)},[e,n]}class W extends V{constructor(t){super(),g(this,t,H,D,w,{status:0,error:1})}}export{W as default,P as load};
