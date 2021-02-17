if (typeof global.KOOT_DIST_DIR === "undefined") {
    global.KOOT_DIST_DIR = require("path").resolve(__dirname, "../");
}

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  -moz-tab-size:4;\n  tab-size:4;\n}\n\nhtml{\n  line-height:1.15;\n  -webkit-text-size-adjust:100%;\n}\n\nbody{\n  margin:0;\n  font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n}\n\nhr{\n  height:0;\n  color:inherit;\n}\n\nabbr[title]{\n  -webkit-text-decoration:underline dotted;\n          text-decoration:underline dotted;\n}\n\nb,strong{\n  font-weight:bolder;\n}\n\ncode,kbd,pre,samp{\n  font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size:1em;\n}\n\nsmall{\n  font-size:80%;\n}\n\nsub,sup{\n  font-size:75%;\n  line-height:0;\n  position:relative;\n  vertical-align:initial;\n}\n\nsub{\n  bottom:-.25em;\n}\n\nsup{\n  top:-.5em;\n}\n\ntable{\n  text-indent:0;\n  border-color:inherit;\n}\n\nbutton,input,optgroup,select,textarea{\n  font-family:inherit;\n  font-size:100%;\n  line-height:1.15;\n  margin:0;\n}\n\nbutton,select{\n  text-transform:none;\n}\n\n[type=button],[type=submit],button{\n  -webkit-appearance:button;\n}\n\nlegend{\n  padding:0;\n}\n\nprogress{\n  vertical-align:initial;\n}\n\nsummary{\n  display:list-item;\n}\n\nblockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{\n  margin:0;\n}\n\nbutton{\n  background-color:initial;\n  background-image:none;\n}\n\nbutton:focus{\n  outline:1px dotted;\n  outline:5px auto -webkit-focus-ring-color;\n}\n\nfieldset,ol,ul{\n  margin:0;\n  padding:0;\n}\n\nol,ul{\n  list-style:none;\n}\n\nhtml{\n  font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;\n  line-height:1.5;\n}\n\nbody{\n  font-family:inherit;\n  line-height:inherit;\n}\n\n*,:after,:before{\n  box-sizing:border-box;\n  border:0 solid #e5e7eb;\n}\n\nhr{\n  border-top-width:1px;\n}\n\nimg{\n  border-style:solid;\n}\n\ntextarea{\n  resize:vertical;\n}\n\ninput::placeholder,textarea::placeholder{\n  opacity:1;\n  color:#9ca3af;\n}\n\nbutton{\n  cursor:pointer;\n}\n\ntable{\n  border-collapse:collapse;\n}\n\nh1,h2,h3,h4,h5,h6{\n  font-size:inherit;\n  font-weight:inherit;\n}\n\na{\n  color:inherit;\n  text-decoration:inherit;\n}\n\nbutton,input,optgroup,select,textarea{\n  padding:0;\n  line-height:inherit;\n  color:inherit;\n}\n\ncode,kbd,pre,samp{\n  font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n}\n\naudio,canvas,embed,iframe,img,object,svg,video{\n  display:block;\n  vertical-align:middle;\n}\n\nimg,video{\n  max-width:100%;\n  height:auto;\n}\n\n.space-y-6>:not([hidden])~:not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));\n}\n\n.space-y-8>:not([hidden])~:not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(2rem*var(--tw-space-y-reverse));\n}\n\n.-space-y-px>:not([hidden])~:not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(-1px*(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(-1px*var(--tw-space-y-reverse));\n}\n\n.sr-only{\n  position:absolute;\n  width:1px;\n  height:1px;\n  padding:0;\n  margin:-1px;\n  overflow:hidden;\n  clip:rect(0, 0, 0, 0);\n  white-space:nowrap;\n  border-width:0;\n}\n\n.appearance-none{\n  -webkit-appearance:none;\n          appearance:none;\n}\n\n.bg-red-50{\n  --tw-bg-opacity:1;\n  background-color:rgba(254, 242, 242, var(--tw-bg-opacity));\n}\n\n.bg-accent-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(22, 163, 74, var(--tw-bg-opacity));\n}\n\n.bg-bg{\n  --tw-bg-opacity:1;\n  background-color:rgba(250, 250, 250, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-accent-700:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(21, 128, 61, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-bg_dark{\n  --tw-bg-opacity:1;\n  background-color:rgba(39, 39, 42, var(--tw-bg-opacity));\n}\n\n.border-transparent{\n  border-color:transparent;\n}\n\n.border-current{\n  border-color:currentColor;\n}\n\n.border-gray-300{\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n}\n\n.focus\\:border-accent-500:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(34, 197, 94, var(--tw-border-opacity));\n}\n\n.rounded-none{\n  border-radius:0;\n}\n\n.rounded{\n  border-radius:.25rem;\n}\n\n.rounded-md{\n  border-radius:.375rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.rounded-t-md{\n  border-top-left-radius:.375rem;\n  border-top-right-radius:.375rem;\n}\n\n.rounded-b-md{\n  border-bottom-right-radius:.375rem;\n  border-bottom-left-radius:.375rem;\n}\n\n.border{\n  border-width:1px;\n}\n\n.cursor-not-allowed{\n  cursor:not-allowed;\n}\n\n.block{\n  display:block;\n}\n\n.flex{\n  display:flex;\n}\n\n.inline-flex{\n  display:inline-flex;\n}\n\n.table{\n  display:table;\n}\n\n.hidden{\n  display:none;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-nowrap{\n  flex-wrap:nowrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.flex-1{\n  flex:1 1 0%;\n}\n\n.font-medium{\n  font-weight:500;\n}\n\n.font-extrabold{\n  font-weight:800;\n}\n\n.h-4{\n  height:1rem;\n}\n\n.h-5{\n  height:1.25rem;\n}\n\n.text-sm{\n  font-size:.875rem;\n  line-height:1.25rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-2{\n  margin-top:.5rem;\n}\n\n.ml-2{\n  margin-left:.5rem;\n}\n\n.mt-6{\n  margin-top:1.5rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.max-w-md{\n  max-width:28rem;\n}\n\n.max-w-full{\n  max-width:100%;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.opacity-0{\n  opacity:0;\n}\n\n.opacity-30{\n  opacity:.3;\n}\n\n.opacity-100{\n  opacity:1;\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.py-2{\n  padding-top:.5rem;\n  padding-bottom:.5rem;\n}\n\n.px-3{\n  padding-left:.75rem;\n  padding-right:.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.py-12{\n  padding-top:3rem;\n  padding-bottom:3rem;\n}\n\n.pr-2{\n  padding-right:.5rem;\n}\n\n.pl-3{\n  padding-left:.75rem;\n}\n\n.placeholder-gray-500::placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-placeholder-opacity));\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.inset-0{\n  right:0;\n  left:0;\n}\n\n.inset-0,.inset-y-0{\n  top:0;\n  bottom:0;\n}\n\n.left-0{\n  left:0;\n}\n\n*{\n  --tw-shadow:0 0 transparent;\n}\n\n.shadow-sm{\n  --tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n\n.shadow-md,.shadow-sm{\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n*{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 transparent;\n  --tw-ring-shadow:0 0 transparent;\n}\n\n.focus\\:ring-2:focus{\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent);\n}\n\n.focus\\:ring-offset-2:focus{\n  --tw-ring-offset-width:2px;\n}\n\n.focus\\:ring-indigo-500:focus{\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(99, 102, 241, var(--tw-ring-opacity));\n}\n\n.focus\\:ring-accent-500:focus{\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(34, 197, 94, var(--tw-ring-opacity));\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-900{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.text-red-500{\n  --tw-text-opacity:1;\n  color:rgba(239, 68, 68, var(--tw-text-opacity));\n}\n\n.text-red-600{\n  --tw-text-opacity:1;\n  color:rgba(220, 38, 38, var(--tw-text-opacity));\n}\n\n.text-indigo-600{\n  --tw-text-opacity:1;\n  color:rgba(79, 70, 229, var(--tw-text-opacity));\n}\n\n.text-accent-300{\n  --tw-text-opacity:1;\n  color:rgba(134, 239, 172, var(--tw-text-opacity));\n}\n\n.text-text_main{\n  --tw-text-opacity:1;\n  color:rgba(24, 24, 27, var(--tw-text-opacity));\n}\n\n.group:hover .group-hover\\:text-accent-400{\n  --tw-text-opacity:1;\n  color:rgba(74, 222, 128, var(--tw-text-opacity));\n}\n\n.hover\\:text-indigo-500:hover{\n  --tw-text-opacity:1;\n  color:rgba(99, 102, 241, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-text_main_dark{\n  --tw-text-opacity:1;\n  color:rgba(244, 244, 245, var(--tw-text-opacity));\n}\n\n.select-none{\n  -webkit-user-select:none;\n          user-select:none;\n}\n\n.w-4{\n  width:1rem;\n}\n\n.w-5{\n  width:1.25rem;\n}\n\n.w-36{\n  width:9rem;\n}\n\n.w-full{\n  width:100%;\n}\n\n.focus\\:z-10:focus{\n  z-index:10;\n}\n\n.duration-150{\n  transition-duration:.15s;\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(1turn);\n  }\n}\n\n@keyframes ping{\n  75%,to{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes bounce{\n  0%,to{\n    transform:translateY(-25%);\n    animation-timing-function:cubic-bezier(.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    animation-timing-function:cubic-bezier(0,0,.2,1);\n  }\n}\n\n.animate-spin{\n  animation:spin 1s linear infinite;\n}\n\n@media (min-width:640px){\n  .sm\\:-space-y-0>:not([hidden])~:not([hidden]){\n    --tw-space-y-reverse:0;\n    margin-top:calc(0px*(1 - var(--tw-space-y-reverse)));\n    margin-bottom:calc(0px*var(--tw-space-y-reverse));\n  }\n\n  .sm\\:-space-x-px>:not([hidden])~:not([hidden]){\n    --tw-space-x-reverse:0;\n    margin-right:calc(-1px*var(--tw-space-x-reverse));\n    margin-left:calc(-1px*(1 - var(--tw-space-x-reverse)));\n  }\n\n  .sm\\:rounded-t-none{\n    border-top-left-radius:0;\n    border-top-right-radius:0;\n  }\n\n  .sm\\:rounded-b-none{\n    border-bottom-right-radius:0;\n    border-bottom-left-radius:0;\n  }\n\n  .sm\\:rounded-r-md{\n    border-top-right-radius:.375rem;\n    border-bottom-right-radius:.375rem;\n  }\n\n  .sm\\:rounded-l-md{\n    border-top-left-radius:.375rem;\n    border-bottom-left-radius:.375rem;\n  }\n\n  .sm\\:flex-row{\n    flex-direction:row;\n  }\n\n  .sm\\:flex-none{\n    flex:none;\n  }\n\n  .sm\\:text-sm{\n    font-size:.875rem;\n    line-height:1.25rem;\n  }\n\n  .sm\\:px-6{\n    padding-left:1.5rem;\n    padding-right:1.5rem;\n  }\n\n  .sm\\:w-24{\n    width:6rem;\n  }\n}\n\n@media (min-width:1024px){\n  .lg\\:px-8{\n    padding-left:2rem;\n    padding-right:2rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/tailwind.css","<no source>"],"names":[],"mappings":"AAAA;EAAA,eAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,gBAAc;EAAd,6BAAc;AAAA;;AAAd;EAAA,QAAc;EAAd,+GAAc;AAAA;;AAAd;EAAA,QAAc;EAAd,aAAc;AAAA;;AAAd;EAAA,wCAAc;UAAd,gCAAc;AAAA;;AAAd;EAAA,kBAAc;AAAA;;AAAd;EAAA,gFAAc;EAAd,aAAc;AAAA;;AAAd;EAAA,aAAc;AAAA;;AAAd;EAAA,aAAc;EAAd,aAAc;EAAd,iBAAc;EAAd,sBAAc;AAAA;;AAAd;EAAA,aAAc;AAAA;;AAAd;EAAA,SAAc;AAAA;;AAAd;EAAA,aAAc;EAAd,oBAAc;AAAA;;AAAd;EAAA,mBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,QAAc;AAAA;;AAAd;EAAA,mBAAc;AAAA;;AAAd;EAAA,yBAAc;AAAA;;AAAd;EAAA,SAAc;AAAA;;AAAd;EAAA,sBAAc;AAAA;;AAAd;EAAA,iBAAc;AAAA;;AAAd;EAAA,QAAc;AAAA;;AAAd;EAAA,wBAAc;EAAd,qBAAc;AAAA;;AAAd;EAAA,kBAAc;EAAd,yCAAc;AAAA;;AAAd;EAAA,QAAc;EAAd,SAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,gMAAc;EAAd,eAAc;AAAA;;AAAd;EAAA,mBAAc;EAAd,mBAAc;AAAA;;AAAd;EAAA,qBAAc;EAAd,sBAAc;AAAA;;AAAd;EAAA,oBAAc;AAAA;;AAAd;EAAA,kBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,aAAc;AAAA;;AAAd;EAAA,cAAc;AAAA;;AAAd;EAAA,wBAAc;AAAA;;AAAd;EAAA,iBAAc;EAAd,mBAAc;AAAA;;AAAd;EAAA,aAAc;EAAd,uBAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,mBAAc;EAAd,aAAc;AAAA;;AAAd;EAAA,mGAAc;AAAA;;AAAd;EAAA,aAAc;EAAd,qBAAc;AAAA;;AAAd;EAAA,cAAc;EAAd,WAAc;AAAA;;AAId;EAAA,sBAAmB;EAAnB,uDAAmB;EAAnB;AAAmB;;AAAnB;EAAA,sBAAmB;EAAnB,qDAAmB;EAAnB;AAAmB;;AAAnB;EAAA,sBAAmB;EAAnB,qDAAmB;EAAnB;AAAmB;;AAAnB;EAAA,iBAAmB;EAAnB,SAAmB;EAAnB,UAAmB;EAAnB,SAAmB;EAAnB,WAAmB;EAAnB,eAAmB;EAAnB,qBAAmB;EAAnB,kBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,uBAAmB;UAAnB;AAAmB;;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,8BAAmB;EAAnB;AAAmB;;AAAnB;EAAA,kCAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,6BAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,0BAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,OAAmB;EAAnB;AAAmB;;AAAnB;EAAA,KAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,2CAAmB;EAAnB,0BAAmB;EAAnB,2BAAmB;EAAnB,uCAAmB;EAAnB,uCAAmB;EAAnB;AAAmB;;AAAnB;EAAA,0GAAmB;EAAnB,wGAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,wBAAmB;UAAnB;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA;IAAA;EAAmB;AAAA;;AAAnB;EAAA;IAAA,kBAAmB;IAAnB;EAAmB;AAAA;;AAAnB;EAAA;IAAA;EAAmB;AAAA;;AAAnB;EAAA;IAAA,0BAAmB;IAAnB;EAAmB;;EAAnB;IAAA,cAAmB;IAAnB;EAAmB;AAAA;;AAAnB;EAAA;AAAmB;;ACJnB;EDIA;IAAA,sBAAmB;IAAnB,oDAAmB;IAAnB;EAAmB;;EAAnB;IAAA,sBAAmB;IAAnB,iDAAmB;IAAnB;EAAmB;;EAAnB;IAAA,wBAAmB;IAAnB;EAAmB;;EAAnB;IAAA,4BAAmB;IAAnB;EAAmB;;EAAnB;IAAA,+BAAmB;IAAnB;EAAmB;;EAAnB;IAAA,8BAAmB;IAAnB;EAAmB;;EAAnB;IAAA;EAAmB;;EAAnB;IAAA;EAAmB;;EAAnB;IAAA,iBAAmB;IAAnB;EAAmB;;EAAnB;IAAA,mBAAmB;IAAnB;EAAmB;;EAAnB;IAAA;EAAmB;CCJnB;;AAAA;EDIA;IAAA,iBAAmB;IAAnB;EAAmB;CCJnB","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/center/index.module.less":
/*!*************************************************!*\
  !*** ./src/components/center/index.module.less ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wrapper = 'e7396e';const css = '.e7396e{width:100%;max-width:960px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px}';/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({wrapper,css});

/***/ }),

/***/ "./src/components/icon/index.module.less":
/*!***********************************************!*\
  !*** ./src/components/icon/index.module.less ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wrapper = 'dd3414';const css = '.dd3414{display:inline-block;width:16px;height:16px;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:text-top}';/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({wrapper,css});

/***/ }),

/***/ "./src/components/login/index.module.less":
/*!************************************************!*\
  !*** ./src/components/login/index.module.less ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wrapper = 'ee6ed3';const css = '.ee6ed3{position:relative}';/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({wrapper,css});

/***/ }),

/***/ "./src/views/app.module.less":
/*!***********************************!*\
  !*** ./src/views/app.module.less ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wrapper = 'a72a68';const css = '.a72a68{position:relative}.a72a68>main{border-top:30px solid transparent;border-bottom:30px solid transparent}.a72a68>main a{display:inline-block;color:#0288d1;text-decoration:none;line-height:1em}.a72a68>main a .icon{width:16px;height:16px;vertical-align:bottom}.a72a68>main a:hover{color:#000}.a72a68>main a:active{color:#a6a6a6}.a72a68.is-home{border-top-color:#0288d1}.a72a68.is-home>main{border-top-width:0}';/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({wrapper,css});

/***/ }),

/***/ "./src/views/home/index.module.less":
/*!******************************************!*\
  !*** ./src/views/home/index.module.less ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wrapper = 'f4f547';const css = '.f4f547{-webkit-flex-flow:column nowrap;flex-flow:column nowrap;width:100%;min-height:400px;height:100vh;margin-top:-40px;margin-bottom:-30px;font-size:16px;overflow-x:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;background:radial-gradient(#0278b8 15%,transparent 16%) 0 0,radial-gradient(#0278b8 15%,transparent 16%) 8px 8px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 0 1px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 8px 9px;background-color:#0288d1;background-size:16px 16px}.f4f547,.f4f547>.wrapper{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center}.f4f547>.wrapper{-webkit-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-flex:1;flex:1;padding-top:4.6875em}.f4f547 .title{font-size:6.25em;line-height:.7em;letter-spacing:.2em;text-shadow:0 0 .1em #01579b}.f4f547 .intro{text-align:center}.f4f547 .intro .line{display:block;font-size:1.5em;line-height:1.25em}.f4f547 .intro .line+.line{font-style:italic;font-size:1.125em;line-height:1.5em;margin-top:.33em}.f4f547 .button-start{display:inline-block;font-size:1.5em;margin:2.08333333em auto;line-height:2.5em;color:#fff;text-decoration:none;padding:0 2em;border:2px solid #fff;border-radius:100vh}.f4f547 .button-start:active,.f4f547 .button-start:hover{background:#fff;color:#0288d1}.f4f547 .button-start:active{opacity:.85}.f4f547>.nav{display:block;font-size:1.125em;-webkit-flex:0 0 4.6875em;flex:0 0 4.6875em;line-height:4.6875em}.f4f547>.nav .item{display:inline-block;color:#e1f5fe;text-decoration:none}.f4f547>.nav .item:active,.f4f547>.nav .item:hover{text-shadow:1px 1px 2px #01579b}.f4f547>.nav .item:hover{color:#fff}.f4f547>.nav .item:active{color:#81d4fa}.f4f547>.nav .item+.item{margin-left:1.5em}.f4f547>.nav .icon{vertical-align:initial;margin-left:4px;width:.9em;height:.9em}@media screen and (max-width:780px){.f4f547{font-size:14px}}@media screen and (max-width:450px){.f4f547{font-size:12px}.f4f547 .title{letter-spacing:.1em}}';/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({wrapper,css});

/***/ }),

/***/ "./src/views/start/index.module.less":
/*!*******************************************!*\
  !*** ./src/views/start/index.module.less ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wrapper = 'ddf1bd';const css = '.ddf1bd{min-height:calc(100vh - 100px);display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-justify-content:center;justify-content:center}.ddf1bd .title{text-align:center}.ddf1bd .list{display:block;display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;flex-flow:row wrap;margin:0 -20px 0 0;padding:0}.ddf1bd .list:after{content:"";display:block;width:100%;height:0;overflow:hidden;clear:both}.ddf1bd .list .item{display:block;display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;width:calc(33.3333% - 20px);margin-right:20px;margin-bottom:20px;border:1px solid #ff6d00;border-radius:10px;float:left;padding:15px;position:relative;list-style:none}.ddf1bd .list .item .sub-title{display:block;margin:-16px -16px 15px;background:#ff6d00;border-radius:10px 10px 0 0;padding:15px;color:#fff;font-size:16px;line-height:1.01em;position:relative}.ddf1bd .list .item .sub-title small{font-size:12px;font-weight:400;line-height:1.01em;display:block;margin-bottom:4px}.ddf1bd .list .item .content{display:block;-webkit-flex:1;flex:1}.ddf1bd .list .item .doc{margin-top:15px;color:#ff6d00;font-size:14px;line-height:1em}.ddf1bd .list .item .doc .icon{width:14px;height:14px;vertical-align:bottom;margin-left:4px}.ddf1bd .list .item .doc:hover{color:#000}.ddf1bd .list .item .doc:active{color:#a6a6a6}.ddf1bd .list.list-advanced .item{border-color:#00bfa5}.ddf1bd .list.list-advanced .item .sub-title{background:#00bfa5}.ddf1bd .list.list-advanced .item .doc{color:#00bfa5}.ddf1bd .list.list-advanced .item .doc:hover{color:#000}.ddf1bd .list.list-advanced .item .doc:active{color:#a6a6a6}@media screen and (max-width:780px){.ddf1bd .list{margin-right:0}.ddf1bd .list .item{width:100%}}.ddf1bd ol.list{counter-reset:num-list}.ddf1bd ol.list .item .sub-title{padding-left:55px}.ddf1bd ol.list .item .sub-title:before{counter-increment:num-list;content:counter(num-list);position:absolute;left:0;top:50%;line-height:0;width:55px;text-align:center;font-weight:100;font-style:italic;font-family:Times New Roman,Times,serif;font-size:36px}.ddf1bd p.bonus{text-align:center}.ddf1bd p.bonus strong{display:inline-block;margin-right:.5em}';/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({wrapper,css});

/***/ }),

/***/ "./src/views/ts-example/index.module.less":
/*!************************************************!*\
  !*** ./src/views/ts-example/index.module.less ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const wrapper = 'f3f139';const css = '.f3f139{position:relative;min-height:calc(100vh - 100px);display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-justify-content:center;justify-content:center;text-align:center;padding-bottom:100px}.f3f139 img{display:block;position:relative;width:50%;min-width:200px;max-width:100%;margin:1em auto 3em}.f3f139 .msg-big{font-size:22px}.f3f139 .back{font-size:16px;margin-top:2em}.f3f139 .back .icon{margin-right:4px}';/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({wrapper,css});

/***/ }),

/***/ "./src/assets/typescript.svg":
/*!***********************************!*\
  !*** ./src/assets/typescript.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg version='1.1' id='logo-typescript' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 283.09 69.57'%3e %3cpath fill='%23007ACC' d='M34.98 7.56H20.43v45.07h-5.91V7.56H0V2.21h34.98V7.56zM57.94 16.63L41.38 58.39c-2.95 7.45-7.1 11.18-12.45 11.18-1.5 0-2.75-0.15-3.76-0.46v-5.17c1.24 0.42 2.38 0.63 3.41 0.63 2.91 0 5.09-1.73 6.54-5.2l2.88-6.82L23.94 16.63h6.4l9.74 27.7c0.12 0.35 0.36 1.27 0.74 2.74h0.21c0.12-0.56 0.35-1.45 0.7-2.67l10.23-27.77H57.94zM67.37 47.43h-0.14v21.76h-5.77V16.63h5.77v6.33h0.14c2.84-4.78 6.98-7.17 12.45-7.17 4.64 0 8.26 1.61 10.86 4.83 2.6 3.22 3.9 7.54 3.9 12.96 0 6.02-1.46 10.85-4.39 14.47-2.93 3.62-6.94 5.43-12.02 5.43C73.5 53.47 69.9 51.46 67.37 47.43zM67.23 32.91v5.03c0 2.98 0.97 5.5 2.9 7.58s4.39 3.11 7.37 3.11c3.49 0 6.23-1.34 8.21-4.01 1.98-2.67 2.97-6.39 2.97-11.14 0-4.01-0.93-7.15-2.78-9.42-1.85-2.27-4.36-3.41-7.52-3.41-3.35 0-6.05 1.17-8.09 3.5C68.25 26.47 67.23 29.39 67.23 32.91zM129.56 36.07h-25.42c0.09 4.01 1.17 7.1 3.23 9.28 2.06 2.18 4.9 3.27 8.51 3.27 4.05 0 7.78-1.34 11.18-4.01v5.41c-3.16 2.3-7.35 3.45-12.55 3.45-5.09 0-9.08-1.63-11.99-4.9-2.91-3.27-4.36-7.87-4.36-13.8 0-5.6 1.59-10.17 4.76-13.69 3.18-3.53 7.12-5.29 11.83-5.29s8.35 1.52 10.93 4.57c2.58 3.05 3.87 7.28 3.87 12.69V36.07zM123.65 31.18c-0.02-3.33-0.83-5.92-2.41-7.77-1.58-1.85-3.78-2.78-6.59-2.78-2.72 0-5.03 0.97-6.93 2.92-1.9 1.95-3.07 4.49-3.52 7.63H123.65zM134.6 50.59v-6.96c0.73 0.7 1.6 1.34 2.62 1.9 1.02 0.56 2.09 1.04 3.22 1.42s2.26 0.69 3.39 0.9c1.14 0.21 2.19 0.32 3.15 0.32 3.32 0 5.81-0.67 7.45-2.02 1.64-1.35 2.46-3.29 2.46-5.82 0-1.36-0.27-2.54-0.82-3.55-0.55-1.01-1.3-1.93-2.27-2.76s-2.11-1.63-3.43-2.39c-1.32-0.76-2.74-1.56-4.26-2.41-1.61-0.89-3.11-1.79-4.5-2.71-1.39-0.91-2.61-1.92-3.63-3.02-1.03-1.1-1.84-2.35-2.43-3.74-0.59-1.39-0.88-3.03-0.88-4.9 0-2.3 0.46-4.29 1.38-5.99 0.92-1.7 2.13-3.1 3.64-4.2 1.5-1.1 3.21-1.92 5.13-2.46 1.92-0.54 3.88-0.81 5.87-0.81 4.55 0 7.86 0.6 9.94 1.79v6.64c-2.72-2.06-6.22-3.09-10.49-3.09-1.18 0-2.36 0.14-3.54 0.4-1.18 0.27-2.23 0.71-3.15 1.32-0.92 0.61-1.67 1.39-2.25 2.36-0.58 0.96-0.87 2.13-0.87 3.52 0 1.29 0.22 2.4 0.66 3.34 0.44 0.94 1.09 1.79 1.95 2.57 0.86 0.77 1.9 1.52 3.14 2.25 1.23 0.73 2.65 1.52 4.26 2.39 1.65 0.89 3.22 1.83 4.7 2.81s2.78 2.07 3.89 3.27c1.11 1.2 2 2.52 2.65 3.97 0.65 1.45 0.98 3.12 0.98 4.99 0 2.48-0.45 4.59-1.33 6.31-0.89 1.72-2.09 3.12-3.6 4.2-1.51 1.08-3.25 1.86-5.23 2.34-1.97 0.48-4.05 0.72-6.24 0.72-0.73 0-1.63-0.06-2.7-0.19s-2.17-0.32-3.28-0.56c-1.12-0.25-2.17-0.55-3.17-0.91C136 51.44 135.21 51.03 134.6 50.59zM193.25 50.98c-2.77 1.66-6.05 2.5-9.84 2.5-5.13 0-9.28-1.67-12.43-5.01s-4.73-7.67-4.73-12.99c0-5.93 1.7-10.69 5.1-14.29 3.4-3.6 7.93-5.4 13.61-5.4 3.16 0 5.95 0.59 8.37 1.76v5.91c-2.67-1.88-5.53-2.81-8.58-2.81-3.68 0-6.7 1.32-9.05 3.96s-3.53 6.1-3.53 10.39c0 4.22 1.11 7.55 3.32 9.98s5.19 3.66 8.91 3.66c3.14 0 6.09-1.04 8.86-3.13V50.98zM215.56 22.46c-1.01-0.77-2.46-1.16-4.36-1.16-2.46 0-4.52 1.16-6.17 3.48s-2.48 5.48-2.48 9.49v18.35h-5.77v-36h5.77v7.42h0.14c0.82-2.53 2.07-4.51 3.76-5.92 1.69-1.42 3.57-2.13 5.66-2.13 1.5 0 2.65 0.16 3.45 0.49V22.46zM222.18 7.49c-1.03 0-1.91-0.35-2.64-1.05s-1.09-1.59-1.09-2.67c0-1.08 0.36-1.97 1.09-2.69 0.73-0.71 1.61-1.07 2.64-1.07 1.05 0 1.95 0.36 2.69 1.07 0.74 0.72 1.11 1.61 1.11 2.69 0 1.03-0.37 1.91-1.11 2.64C224.13 7.12 223.23 7.49 222.18 7.49zM224.99 52.63h-5.77v-36h5.77V52.63zM234.29 47.43h-0.14v21.76h-5.77V16.63h5.77v6.33h0.14c2.84-4.78 6.98-7.17 12.45-7.17 4.64 0 8.26 1.61 10.86 4.83 2.6 3.22 3.9 7.54 3.9 12.96 0 6.02-1.46 10.85-4.39 14.47s-6.94 5.43-12.02 5.43C240.42 53.47 236.82 51.46 234.29 47.43zM234.15 32.91v5.03c0 2.98 0.97 5.5 2.9 7.58s4.39 3.11 7.37 3.11c3.49 0 6.23-1.34 8.21-4.01s2.97-6.39 2.97-11.14c0-4.01-0.93-7.15-2.78-9.42-1.85-2.27-4.36-3.41-7.52-3.41-3.35 0-6.05 1.17-8.09 3.5C235.17 26.47 234.15 29.39 234.15 32.91zM283.09 52.28c-1.36 0.75-3.15 1.12-5.38 1.12-6.3 0-9.46-3.52-9.46-10.55v-21.3h-6.19v-4.92h6.19V7.84l5.77-1.86v10.65h9.07v4.92h-9.07v20.28c0 2.41 0.41 4.14 1.23 5.17s2.18 1.55 4.08 1.55c1.45 0 2.71-0.4 3.76-1.2V52.28z'/%3e %3c/svg%3e"

/***/ }),

