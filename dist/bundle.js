!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=2)}([function(t,e){customElements.define("my-raw-input",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML='\n      <style>\n         input {\n          display: block;\n          vertical-align: middle;\n          width: 100%;\n          border: 1px solid #e5e5e5;\n          padding: 8px 6px;\n          background: #FFF;\n          -webkit-appearance: none;\n          border-radius: 2px;\n          box-sizing: border-box;\n        }\n        button {\n          background-color: #FFF;\n          color: #34b792;\n          border: 1px solid #34b792;\n          -webkit-appearance: button;\n          cursor: pointer;\n          display: block;\n          width: 100%;\n          padding: 8px;\n        }\n        input + button {\n          margin-top: 15px;\n        }\n      </style>\n      \n      <input class="input">\n      <button>Save</button>\n    ',this.shadowRoot.querySelector("button").addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("my-raw-event",{detail:{value:this.shadowRoot.querySelector("input").value}})),this.shadowRoot.querySelector("input").value=""})}})},function(t,e){customElements.define("my-raw-item",class extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}).innerHTML=`\n      <style>\n        :host {\n          display: block; \n          padding: 10px;\n          border: 1px solid #e5e5e5;\n        }\n      </style>\n      ${this.getAttribute("value")}\n      <button>Delete</button>\n    `,this.shadowRoot.querySelector("button").addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("my-raw-delete-event",{detail:{index:this.getAttribute("index")}}))})}})},function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,i=t=>"function"==typeof t&&n.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},a={},l={},d=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${d}--\x3e`,c=new RegExp(`${d}|${h}`),u="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)m(e[t].name,u)&&n++;for(;n-- >0;){const e=l[a],s=_.exec(e)[2],n=s.toLowerCase()+u,i=t.getAttribute(n);t.removeAttribute(n);const r=i.split(c);this.parts.push({type:"attribute",index:o,name:s,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(d)>=0){const n=t.parentNode,i=e.split(c),r=i.length-1;for(let e=0;e<r;e++){let s,r=i[e];if(""===r)s=g();else{const t=_.exec(r);null!==t&&m(t[2],u)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-u.length)+t[3]),s=document.createTextNode(r)}n.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===i[r]?(n.insertBefore(g(),t),s.push(t)):t.data=i[r],a+=r}}else if(8===t.nodeType)if(t.data===d){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(g(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(d,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const m=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},y=t=>-1!==t.index,g=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class f{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,l=n.nextNode();for(;o<s.length;)if(i=s[o],y(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class v{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const r=_.exec(t);e+=null===r?t+(s?d:h):t.substr(0,r.index)+r[1]+r[2]+u+r[3]+d}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class b{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(S(t)||!w(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||S(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this.__commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const s=new f(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)void 0===(s=e[n])&&(s=new C(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class E extends b{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends x{}let A=!1;try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=k(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];return"."===i?new E(t,e.slice(1),s).parts:"@"===i?[new T(t,e.slice(1),n.eventContext)]:"?"===i?[new P(t,e.slice(1),s)]:new b(t,e,s).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function V(t){let e=M.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},M.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(d);return void 0===(s=e.keyString.get(n))&&(s=new p(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const M=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const L=(t,...e)=>new v(t,e,"html",O),$=133;function q(t,e){const{element:{content:s},parts:n}=t,i=document.createTreeWalker(s,$,null,!1);let r=I(n),o=n[r],a=-1,l=0;const d=[];let h=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(d.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=n[r=I(n,r)]}d.forEach(t=>t.parentNode.removeChild(t))}const F=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,$,null,!1);for(;s.nextNode();)e++;return e},I=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(y(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const U=(t,e)=>`${t}--${e}`;let j=!0;void 0===window.ShadyCSS?j=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),j=!1);const H=t=>e=>{const s=U(e.type,t);let n=M.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},M.set(s,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(d);if(void 0===(i=n.keyString.get(r))){const s=e.getTemplateElement();j&&window.ShadyCSS.prepareTemplateDom(s,t),i=new p(e,s),n.keyString.set(r,i)}return n.stringsArray.set(e.strings,i),i},z=["html","svg"],J=new Set,W=(t,e,s)=>{J.add(s);const n=t.querySelectorAll("style"),{length:i}=n;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(e.element,s);const r=document.createElement("style");for(let t=0;t<i;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{z.forEach(e=>{const s=M.get(U(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),q(t,s)})})})(s);const o=e.element.content;!function(t,e,s=null){const{element:{content:n},parts:i}=t;if(null==s)return void n.appendChild(e);const r=document.createTreeWalker(n,$,null,!1);let o=I(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=F(e),s.parentNode.insertBefore(e,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=I(i,o);return}o=I(i,o)}}(e,r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,s);const a=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)t.insertBefore(a.cloneNode(!0),t.firstChild);else{o.insertBefore(r,o.firstChild);const t=new Set;t.add(r),q(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:D},K=Promise.resolve(!0),Q=1,X=4,Y=8,Z=16,tt=32;class et extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const n=this[t];this[s]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=D){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||B,i="function"==typeof n?n:n.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||B.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|tt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=G){const n=this.constructor,i=n._attributeNameForProperty(t,s);if(void 0!==i){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Y,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~Y}}_attributeToProperty(t,e){if(this._updateState&Y)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s._classProperties.get(n)||G;this._updateState=this._updateState|Z,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Z}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,i=n._classProperties.get(t)||G;n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|X;const s=this._updatePromise;this._updatePromise=new Promise((s,n)=>{t=s,e=n});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&tt}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}et.finalized=!0;const st="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol();class it{constructor(t,e){if(e!==nt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(st?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const rt=(t,...e)=>{const s=e.reduce((e,s,n)=>e+(t=>{if(t instanceof it)return t.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1],t[0]);return new it(s,nt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ot=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let n=0,i=e.length;n<i;n++){const i=e[n];Array.isArray(i)?t(i,s):s.push(i)}return s}(t);class at extends et{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){ot(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?st?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}at.finalized=!0,at.render=(t,e,s)=>{const n=s.scopeName,i=R.has(e),r=j&&11===e.nodeType&&!!e.host&&t instanceof v,a=r&&!J.has(n),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let n=R.get(e);void 0===n&&(o(e,e.firstChild),R.set(e,n=new C(Object.assign({templateFactory:V},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:H(n)},s)),a){const t=R.get(l);R.delete(l),t.value instanceof f&&W(l,t.value.template,n),o(e,e.firstChild),e.appendChild(l),R.set(e,t)}!i&&r&&window.ShadyCSS.styleElement(e.host)};customElements.define("my-input",class extends at{static get properties(){return{value:{type:String}}}static get styles(){return rt`
      input {
        display: block;
        vertical-align: middle;
        width: 100%;
        border: 1px solid #e5e5e5;
        padding: 8px 6px;
        background: #FFF;
        -webkit-appearance: none;
        border-radius: 2px;
        box-sizing: border-box;
      }
      button {
        background-color: #FFF;
        color: #34b792;
        border: 1px solid #34b792;
        -webkit-appearance: button;
        cursor: pointer;
        display: block;
        width: 100%;
        padding: 8px;
      }
      input + button {
        margin-top: 15px;
      }
    `}constructor(){super(),this.value=""}render(){return L`
      <input class="input" .value="${this.value}" @input="${this.handleInput}">
      <button @click="${this.handleClick}">Save</button>
    `}handleInput(t){this.value=t.target.value}handleClick(){this.dispatchEvent(new CustomEvent("my-event",{detail:{value:this.value}})),this.value=""}});customElements.define("my-item",class extends at{static get properties(){return{value:{type:String},index:{type:String}}}constructor(){super()}static get styles(){return rt`
      :host {
        display: block; 
        padding: 10px;
        border: 1px solid #e5e5e5;
      }
    `}render(){return L`
      ${this.value}
      <button @click="${this.handleClick}">Delete</button>
    `}handleClick(){this.dispatchEvent(new CustomEvent("my-delete-event",{detail:{index:this.index}}))}});customElements.define("my-list",class extends at{static get properties(){return{list:{type:Array,reflect:!0}}}constructor(){super()}attributeChangedCallback(t,e,s){console.log("attribute change: ",s),super.attributeChangedCallback(t,e,s)}static get styles(){return rt`
      :host {
        display: block;
      }
      my-item + my-item {
        margin-top: 15px;
      }
    `}render(){return L`
      ${this.list.map((t,e)=>L`
        <my-item value="${t}" index="${e}" @my-delete-event="${this.handleEvent}"></my-item>
      `)}
    `}handleEvent(t){this.dispatchEvent(new CustomEvent("my-delete-event",{detail:{index:t.detail.index}}))}});customElements.define("my-todo",class extends at{static get properties(){return{list:{type:Array},h1:{type:String}}}constructor(){super(),localStorage.getItem("list")?this.list=JSON.parse(localStorage.getItem("list")):this.list=[]}static get styles(){return rt`
      :host {
        display: block;
        max-width: 700px;
        margin: auto;
      }
      my-input + my-list {
        margin-top: 25px;
      }
    `}render(){return L`
      <h1>${this.h1}</h1>
      <my-input @my-event="${this.updateList}"></my-input>
      <my-list list="${JSON.stringify(this.list)}" @my-delete-event="${this.handleEvent}"></my-list>
    `}updateList(t){this.list=[...this.list,t.detail.value],localStorage.setItem("list",JSON.stringify(this.list))}handleEvent(t){const e=parseInt(t.detail.index);this.list=this.list.filter((t,s)=>e!==s),localStorage.setItem("list",JSON.stringify(this.list))}});customElements.define("my-link",class extends at{constructor(){super()}static get styles(){return rt`
      :host {
        display: block;
        max-width: 700px;
        margin: auto;
      }
    `}render(){return L`
      <a href="/">Raw Web Components</a>
      <a href="/lit-element.html">lit-element</a>
    `}});s(0),s(1);customElements.define("my-raw-list",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="\n      <style>\n        :host {\n          display: block;\n        }\n        my-raw-item + my-raw-item {\n          margin-top: 15px;\n        }\n      </style>\n    "}static get observedAttributes(){return["list"]}attributeChangedCallback(t,e,s){this.shadowRoot.querySelectorAll("my-raw-item").forEach(t=>{t.parentNode.removeChild(t)}),JSON.parse(s).forEach((t,e)=>{const s=document.createElement("my-raw-item");s.setAttribute("value",t),s.setAttribute("index",e),s.addEventListener("my-raw-delete-event",t=>{this.dispatchEvent(new CustomEvent("my-raw-delete-event",{detail:{index:t.detail.index}}))}),this.shadowRoot.appendChild(s)})}});customElements.define("my-raw-todo",class extends HTMLElement{constructor(){super(),localStorage.getItem("list")?this.list=JSON.parse(localStorage.getItem("list")):this.list=[],this.attachShadow({mode:"open"}).innerHTML=`\n      <style>\n        :host {\n          display: block;\n          max-width: 700px;\n          margin: auto;\n        }\n        my-raw-input + my-raw-list {\n          margin-top: 25px;\n        }\n      </style>\n      \n      <h1>${this.getAttribute("h1")}</h1>\n      <my-raw-input></my-raw-input>\n      <my-raw-list list="${JSON.stringify(this.list).replace(/"/g,"&quot;")}"></my-raw-list>\n    `,this.shadowRoot.querySelector("my-raw-input").addEventListener("my-raw-event",t=>{this.list=[...this.list,t.detail.value],localStorage.setItem("list",JSON.stringify(this.list)),this.shadowRoot.querySelector("my-raw-list").setAttribute("list",JSON.stringify(this.list))}),this.shadowRoot.querySelector("my-raw-list").addEventListener("my-raw-delete-event",t=>{const e=parseInt(t.detail.index);this.list=this.list.filter((t,s)=>e!==s),localStorage.setItem("list",JSON.stringify(this.list)),this.shadowRoot.querySelector("my-raw-list").setAttribute("list",JSON.stringify(this.list))})}})}]);