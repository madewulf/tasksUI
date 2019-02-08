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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/SiteLayout.js + 1 modules
var SiteLayout = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Modal.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Modal_Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this = this;

      var innerComponent = this.props.innerComponent;

      if (!this.props.show) {
        return null;
      }

      return external_react_default.a.createElement("div", {
        id: "myModal",
        className: "jsx-1380754024" + " " + "modal"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1380754024" + " " + "modal-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1380754024" + " " + "modal-close"
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return _this.props.onClose();
        },
        className: "jsx-1380754024" + " " + "close"
      }, "\xD7"), external_react_default.a.createElement("h4", {
        className: "jsx-1380754024" + " " + "modal-title"
      }, this.props.title)), external_react_default.a.createElement("div", {
        className: "jsx-1380754024" + " " + "modal-inner-content"
      }, innerComponent)), external_react_default.a.createElement(style_default.a, {
        styleId: "1380754024",
        css: [".modal.jsx-1380754024{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);}", ".modal-content.jsx-1380754024{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;border-radius:3px;width:80%;}", ".modal-close.jsx-1380754024{margin-top:-18px;}", ".close.jsx-1380754024{color:#aaa;float:right;font-size:28px;font-weight:bold;}", ".close.jsx-1380754024:hover,.close.jsx-1380754024:focus{color:black;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}", ".modal-title.jsx-1380754024{padding:10px 0;margin-bottom:0;color:#444;}"]
      }));
    }
  }]);

  return Modal;
}(external_react_["Component"]);

/* harmony default export */ var components_Modal = (Modal_Modal);
// EXTERNAL MODULE: ./utils/http.js
var http = __webpack_require__(4);

// CONCATENATED MODULE: ./utils/colors.js
function getColorClassPerUser(members) {
  var colors = ['orange', 'red', 'pink', 'purple', 'blue', 'lightblue', 'lightgreen', 'green'];
  var colorClassPerUser = {};
  members.map(function (member, index) {
    colorClassPerUser[member.key] = colors[index % colors.length];
  });
  return colorClassPerUser;
}
// CONCATENATED MODULE: ./components/NameForm.js




function NameForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NameForm_typeof = function _typeof(obj) { return typeof obj; }; } else { NameForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NameForm_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function NameForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NameForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NameForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) NameForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) NameForm_defineProperties(Constructor, staticProps); return Constructor; }

function NameForm_possibleConstructorReturn(self, call) { if (call && (NameForm_typeof(call) === "object" || typeof call === "function")) { return call; } return NameForm_assertThisInitialized(self); }

function NameForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NameForm_getPrototypeOf(o) { NameForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NameForm_getPrototypeOf(o); }

function NameForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NameForm_setPrototypeOf(subClass, superClass); }

function NameForm_setPrototypeOf(o, p) { NameForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NameForm_setPrototypeOf(o, p); }