/***/ "./logs/tmp/config/full.4176d771c6b194dfd631d3de2dccc5e3.js":
/*!******************************************************************!*\
  !*** ./logs/tmp/config/full.4176d771c6b194dfd631d3de2dccc5e3.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "type": () => (/* binding */ type),
/* harmony export */   "template": () => (/* binding */ template),
/* harmony export */   "router": () => (/* binding */ router),
/* harmony export */   "redux": () => (/* binding */ redux),
/* harmony export */   "client": () => (/* binding */ client),
/* harmony export */   "server": () => (/* binding */ server)
/* harmony export */ });
// 核心代码中引用的配置文件
const name = "Diablohu's Admin Portal";
const type = "react";
const template = "./src/index.ejs";
const router = __webpack_require__(/*! ../../../src/routes */ "./src/routes/index.js").default;
const redux = {
  "store": __webpack_require__(/*! ../../../src/store */ "./src/store/index.js").default,
  "syncCookie": ["__DIABLOHU_PORTAL_SESSION_SID"]
};
const client = {};
const server =  true ? {
  "renderCache": false,
  "proxyRequestOrigin": {
    "protocol": "https"
  },
  "inject": __webpack_require__(/*! ../../../src/index.inject.js */ "./src/index.inject.js").default,
  "before": __webpack_require__(/*! ../../../src/server/before.js */ "./src/server/before.js").default
} : 0;

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/history/lib/Actions.js":
/*!*********************************************!*\
  !*** ./node_modules/history/lib/Actions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
/**
 * Indicates that navigation was caused by a call to history.push.
 */

var PUSH = exports.PUSH = 'PUSH';
/**
 * Indicates that navigation was caused by a call to history.replace.
 */

var REPLACE = exports.REPLACE = 'REPLACE';
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */

var POP = exports.POP = 'POP';

/***/ }),

/***/ "./node_modules/history/lib/AsyncUtils.js":
/*!************************************************!*\
  !*** ./node_modules/history/lib/AsyncUtils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;

var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var isSync = false,
      hasNext = false,
      doneArgs = void 0;

  var done = function done() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    isDone = true;

    if (isSync) {
      // Iterate instead of recursing if possible.
      doneArgs = args;
      return;
    }

    callback.apply(undefined, args);
  };

  var next = function next() {
    if (isDone) return;
    hasNext = true;
    if (isSync) return; // Iterate instead of recursing if possible.

    isSync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work(currentTurn++, next, done);
    }

    isSync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(undefined, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  };

  next();
};

/***/ }),

/***/ "./node_modules/history/lib/LocationUtils.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/LocationUtils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createQuery = exports.createQuery = function createQuery(props) {
  return _extends(Object.create(null), props);
};

var createLocation = exports.createLocation = function createLocation() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Actions.POP;
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;
   true ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : 0;
  var pathname = object.pathname || '/';
  var search = object.search || '';
  var hash = object.hash || '';
  var state = object.state;
  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
};

var isDate = function isDate(object) {
  return Object.prototype.toString.call(object) === '[object Date]';
};

var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
  if (a === b) return true;
  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (typeofA !== typeofB) return false;
  !(typeofA !== 'function') ?  true ? (0, _invariant2.default)(false, 'You must not store functions in location state') : 0 : void 0; // Not the same object, but same type.

  if (typeofA === 'object') {
    !!(isDate(a) && isDate(b)) ?  true ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : 0 : void 0;

    if (!Array.isArray(a)) {
      var keysofA = Object.keys(a);
      var keysofB = Object.keys(b);
      return keysofA.length === keysofB.length && keysofA.every(function (key) {
        return statesAreEqual(a[key], b[key]);
      });
    }

    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return statesAreEqual(item, b[index]);
    });
  } // All other serializable types (string, number, boolean)
  // should be strict equal.


  return false;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.key === b.key && // a.action === b.action && // Different action !== location change.
  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/lib/PathUtils.js":
/*!***********************************************!*\
  !*** ./node_modules/history/lib/PathUtils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
  var _parsePath = parsePath(path),
      pathname = _parsePath.pathname,
      search = _parsePath.search,
      hash = _parsePath.hash;

  return createPath({
    pathname: pathname,
    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
    hash: hash
  });
};

var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
  var _parsePath2 = parsePath(path),
      pathname = _parsePath2.pathname,
      search = _parsePath2.search,
      hash = _parsePath2.hash;

  return createPath({
    pathname: pathname,
    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
      return prefix === '?' ? prefix : suffix;
    }),
    hash: hash
  });
};

var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
  var _parsePath3 = parsePath(path),
      search = _parsePath3.search;

  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
  return match && match[1];
};

var extractPath = function extractPath(string) {
  var match = string.match(/^(https?:)?\/\/[^\/]*/);
  return match == null ? string : string.substring(match[0].length);
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';
   true ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : 0;
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';
  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  if (location == null || typeof location === 'string') return location;
  var basename = location.basename,
      pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = (basename || '') + pathname;
  if (search && search !== '?') path += search;
  if (hash) path += hash;
  return path;
};

/***/ }),

/***/ "./node_modules/history/lib/createHistory.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/createHistory.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/history/lib/AsyncUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createHistory = function createHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getCurrentLocation = options.getCurrentLocation,
      getUserConfirmation = options.getUserConfirmation,
      pushLocation = options.pushLocation,
      replaceLocation = options.replaceLocation,
      go = options.go,
      keyLength = options.keyLength;
  var currentLocation = void 0;
  var pendingLocation = void 0;
  var beforeListeners = [];
  var listeners = [];
  var allKeys = [];

  var getCurrentIndex = function getCurrentIndex() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);
    if (currentLocation) return allKeys.indexOf(currentLocation.key);
    return -1;
  };

  var updateLocation = function updateLocation(nextLocation) {
    var currentIndex = getCurrentIndex();
    currentLocation = nextLocation;

    if (currentLocation.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
    } else if (currentLocation.action === _Actions.REPLACE) {
      allKeys[currentIndex] = currentLocation.key;
    }

    listeners.forEach(function (listener) {
      return listener(currentLocation);
    });
  };

  var listenBefore = function listenBefore(listener) {
    beforeListeners.push(listener);
    return function () {
      return beforeListeners = beforeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var listen = function listen(listener) {
    listeners.push(listener);
    return function () {
      return listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
        return result != null ? done(result) : next();
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          return callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  };

  var transitionTo = function transitionTo(nextLocation) {
    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

    pendingLocation = nextLocation;
    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

      pendingLocation = null;

      if (ok) {
        // Treat PUSH to same path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = (0, _PathUtils.createPath)(currentLocation);
          var nextPath = (0, _PathUtils.createPath)(nextLocation);
          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (nextLocation.action === _Actions.POP) {
          updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.PUSH) {
          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.REPLACE) {
          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
        }
      } else if (currentLocation && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(currentLocation.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);
        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
      }
    });
  };

  var push = function push(input) {
    return transitionTo(createLocation(input, _Actions.PUSH));
  };

  var replace = function replace(input) {
    return transitionTo(createLocation(input, _Actions.REPLACE));
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength || 6);
  };

  var createHref = function createHref(location) {
    return (0, _PathUtils.createPath)(location);
  };

  var createLocation = function createLocation(location, action) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createKey();
    return (0, _LocationUtils.createLocation)(location, action, key);
  };

  return {
    getCurrentLocation: getCurrentLocation,
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: _PathUtils.createPath,
    createHref: createHref,
    createLocation: createLocation
  };
};

exports.default = createHistory;

/***/ }),

/***/ "./node_modules/history/lib/createMemoryHistory.js":
/*!*********************************************************!*\
  !*** ./node_modules/history/lib/createMemoryHistory.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _createHistory = __webpack_require__(/*! ./createHistory */ "./node_modules/history/lib/createHistory.js");

var _createHistory2 = _interopRequireDefault(_createHistory);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createStateStorage = function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
};

var createMemoryHistory = function createMemoryHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Array.isArray(options)) {
    options = {
      entries: options
    };
  } else if (typeof options === 'string') {
    options = {
      entries: [options]
    };
  }

  var getCurrentLocation = function getCurrentLocation() {
    var entry = entries[current];
    var path = (0, _PathUtils.createPath)(entry);
    var key = void 0,
        state = void 0;

    if (entry.key) {
      key = entry.key;
      state = readState(key);
    }

    var init = (0, _PathUtils.parsePath)(path);
    return (0, _LocationUtils.createLocation)(_extends({}, init, {
      state: state
    }), undefined, key);
  };

  var canGo = function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  };

  var go = function go(n) {
    if (!n) return;

    if (!canGo(n)) {
       true ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : 0;
      return;
    }

    current += n;
    var currentLocation = getCurrentLocation(); // Change action to POP

    history.transitionTo(_extends({}, currentLocation, {
      action: _Actions.POP
    }));
  };

  var pushLocation = function pushLocation(location) {
    current += 1;
    if (current < entries.length) entries.splice(current);
    entries.push(location);
    saveState(location.key, location.state);
  };

  var replaceLocation = function replaceLocation(location) {
    entries[current] = location;
    saveState(location.key, location.state);
  };

  var history = (0, _createHistory2.default)(_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));
  var _options = options,
      entries = _options.entries,
      current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    return (0, _LocationUtils.createLocation)(entry);
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ?  true ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : 0 : void 0;
  }

  var storage = createStateStorage(entries);

  var saveState = function saveState(key, state) {
    return storage[key] = state;
  };

  var readState = function readState(key) {
    return storage[key];
  };

  return _extends({}, history, {
    canGo: canGo
  });
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/history/lib/runTransitionHook.js":
/*!*******************************************************!*\
  !*** ./node_modules/history/lib/runTransitionHook.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var runTransitionHook = function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
     true ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : 0;
  }
};

exports.default = runTransitionHook;

/***/ }),

/***/ "./node_modules/koot-webpack/libs/get-source-content.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot-webpack/libs/get-source-content.js ***!
  \**************************************************************/
/***/ ((module) => {

function getSourceContent(source) {
  if (typeof source.source === 'function') return source.source();
  if (typeof source.source === 'object') return getSourceContent(source.source);
  if (source && Array.isArray(source._children)) return source._children.map(child => getSourceContent(child)).join('\n');
  if (typeof source._value !== 'undefined') return source._value;
  if (typeof source._cachedSource !== 'undefined') return source._cachedSource; // console.log(source);

  return '';
}

module.exports = getSourceContent;

/***/ }),

/***/ "./node_modules/koot/ReactApp/action-types.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/action-types.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_LANGUAGE": () => (/* binding */ CHANGE_LANGUAGE),
/* harmony export */   "GET_ORIGIN_URL": () => (/* binding */ GET_ORIGIN_URL),
/* harmony export */   "TELL_CLIENT_URL": () => (/* binding */ TELL_CLIENT_URL),
/* harmony export */   "SYNC_COOKIE": () => (/* binding */ SYNC_COOKIE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CHANGE_LANGUAGE = '@@KOOT@@CHANGE_LANGUAGE';
const GET_ORIGIN_URL = '@@KOOT@@GET_ORIGIN_URL';
const TELL_CLIENT_URL = '@@KOOT@@TELL_CLIENT_URL';
const SYNC_COOKIE = '@@KOOT@@SYNC_COOKIE';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  CHANGE_LANGUAGE,
  GET_ORIGIN_URL,
  TELL_CLIENT_URL,
  SYNC_COOKIE
});

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getSSRStateString = __webpack_require__(/*! ../../../../libs/get-ssr-state-string */ "./node_modules/koot/libs/get-ssr-state-string.js"); // const { get: getSSRContext } = require('../../../../libs/ssr/context');


const {
  ssrContext: SSRContext
} = __webpack_require__(/*! ../../../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");

const {
  REDUXSTATE
} = __webpack_require__(/*! ../../../../defaults/defines-window */ "./node_modules/koot/defaults/defines-window.js");
/** @type {String} 同步数据到 store 的静态方法名 */


const LIFECYCLE_DATA_TO_STORE = 'onServerRenderStoreExtend';
/** @type {String} 扩展 HTML 信息的静态方法名 */

const LIFECYCLE_HTML_EXTEND = 'onServerRenderHtmlExtend';
/**
 * 执行匹配到的组件的静态生命周期方法
 * @async
 * @param {Object} options
 * @param {Object} store Redux store 对象
 * @param {Object} renderProps 路由 `match` 结果中的属性对象，其内包含匹配到的组件的信息
 * @param {Object} ctx Koa context
 */

const executeComponentLifecycle = async ({
  store,
  renderProps,
  ctx
}) => {
  /** @type {Array} 需要执行的异步方法 */
  const tasks = [];
  /**
   * @type {Function}
   * @async
   * 扩展 HTML 信息需要执行的方法
   * 仅执行匹配到的最深层组件对应的方法
   */

  const extendHtmlTasks = [];

  const extractDataToStoreTask = component => {
    if (!component) return;

    if (typeof component[LIFECYCLE_DATA_TO_STORE] === 'function') {
      const thisTask = component[LIFECYCLE_DATA_TO_STORE]({
        store,
        renderProps,
        ctx
      }); // component[LIFECYCLE_DATA_TO_STORE] = undefined

      if (Array.isArray(thisTask)) {
        for (const task of thisTask) tasks.push(task);
      } else if (thisTask instanceof Promise || thisTask.then) {
        tasks.push(thisTask);
      } else if (typeof thisTask === 'function') {
        tasks.push(new Promise(async (resolve, reject) => {
          try {
            await thisTask();
            resolve();
          } catch (e) {
            reject(e);
          }
        }));
      }
    } else if (component.WrappedComponent) {
      extractDataToStoreTask(component.WrappedComponent);
    }
  };

  const extracHtmlExtendTask = component => {
    if (!component) return;

    if (typeof component[LIFECYCLE_HTML_EXTEND] === 'function') {
      extendHtmlTasks.push(component[LIFECYCLE_HTML_EXTEND]); // component[LIFECYCLE_HTML_EXTEND] = undefined
    } else if (component.WrappedComponent) {
      extracHtmlExtendTask(component.WrappedComponent);
    }
  };
  /** @type {Array} 使用 extend 高阶组件的组件 */


  let thisConnectedComponents =  false ? 0 : ctx[SSRContext].connectedComponents; // console.log('\n\n==========');
  // console.log({ connectedComponents });
  // console.log({ connectedComponents, renderProps });
  // console.log('==========\n\n');
  // 添加各项任务

  if (Array.isArray(thisConnectedComponents)) thisConnectedComponents.forEach(component => {
    extractDataToStoreTask(component);
    extracHtmlExtendTask(component);
  });
  thisConnectedComponents = undefined; // 旧代码
  // for (const component of renderProps.components) {
  //     /**
  //      * @type {Component}
  //      * 当前组件
  //      * component.WrappedComponent 是 redux 装饰的外壳
  //      */
  //     // const thisComponent = component && component.WrappedComponent ? component.WrappedComponent : component
  //     // extractDataToStoreTask(component)
  // }
  // 等待所有异步方法执行完毕

  await Promise.all(tasks).catch(e => {
    throw e;
  }); // 扩展 HTML 相关信息

  const result = {
    title: "Diablohu's Admin Portal" || 0,
    metaHtml: '',
    reduxHtml: `window.${REDUXSTATE} = ${getSSRStateString(store.getState())};`
  }; // console.log(extendHtmlTasks);

  extendHtmlTasks.some(task => {
    if (typeof task === 'function') {
      const {
        title: thisTitle,
        metas: thisMetas
      } = task({
        store,
        renderProps,
        ctx
      });
      const hasTitle = !!thisTitle;
      const hasMeta = Array.isArray(thisMetas) && thisMetas.length;
      if (hasTitle) result.title = thisTitle;
      if (hasMeta) result.metaHtml = thisMetas.map(meta => '<meta' + Object.keys(meta).map(key => ` ${key}="${meta[key]}"`).join('') + '>').join('');
      if (hasTitle || hasMeta) return true;
    }

    return false;
  });
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (executeComponentLifecycle);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js":
/*!********************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _React_redux_reset_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../React/redux/reset-store */ "./node_modules/koot/React/redux/reset-store.js");

/**
 * 通过 redux 配置，初始化并获取 redux store 对象
 *
 * - 若提供产生 store 的方法 (`factoryStore`): 生成 store
 * - 若提供自生成的 store (`store`): 尝试清空 state 并触发一次所有 reducer 的初始化
 *
 * 每次访问请求时，需要生成全新的干净的 redux store，不可复用
 *
 * @param {Object} reduxConfig Redux，以下内容选其一
 * @param {Function} [reduxConfig.factoryStore] 生成 Redux Store 的方法
 * @param {Object} [reduxConfig.store] Redux Store 对象
 * @returns {Object} store
 */

