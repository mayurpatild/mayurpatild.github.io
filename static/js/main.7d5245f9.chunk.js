(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return l}));const a={desktop:2080,laptop:1680,tablet:1024,mobile:696,mobileS:400},r=e=>`${e}px`,c=e=>e/16+"rem",i=e=>Number(e.replace("ms","")),o=e=>`${e}ms`,l=e=>e.split(" ").map((e=>Number(e)/255))},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return p}));var a=n(0),r=n(17);var c=function(){return Object(a.useContext)(r.a)};var i=function(e=""){const[t,n]=Object(a.useState)(e),[r,c]=Object(a.useState)(),[i,o]=Object(a.useState)(!1);return{value:t,error:r,onChange:e=>{n(e.target.value),o(!0),r&&e.target.checkValidity()&&c(null)},onBlur:e=>{i&&e.target.checkValidity()},onInvalid:e=>{e.preventDefault(),c(e.target.validationMessage)}}};let o=0;var l=()=>{const[e,t]=Object(a.useState)(null);return Object(a.useEffect)((()=>t(++o)),[]),e};var s=function(e,t,n){const r=Object(a.useRef)();Object(a.useEffect)((()=>{r.current=e})),Object(a.useEffect)((()=>{if(null!==t){let e=setInterval((function(){r.current()}),t);return()=>clearInterval(e)}}),[t,n])};var u=function(e,t,n={},r=!0){const[c,i]=Object(a.useState)(!1),[o,l]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{if(!(null===e||void 0===e?void 0:e.current))return;const a=new IntersectionObserver((([e])=>{const{isIntersecting:n,target:r}=e;i(n),n&&t&&(a.unobserve(r),l(!0))}),n);return!o&&r&&a.observe(e.current),()=>a.disconnect()}),[e,t,n,o,r]),c};var h=function(e,t){const[n,r]=Object(a.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return[n,t=>{try{const a=t instanceof Function?t(n):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error(a)}}]};var d=function(e,t=!0){const[n,r]=Object(a.useState)(0),c=b();return Object(a.useEffect)((()=>{let n=!1,a=null;const i=()=>{const{innerHeight:a}=window,c=Math.max(0,window.scrollY)*e,i=Math.max(-a,Math.min(a,c));r(t?i:c),n=!1},o=()=>{n||(n=!0,a=requestAnimationFrame(i))};return c||window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o),cancelAnimationFrame(a)}}),[t,e,c]),n};var b=function(){const[e,t]=Object(a.useState)((()=>{var e,t;return null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches}));return Object(a.useEffect)((()=>{var e,n;const a=null===(e=(n=window).matchMedia)||void 0===e?void 0:e.call(n,"(prefers-reduced-motion: reduce)"),r=()=>{t(null===a||void 0===a?void 0:a.matches)};return null===a||void 0===a||a.addListener(r),r(),()=>{null===a||void 0===a||a.removeListener(r)}}),[]),e};var f=function(e){const t=Object(a.useRef)();return Object(a.useEffect)((()=>{t.current=e}),[e]),t.current};var m=function(){return Object(a.useContext)(r.b)};var j=function(){const{status:e}=m(),t=f(e),n=b();Object(a.useEffect)((()=>{("entering"===t&&"entered"===e||n&&"entered"===e)&&(window.scrollTo(0,0),document.getElementById("MainContent").focus())}),[n,t,e])};var p=function(){const e="object"===typeof window,t=navigator.userAgent.match(/iphone|ipod|ipad/i),n=Object(a.useRef)((()=>({w:0,h:0}))),r=Object(a.useRef)((()=>Math.abs(window.orientation))),c=Object(a.useCallback)((()=>{let e=document.createElement("div");e.style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),r.current.w=90===n.current?e.offsetHeight:window.innerWidth,r.current.h=90===n.current?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null}),[]),i=Object(a.useCallback)((()=>e?t?(c(),90!==Math.abs(window.orientation)?r.current.h:r.current.w):window.innerHeight:0),[c,e,t]),o=Object(a.useCallback)((()=>({width:e?window.innerWidth:0,height:i()})),[i,e]),[l,s]=Object(a.useState)((()=>o()));return Object(a.useEffect)((()=>{const e=()=>{s(o())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[o,e]),l}},function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(2);const r="system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",c={base:{rgbBlack:"0 0 0",rgbWhite:"255 255 255",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:r,fontStack:`Gotham, ${r}`,monoFontStack:"SFMono Regular, Roboto Mono, Consolas, Liberation Mono, Menlo, Courier, monospace",japaneseFontStack:"\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30e1\u30a4\u30ea\u30aa, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:Object(a.e)(140),fontSizeH1:Object(a.e)(100),fontSizeH2:Object(a.e)(58),fontSizeH3:Object(a.e)(38),fontSizeH4:Object(a.e)(28),fontSizeBodyXL:Object(a.e)(22),fontSizeBodyL:Object(a.e)(20),fontSizeBodyM:Object(a.e)(18),fontSizeBodyS:Object(a.e)(16),fontSizeBodyXS:Object(a.e)(14),lineHeightTitle:"1.1",lineHeightBody:"1.5",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px"},desktop:{fontSizeH0:Object(a.e)(120),fontSizeH1:Object(a.e)(80)},laptop:{maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:Object(a.e)(100),fontSizeH1:Object(a.e)(70),fontSizeH2:Object(a.e)(52),fontSizeH3:Object(a.e)(36),fontSizeH4:Object(a.e)(26)},tablet:{fontSizeH0:Object(a.e)(80),fontSizeH1:Object(a.e)(60),fontSizeH2:Object(a.e)(48),fontSizeH3:Object(a.e)(32),fontSizeH4:Object(a.e)(24)},mobile:{spaceOuter:"24px",fontSizeH0:Object(a.e)(56),fontSizeH1:Object(a.e)(40),fontSizeH2:Object(a.e)(34),fontSizeH3:Object(a.e)(28),fontSizeH4:Object(a.e)(22),fontSizeBodyL:Object(a.e)(18),fontSizeBodyM:Object(a.e)(16),fontSizeBodyS:Object(a.e)(14)},mobileS:{spaceOuter:"16px",fontSizeH0:Object(a.e)(42),fontSizeH1:Object(a.e)(38),fontSizeH2:Object(a.e)(28),fontSizeH3:Object(a.e)(24),fontSizeH4:Object(a.e)(20)}},i={dark:{themeId:"dark",rgbBackground:"17 17 17",rgbBackgroundLight:"26 26 26",rgbPrimary:"0 229 255",rgbAccent:"0 229 255",rgbText:"255 255 255",rgbError:"255 0 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.8)",colorTextLight:"rgb(var(--rgbText) / 0.6)"},light:{themeId:"light",rgbBackground:"242 242 242",rgbBackgroundLight:"255 255 255",rgbPrimary:"0 0 0",rgbAccent:"0 229 255",rgbText:"0 0 0",rgbError:"210 14 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.7)",colorTextLight:"rgb(var(--rgbText) / 0.6)"}}},,,,function(e,t,n){"use strict";var a,r=n(4),c=n.n(r),i=n(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l({title:e,titleId:t,...n},r){return i.createElement("svg",o({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,a||(a=i.createElement("path",{d:"M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"})))}const s=i.forwardRef(l);var u;n.p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d({title:e,titleId:t,...n},a){return i.createElement("svg",h({enableBackground:"new 0 0 512 512",id:"Layer_1",viewBox:"0 0 512 512",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,u||(u=i.createElement("g",null,i.createElement("path",{d:"M505,257c0,35.8,0.1,71.6,0,107.5c-0.2,52-24.4,90.5-67.6,117.7C412.1,498,384,505,354.2,505   c-65.2,0-130.3,0.3-195.5-0.1c-45.3-0.3-84.3-16.3-115.2-49.9c-19.1-20.8-30.5-45.3-33.8-73.6c-0.7-6-0.8-11.9-0.8-17.9   c0-71.3-0.1-142.6,0-213.9C9.2,97.5,33.4,59,76.6,31.8C102.1,15.9,130.3,9,160.3,9c65,0,130-0.3,195,0.1   c45.5,0.3,84.6,16.4,115.5,50.2c18.9,20.7,30.2,45.2,33.4,73.2c1.3,11,0.7,22,0.8,32.9C505.1,196,505,226.5,505,257z M46,257   c0,36.7-0.1,73.3,0,110c0.1,25.2,9.3,46.9,26.5,64.9c23.1,24.1,51.9,35.8,85,36c65.7,0.4,131.3,0.1,197,0.1   c21.2,0,41.4-4.6,59.8-15.2c34.4-19.7,53.8-48.7,53.8-89.3c0-72.2,0-144.3,0-216.5c0-25-9.1-46.6-26.2-64.5   c-22.9-24.2-51.8-36.1-84.8-36.3C290.7,45.7,224.4,46,158,46c-20.7,0-40.3,4.9-58.3,15.1C65.4,80.9,45.9,109.9,46,150.5   C46,186,46,221.5,46,257z",fill:"#A7A7A7"}),i.createElement("path",{d:"M257.3,363c-64.6,0-116.4-51.6-116.3-116c0.1-62.7,52.6-114.1,116.7-114c64.4,0,116.4,51.7,116.3,115.5   C373.9,311.7,321.6,363,257.3,363z M257.3,326c43.9,0,79.7-34.9,79.7-77.8c0-43.1-35.5-78.2-79.3-78.2c-43.9,0-79.7,34.9-79.7,77.8   C178,290.9,213.5,326,257.3,326z",fill:"#A7A7A7"}),i.createElement("path",{d:"M363,123.6c0-14.2,10.9-25.6,24.5-25.6c13.6,0,24.5,11.5,24.5,25.6c0,13.9-10.9,25.3-24.3,25.4   C374.1,149.1,363,137.8,363,123.6z",fill:"#A7A7A7"}))))}const b=i.forwardRef(d);var f,m;n.p;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p({title:e,titleId:t,...n},a){return i.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",height:800,width:1200,viewBox:"-204.79995 -341.33325 1774.9329 2047.9995",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,f||(f=i.createElement("path",{d:"M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373",fill:"#858b9b"})),m||(m=i.createElement("path",{d:"M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4",fill:"#fff"})))}const v=i.forwardRef(p);var g,O;n.p;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w({title:e,titleId:t,...n},a){return i.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",height:800,width:1200,viewBox:"-11.493675 -16.3118 99.61185 97.8708",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,g||(g=i.createElement("path",{d:"M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67"})),O||(O=i.createElement("path",{d:"M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"})))}const y=i.forwardRef(w);var _;n.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S({title:e,titleId:t,...n},a){return i.createElement("svg",z({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,_||(_=i.createElement("path",{fillRule:"evenodd",d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10A10 10 0 012 12zm14.86-6.09A7.726 7.726 0 0012 4.2c-.57 0-1.12.07-1.66.18.66.87 1.66 2.29 2.69 4.27 1.47-.65 2.81-1.51 3.83-2.74zM8.55 5c.55.65 1.63 2.06 2.79 4.25-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5zM4.2 11.89V12c0 1.91.7 3.66 1.84 5 .41-.61 1.12-1.54 2.15-2.5 1.08-.97 2.54-1.96 4.4-2.58-.15-.36-.3-.7-.45-1.03-2.78.87-5.52 1-7.08 1.01h-.01c-.34 0-.63 0-.85-.01zm12.22 6.53A57.5 57.5 0 0015 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 01-3.24 4.99zM12 19.8c-1.74 0-3.34-.57-4.64-1.54.28-.45.87-1.32 1.82-2.22.96-.93 2.32-1.89 4.05-2.46.59 1.67 1.13 3.57 1.54 5.71-.86.33-1.77.51-2.77.51zm6.13-12.62a7.823 7.823 0 011.66 4.45 15.32 15.32 0 00-3.19-.35h-.01c-.8 0-1.55.07-2.26.19l-.027-.067c-.16-.395-.313-.774-.493-1.143 1.58-.69 3.09-1.68 4.32-3.08z"})))}const E=i.forwardRef(S);var k;n.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H({title:e,titleId:t,...n},a){return i.createElement("svg",M({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,k||(k=i.createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"})))}const N=i.forwardRef(H);var C;n.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B({title:e,titleId:t,...n},a){return i.createElement("svg",L({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,C||(C=i.createElement("path",{d:"M12.875 3.516L12 1.932l-.875 1.584-9.393 17L.912 22h22.175l-.82-1.484-9.392-17zM19.697 20H4.303L12 6.068 19.697 20zM11 15v-4h2v4h-2zm0 3v-2h2v2h-2z"})))}const P=i.forwardRef(B);var I;n.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function $({title:e,titleId:t,...n},a){return i.createElement("svg",R({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,I||(I=i.createElement("path",{d:"M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"})))}const T=i.forwardRef($);var A;n.p;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W({title:e,titleId:t,...n},a){return i.createElement("svg",V({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,A||(A=i.createElement("path",{d:"M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z"})))}const F=i.forwardRef(W);var X;n.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function G({title:e,titleId:t,...n},a){return i.createElement("svg",U({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,X||(X=i.createElement("path",{d:"M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"})))}const J=i.forwardRef(G);var D;n.p;function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function K({title:e,titleId:t,...n},a){return i.createElement("svg",q({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,D||(D=i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))}const Y=i.forwardRef(K);var Q;n.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ee({title:e,titleId:t,...n},a){return i.createElement("svg",Z({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,Q||(Q=i.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"})))}const te=i.forwardRef(ee);var ne;n.p;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function re({title:e,titleId:t,...n},a){return i.createElement("svg",ae({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,ne||(ne=i.createElement("path",{d:"M8 5v14l11-7z"})))}const ce=i.forwardRef(re);var ie;n.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function le({title:e,titleId:t,...n},a){return i.createElement("svg",oe({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,ie||(ie=i.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})))}const se=i.forwardRef(le);var ue;n.p;function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function de({title:e,titleId:t,...n},a){return i.createElement("svg",he({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,ue||(ue=i.createElement("path",{fillRule:"evenodd",d:"M15 10a2 2 0 100 4 2 2 0 000-4zm-2 5.464A4 4 0 0017.646 9 4 4 0 0015 2H9a4 4 0 00-2.646 7 4.01 4.01 0 00-.818 1 4 4 0 00.818 5 3.977 3.977 0 00-.818 1A4 4 0 1013 18v-2.536zM11 16H9a2 2 0 102 2v-2zM9 8h2V4H9a2 2 0 100 4zm0 2a2 2 0 100 4h2v-4H9zm4-2V4h2a2 2 0 010 4h-2z"})))}const be=i.forwardRef(de);n.p,n(44);var fe=n(1);const me={twitter:s,instagram:b,linkedin:y,fb:v,dribbble:E,github:N,error:P,menu:T,arrowRight:F,chevronRight:J,close:Y,send:te,play:ce,pause:se,figma:be};t.a=({icon:e,style:t,className:n,...a})=>{const r=me[e];return Object(fe.jsx)(r,{"aria-hidden":!0,className:c()("icon",n),...a})}},,function(e,t,n){"use strict";function a(e){e.currentTarget.blur()}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return V})),n.d(t,"b",(function(){return W}));var a=n(0),r=n(15),c=n(5),i=n(56),o=n(57),l=n(4),s=n.n(l),u=n(20),h=n(9),d=(n(42),n(1));var b=function({highlight:e,className:t,...n}){const a=`monogram-clip-${Object(h.c)()}`;return Object(d.jsxs)("svg",{"aria-hidden":!0,className:s()("monogram",t),width:"46",height:"29",viewBox:"0 0 46 29",...n,children:[Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{id:a,children:Object(d.jsx)("path",{d:"M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z",transform:"rotate(179.997 24.4984 12.5)"})})}),Object(d.jsx)("rect",{clipPath:`url(#${a})`,width:"100%",height:"100%"}),e&&Object(d.jsx)("g",{clipPath:`url(#${a})`,children:Object(d.jsx)("rect",{className:"monogram__highlight",width:"100%",height:"100%"})})]})},f=n(14),m=n(22);n(50);var j=({menuOpen:e,...t})=>{const n=s()("nav-toggle__icon",{"nav-toggle__icon--open":e});return Object(d.jsx)(m.a,{iconOnly:!0,className:"nav-toggle","aria-label":"Menu","aria-expanded":e,...t,children:Object(d.jsxs)("div",{className:"nav-toggle__inner",children:[Object(d.jsx)(f.a,{className:s()(n,"nav-toggle__icon--menu"),open:e,icon:"menu"}),Object(d.jsx)(f.a,{className:s()(n,"nav-toggle__icon--close"),open:e,icon:"close"})]})})};n(51);var p=({isMobile:e,...t})=>{const{dispatch:n,theme:a}=Object(h.a)(),r="dark"===a,c=`theme-toggle-mask-${Object(h.c)()}`;return Object(d.jsx)(m.a,{iconOnly:!0,className:s()("theme-toggle",{"theme-toggle--mobile":e}),"aria-label":"Toggle theme",onClick:()=>{n({type:"toggleTheme"})},...t,children:Object(d.jsxs)("svg",{"aria-hidden":!0,className:"theme-toggle__svg",width:"38",height:"38",viewBox:"0 0 38 38",children:[Object(d.jsx)("defs",{children:Object(d.jsxs)("mask",{id:c,children:[Object(d.jsx)("circle",{className:s()("theme-toggle__circle","theme-toggle__circle--mask",{"theme-toggle__circle--dark":r}),cx:"19",cy:"19",r:"13"}),Object(d.jsx)("circle",{className:s()("theme-toggle__mask",{"theme-toggle__mask--dark":r}),cx:"25",cy:"14",r:"9"})]})}),Object(d.jsx)("path",{className:s()("theme-toggle__path",{"theme-toggle__path--dark":r}),d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),Object(d.jsx)("circle",{className:s()("theme-toggle__circle",{"theme-toggle__circle--dark":r}),mask:`url(#${c})`,cx:"19",cy:"19",r:"12"})]})})};const v=[{label:"Projects",pathname:"/",hash:"#project-1"},{label:"Details",pathname:"/",hash:"#details"},{label:"Contact",pathname:"/contact"}],g=[{label:"Linkedin",url:"https://linkedin.com/in/mayurpatild",icon:"linkedin"},{label:"Instagram",url:"https://www.instagram.com/exuberant.mp",icon:"instagram"},{label:"Github",url:"https://github.com/mayurpatild",icon:"github"}];var O=n(21),x=n(2),w=n(10),y=n(16);n(52);const _=()=>Object(d.jsx)("div",{className:"navbar__nav-icons",children:g.map((({label:e,url:t,icon:n})=>Object(d.jsx)("a",{className:"navbar__nav-icon-link","aria-label":e,href:t,onMouseUp:y.a,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(f.a,{className:"navbar__nav-icon",icon:n})},e)))});function z(e){const{menuOpen:t,dispatch:n}=Object(h.a)(),{location:c}=e,[i,l]=Object(a.useState)(),s=Object(h.l)(),u=Object(a.useRef)(),f=s.width<=x.a.mobile||s.height<=696,m=()=>{l(Math.random().toString(32).substr(2,8))},g=()=>{m(),t&&n({type:"toggleMenu"})};return Object(d.jsxs)("header",{className:"navbar",ref:u,children:[Object(d.jsx)(r.b,{className:"navbar__logo",to:{pathname:"/",hash:"#intro",state:i},"aria-label":"Mayur Patil, Designer",onClick:g,onMouseUp:y.a,children:Object(d.jsx)(b,{highlight:!0})}),Object(d.jsx)(j,{onClick:()=>n({type:"toggleMenu"}),menuOpen:t}),Object(d.jsxs)("nav",{className:"navbar__nav",children:[Object(d.jsx)("div",{className:"navbar__nav-list",children:v.map((({label:e,pathname:t,hash:n})=>Object(d.jsx)(r.c,{exact:!0,className:"navbar__nav-link",activeClassName:"navbar__nav-link--active",isActive:e=>(({match:e,hash:t=""})=>!!e&&`${e.url}${t}`===`${c.pathname}${c.hash}`)({match:e,hash:n}),onClick:m,to:{pathname:t,hash:n,state:i},onMouseUp:y.a,children:e},e)))}),Object(d.jsx)(_,{})]}),Object(d.jsx)(o.a,{mountOnEnter:!0,unmountOnExit:!0,in:t,timeout:{enter:0,exit:Object(x.b)(w.b.base.durationL)},onEnter:O.b,children:e=>Object(d.jsxs)("nav",{className:`navbar__mobile-nav navbar__mobile-nav--${e}`,children:[v.map((({label:t,pathname:n,hash:a},c)=>Object(d.jsx)(r.c,{className:`navbar__mobile-nav-link navbar__mobile-nav-link--${e}`,activeClassName:"navbar__mobile-nav-link--active",onClick:g,to:{pathname:n,hash:a,state:i},onMouseUp:y.a,style:{transitionDelay:Object(x.c)(Number(Object(x.b)(w.b.base.durationS))+50*c)},children:t},t))),Object(d.jsx)(_,{}),Object(d.jsx)(p,{isMobile:!0})]})}),!f&&Object(d.jsx)(p,{})]})}var S=Object(a.memo)(z),E=n(28),k=n(23),M=n(27);const H={menuOpen:!1,theme:"dark"};function N(e,t){const{type:n,value:a}=t;switch(n){case"setTheme":return{...e,theme:a};case"toggleTheme":{const t="dark"===e.theme?"light":"dark";return{...e,theme:t}}case"toggleMenu":return{...e,menuOpen:!e.menuOpen};default:throw new Error}}n(53),n(54);const C=Object(a.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(6)]).then(n.bind(null,115)))),L=Object(a.lazy)((()=>Promise.all([n.e(1),n.e(9)]).then(n.bind(null,121)))),B=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,117)))),P=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(15)]).then(n.bind(null,116)))),I=Object(a.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(18),n.e(8)]).then(n.bind(null,113)))),R=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,118)))),$=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(17)]).then(n.bind(null,114)))),T=Object(a.lazy)((()=>Promise.all([n.e(1),n.e(10)]).then(n.bind(null,122)))),A=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,119)))),V=Object(a.createContext)(),W=Object(a.createContext)(),F=()=>{const e=Object(c.f)(),{pathname:t}=e;return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(u.a,{children:Object(d.jsx)("link",{rel:"canonical",href:`https://mayurpatild.github.io/${t}`})}),Object(d.jsx)(k.a,{showOnFocus:!0,as:"a",className:"skip-to-main",href:"#MainContent",children:"Skip to main content"}),Object(d.jsx)(S,{location:e}),Object(d.jsx)(i.a,{component:"main",className:"app",tabIndex:-1,id:"MainContent",children:Object(d.jsx)(o.a,{timeout:Object(x.b)(w.b.base.durationS),onEnter:O.b,children:t=>Object(d.jsx)(W.Provider,{value:{status:t},children:Object(d.jsx)("div",{className:s()("app__page",`app__page--${t}`),children:Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)(a.Fragment,{}),children:Object(d.jsxs)(c.c,{location:e,children:[Object(d.jsx)(c.a,{exact:!0,path:"/",component:C}),Object(d.jsx)(c.a,{path:"/contact",component:L}),Object(d.jsx)(c.a,{path:"/projects/obd",component:P}),Object(d.jsx)(c.a,{path:"/projects/gps",component:B}),Object(d.jsx)(c.a,{path:"/projects/smart-sparrow",component:I}),Object(d.jsx)(c.a,{path:"/projects/slice",component:R}),Object(d.jsx)(c.a,{path:"/projects/volkihar-knight",component:$}),Object(d.jsx)(c.a,{path:"/uses",component:A}),Object(d.jsx)(c.a,{component:T})]})})})})},t)})]})};t.c=()=>{const[e]=Object(h.f)("theme","dark"),[t,n]=Object(a.useReducer)(N,H);return Object(a.useEffect)((()=>{M.a||console.info("\n__  __  __\n\\ \\ \\ \\ \\\u2215\n \\ \\\u2215\\ \\\n  \\\u2215  \\\u2215\n\n\nTaking a peek huh? Check out the source code: https://github.com/mayurpatild/mayurpatild.github.io\n\n\n"),window.history.scrollRestoration="manual"}),[]),Object(a.useEffect)((()=>{n({type:"setTheme",value:e})}),[e]),Object(d.jsx)(V.Provider,{value:{...t,dispatch:n},children:Object(d.jsx)(E.b,{themeId:t.theme,children:Object(d.jsx)(r.a,{children:Object(d.jsx)(F,{})})})})}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const a=["entering","entered"],r=e=>a.includes(e),c=e=>e&&e.offsetHeight},function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n(4),c=n.n(r),i=n(15),o=n(13),l=n(9),s=n(2),u=n(23),h=(n(46),n(1));var d=({className:e,style:t,size:n=32,text:a="Loading...",...r})=>{const i=()=>Object(o.createPortal)(Object(h.jsx)(u.a,{className:"loader-announcement","aria-live":"assertive",children:a}),document.body);if(Object(l.h)())return Object(h.jsxs)("div",{className:"loader-text",...r,children:[a,i()]});const d=Math.round(n/3*.2),b=Math.round(n/3-2*d-1);return Object(h.jsxs)("div",{className:c()("loader",e),"aria-label":a,style:{"--size":Object(s.d)(n),"--spanSize":Object(s.d)(b),"--gapSize":Object(s.d)(d),...t},...r,children:[Object(h.jsxs)("div",{className:"loader__content",children:[Object(h.jsx)("div",{className:"loader__span"}),Object(h.jsx)("div",{className:"loader__span"}),Object(h.jsx)("div",{className:"loader__span"})]}),i()]})},b=n(14),f=n(16);n(47);const m=Object(a.forwardRef)((({className:e,as:t,secondary:n,loading:a,loadingText:r="loading",icon:o,iconEnd:l,iconHoverShift:s,iconOnly:u,children:m,rel:j,target:p,href:v,...g},O)=>{const x=null===v||void 0===v?void 0:v.includes("://"),w=x||"#"===(null===v||void 0===v?void 0:v[0])?"a":i.b,y=t||(v?w:"button");return Object(h.jsxs)(y,{className:c()("button",e,{"button--loading":a,"button--icon-only":u,"button--secondary":n}),href:v&&x?v:void 0,to:v&&!x?v:void 0,rel:j||x?"noopener noreferrer":void 0,target:p||x?"_blank":void 0,onMouseUp:f.a,ref:O,...g,children:[!!o&&Object(h.jsx)(b.a,{className:c()("button__icon",{"button__icon--start":!u,"button__icon--shift":s}),icon:o}),!!m&&Object(h.jsx)("span",{className:"button__text",children:m}),!!l&&Object(h.jsx)(b.a,{className:c()("button__icon",{"button__icon--end":!u,"button__icon--shift":s}),icon:l}),a&&Object(h.jsx)(d,{className:"button__loader",size:32,text:r})]})}))},function(e,t,n){"use strict";var a=n(4),r=n.n(a),c=(n(45),n(1));t.a=({className:e,showOnFocus:t,as:n="span",children:a,visible:i,...o})=>Object(c.jsx)(n,{className:r()("visually-hidden",e,{"visually-hidden--hidden":!i&&!t,"visually-hidden--show-on-focus":t}),...o,children:a})},,,,function(e,t,n){"use strict";const a="ReactSnap"===navigator.userAgent;t.a=a},function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return f}));var a=n(0),r=n(20),c=n(4),i=n.n(c);var o=function(){return Object(a.useContext)(f)},l=n(10),s=n(2),u=n.p+"static/media/gotham-book.9c2a0ce4.woff2",h=n.p+"static/media/gotham-medium.0ad7d622.woff2",d=n(1);const b=`\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 400;\n    src: url(${u}) format("woff");\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 500;\n    src: url(${h}) format("woff2");\n    font-display: swap;\n  }\n`,f=Object(a.createContext)({});function m(e){return Object.keys(e).filter((e=>"themeId"!==e)).map((t=>`--${t}: ${e[t]};`)).join("\n")}function j(e){let t={};for(const n of Object.keys(e))"themeId"!==n&&(t[`--${n}`]=e[n]);return t}const p=`\n  :root {\n    ${m(l.b.base)}\n  }\n\n  ${Object.keys(s.a).map((e=>`\n        @media (max-width: ${s.a[e]}px) {\n          :root {\n            ${m(l.b[e])}\n          }\n        }\n      `)).join("\n")}\n\n  .dark {\n    ${m(l.a.dark)}\n  }\n\n  .light {\n    ${m(l.a.light)}\n  }\n`;t.b=({themeId:e="dark",theme:t,children:n,className:c,as:s="div"})=>{const m={...l.a[e],...t},v=!o().themeId;return Object(a.useEffect)((()=>{v&&(window.localStorage.setItem("theme",JSON.stringify(e)),document.body.classList.remove("light","dark"),document.body.classList.add(e))}),[e,v]),Object(d.jsxs)(f.Provider,{value:m,children:[v&&Object(d.jsxs)(a.Fragment,{children:[Object(d.jsxs)(r.a,{children:[Object(d.jsx)("link",{rel:"preload",href:h,as:"font",crossorigin:""}),Object(d.jsx)("link",{rel:"preload",href:u,as:"font",crossorigin:""}),Object(d.jsx)("style",{children:b}),Object(d.jsx)("style",{children:p})]}),n]}),!v&&Object(d.jsx)(s,{className:i()("theme-provider",c),style:j(m),children:n})]})}},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(17),c=n(1);const i=document.getElementById("root");i.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(r.c,{}),i):Object(a.render)(Object(c.jsx)(r.c,{}),i)},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}],[[35,5,7]]]);
//# sourceMappingURL=main.7d5245f9.chunk.js.map