var e,t,n=Object.prototype,o=Function.prototype.toString,i=n.hasOwnProperty,a=o.call(Object),r=n.toString,l=(e=Object.getPrototypeOf,t=Object,function(n){return e(t(n))});function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function d(){this.callbacksLookup={}}d.prototype={emit:function(e,t){for(var n,o=this.callbacksLookup["*"]||[],i=c(this.callbacksLookup[e]||[]);!(n=i()).done;)(0,n.value)({name:e,value:t});for(var a,r=c(o);!(a=r()).done;)(0,a.value)({name:e,value:t})},on:function(e,t){for(var n,o=c(Array.isArray(e)?e:[e]);!(n=o()).done;){var i=n.value;this.callbacksLookup[i]||(this.callbacksLookup[i]=[]),this.callbacksLookup[i].push(t)}}};var u=new d;function m(e,t){void 0===t&&(t={}),e=e||"tigerlily";var n=t.defaults,s=void 0===n?{}:n,c=JSON.parse(localStorage.getItem(e)||"{}",g);return c=Object.assign(s,c),new Proxy(c,function t(n){return{get:function(e,o){return E(e[o])?new Proxy(e[o],t(n)):e[o]},set:function(t,s,c){t[s]=c,localStorage.setItem(e,JSON.stringify(n,v));var d=t[s],m=E(d)?JSON.parse(JSON.stringify(d,v),g):d,_=E(c)?JSON.parse(JSON.stringify(c,v),g):c,p=function(e,t){if(e===t)return"";var n="";return function e(t,n,s){s=s||"",Array.isArray(t)?function(t,n,o){t.forEach((t,i,a)=>{const r=`${o}[${i}]`;n.call(a,t,i,a,r),e(a[i],n,r)})}(t,n,s):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=r.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=l(e);if(null===t)return!0;var n=i.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&o.call(n)==a}(t)&&function(t,n,o){for(const i in t){const a=o?`${o}.${i}`:i;n.call(t,t[i],i,t,a),e(t[i],n,a)}}(t,n,s)}(e,function(e,o,i,a){e===t&&(n=a)}),n}(n,c)||s;return u.emit(p,{prop:s,path:p,oldValue:m,value:_}),!0}}}(c))}function E(e){return"object"==typeof e&&null!==e&&!(e instanceof Date)}function v(e,t){if(this[e]instanceof Date){var n=this[e].getTime();return n?{__isDate:!0,ms:n}:void 0}return t}function g(e,t){return E(t)&&t.__isDate?new Date(t.ms):t}let _;m.on=function(e,t){u.on(e,function(e){t(e.value)})},_||(_=m("polite-email-popup")),window.persistentGlobals=_;var p={};const b={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:3,aggressive:2}},activeTimeOnPage:{content:{notAggressive:8,aggressive:6},marketing:{notAggressive:8,aggressive:6}},activeTimeOnSite:{content:{notAggressive:30,aggressive:20},marketing:{notAggressive:30,aggressive:20}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:0,aggressive:0}}};function f(){let e=p.websiteType,t=p.beSlightlyMoreAggressive?"aggressive":"notAggressive";const n={pageViews:b.pageViews[e][t],activeTimeOnPage:b.activeTimeOnPage[e][t],activeTimeOnSite:b.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:b.highestScrollPercentageAcrossAllPages[e][t]};return Object.keys(n).every(e=>_[e]>=n[e])}let O={};function L(e){return O[e]||document.querySelector(e)}function S(e){return"number"==typeof e&&!Number.isNaN(e)}function T(e){document.body.insertAdjacentHTML("beforeend",e)}function A(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var h=!1;if("undefined"!=typeof window){var y={get passive(){h=!0}};window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}var M="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),w=[],C=!1,D=-1,P=void 0,N=void 0,R=function(e){return w.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},I=function(e){var t=e||window.event;return!!R(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};function B(){document.body.classList.remove(p.BODY_CLASS_MODAL_OPEN),p.MODAL_ELEM.style.display="none",document.querySelectorAll(p.FOCUSABLE_SELECTORS).forEach(e=>e.removeAttribute("tabindex")),document.querySelectorAll("body > [aria-hidden]").forEach(e=>e.removeAttribute("aria-hidden")),p.MODAL_ELEM.setAttribute("aria-hidden","true"),p.activeElement&&p.activeElement.focus(),function(e){if(M){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,w=w.filter(function(t){return t.targetElement!==e}),C&&0===w.length&&(document.removeEventListener("touchmove",I,h?{passive:!1}:void 0),C=!1)}else(w=w.filter(function(t){return t.targetElement!==e})).length||setTimeout(function(){void 0!==N&&(document.body.style.paddingRight=N,N=void 0),void 0!==P&&(document.body.style.overflow=P,P=void 0)})}(p.MODAL_ELEM)}function x(e){var t;t=()=>{var t;m.on("*",function({prop:e,path:t,oldValue:n,value:o}){console.log("*",{prop:e,path:t,oldValue:n,value:o}),console.log({meetsTriggerRequirements:f()})}),function(e){const t={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:()=>{console.log("Event: Email form submitted")},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",DEBUG_ELEM_RESET_SELECTOR:".debug-emails-forms__reset"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",DEBUG_UNIT_PAGE_VIEWS:"",DEBUG_UNIT_HIGHEST_SCROLL_PERCENTAGE:"%",DEBUG_UNIT_ACTIVE_TIME_ON_SITE:"s",DEBUG_UNIT_ACTIVE_TIME_ON_PAGE:"s"};if(Object.assign(p,t,e),p.websiteType=p.websiteType.toLowerCase(),"content"!==p.websiteType&&"marketing"!==p.websiteType)throw Error("websiteType must be set to either 'content' or 'marketing'");window.temporaryGlobals=p}(e),S(_.pageViews)?_.pageViews++:_.pageViews=1,S(_.highestScrollPercentageAcrossAllPages)||(_.highestScrollPercentageAcrossAllPages=0),S(_.activeTimeOnSite)||(_.activeTimeOnSite=0),_.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var n=!0,o=!1;return function(){var t=arguments;o||(o=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),o=!1},n?0:1e3),n=!1)}}(function(){!function(){let e=function(){let e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),t=window.pageYOffset/(e-document.documentElement.clientHeight);return Math.floor(100*t)}();e>_.highestScrollPercentageAcrossAllPages&&(_.highestScrollPercentageAcrossAllPages=e)}(),_.activeTimeOnPage++,_.activeTimeOnSite++})),p.showDebugNotice&&T('<div class="debug-emails-forms">\n    <div>\n      <b>Page views: </b><span data-event-name="pageViews">0</span>\n    </div>\n    <div>\n      <b>Scroll percentage: </b><span data-event-name="highestScrollPercentage">0%</span>\n    </div>\n    <div>\n      <b>Time on site: </b><span data-event-name="activeTimeOnSite">0s</span>\n    </div>\n    <div>\n      <b>Time on page: </b><span data-event-name="activeTimeOnPage">0s</span>\n    </div>\n    <div>\n      <b>Saw modal: </b><span>never</span>\n    </div>\n    <div>\n      <b>Closed modal: </b><span>never</span>\n    </div>\n    <div>\n      <b>Closed bottom bar: </b><span>never</span>\n    </div>\n    <div>\n      <b>Modal is openable: </b><span data-event-name="modalIsOpenable">false</span>\n    </div>\n    <button class="debug-emails-forms__reset" type="button">Reset</button>\n  </div>'),T(function({imageSrc:e,headingText:t,descriptionText:n,mainButtonText:o}){return`\n<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true" style="display: none">\n  <form class="email-modal__content" method="POST" action="/">\n    <div class="email-modal__top">\n      <div class="email-modal__top-media">\n        <img class="email-modal__top-image" src="${e}">\n      </div>\n      <div class="email-modal__top-content">\n        <h2 class="email-modal__title" id="email-modal-title">${t}</h2>\n        <p class="email-modal__description" id="email-modal-description">${n}</p>\n      </div>\n    </div>\n    <div class="email-modal__input-container">\n      <input class="email-modal__input email-signup-form-input" type="email" value="" placeholder="email@example.com">\n    </div>\n    <div class="email-modal__button-container">\n      <button class="email-modal__sign-up" type="submit">${o}</button>\n    </div>\n    <button class="email-modal__close" type="button"></button>\n  </form>\n</div>\n`}(p)),T(function({headingText:e,mainButtonText:t,closeButtonText:n}){return`<div class="bottom-bar">\n  <form class="bottom-bar__content" method="POST" action="/">\n    <label class="bottom-bar__label">\n      <span class="bottom-bar__label-text">${e}</span>\n      <input class="bottom-bar__input email-signup-form-input" type="email" value="" placeholder="you@example.com">\n    </label>\n    <button class="bottom-bar__sign-up" type="submit">${t}</button>\n  </form>\n  <div class="bottom-bar__close-container">\n    <button class="bottom-bar__close" type="button">${n}</button>\n  </div>\n</div>`}(p)),function(){let{SELECTORS:e}=p;Object.assign(p,{MODAL_ELEM:L(e.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:L(e.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:L(e.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),DEBUG_RESET_ELEM:L(e.DEBUG_ELEM_RESET_SELECTOR)})}(),p.showDebugNotice&&p.DEBUG_RESET_ELEM.addEventListener("click",e=>{window.localStorage.clear(),window.location.reload()}),t=()=>{_.isModalOpenable&&function(){p.activeElement=document.activeElement,p.MODAL_ELEM.style.display="flex",document.body.classList.add(p.BODY_CLASS_MODAL_OPEN),p.MODAL_ELEM.querySelector(p.FOCUSABLE_SELECTORS).focus();const e=document.querySelectorAll(p.FOCUSABLE_SELECTORS),t=globals.modalElem.querySelectorAll(p.FOCUSABLE_SELECTORS),n=Array.from(t);e.forEach(e=>{n.includes(e)||e.setAttribute("tabindex","-1")}),p.MODAL_ELEM.removeAttribute("aria-hidden"),Array.from(document.body.children).forEach(e=>{e!==p.MODAL_ELEM&&e.setAttribute("aria-hidden","true")}),function(e,t){if(M){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!w.some(function(t){return t.targetElement===e})){var n={targetElement:e,options:{}};w=[].concat(A(w),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(D=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-D;!R(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?I(e):e.stopPropagation())}(t,e)},C||(document.addEventListener("touchmove",I,h?{passive:!1}:void 0),C=!0)}}else{setTimeout(function(){void 0===N&&(window,document),void 0===P&&(P=document.body.style.overflow,document.body.style.overflow="hidden")});var o={targetElement:e,options:{}};w=[].concat(A(w),[o])}}(p.MODAL_ELEM)}()},document.addEventListener("mouseout",function(e){let n=e.clientY<20,o=null===e.relatedTarget,i="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();n&&o&&i&&t&&t()}),p.MODAL_ELEM.addEventListener("click",e=>function({event:e}){e.target.closest(p.SELECTORS.MODAL_FORM_ELEM_SELECTOR)||B()}({event:e})),p.MODAL_FORM_ELEM.addEventListener("submit",e=>function({event:e}){e.preventDefault();let t=e.currentTarget.querySelector(p.SELECTORS.MODAL_FORM_INPUT_ELEM_SELECTOR);p.onSubmit({event:e,email:t.value}),B()}({event:e})),p.MODAL_CLOSE_BUTTON_ELEM.addEventListener("click",()=>B()),document.addEventListener("keydown",e=>function({event:e}){27===e.keyCode&&document.body.classList.contains(p.BODY_CLASS_MODAL_OPEN)&&B()}({event:e}))},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}var U={WEBSITE_TYPES:{CONTENT:"CONTENT",MARKETING:"MARKETING"},FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,MODAL_ELEM_SELECTOR:".email-modal",MODAL_ELEM_FORM_SELECTOR:".email-modal__content",MODAL_ELEM_CLOSE_BUTTON_SELECTOR:".email-modal__close",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",MODAL_IS_OPENABLE:!1,SITE_PAGE_VIEWS:0,HIGHEST_SCROLL_PERCENTAGE:0,ACTIVE_TIME_ON_SITE:0,ACTIVE_TIME_ON_PAGE:0,setActiveElement(e){this.activeElement=e},getActiveElement(){return this.activeElement},setModalAsOpenable(){this.MODAL_IS_OPENABLE=!0,MiniEvents.trigger("MODAL_IS_OPENABLE",!0)},isModalOpenable(){return this.MODAL_IS_OPENABLE}},k={contentWebsite:function(e){e.websiteType=U.WEBSITE_TYPES.CONTENT,x(e)},marketingWebsite:function(e){e.websiteType=U.WEBSITE_TYPES.MARKETING,x(e)}};export default k;
//# sourceMappingURL=polite-email-popup.modern.js.map