const initStore = (reduxConfig = {}) => {
  const {
    store,
    factoryStore
  } = reduxConfig;

  if (typeof factoryStore === 'function') {
    return factoryStore();
  }

  if (typeof store === 'object') {
    return (0,_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_0__.default)(store);
  }

  return {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const afterDataToStore = async ({
  store,
  ctx,
  localeId,
  callback
}) => {
  if (false) {}
  if (typeof callback === 'function') await callback({
    ctx,
    store,
    localeId
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (afterDataToStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const beforeDataToStore = async ({
  ctx,
  store,
  localeId,
  callback
}) => {
  if (false) {}
  if (false) {}
  if (typeof callback === 'function') await callback({
    ctx,
    store,
    localeId
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (beforeDataToStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const beforePreRender = async ({
  ctx,
  store,
  localeId,
  callback
}) => {
  if (false) {}
  if (typeof callback === 'function') await callback({
    ctx,
    store,
    localeId
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (beforePreRender);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony import */ var _i18n_server_check_and_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../i18n/server/check-and-redirect */ "./node_modules/koot/i18n/server/check-and-redirect.js");

 // import isI18nEnabled from '../../../../../i18n/is-enabled'



const beforeRouterMatch = async ({
  store,
  ctx,
  syncCookie,
  callback
}) => {
  // 如果 i18n 判定需要跳转，此时进行处理
  const needRedirect = (0,_i18n_server_check_and_redirect__WEBPACK_IMPORTED_MODULE_0__.default)(ctx);
  if (needRedirect) return needRedirect; // 告诉前端，当前的url是啥

  store.dispatch({
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__.TELL_CLIENT_URL,
    data: ctx.originTrue
  }); // 把http请求带来的cookie同步到ssr的初始化redux state里
  // server.cookie 获取
  // 配置信息在koot.config.js里
  // redux.syncCookie = ['token', 'sid'] | 'token' | false

  if (syncCookie) {
    let cookies = syncCookie;

    if (cookies === true) {
      store.dispatch({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__.SYNC_COOKIE,
        data: ctx.headers.cookie || ''
      });
    } else {
      const data = {};

      if (cookies === 'all') {
        const theCookies = ctx.headers.cookie || '';
        theCookies.split(';').forEach(str => {
          const crumbs = str.split('=');

          if (crumbs.length > 1) {
            const [key, ...values] = crumbs;
            data[key.trim()] = values.join('=').trim();
          }
        });
      } else {
        if (typeof cookies === 'string') cookies = [cookies];

        if (Array.isArray(cookies)) {
          // 获取需要的cookie值
          cookies.forEach(c => {
            data[c] = ctx.cookies.get(c);
          });
        }
      } // 同步到state中


      store.dispatch({
        type: _action_types__WEBPACK_IMPORTED_MODULE_1__.SYNC_COOKIE,
        data
      });
    } // console.log({
    //     syncCookie,
    //     cookies: ctx.headers.cookie,
    //     server: store.getState().server
    // });

  }

  if (false) {}
  if (typeof callback === 'function') await callback({
    store,
    ctx
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (beforeRouterMatch);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/redux.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/redux.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_LANGUAGE": () => (/* reexport safe */ _action_types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_LANGUAGE),
/* harmony export */   "TELL_CLIENT_URL": () => (/* reexport safe */ _action_types__WEBPACK_IMPORTED_MODULE_0__.TELL_CLIENT_URL),
/* harmony export */   "SYNC_COOKIE": () => (/* reexport safe */ _action_types__WEBPACK_IMPORTED_MODULE_0__.SYNC_COOKIE),
/* harmony export */   "SERVER_REDUCER_NAME": () => (/* binding */ SERVER_REDUCER_NAME),
/* harmony export */   "serverReducer": () => (/* binding */ serverReducer)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
// TODO: change to one action type , like: CHANGE_BASE_INFO


const SERVER_REDUCER_NAME = 'server';
const serverReducer = (state = {
  lang: 'en',
  origin: ''
}, action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        lang: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.TELL_CLIENT_URL:
      return Object.assign({}, state, {
        origin: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.SYNC_COOKIE:
      return Object.assign({}, state, {
        cookie: action.data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./node_modules/koot/React/client-update-page-info.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/client-update-page-info.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getInjectedMetaTags": () => (/* binding */ getInjectedMetaTags),
/* harmony export */   "markInited": () => (/* binding */ markInited)
/* harmony export */ });
/**
 * @typedef Pageinfo
 * @type {Object}
 * @property {string} [title] 标题
 * @property {Array<Object.<string, string>>} [metas] meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */
// import isEqual from 'lodash/isEqual';

/**
 * 当前已注入的 meta 标签
 * @type {Array<HTMLElement>}
 */
let injectedMetaTags; // meta 标签区域结尾的 HTML 注释代码

let nodeCommentEnd;
let inited = false;
/** @type {Pageinfo} */

const infoToChange = {
  title: '',
  metas: []
};
let changeTimeout = undefined;
/**
 * _仅限客户端_
 *
 * 更新页面信息
 * @module
 * @param {string} title 新的标题
 * @param {Array<Object.<string, string>>} metas meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((title, metas = []) => {
  if (true) return;

  if ( true && !inited) {
    setTimeout(() => {
      inited = true;
    });
    return;
  } // 判断 & 追加即将修改的内容

  /*
  // 如果新 meta 不存在于已有的 meta 列表，添加
  metas.forEach(metaNew => {
      if (!infoToChange.metas.length) infoToChange.metas.push(metaNew);
      if (
          !infoToChange.metas.every(metaExist => {
              console.log(metaNew, metaExist, isEqual(metaNew, metaExist));
              return isEqual(metaNew, metaExist);
          })
      ) {
          console.log('PUSH');
          infoToChange.metas.push(metaNew);
      }
  });
  */
  // 如果当前没有信息，设为当前信息


  if (!infoToChange.title && (!Array.isArray(infoToChange.metas) || !infoToChange.metas.length)) {
    infoToChange.title = title;
    infoToChange.metas = metas;
  }

  if (changeTimeout) return;
  changeTimeout = setTimeout(() => {
    doUpdate();
    infoToChange.title = '';
    infoToChange.metas = [];
    changeTimeout = undefined;
  });
}); //

const doUpdate = () => {
  const {
    title,
    metas
  } = infoToChange; // 替换页面标题

  document.title = title; // 替换 metas

  const head = document.getElementsByTagName('head')[0];
  getInjectedMetaTags().forEach(el => head.removeChild(el));
  injectedMetaTags.forEach(el => {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  });
  injectedMetaTags = metas.filter(meta => typeof meta === 'object').map(meta => {
    const el = document.createElement('meta');

    for (var key in meta) {
      el.setAttribute(key, meta[key]);
    } // el.setAttribute(__KOOT_INJECT_ATTRIBUTE_NAME__, '')


    if (nodeCommentEnd) {
      head.insertBefore(el, nodeCommentEnd);
    } else {
      head.appendChild(el);
    }

    return el;
  });
}; //

/**
 * 获取当前已注入的 meta 标签
 * @returns {Array<HTMLElement>}
 */


const getInjectedMetaTags = () => {
  if (!Array.isArray(injectedMetaTags)) {
    const head = document.getElementsByTagName('head')[0];
    injectedMetaTags = []; // 移除所有在 KOOT_METAS 里的 meta 标签
    // 采用 DOM 操作的初衷：如果使用 innerHTML 的字符串替换方法，浏览器可能会全局重新渲染一次，造成“闪屏”

    const childNodes = head.childNodes;
    let meetStart = false;
    let meetEnd = false;
    let i = 0;

    while (!meetEnd && childNodes[i] instanceof Node) {
      const node = childNodes[i];

      if (node.nodeType === Node.COMMENT_NODE) {
        if (node.nodeValue === "koot-inject-metas-start") meetStart = true;

        if (node.nodeValue === "koot-inject-metas-end") {
          meetEnd = true;
          nodeCommentEnd = node;
        }
      } else if (meetStart && node.nodeType === Node.ELEMENT_NODE && node.tagName === 'META') {
        injectedMetaTags.push(node);
      }

      i++;
    }
  }

  return injectedMetaTags;
};
/** _仅针对客户端_ 标记已初始化 */

const markInited = () => {
  inited = true;
};

/***/ }),

/***/ "./node_modules/koot/React/get-render-props.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/React/get-render-props.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromServerProps": () => (/* binding */ fromServerProps),
/* harmony export */   "fromComponentProps": () => (/* binding */ fromComponentProps)
/* harmony export */ });
/**
 * 基于 serverProps 返回同构 props
 * @param {Object} serverProps 
 * @return {Object}
 */
const fromServerProps = (serverProps = {}) => {
  // console.log(' ')
  // console.log('----------')
  // console.log(serverProps)
  // console.log('----------')
  // console.log(' ')
  return { ...serverProps
  };
};
/**
 * 基于组件 props 返回同构 props
 * @param {Object} componentProps 
 * @return {Object}
 */


const fromComponentProps = (componentProps = {}) => {
  // console.log(' ')
  // console.log('----------')
  // console.log(componentProps)
  // console.log('----------')
  // console.log(' ')
  return { ...componentProps
  };
};



/***/ }),

/***/ "./node_modules/koot/React/history.js":
/*!********************************************!*\
  !*** ./node_modules/koot/React/history.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __KOOT_CLIENT_REQUIRE_CREATE_HISTORY__ */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/lib/PathUtils */ "./node_modules/history/lib/PathUtils.js");
// import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"




/**
 * History Enhancer: use basename
 *
 * Original useBasename enhancer from history also override all read methods
 * `getCurrentLocation` `listenBefore` `listen`
 * But as Diablohu tested, when read methods overrided, if the route matched used async method to get component, would fail
 * that rendering blank page and no route match event fired
 * So we only overrid write methods here. And modify the first level path in routes object to `:localeId`
 *
 * @param {Function} createHistory
 * @returns {Object} History
 */

const kootUseBasename = createHistory => (options = {}) => {
  const history = createHistory(options);
  const {
    basename
  } = options;

  const addBasename = location => {
    if (!location) return location;

    if (basename && location.basename == null) {
      if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
        location.pathname = location.pathname.substring(basename.length);
        location.basename = basename;
        if (location.pathname === '') location.pathname = '/';
      } else {
        location.basename = '';
      }
    }

    return location;
  };

  const prependBasename = location => {
    if (!basename) return location;
    const object = typeof location === 'string' ? (0,history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__.parsePath)(location) : location;
    const pname = object.pathname;
    const normalizedBasename = basename.slice(-1) === '/' ? basename : `${basename}/`;
    const normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
    const pathname = normalizedBasename + normalizedPathname;
    return { ...object,
      pathname
    };
  }; // Override all write methods with basename-aware versions.


  const push = location => history.push(prependBasename(location));

  const replace = location => history.replace(prependBasename(location));

  const createPath = location => history.createPath(prependBasename(location));

  const createHref = location => history.createHref(prependBasename(location));

  const createLocation = (location, ...args) => addBasename(history.createLocation(prependBasename(location), ...args));

  return { ...history,
    push,
    replace,
    createPath,
    createHref,
    createLocation
  };
};

let historyClient;

const history = (() => {
  if (false) {}

  if (true) {
    return undefined;
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);

/***/ }),

/***/ "./node_modules/koot/React/inject/_cache-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/React/inject/_cache-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * inject 缓存键值
 */
module.exports = {
  styles: 'STYLES',
  scriptsRunFirst: 'SCRIPTS_RUN_FIRST',
  scriptsInBody: 'SCRIPTS_IN_BODY',
  uriServiceWorker: 'URI_SERVICE_WORKER'
};

/***/ }),

/***/ "./node_modules/koot/React/inject/htmlLang.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/inject/htmlLang.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * 注入: html 标签上的 lang 属性
 * @param {String} localeId 当前语种 ID
 * @returns {String}
 */
module.exports = localeId => localeId ? ` lang="${localeId}"` : '';

/***/ }),

/***/ "./node_modules/koot/React/inject/is-need-inject-critical.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/React/inject/is-need-inject-critical.js ***!
  \*******************************************************************/
/***/ ((module) => {

/**
 * 检查 template 是否需要自动添加针对 critical 的注入
 * @param {String} template
 * @returns {Object}
 */
module.exports = (template = '') => {
  return {
    styles: !/(content|pathname)\(['"]critical\.css['"]\)/.test(template),
    scripts: !/(content|pathname)\(['"]critical\.js['"]\)/.test(template)
  };
};

/***/ }),

/***/ "./node_modules/koot/React/inject/metas.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/React/inject/metas.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs");

const {
  dll
} = __webpack_require__(/*! ../../defaults/dev-request-uri */ "./node_modules/koot/defaults/dev-request-uri.js");

const {
  compilationKeyHtmlMetaTags
} = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");
/**
 * 注入: meta 标签 HTML 代码，以及其他的 <head> 标签中的注入
 * @param {Object} options
 * @param {Object} [options.manifest]
 * @param {String} [options.metaHtml]
 * @param {String} [options.localeId]
 * @param {Object} [options.compilation]
 * @returns {String}
 */


module.exports = ({
  metaHtml = '',
  manifest = {}
}) => {
  let r = getDevExtra();

  if (false) {} else {
    r += `<!--${"koot-inject-metas-start"}-->${metaHtml}<!--${"koot-inject-metas-end"}-->`;
  }

  r += manifest[compilationKeyHtmlMetaTags] || '';
  return r;
};
/**
 * [开发环境] 额外内容
 */


const getDevExtra = () => {
  if (true) return ''; // 判断是否存在 dll 文件，如果存在，在此引入

  const {
    KOOT_DEV_DLL_FILE_CLIENT: fileDllClient
  } = process.env;
  if (fileDllClient && fs.existsSync(fileDllClient)) return `<script type="text/javascript" src="${dll}"></script>`;
  return '';
};

/***/ }),

/***/ "./node_modules/koot/React/inject/scripts.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/React/inject/scripts.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const {
  chunkNameClientRunFirst,
  scriptTagEntryAttributeName,
  thresholdScriptRunFirst
} = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");

const defaultEntrypoints = __webpack_require__(/*! ../../defaults/entrypoints */ "./node_modules/koot/defaults/entrypoints.js");

const {
  LOCALEID,
  REDUXSTATE,
  SSRSTATE,
  SPALOCALEFILEMAP
} = __webpack_require__(/*! ../../defaults/defines-window */ "./node_modules/koot/defaults/defines-window.js");

const {
  scopeNeedTransformPathname
} = __webpack_require__(/*! ../../defaults/defines-service-worker */ "./node_modules/koot/defaults/defines-service-worker.js");

const readClientFile = __webpack_require__(/*! ../../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

const getClientFilePath = __webpack_require__(/*! ../../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

const getSSRStateString = __webpack_require__(/*! ../../libs/get-ssr-state-string */ "./node_modules/koot/libs/get-ssr-state-string.js");

const getSwScopeFromEnv = __webpack_require__(/*! ../../libs/get-sw-scope-from-env */ "./node_modules/koot/libs/get-sw-scope-from-env.js");

const {
  scriptsRunFirst,
  scriptsInBody,
  uriServiceWorker
} = __webpack_require__(/*! ./_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js");

let isSPAi18nEnabled = false;
const SPAi18nNeedWaiting = false;
/**
 * 注入: JavaScript 代码
 * @param {Object} options
 * @param {Boolean} [options.needInjectCritical]
 * @param {Object} [options.injectCache]
 * @param {Object} [options.entrypoints]
 * @param {String} [options.localeId]
 * @param {Object} [options.localeFileMap]
 * @param {string} [options.defaultLocaleId]
 * @param {String} [options.reduxHtml]
 * @param {Object} [options.compilation]
 * @param {Object} [options.SSRState]
 * @returns {String}
 */

module.exports = ({
  needInjectCritical,
  injectCache,
  entrypoints,
  localeId,
  localeFileMap,
  defaultLocaleId,
  reduxHtml,
  SSRState = {},
  compilation
}) => {
  const ENV = "prod";
  const isDev = Boolean(ENV === 'dev' ||  true && false); // const isProd = !isDev;

  const isSPA = Boolean("isomorphic" === 'spa');
  /** @type {boolean} 启用多语言的 SPA */

  isSPAi18nEnabled = Boolean(isSPA && typeof localeFileMap === 'object' && Object.keys(localeFileMap).length && defaultLocaleId); // SPAi18nNeedWaiting = Boolean(isSPAi18nEnabled /* && isDev*/);

  if (isDev || typeof injectCache[scriptsRunFirst] === 'undefined') {
    const filename = `${chunkNameClientRunFirst}.js`;
    const name = '*run-first';

    if (isDev) {
      injectCache[scriptsRunFirst] = combineFilePaths(name, filename, localeId);
    } else {
      const content = scriptTagsFromContent(name, filename, localeId, compilation);

      if (content.length > thresholdScriptRunFirst
      /* * (isSPAi18nEnabled ? 0 : 1)*/
      ) {
          injectCache[scriptsRunFirst] = combineFilePaths(name, filename, localeId);
        } else {
        injectCache[scriptsRunFirst] = content;
      }
    }
  }

  if (isDev || typeof injectCache[scriptsInBody] === 'undefined') {
    let r = ''; // 入口: critical

    if (needInjectCritical && Array.isArray(entrypoints.critical)) {
      r += entrypoints.critical.filter(file => path.extname(file) === '.js').map(file => {
        if (isDev) {
          // return `<script type="text/javascript" src="${getClientFilePath(true, file)}"></script>`;
          return combineFilePaths('critical', true, file);
        }

        return scriptTagsFromContent('critical', true, file);
      }).join('');
    } // 其他默认入口
    // console.log('defaultEntrypoints', defaultEntrypoints)
    // console.log('entrypoints', entrypoints)


    defaultEntrypoints.forEach(key => {
      if (Array.isArray(entrypoints[key])) {
        r += entrypoints[key].filter(file => /\.(js|jsx|mjs|ejs)$/.test(file)).map(file => {
          // console.log(file)
          // if (isDev)
          // return `<script type="text/javascript" src="${getClientFilePath(true, file)}" defer></script>`
          // return `<script type="text/javascript" src="${getClientFilePath(
          //     true,
          //     file
          // )}" defer></script>`;
          return combineFilePaths(key, true, file);
        }).join('');
      }
    }); // 如果设置了 PWA 自动注册 Service-Worker，在此注册

    const pwaAuto =  true ? JSON.parse("true") : 0; // console.log({
    //     pwaAuto,
    //     'injectCache[uriServiceWorker]': injectCache[uriServiceWorker]
    // });

    if (pwaAuto && ( false || typeof injectCache[uriServiceWorker] === 'string')) {
      const scope = getSwScopeFromEnv();
      r += `<script id="__koot-pwa-register-sw" type="text/javascript">` + // if (isProd) {
      `if ('serviceWorker' in navigator) {` + `window.addEventListener('load', function() {` + // + `navigator.serviceWorker.register("${injectCache[uriServiceWorker]}?koot=${process.env.KOOT_VERSION}",`
      `navigator.serviceWorker.register("${injectCache[uriServiceWorker] || JSON.parse("\"/service-worker.js\"")}?koot=0.12"` + (scope ? `,{scope: ${scope === scopeNeedTransformPathname ? `location.pathname` : `'${scope}'`}}` : '') + `)` + `.catch(err => {console.log('👩‍💻 Service Worker SUPPORTED. ERROR', err)})` + `});` + `}else{console.log('👩‍💻 Service Worker not supported!')}` + // } else if (isDev) {
      //     r += `console.log('👩‍💻 No Service Worker for DEV mode.')`;
      // }
      `</script>`;
    }

    injectCache[scriptsInBody] = r;
  }

  if (isSPAi18nEnabled) {
    return `<script type="text/javascript" ${scriptTagEntryAttributeName}="*run-first-spa-locales">` + `window.${SPALOCALEFILEMAP} = ${JSON.stringify(localeFileMap)};` + (SPAi18nNeedWaiting ? `window.__KOOT_SCRIPTS__ = {` + `addAfterLocale: function(name, src) {` + `if (` + `window.${LOCALEID} && ` + `typeof window.${SSRSTATE} === 'object' && ` + `typeof window.${SSRSTATE}.locales === 'object'` + `) {` + `var fjs = document.getElementsByTagName('script')[0];` + `var js = document.createElement('script');` + `js.setAttribute("${scriptTagEntryAttributeName}", name);` + `js.setAttribute('defer', '');` + `js.onerror = function(e) {` + `console.error(e);` + `throw new Error(` + `'Loading javascript file ('+src+') fail!'` + `);` + `};` + `js.src = src;` + `fjs.parentNode.insertBefore(js, fjs);` + `return;` + `}` + `console.warn(name, src, window.${LOCALEID});` + `return setTimeout(() => {` + `window.__KOOT_SCRIPTS__.addAfterLocale(name, src);` + `}, 10);` + `}` + `};` : '') + `</script>` + // getClientRunFirstJS(localeId, compilation) +
    injectCache[scriptsRunFirst] + injectCache[scriptsInBody];
  }

  return `<script type="text/javascript">` + (reduxHtml ? reduxHtml : `window.${REDUXSTATE} = {};`) + `window.${LOCALEID} = "${SSRState.localeId || ''}";` + `window.${SSRSTATE} = ${getSSRStateString(SSRState)};` + `</script>` + // getClientRunFirstJS(localeId, compilation) +
  injectCache[scriptsRunFirst] + injectCache[scriptsInBody];
};
/**
 * 返回引用地址的 script 标签
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {string} name 入口名/标识符
 * @param {...any} args `utils/get-client-file-path` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


const combineFilePaths = (name, ...args) => {
  let pathnames = getClientFilePath(...args);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];

  if (SPAi18nNeedWaiting && name !== '*run-first') {
    return pathnames.map((pathname, index) => `<script type="text/javascript">` + `window.__KOOT_SCRIPTS__.addAfterLocale("${name}", "${pathname}")` + `</script>`).join('');
  }

  return pathnames.map(pathname => `<script type="text/javascript" src="${pathname}" defer ${scriptTagEntryAttributeName}="${name}"></script>`).join('');
};
/**
 * 返回 script 标签，标签内容为源代码字符串
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {string} name 入口名/标识符
 * @param {...any} args `utils/read-client-file` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


const scriptTagsFromContent = (name, ...args) => `<script type="text/javascript" ${scriptTagEntryAttributeName}="${name}">${readClientFile(...args)}</script>`;

/***/ }),

/***/ "./node_modules/koot/React/inject/styles.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/React/inject/styles.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  chunkNameExtractCss,
  chunkNameExtractCssForImport,
  styleTagGlobalAttributeName,
  thresholdStylesExtracted
} = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");

const readClientFile = __webpack_require__(/*! ../../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

const getClientFilePath = __webpack_require__(/*! ../../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

const {
  styles
} = __webpack_require__(/*! ./_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js");
/**
 * 注入: CSS 代码
 * @param {Object} options
 * @param {Boolean} [options.needInjectCritical]
 * @param {Object} [options.injectCache]
 * @param {String} [options.stylesHtml]
 * @param {String} [options.localeId]
 * @param {Object} [options.filemap]
 * @param {String} [options.compilation]
 * @returns {String}
 */


module.exports = ({
  // needInjectCritical,
  injectCache,
  // filemap,
  stylesHtml,
  localeId,
  compilation
}) => {
  if (typeof injectCache[styles] === 'undefined') {
    injectCache[styles] = getExtracted(localeId, compilation);

    if (false) {}
  } // if (needInjectCritical && typeof filemap['critical.css'] === 'string') {
  //     injectCache.styles += getCritical()
  // }


  return (injectCache[styles] || '') + stylesHtml;
}; // const getCritical = () => {
//     if (process.env.WEBPACK_BUILD_ENV === 'dev') {
//         return `<link id="__koot-critical-styles" media="all" rel="stylesheet" href="${getClientFilePath('critical.css')}" />`
//     }
//     return `<style id="__koot-critical-styles" type="text/css">${readClientFile('critical.css')}</style>`
// }


const getExtracted = (localeId, compilation) => {
  const filename = `${chunkNameExtractCss}.css`;

  if (false) {}

  const content = readClientFile(filename, localeId, compilation); // 如果内容大于 50k

  if (content.length > thresholdStylesExtracted) {
    if (false) {} else {
      return combineFilePaths(filename, localeId);
    } // return `<link id="__koot-extracted-styles" media="all" rel="stylesheet" href="${
    //     process.env.WEBPACK_BUILD_TYPE === 'spa'
    //         ? getClientFilePath(
    //               `${chunkNameExtractCssForImport}.css`,
    //               localeId
    //           )
    //         : getClientFilePath(filename, localeId)
    // }" />`;

  }

  return `<style id="__koot-extracted-styles" type="text/css" ${styleTagGlobalAttributeName}>${content}</style>`;
}; // const functionNameLinkOnLoad = '__KOOT_GLOBAL_STYLE_ON_LOAD__';

/**
 * 返回 link 标签
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {...any} args `utils/get-client-file-path` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


const combineFilePaths = (...args) => {
  let pathnames = getClientFilePath(...args);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  return pathnames.map(pathname => `<link id="__koot-extracted-styles" media="all" rel="stylesheet" href="${pathname}" ${styleTagGlobalAttributeName} />`).join('');
};

/***/ }),

/***/ "./node_modules/koot/React/is-render-safe.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/React/is-render-safe.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  get: getSSRContext
} = __webpack_require__(/*! ../libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");

const {
  needConnectComponents
} = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/**
 * 当前执行和渲染有关的操作是否安全
 * - 客户端: 永远安全
 * - 服务器端: SSR `dataToStore` 之前不安全，之后安全
 * @returns {boolean}
 */


module.exports = () => !Boolean( true && getSSRContext()[needConnectComponents]);

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actionType.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actionType.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATION_UPDATE": () => (/* binding */ LOCATION_UPDATE)
/* harmony export */ });
const LOCATION_UPDATE = '@@KOOT@@LOCATION_UPDATE';

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actions.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");

function update(location) {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__.LOCATION_UPDATE,
    location
  };
}

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/api.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/api.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.js */ "./node_modules/koot/React/realtime-location/actions.js");

const update = location => dispatch => {
  return dispatch(_actions_js__WEBPACK_IMPORTED_MODULE_0__.update(location));
};

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/index.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATION_UPDATE": () => (/* reexport safe */ _actionType__WEBPACK_IMPORTED_MODULE_0__.LOCATION_UPDATE),
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "update": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.update),
/* harmony export */   "REALTIME_LOCATION_REDUCER_NAME": () => (/* binding */ REALTIME_LOCATION_REDUCER_NAME),
/* harmony export */   "actionUpdate": () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_3__.update)
/* harmony export */ });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/koot/React/realtime-location/reducer.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/koot/React/realtime-location/api.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/koot/React/realtime-location/actions.js");




const REALTIME_LOCATION_REDUCER_NAME = 'realtimeLocation';


/***/ }),

/***/ "./node_modules/koot/React/realtime-location/reducer.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/reducer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actionType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType.js */ "./node_modules/koot/React/realtime-location/actionType.js");

const initialState = {};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = initialState, action) {
  switch (action.type) {
    case _actionType_js__WEBPACK_IMPORTED_MODULE_0__.LOCATION_UPDATE:
      return action.location;
  }

  return state;
}

/***/ }),

/***/ "./node_modules/koot/React/redux.js":
/*!******************************************!*\
  !*** ./node_modules/koot/React/redux.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESET_CERTAIN_STATE": () => (/* binding */ RESET_CERTAIN_STATE),
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "middlewares": () => (/* binding */ middlewares),
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _realtime_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime-location */ "./node_modules/koot/React/realtime-location/index.js");
/* harmony import */ var _realtime_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./realtime-location */ "./node_modules/koot/React/realtime-location/reducer.js");
/* harmony import */ var _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ReactApp/server/redux */ "./node_modules/koot/ReactApp/server/redux.js");
/* harmony import */ var _i18n_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n/redux */ "./node_modules/koot/i18n/redux/index.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./history */ "./node_modules/koot/React/history.js");








 // import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"


 // const getHistory = () => {
//     if (__SPA__) {
//         return require('react-router/lib/hashHistory')
//     }
//     return require('react-router/lib/browserHistory')
// }

/******************************************************************************
 *   ┌─┐┌─┐┌┐┌┌─┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐
 *  │  │ ││││└─┐ │ ├─┤│││ │ └─┐
 * └─┘└─┘┘└┘└─┘ ┴ ┴ ┴┘└┘ ┴ └─┘
 *****************************************************************************/

const RESET_CERTAIN_STATE = '@@KOOT@@RESET_CERTAIN_STATE';
/******************************************************************************
 *   ┌─┐┌─┐┌─┐┌─┐┌┐┌┌┬┐┬┌─┐┬  ┌─┐
 *  ├┤ └─┐└─┐├┤ │││ │ │├─┤│  └─┐
 * └─┘└─┘└─┘└─┘┘└┘ ┴ ┴┴ ┴┴─┘└─┘
 *****************************************************************************/

/**
 * @type {Array}
 */

const reducers = {
  // 路由状态扩展
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_2__.routerReducer,
  // history: __CLIENT__ ? () => history : () => '123',
  // 目的：新页面请求处理完成后再改变URL
  [_realtime_location__WEBPACK_IMPORTED_MODULE_4__.REALTIME_LOCATION_REDUCER_NAME]: _realtime_location__WEBPACK_IMPORTED_MODULE_5__.default,
  // 对应服务器生成的store
  [_ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_6__.SERVER_REDUCER_NAME]: _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_6__.serverReducer
};

if (_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default()()) {
  reducers.localeId = _i18n_redux__WEBPACK_IMPORTED_MODULE_8__.reducerLocaleId; // reducers.locales = i18nReducerLocales
}
/**
 * @type {Object}
 */


const initialState = (() => {
  if (false) {}
  if (true) return {};
})();
/**
 * @type {Array}
 */

const middlewares = [(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default()), (0,react_router_redux__WEBPACK_IMPORTED_MODULE_2__.routerMiddleware)(_history__WEBPACK_IMPORTED_MODULE_9__.default)]; // const enhancerClientModifyState = createStore => (
//     reducer,
//     preloadedState,
//     enhancer
// ) => {
//     const store = createStore(reducer, preloadedState, enhancer);
//     console.log({ store, state: store.getState() });
//     return store;
// };
// const rootReducerClientResetCertainState = (state, action) => {
//     const reset = (data, prefix = '') => {
//         for (const [key, value] of Object.entries(data)) {
//             const newKey = prefix ? `${prefix}.${key}` : key;
//             if (
//                 typeof value === 'object' &&
//                 typeof state[key] === 'object' &&
//                 !Array.isArray(state[key])
//             ) {
//                 return reset(value, newKey);
//             } else if (value === true) {
//                 console.log(newKey);
//             }
//         }
//     };
//     if (
//         __CLIENT__ &&
//         action.type === RESET_CERTAIN_STATE &&
//         typeof action.data === 'object'
//     ) {
//         reset(action.data);
//     }
// };

/**
 * 创建 redux store
 * - _注_: 与 redux 提供的 `createStore` 方法略有不同，仅需提供项目所用的 reducer 对象和中间件列表，**不需要**初始 state 对象
 * @param {Object|Function} appReducers 项目使用的 reducer，可为 `ReducersMapObject` (形式为 Object 的列表)，也可以为 `Reducer` (reducer 函数)
 * @param {Function[]} appMiddlewares 项目的中间件列表
 * @param {Function[]} appEnhancers 项目的 store 增强函数 (enhancer) 列表
 * @returns {Object} redux store
 */

const createStore = (appReducer, appMiddlewares = [], appEnhancers = []) => {
  // const toCompose = [
  //     reduxApplyMiddleware(...middlewares.concat(appMiddlewares))
  // ];
  // if (__CLIENT__) toCompose.push(enhancerClientModifyState);
  const projectReducer = (() => {
    if (typeof appReducer === 'function') {
      const kootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({ ...reducers
      });
      return (state, action) => {
        const {
          appState,
          kootState
        } = sliceStateForReducers(state);
        return { ...appReducer(appState, action),
          ...kootReducer(kootState, action)
        };
      };
    } else if (typeof appReducer === 'object' && !Array.isArray(appReducer)) {
      return (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({ ...appReducer,
        ...reducers
      });
    }

    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({ ...reducers
    });
  })();

  if (!Array.isArray(appEnhancers) && appEnhancers) appEnhancers = [appEnhancers];else if (!appEnhancers) appEnhancers = [];
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(projectReducer, initialState, (0,redux__WEBPACK_IMPORTED_MODULE_1__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares.concat(appMiddlewares)), ...appEnhancers));
};
/******************************************************************************
 *   ┬ ┬┌─┐┬  ┌─┐┌─┐┬─┐┌─┐
 *  ├─┤├┤ │  ├─┘├┤ ├┬┘└─┐
 * ┴ ┴└─┘┴─┘┴  └─┘┴└─└─┘
 *****************************************************************************/

/**
 * 将当前 state 拆分为 _appState_ 和 _kootState_
 * @param {Object} state
 * @returns {Object} { appState, kootState }
 */

const sliceStateForReducers = state => {
  const appState = {};
  const kootState = {};
  const keysForKootReducer = Object.keys(reducers);
  Object.keys(state).forEach(key => {
    if (keysForKootReducer.includes(key)) {
      kootState[key] = state[key];
    } else {
      appState[key] = state[key];
    }
  });
  return {
    appState,
    kootState
  };
};

/***/ }),

/***/ "./node_modules/koot/React/redux/reset-store.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/React/redux/reset-store.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultKeysToPreserve": () => (/* binding */ defaultKeysToPreserve),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * 重置 store，清空所有 state
 * @param {Object} store
 * @param {string[]} [keysToPreserve]
 */
const resetStore = (store, keysToPreserve = defaultKeysToPreserve) => {
  const state = store.getState();
  Object.keys(state).filter(key => !keysToPreserve.includes(key)).forEach(key => {
    state[key] = undefined;
    delete state[key];
  }); // 触发所有 reducer 的初始化

  store.dispatch({
    type: '@@KOOT@@STATE_RESET_REDUCER_INIT'
  });
  return store;
};
/** @type {Array} 需要保留（不需要进行删除操作）的 redux store state 属性名 */


const defaultKeysToPreserve = ['localeId', 'locales' // 'server'
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetStore);

/***/ }),

/***/ "./node_modules/koot/React/render-template.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/render-template.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ejs = __webpack_require__(/*! ejs */ "ejs");

