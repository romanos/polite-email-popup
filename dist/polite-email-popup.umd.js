!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).PoliteEmailPopup=t()}(this,function(){var t,o,a=Object.prototype,i=Function.prototype.toString,n=a.hasOwnProperty,s=i.call(Object),r=a.toString,l=(t=Object.getPrototypeOf,o=Object,function(e){return t(o(e))});function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}function c(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return m(e,void 0);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?m(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(o=e[Symbol.iterator]()).next.bind(o)}function d(){this.callbacksLookup={}}d.prototype={emit:function(e,t){for(var o,a=this.callbacksLookup["*"]||[],i=c(this.callbacksLookup[e]||[]);!(o=i()).done;)(0,o.value)({name:e,value:t});for(var n,s=c(a);!(n=s()).done;)(0,n.value)({name:e,value:t})},on:function(e,t){for(var o,a=c(Array.isArray(e)?e:[e]);!(o=a()).done;){var i=o.value;this.callbacksLookup[i]||(this.callbacksLookup[i]=[]),this.callbacksLookup[i].push(t)}}};var u,b=new d;function g(e,t){void 0===t&&(t={}),e=e||"tigerlily";var o=t.defaults,a=void 0===o?{}:o,m=JSON.parse(localStorage.getItem(e)||"{}",f);return m=Object.assign(a,m),new Proxy(m,function t(o){return{get:function(e,a){return _(e[a])?new Proxy(e[a],t(o)):e[a]},set:function(t,a,m){t[a]=m,localStorage.setItem(e,JSON.stringify(o,p));var c=t[a],d=_(c)?JSON.parse(JSON.stringify(c,p),f):c,u=_(m)?JSON.parse(JSON.stringify(m,p),f):m,g=function(e,t){if(e===t)return"";var o="";return function e(t,o,a){a=a||"",Array.isArray(t)?function(t,o,a){t.forEach((t,i,n)=>{const s=`${a}[${i}]`;o.call(n,t,i,n,s),e(n[i],o,s)})}(t,o,a):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=r.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=l(e);if(null===t)return!0;var o=n.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&i.call(o)==s}(t)&&function(t,o,a){for(const i in t){const n=a?`${a}.${i}`:i;o.call(t,t[i],i,t,n),e(t[i],o,n)}}(t,o,a)}(e,function(e,a,i,n){e===t&&(o=n)}),o}(o,m)||a;return b.emit(g,{prop:a,path:g,oldValue:d,value:u}),!0}}}(m))}function _(e){return Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)}function p(e,t){if(this[e]instanceof Date){var o=this[e].getTime();return o?{__isDate:!0,ms:o}:void 0}return t}function f(e,t){return _(t)&&t.__isDate?new Date(t.ms):t}g.on=function(e,t){b.on(e,function(e){t(e.value)})},u||(u=g("polite-email-popup")),window.persistentGlobals=u;var v={};function E(){return O("modal")}function h(){return O("bottom-bar")}function O(e){var t="modal"===e?u.modalClosedDate:u.bottomBarClosedDate;if(t)return{days:Math.floor((Date.now()-t)/864e5)}}var S={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:2,aggressive:1}},activeTimeOnPage:{content:{notAggressive:6,aggressive:4},marketing:{notAggressive:6,aggressive:4}},activeTimeOnSite:{content:{notAggressive:21,aggressive:14},marketing:{notAggressive:21,aggressive:14}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:35,aggressive:25}}},y={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnPage:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnSite:{content:{notAggressive:10,aggressive:7},marketing:{notAggressive:10,aggressive:7}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:25,aggressive:20},marketing:{notAggressive:25,aggressive:20}}};function T(){var e,t,o,a,i,n,s,r,l=(o=[{pageViews:S.pageViews[e=v.websiteType][t=v.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:S.activeTimeOnPage[e][t],activeTimeOnSite:S.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:S.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:u.pageViews,activeTimeOnPage:u.activeTimeOnPage,activeTimeOnSite:u.activeTimeOnSite,highestScrollPercentageAcrossAllPages:u.highestScrollPercentageAcrossAllPages}],a=o[0],i=o[1],n=Object.keys(a).every(function(e){return i[e]>=a[e]}),(s=E())&&(n=n&&s.days>=2),v.isModalOpen&&(n=!1),[n,a,i]),m=l[0],c=l[1],d=l[2],b=function(){var e,t,o=[{pageViews:y.pageViews[e=v.websiteType][t=v.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:y.activeTimeOnPage[e][t],activeTimeOnSite:y.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:y.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:u.pageViews,activeTimeOnPage:u.activeTimeOnPage,activeTimeOnSite:u.activeTimeOnSite,highestScrollPercentageAcrossAllPages:u.highestScrollPercentageAcrossAllPages}],a=o[0],i=o[1],n=Object.keys(a).every(function(e){return i[e]>=a[e]}),s=h();return s&&(n=n&&s.days>=2),[n,a,i]}(),g=b[0],_=b[1],p=b[2];v.isModalOpenable=!!m,g&&(v.BOTTOM_BAR_ELEM.classList.add("show"),document.body.classList.add(v.BODY_CLASS_BOTTOM_BAR_OPEN)),v.showDebugNotice&&(v.DEBUG_NOTICE_ELEM.innerHTML=function(e){var t=e.modalRequirements,o=e.modalActualValues,a=e.modalMeetsRequirements,i=e.bottomBarRequirements,n=e.bottomBarMeetsRequirements,s=E(),r=h();return'<div class="debug-email-forms">\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Website type: </span>\n    <span class="debug-email-forms__stat-value">'+(v.websiteType.charAt(0).toUpperCase()+v.websiteType.slice(1))+' website</span>\n  </div>\n  <div class="debug-email-forms__stat debug-email-forms__stat--buttons">\n    <button class="debug-email-forms__reset" type="button">Reset data</button>\n    <button class="debug-email-forms__bypass" type="button">Bypass requirements</button>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Page views: </span>\n    <span class="debug-email-forms__stat-value">'+o.pageViews+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.pageViews+'</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.pageViews+'</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>\n    <span class="debug-email-forms__stat-value">'+o.highestScrollPercentageAcrossAllPages+'% </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.highestScrollPercentageAcrossAllPages+'%</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.highestScrollPercentageAcrossAllPages+'%</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on site: </span>\n    <span class="debug-email-forms__stat-value">'+o.activeTimeOnSite+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnSite+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnSite+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on page: </span>\n    <span class="debug-email-forms__stat-value">'+o.activeTimeOnPage+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnPage+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnPage+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal was closed: </span>\n    <span class="debug-email-forms__stat-value">'+(s?s.days+" day"+(1!==s.days?"s":"")+" ago":"never")+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar was closed: </span>\n    <span class="debug-email-forms__stat-value">'+(r?r.days+" day"+(1!==r.days?"s":"")+" ago":"never")+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal is openable: </span>\n    '+(a?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+'\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar is open: </span>\n    '+(n?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+"\n  </div>\n</div>"}({modalRequirements:(r={modalRequirements:c,modalActualValues:d,modalMeetsRequirements:m,bottomBarRequirements:_,bottomBarActualValues:p,bottomBarMeetsRequirements:g}).modalRequirements,modalActualValues:r.modalActualValues,modalMeetsRequirements:r.modalMeetsRequirements,bottomBarRequirements:r.bottomBarRequirements,bottomBarActualValues:r.bottomBarActualValues,bottomBarMeetsRequirements:r.bottomBarMeetsRequirements}))}var L={};function A(e){return L[e]||document.querySelector(e)}function x(e){return"number"==typeof e&&!Number.isNaN(e)}function M(e){document.body.insertAdjacentHTML("beforeend",e)}function w(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}var B=!1;if("undefined"!=typeof window){var R={get passive(){B=!0}};window.addEventListener("testPassive",null,R),window.removeEventListener("testPassive",null,R)}var P="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),C=[],D=!1,k=-1,q=void 0,N=void 0,U=function(e){return C.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},j=function(e){var t=e||window.event;return!!U(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};function V(){u.modalClosedDate=Date.now(),v.MODAL_ELEM.classList.remove("show"),document.body.classList.remove(v.BODY_CLASS_MODAL_OPEN),document.querySelectorAll(v.FOCUSABLE_SELECTORS).forEach(function(e){return e.removeAttribute("tabindex")}),document.querySelectorAll("body > [aria-hidden]").forEach(function(e){return e.removeAttribute("aria-hidden")}),v.MODAL_ELEM.setAttribute("aria-hidden","true"),v.activeElement&&v.activeElement.focus(),function(e){if(P){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,C=C.filter(function(t){return t.targetElement!==e}),D&&0===C.length&&(document.removeEventListener("touchmove",j,B?{passive:!1}:void 0),D=!1)}else(C=C.filter(function(t){return t.targetElement!==e})).length||setTimeout(function(){void 0!==N&&(document.body.style.paddingRight=N,N=void 0),void 0!==q&&(document.body.style.overflow=q,q=void 0)})}(v.MODAL_ELEM),v.isModalOpen=!1,T()}function F(e){27===e.keyCode&&document.body.classList.contains(v.BODY_CLASS_MODAL_OPEN)&&V()}function I(e){e.preventDefault();var t=e.currentTarget.querySelector(v.SELECTORS.MODAL_FORM_INPUT_ELEM_SELECTOR);v.onSubmit({event:e,email:t.value}),V()}function Y(e){e.target.closest(v.SELECTORS.MODAL_FORM_ELEM_SELECTOR)||V()}function z(){u.bottomBarClosedDate=Date.now(),v.BOTTOM_BAR_ELEM.classList.remove("show"),document.body.classList.remove(v.BODY_CLASS_BOTTOM_BAR_OPEN)}function H(t){if(t.preventDefault(),z(),""===e.currentTarget.querySelector(".js-validate-not-robot").value){v.mailchimpConfig=v.mailchimpConfig||{};var o=v.mailchimpConfig,a=o.spamPreventionKey,i=o.formAction;a&&i?function(e){for(var t=e.event,o=e.email,a=e.spamPreventionKey,i=e.userDefinedCallback,n=(e.formAction||"").replace("/post?","/post-json?"),s="",r=t.currentTarget.querySelectorAll("input"),l=0;l<r.length;l++)s+="&"+r[l].name+"="+encodeURIComponent(r[l].value);s+="&"+a+"=";var m=document.createElement("script");m.src=n+s+"&c=mailchimpCallback",document.body.appendChild(m),window.mailchimpCallback=function(e){delete window.mailchimpCallback,document.body.removeChild(m),i("success"===e.result?{event:t,email:o,success:!0}:{event:t,email:o,success:!1})}}({event:t,email:email,spamPreventionKey:a,formAction:i,userDefinedCallback:G}):G({event:t})}}function G(e){var t=e.event,o=t.currentTarget.querySelector(v.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);v.onSubmit({event:t,email:o.value})}function J(e){var t;t=function(){var t,o,a,i,n;t=e,o={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:function(){},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",BOTTOM_BAR_ELEM_SELECTOR:".bottom-bar",BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",BOTTOM_BAR_FORM_ELEM_SELECTOR:"form.bottom-bar__content",BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR:".bottom-bar__close",DEBUG_ELEM:".polite-email-popup__debug-notice",DEBUG_ELEM_RESET_SELECTOR:".debug-email-forms__reset",DEBUG_ELEM_BYPASS_SELECTOR:".debug-email-forms__bypass"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",BODY_CLASS_BOTTOM_BAR_OPEN:"email-bottom-bar-is-open",isModalOpenable:!1,isModalOpen:!1},Object.assign(v,o,t),window.temporaryGlobals=v,M("<style>.bottom-bar,.email-modal{display:none;line-height:1.4;font-size:16px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.bottom-bar.show,.email-modal.show{display:flex}.bottom-bar,.bottom-bar *,.email-modal,.email-modal *{box-sizing:border-box;margin:0;padding:0;color:#212529}.bottom-bar button,.email-modal button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:0 0;color:inherit;font:inherit;line-height:normal;cursor:pointer;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none}.bottom-bar button::-moz-focus-inner,.email-modal button::-moz-focus-inner{border:0;padding:0}.bottom-bar .bottom-bar__close,.bottom-bar .bottom-bar__sign-up,.email-modal .email-modal__sign-up{padding:9px 22px 11px;font-size:17px;font-weight:700;letter-spacing:.5px;color:#fff;background-color:#4263eb;border-radius:1px}.bottom-bar .bottom-bar__sign-up:hover,.email-modal .email-modal__sign-up:hover{background-color:#364fc7}@media (min-width:780px){.bottom-bar .hide-desktop,.email-modal .hide-desktop{display:none!important}}@media (max-width:779.9999px){.bottom-bar .hide-mobile,.email-modal .hide-mobile{display:none!important}}.email-modal{z-index:100;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;line-height:1.4;font-size:16px;background-color:rgba(0,0,0,.6)}.email-modal .email-modal__content{transform:translate(0,1000px);transition:transform .4s;position:relative;width:480px;max-width:calc(100vw - 3rem);padding:35px 32px 33px 32px;background-color:#fff;border-radius:5px;box-shadow:0 2px 8px 0 rgba(0,0,0,.24)}.email-modal-is-open .email-modal .email-modal__content{transform:translate(0,0)}.email-modal .email-modal__top{display:flex;margin-bottom:1.75rem}.email-modal .email-modal__top-media{width:108px;margin-right:22px}.email-modal .email-modal__top-image{box-sizing:content-box;display:block;max-width:100%;border:1px solid #dee2e6;border-radius:5px}.email-modal .email-modal__title{font-size:22px;font-weight:700;margin-bottom:.25rem}.email-modal .email-modal__description{font-size:18px;color:#757575}.email-modal .email-modal__input-container{margin-bottom:1.75rem}.email-modal .email-modal__input{display:block;width:100%;padding:9px 15px 10px;border:1px solid #dee2e6;font-size:16px;font-family:inherit}.email-modal .email-modal__button-container{text-align:center}.email-modal .email-modal__close{position:absolute;top:14px;right:13px;width:33px;height:33px}.email-modal .email-modal__close:hover::after,.email-modal .email-modal__close:hover::before{background-color:#b1bac4}.email-modal .email-modal__close::before{transform:rotate(45deg);position:absolute;top:0;left:0;bottom:0;right:0;width:5px;height:33px;margin:auto;content:\"\";background-color:#ced4da;border-radius:2px}.email-modal .email-modal__close::after{transform:rotate(-45deg);position:absolute;top:0;left:0;bottom:0;right:0;width:5px;height:33px;margin:auto;content:\"\";background-color:#ced4da;border-radius:2px}@media (max-width:779.9999px){.email-modal .email-modal__top{display:block}.email-modal .email-modal__top-media{width:75px;margin:0 auto 1.75rem auto}.email-modal .email-modal__top-content{text-align:center}}.bottom-bar{z-index:99;position:fixed;left:0;bottom:0;justify-content:center;width:100%;border-top:1px solid #adb5bd;background-color:#f1f3f5}.bottom-bar .bottom-bar__content{display:flex;padding:10px 0 11px 0}.bottom-bar .bottom-bar__label{display:flex;align-items:center}.bottom-bar .bottom-bar__label-text{margin-top:-1px;margin-right:12px;font-weight:600;color:#343a40}.bottom-bar .bottom-bar__input{margin-right:11px;padding:6px 10px 7px;max-width:300px;width:31vw;border:1px solid #adb5bd;font-family:inherit;font-size:16px;border-radius:1px}.bottom-bar .bottom-bar__close,.bottom-bar .bottom-bar__sign-up{padding:7px 19px 9px;font-size:15px;font-weight:600;border-radius:999px}.bottom-bar .bottom-bar__close-container{position:absolute;top:0;right:0;padding:10px 16px 10px 0}.bottom-bar .bottom-bar__close{background-color:#ced4da;color:#495057}.bottom-bar .bottom-bar__close:hover{background-color:#adb5bd;color:#343a40}.bottom-bar .bottom-bar__close-x-icon{display:block;width:3px;height:20px;background-color:#868e96;transform:rotate(45deg)}.bottom-bar .bottom-bar__close-x-icon>span{display:block;width:3px;height:20px;background-color:#868e96;transform:rotate(-90deg)}@media (max-width:779.9999px){.bottom-bar.show{display:block}.bottom-bar .bottom-bar__content{align-items:flex-end;padding:15px 21px 21px 22px}.bottom-bar .bottom-bar__label{flex:1 0 auto;display:block}.bottom-bar .bottom-bar__label-text{display:block;margin:0 0 12px 0}.bottom-bar .bottom-bar__input{width:100%;max-width:calc(100% - 16px)}.bottom-bar .bottom-bar__close-container{padding:0;transform:translate(0,-100%)}.bottom-bar .bottom-bar__close{padding:7px 17px 7px;border-radius:2px 0 0 0}}.debug-email-forms{display:flex;flex-wrap:wrap;position:fixed;top:18px;right:24px;max-width:600px;padding:16px 21px;font-size:16px;line-height:1.4;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;color:#343a40;background-color:#fff;box-shadow:1px 3px 6px rgba(0,0,0,.25);border-radius:5px}.debug-email-forms .debug-email-forms__stat{width:50%;flex:1 0 auto;margin-bottom:12px}.debug-email-forms .debug-email-forms__stat--buttons{text-align:right}.debug-email-forms .debug-email-forms__reset{margin-right:8px}.debug-email-forms .debug-email-forms__stat-label{font-weight:700;color:#ae3ec9}.debug-email-forms .debug-email-forms__stat-value{white-space:nowrap;font-weight:700;color:#212529}.debug-email-forms .debug-email-forms__stat-requirements{margin:6px 0;padding-left:32px}.debug-email-forms .debug-email-forms__stat-requirement{color:#868e96}.debug-email-forms .debug-email-forms__stat-value--success{color:#2f9e44}.debug-email-forms .debug-email-forms__stat-value--fail{color:#e03131}</style>"),v.showDebugNotice&&M("<div class='polite-email-popup__debug-notice'></div>"),M('\n<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true">\n  <form class="email-modal__content" method="POST" action="/">\n    <div class="email-modal__top">\n      <div class="email-modal__top-media">\n        <img class="email-modal__top-image" src="'+(a=v).imageSrc+'">\n      </div>\n      <div class="email-modal__top-content">\n        <h2 class="email-modal__title" id="email-modal-title">'+a.headingText+'</h2>\n        <p class="email-modal__description" id="email-modal-description">'+a.descriptionText+'</p>\n      </div>\n    </div>\n    <div class="email-modal__input-container">\n      <input class="email-modal__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>\n      <input class="js-validate-not-robot" type="text">\n    </div>\n    <div class="email-modal__button-container">\n      <button class="email-modal__sign-up" type="submit">'+a.mainButtonText+'</button>\n    </div>\n    <button class="email-modal__close" type="button"></button>\n  </form>\n</div>\n'),M(function(e){return'<div class="bottom-bar" aria-hidden="true">\n  <form class="bottom-bar__content" method="POST" action="/">\n    <label class="bottom-bar__label">\n      <span class="bottom-bar__label-text">'+e.headingText+'</span>\n      <input class="bottom-bar__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>\n      <input class="js-validate-not-robot" type="text">\n    </label>\n    <button class="bottom-bar__sign-up" type="submit">'+e.mainButtonText+'</button>\n  </form>\n  <div class="bottom-bar__close-container">\n    <button class="bottom-bar__close" type="button">\n      <span class="hide-mobile">'+e.closeButtonText+'</span>\n      <span class="bottom-bar__close-x-icon hide-desktop"><span></span></span>\n    </button>\n  </div>\n</div>'}(v)),i=v.SELECTORS,Object.assign(v,{MODAL_ELEM:A(i.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:A(i.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:A(i.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),BOTTOM_BAR_ELEM:A(i.BOTTOM_BAR_ELEM_SELECTOR),BOTTOM_BAR_FORM_ELEM:A(i.BOTTOM_BAR_FORM_ELEM_SELECTOR),BOTTOM_BAR_CLOSE_BUTTON_ELEM:A(i.BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR),DEBUG_NOTICE_ELEM:A(i.DEBUG_ELEM)}),g.on("*",T),x(u.pageViews)?u.pageViews++:u.pageViews=1,x(u.highestScrollPercentageAcrossAllPages)||(u.highestScrollPercentageAcrossAllPages=0),x(u.activeTimeOnSite)||(u.activeTimeOnSite=0),u.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var o=!0,a=!1;return function(){var t=arguments;a||(a=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),a=!1},o?0:1e3),o=!1)}}(function(){var e,t,o;t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),o=window.pageYOffset/(t-document.documentElement.clientHeight),(e=Math.floor(100*o))>u.highestScrollPercentageAcrossAllPages&&(u.highestScrollPercentageAcrossAllPages=e),u.activeTimeOnPage++,u.activeTimeOnSite++})),v.showDebugNotice&&document.addEventListener("click",function(e){e.target.closest(v.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)&&(window.localStorage.clear(),window.location.reload()),e.target.closest(v.SELECTORS.DEBUG_ELEM_BYPASS_SELECTOR)&&(u.pageViews=100,u.activeTimeOnPage=100,u.activeTimeOnSite=100,u.highestScrollPercentageAcrossAllPages=100,u.modalClosedDate=Date.now()-1728e5,u.bottomBarClosedDate=Date.now()-1728e5)}),n=function(){v.isModalOpenable&&function(){v.activeElement=document.activeElement,v.MODAL_ELEM.classList.add("show"),document.body.classList.add(v.BODY_CLASS_MODAL_OPEN),v.MODAL_ELEM.querySelector(v.FOCUSABLE_SELECTORS).focus();var e=document.querySelectorAll(v.FOCUSABLE_SELECTORS),t=v.MODAL_ELEM.querySelectorAll(v.FOCUSABLE_SELECTORS),o=Array.from(t);e.forEach(function(e){o.includes(e)||e.setAttribute("tabindex","-1")}),v.MODAL_ELEM.removeAttribute("aria-hidden"),Array.from(document.body.children).forEach(function(e){e!==v.MODAL_ELEM&&e.setAttribute("aria-hidden","true")}),function(e,t){if(P){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!C.some(function(t){return t.targetElement===e})){var o={targetElement:e,options:{}};C=[].concat(w(C),[o]),e.ontouchstart=function(e){1===e.targetTouches.length&&(k=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-k;!U(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?j(e):e.stopPropagation())}(t,e)},D||(document.addEventListener("touchmove",j,B?{passive:!1}:void 0),D=!0)}}else{setTimeout(function(){void 0===N&&(window,document),void 0===q&&(q=document.body.style.overflow,document.body.style.overflow="hidden")});var a={targetElement:e,options:{}};C=[].concat(w(C),[a])}}(v.MODAL_ELEM),v.isModalOpen=!0,T()}()},document.addEventListener("mouseout",function(e){var t=e.clientY<20,o=null===e.relatedTarget,a="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();t&&o&&a&&n&&n()}),v.MODAL_ELEM.addEventListener("click",Y),v.MODAL_FORM_ELEM.addEventListener("submit",I),v.MODAL_CLOSE_BUTTON_ELEM.addEventListener("click",V),document.addEventListener("keydown",F),v.BOTTOM_BAR_FORM_ELEM.addEventListener("submit",H),v.BOTTOM_BAR_CLOSE_BUTTON_ELEM.addEventListener("click",z)},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}return{contentWebsite:function(e){e.websiteType="content",J(e)},marketingWebsite:function(e){e.websiteType="marketing",J(e)}}});
//# sourceMappingURL=polite-email-popup.umd.js.map
