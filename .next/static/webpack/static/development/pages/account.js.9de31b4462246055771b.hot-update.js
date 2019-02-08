webpackHotUpdate("static/development/pages/account.js",{

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
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
        name: '',
        mail: '',
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
                this.setState({
                  error: ''
                });
                _context.next = 3;
                return _utils_http__WEBPACK_IMPORTED_MODULE_4__["default"].postJson("/api/login/", this.state);

              case 3:
                j = _context.sent;

                if (j.token != null) {
                  document.cookie = "x-tasklist-token=" + j.token;
                  document.location = "/";
                } else {
                  this.setState({
                    error: j.error
                  });
                }

              case 5:
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
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
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
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3374414534"
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        type: "text",
        id: "name",
        value: this.state.name,
        onChange: function onChange(event) {
          return _this.setState({
            name: event.target.value,
            error: ''
          });
        },
        className: "jsx-3374414534"
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3374414534"
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        type: "text",
        id: "email",
        value: this.state.email,
        onChange: function onChange(event) {
          return _this.setState({
            email: event.target.value,
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
      }, "Login")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3374414534",
        css: ".error.jsx-3374414534{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvcGFnZXMvYWNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2lCLEFBR3lCLFVBQ2QiLCJmaWxlIjoiL1VzZXJzL21hZGV3dWxmL1Byb2plY3RzL3BlcnNvL3Rhc2tzVUkvY29kZS9wYWdlcy9hY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1NpdGVMYXlvdXQuanMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaHR0cCBmcm9tICcuLi91dGlscy9odHRwJ1xuXG5jbGFzcyBDcmVhdGVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJywgbmFtZTogJycsIG1haWw6ICcnLCBlcnJvcjogJycgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJyd9KVxuICAgICAgICBjb25zdCBqID0gYXdhaXQgaHR0cC5wb3N0SnNvbihgL2FwaS9sb2dpbi9gLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgaWYgKGoudG9rZW4hPW51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwieC10YXNrbGlzdC10b2tlbj1cIiArIGoudG9rZW5cbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGouZXJyb3IgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TGF5b3V0PlxuICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgICAgIDxkaXY+VXNlcm5hbWU8L2Rpdj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlLCBlcnJvcjogJycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgIDxkaXY+UGFzc3dvcmQ8L2Rpdj48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSwgZXJyb3I6ICcnIH0pfSAvPlxuICAgICAgICAgICAgPGRpdj5OYW1lPC9kaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSwgZXJyb3I6ICcnIH0pfSAvPlxuICAgICAgICAgICAgPGRpdj5FbWFpbDwvZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUsIGVycm9yOiAnJyB9KX0gLz5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e3RoaXMuc3RhdGUuZXJyb3J9PGJyLz48L2Rpdj4gfVxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubG9naW4oKX0+TG9naW48L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQYWdlOyJdfQ== */\n/*@ sourceURL=/Users/madewulf/Projects/perso/tasksUI/code/pages/account.js */"
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/account")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=account.js.9de31b4462246055771b.hot-update.js.map