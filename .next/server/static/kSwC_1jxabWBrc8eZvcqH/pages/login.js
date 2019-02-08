module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

function jsonReq(_x, _x2, _x3, _x4) {
  return _jsonReq.apply(this, arguments);
}

function _jsonReq() {
  _jsonReq = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(path, method, body, token) {
    var url, headers, res, j;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "https://tasks.multitasked.net" + path;
            headers = {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            };

            if (token) {
              headers['x-tasklist-token'] = token;
            }

            _context.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url, {
              method: method,
              headers: headers,
              body: JSON.stringify(body)
            });

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            j = _context.sent;
            return _context.abrupt("return", j);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _jsonReq.apply(this, arguments);
}

function postJson(_x5, _x6, _x7) {
  return _postJson.apply(this, arguments);
}

function _postJson() {
  _postJson = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(path, body, token) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", jsonReq(path, 'post', body, token));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _postJson.apply(this, arguments);
}

function putJson(_x8, _x9, _x10) {
  return _putJson.apply(this, arguments);
}

function _putJson() {
  _putJson = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(path, body, token) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", jsonReq(path, 'put', body, token));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _putJson.apply(this, arguments);
}

function getJson(_x11, _x12) {
  return _getJson.apply(this, arguments);
}

function _getJson() {
  _getJson = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(path, token) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", jsonReq(path, 'get', undefined, token));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getJson.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  postJson: postJson,
  putJson: putJson,
  getJson: getJson
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logout; });
function getCookie(decodedCookie, cname) {
  var name = cname + "=";
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

function getToken(props) {
  var token;

  if (props.req && props.req.headers.cookie) {
    token = getCookie(props.req.headers.cookie, 'x-tasklist-token');
  } else if (typeof document != 'undefined') {
    token = getCookie(document.cookie, 'x-tasklist-token');
  }

  return token;
}
function logout() {
  document.cookie = 'x-tasklist-token' + '=; Max-Age=-99999999;';
  document.location = '/';
}
/* harmony default export */ __webpack_exports__["a"] = (getToken);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./utils/token.js
var utils_token = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Header.js





'../utils/token';

var Header_Header = function Header(props) {
  var token = Object(utils_token["b" /* getToken */])(props);
  return external_react_default.a.createElement("div", {
    className: "jsx-191767676"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("title", {
    className: "jsx-191767676"
  }, !!props.meta && props.meta.name || 'Shareable to do lists -- taskli.st'), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: !!props.meta && props.meta.name || 'Shareable to do lists -- taskli.st',
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: !!props.meta && 'https://taskli.st/l/' + props.meta.url_key || 'https://taskli.st/',
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    property: "og:image",
    content: "https://s3.eu-central-1.amazonaws.com/static.btlas.com/hero-2.jpg",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    property: "og:site_name",
    content: "taskli.st",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    property: "fb:admins",
    content: "548900828",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: !!props.meta && props.meta.description || 'Create your to do list for a group of people, send them, and let them assign the task themselves and complete the work.',
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "16x16 32x32 64x64",
    href: "/static/favicon.ico",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "196x196",
    href: "/static/favicon-192.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "160x160",
    href: "/static/favicon-160.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/static/favicon-96.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "64x64",
    href: "/static/favicon-64.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/favicon-32.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/favicon-16.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/favicon-57.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/favicon-114.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/static/favicon-72.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/favicon-144.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/static/favicon-60.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/favicon-120.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/static/favicon-76.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/favicon-152.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/favicon-180.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#FFFFFF",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/favicon-144.png",
    className: "jsx-191767676"
  }), external_react_default.a.createElement("meta", {
    name: "msapplication-config",
    content: "/browserconfig.xml",
    className: "jsx-191767676"
  })), external_react_default.a.createElement("div", {
    className: "jsx-191767676" + " " + "header"
  }, external_react_default.a.createElement("div", {
    id: "createLink",
    className: "jsx-191767676"
  }, external_react_default.a.createElement(link_default.a, {
    as: "/create",
    href: "/create"
  }, external_react_default.a.createElement("a", {
    className: "jsx-191767676"
  }, "Create a new list")), "\xA0\u2013\xA0", token && external_react_default.a.createElement("a", {
    href: "",
    onClick: utils_token["c" /* logout */],
    className: "jsx-191767676"
  }, "Logout"), !token && external_react_default.a.createElement(link_default.a, {
    as: "/login",
    href: "/login"
  }, external_react_default.a.createElement("a", {
    className: "jsx-191767676"
  }, "Login"))), external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("span", {
    id: "branding",
    className: "jsx-191767676"
  }, "taskli.st"))), external_react_default.a.createElement(style_default.a, {
    styleId: "191767676",
    css: [".header{margin:20px 0 20px 0;}", "#branding{padding:7px;color:white;border-radius:4px;background-color:#222;cursor:pointer;}", "#createLink{float:right;}", "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}", "body{margin:0;color:#12162D;}", "article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block;}", "audio,canvas,progress,video{display:inline-block;vertical-align:baseline;}", "audio:not([controls]){display:none;height:0;}", "[hidden],template{display:none;}", "a{background-color:transparent;}", "a:active,a:hover{outline:0;}", "abbr[title]{border-bottom:1px dotted;}", "b,strong{font-weight:bold;}", "dfn{font-style:italic;}", "h1{font-size:2em;margin:0.67em 0;}", "mark{background:#ff0;color:#000;}", "small{font-size:80%;}", "sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}", "sup{top:-0.5em;}", "sub{bottom:-0.25em;}", "img{border:0;}", "svg:not(:root){overflow:hidden;}", "figure{margin:1em 40px;}", "hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0;}", "pre{overflow:auto;}", "code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em;}", "button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0;}", "button{overflow:visible;}", "button,select{text-transform:none;}", "button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer;}", "button[disabled],html input[disabled]{cursor:default;}", "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}", "input{line-height:normal;}", "input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0;}", "input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto;}", "input[type=\"search\"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}", "input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}", "fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}", "legend{border:0;padding:0;}", "textarea{overflow:auto;}", "optgroup{font-weight:bold;}", "table{border-collapse:collapse;border-spacing:0;}", "td,th{padding:0;}", ".container{position:relative;width:100%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;}", ".column,.columns{width:100%;float:left;box-sizing:border-box;}", "@media (min-width:400px){.container{width:85%;padding:0;}}", "@media (min-width:550px){.container{width:80%;}.column,.columns{margin-left:4%;}.column:first-child,.columns:first-child{margin-left:0;}.one.column,.one.columns{width:4.66666666667%;}.two.columns{width:13.3333333333%;}.three.columns{width:22%;}.four.columns{width:30.6666666667%;}.five.columns{width:39.3333333333%;}.six.columns{width:48%;}.seven.columns{width:56.6666666667%;}.eight.columns{width:65.3333333333%;}.nine.columns{width:74.0%;}.ten.columns{width:82.6666666667%;}.eleven.columns{width:91.3333333333%;}.twelve.columns{width:100%;margin-left:0;}.one-third.column{width:30.6666666667%;}.two-thirds.column{width:65.3333333333%;}.one-half.column{width:48%;}.offset-by-one.column,.offset-by-one.columns{margin-left:8.66666666667%;}.offset-by-two.column,.offset-by-two.columns{margin-left:17.3333333333%;}.offset-by-three.column,.offset-by-three.columns{margin-left:26%;}.offset-by-four.column,.offset-by-four.columns{margin-left:34.6666666667%;}.offset-by-five.column,.offset-by-five.columns{margin-left:43.3333333333%;}.offset-by-six.column,.offset-by-six.columns{margin-left:52%;}.offset-by-seven.column,.offset-by-seven.columns{margin-left:60.6666666667%;}.offset-by-eight.column,.offset-by-eight.columns{margin-left:69.3333333333%;}.offset-by-nine.column,.offset-by-nine.columns{margin-left:78.0%;}.offset-by-ten.column,.offset-by-ten.columns{margin-left:86.6666666667%;}.offset-by-eleven.column,.offset-by-eleven.columns{margin-left:95.3333333333%;}.offset-by-one-third.column,.offset-by-one-third.columns{margin-left:34.6666666667%;}.offset-by-two-thirds.column,.offset-by-two-thirds.columns{margin-left:69.3333333333%;}.offset-by-one-half.column,.offset-by-one-half.columns{margin-left:52%;}}", "html{font-size:62.5%;}", "body{font-size:1.5em;line-height:1.6;font-weight:400;font-family:\"Raleway\",\"HelveticaNeue\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;color:#222;}", "h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:2rem;font-weight:300;}", "h1{font-size:4.0rem;line-height:1.2;-webkit-letter-spacing:-.1rem;-moz-letter-spacing:-.1rem;-ms-letter-spacing:-.1rem;letter-spacing:-.1rem;}", "h2{font-size:3.6rem;line-height:1.25;-webkit-letter-spacing:-.1rem;-moz-letter-spacing:-.1rem;-ms-letter-spacing:-.1rem;letter-spacing:-.1rem;}", "h3{font-size:3.0rem;line-height:1.3;-webkit-letter-spacing:-.1rem;-moz-letter-spacing:-.1rem;-ms-letter-spacing:-.1rem;letter-spacing:-.1rem;}", "h4{font-size:2.4rem;line-height:1.35;-webkit-letter-spacing:-.08rem;-moz-letter-spacing:-.08rem;-ms-letter-spacing:-.08rem;letter-spacing:-.08rem;}", "h5{font-size:1.8rem;line-height:1.5;-webkit-letter-spacing:-.05rem;-moz-letter-spacing:-.05rem;-ms-letter-spacing:-.05rem;letter-spacing:-.05rem;}", "h6{font-size:1.5rem;line-height:1.6;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}", "@media (min-width:550px){h1{font-size:5.0rem;}h2{font-size:4.2rem;}h3{font-size:3.6rem;}h4{font-size:3.0rem;}h5{font-size:2.4rem;}h6{font-size:1.5rem;}}", "p{margin-top:0;}", "a{color:#1EAEDB;}", "a:hover{color:#0FA0CE;}", ".button,button,input[type=\"submit\"],input[type=\"reset\"],input[type=\"button\"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;-webkit-letter-spacing:.1rem;-moz-letter-spacing:.1rem;-ms-letter-spacing:.1rem;letter-spacing:.1rem;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box;}", ".button:hover,button:hover,input[type=\"submit\"]:hover,input[type=\"reset\"]:hover,input[type=\"button\"]:hover,.button:focus,button:focus,input[type=\"submit\"]:focus,input[type=\"reset\"]:focus,input[type=\"button\"]:focus{color:#333;border-color:#888;outline:0;}", ".button.button-primary,button.button-primary,input[type=\"submit\"].button-primary,input[type=\"reset\"].button-primary,input[type=\"button\"].button-primary{color:#FFF;background-color:#33C3F0;border-color:#33C3F0;}", ".button.button-primary:hover,button.button-primary:hover,input[type=\"submit\"].button-primary:hover,input[type=\"reset\"].button-primary:hover,input[type=\"button\"].button-primary:hover,.button.button-primary:focus,button.button-primary:focus,input[type=\"submit\"].button-primary:focus,input[type=\"reset\"].button-primary:focus,input[type=\"button\"].button-primary:focus{color:#FFF;background-color:#1EAEDB;border-color:#1EAEDB;}", "input[type=\"email\"],input[type=\"number\"],input[type=\"search\"],input[type=\"text\"],input[type=\"tel\"],input[type=\"url\"],input[type=\"password\"],textarea,select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #D1D1D1;border-radius:4px;box-shadow:none;box-sizing:border-box;}", "input[type=\"email\"],input[type=\"number\"],input[type=\"search\"],input[type=\"text\"],input[type=\"tel\"],input[type=\"url\"],input[type=\"password\"],textarea{-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}", "textarea{min-height:65px;padding-top:6px;padding-bottom:6px;}", "input[type=\"email\"]:focus,input[type=\"number\"]:focus,input[type=\"search\"]:focus,input[type=\"text\"]:focus,input[type=\"tel\"]:focus,input[type=\"url\"]:focus,input[type=\"password\"]:focus,textarea:focus,select:focus{border:1px solid #33C3F0;outline:0;}", "label,legend{display:block;margin-bottom:.5rem;font-weight:600;}", "fieldset{padding:0;border-width:0;}", "input[type=\"checkbox\"],input[type=\"radio\"]{display:inline;}", "label>.label-body{display:inline-block;margin-left:.5rem;font-weight:normal;}", "ul{list-style:circle inside;}", "ol{list-style:decimal inside;}", "ol,ul{padding-left:0;margin-top:0;}", "ul ul,ul ol,ol ol,ol ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%;}", "li{margin-bottom:1rem;}", "code{padding:.2rem .5rem;margin:0 .2rem;font-size:90%;white-space:nowrap;background:#F1F1F1;border:1px solid #E1E1E1;border-radius:4px;}", "pre>code{display:block;padding:1rem 1.5rem;white-space:pre;}", "th,td{padding:12px 15px;text-align:left;border-bottom:1px solid #E1E1E1;}", "th:first-child,td:first-child{padding-left:0;}", "th:last-child,td:last-child{padding-right:0;}", "button,.button{margin-bottom:1rem;}", "input,textarea,select,fieldset{margin-bottom:1.5rem;}", "pre,blockquote,dl,figure,table,p,ul,ol,form{margin-bottom:2.5rem;}", ".u-full-width{width:100%;box-sizing:border-box;}", ".u-max-full-width{max-width:100%;box-sizing:border-box;}", ".u-pull-right{float:right;}", ".u-pull-left{float:left;}", "hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #E1E1E1;}", ".container:after,.row:after,.u-cf{content:\"\";display:table;clear:both;}", "@media (min-width:400px){}", "@media (min-width:550px){}", "@media (min-width:750px){}", "@media (min-width:1000px){}", "@media (min-width:1200px){}"]
  }));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/SiteLayout.js