const readClientFile = __webpack_require__(/*! ../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

const getClientFilePath = __webpack_require__(/*! ../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");
/**
 * 渲染 ejs 模板
 * @param {Object} options
 * @param {String} options.template ejs 模板内容
 * @param {Object} [options.inject={}] 注入对象
 * @param {Object} [options.state] 当前 Redux state。也可以传入 Redux store
 * @param {Object} [options.compilation] webpack compilation
 * @param {Object} [options.localeId] 强制更变为目标语种
 * @returns {String}
 */


module.exports = ({
  template = DEFAULT_TEMPLATE,
  inject = {},
  store,
  state,
  compilation,
  ctx,
  localeId
}) => {
  if (typeof state !== 'object' && typeof store === 'object' && typeof store.getState === 'function') state = store.getState();else if (typeof state === 'object' && typeof state.getState === 'function') state = state.getState();

  try {
    for (const key in inject) {
      if (typeof inject[key] === 'function') inject[key] = inject[key](template, state, ctx);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    // console.log(e);
    throw e;
  } // 开发环境: 将 content('critical.js') 转为 pathname() 方式


  if (false) {} // console.log(template)

  const thisLocaleId = localeId || (typeof state === 'object' ? state.localeId : undefined);
  return ejs.render(template, {
    inject,
    content: filename => readClientFile(filename, thisLocaleId, compilation),
    pathname: filename => getClientFilePath(filename, thisLocaleId)
  }, {});
};

const DEFAULT_TEMPLATE = `<!DOCTYPE html>
<html>

<head<%- inject.htmlLang %>>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

    <title><%= inject.title %></title>

    <base target="_self">

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="format-detection" content="telephone=no,email=no,address=no">
    <meta name="format-detection" content="email=no">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="HandheldFriendly" content="true">
    <meta name="mobile-web-app-capable" content="yes">

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <!-- IE/Edge/Multi-engine -->
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <!-- Customize -->
    <meta name="theme-color" content="#0092f5" />

    <%- inject.metas %>
    <%- inject.styles %>
</head>

<body class="koot-system">
    <div id="root"><%- inject.react %></div>
    <script type="text/javascript"><%- content('critical.js') %></script>
    <%- inject.scripts %>
</body>

</html>`;

/***/ }),

/***/ "./node_modules/koot/React/root-context.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/React/root-context.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createValue": () => (/* binding */ createValue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // ============================================================================

const defaultValue = {
  store: undefined,
  history: undefined,
  localeId: undefined,
  locales: {}
};

if (process.env.WEBPACK_BUILD_STAGE === 'server') {
  defaultValue.ctx = undefined;
  defaultValue.styles = {};
}

const createValue = (value = {}) => ({ ...defaultValue,
  ...value
}); // ============================================================================

const RootContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(createValue());
RootContext.displayName = 'KootRootContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootContext);

/***/ }),

/***/ "./node_modules/koot/React/route-check.js":
/*!************************************************!*\
  !*** ./node_modules/koot/React/route-check.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * 检查下一个路由状态和当前客户端的 location 是否一致。多用于针对基于路由代码拆分的当前路由检测。
 * @param {Object} nextState `react-router` 传入的下一个路由状态对象
 * @param {Boolean} [isAlwaysTrue=false] 是否默认为 `true`
 * @returns {Boolean}
 */
module.exports = (nextState, isAlwaysTrue) => {
  if (isAlwaysTrue || typeof location === 'undefined' || true || false) return true;
  let next = nextState.location.pathname;
  let curr = location.pathname;
  if (next.substr(0, 1) !== '/') next = '/' + next;
  if (curr.substr(0, 1) !== '/') curr = '/' + curr;
  return Boolean(next === curr);
};

/***/ }),

/***/ "./node_modules/koot/React/styles.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/React/styles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAndWriteIntoHead": () => (/* binding */ checkAndWriteIntoHead),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
// import { Component, createContext } from 'react'

/**
 * 生成 StyleMapContext
 */
// export const createStyleMapContext = () => {
//     return createContext({})
// }
// export let StyleMapContext = createStyleMapContext()

/**
 * 将样式表写入到 head 标签内
 * @param {Object} styleMap
 */
const checkAndWriteIntoHead = (styleMap = {}) => {
  if (typeof styleMap !== 'object') return;
  Object.keys(styleMap).forEach(wrapper => {
    const style = styleMap[wrapper];
    const el = document.querySelector(`style[${"data-koot-module"}=${wrapper}]`);

    if (style.count > 0) {
      // 配置样式
      if (!el && style.css !== '') {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = style.css; // styleTag.setAttribute('id', wrapper);

        styleTag.setAttribute("data-koot-module", wrapper);
        document.getElementsByTagName('head')[0].appendChild(styleTag);
      }
    } else {
      // 移除样式
      if (el) {
        el.remove();
      }
    }
  });
}; // const getStyleMap = (passedMap) => {
//     if (__CLIENT__)
//         return passedMap
//     if (typeof __KOOT_SSR__ === 'object') {
//         // console.log({ LocaleId })
//         return __KOOT_SSR__.styleMap.get(LocaleId)
//     }
//     return passedMap
// }

/**
 * 追加样式
 * @param {Object} styleMap
 * @param {Object|Array} style
 */

const append = (styleMap = {}, style) => {
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(theStyle => append(styleMap, theStyle));
  if (typeof style !== 'object') return;

  if (!styleMap[style.wrapper]) {
    styleMap[style.wrapper] = {
      css: style.css,
      count: 1
    };
  } else {
    styleMap[style.wrapper].count++;
  }

  if (false) {}
};
/**
 * 移除样式
 * @param {Object} styleMap
 * @param {*} style
 */

const remove = (styleMap = {}, style) => {
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(theStyle => remove(theStyle));
  if (typeof style !== 'object') return;

  if (styleMap[style.wrapper]) {
    styleMap[style.wrapper].count--;
  }
}; // export const idDivStylesContainer = '__KOOT_ISOMORPHIC_STYLES_CONTAINER__'
// /**
//  * 分析 HTML 代码，解析已有样式表，将其从 HTML 代码中移除，并返回可以直接写入到 head 标签内的样式表代码
//  * @param {String} html
//  * @returns {String} htmlStyles
//  */
// export const parseHtmlForStyles = (html) => {
//     const matches = html.match(new RegExp(`<div id="${idDivStylesContainer}">(.*?)</div>`, 'm'))
//     if (
//         !matches ||
//         typeof matches !== 'object' ||
//         typeof matches.index === 'undefined' ||
//         typeof matches[1] === 'undefined'
//     )
//         return {
//             html,
//             htmlStyles: ''
//         }
//     return {
//         html: html.substr(0, matches.index),
//         htmlStyles: matches[1]
//     }
// }
// /**
//  * React 组件: 样式表内容容器
//  */
// export class StylesContainer extends Component {
//     static contextType = StyleMapContext
//     render() {
//         return (
//             <div
//                 id={idDivStylesContainer}
//                 dangerouslySetInnerHTML={{
//                     __html: Object.keys(this.context)
//                         .filter(id => !!this.context[id].css)
//                         .map(id => `<style id="${id}">${this.context[id].css}</style>`)
//                         .join('')
//                 }}
//             />
//         )
//     }
// }

/***/ }),

/***/ "./node_modules/koot/React/validate-inject.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/validate-inject.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const injectHtmlLang = __webpack_require__(/*! ./inject/htmlLang */ "./node_modules/koot/React/inject/htmlLang.js");

const injectMetas = __webpack_require__(/*! ./inject/metas */ "./node_modules/koot/React/inject/metas.js");

const injectStyles = __webpack_require__(/*! ./inject/styles */ "./node_modules/koot/React/inject/styles.js");

const injectScripts = __webpack_require__(/*! ./inject/scripts */ "./node_modules/koot/React/inject/scripts.js");
/**
 * 生成 ejs 使用的模板替换对象
 * @param {Object} options 当前设置
 * @param {Object} [options.injectCache={}] 静态注入对象/当前语言的静态注入缓存对象
 * @param {Object} [options.filemap={}] (当前语言的) 文件名对应表
 * @param {Object} [options.entrypoints={}] (当前语言的) 入口表
 * @param {String} [options.localeId] 当前语种 ID
 * @param {Object} [options.localeFileMap] (SPA) 语言包文件对照表
 * @param {string} [options.defaultLocaleId] (SPA) 默认语种 ID
 * @param {String} [options.title] 页面标题
 * @param {String} [options.metaHtml] meta 标签 HTML 代码
 * @param {String} [options.reactHtml] 已处理完毕的 React 同构结果 HTML 代码
 * @param {String} [options.stylesHtml] 已处理完毕的样式结果 HTML 代码
 * @param {String} [options.reduxHtml] 已处理完毕的 redux store 结果 HTML 代码
 * @param {Object} [options.SSRState] SSR 状态对象
 * @param {Object} [options.needInjectCritical] 是否需要自动注入 critical 内容
 * @param {Boolean} [options.needInjectCritical.styles=false]
 * @param {Boolean} [options.needInjectCritical.scripts=false]
 * @returns {Object}
 */


module.exports = (options = {}) => {
  const {
    injectCache = {},
    manifest = {},
    filemap = {},
    entrypoints = {},
    compilation,
    localeId,
    localeFileMap,
    defaultLocaleId,
    title,
    metaHtml,
    reactHtml,
    stylesHtml,
    reduxHtml,
    SSRState,
    needInjectCritical = {
      styles: false,
      scripts: false
    }
  } = options;
  return {
    htmlLang: injectHtmlLang(localeId),
    title,
    metas: injectMetas({
      manifest,
      metaHtml,
      localeId,
      compilation
    }),
    styles: injectStyles({
      needInjectCritical: needInjectCritical.styles,
      injectCache,
      filemap,
      stylesHtml,
      localeId,
      compilation
    }),
    react: reactHtml,
    scripts: injectScripts({
      needInjectCritical: needInjectCritical.scripts,
      injectCache,
      entrypoints,
      localeId,
      localeFileMap,
      defaultLocaleId,
      reduxHtml,
      SSRState,
      compilation
    })
  };
};

/***/ }),

/***/ "./node_modules/koot/React/validate/redux-config.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/validate/redux-config.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux */ "./node_modules/koot/React/redux.js");


/**
 * 验证 Redux 配置
 * 
 * @param {Object} kootConfigRedux Koot 配置项: `redux`
 * @returns {Object} reduxConfig
 */

const validateReduxConfig = (kootConfigRedux = {}) => {
  const {
    syncCookie = true
  } = kootConfigRedux;
  const reduxConfig = {
    syncCookie
  };

  if (typeof kootConfigRedux.store === 'undefined') {
    const {
      combineReducers: theReducers = {}
    } = kootConfigRedux;
    Object.keys(_redux__WEBPACK_IMPORTED_MODULE_1__.reducers).forEach(reducerName => {
      theReducers[reducerName] = _redux__WEBPACK_IMPORTED_MODULE_1__.reducers[reducerName];
    });

    reduxConfig.factoryStore = () => (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(theReducers), _redux__WEBPACK_IMPORTED_MODULE_1__.initialState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(..._redux__WEBPACK_IMPORTED_MODULE_1__.middlewares));
  } else if (typeof kootConfigRedux.store === 'function') {
    reduxConfig.factoryStore = kootConfigRedux.store;
  } else if (typeof kootConfigRedux.store === 'object') {
    reduxConfig.store = kootConfigRedux.store;
  }

  return reduxConfig;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateReduxConfig);

/***/ }),

/***/ "./node_modules/koot/React/validate/router-config.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/React/validate/router-config.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/error-msg */ "./node_modules/koot/libs/error-msg.js");
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_validte_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../i18n/validte-routes */ "./node_modules/koot/i18n/validte-routes.js");


/**
 * 验证 `react-router` 配置
 *
 * @param {Object} kootConfigRouter Koot 配置项: `router`
 * @returns {Promise<Object>} 路由配置对象，可直接供 `react-router` 使用
 */

const validateRouterConfig = kootConfigRouter => getPromise(kootConfigRouter).then(config => {
  if (typeof config !== 'object') throw new Error(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default()('VALIDATE_ROUTER_CONFIG', 'no router config or router object invalid'));

  const { ...routes
  } = (() => {
    if (Array.isArray(config)) {
      return {
        childRoutes: [...config]
      };
    }

    return config;
  })();

  if (!routes.path) {
    routes.path = '/';
  }

  handleIndexRoute(routes);
  (0,_i18n_validte_routes__WEBPACK_IMPORTED_MODULE_1__.default)(routes);
  return routes;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateRouterConfig); // ============================================================================

const getPromise = kootConfigRouter => {
  if (typeof kootConfigRouter !== 'function') return new Promise(resolve => resolve(kootConfigRouter));
  const value = kootConfigRouter();
  if (typeof value.then === 'function' || value instanceof Promise) return value;
  return new Promise(resolve => resolve(value));
};
/**
 * 处理默认路由
 * @param {any} route
 */


const handleIndexRoute = route => {
  if (route && (!route.childRoutes || !route.childRoutes.length)) {
    return;
  }

  route.childRoutes = route.childRoutes.filter(child => {
    // eslint-disable-line
    if (child.isIndex) {
      /* istanbul ignore next */
      if (false) {}
      /* istanbul ignore else */


      if (!route.indexRoute) {
        delete child.path; // eslint-disable-line

        route.indexRoute = child; // eslint-disable-line

        return false;
      }
    }

    return true;
  });
  route.childRoutes.forEach(handleIndexRoute);
};

/***/ }),

/***/ "./node_modules/koot/defaults/before-build.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/defaults/before-build.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Webpack 打包相关的常量，包括：
 * - 文件名
 * - 代码中使用的临时常量名
 * - `koot.config.js` 的属性名
 * - 其他代码中用到的常量名
 */
module.exports = {
  // 处理项目配置相关
  keyFileProjectConfigTempFull: '__FILE_PROJECT_CONFIG_TEMP_FULL__',
  keyFileProjectConfigTempPortionServer: '__FILE_PROJECT_CONFIG_TEMP_PORTION_SERVER__',
  keyFileProjectConfigTempPortionClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_CLIENT__',
  keyFileProjectConfigTempPortionOtherClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_OTHER_CLIENT__',
  keyKootBaseVersion: '__KOOT_BASE_VERSION__',
  dirConfigTemp: 'logs/tmp/config',
  filenameProjectConfigTempFull: 'full.*.js',
  filenameProjectConfigTempPortionServer: 'portion.server.*.js',
  filenameProjectConfigTempPortionClient: 'portion.client.*.js',
  filenameProjectConfigTempPortionOtherClient: 'portion.client-other.*.js',
  propertiesToExtract: [['name', ''], ['type', 'react'], ['template', ''], ['templateInject', ''], ['routes', ''], ['historyType', ''], ['store', ''], ['cookiesToStore', ''], ['client', {}], ['server', {}]],
  typesSPA: ['spa', 'reactspa', 'react-spa'],
  // 打包 DLL 相关
  keyConfigBuildDll: '__BUILD_DLL__',
  filenameDll: '.dll.js',
  filenameDllManifest: '.dll.manifest.json',
  dirDll: 'dev-dll',
  // 其他项目配置项名
  keyConfigQuiet: '__QUIET__',
  keyConfigOutputPathShouldBe: '__OUTPUT_PATH_SHOULD_BE__',
  keyConfigWebpackSPATemplateInject: '__KOOT_WEBPACK_CONFIG_FOR_SPA_TEMPLATE_INJECT__',
  keyConfigWebpackLocaleId: '__KOOT_WEBPACK_CONFIG_LOCALE_ID__',
  keyConfigWebpackSPAServer: '__SPA_SERVER__',
  keyConfigClientAssetsPublicPath: '__CLIENT_ASSETS_PUBLIC_PATH__',
  keyConfigClientServiceWorkerPathname: '__CLIENT_SERVICE_WORKER_PATHNAME__',
  keyConfigIcons: '__APP_ICONS__',
  WEBPACK_OUTPUT_PATH: '__WEBPACK_OUTPUT_PATH',
  CLIENT_ROOT_PATH: '__CLIENT_ROOT_PATH',
  WEBPACK_MODIFIED_PUBLIC_PATH: '__WEBPACK_MODIFIED_PUBLIC_PATH',
  // CLEANUP_PREVIOUS_BUILDS_IDS: '__CLEANUP_PREVIOUS_BUILDS_IDS',
  // CLEANUP_PREVIOUS_BUILDS_FILES: '__CLEANUP_PREVIOUS_BUILDS_FILES',
  // 自定义 chunk
  chunkNameExtractCss: '__KOOT__EXTRACT__CSS__',
  chunkNameExtractCssForImport: '__KOOT__EXTRACT__CSS__NO__PUBLIC__PATH__',
  chunkNameClientRunFirst: '__KOOT__CLIENT__RUN__FIRST__',
  // [开发环境] 临时文件名
  filenameWebpackDevServerPortTemp: '.dev_webpack-dev-server_port',
  filenameBuilding: '.koot-building',
  filenameBuildFail: '.koot-build-fail',
  filenameSPATemplateInjectJS: '.spa-template-inject.LOCALEID.js',
  // [生产环境] 文件名
  // filenameCurrentBundle: '.koot-current',
  // 标签属性
  styleTagGlobalAttributeName: 'data-koot-global',
  styleTagModuleAttributeName: 'data-koot-module',
  scriptTagEntryAttributeName: 'data-koot-entry',
  // 模板中的一些判断阈值

  /**
   * @type {number} 全局 CSS 抽出总结果文件尺寸阈值 (字节)
   * - 如果超过这个值，会采用 <link> 引用的方式
   * - 如果小于等于这个值，直接将文件内容写入 HTML
   */
  thresholdStylesExtracted: 50 * 1024,

  /**
   * @type {number} run-first 入口的文件尺寸阈值 (字节)
   * - 如果超过这个值，会采用 <script> 引用的方式
   * - 如果小于等于这个值，直接将文件内容写入 HTML
   */
  thresholdScriptRunFirst: 15 * 1024,

  /** @type {string} 打包结果目录中的文件对照表文件名 */
  buildManifestFilename: '.koot-public-manifest.json',

  /** @type {string} 打包结果目录中输出文件总集文件名 */
  buildOutputsFilename: '.koot-public-outputs.json',

  /** @type {string} Webpack Dev Server 热更新 Web Socket 地址 */
  pathnameSockjs: `sockjs-node`,

  /** Webpack compilation 对象中的定制属性 - 额外 Meta 标签的 HTML 代码 */
  compilationKeyHtmlMetaTags: '.htmlMetaTags__',

  /** 针对 SPA 打包时模板 injection 操作需要的 Webpack compilation 对象对应的全局变量名 */
  GLOBAL_VAR_BUILD_COMPILATION_FOR_SPA_INJECTION: '__KOOT_GLOBAL_VAR_BUILD_COMPILATION_FOR_SPA_INJECTION__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines-server.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/defaults/defines-server.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports =  true ? {
  needConnectComponents: '__NEED_CONNECT_COMPONENTS__',
  ssrContext: '__KOOT_SSR__',
  koaContext: '__KOOT_CTX__'
} : 0;

/***/ }),

/***/ "./node_modules/koot/defaults/defines-service-worker.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/defaults/defines-service-worker.js ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {
  scopeNeedTransformPathname: '<<CURRENT_PATHNAME>>'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines-window.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/defaults/defines-window.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {
  /** [客户端] 语言ID */
  LOCALEID: '__KOOT_LOCALEID__',
  STORE: '__KOOT_STORE__',
  HISTORY: '__KOOT_HISTORY__',
  CACHE: '__KOOT_CACHE__',
  REDUXSTATE: '__REDUX_STATE__',
  SSRSTATE: '__KOOT_SSR_STATE__',
  SPALOCALEFILEMAP: '__KOOT_SPA_LOCALE_FILE_MAP__',
  DEV_NATIVE_CONSOLE: '__KOOT_DEV_NATIVE_CONSOLE__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/defaults/defines.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = {
  __KOOT_INJECT_ATTRIBUTE_NAME__: 'koot-inject',
  __KOOT_INJECT_METAS_START__: 'koot-inject-metas-start',
  __KOOT_INJECT_METAS_END__: 'koot-inject-metas-end',
  // hl 这个参数名是参考了Instargram
  changeLocaleQueryKey: 'hl',
  sessionStoreKey: '__KOOT_SESSION_STORE__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/dev-request-uri.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/defaults/dev-request-uri.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * [开发环境] 特殊的请求 URI
 */
module.exports = {
  dll: '/__koot_dev_dll',
  serviceWorker: `/__KOOT_DEV_SERVICE_WORKER.${ true ? encodeURIComponent("Diablohu's Admin Portal") : 0}.js`
};

/***/ }),

/***/ "./node_modules/koot/defaults/entrypoints.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/defaults/entrypoints.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * 默认的入口
 * 
 * @module koot/defaults/entrypoints
 */
module.exports = ['client'];

/***/ }),

/***/ "./node_modules/koot/defaults/i18n.js":
/*!********************************************!*\
  !*** ./node_modules/koot/defaults/i18n.js ***!
  \********************************************/
/***/ ((module) => {

/** 默认 i18n 配置 */
module.exports = {
  use: 'query',
  expr: '__',
  cookieKey: 'spLocaleId'
};

/***/ }),

/***/ "./node_modules/koot/i18n/action-types.js":
/*!************************************************!*\
  !*** ./node_modules/koot/i18n/action-types.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18N_INIT": () => (/* binding */ I18N_INIT),
/* harmony export */   "I18N_SET_LOCALES": () => (/* binding */ I18N_SET_LOCALES)
/* harmony export */ });
const I18N_INIT = '@@KOOT@@I18N_INIT';
const I18N_SET_LOCALES = '@@KOOT@@I18N_SET_LOCALES';

/***/ }),

/***/ "./node_modules/koot/i18n/generate-html-redirect-metas.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/i18n/generate-html-redirect-metas.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  use: defaultUse
} = __webpack_require__(/*! ../defaults/i18n */ "./node_modules/koot/defaults/i18n.js");

const {
  changeLocaleQueryKey
} = __webpack_require__(/*! ../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/**
 * 生成用以声明该页面其他语种 URL 的 meta 标签的 HTML 代码
 * @param {Object} options
 * @param {String} options.localeId 当前语种
 * @param {string[]} options.availableLocaleIds
 * @param {string} [options.use=query]
 * @param {*} [options.ctx]
 * @returns {String} HTML 代码
 */


const generateHtmlRedirectMetas = ({
  ctx = {},
  localeId = '',
  availableLocaleIds,
  use = defaultUse
}) => {
  if (!Array.isArray(availableLocaleIds)) return '';
  if (!availableLocaleIds.length) return '';
  const {
    hrefTrue: href = '',
    originTrue: origin = '',
    query = {},
    querystring = ''
  } = ctx;
  const isUseRouter = use === 'router';
  const isUseSubdomain = use === 'subdomain';
  let html = availableLocaleIds //getLocaleIds()
  .filter(thisLocaleId => thisLocaleId !== localeId).map(l => {
    let thisHref = '';

    if (isUseRouter) {
      thisHref = origin + href.replace(new RegExp(`^${origin}`), '').replace(new RegExp(`^${localeId}`), l).replace(new RegExp(`^/${localeId}`), '/' + l);
    } else if (isUseSubdomain) {
      thisHref = href.replace(new RegExp(`://${localeId}.`), `://${l}.`);
    } else {
      thisHref = (() => {
        if (query[changeLocaleQueryKey] === '') {
          return href.replace(new RegExp(`${changeLocaleQueryKey}=`), `${changeLocaleQueryKey}=${l}`);
        }

        if (typeof query[changeLocaleQueryKey] === 'string') return href.replace(new RegExp(`${changeLocaleQueryKey}=[a-zA-Z-_]+`), `${changeLocaleQueryKey}=${l}`);
        return href + (querystring ? `&` : href.substr(href.length - 1) === '?' ? '' : `?`) + `${changeLocaleQueryKey}=${l}`;
      })();
    }

    if (false) {}
    return `<link rel="alternate" hreflang="${l}" href="${thisHref}" />`;
  }).join('');

  if (isUseRouter) {
    html += `<base href="/${localeId}">`;
  }

  return html;
};

module.exports = generateHtmlRedirectMetas;

/***/ }),

/***/ "./node_modules/koot/i18n/get-locales-config.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/i18n/get-locales-config.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

let locales;
/**
 * 获取 i18n 配置数组
 * @returns {Array}
 */

module.exports = () => {
  if (!Array.isArray(locales)) {
    if (isI18nEnabled()) {
      locales = JSON.parse("[[\"zh\",{},null,\"./locales/zh.js\"],[\"en\",{},null,\"./locales/en.js\"]]") || [];
    } else {
      locales = [];
    }
  }

  return locales;
};

/***/ }),

/***/ "./node_modules/koot/i18n/get-type.js":
/*!********************************************!*\
  !*** ./node_modules/koot/i18n/get-type.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/**
 * 获取当前多语言配置类型
 * @returns {String}
 */


module.exports = () => isI18nEnabled() ? JSON.parse("\"default\"") || 'default' : undefined;

/***/ }),

/***/ "./node_modules/koot/i18n/is-enabled.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/is-enabled.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * 检查当前项目是否开启多语言支持
 * @returns {Boolean}
 */
const isI18nEnabled = () => {
  if ( false || !JSON.parse("true")) return false;
  return true;
};

module.exports = isI18nEnabled;

/***/ }),

/***/ "./node_modules/koot/i18n/locale-ids.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/locale-ids.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getLocalesConfig = __webpack_require__(/*! ./get-locales-config */ "./node_modules/koot/i18n/get-locales-config.js");

let result;
/**
 * 获取 i18n 语种列表
 * @returns {Array}
 */

module.exports = (() => {
  if (!Array.isArray(result)) {
    result = getLocalesConfig();
    result = result.map(l => l[0]);
    if (!result.length) result = [''];
  }

  return result;
})();

/***/ }),

/***/ "./node_modules/koot/i18n/locales.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/i18n/locales.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalesObject": () => (/* binding */ getLocalesObject),
/* harmony export */   "locales": () => (/* binding */ locales),
/* harmony export */   "setLocales": () => (/* binding */ setLocales),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  SSRSTATE
} = __webpack_require__(/*! ../defaults/defines-window */ "./node_modules/koot/defaults/defines-window.js");

const {
  get: getSSRContext
} = __webpack_require__(/*! ../libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");

const __devLocales = {};
/**
 * 根据当前环境，返回语言包对象的引用
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 * @returns {Object}
 */

const getLocalesObject = () => {
  if (true) {
    if (false) {} else return getSSRContext().locales || false;
  }

  if (false) {}

  return false;
};
/**
 * @type {Object}
 * 语言包对象
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 */

let locales = (() => getLocalesObject() || {})();
const setLocales = (newLocales = {}) => {
  // const obj = getLocalesObject()
  if (locales) Object.assign(locales, newLocales);else locales = newLocales;
  return locales;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locales);

/***/ }),

/***/ "./node_modules/koot/i18n/redux/index.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/i18n/redux/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerLocaleId": () => (/* binding */ reducerLocaleId),
/* harmony export */   "actionInit": () => (/* binding */ actionInit)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/i18n/action-types.js");
// import parseLanguageList from '../parse-language-list';
// import getLanguagelistFromState from '../get-language-list-from-state';
// import parseLocaleId from '../parse-locale-id';
// import locales from '../locales'

