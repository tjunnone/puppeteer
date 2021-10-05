"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23249],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},o=Object.keys(e);for(p=0;p<o.length;p++)t=o[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)t=o[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=p.createContext({}),c=function(e){var r=p.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return p.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},f=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(t),m=n,d=f["".concat(i,".").concat(m)]||f[m]||l[m]||o;return t?p.createElement(d,a(a({ref:r},s),{},{components:t})):p.createElement(d,a({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=f;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return p.createElement.apply(null,a)}return p.createElement.apply(null,t)}f.displayName="MDXCreateElement"},413:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var p=t(87462),n=t(63366),o=(t(67294),t(3905)),a=["components"],u={},i=void 0,c={unversionedId:"puppeteer.puppeteer.errors",id:"puppeteer.puppeteer.errors",isDocsHomePage:!1,title:"puppeteer.puppeteer.errors",description:"Home &gt; puppeteer &gt; Puppeteer &gt; errors",source:"@site/docs/puppeteer.puppeteer.errors.md",sourceDirName:".",slug:"/puppeteer.puppeteer.errors",permalink:"/puppeteer/docs/next/puppeteer.puppeteer.errors",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.puppeteer.errors.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.puppeteer.devices",permalink:"/puppeteer/docs/next/puppeteer.puppeteer.devices"},next:{title:"puppeteer.puppeteer.networkconditions",permalink:"/puppeteer/docs/next/puppeteer.puppeteer.networkconditions"}},s=[{value:"Puppeteer.errors property",id:"puppeteererrors-property",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],l={toc:s};function f(e){var r=e.components,t=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,p.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteer"},"Puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteer.errors"},"errors")),(0,o.kt)("h2",{id:"puppeteererrors-property"},"Puppeteer.errors property"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get errors(): PuppeteerErrors;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Puppeteer methods might throw errors if they are unable to fulfill a request. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForSelector(selector[, options])")," might fail if the selector doesn't match any nodes during the given timeframe."),(0,o.kt)("p",null,"For certain types of errors Puppeteer uses specific error classes. These classes are available via ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer.errors"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"An example of handling a timeout error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof puppeteer.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n\n")))}f.isMDXComponent=!0}}]);