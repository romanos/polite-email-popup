function e(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}var t,o,n=Object.prototype,i=Function.prototype.toString,a=n.hasOwnProperty,s=i.call(Object),r=n.toString,l=(t=Object.getPrototypeOf,o=Object,function(e){return t(o(e))});function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function m(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return c(e,void 0);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(o=e[Symbol.iterator]()).next.bind(o)}function d(){this.callbacksLookup={}}d.prototype={emit:function(e,t){for(var o,n=this.callbacksLookup["*"]||[],i=m(this.callbacksLookup[e]||[]);!(o=i()).done;)(0,o.value)({name:e,value:t});for(var a,s=m(n);!(a=s()).done;)(0,a.value)({name:e,value:t})},on:function(e,t){for(var o,n=m(Array.isArray(e)?e:[e]);!(o=n()).done;){var i=o.value;this.callbacksLookup[i]||(this.callbacksLookup[i]=[]),this.callbacksLookup[i].push(t)}}};var u,f=new d;function p(e,t){void 0===t&&(t={}),e=e||"tigerlily";var o=t.defaults,n=void 0===o?{}:o,c=JSON.parse(localStorage.getItem(e)||"{}",_);return c=Object.assign(n,c),new Proxy(c,function t(o){return{get:function(e,n){return g(e[n])?new Proxy(e[n],t(o)):e[n]},set:function(t,n,c){t[n]=c,localStorage.setItem(e,JSON.stringify(o,b));var m=t[n],d=g(m)?JSON.parse(JSON.stringify(m,b),_):m,u=g(c)?JSON.parse(JSON.stringify(c,b),_):c,p=function(e,t){if(e===t)return"";var o="";return function e(t,o,n){n=n||"",Array.isArray(t)?function(t,o,n){t.forEach((t,i,a)=>{const s=`${n}[${i}]`;o.call(a,t,i,a,s),e(a[i],o,s)})}(t,o,n):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=r.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=l(e);if(null===t)return!0;var o=a.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&i.call(o)==s}(t)&&function(t,o,n){for(const i in t){const a=n?`${n}.${i}`:i;o.call(t,t[i],i,t,a),e(t[i],o,a)}}(t,o,n)}(e,function(e,n,i,a){e===t&&(o=a)}),o}(o,c)||n;return f.emit(p,{prop:n,path:p,oldValue:d,value:u}),!0}}}(c))}function g(e){return Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)}function b(e,t){if(this[e]instanceof Date){var o=this[e].getTime();return o?{__isDate:!0,ms:o}:void 0}return t}function _(e,t){return g(t)&&t.__isDate?new Date(t.ms):t}p.on=function(e,t){f.on(e,function(e){t(e.value)})},u||(u=p("polite-email-popup")),window.persistentGlobals=u;var v={};function y(){return E("modal")}function h(){return E("bottom-bar")}function E(e){var t="modal"===e?u.modalClosedDate:u.bottomBarClosedDate;if(t)return{days:Math.floor((Date.now()-t)/864e5)}}var O={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:2,aggressive:1}},activeTimeOnPage:{content:{notAggressive:6,aggressive:4},marketing:{notAggressive:6,aggressive:4}},activeTimeOnSite:{content:{notAggressive:21,aggressive:14},marketing:{notAggressive:21,aggressive:14}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:35,aggressive:25}}},w={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnPage:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnSite:{content:{notAggressive:10,aggressive:7},marketing:{notAggressive:10,aggressive:7}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:25,aggressive:20},marketing:{notAggressive:25,aggressive:20}}};function T(){var e,t=function(){var e,t,o=[{pageViews:O.pageViews[e=v.websiteType][t=v.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:O.activeTimeOnPage[e][t],activeTimeOnSite:O.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:O.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:u.pageViews,activeTimeOnPage:u.activeTimeOnPage,activeTimeOnSite:u.activeTimeOnSite,highestScrollPercentageAcrossAllPages:u.highestScrollPercentageAcrossAllPages}],n=o[0],i=o[1],a=Object.keys(n).every(function(e){return i[e]>=n[e]}),s=h();s&&(a=a&&s.days>=2);var r=y();return r&&(a=a&&r.days>=2),v.isModalOpen&&(a=!1),[a,n,i]}(),o=t[0],n=t[1],i=t[2],a=function(){var e,t,o=[{pageViews:w.pageViews[e=v.websiteType][t=v.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:w.activeTimeOnPage[e][t],activeTimeOnSite:w.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:w.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:u.pageViews,activeTimeOnPage:u.activeTimeOnPage,activeTimeOnSite:u.activeTimeOnSite,highestScrollPercentageAcrossAllPages:u.highestScrollPercentageAcrossAllPages}],n=o[0],i=o[1],a=Object.keys(n).every(function(e){return i[e]>=n[e]}),s=h();s&&(a=a&&s.days>=2);var r=y();return r&&(a=a&&r.days>=2),[a,n,i]}(),s=a[0],r=a[1],l=a[2];v.isModalOpenable=!!o,s&&(v.BOTTOM_BAR_ELEM.classList.add("show"),document.body.classList.add(v.BODY_CLASS_BOTTOM_BAR_OPEN)),v.showDebugNotice&&(v.DEBUG_NOTICE_ELEM.innerHTML=function(e){var t=e.modalRequirements,o=e.modalActualValues,n=e.modalMeetsRequirements,i=e.bottomBarRequirements,a=e.bottomBarMeetsRequirements,s=y(),r=h();return'<div class="debug-email-forms">\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Website type: </span>\n    <span class="debug-email-forms__stat-value">'+(v.websiteType.charAt(0).toUpperCase()+v.websiteType.slice(1))+' website</span>\n  </div>\n  <div class="debug-email-forms__stat debug-email-forms__stat--buttons">\n    <button class="debug-email-forms__reset" type="button">Reset data</button>\n    <button class="debug-email-forms__bypass" type="button">Bypass requirements</button>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Page views: </span>\n    <span class="debug-email-forms__stat-value">'+o.pageViews+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.pageViews+'</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.pageViews+'</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>\n    <span class="debug-email-forms__stat-value">'+o.highestScrollPercentageAcrossAllPages+'% </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.highestScrollPercentageAcrossAllPages+'%</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.highestScrollPercentageAcrossAllPages+'%</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on site: </span>\n    <span class="debug-email-forms__stat-value">'+o.activeTimeOnSite+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnSite+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnSite+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on page: </span>\n    <span class="debug-email-forms__stat-value">'+o.activeTimeOnPage+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnPage+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnPage+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal was closed: </span>\n    <span class="debug-email-forms__stat-value">'+(s?s.days+" day"+(1!==s.days?"s":"")+" ago":"never")+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: never or 2 days ago</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar was closed: </span>\n    <span class="debug-email-forms__stat-value">'+(r?r.days+" day"+(1!==r.days?"s":"")+" ago":"never")+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: never or 2 days ago</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal is openable: </span>\n    '+(n?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+'\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar is open: </span>\n    '+(a?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+"\n  </div>\n</div>"}({modalRequirements:(e={modalRequirements:n,modalActualValues:i,modalMeetsRequirements:o,bottomBarRequirements:r,bottomBarActualValues:l,bottomBarMeetsRequirements:s}).modalRequirements,modalActualValues:e.modalActualValues,modalMeetsRequirements:e.modalMeetsRequirements,bottomBarRequirements:e.bottomBarRequirements,bottomBarActualValues:e.bottomBarActualValues,bottomBarMeetsRequirements:e.bottomBarMeetsRequirements}))}var S={};function x(e){return S[e]||document.querySelector(e)}function A(e){return"number"==typeof e&&!Number.isNaN(e)}function M(e){document.body.insertAdjacentHTML("beforeend",e)}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var L,C=function(){return(C=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},k=function(){function e(e){this.options=e,this.listeners={}}return e.prototype.on=function(e,t){this.listeners[e]=(this.listeners[e]||[]).concat([t])},e.prototype.triggerEvent=function(e,t){var o=this;(this.listeners[e]||[]).forEach(function(e){return e({target:o,event:t})})},e}();!function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(L||(L={}));var N,P=function(){function e(){this.notifications=[]}return e.prototype.push=function(e){this.notifications.push(e),this.updateFn(e,L.Add,this.notifications)},e.prototype.splice=function(e,t){var o=this.notifications.splice(e,t)[0];return this.updateFn(o,L.Remove,this.notifications),o},e.prototype.indexOf=function(e){return this.notifications.indexOf(e)},e.prototype.onUpdate=function(e){this.updateFn=e},e}();!function(e){e.Dismiss="dismiss",e.Click="click"}(N||(N={}));var B={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!1},R=function(){function e(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var e=document.createDocumentFragment(),t=this._createHTLMElement({tagName:"div",className:"notyf"});e.appendChild(t),document.body.appendChild(e),this.container=t,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return e.prototype.on=function(e,t){var o;this.events=C(C({},this.events),((o={})[e]=t,o))},e.prototype.update=function(e,t){t===L.Add?this.addNotification(e):t===L.Remove&&this.removeNotification(e)},e.prototype.removeNotification=function(e){var t,o,n=this,i=this._popRenderedNotification(e);i&&((t=i.node).classList.add("notyf__toast--disappear"),t.addEventListener(this.animationEndEventName,o=function(e){e.target===t&&(t.removeEventListener(n.animationEndEventName,o),n.container.removeChild(t))}))},e.prototype.addNotification=function(e){var t=this._renderNotification(e);this.notifications.push({notification:e,node:t}),this._announce(e.options.message||"Notification")},e.prototype._renderNotification=function(e){var t,o=this._buildNotificationCard(e),n=e.options.className;return n&&(t=o.classList).add.apply(t,n.split(" ")),this.container.appendChild(o),o},e.prototype._popRenderedNotification=function(e){for(var t=-1,o=0;o<this.notifications.length&&t<0;o++)this.notifications[o].notification===e&&(t=o);if(-1!==t)return this.notifications.splice(t,1)[0]},e.prototype.getXPosition=function(e){var t;return(null===(t=null==e?void 0:e.position)||void 0===t?void 0:t.x)||"right"},e.prototype.getYPosition=function(e){var t;return(null===(t=null==e?void 0:e.position)||void 0===t?void 0:t.y)||"bottom"},e.prototype.adjustContainerAlignment=function(e){var t=this.X_POSITION_FLEX_MAP[this.getXPosition(e)],o=this.Y_POSITION_FLEX_MAP[this.getYPosition(e)],n=this.container.style;n.setProperty("justify-content",o),n.setProperty("align-items",t)},e.prototype._buildNotificationCard=function(e){var t,o=this,n=e.options,i=n.icon;this.adjustContainerAlignment(n);var a=this._createHTLMElement({tagName:"div",className:"notyf__toast"}),s=this._createHTLMElement({tagName:"div",className:"notyf__ripple"}),r=this._createHTLMElement({tagName:"div",className:"notyf__wrapper"}),l=this._createHTLMElement({tagName:"div",className:"notyf__message"});l.innerHTML=n.message||"";var c=n.background||n.backgroundColor;if(i&&"object"==typeof i){var m=this._createHTLMElement({tagName:"div",className:"notyf__icon"}),d=this._createHTLMElement({tagName:i.tagName||"i",className:i.className,text:i.text}),u=null!==(t=i.color)&&void 0!==t?t:c;u&&(d.style.color=u),m.appendChild(d),r.appendChild(m)}if(r.appendChild(l),a.appendChild(r),c&&(n.ripple?(s.style.background=c,a.appendChild(s)):a.style.background=c),n.dismissible){var f=this._createHTLMElement({tagName:"div",className:"notyf__dismiss"}),p=this._createHTLMElement({tagName:"button",className:"notyf__dismiss-btn"});f.appendChild(p),r.appendChild(f),a.classList.add("notyf__toast--dismissible"),p.addEventListener("click",function(t){var n,i;null===(i=(n=o.events)[N.Dismiss])||void 0===i||i.call(n,{target:e,event:t}),t.stopPropagation()})}a.addEventListener("click",function(t){var n,i;return null===(i=(n=o.events)[N.Click])||void 0===i?void 0:i.call(n,{target:e,event:t})});var g="top"===this.getYPosition(n)?"upper":"lower";return a.classList.add("notyf__toast--"+g),a},e.prototype._createHTLMElement=function(e){var t=e.className,o=e.text,n=document.createElement(e.tagName);return t&&(n.className=t),n.textContent=o||null,n},e.prototype._createA11yContainer=function(){var e=this._createHTLMElement({tagName:"div",className:"notyf-announcer"});e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","polite"),e.style.border="0",e.style.clip="rect(0 0 0 0)",e.style.height="1px",e.style.margin="-1px",e.style.overflow="hidden",e.style.padding="0",e.style.position="absolute",e.style.width="1px",e.style.outline="0",document.body.appendChild(e),this.a11yContainer=e},e.prototype._announce=function(e){var t=this;this.a11yContainer.textContent="",setTimeout(function(){t.a11yContainer.textContent=e},100)},e.prototype._getAnimationEndEventName=function(){var e,t=document.createElement("_fake"),o={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(e in o)if(void 0!==t.style[e])return o[e];return"animationend"},e}(),D=function(){function e(e){var t=this;this.dismiss=this._removeNotification,this.notifications=new P,this.view=new R;var o=this.registerTypes(e);this.options=C(C({},B),e),this.options.types=o,this.notifications.onUpdate(function(e,o){return t.view.update(e,o)}),this.view.on(N.Dismiss,function(e){var o=e.target,n=e.event;t._removeNotification(o),o.triggerEvent(N.Dismiss,n)}),this.view.on(N.Click,function(e){return e.target.triggerEvent(N.Click,e.event)})}return e.prototype.error=function(e){var t=this.normalizeOptions("error",e);return this.open(t)},e.prototype.success=function(e){var t=this.normalizeOptions("success",e);return this.open(t)},e.prototype.open=function(e){var t=this.options.types.find(function(t){return t.type===e.type})||{},o=C(C({},t),e);this.assignProps(["ripple","position","dismissible"],o);var n=new k(o);return this._pushNotification(n),n},e.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},e.prototype.assignProps=function(e,t){var o=this;e.forEach(function(e){t[e]=null==t[e]?o.options[e]:t[e]})},e.prototype._pushNotification=function(e){var t=this;this.notifications.push(e);var o=void 0!==e.options.duration?e.options.duration:this.options.duration;o&&setTimeout(function(){return t._removeNotification(e)},o)},e.prototype._removeNotification=function(e){var t=this.notifications.indexOf(e);-1!==t&&this.notifications.splice(t,1)},e.prototype.normalizeOptions=function(e,t){var o={type:e};return"string"==typeof t?o.message=t:"object"==typeof t&&(o=C(C({},o),t)),o},e.prototype.registerTypes=function(e){var t=(e&&e.types||[]).slice();return B.types.map(function(e){var o=-1;t.forEach(function(t,n){t.type===e.type&&(o=n)});var n=-1!==o?t.splice(o,1)[0]:{};return C(C({},e),n)}).concat(t)},e}(),q={success:function(){},error:function(){}};function j(e){q.success(e)}function F(e){q.error(e)}function Y(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,Y)}function U(e){var t=e.event,o=e.email,n=e.success,i=e.message;n?v.showFormSubmissionNotices&&j(v.successMessage):v.showFormSubmissionNotices&&F(i||v.failureMessage),v.onSubmit({event:t,email:o,success:n,message:i})}function I(e,t){var o=(void 0===t?{}:t).dontRecordCloseDate;e&&e.preventDefault(),o||(u.bottomBarClosedDate=Date.now()),v.BOTTOM_BAR_ELEM.classList.remove("show"),document.body.classList.remove(v.BODY_CLASS_BOTTOM_BAR_OPEN)}if(e(function(){q=new D({duration:8e3,position:{x:"center",y:"bottom"},dismissible:!0})}),"undefined"!=typeof window){var V={get passive(){}};window.addEventListener("testPassive",null,V),window.removeEventListener("testPassive",null,V)}function H(e){if(e.preventDefault(),v.showDebugNotice&&console.log("Polite: Submit Started"),e.currentTarget.closest(".bottom-bar")?I():e.currentTarget.closest(".email-modal")&&(I(!1,{dontRecordCloseDate:!0}),u.modalClosedDate=Date.now(),$(v.MODAL_ELEM).modal("hide"),$(v.MODAL_ELEM).on("hidden.bs.modal",function(e){document.querySelectorAll(v.FOCUSABLE_SELECTORS).forEach(function(e){return e.removeAttribute("tabindex")}),v.activeElement&&v.activeElement.focus()}),v.isModalOpen=!1,T()),""===e.currentTarget.querySelector(".js-validate-not-robot").value){v.showDebugNotice&&console.log("Polite: No Spam Detected");var t=e.currentTarget.querySelector(v.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR).value;v.serverConfig&&v.serverConfig.token&&v.serverConfig.formAction?function(e){var t=e.event,o=e.email,n=e.token,i=e.formAction;v.showDebugNotice&&console.log("Polite: Submitting to Server");for(var a={authenticity_token:n},s=t.currentTarget.querySelectorAll("input"),r=0;r<s.length;r++)a[s[r].name]=s[r].value;window.jQuery.post({url:i,data:a}).done(function(){v.showFormSubmissionNotices&&j(v.successMessage),v.onSubmit({event:t,email:o,success:!0})}).fail(function(){v.showFormSubmissionNotices&&F(v.failureMessage),v.onSubmit({event:t,email:o,success:!1})})}({event:e,email:t,token:v.serverConfig.token,formAction:v.serverConfig.formAction}):v.mailchimpConfig&&v.mailchimpConfig.spamPreventionKey&&v.mailchimpConfig.formAction?function(e){for(var t=e.event,o=e.email,n=e.spamPreventionKey,i=(e.formAction||"").replace("/post?","/post-json?"),a="",s=t.currentTarget.querySelectorAll("input"),r=0;r<s.length;r++)a+="&"+s[r].name+"="+encodeURIComponent(s[r].value);a+="&"+n+"=";var l=document.createElement("script");l.src=i+a+"&c=mailchimpCallback",document.body.appendChild(l),window.mailchimpCallback=function(e){delete window.mailchimpCallback,document.body.removeChild(l),v.showFormSubmissionNotices&&("success"===e.result?j(v.successMessage):F(v.failureMessage)),v.onSubmit("success"===e.result?{event:t,email:o,success:!0}:{event:t,email:o,success:!1})}}({event:e,email:t,spamPreventionKey:v.mailchimpConfig.spamPreventionKey,formAction:v.mailchimpConfig.formAction}):v.convertKitConfig&&v.convertKitConfig.formAction?function(e){var t,o,n,i,a;o=(t={event:e.event,email:e.email,formAction:e.formAction}).event,n=t.email,i=t.formAction,(a=new FormData).append("email_address",n),a.append("token",""),a.append("user",function(){var e=window.localStorage.getItem("ckid");if(e)return e;var t=Y();return window.localStorage.setItem("ckid",t),t}()),a.append("referrer",document.referrer),fetch(i,{method:"POST",body:a,headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){"success"===e.status?U({event:o,email:n,success:!0}):e.errors.fields.includes("email_address")?U({event:o,email:n,success:!1,message:"Sign up failed: <br>Invalid email address"}):U({event:o,email:n,success:!1})}).catch(function(e){U({event:o,email:n,success:!1})})}({event:e,email:t,formAction:v.convertKitConfig.formAction}):(v.showFormSubmissionNotices&&j(v.successMessage),v.onSubmit({event:e,email:t}))}else v.showDebugNotice&&console.log("Polite: SPAM DETECTED!")}function X(t){e(function(){var e,o,n,i,a,s,r;e=t,o={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:function(){},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",showFormSubmissionNotices:!0,successMessage:"Thank you signing up!",failureMessage:"Sorry, sign up failed...",mailchimpConfig:{},convertKitConfig:{},serverConfig:{},SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",BOTTOM_BAR_ELEM_SELECTOR:".bottom-bar",BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",BOTTOM_BAR_FORM_ELEM_SELECTOR:"form.bottom-bar__content",BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR:".bottom-bar__close",DEBUG_ELEM:".polite-email-popup__debug-notice",DEBUG_ELEM_RESET_SELECTOR:".debug-email-forms__reset",DEBUG_ELEM_BYPASS_SELECTOR:".debug-email-forms__bypass"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",BODY_CLASS_BOTTOM_BAR_OPEN:"email-bottom-bar-is-open",isModalOpenable:!1,isModalOpen:!1},Object.assign(v,o,e),window.temporaryGlobals=v,M("<style>@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px;font-size:16px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:\"\";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:\"\";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 15px;border-radius:2px;max-width:300px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translateX(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:50ms;animation-delay:50ms}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:0;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:\"\";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:rgba(0,0,0,.15)}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);width:100%}.notyf__dismiss{width:56px}}.bottom-bar{z-index:2147483647;position:fixed;left:0;bottom:0;justify-content:center;width:100%;border-top:1px solid #ddd;background-color:#fff;display:none;line-height:1.4}.bottom-bar button.close{border:none;background:0 0}.bottom-bar form{width:100%}.bottom-bar.show{display:flex}@media (min-width:780px){.bottom-bar .hide-desktop{display:none!important}}@media (max-width:779.9999px){.bottom-bar .hide-mobile{display:none!important}}@media (max-width:990px){.bottom-bar{justify-content:flex-start;padding-left:1.5rem}}@media (max-width:779.9999px){.bottom-bar.show{display:block;justify-content:center;padding-left:0}.bottom-bar .bottom-bar__content{padding:15px 21px 21px 22px}.bottom-bar__bottom{display:flex}.bottom-bar .bottom-bar__sign-up{flex:0 0 auto}.bottom-bar .bottom-bar__label-text{display:block;margin:0 0 12px 0}.bottom-bar .bottom-bar__input{width:100%;max-width:calc(100% - 16px)}.bottom-bar .bottom-bar__close-container{padding:0;transform:translate(0,-100%)}.bottom-bar .bottom-bar__close{padding:7px 17px 7px;border-radius:2px 0 0 0}}.debug-email-forms{display:flex;flex-wrap:wrap;position:fixed;top:18px;right:24px;max-width:600px;padding:16px 21px;font-size:16px;line-height:1.4;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;color:#343a40;background-color:#fff;box-shadow:1px 3px 6px rgba(0,0,0,.25);border-radius:5px}.debug-email-forms .debug-email-forms__stat{width:50%;flex:1 0 auto;margin-bottom:12px}.debug-email-forms .debug-email-forms__stat--buttons{text-align:right}.debug-email-forms .debug-email-forms__reset{margin-right:8px}.debug-email-forms .debug-email-forms__stat-label{font-weight:700;color:#ae3ec9}.debug-email-forms .debug-email-forms__stat-value{white-space:nowrap;font-weight:700;color:#212529}.debug-email-forms .debug-email-forms__stat-requirements{margin:6px 0;padding-left:20px}.debug-email-forms .debug-email-forms__stat-requirement{color:#868e96;font-size:14px}.debug-email-forms .debug-email-forms__stat-value--success{color:#2f9e44}.debug-email-forms .debug-email-forms__stat-value--fail{color:#e03131}</style>"),v.showDebugNotice&&M("<div class='polite-email-popup__debug-notice'></div>"),M((a=(i=v).mainButtonText,'<div class="bottom-bar p-3">\n  <button type="button" class="close d-block d-md-none pull-right bottom-bar__close" aria-label="Close">\n    <span aria-hidden="true">&times;</span>\n  </button>                \n  <form class="bottom-bar__content form-inline d-flex flex-row justify-content-center" method="POST" action="/">\n    <label class="mx-1" for="bottom-bar-email">'+i.headingText+'</label>\n    <input id="bottom-bar-email" class="form-control mx-1 col-md-3 col-6 email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>\n    '+((s=i.serverConfig)&&s.reCaptchaKey?'<button class="g-recaptcha btn btn-primary mx-1" data-callback=\'onSubmitBottomBar\' data-sitekey="'+s.reCaptchaKey+'">'+a+"</button>":'<button class="btn btn-primary mx-1" type="submit">'+a+"</button>")+"<a href='#' class=\"btn btn-white d-none d-md-block mx-1 bottom-bar__close\">"+i.closeButtonText+'</a>\n    <div style="position: absolute; left: -5000px;" aria-hidden="true">\n      <input class="js-validate-not-robot" type="text" tabindex="-1" value="" autocomplete="off">\n    </div>\n  </form>\n</div>')),M(function(e){var t=v.mainButtonText,o=v.serverConfig;return'\n\x3c!-- Modal --\x3e\n<div class="modal email-modal fade onboarding-modal animated" id="email-modal" tabindex="-1" role="dialog" aria-labelledby="email-modal-title" aria-hidden="true" aria-describedby="email-modal-description">\n  <div class="modal-dialog modal-dialog-centered email-modal__top" role="document">\n    <div class="modal-content text-center">\n      <div class="email-modal__top-content">\n        <button aria-label="Close" class="close email-modal__close" data-dismiss="modal" type="button">\n          <span class="close-label">No Thanks</span>\n          <span class="os-icon os-icon-close"></span>\n        </button>\n        <div class="onboarding-media">\n          <img alt="AlliAI" class="email-modal__top-image" src="//static.alliai.com/logo.png">\n        </div>\n      </div>\n      <div class="onboarding-content with-gradient email-modal__input-container">\n        <h4 class="onboarding-title modal-title email-modal__title" id="email-modal-title">'+v.headingText+'</h4>\n        <div class="onboarding-text email-modal__description" id="email-modal-description">'+v.descriptionText+'</div>\n        <form class="email-modal__content" method="POST" action="/">\n          <div class="form-group text-center">\n            <input class="form-control email-modal__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>\n          </div>\n          <div style="position: absolute; left: -5000px;" aria-hidden="true">\n            <input class="js-validate-not-robot" type="text" tabindex="-1" value="" autocomplete="off">\n            <div style="position: absolute; left: -5000px;" aria-hidden="true">\n              <input class="js-validate-not-robot" type="text" tabindex="-1" value="" autocomplete="off">\n            </div>\n          </div>\n          <div class="email-modal__button-container text-center">\n            '+(o&&o.reCaptchaKey?'<button class="g-recaptcha btn btn-primary email-modal__sign-up" data-callback=\'onSubmitModal\' data-sitekey="'+o.reCaptchaKey+'">'+t+"</button>":'<button class="btn btn-primary email-modal__sign-up" type="submit">'+t+"</button>")+'\n            <button type="button" class="btn btn-white email-modal__close" data-dismiss="modal">No Thanks</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n'}()),r=v.SELECTORS,Object.assign(v,{MODAL_ELEM:x(r.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:x(r.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:x(r.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),BOTTOM_BAR_ELEM:x(r.BOTTOM_BAR_ELEM_SELECTOR),BOTTOM_BAR_FORM_ELEM:x(r.BOTTOM_BAR_FORM_ELEM_SELECTOR),BOTTOM_BAR_CLOSE_BUTTON_ELEM:x(r.BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR),DEBUG_NOTICE_ELEM:x(r.DEBUG_ELEM)}),p.on("*",T),A(u.pageViews)?u.pageViews++:u.pageViews=1,A(u.highestScrollPercentageAcrossAllPages)||(u.highestScrollPercentageAcrossAllPages=0),A(u.activeTimeOnSite)||(u.activeTimeOnSite=0),u.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var o=!0,n=!1;return function(){var t=arguments;n||(n=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),n=!1},o?0:1e3),o=!1)}}(function(){var e,t,o;t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),o=window.pageYOffset/(t-document.documentElement.clientHeight),(e=Math.floor(100*o))>u.highestScrollPercentageAcrossAllPages&&(u.highestScrollPercentageAcrossAllPages=e),u.activeTimeOnPage++,u.activeTimeOnSite++})),v.showDebugNotice&&document.addEventListener("click",function(e){e.target.closest(v.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)&&(window.localStorage.clear(),window.location.reload()),e.target.closest(v.SELECTORS.DEBUG_ELEM_BYPASS_SELECTOR)&&(u.pageViews=100,u.activeTimeOnPage=100,u.activeTimeOnSite=100,u.highestScrollPercentageAcrossAllPages=100,u.modalClosedDate=Date.now()-1728e5,u.bottomBarClosedDate=Date.now()-1728e5)}),n=function(){v.isModalOpenable&&(v.activeElement=document.activeElement,$(v.MODAL_ELEM).modal("show"),$(v.MODAL_ELEM).on("shown.bs.modal",function(e){v.MODAL_ELEM.querySelector(v.FOCUSABLE_SELECTORS).focus();var t=document.querySelectorAll(v.FOCUSABLE_SELECTORS),o=v.MODAL_ELEM.querySelectorAll(v.FOCUSABLE_SELECTORS),n=Array.from(o);t.forEach(function(e){n.includes(e)||e.setAttribute("tabindex","-1")})}),v.isModalOpen=!0,T())},document.addEventListener("mouseout",function(e){var t=e.clientY<20,o=null===e.relatedTarget,i="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();t&&o&&i&&n&&n()}),v.MODAL_FORM_ELEM.addEventListener("submit",H),v.BOTTOM_BAR_FORM_ELEM.addEventListener("submit",H),v.BOTTOM_BAR_ELEM.querySelectorAll(v.SELECTORS.BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR).forEach(function(e){e.addEventListener("click",I)})})}"undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window);var z={contentWebsite:function(e){e.websiteType="content",X(e)},marketingWebsite:function(e){e.websiteType="marketing",X(e)}};export default z;
//# sourceMappingURL=polite-email-popup.module.js.map
