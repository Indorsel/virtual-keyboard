/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n\n    if (!fileMap) {\n      return [src.replace('.js', '.css')];\n    }\n\n    return fileMap.split(',').map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), 'g');\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split('?')[0];\n  }\n\n  if (!isUrlRequest(url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf('.css') > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener('error', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href, {\n    stripWWW: false\n  }); // eslint-disable-next-line array-callback-return\n\n  src.some(function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^https?:/i.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log('no window.document found, will not HMR CSS');\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log('[HMR] Detected local css modules. Reload all css');\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n/* eslint-disable */\n\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case '..':\n        accumulator.pop();\n        break;\n\n      case '.':\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  }, []).join('/');\n}\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf('//') !== -1 ? urlString.split('//')[0] + '//' : '';\n  var components = urlString.replace(new RegExp(protocol, 'i'), '').split('/');\n  var host = components[0].toLowerCase().replace(/\\.$/, '');\n  components[0] = '';\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/const/keyCodesEng.js":
/*!**********************************!*\
  !*** ./src/const/keyCodesEng.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyCodesEng\": () => (/* binding */ keyCodesEng)\n/* harmony export */ });\nconst keyCodesEng = [{\n  value: '`',\n  isShift: '~',\n  code: 'Backquote',\n  keyCode: '192',\n  group: 1\n}, {\n  value: '1',\n  isShift: '!',\n  code: 'Digit1',\n  keyCode: '49',\n  group: 1\n}, {\n  value: '2',\n  isShift: '@',\n  code: 'Digit2',\n  keyCode: '50',\n  group: 1\n}, {\n  value: '3',\n  isShift: '#',\n  code: 'Digit3',\n  keyCode: '51',\n  group: 1\n}, {\n  value: '4',\n  isShift: '$',\n  code: 'Digit4',\n  keyCode: '52',\n  group: 1\n}, {\n  value: '5',\n  isShift: '%',\n  code: 'Digit5',\n  keyCode: '53',\n  group: 1\n}, {\n  value: '6',\n  isShift: '^',\n  code: 'Digit6',\n  keyCode: '54',\n  group: 1\n}, {\n  value: '7',\n  isShift: '&',\n  code: 'Digit7',\n  keyCode: '55',\n  group: 1\n}, {\n  value: '8',\n  isShift: '*',\n  code: 'Digit8',\n  keyCode: '56',\n  group: 1\n}, {\n  value: '9',\n  isShift: '(',\n  code: 'Digit9',\n  keyCode: '57',\n  group: 1\n}, {\n  value: '0',\n  isShift: ')',\n  code: 'Digit0',\n  keyCode: '48',\n  group: 1\n}, {\n  value: '-',\n  isShift: '_',\n  code: 'Minus',\n  keyCode: '189',\n  group: 1\n}, {\n  value: '=',\n  isShift: '+',\n  code: 'Equal',\n  keyCode: '187',\n  group: 1\n}, {\n  value: '⬅ Backspace',\n  isShift: '⬅ Backspace',\n  code: 'Backspace',\n  className: 'specialKey',\n  keyCode: '8',\n  group: 1\n}, {\n  value: 'Tab',\n  isShift: 'Tab',\n  code: 'Tab',\n  className: 'specialKey',\n  keyCode: '9',\n  group: 2\n}, {\n  value: 'q',\n  isShift: 'Q',\n  code: 'KeyQ',\n  keyCode: '81',\n  group: 2\n}, {\n  value: 'w',\n  isShift: 'W',\n  code: 'KeyW',\n  keyCode: '87',\n  group: 2\n}, {\n  value: 'e',\n  isShift: 'E',\n  code: 'KeyE',\n  keyCode: '69',\n  group: 2\n}, {\n  value: 'r',\n  isShift: 'R',\n  code: 'KeyR',\n  keyCode: '82',\n  group: 2\n}, {\n  value: 't',\n  isShift: 'T',\n  code: 'KeyT',\n  keyCode: '84',\n  group: 2\n}, {\n  value: 'y',\n  isShift: 'Y',\n  code: 'KeyY',\n  keyCode: '89',\n  group: 2\n}, {\n  value: 'u',\n  isShift: 'U',\n  code: 'KeyU',\n  keyCode: '85',\n  group: 2\n}, {\n  value: 'i',\n  isShift: 'I',\n  code: 'KeyI',\n  keyCode: '73',\n  group: 2\n}, {\n  value: 'o',\n  isShift: 'O',\n  code: 'KeyO',\n  keyCode: '79',\n  group: 2\n}, {\n  value: 'p',\n  isShift: 'P',\n  code: 'KeyP',\n  keyCode: '80',\n  group: 2\n}, {\n  value: '[',\n  isShift: '{',\n  code: 'BracketLeft',\n  keyCode: '219',\n  group: 2\n}, {\n  value: ']',\n  isShift: '}',\n  code: 'BracketRight',\n  keyCode: '221',\n  group: 2\n}, {\n  value: 'Delete',\n  isShift: 'Delete',\n  code: 'Delete',\n  keyCode: '46',\n  group: 2\n}, {\n  value: 'Caps Lock',\n  isShift: 'Caps Lock',\n  code: 'CapsLock',\n  className: 'capsKey',\n  keyCode: '20',\n  group: 3\n}, {\n  value: 'a',\n  isShift: 'A',\n  code: 'KeyA',\n  keyCode: '65',\n  group: 3\n}, {\n  value: 's',\n  isShift: 'S',\n  code: 'KeyS',\n  keyCode: '83',\n  group: 3\n}, {\n  value: 'd',\n  isShift: 'D',\n  code: 'KeyD',\n  keyCode: '68',\n  group: 3\n}, {\n  value: 'f',\n  isShift: 'F',\n  code: 'KeyF',\n  keyCode: '70',\n  group: 3\n}, {\n  value: 'g',\n  isShift: 'G',\n  code: 'KeyG',\n  keyCode: '71',\n  group: 3\n}, {\n  value: 'h',\n  isShift: 'H',\n  code: 'KeyH',\n  keyCode: '72',\n  group: 3\n}, {\n  value: 'j',\n  isShift: 'J',\n  code: 'KeyJ',\n  keyCode: '74',\n  group: 3\n}, {\n  value: 'k',\n  isShift: 'K',\n  code: 'KeyK',\n  keyCode: '75',\n  group: 3\n}, {\n  value: 'l',\n  isShift: 'L',\n  code: 'KeyL',\n  keyCode: '76',\n  group: 3\n}, {\n  value: ';',\n  isShift: ':',\n  code: 'Semicolon',\n  keyCode: '186',\n  group: 3\n}, {\n  value: \"'\",\n  //single quote\n  isShift: '\"',\n  code: 'Quote',\n  keyCode: '222',\n  group: 3\n}, {\n  value: '\\\\',\n  isShift: '|',\n  code: 'Backslash',\n  keyCode: '220',\n  group: 3\n}, {\n  value: 'Enter',\n  isShift: 'Enter',\n  code: 'Enter',\n  className: 'enter',\n  keyCode: '13',\n  group: 3\n}, {\n  value: 'Shift',\n  //Shift  left/right\n  isShift: 'Shift',\n  code: 'ShiftLeft',\n  className: 'shift',\n  keyCode: '16',\n  group: 4\n}, {\n  value: 'z',\n  isShift: 'Z',\n  code: 'KeyZ',\n  keyCode: '90',\n  group: 4\n}, {\n  value: 'x',\n  isShift: 'X',\n  code: 'KeyX',\n  keyCode: '88',\n  group: 4\n}, {\n  value: 'c',\n  isShift: 'C',\n  code: 'KeyC',\n  keyCode: '67',\n  group: 4\n}, {\n  value: 'v',\n  isShift: 'V',\n  code: 'KeyV',\n  keyCode: '86',\n  group: 4\n}, {\n  value: 'b',\n  isShift: 'B',\n  code: 'KeyB',\n  keyCode: '66',\n  group: 4\n}, {\n  value: 'n',\n  isShift: 'N',\n  code: 'KeyN',\n  keyCode: '78',\n  group: 4\n}, {\n  value: 'm',\n  isShift: 'M',\n  code: 'KeyM',\n  keyCode: '77',\n  group: 4\n}, {\n  value: ',',\n  isShift: '<',\n  code: 'Comma',\n  keyCode: '188',\n  group: 4\n}, {\n  value: '.',\n  isShift: '>',\n  code: 'Period',\n  keyCode: '190',\n  group: 4\n}, {\n  value: '/',\n  isShift: '?',\n  code: 'Slash',\n  keyCode: '191',\n  group: 4\n}, {\n  value: 'Shift',\n  isShift: 'Shift',\n  code: 'ShiftRight',\n  className: 'shift',\n  keyCode: '16',\n  group: 4\n}, {\n  value: 'Ctrl',\n  isShift: 'Ctrl',\n  code: 'ControlLeft',\n  keyCode: '17',\n  group: 5\n}, {\n  value: 'Win',\n  isShift: 'Win',\n  code: 'MetaLeft',\n  keyCode: '91',\n  group: 5\n}, {\n  value: 'Alt',\n  isShift: 'Alt',\n  code: 'AltLeft',\n  keyCode: '18',\n  group: 5\n}, {\n  value: ' ',\n  isShift: ' ',\n  code: 'Space',\n  className: 'spaceKey',\n  keyCode: '32',\n  group: 5\n}, {\n  value: 'Alt',\n  isShift: 'Alt',\n  code: 'AltRight',\n  keyCode: '18',\n  group: 5\n}, {\n  value: 'Ctrl',\n  isShift: 'Ctrl',\n  code: 'ControlRight',\n  keyCode: '17',\n  group: 5\n}];\n\n//# sourceURL=webpack://virtual-keyboard/./src/const/keyCodesEng.js?");

/***/ }),

