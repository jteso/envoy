/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.5.1
window.WebComponents=window.WebComponents||{},function(e){var t=e.flags||{},n="webcomponents.js",r=document.querySelector('script[src*="'+n+'"]'),t={};if(!t.noOpts){if(location.search.slice(1).split("&").forEach(function(e){e=e.split("="),e[0]&&(t[e[0]]=e[1]||!0)}),r)for(var o,i=0;o=r.attributes[i];i++)"src"!==o.name&&(t[o.name]=o.value||!0);if(t.log){var a=t.log.split(",");t.log={},a.forEach(function(e){t.log[e]=!0})}else t.log={}}t.shadow=t.shadow||t.shadowdom||t.polyfill,t.shadow="native"===t.shadow?!1:t.shadow||!HTMLElement.prototype.createShadowRoot,t.register&&(window.CustomElements=window.CustomElements||{flags:{}},window.CustomElements.flags.register=t.register),e.flags=t}(WebComponents),WebComponents.flags.shadow&&("undefined"==typeof WeakMap&&!function(){var e=Object.defineProperty,t=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};n.prototype={set:function(t,n){var r=t[this.name];return r&&r[0]===t?r[1]=n:e(t,this.name,{value:[t,n],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];return t&&t[0]===e?(t[0]=t[1]=void 0,!0):!1},has:function(e){var t=e[this.name];return t?t[0]===e:!1}},window.WeakMap=n}(),window.ShadowDOMPolyfill={},function(e){"use strict";function t(){if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)return!1;if(navigator.getDeviceStorage)return!1;try{var e=new Function("return true;");return e()}catch(t){return!1}}function n(e){if(!e)throw new Error("Assertion failed")}function r(e,t){for(var n=W(t),r=0;r<n.length;r++){var o=n[r];k(e,o,F(t,o))}return e}function o(e,t){for(var n=W(t),r=0;r<n.length;r++){var o=n[r];switch(o){case"arguments":case"caller":case"length":case"name":case"prototype":case"toString":continue}k(e,o,F(t,o))}return e}function i(e,t){for(var n=0;n<t.length;n++)if(t[n]in e)return t[n]}function a(e,t,n){U.value=n,k(e,t,U)}function s(e){var t=e.__proto__||Object.getPrototypeOf(e),n=R.get(t);if(n)return n;var r=s(t),o=E(r);return g(t,o,e),o}function c(e,t){w(e,t,!0)}function l(e,t){w(t,e,!1)}function u(e){return/^on[a-z]+$/.test(e)}function d(e){return/^\w[a-zA-Z_0-9]*$/.test(e)}function p(e){return A&&d(e)?new Function("return this.__impl4cf1e782hg__."+e):function(){return this.__impl4cf1e782hg__[e]}}function f(e){return A&&d(e)?new Function("v","this.__impl4cf1e782hg__."+e+" = v"):function(t){this.__impl4cf1e782hg__[e]=t}}function h(e){return A&&d(e)?new Function("return this.__impl4cf1e782hg__."+e+".apply(this.__impl4cf1e782hg__, arguments)"):function(){return this.__impl4cf1e782hg__[e].apply(this.__impl4cf1e782hg__,arguments)}}function m(e,t){try{return Object.getOwnPropertyDescriptor(e,t)}catch(n){return q}}function w(t,n,r){for(var o=W(t),i=0;i<o.length;i++){var a=o[i];if("polymerBlackList_"!==a&&!(a in n||t.polymerBlackList_&&t.polymerBlackList_[a])){B&&t.__lookupGetter__(a);var s,c,l=m(t,a);if(r&&"function"==typeof l.value)n[a]=h(a);else{var d=u(a);s=d?e.getEventHandlerGetter(a):p(a),(l.writable||l.set||V)&&(c=d?e.getEventHandlerSetter(a):f(a)),k(n,a,{get:s,set:c,configurable:l.configurable,enumerable:l.enumerable})}}}}function v(e,t,n){var r=e.prototype;g(r,t,n),o(t,e)}function g(e,t,r){var o=t.prototype;n(void 0===R.get(e)),R.set(e,t),P.set(o,e),c(e,o),r&&l(o,r),a(o,"constructor",t),t.prototype=o}function b(e,t){return R.get(t.prototype)===e}function y(e){var t=Object.getPrototypeOf(e),n=s(t),r=E(n);return g(t,r,e),r}function E(e){function t(t){e.call(this,t)}var n=Object.create(e.prototype);return n.constructor=t,t.prototype=n,t}function S(e){return e&&e.__impl4cf1e782hg__}function T(e){return!S(e)}function M(e){return null===e?null:(n(T(e)),e.__wrapper8e3dd93a60__||(e.__wrapper8e3dd93a60__=new(s(e))(e)))}function _(e){return null===e?null:(n(S(e)),e.__impl4cf1e782hg__)}function O(e){return e.__impl4cf1e782hg__}function L(e,t){t.__impl4cf1e782hg__=e,e.__wrapper8e3dd93a60__=t}function N(e){return e&&S(e)?_(e):e}function C(e){return e&&!S(e)?M(e):e}function D(e,t){null!==t&&(n(T(e)),n(void 0===t||S(t)),e.__wrapper8e3dd93a60__=t)}function j(e,t,n){G.get=n,k(e.prototype,t,G)}function H(e,t){j(e,t,function(){return M(this.__impl4cf1e782hg__[t])})}function x(e,t){e.forEach(function(e){t.forEach(function(t){e.prototype[t]=function(){var e=C(this);return e[t].apply(e,arguments)}})})}var R=new WeakMap,P=new WeakMap,I=Object.create(null),A=t(),k=Object.defineProperty,W=Object.getOwnPropertyNames,F=Object.getOwnPropertyDescriptor,U={value:void 0,configurable:!0,enumerable:!1,writable:!0};W(window);var B=/Firefox/.test(navigator.userAgent),q={get:function(){},set:function(){},configurable:!0,enumerable:!0},V=function(){var e=Object.getOwnPropertyDescriptor(Node.prototype,"nodeType");return e&&!e.get&&!e.set}(),G={get:void 0,configurable:!0,enumerable:!0};e.assert=n,e.constructorTable=R,e.defineGetter=j,e.defineWrapGetter=H,e.forwardMethodsToWrapper=x,e.isWrapper=S,e.isWrapperFor=b,e.mixin=r,e.nativePrototypeTable=P,e.oneOf=i,e.registerObject=y,e.registerWrapper=v,e.rewrap=D,e.setWrapper=L,e.unsafeUnwrap=O,e.unwrap=_,e.unwrapIfNeeded=N,e.wrap=M,e.wrapIfNeeded=C,e.wrappers=I}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t,n){return{index:e,removed:t,addedCount:n}}function n(){}var r=0,o=1,i=2,a=3;n.prototype={calcEditDistances:function(e,t,n,r,o,i){for(var a=i-o+1,s=n-t+1,c=new Array(a),l=0;a>l;l++)c[l]=new Array(s),c[l][0]=l;for(var u=0;s>u;u++)c[0][u]=u;for(var l=1;a>l;l++)for(var u=1;s>u;u++)if(this.equals(e[t+u-1],r[o+l-1]))c[l][u]=c[l-1][u-1];else{var d=c[l-1][u]+1,p=c[l][u-1]+1;c[l][u]=p>d?d:p}return c},spliceOperationsFromEditDistances:function(e){for(var t=e.length-1,n=e[0].length-1,s=e[t][n],c=[];t>0||n>0;)if(0!=t)if(0!=n){var l,u=e[t-1][n-1],d=e[t-1][n],p=e[t][n-1];l=p>d?u>d?d:u:u>p?p:u,l==u?(u==s?c.push(r):(c.push(o),s=u),t--,n--):l==d?(c.push(a),t--,s=d):(c.push(i),n--,s=p)}else c.push(a),t--;else c.push(i),n--;return c.reverse(),c},calcSplices:function(e,n,s,c,l,u){var d=0,p=0,f=Math.min(s-n,u-l);if(0==n&&0==l&&(d=this.sharedPrefix(e,c,f)),s==e.length&&u==c.length&&(p=this.sharedSuffix(e,c,f-d)),n+=d,l+=d,s-=p,u-=p,s-n==0&&u-l==0)return[];if(n==s){for(var h=t(n,[],0);u>l;)h.removed.push(c[l++]);return[h]}if(l==u)return[t(n,[],s-n)];for(var m=this.spliceOperationsFromEditDistances(this.calcEditDistances(e,n,s,c,l,u)),h=void 0,w=[],v=n,g=l,b=0;b<m.length;b++)switch(m[b]){case r:h&&(w.push(h),h=void 0),v++,g++;break;case o:h||(h=t(v,[],0)),h.addedCount++,v++,h.removed.push(c[g]),g++;break;case i:h||(h=t(v,[],0)),h.addedCount++,v++;break;case a:h||(h=t(v,[],0)),h.removed.push(c[g]),g++}return h&&w.push(h),w},sharedPrefix:function(e,t,n){for(var r=0;n>r;r++)if(!this.equals(e[r],t[r]))return r;return n},sharedSuffix:function(e,t,n){for(var r=e.length,o=t.length,i=0;n>i&&this.equals(e[--r],t[--o]);)i++;return i},calculateSplices:function(e,t){return this.calcSplices(e,0,e.length,t,0,t.length)},equals:function(e,t){return e===t}},e.ArraySplice=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(){a=!1;var e=i.slice(0);i=[];for(var t=0;t<e.length;t++)e[t]()}function n(e){i.push(e),a||(a=!0,r(t,0))}var r,o=window.MutationObserver,i=[],a=!1;if(o){var s=1,c=new o(t),l=document.createTextNode(s);c.observe(l,{characterData:!0}),r=function(){s=(s+1)%2,l.data=s}}else r=window.setTimeout;e.setEndOfMicrotask=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.scheduled_||(e.scheduled_=!0,h.push(e),m||(u(n),m=!0))}function n(){for(m=!1;h.length;){var e=h;h=[],e.sort(function(e,t){return e.uid_-t.uid_});for(var t=0;t<e.length;t++){var n=e[t];n.scheduled_=!1;var r=n.takeRecords();i(n),r.length&&n.callback_(r,n)}}}function r(e,t){this.type=e,this.target=t,this.addedNodes=new p.NodeList,this.removedNodes=new p.NodeList,this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function o(e,t){for(;e;e=e.parentNode){var n=f.get(e);if(n)for(var r=0;r<n.length;r++){var o=n[r];o.options.subtree&&o.addTransientObserver(t)}}}function i(e){for(var t=0;t<e.nodes_.length;t++){var n=e.nodes_[t],r=f.get(n);if(!r)return;for(var o=0;o<r.length;o++){var i=r[o];i.observer===e&&i.removeTransientObservers()}}}function a(e,n,o){for(var i=Object.create(null),a=Object.create(null),s=e;s;s=s.parentNode){var c=f.get(s);if(c)for(var l=0;l<c.length;l++){var u=c[l],d=u.options;if((s===e||d.subtree)&&!("attributes"===n&&!d.attributes||"attributes"===n&&d.attributeFilter&&(null!==o.namespace||-1===d.attributeFilter.indexOf(o.name))||"characterData"===n&&!d.characterData||"childList"===n&&!d.childList)){var p=u.observer;i[p.uid_]=p,("attributes"===n&&d.attributeOldValue||"characterData"===n&&d.characterDataOldValue)&&(a[p.uid_]=o.oldValue)}}}for(var h in i){var p=i[h],m=new r(n,e);"name"in o&&"namespace"in o&&(m.attributeName=o.name,m.attributeNamespace=o.namespace),o.addedNodes&&(m.addedNodes=o.addedNodes),o.removedNodes&&(m.removedNodes=o.removedNodes),o.previousSibling&&(m.previousSibling=o.previousSibling),o.nextSibling&&(m.nextSibling=o.nextSibling),void 0!==a[h]&&(m.oldValue=a[h]),t(p),p.records_.push(m)}}function s(e){if(this.childList=!!e.childList,this.subtree=!!e.subtree,this.attributes="attributes"in e||!("attributeOldValue"in e||"attributeFilter"in e)?!!e.attributes:!0,this.characterData="characterDataOldValue"in e&&!("characterData"in e)?!0:!!e.characterData,!this.attributes&&(e.attributeOldValue||"attributeFilter"in e)||!this.characterData&&e.characterDataOldValue)throw new TypeError;if(this.characterData=!!e.characterData,this.attributeOldValue=!!e.attributeOldValue,this.characterDataOldValue=!!e.characterDataOldValue,"attributeFilter"in e){if(null==e.attributeFilter||"object"!=typeof e.attributeFilter)throw new TypeError;this.attributeFilter=w.call(e.attributeFilter)}else this.attributeFilter=null}function c(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++v,this.scheduled_=!1}function l(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var u=e.setEndOfMicrotask,d=e.wrapIfNeeded,p=e.wrappers,f=new WeakMap,h=[],m=!1,w=Array.prototype.slice,v=0;c.prototype={constructor:c,observe:function(e,t){e=d(e);var n,r=new s(t),o=f.get(e);o||f.set(e,o=[]);for(var i=0;i<o.length;i++)o[i].observer===this&&(n=o[i],n.removeTransientObservers(),n.options=r);n||(n=new l(this,e,r),o.push(n),this.nodes_.push(e))},disconnect:function(){this.nodes_.forEach(function(e){for(var t=f.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}},l.prototype={addTransientObserver:function(e){if(e!==this.target){t(this.observer),this.transientObservedNodes.push(e);var n=f.get(e);n||f.set(e,n=[]),n.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[];for(var t=0;t<e.length;t++)for(var n=e[t],r=f.get(n),o=0;o<r.length;o++)if(r[o]===this){r.splice(o,1);break}}},e.enqueueMutation=a,e.registerTransientObservers=o,e.wrappers.MutationObserver=c,e.wrappers.MutationRecord=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){this.root=e,this.parent=t}function n(e,t){if(e.treeScope_!==t){e.treeScope_=t;for(var r=e.shadowRoot;r;r=r.olderShadowRoot)r.treeScope_.parent=t;for(var o=e.firstChild;o;o=o.nextSibling)n(o,t)}}function r(n){if(n instanceof e.wrappers.Window,n.treeScope_)return n.treeScope_;var o,i=n.parentNode;return o=i?r(i):new t(n,null),n.treeScope_=o}t.prototype={get renderer(){return this.root instanceof e.wrappers.ShadowRoot?e.getRendererForHost(this.root.host):null},contains:function(e){for(;e;e=e.parent)if(e===this)return!0;return!1}},e.TreeScope=t,e.getTreeScope=r,e.setTreeScope=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e instanceof G.ShadowRoot}function n(e){return k(e).root}function r(e,r){var s=[],c=e;for(s.push(c);c;){var l=a(c);if(l&&l.length>0){for(var u=0;u<l.length;u++){var p=l[u];if(i(p)){var f=n(p),h=f.olderShadowRoot;h&&s.push(h)}s.push(p)}c=l[l.length-1]}else if(t(c)){if(d(e,c)&&o(r))break;c=c.host,s.push(c)}else c=c.parentNode,c&&s.push(c)}return s}function o(e){if(!e)return!1;switch(e.type){case"abort":case"error":case"select":case"change":case"load":case"reset":case"resize":case"scroll":case"selectstart":return!0}return!1}function i(e){return e instanceof HTMLShadowElement}function a(t){return e.getDestinationInsertionPoints(t)}function s(e,t){if(0===e.length)return t;t instanceof G.Window&&(t=t.document);for(var n=k(t),r=e[0],o=k(r),i=l(n,o),a=0;a<e.length;a++){var s=e[a];if(k(s)===i)return s}return e[e.length-1]}function c(e){for(var t=[];e;e=e.parent)t.push(e);return t}function l(e,t){for(var n=c(e),r=c(t),o=null;n.length>0&&r.length>0;){var i=n.pop(),a=r.pop();if(i!==a)break;o=i}return o}function u(e,t,n){t instanceof G.Window&&(t=t.document);var o,i=k(t),a=k(n),s=r(n,e),o=l(i,a);o||(o=a.root);for(var c=o;c;c=c.parent)for(var u=0;u<s.length;u++){var d=s[u];if(k(d)===c)return d}return null}function d(e,t){return k(e)===k(t)}function p(e){if(!K.get(e)&&(K.set(e,!0),h(V(e),V(e.target)),I)){var t=I;throw I=null,t}}function f(e){switch(e.type){case"load":case"beforeunload":case"unload":return!0}return!1}function h(t,n){if(Y.get(t))throw new Error("InvalidStateError");Y.set(t,!0),e.renderAllPending();var o,i,a;if(f(t)&&!t.bubbles){var s=n;s instanceof G.Document&&(a=s.defaultView)&&(i=s,o=[])}if(!o)if(n instanceof G.Window)a=n,o=[];else if(o=r(n,t),!f(t)){var s=o[o.length-1];s instanceof G.Document&&(a=s.defaultView)}return nt.set(t,o),m(t,o,a,i)&&w(t,o,a,i)&&v(t,o,a,i),Z.set(t,rt),$.delete(t,null),Y.delete(t),t.defaultPrevented}function m(e,t,n,r){var o=ot;if(n&&!g(n,e,o,t,r))return!1;for(var i=t.length-1;i>0;i--)if(!g(t[i],e,o,t,r))return!1;return!0}function w(e,t,n,r){var o=it,i=t[0]||n;return g(i,e,o,t,r)}function v(e,t,n,r){for(var o=at,i=1;i<t.length;i++)if(!g(t[i],e,o,t,r))return;n&&t.length>0&&g(n,e,o,t,r)}function g(e,t,n,r,o){var i=z.get(e);if(!i)return!0;var a=o||s(r,e);if(a===e){if(n===ot)return!0;n===at&&(n=it)}else if(n===at&&!t.bubbles)return!0;if("relatedTarget"in t){var c=q(t),l=c.relatedTarget;if(l){if(l instanceof Object&&l.addEventListener){var d=V(l),p=u(t,e,d);if(p===a)return!0}else p=null;J.set(t,p)}}Z.set(t,n);var f=t.type,h=!1;X.set(t,a),$.set(t,e),i.depth++;for(var m=0,w=i.length;w>m;m++){var v=i[m];if(v.removed)h=!0;else if(!(v.type!==f||!v.capture&&n===ot||v.capture&&n===at))try{if("function"==typeof v.handler?v.handler.call(e,t):v.handler.handleEvent(t),et.get(t))return!1}catch(g){I||(I=g)}}if(i.depth--,h&&0===i.depth){var b=i.slice();i.length=0;for(var m=0;m<b.length;m++)b[m].removed||i.push(b[m])}return!Q.get(t)}function b(e,t,n){this.type=e,this.handler=t,this.capture=Boolean(n)}function y(e,t){if(!(e instanceof st))return V(M(st,"Event",e,t));var n=e;return gt||"beforeunload"!==n.type||this instanceof _?void U(n,this):new _(n)}function E(e){return e&&e.relatedTarget?Object.create(e,{relatedTarget:{value:q(e.relatedTarget)}}):e}function S(e,t,n){var r=window[e],o=function(t,n){return t instanceof r?void U(t,this):V(M(r,e,t,n))};if(o.prototype=Object.create(t.prototype),n&&W(o.prototype,n),r)try{F(r,o,new r("temp"))}catch(i){F(r,o,document.createEvent(e))}return o}function T(e,t){return function(){arguments[t]=q(arguments[t]);var n=q(this);n[e].apply(n,arguments)}}function M(e,t,n,r){if(wt)return new e(n,E(r));var o=q(document.createEvent(t)),i=mt[t],a=[n];return Object.keys(i).forEach(function(e){var t=null!=r&&e in r?r[e]:i[e];"relatedTarget"===e&&(t=q(t)),a.push(t)}),o["init"+t].apply(o,a),o}function _(e){y.call(this,e)}function O(e){return"function"==typeof e?!0:e&&e.handleEvent}function L(e){switch(e){case"DOMAttrModified":case"DOMAttributeNameChanged":case"DOMCharacterDataModified":case"DOMElementNameChanged":case"DOMNodeInserted":case"DOMNodeInsertedIntoDocument":case"DOMNodeRemoved":case"DOMNodeRemovedFromDocument":case"DOMSubtreeModified":return!0}return!1}function N(e){U(e,this)}function C(e){return e instanceof G.ShadowRoot&&(e=e.host),q(e)}function D(e,t){var n=z.get(e);if(n)for(var r=0;r<n.length;r++)if(!n[r].removed&&n[r].type===t)return!0;return!1}function j(e,t){for(var n=q(e);n;n=n.parentNode)if(D(V(n),t))return!0;return!1}function H(e){A(e,yt)}function x(t,n,o,i){e.renderAllPending();var a=V(Et.call(B(n),o,i));if(!a)return null;var c=r(a,null),l=c.lastIndexOf(t);return-1==l?null:(c=c.slice(0,l),s(c,t))}function R(e){return function(){var t=tt.get(this);return t&&t[e]&&t[e].value||null}}function P(e){var t=e.slice(2);return function(n){var r=tt.get(this);r||(r=Object.create(null),tt.set(this,r));var o=r[e];if(o&&this.removeEventListener(t,o.wrapped,!1),"function"==typeof n){var i=function(t){var r=n.call(this,t);r===!1?t.preventDefault():"onbeforeunload"===e&&"string"==typeof r&&(t.returnValue=r)};this.addEventListener(t,i,!1),r[e]={value:n,wrapped:i}}}}var I,A=e.forwardMethodsToWrapper,k=e.getTreeScope,W=e.mixin,F=e.registerWrapper,U=e.setWrapper,B=e.unsafeUnwrap,q=e.unwrap,V=e.wrap,G=e.wrappers,z=(new WeakMap,new WeakMap),K=new WeakMap,Y=new WeakMap,X=new WeakMap,$=new WeakMap,J=new WeakMap,Z=new WeakMap,Q=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap,rt=0,ot=1,it=2,at=3;b.prototype={equals:function(e){return this.handler===e.handler&&this.type===e.type&&this.capture===e.capture},get removed(){return null===this.handler},remove:function(){this.handler=null}};var st=window.Event;st.prototype.polymerBlackList_={returnValue:!0,keyLocation:!0},y.prototype={get target(){return X.get(this)},get currentTarget(){return $.get(this)},get eventPhase(){return Z.get(this)},get path(){var e=nt.get(this);return e?e.slice():[]},stopPropagation:function(){Q.set(this,!0)},stopImmediatePropagation:function(){Q.set(this,!0),et.set(this,!0)}},F(st,y,document.createEvent("Event"));var ct=S("UIEvent",y),lt=S("CustomEvent",y),ut={get relatedTarget(){var e=J.get(this);return void 0!==e?e:V(q(this).relatedTarget)}},dt=W({initMouseEvent:T("initMouseEvent",14)},ut),pt=W({initFocusEvent:T("initFocusEvent",5)},ut),ft=S("MouseEvent",ct,dt),ht=S("FocusEvent",ct,pt),mt=Object.create(null),wt=function(){try{new window.FocusEvent("focus")}catch(e){return!1}return!0}();if(!wt){var vt=function(e,t,n){if(n){var r=mt[n];t=W(W({},r),t)}mt[e]=t};vt("Event",{bubbles:!1,cancelable:!1}),vt("CustomEvent",{detail:null},"Event"),vt("UIEvent",{view:null,detail:0},"Event"),vt("MouseEvent",{screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null},"UIEvent"),vt("FocusEvent",{relatedTarget:null},"UIEvent")}var gt=window.BeforeUnloadEvent;_.prototype=Object.create(y.prototype),W(_.prototype,{get returnValue(){return B(this).returnValue},set returnValue(e){B(this).returnValue=e}}),gt&&F(gt,_);var bt=window.EventTarget,yt=["addEventListener","removeEventListener","dispatchEvent"];[Node,Window].forEach(function(e){var t=e.prototype;yt.forEach(function(e){Object.defineProperty(t,e+"_",{value:t[e]})})}),N.prototype={addEventListener:function(e,t,n){if(O(t)&&!L(e)){var r=new b(e,t,n),o=z.get(this);if(o){for(var i=0;i<o.length;i++)if(r.equals(o[i]))return}else o=[],o.depth=0,z.set(this,o);o.push(r);var a=C(this);a.addEventListener_(e,p,!0)}},removeEventListener:function(e,t,n){n=Boolean(n);var r=z.get(this);if(r){for(var o=0,i=!1,a=0;a<r.length;a++)r[a].type===e&&r[a].capture===n&&(o++,r[a].handler===t&&(i=!0,r[a].remove()));if(i&&1===o){var s=C(this);s.removeEventListener_(e,p,!0)}}},dispatchEvent:function(t){var n=q(t),r=n.type;K.set(n,!1),e.renderAllPending();var o;j(this,r)||(o=function(){},this.addEventListener(r,o,!0));try{return q(this).dispatchEvent_(n)}finally{o&&this.removeEventListener(r,o,!0)}}},bt&&F(bt,N);var Et=document.elementFromPoint;e.elementFromPoint=x,e.getEventHandlerGetter=R,e.getEventHandlerSetter=P,e.wrapEventTargetMethods=H,e.wrappers.BeforeUnloadEvent=_,e.wrappers.CustomEvent=lt,e.wrappers.Event=y,e.wrappers.EventTarget=N,e.wrappers.FocusEvent=ht,e.wrappers.MouseEvent=ft,e.wrappers.UIEvent=ct}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,m)}function n(e){l(e,this)}function r(){this.length=0,t(this,"length")}function o(e){for(var t=new r,o=0;o<e.length;o++)t[o]=new n(e[o]);return t.length=o,t}function i(e){a.call(this,e)}var a=e.wrappers.UIEvent,s=e.mixin,c=e.registerWrapper,l=e.setWrapper,u=e.unsafeUnwrap,d=e.wrap,p=window.TouchEvent;if(p){var f;try{f=document.createEvent("TouchEvent")}catch(h){return}var m={enumerable:!1};n.prototype={get target(){return d(u(this).target)}};var w={configurable:!0,enumerable:!0,get:null};["clientX","clientY","screenX","screenY","pageX","pageY","identifier","webkitRadiusX","webkitRadiusY","webkitRotationAngle","webkitForce"].forEach(function(e){w.get=function(){return u(this)[e]},Object.defineProperty(n.prototype,e,w)}),r.prototype={item:function(e){return this[e]}},i.prototype=Object.create(a.prototype),s(i.prototype,{get touches(){return o(u(this).touches)},get targetTouches(){return o(u(this).targetTouches)},get changedTouches(){return o(u(this).changedTouches)},initTouchEvent:function(){throw new Error("Not implemented")}}),c(p,i,f),e.wrappers.Touch=n,e.wrappers.TouchEvent=i,e.wrappers.TouchList=r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,s)}function n(){this.length=0,t(this,"length")}function r(e){if(null==e)return e;for(var t=new n,r=0,o=e.length;o>r;r++)t[r]=a(e[r]);return t.length=o,t}function o(e,t){e.prototype[t]=function(){return r(i(this)[t].apply(i(this),arguments))}}var i=e.unsafeUnwrap,a=e.wrap,s={enumerable:!1};n.prototype={item:function(e){return this[e]}},t(n.prototype,"item"),e.wrappers.NodeList=n,e.addWrapNodeListMethod=o,e.wrapNodeList=r}(window.ShadowDOMPolyfill),function(e){"use strict";e.wrapHTMLCollection=e.wrapNodeList,e.wrappers.HTMLCollection=e.wrappers.NodeList}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){O(e instanceof S)}function n(e){var t=new M;return t[0]=e,t.length=1,t}function r(e,t,n){N(t,"childList",{removedNodes:n,previousSibling:e.previousSibling,nextSibling:e.nextSibling})}function o(e,t){N(e,"childList",{removedNodes:t})}function i(e,t,r,o){if(e instanceof DocumentFragment){var i=s(e);U=!0;for(var a=i.length-1;a>=0;a--)e.removeChild(i[a]),i[a].parentNode_=t;U=!1;for(var a=0;a<i.length;a++)i[a].previousSibling_=i[a-1]||r,i[a].nextSibling_=i[a+1]||o;return r&&(r.nextSibling_=i[0]),o&&(o.previousSibling_=i[i.length-1]),i}var i=n(e),c=e.parentNode;return c&&c.removeChild(e),e.parentNode_=t,e.previousSibling_=r,e.nextSibling_=o,r&&(r.nextSibling_=e),o&&(o.previousSibling_=e),i}function a(e){if(e instanceof DocumentFragment)return s(e);var t=n(e),o=e.parentNode;return o&&r(e,o,t),t}function s(e){for(var t=new M,n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t.length=n,o(e,t),t}function c(e){return e}function l(e,t){R(e,t),e.nodeIsInserted_()}function u(e,t){for(var n=C(t),r=0;r<e.length;r++)l(e[r],n)}function d(e){R(e,new _(e,null))}function p(e){for(var t=0;t<e.length;t++)d(e[t])}function f(e,t){var n=e.nodeType===S.DOCUMENT_NODE?e:e.ownerDocument;n!==t.ownerDocument&&n.adoptNode(t)}function h(t,n){if(n.length){var r=t.ownerDocument;if(r!==n[0].ownerDocument)for(var o=0;o<n.length;o++)e.adoptNodeNoRemove(n[o],r)}}function m(e,t){h(e,t);var n=t.length;if(1===n)return I(t[0]);for(var r=I(e.ownerDocument.createDocumentFragment()),o=0;n>o;o++)r.appendChild(I(t[o]));return r}function w(e){if(void 0!==e.firstChild_)for(var t=e.firstChild_;t;){var n=t;t=t.nextSibling_,n.parentNode_=n.previousSibling_=n.nextSibling_=void 0}e.firstChild_=e.lastChild_=void 0}function v(e){if(e.invalidateShadowRenderer()){for(var t=e.firstChild;t;){O(t.parentNode===e);var n=t.nextSibling,r=I(t),o=r.parentNode;o&&Y.call(o,r),t.previousSibling_=t.nextSibling_=t.parentNode_=null,t=n}e.firstChild_=e.lastChild_=null}else for(var n,i=I(e),a=i.firstChild;a;)n=a.nextSibling,Y.call(i,a),a=n}function g(e){var t=e.parentNode;return t&&t.invalidateShadowRenderer()}function b(e){for(var t,n=0;n<e.length;n++)t=e[n],t.parentNode.removeChild(t)}function y(e,t,n){var r;if(r=k(n?B.call(n,P(e),!1):q.call(P(e),!1)),t){for(var o=e.firstChild;o;o=o.nextSibling)r.appendChild(y(o,!0,n));if(e instanceof F.HTMLTemplateElement)for(var i=r.content,o=e.content.firstChild;o;o=o.nextSibling)i.appendChild(y(o,!0,n))}return r}function E(e,t){if(!t||C(e)!==C(t))return!1;for(var n=t;n;n=n.parentNode)if(n===e)return!0;return!1}function S(e){O(e instanceof V),T.call(this,e),this.parentNode_=void 0,this.firstChild_=void 0,this.lastChild_=void 0,this.nextSibling_=void 0,this.previousSibling_=void 0,this.treeScope_=void 0}var T=e.wrappers.EventTarget,M=e.wrappers.NodeList,_=e.TreeScope,O=e.assert,L=e.defineWrapGetter,N=e.enqueueMutation,C=e.getTreeScope,D=e.isWrapper,j=e.mixin,H=e.registerTransientObservers,x=e.registerWrapper,R=e.setTreeScope,P=e.unsafeUnwrap,I=e.unwrap,A=e.unwrapIfNeeded,k=e.wrap,W=e.wrapIfNeeded,F=e.wrappers,U=!1,B=document.importNode,q=window.Node.prototype.cloneNode,V=window.Node,G=window.DocumentFragment,z=(V.prototype.appendChild,V.prototype.compareDocumentPosition),K=V.prototype.insertBefore,Y=V.prototype.removeChild,X=V.prototype.replaceChild,$=/Trident/.test(navigator.userAgent),J=$?function(e,t){try{Y.call(e,t)}catch(n){if(!(e instanceof G))throw n}}:function(e,t){Y.call(e,t)};S.prototype=Object.create(T.prototype),j(S.prototype,{appendChild:function(e){return this.insertBefore(e,null)},insertBefore:function(e,n){t(e);var r;n?D(n)?r=I(n):(r=n,n=k(r)):(n=null,r=null),n&&O(n.parentNode===this);var o,s=n?n.previousSibling:this.lastChild,c=!this.invalidateShadowRenderer()&&!g(e);if(o=c?a(e):i(e,this,s,n),c)f(this,e),w(this),K.call(P(this),I(e),r);else{s||(this.firstChild_=o[0]),n||(this.lastChild_=o[o.length-1],void 0===this.firstChild_&&(this.firstChild_=this.firstChild));var l=r?r.parentNode:P(this);l?K.call(l,m(this,o),r):h(this,o)}return N(this,"childList",{addedNodes:o,nextSibling:n,previousSibling:s}),u(o,this),e},removeChild:function(e){if(t(e),e.parentNode!==this){for(var r=!1,o=(this.childNodes,this.firstChild);o;o=o.nextSibling)if(o===e){r=!0;break}if(!r)throw new Error("NotFoundError")}var i=I(e),a=e.nextSibling,s=e.previousSibling;if(this.invalidateShadowRenderer()){var c=this.firstChild,l=this.lastChild,u=i.parentNode;u&&J(u,i),c===e&&(this.firstChild_=a),l===e&&(this.lastChild_=s),s&&(s.nextSibling_=a),a&&(a.previousSibling_=s),e.previousSibling_=e.nextSibling_=e.parentNode_=void 0}else w(this),J(P(this),i);return U||N(this,"childList",{removedNodes:n(e),nextSibling:a,previousSibling:s}),H(this,e),e},replaceChild:function(e,r){t(e);var o;if(D(r)?o=I(r):(o=r,r=k(o)),r.parentNode!==this)throw new Error("NotFoundError");var s,c=r.nextSibling,l=r.previousSibling,p=!this.invalidateShadowRenderer()&&!g(e);return p?s=a(e):(c===e&&(c=e.nextSibling),s=i(e,this,l,c)),p?(f(this,e),w(this),X.call(P(this),I(e),o)):(this.firstChild===r&&(this.firstChild_=s[0]),this.lastChild===r&&(this.lastChild_=s[s.length-1]),r.previousSibling_=r.nextSibling_=r.parentNode_=void 0,o.parentNode&&X.call(o.parentNode,m(this,s),o)),N(this,"childList",{addedNodes:s,removedNodes:n(r),nextSibling:c,previousSibling:l}),d(r),u(s,this),r},nodeIsInserted_:function(){for(var e=this.firstChild;e;e=e.nextSibling)e.nodeIsInserted_()},hasChildNodes:function(){return null!==this.firstChild},get parentNode(){return void 0!==this.parentNode_?this.parentNode_:k(P(this).parentNode)},get firstChild(){return void 0!==this.firstChild_?this.firstChild_:k(P(this).firstChild)},get lastChild(){return void 0!==this.lastChild_?this.lastChild_:k(P(this).lastChild)},get nextSibling(){return void 0!==this.nextSibling_?this.nextSibling_:k(P(this).nextSibling)},get previousSibling(){return void 0!==this.previousSibling_?this.previousSibling_:k(P(this).previousSibling)},get parentElement(){for(var e=this.parentNode;e&&e.nodeType!==S.ELEMENT_NODE;)e=e.parentNode;return e},get textContent(){for(var e="",t=this.firstChild;t;t=t.nextSibling)t.nodeType!=S.COMMENT_NODE&&(e+=t.textContent);return e},set textContent(e){null==e&&(e="");var t=c(this.childNodes);if(this.invalidateShadowRenderer()){if(v(this),""!==e){var n=P(this).ownerDocument.createTextNode(e);this.appendChild(n)}}else w(this),P(this).textContent=e;var r=c(this.childNodes);N(this,"childList",{addedNodes:r,removedNodes:t}),p(t),u(r,this)},get childNodes(){for(var e=new M,t=0,n=this.firstChild;n;n=n.nextSibling)e[t++]=n;return e.length=t,e},cloneNode:function(e){return y(this,e)},contains:function(e){return E(this,W(e))},compareDocumentPosition:function(e){return z.call(P(this),A(e))},normalize:function(){for(var e,t,n=c(this.childNodes),r=[],o="",i=0;i<n.length;i++)t=n[i],t.nodeType===S.TEXT_NODE?e||t.data.length?e?(o+=t.data,r.push(t)):e=t:this.removeNode(t):(e&&r.length&&(e.data+=o,b(r)),r=[],o="",e=null,t.childNodes.length&&t.normalize());e&&r.length&&(e.data+=o,b(r))}}),L(S,"ownerDocument"),x(V,S,document.createDocumentFragment()),delete S.prototype.querySelector,delete S.prototype.querySelectorAll,S.prototype=j(Object.create(T.prototype),S.prototype),e.cloneNode=y,e.nodeWasAdded=l,e.nodeWasRemoved=d,e.nodesWereAdded=u,e.nodesWereRemoved=p,e.originalInsertBefore=K,e.originalRemoveChild=Y,e.snapshotNodeList=c,e.wrappers.Node=S}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n,r,o){for(var i=null,a=null,s=0,c=t.length;c>s;s++)i=g(t[s]),!o&&(a=w(i).root)&&a instanceof e.wrappers.ShadowRoot||(r[n++]=i);return n}function n(e){return String(e).replace(/\/deep\//g," ")}function r(e,t){for(var n,o=e.firstElementChild;o;){if(o.matches(t))return o;if(n=r(o,t))return n;o=o.nextElementSibling}return null}function o(e,t){return e.matches(t)}function i(e,t,n){var r=e.localName;return r===t||r===n&&e.namespaceURI===C}function a(){return!0}function s(e,t,n){return e.localName===n}function c(e,t){return e.namespaceURI===t}function l(e,t,n){return e.namespaceURI===t&&e.localName===n}function u(e,t,n,r,o,i){for(var a=e.firstElementChild;a;)r(a,o,i)&&(n[t++]=a),t=u(a,t,n,r,o,i),a=a.nextElementSibling;return t}function d(n,r,o,i,a){var s,c=v(this),l=w(this).root;if(l instanceof e.wrappers.ShadowRoot)return u(this,r,o,n,i,null);if(c instanceof L)s=S.call(c,i);else{if(!(c instanceof N))return u(this,r,o,n,i,null);s=E.call(c,i)}return t(s,r,o,a)}function p(n,r,o,i,a){var s,c=v(this),l=w(this).root;if(l instanceof e.wrappers.ShadowRoot)return u(this,r,o,n,i,a);if(c instanceof L)s=M.call(c,i,a);else{if(!(c instanceof N))return u(this,r,o,n,i,a);s=T.call(c,i,a)}return t(s,r,o,!1)}function f(n,r,o,i,a){var s,c=v(this),l=w(this).root;if(l instanceof e.wrappers.ShadowRoot)return u(this,r,o,n,i,a);if(c instanceof L)s=O.call(c,i,a);else{if(!(c instanceof N))return u(this,r,o,n,i,a);s=_.call(c,i,a)}return t(s,r,o,!1)}var h=e.wrappers.HTMLCollection,m=e.wrappers.NodeList,w=e.getTreeScope,v=e.unsafeUnwrap,g=e.wrap,b=document.querySelector,y=document.documentElement.querySelector,E=document.querySelectorAll,S=document.documentElement.querySelectorAll,T=document.getElementsByTagName,M=document.documentElement.getElementsByTagName,_=document.getElementsByTagNameNS,O=document.documentElement.getElementsByTagNameNS,L=window.Element,N=window.HTMLDocument||window.Document,C="http://www.w3.org/1999/xhtml",D={querySelector:function(t){var o=n(t),i=o!==t;t=o;var a,s=v(this),c=w(this).root;if(c instanceof e.wrappers.ShadowRoot)return r(this,t);if(s instanceof L)a=g(y.call(s,t));else{if(!(s instanceof N))return r(this,t);a=g(b.call(s,t))}return a&&!i&&(c=w(a).root)&&c instanceof e.wrappers.ShadowRoot?r(this,t):a},querySelectorAll:function(e){var t=n(e),r=t!==e;e=t;var i=new m;return i.length=d.call(this,o,0,i,e,r),i}},j={getElementsByTagName:function(e){var t=new h,n="*"===e?a:i;return t.length=p.call(this,n,0,t,e,e.toLowerCase()),t},getElementsByClassName:function(e){return this.querySelectorAll("."+e)},getElementsByTagNameNS:function(e,t){var n=new h,r=null;return r="*"===e?"*"===t?a:s:"*"===t?c:l,n.length=f.call(this,r,0,n,e||null,t),n
}};e.GetElementsByInterface=j,e.SelectorsInterface=D}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.nextSibling;return e}function n(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.previousSibling;return e}var r=e.wrappers.NodeList,o={get firstElementChild(){return t(this.firstChild)},get lastElementChild(){return n(this.lastChild)},get childElementCount(){for(var e=0,t=this.firstElementChild;t;t=t.nextElementSibling)e++;return e},get children(){for(var e=new r,t=0,n=this.firstElementChild;n;n=n.nextElementSibling)e[t++]=n;return e.length=t,e},remove:function(){var e=this.parentNode;e&&e.removeChild(this)}},i={get nextElementSibling(){return t(this.nextSibling)},get previousElementSibling(){return n(this.previousSibling)}};e.ChildNodeInterface=i,e.ParentNodeInterface=o}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}var n=e.ChildNodeInterface,r=e.wrappers.Node,o=e.enqueueMutation,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=window.CharacterData;t.prototype=Object.create(r.prototype),i(t.prototype,{get textContent(){return this.data},set textContent(e){this.data=e},get data(){return s(this).data},set data(e){var t=s(this).data;o(this,"characterData",{oldValue:t}),s(this).data=e}}),i(t.prototype,n),a(c,t,document.createTextNode("")),e.wrappers.CharacterData=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e>>>0}function n(e){r.call(this,e)}var r=e.wrappers.CharacterData,o=(e.enqueueMutation,e.mixin),i=e.registerWrapper,a=window.Text;n.prototype=Object.create(r.prototype),o(n.prototype,{splitText:function(e){e=t(e);var n=this.data;if(e>n.length)throw new Error("IndexSizeError");var r=n.slice(0,e),o=n.slice(e);this.data=r;var i=this.ownerDocument.createTextNode(o);return this.parentNode&&this.parentNode.insertBefore(i,this.nextSibling),i}}),i(a,n,document.createTextNode("")),e.wrappers.Text=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t){e.invalidateRendererBasedOnAttribute(t,"class")}function n(e,t){r(e,this),this.ownerElement_=t}var r=e.setWrapper,o=e.unsafeUnwrap;n.prototype={constructor:n,get length(){return o(this).length},item:function(e){return o(this).item(e)},contains:function(e){return o(this).contains(e)},add:function(){o(this).add.apply(o(this),arguments),t(this.ownerElement_)},remove:function(){o(this).remove.apply(o(this),arguments),t(this.ownerElement_)},toggle:function(){var e=o(this).toggle.apply(o(this),arguments);return t(this.ownerElement_),e},toString:function(){return o(this).toString()}},e.wrappers.DOMTokenList=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n){var r=t.parentNode;if(r&&r.shadowRoot){var o=e.getRendererForHost(r);o.dependsOnAttribute(n)&&o.invalidate()}}function n(e,t,n){u(e,"attributes",{name:t,namespace:null,oldValue:n})}function r(e){a.call(this,e)}var o=e.ChildNodeInterface,i=e.GetElementsByInterface,a=e.wrappers.Node,s=e.wrappers.DOMTokenList,c=e.ParentNodeInterface,l=e.SelectorsInterface,u=(e.addWrapNodeListMethod,e.enqueueMutation),d=e.mixin,p=(e.oneOf,e.registerWrapper),f=e.unsafeUnwrap,h=e.wrappers,m=window.Element,w=["matches","mozMatchesSelector","msMatchesSelector","webkitMatchesSelector"].filter(function(e){return m.prototype[e]}),v=w[0],g=m.prototype[v],b=new WeakMap;r.prototype=Object.create(a.prototype),d(r.prototype,{createShadowRoot:function(){var t=new h.ShadowRoot(this);f(this).polymerShadowRoot_=t;var n=e.getRendererForHost(this);return n.invalidate(),t},get shadowRoot(){return f(this).polymerShadowRoot_||null},setAttribute:function(e,r){var o=f(this).getAttribute(e);f(this).setAttribute(e,r),n(this,e,o),t(this,e)},removeAttribute:function(e){var r=f(this).getAttribute(e);f(this).removeAttribute(e),n(this,e,r),t(this,e)},matches:function(e){return g.call(f(this),e)},get classList(){var e=b.get(this);return e||b.set(this,e=new s(f(this).classList,this)),e},get className(){return f(this).className},set className(e){this.setAttribute("class",e)},get id(){return f(this).id},set id(e){this.setAttribute("id",e)}}),w.forEach(function(e){"matches"!==e&&(r.prototype[e]=function(e){return this.matches(e)})}),m.prototype.webkitCreateShadowRoot&&(r.prototype.webkitCreateShadowRoot=r.prototype.createShadowRoot),d(r.prototype,o),d(r.prototype,i),d(r.prototype,c),d(r.prototype,l),p(m,r,document.createElementNS(null,"x")),e.invalidateRendererBasedOnAttribute=t,e.matchesNames=w,e.wrappers.Element=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case" ":return"&nbsp;"}}function n(e){return e.replace(O,t)}function r(e){return e.replace(L,t)}function o(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}function i(e,t){switch(e.nodeType){case Node.ELEMENT_NODE:for(var o,i=e.tagName.toLowerCase(),s="<"+i,c=e.attributes,l=0;o=c[l];l++)s+=" "+o.name+'="'+n(o.value)+'"';return s+=">",N[i]?s:s+a(e)+"</"+i+">";case Node.TEXT_NODE:var u=e.data;return t&&C[t.localName]?u:r(u);case Node.COMMENT_NODE:return"<!--"+e.data+"-->";default:throw console.error(e),new Error("not implemented")}}function a(e){e instanceof _.HTMLTemplateElement&&(e=e.content);for(var t="",n=e.firstChild;n;n=n.nextSibling)t+=i(n,e);return t}function s(e,t,n){var r=n||"div";e.textContent="";var o=T(e.ownerDocument.createElement(r));o.innerHTML=t;for(var i;i=o.firstChild;)e.appendChild(M(i))}function c(e){h.call(this,e)}function l(e,t){var n=T(e.cloneNode(!1));n.innerHTML=t;for(var r,o=T(document.createDocumentFragment());r=n.firstChild;)o.appendChild(r);return M(o)}function u(t){return function(){return e.renderAllPending(),S(this)[t]}}function d(e){m(c,e,u(e))}function p(t){Object.defineProperty(c.prototype,t,{get:u(t),set:function(n){e.renderAllPending(),S(this)[t]=n},configurable:!0,enumerable:!0})}function f(t){Object.defineProperty(c.prototype,t,{value:function(){return e.renderAllPending(),S(this)[t].apply(S(this),arguments)},configurable:!0,enumerable:!0})}var h=e.wrappers.Element,m=e.defineGetter,w=e.enqueueMutation,v=e.mixin,g=e.nodesWereAdded,b=e.nodesWereRemoved,y=e.registerWrapper,E=e.snapshotNodeList,S=e.unsafeUnwrap,T=e.unwrap,M=e.wrap,_=e.wrappers,O=/[&\u00A0"]/g,L=/[&\u00A0<>]/g,N=o(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),C=o(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]),D=/MSIE/.test(navigator.userAgent),j=window.HTMLElement,H=window.HTMLTemplateElement;c.prototype=Object.create(h.prototype),v(c.prototype,{get innerHTML(){return a(this)},set innerHTML(e){if(D&&C[this.localName])return void(this.textContent=e);var t=E(this.childNodes);this.invalidateShadowRenderer()?this instanceof _.HTMLTemplateElement?s(this.content,e):s(this,e,this.tagName):!H&&this instanceof _.HTMLTemplateElement?s(this.content,e):S(this).innerHTML=e;var n=E(this.childNodes);w(this,"childList",{addedNodes:n,removedNodes:t}),b(t),g(n,this)},get outerHTML(){return i(this,this.parentNode)},set outerHTML(e){var t=this.parentNode;if(t){t.invalidateShadowRenderer();var n=l(t,e);t.replaceChild(n,this)}},insertAdjacentHTML:function(e,t){var n,r;switch(String(e).toLowerCase()){case"beforebegin":n=this.parentNode,r=this;break;case"afterend":n=this.parentNode,r=this.nextSibling;break;case"afterbegin":n=this,r=this.firstChild;break;case"beforeend":n=this,r=null;break;default:return}var o=l(n,t);n.insertBefore(o,r)},get hidden(){return this.hasAttribute("hidden")},set hidden(e){e?this.setAttribute("hidden",""):this.removeAttribute("hidden")}}),["clientHeight","clientLeft","clientTop","clientWidth","offsetHeight","offsetLeft","offsetTop","offsetWidth","scrollHeight","scrollWidth"].forEach(d),["scrollLeft","scrollTop"].forEach(p),["getBoundingClientRect","getClientRects","scrollIntoView"].forEach(f),y(j,c,document.createElement("b")),e.wrappers.HTMLElement=c,e.getInnerHTML=a,e.setInnerHTML=s}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.HTMLCanvasElement;t.prototype=Object.create(n.prototype),r(t.prototype,{getContext:function(){var e=i(this).getContext.apply(i(this),arguments);return e&&a(e)}}),o(s,t,document.createElement("canvas")),e.wrappers.HTMLCanvasElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=window.HTMLContentElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get select(){return this.getAttribute("select")},set select(e){this.setAttribute("select",e)},setAttribute:function(e,t){n.prototype.setAttribute.call(this,e,t),"select"===String(e).toLowerCase()&&this.invalidateShadowRenderer(!0)}}),i&&o(i,t),e.wrappers.HTMLContentElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=window.HTMLFormElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get elements(){return i(a(this).elements)}}),o(s,t,document.createElement("form")),e.wrappers.HTMLFormElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e,t){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var o=i(document.createElement("img"));r.call(this,o),a(o,this),void 0!==e&&(o.width=e),void 0!==t&&(o.height=t)}var r=e.wrappers.HTMLElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLImageElement;t.prototype=Object.create(r.prototype),o(s,t,document.createElement("img")),n.prototype=t.prototype,e.wrappers.HTMLImageElement=t,e.wrappers.Image=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=(e.mixin,e.wrappers.NodeList,e.registerWrapper),o=window.HTMLShadowElement;t.prototype=Object.create(n.prototype),t.prototype.constructor=t,o&&r(o,t),e.wrappers.HTMLShadowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){if(!e.defaultView)return e;var t=d.get(e);if(!t){for(t=e.implementation.createHTMLDocument("");t.lastChild;)t.removeChild(t.lastChild);d.set(e,t)}return t}function n(e){for(var n,r=t(e.ownerDocument),o=c(r.createDocumentFragment());n=e.firstChild;)o.appendChild(n);return o}function r(e){if(o.call(this,e),!p){var t=n(e);u.set(this,l(t))}}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=e.unwrap,l=e.wrap,u=new WeakMap,d=new WeakMap,p=window.HTMLTemplateElement;r.prototype=Object.create(o.prototype),i(r.prototype,{constructor:r,get content(){return p?l(s(this).content):u.get(this)}}),p&&a(p,r),e.wrappers.HTMLTemplateElement=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.registerWrapper,o=window.HTMLMediaElement;o&&(t.prototype=Object.create(n.prototype),r(o,t,document.createElement("audio")),e.wrappers.HTMLMediaElement=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var t=i(document.createElement("audio"));r.call(this,t),a(t,this),t.setAttribute("preload","auto"),void 0!==e&&t.setAttribute("src",e)}var r=e.wrappers.HTMLMediaElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLAudioElement;s&&(t.prototype=Object.create(r.prototype),o(s,t,document.createElement("audio")),n.prototype=t.prototype,e.wrappers.HTMLAudioElement=t,e.wrappers.Audio=n)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e.replace(/\s+/g," ").trim()}function n(e){o.call(this,e)}function r(e,t,n,i){if(!(this instanceof r))throw new TypeError("DOM object constructor cannot be called as a function.");var a=c(document.createElement("option"));o.call(this,a),s(a,this),void 0!==e&&(a.text=e),void 0!==t&&a.setAttribute("value",t),n===!0&&a.setAttribute("selected",""),a.selected=i===!0}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.rewrap,c=e.unwrap,l=e.wrap,u=window.HTMLOptionElement;n.prototype=Object.create(o.prototype),i(n.prototype,{get text(){return t(this.textContent)},set text(e){this.textContent=t(String(e))},get form(){return l(c(this).form)}}),a(u,n,document.createElement("option")),r.prototype=n.prototype,e.wrappers.HTMLOptionElement=n,e.wrappers.Option=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=window.HTMLSelectElement;t.prototype=Object.create(n.prototype),r(t.prototype,{add:function(e,t){"object"==typeof t&&(t=i(t)),i(this).add(i(e),t)},remove:function(e){return void 0===e?void n.prototype.remove.call(this):("object"==typeof e&&(e=i(e)),void i(this).remove(e))},get form(){return a(i(this).form)}}),o(s,t,document.createElement("select")),e.wrappers.HTMLSelectElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=e.wrapHTMLCollection,c=window.HTMLTableElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get caption(){return a(i(this).caption)},createCaption:function(){return a(i(this).createCaption())},get tHead(){return a(i(this).tHead)},createTHead:function(){return a(i(this).createTHead())},createTFoot:function(){return a(i(this).createTFoot())},get tFoot(){return a(i(this).tFoot)},get tBodies(){return s(i(this).tBodies)},createTBody:function(){return a(i(this).createTBody())},get rows(){return s(i(this).rows)},insertRow:function(e){return a(i(this).insertRow(e))}}),o(c,t,document.createElement("table")),e.wrappers.HTMLTableElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableSectionElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get rows(){return i(a(this).rows)},insertRow:function(e){return s(a(this).insertRow(e))}}),o(c,t,document.createElement("thead")),e.wrappers.HTMLTableSectionElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableRowElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get cells(){return i(a(this).cells)},insertCell:function(e){return s(a(this).insertCell(e))}}),o(c,t,document.createElement("tr")),e.wrappers.HTMLTableRowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e.localName){case"content":return new n(e);case"shadow":return new o(e);case"template":return new i(e)}r.call(this,e)}var n=e.wrappers.HTMLContentElement,r=e.wrappers.HTMLElement,o=e.wrappers.HTMLShadowElement,i=e.wrappers.HTMLTemplateElement,a=(e.mixin,e.registerWrapper),s=window.HTMLUnknownElement;t.prototype=Object.create(r.prototype),a(s,t),e.wrappers.HTMLUnknownElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.wrappers.Element,n=e.wrappers.HTMLElement,r=e.registerObject,o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"title"),a=r(i),s=Object.getPrototypeOf(a.prototype).constructor;if(!("classList"in i)){var c=Object.getOwnPropertyDescriptor(t.prototype,"classList");Object.defineProperty(n.prototype,"classList",c),delete t.prototype.classList}e.wrappers.SVGElement=s}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){p.call(this,e)}var n=e.mixin,r=e.registerWrapper,o=e.unwrap,i=e.wrap,a=window.SVGUseElement,s="http://www.w3.org/2000/svg",c=i(document.createElementNS(s,"g")),l=document.createElementNS(s,"use"),u=c.constructor,d=Object.getPrototypeOf(u.prototype),p=d.constructor;t.prototype=Object.create(d),"instanceRoot"in l&&n(t.prototype,{get instanceRoot(){return i(o(this).instanceRoot)},get animatedInstanceRoot(){return i(o(this).animatedInstanceRoot)}}),r(a,t,l),e.wrappers.SVGUseElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.SVGElementInstance;s&&(t.prototype=Object.create(n.prototype),r(t.prototype,{get correspondingElement(){return a(i(this).correspondingElement)},get correspondingUseElement(){return a(i(this).correspondingUseElement)},get parentNode(){return a(i(this).parentNode)},get childNodes(){throw new Error("Not implemented")},get firstChild(){return a(i(this).firstChild)},get lastChild(){return a(i(this).lastChild)},get previousSibling(){return a(i(this).previousSibling)},get nextSibling(){return a(i(this).nextSibling)}}),o(s,t),e.wrappers.SVGElementInstance=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){o(e,this)}var n=e.mixin,r=e.registerWrapper,o=e.setWrapper,i=e.unsafeUnwrap,a=e.unwrap,s=e.unwrapIfNeeded,c=e.wrap,l=window.CanvasRenderingContext2D;n(t.prototype,{get canvas(){return c(i(this).canvas)},drawImage:function(){arguments[0]=s(arguments[0]),i(this).drawImage.apply(i(this),arguments)},createPattern:function(){return arguments[0]=a(arguments[0]),i(this).createPattern.apply(i(this),arguments)}}),r(l,t,document.createElement("canvas").getContext("2d")),e.wrappers.CanvasRenderingContext2D=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){o(e,this)}var n=e.mixin,r=e.registerWrapper,o=e.setWrapper,i=e.unsafeUnwrap,a=e.unwrapIfNeeded,s=e.wrap,c=window.WebGLRenderingContext;if(c){n(t.prototype,{get canvas(){return s(i(this).canvas)},texImage2D:function(){arguments[5]=a(arguments[5]),i(this).texImage2D.apply(i(this),arguments)},texSubImage2D:function(){arguments[6]=a(arguments[6]),i(this).texSubImage2D.apply(i(this),arguments)}});var l=/WebKit/.test(navigator.userAgent)?{drawingBufferHeight:null,drawingBufferWidth:null}:{};r(c,t,l),e.wrappers.WebGLRenderingContext=t}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrap,a=e.unwrapIfNeeded,s=e.wrap,c=window.Range;t.prototype={get startContainer(){return s(o(this).startContainer)},get endContainer(){return s(o(this).endContainer)},get commonAncestorContainer(){return s(o(this).commonAncestorContainer)},setStart:function(e,t){o(this).setStart(a(e),t)},setEnd:function(e,t){o(this).setEnd(a(e),t)},setStartBefore:function(e){o(this).setStartBefore(a(e))},setStartAfter:function(e){o(this).setStartAfter(a(e))},setEndBefore:function(e){o(this).setEndBefore(a(e))},setEndAfter:function(e){o(this).setEndAfter(a(e))},selectNode:function(e){o(this).selectNode(a(e))},selectNodeContents:function(e){o(this).selectNodeContents(a(e))},compareBoundaryPoints:function(e,t){return o(this).compareBoundaryPoints(e,i(t))},extractContents:function(){return s(o(this).extractContents())},cloneContents:function(){return s(o(this).cloneContents())},insertNode:function(e){o(this).insertNode(a(e))},surroundContents:function(e){o(this).surroundContents(a(e))},cloneRange:function(){return s(o(this).cloneRange())},isPointInRange:function(e,t){return o(this).isPointInRange(a(e),t)},comparePoint:function(e,t){return o(this).comparePoint(a(e),t)},intersectsNode:function(e){return o(this).intersectsNode(a(e))},toString:function(){return o(this).toString()}},c.prototype.createContextualFragment&&(t.prototype.createContextualFragment=function(e){return s(o(this).createContextualFragment(e))}),n(window.Range,t,document.createRange()),e.wrappers.Range=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.GetElementsByInterface,n=e.ParentNodeInterface,r=e.SelectorsInterface,o=e.mixin,i=e.registerObject,a=i(document.createDocumentFragment());o(a.prototype,n),o(a.prototype,r),o(a.prototype,t);var s=i(document.createComment(""));e.wrappers.Comment=s,e.wrappers.DocumentFragment=a}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=d(u(e).ownerDocument.createDocumentFragment());n.call(this,t),c(t,this);var o=e.shadowRoot;f.set(this,o),this.treeScope_=new r(this,a(o||e)),p.set(this,e)}var n=e.wrappers.DocumentFragment,r=e.TreeScope,o=e.elementFromPoint,i=e.getInnerHTML,a=e.getTreeScope,s=e.mixin,c=e.rewrap,l=e.setInnerHTML,u=e.unsafeUnwrap,d=e.unwrap,p=new WeakMap,f=new WeakMap,h=/[ \t\n\r\f]/;t.prototype=Object.create(n.prototype),s(t.prototype,{constructor:t,get innerHTML(){return i(this)},set innerHTML(e){l(this,e),this.invalidateShadowRenderer()},get olderShadowRoot(){return f.get(this)||null},get host(){return p.get(this)||null},invalidateShadowRenderer:function(){return p.get(this).invalidateShadowRenderer()},elementFromPoint:function(e,t){return o(this,this.ownerDocument,e,t)},getElementById:function(e){return h.test(e)?null:this.querySelector('[id="'+e+'"]')}}),e.wrappers.ShadowRoot=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.previousSibling_=e.previousSibling,e.nextSibling_=e.nextSibling,e.parentNode_=e.parentNode}function n(n,o,i){var a=x(n),s=x(o),c=i?x(i):null;if(r(o),t(o),i)n.firstChild===i&&(n.firstChild_=i),i.previousSibling_=i.previousSibling;else{n.lastChild_=n.lastChild,n.lastChild===n.firstChild&&(n.firstChild_=n.firstChild);var l=R(a.lastChild);l&&(l.nextSibling_=l.nextSibling)}e.originalInsertBefore.call(a,s,c)}function r(n){var r=x(n),o=r.parentNode;if(o){var i=R(o);t(n),n.previousSibling&&(n.previousSibling.nextSibling_=n),n.nextSibling&&(n.nextSibling.previousSibling_=n),i.lastChild===n&&(i.lastChild_=n),i.firstChild===n&&(i.firstChild_=n),e.originalRemoveChild.call(o,r)}}function o(e){I.set(e,[])}function i(e){var t=I.get(e);return t||I.set(e,t=[]),t}function a(e){for(var t=[],n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t}function s(){for(var e=0;e<F.length;e++){var t=F[e],n=t.parentRenderer;n&&n.dirty||t.render()}F=[]}function c(){M=null,s()}function l(e){var t=k.get(e);return t||(t=new f(e),k.set(e,t)),t}function u(e){var t=D(e).root;return t instanceof C?t:null}function d(e){return l(e.host)}function p(e){this.skip=!1,this.node=e,this.childNodes=[]}function f(e){this.host=e,this.dirty=!1,this.invalidateAttributes(),this.associateNode(e)}function h(e){for(var t=[],n=e.firstChild;n;n=n.nextSibling)E(n)?t.push.apply(t,i(n)):t.push(n);return t}function m(e){if(e instanceof L)return e;if(e instanceof O)return null;for(var t=e.firstChild;t;t=t.nextSibling){var n=m(t);if(n)return n}return null}function w(e,t){i(t).push(e);var n=A.get(e);n?n.push(t):A.set(e,[t])}function v(e){return A.get(e)}function g(e){A.set(e,void 0)}function b(e,t){var n=t.getAttribute("select");if(!n)return!0;if(n=n.trim(),!n)return!0;if(!(e instanceof _))return!1;if(!B.test(n))return!1;try{return e.matches(n)}catch(r){return!1}}function y(e,t){var n=v(t);return n&&n[n.length-1]===e}function E(e){return e instanceof O||e instanceof L}function S(e){return e.shadowRoot}function T(e){for(var t=[],n=e.shadowRoot;n;n=n.olderShadowRoot)t.push(n);return t}var M,_=e.wrappers.Element,O=e.wrappers.HTMLContentElement,L=e.wrappers.HTMLShadowElement,N=e.wrappers.Node,C=e.wrappers.ShadowRoot,D=(e.assert,e.getTreeScope),j=(e.mixin,e.oneOf),H=e.unsafeUnwrap,x=e.unwrap,R=e.wrap,P=e.ArraySplice,I=new WeakMap,A=new WeakMap,k=new WeakMap,W=j(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","setTimeout"]),F=[],U=new P;U.equals=function(e,t){return x(e.node)===t},p.prototype={append:function(e){var t=new p(e);return this.childNodes.push(t),t},sync:function(e){if(!this.skip){for(var t=this.node,o=this.childNodes,i=a(x(t)),s=e||new WeakMap,c=U.calculateSplices(o,i),l=0,u=0,d=0,p=0;p<c.length;p++){for(var f=c[p];d<f.index;d++)u++,o[l++].sync(s);for(var h=f.removed.length,m=0;h>m;m++){var w=R(i[u++]);s.get(w)||r(w)}for(var v=f.addedCount,g=i[u]&&R(i[u]),m=0;v>m;m++){var b=o[l++],y=b.node;n(t,y,g),s.set(y,!0),b.sync(s)}d+=v}for(var p=d;p<o.length;p++)o[p].sync(s)}}},f.prototype={render:function(e){if(this.dirty){this.invalidateAttributes();var t=this.host;this.distribution(t);var n=e||new p(t);this.buildRenderTree(n,t);var r=!e;r&&n.sync(),this.dirty=!1}},get parentRenderer(){return D(this.host).renderer},invalidate:function(){if(!this.dirty){this.dirty=!0;var e=this.parentRenderer;if(e&&e.invalidate(),F.push(this),M)return;M=window[W](c,0)}},distribution:function(e){this.resetAllSubtrees(e),this.distributionResolution(e)},resetAll:function(e){E(e)?o(e):g(e),this.resetAllSubtrees(e)},resetAllSubtrees:function(e){for(var t=e.firstChild;t;t=t.nextSibling)this.resetAll(t);e.shadowRoot&&this.resetAll(e.shadowRoot),e.olderShadowRoot&&this.resetAll(e.olderShadowRoot)},distributionResolution:function(e){if(S(e)){for(var t=e,n=h(t),r=T(t),o=0;o<r.length;o++)this.poolDistribution(r[o],n);for(var o=r.length-1;o>=0;o--){var i=r[o],a=m(i);if(a){var s=i.olderShadowRoot;s&&(n=h(s));for(var c=0;c<n.length;c++)w(n[c],a)}this.distributionResolution(i)}}for(var l=e.firstChild;l;l=l.nextSibling)this.distributionResolution(l)},poolDistribution:function(e,t){if(!(e instanceof L))if(e instanceof O){var n=e;this.updateDependentAttributes(n.getAttribute("select"));for(var r=!1,o=0;o<t.length;o++){var e=t[o];e&&b(e,n)&&(w(e,n),t[o]=void 0,r=!0)}if(!r)for(var i=n.firstChild;i;i=i.nextSibling)w(i,n)}else for(var i=e.firstChild;i;i=i.nextSibling)this.poolDistribution(i,t)},buildRenderTree:function(e,t){for(var n=this.compose(t),r=0;r<n.length;r++){var o=n[r],i=e.append(o);this.buildRenderTree(i,o)}if(S(t)){var a=l(t);a.dirty=!1}},compose:function(e){for(var t=[],n=e.shadowRoot||e,r=n.firstChild;r;r=r.nextSibling)if(E(r)){this.associateNode(n);for(var o=i(r),a=0;a<o.length;a++){var s=o[a];y(r,s)&&t.push(s)}}else t.push(r);return t},invalidateAttributes:function(){this.attributes=Object.create(null)},updateDependentAttributes:function(e){if(e){var t=this.attributes;/\.\w+/.test(e)&&(t["class"]=!0),/#\w+/.test(e)&&(t.id=!0),e.replace(/\[\s*([^\s=\|~\]]+)/g,function(e,n){t[n]=!0})}},dependsOnAttribute:function(e){return this.attributes[e]},associateNode:function(e){H(e).polymerShadowRenderer_=this}};var B=/^(:not\()?[*.#[a-zA-Z_|]/;N.prototype.invalidateShadowRenderer=function(){var e=H(this).polymerShadowRenderer_;return e?(e.invalidate(),!0):!1},O.prototype.getDistributedNodes=L.prototype.getDistributedNodes=function(){return s(),i(this)},_.prototype.getDestinationInsertionPoints=function(){return s(),v(this)||[]},O.prototype.nodeIsInserted_=L.prototype.nodeIsInserted_=function(){this.invalidateShadowRenderer();var e,t=u(this);t&&(e=d(t)),H(this).polymerShadowRenderer_=e,e&&e.invalidate()},e.getRendererForHost=l,e.getShadowTrees=T,e.renderAllPending=s,e.getDestinationInsertionPoints=v,e.visual={insertBefore:n,remove:r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t){if(window[t]){r(!e.wrappers[t]);var c=function(e){n.call(this,e)};c.prototype=Object.create(n.prototype),o(c.prototype,{get form(){return s(a(this).form)}}),i(window[t],c,document.createElement(t.slice(4,-7))),e.wrappers[t]=c}}var n=e.wrappers.HTMLElement,r=e.assert,o=e.mixin,i=e.registerWrapper,a=e.unwrap,s=e.wrap,c=["HTMLButtonElement","HTMLFieldSetElement","HTMLInputElement","HTMLKeygenElement","HTMLLabelElement","HTMLLegendElement","HTMLObjectElement","HTMLOutputElement","HTMLTextAreaElement"];c.forEach(t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}{var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrap,a=e.unwrapIfNeeded,s=e.wrap;window.Selection}t.prototype={get anchorNode(){return s(o(this).anchorNode)},get focusNode(){return s(o(this).focusNode)},addRange:function(e){o(this).addRange(i(e))},collapse:function(e,t){o(this).collapse(a(e),t)},containsNode:function(e,t){return o(this).containsNode(a(e),t)},extend:function(e,t){o(this).extend(a(e),t)},getRangeAt:function(e){return s(o(this).getRangeAt(e))},removeRange:function(e){o(this).removeRange(i(e))},selectAllChildren:function(e){o(this).selectAllChildren(a(e))},toString:function(){return o(this).toString()}},n(window.Selection,t,window.getSelection()),e.wrappers.Selection=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){u.call(this,e),this.treeScope_=new m(this,null)}function n(e){var n=document[e];t.prototype[e]=function(){return N(n.apply(O(this),arguments))}}function r(e,t){j.call(O(t),L(e)),o(e,t)}function o(e,t){e.shadowRoot&&t.adoptNode(e.shadowRoot),e instanceof h&&i(e,t);for(var n=e.firstChild;n;n=n.nextSibling)o(n,t)}function i(e,t){var n=e.olderShadowRoot;n&&t.adoptNode(n)}function a(e){_(e,this)}function s(e,t){var n=document.implementation[t];e.prototype[t]=function(){return N(n.apply(O(this),arguments))}}function c(e,t){var n=document.implementation[t];e.prototype[t]=function(){return n.apply(O(this),arguments)}}var l=e.GetElementsByInterface,u=e.wrappers.Node,d=e.ParentNodeInterface,p=e.wrappers.Selection,f=e.SelectorsInterface,h=e.wrappers.ShadowRoot,m=e.TreeScope,w=e.cloneNode,v=e.defineWrapGetter,g=e.elementFromPoint,b=e.forwardMethodsToWrapper,y=e.matchesNames,E=e.mixin,S=e.registerWrapper,T=e.renderAllPending,M=e.rewrap,_=e.setWrapper,O=e.unsafeUnwrap,L=e.unwrap,N=e.wrap,C=e.wrapEventTargetMethods,D=(e.wrapNodeList,new WeakMap);t.prototype=Object.create(u.prototype),v(t,"documentElement"),v(t,"body"),v(t,"head"),["createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode","getElementById"].forEach(n);var j=document.adoptNode,H=document.getSelection;if(E(t.prototype,{adoptNode:function(e){return e.parentNode&&e.parentNode.removeChild(e),r(e,this),e},elementFromPoint:function(e,t){return g(this,this,e,t)},importNode:function(e,t){return w(e,t,O(this))},getSelection:function(){return T(),new p(H.call(L(this)))},getElementsByName:function(e){return f.querySelectorAll.call(this,"[name="+JSON.stringify(String(e))+"]")}}),document.registerElement){var x=document.registerElement;t.prototype.registerElement=function(t,n){function r(e){return e?void _(e,this):i?document.createElement(i,t):document.createElement(t)}var o,i;if(void 0!==n&&(o=n.prototype,i=n.extends),o||(o=Object.create(HTMLElement.prototype)),e.nativePrototypeTable.get(o))throw new Error("NotSupportedError");for(var a,s=Object.getPrototypeOf(o),c=[];s&&!(a=e.nativePrototypeTable.get(s));)c.push(s),s=Object.getPrototypeOf(s);if(!a)throw new Error("NotSupportedError");for(var l=Object.create(a),u=c.length-1;u>=0;u--)l=Object.create(l);["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"].forEach(function(e){var t=o[e];t&&(l[e]=function(){N(this)instanceof r||M(this),t.apply(N(this),arguments)})});var d={prototype:l};i&&(d.extends=i),r.prototype=o,r.prototype.constructor=r,e.constructorTable.set(l,r),e.nativePrototypeTable.set(o,l);x.call(L(this),t,d);return r},b([window.HTMLDocument||window.Document],["registerElement"])}b([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement,window.HTMLHtmlElement],["appendChild","compareDocumentPosition","contains","getElementsByClassName","getElementsByTagName","getElementsByTagNameNS","insertBefore","querySelector","querySelectorAll","removeChild","replaceChild"].concat(y)),b([window.HTMLDocument||window.Document],["adoptNode","importNode","contains","createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode","elementFromPoint","getElementById","getElementsByName","getSelection"]),E(t.prototype,l),E(t.prototype,d),E(t.prototype,f),E(t.prototype,{get implementation(){var e=D.get(this);return e?e:(e=new a(L(this).implementation),D.set(this,e),e)},get defaultView(){return N(L(this).defaultView)}}),S(window.Document,t,document.implementation.createHTMLDocument("")),window.HTMLDocument&&S(window.HTMLDocument,t),C([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement]),s(a,"createDocumentType"),s(a,"createDocument"),s(a,"createHTMLDocument"),c(a,"hasFeature"),S(window.DOMImplementation,a),b([window.DOMImplementation],["createDocumentType","createDocument","createHTMLDocument","hasFeature"]),e.adoptNodeNoRemove=r,e.wrappers.DOMImplementation=a,e.wrappers.Document=t
}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.wrappers.Selection,o=e.mixin,i=e.registerWrapper,a=e.renderAllPending,s=e.unwrap,c=e.unwrapIfNeeded,l=e.wrap,u=window.Window,d=window.getComputedStyle,p=window.getDefaultComputedStyle,f=window.getSelection;t.prototype=Object.create(n.prototype),u.prototype.getComputedStyle=function(e,t){return l(this||window).getComputedStyle(c(e),t)},p&&(u.prototype.getDefaultComputedStyle=function(e,t){return l(this||window).getDefaultComputedStyle(c(e),t)}),u.prototype.getSelection=function(){return l(this||window).getSelection()},delete window.getComputedStyle,delete window.getDefaultComputedStyle,delete window.getSelection,["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){u.prototype[e]=function(){var t=l(this||window);return t[e].apply(t,arguments)},delete window[e]}),o(t.prototype,{getComputedStyle:function(e,t){return a(),d.call(s(this),c(e),t)},getSelection:function(){return a(),new r(f.call(s(this)))},get document(){return l(s(this).document)}}),p&&(t.prototype.getDefaultComputedStyle=function(e,t){return a(),p.call(s(this),c(e),t)}),i(u,t,window),e.wrappers.Window=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrap,n=window.DataTransfer||window.Clipboard,r=n.prototype.setDragImage;r&&(n.prototype.setDragImage=function(e,n,o){r.call(this,t(e),n,o)})}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t;t=e instanceof i?e:new i(e&&o(e)),r(t,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unwrap,i=window.FormData;i&&(n(i,t,new i),e.wrappers.FormData=t)}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrapIfNeeded,n=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){return n.call(this,t(e))}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=n[e],r=window[t];if(r){var o=document.createElement(e),i=o.constructor;window[t]=i}}var n=(e.isWrapperFor,{a:"HTMLAnchorElement",area:"HTMLAreaElement",audio:"HTMLAudioElement",base:"HTMLBaseElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",col:"HTMLTableColElement",content:"HTMLContentElement",data:"HTMLDataElement",datalist:"HTMLDataListElement",del:"HTMLModElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",embed:"HTMLEmbedElement",fieldset:"HTMLFieldSetElement",font:"HTMLFontElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",head:"HTMLHeadElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",marquee:"HTMLMarqueeElement",menu:"HTMLMenuElement",menuitem:"HTMLMenuItemElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",script:"HTMLScriptElement",select:"HTMLSelectElement",shadow:"HTMLShadowElement",source:"HTMLSourceElement",span:"HTMLSpanElement",style:"HTMLStyleElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",template:"HTMLTemplateElement",textarea:"HTMLTextAreaElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",ul:"HTMLUListElement",video:"HTMLVideoElement"});Object.keys(n).forEach(t),Object.getOwnPropertyNames(e.wrappers).forEach(function(t){window[t]=e.wrappers[t]})}(window.ShadowDOMPolyfill),function(e){function t(e,t){var n="";return Array.prototype.forEach.call(e,function(e){n+=e.textContent+"\n\n"}),t||(n=n.replace(d,"")),n}function n(e){var t=document.createElement("style");return t.textContent=e,t}function r(e){var t=n(e);document.head.appendChild(t);var r=[];if(t.sheet)try{r=t.sheet.cssRules}catch(o){}else console.warn("sheet not found",t);return t.parentNode.removeChild(t),r}function o(){C.initialized=!0,document.body.appendChild(C);var e=C.contentDocument,t=e.createElement("base");t.href=document.baseURI,e.head.appendChild(t)}function i(e){C.initialized||o(),document.body.appendChild(C),e(C.contentDocument),document.body.removeChild(C)}function a(e,t){if(t){var o;if(e.match("@import")&&j){var a=n(e);i(function(e){e.head.appendChild(a.impl),o=Array.prototype.slice.call(a.sheet.cssRules,0),t(o)})}else o=r(e),t(o)}}function s(e){e&&l().appendChild(document.createTextNode(e))}function c(e,t){var r=n(e);r.setAttribute(t,""),r.setAttribute(x,""),document.head.appendChild(r)}function l(){return D||(D=document.createElement("style"),D.setAttribute(x,""),D[x]=!0),D}var u={strictStyling:!1,registry:{},shimStyling:function(e,n,r){var o=this.prepareRoot(e,n,r),i=this.isTypeExtension(r),a=this.makeScopeSelector(n,i),s=t(o,!0);s=this.scopeCssText(s,a),e&&(e.shimmedStyle=s),this.addCssToDocument(s,n)},shimStyle:function(e,t){return this.shimCssText(e.textContent,t)},shimCssText:function(e,t){return e=this.insertDirectives(e),this.scopeCssText(e,t)},makeScopeSelector:function(e,t){return e?t?"[is="+e+"]":e:""},isTypeExtension:function(e){return e&&e.indexOf("-")<0},prepareRoot:function(e,t,n){var r=this.registerRoot(e,t,n);return this.replaceTextInStyles(r.rootStyles,this.insertDirectives),this.removeStyles(e,r.rootStyles),this.strictStyling&&this.applyScopeToContent(e,t),r.scopeStyles},removeStyles:function(e,t){for(var n,r=0,o=t.length;o>r&&(n=t[r]);r++)n.parentNode.removeChild(n)},registerRoot:function(e,t,n){var r=this.registry[t]={root:e,name:t,extendsName:n},o=this.findStyles(e);r.rootStyles=o,r.scopeStyles=r.rootStyles;var i=this.registry[r.extendsName];return i&&(r.scopeStyles=i.scopeStyles.concat(r.scopeStyles)),r},findStyles:function(e){if(!e)return[];var t=e.querySelectorAll("style");return Array.prototype.filter.call(t,function(e){return!e.hasAttribute(R)})},applyScopeToContent:function(e,t){e&&(Array.prototype.forEach.call(e.querySelectorAll("*"),function(e){e.setAttribute(t,"")}),Array.prototype.forEach.call(e.querySelectorAll("template"),function(e){this.applyScopeToContent(e.content,t)},this))},insertDirectives:function(e){return e=this.insertPolyfillDirectivesInCssText(e),this.insertPolyfillRulesInCssText(e)},insertPolyfillDirectivesInCssText:function(e){return e=e.replace(p,function(e,t){return t.slice(0,-2)+"{"}),e.replace(f,function(e,t){return t+" {"})},insertPolyfillRulesInCssText:function(e){return e=e.replace(h,function(e,t){return t.slice(0,-1)}),e.replace(m,function(e,t,n,r){var o=e.replace(t,"").replace(n,"");return r+o})},scopeCssText:function(e,t){var n=this.extractUnscopedRulesFromCssText(e);if(e=this.insertPolyfillHostInCssText(e),e=this.convertColonHost(e),e=this.convertColonHostContext(e),e=this.convertShadowDOMSelectors(e),t){var e,r=this;a(e,function(n){e=r.scopeRules(n,t)})}return e=e+"\n"+n,e.trim()},extractUnscopedRulesFromCssText:function(e){for(var t,n="";t=w.exec(e);)n+=t[1].slice(0,-1)+"\n\n";for(;t=v.exec(e);)n+=t[0].replace(t[2],"").replace(t[1],t[3])+"\n\n";return n},convertColonHost:function(e){return this.convertColonRule(e,E,this.colonHostPartReplacer)},convertColonHostContext:function(e){return this.convertColonRule(e,S,this.colonHostContextPartReplacer)},convertColonRule:function(e,t,n){return e.replace(t,function(e,t,r,o){if(t=O,r){for(var i,a=r.split(","),s=[],c=0,l=a.length;l>c&&(i=a[c]);c++)i=i.trim(),s.push(n(t,i,o));return s.join(",")}return t+o})},colonHostContextPartReplacer:function(e,t,n){return t.match(g)?this.colonHostPartReplacer(e,t,n):e+t+n+", "+t+" "+e+n},colonHostPartReplacer:function(e,t,n){return e+t.replace(g,"")+n},convertShadowDOMSelectors:function(e){for(var t=0;t<N.length;t++)e=e.replace(N[t]," ");return e},scopeRules:function(e,t){var n="";return e&&Array.prototype.forEach.call(e,function(e){if(e.selectorText&&e.style&&void 0!==e.style.cssText)n+=this.scopeSelector(e.selectorText,t,this.strictStyling)+" {\n	",n+=this.propertiesFromRule(e)+"\n}\n\n";else if(e.type===CSSRule.MEDIA_RULE)n+="@media "+e.media.mediaText+" {\n",n+=this.scopeRules(e.cssRules,t),n+="\n}\n\n";else try{e.cssText&&(n+=e.cssText+"\n\n")}catch(r){e.type===CSSRule.KEYFRAMES_RULE&&e.cssRules&&(n+=this.ieSafeCssTextFromKeyFrameRule(e))}},this),n},ieSafeCssTextFromKeyFrameRule:function(e){var t="@keyframes "+e.name+" {";return Array.prototype.forEach.call(e.cssRules,function(e){t+=" "+e.keyText+" {"+e.style.cssText+"}"}),t+=" }"},scopeSelector:function(e,t,n){var r=[],o=e.split(",");return o.forEach(function(e){e=e.trim(),this.selectorNeedsScoping(e,t)&&(e=n&&!e.match(O)?this.applyStrictSelectorScope(e,t):this.applySelectorScope(e,t)),r.push(e)},this),r.join(", ")},selectorNeedsScoping:function(e,t){if(Array.isArray(t))return!0;var n=this.makeScopeMatcher(t);return!e.match(n)},makeScopeMatcher:function(e){return e=e.replace(/\[/g,"\\[").replace(/\[/g,"\\]"),new RegExp("^("+e+")"+T,"m")},applySelectorScope:function(e,t){return Array.isArray(t)?this.applySelectorScopeList(e,t):this.applySimpleSelectorScope(e,t)},applySelectorScopeList:function(e,t){for(var n,r=[],o=0;n=t[o];o++)r.push(this.applySimpleSelectorScope(e,n));return r.join(", ")},applySimpleSelectorScope:function(e,t){return e.match(L)?(e=e.replace(O,t),e.replace(L,t+" ")):t+" "+e},applyStrictSelectorScope:function(e,t){t=t.replace(/\[is=([^\]]*)\]/g,"$1");var n=[" ",">","+","~"],r=e,o="["+t+"]";return n.forEach(function(e){var t=r.split(e);r=t.map(function(e){var t=e.trim().replace(L,"");return t&&n.indexOf(t)<0&&t.indexOf(o)<0&&(e=t.replace(/([^:]*)(:*)(.*)/,"$1"+o+"$2$3")),e}).join(e)}),r},insertPolyfillHostInCssText:function(e){return e.replace(_,b).replace(M,g)},propertiesFromRule:function(e){var t=e.style.cssText;e.style.content&&!e.style.content.match(/['"]+|attr/)&&(t=t.replace(/content:[^;]*;/g,"content: '"+e.style.content+"';"));var n=e.style;for(var r in n)"initial"===n[r]&&(t+=r+": initial; ");return t},replaceTextInStyles:function(e,t){e&&t&&(e instanceof Array||(e=[e]),Array.prototype.forEach.call(e,function(e){e.textContent=t.call(this,e.textContent)},this))},addCssToDocument:function(e,t){e.match("@import")?c(e,t):s(e)}},d=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,p=/\/\*\s*@polyfill ([^*]*\*+([^/*][^*]*\*+)*\/)([^{]*?){/gim,f=/polyfill-next-selector[^}]*content\:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim,h=/\/\*\s@polyfill-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,m=/(polyfill-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,w=/\/\*\s@polyfill-unscoped-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,v=/(polyfill-unscoped-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,g="-shadowcsshost",b="-shadowcsscontext",y=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",E=new RegExp("("+g+y,"gim"),S=new RegExp("("+b+y,"gim"),T="([>\\s~+[.,{:][\\s\\S]*)?$",M=/\:host/gim,_=/\:host-context/gim,O=g+"-no-combinator",L=new RegExp(g,"gim"),N=(new RegExp(b,"gim"),[/\^\^/g,/\^/g,/\/shadow\//g,/\/shadow-deep\//g,/::shadow/g,/\/deep\//g,/::content/g]),C=document.createElement("iframe");C.style.display="none";var D,j=navigator.userAgent.match("Chrome"),H="shim-shadowdom",x="shim-shadowdom-css",R="no-shim";if(window.ShadowDOMPolyfill){s("style { display: none !important; }\n");var P=ShadowDOMPolyfill.wrap(document),I=P.querySelector("head");I.insertBefore(l(),I.childNodes[0]),document.addEventListener("DOMContentLoaded",function(){e.urlResolver;if(window.HTMLImports&&!HTMLImports.useNative){var t="link[rel=stylesheet]["+H+"]",n="style["+H+"]";HTMLImports.importer.documentPreloadSelectors+=","+t,HTMLImports.importer.importsPreloadSelectors+=","+t,HTMLImports.parser.documentSelectors=[HTMLImports.parser.documentSelectors,t,n].join(",");var r=HTMLImports.parser.parseGeneric;HTMLImports.parser.parseGeneric=function(e){if(!e[x]){var t=e.__importElement||e;if(!t.hasAttribute(H))return void r.call(this,e);e.__resource&&(t=e.ownerDocument.createElement("style"),t.textContent=e.__resource),HTMLImports.path.resolveUrlsInStyle(t),t.textContent=u.shimStyle(t),t.removeAttribute(H,""),t.setAttribute(x,""),t[x]=!0,t.parentNode!==I&&(e.parentNode===I?I.replaceChild(t,e):this.addElementToDocument(t)),t.__importParsed=!0,this.markParsingComplete(e),this.parseNext()}};var o=HTMLImports.parser.hasResource;HTMLImports.parser.hasResource=function(e){return"link"===e.localName&&"stylesheet"===e.rel&&e.hasAttribute(H)?e.__resource:o.call(this,e)}}})}e.ShadowCSS=u}(window.WebComponents)),function(){window.ShadowDOMPolyfill?(window.wrap=ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}}(window.WebComponents),function(e){function t(e){y.push(e),b||(b=!0,m(r))}function n(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function r(){b=!1;var e=y;y=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var n=e.takeRecords();o(e),n.length&&(e.callback_(n,e),t=!0)}),t&&r()}function o(e){e.nodes_.forEach(function(t){var n=w.get(t);n&&n.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function i(e,t){for(var n=e;n;n=n.parentNode){var r=w.get(n);if(r)for(var o=0;o<r.length;o++){var i=r[o],a=i.options;if(n===e||a.subtree){var s=t(a);s&&i.enqueue(s)}}}}function a(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++E}function s(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function c(e){var t=new s(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function l(e,t){return S=new s(e,t)}function u(e){return T?T:(T=c(S),T.oldValue=e,T)}function d(){S=T=void 0}function p(e){return e===T||e===S}function f(e,t){return e===t?e:T&&p(e)?T:null}function h(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var m,w=new WeakMap;if(/Trident/.test(navigator.userAgent))m=setTimeout;else if(window.setImmediate)m=window.setImmediate;else{var v=[],g=String(Math.random());window.addEventListener("message",function(e){if(e.data===g){var t=v;v=[],t.forEach(function(e){e()})}}),m=function(e){v.push(e),window.postMessage(g,"*")}}var b=!1,y=[],E=0;a.prototype={observe:function(e,t){if(e=n(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var r=w.get(e);r||w.set(e,r=[]);for(var o,i=0;i<r.length;i++)if(r[i].observer===this){o=r[i],o.removeListeners(),o.options=t;break}o||(o=new h(this,e,t),r.push(o),this.nodes_.push(e)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=w.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){r.removeListeners(),t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var S,T;h.prototype={enqueue:function(e){var n=this.observer.records_,r=n.length;if(n.length>0){var o=n[r-1],i=f(o,e);if(i)return void(n[r-1]=i)}else t(this.observer);n[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=w.get(e);t||w.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=w.get(e),n=0;n<t.length;n++)if(t[n]===this){t.splice(n,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,n=e.relatedNode.namespaceURI,r=e.target,o=new l("attributes",r);o.attributeName=t,o.attributeNamespace=n;var a=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;i(r,function(e){return!e.attributes||e.attributeFilter&&e.attributeFilter.length&&-1===e.attributeFilter.indexOf(t)&&-1===e.attributeFilter.indexOf(n)?void 0:e.attributeOldValue?u(a):o});break;case"DOMCharacterDataModified":var r=e.target,o=l("characterData",r),a=e.prevValue;i(r,function(e){return e.characterData?e.characterDataOldValue?u(a):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s,c,r=e.relatedNode,p=e.target;"DOMNodeInserted"===e.type?(s=[p],c=[]):(s=[],c=[p]);var f=p.previousSibling,h=p.nextSibling,o=l("childList",r);o.addedNodes=s,o.removedNodes=c,o.previousSibling=f,o.nextSibling=h,i(r,function(e){return e.childList?o:void 0})}d()}},e.JsMutationObserver=a,e.MutationObserver||(e.MutationObserver=a)}(this),window.HTMLImports=window.HTMLImports||{flags:{}},function(e){function t(e,t){t=t||h,r(function(){i(e,t)},t)}function n(e){return"complete"===e.readyState||e.readyState===v}function r(e,t){if(n(t))e&&e();else{var o=function(){("complete"===t.readyState||t.readyState===v)&&(t.removeEventListener(g,o),r(e,t))};t.addEventListener(g,o)}}function o(e){e.target.__loaded=!0}function i(e,t){function n(){s==c&&e&&e()}function r(e){o(e),s++,n()}var i=t.querySelectorAll("link[rel=import]"),s=0,c=i.length;if(c)for(var l,u=0;c>u&&(l=i[u]);u++)a(l)?r.call(l,{target:l}):(l.addEventListener("load",r),l.addEventListener("error",r));else n()}function a(e){return d?e.__loaded||e.import&&"loading"!==e.import.readyState:e.__importParsed}function s(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)c(t)&&l(t)}function c(e){return"link"===e.localName&&"import"===e.rel}function l(e){var t=e.import;t?o({target:e}):(e.addEventListener("load",o),e.addEventListener("error",o))}var u="import",d=Boolean(u in document.createElement("link")),p=Boolean(window.ShadowDOMPolyfill),f=function(e){return p?ShadowDOMPolyfill.wrapIfNeeded(e):e},h=f(document),m={get:function(){var e=HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return f(e)},configurable:!0};Object.defineProperty(document,"_currentScript",m),Object.defineProperty(h,"_currentScript",m);var w=/Trident/.test(navigator.userAgent),v=w?"complete":"interactive",g="readystatechange";d&&(new MutationObserver(function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.addedNodes&&s(t.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var e,t=document.querySelectorAll("link[rel=import]"),n=0,r=t.length;r>n&&(e=t[n]);n++)l(e)}()),t(function(){HTMLImports.ready=!0,HTMLImports.readyTime=(new Date).getTime(),h.dispatchEvent(new CustomEvent("HTMLImportsLoaded",{bubbles:!0}))}),e.IMPORT_LINK_TYPE=u,e.useNative=d,e.rootDocument=h,e.whenReady=t,e.isIE=w}(HTMLImports),function(e){var t=[],n=function(e){t.push(e)},r=function(){t.forEach(function(t){t(e)})};e.addModule=n,e.initializeModules=r}(HTMLImports),HTMLImports.addModule(function(e){var t=/(url\()([^)]*)(\))/g,n=/(@import[\s]+(?!url\())([^;]*)(;)/g,r={resolveUrlsInStyle:function(e){var t=e.ownerDocument,n=t.createElement("a");return e.textContent=this.resolveUrlsInCssText(e.textContent,n),e},resolveUrlsInCssText:function(e,r){var o=this.replaceUrls(e,r,t);return o=this.replaceUrls(o,r,n)},replaceUrls:function(e,t,n){return e.replace(n,function(e,n,r,o){var i=r.replace(/["']/g,"");return t.href=i,i=t.href,n+"'"+i+"'"+o})}};e.path=r}),HTMLImports.addModule(function(e){xhr={async:!0,ok:function(e){return e.status>=200&&e.status<300||304===e.status||0===e.status},load:function(t,n,r){var o=new XMLHttpRequest;return(e.flags.debug||e.flags.bust)&&(t+="?"+Math.random()),o.open("GET",t,xhr.async),o.addEventListener("readystatechange",function(){if(4===o.readyState){var e=o.getResponseHeader("Location"),t=null;if(e)var t="/"===e.substr(0,1)?location.origin+e:e;n.call(r,!xhr.ok(o)&&o,o.response||o.responseText,t)}}),o.send(),o},loadDocument:function(e,t,n){this.load(e,t,n).responseType="document"}},e.xhr=xhr}),HTMLImports.addModule(function(e){var t=e.xhr,n=e.flags,r=function(e,t){this.cache={},this.onload=e,this.oncomplete=t,this.inflight=0,this.pending={}};r.prototype={addNodes:function(e){this.inflight+=e.length;for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)this.require(t);this.checkDone()},addNode:function(e){this.inflight++,this.require(e),this.checkDone()},require:function(e){var t=e.src||e.href;e.__nodeUrl=t,this.dedupe(t,e)||this.fetch(t,e)},dedupe:function(e,t){if(this.pending[e])return this.pending[e].push(t),!0;return this.cache[e]?(this.onload(e,t,this.cache[e]),this.tail(),!0):(this.pending[e]=[t],!1)},fetch:function(e,r){if(n.load&&console.log("fetch",e,r),e.match(/^data:/)){var o=e.split(","),i=o[0],a=o[1];a=i.indexOf(";base64")>-1?atob(a):decodeURIComponent(a),setTimeout(function(){this.receive(e,r,null,a)}.bind(this),0)}else{var s=function(t,n,o){this.receive(e,r,t,n,o)}.bind(this);t.load(e,s)}},receive:function(e,t,n,r,o){this.cache[e]=r;for(var i,a=this.pending[e],s=0,c=a.length;c>s&&(i=a[s]);s++)this.onload(e,i,r,n,o),this.tail();this.pending[e]=null},tail:function(){--this.inflight,this.checkDone()},checkDone:function(){this.inflight||this.oncomplete()}},e.Loader=r}),HTMLImports.addModule(function(e){var t=function(e){this.addCallback=e,this.mo=new MutationObserver(this.handler.bind(this))};t.prototype={handler:function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)"childList"===t.type&&t.addedNodes.length&&this.addedNodes(t.addedNodes)},addedNodes:function(e){this.addCallback&&this.addCallback(e);for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.children&&t.children.length&&this.addedNodes(t.children)},observe:function(e){this.mo.observe(e,{childList:!0,subtree:!0})}},e.Observer=t}),HTMLImports.addModule(function(e){function t(e){return"link"===e.localName&&e.rel===u}function n(e){var t=r(e);return"data:text/javascript;charset=utf-8,"+encodeURIComponent(t)}function r(e){return e.textContent+o(e)}function o(e){var t=e.ownerDocument;t.__importedScripts=t.__importedScripts||0;var n=e.ownerDocument.baseURI,r=t.__importedScripts?"-"+t.__importedScripts:"";return t.__importedScripts++,"\n//# sourceURL="+n+r+".js\n"}function i(e){var t=e.ownerDocument.createElement("style");return t.textContent=e.textContent,a.resolveUrlsInStyle(t),t}var a=e.path,s=e.rootDocument,c=e.flags,l=e.isIE,u=e.IMPORT_LINK_TYPE,d="link[rel="+u+"]",p={documentSelectors:d,importsSelectors:[d,"link[rel=stylesheet]","style","script:not([type])",'script[type="text/javascript"]'].join(","),map:{link:"parseLink",script:"parseScript",style:"parseStyle"},dynamicElements:[],parseNext:function(){var e=this.nextToParse();e&&this.parse(e)},parse:function(e){if(this.isParsed(e))return void(c.parse&&console.log("[%s] is already parsed",e.localName));var t=this[this.map[e.localName]];t&&(this.markParsing(e),t.call(this,e))},parseDynamic:function(e,t){this.dynamicElements.push(e),t||this.parseNext()},markParsing:function(e){c.parse&&console.log("parsing",e),this.parsingElement=e},markParsingComplete:function(e){e.__importParsed=!0,this.markDynamicParsingComplete(e),e.__importElement&&(e.__importElement.__importParsed=!0,this.markDynamicParsingComplete(e.__importElement)),this.parsingElement=null,c.parse&&console.log("completed",e)},markDynamicParsingComplete:function(e){var t=this.dynamicElements.indexOf(e);t>=0&&this.dynamicElements.splice(t,1)},parseImport:function(e){if(HTMLImports.__importsParsingHook&&HTMLImports.__importsParsingHook(e),e.import&&(e.import.__importParsed=!0),this.markParsingComplete(e),e.dispatchEvent(e.__resource&&!e.__error?new CustomEvent("load",{bubbles:!1}):new CustomEvent("error",{bubbles:!1})),e.__pending)for(var t;e.__pending.length;)t=e.__pending.shift(),t&&t({target:e});this.parseNext()},parseLink:function(e){t(e)?this.parseImport(e):(e.href=e.href,this.parseGeneric(e))},parseStyle:function(e){var t=e;e=i(e),e.__importElement=t,this.parseGeneric(e)},parseGeneric:function(e){this.trackElement(e),this.addElementToDocument(e)},rootImportForElement:function(e){for(var t=e;t.ownerDocument.__importLink;)t=t.ownerDocument.__importLink;return t},addElementToDocument:function(e){for(var t=this.rootImportForElement(e.__importElement||e),n=t.__insertedElements=t.__insertedElements||0,r=t.nextElementSibling,o=0;n>o;o++)r=r&&r.nextElementSibling;t.parentNode.insertBefore(e,r)},trackElement:function(e,t){var n=this,r=function(r){t&&t(r),n.markParsingComplete(e),n.parseNext()};if(e.addEventListener("load",r),e.addEventListener("error",r),l&&"style"===e.localName){var o=!1;if(-1==e.textContent.indexOf("@import"))o=!0;else if(e.sheet){o=!0;for(var i,a=e.sheet.cssRules,s=a?a.length:0,c=0;s>c&&(i=a[c]);c++)i.type===CSSRule.IMPORT_RULE&&(o=o&&Boolean(i.styleSheet))}o&&e.dispatchEvent(new CustomEvent("load",{bubbles:!1}))}},parseScript:function(t){var r=document.createElement("script");r.__importElement=t,r.src=t.src?t.src:n(t),e.currentScript=t,this.trackElement(r,function(){r.parentNode.removeChild(r),e.currentScript=null}),this.addElementToDocument(r)},nextToParse:function(){return this._mayParse=[],!this.parsingElement&&(this.nextToParseInDoc(s)||this.nextToParseDynamic())},nextToParseInDoc:function(e,n){if(e&&this._mayParse.indexOf(e)<0){this._mayParse.push(e);for(var r,o=e.querySelectorAll(this.parseSelectorsForNode(e)),i=0,a=o.length;a>i&&(r=o[i]);i++)if(!this.isParsed(r))return this.hasResource(r)?t(r)?this.nextToParseInDoc(r.import,r):r:void 0}return n},nextToParseDynamic:function(){return this.dynamicElements[0]},parseSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===s?this.documentSelectors:this.importsSelectors},isParsed:function(e){return e.__importParsed},needsDynamicParsing:function(e){return this.dynamicElements.indexOf(e)>=0},hasResource:function(e){return t(e)&&void 0===e.import?!1:!0}};e.parser=p,e.IMPORT_SELECTOR=d}),HTMLImports.addModule(function(e){function t(e){return n(e,i)}function n(e,t){return"link"===e.localName&&e.getAttribute("rel")===t}function r(e,t){var n=document.implementation.createHTMLDocument(i);n._URL=t;var r=n.createElement("base");r.setAttribute("href",t),n.baseURI||(n.baseURI=t);var o=n.createElement("meta");return o.setAttribute("charset","utf-8"),n.head.appendChild(o),n.head.appendChild(r),n.body.innerHTML=e,window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(n),n}var o=e.flags,i=e.IMPORT_LINK_TYPE,a=e.IMPORT_SELECTOR,s=e.rootDocument,c=e.Loader,l=e.Observer,u=e.parser,d={documents:{},documentPreloadSelectors:a,importsPreloadSelectors:[a].join(","),loadNode:function(e){p.addNode(e)},loadSubtree:function(e){var t=this.marshalNodes(e);p.addNodes(t)},marshalNodes:function(e){return e.querySelectorAll(this.loadSelectorsForNode(e))},loadSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===s?this.documentPreloadSelectors:this.importsPreloadSelectors},loaded:function(e,n,i,a,s){if(o.load&&console.log("loaded",e,n),n.__resource=i,n.__error=a,t(n)){var c=this.documents[e];void 0===c&&(c=a?null:r(i,s||e),c&&(c.__importLink=n,this.bootDocument(c)),this.documents[e]=c),n.import=c}u.parseNext()},bootDocument:function(e){this.loadSubtree(e),this.observer.observe(e),u.parseNext()},loadedAll:function(){u.parseNext()}},p=new c(d.loaded.bind(d),d.loadedAll.bind(d));if(d.observer=new l,!document.baseURI){var f={get:function(){var e=document.querySelector("base");return e?e.href:window.location.href},configurable:!0};Object.defineProperty(document,"baseURI",f),Object.defineProperty(s,"baseURI",f)}e.importer=d,e.importLoader=p}),HTMLImports.addModule(function(e){var t=e.parser,n=e.importer,r={added:function(e){for(var r,o,i,a=0,s=e.length;s>a&&(i=e[a]);a++)r||(r=i.ownerDocument,o=t.isParsed(r)),loading=this.shouldLoadNode(i),loading&&n.loadNode(i),this.shouldParseNode(i)&&o&&t.parseDynamic(i,loading)},shouldLoadNode:function(e){return 1===e.nodeType&&o.call(e,n.loadSelectorsForNode(e))},shouldParseNode:function(e){return 1===e.nodeType&&o.call(e,t.parseSelectorsForNode(e))}};n.observer.addCallback=r.added.bind(r);var o=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector}),function(e){function t(){HTMLImports.importer.bootDocument(n)}if(initializeModules=e.initializeModules,!e.useNative){"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){var n=document.createEvent("HTMLEvents");return n.initEvent(e,t.bubbles===!1?!1:!0,t.cancelable===!1?!1:!0,t.detail),n}),initializeModules();var n=e.rootDocument;"complete"===document.readyState||"interactive"===document.readyState&&!window.attachEvent?t():document.addEventListener("DOMContentLoaded",t)}}(HTMLImports),window.CustomElements=window.CustomElements||{flags:{}},function(e){var t=e.flags,n=[],r=function(e){n.push(e)},o=function(){n.forEach(function(t){t(e)})};e.addModule=r,e.initializeModules=o,e.hasNative=Boolean(document.registerElement),e.useNative=!t.register&&e.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||HTMLImports.useNative)}(CustomElements),CustomElements.addModule(function(e){function t(e,t){n(e,function(e){return t(e)?!0:void r(e,t)}),r(e,t)}function n(e,t,r){var o=e.firstElementChild;if(!o)for(o=e.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)t(o,r)!==!0&&n(o,t,r),o=o.nextElementSibling;return null}function r(e,n){for(var r=e.shadowRoot;r;)t(r,n),r=r.olderShadowRoot}function o(e,t){a=[],i(e,t),a=null}function i(e,t){if(e=wrap(e),!(a.indexOf(e)>=0)){a.push(e);for(var n,r=e.querySelectorAll("link[rel="+s+"]"),o=0,c=r.length;c>o&&(n=r[o]);o++)n.import&&i(n.import,t);t(e)}}var a,s=window.HTMLImports?HTMLImports.IMPORT_LINK_TYPE:"none";e.forDocumentTree=o,e.forSubtree=t}),CustomElements.addModule(function(e){function t(e){return n(e)||r(e)}function n(t){return e.upgrade(t)?!0:void s(t)}function r(e){y(e,function(e){return n(e)?!0:void 0})}function o(e){s(e),p(e)&&y(e,function(e){s(e)})}function i(e){M.push(e),T||(T=!0,setTimeout(a))}function a(){T=!1;for(var e,t=M,n=0,r=t.length;r>n&&(e=t[n]);n++)e();M=[]}function s(e){S?i(function(){c(e)}):c(e)}function c(e){e.__upgraded__&&(e.attachedCallback||e.detachedCallback)&&!e.__attached&&p(e)&&(e.__attached=!0,e.attachedCallback&&e.attachedCallback())}function l(e){u(e),y(e,function(e){u(e)})}function u(e){S?i(function(){d(e)}):d(e)}function d(e){e.__upgraded__&&(e.attachedCallback||e.detachedCallback)&&e.__attached&&!p(e)&&(e.__attached=!1,e.detachedCallback&&e.detachedCallback())}function p(e){for(var t=e,n=wrap(document);t;){if(t==n)return!0;t=t.parentNode||t.host}}function f(e){if(e.shadowRoot&&!e.shadowRoot.__watched){b.dom&&console.log("watching shadow-root for: ",e.localName);for(var t=e.shadowRoot;t;)w(t),t=t.olderShadowRoot}}function h(e){if(b.dom){var n=e[0];if(n&&"childList"===n.type&&n.addedNodes&&n.addedNodes){for(var r=n.addedNodes[0];r&&r!==document&&!r.host;)r=r.parentNode;var o=r&&(r.URL||r._URL||r.host&&r.host.localName)||"";
o=o.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",e.length,o||"")}e.forEach(function(e){"childList"===e.type&&(_(e.addedNodes,function(e){e.localName&&t(e)}),_(e.removedNodes,function(e){e.localName&&l(e)}))}),b.dom&&console.groupEnd()}function m(e){for(e=wrap(e),e||(e=wrap(document));e.parentNode;)e=e.parentNode;var t=e.__observer;t&&(h(t.takeRecords()),a())}function w(e){if(!e.__observer){var t=new MutationObserver(h);t.observe(e,{childList:!0,subtree:!0}),e.__observer=t}}function v(e){e=wrap(e),b.dom&&console.group("upgradeDocument: ",e.baseURI.split("/").pop()),t(e),w(e),b.dom&&console.groupEnd()}function g(e){E(e,v)}var b=e.flags,y=e.forSubtree,E=e.forDocumentTree,S=!window.MutationObserver||window.MutationObserver===window.JsMutationObserver;e.hasPolyfillMutations=S;var T=!1,M=[],_=Array.prototype.forEach.call.bind(Array.prototype.forEach),O=Element.prototype.createShadowRoot;Element.prototype.createShadowRoot=function(){var e=O.call(this);return CustomElements.watchShadow(this),e},e.watchShadow=f,e.upgradeDocumentTree=g,e.upgradeSubtree=r,e.upgradeAll=t,e.attachedNode=o,e.takeRecords=m}),CustomElements.addModule(function(e){function t(t){if(!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var r=t.getAttribute("is"),o=e.getRegisteredDefinition(r||t.localName);if(o){if(r&&o.tag==t.localName)return n(t,o);if(!r&&!o.extends)return n(t,o)}}}function n(t,n){return a.upgrade&&console.group("upgrade:",t.localName),n.is&&t.setAttribute("is",n.is),r(t,n),t.__upgraded__=!0,i(t),e.attachedNode(t),e.upgradeSubtree(t),a.upgrade&&console.groupEnd(),t}function r(e,t){Object.__proto__?e.__proto__=t.prototype:(o(e,t.prototype,t.native),e.__proto__=t.prototype)}function o(e,t,n){for(var r={},o=t;o!==n&&o!==HTMLElement.prototype;){for(var i,a=Object.getOwnPropertyNames(o),s=0;i=a[s];s++)r[i]||(Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i)),r[i]=1);o=Object.getPrototypeOf(o)}}function i(e){e.createdCallback&&e.createdCallback()}var a=e.flags;e.upgrade=t,e.upgradeWithDefinition=n,e.implementPrototype=r}),CustomElements.addModule(function(e){function t(t,r){var c=r||{};if(!t)throw new Error("document.registerElement: first argument `name` must not be empty");if(t.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(t)+"'.");if(o(t))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(t)+"'. The type name is invalid.");if(l(t))throw new Error("DuplicateDefinitionError: a type with name '"+String(t)+"' is already registered");return c.prototype||(c.prototype=Object.create(HTMLElement.prototype)),c.__name=t.toLowerCase(),c.lifecycle=c.lifecycle||{},c.ancestry=i(c.extends),a(c),s(c),n(c.prototype),u(c.__name,c),c.ctor=d(c),c.ctor.prototype=c.prototype,c.prototype.constructor=c.ctor,e.ready&&w(document),c.ctor}function n(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,n){r.call(this,e,n,t)};var n=e.removeAttribute;e.removeAttribute=function(e){r.call(this,e,null,n)},e.setAttribute._polyfilled=!0}}function r(e,t,n){e=e.toLowerCase();var r=this.getAttribute(e);n.apply(this,arguments);var o=this.getAttribute(e);this.attributeChangedCallback&&o!==r&&this.attributeChangedCallback(e,r,o)}function o(e){for(var t=0;t<E.length;t++)if(e===E[t])return!0}function i(e){var t=l(e);return t?i(t.extends).concat([t]):[]}function a(e){for(var t,n=e.extends,r=0;t=e.ancestry[r];r++)n=t.is&&t.tag;e.tag=n||e.__name,n&&(e.is=e.__name)}function s(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var n=document.createElement(e.tag),r=Object.getPrototypeOf(n);r===e.prototype&&(t=r)}for(var o,i=e.prototype;i&&i!==t;)o=Object.getPrototypeOf(i),i.__proto__=o,i=o;e.native=t}}function c(e){return g(M(e.tag),e)}function l(e){return e?S[e.toLowerCase()]:void 0}function u(e,t){S[e]=t}function d(e){return function(){return c(e)}}function p(e,t,n){return e===T?f(t,n):_(e,t)}function f(e,t){var n=l(t||e);if(n){if(e==n.tag&&t==n.is)return new n.ctor;if(!t&&!n.is)return new n.ctor}var r;return t?(r=f(e),r.setAttribute("is",t),r):(r=M(e),e.indexOf("-")>=0&&b(r,HTMLElement),r)}function h(e){var t=O.call(this,e);return v(t),t}var m,w=e.upgradeDocumentTree,v=e.upgrade,g=e.upgradeWithDefinition,b=e.implementPrototype,y=e.useNative,E=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],S={},T="http://www.w3.org/1999/xhtml",M=document.createElement.bind(document),_=document.createElementNS.bind(document),O=Node.prototype.cloneNode;m=Object.__proto__||y?function(e,t){return e instanceof t}:function(e,t){for(var n=e;n;){if(n===t.prototype)return!0;n=n.__proto__}return!1},document.registerElement=t,document.createElement=f,document.createElementNS=p,Node.prototype.cloneNode=h,e.registry=S,e.instanceof=m,e.reservedTagList=E,e.getRegisteredDefinition=l,document.register=document.registerElement}),function(e){function t(){i(wrap(document)),window.HTMLImports&&(HTMLImports.__importsParsingHook=function(e){i(wrap(e.import))}),CustomElements.ready=!0,setTimeout(function(){CustomElements.readyTime=Date.now(),window.HTMLImports&&(CustomElements.elapsed=CustomElements.readyTime-HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})}var n=e.useNative,r=e.initializeModules;if(n){var o=function(){};e.watchShadow=o,e.upgrade=o,e.upgradeAll=o,e.upgradeDocumentTree=o,e.upgradeSubtree=o,e.takeRecords=o,e.instanceof=function(e,t){return e instanceof t}}else r();var i=e.upgradeDocumentTree;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}),"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n},window.CustomEvent.prototype=window.Event.prototype),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var a=window.HTMLImports&&!HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(a,t)}else t()}(window.CustomElements),function(){Function.prototype.bind||(Function.prototype.bind=function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(e,r)}})}(window.WebComponents),function(e){"use strict";function t(){window.Polymer===o&&(window.Polymer=function(){throw new Error('You tried to use polymer without loading it first. To load polymer, <link rel="import" href="components/polymer/polymer.html">')})}if(!window.performance){var n=Date.now();window.performance={now:function(){return Date.now()-n}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var e=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return e?function(t){return e(function(){t(performance.now())})}:function(e){return window.setTimeout(e,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}}());var r=[],o=function(e){"string"!=typeof e&&1===arguments.length&&Array.prototype.push.call(arguments,document._currentScript),r.push(arguments)};window.Polymer=o,e.consumeDeclarations=function(t){e.consumeDeclarations=function(){throw"Possible attempt to load Polymer twice"},t&&t(r),r=null},HTMLImports.useNative?t():addEventListener("DOMContentLoaded",t)}(window.WebComponents),function(){var e=document.createElement("style");e.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var t=document.querySelector("head");t.insertBefore(e,t.firstChild)}(window.WebComponents),function(e){window.Platform=e}(window.WebComponents);;
/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.5.1
window.PolymerGestures={},function(a){var b=!1,c=document.createElement("meta");if(c.createShadowRoot){var d=c.createShadowRoot(),e=document.createElement("span");d.appendChild(e),c.addEventListener("testpath",function(a){a.path&&(b=a.path[0]===e),a.stopPropagation()});var f=new CustomEvent("testpath",{bubbles:!0});document.head.appendChild(c),e.dispatchEvent(f),c.parentNode.removeChild(c),d=e=null}c=null;var g={shadow:function(a){return a?a.shadowRoot||a.webkitShadowRoot:void 0},canTarget:function(a){return a&&Boolean(a.elementFromPoint)},targetingShadow:function(a){var b=this.shadow(a);return this.canTarget(b)?b:void 0},olderShadow:function(a){var b=a.olderShadowRoot;if(!b){var c=a.querySelector("shadow");c&&(b=c.olderShadowRoot)}return b},allShadows:function(a){for(var b=[],c=this.shadow(a);c;)b.push(c),c=this.olderShadow(c);return b},searchRoot:function(a,b,c){var d,e;return a?(d=a.elementFromPoint(b,c),d?e=this.targetingShadow(d):a!==document&&(e=this.olderShadow(a)),this.searchRoot(e,b,c)||d):void 0},owner:function(a){if(!a)return document;for(var b=a;b.parentNode;)b=b.parentNode;return b.nodeType!=Node.DOCUMENT_NODE&&b.nodeType!=Node.DOCUMENT_FRAGMENT_NODE&&(b=document),b},findTarget:function(a){if(b&&a.path&&a.path.length)return a.path[0];var c=a.clientX,d=a.clientY,e=this.owner(a.target);return e.elementFromPoint(c,d)||(e=document),this.searchRoot(e,c,d)},findTouchAction:function(a){var c;if(b&&a.path&&a.path.length){for(var d=a.path,e=0;e<d.length;e++)if(c=d[e],c.nodeType===Node.ELEMENT_NODE&&c.hasAttribute("touch-action"))return c.getAttribute("touch-action")}else for(c=a.target;c;){if(c.nodeType===Node.ELEMENT_NODE&&c.hasAttribute("touch-action"))return c.getAttribute("touch-action");c=c.parentNode||c.host}return"auto"},LCA:function(a,b){if(a===b)return a;if(a&&!b)return a;if(b&&!a)return b;if(!b&&!a)return document;if(a.contains&&a.contains(b))return a;if(b.contains&&b.contains(a))return b;var c=this.depth(a),d=this.depth(b),e=c-d;for(e>=0?a=this.walk(a,e):b=this.walk(b,-e);a&&b&&a!==b;)a=a.parentNode||a.host,b=b.parentNode||b.host;return a},walk:function(a,b){for(var c=0;a&&b>c;c++)a=a.parentNode||a.host;return a},depth:function(a){for(var b=0;a;)b++,a=a.parentNode||a.host;return b},deepContains:function(a,b){var c=this.LCA(a,b);return c===a},insideNode:function(a,b,c){var d=a.getBoundingClientRect();return d.left<=b&&b<=d.right&&d.top<=c&&c<=d.bottom},path:function(a){var c;if(b&&a.path&&a.path.length)c=a.path;else{c=[];for(var d=this.findTarget(a);d;)c.push(d),d=d.parentNode||d.host}return c}};a.targetFinding=g,a.findTarget=g.findTarget.bind(g),a.deepContains=g.deepContains.bind(g),a.insideNode=g.insideNode}(window.PolymerGestures),function(){function a(a){return"html /deep/ "+b(a)}function b(a){return'[touch-action="'+a+'"]'}function c(a){return"{ -ms-touch-action: "+a+"; touch-action: "+a+";}"}var d=["none","auto","pan-x","pan-y",{rule:"pan-x pan-y",selectors:["pan-x pan-y","pan-y pan-x"]},"manipulation"],e="",f="string"==typeof document.head.style.touchAction,g=!window.ShadowDOMPolyfill&&document.head.createShadowRoot;if(f){d.forEach(function(d){String(d)===d?(e+=b(d)+c(d)+"\n",g&&(e+=a(d)+c(d)+"\n")):(e+=d.selectors.map(b)+c(d.rule)+"\n",g&&(e+=d.selectors.map(a)+c(d.rule)+"\n"))});var h=document.createElement("style");h.textContent=e,document.head.appendChild(h)}}(),function(a){var b=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","pageX","pageY"],c=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0],d=function(){return function(){}},e={preventTap:d,makeBaseEvent:function(a,b){var c=document.createEvent("Event");return c.initEvent(a,b.bubbles||!1,b.cancelable||!1),c.preventTap=e.preventTap(c),c},makeGestureEvent:function(a,b){b=b||Object.create(null);for(var c,d=this.makeBaseEvent(a,b),e=0,f=Object.keys(b);e<f.length;e++)c=f[e],d[c]=b[c];return d},makePointerEvent:function(a,d){d=d||Object.create(null);for(var e,f=this.makeBaseEvent(a,d),g=0;g<b.length;g++)e=b[g],f[e]=d[e]||c[g];f.buttons=d.buttons||0;var h=0;return h=d.pressure?d.pressure:f.buttons?.5:0,f.x=f.clientX,f.y=f.clientY,f.pointerId=d.pointerId||0,f.width=d.width||0,f.height=d.height||0,f.pressure=h,f.tiltX=d.tiltX||0,f.tiltY=d.tiltY||0,f.pointerType=d.pointerType||"",f.hwTimestamp=d.hwTimestamp||0,f.isPrimary=d.isPrimary||!1,f._source=d._source||"",f}};a.eventFactory=e}(window.PolymerGestures),function(a){function b(){if(c){var a=new Map;return a.pointers=d,a}this.keys=[],this.values=[]}var c=window.Map&&window.Map.prototype.forEach,d=function(){return this.size};b.prototype={set:function(a,b){var c=this.keys.indexOf(a);c>-1?this.values[c]=b:(this.keys.push(a),this.values.push(b))},has:function(a){return this.keys.indexOf(a)>-1},"delete":function(a){var b=this.keys.indexOf(a);b>-1&&(this.keys.splice(b,1),this.values.splice(b,1))},get:function(a){var b=this.keys.indexOf(a);return this.values[b]},clear:function(){this.keys.length=0,this.values.length=0},forEach:function(a,b){this.values.forEach(function(c,d){a.call(b,c,this.keys[d],this)},this)},pointers:function(){return this.keys.length}},a.PointerMap=b}(window.PolymerGestures),function(a){var b,c=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","which","pageX","pageY","timeStamp","preventTap","tapPrevented","_source"],d=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0,function(){},!1],e="undefined"!=typeof SVGElementInstance,f=a.eventFactory,g={IS_IOS:!1,pointermap:new a.PointerMap,requiredGestures:new a.PointerMap,eventMap:Object.create(null),eventSources:Object.create(null),eventSourceList:[],gestures:[],dependencyMap:{down:{listeners:0,index:-1},up:{listeners:0,index:-1}},gestureQueue:[],registerSource:function(a,b){var c=b,d=c.events;d&&(d.forEach(function(a){c[a]&&(this.eventMap[a]=c[a].bind(c))},this),this.eventSources[a]=c,this.eventSourceList.push(c))},registerGesture:function(a,b){var c=Object.create(null);c.listeners=0,c.index=this.gestures.length;for(var d,e=0;e<b.exposes.length;e++)d=b.exposes[e].toLowerCase(),this.dependencyMap[d]=c;this.gestures.push(b)},register:function(a,b){for(var c,d=this.eventSourceList.length,e=0;d>e&&(c=this.eventSourceList[e]);e++)c.register.call(c,a,b)},unregister:function(a){for(var b,c=this.eventSourceList.length,d=0;c>d&&(b=this.eventSourceList[d]);d++)b.unregister.call(b,a)},down:function(a){this.requiredGestures.set(a.pointerId,b),this.fireEvent("down",a)},move:function(a){a.type="move",this.fillGestureQueue(a)},up:function(a){this.fireEvent("up",a),this.requiredGestures["delete"](a.pointerId)},cancel:function(a){a.tapPrevented=!0,this.fireEvent("up",a),this.requiredGestures["delete"](a.pointerId)},addGestureDependency:function(a,b){var c=a._pgEvents;if(c&&b)for(var d,e,f,g=Object.keys(c),h=0;h<g.length;h++)f=g[h],c[f]>0&&(d=this.dependencyMap[f],e=d?d.index:-1,b[e]=!0)},eventHandler:function(c){var d=c.type;if("touchstart"===d||"mousedown"===d||"pointerdown"===d||"MSPointerDown"===d)if(c._handledByPG||(b={}),this.IS_IOS){var e=c;if("touchstart"===d){var f=c.changedTouches[0];e={target:c.target,clientX:f.clientX,clientY:f.clientY,path:c.path}}for(var g,h=c.path||a.targetFinding.path(e),i=0;i<h.length;i++)g=h[i],this.addGestureDependency(g,b)}else this.addGestureDependency(c.currentTarget,b);if(!c._handledByPG){var j=this.eventMap&&this.eventMap[d];j&&j(c),c._handledByPG=!0}},listen:function(a,b){for(var c,d=0,e=b.length;e>d&&(c=b[d]);d++)this.addEvent(a,c)},unlisten:function(a,b){for(var c,d=0,e=b.length;e>d&&(c=b[d]);d++)this.removeEvent(a,c)},addEvent:function(a,b){a.addEventListener(b,this.boundHandler)},removeEvent:function(a,b){a.removeEventListener(b,this.boundHandler)},makeEvent:function(a,b){var c=f.makePointerEvent(a,b);return c.preventDefault=b.preventDefault,c.tapPrevented=b.tapPrevented,c._target=c._target||b.target,c},fireEvent:function(a,b){var c=this.makeEvent(a,b);return this.dispatchEvent(c)},cloneEvent:function(a){for(var b,f=Object.create(null),g=0;g<c.length;g++)b=c[g],f[b]=a[b]||d[g],("target"===b||"relatedTarget"===b)&&e&&f[b]instanceof SVGElementInstance&&(f[b]=f[b].correspondingUseElement);return f.preventDefault=function(){a.preventDefault()},f},dispatchEvent:function(a){var b=a._target;if(b){b.dispatchEvent(a);var c=this.cloneEvent(a);c.target=b,this.fillGestureQueue(c)}},gestureTrigger:function(){for(var a,b,c=0;c<this.gestureQueue.length;c++)if(a=this.gestureQueue[c],b=a._requiredGestures)for(var d,e,f=0;f<this.gestures.length;f++)b[f]&&(d=this.gestures[f],e=d[a.type],e&&e.call(d,a));this.gestureQueue.length=0},fillGestureQueue:function(a){this.gestureQueue.length||requestAnimationFrame(this.boundGestureTrigger),a._requiredGestures=this.requiredGestures.get(a.pointerId),this.gestureQueue.push(a)}};g.boundHandler=g.eventHandler.bind(g),g.boundGestureTrigger=g.gestureTrigger.bind(g),a.dispatcher=g,a.activateGesture=function(a,b){var c=b.toLowerCase(),d=g.dependencyMap[c];if(d){var e=g.gestures[d.index];if(a._pgListeners||(g.register(a),a._pgListeners=0),e){var f,h=e.defaultActions&&e.defaultActions[c];switch(a.nodeType){case Node.ELEMENT_NODE:f=a;break;case Node.DOCUMENT_FRAGMENT_NODE:f=a.host;break;default:f=null}h&&f&&!f.hasAttribute("touch-action")&&f.setAttribute("touch-action",h)}a._pgEvents||(a._pgEvents={}),a._pgEvents[c]=(a._pgEvents[c]||0)+1,a._pgListeners++}return Boolean(d)},a.addEventListener=function(b,c,d,e){d&&(a.activateGesture(b,c),b.addEventListener(c,d,e))},a.deactivateGesture=function(a,b){var c=b.toLowerCase(),d=g.dependencyMap[c];return d&&(a._pgListeners>0&&a._pgListeners--,0===a._pgListeners&&g.unregister(a),a._pgEvents&&(a._pgEvents[c]>0?a._pgEvents[c]--:a._pgEvents[c]=0)),Boolean(d)},a.removeEventListener=function(b,c,d,e){d&&(a.deactivateGesture(b,c),b.removeEventListener(c,d,e))}}(window.PolymerGestures),function(a){var b=a.dispatcher,c=b.pointermap,d=25,e=[0,1,4,2],f=0,g=/Linux.*Firefox\//i,h=function(){if(g.test(navigator.userAgent))return!1;try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(a){return!1}}(),i={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup"],exposes:["down","up","move"],register:function(a){b.listen(a,this.events)},unregister:function(a){a!==document&&b.unlisten(a,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(a){for(var b,c=this.lastTouches,e=a.clientX,f=a.clientY,g=0,h=c.length;h>g&&(b=c[g]);g++){var i=Math.abs(e-b.x),j=Math.abs(f-b.y);if(d>=i&&d>=j)return!0}},prepareEvent:function(a){var c=b.cloneEvent(a);if(c.pointerId=this.POINTER_ID,c.isPrimary=!0,c.pointerType=this.POINTER_TYPE,c._source="mouse",!h){var d=a.type,g=e[a.which]||0;"mousedown"===d?f|=g:"mouseup"===d&&(f&=~g),c.buttons=f}return c},mousedown:function(d){if(!this.isEventSimulatedFromTouch(d)){var e=(c.has(this.POINTER_ID),this.prepareEvent(d));e.target=a.findTarget(d),c.set(this.POINTER_ID,e.target),b.down(e)}},mousemove:function(a){if(!this.isEventSimulatedFromTouch(a)){var d=c.get(this.POINTER_ID);if(d){var e=this.prepareEvent(a);e.target=d,0===(h?e.buttons:e.which)?(h||(f=e.buttons=0),b.cancel(e),this.cleanupMouse(e.buttons)):b.move(e)}}},mouseup:function(d){if(!this.isEventSimulatedFromTouch(d)){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(this.POINTER_ID),b.up(e),this.cleanupMouse(e.buttons)}},cleanupMouse:function(a){0===a&&c["delete"](this.POINTER_ID)}};a.mouseEvents=i}(window.PolymerGestures),function(a){var b=a.dispatcher,c=(a.targetFinding.allShadows.bind(a.targetFinding),b.pointermap),d=(Array.prototype.map.call.bind(Array.prototype.map),2500),e=25,f=200,g=20,h=!1,i={IS_IOS:!1,events:["touchstart","touchmove","touchend","touchcancel"],exposes:["down","up","move"],register:function(a,c){(this.IS_IOS?c:!c)&&b.listen(a,this.events)},unregister:function(a){this.IS_IOS||b.unlisten(a,this.events)},scrollTypes:{EMITTER:"none",XSCROLLER:"pan-x",YSCROLLER:"pan-y"},touchActionToScrollType:function(a){var b=a,c=this.scrollTypes;return b===c.EMITTER?"none":b===c.XSCROLLER?"X":b===c.YSCROLLER?"Y":"XY"},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(a){return this.firstTouch===a.identifier},setPrimaryTouch:function(a){(0===c.pointers()||1===c.pointers()&&c.has(1))&&(this.firstTouch=a.identifier,this.firstXY={X:a.clientX,Y:a.clientY},this.firstTarget=a.target,this.scrolling=null,this.cancelResetClickCount())},removePrimaryPointer:function(a){a.isPrimary&&(this.firstTouch=null,this.firstXY=null,this.resetClickCount())},clickCount:0,resetId:null,resetClickCount:function(){var a=function(){this.clickCount=0,this.resetId=null}.bind(this);this.resetId=setTimeout(a,f)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},typeToButtons:function(a){var b=0;return("touchstart"===a||"touchmove"===a)&&(b=1),b},findTarget:function(b,d){if("touchstart"===this.currentTouchEvent.type){if(this.isPrimaryTouch(b)){var e={clientX:b.clientX,clientY:b.clientY,path:this.currentTouchEvent.path,target:this.currentTouchEvent.target};return a.findTarget(e)}return a.findTarget(b)}return c.get(d)},touchToPointer:function(a){var c=this.currentTouchEvent,d=b.cloneEvent(a),e=d.pointerId=a.identifier+2;d.target=this.findTarget(a,e),d.bubbles=!0,d.cancelable=!0,d.detail=this.clickCount,d.buttons=this.typeToButtons(c.type),d.width=a.webkitRadiusX||a.radiusX||0,d.height=a.webkitRadiusY||a.radiusY||0,d.pressure=a.webkitForce||a.force||.5,d.isPrimary=this.isPrimaryTouch(a),d.pointerType=this.POINTER_TYPE,d._source="touch";var f=this;return d.preventDefault=function(){f.scrolling=!1,f.firstXY=null,c.preventDefault()},d},processTouches:function(a,b){var d=a.changedTouches;this.currentTouchEvent=a;for(var e,f,g=0;g<d.length;g++)e=d[g],f=this.touchToPointer(e),"touchstart"===a.type&&c.set(f.pointerId,f.target),c.has(f.pointerId)&&b.call(this,f),("touchend"===a.type||a._cancel)&&this.cleanUpPointer(f)},shouldScroll:function(b){if(this.firstXY){var c,d=a.targetFinding.findTouchAction(b),e=this.touchActionToScrollType(d);if("none"===e)c=!1;else if("XY"===e)c=!0;else{var f=b.changedTouches[0],g=e,h="Y"===e?"X":"Y",i=Math.abs(f["client"+g]-this.firstXY[g]),j=Math.abs(f["client"+h]-this.firstXY[h]);c=i>=j}return c}},findTouch:function(a,b){for(var c,d=0,e=a.length;e>d&&(c=a[d]);d++)if(c.identifier===b)return!0},vacuumTouches:function(a){var b=a.touches;if(c.pointers()>=b.length){var d=[];c.forEach(function(a,c){if(1!==c&&!this.findTouch(b,c-2)){var e=a;d.push(e)}},this),d.forEach(function(a){this.cancel(a),c["delete"](a.pointerId)},this)}},touchstart:function(a){this.vacuumTouches(a),this.setPrimaryTouch(a.changedTouches[0]),this.dedupSynthMouse(a),this.scrolling||(this.clickCount++,this.processTouches(a,this.down))},down:function(a){b.down(a)},touchmove:function(a){if(h)a.cancelable&&this.processTouches(a,this.move);else if(this.scrolling){if(this.firstXY){var b=a.changedTouches[0],c=b.clientX-this.firstXY.X,d=b.clientY-this.firstXY.Y,e=Math.sqrt(c*c+d*d);e>=g&&(this.touchcancel(a),this.scrolling=!0,this.firstXY=null)}}else null===this.scrolling&&this.shouldScroll(a)?this.scrolling=!0:(this.scrolling=!1,a.preventDefault(),this.processTouches(a,this.move))},move:function(a){b.move(a)},touchend:function(a){this.dedupSynthMouse(a),this.processTouches(a,this.up)},up:function(c){c.relatedTarget=a.findTarget(c),b.up(c)},cancel:function(a){b.cancel(a)},touchcancel:function(a){a._cancel=!0,this.processTouches(a,this.cancel)},cleanUpPointer:function(a){c["delete"](a.pointerId),this.removePrimaryPointer(a)},dedupSynthMouse:function(b){var c=a.mouseEvents.lastTouches,e=b.changedTouches[0];if(this.isPrimaryTouch(e)){var f={x:e.clientX,y:e.clientY};c.push(f);var g=function(a,b){var c=a.indexOf(b);c>-1&&a.splice(c,1)}.bind(null,c,f);setTimeout(g,d)}}},j=Event.prototype.stopImmediatePropagation||Event.prototype.stopPropagation;document.addEventListener("click",function(b){var c=b.clientX,d=b.clientY,f=function(a){var b=Math.abs(c-a.x),f=Math.abs(d-a.y);return e>=b&&e>=f},g=a.mouseEvents.lastTouches.some(f),h=a.targetFinding.path(b);if(g){for(var k=0;k<h.length;k++)if(h[k]===i.firstTarget)return;b.preventDefault(),j.call(b)}},!0),a.touchEvents=i}(window.PolymerGestures),function(a){var b=a.dispatcher,c=b.pointermap,d=window.MSPointerEvent&&"number"==typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,e={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel"],register:function(a){b.listen(a,this.events)},unregister:function(a){a!==document&&b.unlisten(a,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(a){var c=a;return c=b.cloneEvent(a),d&&(c.pointerType=this.POINTER_TYPES[a.pointerType]),c._source="ms",c},cleanup:function(a){c["delete"](a)},MSPointerDown:function(d){var e=this.prepareEvent(d);e.target=a.findTarget(d),c.set(d.pointerId,e.target),b.down(e)},MSPointerMove:function(a){var d=c.get(a.pointerId);if(d){var e=this.prepareEvent(a);e.target=d,b.move(e)}},MSPointerUp:function(d){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(e.pointerId),b.up(e),this.cleanup(d.pointerId)},MSPointerCancel:function(d){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(e.pointerId),b.cancel(e),this.cleanup(d.pointerId)}};a.msEvents=e}(window.PolymerGestures),function(a){var b=a.dispatcher,c=b.pointermap,d={events:["pointerdown","pointermove","pointerup","pointercancel"],prepareEvent:function(a){var c=b.cloneEvent(a);return c._source="pointer",c},register:function(a){b.listen(a,this.events)},unregister:function(a){a!==document&&b.unlisten(a,this.events)},cleanup:function(a){c["delete"](a)},pointerdown:function(d){var e=this.prepareEvent(d);e.target=a.findTarget(d),c.set(e.pointerId,e.target),b.down(e)},pointermove:function(a){var d=c.get(a.pointerId);if(d){var e=this.prepareEvent(a);e.target=d,b.move(e)}},pointerup:function(d){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(e.pointerId),b.up(e),this.cleanup(d.pointerId)},pointercancel:function(d){var e=this.prepareEvent(d);e.relatedTarget=a.findTarget(d),e.target=c.get(e.pointerId),b.cancel(e),this.cleanup(d.pointerId)}};a.pointerEvents=d}(window.PolymerGestures),function(a){var b=a.dispatcher,c=window.navigator;window.PointerEvent?b.registerSource("pointer",a.pointerEvents):c.msPointerEnabled?b.registerSource("ms",a.msEvents):(b.registerSource("mouse",a.mouseEvents),void 0!==window.ontouchstart&&b.registerSource("touch",a.touchEvents));var d=navigator.userAgent,e=d.match(/iPad|iPhone|iPod/)&&"ontouchstart"in window;b.IS_IOS=e,a.touchEvents.IS_IOS=e,b.register(document,!0)}(window.PolymerGestures),function(a){var b=a.dispatcher,c=a.eventFactory,d=new a.PointerMap,e={events:["down","move","up"],exposes:["trackstart","track","trackx","tracky","trackend"],defaultActions:{track:"none",trackx:"pan-y",tracky:"pan-x"},WIGGLE_THRESHOLD:4,clampDir:function(a){return a>0?1:-1},calcPositionDelta:function(a,b){var c=0,d=0;return a&&b&&(c=b.pageX-a.pageX,d=b.pageY-a.pageY),{x:c,y:d}},fireTrack:function(a,b,d){var e=d,f=this.calcPositionDelta(e.downEvent,b),g=this.calcPositionDelta(e.lastMoveEvent,b);if(g.x)e.xDirection=this.clampDir(g.x);else if("trackx"===a)return;if(g.y)e.yDirection=this.clampDir(g.y);else if("tracky"===a)return;var h={bubbles:!0,cancelable:!0,trackInfo:e.trackInfo,relatedTarget:b.relatedTarget,pointerType:b.pointerType,pointerId:b.pointerId,_source:"track"};"tracky"!==a&&(h.x=b.x,h.dx=f.x,h.ddx=g.x,h.clientX=b.clientX,h.pageX=b.pageX,h.screenX=b.screenX,h.xDirection=e.xDirection),"trackx"!==a&&(h.dy=f.y,h.ddy=g.y,h.y=b.y,h.clientY=b.clientY,h.pageY=b.pageY,h.screenY=b.screenY,h.yDirection=e.yDirection);var i=c.makeGestureEvent(a,h);e.downTarget.dispatchEvent(i)},down:function(a){if(a.isPrimary&&("mouse"===a.pointerType?1===a.buttons:!0)){var b={downEvent:a,downTarget:a.target,trackInfo:{},lastMoveEvent:null,xDirection:0,yDirection:0,tracking:!1};d.set(a.pointerId,b)}},move:function(a){var b=d.get(a.pointerId);if(b){if(!b.tracking){var c=this.calcPositionDelta(b.downEvent,a),e=c.x*c.x+c.y*c.y;e>this.WIGGLE_THRESHOLD&&(b.tracking=!0,b.lastMoveEvent=b.downEvent,this.fireTrack("trackstart",a,b))}b.tracking&&(this.fireTrack("track",a,b),this.fireTrack("trackx",a,b),this.fireTrack("tracky",a,b)),b.lastMoveEvent=a}},up:function(a){var b=d.get(a.pointerId);b&&(b.tracking&&this.fireTrack("trackend",a,b),d["delete"](a.pointerId))}};b.registerGesture("track",e)}(window.PolymerGestures),function(a){var b=a.dispatcher,c=a.eventFactory,d={HOLD_DELAY:200,WIGGLE_THRESHOLD:16,events:["down","move","up"],exposes:["hold","holdpulse","release"],heldPointer:null,holdJob:null,pulse:function(){var a=Date.now()-this.heldPointer.timeStamp,b=this.held?"holdpulse":"hold";this.fireHold(b,a),this.held=!0},cancel:function(){clearInterval(this.holdJob),this.held&&this.fireHold("release"),this.held=!1,this.heldPointer=null,this.target=null,this.holdJob=null},down:function(a){a.isPrimary&&!this.heldPointer&&(this.heldPointer=a,this.target=a.target,this.holdJob=setInterval(this.pulse.bind(this),this.HOLD_DELAY))},up:function(a){this.heldPointer&&this.heldPointer.pointerId===a.pointerId&&this.cancel()},move:function(a){if(this.heldPointer&&this.heldPointer.pointerId===a.pointerId){var b=a.clientX-this.heldPointer.clientX,c=a.clientY-this.heldPointer.clientY;b*b+c*c>this.WIGGLE_THRESHOLD&&this.cancel()}},fireHold:function(a,b){var d={bubbles:!0,cancelable:!0,pointerType:this.heldPointer.pointerType,pointerId:this.heldPointer.pointerId,x:this.heldPointer.clientX,y:this.heldPointer.clientY,_source:"hold"};b&&(d.holdTime=b);var e=c.makeGestureEvent(a,d);this.target.dispatchEvent(e)}};b.registerGesture("hold",d)}(window.PolymerGestures),function(a){var b=a.dispatcher,c=a.eventFactory,d=new a.PointerMap,e={events:["down","up"],exposes:["tap"],down:function(a){a.isPrimary&&!a.tapPrevented&&d.set(a.pointerId,{target:a.target,buttons:a.buttons,x:a.clientX,y:a.clientY})},shouldTap:function(a,b){var c=!0;return"mouse"===a.pointerType&&(c=1^a.buttons&&1&b.buttons),c&&!a.tapPrevented},up:function(b){var e=d.get(b.pointerId);if(e&&this.shouldTap(b,e)){var f=a.targetFinding.LCA(e.target,b.relatedTarget);if(f){var g=c.makeGestureEvent("tap",{bubbles:!0,cancelable:!0,x:b.clientX,y:b.clientY,detail:b.detail,pointerType:b.pointerType,pointerId:b.pointerId,altKey:b.altKey,ctrlKey:b.ctrlKey,metaKey:b.metaKey,shiftKey:b.shiftKey,_source:"tap"});f.dispatchEvent(g)}}d["delete"](b.pointerId)}};c.preventTap=function(a){return function(){a.tapPrevented=!0,d["delete"](a.pointerId)}},b.registerGesture("tap",e)}(window.PolymerGestures),function(a){var b=a.dispatcher,c=a.eventFactory,d=new a.PointerMap,e=180/Math.PI,f={events:["down","up","move","cancel"],exposes:["pinchstart","pinch","pinchend","rotate"],defaultActions:{pinch:"none",rotate:"none"},reference:{},down:function(b){if(d.set(b.pointerId,b),2==d.pointers()){var c=this.calcChord(),e=this.calcAngle(c);this.reference={angle:e,diameter:c.diameter,target:a.targetFinding.LCA(c.a.target,c.b.target)},this.firePinch("pinchstart",c.diameter,c)}},up:function(a){var b=d.get(a.pointerId),c=d.pointers();if(b){if(2===c){var e=this.calcChord();this.firePinch("pinchend",e.diameter,e)}d["delete"](a.pointerId)}},move:function(a){d.has(a.pointerId)&&(d.set(a.pointerId,a),d.pointers()>1&&this.calcPinchRotate())},cancel:function(a){this.up(a)},firePinch:function(a,b,d){var e=b/this.reference.diameter,f=c.makeGestureEvent(a,{bubbles:!0,cancelable:!0,scale:e,centerX:d.center.x,centerY:d.center.y,_source:"pinch"});this.reference.target.dispatchEvent(f)},fireRotate:function(a,b){var d=Math.round((a-this.reference.angle)%360),e=c.makeGestureEvent("rotate",{bubbles:!0,cancelable:!0,angle:d,centerX:b.center.x,centerY:b.center.y,_source:"pinch"});this.reference.target.dispatchEvent(e)},calcPinchRotate:function(){var a=this.calcChord(),b=a.diameter,c=this.calcAngle(a);b!=this.reference.diameter&&this.firePinch("pinch",b,a),c!=this.reference.angle&&this.fireRotate(c,a)},calcChord:function(){var a=[];d.forEach(function(b){a.push(b)});for(var b,c,e,f=0,g={a:a[0],b:a[1]},h=0;h<a.length;h++)for(var i=a[h],j=h+1;j<a.length;j++){var k=a[j];b=Math.abs(i.clientX-k.clientX),c=Math.abs(i.clientY-k.clientY),e=b+c,e>f&&(f=e,g={a:i,b:k})}return b=Math.abs(g.a.clientX+g.b.clientX)/2,c=Math.abs(g.a.clientY+g.b.clientY)/2,g.center={x:b,y:c},g.diameter=f,g},calcAngle:function(a){var b=a.a.clientX-a.b.clientX,c=a.a.clientY-a.b.clientY;return(360+Math.atan2(c,b)*e)%360}};b.registerGesture("pinch",f)}(window.PolymerGestures),function(a){"use strict";function b(a,b){if(!a)throw new Error("ASSERT: "+b)}function c(a){return a>=48&&57>=a}function d(a){return 32===a||9===a||11===a||12===a||160===a||a>=5760&&" ᠎             　﻿".indexOf(String.fromCharCode(a))>0}function e(a){return 10===a||13===a||8232===a||8233===a}function f(a){return 36===a||95===a||a>=65&&90>=a||a>=97&&122>=a}function g(a){return 36===a||95===a||a>=65&&90>=a||a>=97&&122>=a||a>=48&&57>=a}function h(a){return"this"===a}function i(){for(;Y>X&&d(W.charCodeAt(X));)++X}function j(){var a,b;for(a=X++;Y>X&&(b=W.charCodeAt(X),g(b));)++X;return W.slice(a,X)}function k(){var a,b,c;return a=X,b=j(),c=1===b.length?S.Identifier:h(b)?S.Keyword:"null"===b?S.NullLiteral:"true"===b||"false"===b?S.BooleanLiteral:S.Identifier,{type:c,value:b,range:[a,X]}}function l(){var a,b,c=X,d=W.charCodeAt(X),e=W[X];switch(d){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:return++X,{type:S.Punctuator,value:String.fromCharCode(d),range:[c,X]};default:if(a=W.charCodeAt(X+1),61===a)switch(d){case 37:case 38:case 42:case 43:case 45:case 47:case 60:case 62:case 124:return X+=2,{type:S.Punctuator,value:String.fromCharCode(d)+String.fromCharCode(a),range:[c,X]};case 33:case 61:return X+=2,61===W.charCodeAt(X)&&++X,{type:S.Punctuator,value:W.slice(c,X),range:[c,X]}}}return b=W[X+1],e===b&&"&|".indexOf(e)>=0?(X+=2,{type:S.Punctuator,value:e+b,range:[c,X]}):"<>=!+-*%&|^/".indexOf(e)>=0?(++X,{type:S.Punctuator,value:e,range:[c,X]}):void s({},V.UnexpectedToken,"ILLEGAL")}function m(){var a,d,e;if(e=W[X],b(c(e.charCodeAt(0))||"."===e,"Numeric literal must start with a decimal digit or a decimal point"),d=X,a="","."!==e){for(a=W[X++],e=W[X],"0"===a&&e&&c(e.charCodeAt(0))&&s({},V.UnexpectedToken,"ILLEGAL");c(W.charCodeAt(X));)a+=W[X++];e=W[X]}if("."===e){for(a+=W[X++];c(W.charCodeAt(X));)a+=W[X++];e=W[X]}if("e"===e||"E"===e)if(a+=W[X++],e=W[X],("+"===e||"-"===e)&&(a+=W[X++]),c(W.charCodeAt(X)))for(;c(W.charCodeAt(X));)a+=W[X++];else s({},V.UnexpectedToken,"ILLEGAL");return f(W.charCodeAt(X))&&s({},V.UnexpectedToken,"ILLEGAL"),{type:S.NumericLiteral,value:parseFloat(a),range:[d,X]}}function n(){var a,c,d,f="",g=!1;for(a=W[X],b("'"===a||'"'===a,"String literal must starts with a quote"),c=X,++X;Y>X;){if(d=W[X++],d===a){a="";break}if("\\"===d)if(d=W[X++],d&&e(d.charCodeAt(0)))"\r"===d&&"\n"===W[X]&&++X;else switch(d){case"n":f+="\n";break;case"r":f+="\r";break;case"t":f+="	";break;case"b":f+="\b";break;case"f":f+="\f";break;case"v":f+="";break;default:f+=d}else{if(e(d.charCodeAt(0)))break;f+=d}}return""!==a&&s({},V.UnexpectedToken,"ILLEGAL"),{type:S.StringLiteral,value:f,octal:g,range:[c,X]}}function o(a){return a.type===S.Identifier||a.type===S.Keyword||a.type===S.BooleanLiteral||a.type===S.NullLiteral}function p(){var a;return i(),X>=Y?{type:S.EOF,range:[X,X]}:(a=W.charCodeAt(X),40===a||41===a||58===a?l():39===a||34===a?n():f(a)?k():46===a?c(W.charCodeAt(X+1))?m():l():c(a)?m():l())}function q(){var a;return a=$,X=a.range[1],$=p(),X=a.range[1],a}function r(){var a;a=X,$=p(),X=a}function s(a,c){var d,e=Array.prototype.slice.call(arguments,2),f=c.replace(/%(\d)/g,function(a,c){return b(c<e.length,"Message reference must be in range"),e[c]});throw d=new Error(f),d.index=X,d.description=f,d}function t(a){s(a,V.UnexpectedToken,a.value)}function u(a){var b=q();(b.type!==S.Punctuator||b.value!==a)&&t(b)}function v(a){return $.type===S.Punctuator&&$.value===a}function w(a){return $.type===S.Keyword&&$.value===a}function x(){var a=[];for(u("[");!v("]");)v(",")?(q(),a.push(null)):(a.push(bb()),v("]")||u(","));return u("]"),Z.createArrayExpression(a)}function y(){var a;return i(),a=q(),a.type===S.StringLiteral||a.type===S.NumericLiteral?Z.createLiteral(a):Z.createIdentifier(a.value)}function z(){var a,b;return a=$,i(),(a.type===S.EOF||a.type===S.Punctuator)&&t(a),b=y(),u(":"),Z.createProperty("init",b,bb())}function A(){var a=[];for(u("{");!v("}");)a.push(z()),v("}")||u(",");return u("}"),Z.createObjectExpression(a)}function B(){var a;return u("("),a=bb(),u(")"),a}function C(){var a,b,c;return v("(")?B():(a=$.type,a===S.Identifier?c=Z.createIdentifier(q().value):a===S.StringLiteral||a===S.NumericLiteral?c=Z.createLiteral(q()):a===S.Keyword?w("this")&&(q(),c=Z.createThisExpression()):a===S.BooleanLiteral?(b=q(),b.value="true"===b.value,c=Z.createLiteral(b)):a===S.NullLiteral?(b=q(),b.value=null,c=Z.createLiteral(b)):v("[")?c=x():v("{")&&(c=A()),c?c:void t(q()))}function D(){var a=[];if(u("("),!v(")"))for(;Y>X&&(a.push(bb()),!v(")"));)u(",");return u(")"),a}function E(){var a;return a=q(),o(a)||t(a),Z.createIdentifier(a.value)}function F(){return u("."),E()}function G(){var a;return u("["),a=bb(),u("]"),a}function H(){var a,b,c;for(a=C();;)if(v("["))c=G(),a=Z.createMemberExpression("[",a,c);else if(v("."))c=F(),a=Z.createMemberExpression(".",a,c);else{if(!v("("))break;b=D(),a=Z.createCallExpression(a,b)}return a}function I(){var a,b;return $.type!==S.Punctuator&&$.type!==S.Keyword?b=ab():v("+")||v("-")||v("!")?(a=q(),b=I(),b=Z.createUnaryExpression(a.value,b)):w("delete")||w("void")||w("typeof")?s({},V.UnexpectedToken):b=ab(),b}function J(a){var b=0;if(a.type!==S.Punctuator&&a.type!==S.Keyword)return 0;switch(a.value){case"||":b=1;break;case"&&":b=2;break;case"==":case"!=":case"===":case"!==":b=6;break;case"<":case">":case"<=":case">=":case"instanceof":b=7;break;case"in":b=7;break;case"+":case"-":b=9;break;case"*":case"/":case"%":b=11}return b}function K(){var a,b,c,d,e,f,g,h;if(g=I(),b=$,c=J(b),0===c)return g;for(b.prec=c,q(),e=I(),d=[g,b,e];(c=J($))>0;){for(;d.length>2&&c<=d[d.length-2].prec;)e=d.pop(),f=d.pop().value,g=d.pop(),a=Z.createBinaryExpression(f,g,e),d.push(a);b=q(),b.prec=c,d.push(b),a=I(),d.push(a)}for(h=d.length-1,a=d[h];h>1;)a=Z.createBinaryExpression(d[h-1].value,d[h-2],a),h-=2;return a}function L(){var a,b,c;return a=K(),v("?")&&(q(),b=L(),u(":"),c=L(),a=Z.createConditionalExpression(a,b,c)),a}function M(){var a,b;return a=q(),a.type!==S.Identifier&&t(a),b=v("(")?D():[],Z.createFilter(a.value,b)}function N(){for(;v("|");)q(),M()}function O(){i(),r();var a=bb();a&&(","===$.value||"in"==$.value&&a.type===U.Identifier?Q(a):(N(),"as"===$.value?P(a):Z.createTopLevel(a))),$.type!==S.EOF&&t($)}function P(a){q();var b=q().value;Z.createAsExpression(a,b)}function Q(a){var b;","===$.value&&(q(),$.type!==S.Identifier&&t($),b=q().value),q();var c=bb();N(),Z.createInExpression(a.name,b,c)}function R(a,b){return Z=b,W=a,X=0,Y=W.length,$=null,_={labelSet:{}},O()}var S,T,U,V,W,X,Y,Z,$,_;S={BooleanLiteral:1,EOF:2,Identifier:3,Keyword:4,NullLiteral:5,NumericLiteral:6,Punctuator:7,StringLiteral:8},T={},T[S.BooleanLiteral]="Boolean",T[S.EOF]="<end>",T[S.Identifier]="Identifier",T[S.Keyword]="Keyword",T[S.NullLiteral]="Null",T[S.NumericLiteral]="Numeric",T[S.Punctuator]="Punctuator",T[S.StringLiteral]="String",U={ArrayExpression:"ArrayExpression",BinaryExpression:"BinaryExpression",CallExpression:"CallExpression",ConditionalExpression:"ConditionalExpression",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",Identifier:"Identifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",ObjectExpression:"ObjectExpression",Program:"Program",Property:"Property",ThisExpression:"ThisExpression",UnaryExpression:"UnaryExpression"},V={UnexpectedToken:"Unexpected token %0",UnknownLabel:"Undefined label '%0'",Redeclaration:"%0 '%1' has already been declared"};
var ab=H,bb=L;a.esprima={parse:R}}(this),function(a){"use strict";function b(a,b,d,e){var f;try{if(f=c(a),f.scopeIdent&&(d.nodeType!==Node.ELEMENT_NODE||"TEMPLATE"!==d.tagName||"bind"!==b&&"repeat"!==b))throw Error("as and in can only be used within <template bind/repeat>")}catch(g){return void console.error("Invalid expression syntax: "+a,g)}return function(a,b,c){var d=f.getBinding(a,e,c);return f.scopeIdent&&d&&(b.polymerExpressionScopeIdent_=f.scopeIdent,f.indexIdent&&(b.polymerExpressionIndexIdent_=f.indexIdent)),d}}function c(a){var b=q[a];if(!b){var c=new j;esprima.parse(a,c),b=new l(c),q[a]=b}return b}function d(a){this.value=a,this.valueFn_=void 0}function e(a){this.name=a,this.path=Path.get(a)}function f(a,b,c){this.computed="["==c,this.dynamicDeps="function"==typeof a||a.dynamicDeps||this.computed&&!(b instanceof d),this.simplePath=!this.dynamicDeps&&(b instanceof e||b instanceof d)&&(a instanceof f||a instanceof e),this.object=this.simplePath?a:i(a),this.property=!this.computed||this.simplePath?b:i(b)}function g(a,b){this.name=a,this.args=[];for(var c=0;c<b.length;c++)this.args[c]=i(b[c])}function h(){throw Error("Not Implemented")}function i(a){return"function"==typeof a?a:a.valueFn()}function j(){this.expression=null,this.filters=[],this.deps={},this.currentPath=void 0,this.scopeIdent=void 0,this.indexIdent=void 0,this.dynamicDeps=!1}function k(a){this.value_=a}function l(a){if(this.scopeIdent=a.scopeIdent,this.indexIdent=a.indexIdent,!a.expression)throw Error("No expression found.");this.expression=a.expression,i(this.expression),this.filters=a.filters,this.dynamicDeps=a.dynamicDeps}function m(a){return String(a).replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}function n(a,b){for(;a[t]&&!Object.prototype.hasOwnProperty.call(a,b);)a=a[t];return a}function o(a){switch(a){case"":return!1;case"false":case"null":case"true":return!0}return isNaN(Number(a))?!1:!0}function p(){}var q=Object.create(null);d.prototype={valueFn:function(){if(!this.valueFn_){var a=this.value;this.valueFn_=function(){return a}}return this.valueFn_}},e.prototype={valueFn:function(){if(!this.valueFn_){var a=(this.name,this.path);this.valueFn_=function(b,c){return c&&c.addPath(b,a),a.getValueFrom(b)}}return this.valueFn_},setValue:function(a,b){return 1==this.path.length&&(a=n(a,this.path[0])),this.path.setValueFrom(a,b)}},f.prototype={get fullPath(){if(!this.fullPath_){var a=this.object instanceof f?this.object.fullPath.slice():[this.object.name];a.push(this.property instanceof e?this.property.name:this.property.value),this.fullPath_=Path.get(a)}return this.fullPath_},valueFn:function(){if(!this.valueFn_){var a=this.object;if(this.simplePath){var b=this.fullPath;this.valueFn_=function(a,c){return c&&c.addPath(a,b),b.getValueFrom(a)}}else if(this.computed){var c=this.property;this.valueFn_=function(b,d,e){var f=a(b,d,e),g=c(b,d,e);return d&&d.addPath(f,[g]),f?f[g]:void 0}}else{var b=Path.get(this.property.name);this.valueFn_=function(c,d,e){var f=a(c,d,e);return d&&d.addPath(f,b),b.getValueFrom(f)}}}return this.valueFn_},setValue:function(a,b){if(this.simplePath)return this.fullPath.setValueFrom(a,b),b;var c=this.object(a),d=this.property instanceof e?this.property.name:this.property(a);return c[d]=b}},g.prototype={transform:function(a,b,c,d,e){var f=c[this.name],g=a;if(f)g=void 0;else if(f=g[this.name],!f)return void console.error("Cannot find function or filter: "+this.name);if(d?f=f.toModel:"function"==typeof f.toDOM&&(f=f.toDOM),"function"!=typeof f)return void console.error("Cannot find function or filter: "+this.name);for(var h=e||[],j=0;j<this.args.length;j++)h.push(i(this.args[j])(a,b,c));return f.apply(g,h)}};var r={"+":function(a){return+a},"-":function(a){return-a},"!":function(a){return!a}},s={"+":function(a,b){return a+b},"-":function(a,b){return a-b},"*":function(a,b){return a*b},"/":function(a,b){return a/b},"%":function(a,b){return a%b},"<":function(a,b){return b>a},">":function(a,b){return a>b},"<=":function(a,b){return b>=a},">=":function(a,b){return a>=b},"==":function(a,b){return a==b},"!=":function(a,b){return a!=b},"===":function(a,b){return a===b},"!==":function(a,b){return a!==b},"&&":function(a,b){return a&&b},"||":function(a,b){return a||b}};j.prototype={createUnaryExpression:function(a,b){if(!r[a])throw Error("Disallowed operator: "+a);return b=i(b),function(c,d,e){return r[a](b(c,d,e))}},createBinaryExpression:function(a,b,c){if(!s[a])throw Error("Disallowed operator: "+a);switch(b=i(b),c=i(c),a){case"||":return this.dynamicDeps=!0,function(a,d,e){return b(a,d,e)||c(a,d,e)};case"&&":return this.dynamicDeps=!0,function(a,d,e){return b(a,d,e)&&c(a,d,e)}}return function(d,e,f){return s[a](b(d,e,f),c(d,e,f))}},createConditionalExpression:function(a,b,c){return a=i(a),b=i(b),c=i(c),this.dynamicDeps=!0,function(d,e,f){return a(d,e,f)?b(d,e,f):c(d,e,f)}},createIdentifier:function(a){var b=new e(a);return b.type="Identifier",b},createMemberExpression:function(a,b,c){var d=new f(b,c,a);return d.dynamicDeps&&(this.dynamicDeps=!0),d},createCallExpression:function(a,b){if(!(a instanceof e))throw Error("Only identifier function invocations are allowed");var c=new g(a.name,b);return function(a,b,d){return c.transform(a,b,d,!1)}},createLiteral:function(a){return new d(a.value)},createArrayExpression:function(a){for(var b=0;b<a.length;b++)a[b]=i(a[b]);return function(b,c,d){for(var e=[],f=0;f<a.length;f++)e.push(a[f](b,c,d));return e}},createProperty:function(a,b,c){return{key:b instanceof e?b.name:b.value,value:c}},createObjectExpression:function(a){for(var b=0;b<a.length;b++)a[b].value=i(a[b].value);return function(b,c,d){for(var e={},f=0;f<a.length;f++)e[a[f].key]=a[f].value(b,c,d);return e}},createFilter:function(a,b){this.filters.push(new g(a,b))},createAsExpression:function(a,b){this.expression=a,this.scopeIdent=b},createInExpression:function(a,b,c){this.expression=c,this.scopeIdent=a,this.indexIdent=b},createTopLevel:function(a){this.expression=a},createThisExpression:h},k.prototype={open:function(){return this.value_},discardChanges:function(){return this.value_},deliver:function(){},close:function(){}},l.prototype={getBinding:function(a,b,c){function d(){if(h)return h=!1,g;i.dynamicDeps&&f.startReset();var c=i.getValue(a,i.dynamicDeps?f:void 0,b);return i.dynamicDeps&&f.finishReset(),c}function e(c){return i.setValue(a,c,b),c}if(c)return this.getValue(a,void 0,b);var f=new CompoundObserver,g=this.getValue(a,f,b),h=!0,i=this;return new ObserverTransform(f,d,e,!0)},getValue:function(a,b,c){for(var d=i(this.expression)(a,b,c),e=0;e<this.filters.length;e++)d=this.filters[e].transform(a,b,c,!1,[d]);return d},setValue:function(a,b,c){for(var d=this.filters?this.filters.length:0;d-->0;)b=this.filters[d].transform(a,void 0,c,!0,[b]);return this.expression.setValue?this.expression.setValue(a,b):void 0}};var t="@"+Math.random().toString(36).slice(2);p.prototype={styleObject:function(a){var b=[];for(var c in a)b.push(m(c)+": "+a[c]);return b.join("; ")},tokenList:function(a){var b=[];for(var c in a)a[c]&&b.push(c);return b.join(" ")},prepareInstancePositionChanged:function(a){var b=a.polymerExpressionIndexIdent_;if(b)return function(a,c){a.model[b]=c}},prepareBinding:function(a,c,d){var e=Path.get(a);{if(o(a)||!e.valid)return b(a,c,d,this);if(1==e.length)return function(a,b,c){if(c)return e.getValueFrom(a);var d=n(a,e[0]);return new PathObserver(d,e)}}},prepareInstanceModel:function(a){var b=a.polymerExpressionScopeIdent_;if(b){var c=a.templateInstance?a.templateInstance.model:a.model,d=a.polymerExpressionIndexIdent_;return function(a){return u(c,a,b,d)}}}};var u="__proto__"in{}?function(a,b,c,d){var e={};return e[c]=b,e[d]=void 0,e[t]=a,e.__proto__=a,e}:function(a,b,c,d){var e=Object.create(a);return Object.defineProperty(e,c,{value:b,configurable:!0,writable:!0}),Object.defineProperty(e,d,{value:void 0,configurable:!0,writable:!0}),Object.defineProperty(e,t,{value:a,configurable:!0,writable:!0}),e};a.PolymerExpressions=p,p.getExpression=c}(this),Polymer={version:"0.5.1"},"function"==typeof window.Polymer&&(Polymer={}),function(a){function b(a,b){return b=b||[],b.map||(b=[b]),a.apply(this,b.map(d))}function c(a,c,d){var e;switch(arguments.length){case 0:return;case 1:e=null;break;case 2:e=c.apply(this);break;default:e=b(d,c)}f[a]=e}function d(a){return f[a]}function e(a,c){HTMLImports.whenImportsReady(function(){b(c,a)})}var f={};a.marshal=d,a.modularize=c,a.using=e}(window),window.WebComponents||(window.WebComponents||(WebComponents={flush:function(){},flags:{log:{}}},Platform=WebComponents,CustomElements={useNative:!0,ready:!0,takeRecords:function(){},"instanceof":function(a,b){return a instanceof b}},HTMLImports={useNative:!0},addEventListener("HTMLImportsLoaded",function(){document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}),ShadowDOMPolyfill=null,wrap=unwrap=function(a){return a}),window.HTMLImports=window.HTMLImports||{flags:{}},function(a){function b(a,b){b=b||o,d(function(){f(a,b)},b)}function c(a){return"complete"===a.readyState||a.readyState===r}function d(a,b){if(c(b))a&&a();else{var e=function(){("complete"===b.readyState||b.readyState===r)&&(b.removeEventListener(s,e),d(a,b))};b.addEventListener(s,e)}}function e(a){a.target.__loaded=!0}function f(a,b){function c(){h==i&&a&&a()}function d(a){e(a),h++,c()}var f=b.querySelectorAll("link[rel=import]"),h=0,i=f.length;if(i)for(var j,k=0;i>k&&(j=f[k]);k++)g(j)?d.call(j,{target:j}):(j.addEventListener("load",d),j.addEventListener("error",d));else c()}function g(a){return l?a.__loaded||a["import"]&&"loading"!==a["import"].readyState:a.__importParsed}function h(a){for(var b,c=0,d=a.length;d>c&&(b=a[c]);c++)i(b)&&j(b)}function i(a){return"link"===a.localName&&"import"===a.rel}function j(a){var b=a["import"];b?e({target:a}):(a.addEventListener("load",e),a.addEventListener("error",e))}var k="import",l=Boolean(k in document.createElement("link")),m=Boolean(window.ShadowDOMPolyfill),n=function(a){return m?ShadowDOMPolyfill.wrapIfNeeded(a):a},o=n(document),p={get:function(){var a=HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return n(a)},configurable:!0};Object.defineProperty(document,"_currentScript",p),Object.defineProperty(o,"_currentScript",p);var q=/Trident/.test(navigator.userAgent),r=q?"complete":"interactive",s="readystatechange";l&&(new MutationObserver(function(a){for(var b,c=0,d=a.length;d>c&&(b=a[c]);c++)b.addedNodes&&h(b.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var a,b=document.querySelectorAll("link[rel=import]"),c=0,d=b.length;d>c&&(a=b[c]);c++)j(a)}()),b(function(){HTMLImports.ready=!0,HTMLImports.readyTime=(new Date).getTime(),o.dispatchEvent(new CustomEvent("HTMLImportsLoaded",{bubbles:!0}))}),a.IMPORT_LINK_TYPE=k,a.useNative=l,a.rootDocument=o,a.whenReady=b,a.isIE=q}(HTMLImports),function(){var a=document.createElement("style");a.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; } \n";var b=document.querySelector("head");b.insertBefore(a,b.firstChild)}(Platform)),function(a){"use strict";function b(){function a(a){b=a}if("function"!=typeof Object.observe||"function"!=typeof Array.observe)return!1;var b=[],c={},d=[];return Object.observe(c,a),Array.observe(d,a),c.id=1,c.id=2,delete c.id,d.push(1,2),d.length=0,Object.deliverChangeRecords(a),5!==b.length?!1:"add"!=b[0].type||"update"!=b[1].type||"delete"!=b[2].type||"splice"!=b[3].type||"splice"!=b[4].type?!1:(Object.unobserve(c,a),Array.unobserve(d,a),!0)}function c(){if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)return!1;if("undefined"!=typeof navigator&&navigator.getDeviceStorage)return!1;try{var a=new Function("","return true;");return a()}catch(b){return!1}}function d(a){return+a===a>>>0&&""!==a}function e(a){return+a}function f(a){return a===Object(a)}function g(a,b){return a===b?0!==a||1/a===1/b:R(a)&&R(b)?!0:a!==a&&b!==b}function h(a){if(void 0===a)return"eof";var b=a.charCodeAt(0);switch(b){case 91:case 93:case 46:case 34:case 39:case 48:return a;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return b>=97&&122>=b||b>=65&&90>=b?"ident":b>=49&&57>=b?"number":"else"}function i(){}function j(a){function b(){if(!(m>=a.length)){var b=a[m+1];return"inSingleQuote"==n&&"'"==b||"inDoubleQuote"==n&&'"'==b?(m++,d=b,o.append(),!0):void 0}}for(var c,d,e,f,g,j,k,l=[],m=-1,n="beforePath",o={push:function(){void 0!==e&&(l.push(e),e=void 0)},append:function(){void 0===e?e=d:e+=d}};n;)if(m++,c=a[m],"\\"!=c||!b(n)){if(f=h(c),k=W[n],g=k[f]||k["else"]||"error","error"==g)return;if(n=g[0],j=o[g[1]]||i,d=void 0===g[2]?c:g[2],j(),"afterPath"===n)return l}}function k(a){return V.test(a)}function l(a,b){if(b!==X)throw Error("Use Path.get to retrieve path objects");for(var c=0;c<a.length;c++)this.push(String(a[c]));Q&&this.length&&(this.getValueFrom=this.compiledGetValueFromFn())}function m(a){if(a instanceof l)return a;if((null==a||0==a.length)&&(a=""),"string"!=typeof a){if(d(a.length))return new l(a,X);a=String(a)}var b=Y[a];if(b)return b;var c=j(a);if(!c)return Z;var b=new l(c,X);return Y[a]=b,b}function n(a){return d(a)?"["+a+"]":'["'+a.replace(/"/g,'\\"')+'"]'}function o(b){for(var c=0;_>c&&b.check_();)c++;return O&&(a.dirtyCheckCycleCount=c),c>0}function p(a){for(var b in a)return!1;return!0}function q(a){return p(a.added)&&p(a.removed)&&p(a.changed)}function r(a,b){var c={},d={},e={};for(var f in b){var g=a[f];(void 0===g||g!==b[f])&&(f in a?g!==b[f]&&(e[f]=g):d[f]=void 0)}for(var f in a)f in b||(c[f]=a[f]);return Array.isArray(a)&&a.length!==b.length&&(e.length=a.length),{added:c,removed:d,changed:e}}function s(){if(!ab.length)return!1;for(var a=0;a<ab.length;a++)ab[a]();return ab.length=0,!0}function t(){function a(a){b&&b.state_===fb&&!d&&b.check_(a)}var b,c,d=!1,e=!0;return{open:function(c){if(b)throw Error("ObservedObject in use");e||Object.deliverChangeRecords(a),b=c,e=!1},observe:function(b,d){c=b,d?Array.observe(c,a):Object.observe(c,a)},deliver:function(b){d=b,Object.deliverChangeRecords(a),d=!1},close:function(){b=void 0,Object.unobserve(c,a),cb.push(this)}}}function u(a,b,c){var d=cb.pop()||t();return d.open(a),d.observe(b,c),d}function v(){function a(b,f){b&&(b===d&&(e[f]=!0),h.indexOf(b)<0&&(h.push(b),Object.observe(b,c)),a(Object.getPrototypeOf(b),f))}function b(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.object!==d||e[c.name]||"setPrototype"===c.type)return!1}return!0}function c(c){if(!b(c)){for(var d,e=0;e<g.length;e++)d=g[e],d.state_==fb&&d.iterateObjects_(a);for(var e=0;e<g.length;e++)d=g[e],d.state_==fb&&d.check_()}}var d,e,f=0,g=[],h=[],i={objects:h,get rootObject(){return d},set rootObject(a){d=a,e={}},open:function(b){g.push(b),f++,b.iterateObjects_(a)},close:function(){if(f--,!(f>0)){for(var a=0;a<h.length;a++)Object.unobserve(h[a],c),x.unobservedCount++;g.length=0,h.length=0,d=void 0,e=void 0,db.push(this),$===this&&($=null)}}};return i}function w(a,b){return $&&$.rootObject===b||($=db.pop()||v(),$.rootObject=b),$.open(a,b),$}function x(){this.state_=eb,this.callback_=void 0,this.target_=void 0,this.directObserver_=void 0,this.value_=void 0,this.id_=ib++}function y(a){x._allObserversCount++,kb&&jb.push(a)}function z(){x._allObserversCount--}function A(a){x.call(this),this.value_=a,this.oldObject_=void 0}function B(a){if(!Array.isArray(a))throw Error("Provided object is not an Array");A.call(this,a)}function C(a,b){x.call(this),this.object_=a,this.path_=m(b),this.directObserver_=void 0}function D(a){x.call(this),this.reportChangesOnOpen_=a,this.value_=[],this.directObserver_=void 0,this.observed_=[]}function E(a){return a}function F(a,b,c,d){this.callback_=void 0,this.target_=void 0,this.value_=void 0,this.observable_=a,this.getValueFn_=b||E,this.setValueFn_=c||E,this.dontPassThroughSet_=d}function G(a,b,c){for(var d={},e={},f=0;f<b.length;f++){var g=b[f];nb[g.type]?(g.name in c||(c[g.name]=g.oldValue),"update"!=g.type&&("add"!=g.type?g.name in d?(delete d[g.name],delete c[g.name]):e[g.name]=!0:g.name in e?delete e[g.name]:d[g.name]=!0)):(console.error("Unknown changeRecord type: "+g.type),console.error(g))}for(var h in d)d[h]=a[h];for(var h in e)e[h]=void 0;var i={};for(var h in c)if(!(h in d||h in e)){var j=a[h];c[h]!==j&&(i[h]=j)}return{added:d,removed:e,changed:i}}function H(a,b,c){return{index:a,removed:b,addedCount:c}}function I(){}function J(a,b,c,d,e,f){return sb.calcSplices(a,b,c,d,e,f)}function K(a,b,c,d){return c>b||a>d?-1:b==c||d==a?0:c>a?d>b?b-c:d-c:b>d?d-a:b-a}function L(a,b,c,d){for(var e=H(b,c,d),f=!1,g=0,h=0;h<a.length;h++){var i=a[h];if(i.index+=g,!f){var j=K(e.index,e.index+e.removed.length,i.index,i.index+i.addedCount);if(j>=0){a.splice(h,1),h--,g-=i.addedCount-i.removed.length,e.addedCount+=i.addedCount-j;var k=e.removed.length+i.removed.length-j;if(e.addedCount||k){var c=i.removed;if(e.index<i.index){var l=e.removed.slice(0,i.index-e.index);Array.prototype.push.apply(l,c),c=l}if(e.index+e.removed.length>i.index+i.addedCount){var m=e.removed.slice(i.index+i.addedCount-e.index);Array.prototype.push.apply(c,m)}e.removed=c,i.index<e.index&&(e.index=i.index)}else f=!0}else if(e.index<i.index){f=!0,a.splice(h,0,e),h++;var n=e.addedCount-e.removed.length;i.index+=n,g+=n}}}f||a.push(e)}function M(a,b){for(var c=[],f=0;f<b.length;f++){var g=b[f];switch(g.type){case"splice":L(c,g.index,g.removed.slice(),g.addedCount);break;case"add":case"update":case"delete":if(!d(g.name))continue;var h=e(g.name);if(0>h)continue;L(c,h,[g.oldValue],1);break;default:console.error("Unexpected record type: "+JSON.stringify(g))}}return c}function N(a,b){var c=[];return M(a,b).forEach(function(b){return 1==b.addedCount&&1==b.removed.length?void(b.removed[0]!==a[b.index]&&c.push(b)):void(c=c.concat(J(a,b.index,b.index+b.addedCount,b.removed,0,b.removed.length)))}),c}var O=a.testingExposeCycleCount,P=b(),Q=c(),R=a.Number.isNaN||function(b){return"number"==typeof b&&a.isNaN(b)},S="__proto__"in{}?function(a){return a}:function(a){var b=a.__proto__;if(!b)return a;var c=Object.create(b);return Object.getOwnPropertyNames(a).forEach(function(b){Object.defineProperty(c,b,Object.getOwnPropertyDescriptor(a,b))}),c},T="[$_a-zA-Z]",U="[$_a-zA-Z0-9]",V=new RegExp("^"+T+"+"+U+"*$"),W={beforePath:{ws:["beforePath"],ident:["inIdent","append"],"[":["beforeElement"],eof:["afterPath"]},inPath:{ws:["inPath"],".":["beforeIdent"],"[":["beforeElement"],eof:["afterPath"]},beforeIdent:{ws:["beforeIdent"],ident:["inIdent","append"]},inIdent:{ident:["inIdent","append"],0:["inIdent","append"],number:["inIdent","append"],ws:["inPath","push"],".":["beforeIdent","push"],"[":["beforeElement","push"],eof:["afterPath","push"]},beforeElement:{ws:["beforeElement"],0:["afterZero","append"],number:["inIndex","append"],"'":["inSingleQuote","append",""],'"':["inDoubleQuote","append",""]},afterZero:{ws:["afterElement","push"],"]":["inPath","push"]},inIndex:{0:["inIndex","append"],number:["inIndex","append"],ws:["afterElement"],"]":["inPath","push"]},inSingleQuote:{"'":["afterElement"],eof:["error"],"else":["inSingleQuote","append"]},inDoubleQuote:{'"':["afterElement"],eof:["error"],"else":["inDoubleQuote","append"]},afterElement:{ws:["afterElement"],"]":["inPath","push"]}},X={},Y={};l.get=m,l.prototype=S({__proto__:[],valid:!0,toString:function(){for(var a="",b=0;b<this.length;b++){var c=this[b];a+=k(c)?b?"."+c:c:n(c)}return a},getValueFrom:function(a){for(var b=0;b<this.length;b++){if(null==a)return;a=a[this[b]]}return a},iterateObjects:function(a,b){for(var c=0;c<this.length;c++){if(c&&(a=a[this[c-1]]),!f(a))return;b(a,this[c])}},compiledGetValueFromFn:function(){var a="",b="obj";a+="if (obj != null";for(var c,d=0;d<this.length-1;d++)c=this[d],b+=k(c)?"."+c:n(c),a+=" &&\n     "+b+" != null";a+=")\n";var c=this[d];return b+=k(c)?"."+c:n(c),a+="  return "+b+";\nelse\n  return undefined;",new Function("obj",a)},setValueFrom:function(a,b){if(!this.length)return!1;for(var c=0;c<this.length-1;c++){if(!f(a))return!1;a=a[this[c]]}return f(a)?(a[this[c]]=b,!0):!1}});var Z=new l("",X);Z.valid=!1,Z.getValueFrom=Z.setValueFrom=function(){};var $,_=1e3,ab=[],bb=P?function(){return function(a){return Promise.resolve().then(a)}}():function(){return function(a){ab.push(a)}}(),cb=[],db=[],eb=0,fb=1,gb=2,hb=3,ib=1;x.prototype={open:function(a,b){if(this.state_!=eb)throw Error("Observer has already been opened.");return y(this),this.callback_=a,this.target_=b,this.connect_(),this.state_=fb,this.value_},close:function(){this.state_==fb&&(z(this),this.disconnect_(),this.value_=void 0,this.callback_=void 0,this.target_=void 0,this.state_=gb)},deliver:function(){this.state_==fb&&o(this)},report_:function(a){try{this.callback_.apply(this.target_,a)}catch(b){x._errorThrownDuringCallback=!0,console.error("Exception caught during observer callback: "+(b.stack||b))}},discardChanges:function(){return this.check_(void 0,!0),this.value_}};var jb,kb=!P;x._allObserversCount=0,kb&&(jb=[]);var lb=!1;a.Platform=a.Platform||{},a.Platform.performMicrotaskCheckpoint=function(){if(!lb&&kb){lb=!0;var b,c,d=0;do{d++,c=jb,jb=[],b=!1;for(var e=0;e<c.length;e++){var f=c[e];f.state_==fb&&(f.check_()&&(b=!0),jb.push(f))}s()&&(b=!0)}while(_>d&&b);O&&(a.dirtyCheckCycleCount=d),lb=!1}},kb&&(a.Platform.clearObservers=function(){jb=[]}),A.prototype=S({__proto__:x.prototype,arrayObserve:!1,connect_:function(){P?this.directObserver_=u(this,this.value_,this.arrayObserve):this.oldObject_=this.copyObject(this.value_)},copyObject:function(a){var b=Array.isArray(a)?[]:{};for(var c in a)b[c]=a[c];return Array.isArray(a)&&(b.length=a.length),b},check_:function(a){var b,c;if(P){if(!a)return!1;c={},b=G(this.value_,a,c)}else c=this.oldObject_,b=r(this.value_,this.oldObject_);return q(b)?!1:(P||(this.oldObject_=this.copyObject(this.value_)),this.report_([b.added||{},b.removed||{},b.changed||{},function(a){return c[a]}]),!0)},disconnect_:function(){P?(this.directObserver_.close(),this.directObserver_=void 0):this.oldObject_=void 0},deliver:function(){this.state_==fb&&(P?this.directObserver_.deliver(!1):o(this))},discardChanges:function(){return this.directObserver_?this.directObserver_.deliver(!0):this.oldObject_=this.copyObject(this.value_),this.value_}}),B.prototype=S({__proto__:A.prototype,arrayObserve:!0,copyObject:function(a){return a.slice()},check_:function(a){var b;if(P){if(!a)return!1;b=N(this.value_,a)}else b=J(this.value_,0,this.value_.length,this.oldObject_,0,this.oldObject_.length);return b&&b.length?(P||(this.oldObject_=this.copyObject(this.value_)),this.report_([b]),!0):!1}}),B.applySplices=function(a,b,c){c.forEach(function(c){for(var d=[c.index,c.removed.length],e=c.index;e<c.index+c.addedCount;)d.push(b[e]),e++;Array.prototype.splice.apply(a,d)})},C.prototype=S({__proto__:x.prototype,get path(){return this.path_},connect_:function(){P&&(this.directObserver_=w(this,this.object_)),this.check_(void 0,!0)},disconnect_:function(){this.value_=void 0,this.directObserver_&&(this.directObserver_.close(this),this.directObserver_=void 0)},iterateObjects_:function(a){this.path_.iterateObjects(this.object_,a)},check_:function(a,b){var c=this.value_;return this.value_=this.path_.getValueFrom(this.object_),b||g(this.value_,c)?!1:(this.report_([this.value_,c,this]),!0)},setValue:function(a){this.path_&&this.path_.setValueFrom(this.object_,a)}});var mb={};D.prototype=S({__proto__:x.prototype,connect_:function(){if(P){for(var a,b=!1,c=0;c<this.observed_.length;c+=2)if(a=this.observed_[c],a!==mb){b=!0;break}b&&(this.directObserver_=w(this,a))}this.check_(void 0,!this.reportChangesOnOpen_)},disconnect_:function(){for(var a=0;a<this.observed_.length;a+=2)this.observed_[a]===mb&&this.observed_[a+1].close();this.observed_.length=0,this.value_.length=0,this.directObserver_&&(this.directObserver_.close(this),this.directObserver_=void 0)},addPath:function(a,b){if(this.state_!=eb&&this.state_!=hb)throw Error("Cannot add paths once started.");var b=m(b);if(this.observed_.push(a,b),this.reportChangesOnOpen_){var c=this.observed_.length/2-1;this.value_[c]=b.getValueFrom(a)}},addObserver:function(a){if(this.state_!=eb&&this.state_!=hb)throw Error("Cannot add observers once started.");if(this.observed_.push(mb,a),this.reportChangesOnOpen_){var b=this.observed_.length/2-1;this.value_[b]=a.open(this.deliver,this)}},startReset:function(){if(this.state_!=fb)throw Error("Can only reset while open");this.state_=hb,this.disconnect_()},finishReset:function(){if(this.state_!=hb)throw Error("Can only finishReset after startReset");return this.state_=fb,this.connect_(),this.value_},iterateObjects_:function(a){for(var b,c=0;c<this.observed_.length;c+=2)b=this.observed_[c],b!==mb&&this.observed_[c+1].iterateObjects(b,a)},check_:function(a,b){for(var c,d=0;d<this.observed_.length;d+=2){var e,f=this.observed_[d],h=this.observed_[d+1];if(f===mb){var i=h;e=this.state_===eb?i.open(this.deliver,this):i.discardChanges()}else e=h.getValueFrom(f);b?this.value_[d/2]=e:g(e,this.value_[d/2])||(c=c||[],c[d/2]=this.value_[d/2],this.value_[d/2]=e)}return c?(this.report_([this.value_,c,this.observed_]),!0):!1}}),F.prototype={open:function(a,b){return this.callback_=a,this.target_=b,this.value_=this.getValueFn_(this.observable_.open(this.observedCallback_,this)),this.value_},observedCallback_:function(a){if(a=this.getValueFn_(a),!g(a,this.value_)){var b=this.value_;this.value_=a,this.callback_.call(this.target_,this.value_,b)}},discardChanges:function(){return this.value_=this.getValueFn_(this.observable_.discardChanges()),this.value_},deliver:function(){return this.observable_.deliver()},setValue:function(a){return a=this.setValueFn_(a),!this.dontPassThroughSet_&&this.observable_.setValue?this.observable_.setValue(a):void 0},close:function(){this.observable_&&this.observable_.close(),this.callback_=void 0,this.target_=void 0,this.observable_=void 0,this.value_=void 0,this.getValueFn_=void 0,this.setValueFn_=void 0}};var nb={add:!0,update:!0,"delete":!0},ob=0,pb=1,qb=2,rb=3;I.prototype={calcEditDistances:function(a,b,c,d,e,f){for(var g=f-e+1,h=c-b+1,i=new Array(g),j=0;g>j;j++)i[j]=new Array(h),i[j][0]=j;for(var k=0;h>k;k++)i[0][k]=k;for(var j=1;g>j;j++)for(var k=1;h>k;k++)if(this.equals(a[b+k-1],d[e+j-1]))i[j][k]=i[j-1][k-1];else{var l=i[j-1][k]+1,m=i[j][k-1]+1;i[j][k]=m>l?l:m}return i},spliceOperationsFromEditDistances:function(a){for(var b=a.length-1,c=a[0].length-1,d=a[b][c],e=[];b>0||c>0;)if(0!=b)if(0!=c){var f,g=a[b-1][c-1],h=a[b-1][c],i=a[b][c-1];f=i>h?g>h?h:g:g>i?i:g,f==g?(g==d?e.push(ob):(e.push(pb),d=g),b--,c--):f==h?(e.push(rb),b--,d=h):(e.push(qb),c--,d=i)}else e.push(rb),b--;else e.push(qb),c--;return e.reverse(),e},calcSplices:function(a,b,c,d,e,f){var g=0,h=0,i=Math.min(c-b,f-e);if(0==b&&0==e&&(g=this.sharedPrefix(a,d,i)),c==a.length&&f==d.length&&(h=this.sharedSuffix(a,d,i-g)),b+=g,e+=g,c-=h,f-=h,c-b==0&&f-e==0)return[];if(b==c){for(var j=H(b,[],0);f>e;)j.removed.push(d[e++]);return[j]}if(e==f)return[H(b,[],c-b)];for(var k=this.spliceOperationsFromEditDistances(this.calcEditDistances(a,b,c,d,e,f)),j=void 0,l=[],m=b,n=e,o=0;o<k.length;o++)switch(k[o]){case ob:j&&(l.push(j),j=void 0),m++,n++;break;case pb:j||(j=H(m,[],0)),j.addedCount++,m++,j.removed.push(d[n]),n++;break;case qb:j||(j=H(m,[],0)),j.addedCount++,m++;break;case rb:j||(j=H(m,[],0)),j.removed.push(d[n]),n++}return j&&l.push(j),l},sharedPrefix:function(a,b,c){for(var d=0;c>d;d++)if(!this.equals(a[d],b[d]))return d;return c},sharedSuffix:function(a,b,c){for(var d=a.length,e=b.length,f=0;c>f&&this.equals(a[--d],b[--e]);)f++;return f},calculateSplices:function(a,b){return this.calcSplices(a,0,a.length,b,0,b.length)},equals:function(a,b){return a===b}};var sb=new I,tb=a;"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(tb=exports=module.exports),tb=exports),tb.Observer=x,tb.Observer.runEOM_=bb,tb.Observer.observerSentinel_=mb,tb.Observer.hasObjectObserve=P,tb.ArrayObserver=B,tb.ArrayObserver.calculateSplices=function(a,b){return sb.calculateSplices(a,b)},tb.ArraySplice=I,tb.ObjectObserver=A,tb.PathObserver=C,tb.CompoundObserver=D,tb.Path=l,tb.ObserverTransform=F}("undefined"!=typeof global&&global&&"undefined"!=typeof module&&module?global:this||window),function(){"use strict";function a(a){for(;a.parentNode;)a=a.parentNode;return"function"==typeof a.getElementById?a:null}function b(a,b,c){var d=a.bindings_;return d||(d=a.bindings_={}),d[b]&&c[b].close(),d[b]=c}function c(a,b,c){return c}function d(a){return null==a?"":a}function e(a,b){a.data=d(b)}function f(a){return function(b){return e(a,b)}}function g(a,b,c,e){return c?void(e?a.setAttribute(b,""):a.removeAttribute(b)):void a.setAttribute(b,d(e))}function h(a,b,c){return function(d){g(a,b,c,d)}}function i(a){switch(a.type){case"checkbox":return u;case"radio":case"select-multiple":case"select-one":return"change";case"range":if(/Trident|MSIE/.test(navigator.userAgent))return"change";default:return"input"}}function j(a,b,c,e){a[b]=(e||d)(c)}function k(a,b,c){return function(d){return j(a,b,d,c)}}function l(){}function m(a,b,c,d){function e(){c.setValue(a[b]),c.discardChanges(),(d||l)(a),Platform.performMicrotaskCheckpoint()}var f=i(a);return a.addEventListener(f,e),{close:function(){a.removeEventListener(f,e),c.close()},observable_:c}}function n(a){return Boolean(a)}function o(b){if(b.form)return s(b.form.elements,function(a){return a!=b&&"INPUT"==a.tagName&&"radio"==a.type&&a.name==b.name});var c=a(b);if(!c)return[];var d=c.querySelectorAll('input[type="radio"][name="'+b.name+'"]');return s(d,function(a){return a!=b&&!a.form})}function p(a){"INPUT"===a.tagName&&"radio"===a.type&&o(a).forEach(function(a){var b=a.bindings_.checked;b&&b.observable_.setValue(!1)})}function q(a,b){var c,e,f,g=a.parentNode;g instanceof HTMLSelectElement&&g.bindings_&&g.bindings_.value&&(c=g,e=c.bindings_.value,f=c.value),a.value=d(b),c&&c.value!=f&&(e.observable_.setValue(c.value),e.observable_.discardChanges(),Platform.performMicrotaskCheckpoint())}function r(a){return function(b){q(a,b)}}var s=Array.prototype.filter.call.bind(Array.prototype.filter);Node.prototype.bind=function(a,b){console.error("Unhandled binding to Node: ",this,a,b)},Node.prototype.bindFinished=function(){};var t=c;Object.defineProperty(Platform,"enableBindingsReflection",{get:function(){return t===b},set:function(a){return t=a?b:c,a},configurable:!0}),Text.prototype.bind=function(a,b,c){if("textContent"!==a)return Node.prototype.bind.call(this,a,b,c);if(c)return e(this,b);var d=b;return e(this,d.open(f(this))),t(this,a,d)},Element.prototype.bind=function(a,b,c){var d="?"==a[a.length-1];if(d&&(this.removeAttribute(a),a=a.slice(0,-1)),c)return g(this,a,d,b);var e=b;return g(this,a,d,e.open(h(this,a,d))),t(this,a,e)};var u;!function(){var a=document.createElement("div"),b=a.appendChild(document.createElement("input"));b.setAttribute("type","checkbox");var c,d=0;b.addEventListener("click",function(){d++,c=c||"click"}),b.addEventListener("change",function(){d++,c=c||"change"});var e=document.createEvent("MouseEvent");e.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),b.dispatchEvent(e),u=1==d?"change":c}(),HTMLInputElement.prototype.bind=function(a,c,e){if("value"!==a&&"checked"!==a)return HTMLElement.prototype.bind.call(this,a,c,e);this.removeAttribute(a);var f="checked"==a?n:d,g="checked"==a?p:l;if(e)return j(this,a,c,f);var h=c,i=m(this,a,h,g);return j(this,a,h.open(k(this,a,f)),f),b(this,a,i)},HTMLTextAreaElement.prototype.bind=function(a,b,c){if("value"!==a)return HTMLElement.prototype.bind.call(this,a,b,c);if(this.removeAttribute("value"),c)return j(this,"value",b);var e=b,f=m(this,"value",e);return j(this,"value",e.open(k(this,"value",d))),t(this,a,f)},HTMLOptionElement.prototype.bind=function(a,b,c){if("value"!==a)return HTMLElement.prototype.bind.call(this,a,b,c);if(this.removeAttribute("value"),c)return q(this,b);var d=b,e=m(this,"value",d);return q(this,d.open(r(this))),t(this,a,e)
},HTMLSelectElement.prototype.bind=function(a,c,d){if("selectedindex"===a&&(a="selectedIndex"),"selectedIndex"!==a&&"value"!==a)return HTMLElement.prototype.bind.call(this,a,c,d);if(this.removeAttribute(a),d)return j(this,a,c);var e=c,f=m(this,a,e);return j(this,a,e.open(k(this,a))),b(this,a,f)}}(this),function(a){"use strict";function b(a){if(!a)throw new Error("Assertion failed")}function c(a){for(var b;b=a.parentNode;)a=b;return a}function d(a,b){if(b){for(var d,e="#"+b;!d&&(a=c(a),a.protoContent_?d=a.protoContent_.querySelector(e):a.getElementById&&(d=a.getElementById(b)),!d&&a.templateCreator_);)a=a.templateCreator_;return d}}function e(a){return"template"==a.tagName&&"http://www.w3.org/2000/svg"==a.namespaceURI}function f(a){return"TEMPLATE"==a.tagName&&"http://www.w3.org/1999/xhtml"==a.namespaceURI}function g(a){return Boolean(L[a.tagName]&&a.hasAttribute("template"))}function h(a){return void 0===a.isTemplate_&&(a.isTemplate_="TEMPLATE"==a.tagName||g(a)),a.isTemplate_}function i(a,b){var c=a.querySelectorAll(N);h(a)&&b(a),G(c,b)}function j(a){function b(a){HTMLTemplateElement.decorate(a)||j(a.content)}i(a,b)}function k(a,b){Object.getOwnPropertyNames(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))})}function l(a){var b=a.ownerDocument;if(!b.defaultView)return b;var c=b.templateContentsOwner_;if(!c){for(c=b.implementation.createHTMLDocument("");c.lastChild;)c.removeChild(c.lastChild);b.templateContentsOwner_=c}return c}function m(a){if(!a.stagingDocument_){var b=a.ownerDocument;if(!b.stagingDocument_){b.stagingDocument_=b.implementation.createHTMLDocument(""),b.stagingDocument_.isStagingDocument=!0;var c=b.stagingDocument_.createElement("base");c.href=document.baseURI,b.stagingDocument_.head.appendChild(c),b.stagingDocument_.stagingDocument_=b.stagingDocument_}a.stagingDocument_=b.stagingDocument_}return a.stagingDocument_}function n(a){var b=a.ownerDocument.createElement("template");a.parentNode.insertBefore(b,a);for(var c=a.attributes,d=c.length;d-->0;){var e=c[d];K[e.name]&&("template"!==e.name&&b.setAttribute(e.name,e.value),a.removeAttribute(e.name))}return b}function o(a){var b=a.ownerDocument.createElement("template");a.parentNode.insertBefore(b,a);for(var c=a.attributes,d=c.length;d-->0;){var e=c[d];b.setAttribute(e.name,e.value),a.removeAttribute(e.name)}return a.parentNode.removeChild(a),b}function p(a,b,c){var d=a.content;if(c)return void d.appendChild(b);for(var e;e=b.firstChild;)d.appendChild(e)}function q(a){P?a.__proto__=HTMLTemplateElement.prototype:k(a,HTMLTemplateElement.prototype)}function r(a){a.setModelFn_||(a.setModelFn_=function(){a.setModelFnScheduled_=!1;var b=z(a,a.delegate_&&a.delegate_.prepareBinding);w(a,b,a.model_)}),a.setModelFnScheduled_||(a.setModelFnScheduled_=!0,Observer.runEOM_(a.setModelFn_))}function s(a,b,c,d){if(a&&a.length){for(var e,f=a.length,g=0,h=0,i=0,j=!0;f>h;){var g=a.indexOf("{{",h),k=a.indexOf("[[",h),l=!1,m="}}";if(k>=0&&(0>g||g>k)&&(g=k,l=!0,m="]]"),i=0>g?-1:a.indexOf(m,g+2),0>i){if(!e)return;e.push(a.slice(h));break}e=e||[],e.push(a.slice(h,g));var n=a.slice(g+2,i).trim();e.push(l),j=j&&l;var o=d&&d(n,b,c);e.push(null==o?Path.get(n):null),e.push(o),h=i+2}return h===f&&e.push(""),e.hasOnePath=5===e.length,e.isSimplePath=e.hasOnePath&&""==e[0]&&""==e[4],e.onlyOneTime=j,e.combinator=function(a){for(var b=e[0],c=1;c<e.length;c+=4){var d=e.hasOnePath?a:a[(c-1)/4];void 0!==d&&(b+=d),b+=e[c+3]}return b},e}}function t(a,b,c,d){if(b.hasOnePath){var e=b[3],f=e?e(d,c,!0):b[2].getValueFrom(d);return b.isSimplePath?f:b.combinator(f)}for(var g=[],h=1;h<b.length;h+=4){var e=b[h+2];g[(h-1)/4]=e?e(d,c):b[h+1].getValueFrom(d)}return b.combinator(g)}function u(a,b,c,d){var e=b[3],f=e?e(d,c,!1):new PathObserver(d,b[2]);return b.isSimplePath?f:new ObserverTransform(f,b.combinator)}function v(a,b,c,d){if(b.onlyOneTime)return t(a,b,c,d);if(b.hasOnePath)return u(a,b,c,d);for(var e=new CompoundObserver,f=1;f<b.length;f+=4){var g=b[f],h=b[f+2];if(h){var i=h(d,c,g);g?e.addPath(i):e.addObserver(i)}else{var j=b[f+1];g?e.addPath(j.getValueFrom(d)):e.addPath(d,j)}}return new ObserverTransform(e,b.combinator)}function w(a,b,c,d){for(var e=0;e<b.length;e+=2){var f=b[e],g=b[e+1],h=v(f,g,a,c),i=a.bind(f,h,g.onlyOneTime);i&&d&&d.push(i)}if(a.bindFinished(),b.isTemplate){a.model_=c;var j=a.processBindingDirectives_(b);d&&j&&d.push(j)}}function x(a,b,c){var d=a.getAttribute(b);return s(""==d?"{{}}":d,b,a,c)}function y(a,c){b(a);for(var d=[],e=0;e<a.attributes.length;e++){for(var f=a.attributes[e],g=f.name,i=f.value;"_"===g[0];)g=g.substring(1);if(!h(a)||g!==J&&g!==H&&g!==I){var j=s(i,g,a,c);j&&d.push(g,j)}}return h(a)&&(d.isTemplate=!0,d["if"]=x(a,J,c),d.bind=x(a,H,c),d.repeat=x(a,I,c),!d["if"]||d.bind||d.repeat||(d.bind=s("{{}}",H,a,c))),d}function z(a,b){if(a.nodeType===Node.ELEMENT_NODE)return y(a,b);if(a.nodeType===Node.TEXT_NODE){var c=s(a.data,"textContent",a,b);if(c)return["textContent",c]}return[]}function A(a,b,c,d,e,f,g){for(var h=b.appendChild(c.importNode(a,!1)),i=0,j=a.firstChild;j;j=j.nextSibling)A(j,h,c,d.children[i++],e,f,g);return d.isTemplate&&(HTMLTemplateElement.decorate(h,a),f&&h.setDelegate_(f)),w(h,d,e,g),h}function B(a,b){var c=z(a,b);c.children={};for(var d=0,e=a.firstChild;e;e=e.nextSibling)c.children[d++]=B(e,b);return c}function C(a){var b=a.id_;return b||(b=a.id_=S++),b}function D(a,b){var c=C(a);if(b){var d=b.bindingMaps[c];return d||(d=b.bindingMaps[c]=B(a,b.prepareBinding)||[]),d}var d=a.bindingMap_;return d||(d=a.bindingMap_=B(a,void 0)||[]),d}function E(a){this.closed=!1,this.templateElement_=a,this.instances=[],this.deps=void 0,this.iteratedValue=[],this.presentValue=void 0,this.arrayObserver=void 0}var F,G=Array.prototype.forEach.call.bind(Array.prototype.forEach);a.Map&&"function"==typeof a.Map.prototype.forEach?F=a.Map:(F=function(){this.keys=[],this.values=[]},F.prototype={set:function(a,b){var c=this.keys.indexOf(a);0>c?(this.keys.push(a),this.values.push(b)):this.values[c]=b},get:function(a){var b=this.keys.indexOf(a);if(!(0>b))return this.values[b]},"delete":function(a){var b=this.keys.indexOf(a);return 0>b?!1:(this.keys.splice(b,1),this.values.splice(b,1),!0)},forEach:function(a,b){for(var c=0;c<this.keys.length;c++)a.call(b||this,this.values[c],this.keys[c],this)}});"function"!=typeof document.contains&&(Document.prototype.contains=function(a){return a===this||a.parentNode===this?!0:this.documentElement.contains(a)});var H="bind",I="repeat",J="if",K={template:!0,repeat:!0,bind:!0,ref:!0},L={THEAD:!0,TBODY:!0,TFOOT:!0,TH:!0,TR:!0,TD:!0,COLGROUP:!0,COL:!0,CAPTION:!0,OPTION:!0,OPTGROUP:!0},M="undefined"!=typeof HTMLTemplateElement;M&&!function(){var a=document.createElement("template"),b=a.content.ownerDocument,c=b.appendChild(b.createElement("html")),d=c.appendChild(b.createElement("head")),e=b.createElement("base");e.href=document.baseURI,d.appendChild(e)}();var N="template, "+Object.keys(L).map(function(a){return a.toLowerCase()+"[template]"}).join(", ");document.addEventListener("DOMContentLoaded",function(){j(document),Platform.performMicrotaskCheckpoint()},!1),M||(a.HTMLTemplateElement=function(){throw TypeError("Illegal constructor")});var O,P="__proto__"in{};"function"==typeof MutationObserver&&(O=new MutationObserver(function(a){for(var b=0;b<a.length;b++)a[b].target.refChanged_()})),HTMLTemplateElement.decorate=function(a,c){if(a.templateIsDecorated_)return!1;var d=a;d.templateIsDecorated_=!0;var h=f(d)&&M,i=h,k=!h,m=!1;if(h||(g(d)?(b(!c),d=n(a),d.templateIsDecorated_=!0,h=M,m=!0):e(d)&&(d=o(a),d.templateIsDecorated_=!0,h=M)),!h){q(d);var r=l(d);d.content_=r.createDocumentFragment()}return c?d.instanceRef_=c:k?p(d,a,m):i&&j(d.content),!0},HTMLTemplateElement.bootstrap=j;var Q=a.HTMLUnknownElement||HTMLElement,R={get:function(){return this.content_},enumerable:!0,configurable:!0};M||(HTMLTemplateElement.prototype=Object.create(Q.prototype),Object.defineProperty(HTMLTemplateElement.prototype,"content",R)),k(HTMLTemplateElement.prototype,{bind:function(a,b,c){if("ref"!=a)return Element.prototype.bind.call(this,a,b,c);var d=this,e=c?b:b.open(function(a){d.setAttribute("ref",a),d.refChanged_()});return this.setAttribute("ref",e),this.refChanged_(),c?void 0:(this.bindings_?this.bindings_.ref=b:this.bindings_={ref:b},b)},processBindingDirectives_:function(a){return this.iterator_&&this.iterator_.closeDeps(),a["if"]||a.bind||a.repeat?(this.iterator_||(this.iterator_=new E(this)),this.iterator_.updateDependencies(a,this.model_),O&&O.observe(this,{attributes:!0,attributeFilter:["ref"]}),this.iterator_):void(this.iterator_&&(this.iterator_.close(),this.iterator_=void 0))},createInstance:function(a,b,c){b?c=this.newDelegate_(b):c||(c=this.delegate_),this.refContent_||(this.refContent_=this.ref_.content);var d=this.refContent_;if(null===d.firstChild)return T;var e=D(d,c),f=m(this),g=f.createDocumentFragment();g.templateCreator_=this,g.protoContent_=d,g.bindings_=[],g.terminator_=null;for(var h=g.templateInstance_={firstNode:null,lastNode:null,model:a},i=0,j=!1,k=d.firstChild;k;k=k.nextSibling){null===k.nextSibling&&(j=!0);var l=A(k,g,f,e.children[i++],a,c,g.bindings_);l.templateInstance_=h,j&&(g.terminator_=l)}return h.firstNode=g.firstChild,h.lastNode=g.lastChild,g.templateCreator_=void 0,g.protoContent_=void 0,g},get model(){return this.model_},set model(a){this.model_=a,r(this)},get bindingDelegate(){return this.delegate_&&this.delegate_.raw},refChanged_:function(){this.iterator_&&this.refContent_!==this.ref_.content&&(this.refContent_=void 0,this.iterator_.valueChanged(),this.iterator_.updateIteratedValue(this.iterator_.getUpdatedValue()))},clear:function(){this.model_=void 0,this.delegate_=void 0,this.bindings_&&this.bindings_.ref&&this.bindings_.ref.close(),this.refContent_=void 0,this.iterator_&&(this.iterator_.valueChanged(),this.iterator_.close(),this.iterator_=void 0)},setDelegate_:function(a){this.delegate_=a,this.bindingMap_=void 0,this.iterator_&&(this.iterator_.instancePositionChangedFn_=void 0,this.iterator_.instanceModelFn_=void 0)},newDelegate_:function(a){function b(b){var c=a&&a[b];if("function"==typeof c)return function(){return c.apply(a,arguments)}}if(a)return{bindingMaps:{},raw:a,prepareBinding:b("prepareBinding"),prepareInstanceModel:b("prepareInstanceModel"),prepareInstancePositionChanged:b("prepareInstancePositionChanged")}},set bindingDelegate(a){if(this.delegate_)throw Error("Template must be cleared before a new bindingDelegate can be assigned");this.setDelegate_(this.newDelegate_(a))},get ref_(){var a=d(this,this.getAttribute("ref"));if(a||(a=this.instanceRef_),!a)return this;var b=a.ref_;return b?b:a}});var S=1;Object.defineProperty(Node.prototype,"templateInstance",{get:function(){var a=this.templateInstance_;return a?a:this.parentNode?this.parentNode.templateInstance:void 0}});var T=document.createDocumentFragment();T.bindings_=[],T.terminator_=null,E.prototype={closeDeps:function(){var a=this.deps;a&&(a.ifOneTime===!1&&a.ifValue.close(),a.oneTime===!1&&a.value.close())},updateDependencies:function(a,b){this.closeDeps();var c=this.deps={},d=this.templateElement_,e=!0;if(a["if"]){if(c.hasIf=!0,c.ifOneTime=a["if"].onlyOneTime,c.ifValue=v(J,a["if"],d,b),e=c.ifValue,c.ifOneTime&&!e)return void this.valueChanged();c.ifOneTime||(e=e.open(this.updateIfValue,this))}a.repeat?(c.repeat=!0,c.oneTime=a.repeat.onlyOneTime,c.value=v(I,a.repeat,d,b)):(c.repeat=!1,c.oneTime=a.bind.onlyOneTime,c.value=v(H,a.bind,d,b));var f=c.value;return c.oneTime||(f=f.open(this.updateIteratedValue,this)),e?void this.updateValue(f):void this.valueChanged()},getUpdatedValue:function(){var a=this.deps.value;return this.deps.oneTime||(a=a.discardChanges()),a},updateIfValue:function(a){return a?void this.updateValue(this.getUpdatedValue()):void this.valueChanged()},updateIteratedValue:function(a){if(this.deps.hasIf){var b=this.deps.ifValue;if(this.deps.ifOneTime||(b=b.discardChanges()),!b)return void this.valueChanged()}this.updateValue(a)},updateValue:function(a){this.deps.repeat||(a=[a]);var b=this.deps.repeat&&!this.deps.oneTime&&Array.isArray(a);this.valueChanged(a,b)},valueChanged:function(a,b){Array.isArray(a)||(a=[]),a!==this.iteratedValue&&(this.unobserve(),this.presentValue=a,b&&(this.arrayObserver=new ArrayObserver(this.presentValue),this.arrayObserver.open(this.handleSplices,this)),this.handleSplices(ArrayObserver.calculateSplices(this.presentValue,this.iteratedValue)))},getLastInstanceNode:function(a){if(-1==a)return this.templateElement_;var b=this.instances[a],c=b.terminator_;if(!c)return this.getLastInstanceNode(a-1);if(c.nodeType!==Node.ELEMENT_NODE||this.templateElement_===c)return c;var d=c.iterator_;return d?d.getLastTemplateNode():c},getLastTemplateNode:function(){return this.getLastInstanceNode(this.instances.length-1)},insertInstanceAt:function(a,b){var c=this.getLastInstanceNode(a-1),d=this.templateElement_.parentNode;this.instances.splice(a,0,b),d.insertBefore(b,c.nextSibling)},extractInstanceAt:function(a){for(var b=this.getLastInstanceNode(a-1),c=this.getLastInstanceNode(a),d=this.templateElement_.parentNode,e=this.instances.splice(a,1)[0];c!==b;){var f=b.nextSibling;f==c&&(c=b),e.appendChild(d.removeChild(f))}return e},getDelegateFn:function(a){return a=a&&a(this.templateElement_),"function"==typeof a?a:null},handleSplices:function(a){if(!this.closed&&a.length){var b=this.templateElement_;if(!b.parentNode)return void this.close();ArrayObserver.applySplices(this.iteratedValue,this.presentValue,a);var c=b.delegate_;void 0===this.instanceModelFn_&&(this.instanceModelFn_=this.getDelegateFn(c&&c.prepareInstanceModel)),void 0===this.instancePositionChangedFn_&&(this.instancePositionChangedFn_=this.getDelegateFn(c&&c.prepareInstancePositionChanged));for(var d=new F,e=0,f=0;f<a.length;f++){for(var g=a[f],h=g.removed,i=0;i<h.length;i++){var j=h[i],k=this.extractInstanceAt(g.index+e);k!==T&&d.set(j,k)}e-=g.addedCount}for(var f=0;f<a.length;f++)for(var g=a[f],l=g.index;l<g.index+g.addedCount;l++){var j=this.iteratedValue[l],k=d.get(j);k?d["delete"](j):(this.instanceModelFn_&&(j=this.instanceModelFn_(j)),k=void 0===j?T:b.createInstance(j,void 0,c)),this.insertInstanceAt(l,k)}d.forEach(function(a){this.closeInstanceBindings(a)},this),this.instancePositionChangedFn_&&this.reportInstancesMoved(a)}},reportInstanceMoved:function(a){var b=this.instances[a];b!==T&&this.instancePositionChangedFn_(b.templateInstance_,a)},reportInstancesMoved:function(a){for(var b=0,c=0,d=0;d<a.length;d++){var e=a[d];if(0!=c)for(;b<e.index;)this.reportInstanceMoved(b),b++;else b=e.index;for(;b<e.index+e.addedCount;)this.reportInstanceMoved(b),b++;c+=e.addedCount-e.removed.length}if(0!=c)for(var f=this.instances.length;f>b;)this.reportInstanceMoved(b),b++},closeInstanceBindings:function(a){for(var b=a.bindings_,c=0;c<b.length;c++)b[c].close()},unobserve:function(){this.arrayObserver&&(this.arrayObserver.close(),this.arrayObserver=void 0)},close:function(){if(!this.closed){this.unobserve();for(var a=0;a<this.instances.length;a++)this.closeInstanceBindings(this.instances[a]);this.instances.length=0,this.closeDeps(),this.templateElement_.iterator_=void 0,this.closed=!0}}},HTMLTemplateElement.forAllTemplatesFrom_=i}(this),function(a){"use strict";function b(a){return void 0!==m[a]}function c(){h.call(this),this._isInvalid=!0}function d(a){return""==a&&c.call(this),a.toLowerCase()}function e(a){var b=a.charCodeAt(0);return b>32&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function f(a){var b=a.charCodeAt(0);return b>32&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function g(a,g,h){function i(a){t.push(a)}var j=g||"scheme start",k=0,l="",r=!1,s=!1,t=[];a:for(;(a[k-1]!=o||0==k)&&!this._isInvalid;){var u=a[k];switch(j){case"scheme start":if(!u||!p.test(u)){if(g){i("Invalid scheme.");break a}l="",j="no scheme";continue}l+=u.toLowerCase(),j="scheme";break;case"scheme":if(u&&q.test(u))l+=u.toLowerCase();else{if(":"!=u){if(g){if(o==u)break a;i("Code point not allowed in scheme: "+u);break a}l="",k=0,j="no scheme";continue}if(this._scheme=l,l="",g)break a;b(this._scheme)&&(this._isRelative=!0),j="file"==this._scheme?"relative":this._isRelative&&h&&h._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==u?(query="?",j="query"):"#"==u?(this._fragment="#",j="fragment"):o!=u&&"	"!=u&&"\n"!=u&&"\r"!=u&&(this._schemeData+=e(u));break;case"no scheme":if(h&&b(h._scheme)){j="relative";continue}i("Missing scheme."),c.call(this);break;case"relative or authority":if("/"!=u||"/"!=a[k+1]){i("Expected /, got: "+u),j="relative";continue}j="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=h._scheme),o==u){this._host=h._host,this._port=h._port,this._path=h._path.slice(),this._query=h._query;break a}if("/"==u||"\\"==u)"\\"==u&&i("\\ is an invalid code point."),j="relative slash";else if("?"==u)this._host=h._host,this._port=h._port,this._path=h._path.slice(),this._query="?",j="query";else{if("#"!=u){var v=a[k+1],w=a[k+2];("file"!=this._scheme||!p.test(u)||":"!=v&&"|"!=v||o!=w&&"/"!=w&&"\\"!=w&&"?"!=w&&"#"!=w)&&(this._host=h._host,this._port=h._port,this._path=h._path.slice(),this._path.pop()),j="relative path";continue}this._host=h._host,this._port=h._port,this._path=h._path.slice(),this._query=h._query,this._fragment="#",j="fragment"}break;case"relative slash":if("/"!=u&&"\\"!=u){"file"!=this._scheme&&(this._host=h._host,this._port=h._port),j="relative path";continue}"\\"==u&&i("\\ is an invalid code point."),j="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=u){i("Expected '/', got: "+u),j="authority ignore slashes";continue}j="authority second slash";break;case"authority second slash":if(j="authority ignore slashes","/"!=u){i("Expected '/', got: "+u);continue}break;case"authority ignore slashes":if("/"!=u&&"\\"!=u){j="authority";continue}i("Expected authority, got: "+u);break;case"authority":if("@"==u){r&&(i("@ already seen."),l+="%40"),r=!0;for(var x=0;x<l.length;x++){var y=l[x];if("	"!=y&&"\n"!=y&&"\r"!=y)if(":"!=y||null!==this._password){var z=e(y);null!==this._password?this._password+=z:this._username+=z}else this._password="";else i("Invalid whitespace in authority.")}l=""}else{if(o==u||"/"==u||"\\"==u||"?"==u||"#"==u){k-=l.length,l="",j="host";continue}l+=u}break;case"file host":if(o==u||"/"==u||"\\"==u||"?"==u||"#"==u){2!=l.length||!p.test(l[0])||":"!=l[1]&&"|"!=l[1]?0==l.length?j="relative path start":(this._host=d.call(this,l),l="",j="relative path start"):j="relative path";continue}"	"==u||"\n"==u||"\r"==u?i("Invalid whitespace in file host."):l+=u;break;case"host":case"hostname":if(":"!=u||s){if(o==u||"/"==u||"\\"==u||"?"==u||"#"==u){if(this._host=d.call(this,l),l="",j="relative path start",g)break a;continue}"	"!=u&&"\n"!=u&&"\r"!=u?("["==u?s=!0:"]"==u&&(s=!1),l+=u):i("Invalid code point in host/hostname: "+u)}else if(this._host=d.call(this,l),l="",j="port","hostname"==g)break a;break;case"port":if(/[0-9]/.test(u))l+=u;else{if(o==u||"/"==u||"\\"==u||"?"==u||"#"==u||g){if(""!=l){var A=parseInt(l,10);A!=m[this._scheme]&&(this._port=A+""),l=""}if(g)break a;j="relative path start";continue}"	"==u||"\n"==u||"\r"==u?i("Invalid code point in port: "+u):c.call(this)}break;case"relative path start":if("\\"==u&&i("'\\' not allowed in path."),j="relative path","/"!=u&&"\\"!=u)continue;break;case"relative path":if(o!=u&&"/"!=u&&"\\"!=u&&(g||"?"!=u&&"#"!=u))"	"!=u&&"\n"!=u&&"\r"!=u&&(l+=e(u));else{"\\"==u&&i("\\ not allowed in relative path.");var B;(B=n[l.toLowerCase()])&&(l=B),".."==l?(this._path.pop(),"/"!=u&&"\\"!=u&&this._path.push("")):"."==l&&"/"!=u&&"\\"!=u?this._path.push(""):"."!=l&&("file"==this._scheme&&0==this._path.length&&2==l.length&&p.test(l[0])&&"|"==l[1]&&(l=l[0]+":"),this._path.push(l)),l="","?"==u?(this._query="?",j="query"):"#"==u&&(this._fragment="#",j="fragment")}break;case"query":g||"#"!=u?o!=u&&"	"!=u&&"\n"!=u&&"\r"!=u&&(this._query+=f(u)):(this._fragment="#",j="fragment");break;case"fragment":o!=u&&"	"!=u&&"\n"!=u&&"\r"!=u&&(this._fragment+=u)}k++}}function h(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function i(a,b){void 0===b||b instanceof i||(b=new i(String(b))),this._url=a,h.call(this);var c=a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");g.call(this,c,null,b)}var j=!1;if(!a.forceJURL)try{var k=new URL("b","http://a");j="http://a/b"===k.href}catch(l){}if(!j){var m=Object.create(null);m.ftp=21,m.file=0,m.gopher=70,m.http=3001,m.https=443,m.ws=80,m.wss=443;var n=Object.create(null);n["%2e"]=".",n[".%2e"]="..",n["%2e."]="..",n["%2e%2e"]="..";var o=void 0,p=/[a-zA-Z]/,q=/[a-zA-Z0-9\+\-\.]/;i.prototype={get href(){if(this._isInvalid)return this._url;var a="";return(""!=this._username||null!=this._password)&&(a=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+a+this.host:"")+this.pathname+this._query+this._fragment},set href(a){h.call(this),g.call(this,a)},get protocol(){return this._scheme+":"},set protocol(a){this._isInvalid||g.call(this,a+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(a){!this._isInvalid&&this._isRelative&&g.call(this,a,"host")},get hostname(){return this._host},set hostname(a){!this._isInvalid&&this._isRelative&&g.call(this,a,"hostname")},get port(){return this._port},set port(a){!this._isInvalid&&this._isRelative&&g.call(this,a,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(a){!this._isInvalid&&this._isRelative&&(this._path=[],g.call(this,a,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(a){!this._isInvalid&&this._isRelative&&(this._query="?","?"==a[0]&&(a=a.slice(1)),g.call(this,a,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(a){this._isInvalid||(this._fragment="#","#"==a[0]&&(a=a.slice(1)),g.call(this,a,"fragment"))},get origin(){var a;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return a=this.host,a?this._scheme+"://"+a:""}};var r=a.URL;r&&(i.createObjectURL=function(){return r.createObjectURL.apply(r,arguments)},i.revokeObjectURL=function(a){r.revokeObjectURL(a)}),a.URL=i}}(this),function(a){function b(a){f.textContent=d++,e.push(a)}function c(){for(;e.length;)e.shift()()}var d=0,e=[],f=document.createTextNode("");new(window.MutationObserver||JsMutationObserver)(c).observe(f,{characterData:!0}),a.endOfMicrotask=b,Platform.endOfMicrotask=b}(Polymer),function(a){function b(){g||(g=!0,c(function(){g=!1,d.data&&console.group("flush"),Platform.performMicrotaskCheckpoint(),d.data&&console.groupEnd()}))}var c=a.endOfMicrotask,d=window.WebComponents?WebComponents.flags.log:{},e=document.createElement("style");e.textContent="template {display: none !important;} /* injected by platform.js */";var f=document.querySelector("head");f.insertBefore(e,f.firstChild);var g;if(Observer.hasObjectObserve)b=function(){};else{var h=125;window.addEventListener("WebComponentsReady",function(){b();var c=function(){"hidden"===document.visibilityState?a.flushPoll&&clearInterval(a.flushPoll):a.flushPoll=setInterval(b,h)};"string"==typeof document.visibilityState&&document.addEventListener("visibilitychange",c),c()})}if(window.CustomElements&&!CustomElements.useNative){var i=Document.prototype.importNode;Document.prototype.importNode=function(a,b){var c=i.call(this,a,b);return CustomElements.upgradeAll(c),c}}a.flush=b,Platform.flush=b}(window.Polymer),function(a){function b(a){var b=new URL(a.ownerDocument.baseURI);return b.search="",b.hash="",b}function c(a,b,c,e){return a.replace(e,function(a,e,f,g){var h=f.replace(/["']/g,"");return h=d(b,h,c),e+"'"+h+"'"+g})}function d(a,b,c){if(b&&"/"===b[0])return b;var d=new URL(b,a);return c?d.href:e(d.href)}function e(a){var c=b(document.documentElement),d=new URL(a,c);return d.host===c.host&&d.port===c.port&&d.protocol===c.protocol?f(c,d):a}function f(a,b){for(var c=a.pathname,d=b.pathname,e=c.split("/"),f=d.split("/");e.length&&e[0]===f[0];)e.shift(),f.shift();for(var g=0,h=e.length-1;h>g;g++)f.unshift("..");var i=b.href.slice(-1)===m?m:b.hash;return f.join("/")+b.search+i}var g={resolveDom:function(a,c){c=c||b(a),this.resolveAttributes(a,c),this.resolveStyles(a,c);var d=a.querySelectorAll("template");if(d)for(var e,f=0,g=d.length;g>f&&(e=d[f]);f++)e.content&&this.resolveDom(e.content,c)},resolveTemplate:function(a){this.resolveDom(a.content,b(a))},resolveStyles:function(a,b){var c=a.querySelectorAll("style");if(c)for(var d,e=0,f=c.length;f>e&&(d=c[e]);e++)this.resolveStyle(d,b)},resolveStyle:function(a,c){c=c||b(a),a.textContent=this.resolveCssText(a.textContent,c)},resolveCssText:function(a,b,d){return a=c(a,b,d,h),c(a,b,d,i)},resolveAttributes:function(a,b){a.hasAttributes&&a.hasAttributes()&&this.resolveElementAttributes(a,b);var c=a&&a.querySelectorAll(k);if(c)for(var d,e=0,f=c.length;f>e&&(d=c[e]);e++)this.resolveElementAttributes(d,b)},resolveElementAttributes:function(a,e){e=e||b(a),j.forEach(function(b){var f,g=a.attributes[b],i=g&&g.value;i&&i.search(l)<0&&(f="style"===b?c(i,e,!1,h):d(e,i),g.value=f)})}},h=/(url\()([^)]*)(\))/g,i=/(@import[\s]+(?!url\())([^;]*)(;)/g,j=["href","src","action","style","url"],k="["+j.join("],[")+"]",l="{{.*}}",m="#";a.urlResolver=g}(Polymer),function(a){function b(a){this.cache=Object.create(null),this.map=Object.create(null),this.requests=0,this.regex=a}var c=Polymer.endOfMicrotask;b.prototype={extractUrls:function(a,b){for(var c,d,e=[];c=this.regex.exec(a);)d=new URL(c[1],b),e.push({matched:c[0],url:d.href});return e},process:function(a,b,c){var d=this.extractUrls(a,b),e=c.bind(null,this.map);this.fetch(d,e)},fetch:function(a,b){var c=a.length;if(!c)return b();for(var d,e,f,g=function(){0===--c&&b()},h=0;c>h;h++)d=a[h],f=d.url,e=this.cache[f],e||(e=this.xhr(f),e.match=d,this.cache[f]=e),e.wait(g)},handleXhr:function(a){var b=a.match,c=b.url,d=a.response||a.responseText||"";this.map[c]=d,this.fetch(this.extractUrls(d,c),a.resolve)},xhr:function(a){this.requests++;var b=new XMLHttpRequest;return b.open("GET",a,!0),b.send(),b.onerror=b.onload=this.handleXhr.bind(this,b),b.pending=[],b.resolve=function(){for(var a=b.pending,c=0;c<a.length;c++)a[c]();b.pending=null},b.wait=function(a){b.pending?b.pending.push(a):c(a)},b}},a.Loader=b}(Polymer),function(a){function b(){this.loader=new d(this.regex)}var c=a.urlResolver,d=a.Loader;b.prototype={regex:/@import\s+(?:url)?["'\(]*([^'"\)]*)['"\)]*;/g,resolve:function(a,b,c){var d=function(d){c(this.flatten(a,b,d))}.bind(this);this.loader.process(a,b,d)},resolveNode:function(a,b,c){var d=a.textContent,e=function(b){a.textContent=b,c(a)};this.resolve(d,b,e)},flatten:function(a,b,d){for(var e,f,g,h=this.loader.extractUrls(a,b),i=0;i<h.length;i++)e=h[i],f=e.url,g=c.resolveCssText(d[f],f,!0),g=this.flatten(g,b,d),a=a.replace(e.matched,g);return a},loadStyles:function(a,b,c){function d(){f++,f===g&&c&&c()}for(var e,f=0,g=a.length,h=0;g>h&&(e=a[h]);h++)this.resolveNode(e,b,d)}};var e=new b;a.styleResolver=e}(Polymer),function(a){function b(a,b){return a&&b&&Object.getOwnPropertyNames(b).forEach(function(c){var d=Object.getOwnPropertyDescriptor(b,c);d&&(Object.defineProperty(a,c,d),"function"==typeof d.value&&(d.value.nom=c))}),a}function c(a){for(var b=a||{},c=1;c<arguments.length;c++){var e=arguments[c];try{for(var f in e)d(f,e,b)}catch(g){}}return b}function d(a,b,c){var d=e(b,a);Object.defineProperty(c,a,d)}function e(a,b){if(a){var c=Object.getOwnPropertyDescriptor(a,b);return c||e(Object.getPrototypeOf(a),b)}}a.extend=b,a.mixin=c,Platform.mixin=c}(Polymer),function(a){function b(a,b,d){return a?a.stop():a=new c(this),a.go(b,d),a}var c=function(a){this.context=a,this.boundComplete=this.complete.bind(this)};c.prototype={go:function(a,b){this.callback=a;var c;b?(c=setTimeout(this.boundComplete,b),this.handle=function(){clearTimeout(c)}):(c=requestAnimationFrame(this.boundComplete),this.handle=function(){cancelAnimationFrame(c)})},stop:function(){this.handle&&(this.handle(),this.handle=null)},complete:function(){this.handle&&(this.stop(),this.callback.call(this.context))}},a.job=b}(Polymer),function(a){function b(a,b,c){var d="string"==typeof a?document.createElement(a):a.cloneNode(!0);if(d.innerHTML=b,c)for(var e in c)d.setAttribute(e,c[e]);return d}var c={};HTMLElement.register=function(a,b){c[a]=b},HTMLElement.getPrototypeForTag=function(a){var b=a?c[a]:HTMLElement.prototype;return b||Object.getPrototypeOf(document.createElement(a))};var d=Event.prototype.stopPropagation;Event.prototype.stopPropagation=function(){this.cancelBubble=!0,d.apply(this,arguments)};var e=DOMTokenList.prototype.add,f=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){for(var a=0;a<arguments.length;a++)e.call(this,arguments[a])},DOMTokenList.prototype.remove=function(){for(var a=0;a<arguments.length;a++)f.call(this,arguments[a])},DOMTokenList.prototype.toggle=function(a,b){1==arguments.length&&(b=!this.contains(a)),b?this.add(a):this.remove(a)},DOMTokenList.prototype["switch"]=function(a,b){a&&this.remove(a),b&&this.add(b)};var g=function(){return Array.prototype.slice.call(this)},h=window.NamedNodeMap||window.MozNamedAttrMap||{};NodeList.prototype.array=g,h.prototype.array=g,HTMLCollection.prototype.array=g,a.createDOM=b}(Polymer),function(a){function b(a){var e=b.caller,g=e.nom,h=e._super;h||(g||(g=e.nom=c.call(this,e)),g||console.warn("called super() on a method not installed declaratively (has no .nom property)"),h=d(e,g,f(this)));var i=h[g];return i?(i._super||d(i,g,h),i.apply(this,a||[])):void 0}function c(a){for(var b=this.__proto__;b&&b!==HTMLElement.prototype;){for(var c,d=Object.getOwnPropertyNames(b),e=0,f=d.length;f>e&&(c=d[e]);e++){var g=Object.getOwnPropertyDescriptor(b,c);if("function"==typeof g.value&&g.value===a)return c}b=b.__proto__}}function d(a,b,c){var d=e(c,b,a);return d[b]&&(d[b].nom=b),a._super=d}function e(a,b,c){for(;a;){if(a[b]!==c&&a[b])return a;a=f(a)}return Object}function f(a){return a.__proto__}a["super"]=b}(Polymer),function(a){function b(a){return a}function c(a,b){var c=typeof b;return b instanceof Date&&(c="date"),d[c](a,b)}var d={string:b,undefined:b,date:function(a){return new Date(Date.parse(a)||Date.now())},"boolean":function(a){return""===a?!0:"false"===a?!1:!!a},number:function(a){var b=parseFloat(a);return 0===b&&(b=parseInt(a)),isNaN(b)?a:b},object:function(a,b){if(null===b)return a;try{return JSON.parse(a.replace(/'/g,'"'))}catch(c){return a}},"function":function(a,b){return b}};a.deserializeValue=c}(Polymer),function(a){var b=a.extend,c={};c.declaration={},c.instance={},c.publish=function(a,c){for(var d in a)b(c,a[d])},a.api=c}(Polymer),function(a){var b={async:function(a,b,c){Polymer.flush(),b=b&&b.length?b:[b];var d=function(){(this[a]||a).apply(this,b)}.bind(this),e=c?setTimeout(d,c):requestAnimationFrame(d);return c?e:~e},cancelAsync:function(a){0>a?cancelAnimationFrame(~a):clearTimeout(a)},fire:function(a,b,c,d,e){var f=c||this,b=null===b||void 0===b?{}:b,g=new CustomEvent(a,{bubbles:void 0!==d?d:!0,cancelable:void 0!==e?e:!0,detail:b});return f.dispatchEvent(g),g},asyncFire:function(){this.async("fire",arguments)},classFollows:function(a,b,c){b&&b.classList.remove(c),a&&a.classList.add(c)},injectBoundHTML:function(a,b){var c=document.createElement("template");c.innerHTML=a;var d=this.instanceTemplate(c);return b&&(b.textContent="",b.appendChild(d)),d}},c=function(){},d={};b.asyncMethod=b.async,a.api.instance.utils=b,a.nop=c,a.nob=d}(Polymer),function(a){var b=window.WebComponents?WebComponents.flags.log:{},c="on-",d={EVENT_PREFIX:c,addHostListeners:function(){var a=this.eventDelegates;
b.events&&Object.keys(a).length>0&&console.log("[%s] addHostListeners:",this.localName,a);for(var c in a){var d=a[c];PolymerGestures.addEventListener(this,c,this.element.getEventHandler(this,this,d))}},dispatchMethod:function(a,c,d){if(a){b.events&&console.group("[%s] dispatch [%s]",a.localName,c);var e="function"==typeof c?c:a[c];e&&e[d?"apply":"call"](a,d),b.events&&console.groupEnd(),Polymer.flush()}}};a.api.instance.events=d,a.addEventListener=function(a,b,c,d){PolymerGestures.addEventListener(wrap(a),b,c,d)},a.removeEventListener=function(a,b,c,d){PolymerGestures.removeEventListener(wrap(a),b,c,d)}}(Polymer),function(a){var b={copyInstanceAttributes:function(){var a=this._instanceAttributes;for(var b in a)this.hasAttribute(b)||this.setAttribute(b,a[b])},takeAttributes:function(){if(this._publishLC)for(var a,b=0,c=this.attributes,d=c.length;(a=c[b])&&d>b;b++)this.attributeToProperty(a.name,a.value)},attributeToProperty:function(b,c){var b=this.propertyForAttribute(b);if(b){if(c&&c.search(a.bindPattern)>=0)return;var d=this[b],c=this.deserializeValue(c,d);c!==d&&(this[b]=c)}},propertyForAttribute:function(a){var b=this._publishLC&&this._publishLC[a];return b},deserializeValue:function(b,c){return a.deserializeValue(b,c)},serializeValue:function(a,b){return"boolean"===b?a?"":void 0:"object"!==b&&"function"!==b&&void 0!==a?a:void 0},reflectPropertyToAttribute:function(a){var b=typeof this[a],c=this.serializeValue(this[a],b);void 0!==c?this.setAttribute(a,c):"boolean"===b&&this.removeAttribute(a)}};a.api.instance.attributes=b}(Polymer),function(a){function b(a,b){return a===b?0!==a||1/a===1/b:f(a)&&f(b)?!0:a!==a&&b!==b}function c(a,b){return void 0===b&&null===a?b:null===b||void 0===b?a:b}var d=window.WebComponents?WebComponents.flags.log:{},e={object:void 0,type:"update",name:void 0,oldValue:void 0},f=Number.isNaN||function(a){return"number"==typeof a&&isNaN(a)},g={createPropertyObserver:function(){var a=this._observeNames;if(a&&a.length){var b=this._propertyObserver=new CompoundObserver(!0);this.registerObserver(b);for(var c,d=0,e=a.length;e>d&&(c=a[d]);d++)b.addPath(this,c),this.observeArrayValue(c,this[c],null)}},openPropertyObserver:function(){this._propertyObserver&&this._propertyObserver.open(this.notifyPropertyChanges,this)},notifyPropertyChanges:function(a,b,c){var d,e,f={};for(var g in b)if(d=c[2*g+1],e=this.observe[d]){var h=b[g],i=a[g];this.observeArrayValue(d,i,h),f[e]||(void 0!==h&&null!==h||void 0!==i&&null!==i)&&(f[e]=!0,this.invokeMethod(e,[h,i,arguments]))}},invokeMethod:function(a,b){var c=this[a]||a;"function"==typeof c&&c.apply(this,b)},deliverChanges:function(){this._propertyObserver&&this._propertyObserver.deliver()},observeArrayValue:function(a,b,c){var e=this.observe[a];if(e&&(Array.isArray(c)&&(d.observe&&console.log("[%s] observeArrayValue: unregister observer [%s]",this.localName,a),this.closeNamedObserver(a+"__array")),Array.isArray(b))){d.observe&&console.log("[%s] observeArrayValue: register observer [%s]",this.localName,a,b);var f=new ArrayObserver(b);f.open(function(a){this.invokeMethod(e,[a])},this),this.registerNamedObserver(a+"__array",f)}},emitPropertyChangeRecord:function(a,c,d){if(!b(c,d)&&(this._propertyChanged(a,c,d),Observer.hasObjectObserve)){var f=this._objectNotifier;f||(f=this._objectNotifier=Object.getNotifier(this)),e.object=this,e.name=a,e.oldValue=d,f.notify(e)}},_propertyChanged:function(a){this.reflect[a]&&this.reflectPropertyToAttribute(a)},bindProperty:function(a,b,d){if(d)return void(this[a]=b);var e=this.element.prototype.computed;if(e&&e[a]){var f=a+"ComputedBoundObservable_";return void(this[f]=b)}return this.bindToAccessor(a,b,c)},bindToAccessor:function(a,c,d){function e(b,c){j[f]=b;var d=j[h];d&&"function"==typeof d.setValue&&d.setValue(b),j.emitPropertyChangeRecord(a,b,c)}var f=a+"_",g=a+"Observable_",h=a+"ComputedBoundObservable_";this[g]=c;var i=this[f],j=this,k=c.open(e);if(d&&!b(i,k)){var l=d(i,k);b(k,l)||(k=l,c.setValue&&c.setValue(k))}e(k,i);var m={close:function(){c.close(),j[g]=void 0,j[h]=void 0}};return this.registerObserver(m),m},createComputedProperties:function(){if(this._computedNames)for(var a=0;a<this._computedNames.length;a++){var b=this._computedNames[a],c=this.computed[b];try{var d=PolymerExpressions.getExpression(c),e=d.getBinding(this,this.element.syntax);this.bindToAccessor(b,e)}catch(f){console.error("Failed to create computed property",f)}}},registerObserver:function(a){return this._observers?void this._observers.push(a):void(this._observers=[a])},closeObservers:function(){if(this._observers){for(var a=this._observers,b=0;b<a.length;b++){var c=a[b];c&&"function"==typeof c.close&&c.close()}this._observers=[]}},registerNamedObserver:function(a,b){var c=this._namedObservers||(this._namedObservers={});c[a]=b},closeNamedObserver:function(a){var b=this._namedObservers;return b&&b[a]?(b[a].close(),b[a]=null,!0):void 0},closeNamedObservers:function(){if(this._namedObservers){for(var a in this._namedObservers)this.closeNamedObserver(a);this._namedObservers={}}}};a.api.instance.properties=g}(Polymer),function(a){var b=window.WebComponents?WebComponents.flags.log:{},c={instanceTemplate:function(a){HTMLTemplateElement.decorate(a);for(var b=this.syntax||!a.bindingDelegate&&this.element.syntax,c=a.createInstance(this,b),d=c.bindings_,e=0;e<d.length;e++)this.registerObserver(d[e]);return c},bind:function(a,b,c){var d=this.propertyForAttribute(a);if(d){var e=this.bindProperty(d,b,c);return Platform.enableBindingsReflection&&e&&(e.path=b.path_,this._recordBinding(d,e)),this.reflect[d]&&this.reflectPropertyToAttribute(d),e}return this.mixinSuper(arguments)},_recordBinding:function(a,b){this.bindings_=this.bindings_||{},this.bindings_[a]=b},bindFinished:function(){this.makeElementReady()},asyncUnbindAll:function(){this._unbound||(b.unbind&&console.log("[%s] asyncUnbindAll",this.localName),this._unbindAllJob=this.job(this._unbindAllJob,this.unbindAll,0))},unbindAll:function(){this._unbound||(this.closeObservers(),this.closeNamedObservers(),this._unbound=!0)},cancelUnbindAll:function(){return this._unbound?void(b.unbind&&console.warn("[%s] already unbound, cannot cancel unbindAll",this.localName)):(b.unbind&&console.log("[%s] cancelUnbindAll",this.localName),void(this._unbindAllJob&&(this._unbindAllJob=this._unbindAllJob.stop())))}},d=/\{\{([^{}]*)}}/;a.bindPattern=d,a.api.instance.mdv=c}(Polymer),function(a){function b(a){return a.hasOwnProperty("PolymerBase")}function c(){}var d={PolymerBase:!0,job:function(a,b,c){if("string"!=typeof a)return Polymer.job.call(this,a,b,c);var d="___"+a;this[d]=Polymer.job.call(this,this[d],b,c)},"super":Polymer["super"],created:function(){},ready:function(){},createdCallback:function(){this.templateInstance&&this.templateInstance.model&&console.warn("Attributes on "+this.localName+" were data bound prior to Polymer upgrading the element. This may result in incorrect binding types."),this.created(),this.prepareElement(),this.ownerDocument.isStagingDocument||this.makeElementReady()},prepareElement:function(){return this._elementPrepared?void console.warn("Element already prepared",this.localName):(this._elementPrepared=!0,this.shadowRoots={},this.createPropertyObserver(),this.openPropertyObserver(),this.copyInstanceAttributes(),this.takeAttributes(),void this.addHostListeners())},makeElementReady:function(){this._readied||(this._readied=!0,this.createComputedProperties(),this.parseDeclarations(this.__proto__),this.removeAttribute("unresolved"),this.ready())},attributeChangedCallback:function(a){"class"!==a&&"style"!==a&&this.attributeToProperty(a,this.getAttribute(a)),this.attributeChanged&&this.attributeChanged.apply(this,arguments)},attachedCallback:function(){this.cancelUnbindAll(),this.attached&&this.attached(),this.hasBeenAttached||(this.hasBeenAttached=!0,this.domReady&&this.async("domReady"))},detachedCallback:function(){this.preventDispose||this.asyncUnbindAll(),this.detached&&this.detached(),this.leftView&&this.leftView()},parseDeclarations:function(a){a&&a.element&&(this.parseDeclarations(a.__proto__),a.parseDeclaration.call(this,a.element))},parseDeclaration:function(a){var b=this.fetchTemplate(a);if(b){var c=this.shadowFromTemplate(b);this.shadowRoots[a.name]=c}},fetchTemplate:function(a){return a.querySelector("template")},shadowFromTemplate:function(a){if(a){var b=this.createShadowRoot(),c=this.instanceTemplate(a);return b.appendChild(c),this.shadowRootReady(b,a),b}},lightFromTemplate:function(a,b){if(a){this.eventController=this;var c=this.instanceTemplate(a);return b?this.insertBefore(c,b):this.appendChild(c),this.shadowRootReady(this),c}},shadowRootReady:function(a){this.marshalNodeReferences(a)},marshalNodeReferences:function(a){var b=this.$=this.$||{};if(a)for(var c,d=a.querySelectorAll("[id]"),e=0,f=d.length;f>e&&(c=d[e]);e++)b[c.id]=c},onMutation:function(a,b){var c=new MutationObserver(function(a){b.call(this,c,a),c.disconnect()}.bind(this));c.observe(a,{childList:!0,subtree:!0})}};c.prototype=d,d.constructor=c,a.Base=c,a.isBase=b,a.api.instance.base=d}(Polymer),function(a){function b(a){return a.__proto__}function c(a,b){var c="",d=!1;b&&(c=b.localName,d=b.hasAttribute("is"));var e=WebComponents.ShadowCSS.makeScopeSelector(c,d);return WebComponents.ShadowCSS.shimCssText(a,e)}var d=(window.WebComponents?WebComponents.flags.log:{},window.ShadowDOMPolyfill),e="element",f="controller",g={STYLE_SCOPE_ATTRIBUTE:e,installControllerStyles:function(){var a=this.findStyleScope();if(a&&!this.scopeHasNamedStyle(a,this.localName)){for(var c=b(this),d="";c&&c.element;)d+=c.element.cssTextForScope(f),c=b(c);d&&this.installScopeCssText(d,a)}},installScopeStyle:function(a,b,c){var c=c||this.findStyleScope(),b=b||"";if(c&&!this.scopeHasNamedStyle(c,this.localName+b)){var d="";if(a instanceof Array)for(var e,f=0,g=a.length;g>f&&(e=a[f]);f++)d+=e.textContent+"\n\n";else d=a.textContent;this.installScopeCssText(d,c,b)}},installScopeCssText:function(a,b,e){if(b=b||this.findStyleScope(),e=e||"",b){d&&(a=c(a,b.host));var g=this.element.cssTextToScopeStyle(a,f);Polymer.applyStyleToScope(g,b),this.styleCacheForScope(b)[this.localName+e]=!0}},findStyleScope:function(a){for(var b=a||this;b.parentNode;)b=b.parentNode;return b},scopeHasNamedStyle:function(a,b){var c=this.styleCacheForScope(a);return c[b]},styleCacheForScope:function(a){if(d){var b=a.host?a.host.localName:a.localName;return h[b]||(h[b]={})}return a._scopeStyles=a._scopeStyles||{}}},h={};a.api.instance.styles=g}(Polymer),function(a){function b(a,b){if("string"!=typeof a){var c=b||document._currentScript;if(b=a,a=c&&c.parentNode&&c.parentNode.getAttribute?c.parentNode.getAttribute("name"):"",!a)throw"Element name could not be inferred."}if(f(a))throw"Already registered (Polymer) prototype for element "+a;e(a,b),d(a)}function c(a,b){i[a]=b}function d(a){i[a]&&(i[a].registerWhenReady(),delete i[a])}function e(a,b){return j[a]=b||{}}function f(a){return j[a]}function g(a,b){if("string"!=typeof b)return!1;var c=HTMLElement.getPrototypeForTag(b),d=c&&c.constructor;return d?CustomElements["instanceof"]?CustomElements["instanceof"](a,d):a instanceof d:!1}var h=a.extend,i=(a.api,{}),j={};a.getRegisteredPrototype=f,a.waitingForPrototype=c,a.instanceOfType=g,window.Polymer=b,h(Polymer,a),WebComponents.consumeDeclarations&&WebComponents.consumeDeclarations(function(a){if(a)for(var c,d=0,e=a.length;e>d&&(c=a[d]);d++)b.apply(null,c)})}(Polymer),function(a){var b={resolveElementPaths:function(a){Polymer.urlResolver.resolveDom(a)},addResolvePathApi:function(){var a=this.getAttribute("assetpath")||"",b=new URL(a,this.ownerDocument.baseURI);this.prototype.resolvePath=function(a,c){var d=new URL(a,c||b);return d.href}}};a.api.declaration.path=b}(Polymer),function(a){function b(a,b){var c=new URL(a.getAttribute("href"),b).href;return"@import '"+c+"';"}function c(a,b){if(a){b===document&&(b=document.head),i&&(b=document.head);var c=d(a.textContent),e=a.getAttribute(h);e&&c.setAttribute(h,e);var f=b.firstElementChild;if(b===document.head){var g="style["+h+"]",j=document.head.querySelectorAll(g);j.length&&(f=j[j.length-1].nextElementSibling)}b.insertBefore(c,f)}}function d(a,b){b=b||document,b=b.createElement?b:b.ownerDocument;var c=b.createElement("style");return c.textContent=a,c}function e(a){return a&&a.__resource||""}function f(a,b){return q?q.call(a,b):void 0}var g=(window.WebComponents?WebComponents.flags.log:{},a.api.instance.styles),h=g.STYLE_SCOPE_ATTRIBUTE,i=window.ShadowDOMPolyfill,j="style",k="@import",l="link[rel=stylesheet]",m="global",n="polymer-scope",o={loadStyles:function(a){var b=this.fetchTemplate(),c=b&&this.templateContent();if(c){this.convertSheetsToStyles(c);var d=this.findLoadableStyles(c);if(d.length){var e=b.ownerDocument.baseURI;return Polymer.styleResolver.loadStyles(d,e,a)}}a&&a()},convertSheetsToStyles:function(a){for(var c,e,f=a.querySelectorAll(l),g=0,h=f.length;h>g&&(c=f[g]);g++)e=d(b(c,this.ownerDocument.baseURI),this.ownerDocument),this.copySheetAttributes(e,c),c.parentNode.replaceChild(e,c)},copySheetAttributes:function(a,b){for(var c,d=0,e=b.attributes,f=e.length;(c=e[d])&&f>d;d++)"rel"!==c.name&&"href"!==c.name&&a.setAttribute(c.name,c.value)},findLoadableStyles:function(a){var b=[];if(a)for(var c,d=a.querySelectorAll(j),e=0,f=d.length;f>e&&(c=d[e]);e++)c.textContent.match(k)&&b.push(c);return b},installSheets:function(){this.cacheSheets(),this.cacheStyles(),this.installLocalSheets(),this.installGlobalStyles()},cacheSheets:function(){this.sheets=this.findNodes(l),this.sheets.forEach(function(a){a.parentNode&&a.parentNode.removeChild(a)})},cacheStyles:function(){this.styles=this.findNodes(j+"["+n+"]"),this.styles.forEach(function(a){a.parentNode&&a.parentNode.removeChild(a)})},installLocalSheets:function(){var a=this.sheets.filter(function(a){return!a.hasAttribute(n)}),b=this.templateContent();if(b){var c="";if(a.forEach(function(a){c+=e(a)+"\n"}),c){var f=d(c,this.ownerDocument);b.insertBefore(f,b.firstChild)}}},findNodes:function(a,b){var c=this.querySelectorAll(a).array(),d=this.templateContent();if(d){var e=d.querySelectorAll(a).array();c=c.concat(e)}return b?c.filter(b):c},installGlobalStyles:function(){var a=this.styleForScope(m);c(a,document.head)},cssTextForScope:function(a){var b="",c="["+n+"="+a+"]",d=function(a){return f(a,c)},g=this.sheets.filter(d);g.forEach(function(a){b+=e(a)+"\n\n"});var h=this.styles.filter(d);return h.forEach(function(a){b+=a.textContent+"\n\n"}),b},styleForScope:function(a){var b=this.cssTextForScope(a);return this.cssTextToScopeStyle(b,a)},cssTextToScopeStyle:function(a,b){if(a){var c=d(a);return c.setAttribute(h,this.getAttribute("name")+"-"+b),c}}},p=HTMLElement.prototype,q=p.matches||p.matchesSelector||p.webkitMatchesSelector||p.mozMatchesSelector;a.api.declaration.styles=o,a.applyStyleToScope=c}(Polymer),function(a){var b=(window.WebComponents?WebComponents.flags.log:{},a.api.instance.events),c=b.EVENT_PREFIX,d={};["webkitAnimationStart","webkitAnimationEnd","webkitTransitionEnd","DOMFocusOut","DOMFocusIn","DOMMouseScroll"].forEach(function(a){d[a.toLowerCase()]=a});var e={parseHostEvents:function(){var a=this.prototype.eventDelegates;this.addAttributeDelegates(a)},addAttributeDelegates:function(a){for(var b,c=0;b=this.attributes[c];c++)this.hasEventPrefix(b.name)&&(a[this.removeEventPrefix(b.name)]=b.value.replace("{{","").replace("}}","").trim())},hasEventPrefix:function(a){return a&&"o"===a[0]&&"n"===a[1]&&"-"===a[2]},removeEventPrefix:function(a){return a.slice(f)},findController:function(a){for(;a.parentNode;){if(a.eventController)return a.eventController;a=a.parentNode}return a.host},getEventHandler:function(a,b,c){var d=this;return function(e){a&&a.PolymerBase||(a=d.findController(b));var f=[e,e.detail,e.currentTarget];a.dispatchMethod(a,c,f)}},prepareEventBinding:function(a,b){if(this.hasEventPrefix(b)){var c=this.removeEventPrefix(b);c=d[c]||c;var e=this;return function(b,d,f){function g(){return"{{ "+a+" }}"}var h=e.getEventHandler(void 0,d,a);return PolymerGestures.addEventListener(d,c,h),f?void 0:{open:g,discardChanges:g,close:function(){PolymerGestures.removeEventListener(d,c,h)}}}}}},f=c.length;a.api.declaration.events=e}(Polymer),function(a){var b=["attribute"],c={inferObservers:function(a){var b,c=a.observe;for(var d in a)"Changed"===d.slice(-7)&&(b=d.slice(0,-7),this.canObserveProperty(b)&&(c||(c=a.observe={}),c[b]=c[b]||d))},canObserveProperty:function(a){return b.indexOf(a)<0},explodeObservers:function(a){var b=a.observe;if(b){var c={};for(var d in b)for(var e,f=d.split(" "),g=0;e=f[g];g++)c[e]=b[d];a.observe=c}},optimizePropertyMaps:function(a){if(a.observe){var b=a._observeNames=[];for(var c in a.observe)for(var d,e=c.split(" "),f=0;d=e[f];f++)b.push(d)}if(a.publish){var b=a._publishNames=[];for(var c in a.publish)b.push(c)}if(a.computed){var b=a._computedNames=[];for(var c in a.computed)b.push(c)}},publishProperties:function(a,b){var c=a.publish;c&&(this.requireProperties(c,a,b),this.filterInvalidAccessorNames(c),a._publishLC=this.lowerCaseMap(c));var d=a.computed;d&&this.filterInvalidAccessorNames(d)},filterInvalidAccessorNames:function(a){for(var b in a)this.propertyNameBlacklist[b]&&(console.warn('Cannot define property "'+b+'" for element "'+this.name+'" because it has the same name as an HTMLElement property, and not all browsers support overriding that. Consider giving it a different name.'),delete a[b])},requireProperties:function(a,b){b.reflect=b.reflect||{};for(var c in a){var d=a[c];d&&void 0!==d.reflect&&(b.reflect[c]=Boolean(d.reflect),d=d.value),void 0!==d&&(b[c]=d)}},lowerCaseMap:function(a){var b={};for(var c in a)b[c.toLowerCase()]=c;return b},createPropertyAccessor:function(a,b){var c=this.prototype,d=a+"_",e=a+"Observable_";c[d]=c[a],Object.defineProperty(c,a,{get:function(){var a=this[e];return a&&a.deliver(),this[d]},set:function(c){if(b)return this[d];var f=this[e];if(f)return void f.setValue(c);var g=this[d];return this[d]=c,this.emitPropertyChangeRecord(a,c,g),c},configurable:!0})},createPropertyAccessors:function(a){var b=a._computedNames;if(b&&b.length)for(var c,d=0,e=b.length;e>d&&(c=b[d]);d++)this.createPropertyAccessor(c,!0);var b=a._publishNames;if(b&&b.length)for(var c,d=0,e=b.length;e>d&&(c=b[d]);d++)a.computed&&a.computed[c]||this.createPropertyAccessor(c)},propertyNameBlacklist:{children:1,"class":1,id:1,hidden:1,style:1,title:1}};a.api.declaration.properties=c}(Polymer),function(a){var b="attributes",c=/\s|,/,d={inheritAttributesObjects:function(a){this.inheritObject(a,"publishLC"),this.inheritObject(a,"_instanceAttributes")},publishAttributes:function(a){var d=this.getAttribute(b);if(d)for(var e,f=a.publish||(a.publish={}),g=d.split(c),h=0,i=g.length;i>h;h++)e=g[h].trim(),e&&void 0===f[e]&&(f[e]=void 0)},accumulateInstanceAttributes:function(){for(var a,b=this.prototype._instanceAttributes,c=this.attributes,d=0,e=c.length;e>d&&(a=c[d]);d++)this.isInstanceAttribute(a.name)&&(b[a.name]=a.value)},isInstanceAttribute:function(a){return!this.blackList[a]&&"on-"!==a.slice(0,3)},blackList:{name:1,"extends":1,constructor:1,noscript:1,assetpath:1,"cache-csstext":1}};d.blackList[b]=1,a.api.declaration.attributes=d}(Polymer),function(a){var b=a.api.declaration.events,c=new PolymerExpressions,d=c.prepareBinding;c.prepareBinding=function(a,e,f){return b.prepareEventBinding(a,e,f)||d.call(c,a,e,f)};var e={syntax:c,fetchTemplate:function(){return this.querySelector("template")},templateContent:function(){var a=this.fetchTemplate();return a&&a.content},installBindingDelegate:function(a){a&&(a.bindingDelegate=this.syntax)}};a.api.declaration.mdv=e}(Polymer),function(a){function b(a){if(!Object.__proto__){var b=Object.getPrototypeOf(a);a.__proto__=b,d(b)&&(b.__proto__=Object.getPrototypeOf(b))}}var c=a.api,d=a.isBase,e=a.extend,f=window.ShadowDOMPolyfill,g={register:function(a,b){this.buildPrototype(a,b),this.registerPrototype(a,b),this.publishConstructor()},buildPrototype:function(b,c){var d=a.getRegisteredPrototype(b),e=this.generateBasePrototype(c);this.desugarBeforeChaining(d,e),this.prototype=this.chainPrototypes(d,e),this.desugarAfterChaining(b,c)},desugarBeforeChaining:function(a,b){a.element=this,this.publishAttributes(a,b),this.publishProperties(a,b),this.inferObservers(a),this.explodeObservers(a)},chainPrototypes:function(a,c){this.inheritMetaData(a,c);var d=this.chainObject(a,c);return b(d),d},inheritMetaData:function(a,b){this.inheritObject("observe",a,b),this.inheritObject("publish",a,b),this.inheritObject("reflect",a,b),this.inheritObject("_publishLC",a,b),this.inheritObject("_instanceAttributes",a,b),this.inheritObject("eventDelegates",a,b)},desugarAfterChaining:function(a,b){this.optimizePropertyMaps(this.prototype),this.createPropertyAccessors(this.prototype),this.installBindingDelegate(this.fetchTemplate()),this.installSheets(),this.resolveElementPaths(this),this.accumulateInstanceAttributes(),this.parseHostEvents(),this.addResolvePathApi(),f&&WebComponents.ShadowCSS.shimStyling(this.templateContent(),a,b),this.prototype.registerCallback&&this.prototype.registerCallback(this)},publishConstructor:function(){var a=this.getAttribute("constructor");a&&(window[a]=this.ctor)},generateBasePrototype:function(a){var b=this.findBasePrototype(a);if(!b){var b=HTMLElement.getPrototypeForTag(a);b=this.ensureBaseApi(b),h[a]=b}return b},findBasePrototype:function(a){return h[a]},ensureBaseApi:function(a){if(a.PolymerBase)return a;var b=Object.create(a);return c.publish(c.instance,b),this.mixinMethod(b,a,c.instance.mdv,"bind"),b},mixinMethod:function(a,b,c,d){var e=function(a){return b[d].apply(this,a)};a[d]=function(){return this.mixinSuper=e,c[d].apply(this,arguments)}},inheritObject:function(a,b,c){var d=b[a]||{};b[a]=this.chainObject(d,c[a])},registerPrototype:function(a,b){var c={prototype:this.prototype},d=this.findTypeExtension(b);d&&(c["extends"]=d),HTMLElement.register(a,this.prototype),this.ctor=document.registerElement(a,c)},findTypeExtension:function(a){if(a&&a.indexOf("-")<0)return a;var b=this.findBasePrototype(a);return b.element?this.findTypeExtension(b.element["extends"]):void 0}},h={};g.chainObject=Object.__proto__?function(a,b){return a&&b&&a!==b&&(a.__proto__=b),a}:function(a,b){if(a&&b&&a!==b){var c=Object.create(b);a=e(c,a)}return a},c.declaration.prototype=g}(Polymer),function(a){function b(a){return document.contains(a)?j:i}function c(){return i.length?i[0]:j[0]}function d(a){f.waitToReady=!0,Polymer.endOfMicrotask(function(){HTMLImports.whenReady(function(){f.addReadyCallback(a),f.waitToReady=!1,f.check()})})}function e(a){if(void 0===a)return void f.ready();var b=setTimeout(function(){f.ready()},a);Polymer.whenReady(function(){clearTimeout(b)})}var f={wait:function(a){a.__queue||(a.__queue={},g.push(a))},enqueue:function(a,c,d){var e=a.__queue&&!a.__queue.check;return e&&(b(a).push(a),a.__queue.check=c,a.__queue.go=d),0!==this.indexOf(a)},indexOf:function(a){var c=b(a).indexOf(a);return c>=0&&document.contains(a)&&(c+=HTMLImports.useNative||HTMLImports.ready?i.length:1e9),c},go:function(a){var b=this.remove(a);b&&(a.__queue.flushable=!0,this.addToFlushQueue(b),this.check())},remove:function(a){var c=this.indexOf(a);if(0===c)return b(a).shift()},check:function(){var a=this.nextElement();return a&&a.__queue.check.call(a),this.canReady()?(this.ready(),!0):void 0},nextElement:function(){return c()},canReady:function(){return!this.waitToReady&&this.isEmpty()},isEmpty:function(){for(var a,b=0,c=g.length;c>b&&(a=g[b]);b++)if(a.__queue&&!a.__queue.flushable)return;return!0},addToFlushQueue:function(a){h.push(a)},flush:function(){if(!this.flushing){this.flushing=!0;for(var a;h.length;)a=h.shift(),a.__queue.go.call(a),a.__queue=null;this.flushing=!1}},ready:function(){var a=CustomElements.ready;CustomElements.ready=!1,this.flush(),CustomElements.useNative||CustomElements.upgradeDocumentTree(document),CustomElements.ready=a,Polymer.flush(),requestAnimationFrame(this.flushReadyCallbacks)},addReadyCallback:function(a){a&&k.push(a)},flushReadyCallbacks:function(){if(k)for(var a;k.length;)(a=k.shift())()},waitingFor:function(){for(var a,b=[],c=0,d=g.length;d>c&&(a=g[c]);c++)a.__queue&&!a.__queue.flushable&&b.push(a);return b},waitToReady:!0},g=[],h=[],i=[],j=[],k=[];a.elements=g,a.waitingFor=f.waitingFor.bind(f),a.forceReady=e,a.queue=f,a.whenReady=a.whenPolymerReady=d}(Polymer),function(a){function b(a){return Boolean(HTMLElement.getPrototypeForTag(a))}function c(a){return a&&a.indexOf("-")>=0}var d=a.extend,e=a.api,f=a.queue,g=a.whenReady,h=a.getRegisteredPrototype,i=a.waitingForPrototype,j=d(Object.create(HTMLElement.prototype),{createdCallback:function(){this.getAttribute("name")&&this.init()},init:function(){this.name=this.getAttribute("name"),this["extends"]=this.getAttribute("extends"),f.wait(this),this.loadResources(),this.registerWhenReady()},registerWhenReady:function(){this.registered||this.waitingForPrototype(this.name)||this.waitingForQueue()||this.waitingForResources()||f.go(this)},_register:function(){c(this["extends"])&&!b(this["extends"])&&console.warn("%s is attempting to extend %s, an unregistered element or one that was not registered with Polymer.",this.name,this["extends"]),this.register(this.name,this["extends"]),this.registered=!0},waitingForPrototype:function(a){return h(a)?void 0:(i(a,this),this.handleNoScript(a),!0)},handleNoScript:function(a){this.hasAttribute("noscript")&&!this.noscript&&(this.noscript=!0,Polymer(a))},waitingForResources:function(){return this._needsResources},waitingForQueue:function(){return f.enqueue(this,this.registerWhenReady,this._register)},loadResources:function(){this._needsResources=!0,this.loadStyles(function(){this._needsResources=!1,this.registerWhenReady()}.bind(this))}});e.publish(e.declaration,j),g(function(){document.body.removeAttribute("unresolved"),document.dispatchEvent(new CustomEvent("polymer-ready",{bubbles:!0}))}),document.registerElement("polymer-element",{prototype:j})}(Polymer),function(a){function b(a,b){a?(document.head.appendChild(a),d(b)):b&&b()}function c(a,c){if(a&&a.length){for(var d,e,f=document.createDocumentFragment(),g=0,h=a.length;h>g&&(d=a[g]);g++)e=document.createElement("link"),e.rel="import",e.href=d,f.appendChild(e);b(f,c)}else c&&c()}var d=a.whenReady;a["import"]=c,a.importElements=b}(Polymer),function(){var a=document.createElement("polymer-element");a.setAttribute("name","auto-binding"),a.setAttribute("extends","template"),a.init(),Polymer("auto-binding",{createdCallback:function(){this.syntax=this.bindingDelegate=this.makeSyntax(),Polymer.whenPolymerReady(function(){this.model=this,this.setAttribute("bind",""),this.async(function(){this.marshalNodeReferences(this.parentNode),this.fire("template-bound")})}.bind(this))},makeSyntax:function(){var a=Object.create(Polymer.api.declaration.events),b=this;a.findController=function(){return b.model};var c=new PolymerExpressions,d=c.prepareBinding;return c.prepareBinding=function(b,e,f){return a.prepareEventBinding(b,e,f)||d.call(c,b,e,f)},c}})}();;
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Reusable constructor function for prototype setting.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.7.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 0; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherts from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = optimizeCb(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
      for (i = 0; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    if (obj == null) return [];
    iteratee = cb(iteratee, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length),
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = optimizeCb(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index = 0, currentKey;
    if (arguments.length < 3) {
      memo = obj[keys ? keys[index++] : index++];
    }
    for (; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = optimizeCb(iteratee, context, 4);
    var keys = obj.length !== + obj.length && _.keys(obj),
        index = (keys || obj).length,
        currentKey;
    if (arguments.length < 3) {
      memo = obj[keys ? keys[--index] : --index];
    }
    while (index-- > 0) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (obj.length === +obj.length) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    if (obj == null) return true;
    predicate = cb(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    if (obj == null) return false;
    predicate = cb(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, target, fromIndex) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = _.values(obj);
    return _.indexOf(obj, target, typeof fromIndex == 'number' && fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0, value;
    for (var i = startIndex || 0, length = input && input.length; i < length; i++) {
      value = input[i];
      if (value && value.length >= 0 && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function(array) {
    if (array == null) return [];
    var length = _.max(arguments, 'length').length;
    var results = Array(length);
    while (length-- > 0) {
      results[length] = _.pluck(arguments, length);
    }
    return results;
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    return _.zip.apply(null, array);
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    var i = 0, length = array && array.length;
    if (typeof isSorted == 'number') {
      i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
    } else if (isSorted && length) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    var idx = array ? array.length : 0;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = array != null ? array.length : 0;
    for (var i = 0; i < length; i++) {
      if (predicate(array[i], i, array)) return i;
    }
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    return function bound() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function bound() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var proto = typeof obj.constructor === 'function' ? FuncProto : ObjProto;

    while (nonEnumIdx--) {
      var prop = nonEnumerableProps[nonEnumIdx];
      if (prop === 'constructor' ? _.has(obj, prop) : prop in obj &&
        obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.keysIn = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.keysIn);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iteratee, context) {
    var result = {}, key;
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      iteratee = optimizeCb(iteratee, context);
      for (key in obj) {
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
    } else {
      var keys = flatten(arguments, false, false, 1);
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.assign(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around an IE 11 bug (#1621).
  // Work around a Safari 8 bug (#1929)
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Generates a function for a given object that returns a given property (including those of ancestors)
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    var pairs = _.pairs(attrs), length = pairs.length;
    return function(obj) {
      if (obj == null) return !length;
      obj = new Object(obj);
      for (var i = 0; i < length; i++) {
        var pair = pairs[i], key = pair[0];
        if (pair[1] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));
;
//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = '2.8.4',
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for locale config files
        locales = {},

        // extra moment internal properties (plugins register props here)
        momentProperties = [],

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-15', '30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
            s: 45,  // seconds to minute
            m: 45,  // minutes to hour
            h: 22,  // hours to day
            d: 26,  // days to month
            M: 11   // months to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.localeData().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.localeData().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            x    : function () {
                return this.valueOf();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        deprecations = {},

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error('Implement me');
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (firstTime) {
                printMsg(msg);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Locale() {
    }

    // Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = moment.localeData();

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment._locale[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
                    (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
                                           m._a[SECOND] !== 0 ||
                                           m._a[MILLISECOND] !== 0)) ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0 &&
                    m._pf.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (moment.isMoment(input) || isDate(input) ?
                    +input : +moment(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            moment.updateOffset(res, false);
            return res;
        } else {
            return moment(input).local();
        }
    }

    /************************************
        Locale
    ************************************/


    extend(Locale.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _ordinalParseLenient.
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
        },

        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName, format, strict) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = moment.utc([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                    return i;
                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                    return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LTS : 'h:mm:ss A',
            LT : 'h:mm A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom, now) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom, [now]) : output;
        },

        _relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },

        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },

        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal : '%d',
        _ordinalParse : /\d{1,2}/,

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
            /* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
            /* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'x':
            return parseTokenOffsetMs;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(
                            input.match(/\d{1,2}/)[0], 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = config._locale.isPM(input);
            break;
        // HOUR
        case 'h' : // fall through to hh
        case 'hh' :
            config._pf.bigHour = true;
            /* falls through */
        case 'H' : // fall through to HH
        case 'HH' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX OFFSET (MILLISECONDS)
        case 'x':
            config._d = new Date(toInt(input));
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual zone can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day || normalizedInput.date,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
            config._pf.bigHour = undefined;
        }
        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }
        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            dateFromConfig(config);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),

            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] || ['yy', years];

        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f,
            res;

        config._locale = config._locale || moment.localeData(config._l);

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        res = new Moment(config);
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    moment = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };

    moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        function (key, value) {
            return moment.locale(key, value);
        }
    );

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    moment.locale = function (key, values) {
        var data;
        if (key) {
            if (typeof(values) !== 'undefined') {
                data = moment.defineLocale(key, values);
            }
            else {
                data = moment.localeData(key);
            }

            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }

        return moment._locale._abbr;
    };

    moment.defineLocale = function (name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);

            // backwards compat for now: also set the locale
            moment.locale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    };

    moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        function (key) {
            return moment.localeData(key);
        }
    );

    // returns locale data
    moment.localeData = function (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return moment._locale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                if ('function' === typeof Date.prototype.toISOString) {
                    // native implementation is ~50x faster, use it when we can
                    return this.toDate().toISOString();
                } else {
                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
                }
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function (keepLocalTime) {
            return this.zone(0, keepLocalTime);
        },

        local : function (keepLocalTime) {
            if (this._isUTC) {
                this.zone(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.add(this._dateTzOffset(), 'm');
                }
            }
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },

        add : createAdder(1, 'add'),

        subtract : createAdder(-1, 'subtract'),

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output, daysAdjust;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                daysAdjust = (this - moment(this).startOf('month')) -
                    (that - moment(that).startOf('month'));
                // same as above but with zones, to negate all dst
                daysAdjust -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4;
                output += daysAdjust / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this, moment(now)));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf : function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            if (units === undefined || units === 'millisecond') {
                return this;
            }
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },

        isAfter: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return inputMs < +this.clone().startOf(units);
            }
        },

        isBefore: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return +this.clone().endOf(units) < inputMs;
            }
        },

        isSame: function (input, units) {
            var inputMs;
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input;
            } else {
                inputMs = +moment(input);
                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
            }
        },

        min: deprecate(
                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[zone(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist int zone
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateTzOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.subtract(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._dateTzOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? 'UTC' : '';
        },

        zoneName : function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        week : function (input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        locale : function (key) {
            var newLocaleData;

            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        },

        lang : deprecate(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(key);
                }
            }
        ),

        localeData : function () {
            return this._locale;
        },

        _dateTzOffset : function () {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return Math.round(this._d.getTimezoneOffset() / 15) * 15;
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays (years) {
        // years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);

            // Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));

            // 30 days to a month
            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;

            // 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;
        },

        abs : function () {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);

            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);

            return this;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());

            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }

            return this.localeData().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            var days, months;
            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
                days = this._days + this._milliseconds / 864e5;
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(yearsToDays(this._months / 12));
                switch (units) {
                    case 'week': return days / 7 + this._milliseconds / 6048e5;
                    case 'day': return days + this._milliseconds / 864e5;
                    case 'hour': return days * 24 + this._milliseconds / 36e5;
                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                    default: throw new Error('Unknown unit ' + units);
                }
            }
        },

        lang : moment.fn.lang,
        locale : moment.fn.locale,

        toIsoString : deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',
            function () {
                return this.toISOString();
            }
        ),

        toISOString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },

        localeData : function () {
            return this._locale;
        }
    });

    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }

    moment.duration.fn.asMilliseconds = function () {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function () {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function () {
        return this.as('m');
    };
    moment.duration.fn.asHours = function () {
        return this.as('h');
    };
    moment.duration.fn.asDays = function () {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function () {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function () {
        return this.as('M');
    };
    moment.duration.fn.asYears = function () {
        return this.as('y');
    };

    /************************************
        Default Locale
    ************************************/


    // Set default locale, other locale will inherit from English.
    moment.locale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LOCALES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated, and will be removed in an upcoming ' +
                    'release.',
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
        define('moment', function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);
;
//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = '2.8.4',
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for locale config files
        locales = {},

        // extra moment internal properties (plugins register props here)
        momentProperties = [],

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-15', '30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
            s: 45,  // seconds to minute
            m: 45,  // minutes to hour
            h: 22,  // hours to day
            d: 26,  // days to month
            M: 11   // months to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.localeData().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.localeData().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            x    : function () {
                return this.valueOf();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        deprecations = {},

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error('Implement me');
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (firstTime) {
                printMsg(msg);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Locale() {
    }

    // Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = moment.localeData();

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment._locale[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
                    (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
                                           m._a[SECOND] !== 0 ||
                                           m._a[MILLISECOND] !== 0)) ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0 &&
                    m._pf.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (moment.isMoment(input) || isDate(input) ?
                    +input : +moment(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            moment.updateOffset(res, false);
            return res;
        } else {
            return moment(input).local();
        }
    }

    /************************************
        Locale
    ************************************/


    extend(Locale.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _ordinalParseLenient.
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
        },

        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName, format, strict) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = moment.utc([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                    return i;
                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                    return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LTS : 'h:mm:ss A',
            LT : 'h:mm A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom, now) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom, [now]) : output;
        },

        _relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },

        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },

        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal : '%d',
        _ordinalParse : /\d{1,2}/,

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
            /* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
            /* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'x':
            return parseTokenOffsetMs;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(
                            input.match(/\d{1,2}/)[0], 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = config._locale.isPM(input);
            break;
        // HOUR
        case 'h' : // fall through to hh
        case 'hh' :
            config._pf.bigHour = true;
            /* falls through */
        case 'H' : // fall through to HH
        case 'HH' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX OFFSET (MILLISECONDS)
        case 'x':
            config._d = new Date(toInt(input));
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual zone can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day || normalizedInput.date,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
            config._pf.bigHour = undefined;
        }
        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }
        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            dateFromConfig(config);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),

            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] || ['yy', years];

        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f,
            res;

        config._locale = config._locale || moment.localeData(config._l);

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        res = new Moment(config);
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    moment = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };

    moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        function (key, value) {
            return moment.locale(key, value);
        }
    );

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    moment.locale = function (key, values) {
        var data;
        if (key) {
            if (typeof(values) !== 'undefined') {
                data = moment.defineLocale(key, values);
            }
            else {
                data = moment.localeData(key);
            }

            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }

        return moment._locale._abbr;
    };

    moment.defineLocale = function (name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);

            // backwards compat for now: also set the locale
            moment.locale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    };

    moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        function (key) {
            return moment.localeData(key);
        }
    );

    // returns locale data
    moment.localeData = function (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return moment._locale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                if ('function' === typeof Date.prototype.toISOString) {
                    // native implementation is ~50x faster, use it when we can
                    return this.toDate().toISOString();
                } else {
                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
                }
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function (keepLocalTime) {
            return this.zone(0, keepLocalTime);
        },

        local : function (keepLocalTime) {
            if (this._isUTC) {
                this.zone(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.add(this._dateTzOffset(), 'm');
                }
            }
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },

        add : createAdder(1, 'add'),

        subtract : createAdder(-1, 'subtract'),

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output, daysAdjust;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                daysAdjust = (this - moment(this).startOf('month')) -
                    (that - moment(that).startOf('month'));
                // same as above but with zones, to negate all dst
                daysAdjust -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4;
                output += daysAdjust / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this, moment(now)));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf : function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            if (units === undefined || units === 'millisecond') {
                return this;
            }
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },

        isAfter: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return inputMs < +this.clone().startOf(units);
            }
        },

        isBefore: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return +this.clone().endOf(units) < inputMs;
            }
        },

        isSame: function (input, units) {
            var inputMs;
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input;
            } else {
                inputMs = +moment(input);
                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
            }
        },

        min: deprecate(
                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[zone(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist int zone
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateTzOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.subtract(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._dateTzOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? 'UTC' : '';
        },

        zoneName : function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        week : function (input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        locale : function (key) {
            var newLocaleData;

            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        },

        lang : deprecate(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(key);
                }
            }
        ),

        localeData : function () {
            return this._locale;
        },

        _dateTzOffset : function () {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return Math.round(this._d.getTimezoneOffset() / 15) * 15;
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays (years) {
        // years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);

            // Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));

            // 30 days to a month
            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;

            // 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;
        },

        abs : function () {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);

            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);

            return this;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());

            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }

            return this.localeData().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            var days, months;
            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
                days = this._days + this._milliseconds / 864e5;
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(yearsToDays(this._months / 12));
                switch (units) {
                    case 'week': return days / 7 + this._milliseconds / 6048e5;
                    case 'day': return days + this._milliseconds / 864e5;
                    case 'hour': return days * 24 + this._milliseconds / 36e5;
                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                    default: throw new Error('Unknown unit ' + units);
                }
            }
        },

        lang : moment.fn.lang,
        locale : moment.fn.locale,

        toIsoString : deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',
            function () {
                return this.toISOString();
            }
        ),

        toISOString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },

        localeData : function () {
            return this._locale;
        }
    });

    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }

    moment.duration.fn.asMilliseconds = function () {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function () {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function () {
        return this.as('m');
    };
    moment.duration.fn.asHours = function () {
        return this.as('h');
    };
    moment.duration.fn.asDays = function () {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function () {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function () {
        return this.as('M');
    };
    moment.duration.fn.asYears = function () {
        return this.as('y');
    };

    /************************************
        Default Locale
    ************************************/


    // Set default locale, other locale will inherit from English.
    moment.locale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LOCALES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated, and will be removed in an upcoming ' +
                    'release.',
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
        define('moment', function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);
;
/**
 * Round a number by a specific precision or method
 * @param  {string} val
 */
PolymerExpressions.prototype.money = function (val) {
	return val ? parseFloat(val).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : "0"; 
};;
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Reusable constructor function for prototype setting.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.7.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 0; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherts from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = optimizeCb(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
      for (i = 0; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    if (obj == null) return [];
    iteratee = cb(iteratee, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length),
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = optimizeCb(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index = 0, currentKey;
    if (arguments.length < 3) {
      memo = obj[keys ? keys[index++] : index++];
    }
    for (; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = optimizeCb(iteratee, context, 4);
    var keys = obj.length !== + obj.length && _.keys(obj),
        index = (keys || obj).length,
        currentKey;
    if (arguments.length < 3) {
      memo = obj[keys ? keys[--index] : --index];
    }
    while (index-- > 0) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (obj.length === +obj.length) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    if (obj == null) return true;
    predicate = cb(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    if (obj == null) return false;
    predicate = cb(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, target, fromIndex) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = _.values(obj);
    return _.indexOf(obj, target, typeof fromIndex == 'number' && fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0, value;
    for (var i = startIndex || 0, length = input && input.length; i < length; i++) {
      value = input[i];
      if (value && value.length >= 0 && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function(array) {
    if (array == null) return [];
    var length = _.max(arguments, 'length').length;
    var results = Array(length);
    while (length-- > 0) {
      results[length] = _.pluck(arguments, length);
    }
    return results;
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    return _.zip.apply(null, array);
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    var i = 0, length = array && array.length;
    if (typeof isSorted == 'number') {
      i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
    } else if (isSorted && length) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    var idx = array ? array.length : 0;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = array != null ? array.length : 0;
    for (var i = 0; i < length; i++) {
      if (predicate(array[i], i, array)) return i;
    }
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    return function bound() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function bound() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var proto = typeof obj.constructor === 'function' ? FuncProto : ObjProto;

    while (nonEnumIdx--) {
      var prop = nonEnumerableProps[nonEnumIdx];
      if (prop === 'constructor' ? _.has(obj, prop) : prop in obj &&
        obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.keysIn = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.keysIn);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iteratee, context) {
    var result = {}, key;
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      iteratee = optimizeCb(iteratee, context);
      for (key in obj) {
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
    } else {
      var keys = flatten(arguments, false, false, 1);
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.assign(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around an IE 11 bug (#1621).
  // Work around a Safari 8 bug (#1929)
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Generates a function for a given object that returns a given property (including those of ancestors)
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    var pairs = _.pairs(attrs), length = pairs.length;
    return function(obj) {
      if (obj == null) return !length;
      obj = new Object(obj);
      for (var i = 0; i < length; i++) {
        var pair = pairs[i], key = pair[0];
        if (pair[1] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));
;


    Polymer('core-xhr', {

      /**
       * Sends a HTTP request to the server and returns the XHR object.
       *
       * @method request
       * @param {Object} inOptions
       *    @param {String} inOptions.url The url to which the request is sent.
       *    @param {String} inOptions.method The HTTP method to use, default is GET.
       *    @param {boolean} inOptions.sync By default, all requests are sent asynchronously. To send synchronous requests, set to true.
       *    @param {Object} inOptions.params Data to be sent to the server.
       *    @param {Object} inOptions.body The content for the request body for POST method.
       *    @param {Object} inOptions.headers HTTP request headers.
       *    @param {String} inOptions.responseType The response type. Default is 'text'.
       *    @param {boolean} inOptions.withCredentials Whether or not to send credentials on the request. Default is false.
       *    @param {Object} inOptions.callback Called when request is completed.
       * @returns {Object} XHR object.
       */
      request: function(options) {
        var xhr = new XMLHttpRequest();
        var url = options.url;
        var method = options.method || 'GET';
        var async = !options.sync;
        //
        var params = this.toQueryString(options.params);
        if (params && method == 'GET') {
          url += (url.indexOf('?') > 0 ? '&' : '?') + params;
        }
        var xhrParams = this.isBodyMethod(method) ? (options.body || params) : null;
        //
        xhr.open(method, url, async);
        if (options.responseType) {
          xhr.responseType = options.responseType;
        }
        if (options.withCredentials) {
          xhr.withCredentials = true;
        }
        this.makeReadyStateHandler(xhr, options.callback);
        this.setRequestHeaders(xhr, options.headers);
        xhr.send(xhrParams);
        if (!async) {
          xhr.onreadystatechange(xhr);
        }
        return xhr;
      },
    
      toQueryString: function(params) {
        var r = [];
        for (var n in params) {
          var v = params[n];
          n = encodeURIComponent(n);
          r.push(v == null ? n : (n + '=' + encodeURIComponent(v)));
        }
        return r.join('&');
      },

      isBodyMethod: function(method) {
        return this.bodyMethods[(method || '').toUpperCase()];
      },
      
      bodyMethods: {
        POST: 1,
        PUT: 1,
        PATCH: 1,
        DELETE: 1
      },

      makeReadyStateHandler: function(xhr, callback) {
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            callback && callback.call(null, xhr.response, xhr);
          }
        };
      },

      setRequestHeaders: function(xhr, headers) {
        if (headers) {
          for (var name in headers) {
            xhr.setRequestHeader(name, headers[name]);
          }
        }
      }

    });

  ;


  Polymer('core-ajax', {
    /**
     * Fired when a response is received.
     *
     * @event core-response
     */

    /**
     * Fired when an error is received.
     *
     * @event core-error
     */

    /**
     * Fired whenever a response or an error is received.
     *
     * @event core-complete
     */

    /**
     * The URL target of the request.
     *
     * @attribute url
     * @type string
     * @default ''
     */
    url: '',

    /**
     * Specifies what data to store in the `response` property, and
     * to deliver as `event.response` in `response` events.
     *
     * One of:
     *
     *    `text`: uses `XHR.responseText`.
     *
     *    `xml`: uses `XHR.responseXML`.
     *
     *    `json`: uses `XHR.responseText` parsed as JSON.
     *
     *    `arraybuffer`: uses `XHR.response`.
     *
     *    `blob`: uses `XHR.response`.
     *
     *    `document`: uses `XHR.response`.
     *
     * @attribute handleAs
     * @type string
     * @default 'text'
     */
    handleAs: '',

    /**
     * If true, automatically performs an Ajax request when either `url` or `params` changes.
     *
     * @attribute auto
     * @type boolean
     * @default false
     */
    auto: false,

    /**
     * Parameters to send to the specified URL, as JSON.
     *
     * @attribute params
     * @type string (JSON)
     * @default ''
     */
    params: '',

    /**
     * The response for the current request, or null if it hasn't
     * completed yet or the request resulted in error.
     *
     * @attribute response
     * @type Object
     * @default null
     */
    response: null,

    /**
     * The error for the current request, or null if it hasn't
     * completed yet or the request resulted in success.
     *
     * @attribute error
     * @type Object
     * @default null
     */
    error: null,

    /**
     * Whether the current request is currently loading.
     *
     * @attribute loading
     * @type boolean
     * @default false
     */
    loading: false,

    /**
     * The progress of the current request.
     *
     * @attribute progress
     * @type {loaded: number, total: number, lengthComputable: boolean}
     * @default {}
     */
    progress: null,

    /**
     * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
     * Default is 'GET'.
     *
     * @attribute method
     * @type string
     * @default ''
     */
    method: '',

    /**
     * HTTP request headers to send.
     *
     * Example:
     *
     *     <core-ajax
     *         auto
     *         url="http://somesite.com"
     *         headers='{"X-Requested-With": "XMLHttpRequest"}'
     *         handleAs="json"
     *         on-core-response="{{handleResponse}}"></core-ajax>
     *
     * @attribute headers
     * @type Object
     * @default null
     */
    headers: null,

    /**
     * Optional raw body content to send when method === "POST".
     *
     * Example:
     *
     *     <core-ajax method="POST" auto url="http://somesite.com"
     *         body='{"foo":1, "bar":2}'>
     *     </core-ajax>
     *
     * @attribute body
     * @type Object
     * @default null
     */
    body: null,

    /**
     * Content type to use when sending data.
     *
     * @attribute contentType
     * @type string
     * @default 'application/x-www-form-urlencoded'
     */
    contentType: 'application/x-www-form-urlencoded',

    /**
     * Set the withCredentials flag on the request.
     *
     * @attribute withCredentials
     * @type boolean
     * @default false
     */
    withCredentials: false,

    /**
     * Additional properties to send to core-xhr.
     *
     * Can be set to an object containing default properties
     * to send as arguments to the `core-xhr.request()` method
     * which implements the low-level communication.
     *
     * @property xhrArgs
     * @type Object
     * @default null
     */
    xhrArgs: null,

    created: function() {
      this.progress = {};
    },

    ready: function() {
      this.xhr = document.createElement('core-xhr');
    },

    receive: function(response, xhr) {
      if (this.isSuccess(xhr)) {
        this.processResponse(xhr);
      } else {
        this.processError(xhr);
      }
      this.complete(xhr);
    },

    isSuccess: function(xhr) {
      var status = xhr.status || 0;
      return !status || (status >= 200 && status < 300);
    },

    processResponse: function(xhr) {
      var response = this.evalResponse(xhr);
      if (xhr === this.activeRequest) {
        this.response = response;
      }
      this.fire('core-response', {response: response, xhr: xhr});
    },

    processError: function(xhr) {
      var response = xhr.status + ': ' + xhr.responseText;
      if (xhr === this.activeRequest) {
        this.error = response;
      }
      this.fire('core-error', {response: response, xhr: xhr});
    },

    processProgress: function(progress, xhr) {
      if (xhr !== this.activeRequest) {
        return;
      }
      // We create a proxy object here because these fields
      // on the progress event are readonly properties, which
      // causes problems in common use cases (e.g. binding to
      // <paper-progress> attributes).
      var progressProxy = {
        lengthComputable: progress.lengthComputable,
        loaded: progress.loaded,
        total: progress.total
      }
      this.progress = progressProxy;
    },

    complete: function(xhr) {
      if (xhr === this.activeRequest) {
        this.loading = false;
      }
      this.fire('core-complete', {response: xhr.status, xhr: xhr});
    },

    evalResponse: function(xhr) {
      return this[(this.handleAs || 'text') + 'Handler'](xhr);
    },

    xmlHandler: function(xhr) {
      return xhr.responseXML;
    },

    textHandler: function(xhr) {
      return xhr.responseText;
    },

    jsonHandler: function(xhr) {
      var r = xhr.responseText;
      try {
        return JSON.parse(r);
      } catch (x) {
        console.warn('core-ajax caught an exception trying to parse response as JSON:');
        console.warn('url:', this.url);
        console.warn(x);
        return r;
      }
    },

    documentHandler: function(xhr) {
      return xhr.response;
    },

    blobHandler: function(xhr) {
      return xhr.response;
    },

    arraybufferHandler: function(xhr) {
      return xhr.response;
    },

    urlChanged: function() {
      if (!this.handleAs) {
        var ext = String(this.url).split('.').pop();
        switch (ext) {
          case 'json':
            this.handleAs = 'json';
            break;
        }
      }
      this.autoGo();
    },

    paramsChanged: function() {
      this.autoGo();
    },

    bodyChanged: function() {
      this.autoGo();
    },

    autoChanged: function() {
      this.autoGo();
    },

    // TODO(sorvell): multiple side-effects could call autoGo
    // during one micro-task, use a job to have only one action
    // occur
    autoGo: function() {
      if (this.auto) {
        this.goJob = this.job(this.goJob, this.go, 0);
      }
    },

    /**
     * Performs an Ajax request to the specified URL.
     *
     * @method go
     */
    go: function() {
      var args = this.xhrArgs || {};
      // TODO(sjmiles): we may want XHR to default to POST if body is set
      args.body = this.body || args.body;
      args.params = this.params || args.params;
      if (args.params && typeof(args.params) == 'string') {
        args.params = JSON.parse(args.params);
      }
      args.headers = this.headers || args.headers || {};
      if (args.headers && typeof(args.headers) == 'string') {
        args.headers = JSON.parse(args.headers);
      }
      var hasContentType = Object.keys(args.headers).some(function (header) {
        return header.toLowerCase() === 'content-type';
      });
      // No Content-Type should be specified if sending `FormData`.  
      // The UA must set the Content-Type w/ a calculated  multipart boundary ID.
      if (args.body instanceof FormData) {
        delete args.headers['Content-Type'];
      } 
      else if (!hasContentType && this.contentType) {
        args.headers['Content-Type'] = this.contentType;
      }
      if (this.handleAs === 'arraybuffer' || this.handleAs === 'blob' ||
          this.handleAs === 'document') {
        args.responseType = this.handleAs;
      }
      args.withCredentials = this.withCredentials;
      args.callback = this.receive.bind(this);
      args.url = this.url;
      args.method = this.method;

      this.response = this.error = this.progress = null;
      this.activeRequest = args.url && this.xhr.request(args);
      if (this.activeRequest) {
        this.loading = true;
        var activeRequest = this.activeRequest;
        // IE < 10 doesn't support progress events.
        if ('onprogress' in activeRequest) {
          this.activeRequest.addEventListener(
              'progress',
              function(progress) {
                this.processProgress(progress, activeRequest);
              }.bind(this), false);
        } else {
          this.progress = {
            lengthComputable: false,
          }
        }
      }
      return this.activeRequest;
    }

  });

;

(function(){
  
  Polymer('core-signals',{
    attached: function() {
      signals.push(this);
    },
    removed: function() {
      var i = signals.indexOf(this);
      if (i >= 0) {
        signals.splice(i, 1);
      }
    }
  });

  // private shared database
  var signals = [];

  // signal dispatcher
  function notify(name, data) {
    // convert generic-signal event to named-signal event
    var signal = new CustomEvent('core-signal-' + name, {
      // if signals bubble, it's easy to get confusing duplicates
      // (1) listen on a container on behalf of local child
      // (2) some deep child ignores the event and it bubbles 
      //     up to said container
      // (3) local child event bubbles up to container
      // also, for performance, we avoid signals flying up the
      // tree from all over the place
      bubbles: false,
      detail: data
    });
    // dispatch named-signal to all 'signals' instances,
    // only interested listeners will react
    signals.forEach(function(s) {
      s.dispatchEvent(signal);
    });
  }

  // signal listener at document
  document.addEventListener('core-signal', function(e) {
    notify(e.detail.name, e.detail.data);
  });
  
})();
;

    Polymer('ing-session', {            
        token: 'token',
        ready: function () {
            this.fire('core-signal',{'name' : 'ing-token', data: this.token});
        }
    });
;

  Polymer('ing-repo-accounts-au', {
   token: '',
   computed: { 
    isReady: 'productsReady && eligibleAccountsReady'
   },
   isReadyChanged: function() { 
    if (this.isReady) { 
      this.fire('core-signal', {'name' : 'ing-ready'});
    }
   }, 
   created: function() {
     this.products = [];
     this.accounts = [];
     this.eligibleAccounts = []; 
     this.transactions = []; 
     this.transactionHistory = []; 
     this.productsReady = false; 
     this.eligibleAccountsReady = false;  
   },
   ready: function () {
     var ingSession = document.querySelector('ing-session');
     this.token = ingSession.token;
     this._getData(); 
   },
   handleTokenRefresh: function(e, detail, sender) {
    this.token = detail;
    this._getData(); 
  },
  _setHeaders: function  () {
    /*this.$.getPortfolioSummary.headers = {"X-AuthToken": this.token};
    this.$.getEligibleAccounts.headers = {"X-AuthToken": this.token};
    this.$.getTimelineTransaction.headers = {"X-AuthToken": this.token};
    this.$.getTimelineTransactionHistory.headers = {"X-AuthToken": this.token};
    this.$.getTimelineFilteredTransactionHistory.headers = {"X-AuthToken": this.token};*/
  },
  _getData: function() {
    if (this.token) { 
      this._setHeaders();   
      this.$.getPortfolioSummary.go();
      this.$.getEligibleAccounts.go();
    } else { 
      console.log('ing-repo-accounts: token is not ready yet.');
    }
  },

  getPortfolioSummary: function() {
   this.$.getPortfolioSummary.go();
 },

 getEligibleAccounts: function() {
  this.$.getEligibleAccounts.go();
},

handleGetPortfolioSummaryResp: function(e, data, sender) {
  console.log('getting products!'); 
  this.products = this.transform(e.detail.response);
  this.accounts = e.detail.response.Account;
  this.fire('core-signal', {'name' : 'ing-repo-accounts-get-products', data: this.products});
  this.fire('core-signal', {'name' : 'ing-repo-accounts-get-accounts', data: this.accounts});
  this.productsReady = true; 
  console.log('got products!');
},
getTransaction: function(e, detail, sender) {
  this.$.getTimelineTransaction.body = detail;
  this.$.getTimelineTransaction.go();
},
getTransactionsHistory: function(e, detail, sender) {
  this.$.getTimelineTransactionHistory.body = detail;
  this.$.getTimelineTransactionHistory.go();
},
getFilteredTransactionsHistory: function(e, detail, sender) {
  this.$.getTimelineFilteredTransactionHistory.body = detail;
  this.$.getTimelineFilteredTransactionHistory.go();
},  
handleGetEligibleAccountsResp: function(e) {
  this.eligibleAccounts = e.detail.response.Entries; 
  this.fire('core-signal',{'name' : 'ing-repo-accounts-get-eligible', data: this.eligibleAccounts});
  this.eligibleAccountsReady = true; 
  console.log('got eligibleAccounts!');
},               
handleGetTransactionResp: function(e) {
  this.transactions = this.transformTransactions(e.detail.response);
  this.fire('core-signal',{'name' : 'ing-repo-accounts-get-transactions', data: this.transactions});
  console.log('got transactions!');
},           
handleGetTransactionHistoryResp: function(e) {
  this.transactionHistory = this.transformTransactionsHistory(e.detail.response);
  this.totalTransactionHistoryCount = typeof(e.detail.response.TotalCount) != 'undefined'? e.detail.response.TotalCount : 0;
  this.fire('core-signal',{'name' : 'ing-repo-accounts-get-transactions-history', data: { transactions: this.transactionHistory, totalCount: this.totalTransactionHistoryCount}});
  console.log('got transactionHistory!');
},   

transform: function(data){
    // TODO: Refactor to use underscore.
    var that = this;
    var categorisedData = {};
    var tempproducts = [];
    data.Account.forEach(function(acc) {
      if(categorisedData[acc.Product.ProductType] === undefined)
      {
        categorisedData[acc.Product.ProductType] = {};
        categorisedData[acc.Product.ProductType].TotalAvailableBalance = 0;
        categorisedData[acc.Product.ProductType].Accounts = [];
        categorisedData[acc.Product.ProductType].ProductName = acc.Product.ProductName;
        categorisedData[acc.Product.ProductType].ProductCode = acc.Product.ProductCode;
        categorisedData[acc.Product.ProductType].ProductAbbreviation = acc.Product.ProductAbbreviation;
        categorisedData[acc.Product.ProductType].ProductType = acc.Product.ProductType;
            categorisedData[acc.Product.ProductType].Icon = "ing:heart"; //TODO: assess icon based on product type.
          }
          acc.TopTransactionsHistory = that.transformTransactionsHistory(acc.AccountTransactions);
          categorisedData[acc.Product.ProductType].Accounts.push(acc);

          categorisedData[acc.Product.ProductType].TotalAvailableBalance +=  acc.AvailableBalance;
        });

    var keys = Object.keys(categorisedData);
    keys.forEach(function(k) {
      tempproducts.push(categorisedData[k]);
    });
    return tempproducts;
  },
  transformTransactions: function  (data) {
    var grouped = _.chain(data.Transactions)
    .groupBy(function  (transaction){
     return moment(transaction.TransactionDate).format("dddd MM-DD-YYYY");
   })
    .map(function(items, key){
      return {
        title:key,
        "items" : _.map(items, function (item){
          return {
            name: item.TransactionDetails,
            value:item.Amount,
            description: item.ExtendedDescription,
            icon:'ing:piggybank'
          };})
      };
    }).value();

    return grouped;
  },
  transformTransactionsHistory: function  (data) {
    var grouped = _.chain(data.Transactions)
    .groupBy(function  (transaction){
     return transaction.TransactionDate;
   })
    .map(function(items, key){
      return {
        date:key,
        "items" : _.map(items, function (item){
          return {
            category:'',
            name: item.TransactionDetails,
            description: item.ExtendedDescription,
            amount:item.Amount,
            balance:item.Balance,
            receiptNumber:item.ReceiptNumber,
            code:item.TransactionCode,
            details:item.TransactionDetails,
            id:item.TransactionId,
            type:item.TransactionType
          };})
      };
    }).value();

    return grouped;
  }
});
;

  Polymer('ing-repo-move-money-au', {
   token: '',
   created: function() { 
      this.isReady = false; 
   },
   ready: function () {
     var ingSession = document.querySelector('ing-session');
     this.token = ingSession.token;
     this._getData(); 
   },
   handleTokenRefresh: function(e, detail, sender) {
      this.token = detail;
      this._getData();             
    },
    _setHeaders:function  () {
      //this.$.moveMoneyService.headers = {"X-AuthToken": this.token};
    },
    _getData: function() {
      if (this.token) { 
        this._setHeaders(); 
        this.isReady = true; 
        this.fire('core-signal', {'name' : 'ing-ready' });
      } else { 
        console.log('ing-repo-move-money: token is not ready yet.');
      }
    },
    moveMoney: function(from, to, amount, emailReceipt, descriptionIWillSee, descriptionTheyWillSee) { 
      console.log('move money'); 
      var body = {
        TransferFrom: from,
        TransferTo: to,
        Amount: amount, 
        //optional
        EmailReceipt: emailReceipt, 
        DescriptionIWillSee: descriptionIWillSee,
        DescriptionTheyWillSee: descriptionTheyWillSee
      };

      this.$.moveMoneyService.body = JSON.stringify(body);

      var that = this;
      setTimeout(function(){
        // delay mock request...
        that.$.moveMoneyService.go(); 
      }, 1000);   
         
    },
    handleMoveMoneyResp: function(e, data, sender) {
      console.log('getting response from the service'); 
      var data = this.transform(e.detail.response);

      this.fire('core-signal', {'name' : 'ing-repo-move-money', data: e.detail.response.Response});
      
    },
    transform: function(data) {
     
    }
});
;

    Polymer('ing-bootstrapper',{            
        created: function () {
            this.dependencies = []; 
            this.isReady = false;
        },
        ready: function() { 
            this.checkDependencies();
        },
        handleDependencyReady: function() {
            console.log('ing-bootstrapper: dependency ready');
            this.checkDependencies();
        },
        checkDependencies: function() {
            var allReady = _.every(this.dependencies, function(dependency) {
                // TODO: Refactor to remove successful items
                var dependencyElement = document.querySelector(dependency);
                return dependencyElement.isReady;
            });

            if (allReady) {
                this.isReady = true;
                this.fire('core-signal', {'name' : 'bootstrap-done' });
                this.fire('bootstrap-done', {'Status' : 'Ready'});
                console.log('ing-bootstrapper: bootstrap done');
            } 
        }
    });
;

    Polymer('core-selection', {
      /**
       * If true, multiple selections are allowed.
       *
       * @attribute multi
       * @type boolean
       * @default false
       */
      multi: false,
      ready: function() {
        this.clear();
      },
      clear: function() {
        this.selection = [];
      },
      /**
       * Retrieves the selected item(s).
       * @method getSelection
       * @returns Returns the selected item(s). If the multi property is true,
       * getSelection will return an array, otherwise it will return 
       * the selected item or undefined if there is no selection.
      */
      getSelection: function() {
        return this.multi ? this.selection : this.selection[0];
      },
      /**
       * Indicates if a given item is selected.
       * @method isSelected
       * @param {any} item The item whose selection state should be checked.
       * @returns Returns true if `item` is selected.
      */
      isSelected: function(item) {
        return this.selection.indexOf(item) >= 0;
      },
      setItemSelected: function(item, isSelected) {
        if (item !== undefined && item !== null) {
          if (isSelected) {
            this.selection.push(item);
          } else {
            var i = this.selection.indexOf(item);
            if (i >= 0) {
              this.selection.splice(i, 1);
            }
          }
          this.fire("core-select", {isSelected: isSelected, item: item});
        }
      },
      /**
       * Set the selection state for a given `item`. If the multi property
       * is true, then the selected state of `item` will be toggled; otherwise
       * the `item` will be selected.
       * @method select
       * @param {any} item: The item to select.
      */
      select: function(item) {
        if (this.multi) {
          this.toggle(item);
        } else if (this.getSelection() !== item) {
          this.setItemSelected(this.getSelection(), false);
          this.setItemSelected(item, true);
        }
      },
      /**
       * Toggles the selection state for `item`.
       * @method toggle
       * @param {any} item: The item to toggle.
      */
      toggle: function(item) {
        this.setItemSelected(item, !this.isSelected(item));
      }
    });
  ;


    Polymer('core-selector', {

      /**
       * Gets or sets the selected element.  Default to use the index
       * of the item element.
       *
       * If you want a specific attribute value of the element to be
       * used instead of index, set "valueattr" to that attribute name.
       *
       * Example:
       *
       *     <core-selector valueattr="label" selected="foo">
       *       <div label="foo"></div>
       *       <div label="bar"></div>
       *       <div label="zot"></div>
       *     </core-selector>
       *
       * In multi-selection this should be an array of values.
       *
       * Example:
       *
       *     <core-selector id="selector" valueattr="label" multi>
       *       <div label="foo"></div>
       *       <div label="bar"></div>
       *       <div label="zot"></div>
       *     </core-selector>
       *
       *     this.$.selector.selected = ['foo', 'zot'];
       *
       * @attribute selected
       * @type Object
       * @default null
       */
      selected: null,

      /**
       * If true, multiple selections are allowed.
       *
       * @attribute multi
       * @type boolean
       * @default false
       */
      multi: false,

      /**
       * Specifies the attribute to be used for "selected" attribute.
       *
       * @attribute valueattr
       * @type string
       * @default 'name'
       */
      valueattr: 'name',

      /**
       * Specifies the CSS class to be used to add to the selected element.
       * 
       * @attribute selectedClass
       * @type string
       * @default 'core-selected'
       */
      selectedClass: 'core-selected',

      /**
       * Specifies the property to be used to set on the selected element
       * to indicate its active state.
       *
       * @attribute selectedProperty
       * @type string
       * @default ''
       */
      selectedProperty: '',

      /**
       * Specifies the attribute to set on the selected element to indicate
       * its active state.
       *
       * @attribute selectedAttribute
       * @type string
       * @default 'active'
       */
      selectedAttribute: 'active',

      /**
       * Returns the currently selected element. In multi-selection this returns
       * an array of selected elements.
       * Note that you should not use this to set the selection. Instead use
       * `selected`.
       * 
       * @attribute selectedItem
       * @type Object
       * @default null
       */
      selectedItem: null,

      /**
       * In single selection, this returns the model associated with the
       * selected element.
       * Note that you should not use this to set the selection. Instead use 
       * `selected`.
       * 
       * @attribute selectedModel
       * @type Object
       * @default null
       */
      selectedModel: null,

      /**
       * In single selection, this returns the selected index.
       * Note that you should not use this to set the selection. Instead use
       * `selected`.
       *
       * @attribute selectedIndex
       * @type number
       * @default -1
       */
      selectedIndex: -1,

      /**
       * Nodes with local name that are in the list will not be included 
       * in the selection items.  In the following example, `items` returns four
       * `core-item`'s and doesn't include `h3` and `hr`.
       *
       *     <core-selector excludedLocalNames="h3 hr">
       *       <h3>Header</h3>
       *       <core-item>Item1</core-item>
       *       <core-item>Item2</core-item>
       *       <hr>
       *       <core-item>Item3</core-item>
       *       <core-item>Item4</core-item>
       *     </core-selector>
       *
       * @attribute excludedLocalNames
       * @type string
       * @default ''
       */
      excludedLocalNames: '',

      /**
       * The target element that contains items.  If this is not set 
       * core-selector is the container.
       * 
       * @attribute target
       * @type Object
       * @default null
       */
      target: null,

      /**
       * This can be used to query nodes from the target node to be used for 
       * selection items.  Note this only works if `target` is set
       * and is not `core-selector` itself.
       *
       * Example:
       *
       *     <core-selector target="{{$.myForm}}" itemsSelector="input[type=radio]"></core-selector>
       *     <form id="myForm">
       *       <label><input type="radio" name="color" value="red"> Red</label> <br>
       *       <label><input type="radio" name="color" value="green"> Green</label> <br>
       *       <label><input type="radio" name="color" value="blue"> Blue</label> <br>
       *       <p>color = {{color}}</p>
       *     </form>
       * 
       * @attribute itemsSelector
       * @type string
       * @default ''
       */
      itemsSelector: '',

      /**
       * The event that would be fired from the item element to indicate
       * it is being selected.
       *
       * @attribute activateEvent
       * @type string
       * @default 'tap'
       */
      activateEvent: 'tap',

      /**
       * Set this to true to disallow changing the selection via the
       * `activateEvent`.
       *
       * @attribute notap
       * @type boolean
       * @default false
       */
      notap: false,

      defaultExcludedLocalNames: 'template',
      
      observe: {
        'selected multi': 'selectedChanged'
      },

      ready: function() {
        this.activateListener = this.activateHandler.bind(this);
        this.itemFilter = this.filterItem.bind(this);
        this.excludedLocalNamesChanged();
        this.observer = new MutationObserver(this.updateSelected.bind(this));
        if (!this.target) {
          this.target = this;
        }
      },

      /**
       * Returns an array of all items.
       *
       * @property items
       */
      get items() {
        if (!this.target) {
          return [];
        }
        var nodes = this.target !== this ? (this.itemsSelector ? 
            this.target.querySelectorAll(this.itemsSelector) : 
                this.target.children) : this.$.items.getDistributedNodes();
        return Array.prototype.filter.call(nodes, this.itemFilter);
      },

      filterItem: function(node) {
        return !this._excludedNames[node.localName];
      },

      excludedLocalNamesChanged: function() {
        this._excludedNames = {};
        var s = this.defaultExcludedLocalNames;
        if (this.excludedLocalNames) {
          s += ' ' + this.excludedLocalNames;
        }
        s.split(/\s+/g).forEach(function(n) {
          this._excludedNames[n] = 1;
        }, this);
      },

      targetChanged: function(old) {
        if (old) {
          this.removeListener(old);
          this.observer.disconnect();
          this.clearSelection();
        }
        if (this.target) {
          this.addListener(this.target);
          this.observer.observe(this.target, {childList: true});
          this.updateSelected();
        }
      },

      addListener: function(node) {
        Polymer.addEventListener(node, this.activateEvent, this.activateListener);
      },

      removeListener: function(node) {
        Polymer.removeEventListener(node, this.activateEvent, this.activateListener);
      },

      /**
       * Returns the selected item(s). If the `multi` property is true,
       * this will return an array, otherwise it will return 
       * the selected item or undefined if there is no selection.
       */
      get selection() {
        return this.$.selection.getSelection();
      },

      selectedChanged: function() {
        // TODO(ffu): Right now this is the only way to know that the `selected`
        // is an array and was mutated, as opposed to newly assigned.
        if (arguments.length === 1) {
          this.processSplices(arguments[0]);
        } else {
          this.updateSelected();
        }
      },
      
      updateSelected: function() {
        this.validateSelected();
        if (this.multi) {
          this.clearSelection(this.selected)
          this.selected && this.selected.forEach(function(s) {
            this.setValueSelected(s, true)
          }, this);
        } else {
          this.valueToSelection(this.selected);
        }
      },

      validateSelected: function() {
        // convert to an array for multi-selection
        if (this.multi && !Array.isArray(this.selected) && 
            this.selected != null) {
          this.selected = [this.selected];
        // use the first selected in the array for single-selection
        } else if (!this.multi && Array.isArray(this.selected)) {
          var s = this.selected[0];
          this.clearSelection([s]);
          this.selected = s;
        }
      },
      
      processSplices: function(splices) {
        for (var i = 0, splice; splice = splices[i]; i++) {
          for (var j = 0; j < splice.removed.length; j++) {
            this.setValueSelected(splice.removed[j], false);
          }
          for (var j = 0; j < splice.addedCount; j++) {
            this.setValueSelected(this.selected[splice.index + j], true);
          }
        }
      },

      clearSelection: function(excludes) {
        this.$.selection.selection.slice().forEach(function(item) {
          var v = this.valueForNode(item) || this.items.indexOf(item);
          if (!excludes || excludes.indexOf(v) < 0) {
            this.$.selection.setItemSelected(item, false);
          }
        }, this);
      },

      valueToSelection: function(value) {
        var item = this.valueToItem(value);
        this.$.selection.select(item);
      },
      
      setValueSelected: function(value, isSelected) {
        var item = this.valueToItem(value);
        if (isSelected ^ this.$.selection.isSelected(item)) {
          this.$.selection.setItemSelected(item, isSelected);
        }
      },

      updateSelectedItem: function() {
        this.selectedItem = this.selection;
      },

      selectedItemChanged: function() {
        if (this.selectedItem) {
          var t = this.selectedItem.templateInstance;
          this.selectedModel = t ? t.model : undefined;
        } else {
          this.selectedModel = null;
        }
        this.selectedIndex = this.selectedItem ? 
            parseInt(this.valueToIndex(this.selected)) : -1;
      },
      
      valueToItem: function(value) {
        return (value === null || value === undefined) ? 
            null : this.items[this.valueToIndex(value)];
      },

      valueToIndex: function(value) {
        // find an item with value == value and return it's index
        for (var i=0, items=this.items, c; (c=items[i]); i++) {
          if (this.valueForNode(c) == value) {
            return i;
          }
        }
        // if no item found, the value itself is probably the index
        return value;
      },

      valueForNode: function(node) {
        return node[this.valueattr] || node.getAttribute(this.valueattr);
      },

      // events fired from <core-selection> object
      selectionSelect: function(e, detail) {
        this.updateSelectedItem();
        if (detail.item) {
          this.applySelection(detail.item, detail.isSelected);
        }
      },

      applySelection: function(item, isSelected) {
        if (this.selectedClass) {
          item.classList.toggle(this.selectedClass, isSelected);
        }
        if (this.selectedProperty) {
          item[this.selectedProperty] = isSelected;
        }
        if (this.selectedAttribute && item.setAttribute) {
          if (isSelected) {
            item.setAttribute(this.selectedAttribute, '');
          } else {
            item.removeAttribute(this.selectedAttribute);
          }
        }
      },

      // event fired from host
      activateHandler: function(e) {
        if (!this.notap) {
          var i = this.findDistributedTarget(e.target, this.items);
          if (i >= 0) {
            var item = this.items[i];
            var s = this.valueForNode(item) || i;
            if (this.multi) {
              if (this.selected) {
                this.addRemoveSelected(s);
              } else {
                this.selected = [s];
              }
            } else {
              this.selected = s;
            }
            this.asyncFire('core-activate', {item: item});
          }
        }
      },

      addRemoveSelected: function(value) {
        var i = this.selected.indexOf(value);
        if (i >= 0) {
          this.selected.splice(i, 1);
        } else {
          this.selected.push(value);
        }
      },

      findDistributedTarget: function(target, nodes) {
        // find first ancestor of target (including itself) that
        // is in nodes, if any
        while (target && target != this) {
          var i = Array.prototype.indexOf.call(nodes, target);
          if (i >= 0) {
            return i;
          }
          target = target.parentNode;
        }
      },
      
      selectIndex: function(index) {
        var item = this.items[index];
        if (item) {
          this.selected = this.valueForNode(item) || index;
          return item;
        }
      },
      
      /**
       * Selects the previous item. This should be used in single selection only.
       *
       * @method selectPrevious
       * @param {boolean} wrapped if true and it is already at the first item,
       *                  wrap to the end
       * @returns the previous item or undefined if there is none
       */
      selectPrevious: function(wrapped) {
        var i = wrapped && !this.selectedIndex ? 
            this.items.length - 1 : this.selectedIndex - 1;
        return this.selectIndex(i);
      },
      
      /**
       * Selects the next item.  This should be used in single selection only.
       *
       * @method selectNext
       * @param {boolean} wrapped if true and it is already at the last item,
       *                  wrap to the front
       * @returns the next item or undefined if there is none
       */
      selectNext: function(wrapped) {
        var i = wrapped && this.selectedIndex >= this.items.length - 1 ? 
            0 : this.selectedIndex + 1;
        return this.selectIndex(i);
      }
      
    });
  ;

  (function() {
    /*
     * Chrome uses an older version of DOM Level 3 Keyboard Events
     *
     * Most keys are labeled as text, but some are Unicode codepoints.
     * Values taken from: http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
     */
    var KEY_IDENTIFIER = {
      'U+0009': 'tab',
      'U+001B': 'esc',
      'U+0020': 'space',
      'U+002A': '*',
      'U+0030': '0',
      'U+0031': '1',
      'U+0032': '2',
      'U+0033': '3',
      'U+0034': '4',
      'U+0035': '5',
      'U+0036': '6',
      'U+0037': '7',
      'U+0038': '8',
      'U+0039': '9',
      'U+0041': 'a',
      'U+0042': 'b',
      'U+0043': 'c',
      'U+0044': 'd',
      'U+0045': 'e',
      'U+0046': 'f',
      'U+0047': 'g',
      'U+0048': 'h',
      'U+0049': 'i',
      'U+004A': 'j',
      'U+004B': 'k',
      'U+004C': 'l',
      'U+004D': 'm',
      'U+004E': 'n',
      'U+004F': 'o',
      'U+0050': 'p',
      'U+0051': 'q',
      'U+0052': 'r',
      'U+0053': 's',
      'U+0054': 't',
      'U+0055': 'u',
      'U+0056': 'v',
      'U+0057': 'w',
      'U+0058': 'x',
      'U+0059': 'y',
      'U+005A': 'z',
      'U+007F': 'del'
    };

    /*
     * Special table for KeyboardEvent.keyCode.
     * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better than that
     *
     * Values from: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
     */
    var KEY_CODE = {
      9: 'tab',
      13: 'enter',
      27: 'esc',
      33: 'pageup',
      34: 'pagedown',
      35: 'end',
      36: 'home',
      32: 'space',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      46: 'del',
      106: '*'
    };

    /*
     * KeyboardEvent.key is mostly represented by printable character made by the keyboard, with unprintable keys labeled
     * nicely.
     *
     * However, on OS X, Alt+char can make a Unicode character that follows an Apple-specific mapping. In this case, we
     * fall back to .keyCode.
     */
    var KEY_CHAR = /[a-z0-9*]/;

    function transformKey(key) {
      var validKey = '';
      if (key) {
        var lKey = key.toLowerCase();
        if (lKey.length == 1) {
          if (KEY_CHAR.test(lKey)) {
            validKey = lKey;
          }
        } else if (lKey == 'multiply') {
          // numpad '*' can map to Multiply on IE/Windows
          validKey = '*';
        } else {
          validKey = lKey;
        }
      }
      return validKey;
    }

    var IDENT_CHAR = /U\+/;
    function transformKeyIdentifier(keyIdent) {
      var validKey = '';
      if (keyIdent) {
        if (IDENT_CHAR.test(keyIdent)) {
          validKey = KEY_IDENTIFIER[keyIdent];
        } else {
          validKey = keyIdent.toLowerCase();
        }
      }
      return validKey;
    }

    function transformKeyCode(keyCode) {
      var validKey = '';
      if (Number(keyCode)) {
        if (keyCode >= 65 && keyCode <= 90) {
          // ascii a-z
          // lowercase is 32 offset from uppercase
          validKey = String.fromCharCode(32 + keyCode);
        } else if (keyCode >= 112 && keyCode <= 123) {
          // function keys f1-f12
          validKey = 'f' + (keyCode - 112);
        } else if (keyCode >= 48 && keyCode <= 57) {
          // top 0-9 keys
          validKey = String(48 - keyCode);
        } else if (keyCode >= 96 && keyCode <= 105) {
          // num pad 0-9
          validKey = String(96 - keyCode);
        } else {
          validKey = KEY_CODE[keyCode];
        }
      }
      return validKey;
    }

    function keyboardEventToKey(ev) {
      // fall back from .key, to .keyIdentifier, to .keyCode, and then to .detail.key to support artificial keyboard events
      var normalizedKey = transformKey(ev.key) || transformKeyIdentifier(ev.keyIdentifier) || transformKeyCode(ev.keyCode) || transformKey(ev.detail.key) || '';
      return {
        shift: ev.shiftKey,
        ctrl: ev.ctrlKey,
        meta: ev.metaKey,
        alt: ev.altKey,
        key: normalizedKey
      };
    }

    /*
     * Input: ctrl+shift+f7 => {ctrl: true, shift: true, key: 'f7'}
     * ctrl/space => {ctrl: true} || {key: space}
     */
    function stringToKey(keyCombo) {
      var keys = keyCombo.split('+');
      var keyObj = Object.create(null);
      keys.forEach(function(key) {
        if (key == 'shift') {
          keyObj.shift = true;
        } else if (key == 'ctrl') {
          keyObj.ctrl = true;
        } else if (key == 'alt') {
          keyObj.alt = true;
        } else {
          keyObj.key = key;
        }
      });
      return keyObj;
    }

    function keyMatches(a, b) {
      return Boolean(a.alt) == Boolean(b.alt) && Boolean(a.ctrl) == Boolean(b.ctrl) && Boolean(a.shift) == Boolean(b.shift) && a.key === b.key;
    }

    /**
     * Fired when a keycombo in `keys` is pressed.
     *
     * @event keys-pressed
     */
    function processKeys(ev) {
      var current = keyboardEventToKey(ev);
      for (var i = 0, dk; i < this._desiredKeys.length; i++) {
        dk = this._desiredKeys[i];
        if (keyMatches(dk, current)) {
          ev.preventDefault();
          ev.stopPropagation();
          this.fire('keys-pressed', current, this, false);
          break;
        }
      }
    }

    function listen(node, handler) {
      if (node && node.addEventListener) {
        node.addEventListener('keydown', handler);
      }
    }

    function unlisten(node, handler) {
      if (node && node.removeEventListener) {
        node.removeEventListener('keydown', handler);
      }
    }

    Polymer('core-a11y-keys', {
      created: function() {
        this._keyHandler = processKeys.bind(this);
      },
      attached: function() {
        if (!this.target) {
          this.target = this.parentNode;
        }
        listen(this.target, this._keyHandler);
      },
      detached: function() {
        unlisten(this.target, this._keyHandler);
      },
      publish: {
        /**
         * The set of key combinations to listen for.
         *
         * @attribute keys
         * @type string (keys syntax)
         * @default ''
         */
        keys: '',
        /**
         * The node that will fire keyboard events.
         * Default to this element's parentNode unless one is assigned
         *
         * @attribute target
         * @type Node
         * @default this.parentNode
         */
        target: null
      },
      keysChanged: function() {
        // * can have multiple mappings: shift+8, * on numpad or Multiply on numpad
        var normalized = this.keys.replace('*', '* shift+*');
        this._desiredKeys = normalized.toLowerCase().split(' ').map(stringToKey);
      },
      targetChanged: function(oldTarget) {
        unlisten(oldTarget, this._keyHandler);
        listen(this.target, this._keyHandler);
      }
    });
  })();
;

  Polymer('paper-shadow',{

    publish: {

      /**
       * The z-depth of this shadow, from 0-5. Setting this property
       * after element creation has no effect. Use `setZ()` instead.
       *
       * @attribute z
       * @type number
       * @default 1
       */
      z: 1,

      /**
       * Set this to true to animate the shadow when setting a new
       * `z` value.
       *
       * @attribute animated
       * @type boolean
       * @default false
       */
      animated: false

    },

    /**
     * Set the z-depth of the shadow. This should be used after element
     * creation instead of setting the z property directly.
     *
     * @method setZ
     * @param {Number} newZ
     */
    setZ: function(newZ) {
      if (this.z !== newZ) {
        this.$['shadow-bottom'].classList.remove('paper-shadow-bottom-z-' + this.z);
        this.$['shadow-bottom'].classList.add('paper-shadow-bottom-z-' + newZ);
        this.$['shadow-top'].classList.remove('paper-shadow-top-z-' + this.z);
        this.$['shadow-top'].classList.add('paper-shadow-top-z-' + newZ);
        this.z = newZ;
      }
    }

  });
;

    Polymer('core-media-query', {

      /**
       * The Boolean return value of the media query
       *
       * @attribute queryMatches
       * @type Boolean
       * @default false
       */
      queryMatches: false,

      /**
       * The CSS media query to evaulate
       *
       * @attribute query
       * @type string
       * @default ''
       */
      query: '',
      ready: function() {
        this._mqHandler = this.queryHandler.bind(this);
        this._mq = null;
      },
      queryChanged: function() {
        if (this._mq) {
          this._mq.removeListener(this._mqHandler);
        }
        var query = this.query;
        if (query[0] !== '(') {
          query = '(' + this.query + ')';
        }
        this._mq = window.matchMedia(query);
        this._mq.addListener(this._mqHandler);
        this.queryHandler(this._mq);
      },
      queryHandler: function(mq) {
        this.queryMatches = mq.matches;
        this.asyncFire('core-media-change', mq);
      }
    });
  ;


  Polymer('ing-data-products', {
    domReady:function  () {},
    created: function() { 
      this.products = [];
      this.fromaccounts = [];
    },
    ready: function() {
      console.log('product ready');

      var repoAccount = document.querySelector('ing-repo-accounts-au');

      if (repoAccount) {       
        this.products = repoAccount.products;
        this.fromaccounts = repoAccount.eligibleAccounts;
      } else { 
        console.warn('unable to find repository: ing-repo-accounts'); 
      }
    },
    updateProducts: function(e){
      this.products = e.detail;
    },
    updateEligibleAccounts: function(e){
      this.fromaccounts = e.detail;      
    }
  });
  ;


  Polymer('ing-data-accounts', {
    domReady:function  () {},
    created: function() { 
      this.accounts = [];
    },
    ready: function() {

      var repoAccount = document.querySelector('ing-repo-accounts-au');

      if (repoAccount) { 
        this.accounts = repoAccount.accounts;
      } else { 
        console.warn('unable to find repository: ing-repo-accounts'); 
      }
    },
    updateAccounts: function(e){
      this.accounts = e.detail;
    }
  });
  ;


  (function() {
    
    var SKIP_ID = 'meta';
    var metaData = {}, metaArray = {};

    Polymer('core-meta', {
      
      /**
       * The type of meta-data.  All meta-data with the same type with be
       * stored together.
       * 
       * @attribute type
       * @type string
       * @default 'default'
       */
      type: 'default',
      
      alwaysPrepare: true,
      
      ready: function() {
        this.register(this.id);
      },
      
      get metaArray() {
        var t = this.type;
        if (!metaArray[t]) {
          metaArray[t] = [];
        }
        return metaArray[t];
      },
      
      get metaData() {
        var t = this.type;
        if (!metaData[t]) {
          metaData[t] = {};
        }
        return metaData[t];
      },
      
      register: function(id, old) {
        if (id && id !== SKIP_ID) {
          this.unregister(this, old);
          this.metaData[id] = this;
          this.metaArray.push(this);
        }
      },
      
      unregister: function(meta, id) {
        delete this.metaData[id || meta.id];
        var i = this.metaArray.indexOf(meta);
        if (i >= 0) {
          this.metaArray.splice(i, 1);
        }
      },
      
      /**
       * Returns a list of all meta-data elements with the same type.
       * 
       * @property list
       * @type array
       * @default []
       */
      get list() {
        return this.metaArray;
      },
      
      /**
       * Retrieves meta-data by ID.
       *
       * @method byId
       * @param {String} id The ID of the meta-data to be returned.
       * @returns Returns meta-data.
       */
      byId: function(id) {
        return this.metaData[id];
      }
      
    });
    
  })();
  
;

  
    Polymer('core-iconset', {
  
      /**
       * The URL of the iconset image.
       *
       * @attribute src
       * @type string
       * @default ''
       */
      src: '',

      /**
       * The width of the iconset image. This must only be specified if the
       * icons are arranged into separate rows inside the image.
       *
       * @attribute width
       * @type number
       * @default 0
       */
      width: 0,

      /**
       * A space separated list of names corresponding to icons in the iconset
       * image file. This list must be ordered the same as the icon images
       * in the image file.
       *
       * @attribute icons
       * @type string
       * @default ''
       */
      icons: '',

      /**
       * The size of an individual icon. Note that icons must be square.
       *
       * @attribute iconSize
       * @type number
       * @default 24
       */
      iconSize: 24,

      /**
       * The horizontal offset of the icon images in the inconset src image.
       * This is typically used if the image resource contains additional images
       * beside those intended for the iconset.
       *
       * @attribute offsetX
       * @type number
       * @default 0
       */
      offsetX: 0,
      /**
       * The vertical offset of the icon images in the inconset src image.
       * This is typically used if the image resource contains additional images
       * beside those intended for the iconset.
       *
       * @attribute offsetY
       * @type number
       * @default 0
       */
      offsetY: 0,
      type: 'iconset',

      created: function() {
        this.iconMap = {};
        this.iconNames = [];
        this.themes = {};
      },
  
      ready: function() {
        // TODO(sorvell): ensure iconset's src is always relative to the main
        // document
        if (this.src && (this.ownerDocument !== document)) {
          this.src = this.resolvePath(this.src, this.ownerDocument.baseURI);
        }
        this.super();
        this.updateThemes();
      },

      iconsChanged: function() {
        var ox = this.offsetX;
        var oy = this.offsetY;
        this.icons && this.icons.split(/\s+/g).forEach(function(name, i) {
          this.iconNames.push(name);
          this.iconMap[name] = {
            offsetX: ox,
            offsetY: oy
          }
          if (ox + this.iconSize < this.width) {
            ox += this.iconSize;
          } else {
            ox = this.offsetX;
            oy += this.iconSize;
          }
        }, this);
      },

      updateThemes: function() {
        var ts = this.querySelectorAll('property[theme]');
        ts && ts.array().forEach(function(t) {
          this.themes[t.getAttribute('theme')] = {
            offsetX: parseInt(t.getAttribute('offsetX')) || 0,
            offsetY: parseInt(t.getAttribute('offsetY')) || 0
          };
        }, this);
      },

      // TODO(ffu): support retrived by index e.g. getOffset(10);
      /**
       * Returns an object containing `offsetX` and `offsetY` properties which
       * specify the pixel locaion in the iconset's src file for the given
       * `icon` and `theme`. It's uncommon to call this method. It is useful,
       * for example, to manually position a css backgroundImage to the proper
       * offset. It's more common to use the `applyIcon` method.
       *
       * @method getOffset
       * @param {String|Number} icon The name of the icon or the index of the
       * icon within in the icon image.
       * @param {String} theme The name of the theme.
       * @returns {Object} An object specifying the offset of the given icon 
       * within the icon resource file; `offsetX` is the horizontal offset and
       * `offsetY` is the vertical offset. Both values are in pixel units.
       */
      getOffset: function(icon, theme) {
        var i = this.iconMap[icon];
        if (!i) {
          var n = this.iconNames[Number(icon)];
          i = this.iconMap[n];
        }
        var t = this.themes[theme];
        if (i && t) {
          return {
            offsetX: i.offsetX + t.offsetX,
            offsetY: i.offsetY + t.offsetY
          }
        }
        return i;
      },

      /**
       * Applies an icon to the given element as a css background image. This
       * method does not size the element, and it's often necessary to set 
       * the element's height and width so that the background image is visible.
       *
       * @method applyIcon
       * @param {Element} element The element to which the background is
       * applied.
       * @param {String|Number} icon The name or index of the icon to apply.
       * @param {Number} scale (optional, defaults to 1) A scaling factor 
       * with which the icon can be magnified.
       * @return {Element} The icon element.
       */
      applyIcon: function(element, icon, scale) {
        var offset = this.getOffset(icon);
        scale = scale || 1;
        if (element && offset) {
          var icon = element._icon || document.createElement('div');
          var style = icon.style;
          style.backgroundImage = 'url(' + this.src + ')';
          style.backgroundPosition = (-offset.offsetX * scale + 'px') + 
             ' ' + (-offset.offsetY * scale + 'px');
          style.backgroundSize = scale === 1 ? 'auto' :
             this.width * scale + 'px';
          if (icon.parentNode !== element) {
            element.appendChild(icon);
          }
          return icon;
        }
      }

    });

  ;

(function() {
  
  // mono-state
  var meta;
  
  Polymer('core-icon', {

    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     *
     * @attribute src
     * @type string
     * @default ''
     */
    src: '',

    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     *
     * @attribute icon
     * @type string
     * @default ''
     */
    icon: '',

    /**
     * Alternative text content for accessibility support.
     * If alt is present and not empty, it will set the element's role to img and add an aria-label whose content matches alt.
     * If alt is present and is an empty string, '', it will hide the element from the accessibility layer
     * If alt is not present, it will set the element's role to img and the element will fallback to using the icon attribute for its aria-label.
     * 
     * @attribute alt
     * @type string
     * @default ''
     */
    alt: null,

    observe: {
      'icon': 'updateIcon',
      'alt': 'updateAlt'
    },

    defaultIconset: 'icons',

    ready: function() {
      if (!meta) {
        meta = document.createElement('core-iconset');
      }

      // Allow user-provided `aria-label` in preference to any other text alternative.
      if (this.hasAttribute('aria-label')) {
        // Set `role` if it has not been overridden.
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'img');
        }
        return;
      }
      this.updateAlt();
    },

    srcChanged: function() {
      var icon = this._icon || document.createElement('div');
      icon.textContent = '';
      icon.setAttribute('fit', '');
      icon.style.backgroundImage = 'url(' + this.src + ')';
      icon.style.backgroundPosition = 'center';
      icon.style.backgroundSize = '100%';
      if (!icon.parentNode) {
        this.appendChild(icon);
      }
      this._icon = icon;
    },

    getIconset: function(name) {
      return meta.byId(name || this.defaultIconset);
    },

    updateIcon: function(oldVal, newVal) {
      if (!this.icon) {
        this.updateAlt();
        return;
      }
      var parts = String(this.icon).split(':');
      var icon = parts.pop();
      if (icon) {
        var set = this.getIconset(parts.pop());
        if (set) {
          this._icon = set.applyIcon(this, icon);
          if (this._icon) {
            this._icon.setAttribute('fit', '');
          }
        }
      }
      // Check to see if we're using the old icon's name for our a11y fallback
      if (oldVal) {
        if (oldVal.split(':').pop() == this.getAttribute('aria-label')) {
          this.updateAlt();
        }
      }
    },

    updateAlt: function() {
      // Respect the user's decision to remove this element from
      // the a11y tree
      if (this.getAttribute('aria-hidden')) {
        return;
      }

      // Remove element from a11y tree if `alt` is empty, otherwise
      // use `alt` as `aria-label`.
      if (this.alt === '') {
        this.setAttribute('aria-hidden', 'true');
        if (this.hasAttribute('role')) {
          this.removeAttribute('role');
        }
        if (this.hasAttribute('aria-label')) {
          this.removeAttribute('aria-label');
        }
      } else {
        this.setAttribute('aria-label', this.alt ||
                                        this.icon.split(':').pop());
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'img');
        }
        if (this.hasAttribute('aria-hidden')) {
          this.removeAttribute('aria-hidden');
        }
      }
    }

  });
  
})();
;


    Polymer('core-iconset-svg', {


      /**
       * The size of an individual icon. Note that icons must be square.
       *
       * @attribute iconSize
       * @type number
       * @default 24
       */
      iconSize: 24,
      type: 'iconset',

      created: function() {
        this._icons = {};
      },

      ready: function() {
        this.super();
        this.updateIcons();
      },

      iconById: function(id) {
        return this._icons[id] || (this._icons[id] = this.querySelector('[id="' + id +'"]'));
      },

      cloneIcon: function(id) {
        var icon = this.iconById(id);
        if (icon) {
          var content = icon.cloneNode(true);
          content.removeAttribute('id');
          var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('viewBox', '0 0 ' + this.iconSize + ' ' +
              this.iconSize);
          // NOTE(dfreedm): work around https://crbug.com/370136
          svg.style.pointerEvents = 'none';
          svg.appendChild(content);
          return svg;
        }
      },

      get iconNames() {
        if (!this._iconNames) {
          this._iconNames = this.findIconNames();
        }
        return this._iconNames;
      },

      findIconNames: function() {
        var icons = this.querySelectorAll('[id]').array();
        if (icons.length) {
          return icons.map(function(n){ return n.id });
        }
      },

      /**
       * Applies an icon to the given element. The svg icon is added to the
       * element's shadowRoot if one exists or directly to itself.
       *
       * @method applyIcon
       * @param {Element} element The element to which the icon is
       * applied.
       * @param {String|Number} icon The name the icon to apply.
       * @return {Element} The icon element
       */
      applyIcon: function(element, icon) {
        var root = element;
        // remove old
        var old = root.querySelector('svg');
        if (old) {
          old.remove();
        }
        // install new
        var svg = this.cloneIcon(icon);
        if (!svg) {
          return;
        }
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.style.display = 'block';
        root.insertBefore(svg, root.firstElementChild);
        return svg;
      },
      
      /**
       * Tell users of the iconset, that the set has loaded.
       * This finds all elements matching the selector argument and calls 
       * the method argument on them.
       * @method updateIcons
       * @param selector {string} css selector to identify iconset users, 
       * defaults to '[icon]'
       * @param method {string} method to call on found elements, 
       * defaults to 'updateIcon'
       */
      updateIcons: function(selector, method) {
        selector = selector || '[icon]';
        method = method || 'updateIcon';
        var deep = window.ShadowDOMPolyfill ? '' : 'html /deep/ ';
        var i$ = document.querySelectorAll(deep + selector);
        for (var i=0, e; e=i$[i]; i++) {
          if (e[method]) {
            e[method].call(e);
          }
        }
      }
      

    });

  ;
Polymer('ing-move-money',{
	
	validation: {

		model : {
			isProcessing: false,
			$amount : {
				hasError : false,
				disabled: true
			},
			$message : {
				hasError : false,
				disabled: true
			},
			$continue : {
				disabled: true
			}
		},
		
		checkAmount : function(value){
			var regex  = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
			if (value === ''){
				this.model.$continue.disabled = true;
			} else if(regex.test(value)){
				this.model.$amount.hasError = false;
				this.model.$continue.disabled = false;
			} else{
				this.model.$amount.hasError = true;
				this.model.$continue.disabled = true;
			}
		},

	},

	disableForm: function(){
		this.clearForm();
		this.validation.model.$amount.disabled = true;
		this.validation.model.$message.disabled = true;		
		this.validation.model.$continue.disabled = true;
	},

	enableForm: function(){
		this.clearForm();
		this.validation.model.$amount.disabled = false;
		this.validation.model.$message.disabled = false;
	},

	clearForm: function(){
		if (this.amount)
			this.amount = '';


		if (this.message)
			this.message = '';		
		
		this.validation.model.$amount.hasError = false;
	},

    amountChanged: function(oldValue, newValue){
    	this.validation.checkAmount(newValue);
    },

	created: function() { 
		this.computedaccounts = []; 
		this.fromaccounts = []; 
		this.toaccounts = [];
		this.products = []; 
		this.allaccounts = []; 
		this.keyRowIndex = -1; 
	},
	
	domReady: function  () {
		this.focus(); 
	}, 

	finaliseSelection: function(){
		this.clearForm();
		this.enableForm();
	},
	
	addCurrencySymbol: function (value) { 
		return value ? '$' + value : ""; 
	},

	getAccountBalance: function(account) { 

		console.log('trigger getAccountBalance'); 

		var portfolioAccount = _.find(this.allaccounts, function (acc) { 
			return acc.AccountNumber === account.CustomerAccount.AccountNumber; 
		});

		return portfolioAccount ? portfolioAccount.AvailableBalance : null; 
	}, 

	transformBalanceForAria: function(balance) { 
		return balance ? balance : "unknown"; 
	},

	markIfSelected: function (elementIndex, selectedIndex) { 
		return (elementIndex === selectedIndex) ? "selected " : ""; 
	},
	
	selectedfromaccountindexChanged: function(oldValue, newValue)
	{
		if (newValue === undefined) { 
			this.toaccounts = []; 
		} else {
			this.toaccounts = this.computedaccounts[newValue].EligibleToAccounts;
			this.hideUnselectedFromAccounts(newValue);
		}

		this.disableForm();
	},

	hideUnselectedFromAccounts: function(index) { 
		this.$.fromSelector.items.forEach(function(i){
			var cssClasses = i.getAttribute('class');

			var cssClasses = cssClasses 
				? cssClasses + " hidden"
				: "hidden"; 
			
			i.setAttribute('class', cssClasses);
		}); 

		this.$.fromSelector.items[index].setAttribute("class", ""); 
	},

	clearFromSelection: function(e){

		this.$.fromSelector.items.forEach(function(i){
			var cssClasses = i.getAttribute('class');
			
			if (cssClasses)
				cssClasses = cssClasses.replace('hidden', '');
			
			i.setAttribute('class', cssClasses);
		});

		this.selectedfromaccountindex = undefined;
		this.selectedtoaccountindex = undefined; 

		this.disableForm(); 
	},

	moveMoney: function(e){
		e.preventDefault(); 

    	if (this.selectedfromaccountindex < 0 || this.selectedtoaccountindex < 0) { 
    		return; 
    	}

    	var selectedFromAccount = this.fromaccounts[this.selectedfromaccountindex];
    	var selectedToAccount = this.toaccounts[this.selectedtoaccountindex]; 

    	var from = {
          BSB: selectedFromAccount.CustomerAccount.BSB, 
          AccountNumber: selectedFromAccount.CustomerAccount.AccountNumber,
          AccountDetails: {
            AccountNameDisplay: selectedFromAccount.AccountNameDisplay
          }
        }; 

        var to = { 
          BSB: selectedToAccount.CustomerAccount.BSB, 
          AccountNumber: selectedToAccount.CustomerAccount.AccountNumber,
          AccountDetails: {
            AccountNameDisplay: selectedToAccount.AccountNameDisplay
          }
        }; 

        var emailReceipt = false; 
        var descriptionIWillSee = this.message; 
        var descriptionTheyWillSee = this.message; 

        this.validation.model.isProcessing = true;

		var $r = document.querySelector('ing-repo-move-money-au');
    	$r.moveMoney(from, to, this.amount, emailReceipt, descriptionIWillSee, descriptionTheyWillSee);
    },

    moveMoneyResponse: function(e){
    	this.validation.model.isProcessing = false;
    	
    	this.clearFromSelection();

    	this.refreshAccountBalances(); 

    	alert(e.detail.TransactionDate); 
    },

    refreshAccountBalances: function() { 
    	console.log('refreshing balances...'); 
    	var $r = document.querySelector('ing-repo-accounts-au');
    	$r.getPortfolioSummary(); 
    }, 

    allaccountsChanged: function() { 
    	this.refreshComputedAccounts(); 
    }, 

    fromaccountsChanged: function() { 
    	this.refreshComputedAccounts(); 
	},

	refreshComputedAccounts: function() { 
		var that = this; 
		this.computedaccounts = _.map(this.fromaccounts, function (acc) { 
			return { 
				AccountNameDisplay: acc.AccountNameDisplay, 
				AccountNumber: acc.CustomerAccount.AccountNumber,
				Balance: that.getAccountBalance(acc),
				EligibleToAccounts: acc.EligibleToAccounts
			};
		});
	},

    keyHandler: function(e, detail, sender) { 
    	console.log(detail.key); 
    	switch (detail.key) { 
    		case "esc": 
    		this.resetKeyboardIndexes(); 
    		this.clearFromSelection();
    		this.focus(); 
    		break; 
    		case "up": 
    		case "down":
    		this.upDownHandler(detail.key === "down");  
    		break; 
    		case "enter":
    		case "space": 
    		this.enterHandler();  
    		break; 
    	}
    }, 

    getCurrentColumn: function() { 

    	if (this.selectedfromaccountindex == undefined) { 
    		return 0; // from accounts
    	}
    	if (this.selectedtoaccountindex == undefined) { 
    		return 1; // to accounts
    	}

    	return 2; // details 
    },

    resetKeyboardIndexes: function() { 
    	this.keyRowIndex = -1; 
    },

    upDownHandler: function(isDown) { 
    	switch (this.getCurrentColumn()) { 
    		case 0: 
    		this.keyRowIndex = this.updateFromRowIndex(isDown);

	    	this.clearKeyboardSelected(this.$.fromSelector.items);
	    	this.setKeyboardSelected(this.$.fromSelector.items[this.keyRowIndex]); 
    		break; 
    		case 1: 
    		this.keyRowIndex = this.updateToRowIndex(isDown);
    		this.clearKeyboardSelected(this.$.toSelector.items);
	    	this.setKeyboardSelected(this.$.toSelector.items[this.keyRowIndex]); 
    		break; 
    		case 2: 
    		this.keyRowIndex = this.updateDetailsRowIndex(isDown); 
    		this.focusDetailsControl(this.keyRowIndex);
    		break; 
    	}
    }, 

     enterHandler: function() { 
    	switch (this.getCurrentColumn()) { 
    		case 0: 
    		if (this.keyRowIndex > -1) { 
    			this.clearKeyboardSelected(this.$.fromSelector.items); 
    			this.$.fromSelector.selectIndex(this.keyRowIndex); 
    			this.keyRowIndex = -1; 
    		}
    		break; 

    		case 1: 
    		if (this.keyRowIndex > -1) { 
    			this.clearKeyboardSelected(this.$.toSelector.items); 
    			this.$.toSelector.selectIndex(this.keyRowIndex); 
    			this.finaliseSelection(); 
    			this.keyRowIndex = 0; 
    			this.$.amount.select(); 
    			this.$.amount.focus();
    		}
    		break; 

    		case 2: 
    		this.$.continue.click();
    		this.keyRowIndex = -1; 
    		this.focus();
    		break; 
    	}
    },


    clearKeyboardSelected: function(items) { 
		items.forEach(function(i) {
			var cssClasses = i.getAttribute('class');
			
			if (cssClasses)
				cssClasses = cssClasses.replace('keyboard-selected', '');
			
			i.setAttribute('class', cssClasses);
		});

    },

    setKeyboardSelected: function(item) { 
    	var cssClasses = item.getAttribute('class'); 

    	if (cssClasses) { 
    		item.setAttribute('class', cssClasses + ' keyboard-selected');
    	} else { 
    		item.setAttribute('class', 'keyboard-selected'); 
    	}
    },

    updateFromRowIndex: function(isDown) { 
    	var delta = isDown ? 1 : -1; 
    	var newIndex = this.keyRowIndex + delta;

    	if (newIndex > this.computedaccounts.length - 1) { 
    		newIndex = 0; 
    	} else if (newIndex < 0) { 
    		newIndex = this.computedaccounts.length - 1; 
    	}

    	return newIndex; 
    }, 

    updateToRowIndex: function(isDown) { 
    	var delta = isDown ? 1 : -1; 
    	var newIndex = this.keyRowIndex + delta;

    	if (newIndex > this.toaccounts.length - 1) { 
    		newIndex = 0; 
    	} else if (newIndex < 0) { 
    		newIndex = this.toaccounts.length - 1; 
    	}

    	return newIndex; 
    },

    updateDetailsRowIndex: function(isDown) { 
    	var delta = isDown ? 1 : -1; 
    	var newIndex = this.keyRowIndex + delta;

    	if (newIndex > 1) { 
    		newIndex = 0; 
    	} else if (newIndex < 0) { 
    		newIndex = 1; 
    	}

    	return newIndex; 
    }, 

    focusDetailsControl: function(controlIndex) { 
    	switch (controlIndex) { 
    		case 0: 
    			this.$.amount.focus(); 
    		break; 
    			
    		case 1: 
    			this.$.message.focus(); 
    		break; 
    	}
    }
});


;

			Polymer('test-ui-launcher', {
			created: function () {
			},
			handlerBootstrapDone: function() { 
				var moveMoney = document.createElement('ing-move-money')
				this.$.placeholder.appendChild(moveMoney);
			}
		}); 
		