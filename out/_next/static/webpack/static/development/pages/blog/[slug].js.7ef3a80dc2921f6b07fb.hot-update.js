webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./components/ThemeToggle.tsx":
/*!************************************!*\
  !*** ./components/ThemeToggle.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/perryraskin/Desktop/development/raskin.me/components/ThemeToggle.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var ThemeToggle = function ThemeToggle(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  var setTheme = function setTheme(theme) {
    var htmlSelector = document.querySelector("html");

    if (theme === 'light') {
      window.localStorage.setItem('THEME', 'light');
      nookies__WEBPACK_IMPORTED_MODULE_4___default.a.set({}, 'THEME', 'light', {});
      htmlSelector === null || htmlSelector === void 0 ? void 0 : htmlSelector.classList.remove('mode-dark');
    } else {
      window.localStorage.setItem('THEME', 'dark');
      nookies__WEBPACK_IMPORTED_MODULE_4___default.a.set({}, 'THEME', 'dark', {});
      htmlSelector === null || htmlSelector === void 0 ? void 0 : htmlSelector.classList.add('mode-dark');
    }
  };

  return __jsx("div", {
    className: "leading-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("button", {
    className: "focus:outline-none dark:hidden",
    title: "Set dark theme",
    onClick: function onClick() {
      return setTheme("dark");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["Moon"], {
    className: "w-8 dark:hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("button", {
    className: "focus:outline-none hidden dark:block",
    title: "Set light theme",
    onClick: function onClick() {
      return setTheme("light");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["Sun"], {
    className: "w-8 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })));
};

ThemeToggle.getInitialProps = function _callee(ctx) {
  var req, userAgent;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = ctx.req;
          userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
          return _context.abrupt("return", {
            userAgent: userAgent
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeToggle);

/***/ })

})
//# sourceMappingURL=[slug].js.7ef3a80dc2921f6b07fb.hot-update.js.map