/***/ "./src/const/keyCodesRu.js":
/*!*********************************!*\
  !*** ./src/const/keyCodesRu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyCodesRu\": () => (/* binding */ keyCodesRu)\n/* harmony export */ });\nconst keyCodesRu = [{\n  value: 'ё',\n  isShift: 'Ё',\n  code: 'Backquote',\n  keyCode: '192',\n  group: 1\n}, {\n  value: '1',\n  isShift: '!',\n  code: 'Digit1',\n  keyCode: '49',\n  group: 1\n}, {\n  value: '2',\n  isShift: '\"',\n  code: 'Digit2',\n  keyCode: '50',\n  group: 1\n}, {\n  value: '3',\n  isShift: '№',\n  code: 'Digit3',\n  keyCode: '51',\n  group: 1\n}, {\n  value: '4',\n  isShift: ';',\n  code: 'Digit4',\n  keyCode: '52',\n  group: 1\n}, {\n  value: '5',\n  isShift: '%',\n  code: 'Digit5',\n  keyCode: '53',\n  group: 1\n}, {\n  value: '6',\n  isShift: ':',\n  code: 'Digit6',\n  keyCode: '54',\n  group: 1\n}, {\n  value: '7',\n  isShift: '?',\n  code: 'Digit7',\n  keyCode: '55',\n  group: 1\n}, {\n  value: '8',\n  isShift: '*',\n  code: 'Digit8',\n  keyCode: '56',\n  group: 1\n}, {\n  value: '9',\n  isShift: '(',\n  code: 'Digit9',\n  keyCode: '57',\n  group: 1\n}, {\n  value: '0',\n  isShift: ')',\n  code: 'Digit0',\n  keyCode: '48',\n  group: 1\n}, {\n  value: '-',\n  isShift: '_',\n  code: 'Minus',\n  keyCode: '189',\n  group: 1\n}, {\n  value: '=',\n  isShift: '+',\n  code: 'Equal',\n  keyCode: '187',\n  group: 1\n}, {\n  value: '⬅ Backspace',\n  isShift: '⬅ Backspace',\n  code: 'Backspace',\n  className: 'specialKey',\n  keyCode: '8',\n  group: 1\n}, {\n  value: 'Tab',\n  isShift: 'Tab',\n  code: 'Tab',\n  className: 'specialKey',\n  keyCode: '9',\n  group: 2\n}, {\n  value: 'й',\n  isShift: 'Й',\n  code: 'KeyQ',\n  keyCode: '81',\n  group: 2\n}, {\n  value: 'ц',\n  isShift: 'Ц',\n  code: 'KeyW',\n  keyCode: '87',\n  group: 2\n}, {\n  value: 'у',\n  isShift: 'У',\n  code: 'KeyE',\n  keyCode: '69',\n  group: 2\n}, {\n  value: 'к',\n  isShift: 'К',\n  code: 'KeyR',\n  keyCode: '82',\n  group: 2\n}, {\n  value: 'е',\n  isShift: 'Е',\n  code: 'KeyT',\n  keyCode: '84',\n  group: 2\n}, {\n  value: 'н',\n  isShift: 'Н',\n  code: 'KeyY',\n  keyCode: '89',\n  group: 2\n}, {\n  value: 'г',\n  isShift: 'Г',\n  code: 'KeyU',\n  keyCode: '85',\n  group: 2\n}, {\n  value: 'ш',\n  isShift: 'Ш',\n  code: 'KeyI',\n  keyCode: '73',\n  group: 2\n}, {\n  value: 'щ',\n  isShift: 'Щ',\n  code: 'KeyO',\n  keyCode: '79',\n  group: 2\n}, {\n  value: 'з',\n  isShift: 'З',\n  code: 'KeyP',\n  keyCode: '80',\n  group: 2\n}, {\n  value: 'х',\n  isShift: 'Х',\n  code: 'BracketLeft',\n  keyCode: '219',\n  group: 2\n}, {\n  value: 'ъ',\n  isShift: 'Ъ',\n  code: 'BracketRight',\n  keyCode: '221',\n  group: 2\n}, {\n  value: 'Delete',\n  isShift: 'Delete',\n  code: 'Delete',\n  keyCode: '46',\n  group: 2\n}, {\n  value: 'Caps Lock',\n  isShift: 'Caps Lock',\n  code: 'CapsLock',\n  className: 'capsKey',\n  keyCode: '20',\n  group: 3\n}, {\n  value: 'ф',\n  isShift: 'Ф',\n  code: 'KeyA',\n  keyCode: '65',\n  group: 3\n}, {\n  value: 'ы',\n  isShift: 'Ы',\n  code: 'KeyS',\n  keyCode: '83',\n  group: 3\n}, {\n  value: 'в',\n  isShift: 'В',\n  code: 'KeyD',\n  keyCode: '68',\n  group: 3\n}, {\n  value: 'а',\n  isShift: 'А',\n  code: 'KeyF',\n  keyCode: '70',\n  group: 3\n}, {\n  value: 'п',\n  isShift: 'П',\n  code: 'KeyG',\n  keyCode: '71',\n  group: 3\n}, {\n  value: 'р',\n  isShift: 'Р',\n  code: 'KeyH',\n  keyCode: '72',\n  group: 3\n}, {\n  value: 'о',\n  isShift: 'О',\n  code: 'KeyJ',\n  keyCode: '74',\n  group: 3\n}, {\n  value: 'л',\n  isShift: 'Л',\n  code: 'KeyK',\n  keyCode: '75',\n  group: 3\n}, {\n  value: 'д',\n  isShift: 'Д',\n  code: 'KeyL',\n  keyCode: '76',\n  group: 3\n}, {\n  value: 'ж',\n  isShift: 'Ж',\n  code: 'Semicolon',\n  keyCode: '186',\n  group: 3\n}, {\n  value: 'э',\n  isShift: 'Э',\n  code: 'Quote',\n  keyCode: '222',\n  group: 3\n}, {\n  value: '\\\\',\n  isShift: '/',\n  code: 'Backslash',\n  keyCode: '220',\n  group: 3\n}, {\n  value: 'Enter',\n  isShift: 'Enter',\n  code: 'Enter',\n  className: 'enter',\n  keyCode: '13',\n  group: 3\n}, {\n  value: 'Shift',\n  isShift: 'Shift',\n  code: 'ShiftLeft',\n  className: 'shift',\n  keyCode: '16',\n  group: 4\n}, {\n  value: 'я',\n  isShift: 'Я',\n  code: 'KeyZ',\n  keyCode: '90',\n  group: 4\n}, {\n  value: 'ч',\n  isShift: 'Ч',\n  code: 'KeyX',\n  keyCode: '88',\n  group: 4\n}, {\n  value: 'с',\n  isShift: 'С',\n  code: 'KeyC',\n  keyCode: '67',\n  group: 4\n}, {\n  value: 'м',\n  isShift: 'М',\n  code: 'KeyV',\n  keyCode: '86',\n  group: 4\n}, {\n  value: 'и',\n  isShift: 'И',\n  code: 'KeyB',\n  keyCode: '66',\n  group: 4\n}, {\n  value: 'т',\n  isShift: 'Т',\n  code: 'KeyN',\n  keyCode: '78',\n  group: 4\n}, {\n  value: 'ь',\n  isShift: 'Ь',\n  code: 'KeyM',\n  keyCode: '77',\n  group: 4\n}, {\n  value: 'б',\n  isShift: 'Б',\n  code: 'Comma',\n  keyCode: '188',\n  group: 4\n}, {\n  value: 'ю',\n  isShift: 'Ю',\n  code: 'Period',\n  keyCode: '190',\n  group: 4\n}, {\n  value: '.',\n  isShift: ',',\n  code: 'Slash',\n  keyCode: '191',\n  group: 4\n}, {\n  value: 'Shift',\n  isShift: 'Shift',\n  code: 'ShiftRight',\n  className: 'shift',\n  keyCode: '16',\n  group: 4\n}, {\n  value: 'Ctrl',\n  isShift: 'Ctrl',\n  code: 'ControlLeft',\n  keyCode: '17',\n  group: 5\n}, {\n  value: 'Win',\n  isShift: 'Win',\n  code: 'MetaLeft',\n  keyCode: '91',\n  group: 5\n}, {\n  value: 'Alt',\n  isShift: 'Alt',\n  code: 'AltLeft',\n  keyCode: '18',\n  group: 5\n}, {\n  value: ' ',\n  isShift: ' ',\n  code: 'Space',\n  className: 'spaceKey',\n  keyCode: '32',\n  group: 5\n}, {\n  value: 'Alt',\n  isShift: 'Alt',\n  code: 'AltRight',\n  keyCode: '18',\n  group: 5\n}, {\n  value: 'Ctrl',\n  isShift: 'Ctrl',\n  code: 'ControlRight',\n  keyCode: '17',\n  group: 5\n}];\n\n//# sourceURL=webpack://virtual-keyboard/./src/const/keyCodesRu.js?");

