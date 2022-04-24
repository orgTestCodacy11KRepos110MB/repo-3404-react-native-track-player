"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[728],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},860:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return h}});var a=n(7462),r=n(3366),l=n(7294),o=n(3905),i=n(2389),u=n(5979),s=n(6010),c="tabItem_LplD";function p(e){var t,n,r,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.UB)(),g=h.tabGroupChoices,w=h.setTabGroupChoices,T=(0,l.useState)(k),O=T[0],x=T[1],E=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=g[m];null!=S&&S!==O&&v.some((function(e){return e.value===S}))&&x(S)}var j=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==O&&(N(t),x(a),null!=m&&w(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:j,onClick:j},r,{className:(0,s.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,i.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}function m(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}var f=["components"],b={sidebar_position:1},v="Installation",y={unversionedId:"basics/installation",id:"basics/installation",title:"Installation",description:"Stable",source:"@site/docs/basics/installation.mdx",sourceDirName:"basics",slug:"/basics/installation",permalink:"/docs/basics/installation",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/basics/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"app",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Getting Started",permalink:"/docs/basics/getting-started"}},k={},h=[{value:"Stable",id:"stable",level:2},{value:"Unstable",id:"unstable",level:2},{value:"iOS - Enable Swift Modules",id:"ios---enable-swift-modules",level:2},{value:"Expo",id:"expo",level:2}],g={toc:h};function w(e){var t=e.components,n=(0,r.Z)(e,f);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"stable"},"Stable"),(0,o.kt)(d,{groupId:"pkg",mdxType:"Tabs"},(0,o.kt)(m,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save react-native-track-player\n"))),(0,o.kt)(m,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add react-native-track-player\n")))),(0,o.kt)("h2",{id:"unstable"},"Unstable"),(0,o.kt)(d,{groupId:"pkg",mdxType:"Tabs"},(0,o.kt)(m,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save react-native-track-player#dev\n"))),(0,o.kt)(m,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add react-native-track-player#dev\n")))),(0,o.kt)("h2",{id:"ios---enable-swift-modules"},"iOS - Enable Swift Modules"),(0,o.kt)("p",null,"Because the iOS module uses Swift, if the user is using a standard react-native application they'll need to add support for Swift in the project. This can be easily by adding a swift file to the Xcode project -- could be called ",(0,o.kt)("inlineCode",{parentName:"p"},"dummy.swift")," and saying yes when prompted if you'd like to generate a bridging header."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/CBqBcWs.png",alt:"Importing Swift"})),(0,o.kt)("h2",{id:"expo"},"Expo"),(0,o.kt)("p",null,"You can now use React Native Track Player with Expo."),(0,o.kt)("p",null,"Start by creating a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.dev/clients/getting-started/"},"custom development client")," for your Expo app and then install React Native Track Player."),(0,o.kt)("p",null,"Here is the configuration required for audio playback in background:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/audio/#playing-or-recording-audio-in-background-ios"},"iOS: Enable audio playback in background via your app.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/basics/background-mode/#android"},"Android: Stop playback when the app is closed"))))}w.isMDXComponent=!0}}]);