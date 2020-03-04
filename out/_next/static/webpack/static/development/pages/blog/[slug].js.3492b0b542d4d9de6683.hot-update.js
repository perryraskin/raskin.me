webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Section */ "./components/Section.tsx");
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blog */ "./pages/blog.tsx");
/* harmony import */ var _styles_prism_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/prism-theme.css */ "./styles/prism-theme.css");
/* harmony import */ var _styles_prism_theme_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_prism_theme_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_markdown_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/markdown.css */ "./styles/markdown.css");
/* harmony import */ var _styles_markdown_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_markdown_css__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "/Users/perryraskin/Desktop/development/raskin.me/pages/blog/[slug].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n  overflow-x: auto;\n  border-radius: 3px;\n\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n  font-family: 'Courier New', Courier, monospace;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  font-size: 90%;\n  line-height: 1.2em;\n  font-family: Monaco, Consolas, \"Andale Mono\", \"DejaVu Sans Mono\", monospace;\n\n  display: inline; \n  color: #555555;\n  padding: 1em 1em;\n  background: #f4f4f4;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Blockquote = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].blockquote.attrs({
  className: "my-8 py-4 px-4 bg-white border-l-2 border-primary-700 text-primary-900 shadow rounded-lg"
})(_templateObject());
var OrderedList = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].ol.attrs({
  className: "list-disc bg-white text-primary-900 my-6 py-4 pl-12 pr-6 rounded-lg shadow"
})(_templateObject2());
var Code = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].code(_templateObject3());
var Pre = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].pre(_templateObject4());

var BlogTemplate = function BlogTemplate(_ref) {
  var result = _ref.result;
  // data from getInitialProps
  var markdownBody = result.content;
  var frontmatter = result.data;

  var Converter = __webpack_require__(/*! react-showdown */ "./node_modules/react-showdown/lib/index.js").Converter;

  var converter = new Converter();
  var reactElement = converter.convert(markdownBody);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("meta", {
    name: "description",
    content: "About me, my projects, and my blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, frontmatter.title)), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("article", {
    className: "mb-10 markdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("h1", {
    className: "text-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, frontmatter.title)), __jsx("div", {
    className: "mb-5 my-auto text-sm font-semibold text-neutral-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, Object(_blog__WEBPACK_IMPORTED_MODULE_9__["reformatDate"])(frontmatter.date)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    source: markdownBody,
    renderers: {
      blockquote: Blockquote,
      pre: Pre,
      list: OrderedList
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })))));
};

BlogTemplate.getInitialProps = function _callee(ctx) {
  var slug, content, result;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // ctx contains the query param
          slug = ctx.query.slug; // grab the file in the posts dir based on the slug

          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(__webpack_require__("./posts lazy recursive ^\\.\\/.*\\.md$")("./".concat(slug, ".md")));

        case 3:
          content = _context.sent;
          // also grab the config file so we can pass down siteTitle
          //const config = await import(`../../data/config.json`)
          //gray-matter parses the yaml frontmatter from the md body
          result = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(content["default"]);
          console.log("result:", result);
          return _context.abrupt("return", {
            result: {
              content: result.content,
              data: {
                title: result.data.title,
                date: result.data.date,
                subtitle: result.data.subtitle
              }
            }
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlogTemplate);

/***/ })

})
//# sourceMappingURL=[slug].js.3492b0b542d4d9de6683.hot-update.js.map