var SiteLayout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-1262658172" + " " + "container"
  }, external_react_default.a.createElement("link", {
    href: "/static/fa/css/all.css",
    rel: "stylesheet",
    className: "jsx-1262658172"
  }), external_react_default.a.createElement(components_Header, {
    meta: props.meta
  }), props.children, external_react_default.a.createElement(style_default.a, {
    styleId: "1262658172",
    css: [".userName{padding:3px;border-radius:3px;margin-right:3px;cursor:pointer;}", ".container{margin:20px auto;}", ".userName.orange{color:#ff8C00;border:1px solid #ff8C00;}", ".userName.orange.butt{color:white;background-color:#ff8C00;border:1px solid #ff8C00;}", ".userName.red{color:#e81123;border:1px solid #e81123;}", ".userName.red.butt{color:white;background-color:#e81123;border:1px solid #e81123;}", ".userName.pink{color:#ec008C;border:1px solid #ec008C;}", ".userName.pink.butt{color:white;background-color:#ec008C;border:1px solid #ec008C;}", ".userName.purple{color:#68217a;border:1px solid #68217a;}", ".userName.purple.butt{color:white;background-color:#68217a;border:1px solid #68217a;}", ".userName.blue{color:#00188F;border:1px solid #00188F;}", ".userName.blue.butt{color:white;background-color:#00188F;border:1px solid #00188F;}", ".userName.lightblue{color:#00bcf2;border:1px solid #00bcf2;}", ".userName.lightblue.butt{color:white;background-color:#00bcf2;border:1px solid #00bcf2;}", ".userName.lightgreen{color:#00b294;border:1px solid #00b294;}", ".userName.lightgreen.butt{color:white;background-color:#00b294;border:1px solid #00b294;}", ".userName.green{color:#009e49;border:1px solid #009e49;}", ".userName.green.butt{color:white;background-color:#009e49;border:1px solid #009e49;}", ".butt{text-align:center;}", ".userButton{font-size:1.25em;font-weight:bold;padding:5px 0 5px 0;}"]
  }));
};