/**
 * Redux reducer: 初始化 localeId
 *
 * @param {*} state
 * @param {*} action
 *
 * @returns {*} state
 */

const reducerLocaleId = (state = null, action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.I18N_INIT:
      return action.localeId;
  }

  return state;
}; // /**
//  * Redux reducer: 初始化 locales
//  *
//  * @param {*} state
//  * @param {*} action
//  *
//  * @returns {*} state
//  */
// export const reducerLocales = (state = {}, action) => {
//     switch (action.type) {
//         case I18N_SET_LOCALES:
//             return Object.assign({}, state, action.locales)
//     }
//     return state
// }

/**
 * Redux action: 初始化
 *
 * @param {Object} state
 * @returns {Object}
 */

const actionInit = localeId => {
  // setLocaleId(localeId)
  // const localeId = __SERVER__
  //     ? init(parseLanguageList(
  //         (typeof state === 'object') ? getLanguagelistFromState(state) : state
  //     ), state.localeId)
  //     : state.localeId
  // setLocaleId(localeId)
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.I18N_INIT,
    localeId: '' + localeId
  };
}; // /**
//  * Redux action: 设置语言包内容对象
//  *
//  * @returns {Object}
//  */
// export const actionLocales = (state) => {
//     return {
//         type: I18N_SET_LOCALES,
//         locales: locales[state.localeId]
//     }
// }

/**
 * 服务器环境：根据语言列表，初始化i18n，获得并赋值 localeId
 *
 * @param {array|string} langList 语言列表
 *
 * @returns (如果已初始化)locales[localeId]
 */
// const init = (langList = [], localeId) => {
//     if (__SERVER__) {
//         // console.log(locales[localeId])
//         if (typeof langList === 'string')
//             if (langList.indexOf(';') > -1)
//                 langList = parseLanguageList(langList);
//             else return init([langList], localeId);
//         const parsed = parseLocaleId(langList);
//         // if (parsed) setLocaleId(parsed)
//         // else setLocaleId(localeId)
//         if (parsed) return parsed;
//         return localeId;
//         // if (locales[localeId]) return locales[localeId]
//     }
// };

/***/ }),

/***/ "./node_modules/koot/i18n/server/check-and-redirect.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/i18n/server/check-and-redirect.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_0__);




/**
 * 在同构中间件流程的匹配 react 路由之前，检查是否需要跳转
 * 如果需要跳转，此时发送跳转请求
 * @param {Object} ctx
 * @returns {Boolean} 是否进行跳转
 */

const checkRouterRedirect = ctx => {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_0___default()()) return false;

  if (false) {}

  if (false) {}

  return false;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkRouterRedirect);

/***/ }),

/***/ "./node_modules/koot/i18n/server/generate-html-redirect-metas.js":
/*!***********************************************************************!*\
  !*** ./node_modules/koot/i18n/server/generate-html-redirect-metas.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generate-html-redirect-metas */ "./node_modules/koot/i18n/generate-html-redirect-metas.js");
/* harmony import */ var _generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 生成用以声明该页面其他语种 URL 的 meta 标签的 HTML 代码
 * @param {Object} options
 * @param {Object} options.ctx
 * @param {Object} options.proxyRequestOrigin Koot 配置: server.proxyRequestOrigin
 * @param {String} options.localeId 当前语种
 * @returns {String} HTML 代码
 */

const generateHtmlRedirectMetas = ({
  ctx,
  localeId
  /*, proxyRequestOrigin*/

}) => {
  if (!_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0___default()()) return '';
  return _generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_1___default()({
    localeId,
    availableLocaleIds: (_locale_ids__WEBPACK_IMPORTED_MODULE_2___default()),
    use: "undefined",
    ctx
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHtmlRedirectMetas);

/***/ }),

/***/ "./node_modules/koot/i18n/server/get-ssr-state.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/i18n/server/get-ssr-state.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * 返回多语言相关的 SSR 状态
 * @returns {Object}
 */
const getSSRState = SSRContext => {
  if (false) {}
  return {
    localeId: SSRContext.LocaleId,
    locales: JSON.parse("\"default\"") === 'store' ? SSRContext.locales[SSRContext.LocaleId] || {} : {}
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSSRState);

/***/ }),

/***/ "./node_modules/koot/i18n/translate.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/i18n/translate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ l),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_defines_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults/defines-window */ "./node_modules/koot/defaults/defines-window.js");
/* harmony import */ var _defaults_defines_window__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_window__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales */ "./node_modules/koot/i18n/locales.js");




let l = undefined;

const resetL = () => {
  if (true) {
    const {
      locales = {},
      LocaleId
    } = (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_1__.get)();
    l = locales[LocaleId] || {};
  } else {}

  (0,_locales__WEBPACK_IMPORTED_MODULE_2__.setLocales)(l);
};

resetL();
let isSPACorrected = false;
let isSSRCorrected = false;

const doCorrect = () => {
  if (false) {} // if (isSSRCorrected) {
  //     console.log('correct', {
  //         isSSRCorrected,
  //         l,
  //     });
  // } else {
  //     console.log('correct', {
  //         isSSRCorrected,
  //         l,
  //         SSR: getSSRContext(),
  //     });
  // }


  if (isSSRCorrected && true) return;

  if (!isSSRCorrected && true && (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_1__.get)().LocaleId) {
    (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_1__.resetLocaleId)();
    resetL();
    isSSRCorrected = true;
    return;
  }

  if (false) {}

  if (false) {}
  if (isSPACorrected && false) return;

  if ( // SPA: 进一步确保语言包可用
  !isSPACorrected && false && typeof window !== 'undefined' && window[_defaults_defines_window__WEBPACK_IMPORTED_MODULE_3__.SSRSTATE] && typeof window[_defaults_defines_window__WEBPACK_IMPORTED_MODULE_3__.SSRSTATE].locales === 'object' && Object.keys(window[_defaults_defines_window__WEBPACK_IMPORTED_MODULE_3__.SSRSTATE].locales).length && (!l || !Object.keys(l).length)) {
    l = window[_defaults_defines_window__WEBPACK_IMPORTED_MODULE_3__.SSRSTATE].locales;
    isSPACorrected = true;
    return;
  }
};
/**
 * 翻译文本
 * 语言包中源文本中的 ${replaceKey} 表示此处需要替换，replaceKey 就是传入的 obj 中对应的值
 *
 * @param {string} key 要翻译的文本 Key
 * @param {*object} obj 文本内对应的替换内容
 *
 * @returns {string} 翻译的文本；如果语言包中没有对应的项，返回 key
 */


const translate = (...args) => {
  doCorrect();
  let key = '';
  let str;
  let options = {};
  const keys = [];
  args.forEach((value, index) => {
    // 如果最后一个参数是 Object，表示为选项
    if (index === args.length - 1 && typeof value === 'object' && !Array.isArray(value)) {
      options = value;
      return;
    }

    if (typeof value === 'string' && value.includes('.')) {
      value.split('.').forEach(value => keys.push(value));
      return;
    }

    keys.push(value);
  });
  const length = keys.length;

  if (args.length === 1 && typeof args[0] === 'object') {
    /**
     * ! 如果只有一个 arg 且为 Object，直接返回该 Object
     */
    return args[0];
  }

  if (typeof keys[0] === 'object') {
    /**
     * 第一个值为 Object，通常是客户端情况，后续值依次取前一个 Object 内对应的值
     */
    key = keys[0];
    let hasUnmatched = false;

    for (let i = 1; i < length; i++) {
      // const value = get(key, keys[i]);
      const value = key[keys[i]]; // console.log(key, value);

      if (typeof value === 'undefined') {
        hasUnmatched = true;
        break;
      } else {
        key = value;
      } // if (typeof key[keys[i]] !== 'undefined') key = key[keys[i]];

    }

    if (hasUnmatched) key = keys[length - 1];
  } else if (length === 1) {
    key = keys[0];
  } else {
    for (let i = 0; i < length; i++) {
      if (typeof l === 'object') {
        if (keys[i] !== '') key += `[${JSON.stringify(keys[i])}]`;
      } else {
        key += (i ? '.' : '') + keys[i];
      }
    }
  } // console.log(key);
  // if (__CLIENT__) {
  //     // console.log(localeId)
  //     console.log(localeId, keys, length, key, l);
  // }


  if (typeof l === 'undefined') {
    str = key;
  } else if (typeof l === 'object') {
    // str = l && typeof l[key] !== 'undefined' ? l[key] : undefined;
    str = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(l, key);
  } // const localeId = _self.curLocaleId
  // if (typeof str === 'undefined' && typeof l === 'object') {
  //     try {
  //         str = get(l, key);
  //         // str = eval('l.' + key);
  //     } catch (e) {}
  // }


  if (typeof str === 'undefined') str = key;
  if (typeof str === 'string') return str.replace(/\$\{([^}]+)\}/g, (match, p) => typeof options[p] === 'undefined' ? p : options[p]);
  return str;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (translate);

/***/ }),

/***/ "./node_modules/koot/i18n/validte-routes.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/i18n/validte-routes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 根据当前项目配置，对路由对象进行改造
 * @param {Object} routes
 * @returns {Object} routes
 */

const validateRoutes = (routes = {}) => {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_0___default()()) return routes;

  if (false) {}

  return routes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateRoutes);

/***/ }),

/***/ "./node_modules/koot/index.js":
/*!************************************!*\
  !*** ./node_modules/koot/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore),
/* harmony export */   "reduxForCreateStore": () => (/* binding */ reduxForCreateStore),
/* harmony export */   "extend": () => (/* reexport safe */ _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "localeId": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.localeId),
/* harmony export */   "store": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.store),
/* harmony export */   "getStore": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getStore),
/* harmony export */   "history": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.history),
/* harmony export */   "getHistory": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getHistory),
/* harmony export */   "getLocaleId": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getLocaleId),
/* harmony export */   "resetLocaleId": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.resetLocaleId),
/* harmony export */   "resetStore": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.resetStore),
/* harmony export */   "resetHistory": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.resetHistory),
/* harmony export */   "getCache": () => (/* binding */ getCache),
/* harmony export */   "getCtx": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getKoaCtx)
/* harmony export */ });
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./React/is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_React_is_render_safe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _React_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React/redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __KOOT_HOC_EXTEND__ */ "./node_modules/koot/React/component-extender.jsx");



 // ============================================================================

/**
 * 手动创建 Redux Store 时需要的相关对象
 * @type {Object}
 */


const {
  createStore,
  ...reduxForCreateStore
} = _React_redux__WEBPACK_IMPORTED_MODULE_0__;

/**
 * 通用的高阶组件/方法的装饰器
 * @type {Function}
 */

 // ============================================================================


 // ============================================================================

const getCache = localeId => {
  if (!_React_is_render_safe__WEBPACK_IMPORTED_MODULE_3___default()()) return {};

  if (false) {}

  if (true) {
    const cache = (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.get)().globalCache;
    if (!cache) return {};
    if (localeId === true) return cache.get((0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getLocaleId)());
    if (localeId) return cache.get(localeId) || {};
    return cache.get('__');
  }
}; // ============================================================================

 // ============================================================================

if (false) {}

/***/ }),

/***/ "./node_modules/koot/libs/error-msg.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/libs/error-msg.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * 生成错误信息
 * @param {String} msg
 * @returns {String}
 */
const errorMsg = (type, msg) => {
  if (typeof type === 'string' && typeof msg === 'string') return `${type}::${msg}`;
  return type;
};

module.exports = errorMsg;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dev-tmp.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dev-tmp.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const getCwd = __webpack_require__(/*! ../utils/get-cwd */ "./node_modules/koot/utils/get-cwd.js");
/**
 * _仅针对开发环境_ 获取开发环境临时目录
 * @param {String} [cwd]
 * @param {String} [type]
 * @returns {String} 如果提供 `type`，则返回对应类型的目录
 */


module.exports = (cwd = getCwd(), type = "") => path.resolve(cwd, 'logs/dev', type ? `.${type}` : '');

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public-foldername.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public-foldername.js ***!
  \******************************************************************/
/***/ ((module) => {

/**
 * 获取客户端打包结果 public 目录名
 * @returns {String}
 */
module.exports = () =>  false ? 0 : `public`;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const getDirDistPublicFoldername = __webpack_require__(/*! ./get-dir-dist-public-foldername */ "./node_modules/koot/libs/get-dir-dist-public-foldername.js");
/**
 * 获取打包结果基础目录
 * 最终的打包目录是该目录下的 includes (默认情况)
 * @param {String} dist 打包结果目录
 * @returns {String}
 */


module.exports = dist => {
  if (!result) {
    result = path.resolve(dist, getDirDistPublicFoldername());
  }

  return result;
};

let result;

/***/ }),

/***/ "./node_modules/koot/libs/get-ssr-state-string.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/libs/get-ssr-state-string.js ***!
  \********************************************************/
/***/ ((module) => {

/**
 * 输出 SSR 时需要的 state 字符串形式结果
 * @param {Object} state
 * @returns {string}
 */
const getSSRStateString = (state = {}) => `JSON.parse(` + `decodeURIComponent("${encodeURIComponent(JSON.stringify(state))}"))`;

module.exports = getSSRStateString;

/***/ }),

/***/ "./node_modules/koot/libs/get-sw-scope-from-env.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/libs/get-sw-scope-from-env.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-restricted-globals */
const {
  scopeNeedTransformPathname
} = __webpack_require__(/*! ../defaults/defines-service-worker */ "./node_modules/koot/defaults/defines-service-worker.js");
/**
 * 基于环境变量，获取 service worker 的 scope
 * @param {string} [scope]
 * @returns {string} scope 路径名，前后都有 `/`
 */


module.exports = valueScope => {
  let scope = valueScope;
  if (!scope) try {
    scope = JSON.parse("\"/\"") || '/';
  } catch (e) {
    scope = '/';
  }

  if (scope === scopeNeedTransformPathname) {
    scope = typeof window !== 'undefined' ? window.location.pathname : typeof location !== 'undefined' ? location.pathname : scopeNeedTransformPathname;
  }

  if (scope !== scopeNeedTransformPathname) {
    // 确保前后都有 `/`
    scope = /^\//.test(scope) ? scope : `/${scope}`;
    scope = /\/$/.test(scope) ? scope : `${scope}/`;
  }

  return scope;
};

/***/ }),

/***/ "./node_modules/koot/libs/ssr/context.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/libs/ssr/context.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global
    __KOOT_SSR__:false
    __KOOT_CTX__:false
*/

/**
 * 当前 SSR context 对象
 * @typedef {Object} KootSSRContext
 * @property {Object} Store - 数据存储空间
 * @property {History} History - 历史纪录对象
 * @property {string} [LocaleId] - 当前语种ID
 * @property {Object} [locales] - 语言包对象，包含所有语种
 * @property {Map} globalCache - 公共缓存空间
 * @property {Object} [proxyRequestOrigin={}] - 配置项 `proxyRequestOrigin`
 * @property {string} template - EJS 模板
 * @property {Object} [templateInject={}] - EJS 自定义注入对象
 *
                    thisTemplateInjectCache,
                    thisEntrypoints,
                    thisFilemap, //thisStyleMap,
                    thisManifest,
                    styleMap,
                    connectedComponents: __DEV__
                        ? (global[SSRContext]
                              ? global[SSRContext].connectedComponents
                              : []) || []
                        : [],
 */
// ============================================================================
const {
  LOCALEID: ClientLocaleId,
  STORE: ClientStore,
  HISTORY: ClientHistory
} = __webpack_require__(/*! ../../defaults/defines-window */ "./node_modules/koot/defaults/defines-window.js");

const {
  ssrContext: SSRContext,
  koaContext: KOAContext
} = __webpack_require__(/*! ../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js"); // ============================================================================

/** @type {KootSSRContext} */


let kootSSRContext;
let koaCtx;

if (false) {} // ============================================================================

/**
 * 获取 SSR context 对象
 * @returns {KootSSRContext}
 */


function get() {
  if (false) {}
  if (false) {}
  if (typeof kootSSRContext === 'object') return kootSSRContext;
  if (typeof __KOOT_SSR__ === 'object') return __KOOT_SSR__;
  return {};
}
/**
 * 获取 Koa ctx 对象
 */


function getKoaCtx() {
  if (false) {}
  if (false) {}
  if (typeof koaCtx === 'object') return koaCtx;
  if (typeof __KOOT_CTX__ === 'object') return __KOOT_CTX__;
  return {};
}
/**
 * 设置当前 Koa ctx 和 Koot SSR context 对象
 * @param {*} ctx
 */


function set(ctx) {
  if (false) {} // console.log('set', ctx, 'locales', ctx[SSRContext].locales);

  if (false) {}
  kootSSRContext = ctx[SSRContext];
  koaCtx = ctx;
  resetLocaleId();
  resetStore();
  resetHistory();
} // ============================================================================


const getLocaleId = () => {
  if (false) {}

  if (true) {
    if (false) {}
    return get().LocaleId;
  }
};

let localeId = (() => getLocaleId())();

const resetLocaleId = newValue => {
  if ( true && newValue === false) {
    localeId = undefined;
    delete get().LocaleId;
    return;
  }

  if (newValue) get().LocaleId = newValue;
  localeId = newValue || getLocaleId();
}; // ============================================================================


const getStore = () => {
  if (false) {}

  if (true) {
    if (false) {}
    return get().Store;
  }
};

let store = (() => getStore())();

const resetStore = newValue => {
  if (newValue) get().Store = newValue;
  store = newValue || getStore();
}; // ============================================================================


const getHistory = () => {
  if (false) {}

  if (true) {
    if (false) {}
    return get().History;
  }
};

let history = (() => getHistory())();

const resetHistory = newValue => {
  if (newValue) get().History = newValue;
  history = newValue || getHistory();
}; // ============================================================================


function reset() {
  resetLocaleId(false); // purgeObj(kootSSRContext);

  kootSSRContext = undefined;
  koaCtx = undefined;
} // const purgeObj = (obj) => {
//     if (typeof obj === 'object') {
//         for (const [key, value] of Object.entries(obj)) {
//             if (typeof value === 'object') {
//                 purgeObj(value);
//             }
//             // console.log(key);
//             try {
//                 obj[key] = undefined;
//             } catch (e) {}
//             delete obj[key];
//         }
//     }
// };
// ============================================================================


module.exports = {
  set,
  get,
  getKoaCtx,
  localeId,
  getLocaleId,
  resetLocaleId,
  store,
  getStore,
  resetStore,
  history,
  getHistory,
  resetHistory,
  reset
};

/***/ }),

/***/ "./node_modules/koot/utils/generate-filemap-from-compilation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/koot/utils/generate-filemap-from-compilation.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");
/*
  'id',               'ids',
  'debugId',          'name',
  'idNameHints',      'preventIntegration',
  'filenameTemplate', '_groups',
  'runtime',          'files',
  'auxiliaryFiles',   'rendered',
  'hash',             'contentHash',
  'renderedHash',     'chunkReason',
  'extraAsync'
*/

/**
 * 从 Webpack compilation 数据中生成文件对应表 (Filemap)
 * @param {Object} compilation
 * @param {String} [dirRelative]
 * @returns {Object} 文件对应表 (Filemap)
 */


module.exports = (compilation, dirRelative) => {
  if (typeof compilation !== 'object') return undefined;
  const filemap = {}; // const stats = compilation.getStats();
  // for (const chunk of stats.compilation.chunks) {

  for (const chunk of compilation.chunks) {
    const {
      name,
      idNameHints,
      files
    } = chunk;
    const thisName = name || [...idNameHints].join('~');
    if (typeof thisName === 'undefined' || thisName === null) continue;
    if ([...files].every(filename => !/\.(js|css)$/i.test(filename))) continue; // console.log({ name, id, ids, debugId, idNameHints, files });
    // console.log([...idNameHints]);

    [...files].filter(filename => !/\.(js|css)\.map$/i.test(filename)).forEach(filename => {
      const extname = path.extname(filename);
      const file = thisName + extname;
      if (typeof filemap[file] !== 'string') filemap[file] =  false ? 0 : (dirRelative ? dirRelative + '/' : '') + filename;
    });
  }

  return filemap;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-build-manifest-path.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/utils/get-build-manifest-path.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

const getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");

const {
  buildManifestFilename
} = __webpack_require__(/*! ../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");
/**
 * 获取打包文件清单文件 (build-manifest) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */


module.exports = (dist = getDistPath()) => {
  if (false) {}
  return path.resolve(dist, buildManifestFilename);
};

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap-path.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap-path.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * 获取打包文件对应表 (chunkmap) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */
module.exports = __webpack_require__(/*! ./get-build-manifest-path */ "./node_modules/koot/utils/get-build-manifest-path.js");

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs");

const getIsI18nEnabled = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

const getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

const getChunkmapPath = __webpack_require__(/*! ./get-chunkmap-path */ "./node_modules/koot/utils/get-chunkmap-path.js");

const getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

let cachedChunkmap;
/**
 * 获取打包文件对应表 (chunkmap)
 *
 * @param {String} [localeId] 当前语言，默认为当前语言 (i18n开启时) 或未指定 (i18n未开启时)
 * @param {Boolean} [getFullResult = false] 仅 i18n 开启时：获取 chunkmap 全文，而非当前语言的片段
 * @param {Boolean} [ignoreCache = false] 忽略结果缓存，强制重新获取对照表
 * @returns {Object}
 */

const getChunkmap = (localeId, getFullResult = false, ignoreCache = false) => {
  if (localeId === true) {
    return getChunkmap(getFullResult || undefined, true);
  }

  const isI18nEnabled = getIsI18nEnabled();

  if (isI18nEnabled && typeof localeId === 'undefined') {
    try {
      localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
    } catch (e) {}
  }

  const i18nType = getI18nType();
  const isI18nDefault = isI18nEnabled && i18nType === 'default';

  const chunkmap = (() => {
    if (!ignoreCache && cachedChunkmap) return cachedChunkmap;
    let chunkmap;
    if (typeof global.chunkmap === 'object') chunkmap = global.chunkmap;

    try {
      chunkmap = JSON.parse("{\".zh\":{\".public\":\"public/\",\".out\":\"public/\",\".entrypoints\":{\"critical\":[\"public/includes/extract.122.6918e54fcd4d0feed044.css\",\"public/includes/entry.6918e54fcd4d0feed044.js\"],\"client\":[\"public/includes/entry.02173713f52608b2d874.js\",\"public/includes/entry.98dc71326346320c4c75.js\",\"public/includes/extract.47.e3edd055205a8081f90a.css\",\"public/includes/entry.e3edd055205a8081f90a.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/includes/entry.8e8f49521ddfaca9f75a.js\"]},\".files\":{\"critical.css\":\"public/includes/extract.122.6918e54fcd4d0feed044.css\",\"critical.js\":\"public/includes/entry.6918e54fcd4d0feed044.js\",\"client.css\":\"public/includes/extract.47.e3edd055205a8081f90a.css\",\"client.js\":\"public/includes/entry.e3edd055205a8081f90a.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/includes/entry.8e8f49521ddfaca9f75a.js\",\"PageHome.js\":\"public/includes/chunk.abe7a6e235cbfeba813a.js\",\"PageStart.js\":\"public/includes/chunk.65e045b2ea626459cecf.js\",\"PageTS.js\":\"public/includes/chunk.d7cfab3dfa98142adc2f.js\",\"libs.js\":\"public/includes/entry.02173713f52608b2d874.js\",\"vendors.js\":\"public/includes/entry.98dc71326346320c4c75.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/includes/extract.all.d0365cd9f6e780ed9c9a7772531a356b.small.css\"},\"service-worker\":[\"public/service-worker.zh.js\"],\".htmlMetaTags__\":\"<link rel=\\\"shortcut icon\\\" href=\\\"/includes/webapp.a5d5629c/favicon.ico\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"/includes/webapp.a5d5629c/favicon-16x16.png\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"/includes/webapp.a5d5629c/favicon-32x32.png\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"48x48\\\" href=\\\"/includes/webapp.a5d5629c/favicon-48x48.png\\\"><link rel=\\\"manifest\\\" href=\\\"/includes/webapp.a5d5629c/manifest.json\\\"><meta name=\\\"mobile-web-app-capable\\\" content=\\\"yes\\\"><meta name=\\\"theme-color\\\" content=\\\"#181818\\\"><meta name=\\\"application-name\\\" content=\\\"Diablohu's Admin Portal\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"57x57\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-57x57.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"60x60\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-60x60.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"72x72\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-72x72.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"76x76\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-76x76.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"114x114\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-114x114.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"120x120\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-120x120.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"144x144\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-144x144.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"152x152\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-152x152.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"167x167\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-167x167.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-180x180.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"1024x1024\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-icon-1024x1024.png\\\"><meta name=\\\"apple-mobile-web-app-capable\\\" content=\\\"yes\\\"><meta name=\\\"apple-mobile-web-app-status-bar-style\\\" content=\\\"black-translucent\\\"><meta name=\\\"apple-mobile-web-app-title\\\" content=\\\"AdminPortal\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-640x1136.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-750x1334.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-828x1792.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1125x2436.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1242x2208.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1242x2688.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"   href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1536x2048.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"   href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1668x2224.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"   href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1668x2388.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"  href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-2048x2732.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"  href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1620x2160.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1136x640.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1334x750.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-1792x828.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-2436x1125.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-2208x1242.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-2688x1242.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-2048x1536.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-2224x1668.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-2388x1668.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\" href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-2732x2048.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.a5d5629c/apple-touch-startup-image-2160x1620.png\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"228x228\\\" href=\\\"/includes/webapp.a5d5629c/coast-228x228.png\\\"><meta name=\\\"msapplication-TileColor\\\" content=\\\"#212121\\\"><meta name=\\\"msapplication-TileImage\\\" content=\\\"/includes/webapp.a5d5629c/mstile-144x144.png\\\"><meta name=\\\"msapplication-config\\\" content=\\\"/includes/webapp.a5d5629c/browserconfig.xml\\\"><link rel=\\\"yandex-tableau-widget\\\" href=\\\"/includes/webapp.a5d5629c/yandex-browser-manifest.json\\\">\"},\".en\":{\".public\":\"public/\",\".out\":\"public/\",\".entrypoints\":{\"critical\":[\"public/includes/extract.122.6918e54fcd4d0feed044.css\",\"public/includes/entry.6918e54fcd4d0feed044.js\"],\"client\":[\"public/includes/entry.02173713f52608b2d874.js\",\"public/includes/entry.98dc71326346320c4c75.js\",\"public/includes/extract.47.4bb8ce7c5ddb31557881.css\",\"public/includes/entry.4bb8ce7c5ddb31557881.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/includes/entry.8e8f49521ddfaca9f75a.js\"]},\".files\":{\"critical.css\":\"public/includes/extract.122.6918e54fcd4d0feed044.css\",\"critical.js\":\"public/includes/entry.6918e54fcd4d0feed044.js\",\"client.css\":\"public/includes/extract.47.4bb8ce7c5ddb31557881.css\",\"client.js\":\"public/includes/entry.4bb8ce7c5ddb31557881.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/includes/entry.8e8f49521ddfaca9f75a.js\",\"PageHome_3.js\":\"public/includes/chunk.5d077248e483d97e6db8.js\",\"PageStart_4.js\":\"public/includes/chunk.7dce2cbca36153ed2d6c.js\",\"PageTS_5.js\":\"public/includes/chunk.2d05e2e07453390c67c8.js\",\"libs.js\":\"public/includes/entry.02173713f52608b2d874.js\",\"vendors.js\":\"public/includes/entry.98dc71326346320c4c75.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/includes/extract.all.d0365cd9f6e780ed9c9a7772531a356b.small.css\"},\"service-worker\":[\"public/service-worker.en.js\"],\".htmlMetaTags__\":\"<link rel=\\\"shortcut icon\\\" href=\\\"/includes/webapp.a780db2e/favicon.ico\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"/includes/webapp.a780db2e/favicon-16x16.png\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"/includes/webapp.a780db2e/favicon-32x32.png\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"48x48\\\" href=\\\"/includes/webapp.a780db2e/favicon-48x48.png\\\"><link rel=\\\"manifest\\\" href=\\\"/includes/webapp.a780db2e/manifest.json\\\"><meta name=\\\"mobile-web-app-capable\\\" content=\\\"yes\\\"><meta name=\\\"theme-color\\\" content=\\\"#181818\\\"><meta name=\\\"application-name\\\" content=\\\"Diablohu's Admin Portal\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"57x57\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-57x57.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"60x60\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-60x60.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"72x72\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-72x72.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"76x76\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-76x76.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"114x114\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-114x114.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"120x120\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-120x120.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"144x144\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-144x144.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"152x152\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-152x152.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"167x167\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-167x167.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-180x180.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"1024x1024\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-icon-1024x1024.png\\\"><meta name=\\\"apple-mobile-web-app-capable\\\" content=\\\"yes\\\"><meta name=\\\"apple-mobile-web-app-status-bar-style\\\" content=\\\"black-translucent\\\"><meta name=\\\"apple-mobile-web-app-title\\\" content=\\\"AdminPortal\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-640x1136.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-750x1334.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-828x1792.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1125x2436.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1242x2208.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1242x2688.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"   href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1536x2048.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"   href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1668x2224.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"   href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1668x2388.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"  href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-2048x2732.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"  href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1620x2160.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1136x640.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1334x750.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-1792x828.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-2436x1125.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-2208x1242.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-2688x1242.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-2048x1536.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-2224x1668.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-2388x1668.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\" href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-2732x2048.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.a780db2e/apple-touch-startup-image-2160x1620.png\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"228x228\\\" href=\\\"/includes/webapp.a780db2e/coast-228x228.png\\\"><meta name=\\\"msapplication-TileColor\\\" content=\\\"#212121\\\"><meta name=\\\"msapplication-TileImage\\\" content=\\\"/includes/webapp.a780db2e/mstile-144x144.png\\\"><meta name=\\\"msapplication-config\\\" content=\\\"/includes/webapp.a780db2e/browserconfig.xml\\\"><link rel=\\\"yandex-tableau-widget\\\" href=\\\"/includes/webapp.a780db2e/yandex-browser-manifest.json\\\">\"}}");
    } catch (e) {
      chunkmap = false;
    }

    if (typeof chunkmap !== 'object' && typeof getDistPath() === 'string') {
      chunkmap = JSON.parse(fs.readFileSync(getChunkmapPath(), 'utf-8'));
      if (process.env.WEBPACK_BUILD_STAGE === 'server') global.chunkmap = chunkmap;
    }

    if (true) cachedChunkmap = chunkmap;
    return chunkmap;
  })();

  if (typeof chunkmap === 'object') {
    // let chunkmap = fs.readJsonSync(pathChunckmap)
    if (getFullResult) return chunkmap || {};
    if (isI18nEnabled && isI18nDefault) return chunkmap[`.${localeId}`] || {};
  }

  return chunkmap || {};
};

module.exports = getChunkmap;

/***/ }),