/***/ }),

/***/ "./src/const/languages.js":
/*!********************************!*\
  !*** ./src/const/languages.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RU\": () => (/* binding */ RU),\n/* harmony export */   \"EN\": () => (/* binding */ EN)\n/* harmony export */ });\nconst RU = 'ru';\nconst EN = 'en';\n\n//# sourceURL=webpack://virtual-keyboard/./src/const/languages.js?");

/***/ }),

/***/ "./src/const/notALetterArr.js":
/*!************************************!*\
  !*** ./src/const/notALetterArr.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notALetterArr\": () => (/* binding */ notALetterArr)\n/* harmony export */ });\nconst notALetterArr = ['BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period', 'Backquote'];\n\n//# sourceURL=webpack://virtual-keyboard/./src/const/notALetterArr.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Main */ \"./src/modules/Main.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/index.less\");\n\n\nconst init = new _modules_Main__WEBPACK_IMPORTED_MODULE_0__.Main();\ninit.render();\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/EventListeners.js":
/*!***************************************!*\
  !*** ./src/modules/EventListeners.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventListeners\": () => (/* binding */ EventListeners)\n/* harmony export */ });\n/* harmony import */ var _const_keyCodesEng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/keyCodesEng */ \"./src/const/keyCodesEng.js\");\n/* harmony import */ var _const_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/languages */ \"./src/const/languages.js\");\n/* harmony import */ var _utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/keyBindsUtils */ \"./src/utils/keyBindsUtils.js\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Keyboard */ \"./src/modules/Keyboard.js\");\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Key */ \"./src/modules/Key.js\");\n\n\n\n\n\n\nclass EventListeners {\n  constructor() {}\n\n  listeners() {\n    //вывод текста в textrea \n    window.addEventListener('keydown', function (event) {\n      let arr;\n      _const_keyCodesEng__WEBPACK_IMPORTED_MODULE_0__.keyCodesEng.forEach(el => {\n        if (el.keyCode == event.keyCode) {\n          arr = el;\n        }\n      });\n\n      if (arr != undefined) {\n        document.getElementById('keyboard_input').focus();\n        let key = (0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__.getLanguageKeys)().find(el => el.code === event.code);\n        event.preventDefault();\n        new _Key__WEBPACK_IMPORTED_MODULE_5__.Key(key).pressKey();\n      }\n    });\n    document.addEventListener('mousedown', function (event) {\n      if (event.target.id != 'keyboard_wrapper' && event.target.id != 'keyboard_input' && event.target.id != '') {\n        document.getElementById('keyboard_input').focus();\n        let key = (0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__.getLanguageKeys)().find(el => el.code === event.target.id);\n        event.preventDefault();\n        new _Key__WEBPACK_IMPORTED_MODULE_5__.Key(key).pressKey();\n      }\n    }); //добавление класса active кнопкам\n\n    let arr = [];\n    document.addEventListener('keydown', function (event) {\n      _const_keyCodesEng__WEBPACK_IMPORTED_MODULE_0__.keyCodesEng.forEach(el => {\n        if (el.keyCode == event.keyCode) {\n          arr.push(el);\n        }\n      });\n\n      if (arr.length !== 0) {\n        document.querySelector(`#${event.code}`).classList.add('active');\n      }\n    });\n    document.addEventListener('keyup', function (event) {\n      if (arr.length != 0) {\n        document.querySelector(`#${event.code}`).classList.remove('active');\n        arr.pop();\n      }\n    });\n    let activeChar; //переменная для того же элемента, по которому кликнули, чтобы форма клавиши возвращалась\n\n    document.addEventListener('mousedown', function (event) {\n      if (event.target.id != 'keyboard_wrapper' && event.target.id != 'keyboard_input' && event.target.id != '') {\n        activeChar = document.querySelector(`#${event.target.id}`);\n        document.querySelector(`#${event.target.id}`).classList.add('active');\n      }\n    });\n    document.addEventListener('mouseup', function (event) {\n      if (activeChar != undefined) {\n        activeChar.classList.remove('active');\n      }\n    }); //переключение языка\n\n    document.addEventListener('keydown', function (event) {\n      if ((event.shiftKey || event.ctrlKey) && event.altKey) {\n        if ((0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_1__.EN) {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('lang', _const_languages__WEBPACK_IMPORTED_MODULE_1__.RU);\n        } else {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('lang', _const_languages__WEBPACK_IMPORTED_MODULE_1__.EN);\n        }\n\n        let keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_4__.Keyboard((0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__.getCapsKeys)());\n        keyboard.render();\n      }\n    }); //CapsLock\n\n    document.addEventListener('keydown', function (event) {\n      if (event.code === 'CapsLock') {\n        if ((0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.get)('isCapsLock') === 'false') {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isCapsLock', 'true');\n        } else {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isCapsLock', 'false');\n        } // const capsLockOption = get('isCapsLock');\n        // set('isCapsLock', !capsLockOption)\n\n\n        let keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_4__.Keyboard((0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__.getCapsKeys)());\n        keyboard.render();\n      }\n    });\n    let shiftOn = false; // флаг для одного действия shift в keydown \n    //Shift подписка\n\n    document.addEventListener('keydown', function (event) {\n      if (shiftOn === false) {\n        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\n          if ((0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.get)('isShift') === 'false') {\n            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isShift', 'true');\n          } else {\n            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isShift', 'false');\n          }\n\n          let keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_4__.Keyboard((0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__.getShiftKeys)());\n          keyboard.render();\n        }\n      }\n\n      shiftOn = true;\n    }); //Shift отписка\n\n    document.addEventListener('keyup', function (event) {\n      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\n        if ((0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.get)('isShift') === 'false') {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isShift', 'true');\n        } else {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isShift', 'false');\n        }\n\n        let keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_4__.Keyboard((0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__.getShiftKeys)());\n        keyboard.render();\n      }\n\n      shiftOn = false;\n    }); //переключение языка на Win по клику мышкой\n\n    document.addEventListener('click', function (event) {\n      if (event.target.id === 'MetaLeft') {\n        if ((0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_1__.EN) {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('lang', _const_languages__WEBPACK_IMPORTED_MODULE_1__.RU);\n        } else {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('lang', _const_languages__WEBPACK_IMPORTED_MODULE_1__.EN);\n        }\n\n        let keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_4__.Keyboard((0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__.getShiftKeys)());\n        keyboard.render();\n      } //CapsLock\n\n\n      if (event.target.id === 'CapsLock') {\n        if ((0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.get)('isCapsLock') === 'false') {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isCapsLock', 'true');\n        } else {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isCapsLock', 'false');\n        }\n\n        let keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_4__.Keyboard((0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__.getCapsKeys)());\n        keyboard.render();\n      } //Shift\n\n\n      if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {\n        if ((0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.get)('isShift') === 'false') {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isShift', 'true');\n        } else {\n          (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__.set)('isShift', 'false');\n        }\n\n        let keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_4__.Keyboard((0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_2__.getShiftKeys)());\n        keyboard.render();\n      }\n    });\n  }\n\n  isListenersOn() {\n    this.listeners();\n  }\n\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/modules/EventListeners.js?");

