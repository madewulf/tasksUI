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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/EditForm.js":
/*!********************************!*\
  !*** ./components/EditForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/http */ "./utils/http.js");




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




var EditForm =
/*#__PURE__*/
function (_Component) {
  _inherits(EditForm, _Component);

  function EditForm(props) {
    var _this;

    _classCallCheck(this, EditForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditForm).call(this, props));
    _this.state = {
      list: _this.props.list,
      name: _this.props.list.name,
      description: _this.props.list.description
    };
    return _this;
  }

  _createClass(EditForm, [{
    key: "onFeatureChanged",
    value: function () {
      var _onFeatureChanged = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name, value) {
        var body, list;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                return _utils_http__WEBPACK_IMPORTED_MODULE_3__["default"].putJson("/api/l/".concat(this.state.list.url_key, "/"), body);

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

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4021989194"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4021989194" + " " + "list-field"
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
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
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4021989194" + " " + "list-field"
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
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
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4021989194" + " " + "list-field"
      }, "Assignation"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4021989194"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        id: "assignation-checkbox",
        checked: !this.state.list.assignationsOn,
        type: "checkbox",
        onChange: function onChange(event) {
          _this2.onFeatureChanged('assignationsOn', !event.target.checked);
        },
        className: "jsx-4021989194"
      }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        htmlFor: "assignation-checkbox",
        className: "jsx-4021989194"
      }, "Hide ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("em", {
        className: "jsx-4021989194"
      }, "Assign"), " button")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4021989194" + " " + "list-field"
      }, "Delete a task"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4021989194"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("em", {
        className: "jsx-4021989194"
      }, "To delete one task, just tap on it and delete its text.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "4021989194",
        css: ".okButton.jsx-4021989194{margin-left:10px;height:37px;}.list-field.jsx-4021989194{font-size:1.5em;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvY29tcG9uZW50cy9FZGl0Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2lCLEFBR3VDLEFBSUQsZ0JBQ0wsQ0FKQyxTQUtmLEdBSkEiLCJmaWxlIjoiL1VzZXJzL21hZGV3dWxmL1Byb2plY3RzL3BlcnNvL3Rhc2tzVUkvY29kZS9jb21wb25lbnRzL0VkaXRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL2h0dHAnO1xuXG5jbGFzcyBFZGl0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2xpc3Q6IHRoaXMucHJvcHMubGlzdCwgbmFtZTp0aGlzLnByb3BzLmxpc3QubmFtZSwgZGVzY3JpcHRpb246IHRoaXMucHJvcHMubGlzdC5kZXNjcmlwdGlvbn07XG4gICAgfVxuXG4gICAgYXN5bmMgb25GZWF0dXJlQ2hhbmdlZChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25GZWF0dXJlQ2hhbmdlZCcsIG5hbWUsIHZhbHVlKVxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgbGV0IGJvZHkgPSB7fVxuICAgICAgICAgICAgYm9keVtuYW1lXSA9IHZhbHVlXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgKGh0dHAucHV0SnNvbihgL2FwaS9sLyR7dGhpcy5zdGF0ZS5saXN0LnVybF9rZXl9L2AsIGJvZHkpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IGxpc3R9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25OZXdMaXN0KGxpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1maWVsZFwiPk5hbWU8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSduYW1lLWZvcm0taW5wdXQnIHZhbHVlPXt0aGlzLnN0YXRlID8gdGhpcy5zdGF0ZS5uYW1lIDogJyd9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICB9fSBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRmVhdHVyZUNoYW5nZWQoJ25hbWUnLCB0aGlzLnN0YXRlLm5hbWUpO1xuICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWZpZWxkXCI+RGVzY3JpcHRpb248L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSduYW1lLWZvcm0taW5wdXQnIHZhbHVlPXt0aGlzLnN0YXRlID8gdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgIH19IG9uQmx1cj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICB0aGlzLm9uRmVhdHVyZUNoYW5nZWQoJ2Rlc2NyaXB0aW9uJywgdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB9fS8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1maWVsZFwiPkFzc2lnbmF0aW9uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImFzc2lnbmF0aW9uLWNoZWNrYm94XCIgY2hlY2tlZD17IXRoaXMuc3RhdGUubGlzdC5hc3NpZ25hdGlvbnNPbn0gdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLm9uRmVhdHVyZUNoYW5nZWQoJ2Fzc2lnbmF0aW9uc09uJywgIWV2ZW50LnRhcmdldC5jaGVja2VkKTt9fS8+IDxzcGFuIGh0bWxGb3I9XCJhc3NpZ25hdGlvbi1jaGVja2JveFwiPkhpZGUgPGVtPkFzc2lnbjwvZW0+IGJ1dHRvbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWZpZWxkXCI+RGVsZXRlIGEgdGFzazwvZGl2PlxuICAgICAgICAgICAgPGRpdj48ZW0+VG8gZGVsZXRlIG9uZSB0YXNrLCBqdXN0IHRhcCBvbiBpdCBhbmQgZGVsZXRlIGl0cyB0ZXh0LjwvZW0+PC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAub2tCdXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjM3cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubGlzdC1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRGb3JtOyJdfQ== */\n/*@ sourceURL=/Users/madewulf/Projects/perso/tasksUI/code/components/EditForm.js */"
      }));
    }
  }]);

  return EditForm;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditForm);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/token */ "./utils/token.js");





'../utils/token';

