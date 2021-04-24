(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_filter_jsx"],{

/***/ "./resources/js/Pages/filter.jsx":
/*!***************************************!*\
  !*** ./resources/js/Pages/filter.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var filterPosts = function filterPosts(posts, query) {
  if (!query) {
    return posts;
  }

  return posts.filter(function (post) {
    return post.includes(query);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterPosts);

/***/ })

}]);