/***/ }),

/***/ "./src/modules/Key.js":
/*!****************************!*\
  !*** ./src/modules/Key.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Key\": () => (/* binding */ Key)\n/* harmony export */ });\nclass Key {\n  constructor(value) {\n    this.value = value;\n  }\n\n  writingInTextarea(char) {\n    let textarea = document.getElementById('keyboard_input');\n    let textArr = Array.from(textarea.textContent);\n    let currentCursor = textarea.selectionEnd;\n    setTimeout(() => {\n      textarea.focus();\n      textarea.selectionStart = currentCursor;\n    }, 0);\n\n    switch (char?.code) {\n      case 'CapsLock':\n        break;\n\n      case 'ShiftLeft':\n        break;\n\n      case 'ShiftRight':\n        break;\n\n      case 'ControlLeft':\n        break;\n\n      case 'ControlRight':\n        break;\n\n      case 'AltLeft':\n        break;\n\n      case 'AltRight':\n        break;\n\n      case 'MetaLeft':\n        break;\n\n      case 'Delete':\n        if (currentCursor < textArr.length) {\n          textArr.splice(currentCursor, 1);\n        }\n\n        break;\n\n      case 'Backspace':\n        if (currentCursor > 0) {\n          currentCursor--;\n          textArr.splice(currentCursor, 1);\n        }\n\n        break;\n\n      case 'Enter':\n        textArr.splice(currentCursor, 0, '\\n');\n        currentCursor++;\n        break;\n\n      case 'Tab':\n        textArr.splice(currentCursor, 0, '  ');\n        currentCursor += 2;\n        break;\n\n      default:\n        textArr.splice(currentCursor, 0, char?.value);\n        currentCursor++;\n        break;\n    }\n\n    textarea.textContent = textArr.join('');\n  }\n\n  pressKey() {\n    this.writingInTextarea(this.value);\n  }\n\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/modules/Key.js?");

/***/ }),

