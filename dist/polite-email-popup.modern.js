var e,t,n=Object.prototype,a=Function.prototype.toString,i=n.hasOwnProperty,o=a.call(Object),s=n.toString,r=(e=Object.getPrototypeOf,t=Object,function(n){return e(t(n))});function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function u(){this.callbacksLookup={}}u.prototype={emit:function(e,t){for(var n,a=this.callbacksLookup["*"]||[],i=c(this.callbacksLookup[e]||[]);!(n=i()).done;)(0,n.value)({name:e,value:t});for(var o,s=c(a);!(o=s()).done;)(0,o.value)({name:e,value:t})},on:function(e,t){for(var n,a=c(Array.isArray(e)?e:[e]);!(n=a()).done;){var i=n.value;this.callbacksLookup[i]||(this.callbacksLookup[i]=[]),this.callbacksLookup[i].push(t)}}};var m=new u;function d(e,t){void 0===t&&(t={}),e=e||"tigerlily";var n=t.defaults,l=void 0===n?{}:n,c=JSON.parse(localStorage.getItem(e)||"{}",E);return c=Object.assign(l,c),new Proxy(c,function t(n){return{get:function(e,a){return g(e[a])?new Proxy(e[a],t(n)):e[a]},set:function(t,l,c){t[l]=c,localStorage.setItem(e,JSON.stringify(n,_));var u=t[l],d=g(u)?JSON.parse(JSON.stringify(u,_),E):u,v=g(c)?JSON.parse(JSON.stringify(c,_),E):c,b=function(e,t){if(e===t)return"";var n="";return function e(t,n,l){l=l||"",Array.isArray(t)?function(t,n,a){t.forEach((t,i,o)=>{const s=`${a}[${i}]`;n.call(o,t,i,o,s),e(o[i],n,s)})}(t,n,l):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=s.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=r(e);if(null===t)return!0;var n=i.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==o}(t)&&function(t,n,a){for(const i in t){const o=a?`${a}.${i}`:i;n.call(t,t[i],i,t,o),e(t[i],n,o)}}(t,n,l)}(e,function(e,a,i,o){e===t&&(n=o)}),n}(n,c)||l;return m.emit(b,{prop:l,path:b,oldValue:d,value:v}),!0}}}(c))}function g(e){return Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)}function _(e,t){if(this[e]instanceof Date){var n=this[e].getTime();return n?{__isDate:!0,ms:n}:void 0}return t}function E(e,t){return g(t)&&t.__isDate?new Date(t.ms):t}let v;d.on=function(e,t){m.on(e,function(e){t(e.value)})},v||(v=d("polite-email-popup")),window.persistentGlobals=v;var b={};const f={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:3,aggressive:2}},activeTimeOnPage:{content:{notAggressive:8,aggressive:6},marketing:{notAggressive:8,aggressive:6}},activeTimeOnSite:{content:{notAggressive:30,aggressive:20},marketing:{notAggressive:30,aggressive:20}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:0,aggressive:0}}},p={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnPage:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnSite:{content:{notAggressive:15,aggressive:10},marketing:{notAggressive:15,aggressive:10}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:25,aggressive:20},marketing:{notAggressive:25,aggressive:20}}};let O={};function A(e){return O[e]||document.querySelector(e)}function S(e){return"number"==typeof e&&!Number.isNaN(e)}function T(e){document.body.insertAdjacentHTML("beforeend",e)}function L(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var h=!1;if("undefined"!=typeof window){var M={get passive(){h=!0}};window.addEventListener("testPassive",null,M),window.removeEventListener("testPassive",null,M)}var y="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),w=[],P=!1,B=-1,R=void 0,C=void 0,D=function(e){return w.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},N=function(e){var t=e||window.event;return!!D(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};function q(){document.body.classList.remove(b.BODY_CLASS_MODAL_OPEN),b.MODAL_ELEM.style.display="none",document.querySelectorAll(b.FOCUSABLE_SELECTORS).forEach(e=>e.removeAttribute("tabindex")),document.querySelectorAll("body > [aria-hidden]").forEach(e=>e.removeAttribute("aria-hidden")),b.MODAL_ELEM.setAttribute("aria-hidden","true"),b.activeElement&&b.activeElement.focus(),function(e){if(y){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,w=w.filter(function(t){return t.targetElement!==e}),P&&0===w.length&&(document.removeEventListener("touchmove",N,h?{passive:!1}:void 0),P=!1)}else(w=w.filter(function(t){return t.targetElement!==e})).length||setTimeout(function(){void 0!==C&&(document.body.style.paddingRight=C,C=void 0),void 0!==R&&(document.body.style.overflow=R,R=void 0)})}(b.MODAL_ELEM)}function I(e){var t;t=()=>{var t;!function(e){const t={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:()=>{console.log("Event: Email form submitted")},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",BOTTOM_BAR_ELEM_SELECTOR:".bottom-bar",DEBUG_ELEM:".polite-email-popup__debug-notice",DEBUG_ELEM_RESET_SELECTOR:".debug-email-forms__reset"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",BODY_CLASS_BOTTOM_BAR_OPEN:"email-bottom-bar-is-open",DEBUG_UNIT_PAGE_VIEWS:"",DEBUG_UNIT_HIGHEST_SCROLL_PERCENTAGE:"%",DEBUG_UNIT_ACTIVE_TIME_ON_SITE:"s",DEBUG_UNIT_ACTIVE_TIME_ON_PAGE:"s"};if(Object.assign(b,t,e),b.websiteType=b.websiteType.toLowerCase(),"content"!==b.websiteType&&"marketing"!==b.websiteType)throw Error("websiteType must be set to either 'content' or 'marketing'");window.temporaryGlobals=b}(e),S(v.pageViews)?v.pageViews++:v.pageViews=1,S(v.highestScrollPercentageAcrossAllPages)||(v.highestScrollPercentageAcrossAllPages=0),S(v.activeTimeOnSite)||(v.activeTimeOnSite=0),v.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var n=!0,a=!1;return function(){var t=arguments;a||(a=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),a=!1},n?0:1e3),n=!1)}}(function(){!function(){let e=function(){let e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),t=window.pageYOffset/(e-document.documentElement.clientHeight);return Math.floor(100*t)}();e>v.highestScrollPercentageAcrossAllPages&&(v.highestScrollPercentageAcrossAllPages=e)}(),v.activeTimeOnPage++,v.activeTimeOnSite++})),b.showDebugNotice&&T("<div class='polite-email-popup__debug-notice'></div>"),T(function({imageSrc:e,headingText:t,descriptionText:n,mainButtonText:a}){return`\n<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true">\n  <form class="email-modal__content" method="POST" action="/">\n    <div class="email-modal__top">\n      <div class="email-modal__top-media">\n        <img class="email-modal__top-image" src="${e}">\n      </div>\n      <div class="email-modal__top-content">\n        <h2 class="email-modal__title" id="email-modal-title">${t}</h2>\n        <p class="email-modal__description" id="email-modal-description">${n}</p>\n      </div>\n    </div>\n    <div class="email-modal__input-container">\n      <input class="email-modal__input email-signup-form-input" type="email" value="" placeholder="email@example.com">\n    </div>\n    <div class="email-modal__button-container">\n      <button class="email-modal__sign-up" type="submit">${a}</button>\n    </div>\n    <button class="email-modal__close" type="button"></button>\n  </form>\n</div>\n`}(b)),T(function({headingText:e,mainButtonText:t,closeButtonText:n}){return`<div class="bottom-bar" aria-hidden="true">\n  <form class="bottom-bar__content" method="POST" action="/">\n    <label class="bottom-bar__label">\n      <span class="bottom-bar__label-text">${e}</span>\n      <input class="bottom-bar__input email-signup-form-input" type="email" value="" placeholder="you@example.com">\n    </label>\n    <button class="bottom-bar__sign-up" type="submit">${t}</button>\n  </form>\n  <div class="bottom-bar__close-container">\n    <button class="bottom-bar__close" type="button">${n}</button>\n  </div>\n</div>`}(b)),function(){let{SELECTORS:e}=b;Object.assign(b,{MODAL_ELEM:A(e.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:A(e.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:A(e.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),BOTTOM_BAR_ELEM:A(e.BOTTOM_BAR_ELEM_SELECTOR),DEBUG_NOTICE_ELEM:A(e.DEBUG_ELEM)})}(),b.showDebugNotice&&document.addEventListener("click",e=>{e.target.closest(b.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)&&(window.localStorage.clear(),window.location.reload())}),t=()=>{b.isModalOpenable&&function(){b.activeElement=document.activeElement,b.MODAL_ELEM.classList.add("show"),document.body.classList.add(b.BODY_CLASS_MODAL_OPEN),b.MODAL_ELEM.querySelector(b.FOCUSABLE_SELECTORS).focus();const e=document.querySelectorAll(b.FOCUSABLE_SELECTORS),t=b.MODAL_ELEM.querySelectorAll(b.FOCUSABLE_SELECTORS),n=Array.from(t);e.forEach(e=>{n.includes(e)||e.setAttribute("tabindex","-1")}),b.MODAL_ELEM.removeAttribute("aria-hidden"),Array.from(document.body.children).forEach(e=>{e!==b.MODAL_ELEM&&e.setAttribute("aria-hidden","true")}),function(e,t){if(y){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!w.some(function(t){return t.targetElement===e})){var n={targetElement:e,options:{}};w=[].concat(L(w),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(B=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-B;!D(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?N(e):e.stopPropagation())}(t,e)},P||(document.addEventListener("touchmove",N,h?{passive:!1}:void 0),P=!0)}}else{setTimeout(function(){void 0===C&&(window,document),void 0===R&&(R=document.body.style.overflow,document.body.style.overflow="hidden")});var a={targetElement:e,options:{}};w=[].concat(L(w),[a])}}(b.MODAL_ELEM)}()},document.addEventListener("mouseout",function(e){let n=e.clientY<20,a=null===e.relatedTarget,i="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();n&&a&&i&&t&&t()}),b.MODAL_ELEM.addEventListener("click",e=>function({event:e}){e.target.closest(b.SELECTORS.MODAL_FORM_ELEM_SELECTOR)||q()}({event:e})),b.MODAL_FORM_ELEM.addEventListener("submit",e=>function({event:e}){e.preventDefault();let t=e.currentTarget.querySelector(b.SELECTORS.MODAL_FORM_INPUT_ELEM_SELECTOR);b.onSubmit({event:e,email:t.value}),q()}({event:e})),b.MODAL_CLOSE_BUTTON_ELEM.addEventListener("click",()=>q()),document.addEventListener("keydown",e=>function({event:e}){27===e.keyCode&&document.body.classList.contains(b.BODY_CLASS_MODAL_OPEN)&&q()}({event:e})),d.on("*",function({}){let[e,t,n]=function(){let[e,t]=function(){let e=b.websiteType,t=b.beSlightlyMoreAggressive?"aggressive":"notAggressive";return[{pageViews:f.pageViews[e][t],activeTimeOnPage:f.activeTimeOnPage[e][t],activeTimeOnSite:f.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:f.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:v.pageViews,activeTimeOnPage:v.activeTimeOnPage,activeTimeOnSite:v.activeTimeOnSite,highestScrollPercentageAcrossAllPages:v.highestScrollPercentageAcrossAllPages}]}();return[Object.keys(e).every(n=>t[n]>=e[n]),e,t]}(),[a,i,o]=function(){let[e,t]=function(){let e=b.websiteType,t=b.beSlightlyMoreAggressive?"aggressive":"notAggressive";return[{pageViews:p.pageViews[e][t],activeTimeOnPage:p.activeTimeOnPage[e][t],activeTimeOnSite:p.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:p.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:v.pageViews,activeTimeOnPage:v.activeTimeOnPage,activeTimeOnSite:v.activeTimeOnSite,highestScrollPercentageAcrossAllPages:v.highestScrollPercentageAcrossAllPages}]}();return[Object.keys(e).every(n=>t[n]>=e[n]),e,t]}();e&&(b.isModalOpenable=!0),a&&console.log("OPEN BOTTOM BAR"),b.showDebugNotice&&(console.log(123,{modalRequirements:t,modalActualValues:n,modalMeetsRequirements:e,bottomBarRequirements:i,bottomBarActualValues:o,bottomBarMeetsRequirements:a}),function({modalRequirements:e,modalActualValues:t,modalMeetsRequirements:n,bottomBarRequirements:a,bottomBarActualValues:i,bottomBarMeetsRequirements:o}){b.DEBUG_NOTICE_ELEM.innerHTML=function({modalRequirements:e,modalActualValues:t,modalMeetsRequirements:n,bottomBarRequirements:a}){return console.log({bottomBarRequirements:a}),`<div class="debug-email-forms">\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Website type: </span>\n    <span class="debug-email-forms__stat-value">${b.websiteType.charAt(0).toUpperCase()+b.websiteType.slice(1)} website</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Page views: </span>\n    <span class="debug-email-forms__stat-value">${t.pageViews}</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.pageViews}</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${a.pageViews}</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>\n    <span class="debug-email-forms__stat-value">${t.highestScrollPercentageAcrossAllPages}% </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.highestScrollPercentageAcrossAllPages}%</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${a.highestScrollPercentageAcrossAllPages}%</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on site: </span>\n    <span class="debug-email-forms__stat-value">${t.activeTimeOnSite}s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.activeTimeOnSite}s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${a.activeTimeOnSite}s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on page: </span>\n    <span class="debug-email-forms__stat-value">${t.activeTimeOnPage}s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.activeTimeOnPage}s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${a.activeTimeOnPage}s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Closed modal: </span>\n    <span class="debug-email-forms__stat-value">never</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Closed bottom bar: </span>\n    <span class="debug-email-forms__stat-value">never</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal is openable: </span>\n    ${n?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>'}\n  </div>\n  <button class="debug-email-forms__reset" type="button">Reset</button>\n</div>`}({modalRequirements:e,modalActualValues:t,modalMeetsRequirements:n,bottomBarRequirements:a,bottomBarActualValues:i,bottomBarMeetsRequirements:o})}({modalRequirements:t,modalActualValues:n,modalMeetsRequirements:e,bottomBarRequirements:i,bottomBarActualValues:o,bottomBarMeetsRequirements:a}))})},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}var V={WEBSITE_TYPES:{CONTENT:"CONTENT",MARKETING:"MARKETING"},FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,MODAL_ELEM_SELECTOR:".email-modal",MODAL_ELEM_FORM_SELECTOR:".email-modal__content",MODAL_ELEM_CLOSE_BUTTON_SELECTOR:".email-modal__close",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",MODAL_IS_OPENABLE:!1,SITE_PAGE_VIEWS:0,HIGHEST_SCROLL_PERCENTAGE:0,ACTIVE_TIME_ON_SITE:0,ACTIVE_TIME_ON_PAGE:0,setActiveElement(e){this.activeElement=e},getActiveElement(){return this.activeElement},setModalAsOpenable(){this.MODAL_IS_OPENABLE=!0,MiniEvents.trigger("MODAL_IS_OPENABLE",!0)},isModalOpenable(){return this.MODAL_IS_OPENABLE}},k={contentWebsite:function(e){e.websiteType=V.WEBSITE_TYPES.CONTENT,I(e)},marketingWebsite:function(e){e.websiteType=V.WEBSITE_TYPES.MARKETING,I(e)}};export default k;
//# sourceMappingURL=polite-email-popup.modern.js.map
