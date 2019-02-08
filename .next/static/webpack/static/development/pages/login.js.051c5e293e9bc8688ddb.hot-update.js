webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SiteLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SiteLayout.js */ "./components/SiteLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/http */ "./utils/http.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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
                return _utils_http__WEBPACK_IMPORTED_MODULE_4__["default"].postJson("/api/login/", this.state);

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

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SiteLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
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
        css: ".error.jsx-3374414534{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNpQixBQUd5QixVQUNkIiwiZmlsZSI6Ii9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvcGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvU2l0ZUxheW91dC5qcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL2h0dHAnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY2xhc3MgQ3JlYXRlUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6ICcnLCBwYXNzd29yZDogJycsIGVycm9yOiAnJyB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2dpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlcm5hbWUgPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJ1VzZXJuYW1lIGlzIG1hbmRhdG9yeSd9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJ1Bhc3N3b3JkIGlzIG1hbmRhdG9yeSd9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnJ30pXG4gICAgICAgICAgICBjb25zdCBqID0gYXdhaXQgaHR0cC5wb3N0SnNvbihgL2FwaS9sb2dpbi9gLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIGlmIChqLnRva2VuIT1udWxsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ4LXRhc2tsaXN0LXRva2VuPVwiICsgai50b2tlblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJ1dyb25nIGNyZWRlbnRpYWxzJyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDI+Q3JlYXRlIGFjY291bnQ8L2gyPlxuICAgICAgICAgICAgPGRpdj5Vc2VybmFtZTwvZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlLCBlcnJvcjogJycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgPGRpdj5QYXNzd29yZDwvZGl2PjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlLCBlcnJvcjogJycgfSl9IC8+XG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPnt0aGlzLnN0YXRlLmVycm9yfTxici8+PC9kaXY+IH1cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvZ2luKCl9PkxvZ2luPC9idXR0b24+PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+PExpbmsgYXM9XCIvYWNjb3VudFwiIGhyZWY9XCIvYWNjb3VudFwiPjxhPkNyZWF0ZSBhIG5ldyBhY2NvdW50PzwvYT48L0xpbms+PC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUGFnZTsiXX0= */\n/*@ sourceURL=/Users/madewulf/Projects/perso/tasksUI/code/pages/login.js */"
      }));
    }
  }]);

  return CreatePage;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreatePage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/login")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=login.js.051c5e293e9bc8688ddb.hot-update.js.map