var Header = function Header(props) {
  var token = Object(_utils_token__WEBPACK_IMPORTED_MODULE_4__["getToken"])(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-191767676"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-191767676"
  }, !!props.meta && props.meta.name || 'Shareable to do lists -- taskli.st'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: !!props.meta && props.meta.name || 'Shareable to do lists -- taskli.st',
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: !!props.meta && 'https://taskli.st/l/' + props.meta.url_key || 'https://taskli.st/',
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: "https://s3.eu-central-1.amazonaws.com/static.btlas.com/hero-2.jpg",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:site_name",
    content: "taskli.st",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "fb:admins",
    content: "548900828",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: !!props.meta && props.meta.description || 'Create your to do list for a group of people, send them, and let them assign the task themselves and complete the work.',
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    sizes: "16x16 32x32 64x64",
    href: "/static/favicon.ico",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "196x196",
    href: "/static/favicon-192.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "160x160",
    href: "/static/favicon-160.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/static/favicon-96.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "64x64",
    href: "/static/favicon-64.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/favicon-32.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/favicon-16.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/favicon-57.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/favicon-114.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/static/favicon-72.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/favicon-144.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/static/favicon-60.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/favicon-120.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/static/favicon-76.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/favicon-152.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/favicon-180.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#FFFFFF",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/favicon-144.png",
    className: "jsx-191767676"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-config",
    content: "/browserconfig.xml",
    className: "jsx-191767676"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-191767676" + " " + "header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "createLink",
    className: "jsx-191767676"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/create",
    href: "/create"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-191767676"
  }, "Create a new list")), "\xA0\u2013\xA0", token && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    onClick: _utils_token__WEBPACK_IMPORTED_MODULE_4__["logout"],
    className: "jsx-191767676"
  }, "Logout"), !token && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/login",
    href: "/login"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-191767676"
  }, "Login"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "branding",
    className: "jsx-191767676"
  }, "taskli.st"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "191767676",
    css: ".header{margin:20px 0 20px 0;}#branding{padding:7px;color:white;border-radius:4px;background-color:#222;cursor:pointer;}#createLink{float:right;}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;color:#12162D;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block;}audio,canvas,progress,video{display:inline-block;vertical-align:baseline;}audio:not([controls]){display:none;height:0;}[hidden],template{display:none;}a{background-color:transparent;}a:active,a:hover{outline:0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}dfn{font-style:italic;}h1{font-size:2em;margin:0.67em 0;}mark{background:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img{border:0;}svg:not(:root){overflow:hidden;}figure{margin:1em 40px;}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0;}pre{overflow:auto;}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em;}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0;}button{overflow:visible;}button,select{text-transform:none;}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer;}button[disabled],html input[disabled]{cursor:default;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}input{line-height:normal;}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0;}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto;}input[type=\"search\"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;}textarea{overflow:auto;}optgroup{font-weight:bold;}table{border-collapse:collapse;border-spacing:0;}td,th{padding:0;}.container{position:relative;width:100%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;}.column,.columns{width:100%;float:left;box-sizing:border-box;}@media (min-width:400px){.container{width:85%;padding:0;}}@media (min-width:550px){.container{width:80%;}.column,.columns{margin-left:4%;}.column:first-child,.columns:first-child{margin-left:0;}.one.column,.one.columns{width:4.66666666667%;}.two.columns{width:13.3333333333%;}.three.columns{width:22%;}.four.columns{width:30.6666666667%;}.five.columns{width:39.3333333333%;}.six.columns{width:48%;}.seven.columns{width:56.6666666667%;}.eight.columns{width:65.3333333333%;}.nine.columns{width:74.0%;}.ten.columns{width:82.6666666667%;}.eleven.columns{width:91.3333333333%;}.twelve.columns{width:100%;margin-left:0;}.one-third.column{width:30.6666666667%;}.two-thirds.column{width:65.3333333333%;}.one-half.column{width:48%;}.offset-by-one.column,.offset-by-one.columns{margin-left:8.66666666667%;}.offset-by-two.column,.offset-by-two.columns{margin-left:17.3333333333%;}.offset-by-three.column,.offset-by-three.columns{margin-left:26%;}.offset-by-four.column,.offset-by-four.columns{margin-left:34.6666666667%;}.offset-by-five.column,.offset-by-five.columns{margin-left:43.3333333333%;}.offset-by-six.column,.offset-by-six.columns{margin-left:52%;}.offset-by-seven.column,.offset-by-seven.columns{margin-left:60.6666666667%;}.offset-by-eight.column,.offset-by-eight.columns{margin-left:69.3333333333%;}.offset-by-nine.column,.offset-by-nine.columns{margin-left:78.0%;}.offset-by-ten.column,.offset-by-ten.columns{margin-left:86.6666666667%;}.offset-by-eleven.column,.offset-by-eleven.columns{margin-left:95.3333333333%;}.offset-by-one-third.column,.offset-by-one-third.columns{margin-left:34.6666666667%;}.offset-by-two-thirds.column,.offset-by-two-thirds.columns{margin-left:69.3333333333%;}.offset-by-one-half.column,.offset-by-one-half.columns{margin-left:52%;}}html{font-size:62.5%;}body{font-size:1.5em;line-height:1.6;font-weight:400;font-family:\"Raleway\",\"HelveticaNeue\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;color:#222;}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:2rem;font-weight:300;}h1{font-size:4.0rem;line-height:1.2;-webkit-letter-spacing:-.1rem;-moz-letter-spacing:-.1rem;-ms-letter-spacing:-.1rem;letter-spacing:-.1rem;}h2{font-size:3.6rem;line-height:1.25;-webkit-letter-spacing:-.1rem;-moz-letter-spacing:-.1rem;-ms-letter-spacing:-.1rem;letter-spacing:-.1rem;}h3{font-size:3.0rem;line-height:1.3;-webkit-letter-spacing:-.1rem;-moz-letter-spacing:-.1rem;-ms-letter-spacing:-.1rem;letter-spacing:-.1rem;}h4{font-size:2.4rem;line-height:1.35;-webkit-letter-spacing:-.08rem;-moz-letter-spacing:-.08rem;-ms-letter-spacing:-.08rem;letter-spacing:-.08rem;}h5{font-size:1.8rem;line-height:1.5;-webkit-letter-spacing:-.05rem;-moz-letter-spacing:-.05rem;-ms-letter-spacing:-.05rem;letter-spacing:-.05rem;}h6{font-size:1.5rem;line-height:1.6;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}@media (min-width:550px){h1{font-size:5.0rem;}h2{font-size:4.2rem;}h3{font-size:3.6rem;}h4{font-size:3.0rem;}h5{font-size:2.4rem;}h6{font-size:1.5rem;}}p{margin-top:0;}a{color:#1EAEDB;}a:hover{color:#0FA0CE;}.button,button,input[type=\"submit\"],input[type=\"reset\"],input[type=\"button\"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;-webkit-letter-spacing:.1rem;-moz-letter-spacing:.1rem;-ms-letter-spacing:.1rem;letter-spacing:.1rem;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box;}.button:hover,button:hover,input[type=\"submit\"]:hover,input[type=\"reset\"]:hover,input[type=\"button\"]:hover,.button:focus,button:focus,input[type=\"submit\"]:focus,input[type=\"reset\"]:focus,input[type=\"button\"]:focus{color:#333;border-color:#888;outline:0;}.button.button-primary,button.button-primary,input[type=\"submit\"].button-primary,input[type=\"reset\"].button-primary,input[type=\"button\"].button-primary{color:#FFF;background-color:#33C3F0;border-color:#33C3F0;}.button.button-primary:hover,button.button-primary:hover,input[type=\"submit\"].button-primary:hover,input[type=\"reset\"].button-primary:hover,input[type=\"button\"].button-primary:hover,.button.button-primary:focus,button.button-primary:focus,input[type=\"submit\"].button-primary:focus,input[type=\"reset\"].button-primary:focus,input[type=\"button\"].button-primary:focus{color:#FFF;background-color:#1EAEDB;border-color:#1EAEDB;}input[type=\"email\"],input[type=\"number\"],input[type=\"search\"],input[type=\"text\"],input[type=\"tel\"],input[type=\"url\"],input[type=\"password\"],textarea,select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #D1D1D1;border-radius:4px;box-shadow:none;box-sizing:border-box;}input[type=\"email\"],input[type=\"number\"],input[type=\"search\"],input[type=\"text\"],input[type=\"tel\"],input[type=\"url\"],input[type=\"password\"],textarea{-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}textarea{min-height:65px;padding-top:6px;padding-bottom:6px;}input[type=\"email\"]:focus,input[type=\"number\"]:focus,input[type=\"search\"]:focus,input[type=\"text\"]:focus,input[type=\"tel\"]:focus,input[type=\"url\"]:focus,input[type=\"password\"]:focus,textarea:focus,select:focus{border:1px solid #33C3F0;outline:0;}label,legend{display:block;margin-bottom:.5rem;font-weight:600;}fieldset{padding:0;border-width:0;}input[type=\"checkbox\"],input[type=\"radio\"]{display:inline;}label>.label-body{display:inline-block;margin-left:.5rem;font-weight:normal;}ul{list-style:circle inside;}ol{list-style:decimal inside;}ol,ul{padding-left:0;margin-top:0;}ul ul,ul ol,ol ol,ol ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%;}li{margin-bottom:1rem;}code{padding:.2rem .5rem;margin:0 .2rem;font-size:90%;white-space:nowrap;background:#F1F1F1;border:1px solid #E1E1E1;border-radius:4px;}pre>code{display:block;padding:1rem 1.5rem;white-space:pre;}th,td{padding:12px 15px;text-align:left;border-bottom:1px solid #E1E1E1;}th:first-child,td:first-child{padding-left:0;}th:last-child,td:last-child{padding-right:0;}button,.button{margin-bottom:1rem;}input,textarea,select,fieldset{margin-bottom:1.5rem;}pre,blockquote,dl,figure,table,p,ul,ol,form{margin-bottom:2.5rem;}.u-full-width{width:100%;box-sizing:border-box;}.u-max-full-width{max-width:100%;box-sizing:border-box;}.u-pull-right{float:right;}.u-pull-left{float:left;}hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #E1E1E1;}.container:after,.row:after,.u-cf{content:\"\";display:table;clear:both;}@media (min-width:400px){}@media (min-width:550px){}@media (min-width:750px){}@media (min-width:1000px){}@media (min-width:1200px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEQyQixBQUl5QixBQUlULEFBUUEsQUFHVSxBQVVkLEFBb0JLLEFBUU8sQUFPUixBQVFBLEFBV2dCLEFBU25CLEFBV2UsQUFPUixBQVFDLEFBS0osQUFTRSxBQVNGLEFBTUEsQUFPSCxBQUlJLEFBUU4sQUFRTyxBQVdBLEFBUVksQUFVZCxBQU9tQixBQW1CbkIsQUFRRyxBQU1HLEFBUU0sQUFVWCxBQVNOLEFBTVUsQUFNRyxBQU9WLEFBS2lCLEFBU0wsQUFRQyxBQU9oQixBQVNLLEFBSUcsQUFXUSxBQU1mLEFBa0NRLEFBUVAsQUFPQyxBQU9BLEFBR0ssQUFHRCxBQUdzQyxBQUNBLEFBQ1gsQUFDVyxBQUNBLEFBQ1gsQUFDVyxBQUNBLEFBQ1QsQUFDUyxBQUNBLEFBQ1YsQUFFVSxBQUNBLEFBRVgsQUFJaUIsQUFFQSxBQUVYLEFBRVcsQUFFQSxBQUVYLEFBRVcsQUFFQSxBQUVULEFBRVMsQUFFQSxBQUdBLEFBRUEsQUFHWCxBQVdqQyxBQUVBLEFBV0gsQUFHTSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFJRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFJUixBQU1DLEFBRUEsQUFVTyxBQTJCVixBQVFBLEFBYUEsQUFnQkMsQUFnQlksQUFJUixBQVlTLEFBSVgsQUFJSixBQUlLLEFBRU0sQUFRSSxBQUVDLEFBRVgsQUFNYSxBQUdULEFBTUMsQUFRTixBQVNJLEFBS0gsQUFHQyxBQU9HLEFBS0UsQUFVQSxBQU1WLEFBR0ksQUFHSCxBQUVELEFBTUssQUFhTCxTQXZzQkcsQUF5SWhCLEFBd0dZLEFBZ0RBLENBbE9aLEFBZ1FBLEFBaURjLEFBTUMsQUFXMEMsQUFHQSxBQVdYLEFBd003QixDQTFkakIsQUE0T2EsQUFpQ2dELEFBZ0l6QyxBQVFPLEFBYUEsQUE4SUgsQUFPVixBQW9CRSxDQTd0QkQsQUFRZixBQWlSQSxBQW1JeUQsQUF3S3RDLEFBbUlKLENBL29CSixBQVFYLEFBNlpxQixBQW9CTCxDQXhjaEIsQUEwRWtCLEFBa0JsQixBQU1nQixBQXdEaEIsQUEwQmUsQUFrR2YsQUFrRm1CLEFBc0dGLEFBRUEsQUErR0ssQUE2Q0EsQ0EvZnRCLEFBdUdBLEFBaUpvQixBQWlPRixBQWVILEFBb0NHLEFBbUNNLENBemtCWCxBQTBDYixBQVdBLEFBMlArRCxBQU1BLEFBa0JYLEFBV2pDLEFBR0QsQUFzSUEsQUE2RUMsQUEyQ0ksQ0ExbUJ2QixBQStIQSxBQThGQSxBQTRKc0MsQUFDQyxBQUNELEFBQ0MsQUFDRCxBQUNBLEFBSWQsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLENBL1h4QixBQXdRYSxBQWtFa0QsQUFzTzdDLENBdlpsQixBQUtBLEFBMkNBLEFBK1VzQixBQXNDQSxDQWpjdEIsQUEwSmUsQUF3UUUsQ0FqcEJqQixBQXFEMEIsQUFtVytCLEFBQ0EsQUFFQSxBQUNBLEFBRUEsQUFDQSxBQUVBLEFBQ0EsQUFHQSxBQUNBLEFBa0czQyxBQThHTSxBQStESSxBQVVBLENBbG9CeEIsQUF5TlksQUE2R1ksQ0FwWEksQUFXNUIsQ0FyQnNCLEFBc1N0QixBQTZTMEIsQ0FyZjFCLEFBZ05lLEFBK0JJLEFBaUYyQyxBQXFNbEQsQUFRTSxBQWFVLEFBcUdmLENBM2VJLEFBd1lZLENBOWY3QixBQWlHVyxBQTBNb0QsQUFFQSxBQUlBLEFBRUEsQUFJQSxBQUVBLEFBSUEsQUFFQSxBQUdBLEFBRUEsQ0FyVDNDLEFBNkNLLEFBcWNULEFBTUEsQ0F6akJoQixBQW1OOEIsQUF5RlosQUF5S04sQUFxQ1ksQ0FqZHhCLEVBc0ZnQixBQXlFaEIsQUFnTWtCLEFBV0EsQUEySEcsQ0ExSHlDLEFBRUEsQUFFQyxBQUNOLEFBaUN4QyxBQTZMUSxDQWxPcUMsQUFFQyxBQXVJN0MsQUE2Q0EsQUFTZ0IsQ0EzRHJCLEFBMENHLENBL2FoQixBQXlVdUIsQUFhQSxBQXlLVCxDQXpCVyxBQVlSLENBamFlLENBZ1BuQixBQW1GUSxFQS9YckIsQ0FsUDBCLEFBNlUxQixBQXFUaUIsRUFyUVEsQ0E3VXpCLEFBc1VnQixBQTZOVSxDQXhjQSxBQThEMUIsRUEwUXlGLEFBU3RFLEFBd0NOLENBMWZtQixBQW1vQlgsQ0F0Q0YsQUE2Q0EsQ0E1ZFIsQUE0WWdCLEFBbUJMLENBeUhTLEtBbmJFLEFBeVFULEFBYUEsQ0E4REYsQ0ExUEwsQUE4SUcsQ0E1VXBCLElBeExtQixFQTRwQmdCLEVBOVduQyxBQStWcUIsRUFsZ0JyQixJQTRPd0IsRUE2TUosQ0EvREgsRUFwZ0JqQixBQVNBLEVBcXNCZ0MsTUFqRUwsQ0FqWEYsSUF5T1AsRUErREEsRUE5TU8sVUEyTkUsRUEzRVIsRUErREssQ0F4U3hCLENBaVhvQixNQTlLc0MsT0F1Q25DLEtBckRWLEFBNExRLEVBekVJLE1BMUdzQyxBQUVBLENBREEsRUFWakQsQ0Fha0QsQ0FEQSxtRkEwQ3JDLHlCQUNKLGtEQUNGLG1CQUNVLDZCQUNYLGtCQUNJLHNCQUNQLGVBQ08sc0JBQUMiLCJmaWxlIjoiL1VzZXJzL21hZGV3dWxmL1Byb2plY3RzL3BlcnNvL3Rhc2tzVUkvY29kZS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgZ2V0VG9rZW4sIGxvZ291dH0gZnJvbSAnLi4vdXRpbHMvdG9rZW4nO1xuXG4nLi4vdXRpbHMvdG9rZW4nXG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICAgIGxldCB0b2tlbiA9IGdldFRva2VuKHByb3BzKTtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XG4gICAgICAgICAgICA8dGl0bGU+eyghIXByb3BzLm1ldGEgJiYgcHJvcHMubWV0YS5uYW1lKSB8fCAnU2hhcmVhYmxlIHRvIGRvIGxpc3RzIC0tIHRhc2tsaS5zdCd9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgICAgICAgICAgY29udGVudD17KCEhcHJvcHMubWV0YSAmJiBwcm9wcy5tZXRhLm5hbWUpIHx8ICdTaGFyZWFibGUgdG8gZG8gbGlzdHMgLS0gdGFza2xpLnN0J30vPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIi8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXsoISFwcm9wcy5tZXRhICYmICgnaHR0cHM6Ly90YXNrbGkuc3QvbC8nICsgcHJvcHMubWV0YS51cmxfa2V5KSkgfHwgJ2h0dHBzOi8vdGFza2xpLnN0Lyd9Lz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9zdGF0aWMuYnRsYXMuY29tL2hlcm8tMi5qcGdcIi8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJ0YXNrbGkuc3RcIi8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImZiOmFkbWluc1wiIGNvbnRlbnQ9XCI1NDg5MDA4MjhcIi8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9eyghIXByb3BzLm1ldGEgJiYgcHJvcHMubWV0YS5kZXNjcmlwdGlvbikgfHxcbiAgICAgICAgICAgICAgICAgICdDcmVhdGUgeW91ciB0byBkbyBsaXN0IGZvciBhIGdyb3VwIG9mIHBlb3BsZSwgc2VuZCB0aGVtLCBhbmQgbGV0IHRoZW0gYXNzaWduIHRoZSB0YXNrIHRoZW1zZWx2ZXMgYW5kIGNvbXBsZXRlIHRoZSB3b3JrLid9Lz5cblxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHNpemVzPVwiMTZ4MTYgMzJ4MzIgNjR4NjRcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTZ4MTk2XCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi0xOTIucG5nXCIvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2MHgxNjBcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLTE2MC5wbmdcIi8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiOTZ4OTZcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLTk2LnBuZ1wiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCI2NHg2NFwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24tNjQucG5nXCIvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi0zMi5wbmdcIi8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLTE2LnBuZ1wiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLTU3LnBuZ1wiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLTExNC5wbmdcIi8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Mng3MlwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24tNzIucG5nXCIvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24tMTQ0LnBuZ1wiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjYweDYwXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi02MC5wbmdcIi8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi0xMjAucG5nXCIvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzZ4NzZcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLTc2LnBuZ1wiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLTE1Mi5wbmdcIi8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi0xODAucG5nXCIvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNGRkZGRkZcIi8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PVwiL2Zhdmljb24tMTQ0LnBuZ1wiLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9XCIvYnJvd3NlcmNvbmZpZy54bWxcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjcmVhdGVMaW5rXCI+XG5cbiAgICAgICAgICAgICAgICA8TGluayBhcz1cIi9jcmVhdGVcIiBocmVmPVwiL2NyZWF0ZVwiPjxhPkNyZWF0ZSBhIG5ldyBsaXN0PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAmbmJzcDsmbmRhc2g7Jm5ic3A7XG4gICAgICAgICAgICAgICAge3Rva2VuICYmIDxhIGhyZWY9XCJcIiBvbkNsaWNrPXsgbG9nb3V0IH0+TG9nb3V0PC9hPn1cbiAgICAgICAgICAgICAgICB7IXRva2VuICYmIDxMaW5rIGFzPVwiL2xvZ2luXCIgaHJlZj1cIi9sb2dpblwiID48YT5Mb2dpbjwvYT48L0xpbms+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdicmFuZGluZyc+dGFza2xpLnN0PC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuLmhlYWRlciB7XG4gICAgbWFyZ2luOjIwcHggMCAyMHB4IDA7XG59XG5cbiNicmFuZGluZyB7XG4gICAgcGFkZGluZzo3cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY3JlYXRlTGluayB7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMTIxNjJEO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1haW4sXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXG59XG5cblxuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cblxuXG5baGlkZGVuXSxcbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogTGlua3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG59XG5cblxuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuICovXG5cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXG4gKi9cblxubWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZjA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4vKipcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG5pbWcge1xuICBib3JkZXI6IDA7XG59XG5cbi8qKlxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXG4gKi9cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxuICovXG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbi8qKlxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxuICovXG5cbmhyIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMDtcbn1cblxuLyoqXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4gKiAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG4gIG1hcmdpbjogMDsgLyogMyAqL1xufVxuXG5cblxuYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cblxuYnV0dG9uLFxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCAvKiAxICovXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXG59XG5cbi8qKlxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbiAqL1xuXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5cbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXG4gKi9cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XG59XG5cblxubGVnZW5kIHtcbiAgYm9yZGVyOiAwOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbm9wdGdyb3VwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIFRhYmxlc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG4gKi9cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG4qIFNrZWxldG9uIFYyLjAuNFxuKiBDb3B5cmlnaHQgMjAxNCwgRGF2ZSBHYW1hY2hlXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuKiAxMi8yOS8yMDE0XG4qL1xuXG5cbi8qIFRhYmxlIG9mIGNvbnRlbnRzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcbi0gR3JpZFxuLSBCYXNlIFN0eWxlc1xuLSBUeXBvZ3JhcGh5XG4tIExpbmtzXG4tIEJ1dHRvbnNcbi0gRm9ybXNcbi0gTGlzdHNcbi0gQ29kZVxuLSBUYWJsZXNcbi0gU3BhY2luZ1xuLSBVdGlsaXRpZXNcbi0gQ2xlYXJpbmdcbi0gTWVkaWEgUXVlcmllc1xuKi9cblxuXG4vKiBHcmlkXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4uY29sdW1uLFxuLmNvbHVtbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICAgIHBhZGRpbmc6IDA7IH1cbn1cblxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNTUwcHggKi9cbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlOyB9XG4gIC5jb2x1bW4sXG4gIC5jb2x1bW5zIHtcbiAgICBtYXJnaW4tbGVmdDogNCU7IH1cbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcbiAgLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG5cbiAgLm9uZS5jb2x1bW4sXG4gIC5vbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNC42NjY2NjY2NjY2NyU7IH1cbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxuICAudGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XG4gIC5mb3VyLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMzAuNjY2NjY2NjY2NyU7IH1cbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxuICAuc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XG4gIC5zZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgeyB3aWR0aDogNTYuNjY2NjY2NjY2NyU7IH1cbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxuICAubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XG4gIC50ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogODIuNjY2NjY2NjY2NyU7IH1cbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxuICAudHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XG5cbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxuICAudHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XG5cbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cblxuICAvKiBPZmZzZXRzICovXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxuICAub2Zmc2V0LWJ5LXR3by5jb2x1bW4sXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogMjYlOyAgICAgICAgICAgIH1cbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1uLFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcbiAgLm9mZnNldC1ieS1zaXguY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7ICAgICAgICAgICAgfVxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbixcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDc4LjAlOyAgICAgICAgICB9XG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxuICAub2Zmc2V0LWJ5LWVsZXZlbi5jb2x1bW4sXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cblxuICAub2Zmc2V0LWJ5LW9uZS10aGlyZC5jb2x1bW4sXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbnMgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxuXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbnMgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgfVxuXG59XG5cblxuLyogQmFzZSBTdHlsZXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLyogTk9URVxuaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxuYXJlIGJhc2VkIG9uIDEwcHggc2l6aW5nLiBTbyBiYXNpY2FsbHkgMS41cmVtID0gMTVweCA6KSAqL1xuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cbmJvZHkge1xuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIyMjsgfVxuXG5cbi8qIFR5cG9ncmFwaHlcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbmgxIHsgZm9udC1zaXplOiA0LjByZW07IGxpbmUtaGVpZ2h0OiAxLjI7ICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO31cbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XG5oMyB7IGZvbnQtc2l6ZTogMy4wcmVtOyBsaW5lLWhlaWdodDogMS4zOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxuaDQgeyBmb250LXNpemU6IDIuNHJlbTsgbGluZS1oZWlnaHQ6IDEuMzU7IGxldHRlci1zcGFjaW5nOiAtLjA4cmVtOyB9XG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cbmg2IHsgZm9udC1zaXplOiAxLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7ICBsZXR0ZXItc3BhY2luZzogMDsgfVxuXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcbiAgaDEgeyBmb250LXNpemU6IDUuMHJlbTsgfVxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XG4gIGgzIHsgZm9udC1zaXplOiAzLjZyZW07IH1cbiAgaDQgeyBmb250LXNpemU6IDMuMHJlbTsgfVxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XG4gIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IH1cbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7IH1cblxuXG4vKiBMaW5rc1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5hIHtcbiAgY29sb3I6ICMxRUFFREI7IH1cbmE6aG92ZXIge1xuICBjb2xvcjogIzBGQTBDRTsgfVxuXG5cbi8qIEJ1dHRvbnNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLmJ1dHRvbixcbmJ1dHRvbixcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuLmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjpob3ZlcixcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXG5pbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXIsXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxuLmJ1dHRvbjpmb2N1cyxcbmJ1dHRvbjpmb2N1cyxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwicmVzZXRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJvcmRlci1jb2xvcjogIzg4ODtcbiAgb3V0bGluZTogMDsgfVxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYnV0dG9uLXByaW1hcnksXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0uYnV0dG9uLXByaW1hcnksXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ1dHRvbi1wcmltYXJ5IHtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzM0MzRjA7XG4gIGJvcmRlci1jb2xvcjogIzMzQzNGMDsgfVxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpob3ZlcixcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUFFREI7XG4gIGJvcmRlci1jb2xvcjogIzFFQUVEQjsgfVxuXG5cbi8qIEZvcm1zXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxuaW5wdXRbdHlwZT1cInVybFwiXSxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiA2cHggMTBweDsgLyogVGhlIDZweCB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGV4dCBvbiBGRiwgaWdub3JlZCBieSBXZWJraXQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4vKiBSZW1vdmVzIGF3a3dhcmQgZGVmYXVsdCBzdHlsZXMgb24gc29tZSBpbnB1dHMgZm9yIGlPUyAqL1xuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJ0ZWxcIl0sXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lOyB9XG50ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDY1cHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7IH1cbmlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cInVybFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzQzNGMDtcbiAgb3V0bGluZTogMDsgfVxubGFiZWwsXG5sZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXdpZHRoOiAwOyB9XG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBkaXNwbGF5OiBpbmxpbmU7IH1cbmxhYmVsID4gLmxhYmVsLWJvZHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG5cbi8qIExpc3RzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbnVsIHtcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgfVxub2wge1xuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgfVxub2wsIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAwOyB9XG51bCB1bCxcbnVsIG9sLFxub2wgb2wsXG5vbCB1bCB7XG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XG4gIGZvbnQtc2l6ZTogOTAlOyB9XG5saSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cblxuXG4vKiBDb2RlXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmNvZGUge1xuICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcbiAgbWFyZ2luOiAwIC4ycmVtO1xuICBmb250LXNpemU6IDkwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG5wcmUgPiBjb2RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICB3aGl0ZS1zcGFjZTogcHJlOyB9XG5cblxuLyogVGFibGVzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbnRoLFxudGQge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyB9XG50aDpmaXJzdC1jaGlsZCxcbnRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XG50aDpsYXN0LWNoaWxkLFxudGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cblxuXG4vKiBTcGFjaW5nXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbmJ1dHRvbixcbi5idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0LFxuZmllbGRzZXQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cbnByZSxcbmJsb2NrcXVvdGUsXG5kbCxcbmZpZ3VyZSxcbnRhYmxlLFxucCxcbnVsLFxub2wsXG5mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtOyB9XG5cblxuLyogVXRpbGl0aWVzXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi51LWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuLnUtbWF4LWZ1bGwtd2lkdGgge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbi51LXB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7IH1cbi51LXB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cblxuLyogTWlzY1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5ociB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgfVxuXG5cbi8qIENsZWFyaW5nXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cblxuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xuLmNvbnRhaW5lcjphZnRlcixcbi5yb3c6YWZ0ZXIsXG4udS1jZiB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDsgfVxuXG5cbi8qIE1lZGlhIFF1ZXJpZXNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLypcbk5vdGU6IFRoZSBiZXN0IHdheSB0byBzdHJ1Y3R1cmUgdGhlIHVzZSBvZiBtZWRpYSBxdWVyaWVzIGlzIHRvIGNyZWF0ZSB0aGUgcXVlcmllc1xubmVhciB0aGUgcmVsZXZhbnQgY29kZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50ZWQgdG8gY2hhbmdlIHRoZSBzdHlsZXMgZm9yIGJ1dHRvbnNcbm9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxudGhlcmUuXG4qL1xuXG5cbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7fVxuXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge31cblxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHt9XG5cbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHt9XG5cbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9XG5cblxuYH08L3N0eWxlPlxuICAgIDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/madewulf/Projects/perso/tasksUI/code/components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Modal =
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "myModal",
        className: "jsx-1380754024" + " " + "modal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1380754024" + " " + "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1380754024" + " " + "modal-close"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: function onClick() {
          return _this.props.onClose();
        },
        className: "jsx-1380754024" + " " + "close"
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1380754024" + " " + "modal-title"
      }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1380754024" + " " + "modal-inner-content"
      }, innerComponent)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1380754024",
        css: ".modal.jsx-1380754024{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);}.modal-content.jsx-1380754024{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;border-radius:3px;width:80%;}.modal-close.jsx-1380754024{margin-top:-18px;}.close.jsx-1380754024{color:#aaa;float:right;font-size:28px;font-weight:bold;}.close.jsx-1380754024:hover,.close.jsx-1380754024:focus{color:black;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.modal-title.jsx-1380754024{padding:10px 0;margin-bottom:0;color:#444;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvY29tcG9uZW50cy9Nb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQndCLEFBR2dDLEFBYVUsQUFZUixBQUlOLEFBUUMsQUFLRyxXQVpILENBUVMsR0FyQ1gsQUEwQ0ssRUFqQm5CLE1BS21CLEVBN0JSLEFBWVMsTUE4QkwsQ0F6Q0wsTUFDSyxBQTRCTSxHQWpCSixDQThCakIsT0F4Q2dCLEtBV1UsQ0FpQjFCLE1BM0JrQixDQWlDQyxhQWhDYSxDQVVWLENBdUJ0QixpQkF0QmMsU0FWdUIsQ0FXckMsZ0NBVkEiLCJmaWxlIjoiL1VzZXJzL21hZGV3dWxmL1Byb2plY3RzL3BlcnNvL3Rhc2tzVUkvY29kZS9jb21wb25lbnRzL01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpbm5lckNvbXBvbmVudCA9IHRoaXMucHJvcHMuaW5uZXJDb21wb25lbnQ7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zaG93KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9XCJteU1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2VcIj5cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLm9uQ2xvc2UoKX0+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaW5uZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7aW5uZXJDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbiAgICAgICAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtaW5uZXItY29udGVudCB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbC1jbG9zZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4gICAgICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbG9zZTpob3ZlcixcbiAgICAgICAgICAgIC5jbG9zZTpmb2N1cyB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtdGl0bGUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2ID5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7Il19 */\n/*@ sourceURL=/Users/madewulf/Projects/perso/tasksUI/code/components/Modal.js */"
      }));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/NameForm.js":
