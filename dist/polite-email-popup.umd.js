!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).politeEmailPopup=t()}(this,function(){var e,t,n=Object.prototype,a=Function.prototype.toString,i=n.hasOwnProperty,o=a.call(Object),s=n.toString,r=(e=Object.getPrototypeOf,t=Object,function(n){return e(t(n))});function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function u(){this.callbacksLookup={}}u.prototype={emit:function(e,t){for(var n,a=this.callbacksLookup["*"]||[],i=c(this.callbacksLookup[e]||[]);!(n=i()).done;)(0,n.value)({name:e,value:t});for(var o,s=c(a);!(o=s()).done;)(0,o.value)({name:e,value:t})},on:function(e,t){for(var n,a=c(Array.isArray(e)?e:[e]);!(n=a()).done;){var i=n.value;this.callbacksLookup[i]||(this.callbacksLookup[i]=[]),this.callbacksLookup[i].push(t)}}};var m,d=new u;function g(e,t){void 0===t&&(t={}),e=e||"tigerlily";var n=t.defaults,l=void 0===n?{}:n,c=JSON.parse(localStorage.getItem(e)||"{}",b);return c=Object.assign(l,c),new Proxy(c,function t(n){return{get:function(e,a){return v(e[a])?new Proxy(e[a],t(n)):e[a]},set:function(t,l,c){t[l]=c,localStorage.setItem(e,JSON.stringify(n,_));var u=t[l],m=v(u)?JSON.parse(JSON.stringify(u,_),b):u,g=v(c)?JSON.parse(JSON.stringify(c,_),b):c,f=function(e,t){if(e===t)return"";var n="";return function e(t,n,l){l=l||"",Array.isArray(t)?function(t,n,a){t.forEach((t,i,o)=>{const s=`${a}[${i}]`;n.call(o,t,i,o,s),e(o[i],n,s)})}(t,n,l):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=s.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=r(e);if(null===t)return!0;var n=i.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==o}(t)&&function(t,n,a){for(const i in t){const o=a?`${a}.${i}`:i;n.call(t,t[i],i,t,o),e(t[i],n,o)}}(t,n,l)}(e,function(e,a,i,o){e===t&&(n=o)}),n}(n,c)||l;return d.emit(f,{prop:l,path:f,oldValue:m,value:g}),!0}}}(c))}function v(e){return Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)}function _(e,t){if(this[e]instanceof Date){var n=this[e].getTime();return n?{__isDate:!0,ms:n}:void 0}return t}function b(e,t){return v(t)&&t.__isDate?new Date(t.ms):t}g.on=function(e,t){d.on(e,function(e){t(e.value)})},m||(m=g("polite-email-popup")),window.persistentGlobals=m;var f={},p={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:3,aggressive:2}},activeTimeOnPage:{content:{notAggressive:8,aggressive:6},marketing:{notAggressive:8,aggressive:6}},activeTimeOnSite:{content:{notAggressive:30,aggressive:20},marketing:{notAggressive:30,aggressive:20}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:0,aggressive:0}}},E={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnPage:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnSite:{content:{notAggressive:15,aggressive:10},marketing:{notAggressive:15,aggressive:10}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:25,aggressive:20},marketing:{notAggressive:25,aggressive:20}}},O={};function A(e){return O[e]||document.querySelector(e)}function S(e){return"number"==typeof e&&!Number.isNaN(e)}function T(e){document.body.insertAdjacentHTML("beforeend",e)}function h(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var L=!1;if("undefined"!=typeof window){var y={get passive(){L=!0}};window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}var M="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),w=[],P=!1,B=-1,R=void 0,D=void 0,C=function(e){return w.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},q=function(e){var t=e||window.event;return!!C(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};function N(){document.body.classList.remove(f.BODY_CLASS_MODAL_OPEN),f.MODAL_ELEM.style.display="none",document.querySelectorAll(f.FOCUSABLE_SELECTORS).forEach(function(e){return e.removeAttribute("tabindex")}),document.querySelectorAll("body > [aria-hidden]").forEach(function(e){return e.removeAttribute("aria-hidden")}),f.MODAL_ELEM.setAttribute("aria-hidden","true"),f.activeElement&&f.activeElement.focus(),function(e){if(M){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,w=w.filter(function(t){return t.targetElement!==e}),P&&0===w.length&&(document.removeEventListener("touchmove",q,L?{passive:!1}:void 0),P=!1)}else(w=w.filter(function(t){return t.targetElement!==e})).length||setTimeout(function(){void 0!==D&&(document.body.style.paddingRight=D,D=void 0),void 0!==R&&(document.body.style.overflow=R,R=void 0)})}(f.MODAL_ELEM)}function k(e){var t;t=function(){var t,n,a;!function(e){var t={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:function(){console.log("Event: Email form submitted")},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",BOTTOM_BAR_ELEM_SELECTOR:".bottom-bar",DEBUG_ELEM:".polite-email-popup__debug-notice",DEBUG_ELEM_RESET_SELECTOR:".debug-email-forms__reset"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",BODY_CLASS_BOTTOM_BAR_OPEN:"email-bottom-bar-is-open",DEBUG_UNIT_PAGE_VIEWS:"",DEBUG_UNIT_HIGHEST_SCROLL_PERCENTAGE:"%",DEBUG_UNIT_ACTIVE_TIME_ON_SITE:"s",DEBUG_UNIT_ACTIVE_TIME_ON_PAGE:"s"};if(Object.assign(f,t,e),f.websiteType=f.websiteType.toLowerCase(),"content"!==f.websiteType&&"marketing"!==f.websiteType)throw Error("websiteType must be set to either 'content' or 'marketing'");window.temporaryGlobals=f}(e),S(m.pageViews)?m.pageViews++:m.pageViews=1,S(m.highestScrollPercentageAcrossAllPages)||(m.highestScrollPercentageAcrossAllPages=0),S(m.activeTimeOnSite)||(m.activeTimeOnSite=0),m.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var n=!0,a=!1;return function(){var t=arguments;a||(a=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),a=!1},n?0:1e3),n=!1)}}(function(){var e,t,n;t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),n=window.pageYOffset/(t-document.documentElement.clientHeight),(e=Math.floor(100*n))>m.highestScrollPercentageAcrossAllPages&&(m.highestScrollPercentageAcrossAllPages=e),m.activeTimeOnPage++,m.activeTimeOnSite++})),f.showDebugNotice&&T("<div class='polite-email-popup__debug-notice'></div>"),T('\n<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true">\n  <form class="email-modal__content" method="POST" action="/">\n    <div class="email-modal__top">\n      <div class="email-modal__top-media">\n        <img class="email-modal__top-image" src="'+(t=f).imageSrc+'">\n      </div>\n      <div class="email-modal__top-content">\n        <h2 class="email-modal__title" id="email-modal-title">'+t.headingText+'</h2>\n        <p class="email-modal__description" id="email-modal-description">'+t.descriptionText+'</p>\n      </div>\n    </div>\n    <div class="email-modal__input-container">\n      <input class="email-modal__input email-signup-form-input" type="email" value="" placeholder="you@example.com">\n    </div>\n    <div class="email-modal__button-container">\n      <button class="email-modal__sign-up" type="submit">'+t.mainButtonText+'</button>\n    </div>\n    <button class="email-modal__close" type="button"></button>\n  </form>\n</div>\n'),T(function(e){return'<div class="bottom-bar" aria-hidden="true">\n  <form class="bottom-bar__content" method="POST" action="/">\n    <label class="bottom-bar__label">\n      <span class="bottom-bar__label-text">'+e.headingText+'</span>\n      <input class="bottom-bar__input email-signup-form-input" type="email" value="" placeholder="you@example.com">\n    </label>\n    <button class="bottom-bar__sign-up" type="submit">'+e.mainButtonText+'</button>\n  </form>\n  <div class="bottom-bar__close-container">\n    <button class="bottom-bar__close" type="button">'+e.closeButtonText+"</button>\n  </div>\n</div>"}(f)),n=f.SELECTORS,Object.assign(f,{MODAL_ELEM:A(n.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:A(n.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:A(n.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),BOTTOM_BAR_ELEM:A(n.BOTTOM_BAR_ELEM_SELECTOR),DEBUG_NOTICE_ELEM:A(n.DEBUG_ELEM)}),f.showDebugNotice&&document.addEventListener("click",function(e){e.target.closest(f.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)&&(window.localStorage.clear(),window.location.reload())}),a=function(){f.isModalOpenable&&function(){f.activeElement=document.activeElement,f.MODAL_ELEM.classList.add("show"),document.body.classList.add(f.BODY_CLASS_MODAL_OPEN),f.MODAL_ELEM.querySelector(f.FOCUSABLE_SELECTORS).focus();var e=document.querySelectorAll(f.FOCUSABLE_SELECTORS),t=f.MODAL_ELEM.querySelectorAll(f.FOCUSABLE_SELECTORS),n=Array.from(t);e.forEach(function(e){n.includes(e)||e.setAttribute("tabindex","-1")}),f.MODAL_ELEM.removeAttribute("aria-hidden"),Array.from(document.body.children).forEach(function(e){e!==f.MODAL_ELEM&&e.setAttribute("aria-hidden","true")}),function(e,t){if(M){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!w.some(function(t){return t.targetElement===e})){var n={targetElement:e,options:{}};w=[].concat(h(w),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(B=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-B;!C(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?q(e):e.stopPropagation())}(t,e)},P||(document.addEventListener("touchmove",q,L?{passive:!1}:void 0),P=!0)}}else{setTimeout(function(){void 0===D&&(window,document),void 0===R&&(R=document.body.style.overflow,document.body.style.overflow="hidden")});var a={targetElement:e,options:{}};w=[].concat(h(w),[a])}}(f.MODAL_ELEM)}()},document.addEventListener("mouseout",function(e){var t=e.clientY<20,n=null===e.relatedTarget,i="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();t&&n&&i&&a&&a()}),f.MODAL_ELEM.addEventListener("click",function(e){({event:e}).event.target.closest(f.SELECTORS.MODAL_FORM_ELEM_SELECTOR)||N()}),f.MODAL_FORM_ELEM.addEventListener("submit",function(e){return function(e){var t=e.event;t.preventDefault();var n=t.currentTarget.querySelector(f.SELECTORS.MODAL_FORM_INPUT_ELEM_SELECTOR);f.onSubmit({event:t,email:n.value}),N()}({event:e})}),f.MODAL_CLOSE_BUTTON_ELEM.addEventListener("click",function(){return N()}),document.addEventListener("keydown",function(e){27==={event:e}.event.keyCode&&document.body.classList.contains(f.BODY_CLASS_MODAL_OPEN)&&N()}),g.on("*",function(e){var t,n,a,i,o,s=(a=[{pageViews:p.pageViews[t=f.websiteType][n=f.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:p.activeTimeOnPage[t][n],activeTimeOnSite:p.activeTimeOnSite[t][n],highestScrollPercentageAcrossAllPages:p.highestScrollPercentageAcrossAllPages[t][n]},{pageViews:m.pageViews,activeTimeOnPage:m.activeTimeOnPage,activeTimeOnSite:m.activeTimeOnSite,highestScrollPercentageAcrossAllPages:m.highestScrollPercentageAcrossAllPages}],i=a[0],o=a[1],[Object.keys(i).every(function(e){return o[e]>=i[e]}),i,o]),r=s[0],l=s[1],c=s[2],u=function(){var e,t,n=[{pageViews:E.pageViews[e=f.websiteType][t=f.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:E.activeTimeOnPage[e][t],activeTimeOnSite:E.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:E.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:m.pageViews,activeTimeOnPage:m.activeTimeOnPage,activeTimeOnSite:m.activeTimeOnSite,highestScrollPercentageAcrossAllPages:m.highestScrollPercentageAcrossAllPages}],a=n[0],i=n[1];return[Object.keys(a).every(function(e){return i[e]>=a[e]}),a,i]}(),d=u[0],g=u[1],v=u[2];r&&(f.isModalOpenable=!0),d&&(f.BOTTOM_BAR_ELEM.classList.add("show"),document.body.classList.add(f.BODY_CLASS_BOTTOM_BAR_OPEN)),f.showDebugNotice&&function(e){f.DEBUG_NOTICE_ELEM.innerHTML=function(e){var t=e.modalRequirements,n=e.modalActualValues,a=e.modalMeetsRequirements,i=e.bottomBarRequirements;return'<div class="debug-email-forms">\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Website type: </span>\n    <span class="debug-email-forms__stat-value">'+(f.websiteType.charAt(0).toUpperCase()+f.websiteType.slice(1))+' website</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Page views: </span>\n    <span class="debug-email-forms__stat-value">'+n.pageViews+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.pageViews+'</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.pageViews+'</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>\n    <span class="debug-email-forms__stat-value">'+n.highestScrollPercentageAcrossAllPages+'% </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.highestScrollPercentageAcrossAllPages+'%</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.highestScrollPercentageAcrossAllPages+'%</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on site: </span>\n    <span class="debug-email-forms__stat-value">'+n.activeTimeOnSite+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnSite+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnSite+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on page: </span>\n    <span class="debug-email-forms__stat-value">'+n.activeTimeOnPage+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnPage+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnPage+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Closed modal: </span>\n    <span class="debug-email-forms__stat-value">never</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Closed bottom bar: </span>\n    <span class="debug-email-forms__stat-value">never</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal is openable: </span>\n    '+(a?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+'\n  </div>\n  <button class="debug-email-forms__reset" type="button">Reset</button>\n</div>'}({modalRequirements:e.modalRequirements,modalActualValues:e.modalActualValues,modalMeetsRequirements:e.modalMeetsRequirements,bottomBarRequirements:e.bottomBarRequirements,bottomBarActualValues:e.bottomBarActualValues,bottomBarMeetsRequirements:e.bottomBarMeetsRequirements})}({modalRequirements:l,modalActualValues:c,modalMeetsRequirements:r,bottomBarRequirements:g,bottomBarActualValues:v,bottomBarMeetsRequirements:d})})},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}return window.matchMedia("only screen and (max-width: 780px)"),{contentWebsite:function(e){e.websiteType="CONTENT",k(e)},marketingWebsite:function(e){e.websiteType="MARKETING",k(e)}}});
//# sourceMappingURL=polite-email-popup.umd.js.map
