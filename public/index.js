/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"pt-br\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Site de fotografias</title>\r\n    <link rel=\"stylesheet\" href=\"css/style.css\">\r\n    <script src=\"https://kit.fontawesome.com/38e1cddfcd.js\"></script>\r\n</head>\r\n\r\n<body class=\"no-js\">\r\n    \r\n    <header>\r\n        <nav class=\"navgation\">\r\n            <h1 class=\"logo\"><a href=\"index.html\">ModelStar</a></h1>\r\n            <button class=\"btn-menu\" style=\"display: none\"><i class=\"fas fa-bars\"></i></button>\r\n            <ul class=\"ul-menu\">\r\n                <li><a href=\"#\">Albuns</a></li>\r\n                <li><a href=\"#\">Sobre</a></li>\r\n                <li><a href=\"#\">Contato</a></li>\r\n            </ul>\r\n        </nav>\r\n        <h1 class=\"titulo\">Lorem ipsom</h1>\r\n        \r\n    </header>\r\n    <span></span>\r\n    <main class=\"corpo\">\r\n       \r\n        <section class=\"sec-text\">\r\n            <article class=\"art-sec-text\">\r\n                <h3>Lorem ipsum</h3>\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum minus modi. Distinctio atque\r\n                    nihil dolore excepturi consequatur exercitationem animi quaerat, nostrum debitis repellat ad magni\r\n                    delectus aspernatur ut quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae ad\r\n                    vero minima aspernatur dolor iusto nam blanditiis, qui tempore ullam dolorem corrupti, laborum\r\n                    asperiores repudiandae explicabo magnam. Quidem, odit.</p>\r\n            </article>\r\n\r\n            <article class=\"art-sec-text\">\r\n                <h3>Lorem ipsum</h3>\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum minus modi. Distinctio atque\r\n                    nihil dolore excepturi consequatur exercitationem animi quaerat, nostrum debitis repellat ad magni\r\n                    delectus aspernatur ut quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae ad\r\n                    vero minima aspernatur dolor iusto nam blanditiis, qui tempore ullam dolorem corrupti, laborum\r\n                    asperiores repudiandae explicabo magnam. Quidem, odit.</p>\r\n            </article>\r\n\r\n            <article class=\"art-sec-text\">\r\n                <h3>Lorem ipsum.</h3>\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum minus modi. Distinctio atque\r\n                    nihil dolore excepturi consequatur exercitationem animi quaerat, nostrum debitis repellat ad magni\r\n                    delectus aspernatur ut quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae ad\r\n                    vero minima aspernatur dolor iusto nam blanditiis, qui tempore ullam dolorem corrupti, laborum\r\n                    asperiores repudiandae explicabo magnam. Quidem, odit.</p>\r\n            </article>\r\n\r\n        </section>\r\n\r\n        <p >Veja mais</p>\r\n\r\n        <section class=\"sec-img\">\r\n            <article class=\"art-sec-img\">\r\n                <img src=\"" + __webpack_require__(2) + "\" alt=\"Mulher em um rio se divertindo com bolas de sabão\">\r\n                <cite>https://www.pexels.com/pt-br/foto/agua-ao-ar-livre-arvores-atraente-1962840/</cite>\r\n            </article>\r\n\r\n            <article  class=\"art-sec-img\">\r\n                <img src=\"" + __webpack_require__(3) + "\" alt=\"Mulher em um rio se divertindo com bolas de sabão\">\r\n                <cite>https://www.pexels.com/pt-br/foto/adulto-andando-ao-ar-livre-bermuda-jeans-1758143/</cite>\r\n            </article>\r\n\r\n            <article class=\"art-sec-img\">\r\n                <img src=\"" + __webpack_require__(4) + "\" alt=\"Mulher em um rio se divertindo com bolas de sabão\">\r\n                <cite>https://www.pexels.com/pt-br/foto/atraente-desgaste-femea-garotas-206385/</cite>\r\n            </article>\r\n        </section>\r\n\r\n    </main>\r\n\r\n    <footer>\r\n        <p>&copy; LAS Technology 2019</p>\r\n        <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\r\n        <a href=\"#\"><i class=\"fab fa-facebook-square\"></i></a>\r\n        <a href=\"#\"><i class=\"fab fa-youtube\"></i></a>\r\n    </footer>\r\n\r\n    <script src=\"javascript/menu.js\">\r\n\r\n    </script>\r\n</body>\r\n\r\n</html>";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "46f6e1b0430d985b7757742bbf22dfc7.jpg";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a5898b25ab2665b35f29ec9335aa5241.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b49c7022613a0b431d8ac51a6f4acb08.jpeg";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

const $body = document.querySelector("body");
const $btn_menu = document.querySelector(".btn-menu");
const $ul_menu = document.querySelector(".ul-menu");
const min_width = 760;

let opened = false;

$body.classList.remove("no-js");
$body.classList.add("js");


$btn_menu.removeAttribute("style")

$btn_menu.addEventListener("click", openOrClose)

function openOrClose() {
    if (opened === false) {
        openMenu();
        opened = true;
        $body.style.overflow = "hidden"
    }
    else {
        closeMenu();
        opened = false;
        $body.style.overflow = "auto"
    }
}

function openMenu() {
    $ul_menu.style.visibility = "visible"
}

function closeMenu() {
    $ul_menu.style.visibility = "hidden"
}

window.addEventListener("resize", e => {
    if (window.innerWidth < min_width) {
        $ul_menu.style.visibility = "hidden";
        $body.style.overflow = "auto"
        opened = false;
    }
    else {
        $ul_menu.style.visibility = "visible";
        opened = true;
    }
})

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/assets/css/style.css
var style = __webpack_require__(0);

// EXTERNAL MODULE: ./src/assets/index.html
var assets = __webpack_require__(1);

// EXTERNAL MODULE: ./src/assets/javascript/menu.js
var menu = __webpack_require__(5);

// CONCATENATED MODULE: ./src/assets/index.js



// CONCATENATED MODULE: ./src/indexJS.js


/***/ })
/******/ ]);