/*!********************************!*\
  !*** ./components/NameForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/http */ "./utils/http.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/colors */ "./utils/colors.js");




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





var NameForm =
/*#__PURE__*/
function (_Component) {
  _inherits(NameForm, _Component);

  function NameForm(props) {
    var _this;

    _classCallCheck(this, NameForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NameForm).call(this, props));
    _this.state = {
      name: '',
      list: _this.props.list,
      task: _this.props.task
    };
    return _this;
  }

  _createClass(NameForm, [{
    key: "onNamePicked",
    value: function () {
      var _onNamePicked = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name) {
        var user, list;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!name) {
                  _context.next = 9;
                  break;
                }

                _context.next = 3;
                return _utils_http__WEBPACK_IMPORTED_MODULE_3__["default"].postJson('/api/u/', {
                  name: name
                });

              case 3:
                user = _context.sent;
                _context.next = 6;
                return _utils_http__WEBPACK_IMPORTED_MODULE_3__["default"].putJson("/api/l/".concat(this.state.list.url_key, "/"), {
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

      return function onNamePicked(_x) {
        return _onNamePicked.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var colorClassPerUser = Object(_utils_colors__WEBPACK_IMPORTED_MODULE_4__["getColorClassPerUser"])(this.state.list.members);
      var varKeys = this.state.task.assigned_to.map(function (user) {
        return user.key;
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1366877219"
      }, this.state.list.members.filter(function (user) {
        return !varKeys.includes(user.key);
      }).map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: user.key,
          className: "jsx-1366877219" + " " + "userButton"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.props.onUserPicked(user.key);
          },
          key: '' + user.key,
          className: "jsx-1366877219" + " " + ('userName butt ' + colorClassPerUser[user.key] || "")
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "jsx-1366877219"
        }, user.name)));
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
        className: "jsx-1366877219"
      }, "Add a person:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1366877219"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
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
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.onNamePicked(_this2.state.name);
        },
        className: "jsx-1366877219" + " " + "okButton"
      }, "OK"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1366877219",
        css: ".okButton.jsx-1366877219{margin-left:10px;height:37px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvY29tcG9uZW50cy9OYW1lRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGlCLEFBRytCLGlCQUNMLFlBQ2YiLCJmaWxlIjoiL1VzZXJzL21hZGV3dWxmL1Byb2plY3RzL3BlcnNvL3Rhc2tzVUkvY29kZS9jb21wb25lbnRzL05hbWVGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL2h0dHAnO1xuaW1wb3J0IHtnZXRDb2xvckNsYXNzUGVyVXNlcn0gZnJvbSAnLi4vdXRpbHMvY29sb3JzJztcblxuY2xhc3MgTmFtZUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtuYW1lOiAnJywgbGlzdDogdGhpcy5wcm9wcy5saXN0LCB0YXNrOiB0aGlzLnByb3BzLnRhc2t9O1xuICAgIH1cblxuICAgIGFzeW5jIG9uTmFtZVBpY2tlZChuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgKGh0dHAucG9zdEpzb24oJy9hcGkvdS8nLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IChodHRwLnB1dEpzb24oYC9hcGkvbC8ke3RoaXMuc3RhdGUubGlzdC51cmxfa2V5fS9gLCB7XG4gICAgICAgICAgICAgICAgJ3VzZXJzJzogW3VzZXIua2V5XSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IGxpc3QsIG5hbWU6ICcnfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTmV3TGlzdChsaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY29sb3JDbGFzc1BlclVzZXIgPSBnZXRDb2xvckNsYXNzUGVyVXNlcih0aGlzLnN0YXRlLmxpc3QubWVtYmVycyk7XG4gICAgICAgIGxldCB2YXJLZXlzID0gdGhpcy5zdGF0ZS50YXNrLmFzc2lnbmVkX3RvLm1hcCh1c2VyID0+IHVzZXIua2V5KTtcblxuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpc3QubWVtYmVycy5maWx0ZXIodXNlciA9PiAhdmFyS2V5cy5pbmNsdWRlcyh1c2VyLmtleSkpLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidXNlckJ1dHRvblwiIGtleT17dXNlci5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uVXNlclBpY2tlZCh1c2VyLmtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3VzZXJOYW1lIGJ1dHQgJyArIGNvbG9yQ2xhc3NQZXJVc2VyW3VzZXIua2V5XX0ga2V5PXsnJyArIHVzZXIua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dXNlci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPGg0PkFkZCBhIHBlcnNvbjo8L2g0PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSduYW1lLWZvcm0taW5wdXQnIHZhbHVlPXt0aGlzLnN0YXRlID8gdGhpcy5zdGF0ZS5uYW1lIDogJyd9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICB9fSBvbktleVVwPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlICYmIGUua2V5ID09ICdFbnRlcicpIHRoaXMub25OYW1lUGlja2VkKHRoaXMuc3RhdGUubmFtZSk7XG4gICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9rQnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbk5hbWVQaWNrZWQodGhpcy5zdGF0ZS5uYW1lKX0+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAub2tCdXR0b24ge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6MzdweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVGb3JtOyJdfQ== */\n/*@ sourceURL=/Users/madewulf/Projects/perso/tasksUI/code/components/NameForm.js */"
      }));
    }
  }]);

  return NameForm;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NameForm);