var NameForm_NameForm =
/*#__PURE__*/
function (_Component) {
  NameForm_inherits(NameForm, _Component);

  function NameForm(props) {
    var _this;

    NameForm_classCallCheck(this, NameForm);

    _this = NameForm_possibleConstructorReturn(this, NameForm_getPrototypeOf(NameForm).call(this, props));
    _this.state = {
      name: '',
      list: _this.props.list,
      task: _this.props.task
    };
    return _this;
  }

  NameForm_createClass(NameForm, [{
    key: "onNamePicked",
    value: function () {
      var _onNamePicked = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(name) {
        var user, list;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!name) {
                  _context.next = 9;
                  break;
                }

                _context.next = 3;
                return http["a" /* default */].postJson('/api/u/', {
                  name: name
                });

              case 3:
                user = _context.sent;
                _context.next = 6;
                return http["a" /* default */].putJson("/api/l/".concat(this.state.list.url_key, "/"), {
                  'users': [user.key]
                });

              case 6:
                list = _context.sent;
                this.setState({
                  list: list,
                  name: ''
                });
                this.props.onNewList(list);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onNamePicked(_x) {
        return _onNamePicked.apply(this, arguments);
      }

      return onNamePicked;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var colorClassPerUser = getColorClassPerUser(this.state.list.members);
      var varKeys = this.state.task.assigned_to.map(function (user) {
        return user.key;
      });
      return external_react_default.a.createElement("div", {
        className: "jsx-1366877219"
      }, this.state.list.members.filter(function (user) {
        return !varKeys.includes(user.key);
      }).map(function (user) {
        return external_react_default.a.createElement("div", {
          key: user.key,
          className: "jsx-1366877219" + " " + "userButton"
        }, external_react_default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.props.onUserPicked(user.key);
          },
          key: '' + user.key,
          className: "jsx-1366877219" + " " + ('userName butt ' + colorClassPerUser[user.key] || "")
        }, external_react_default.a.createElement("span", {
          className: "jsx-1366877219"
        }, user.name)));
      }), external_react_default.a.createElement("h4", {
        className: "jsx-1366877219"
      }, "Add a person:"), external_react_default.a.createElement("div", {
        className: "jsx-1366877219"
      }), external_react_default.a.createElement("input", {
        type: "text",
        id: "name-form-input",
        value: this.state ? this.state.name : '',
        onChange: function onChange(event) {
          _this2.setState({
            name: event.target.value
          });
        },
        onKeyUp: function onKeyUp(e) {
          if (e && e.key == 'Enter') _this2.onNamePicked(_this2.state.name);
        },
        className: "jsx-1366877219"
      }), external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.onNamePicked(_this2.state.name);
        },
        className: "jsx-1366877219" + " " + "okButton"
      }, "OK"), external_react_default.a.createElement(style_default.a, {
        styleId: "1366877219",
        css: [".okButton.jsx-1366877219{margin-left:10px;height:37px;}"]
      }));
    }
  }]);

  return NameForm;
}(external_react_["Component"]);

/* harmony default export */ var components_NameForm = (NameForm_NameForm);
// CONCATENATED MODULE: ./components/EditForm.js




function EditForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditForm_typeof = function _typeof(obj) { return typeof obj; }; } else { EditForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditForm_typeof(obj); }

function EditForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function EditForm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { EditForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { EditForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function EditForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) EditForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) EditForm_defineProperties(Constructor, staticProps); return Constructor; }

function EditForm_possibleConstructorReturn(self, call) { if (call && (EditForm_typeof(call) === "object" || typeof call === "function")) { return call; } return EditForm_assertThisInitialized(self); }

function EditForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditForm_getPrototypeOf(o) { EditForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EditForm_getPrototypeOf(o); }

function EditForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EditForm_setPrototypeOf(subClass, superClass); }

function EditForm_setPrototypeOf(o, p) { EditForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EditForm_setPrototypeOf(o, p); }