/***/ "./node_modules/koot/utils/get-client-file-path.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/utils/get-client-file-path.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global
    __KOOT_LOCALEID__:false
*/
const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

const getPublicPath = __webpack_require__(/*! ./get-public-dir */ "./node_modules/koot/utils/get-public-dir.js");

const getChunkmap = __webpack_require__(/*! ./get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/**
 * 获指定文件在客户端/取浏览器端中的可访问路径
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Boolean} [isPathname = false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @param {Boolean} [isSSRReading = false] 如果标记为 true，表示用于 SSR 时读取文件，会对 publicPath 进行特殊处理
 * @returns {String|String[]} 浏览器环境中的访问路径、空字符串或包含所有可能结果的 Array
 */


const getFilePath = (filename, localeId, isPathname = false, isSSRReading = false) => {
  // 如果第一个参数为 true，表示完全信任，不进行 chunkmap 对照查询，直接进行处理并返回结果
  if (filename === true) return getFilePath(localeId, isPathname || undefined, true, isSSRReading);

  if (typeof localeId === 'undefined') {
    try {
      if (false) {} else {
        localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
      }
    } catch (e) {// console.error(e);
    }
  }

  const pathPublic = getPublicPath(isSSRReading);
  const i18nType = getI18nType();
  const isI18nDefault = i18nType === 'default';
  const isDev =  false ||  true && false; // const localeId = 'zh'
  // 如果标记为 pathname，直接返回结果

  if (isPathname) return pathPublic + filename.replace(/(^\.\/|^)public\//, '');
  const chunkmap = getChunkmap(localeId);
  const regPublicPath = chunkmap['.public'] ? new RegExp(`(^\\.\\/|^)${chunkmap['.public']}`) : /(^\.\/|^)public\//;
  /**************************************************************************
   *   ┌─┐┌─┐┌┬┐┌┬┐┌─┐┌┐┌  ┌─┐┬ ┬┌┐┌┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
   *  │  │ ││││││││ ││││  ├┤ │ │││││   │ ││ ││││└─┐
   * └─┘└─┘┴ ┴┴ ┴└─┘┘└┘  └  └─┘┘└┘└─┘ ┴ ┴└─┘┘└┘└─┘
   *************************************************************************/

  /**
   * 返回可供客户端/浏览器端使用的访问地址
   * @param {String} pathname
   * @returns {String}
   */

  const getResultPathname = pathname => pathPublic + pathname.replace(regPublicPath, '');
  /**************************************************************************
   *   ┌┬┐┌─┐┌┐ ┬ ┬┌─┐
   *   ││├┤ ├┴┐│ ││ ┬
   * ─┴┘└─┘└─┘└─┘└─┘
   *************************************************************************/
  // console.log('----------')
  // console.log(filename)
  // console.log(chunkmap)
  // console.log(chunkmap['.files'])
  // console.log(chunkmap['.files'][filename])
  // console.log(regPublicPath)
  // console.log(pathPublic + chunkmap['.files'][filename].replace(regPublicPath, ''))
  // console.log({
  //     regPublicPath,
  // })
  // console.log('----------')

  /**************************************************************************
   *   ┌─┐┬ ┬┌─┐┌─┐┬┌─   ┬   ┬─┐┌─┐┌┬┐┬─┐┬ ┬┌┐┌┌─┐
   *  │  ├─┤├┤ │  ├┴┐  ┌┼─  ├┬┘├┤  │ ├┬┘│ ││││└─┐
   * └─┘┴ ┴└─┘└─┘┴ ┴  └┘   ┴└─└─┘ ┴ ┴└─└─┘┘└┘└─┘
   *************************************************************************/
  // 检查 `.files` 下是否有该文件名的直接对应
  // 如果有，直接返回该结果


  if (typeof chunkmap === 'object' && typeof chunkmap['.files'] === 'object' && typeof chunkmap['.files'][filename] === 'string') {
    return getResultPathname(chunkmap['.files'][filename]);
  }

  if (isDev) {
    const prefix = pathPublic + (isI18nDefault ? localeId : '');
    if (typeof chunkmap['.files'] === 'object' && typeof chunkmap['.files'][filename] === 'string') return prefix + chunkmap['.files'][filename];
    return prefix + `.${filename}`;
  }
  /** @type {String} 目标文件的扩展名 */


  const extname = path.extname(filename);
  /** @type {String} 目标文件的文件名（不包括扩展名） */

  const basename = path.basename(filename, extname); // 检查 `.entrypoints` 下是否有该文件的文件名对应（不包括扩展名）
  // 如果有，同时只有一个结果，返回该结果
  // 如果有，同时有多个结果，返回包含所有结果的 Array

  if (Array.isArray(chunkmap['.entrypoints'][basename])) {
    const files = chunkmap['.entrypoints'][basename].filter(file => path.extname(file) === extname);
    if (files.length === 1) return getResultPathname(files[0]);else if (files.length) return files.map(file => getResultPathname(file));
  } // 检查 chunkmap 第一级是否有包含该文件的文件名的对应（不包括扩展名）
  // 如果有，直接返回该结果


  if (typeof chunkmap === 'object') {
    let result;

    if (Array.isArray(chunkmap[basename])) {
      chunkmap[basename].some(value => {
        if (path.extname(value) === extname) {
          result = value;
          return true;
        }

        return false;
      });
    }

    if (result) return getResultPathname(result);
  } // 如果没有找到 chunkmap 或是 chunkmap 中未找到目标项目，转为过滤文件形式
  // if (fs.existsSync(path.resolve(pathPublic, filename))) {
  //     return '/' + filename;
  // }


  if (fs.existsSync(path.resolve(filename))) {
    return pathPublic + filename;
  }

  console.warn(`File not found:` + (isI18nDefault ? `[${localeId}] ` : '') + ` ${filename}`);
  return ''; // const segs = pathname.split('/').filter(seg => seg !== '/')
  // const file = segs.pop()
  // const dir = segs.length ? `${segs.join('/')}/` : ''
  // return `/${dir}${
  //     require('./filterTargetFile')(
  //         require('./readFilesInPath')(`./${distPathname}/public/${appName ? `${appName}/` : ''}${dir}`),
  //         file
  //     )}`
};

module.exports = getFilePath; // module.exports = (pathname, pathDist = 'dist') => {
//     if (__DEV__) {
//         return `http://localhost:${process.env.WEBPACK_DEV_SERVER_PORT || '3001'}/dist/${pathname}`
//     } else {
//         const segs = pathname.split('/').filter(seg => seg !== '/')
//         const file = segs.pop()
//         const dir = segs.length ? `${segs.join('/')}/` : ''
//         return `/${dir}${
//             require('./filterTargetFile')(
//                 require('./readFilesInPath')(`./${pathDist}/public/${dir}`),
//                 file
//             )}`
//     }
// }

/***/ }),

/***/ "./node_modules/koot/utils/get-cwd.js":
/*!********************************************!*\
  !*** ./node_modules/koot/utils/get-cwd.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * 获取运行目录
 * @returns {String}
 */
module.exports = () => {
  // console.log('process.env.KOOT_CWD', process.env.KOOT_CWD)
  // console.log('process.cwd()', process.cwd())
  return typeof process.env.KOOT_CWD === 'string' ? process.env.KOOT_CWD : process.cwd();
};

/***/ }),

/***/ "./node_modules/koot/utils/get-dist-path.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/utils/get-dist-path.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const getCwd = __webpack_require__(/*! ./get-cwd */ "./node_modules/koot/utils/get-cwd.js");

let p;
/**
 * 获取打包结果路径
 * @returns {String} 打包结果路径 (硬盘绝对路径)
 */

module.exports = () => {
  // console.log('global.KOOT_DIST_DIR', global.KOOT_DIST_DIR)
  if (typeof p !== 'string') {
    p = typeof global.KOOT_DIST_DIR === 'string' ? global.KOOT_DIST_DIR : (() => {
      let cwd = getCwd();
      let parent = path.resolve(cwd, '..');
      let result = path.resolve(cwd, "dist");

      while (!fs.existsSync(result) && cwd !== parent) {
        cwd = parent;
        parent = path.resolve(cwd, '..');
        result = path.resolve(cwd, "dist");
      }

      if (fs.existsSync(result)) return result;
      return path.resolve(cwd, "dist");
    })();
  }

  return p;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-port.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/utils/get-port.js ***!
  \*********************************************/
/***/ ((module) => {

// require('./init-node-env')()

/**
 * 获取 Web 服务器端口号
 * @param {Object|number} port
 * @param {string} [env=process.env.WEBPACK_BUILD_ENV]
 * @returns {number}
 */
module.exports = (port, env = "prod") => {
  // console.log({
  //     ENV: process.env.WEBPACK_BUILD_ENV,
  //     SERVER_PORT: process.env.SERVER_PORT,
  //     __SERVER_PORT__: __SERVER_PORT__
  // });
  const defaultPort =  true && typeof process.env.SERVER_PORT !== 'undefined' ? process.env.SERVER_PORT :
  /* typeof process.env.SERVER_PORT === 'undefined' && */
   true ? "8080" : 0;

  if (typeof port === 'object') {
    if (!env) env = 'prod';
    if (typeof port[env] !== 'undefined') return port[env];
    return defaultPort;
  }

  if (typeof port !== 'undefined' && typeof port !== 'boolean') return port;
  return defaultPort;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-public-dir.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/utils/get-public-dir.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getWDSport = __webpack_require__(/*! ./get-webpack-dev-server-port */ "./node_modules/koot/utils/get-webpack-dev-server-port.js");

let publicPath;
let publicPathSSRReading;
/**
 * 获取浏览器环境中的访问根路径
 * @param {Boolean} [isSSRReading = false] 如果标记为 true，表示用于 SSR 时读取文件，会对 publicPath 进行特殊处理
 * @returns {String} 浏览器环境中的访问根路径
 */

module.exports = (isSSRReading = false) => {
  if (isSSRReading && typeof publicPathSSRReading === 'string') return publicPathSSRReading;
  if (typeof publicPath === 'string') return publicPath;
  const isDev =  false ||  true && false;

  if (false) {} else if (isDev) {
    const port = getWDSport();
    const origin = typeof global.koaCtxOrigin === 'string' ? global.koaCtxOrigin.split(':').slice(0, 2).join(':') : 'http://localhost';
    publicPath = `${origin}:${port}/dist/`;
    publicPathSSRReading = publicPath;
  } else if (true) {
    publicPath = JSON.parse("\"/\"");
    publicPathSSRReading = '/';
  } else {}

  if (isSSRReading) return publicPathSSRReading;
  return publicPath;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-webpack-dev-server-port.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/utils/get-webpack-dev-server-port.js ***!
  \****************************************************************/
/***/ ((module) => {

/**
 * 获取 webpack-dev-server 端口号
 * @returns {Number}
 */
module.exports = () => {
  // console.log('process.env.WEBPACK_DEV_SERVER_PORT', process.env.WEBPACK_DEV_SERVER_PORT)
  return "3001" || 0;
};

/***/ }),

/***/ "./node_modules/koot/utils/read-client-file.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/utils/read-client-file.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const isUrl = __webpack_require__(/*! is-url */ "is-url"); // const { sources } = require('webpack');


const getSourceContent = __webpack_require__(/*! koot-webpack/libs/get-source-content */ "./node_modules/koot-webpack/libs/get-source-content.js");

const {
  GLOBAL_VAR_BUILD_COMPILATION_FOR_SPA_INJECTION
} = __webpack_require__(/*! ../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");

const getFilePath = __webpack_require__(/*! ./get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

const generateFilemap = __webpack_require__(/*! ./generate-filemap-from-compilation */ "./node_modules/koot/utils/generate-filemap-from-compilation.js");

const getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

const getPort = __webpack_require__(/*! ./get-port */ "./node_modules/koot/utils/get-port.js");

const getDirDistPublic = __webpack_require__(/*! ../libs/get-dir-dist-public */ "./node_modules/koot/libs/get-dir-dist-public.js"); // ============================================================================

/**
 * 读取目标客户端打包结果文件的内容
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Object} [compilation] Webpack compilation 对象
 * @param {Boolean} [isPathname=false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @returns {String} 文件内容
 */


const readClientFile = (filename, localeId, compilation, isPathname = false) => {
  // 如果第一个参数为 true，表示标记为 pathname
  if (filename === true) return readClientFile(localeId, compilation || undefined, isPathname || undefined, true);
  const fileExtName = path.extname(filename);
  const filenameWithoutExtname = path.basename(filename, fileExtName);
  if (!compilation) compilation = global[GLOBAL_VAR_BUILD_COMPILATION_FOR_SPA_INJECTION] || undefined; // 如果提供了 webpack compilation 数据，尝试从其中查询对应文件的最终内容并返回

  if (typeof compilation === 'object') {
    const filemap = generateFilemap(compilation);

    if (typeof filemap === 'object') {
      // console.log(compilation.chunks);
      const files = []; // 根据文件名/特征名从查找特定 chunk，利用其内的文件列表

      [...compilation.chunks].filter(({
        name
      }) => name === filename || name === filenameWithoutExtname).forEach(chunk => {
        [...chunk.files].forEach(file => {
          files.push(file);
        });
      }); // 如果上述操作不存在有效的文件，利用 koot 生成的 manifest 查询

      if (!files.length) files.push(filename); // console.log({ filename, files });
      // 如果有文件，直接使用，查询 asset

      return files.filter(filename => path.extname(filename) === fileExtName).map(file => getSourceContent(compilation.getAsset(file))).join('\n');
    }
  } // console.log(filename, filenameWithoutExtname);
  // 在打包结果中寻找指定文件


  let pathnames = getFilePath(filename, localeId, isPathname, true);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  const results = pathnames.map(pathname => {
    if (isUrl(pathname)) {
      if (false) {} else {
        return `<!-- The pathname for file '${filename}' is a URL. Rendering file content from URL can only be done in DEV mode. -->`;
      }
    }

    if (false) {}

    return fs.readFileSync(path.resolve(getDirDistPublic(getDistPath()), pathname.replace(/^\//, '')), 'utf-8');
  });
  return results.join('\n\n');
};

module.exports = readClientFile;

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

module.exports = arrayMap;

/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
module.exports = baseFor;

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

module.exports = createAssigner;

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = typeof value;

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");
/** Used as the maximum memoize cache size. */


var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");
/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */


function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */


function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    var React = __webpack_require__(/*! react */ "react");

    var _assign = __webpack_require__(/*! object-assign */ "object-assign"); // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.


    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    exports.Fragment = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      exports.Fragment = symbolFor('react.fragment');
      REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
      REACT_PROFILER_TYPE = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      REACT_SCOPE_TYPE = symbolFor('react.scope');
      REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }

    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }

    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    function error(format) {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        }

        var argsWithFormat = args.map(function (item) {
          return '' + item;
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
        return true;
      }

      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }

      return false;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }

    function getContextName(type) {
      return type.displayName || 'Context';
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case exports.Fragment:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return 'Profiler';

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';

          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_BLOCK_TYPE:
            return getComponentName(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                return getComponentName(init(payload));
              } catch (x) {
                return null;
              }
            }
        }
      }

      return null;
    } // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.


    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;

    function disabledLog() {}

    disabledLog.__reactDisabledLog = true;

    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        disabledDepth++;
      }
    }

    function reenableLogs() {
      {
        disabledDepth--;

        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: _assign({}, props, {
              value: prevLog
            }),
            info: _assign({}, props, {
              value: prevInfo
            }),
            warn: _assign({}, props, {
              value: prevWarn
            }),
            error: _assign({}, props, {
              value: prevError
            }),
            group: _assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: _assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: _assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }

    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;

    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.


        return '\n' + prefix + name;
      }
    }

    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }

    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return '';
      }

      {
        var frame = componentFrameCache.get(fn);

        if (frame !== undefined) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher.current = null;
        disableLogs();
      }

      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function () {
            throw Error();
          }; // $FlowFixMe


          Object.defineProperty(Fake.prototype, 'props', {
            set: function () {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });

          if (typeof Reflect === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }

            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }

            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }

          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;

          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }

          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.

                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }

              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.


      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }

    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }

    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }

    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return '';
      }

      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }

      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }

      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame('Suspense');

        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);

          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

          case REACT_BLOCK_TYPE:
            return describeFunctionComponentFrame(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }

      return '';
    }

    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame.setExtraStackFrame(null);
        }
      }
    }

    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);

        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }

              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }

            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
              setCurrentlyValidatingElement(null);
            }

            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error('Failed %s type: %s', location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }

    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function warnIfStringRefCannotBeAutoConverted(config, self) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }

    function defineKeyPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingKey = function () {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };

        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
    }

    function defineRefPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingRef = function () {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };

        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * https://github.com/reactjs/rfcs/pull/107
     * @param {*} type
     * @param {object} props
     * @param {string} key
     */


    function jsxDEV(type, config, maybeKey, source, self) {
      {
        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.

        if (maybeKey !== undefined) {
          key = '' + maybeKey;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        if (hasValidRef(config)) {
          ref = config.ref;
          warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object


        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        } // Resolve default props


        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;

          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }

        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }

        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
    }

    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }

    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */

    function isValidElement(object) {
      {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
    }

    function getDeclarationErrorAddendum() {
      {
        if (ReactCurrentOwner$1.current) {
          var name = getComponentName(ReactCurrentOwner$1.current.type);

          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }

        return '';
      }
    }

    function getSourceInfoErrorAddendum(source) {
      {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }

        return '';
      }
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }

        return info;
      }
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }

        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }

        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = '';

        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
          // Give the component that originally created this child.
          childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        }

        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      {
        if (typeof node !== 'object') {
          return;
        }

        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];

            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);

          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;

              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }

        var propTypes;

        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentName(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentName(type);

          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }

        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }

        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
          setCurrentlyValidatingElement$1(null);
        }
      }
    }

    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
      {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = '';

          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendum(source);

          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          var typeString;

          if (type === null) {
            typeString = 'null';
          } else if (Array.isArray(type)) {
            typeString = 'array';
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
            info = ' Did you accidentally export a JSX literal instead of a component?';
          } else {
            typeString = typeof type;
          }

          error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }

        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)


        if (validType) {
          var children = props.children;

          if (children !== undefined) {
            if (isStaticChildren) {
              if (Array.isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  validateChildKeys(children[i], type);
                }

                if (Object.freeze) {
                  Object.freeze(children);
                }
              } else {
                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
              }
            } else {
              validateChildKeys(children, type);
            }
          }
        }

        if (type === exports.Fragment) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }
    } // These two functions exist to still get child warnings in dev
    // even with the prod transform. This means that jsxDEV is purely
    // opt-in behavior for better messages but that we won't stop
    // giving you warnings if you use production apis.


    function jsxWithValidationStatic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, true);
      }
    }

    function jsxWithValidationDynamic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, false);
      }
    }

    var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
    // for now we can ship identical prod functions

    var jsxs = jsxWithValidationStatic;
    exports.jsx = jsx;
    exports.jsxs = jsxs;
  })();
}

/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}

/***/ }),

/***/ "./src/constants/keys.js":
/*!*******************************!*\
  !*** ./src/constants/keys.js ***!
  \*******************************/
/***/ ((module) => {

module.exports = {
  SESSION_SID: '__DIABLOHU_PORTAL_SESSION_SID'
};

/***/ }),

/***/ "./src/constants/nav-items.js":
/*!************************************!*\
  !*** ./src/constants/nav-items.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/urls */ "./src/constants/urls.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([[_constants_urls__WEBPACK_IMPORTED_MODULE_0__.doc, 'docs']]);

/***/ }),

/***/ "./src/constants/urls.js":
/*!*******************************!*\
  !*** ./src/constants/urls.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc": () => (/* binding */ doc),
/* harmony export */   "github": () => (/* binding */ github)
/* harmony export */ });
const doc = 'https://koot.js.org/';
const github = 'https://github.com/cmux/koot/';

/***/ }),

/***/ "./src/index.inject.js":
/*!*****************************!*\
  !*** ./src/index.inject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global
    __SVG_ICON_PACK__:false
*/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  performanceInfos: () => `<!-- rendered: ${new Date().toISOString()} -->`,
  svgIconPack: "<svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<defs>\r\n<symbol id=\"icon-circle-left3\" viewBox=\"0 0 16 16\">\r\n<title>circle-left3</title>\r\n<path d=\"M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8c-4.418 0-8 3.582-8 8s3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5z\"></path>\r\n<path d=\"M7.5 4l-4 4 4 4 1.5-1.5-1.5-1.5h4.5v-2h-4.5l1.5-1.5z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-circle-left4\" viewBox=\"0 0 16 16\">\r\n<title>circle-left4</title>\r\n<path d=\"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM13 9h-5.5l2 2-1.5 1.5-4.5-4.5 4.5-4.5 1.5 1.5-2 2h5.5v2z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-new-tab\" viewBox=\"0 0 16 16\">\r\n<title>new-tab</title>\r\n<path d=\"M11 13h-8v-8h4.5l2-2h-8.5v12h12v-8.5l-2 2v4.5z\"></path>\r\n<path d=\"M16 0h-6.5l2.5 2.5-7.5 7.5 1.5 1.5 7.5-7.5 2.5 2.5v-6.5z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-github\" viewBox=\"0 0 16 16\">\r\n<title>github</title>\r\n<path d=\"M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z\"></path>\r\n</symbol>\r\n</defs>\r\n</svg>\r\n"
});

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var koot_React_route_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot/React/route-check */ "./node_modules/koot/React/route-check.js");
/* harmony import */ var koot_React_route_check__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koot_React_route_check__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/app */ "./src/views/app.jsx");


/**
 * @type {Object} 路由配置对象
 * 原则上支持任何与 `react-router` (v3) 兼容的对象
 * - 可使用 koot-router 提供的方法封装路由配置对象
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  path: '/',
  component: _views_app__WEBPACK_IMPORTED_MODULE_0__.default,
  // 项目的根层组件
  indexRoute: {
    /**
     * 标准写法: 打包后，该组件会存在于核心包中
     * - 推荐小型项目或大型项目的小型页面使用
     */
    // component: require('@views/home').default

    /**
     * 代码分割写法: 打包后，该组件会存在于独立的 .js 文件中
     * - 推荐大型项目使用
     * - 推荐使用 koot 提供的 `routeCheck()` 方法保证路由组件的正确渲染 (详情请查阅文档)
     */
    getComponent: (nextState, cb) => {
      Promise.resolve(/*! import() | PageHome */).then(__webpack_require__.bind(__webpack_require__, /*! @views/home */ "./src/views/home/index.jsx")).then(module => {
        if (koot_React_route_check__WEBPACK_IMPORTED_MODULE_1___default()(nextState)) cb(null, module.default);
      });
    }
  },
  childRoutes: [{
    path: 'start',
    getComponent: (nextState, cb) => {
      Promise.resolve(/*! import() | PageStart */).then(__webpack_require__.bind(__webpack_require__, /*! @views/start */ "./src/views/start/index.jsx")).then(module => {
        if (koot_React_route_check__WEBPACK_IMPORTED_MODULE_1___default()(nextState)) cb(null, module.default);
      });
    }
  }, {
    path: 'ts',
    getComponent: (nextState, cb) => {
      Promise.resolve(/*! import() | PageTS */).then(__webpack_require__.bind(__webpack_require__, /*! @views/ts-example */ "./src/views/ts-example/index.tsx")).then(module => {
        if (koot_React_route_check__WEBPACK_IMPORTED_MODULE_1___default()(nextState)) cb(null, module.default);
      });
    }
  }]
});