/***/ }),

/***/ "./components/SiteLayout.js":
/*!**********************************!*\
  !*** ./components/SiteLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1262658172" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "/static/fa/css/all.css",
    rel: "stylesheet",
    className: "jsx-1262658172"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    meta: props.meta
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1262658172",
    css: ".userName{padding:3px;border-radius:3px;margin-right:3px;cursor:pointer;}.container{margin:20px auto;}.userName.orange{color:#ff8C00;border:1px solid #ff8C00;}.userName.orange.butt{color:white;background-color:#ff8C00;border:1px solid #ff8C00;}.userName.red{color:#e81123;border:1px solid #e81123;}.userName.red.butt{color:white;background-color:#e81123;border:1px solid #e81123;}.userName.pink{color:#ec008C;border:1px solid #ec008C;}.userName.pink.butt{color:white;background-color:#ec008C;border:1px solid #ec008C;}.userName.purple{color:#68217a;border:1px solid #68217a;}.userName.purple.butt{color:white;background-color:#68217a;border:1px solid #68217a;}.userName.blue{color:#00188F;border:1px solid #00188F;}.userName.blue.butt{color:white;background-color:#00188F;border:1px solid #00188F;}.userName.lightblue{color:#00bcf2;border:1px solid #00bcf2;}.userName.lightblue.butt{color:white;background-color:#00bcf2;border:1px solid #00bcf2;}.userName.lightgreen{color:#00b294;border:1px solid #00b294;}.userName.lightgreen.butt{color:white;background-color:#00b294;border:1px solid #00b294;}.userName.green{color:#009e49;border:1px solid #009e49;}.userName.green.butt{color:white;background-color:#009e49;border:1px solid #009e49;}.butt{text-align:center;}.userButton{font-size:1.25em;font-weight:bold;padding:5px 0 5px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvY29tcG9uZW50cy9TaXRlTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVXLEFBRzBCLEFBT0csQUFJQSxBQUtGLEFBTUUsQUFLRixBQU1FLEFBS0YsQUFNRSxBQUtGLEFBTUUsQUFLRixBQU1FLEFBS0YsQUFNRSxBQUtGLEFBTUUsQUFLRixBQU1NLEFBR0YsWUFyR0UsQUFnQk8sQUFXQSxBQVdBLEFBV0EsQUFXQSxBQVdBLEFBV0EsQUFXQSxFQWxGQSxBQVdBLEFBV0EsQUFXQSxBQVdBLEFBV0EsQUFXQSxBQVdBLEdBakY3QixBQStGb0IsQ0FIbkIsWUFsR21CLElBc0dHLEdBdEZNLEFBV0EsQUFXQSxBQVdBLEFBV0EsQUFXQSxBQVdBLEFBV0EsRUFsRjdCLEFBV0EsQUFXQSxBQVdBLEFBV0EsQUFXQSxBQVdBLEFBV0EsUUF2Rm1CLE9Bc0duQixRQXJHQSxBQWVBLEFBV0EsQUFXQSxBQVdBLEFBV0EsQUFXQSxBQVdBLEFBV0EiLCJmaWxlIjoiL1VzZXJzL21hZGV3dWxmL1Byb2plY3RzL3BlcnNvL3Rhc2tzVUkvY29kZS9jb21wb25lbnRzL1NpdGVMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcblxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvZmEvY3NzL2FsbC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICA8SGVhZGVyIG1ldGE9e3Byb3BzLm1ldGF9IC8+XG5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgIC51c2VyTmFtZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6M3B4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDozcHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXJOYW1lLm9yYW5nZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmY4QzAwO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY4QzAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51c2VyTmFtZS5vcmFuZ2UuYnV0dCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOEMwMDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmOEMwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlck5hbWUucmVkIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlODExMjM7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlODExMjM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXJOYW1lLnJlZC5idXR0IHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgxMTIzO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTgxMTIzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51c2VyTmFtZS5waW5rIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlYzAwOEM7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYzAwOEM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXJOYW1lLnBpbmsuYnV0dCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjMDA4QztcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjMDA4QztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlck5hbWUucHVycGxlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM2ODIxN2E7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODIxN2E7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXJOYW1lLnB1cnBsZS5idXR0IHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjgyMTdhO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjgyMTdhO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51c2VyTmFtZS5ibHVlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDE4OEY7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDE4OEY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXJOYW1lLmJsdWUuYnV0dCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTg4RjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMTg4RjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlck5hbWUubGlnaHRibHVlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMGJjZjI7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGJjZjI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXJOYW1lLmxpZ2h0Ymx1ZS5idXR0IHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2YyO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBiY2YyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51c2VyTmFtZS5saWdodGdyZWVuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMGIyOTQ7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGIyOTQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXJOYW1lLmxpZ2h0Z3JlZW4uYnV0dCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjI5NDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwYjI5NDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlck5hbWUuZ3JlZW4ge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwOWU0OTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOWU0OTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlck5hbWUuZ3JlZW4uYnV0dCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWU0OTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOWU0OTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgLmJ1dHQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAudXNlckJ1dHRvbiB7XG4gICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gICAgICAgICAgfVxuICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cbiJdfQ== */\n/*@ sourceURL=/Users/madewulf/Projects/perso/tasksUI/code/components/SiteLayout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SiteLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SiteLayout */ "./components/SiteLayout.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_NameForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NameForm */ "./components/NameForm.js");