var EditForm_EditForm =
/*#__PURE__*/
function (_Component) {
  EditForm_inherits(EditForm, _Component);

  function EditForm(props) {
    var _this;

    EditForm_classCallCheck(this, EditForm);

    _this = EditForm_possibleConstructorReturn(this, EditForm_getPrototypeOf(EditForm).call(this, props));
    _this.state = {
      list: _this.props.list,
      name: _this.props.list.name,
      description: _this.props.list.description
    };
    return _this;
  }

  EditForm_createClass(EditForm, [{
    key: "onFeatureChanged",
    value: function () {
      var _onFeatureChanged = EditForm_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(name, value) {
        var body, list;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('onFeatureChanged', name, value);

                if (!name) {
                  _context.next = 9;
                  break;
                }

                body = {};
                body[name] = value;
                _context.next = 6;
                return http["a" /* default */].putJson("/api/l/".concat(this.state.list.url_key, "/"), body);

              case 6:
                list = _context.sent;
                this.setState({
                  list: list
                });
                this.props.onNewList(list);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onFeatureChanged(_x, _x2) {
        return _onFeatureChanged.apply(this, arguments);
      }

      return onFeatureChanged;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", {
        className: "jsx-4021989194"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4021989194" + " " + "list-field"
      }, "Name"), external_react_default.a.createElement("input", {
        type: "text",
        id: "name-form-input",
        value: this.state ? this.state.name : '',
        onChange: function onChange(event) {
          _this2.setState({
            name: event.target.value
          });
        },
        onBlur: function onBlur() {
          _this2.onFeatureChanged('name', _this2.state.name);
        },
        className: "jsx-4021989194"
      }), external_react_default.a.createElement("div", {
        className: "jsx-4021989194" + " " + "list-field"
      }, "Description"), external_react_default.a.createElement("input", {
        type: "text",
        id: "name-form-input",
        value: this.state ? this.state.description : '',
        onChange: function onChange(event) {
          _this2.setState({
            description: event.target.value
          });
        },
        onBlur: function onBlur() {
          _this2.onFeatureChanged('description', _this2.state.description);
        },
        className: "jsx-4021989194"
      }), external_react_default.a.createElement("div", {
        className: "jsx-4021989194" + " " + "list-field"
      }, "Assignation"), external_react_default.a.createElement("div", {
        className: "jsx-4021989194"
      }, external_react_default.a.createElement("input", {
        id: "assignation-checkbox",
        checked: !this.state.list.assignationsOn,
        type: "checkbox",
        onChange: function onChange(event) {
          _this2.onFeatureChanged('assignationsOn', !event.target.checked);
        },
        className: "jsx-4021989194"
      }), " ", external_react_default.a.createElement("span", {
        htmlFor: "assignation-checkbox",
        className: "jsx-4021989194"
      }, "Hide ", external_react_default.a.createElement("em", {
        className: "jsx-4021989194"
      }, "Assign"), " button")), external_react_default.a.createElement("div", {
        className: "jsx-4021989194" + " " + "list-field"
      }, "Delete a task"), external_react_default.a.createElement("div", {
        className: "jsx-4021989194"
      }, external_react_default.a.createElement("em", {
        className: "jsx-4021989194"
      }, "To delete one task, just tap on it and delete its text.")), external_react_default.a.createElement(style_default.a, {
        styleId: "4021989194",
        css: [".okButton.jsx-4021989194{margin-left:10px;height:37px;}", ".list-field.jsx-4021989194{font-size:1.5em;padding:0;}"]
      }));
    }
  }]);

  return EditForm;
}(external_react_["Component"]);

/* harmony default export */ var components_EditForm = (EditForm_EditForm);
// EXTERNAL MODULE: ./utils/token.js
var utils_token = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/list.js




function list_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { list_typeof = function _typeof(obj) { return typeof obj; }; } else { list_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return list_typeof(obj); }

function list_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function list_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { list_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { list_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function list_createClass(Constructor, protoProps, staticProps) { if (protoProps) list_defineProperties(Constructor.prototype, protoProps); if (staticProps) list_defineProperties(Constructor, staticProps); return Constructor; }

function list_possibleConstructorReturn(self, call) { if (call && (list_typeof(call) === "object" || typeof call === "function")) { return call; } return list_assertThisInitialized(self); }

function list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function list_getPrototypeOf(o) { list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return list_getPrototypeOf(o); }

function list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) list_setPrototypeOf(subClass, superClass); }

function list_setPrototypeOf(o, p) { list_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return list_setPrototypeOf(o, p); }










