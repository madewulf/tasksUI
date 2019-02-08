webpackHotUpdate("static/development/pages/list.js",{

/***/ "./components/EditForm.js":
/*!********************************!*\
  !*** ./components/EditForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        onBlur: function onBlur(e) {
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
        onKeyUp: function onKeyUp(e) {
          if (e && e.key == 'Enter') _this2.onFeatureChanged('description', _this2.state.description);
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
        css: ".okButton.jsx-4021989194{margin-left:10px;height:37px;}.list-field.jsx-4021989194{font-size:1.5em;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRld3VsZi9Qcm9qZWN0cy9wZXJzby90YXNrc1VJL2NvZGUvY29tcG9uZW50cy9FZGl0Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2lCLEFBR3VDLEFBSUQsZ0JBQ0wsQ0FKQyxTQUtmLEdBSkEiLCJmaWxlIjoiL1VzZXJzL21hZGV3dWxmL1Byb2plY3RzL3BlcnNvL3Rhc2tzVUkvY29kZS9jb21wb25lbnRzL0VkaXRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL2h0dHAnO1xuXG5jbGFzcyBFZGl0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2xpc3Q6IHRoaXMucHJvcHMubGlzdCwgbmFtZTp0aGlzLnByb3BzLmxpc3QubmFtZSwgZGVzY3JpcHRpb246IHRoaXMucHJvcHMubGlzdC5kZXNjcmlwdGlvbn07XG4gICAgfVxuXG4gICAgYXN5bmMgb25GZWF0dXJlQ2hhbmdlZChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25GZWF0dXJlQ2hhbmdlZCcsIG5hbWUsIHZhbHVlKVxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgbGV0IGJvZHkgPSB7fVxuICAgICAgICAgICAgYm9keVtuYW1lXSA9IHZhbHVlXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgKGh0dHAucHV0SnNvbihgL2FwaS9sLyR7dGhpcy5zdGF0ZS5saXN0LnVybF9rZXl9L2AsIGJvZHkpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IGxpc3R9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25OZXdMaXN0KGxpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1maWVsZFwiPk5hbWU8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSduYW1lLWZvcm0taW5wdXQnIHZhbHVlPXt0aGlzLnN0YXRlID8gdGhpcy5zdGF0ZS5uYW1lIDogJyd9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICB9fSBvbkJsdXI9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkZlYXR1cmVDaGFuZ2VkKCduYW1lJywgdGhpcy5zdGF0ZS5uYW1lKTtcbiAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1maWVsZFwiPkRlc2NyaXB0aW9uPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0nbmFtZS1mb3JtLWlucHV0JyB2YWx1ZT17dGhpcy5zdGF0ZSA/IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Rlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICB9fSBvbktleVVwPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlICYmIGUua2V5ID09ICdFbnRlcicpIHRoaXMub25GZWF0dXJlQ2hhbmdlZCgnZGVzY3JpcHRpb24nLCB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH19Lz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWZpZWxkXCI+QXNzaWduYXRpb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYXNzaWduYXRpb24tY2hlY2tib3hcIiBjaGVja2VkPXshdGhpcy5zdGF0ZS5saXN0LmFzc2lnbmF0aW9uc09ufSB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IHRoaXMub25GZWF0dXJlQ2hhbmdlZCgnYXNzaWduYXRpb25zT24nLCAhZXZlbnQudGFyZ2V0LmNoZWNrZWQpO319Lz4gPHNwYW4gaHRtbEZvcj1cImFzc2lnbmF0aW9uLWNoZWNrYm94XCI+SGlkZSA8ZW0+QXNzaWduPC9lbT4gYnV0dG9uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZmllbGRcIj5EZWxldGUgYSB0YXNrPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxlbT5UbyBkZWxldGUgb25lIHRhc2ssIGp1c3QgdGFwIG9uIGl0IGFuZCBkZWxldGUgaXRzIHRleHQuPC9lbT48L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgIC5va0J1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzdweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5saXN0LWZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdEZvcm07Il19 */\n/*@ sourceURL=/Users/madewulf/Projects/perso/tasksUI/code/components/EditForm.js */"
      }));
    }
  }]);

  return EditForm;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditForm);

/***/ })

})
//# sourceMappingURL=list.js.a4bfe7820194a9b4e2cb.hot-update.js.map