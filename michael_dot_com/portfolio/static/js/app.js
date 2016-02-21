/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var lazyImages, menu;

	menu = __webpack_require__(1);

	lazyImages = __webpack_require__(2);

	menu.init();

	lazyImages.search();


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  headerClass: "nav-mobile",
	  init: function() {
	    return $("body").on("click", ".nav-mobile-menu-trigger", (function(_this) {
	      return function(e) {
	        e.preventDefault();
	        return _this.toggleMenu();
	      };
	    })(this));
	  },
	  toggleMenu: function() {
	    return $("." + this.headerClass).toggleClass(this.headerClass + "--has-menu");
	  }
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  search: function() {
	    var self;
	    self = this;
	    return $("[data-lazy-image]").each(function() {
	      return self.loadImage($(this));
	    });
	  },
	  loadImage: function(el) {
	    var alt, img, src;
	    src = el.attr("data-lazy-image");
	    alt = el.attr("data-lazy-image-alt");
	    img = new Image();
	    return $(img).load((function(_this) {
	      return function() {
	        return el.append(img);
	      };
	    })(this)).attr("src", src).attr("alt", alt);
	  }
	};


/***/ }
/******/ ]);