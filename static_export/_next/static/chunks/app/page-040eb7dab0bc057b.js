(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3498:function(e,t,s){Promise.resolve().then(s.bind(s,4571)),Promise.resolve().then(s.bind(s,3767)),Promise.resolve().then(s.bind(s,7288)),Promise.resolve().then(s.bind(s,7100)),Promise.resolve().then(s.bind(s,6040))},4571:function(e,t,s){"use strict";s.d(t,{default:function(){return n}});var a=s(7437),r=s(2265);function n(){let e=(0,r.useRef)(null),t=(0,r.useRef)(null),[s,n]=(0,r.useState)("16px"),[l,c]=(0,r.useState)("16px"),[i,o]=(0,r.useState)(!1),[d,u]=(0,r.useState)("N"),[m,f]=(0,r.useState)(100),h=(0,r.useCallback)(()=>{if(t.current&&e.current){o(!1);let s=e.current.offsetWidth,a=s,r=0,l=a;for(;r<=l;)a=Math.floor((r+l)/2),t.current.style.fontSize="".concat(a,"px"),t.current.scrollWidth<=s?r=a+1:l=a-1;let i=Math.max(l,16);n("".concat(i,"px")),c("".concat(i/6,"px")),o(!0)}},[]),x=(0,r.useCallback)(async()=>{try{let e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Basel,ch&units=metric&appid=".concat("3248725198ff0e53fc4834c723b247cd"));if(!e.ok)throw Error("".concat(e.statusText));let t=await e.json();if(t&&t.main&&"number"==typeof t.main.temp){let e;let s=t.main.temp;u(Math.round(s).toString()),e=s<=0?100:s>=25?700:100+s/25*600,f(Math.round(e))}else throw Error("Temperature data is not available")}catch(e){console.error("Error fetching weather data:",e),u("N")}},[]);return(0,r.useEffect)(()=>(h(),x(),setTimeout(()=>{h()},200),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[h,x]),(0,a.jsx)("div",{className:"flex items-center justify-center w-full py-10 px-4 overflow-hidden",children:(0,a.jsx)("div",{ref:e,className:"w-full h-full font-ruder dynamic-font-ruder",style:{"--ytuc":m},children:(0,a.jsxs)("h1",{ref:t,className:"leading-none tracking-tide text-center relative",style:{fontSize:s},children:["BASEL",i&&(0,a.jsxs)("span",{className:"absolute top-1/2 right-0 transform -translate-y-1/2",style:{fontSize:l},children:[d,"\xb0"]})]})})})}},3767:function(e,t,s){"use strict";s.d(t,{default:function(){return g}});var a=s(7437),r=s(2265),n=s(2869),l=s(653),c=s(8856),i=s(4508);let o=c.fC;c.ZA;let d=c.B4,u=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(c.xz,{ref:t,className:(0,i.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap bg-transparent py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",s),...n,children:[r,(0,a.jsx)(c.JO,{asChild:!0,children:(0,a.jsx)(l.jnn,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=c.xz.displayName;let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.u_,{ref:t,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",s),...r,children:(0,a.jsx)(l.g8U,{})})});m.displayName=c.u_.displayName;let f=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.$G,{ref:t,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",s),...r,children:(0,a.jsx)(l.v4q,{})})});f.displayName=c.$G.displayName;let h=r.forwardRef((e,t)=>{let{className:s,children:r,position:n="popper",...l}=e;return(0,a.jsx)(c.h_,{children:(0,a.jsxs)(c.VY,{ref:t,className:(0,i.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s),position:n,...l,children:[(0,a.jsx)(m,{}),(0,a.jsx)(c.l_,{className:(0,i.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,a.jsx)(f,{})]})})});h.displayName=c.VY.displayName,r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.__,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",s),...r})}).displayName=c.__.displayName;let x=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(c.ck,{ref:t,className:(0,i.cn)("relative flex w-full cursor-default select-none items-center py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...n,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(c.wU,{children:(0,a.jsx)(l.nQG,{className:"h-4 w-4"})})}),(0,a.jsx)(c.eT,{children:r})]})});function p(e){let{ascender:t,capHeight:s,xHeight:n,baseline:l,descender:c,charWidth:i,containerWidth:o}=e,d=t-c,u=(0,r.useMemo)(()=>[{name:"Ascender",position:0},{name:"Cap Height",position:(t-s)/d*100},{name:"X-Height",position:(t-n)/d*100},{name:"Baseline",position:(t-l)/d*100},{name:"Descender",position:100}],[t,s,n,l,d]),m=(0,r.useMemo)(()=>[{name:"Left",position:(o/2-i/2)/o*100},{name:"Right",position:(o/2+i/2)/o*100}],[i,o]);return(0,a.jsxs)("div",{className:"absolute inset-0 font-helvetica",children:[u.map(e=>(0,a.jsx)("div",{className:"absolute w-full border",style:{top:"".concat(e.position,"%")},children:(0,a.jsx)("span",{className:"absolute text-[8px] sm:text-xs",children:e.name})},e.name)),m.map(e=>(0,a.jsx)("div",{className:"absolute h-full border",style:{left:"".concat(e.position,"%")}},e.name))]})}x.displayName=c.ck.displayName,r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.Z0,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",s),...r})}).displayName=c.Z0.displayName;let j={"Basic Latin":"!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~","Latin-1 Supplement":"\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff","Latin Extended-A":"ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſ","Latin Extended-B":"ƒǍǎǓǔǾǿȘșȚț","Spacing Modifier":"ˆˇ˘˙˚˛˜˝","General Punctuation":"‐–—―‘’‚“”„†‡•…‰′″‹›⁄","Math Operators":"∂∆∏∑√∞∫≈≠≤≥"};function g(){let[e,t]=(0,r.useState)("plakat"),[s,l]=(0,r.useState)("A"),[c,i]=(0,r.useState)(null),[m,f]=(0,r.useState)("Basic Latin"),g=(0,r.useRef)(null),[v,w]=(0,r.useState)(0),N=(0,r.useRef)(null),[y,b]=(0,r.useState)("16px"),[k,z]=(0,r.useState)(0),S=c||s,C=((e,t)=>{let s=e.charCodeAt(0);return{glyphName:e,characters:"".concat(t," ").concat(e),unicodeDecimal:s,unicodeHex:s.toString(16).toUpperCase().padStart(4,"0"),htmlEntityHex:"&#x".concat(s.toString(16).toUpperCase(),";")}})(S,m),E=()=>{if(g.current){let e=g.current.offsetWidth;w(e),b("".concat(.77*e,"px"))}},M=()=>{N.current&&z(N.current.offsetWidth)};return(0,r.useEffect)(()=>(E(),window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E)}),[]),(0,r.useEffect)(()=>{M()},[S,y]),(0,a.jsxs)("div",{className:"min-h-[32rem]",children:[(0,a.jsxs)("div",{className:"grid grid-cols-3 w-full p-4",children:[(0,a.jsx)("div",{className:"flex justify-start",children:(0,a.jsx)(n.z,{variant:"ghost",size:"icon",className:"w-fit py-2 z-10",onClick:()=>{t(e=>"plakat"===e?"kontur":"plakat")},children:"plakat"===e?(0,a.jsx)("span",{children:"Kontur"}):(0,a.jsx)("span",{children:"Plakat"})})}),(0,a.jsx)("div",{className:"flex justify-center"}),(0,a.jsx)("div",{className:"flex justify-end text-sm",children:(0,a.jsxs)(o,{onValueChange:e=>f(e),children:[(0,a.jsx)(u,{className:"w-fit [&>span]:mr-2",children:(0,a.jsx)(d,{placeholder:"Select Character Set"})}),(0,a.jsx)(h,{children:Object.keys(j).map(e=>(0,a.jsx)(x,{className:"font-helvetica cursor-pointer",value:e,children:e},e))})]})})]}),(0,a.jsxs)("div",{className:"w-full min-h-[28rem] p-4 flex flex-col lg:flex-row",children:[(0,a.jsxs)("div",{className:"w-full lg:w-1/3 flex flex-row mb-8 lg:flex-col lg:pr-4 lg:mb-0",children:[(0,a.jsxs)("div",{ref:g,className:"relative w-1/2 lg:w-full aspect-square flex items-center justify-center leading-none ".concat("plakat"===e?"font-ruder":"font-kontur"),children:[(0,a.jsx)("span",{ref:N,className:"z-10",style:{fontSize:y},children:S}),(0,a.jsx)(p,{ascender:1045,capHeight:792,xHeight:628,baseline:0,descender:-253,charWidth:k,containerWidth:v})]}),(0,a.jsx)("div",{className:"flex items-center w-1/2 ml-4 lg:ml-0 lg:mt-16 lg:w-full text-sm",children:(0,a.jsx)("table",{className:"border-collapse text-nowrap w-fit h-fit",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"pr-4 hidden sm:table-cell",children:"Glyph Name"}),(0,a.jsx)("td",{children:C.glyphName})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"pr-4 hidden sm:table-cell",children:"Characters"}),(0,a.jsx)("td",{children:C.characters})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"pr-4 hidden sm:table-cell",children:"Unicode Decimal"}),(0,a.jsx)("td",{children:C.unicodeDecimal})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"pr-4 hidden sm:table-cell",children:"Unicode Hex"}),(0,a.jsx)("td",{children:C.unicodeHex})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"pr-4 hidden sm:table-cell",children:"HTML Entity (Hex)"}),(0,a.jsx)("td",{children:C.htmlEntityHex})]})]})})})]}),(0,a.jsx)("div",{className:"w-full lg:w-2/3 overflow-y-auto",children:(0,a.jsx)("div",{className:"grid grid-cols-8 md:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-14 w-full",children:j[m].split("").map(e=>(0,a.jsx)("div",{className:"aspect-square flex items-center justify-center text-2xl sm:text-4xl 2xl:text-5xl cursor-pointer border font-ruder\n                                    ".concat(s===e?"bg-primary text-primary-foreground":"hover:bg-muted"),onClick:()=>l(e),onMouseEnter:()=>i(e),onMouseLeave:()=>i(null),children:e},e))})})]})]})}},7288:function(e,t,s){"use strict";s.d(t,{default:function(){return n}});var a=s(7437),r=s(2265);function n(){let e="Ruder Plakat ",[t,s]=(0,r.useState)(0),n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=()=>{n.current&&s(Math.floor((window.innerHeight-64)/96))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,a.jsx)("div",{className:"overflow-hidden pt-16",children:(0,a.jsxs)("div",{className:"flex flex-col text-8xl",children:[(0,a.jsx)("div",{ref:n,className:"invisible absolute",children:(0,a.jsx)("span",{children:e})}),Array.from({length:t}).map((t,s)=>(0,a.jsx)("div",{className:"flex tracking-wide ".concat(s%2==0?"animate-scroll-left font-ruder":"animate-scroll-right font-kontur dynamic-font-kontur "," w-max"),style:{"--opsz":"300"},children:(0,a.jsx)("span",{children:s%2==0?e.repeat(20):"Ruder Kontur ".repeat(20)})},s))]})})}},7100:function(e,t,s){"use strict";s.d(t,{default:function(){return m}});var a=s(7437),r=s(2265),n=s(2869),l=s(8846),c=s(4508);let i=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsxs)(l.fC,{ref:t,className:(0,c.cn)("relative flex w-full touch-none select-none items-center",s),...r,children:[(0,a.jsx)(l.fQ,{className:"relative h-1.5 w-full grow overflow-hidden bg-primary/20",children:(0,a.jsx)(l.e6,{className:"absolute h-full bg-primary"})}),(0,a.jsx)(l.bU,{className:"block h-4 w-4 border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]})});i.displayName=l.fC.displayName;var o=s(1047),d=s(8310),u=s(9076);function m(){let[e,t]=(0,r.useState)("plakat"),[s,l]=(0,r.useState)(null),[c,m]=(0,r.useState)(100),[f,h]=(0,r.useState)(1),[x,p]=(0,r.useState)(0),[j,g]=(0,r.useState)(0),[v,w]=(0,r.useState)(!0),[N,y]=(0,r.useState)(""),[b,k]=(0,r.useState)(!1),[z,S]=(0,r.useState)(!1),C=(0,r.useRef)(null),E=(0,r.useRef)(null),M=(0,r.useRef)(null),R=(0,r.useCallback)(()=>{if(E.current&&M.current){let e=M.current.offsetWidth,t=M.current.offsetHeight,s=Math.max(e,t),a=0,r=s;for(;a<=r;){s=Math.floor((a+r)/2),E.current.style.fontSize="".concat(s,"px");let n=E.current.scrollWidth,l=E.current.scrollHeight;n<=e&&l<=t?a=s+1:r=s-1}let n=Math.max(r,16);E.current.style.fontSize="".concat(n,"px"),m(n)}},[]),L=(0,r.useCallback)(()=>{if(E.current){let e=window.getComputedStyle(E.current),t=parseFloat(e.lineHeight),s=parseFloat(e.fontSize),a=isNaN(t)?1.2*s:t;w(1>=Math.round(E.current.scrollHeight/a))}},[]),A=(0,r.useCallback)(()=>{let e=["Art\xa0Basel","AGI Open","Kunsthalle Basel","Kunstmuseum Basel","Emil Ruder","Basel Academy of Art and Design","Lineto Type Foundry"],t=Math.floor(Math.random()*e.length),s=e[t],a=0;C.current&&clearInterval(C.current),C.current=setInterval(()=>{a<s.length?(y(e=>e+s[a]),a++):(clearInterval(C.current),k(!0))},100)},[]),H=e=>{let t=document.createRange();t.selectNodeContents(e),t.collapse(!1);let s=window.getSelection();s&&(s.removeAllRanges(),s.addRange(t))},B=()=>window.innerWidth<768;(0,r.useEffect)(()=>{let e=M.current,t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.intersectionRatio>=.5&&!z&&S(!0)})},{root:null,threshold:.5});return e&&t.observe(e),()=>{e&&t.unobserve(e)}},[z]),(0,r.useEffect)(()=>{z&&!b&&(E.current&&!B()&&E.current.focus(),A())},[A,b,z]),(0,r.useEffect)(()=>{E.current&&!B()&&E.current.focus()},[]),(0,r.useEffect)(()=>(R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)),[R]),(0,r.useEffect)(()=>{R(),!b&&E.current&&document.activeElement===E.current&&H(E.current)},[e,N,b,R]),(0,r.useEffect)(()=>{L()},[L,N,c,x,f,e,s]),(0,r.useEffect)(()=>{p(c/100*j)},[c,j]);let W=(0,r.useCallback)(e=>{m(e[0])},[]),_=(0,r.useCallback)(e=>{v||h(e[0])},[v]),P=(0,r.useCallback)(e=>{g(e[0])},[]);return(0,a.jsxs)("div",{className:"h-[calc(100vh-4rem)] min-h-[36rem]",children:[(0,a.jsxs)("div",{className:"grid grid-cols-3 w-full p-4",children:[(0,a.jsx)("div",{className:"flex justify-start",children:(0,a.jsx)(n.z,{variant:"ghost",size:"icon",className:"w-fit py-2 z-10",onClick:()=>{t(e=>"plakat"===e?"kontur":"plakat")},children:"plakat"===e?(0,a.jsx)("span",{children:"Kontur"}):(0,a.jsx)("span",{children:"Plakat"})})}),(0,a.jsxs)("div",{className:"flex justify-center",children:[(0,a.jsxs)(n.z,{variant:"ghost",className:"flex items-center z-10 ".concat("line"===s?"text-muted-foreground":""),onClick:()=>{C.current&&clearInterval(C.current),y("Art\xa0Basel"),h(1),p(0),g(0),l("line"),k(!0)},children:[(0,a.jsx)(o.Z,{strokeWidth:1,className:"w-4 h-4 m-2"}),(0,a.jsx)("span",{children:"Line"})]}),(0,a.jsxs)(n.z,{variant:"ghost",className:"flex items-center z-10 ".concat("paragraph"===s?"text-muted-foreground":""),onClick:()=>{C.current&&clearInterval(C.current),y("Art Basel is an international art fair with events in Basel, Miami Beach, and Hong Kong."),h(1),p(0),g(0),l("paragraph"),k(!0)},children:[(0,a.jsx)(d.Z,{strokeWidth:1,className:"w-4 h-4 m-2"}),(0,a.jsx)("span",{children:"Paragraph"})]})]}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)(n.z,{variant:"ghost",size:"icon","aria-label":"Refresh text",className:"z-10 justify-end",onClick:()=>{C.current&&clearInterval(C.current),y(""),h(1),p(0),g(0),t("plakat"),l(null),k(!1),S(!1)},children:(0,a.jsx)(u.Z,{strokeWidth:1,className:"w-4 h-4"})})})]}),(0,a.jsx)("div",{className:"w-full h-[calc(100vh-15.75rem)] md:h-[calc(100vh-12.75rem)] min-h-[24.25rem] p-4",children:(0,a.jsx)("div",{ref:M,className:"flex items-center justify-center w-full h-full overflow-hidden",children:(0,a.jsx)("span",{ref:E,className:"flex leading-none items-center justify-center text-center bg-transparent outline-none tracking-wide ".concat("plakat"===e?"font-ruder":"font-kontur"),style:{whiteSpace:"pre-wrap",overflowAnchor:"none",fontSize:"".concat(c,"px"),lineHeight:f,letterSpacing:"".concat(x,"px")},contentEditable:!0,suppressContentEditableWarning:!0,onInput:()=>{k(!0),R(),l(null)},children:N})})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-2 md:py-6 px-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("span",{className:"w-6 text-center",children:"TT"}),(0,a.jsx)("div",{className:"flex-grow mx-4",children:(0,a.jsx)(i,{min:10,max:1e3,value:[c],onValueChange:W,className:"cursor-pointer"})}),(0,a.jsx)("span",{className:"w-8 md:w-6 text-right",children:c.toFixed(0)})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("span",{className:"w-6 text-center ".concat(v?"opacity-50":""),children:"AA"}),(0,a.jsx)("div",{className:"flex-grow mx-4",children:(0,a.jsx)(i,{min:.8,max:1.6,step:.01,value:[f],onValueChange:_,className:v?"opacity-50 cursor-default":"cursor-pointer"})}),(0,a.jsx)("span",{className:"w-8 md:w-6  text-right ".concat(v?"opacity-50":""),children:f.toFixed(2)})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("span",{className:"w-6 text-center",children:"AV"}),(0,a.jsx)("div",{className:"flex-grow mx-4",children:(0,a.jsx)(i,{min:-10,max:30,step:.01,value:[j],onValueChange:P,className:"cursor-pointer"})}),(0,a.jsx)("span",{className:"w-8 md:w-6 text-right",children:j.toFixed(0)})]})]})]})}},6040:function(e,t,s){"use strict";s.d(t,{default:function(){return l}});var a=s(7437),r=s(2265),n=s(2869);function l(){let[e,t]=(0,r.useState)("plakat"),[s,l]=(0,r.useState)("lowercase"),c=(0,r.useRef)(null),i=(0,r.useRef)(null),o=(0,r.useCallback)(()=>{if(c.current&&i.current){let e=i.current.offsetWidth,t=i.current.offsetHeight,s=Math.max(e,t),a=0,r=s;for(;a<=r;){s=Math.floor((a+r)/2),c.current.style.fontSize="".concat(s,"px");let n=c.current.scrollWidth,l=c.current.scrollHeight;n<=e&&l<=t?a=s+1:r=s-1}let n=Math.max(r,16);c.current.style.fontSize="".concat(n,"px")}},[]);(0,r.useEffect)(()=>(o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[o,e,s]);let d=(0,r.useCallback)(t=>{if(i.current){let s;let a=i.current.getBoundingClientRect();s="touches"in t?(t.touches[0].clientX-a.left)/a.width:(t.clientX-a.left)/a.width;let r=100,n=900,l="--ytuc";"kontur"===e&&(r=95,n=380,l="--opsz");let c=Math.ceil(r+s*(n-r));i.current.style.setProperty(l,"".concat(c))}},[e]);return(0,a.jsxs)("div",{className:"h-[calc(100vh-12rem)] sm:h-[calc(100vh-4rem)] min-h-[36rem]",children:[(0,a.jsxs)("div",{className:"grid grid-cols-3 w-full p-4",children:[(0,a.jsx)("div",{className:"flex justify-start",children:(0,a.jsx)(n.z,{variant:"ghost",size:"icon",className:"w-fit py-2 z-10",onClick:()=>{t(e=>"plakat"===e?"kontur":"plakat")},children:"plakat"===e?(0,a.jsx)("span",{children:"Kontur"}):(0,a.jsx)("span",{children:"Plakat"})})}),(0,a.jsxs)("div",{className:"flex justify-center",children:[(0,a.jsxs)(n.z,{variant:"ghost",onClick:()=>l("uppercase"),className:"".concat("uppercase"===s?"text-muted-foreground":""," z-10"),children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Upper"}),(0,a.jsx)("span",{className:"hidden sm:block",children:"Uppercase"})]}),(0,a.jsxs)(n.z,{variant:"ghost",onClick:()=>l("lowercase"),className:"".concat("lowercase"===s?"text-muted-foreground":""," z-10"),children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Lower"}),(0,a.jsx)("span",{className:"hidden sm:block",children:"Lowercase"})]}),(0,a.jsxs)(n.z,{variant:"ghost",onClick:()=>l("miscellaneous"),className:"".concat("miscellaneous"===s?"text-muted-foreground":""," z-10"),children:[(0,a.jsx)("span",{className:"sm:hidden",children:"Misc"}),(0,a.jsx)("span",{className:"hidden sm:block",children:"Miscellaneous"})]})]}),(0,a.jsx)("div",{className:"flex justify-end"})]}),(0,a.jsx)("div",{className:"w-full h-[calc(100vh-19.5rem)] sm:h-[calc(100vh-11.5rem)] px-4 py-6 min-h-[28.5rem]",children:(0,a.jsx)("div",{ref:i,className:"flex items-center justify-center w-full h-full text-center ".concat("plakat"===e?"font-ruder dynamic-font-ruder":"font-kontur dynamic-font-kontur"),onMouseMove:d,onTouchMove:d,children:(0,a.jsx)("p",{className:"leading-none whitespace-nowrap",ref:c,style:{overflowAnchor:"none"},children:(()=>{switch(s){case"uppercase":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"block pb-4",children:"ABCDEFGHIJ"}),(0,a.jsx)("span",{className:"block pb-4",children:"KLMNOPQRS"}),(0,a.jsx)("span",{className:"block pb-4",children:"TUVWXYZ\xc1\xca\xcc\xd8\xdc"})]});case"lowercase":default:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"block pb-4",children:"abcdefghij"}),(0,a.jsx)("span",{className:"block pb-4",children:"klmnopqrs"}),(0,a.jsx)("span",{className:"block pb-4",children:"tuvwxyz\xe1\xea\xec\xf8\xfc"})]});case"miscellaneous":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"block pb-4",children:"1234567890"}),(0,a.jsx)("span",{className:"block pb-4",children:"%*@$\xa2\xa3\xa5"}),(0,a.jsx)("span",{className:"block pb-4",children:";:!?&\xdf\xa7#"})]})}})()})})}),(0,a.jsx)("div",{className:"p-4 text-sm text-center text-muted-foreground",children:"*Move the mouse or drag your finger horizontally."})]})}},2869:function(e,t,s){"use strict";s.d(t,{z:function(){return o}});var a=s(7437),r=s(2265),n=s(7053),l=s(7712),c=s(4508);let i=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:text-muted-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=r.forwardRef((e,t)=>{let{className:s,variant:r,size:l,asChild:o=!1,...d}=e,u=o?n.g7:"button";return(0,a.jsx)(u,{className:(0,c.cn)(i({variant:r,size:l,className:s})),ref:t,...d})});o.displayName="Button"},4508:function(e,t,s){"use strict";s.d(t,{cn:function(){return n}});var a=s(1994),r=s(3335);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.m6)((0,a.W)(t))}}},function(e){e.O(0,[310,784,792,971,117,744],function(){return e(e.s=3498)}),_N_E=e.O()}]);