/***/ "./src/modules/Keyboard.js":
/*!*********************************!*\
  !*** ./src/modules/Keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nclass Keyboard {\n  constructor(keyList) {\n    this.keyList = keyList;\n  }\n\n  checkKeyboard() {\n    if (document.getElementById('keyboard_wrapper')) {\n      document.getElementById('keyboard_wrapper').remove();\n    }\n  }\n\n  generationOfKeyboard(arr) {\n    const wrapper = this.addKeyboardWrapper();\n    let startRowGroup = 1;\n    arr.forEach(el => {\n      if (el.group !== startRowGroup) {\n        startRowGroup++;\n        wrapper.innerHTML += '<div class=\"clearBox\">';\n      }\n\n      const keyboardElement = document.createElement('div');\n      keyboardElement.innerText = el.value;\n      keyboardElement.id = el.code;\n      keyboardElement.classList.add('key');\n      el.className != 'specialKey' ? el.className : keyboardElement.classList.add('special');\n      el.className != 'capsKey' ? el.className : keyboardElement.classList.add('special_3row');\n      el.className != 'enter' ? el.className : keyboardElement.classList.add('special_3row');\n      el.className != 'spaceKey' ? el.className : keyboardElement.classList.add('space');\n      el.className != 'shift' ? el.className : keyboardElement.classList.add('shift');\n      wrapper.append(keyboardElement);\n    });\n  }\n\n  addKeyboardWrapper() {\n    const keyboardWrapper = document.createElement('div');\n    keyboardWrapper.id = 'keyboard_wrapper';\n    document.body.append(keyboardWrapper);\n    return keyboardWrapper;\n  }\n\n  render() {\n    this.checkKeyboard();\n    this.generationOfKeyboard(this.keyList);\n  }\n\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/modules/Keyboard.js?");

/***/ }),