var list_List =
/*#__PURE__*/
function (_Component) {
  list_inherits(List, _Component);

  function List(props) {
    var _this;

    list_classCallCheck(this, List);

    _this = list_possibleConstructorReturn(this, list_getPrototypeOf(List).call(this, props));
    _this.state = {
      taskText: '',
      list: JSON.parse(JSON.stringify(props.list)),
      showModal: false,
      modal: 'nameForm',
      editingTask: false,
      listenerAdded: false
    };
    return _this;
  }

  list_createClass(List, [{
    key: "onTaskUnassign",
    value: function () {
      var _onTaskUnassign = list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(taskKey, userKey) {
        var list;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return http["a" /* default */].putJson("/api/t/".concat(taskKey, "/"), {
                  'users': ['-' + userKey]
                });

              case 2:
                _context.next = 4;
                return http["a" /* default */].getJson("/api/l/".concat(this.state.list.url_key, "/"));

              case 4:
                list = _context.sent;
                this.setState({
                  showModal: false,
                  list: list
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onTaskUnassign(_x, _x2) {
        return _onTaskUnassign.apply(this, arguments);
      }

      return onTaskUnassign;
    }()
  }, {
    key: "onTaskAssign",
    value: function () {
      var _onTaskAssign = list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(task) {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  modal: 'nameForm',
                  clickedTask: task,
                  showModal: true
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onTaskAssign(_x3) {
        return _onTaskAssign.apply(this, arguments);
      }

      return onTaskAssign;
    }()
  }, {
    key: "onEditList",
    value: function () {
      var _onEditList = list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  modal: 'editForm',
                  showModal: true
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onEditList() {
        return _onEditList.apply(this, arguments);
      }

      return onEditList;
    }()
  }, {
    key: "onUserPick",
    value: function () {
      var _onUserPick = list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(key) {
        var list;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return http["a" /* default */].putJson("/api/t/".concat(this.state.clickedTask.key, "/"), {
                  'users': [key]
                });

              case 2:
                _context4.next = 4;
                return http["a" /* default */].getJson("/api/l/".concat(this.state.list.url_key, "/"));

              case 4:
                list = _context4.sent;
                this.setState({
                  showModal: false,
                  list: list
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onUserPick(_x4) {
        return _onUserPick.apply(this, arguments);
      }

      return onUserPick;
    }()
  }, {
    key: "createTask",
    value: function () {
      var _createTask = list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5() {
        var newTask, list;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.state.taskText.trim() != '')) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 3;
                return http["a" /* default */].postJson('/api/t/', {
                  text: this.state.taskText,
                  list: this.props.list.url_key
                });

              case 3:
                newTask = _context5.sent;
                _context5.next = 6;
                return http["a" /* default */].getJson("/api/l/".concat(this.state.list.url_key, "/"));

              case 6:
                list = _context5.sent;
                this.setState({
                  list: list,
                  taskText: ''
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createTask() {
        return _createTask.apply(this, arguments);
      }

      return createTask;
    }()
  }, {
    key: "taskClick",
    value: function () {
      var _taskClick = list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6(target, task) {
        var status, newList;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                status = target.checked ? 'done' : 'waiting';
                task.status = status; //hackish way to implement optimistic modification

                this.setState({
                  list: this.state.list
                });
                _context6.next = 5;
                return http["a" /* default */].putJson('/api/t/' + target.id + '/', {
                  status: status
                });

              case 5:
                _context6.next = 7;
                return http["a" /* default */].getJson("/api/l/".concat(this.state.list.url_key, "/"));

              case 7:
                newList = _context6.sent;
                this.setState({
                  list: newList,
                  editingTask: true
                });

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function taskClick(_x5, _x6) {
        return _taskClick.apply(this, arguments);
      }

      return taskClick;
    }()
  }, {
    key: "taskEdit",
    value: function taskEdit(taskKey) {
      var listClone = JSON.parse(JSON.stringify(this.state.list));
      listClone.tasks.map(function (task) {
        if (task.key == taskKey) {
          task.edit = true;
        } else {
          task.edit = false;
        }
      });
      this.setState({
        list: listClone,
        editingTask: false
      });
    }
  }, {
    key: "taskChange",
    value: function () {
      var _taskChange = list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee7(taskKey, text) {
        var newList;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return http["a" /* default */].putJson('/api/t/' + taskKey + '/', {
                  text: text
                });

              case 2:
                _context7.next = 4;
                return http["a" /* default */].getJson("/api/l/".concat(this.state.list.url_key, "/"));

              case 4:
                newList = _context7.sent;
                this.setState({
                  list: newList
                });

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function taskChange(_x7, _x8) {
        return _taskChange.apply(this, arguments);
      }

      return taskChange;
    }()
  }, {
    key: "handleVisibilityChange",
    value: function () {
      var _handleVisibilityChange = list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee8() {
        var data;
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (document.hidden) {
                  _context8.next = 5;
                  break;
                }

                _context8.next = 3;
                return http["a" /* default */].getJson("/api/l/".concat(this.state.list.url_key, "/"));

              case 3:
                data = _context8.sent;
                this.setState({
                  list: data
                });

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function handleVisibilityChange() {
        return _handleVisibilityChange.apply(this, arguments);
      }

      return handleVisibilityChange;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.listenerAdded) {
        if (typeof window !== 'undefined') {
          document.addEventListener('visibilitychange', function () {
            return _this2.handleVisibilityChange();
          }, false);
          window.addEventListener('focus', function () {
            return _this2.handleVisibilityChange();
          }, false);
          this.state.listenerAdded = true;
        }
      }

      var props = this.props;
      var list = this.state.list;
      var colorClassPerUser = getColorClassPerUser(list.members);
      var innerComponent;
      var modalTitle;

      if (this.state.modal === 'nameForm') {
        innerComponent = external_react_default.a.createElement(components_NameForm, {
          list: list,
          colorClassPerUser: colorClassPerUser,
          onUserPicked: function onUserPicked(key) {
            return _this2.onUserPick(key);
          },
          task: this.state.clickedTask,
          onNewList: function onNewList(list) {
            _this2.setState({
              list: list
            });
          }
        });
        modalTitle = "Tap on a name";
      } else {
        innerComponent = external_react_default.a.createElement(components_EditForm, {
          list: list,
          onNewList: function onNewList(list) {
            _this2.setState({
              list: list
            });
          }
        });
        modalTitle = "Edit the list";
      }

      return external_react_default.a.createElement(SiteLayout["a" /* default */], {
        meta: props.list
      }, external_react_default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.onEditList();
        },
        className: "jsx-2811390923" + " " + "list-edit-icon"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2811390923" + " " + "far fa-edit fa-xs"
      })), external_react_default.a.createElement("h1", {
        className: "jsx-2811390923"
      }, this.state.list.name, " "), external_react_default.a.createElement("p", {
        className: "jsx-2811390923"
      }, this.state.list.description), external_react_default.a.createElement("div", {
        className: "jsx-2811390923"
      }, list.tasks.map(function (task) {
        var className = 'taskText ' + (task.status === 'done' ? 'strike' : '');
        return external_react_default.a.createElement("div", {
          key: task.key,
          className: "jsx-2811390923" + " " + "listItem"
        }, external_react_default.a.createElement("input", {
          type: "checkbox",
          id: task.key,
          onChange: function onChange(event) {
            _this2.taskClick(event.target, task);
          },
          checked: task.status === 'done',
          className: "jsx-2811390923"
        }), !task.edit && external_react_default.a.createElement("span", {
          onClick: function onClick() {
            _this2.taskEdit(task.key);
          },
          className: "jsx-2811390923" + " " + (className || "")
        }, task.text), task.edit && external_react_default.a.createElement("span", {
          className: "jsx-2811390923"
        }, " ", external_react_default.a.createElement("input", {
          type: "text",
          autoFocus: true,
          defaultValue: task.text,
          onBlur: function onBlur(event) {
            _this2.taskChange(task.key, event.target.value);
          },
          onKeyUp: function onKeyUp(e) {
            if (e && e.key == 'Enter') _this2.taskChange(task.key, event.target.value);
          },
          className: "jsx-2811390923"
        }), " "), _this2.state.list.assignationsOn && task.assigned_to.map(function (user) {
          return external_react_default.a.createElement("span", {
            onClick: function onClick() {
              return _this2.onTaskUnassign(task.key, user.key);
            },
            key: '' + user.key + '' + task.key,
            className: "jsx-2811390923" + " " + ('userName ' + colorClassPerUser[user.key] || "")
          }, external_react_default.a.createElement("span", {
            className: "jsx-2811390923"
          }, user.name));
        }), _this2.state.list.assignationsOn && task.assigned_to.length === 0 && external_react_default.a.createElement("span", {
          onClick: function onClick() {
            return _this2.onTaskAssign(task);
          },
          className: "jsx-2811390923" + " " + "assignButton"
        }, "Assign"), _this2.state.list.assignationsOn && task.assigned_to.length !== 0 && external_react_default.a.createElement("span", {
          onClick: function onClick() {
            return _this2.onTaskAssign(task);
          },
          className: "jsx-2811390923" + " " + "assignButton"
        }, external_react_default.a.createElement("i", {
          className: "jsx-2811390923" + " " + "fas fa-plus"
        })));
      })), external_react_default.a.createElement("div", {
        className: "jsx-2811390923"
      }, external_react_default.a.createElement("input", {
        type: "text",
        id: "taskText",
        autoFocus: !this.state.editingTask,
        value: this.state.taskText,
        onChange: function onChange(event) {
          _this2.setState({
            taskText: event.target.value
          });
        },
        placeholder: "New task here ...",
        onKeyUp: function onKeyUp(e) {
          if (e && e.key == 'Enter') _this2.createTask();
        },
        className: "jsx-2811390923"
      }), external_react_default.a.createElement("br", {
        className: "jsx-2811390923"
      }), external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.createTask();
        },
        className: "jsx-2811390923"
      }, "Add")), external_react_default.a.createElement(components_Modal, {
        title: modalTitle,
        show: this.state.showModal,
        onClose: function onClose() {
          return _this2.setState({
            showModal: false
          });
        },
        innerComponent: innerComponent
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "2811390923",
        css: [".taskText.jsx-2811390923{padding:5px;}", ".assignButton.jsx-2811390923{color:#1E90FF;padding:4px;background:#eee;border-radius:3px;cursor:pointer;}", ".listItem.jsx-2811390923{padding:5px;margin:1px;}", ".itemText.jsx-2811390923{padding:3 5;}", ".strike.jsx-2811390923{-webkit-text-decoration:line-through;text-decoration:line-through;}", ".container.jsx-2811390923{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".container.jsx-2811390923 input.jsx-2811390923{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}", ".checkmark.jsx-2811390923{position:absolute;top:0;left:0;height:25px;width:25px;border-radius:3px;background-color:#eee;}", ".container.jsx-2811390923:hover input.jsx-2811390923~.checkmark.jsx-2811390923{background-color:#ccc;}", ".container.jsx-2811390923 input.jsx-2811390923:checked~.checkmark.jsx-2811390923{background-color:#2196F3;}", ".checkmark.jsx-2811390923:after{content:\"\";position:absolute;display:none;}", ".container.jsx-2811390923 input.jsx-2811390923:checked~.checkmark.jsx-2811390923:after{display:block;}", ".container.jsx-2811390923 .checkmark.jsx-2811390923:after{left:9px;top:5px;width:5px;height:10px;border:solid white;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}", ".nameLabel.jsx-2811390923{display:inline;font-weight:100;}", ".list-edit-icon.jsx-2811390923{font-size:2em;float:right;padding-left:10px;}", ".fa-edit.jsx-2811390923{color:#ddd;cursor:pointer;}"]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee9(props) {
        var key, token, data;
        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                key = props.query.title;
                token = Object(utils_token["b" /* getToken */])(props);
                _context9.next = 4;
                return http["a" /* default */].getJson("/api/l/".concat(key, "/"), token);

              case 4:
                data = _context9.sent;
                return _context9.abrupt("return", {
                  list: data
                });

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getInitialProps(_x9) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return List;
}(external_react_["Component"]);

/* harmony default export */ var pages_list = __webpack_exports__["default"] = (list_List);

/***/ })
/******/ ]);