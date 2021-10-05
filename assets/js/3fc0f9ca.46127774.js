"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82173],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),p=["components"],o={},c=void 0,u={unversionedId:"puppeteer.page.emulatevisiondeficiency",id:"version-9.1.1/puppeteer.page.emulatevisiondeficiency",isDocsHomePage:!1,title:"puppeteer.page.emulatevisiondeficiency",description:"Home &gt; puppeteer &gt; Page &gt; emulateVisionDeficiency",source:"@site/versioned_docs/version-9.1.1/puppeteer.page.emulatevisiondeficiency.md",sourceDirName:".",slug:"/puppeteer.page.emulatevisiondeficiency",permalink:"/puppeteer/docs/9.1.1/puppeteer.page.emulatevisiondeficiency",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.page.emulatevisiondeficiency.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.page.emulatetimezone",permalink:"/puppeteer/docs/9.1.1/puppeteer.page.emulatetimezone"},next:{title:"puppeteer.page.evaluate",permalink:"/puppeteer/docs/9.1.1/puppeteer.page.evaluate"}},l=[{value:"Page.emulateVisionDeficiency() method",id:"pageemulatevisiondeficiency-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.page"},"Page")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.page.emulatevisiondeficiency"},"emulateVisionDeficiency")),(0,i.kt)("h2",{id:"pageemulatevisiondeficiency-method"},"Page.emulateVisionDeficiency() method"),(0,i.kt)("p",null,"Simulates the given vision deficiency on the page."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"emulateVisionDeficiency(type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']): Promise<void>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"Protocol.Emulation.SetEmulatedVisionDeficiencyRequest","[","'type'","]"),(0,i.kt)("td",{parentName:"tr",align:null},"the type of deficiency to simulate, or ",(0,i.kt)("code",null,"'none'")," to reset.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","void",">"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://v8.dev/blog/10-years');\n\n  await page.emulateVisionDeficiency('achromatopsia');\n  await page.screenshot({ path: 'achromatopsia.png' });\n\n  await page.emulateVisionDeficiency('deuteranopia');\n  await page.screenshot({ path: 'deuteranopia.png' });\n\n  await page.emulateVisionDeficiency('blurredVision');\n  await page.screenshot({ path: 'blurred-vision.png' });\n\n  await browser.close();\n})();\n\n")))}m.isMDXComponent=!0}}]);