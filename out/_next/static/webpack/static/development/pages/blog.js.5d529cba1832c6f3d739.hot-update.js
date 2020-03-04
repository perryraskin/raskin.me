webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.tsx":
/*!************************!*\
  !*** ./pages/blog.tsx ***!
  \************************/
/*! exports provided: reformatDate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reformatDate", function() { return reformatDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section */ "./components/Section.tsx");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BlogPostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogPostCard */ "./components/BlogPostCard.tsx");
var _jsxFileName = "/Users/perryraskin/Desktop/development/raskin.me/pages/blog.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function reformatDate(fullDate) {
  var date = new Date(fullDate);
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  });
}

var Blog = function Blog(_ref) {
  var posts = _ref.posts;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("meta", {
    name: "description",
    content: "About me, my projects, and my blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Perry Raskin | Blog")), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Blog"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "This is my personal blog. I hope to share what I'm learning, along with ideas I'm passionate about. Feel free to share your thoughts or ask questions!")), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extend: "mt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap -mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, posts.map(function (post) {
    var title = post.document.data.title; //const timeToRead = post.timeToRead;

    var subtitle = post.document.data.subtitle;
    var slug = post.slug;
    var date = post.document.data.date;
    return __jsx(_components_BlogPostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: slug,
      title: title,
      subtitle: subtitle,
      timeToRead: "2",
      slug: "/blog/".concat(slug),
      date: reformatDate(date),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    });
  }))));
};

Blog.getInitialProps = function (async) {
  // ctx contains the query param
  // get all .md files from the src/posts dir
  var posts = function (context) {
    // grab all the files matching this context
    var keys = context.keys(); // grab the values from these files

    var values = keys.map(context); // go through each file

    var data = keys.map(function (key, index) {
      // Create slug from filename
      var slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.'); // get the current file value

      var value = values[index]; // Parse frontmatter & markdownbody for the current file

      var document = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(value["default"]); // return the .md content & pretty slug

      return {
        document: document,
        slug: slug
      };
    }); // return all the posts

    return data;
  }(__webpack_require__("./posts sync recursive \\.md$"));

  return {
    posts: posts
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.5d529cba1832c6f3d739.hot-update.js.map