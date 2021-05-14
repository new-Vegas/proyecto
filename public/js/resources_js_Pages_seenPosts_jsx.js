(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_seenPosts_jsx"],{

/***/ "./resources/js/Pages/seenPosts.jsx":
/*!******************************************!*\
  !*** ./resources/js/Pages/seenPosts.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postsSeen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

window.pc = [];
function postsSeen(posts) {
  var i,
      seen = 0;

  for (i = 0; i < pc.length; i++) {
    if (pc[i] == posts.id) seen++;
  }

  if (seen != 1) pc[pc.length++] = posts.id;
  console.log(pc);
}

/***/ })

}]);