webpackHotUpdate("static/development/pages/list.js",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/list")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=list.js.76bffd19e8565d28fd5b.hot-update.js.map