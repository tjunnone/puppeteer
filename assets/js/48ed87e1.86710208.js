"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59304],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||p;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34966:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={},u=void 0,s={unversionedId:"puppeteer.page.waitforrequest",id:"version-10.0.0/puppeteer.page.waitforrequest",isDocsHomePage:!1,title:"puppeteer.page.waitforrequest",description:"Home &gt; puppeteer &gt; Page &gt; waitForRequest",source:"@site/versioned_docs/version-10.0.0/puppeteer.page.waitforrequest.md",sourceDirName:".",slug:"/puppeteer.page.waitforrequest",permalink:"/puppeteer/docs/10.0.0/puppeteer.page.waitforrequest",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.0.0/puppeteer.page.waitforrequest.md",version:"10.0.0",frontMatter:{},sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.page.waitfornavigation",permalink:"/puppeteer/docs/10.0.0/puppeteer.page.waitfornavigation"},next:{title:"puppeteer.page.waitforresponse",permalink:"/puppeteer/docs/10.0.0/puppeteer.page.waitforresponse"}},l=[{value:"Page.waitForRequest() method",id:"pagewaitforrequest-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page.waitforrequest"},"waitForRequest")),(0,p.kt)("h2",{id:"pagewaitforrequest-method"},"Page.waitForRequest() method"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForRequest(urlOrPredicate: string | ((req: HTTPRequest) => boolean | Promise<boolean>), options?: {\n        timeout?: number;\n    }): Promise<HTTPRequest>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"urlOrPredicate"),(0,p.kt)("td",{parentName:"tr",align:null},"string ","|"," ((req: ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.httprequest"},"HTTPRequest"),") =",">"," boolean ","|"," Promise","<","boolean",">",")"),(0,p.kt)("td",{parentName:"tr",align:null},"A URL or predicate to wait for")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},"{ timeout?: number; }"),(0,p.kt)("td",{parentName:"tr",align:null},"Optional waiting parameters")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.httprequest"},"HTTPRequest"),">"),(0,p.kt)("p",null,"Promise which resolves to the matched response"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"Optional Waiting Parameters have:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"timeout"),": Maximum wait time in milliseconds, defaults to ",(0,p.kt)("inlineCode",{parentName:"li"},"30")," seconds, pass ",(0,p.kt)("inlineCode",{parentName:"li"},"0")," to disable the timeout. The default value can be changed by using the ",(0,p.kt)("a",{parentName:"li",href:"/puppeteer/docs/10.0.0/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method.")),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const firstResponse = await page.waitForResponse(\n'https://example.com/resource'\n);\nconst finalResponse = await page.waitForResponse(\n(response) =>\nresponse.url() === 'https://example.com' && response.status() === 200\n);\nconst finalResponse = await page.waitForResponse(async (response) => {\nreturn (await response.text()).includes('<html>');\n});\nreturn finalResponse.ok();\n\n")))}m.isMDXComponent=!0}}]);