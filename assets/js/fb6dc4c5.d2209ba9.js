"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[1805],{4137:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,i(i({ref:e},p),{},{components:n})):a.createElement(f,i({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3468:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],s={title:"Installation"},c=void 0,l={unversionedId:"api-contract/start/install",id:"api-contract/start/install",title:"Installation",description:"Packages",source:"@site/docs/api-contract/start/install.md",sourceDirName:"api-contract/start",slug:"/api-contract/start/install",permalink:"/docs/api-contract/start/install",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/install.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api-contract/start"},next:{title:"Basics",permalink:"/docs/api-contract/start/basics"}},p={},u=[{value:"Packages",id:"packages",level:2},{value:"Notes on use",id:"notes-on-use",level:2}],d={toc:u};function h(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," packages is to be used alongside the ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api")," package. With that in mind, we can install ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/api-contract"},"from npm"),", so we are not going to waste too much time with the bare basics, just install the API & contracts extensions via"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/api @polkadot/api-contract")),(0,o.kt)("p",null,"Generally you would want to keep the versions of the 2 in lock-step, which mean that if you upgrade one or the other, ensure that the versions continue to match."),(0,o.kt)("h2",{id:"notes-on-use"},"Notes on use"),(0,o.kt)("p",null,"Be aware that Substrate chains are different, which means that some chains will not have the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/runtime/frame"},"FRAME contracts pallet")," installed. For instance, relay chains such as Polkadot does not have this functionality; however, many have parachains that do."),(0,o.kt)("p",null,"Additionally the contracts pallet and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},"ink!")," are still evolving. With the upgrade from ink! v2 to v3 the ABI structure has changed completely. As of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api/releases/tag/v2.2.1"},"polkadot-js API v2.2.1")," only ink! v3.0-rc1 and later is supported. If you are using an earlier version, this guide will not be useful since the wrapper interfaces have changed in a major way to support the new formats."),(0,o.kt)("p",null,"So once we have it installed, let's take a brief tour through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-contract/start/basics"},"base classes and interfaces")," before we get into using them."))}h.isMDXComponent=!0}}]);