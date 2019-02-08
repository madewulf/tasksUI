webpackHotUpdate("static/development/pages/list.js",{

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
    console.log('getting cookie from headers', token);
  } else if (typeof document != 'undefined') {
    token = getCookie(document.cookie, 'x-tasklist-token');
    console.log('getting cookie from document', token);
  }

  return token;
}
function logout() {
  document.cookie = x - tasklist - token + '=; Max-Age=-99999999;';
  document.location = '/';
}
/* harmony default export */ __webpack_exports__["default"] = (getToken);

/***/ })

})
//# sourceMappingURL=list.js.a44538f2ea82e880f89a.hot-update.js.map