/***/ "./src/modules/Main.js":
/*!*****************************!*\
  !*** ./src/modules/Main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keyboard */ \"./src/modules/Keyboard.js\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Textarea */ \"./src/modules/Textarea.js\");\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Key */ \"./src/modules/Key.js\");\n/* harmony import */ var _EventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventListeners */ \"./src/modules/EventListeners.js\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.js\");\n/* harmony import */ var _utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/keyBindsUtils */ \"./src/utils/keyBindsUtils.js\");\n/* harmony import */ var _const_languages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const/languages */ \"./src/const/languages.js\");\n\n\n\n\n\n\n\nclass Main {\n  defaultSettings() {\n    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.set)('lang', _const_languages__WEBPACK_IMPORTED_MODULE_6__.EN); //установка начального языка в локал сторадже\n\n    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.set)('isCapsLock', 'false');\n    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.set)('isShift', 'false');\n  }\n\n  render() {\n    const textarea = new _Textarea__WEBPACK_IMPORTED_MODULE_1__.Textarea();\n    textarea.render(); //отрисовка textarea\n\n    this.defaultSettings();\n    const keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_0__.Keyboard((0,_utils_keyBindsUtils__WEBPACK_IMPORTED_MODULE_5__.getLanguageKeys)());\n    keyboard.render(); //рендер клавиатуры\n\n    const eventListeners = new _EventListeners__WEBPACK_IMPORTED_MODULE_3__.EventListeners();\n    eventListeners.isListenersOn(); //отлов событий\n\n    const pressKey = new _Key__WEBPACK_IMPORTED_MODULE_2__.Key();\n    pressKey.pressKey(); //вывод текста в textarea\n  }\n\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/modules/Main.js?");

