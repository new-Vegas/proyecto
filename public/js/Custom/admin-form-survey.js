/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./resources/js/Custom/admin-form-survey.js ***!
  \**************************************************/
alert(0);
document.getElementById('addQuestionBtn').addEventListener('click', function () {
  document.getElementById('questionsContainer').innerHTML += questionElm();
  var lastQ = document.querySelector('#questionsContainer .question');
  lastQ = lastQ[lastQ.length - 1];
  var expandableSec = lastQ.querySelector('div.expand');
  lastQ.querySelector('[qtype]').addEventListener('change', function (e) {
    lastQ.type = e.currentTarget.value;
    var newHTML = '';

    switch (lastQ.type) {
      case 'radio':
        break;

      case 'select':
        newHTML = choisesSection();
        break;

      case 'text':
        newHTML = choiseInput();
        break;

      case 'number':
        break;

      case 'checkbox':
        break;

      default:
        break;
    }

    expandableSec.innerHTML = newHTML;
  });
});
/******/ })()
;