/***/ }),

/***/ "./src/server/before.js":
/*!******************************!*\
  !*** ./src/server/before.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var koa_session_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-session-store */ "koa-session-store");
/* harmony import */ var koa_session_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_session_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/keys */ "./src/constants/keys.js");
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/server/routes/index.js");
/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mongodb */ "./src/server/mongodb.ts");
/**
 * **服务器端生命周期**
 *
 * _创建 Koa 实例后、挂载任何中间件之前_
 */



 // import readSecret from './utils/read-secret';


const sessionColletionName = _mongodb__WEBPACK_IMPORTED_MODULE_4__.colletions.sessions;
let axiosBaseSet = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async app => {
  app.keys = [// await readSecret('ADMIN_PORTAL_2FA_SECRET_FILE')
  'DIABLOHU_PORTAL_SIGN_KEY'];
  const client = await (0,_mongodb__WEBPACK_IMPORTED_MODULE_4__.getClient)();
  const db = client.db(_mongodb__WEBPACK_IMPORTED_MODULE_4__.dbName);
  const collection = db.collection(sessionColletionName);
  app.use(koa_session_store__WEBPACK_IMPORTED_MODULE_0___default()({
    name: _constants_keys__WEBPACK_IMPORTED_MODULE_2__.SESSION_SID,
    store: {
      load(sid) {
        return collection.findOne({
          _id: sid
        }).then(data => {
          return data.blob;
        }).catch(() => {
          return null;
        });
      },

      save(sid, data) {
        const {
          isNotBrowser = false,
          ...rest
        } = JSON.parse(data); // console.log({ data });

        if (isNotBrowser) return new Promise(resolve => resolve());
        const doc = {
          _id: sid,
          blob: JSON.stringify(rest),
          updatedAt: new Date()
        }; // console.log({ doc });
        // return Promise((resolve) => resolve());

        return collection.updateOne({
          _id: sid
        }, {
          $set: doc
        }, {
          upsert: true
        });
      },

      remove(sid) {
        return collection.deleteOne({
          _id: sid
        });
      }

    }
  })); // 默认值处理

  app.use(async (ctx, next) => {
    if (!axiosBaseSet) {
      (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = ctx.origin; // axios.defaults.headers.common['Diablohu-Is-From-Server'] = 'yes';

      axiosBaseSet = true;
    }

    await next();
    const {
      session
    } = ctx;
    let {
      reqCount = 0
    } = session;
    if (!session.reqFirst) session.reqFirst = Date.now();
    session.reqCount = ++reqCount;
    if (/^axios/.test(ctx.headers['user-agent'])) session.isNotBrowser = true; // console.log(ctx.session);
  });
  app.use(_routes__WEBPACK_IMPORTED_MODULE_3__.default);
});

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-body */ "koa-body");
/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_2fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-2fa */ "node-2fa");
/* harmony import */ var node_2fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_2fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/keys */ "./src/constants/keys.js");
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_constants_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/server/routes/api.ts");
/* harmony import */ var _utils_get_sid_from_ctx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/get-sid-from-ctx */ "./src/server/utils/get-sid-from-ctx.ts");
/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mongodb */ "./src/server/mongodb.ts");







/** @type {Object} 服务器路由对象 (koa-router) */

const router = koa_router__WEBPACK_IMPORTED_MODULE_0___default()();
/** @type {Object} 服务器路由表 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.routes()); // ============================================================================

router.get('/api/generate-2fa-secret/:email', async ctx => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = (0,node_2fa__WEBPACK_IMPORTED_MODULE_2__.generateSecret)({
    name: `Diablohu's Portal`,
    account: ctx.params.email
  });
});

async function getSession(ctx) {
  ctx.set('Access-Control-Allow-Origin', '*');
  const sid = ctx.params.sid || (0,_utils_get_sid_from_ctx__WEBPACK_IMPORTED_MODULE_5__.default)(ctx); // console.log({ sid }, ctx.session);

  ctx.body = {
    session: Object.keys(ctx.session).length ? ctx.session : (await (await (0,_mongodb__WEBPACK_IMPORTED_MODULE_6__.getClient)()).db(_mongodb__WEBPACK_IMPORTED_MODULE_6__.dbName).collection(_mongodb__WEBPACK_IMPORTED_MODULE_6__.colletions.sessions).findOne({
      _id: sid
    }).then(doc => {
      let data;

      try {
        data = JSON.parse(doc.blob);
      } catch (e) {}

      return data;
    })) || null,
    sid: (0,_utils_get_sid_from_ctx__WEBPACK_IMPORTED_MODULE_5__.default)(ctx)
  };
}

router.get('/api/session', getSession);
router.get('/api/session/:sid', getSession);
router.post('/api/sign-in', koa_body__WEBPACK_IMPORTED_MODULE_1___default()({
  multipart: true
}), async ctx => {
  ctx.set('Access-Control-Allow-Origin', '*');

  if (ctx.session.auth === true) {
    ctx.body = {
      sid: (0,_utils_get_sid_from_ctx__WEBPACK_IMPORTED_MODULE_5__.default)(ctx)
    };
    return;
  }

  const {
    email,
    code
  } = ctx.request?.body || {};

  if (!email || !code) {
    ctx.status = 406;
    ctx.body = 'missing parameter'; // ctx.app.emit('error', ctx.body, ctx);
  }

  const client = await (0,_mongodb__WEBPACK_IMPORTED_MODULE_6__.getClient)();
  const db = client.db(_mongodb__WEBPACK_IMPORTED_MODULE_6__.dbName);
  const collection = db.collection(_mongodb__WEBPACK_IMPORTED_MODULE_6__.colletions["2fa"]);
  const {
    secret
  } = await collection.findOne({
    email
  });

  if ((0,node_2fa__WEBPACK_IMPORTED_MODULE_2__.verifyToken)(secret, code)) {
    ctx.session.auth = true;
    ctx.body = {
      sid: (0,_utils_get_sid_from_ctx__WEBPACK_IMPORTED_MODULE_5__.default)(ctx)
    };
  } else {
    ctx.status = 403;
    ctx.body = 'auth failed'; // ctx.app.emit('error', ctx.body, ctx);
  }
});

for (const [key, value] of Object.entries(_api__WEBPACK_IMPORTED_MODULE_4__.default)) {
  router.get(`/api/${key}`, value);
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _reducers_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/app */ "./src/store/reducers/app.js");


/**
 * @type {Object|Function} 项目使用的 reducer，接受以下格式/形式
 * - reducer 函数
 * - `combineReducer` 返回的函数结果
 * - 类型是 _Object_ 的 reducer 对照表
 */

const appReducer = {
  app: _reducers_app__WEBPACK_IMPORTED_MODULE_0__.default
};
/** @type {Array} 项目使用的 middleware 列表 */

const appMiddlewares = [];
if (false) {}
/**
 * 创建 Redux store 的方法
 * 原则上支持任何与 `redux` 兼容的 store 对象
 * - 可使用 koot-redux 提供的方法进行封装
 *
 * 本例为 Redux 最基本的写法
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,koot__WEBPACK_IMPORTED_MODULE_1__.createStore)(appReducer, appMiddlewares));

/***/ }),

/***/ "./src/store/reducers/app.js":
/*!***********************************!*\
  !*** ./src/store/reducers/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/action-types */ "./src/constants/action-types.ts");

const initialState = {
  session: undefined
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = initialState, {
  type,
  payload
} = {}) {
  switch (type) {
    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_SESSION:
      {
        return { ...state,
          session: payload
        };
      }

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__.SIGN_IN:
      {
        return { ...state,
          session: { ...(state.session || {}),
            auth: true,
            ...payload
          }
        };
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/root-isomorphic.jsx":
/*!***************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/root-isomorphic.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _React_root_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../React/root-context */ "./node_modules/koot/React/root-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


 // import { idDivStylesContainer, StyleMapContext } from '../../React/styles'



const Root = ({
  store,
  ctx,
  ...props
}) => {
  // console.log('Root', {
  //     'in __KOOT_SSR__': __KOOT_SSR__.LocaleId
  // })
  // console.log('Root render Store', typeof Store === 'undefined' ? undefined : Store)
  return (
    /*#__PURE__*/
    // <StyleMapContext.Provider value={{}}>
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_React_root_context__WEBPACK_IMPORTED_MODULE_3__.default.Provider, {
      value: (0,_React_root_context__WEBPACK_IMPORTED_MODULE_3__.createValue)({
        store,
        history: props.history,
        localeId: props.localeId,
        locales: props.locales,
        styles: props.styles,
        ctx
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
        store: store,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.RouterContext, { ...props
        })
      })
    }) // <StylesContainer />
    // </StyleMapContext.Provider>

  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Root);
/**
 * React 组件: 样式表内容容器
 */
// const StylesContainer = () =>
//     <div
//         id={idDivStylesContainer}
//         dangerouslySetInnerHTML={{
//             __html: Object.keys(__KOOT_SSR__.styleMap)
//                 .filter(id => !!__KOOT_SSR__.styleMap[id].css)
//                 .map(id => `<style id="${id}">${__KOOT_SSR__.styleMap[id].css}</style>`)
//                 .join('')
//         }}
//     />
// let e = Root
// if (__DEV__) {
//     const { hot, setConfig } = require('react-hot-loader')
//     setConfig({ logLevel: 'debug' })
//     e = hot(module)(Root)
// }
// export default e

/***/ }),

/***/ "./node_modules/koot/React/component-extender.jsx":
/*!********************************************************!*\
  !*** ./node_modules/koot/React/component-extender.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _get_render_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-render-props */ "./node_modules/koot/React/get-render-props.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./node_modules/koot/React/styles.js");
/* harmony import */ var _client_update_page_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-update-page-info */ "./node_modules/koot/React/client-update-page-info.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_is_render_safe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _root_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./root-context */ "./node_modules/koot/React/root-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* __KOOT_DEV_NO_REACT_HOT_INJECT__ */

 // import { hot } from 'react-hot-loader'
// import PropTypes from 'prop-types'


 //






 //
// 是否已挂载了组件


let everMounted = false; // const defaultPageInfo = {
//     title: '',
//     metas: []
// }

/**
 * @type {Number}
 * _开发环境_
 * _服务器_
 * 使用该高阶组件的次数
 */

let devSSRConnectIndex = 0;
/**
 * 获取数据
 * @callback callbackFetchData
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @param {Function} dispatch Redux dispatch
 * @returns {Promise}
 */

/**
 * 判断数据是否准备好
 * @callback callbackCheckLoaded
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {boolean}
 */

/**
 * 获取页面信息
 * @callback callbackGetPageInfo
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {Object}
 */

/**
 * 获取同构数据的执行方法
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Promise}
 */

const doFetchData = (store, renderProps, funcFetch) => {
  // return new Promise((resolve) => resolve());
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_4___default()()) return  false ? 0 : undefined;
  const result = funcFetch(store.getState(), renderProps, store.dispatch); // if (result === true) {
  //     isDataPreloaded = true
  //     return new Promise(resolve => resolve())
  // }

  if (Array.isArray(result)) return Promise.all(result);
  if (result instanceof Promise) return result;
  return new Promise(resolve => resolve(result));
};
/**
 * 更新页面信息
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Object} infos
 * @returns {String} infos.title
 * @returns {Array} infos.metas
 */


const doPageinfo = (store, props, pageinfo) => {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_4___default()()) return {};
  const defaultPageInfo = {
    title: '',
    metas: []
  };
  if (typeof pageinfo !== 'function' && typeof pageinfo !== 'object') return defaultPageInfo;
  const state = store.getState();

  const infos = (() => {
    if (typeof pageinfo === 'object') return pageinfo;
    const infos = pageinfo(state, props);
    if (typeof infos !== 'object') return defaultPageInfo;
    return infos;
  })();

  const {
    title = defaultPageInfo.title,
    metas = defaultPageInfo.metas
  } = infos;

  if (state.localeId) {
    if (!metas.some(meta => {
      if (meta.name === 'koot-locale-id') {
        meta.content = state.localeId;
        return true;
      }

      return false;
    })) {
      metas.push({
        name: 'koot-locale-id',
        content: state.localeId
      });
    }
  }

  return {
    title,
    metas
  };
}; // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend')

/**
 * 高阶组件/组件装饰器：组件扩展
 * @param {Object} options 选项
 * @param {boolean|Function} [options.connect] react-redux 的 connect() 的参数。如果为 true，表示使用 connect()，但不连接任何数据
 * @param {Object|callbackGetPageInfo} [options.pageinfo]
 * @param {Object} [options.data] 同构数据相关
 * @param {callbackFetchData} [options.data.fetch]
 * @param {callbackCheckLoaded} [options.data.check]
 * @param {Object} [options.styles] 组件 CSS 结果
 * @returns {Function} 封装好的 React 组件
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((options = {}) => WrappedComponent => {
  // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend run')
  const {
    connect: _connect = false,
    pageinfo,
    data: {
      fetch: _dataFetch,
      check: dataCheck,
      resetWhenUnmount: dataResetWhenUnmount
    } = {},
    styles: _styles,
    ssr = true // ttt
    // hot: _hot = true,
    // name

  } = options; // console.log('extend hoc run', { name, LocaleId })
  // 样式相关

  /** @type {Object} 经过 koot-css-loader 处理后的 css 文件的结果对象 */

  const styles = (!Array.isArray(_styles) ? [_styles] : _styles).filter(obj => typeof obj === 'object' && typeof obj.wrapper === 'string');
  /** @type {boolean} 是否有上述结果对象 */

  const hasStyles = Array.isArray(styles) && styles.length > 0; // console.log({ ttt, hasStyles, styles })

  /** @type {boolean} 是否有 pageinfo 对象 */

  const hasPageinfo = typeof pageinfo === 'function' || typeof pageinfo === 'object'; // 同构数据相关

  /** @type {boolean} 同构数据是否已经获取成功 */
  // let isDataPreloaded = false

  /** @type {Function} 获取同构数据 */

  const dataFetch = typeof options.data === 'function' || Array.isArray(options.data) ? options.data : typeof _dataFetch === 'function' || Array.isArray(_dataFetch) ? _dataFetch : undefined; // 装饰组件

  class KootReactComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    //
    clientUpdatePageInfo(to) {
      if (true) return;
      if (!hasPageinfo) return;
      const {
        title,
        metas
      } = typeof to === 'function' ? doPageinfo(this.context.store, this.getRenderProps(), to) : to || doPageinfo(this.context.store, this.getRenderProps(), pageinfo);
      (0,_client_update_page_info__WEBPACK_IMPORTED_MODULE_5__.default)(title || "Diablohu's Admin Portal", metas);
    }

    getRenderProps() {
      return (0,_get_render_props__WEBPACK_IMPORTED_MODULE_6__.fromComponentProps)(this.props);
    } //


    //
    constructor(props, context) {
      super(props, context);
      /**
       * _服务器端_
       * 将组件注册到同构渲染对象中
       */

      _defineProperty(this, "state", {
        loaded: typeof dataCheck === 'function' ? dataCheck(this.context.store.getState(), this.getRenderProps()) : undefined
      });

      _defineProperty(this, "mounted", false);

      _defineProperty(this, "kootClassNames", []);

      if (true) {
        const {
          [_defaults_defines_server__WEBPACK_IMPORTED_MODULE_7__.ssrContext]: SSR
        } = context.ctx;

        if (SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_7__.needConnectComponents]) {
          if (false) {}

          if (Array.isArray(SSR.connectedComponents)) SSR.connectedComponents.unshift(KootComponent);
        }
      }

      if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_4___default()()) return;

      if (hasStyles) {
        this.kootClassNames = styles.map(obj => obj.wrapper);
        (0,_styles__WEBPACK_IMPORTED_MODULE_8__.append)(this.getStyleMap(), styles); // console.log('----------')
        // console.log('styles', styles)
        // console.log('theStyles', theStyles)
        // console.log('this.classNameWrapper', this.classNameWrapper)
        // console.log('----------')
      }
    }
    /**
     * 获取 styleMap
     * - 服务器端: 全局常量中的对照表
     * - 客户端: 静态对象 styles
     */


    getStyleMap()
    /*context*/
    {
      if (true) return this.context.styles;
      return KootReactComponent.styles;
    } //


    componentDidUpdate(prevProps) {
      // if (
      //     typeof prevProps.location === 'object' &&
      //     typeof this.props.location === 'object' &&
      //     prevProps.location.pathname !== this.props.location.pathname
      // )
      this.clientUpdatePageInfo();
    }

    componentDidMount() {
      this.mounted = true;

      if (!this.state.loaded && typeof dataFetch !== 'undefined') {
        doFetchData(this.context.store, this.getRenderProps(), dataFetch).then(() => {
          if (!this.mounted) return;
          this.setState({
            loaded: true
          });
        });
      }

      this.clientUpdatePageInfo();

      if (hasPageinfo && this.mounted) {
        setTimeout(() => {
          if (this && this.mounted) {
            this.clientUpdatePageInfo();
          }
        }, 500);
      }

      if (everMounted) {} else {
        everMounted = true;
      }
    }

    componentWillUnmount() {
      this.mounted = false;

      if (hasStyles) {
        (0,_styles__WEBPACK_IMPORTED_MODULE_8__.remove)(this.getStyleMap(), styles);
      }

      if (typeof dataResetWhenUnmount === 'object') {
        setTimeout(() => {
          this.props.dispatch({
            type: _redux__WEBPACK_IMPORTED_MODULE_9__.RESET_CERTAIN_STATE,
            data: dataResetWhenUnmount
          });
        });
      }
    } //


    render() {
      // console.log('styles', styles)
      // console.log('this', this)
      // console.log('this.kootClassNames', this.kootClassNames)
      // console.log('this.props.className', this.props.className)
      if (true) {
        if (ssr === false) return null;
        if (ssr !== true) return ssr;
      }

      if (false) {}

      const props = Object.assign({}, this.props, {
        className: this.kootClassNames.concat(this.props.className).join(' ').trim(),
        'data-class-name': this.kootClassNames.join(' ').trim()
      });
      if (hasPageinfo) props.updatePageinfo = this.clientUpdatePageInfo.bind(this); // if (__SERVER__) console.log('extender this.state.loaded', this.state.loaded)

      if (typeof dataFetch !== 'undefined' && typeof dataCheck === 'function') props.loaded = this.state.loaded; // if (typeof props.forwardedRef !== 'undefined') {
      //     console.log(props.forwardedRef);
      // }

      if (typeof props.kootForwardedRef !== 'undefined') {
        props.forwardedRef = props.kootForwardedRef;
        delete props.kootForwardedRef;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(WrappedComponent, { ...props
      });
    }

  }

  _defineProperty(KootReactComponent, "onServerRenderHtmlExtend", ({
    store,
    renderProps = {}
  }) => {
    const {
      title,
      metas
    } = doPageinfo(store, (0,_get_render_props__WEBPACK_IMPORTED_MODULE_6__.fromServerProps)(renderProps), pageinfo);
    return {
      title,
      metas
    };
  });

  KootReactComponent.contextType = _root_context__WEBPACK_IMPORTED_MODULE_10__.default;
  KootReactComponent.styles = {};

  if (typeof dataFetch !== 'undefined') {
    KootReactComponent.onServerRenderStoreExtend = ({
      store,
      renderProps
    }) => doFetchData(store, (0,_get_render_props__WEBPACK_IMPORTED_MODULE_6__.fromServerProps)(renderProps), dataFetch);
  } // if (_hot && __DEV__ && __CLIENT__) {
  //     const { hot, setConfig } = require('react-hot-loader')
  //     setConfig({ logLevel: 'debug' })
  //     KootComponent = hot(module)(KootComponent)
  // }
  // if (typeof styles === 'object' &&
  //     typeof styles.wrapper === 'string'
  // ) {
  //     KootComponent = ImportStyle(styles)(KootComponent)
  // }


  let KootComponent = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(KootReactComponent, WrappedComponent); // if (typeof styles === 'object' &&
  //     typeof styles.wrapper === 'string'
  // ) {
  //     KootComponent = ImportStyle(styles)(KootComponent)
  // }

  if (_connect === true) {
    KootComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(() => ({}), undefined, undefined, {
      forwardRef: true
    })(KootComponent);
  } else if (typeof _connect === 'function') {
    KootComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(_connect, undefined, undefined, {
      forwardRef: true
    })(KootComponent);
  } else if (Array.isArray(_connect)) {
    if (typeof _connect[3] !== 'object') _connect[3] = {};
    _connect[3].forwardRef = true;
    KootComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(..._connect)(KootComponent);
  } // return KootComponent;


  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
    if (props.forwardedRef) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(KootComponent, { ...props,
      kootForwardedRef: props.forwardedRef
    });
    if (ref) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(KootComponent, { ...props,
      kootForwardedRef: ref
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(KootComponent, { ...props
    });
  });
});

/***/ }),

/***/ "./src/components/center/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/center/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koot */ "./node_modules/koot/React/component-extender.jsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.module.less */ "./src/components/center/index.module.less");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const Center = (0,koot__WEBPACK_IMPORTED_MODULE_2__.default)({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_0__.default
})(props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { ...props
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Center);

/***/ }),

/***/ "./src/components/icon/index.jsx":
/*!***************************************!*\
  !*** ./src/components/icon/index.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koot */ "./node_modules/koot/React/component-extender.jsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.module.less */ "./src/components/icon/index.module.less");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const Icon = (0,koot__WEBPACK_IMPORTED_MODULE_2__.default)({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_0__.default
})(({
  className,
  style,
  id,
  icon,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  className: className,
  style: style,
  ...props,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
    xlinkHref: '#icon-' + (id || icon)
  })
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/components/login/index.jsx":
/*!****************************************!*\
  !*** ./src/components/login/index.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koot */ "./node_modules/koot/React/component-extender.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/app */ "./src/api/app.ts");
/* harmony import */ var _assets_portrait_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/portrait.jpg */ "./src/assets/portrait.jpg");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./src/components/login/index.module.less");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





 // Functional Component =======================================================




let Login = (0,koot__WEBPACK_IMPORTED_MODULE_6__.default)({
  connect: true,
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_4__.default
})(({
  dispatch
}) => {
  const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  function onSubmit(evt) {
    evt.preventDefault();
    setSubmitting(true);
    setErrorMsg(undefined);
    const form = evt.currentTarget; // const url = form.getAttribute('action');
    // const method = form.getAttribute('method');

    const formData = new FormData(form);
    dispatch((0,_api_app__WEBPACK_IMPORTED_MODULE_2__.signIn)(formData)).catch(e => {
      // console.log(Object.keys(e), e.response, e.toJSON());
      if (e.response.status === 403) {
        setErrorMsg('Auth failed!');
      }

      console.error(e);
      setSubmitting(false);
    }); // console.log({ form, url, method });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "select-none min-h-screen flex items-center justify-center bg-bg dark:bg-bg_dark py-12 px-4 sm:px-6 lg:px-8",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "max-w-md w-full space-y-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "mx-auto max-w-full w-36 relative rounded-full overflow-hidden shadow-md",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "block w-full relative inset-0",
            src: _assets_portrait_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
            alt: "Diablohu",
            width: "512",
            height: "512"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-text_main dark:text-text_main_dark",
          children: "Sign-in"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
        className: "mt-8 space-y-6",
        action: "/api/sign-in",
        method: "POST",
        onSubmit: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col sm:flex-row flex-nowrap rounded-md shadow-sm -space-y-px sm:-space-x-px sm:-space-y-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              htmlFor: "email-address",
              className: "sr-only",
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              name: "email",
              type: "email",
              autoComplete: "email",
              required: true,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md sm:rounded-t-none sm:rounded-l-md focus:outline-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 sm:text-sm",
              placeholder: "Email"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex-1 sm:flex-none sm:w-24",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              htmlFor: "code",
              className: "sr-only",
              children: "Auth Code"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              name: "code",
              type: "tel",
              pattern: "[0-9]{6}",
              autoComplete: "off",
              required: true,
              className: "appearance-none rounded-none relative block w-full pl-3 pr-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md sm:rounded-b-none sm:rounded-r-md focus:outline-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 sm:text-sm",
              placeholder: "Auth Code"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
            'cursor-not-allowed': submitting
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            type: "submit",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([// 'inline-flex',
            // 'items-center',
            'group', 'relative', 'w-full', 'flex', 'justify-center', 'py-2', 'px-4', 'border', 'border-transparent', 'text-sm', 'font-medium', 'rounded-md', 'text-white', 'bg-accent-600', 'hover:bg-accent-700', 'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-accent-500']),
            disabled: submitting,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "absolute left-0 inset-y-0 flex items-center pl-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['h-5', 'w-5', 'text-accent-300', 'group-hover:text-accent-400'], {
                  'animate-spin': submitting
                }),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                children: submitting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("circle", {
                    className: "opacity-30",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: 4
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    // className="opacity-100"
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                  fillRule: "evenodd",
                  d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                  clipRule: "evenodd"
                })
              })
            }), "Sign in"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['group', 'relative', 'w-full', 'text-center', 'py-2', 'px-4', 'border', 'border-current', 'text-sm', 'font-medium', 'rounded-md', 'text-red-600', 'bg-red-50'], {
            'opacity-0': !errorMsg
          }),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "absolute left-0 inset-y-0 flex items-center pl-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['h-5', 'w-5', 'text-red-500']),
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              })
            })
          }), errorMsg || '__']
        })]
      })]
    })
  });
});
if (true) Login = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Login);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/components/nav/item.jsx":
/*!*************************************!*\
  !*** ./src/components/nav/item.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var koot_i18n_translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/icon */ "./src/components/icon/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const NavItem = ({
  to,
  className,
  ...otherProps
}) => {
  let route, name;

  if (Array.isArray(to)) {
    route = to[0];
    name = to[1];
  } else {
    route = to;
    name = to;
  }

  const props = {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['item', className]),
    ...otherProps
  };

  if (/^([a-z]+):\/\//i.test(route)) {
    props.href = route;
    props.target = '_blank';
    props.className += ' out-link';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", { ...props,
      children: [(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_4__.default)('navs', name), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_icon__WEBPACK_IMPORTED_MODULE_2__.default, {
        className: "icon",
        icon: "new-tab"
      })]
    });
  }

  props.activeClassName = 'on';
  props.to = route;
  props.children = (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_4__.default)('navs', name);
  const Component = route === '/' ? react_router__WEBPACK_IMPORTED_MODULE_1__.IndexLink : react_router__WEBPACK_IMPORTED_MODULE_1__.Link;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, { ...props
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./src/views/app.jsx":
/*!***************************!*\
  !*** ./src/views/app.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! koot */ "./node_modules/koot/React/component-extender.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var _api_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/app */ "./src/api/app.ts");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/login */ "./src/components/login/index.jsx");
/* harmony import */ var _app_module_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.module.less */ "./src/views/app.module.less");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







 // ============================================================================




const App = (0,koot__WEBPACK_IMPORTED_MODULE_8__.default)({
  connect: state => ({
    auth: state.app?.session?.auth
  }),

  data(state, renderProps, dispatch) {
    // console.log(state.app.session);
    if (state.app.session) return;
    return dispatch((0,_api_app__WEBPACK_IMPORTED_MODULE_4__.updateSession)());
  },

  // ssr: false,
  styles: _app_module_less__WEBPACK_IMPORTED_MODULE_6__.default
})(({
  className,
  children,
  location,
  auth,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([className, {
      'is-home': location.pathname === '' || location.pathname === '/'
    }]),
    children: !auth ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_login__WEBPACK_IMPORTED_MODULE_5__.default, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Layout, {})
  })
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App); // ============================================================================