/* harmony default export */ var SiteLayout = __webpack_exports__["a"] = (SiteLayout_Layout);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SiteLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CreatePage =
/*#__PURE__*/
function (_Component) {
  _inherits(CreatePage, _Component);

  function CreatePage() {
    _classCallCheck(this, CreatePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(CreatePage).apply(this, arguments));
  }

  _createClass(CreatePage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        username: '',
        password: '',
        error: ''
      });
    }
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var j;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.state.username == '')) {
                  _context.next = 4;
                  break;
                }

                this.setState({
                  error: 'Username is mandatory'
                });
                _context.next = 13;
                break;

              case 4:
                if (!(this.state.password == '')) {
                  _context.next = 8;
                  break;
                }

                this.setState({
                  error: 'Password is mandatory'
                });
                _context.next = 13;
                break;

              case 8:
                this.setState({
                  error: ''
                });
                _context.next = 11;
                return _utils_http__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].postJson("/api/login/", this.state);

              case 11:
                j = _context.sent;

                if (j.token != null) {
                  document.cookie = "x-tasklist-token=" + j.token;
                  document.location = "/";
                } else {
                  this.setState({
                    error: 'Wrong credentials'
                  });
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SiteLayout_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
        className: "jsx-3374414534"
      }, "Create account"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3374414534"
      }, "Username"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        type: "text",
        id: "username",
        value: this.state.username,
        onChange: function onChange(event) {
          _this.setState({
            username: event.target.value,
            error: ''
          });
        },
        className: "jsx-3374414534"
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3374414534"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        type: "password",
        id: "password",
        value: this.state.password,
        onChange: function onChange(event) {
          return _this.setState({
            password: event.target.value,
            error: ''
          });
        },
        className: "jsx-3374414534"
      }), this.state.error && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3374414534" + " " + "error"
      }, this.state.error, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
        className: "jsx-3374414534"
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3374414534"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.login();
        },
        className: "jsx-3374414534"
      }, "Login")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3374414534"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        as: "/account",
        href: "/account"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        className: "jsx-3374414534"
      }, "Create a new account?"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3374414534",
        css: [".error.jsx-3374414534{color:red;}"]
      }));
    }
  }]);

  return CreatePage;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreatePage);

/***/ })
/******/ ]);