(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_post_jsx"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./resources/js/Components/Layout.jsx":
/*!********************************************!*\
  !*** ./resources/js/Components/Layout.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = title;
  }, [title]);

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n,
      _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      types = _usePage$props.types,
      categories = _usePage$props.categories,
      loggedIn = _usePage$props.loggedIn,
      useTypes = !document.location.pathname.includes('/post/') && !document.location.pathname.includes('/survey/');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(types && types[0] ? types[0].name : ''),
      _useState2 = _slicedToArray(_useState, 2),
      currentType = _useState2[0],
      setcurrentType = _useState2[1];

  document.CC = currentType;
  document.CCId = types[0].id;

  var changeLanguage = function changeLanguage(event) {
    i18n.changeLanguage(event.target.value);
  };

  var setCategory = function setCategory(cat, cat_id) {
    if (useTypes) {
      document.CCId = cat_id;
      document.changedCat(cat, cat_id);
      setcurrentType(cat);
    }
  };

  var logOut = function logOut() {
    document.querySelector('a.btnLogout').click();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "custom-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.InertiaLink, {
    className: "navbar-brand",
    href: "\\"
  }, "Health 101"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "navbar-nav me-auto"
  }, categories.map(function (c, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.InertiaLink, {
      className: "nav-link ".concat(document.location.pathname.includes(c.slug) ? 'active' : ''),
      href: "/Category/".concat(c.slug)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: i18n.language != 'en' ? 'hidden' : ''
    }, c.EN_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: i18n.language != 'es' ? 'hidden' : ''
    }, c.ES_name)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "navbar-text lang-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/dashboard",
    className: "text-sm text-gray-700 underline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "inline bi bi-speedometer mr-2",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "text-sm text-gray-700",
    onClick: logOut
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "inline mr-2 bi bi-door-open",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/dashboard",
    className: "text-sm text-gray-700 underline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "inline bi bi-speedometer mr-2",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: i18n.language == 'en' ? 'active' : '',
    onClick: function onClick() {
      return i18n.changeLanguage('en');
    }
  }, "En"), "|", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: i18n.language == 'es' ? 'active' : '',
    onClick: function onClick() {
      return i18n.changeLanguage('es');
    }
  }, "Es")))))), useTypes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex bg-light",
    id: "usrLevels"
  }, types.map(function (t) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: t.name,
      onClick: function onClick() {
        return setCategory(t.name, t.id);
      },
      className: t.name === currentType ? 'selected' : ''
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: i18n.language != 'en' ? 'hidden' : ''
    }, t.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: i18n.language != 'es' ? 'hidden' : ''
    }, t.nameES));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: "bg-dark text-white text-center p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: ""
  }, "Health 101"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-3 footer-links d-flex flex-column flex-md-row"
  })));
}

/***/ }),

/***/ "./resources/js/Components/PostMini.jsx":
/*!**********************************************!*\
  !*** ./resources/js/Components/PostMini.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostMini)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function PostMini(_ref) {
  var name = _ref.name,
      extract = _ref.extract,
      slug = _ref.slug,
      image = _ref.image;
  var sandbox = document.createElement('div');
  sandbox.innerHTML = extract;
  extract = sandbox.innerText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card post-card sub-post ms-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image,
    alt: "similar post image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, extract, " ..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "custom-card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: slug,
    className: "btn btn-sm btn-custom-light"
  }, "Read more"))));
}

/***/ }),

/***/ "./resources/js/Pages/post.jsx":
/*!*************************************!*\
  !*** ./resources/js/Pages/post.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layout */ "./resources/js/Components/Layout.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _Components_PostMini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/PostMini */ "./resources/js/Components/PostMini.jsx");






var Home = function Home() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props,
      p = _usePage$props.p,
      similar = _usePage$props.similar;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var post = p.post;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    "aria-label": "breadcrumb",
    className: "mt-4 mt-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    className: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "breadcrumb-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
    href: "/"
  }, t('home'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "breadcrumb-item active",
    "aria-current": "page"
  }, i18n.language === 'en' ? post.name : post.name_ES))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container mt-4 mt-md-1 col-12 col-lg-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: post.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "post-card details p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, i18n.language === 'en' ? post.name : post.name_ES), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: i18n.language === 'en' ? post.content : post.content_ES
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-4",
    id: "left"
  }, similar.map(function (s, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_PostMini__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: i,
      name: i18n.language === 'en' ? s.name : s.name_ES,
      slug: s.slug,
      image: s.image,
      extract: (i18n.language === 'en' ? s.content : s.content_ES).split(' ').filter(function (_, i) {
        return i < 10;
      }).join(" ")
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container col-12 d-none"
  })));
};

Home.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: page,
    title: "Health 101 - " + page.props.p.post.name
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/useTranslation.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/useTranslation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTranslation": () => (/* binding */ useTranslation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/es/utils.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i18nFromProps = props.i18n;

  var _ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.I18nContext) || {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0,_context__WEBPACK_IMPORTED_MODULE_3__.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context__WEBPACK_IMPORTED_MODULE_3__.ReportNamespaces();

  if (!i18n) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warnOnce)('You will need to pass in an i18next instance by using initReactI18next');

    var notReadyT = function notReadyT(k) {
      return Array.isArray(k) ? k[k.length - 1] : k;
    };

    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }

  if (i18n.options.react && i18n.options.react.wait !== undefined) (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warnOnce)('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');

  var i18nOptions = _objectSpread(_objectSpread(_objectSpread({}, (0,_context__WEBPACK_IMPORTED_MODULE_3__.getDefaults)()), i18n.options.react), props);

  var useSuspense = i18nOptions.useSuspense;
  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.hasLoadedNamespace)(n, i18n, i18nOptions);
  });

  function getT() {
    return {
      t: i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0])
    };
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getT()),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1];

  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore;
    isMounted.current = true;

    if (!ready && !useSuspense) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__.loadNamespaces)(i18n, namespaces, function () {
        if (isMounted.current) setT(getT());
      });
    }

    function boundReset() {
      if (isMounted.current) setT(getT());
    }

    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return function () {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [namespaces.join()]);
  var ret = [t.t, i18n, ready];
  ret.t = t.t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(function (resolve) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.loadNamespaces)(i18n, namespaces, function () {
      resolve();
    });
  });
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "warnOnce": () => (/* binding */ warnOnce),
/* harmony export */   "loadNamespaces": () => (/* binding */ loadNamespaces),
/* harmony export */   "hasLoadedNamespace": () => (/* binding */ hasLoadedNamespace),
/* harmony export */   "getDisplayName": () => (/* binding */ getDisplayName)
/* harmony export */ });
function warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}
var alreadyWarned = {};
function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
}
function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  });
}
function hasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  };

  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ })

}]);