const TestDb = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(() => {
  const [collections, setCollections] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/test-db-connection').then(res => {
      const list = res?.data?.data;
      if (Array.isArray(list)) setCollections(list);
      setLoading(false);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "test-db",
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: ["Connecting to MongoDB...", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), "Please wait"]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: ["MongoDB connect successfully!", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), "Collections: ", collections.join(', ')]
    })
  });
});

let Layout = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
  className: "min-h-screen flex items-center justify-center bg-bg dark:bg-bg_dark py-12 px-4 sm:px-6 lg:px-8 text-text_main dark:text-text_main_dark",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TestDb, {})
});

if (true) Layout = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Layout);

/***/ }),

/***/ "./src/views/home/index.jsx":
/*!**********************************!*\
  !*** ./src/views/home/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js");
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koot */ "./node_modules/koot/React/component-extender.jsx");
/* harmony import */ var _constants_nav_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/nav-items */ "./src/constants/nav-items.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/urls */ "./src/constants/urls.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nav_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/nav/item */ "./src/components/nav/item.jsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./src/views/home/index.module.less");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






 // ============================================================================



const PageHome = (0,koot__WEBPACK_IMPORTED_MODULE_6__.default)({
  pageinfo: () => ({
    title: `${(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.home.title')} - ${(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('title')}`,
    metas: [{
      description: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.home.description')
    }]
  }),
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_4__.default
})(({
  className
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
  className: className,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
      className: "title",
      children: "Koot.js"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "intro",
      children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('intro').map((str, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "line",
        children: str
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
      className: "button-start",
      to: "/start",
      children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.home.start')
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "nav",
    children: _constants_nav_items__WEBPACK_IMPORTED_MODULE_0__.default.concat([[_constants_urls__WEBPACK_IMPORTED_MODULE_1__.github, 'github']]).map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_nav_item__WEBPACK_IMPORTED_MODULE_3__.default, {
      to: item
    }, index))
  })]
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHome);

/***/ }),

/***/ "./src/views/start/index.jsx":
/*!***********************************!*\
  !*** ./src/views/start/index.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js");
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koot */ "./node_modules/koot/React/component-extender.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/urls */ "./src/constants/urls.js");
/* harmony import */ var _components_center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/center */ "./src/components/center/index.jsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/icon */ "./src/components/icon/index.jsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./src/views/start/index.module.less");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






 // ============================================================================




const listBasic = (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.listBasic');

const listAdvanced = (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.listAdvanced'); // ============================================================================


const PageStart = (0,koot__WEBPACK_IMPORTED_MODULE_7__.default)({
  pageinfo: () => ({
    title: `${(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.title')} - ${(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('title')}`,
    metas: [{
      description: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.description')
    }]
  }),
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_4__.default
})(({
  className
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_center__WEBPACK_IMPORTED_MODULE_2__.default, {
  className: className,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
    className: "title",
    children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.title')
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ol", {
    className: "list",
    children: listBasic.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ListItem, { ...item
    }, index))
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
    className: "title title-more",
    children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.titles.learnMore')
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
    className: "list list-advanced",
    children: listAdvanced.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ListItem, { ...item
    }, index))
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
    className: "bonus",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
      children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.bonus')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_0__.Link, {
      to: "/ts",
      children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.bonusComponentInTS')
    })]
  })]
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageStart); // ============================================================================

const ListItem = ({
  title,
  checkout,
  learn,
  content,
  list,
  doc
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
  className: "item",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
    className: "sub-title",
    children: [!!checkout && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
      children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.titles.checkout')
    }), !!learn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
      children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.titles.learn')
    }), title || checkout || learn]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
    className: "content",
    children: [content, Array.isArray(list) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
      className: "content-list",
      children: list.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
        children: item
      }, index))
    })]
  }), doc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
    className: "doc",
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_1__.doc + '#' + doc,
    target: "_blank",
    rel: "noopener noreferrer",
    children: [(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_6__.default)('pages.start.linkToDoc'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_icon__WEBPACK_IMPORTED_MODULE_3__.default, {
      className: "icon",
      icon: "new-tab"
    })]
  })]
});

/***/ }),

/***/ "./src/api/app.ts":
/*!************************!*\
  !*** ./src/api/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateSession": () => (/* binding */ updateSession),
/* harmony export */   "signIn": () => (/* binding */ signIn)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/action-types */ "./src/constants/action-types.ts");
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/keys */ "./src/constants/keys.js");
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants_keys__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable @typescript-eslint/explicit-function-return-type */



const updateSession = () => (dispatch, getState) => {
  const state = getState();
  let sid;

  try {
    sid = JSON.parse(state.server.cookie[_constants_keys__WEBPACK_IMPORTED_MODULE_2__.SESSION_SID])._sid;
  } catch (e) {}

  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/session' + (sid ? `/${sid}` : '')).then(res => {
    return dispatch({
      type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__.UPDATE_SESSION,
      payload: res?.data?.session
    });
  });
};
const signIn = formData => dispatch => axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/sign-in', formData).then(res => {
  const {
    sid
  } = res?.data;
  dispatch({
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__.SIGN_IN,
    payload: {
      sid
    }
  });
  return sid;
});

/***/ }),

/***/ "./src/constants/action-types.ts":
/*!***************************************!*\
  !*** ./src/constants/action-types.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SIGN_IN": () => (/* binding */ SIGN_IN),
/* harmony export */   "UPDATE_SESSION": () => (/* binding */ UPDATE_SESSION)
/* harmony export */ });
const SIGN_IN = 'SIGN_IN';
const UPDATE_SESSION = 'UPDATE_SESSION';

/***/ }),

/***/ "./src/server/mongodb.ts":
/*!*******************************!*\
  !*** ./src/server/mongodb.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dbName": () => (/* binding */ dbName),
/* harmony export */   "colletions": () => (/* binding */ colletions),
/* harmony export */   "getClient": () => (/* binding */ getClient)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_get_db_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/get-db-url */ "./src/server/utils/get-db-url.ts");

 // ============================================================================

const clients = new Map();
const dbName = 'portal_diablohu_com';
const colletions = {
  sessions: 'sessions',
  '2fa': 'twofactor'
}; // ============================================================================

async function getClient(url) {
  const uri = url ?? (await (0,_utils_get_db_url__WEBPACK_IMPORTED_MODULE_1__.default)()) + '?retryWrites=true&writeConcern=majority';
  if (clients.has(uri)) return clients.get(uri);
  const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, {
    useUnifiedTopology: true
  }); // Connect the client to the server

  await client.connect(); //

  clients.set(uri, client);
  return client;
} // ============================================================================
// Exit handler

function exitHandler() {
  try {
    Promise.all([...clients].map(([_, client]) => {
      if (client.isConnected()) return client.close(false);
      return new Promise(resolve => resolve());
    })).then(() => {
      // eslint-disable-next-line no-console
      console.log(`MongoDB client close successfully!`);
      process.exit(0);
    });
  } catch (e) {
    if (process) process.exit(0);
  }
}

process.on('exit', exitHandler); // catches ctrl+c event

process.on('SIGINT', exitHandler); // catches "kill pid" (for example: nodemon restart)

process.on('SIGUSR1', exitHandler);
process.on('SIGUSR2', exitHandler); // catches uncaught exceptions

process.on('uncaughtException', exitHandler);

/***/ }),

/***/ "./src/server/routes/api.ts":
/*!**********************************!*\
  !*** ./src/server/routes/api.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mongodb */ "./src/server/mongodb.ts");
 // ============================================================================

// ============================================================================
// let db;
const dbName = 'diablohu_com';
const defaultCollections = ['category', 'project', 'video', 'gallery'];
let isPrepared = false; // ============================================================================

const apis = {
  'test-db-connection': async (ctx, db) => {
    ctx.body = {
      msg: 'Connected successfully to MongoDB server!',
      data: (await db.collections()).map(c => c.collectionName)
    };
  }
}; // ============================================================================

const wrap = (ctx, func) => async function () {
  ctx.set('Access-Control-Allow-Origin', '*');
  const client = await (0,_mongodb__WEBPACK_IMPORTED_MODULE_0__.getClient)();

  try {
    // console.log({ client, isConnected: client.isConnected() });
    if (!client.isConnected()) {
      await client.connect();
    } // Establish and verify connection
    // await client.db('admin').command({ ping: 1 });
    // get database


    const db = client.db(dbName); // prepare collections

    if (!isPrepared) {
      const collectionsCurr = await db.collections();
      const collectionsToCreate = defaultCollections.filter(name => !collectionsCurr.some(thisCollection => thisCollection.collectionName === name));

      for (const collection of collectionsToCreate) {
        await db.createCollection(collection);
      }

      if (collectionsToCreate.length) {
        console.warn('Collections created: ', collectionsToCreate);
      } // console.log({
      //     collectionsToCreate,
      //     after: (await db.collections()).map((c) => c.collectionName),
      // });


      isPrepared = true;
    }

    await func(ctx, db);
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  } finally {}
};

for (const [key, func] of Object.entries(apis)) {
  apis[key] = async ctx => await wrap(ctx, func)();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apis);

/***/ }),

/***/ "./src/server/utils/get-db-url.ts":
/*!****************************************!*\
  !*** ./src/server/utils/get-db-url.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _read_secret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read-secret */ "./src/server/utils/read-secret.ts");


async function getDbUrl(databaseName, collectionName) {
  if (!databaseName && collectionName) throw new Error('Need databaseName when collectionName exists');
  const USERNAME = await (0,_read_secret__WEBPACK_IMPORTED_MODULE_0__.default)('MONGO_INITDB_ROOT_USERNAME_FILE');
  const PASSWORD = await (0,_read_secret__WEBPACK_IMPORTED_MODULE_0__.default)('MONGO_INITDB_ROOT_PASSWORD_FILE');
  const url = 'mongodb://' + `${USERNAME}:${PASSWORD}` + '@host.docker.internal:27017' + (databaseName ? `/${databaseName}` : '') + (collectionName ? `/${collectionName}` : '');
  return url;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDbUrl);

/***/ }),

/***/ "./src/server/utils/get-sid-from-ctx.ts":
/*!**********************************************!*\
  !*** ./src/server/utils/get-sid-from-ctx.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/keys */ "./src/constants/keys.js");
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_constants_keys__WEBPACK_IMPORTED_MODULE_0__);


function getSid(ctx) {
  let sid = ctx.cookies.get(_constants_keys__WEBPACK_IMPORTED_MODULE_0__.SESSION_SID);

  if (!!sid) {
    try {
      sid = JSON.parse(sid)._sid;
    } catch (e) {}
  }

  return sid || undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSid);

/***/ }),

/***/ "./src/server/utils/read-secret.ts":
/*!*****************************************!*\
  !*** ./src/server/utils/read-secret.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 读取 secret 字符串
 * - 从环境变量中获取 name 的值
 * - 读取对应的文件
 * - 返回文件内容
 */

const readSecret = async (name) => (await fs_extra__WEBPACK_IMPORTED_MODULE_0___default().readFile((process.env[name] || '').replace(/(\\|\/)*%(.+?)%(\\|\/)*/g, (match, p1 = '', p2, p3 = '') => `${p1}${process.env[p2] || ''}${p3}`), 'utf-8')).replace(/\n/g, '').replace(/\r/g, '').trim();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readSecret);

/***/ }),

/***/ "./src/views/ts-example/index.tsx":
/*!****************************************!*\
  !*** ./src/views/ts-example/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "UseTSFunctionalComponent": () => (/* binding */ UseTSFunctionalComponent),
/* harmony export */   "TSComponentClass": () => (/* binding */ TSComponentClass),
/* harmony export */   "UseTSComponentClass": () => (/* binding */ UseTSComponentClass)
/* harmony export */ });
/* harmony import */ var koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koot */ "./node_modules/koot/React/component-extender.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/icon */ "./src/components/icon/index.jsx");
/* harmony import */ var _assets_typescript_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/typescript.svg */ "./src/assets/typescript.svg");
/* harmony import */ var _assets_typescript_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_typescript_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./src/views/ts-example/index.module.less");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _dec, _class;







 // ============================================================================



// Functional Component =======================================================
const TSFunctionalComponent = (0,koot__WEBPACK_IMPORTED_MODULE_6__.default)({
  pageinfo: () => ({
    title: `${(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.title')} - ${(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('title')}`,
    metas: [{
      description: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.description')
    }]
  }),
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_4__.default
})(({
  className,
  children,
  customProps,
  'data-class-name': dataClassName
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: className,
    "data-koot-test-page": "page-ts",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
      src: (_assets_typescript_svg__WEBPACK_IMPORTED_MODULE_3___default()),
      className: "logo",
      alt: "TypeScript LOGO",
      "data-custom-props": customProps,
      "data-class-name": dataClassName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "msg-big",
      children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.msg')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "msg-small",
      children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.msgCheckFile')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "back",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/start",
        className: "link",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_icon__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: "icon",
          icon: "circle-left3"
        }), (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.back')]
      })
    }), children]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TSFunctionalComponent);
const UseTSFunctionalComponent = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TSFunctionalComponent, {
  customProps: "B"
}); // Component Class ============================================================

let TSComponentClass = (_dec = (0,koot__WEBPACK_IMPORTED_MODULE_6__.default)({
  pageinfo: () => ({
    title: `${(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.title')} - ${(0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('title')}`,
    metas: [{
      description: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.description')
    }]
  }),
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_4__.default
}), _dec(_class = class TSComponentClass extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  testProperty() {
    let a = 1;
    a++;
    return a;
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: this.props.className,
      "data-custom-props": this.props.customProps,
      "data-class-name": this.props['data-class-name'],
      "data-koot-test-page": "page-ts",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: (_assets_typescript_svg__WEBPACK_IMPORTED_MODULE_3___default()),
        className: "logo",
        alt: "TypeScript LOGO"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "msg-big",
        children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.msg')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "msg-small",
        children: (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.msgCheckFile')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "back",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: "/start",
          className: "back",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_icon__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: "icon",
            icon: "circle-left3"
          }), (0,koot_i18n_translate__WEBPACK_IMPORTED_MODULE_7__.default)('pages.ts.back')]
        })
      }), this.props.children]
    });
  }

}) || _class);

const UseTSComponentClass = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TSComponentClass, {
  customProps: "B"
});

/***/ }),

/***/ "./src/assets/portrait.jpg":
/*!*********************************!*\
  !*** ./src/assets/portrait.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "includes/asset.6aa9680a4eab9853dc7109cf3ce94328.jpg");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("ejs");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs-extra");;

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("hoist-non-react-statics");;

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("invariant");;

/***/ }),

/***/ "is-url":
/*!*************************!*\
  !*** external "is-url" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("is-url");;

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-body");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ }),

/***/ "koa-session-store":
/*!************************************!*\
  !*** external "koa-session-store" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-session-store");;

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ "node-2fa":
/*!***************************!*\
  !*** external "node-2fa" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-2fa");;

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("object-assign");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");;

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-redux");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");;

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("warning");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/ssr.jsx ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history/lib/createMemoryHistory */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __KOOT_PROJECT_CONFIG_FULL_PATHNAME__ */ "./logs/tmp/config/full.4176d771c6b194dfd631d3de2dccc5e3.js");
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _root_isomorphic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./root-isomorphic */ "./node_modules/koot/ReactApp/server/root-isomorphic.jsx");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony import */ var _React_validate_router_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../React/validate/router-config */ "./node_modules/koot/React/validate/router-config.js");
/* harmony import */ var _React_validate_inject__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../React/validate-inject */ "./node_modules/koot/React/validate-inject.js");
/* harmony import */ var _React_validate_inject__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_React_validate_inject__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _React_validate_redux_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../React/validate/redux-config */ "./node_modules/koot/React/validate/redux-config.js");
/* harmony import */ var _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../React/inject/is-need-inject-critical */ "./node_modules/koot/React/inject/is-need-inject-critical.js");
/* harmony import */ var _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _React_render_template__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../React/render-template */ "./node_modules/koot/React/render-template.js");
/* harmony import */ var _React_render_template__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_React_render_template__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _React_redux_reset_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../React/redux/reset-store */ "./node_modules/koot/React/redux/reset-store.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_router_match__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-router-match */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_pre_render__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-pre-render */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_data_to_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-data-to-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_after_data_to_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/after-data-to-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js");
/* harmony import */ var _middlewares_isomorphic_execute_components_lifecycle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./middlewares/isomorphic/execute-components-lifecycle */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js");
/* harmony import */ var _middlewares_isomorphic_init_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/isomorphic/init-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js");
/* harmony import */ var _i18n_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../i18n/redux */ "./node_modules/koot/i18n/redux/index.js");
/* harmony import */ var _i18n_server_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../i18n/server/generate-html-redirect-metas */ "./node_modules/koot/i18n/server/generate-html-redirect-metas.js");
/* harmony import */ var _i18n_server_get_ssr_state__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../i18n/server/get-ssr-state */ "./node_modules/koot/i18n/server/get-ssr-state.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* __KOOT_DEV_NO_REACT_HOT_INJECT__ */
// import 'regenerator-runtime/runtime';






















 // import i18nOnServerRender from '../../i18n/onServerRender';






async function ssr(ctx) {
  (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_6__.set)(ctx);
  const SSR = (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_6__.get)();
  const {
    LocaleId
  } = SSR;
  /** @type {string} 本次请求的 URL */

  const url = ctx.path + ctx.search; // ========================================================================

  const {
    redux: reduxConfigRaw = {}
  } = _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_4__;
  const reduxConfig = await (0,_React_validate_redux_config__WEBPACK_IMPORTED_MODULE_7__.default)(reduxConfigRaw); // 生成 History

  const historyConfig = {
    basename: LocaleId && "undefined" === 'router' ? `/${LocaleId}` : '/'
  };
  /* eslint-disable react-hooks/rules-of-hooks */

  const memoryHistory = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useRouterHistory)(() => (0,history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__.default)(url))(historyConfig); // 生成/清理 Store
  // console.log('\x1b[36m⚑\x1b[0m' + ' Store created')

  const Store = (0,_middlewares_isomorphic_init_store__WEBPACK_IMPORTED_MODULE_8__.default)(reduxConfig);
  /** @type {Object} 已生成的 History 实例 */

  const History = (0,react_router_redux__WEBPACK_IMPORTED_MODULE_3__.syncHistoryWithStore)(memoryHistory, Store);
  const {
    syncCookie
  } = reduxConfig;

  if (false) {} else {
    (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_6__.resetStore)(Store);
    (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_6__.resetHistory)(History);
  } // ========================================================================
  // console.log({
  //     LocaleId,
  //     Store,
  //     History,
  //     SSR
  // })

  /** @type {Boolean} i18n 是否启用 */


  const i18nEnabled = Boolean(LocaleId);
  const {
    proxyRequestOrigin = {},
    ssrComplete: _complete
  } = SSR;

  function ssrComplete(...args) {
    if (true) {
      (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_6__.reset)(); // SSR = undefined;

      ctx = undefined;
      purgeObject(global);
    }

    _complete(...args);
  }

  ctx.originTrue = proxyRequestOrigin.protocol ? ctx.origin.replace(/^http:\/\//, `${proxyRequestOrigin.protocol}://`) : ctx.origin;
  ctx.hrefTrue = proxyRequestOrigin.protocol ? ctx.href.replace(/^http:\/\//, `${proxyRequestOrigin.protocol}://`) : ctx.href;
  const {
    lifecycle,
    routerConfig: routes
  } = await initConfig(i18nEnabled, LocaleId); // 渲染生命周期: beforeRouterMatch

  await (0,_middlewares_isomorphic_lifecycle_before_router_match__WEBPACK_IMPORTED_MODULE_9__.default)({
    ctx,
    store: Store,
    syncCookie,
    callback: lifecycle.beforeRouterMatch
  });

  if (LocaleId) {
    Store.dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_10__.CHANGE_LANGUAGE,
      data: LocaleId
    });
    Store.dispatch((0,_i18n_redux__WEBPACK_IMPORTED_MODULE_11__.actionInit)(LocaleId)); // i18nOnServerRender(Store, LocaleId);
  } // console.log('after router match', ctx.hrefTrue, LocaleId);
  // 进行路由匹配


  const {
    redirectLocation,
    renderProps
  } = await new Promise((resolve, reject) => {
    (0,react_router__WEBPACK_IMPORTED_MODULE_1__.match)({
      history: History,
      routes,
      location: url
    }, (error, redirectLocation, renderProps) => {
      if (error) return reject(error);
      resolve({
        redirectLocation,
        renderProps
      });
    });
  }); // 如果需要重定向，派发 ctx.redirect / 302

  if (redirectLocation) {
    ssrComplete({
      redirect: redirectLocation.pathname + redirectLocation.search
    });
    return;
  } // 如果没有匹配，终止本中间件流程，执行其他中间件
  // 表示 react 不应处理该请求


  if (!renderProps) {
    ssrComplete({
      next: true
    });
    return;
  } // 强制更新 store: state.routing.locationBeforeTransitions


  const state = Store.getState();
  const currentPathname = state.routing.locationBeforeTransitions.pathname;
  if (currentPathname.split(0, 1) !== '/') Object.assign(Store.getState().routing.locationBeforeTransitions, {
    pathname: ctx.path // search: ctx.search

  }); // 渲染生命周期: beforePreRender

  await (0,_middlewares_isomorphic_lifecycle_before_pre_render__WEBPACK_IMPORTED_MODULE_12__.default)({
    ctx,
    store: Store,
    localeId: LocaleId,
    callback: lifecycle.beforePreRender
  });
  const rootProps = {
    store: Store,
    history: History,
    localeId: LocaleId,
    locales: SSR.locales,
    styles: SSR.styleMap,
    ctx,
    ...renderProps
  }; // 确定当前访问匹配到的组件

  SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_13__.needConnectComponents] = true;
  SSR.connectedComponents = [];

  try {
    (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_root_isomorphic__WEBPACK_IMPORTED_MODULE_14__.default, { ...rootProps
    }));
  } catch (e) {}

  SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_13__.needConnectComponents] = false; // 重置 state

  (0,_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_15__.default)(Store, [..._React_redux_reset_store__WEBPACK_IMPORTED_MODULE_15__.defaultKeysToPreserve, 'server', 'routing']); // 渲染生命周期: beforeDataToStore

  await (0,_middlewares_isomorphic_lifecycle_before_data_to_store__WEBPACK_IMPORTED_MODULE_16__.default)({
    ctx,
    store: Store,
    localeId: LocaleId,
    callback: lifecycle.beforeDataToStore
  }); // 执行所有匹配到的组件的自定义的静态生命周期

  const {
    title,
    metaHtml,
    reduxHtml
  } = await (0,_middlewares_isomorphic_execute_components_lifecycle__WEBPACK_IMPORTED_MODULE_17__.default)({
    store: Store,
    renderProps,
    ctx
  }); // 渲染生命周期: afterDataToStore

  await (0,_middlewares_isomorphic_lifecycle_after_data_to_store__WEBPACK_IMPORTED_MODULE_18__.default)({
    ctx,
    store: Store,
    localeId: LocaleId,
    callback: lifecycle.afterDataToStore
  }); // SSR

  const reactHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_root_isomorphic__WEBPACK_IMPORTED_MODULE_14__.default, { ...rootProps
  })); // console.log({
  //     // __KOOT_SSR__,
  //     // thisTemplateInjectCache: SSR.thisTemplateInjectCache,
  //     // thisEntrypoints: SSR.thisEntrypoints,
  //     // thisFilemap: SSR.thisFilemap,
  //     thisStyleMap,
  //     // templateInject: SSR.templateInject,
  //     // proxyRequestOrigin,
  // })
  // const stylesHtml = Object.keys(thisStyleMap)
  //     .filter(id => typeof thisStyleMap[id].css === 'string')
  //     .map(id => `<style id="${id}">${thisStyleMap[id].css}</style>`)
  //     .join('')

  const stylesHtml = Object.keys(SSR.styleMap).filter(id => typeof SSR.styleMap[id].css === 'string' && SSR.styleMap[id].css !== '').map(id => `<style ${"data-koot-module"}="${id}">${SSR.styleMap[id].css}</style>`).join(''); // console.log('result thisStyleMap', thisStyleMap)
  // 渲染 EJS 模板

  const inject = _React_validate_inject__WEBPACK_IMPORTED_MODULE_19___default()({
    injectCache: SSR.thisTemplateInjectCache,
    filemap: SSR.thisFilemap,
    entrypoints: SSR.thisEntrypoints,
    manifest: SSR.thisManifest,
    localeId: LocaleId,
    title,
    metaHtml,
    reactHtml,
    stylesHtml,
    reduxHtml,
    SSRState: (0,_i18n_server_get_ssr_state__WEBPACK_IMPORTED_MODULE_20__.default)(SSR),
    needInjectCritical: _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_21___default()(SSR.template)
  });

  if (LocaleId) {
    // i18n 启用时: 添加其他语种页面跳转信息的 meta 标签
    inject.metas += (0,_i18n_server_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_22__.default)({
      ctx,
      proxyRequestOrigin,
      localeId: LocaleId
    });
  } // > Memory stable ========================================================

  /** @type {String} HTML 结果 */


  let body = _React_render_template__WEBPACK_IMPORTED_MODULE_23___default()({
    template: SSR.template,
    inject: { ...inject,
      ...SSR.templateInject
    },
    store: Store,
    ctx
  }); // 结果写入缓存

  if (false) {} // React SSR


  ssrComplete({
    body
  });
}
/**
 * 初始化 SSR 配置
 * @param {*} i18nEnabled
 */


const initConfig = async (i18nEnabled, LocaleId) => {
  // const LocaleId = __DEV__ ? global.__KOOT_LOCALEID__ : __KOOT_LOCALEID__;
  const {
    server: serverConfig = {}
  } = _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_4__;
  const config = {}; // 决定路由配置 (每次请求需重新生成)

  config.routerConfig = await (0,_React_validate_router_config__WEBPACK_IMPORTED_MODULE_24__.default)(_KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_4__.router);
  if (typeof i18nEnabled === 'undefined') i18nEnabled = Boolean(LocaleId);
  config.lifecycle = {};

  if (typeof serverConfig.onRender === 'function') {
    config.lifecycle.beforeDataToStore = serverConfig.onRender;
  } else if (typeof serverConfig.onRender === 'object') {
    Object.keys(serverConfig.onRender).forEach(key => {
      config.lifecycle[key] = serverConfig.onRender[key];
    });
  }

  return config;
};

if (true) {
  // eslint-disable-next-line no-eval
  const ctx = eval(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_13__.koaContext);
  ssr(ctx).catch(err => {
    ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_13__.ssrContext].ssrComplete({
      error: err
    }); // console.error(err);
    // throw err;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ssr); // ============================================================================

const purgeObject = obj => {
  if (typeof obj !== 'object') return;

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'object') purgeObject(obj[key]);
    delete obj[key];
  }
};
})();

/******/ })()
;
//# sourceMappingURL=ssr.js.map