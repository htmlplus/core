(this["webpackJsonp@htmlplus/docs"]=this["webpackJsonp@htmlplus/docs"]||[]).push([[2],{19:function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return de})),n.d(t,"c",(function(){return J})),n.d(t,"d",(function(){return q})),n.d(t,"e",(function(){return L})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return he}));var r,a,l=n(24),i=n(25),o=n(15),s=n(26),u=n(27),c=n(28),f=n(13),$=n.n(f),d=n(21),m=n(7),p=n(10),h=!1,g="undefined"!==typeof window?window:{},v=g.document||{head:{}},y={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},b=function(e){return Promise.resolve(e)},w=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),E="{visibility:hidden}.hydrated{visibility:inherit}",j="http://www.w3.org/1999/xlink",O=new WeakMap,R=function(e,t,n){var r=Ee.get(e);w&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Ee.set(e,r)},k=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,a=(t.$tagName$,function(){}),l=function(e,t,n,r){var a=x(t),l=Ee.get(a);if(e=11===e.nodeType?e:v,l)if("string"===typeof l){e=e.head||e;var i,o=O.get(e);o||O.set(e,o=new Set),o.has(a)||((i=v.createElement("style")).innerHTML=l,e.insertBefore(i,e.querySelector("link")),o&&o.add(a))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[].concat(Object(p.a)(e.adoptedStyleSheets),[l]));return a}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=l,n.classList.add(l+"-h")),a()},x=function(e,t){return"sc-"+e.$tagName$},S={},M=function(e){return"object"===(e=typeof e)||"function"===e},L=function(e,t){for(var n=null,r=null,a=!1,l=!1,i=[],o=function t(r){for(var o=0;o<r.length;o++)n=r[o],Array.isArray(n)?t(n):null!=n&&"boolean"!==typeof n&&((a="function"!==typeof e&&!M(n))&&(n=String(n)),a&&l?i[i.length-1].$text$+=n:i.push(a?N(null,n):n),l=a)},s=arguments.length,u=new Array(s>2?s-2:0),c=2;c<s;c++)u[c-2]=arguments[c];if(o(u),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!==typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"===typeof e)return e(null===t?{}:t,i,C);var $=N(e,null);return $.$attrs$=t,i.length>0&&($.$children$=i),$.$key$=r,$},N=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},T={},C={forEach:function(e,t){return e.map(P).forEach(t)},map:function(e,t){return e.map(P).map(t).map(A)}},P=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},A=function(e){if("function"===typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),L.apply(void 0,[e.vtag,t].concat(Object(p.a)(e.vchildren||[])))}var n=N(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},U=function(e,t,n,r,a,l){if(n!==r){var i=ve(e,t),o=t.toLowerCase();if("class"===t){var s=e.classList,u=X(n),c=X(r);s.remove.apply(s,Object(p.a)(u.filter((function(e){return e&&!c.includes(e)})))),s.add.apply(s,Object(p.a)(c.filter((function(e){return e&&!u.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var $ in r)n&&r[$]===n[$]||($.includes("-")?e.style.setProperty($,r[$]):e.style[$]=r[$])}else if("key"===t);else if("ref"===t)r&&r(e);else if(i||"o"!==t[0]||"n"!==t[1]){var d=M(r);if((i||d&&null!==r)&&!a)try{if(e.tagName.includes("-"))e[t]=r;else{var m=null==r?"":r;"list"===t?i=!1:null!=n&&e[t]==m||(e[t]=m)}}catch(v){}var h=!1;o!==(o=o.replace(/^xlink\:?/,""))&&(t=o,h=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(h?e.removeAttributeNS(j,t):e.removeAttribute(t)):(!i||4&l||a)&&!d&&(r=!0===r?"":r,h?e.setAttributeNS(j,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):ve(g,o)?o.slice(2):o[2]+t.slice(3),n&&y.rel(e,t,n,!1),r&&y.ael(e,t,r,!1)}},I=/\s/,X=function(e){return e?e.split(I):[]},W=function(e,t,n,r){var a=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||S,i=t.$attrs$||S;for(r in l)r in i||U(a,r,l[r],void 0,n,t.$flags$);for(r in i)U(a,r,l[r],i[r],n,t.$flags$)},z=function e(t,n,a,l){var i,o,s=n.$children$[a],u=0;if(null!==s.$text$)i=s.$elm$=v.createTextNode(s.$text$);else if(i=s.$elm$=v.createElement(s.$tag$),W(null,s,!1),null!=r&&i["s-si"]!==r&&i.classList.add(i["s-si"]=r),s.$children$)for(u=0;u<s.$children$.length;++u)(o=e(t,s,u))&&i.appendChild(o);return i},H=function(e,t,n,r,l,i){var o,s=e;for(s.shadowRoot&&s.tagName===a&&(s=s.shadowRoot);l<=i;++l)r[l]&&(o=z(null,n,l))&&(r[l].$elm$=o,s.insertBefore(o,t))},B=function(e,t,n,r,a){for(;t<=n;++t)(r=e[t])&&(a=r.$elm$,_(r),a.remove())},V=function(e,t,n,r){for(var a,l,i=0,o=0,s=0,u=0,c=t.length-1,f=t[0],$=t[c],d=r.length-1,m=r[0],p=r[d];i<=c&&o<=d;)if(null==f)f=t[++i];else if(null==$)$=t[--c];else if(null==m)m=r[++o];else if(null==p)p=r[--d];else if(D(f,m))F(f,m),f=t[++i],m=r[++o];else if(D($,p))F($,p),$=t[--c],p=r[--d];else if(D(f,p))F(f,p),e.insertBefore(f.$elm$,$.$elm$.nextSibling),f=t[++i],p=r[--d];else if(D($,m))F($,m),e.insertBefore($.$elm$,f.$elm$),$=t[--c],m=r[++o];else{for(s=-1,u=i;u<=c;++u)if(t[u]&&null!==t[u].$key$&&t[u].$key$===m.$key$){s=u;break}s>=0?((l=t[s]).$tag$!==m.$tag$?a=z(t&&t[o],n,s):(F(l,m),t[s]=void 0,a=l.$elm$),m=r[++o]):(a=z(t&&t[o],n,o),m=r[++o]),a&&f.$elm$.parentNode.insertBefore(a,f.$elm$)}i>c?H(e,null==r[d+1]?null:r[d+1].$elm$,n,r,o,d):o>d&&B(t,i,c)},D=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},F=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,a=t.$children$,l=t.$tag$,i=t.$text$;null===i?("slot"===l||W(e,t,!1),null!==r&&null!==a?V(n,r,t,a):null!==a?(null!==e.$text$&&(n.textContent=""),H(n,null,t,a,0,a.length-1)):null!==r&&B(r,0,r.length-1)):e.$text$!==i&&(n.data=i)},_=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},K=function(e,t){var n,l=e.$hostElement$,i=e.$cmpMeta$,o=e.$vnode$||N(null,null),s=(n=t)&&n.$tag$===T?t:L(null,null,t);a=l.tagName,i.$attrsToReflect$&&(s.$attrs$=s.$attrs$||{},i.$attrsToReflect$.map((function(e){var t=Object(m.a)(e,2),n=t[0],r=t[1];return s.$attrs$[r]=l[n]}))),s.$tag$=null,s.$flags$|=4,e.$vnode$=s,s.$elm$=o.$elm$=l.shadowRoot||l,r=l["s-sc"],F(o,s)},q=function(e){return pe(e).$hostElement$},J=function(e,t,n){var r=q(e);return{emit:function(e){return G(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},G=function(e,t,n){var r=y.ce(t,n);return e.dispatchEvent(r),r},Y=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},Q=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){Y(e,e.$ancestorComponent$);return Me((function(){return Z(e,t)}))}e.$flags$|=512},Z=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),a=e.$lazyInstance$;return t&&(n=ae(a,"componentWillLoad")),r(),le(n,(function(){return ee(e,a,t)}))},ee=function(){var e=Object(d.a)($.a.mark((function e(t,n,r){var a,l,i,o,s,u;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.$hostElement$,t.$cmpMeta$.$tagName$,l=function(){},i=a["s-rc"],r&&k(t),t.$cmpMeta$.$tagName$,o=function(){},K(t,te(t,n)),i&&(i.map((function(e){return e()})),a["s-rc"]=void 0),o(),l(),s=a["s-p"],u=function(){return ne(t)},0===s.length?u():(Promise.all(s).then(u),t.$flags$|=4,s.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),te=function(e,t){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2}catch(n){ye(n)}return t},ne=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,a=e.$ancestorComponent$;64&e.$flags$?n():(e.$flags$|=64,ie(t),ae(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),a||re()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Se((function(){return Q(e,!1)})),e.$flags$&=-517},re=function(e){ie(v.documentElement),Se((function(){return G(g,"appload",{detail:{namespace:"htmlplus"}})}))},ae=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){ye(r)}},le=function(e,t){return e&&e.then?e.then(t):t()},ie=function(e){return e.classList.add("hydrated")},oe=function(e,t,n,r){var a,l,i=pe(e),o=i.$instanceValues$.get(t),s=i.$flags$,u=i.$lazyInstance$;if(a=n,l=r.$members$[t][0],n=null==a||M(a)?a:4&l?"false"!==a&&(""===a||!!a):1&l?String(a):a,(!(8&s)||void 0===o)&&n!==o&&(i.$instanceValues$.set(t,n),u)){if(r.$watchers$&&128&s){var c=r.$watchers$[t];c&&c.map((function(e){try{u[e](n,o,t)}catch(r){ye(r)}}))}2===(18&s)&&Q(i,!1)}},se=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),a=e.prototype;if(r.map((function(e){var r=Object(m.a)(e,2),l=r[0],i=Object(m.a)(r[1],1)[0];(31&i||2&n&&32&i)&&Object.defineProperty(a,l,{get:function(){return e=l,pe(this).$instanceValues$.get(e);var e},set:function(e){oe(this,l,e,t)},configurable:!0,enumerable:!0})})),1&n){var l=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;y.jmp((function(){var t=l.get(e);r[t]=(null!==n||"boolean"!==typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=Object(m.a)(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=Object(m.a)(e,2),r=n[0],a=n[1],i=a[1]||r;return l.set(i,r),512&a[0]&&t.$attrsToReflect$.push([r,i]),i}))}}return e},ue=function(){var e=Object(d.a)($.a.mark((function e(t,n,r,a,l){var i,o,s,u,c,f,d;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(32&n.$flags$)){e.next=18;break}if(n.$flags$|=32,!(l=we(r)).then){e.next=9;break}return i=function(){},e.next=7,l;case 7:l=e.sent,i();case 9:l.isProxied||(r.$watchers$=l.watchers,se(l,r,2),l.isProxied=!0),r.$tagName$,o=function(){},n.$flags$|=8;try{new l(n)}catch(t){ye(t)}n.$flags$&=-9,n.$flags$|=128,o(),ce(n.$lazyInstance$),l.style&&(s=l.style,u=x(r),Ee.has(u)||(r.$tagName$,c=function(){},R(u,s,!!(1&r.$flags$)),c()));case 18:f=n.$ancestorComponent$,d=function(){return Q(n,!0)},f&&f["s-rc"]?f["s-rc"].push(d):d();case 21:case"end":return e.stop()}}),e)})));return function(t,n,r,a,l){return e.apply(this,arguments)}}(),ce=function(e){ae(e,"connectedCallback")},fe=function(e){if(0===(1&y.$flags$)){var t=pe(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)ce(t.$lazyInstance$);else{t.$flags$|=1;for(var a=e;a=a.parentNode||a.host;)if(a["s-p"]){Y(t,t.$ancestorComponent$=a);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=Object(m.a)(t,2),r=n[0];if(31&Object(m.a)(n[1],1)[0]&&e.hasOwnProperty(r)){var a=e[r];delete e[r],e[r]=a}})),ue(e,t,n)}r()}},$e=function(e){if(0===(1&y.$flags$)){var t=pe(e).$lazyInstance$;ae(t,"disconnectedCallback")}},de=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=function(){},a=[],f=n.exclude||[],$=g.customElements,d=v.head,m=d.querySelector("meta[charset]"),p=v.createElement("style"),h=[],b=!0;Object.assign(y,n),y.$resourcesUrl$=new URL(n.resourcesUrl||"./",v.baseURI).href,e.map((function(e){return e[1].map((function(n){var r={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};r.$members$=n[2],r.$attrsToReflect$=[],r.$watchers$={};var d=r.$tagName$,m=function(e){Object(s.a)(a,e);var n=Object(u.a)(a);function a(e){var t;return Object(l.a)(this,a),t=n.call(this,e),e=Object(o.a)(t),ge(e,r),1&r.$flags$&&e.attachShadow({mode:"open"}),t}return Object(i.a)(a,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),b?h.push(this):y.jmp((function(){return fe(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;y.jmp((function(){return $e(e)}))}},{key:"componentOnReady",value:function(){return pe(this).$onReadyPromise$}}]),a}(Object(c.a)(HTMLElement));r.$lazyBundleId$=e[0],f.includes(d)||$.get(d)||(a.push(d),$.define(d,se(m,r,1)))}))})),p.innerHTML=a+E,p.setAttribute("data-styles",""),d.insertBefore(p,m?m.nextSibling:d.firstChild),b=!1,h.length?h.map((function(e){return e.connectedCallback()})):y.jmp((function(){return t=setTimeout(re,30)})),r()},me=new WeakMap,pe=function(e){return me.get(e)},he=function(e,t){return me.set(t.$lazyInstance$=e,t)},ge=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],me.set(e,n)},ve=function(e,t){return t in e},ye=function(e){return console.error(e)},be=new Map,we=function(e,t,r){var a=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$,i=be.get(l);return i?i[a]:n(41)("./".concat(l,".entry.js")).then((function(e){return be.set(l,e),e[a]}),ye)},Ee=new Map,je=[],Oe=[],Re=function(e,t){return function(n){e.push(n),h||(h=!0,t&&4&y.$flags$?Se(xe):y.raf(xe))}},ke=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){ye(n)}e.length=0},xe=function e(){ke(je),ke(Oe),(h=je.length>0)&&y.raf(e)},Se=function(e){return b().then(e)},Me=Re(Oe,!0)},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r={};n.r(r),n.d(r,"parse",(function(){return i}));var a={};n.r(a),n.d(a,"routes",(function(){return f})),n.d(a,"register",(function(){return $})),n.d(a,"toPath",(function(){return d})),n.d(a,"useRouter",(function(){return m})),n.d(a,"Link",(function(){return p}));var l=n(32),i=n.n(l).a,o=n(0),s=n.n(o),u=n(1),c=n(18),f=[],$=function(e){f.push(e)},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=f.find((function(t){return t.name===e})),r=n?Object(u.e)(n.path,t):e;return r},m=function(){var e={toPath:d},t=Object(u.g)();return Object.defineProperty(e,"match",{get:function(){for(var e=0;e<f.length;e++){var n=f[e],r=Object(u.f)(t.pathname,n);if(r)return r}return{}},enumerable:!0,configurable:!0}),e},p=function(e){var t=e.children,n=e.to,r=e.state;return s.a.createElement(c.b,{to:d(n,r)},t)}},35:function(e,t,n){e.exports=n(46)},41:function(e,t,n){var r={"./hp-dialog.entry.js":[47,9],"./hp-grid_2.entry.js":[48,11],"./hp-switch.entry.js":[49,17],"./hp-tabs_5.entry.js":[51,10],"./tunnel-consumer.entry.js":[50,18]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=41,e.exports=a},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(30),i=n.n(l);var o=n(19),s=function(e,t){return"undefined"===typeof window?Promise.resolve():Object(o.f)().then((function(){return Object(o.b)([["hp-tabs_5",[[1,"hp-tabs",{value:[1],vertical:[516],connector:[1]}],[1,"hp-tabs-panel",{value:[1],active:[32]}],[1,"hp-tabs-panels",{connector:[1],active:[32]}],[1,"hp-tabs-tab",{disabled:[516],value:[1],active:[32]}],[1,"hp-tabs-bar",{grow:[516],justify:[513],reverse:[516]}]]],["hp-grid_2",[[1,"hp-grid",{alignContent:[1,"align-content"],alignContentXs:[1,"align-content-xs"],alignContentSm:[1,"align-content-sm"],alignContentMd:[1,"align-content-md"],alignContentLg:[1,"align-content-lg"],alignContentXl:[1,"align-content-xl"],alignItems:[1,"align-items"],alignItemsXs:[1,"align-items-xs"],alignItemsSm:[1,"align-items-sm"],alignItemsMd:[1,"align-items-md"],alignItemsLg:[1,"align-items-lg"],alignItemsXl:[1,"align-items-xl"],gutter:[1],gutterX:[1,"gutter-x"],gutterY:[1,"gutter-y"],justify:[1],justifyXs:[1,"justify-xs"],justifySm:[1,"justify-sm"],justifyMd:[1,"justify-md"],justifyLg:[1,"justify-lg"],justifyXl:[1,"justify-xl"],reverse:[4],vertical:[4],wrap:[1],wrapXs:[1,"wrap-xs"],wrapSm:[1,"wrap-sm"],wrapMd:[1,"wrap-md"],wrapLg:[1,"wrap-lg"],wrapXl:[1,"wrap-xl"]}],[1,"hp-grid-item",{alignSelf:[513,"align-self"],alignSelfXs:[513,"align-self-xs"],alignSelfSm:[513,"align-self-sm"],alignSelfMd:[513,"align-self-md"],alignSelfLg:[513,"align-self-lg"],alignSelfXl:[513,"align-self-xl"],xs:[513],sm:[513],md:[513],lg:[513],xl:[513],hideXs:[516,"hide-xs"],hideSm:[516,"hide-sm"],hideMd:[516,"hide-md"],hideLg:[516,"hide-lg"],hideXl:[516,"hide-xl"],hideXsUp:[516,"hide-xs-up"],hideSmUp:[516,"hide-sm-up"],hideMdUp:[516,"hide-md-up"],hideLgUp:[516,"hide-lg-up"],hideSmDown:[516,"hide-sm-down"],hideMdDown:[516,"hide-md-down"],hideLgDown:[516,"hide-lg-down"],offsetXs:[513,"offset-xs"],offsetSm:[513,"offset-sm"],offsetMd:[513,"offset-md"],offsetLg:[513,"offset-lg"],offsetXl:[513,"offset-xl"],orderXs:[513,"order-xs"],orderSm:[513,"order-sm"],orderMd:[513,"order-md"],orderLg:[513,"order-lg"],orderXl:[513,"order-xl"]}]]],["hp-dialog",[[1,"hp-dialog",{align:[1],fullscreen:[4],justify:[1],keyboard:[4],persistent:[4],open:[516],overlay:[516],scrollable:[4]}]]],["hp-switch",[[1,"hp-switch",{checked:[516],disabled:[516],inset:[516],reverse:[516]}]]],["tunnel-consumer",[[0,"tunnel-consumer",{context:[16],renderer:[16],subscribe:[16],unsubscribe:[32]}]]]],t)}))};!function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();var u=n(3),c={name:"ROUTE:COMPONENT:DETAILS",path:"/component/:key",load:function(){return Promise.all([n.e(1),n.e(0),n.e(7)]).then(n.bind(null,113))}};u.b.register(c);var f={name:"ROUTE:FRAMEWORK:ANGULAR",path:"/framework/angular",load:function(){return Promise.all([n.e(1),n.e(0),n.e(12)]).then(n.bind(null,114))}};u.b.register(f);var $={name:"ROUTE:FRAMEWORK:JAVASCRIPT",path:"/framework/javascript",load:function(){return Promise.all([n.e(1),n.e(0),n.e(13)]).then(n.bind(null,115))}};u.b.register($);var d={name:"ROUTE:FRAMEWORK:OVERVIEW",path:"/framework/overview",load:function(){return Promise.all([n.e(1),n.e(0),n.e(8)]).then(n.bind(null,116))}};u.b.register(d);var m={name:"ROUTE:FRAMEWORK:REACT",path:"/framework/react",load:function(){return Promise.all([n.e(1),n.e(0),n.e(14)]).then(n.bind(null,117))}};u.b.register(m);var p={name:"ROUTE:FRAMEWORK:VUE",path:"/framework/vue",load:function(){return Promise.all([n.e(1),n.e(0),n.e(15)]).then(n.bind(null,118))}};u.b.register(p);var h={name:"ROUTE:HOME",path:"/",exact:!0,load:function(){return n.e(16).then(n.bind(null,119))}};u.b.register(h);var g=n(18),v=n(1),y=function(){return a.a.createElement("span",null,"Loading...")},b=function(e){var t=e.value,n=a.a.lazy(t);return a.a.createElement(n,null)},w=function(){return a.a.createElement(g.a,null,a.a.createElement(v.c,null,u.b.routes.map((function(e){return a.a.createElement(v.a,Object.assign({key:e.name||e.path},e),a.a.createElement(r.Suspense,{fallback:a.a.createElement(y,null)},a.a.createElement(b,{value:e.load})))}))))};(function(){var e=[];if("undefined"!==typeof window){var t=window;t.customElements&&(!t.Element||t.Element.prototype.closest&&t.Element.prototype.matches&&t.Element.prototype.remove&&t.Element.prototype.getRootNode)||e.push(n.e(4).then(n.t.bind(null,111,7))),"function"===typeof Object.assign&&Object.entries&&Array.prototype.find&&Array.prototype.includes&&String.prototype.startsWith&&String.prototype.endsWith&&(!t.NodeList||t.NodeList.prototype.forEach)&&t.fetch&&function(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(t){return!1}}()&&"undefined"!=typeof WeakMap||e.push(n.e(3).then(n.t.bind(null,112,7)))}return Promise.all(e)})().then((function(){return s()})),i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root"))}},[[35,5,6]]]);
//# sourceMappingURL=main.d6076fae.chunk.js.map