/* harmony import */ var _components_EditForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/EditForm */ "./components/EditForm.js");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/http */ "./utils/http.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/colors */ "./utils/colors.js");
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/token */ "./utils/token.js");




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










var List =
/*#__PURE__*/
function (_Component) {
  _inherits(List, _Component);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));
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

  _createClass(List, [{
    key: "onTaskUnassign",
    value: function () {
      var _onTaskUnassign = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(taskKey, userKey) {
        var list;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].putJson("/api/t/".concat(taskKey, "/"), {
                  'users': ['-' + userKey]
                });

              case 2:
                _context.next = 4;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].getJson("/api/l/".concat(this.state.list.url_key, "/"));

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
      var _onTaskAssign = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(task) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
      var _onEditList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
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
      var _onUserPick = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(key) {
        var list;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].putJson("/api/t/".concat(this.state.clickedTask.key, "/"), {
                  'users': [key]
                });

              case 2:
                _context4.next = 4;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].getJson("/api/l/".concat(this.state.list.url_key, "/"));

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
      var _createTask = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var newTask, list;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.state.taskText.trim() != '')) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 3;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].postJson('/api/t/', {
                  text: this.state.taskText,
                  list: this.props.list.url_key
                });

              case 3:
                newTask = _context5.sent;
                _context5.next = 6;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].getJson("/api/l/".concat(this.state.list.url_key, "/"));

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
      var _taskClick = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(target, task) {
        var status, newList;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                status = target.checked ? 'done' : 'waiting';
                task.status = status; //hackish way to implement optimistic modification

                this.setState({
                  list: this.state.list
                });
                _context6.next = 5;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].putJson('/api/t/' + target.id + '/', {
                  status: status
                });

              case 5:
                _context6.next = 7;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].getJson("/api/l/".concat(this.state.list.url_key, "/"));

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
      var _taskChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(taskKey, text) {
        var newList;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].putJson('/api/t/' + taskKey + '/', {
                  text: text
                });

              case 2:
                _context7.next = 4;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].getJson("/api/l/".concat(this.state.list.url_key, "/"));

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
      var _handleVisibilityChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (document.hidden) {
                  _context8.next = 5;
                  break;
                }

                _context8.next = 3;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].getJson("/api/l/".concat(this.state.list.url_key, "/"));

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
      var colorClassPerUser = Object(_utils_colors__WEBPACK_IMPORTED_MODULE_8__["getColorClassPerUser"])(list.members);
      var innerComponent;
      var modalTitle;

      if (this.state.modal === 'nameForm') {
        innerComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NameForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        innerComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_EditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
          list: list,
          onNewList: function onNewList(list) {
            _this2.setState({
              list: list
            });
          }
        });
        modalTitle = "Edit the list";
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SiteLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        meta: props.list
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.onEditList();
        },
        className: "jsx-2811390923" + " " + "list-edit-icon"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "jsx-2811390923" + " " + "far fa-edit fa-xs"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2811390923"
      }, this.state.list.name, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-2811390923"
      }, this.state.list.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2811390923"
      }, list.tasks.map(function (task) {
        var className = 'taskText ' + (task.status === 'done' ? 'strike' : '');
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: task.key,
          className: "jsx-2811390923" + " " + "listItem"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
          type: "checkbox",
          id: task.key,
          onChange: function onChange(event) {
            _this2.taskClick(event.target, task);
          },
          checked: task.status === 'done',
          className: "jsx-2811390923"
        }), !task.edit && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          onClick: function onClick() {
            _this2.taskEdit(task.key);
          },
          className: "jsx-2811390923" + " " + (className || "")
        }, task.text), task.edit && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "jsx-2811390923"
        }, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
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
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            onClick: function onClick() {
              return _this2.onTaskUnassign(task.key, user.key);
            },
            key: '' + user.key + '' + task.key,
            className: "jsx-2811390923" + " " + ('userName ' + colorClassPerUser[user.key] || "")
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            className: "jsx-2811390923"
          }, user.name));
        }), _this2.state.list.assignationsOn && task.assigned_to.length === 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          onClick: function onClick() {
            return _this2.onTaskAssign(task);
          },
          className: "jsx-2811390923" + " " + "assignButton"
        }, "Assign"), _this2.state.list.assignationsOn && task.assigned_to.length !== 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          onClick: function onClick() {
            return _this2.onTaskAssign(task);
          },
          className: "jsx-2811390923" + " " + "assignButton"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
          className: "jsx-2811390923" + " " + "fas fa-plus"
        })));
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2811390923"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
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
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-2811390923"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.createTask();
        },
        className: "jsx-2811390923"
      }, "Add")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: modalTitle,
        show: this.state.showModal,
        onClose: function onClose() {
          return _this2.setState({
            showModal: false
          });
        },
        innerComponent: innerComponent
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2811390923",
        css: ".taskText.jsx-2811390923{padding:5px;}.assignButton.jsx-2811390923{color:#1E90FF;padding:4px;background:#eee;border-radius:3px;cursor:pointer;}.listItem.jsx-2811390923{padding:5px;margin:1px;}.itemText.jsx-2811390923{padding:3 5;}.strike.jsx-2811390923{-webkit-text-decoration:line-through;text-decoration:line-through;}.container.jsx-2811390923{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.container.jsx-2811390923 input.jsx-2811390923{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}.checkmark.jsx-2811390923{position:absolute;top:0;left:0;height:25px;width:25px;border-radius:3px;background-color:#eee;}.container.jsx-2811390923:hover input.jsx-2811390923~.checkmark.jsx-2811390923{background-color:#ccc;}.container.jsx-2811390923 input.jsx-2811390923:checked~.checkmark.jsx-2811390923{background-color:#2196F3;}.checkmark.jsx-2811390923:after{content:\"\";position:absolute;display:none;}.container.jsx-2811390923 input.jsx-2811390923:checked~.checkmark.jsx-2811390923:after{display:block;}.container.jsx-2811390923 .checkmark.jsx-2811390923:after{left:9px;top:5px;width:5px;height:10px;border:solid white;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.nameLabel.jsx-2811390923{display:inline;font-weight:100;}.list-edit-icon.jsx-2811390923{font-size:2em;float:right;padding-left:10px;}.fa-edit.jsx-2811390923{color:#ddd;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvcGFnZXMvbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTXdCLEFBRzRCLEFBSUUsQUFRRixBQUtDLEFBSWlCLEFBR2YsQUFjSSxBQVNBLEFBV0ksQUFLRyxBQUtkLEFBT0csQUFLTCxBQVlVLEFBSUYsQUFLRixTQXBCUCxFQVpVLEFBaUNDLENBckd2QixBQVljLEFBS2QsRUFiZSxBQW9CTyxBQW1EbEIsQUFxQmUsQ0FKSyxFQVhWLENBM0NBLEFBU0osSUFXTixDQTdDSixDQW1DVyxDQWVQLENBMURnQixBQTRGSyxBQUtyQixDQXBCWSxDQTNDRyxDQThCRixFQXBCRCxBQTRDWixDQXBFa0IsT0EwREMsR0E3RUQsQUFnRWxCLENBOUJTLEFBVUUsQ0FnRFgsTUF4RW1CLEVBZVgsRUFVUyxJQWlDUSxFQTdFVixBQW1DZixNQXJCSixHQU1tQixHQXlCTyxHQTVDMUIsUUE2RW9DLENBekRqQixVQXlCZixLQXhCeUIsZ0JBeURHLFNBeEROLG1CQXlERSxHQXhESCxxQkFDSiw0REF3RGpCLHlCQXZEQSIsImZpbGUiOiIvVXNlcnMvbWFkZXd1bGYvUHJvamVjdHMvcGVyc28vdGFza3NVSS9jb2RlL3BhZ2VzL2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvU2l0ZUxheW91dCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5pbXBvcnQgTmFtZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OYW1lRm9ybSc7XG5pbXBvcnQgRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9FZGl0Rm9ybSc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGh0dHAgZnJvbSAnLi4vdXRpbHMvaHR0cCc7XG5pbXBvcnQge2dldENvbG9yQ2xhc3NQZXJVc2VyfSBmcm9tICcuLi91dGlscy9jb2xvcnMnO1xuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuLi91dGlscy90b2tlbidcbmNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRhc2tUZXh0OiAnJyxcbiAgICAgICAgICAgIGxpc3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvcHMubGlzdCkpLFxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIG1vZGFsOiAnbmFtZUZvcm0nLFxuICAgICAgICAgICAgZWRpdGluZ1Rhc2s6IGZhbHNlLFxuICAgICAgICAgICAgbGlzdGVuZXJBZGRlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgICAgICBsZXQga2V5ID0gcHJvcHMucXVlcnkudGl0bGU7XG4gICAgICAgIGxldCB0b2tlbiA9IGdldFRva2VuKHByb3BzKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgaHR0cC5nZXRKc29uKGAvYXBpL2wvJHtrZXl9L2AsIHRva2VuKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGlzdDogZGF0YSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBvblRhc2tVbmFzc2lnbih0YXNrS2V5LCB1c2VyS2V5KSB7XG4gICAgICAgIGF3YWl0IGh0dHAucHV0SnNvbihgL2FwaS90LyR7dGFza0tleX0vYCwge1xuICAgICAgICAgICAgJ3VzZXJzJzogWyctJyArIHVzZXJLZXldLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGh0dHAuZ2V0SnNvbihgL2FwaS9sLyR7dGhpcy5zdGF0ZS5saXN0LnVybF9rZXl9L2ApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IGZhbHNlLCBsaXN0OiBsaXN0fSk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25UYXNrQXNzaWduKHRhc2spIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kYWw6ICduYW1lRm9ybScsIGNsaWNrZWRUYXNrOiB0YXNrLCBzaG93TW9kYWw6IHRydWV9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uRWRpdExpc3QoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsOiAnZWRpdEZvcm0nLCAgc2hvd01vZGFsOiB0cnVlfSlcbiAgICB9XG5cbiAgICBhc3luYyBvblVzZXJQaWNrKGtleSkge1xuICAgICAgICBhd2FpdCBodHRwLnB1dEpzb24oYC9hcGkvdC8ke3RoaXMuc3RhdGUuY2xpY2tlZFRhc2sua2V5fS9gLCB7XG4gICAgICAgICAgICAndXNlcnMnOiBba2V5XSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBodHRwLmdldEpzb24oYC9hcGkvbC8ke3RoaXMuc3RhdGUubGlzdC51cmxfa2V5fS9gKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiBmYWxzZSwgbGlzdDogbGlzdH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRhc2tUZXh0LnRyaW0oKSAhPSAnJykge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IGF3YWl0IGh0dHAucG9zdEpzb24oJy9hcGkvdC8nLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5zdGF0ZS50YXNrVGV4dCxcbiAgICAgICAgICAgICAgICBsaXN0OiB0aGlzLnByb3BzLmxpc3QudXJsX2tleSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgaHR0cC5nZXRKc29uKGAvYXBpL2wvJHt0aGlzLnN0YXRlLmxpc3QudXJsX2tleX0vYCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBsaXN0LCB0YXNrVGV4dDogJyd9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHRhc2tDbGljayh0YXJnZXQsIHRhc2spIHtcbiAgICAgICAgbGV0IHN0YXR1cyA9IHRhcmdldC5jaGVja2VkID8gJ2RvbmUnIDogJ3dhaXRpbmcnO1xuICAgICAgICB0YXNrLnN0YXR1cyA9IHN0YXR1cyAvL2hhY2tpc2ggd2F5IHRvIGltcGxlbWVudCBvcHRpbWlzdGljIG1vZGlmaWNhdGlvblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiB0aGlzLnN0YXRlLmxpc3R9KVxuICAgICAgICBhd2FpdCBodHRwLnB1dEpzb24oJy9hcGkvdC8nICsgdGFyZ2V0LmlkICsgJy8nLCB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBhd2FpdCBodHRwLmdldEpzb24oYC9hcGkvbC8ke3RoaXMuc3RhdGUubGlzdC51cmxfa2V5fS9gKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogbmV3TGlzdCwgZWRpdGluZ1Rhc2s6IHRydWV9KTtcbiAgICB9XG5cbiAgICB0YXNrRWRpdCh0YXNrS2V5KSB7XG4gICAgICAgIGNvbnN0IGxpc3RDbG9uZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5saXN0KSk7XG4gICAgICAgIGxpc3RDbG9uZS50YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmtleSA9PSB0YXNrS2V5KSB7XG4gICAgICAgICAgICAgICAgdGFzay5lZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFzay5lZGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBsaXN0Q2xvbmUsIGVkaXRpbmdUYXNrOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIGFzeW5jIHRhc2tDaGFuZ2UodGFza0tleSwgdGV4dCkge1xuICAgICAgICBhd2FpdCBodHRwLnB1dEpzb24oJy9hcGkvdC8nICsgdGFza0tleSArICcvJywge1xuICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBhd2FpdCBodHRwLmdldEpzb24oYC9hcGkvbC8ke3RoaXMuc3RhdGUubGlzdC51cmxfa2V5fS9gKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogbmV3TGlzdH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgaHR0cC5nZXRKc29uKGAvYXBpL2wvJHt0aGlzLnN0YXRlLmxpc3QudXJsX2tleX0vYCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBkYXRhfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5saXN0ZW5lckFkZGVkKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKSA9PiB0aGlzLmhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLmxpc3Q7XG5cbiAgICAgICAgY29uc3QgY29sb3JDbGFzc1BlclVzZXIgPSBnZXRDb2xvckNsYXNzUGVyVXNlcihsaXN0Lm1lbWJlcnMpO1xuICAgICAgICBsZXQgaW5uZXJDb21wb25lbnRcbiAgICAgICAgbGV0IG1vZGFsVGl0bGVcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kYWwgPT09ICduYW1lRm9ybScpIHtcbiAgICAgICAgICAgIGlubmVyQ29tcG9uZW50ID0gPE5hbWVGb3JtIGxpc3Q9e2xpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvckNsYXNzUGVyVXNlcj17Y29sb3JDbGFzc1BlclVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVzZXJQaWNrZWQ9eyhrZXkpID0+IHRoaXMub25Vc2VyUGljayhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzaz17dGhpcy5zdGF0ZS5jbGlja2VkVGFza31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV3TGlzdD17KGxpc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0OiBsaXN0fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz47XG4gICAgICAgICAgICBtb2RhbFRpdGxlID0gXCJUYXAgb24gYSBuYW1lXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlubmVyQ29tcG9uZW50ID0gPEVkaXRGb3JtIGxpc3Q9e2xpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5ld0xpc3Q9eyhsaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogbGlzdH0pO1xuICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgbW9kYWxUaXRsZSA9IFwiRWRpdCB0aGUgbGlzdFwiXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8TGF5b3V0IG1ldGE9e3Byb3BzLmxpc3R9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWVkaXQtaWNvblwiICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRWRpdExpc3QoKX0+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXQgZmEteHNcIj48L2k+PC9kaXY+XG4gICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUubGlzdC5uYW1lfSA8L2gxPlxuICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubGlzdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsaXN0LnRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSAndGFza1RleHQgJyArICgodGFzay5zdGF0dXMgPT09ICdkb25lJykgPyAnc3RyaWtlJyA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibGlzdEl0ZW1cIiBrZXk9e3Rhc2sua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17dGFzay5rZXl9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tDbGljayhldmVudC50YXJnZXQsIHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2hlY2tlZD17dGFzay5zdGF0dXMgPT09ICdkb25lJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0YXNrLmVkaXQgJiYgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tFZGl0KHRhc2sua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0+e3Rhc2sudGV4dH08L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2suZWRpdCAmJiA8c3Bhbj4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0ZvY3VzIGRlZmF1bHRWYWx1ZT17dGFzay50ZXh0fSBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza0NoYW5nZSh0YXNrLmtleSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uS2V5VXA9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgJiYgZS5rZXkgPT0gJ0VudGVyJykgdGhpcy50YXNrQ2hhbmdlKHRhc2sua2V5LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPiA8L3NwYW4+fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5saXN0LmFzc2lnbmF0aW9uc09uICYmIHRhc2suYXNzaWduZWRfdG8ubWFwKHVzZXIgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyd1c2VyTmFtZSAnICsgY29sb3JDbGFzc1BlclVzZXJbdXNlci5rZXldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25UYXNrVW5hc3NpZ24odGFzay5rZXksIHVzZXIua2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eycnICsgdXNlci5rZXkgKyAnJyArIHRhc2sua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPixcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXN0LmFzc2lnbmF0aW9uc09uICYmIHRhc2suYXNzaWduZWRfdG8ubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXNzaWduQnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5vblRhc2tBc3NpZ24odGFzayl9PkFzc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpc3QuYXNzaWduYXRpb25zT24gJiYgdGFzay5hc3NpZ25lZF90by5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhc3NpZ25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uVGFza0Fzc2lnbih0YXNrKX0+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza1RleHRcIiBhdXRvRm9jdXM9eyF0aGlzLnN0YXRlLmVkaXRpbmdUYXNrfSB2YWx1ZT17dGhpcy5zdGF0ZS50YXNrVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0YXNrVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBwbGFjZWhvbGRlcj1cIk5ldyB0YXNrIGhlcmUgLi4uXCIgb25LZXlVcD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZSAmJiBlLmtleSA9PSAnRW50ZXInKSB0aGlzLmNyZWF0ZVRhc2soKTtcbiAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5jcmVhdGVUYXNrKCl9PkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TW9kYWwgdGl0bGU9e21vZGFsVGl0bGV9IHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfSBvbkNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IGZhbHNlfSl9XG4gICAgICAgICAgICAgICAgICAgaW5uZXJDb21wb25lbnQ9e2lubmVyQ29tcG9uZW50fS8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudGFza1RleHQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXNzaWduQnV0dG9uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjojMUU5MEZGO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6NHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpc3RJdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXRlbVRleHQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMgNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0cmlrZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciBpbnB1dCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbiAgICAgICAgICAgICAgICAuY2hlY2ttYXJrIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6M3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuICAgICAgICAgICAgICAgIC5jaGVja21hcms6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuICAgICAgICAgICAgICAgIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiA5cHg7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5uYW1lTGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saXN0LWVkaXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyZW07XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZhLWVkaXQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7Il19 */\n/*@ sourceURL=/Users/madewulf/Projects/perso/tasksUI/code/pages/list.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(props) {
        var key, token, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                key = props.query.title;
                token = Object(_utils_token__WEBPACK_IMPORTED_MODULE_9__["getToken"])(props);
                _context9.next = 4;
                return _utils_http__WEBPACK_IMPORTED_MODULE_7__["default"].getJson("/api/l/".concat(key, "/"), token);

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
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./utils/colors.js":
/*!*************************!*\
  !*** ./utils/colors.js ***!
  \*************************/
/*! exports provided: getColorClassPerUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorClassPerUser", function() { return getColorClassPerUser; });
function getColorClassPerUser(members) {
  var colors = ['orange', 'red', 'pink', 'purple', 'blue', 'lightblue', 'lightgreen', 'green'];
  var colorClassPerUser = {};
  members.map(function (member, index) {
    colorClassPerUser[member.key] = colors[index % colors.length];
  });
  return colorClassPerUser;
}

/***/ }),

/***/ "./utils/http.js":
/*!***********************!*\
  !*** ./utils/http.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "next/config");
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
            url = "http://localhost:8000" + path;
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

/* harmony default export */ __webpack_exports__["default"] = ({
  postJson: postJson,
  putJson: putJson,
  getJson: getJson
});

/***/ }),

/***/ "./utils/token.js":
/*!************************!*\
  !*** ./utils/token.js ***!
  \************************/
/*! exports provided: getToken, logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
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
/* harmony default export */ __webpack_exports__["default"] = (getToken);

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/list.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/list.js */"./pages/list.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=list.js.map