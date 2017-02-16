// { "framework": "Vue" }

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_index2.default.el = '#root';
	exports.default = new Vue(_index2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hanjin/weex/weexDemo/src/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//

	var getBaseURL = __webpack_require__(3).getBaseURL;
	module.exports = {
	  data: function data() {
	    return {
	      dir: '',
	      baseURL: '',
	      tabItems: [{
	        index: 0,
	        title: '首页',
	        titleColor: '#000000',
	        icon: '',
	        image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
	        selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
	        src: 'components/readList.js',
	        visibility: 'visible'
	      }, {
	        index: 1,
	        title: '阅读',
	        titleColor: '#000000',
	        icon: '',
	        image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
	        selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
	        src: 'components/readList.js',
	        visibility: 'hidden'
	      }, {
	        index: 2,
	        title: '电影',
	        titleColor: '#000000',
	        icon: '',
	        image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
	        selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
	        src: 'components/moveList.js',
	        visibility: 'hidden'
	      }]
	    };
	  },
	  components: {
	    tabbar: __webpack_require__(4)
	  },
	  created: function created() {
	    var baseURL = getBaseURL(this);
	    for (var i = 0; i < this.tabItems.length; i++) {
	      var tabItem = this.tabItems[i];
	      tabItem.src = baseURL + tabItem.src;
	    }
	  },
	  methods: {
	    tabBarOnClick: function tabBarOnClick(e) {
	      console.log('tabBarOnClick', e.index);
	    }
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.getBaseURL = function (vm) {

	  var bundleUrl = weex.config.bundleUrl;
	  var nativeBase;
	  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('weexDemo_ios.app') > 0;
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/';
	  } else if (isiOSAssets) {
	    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	  } else {
	    var host = 'localhost:12580';
	    var matches = /\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    nativeBase = 'http://' + host + '/' + vm.dir + '/build/';
	  }

	  var h5Base = './index.html?page=./' + vm.dir + '/build/';
	  // in Native
	  var base = nativeBase;
	  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
	    // in Browser or WebView
	    base = h5Base;
	  }

	  console.log('base=' + base);

	  return base;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(5)
	)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hanjin/weex/weexDemo/src/include/tabbar/tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    tabItems: { default: [] },
	    selectedColor: { default: '#ff0000' },
	    unselectedColor: { default: '#000000' }
	  },
	  data: function data() {
	    return {
	      selectedIndex: 0
	    };
	  },
	  components: {
	    tabitem: __webpack_require__(7)
	  },
	  created: function created() {
	    this.select(this.selectedIndex);
	  },
	  methods: {
	    tabItemOnClick: function tabItemOnClick(e) {
	      this.selectedIndex = e.index;
	      this.select(e.index);
	      this.$emit('tabBarOnClick', e);
	    },
	    select: function select(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(8)
	)

	/* script */
	__vue_exports__ = __webpack_require__(9)

	/* template */
	var __vue_template__ = __webpack_require__(10)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/hanjin/weex/weexDemo/src/include/tabbar/tabitem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    index: { default: 0 },
	    title: { default: '' },
	    titleColor: { default: '#000000' },
	    icon: { default: '' },
	    backgroundColor: { default: '#ffffff' }
	  },
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var params = {
	        index: this.index
	      };
	      this.$emit('tabItemOnClick', params);
	    }
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["container"],
	    style: {
	      backgroundColor: _vm.backgroundColor
	    },
	    on: {
	      "click": _vm.onclickitem
	    }
	  }, [_h('image', {
	    staticClass: ["top-line"],
	    attrs: {
	      "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	    }
	  }), _h('image', {
	    staticClass: ["tab-icon"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _h('text', {
	    staticClass: ["tab-text"],
	    style: {
	      color: _vm.titleColor
	    }
	  }, [_vm._s(_vm.title)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._l((_vm.tabItems), function(item) {
	    return _h('embed', {
	      staticClass: ["content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  }), _h('div', {
	    staticClass: ["tabbar"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_vm._l((_vm.tabItems), function(item) {
	    return _h('tabitem', {
	      attrs: {
	        "index": item.index,
	        "icon": item.icon,
	        "title": item.title,
	        "titleColor": item.titleColor
	      },
	      on: {
	        "tabItemOnClick": _vm.tabItemOnClick
	      }
	    })
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticStyle: {
	      flexDirection: "column"
	    }
	  }, [_h('tabbar', {
	    attrs: {
	      "tabItems": _vm.tabItems
	    },
	    on: {
	      "tabBarOnClick": _vm.tabBarOnClick
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);