/***/ }),

/***/ "./src/modules/Textarea.js":
/*!*********************************!*\
  !*** ./src/modules/Textarea.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Textarea\": () => (/* binding */ Textarea)\n/* harmony export */ });\nclass Textarea {\n  constructor() {\n    this.element = document.createElement('textarea');\n  }\n\n  createTextarea() {\n    const textarea = this.element;\n    textarea.id = 'keyboard_input';\n    document.body.append(textarea);\n  }\n\n  render() {\n    this.createTextarea();\n  }\n\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/modules/Textarea.js?");

/***/ }),

/***/ "./src/utils/keyBindsUtils.js":
/*!************************************!*\
  !*** ./src/utils/keyBindsUtils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLanguageKeys\": () => (/* binding */ getLanguageKeys),\n/* harmony export */   \"getCapsKeys\": () => (/* binding */ getCapsKeys),\n/* harmony export */   \"getShiftKeys\": () => (/* binding */ getShiftKeys)\n/* harmony export */ });\n/* harmony import */ var _const_keyCodesEng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/keyCodesEng */ \"./src/const/keyCodesEng.js\");\n/* harmony import */ var _const_keyCodesRu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/keyCodesRu */ \"./src/const/keyCodesRu.js\");\n/* harmony import */ var _const_notALetterArr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/notALetterArr */ \"./src/const/notALetterArr.js\");\n/* harmony import */ var _const_languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/languages */ \"./src/const/languages.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ \"./src/utils/storage.js\");\n\n\n\n\n\nconst getLanguageKeys = () => {\n  if ((0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_3__.EN) {\n    return _const_keyCodesEng__WEBPACK_IMPORTED_MODULE_0__.keyCodesEng;\n  } else {\n    return _const_keyCodesRu__WEBPACK_IMPORTED_MODULE_1__.keyCodesRu;\n  }\n};\nconst getCapsKeys = () => {\n  let capsArr;\n\n  if ((0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_3__.EN) {\n    capsArr = _const_keyCodesEng__WEBPACK_IMPORTED_MODULE_0__.keyCodesEng;\n  } else {\n    capsArr = _const_keyCodesRu__WEBPACK_IMPORTED_MODULE_1__.keyCodesRu;\n  }\n\n  capsArr.forEach(el => {\n    if ((0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('isCapsLock') === 'true') {\n      if (el.code.includes('Key') === true || (0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_3__.RU && _const_notALetterArr__WEBPACK_IMPORTED_MODULE_2__.notALetterArr.includes(el.code)) {\n        el.value = el.value.toUpperCase();\n      }\n\n      return el;\n    } else {\n      if (el.code.includes('Key') === true || (0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_3__.RU && _const_notALetterArr__WEBPACK_IMPORTED_MODULE_2__.notALetterArr.includes(el.code)) {\n        el.value = el.value.toLowerCase();\n      }\n\n      return el;\n    }\n  });\n  return capsArr;\n};\nconst getShiftKeys = () => {\n  let shiftArr;\n\n  if ((0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_3__.EN) {\n    shiftArr = _const_keyCodesEng__WEBPACK_IMPORTED_MODULE_0__.keyCodesEng;\n  } else {\n    shiftArr = _const_keyCodesRu__WEBPACK_IMPORTED_MODULE_1__.keyCodesRu;\n  }\n\n  shiftArr.forEach(el => {\n    if ((0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('isCapsLock') === 'true') {\n      if ((0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('isShift') === 'true') {\n        if (el.code.includes('Key') === true || (0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_3__.RU && _const_notALetterArr__WEBPACK_IMPORTED_MODULE_2__.notALetterArr.includes(el.code)) {\n          el.value = el.value.toLowerCase();\n        } else {\n          [el.value, el.isShift] = [el.isShift, el.value];\n        }\n\n        return el;\n      } else {\n        if (el.code.includes('Key') === true || (0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_3__.RU && _const_notALetterArr__WEBPACK_IMPORTED_MODULE_2__.notALetterArr.includes(el.code)) {\n          el.value = el.value.toUpperCase();\n        } else {\n          [el.value, el.isShift] = [el.isShift, el.value];\n        }\n\n        return el;\n      }\n    } else {\n      if ((0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('isShift') === 'true') {\n        if (el.code.includes('Key') === true || (0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_3__.RU && _const_notALetterArr__WEBPACK_IMPORTED_MODULE_2__.notALetterArr.includes(el.code)) {\n          el.value = el.value.toUpperCase();\n        } else {\n          [el.value, el.isShift] = [el.isShift, el.value];\n        }\n\n        return el;\n      } else {\n        if (el.code.includes('Key') === true || (0,_storage__WEBPACK_IMPORTED_MODULE_4__.get)('lang') === _const_languages__WEBPACK_IMPORTED_MODULE_3__.RU && _const_notALetterArr__WEBPACK_IMPORTED_MODULE_2__.notALetterArr.includes(el.code)) {\n          el.value = el.value.toLowerCase();\n        } else {\n          [el.value, el.isShift] = [el.isShift, el.value];\n        }\n\n        return el;\n      }\n    }\n  });\n  return shiftArr;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./src/utils/keyBindsUtils.js?");

/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"set\": () => (/* binding */ set),\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"clearStorage\": () => (/* binding */ clearStorage)\n/* harmony export */ });\nfunction set(name, value) {\n  window.localStorage.setItem(name, JSON.stringify(value)); //stringify объект в json строку преобразует\n}\nfunction get(name, outValue = null) {\n  return JSON.parse(window.localStorage.getItem(name) || outValue); //parse обратно из json строки в объект\n}\nfunction clearStorage(name) {\n  localStorage.removeItem(name);\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/utils/storage.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1617892145564\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://virtual-keyboard/./src/index.less?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("be04a29808dd3960013f")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "virtual-keyboard:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				const oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatevirtual_keyboard"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;