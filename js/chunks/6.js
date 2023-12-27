(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/Tab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/Tab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Tab",
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('checkDataCroySutro', ['firstStepData', 'imageInfo', 'secondStepData', 'thirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('firstPageCommonData', ['firstPageCommonDatas', 'tracking_no', 'form_type', 'app_type'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage', 'getStateFormType', 'getStateAppType', 'getStateTrackingNo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('checkDataCroySutro', ['fetchFirstStepData', 'fetchSecondStepData', 'fetchThirdStepData', 'fetchFullStateData'])),
  props: ['active_tab', 'applicationData'],
  data: function data() {
    return {
      tofsil_status: false,
      declaration_status: false
    };
  },
  mounted: function mounted() {
    // console.log(this.applicationData,456);
    this.declaration_status = this.allCommonDataFirstPage.questions != undefined ? true : false;
    this.tofsil_status = this.secondStepData.application_land_schedules != undefined ? true : false;
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('checkDataCroySutro', ['getFirstStepData', 'getAreaData', 'getImageInfo', 'getSecondStepData', 'getThirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData', 'setTrackingNo', 'setFormType', 'setAppType']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/Tab.vue?vue&type=template&id=86243fd6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/Tab.vue?vue&type=template&id=86243fd6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "page-menu mb-4"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "lmt-page-menu"
  }, [_c("nav", {
    staticClass: "navbar"
  }, [_c("ul", [_vm.active_tab == "ghosona" ? _c("li", {
    staticClass: "active"
  }, [_vm._m(0)]) : _c("li", [_c("router-link", {
    attrs: {
      to: "/application-request"
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-ghoshona"
  }), _vm._v(" ঘোষণা")])], 1), _vm._v(" "), _vm.active_tab == "tofsil" ? _c("li", {
    staticClass: "active"
  }, [_vm._m(1)]) : _c("li", [_vm.declaration_status ? _c("router-link", {
    attrs: {
      to: "/namjari-application/8FXLmxdnPIXwOGHusg9B_08lFjpGVfhjfTaoEX3pZr-DSI2Io1nxgMHUdEzKye5UJU9EvCo32DQQT2hmW934xA"
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-tofsil"
  }), _vm._v("তফসিল")]) : _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-tofsil"
  }), _vm._v(" জমির তফসিল ও গ্রহীতার তথ্য")])], 1), _vm._v(" "), _vm.active_tab == "datha_attachment" ? _c("li", {
    staticClass: "active"
  }, [_vm._m(2)]) : _c("li", [_vm.tofsil_status ? _c("router-link", {
    attrs: {
      to: "/application-document/8FXLmxdnPIXwOGHusg9B_08lFjpGVfhjfTaoEX3pZr-DSI2Io1nxgMHUdEzKye5UJU9EvCo32DQQT2hmW934xA"
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-grohita"
  }), _vm._v("দাতা/গ্রহিতার তথ্য ও সংযুক্তি")]) : _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-grohita"
  }), _vm._v(" দাতার তথ্য ও প্রয়োজনীয় তথ্য সংযুক্তি")])], 1), _vm._v(" "), _vm.active_tab == "payment" ? _c("li", {
    staticClass: "active"
  }, [_vm._m(3)]) : _c("li", [_vm._m(4)])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-ghoshona"
  }), _vm._v(" ঘোষণা")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-tofsil"
  }), _vm._v(" জমির তফসিল ও গ্রহীতার তথ্য ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-grohita"
  }), _vm._v(" দাতার তথ্য ও প্রয়োজনীয় তথ্য সংযুক্তি ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-payment"
  }), _vm._v(" পেমেন্ট")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    attrs: {
      href: "javascript:void(0); "
    }
  }, [_c("i", {
    staticClass: "d-flex-center lm-icon lm-icon-payment"
  }), _vm._v(" পেমেন্ট")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Form/Tab.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Form/Tab.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab_vue_vue_type_template_id_86243fd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab.vue?vue&type=template&id=86243fd6&scoped=true& */ "./resources/js/components/Form/Tab.vue?vue&type=template&id=86243fd6&scoped=true&");
/* harmony import */ var _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tab_vue_vue_type_template_id_86243fd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tab_vue_vue_type_template_id_86243fd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "86243fd6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/Tab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/Tab.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Form/Tab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/Tab.vue?vue&type=template&id=86243fd6&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Form/Tab.vue?vue&type=template&id=86243fd6&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_86243fd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=template&id=86243fd6&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/Tab.vue?vue&type=template&id=86243fd6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_86243fd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_86243fd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/FileUpload.js":
/*!********************************************!*\
  !*** ./resources/js/helpers/FileUpload.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppAxios */ "./resources/js/helpers/AppAxios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var FileUpload = /*#__PURE__*/function () {
  function FileUpload() {
    _classCallCheck(this, FileUpload);
  }
  _createClass(FileUpload, [{
    key: "upload",
    value: function upload(url, data, headersData) {
      var response = _AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(url + '/tmp-store', data, {
        headers: headersData
      }).then(function (resp) {
        return resp;
      })["catch"](function (error) {
        console.log(error);
      });
      return {
        payload: response
      };
    }
  }, {
    key: "storeNidImgAsBase64",
    value: function storeNidImgAsBase64(url, data, headersData) {
      var response = _AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(url, data, {
        headers: headersData
      }).then(function (resp) {
        return resp;
      })["catch"](function (error) {
        console.log(error);
      });
      return {
        payload: response
      };
    }
  }, {
    key: "getNidImgByUUID",
    value: function getNidImgByUUID(url, data, headersData) {
      var response = _AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(url, data, {
        headers: headersData
      }).then(function (resp) {
        return resp;
      })["catch"](function (error) {
        return error;
      });
      return {
        payload: response
      };
    }

    //view photo from uuid
  }, {
    key: "viewPhotoFromUUID",
    value: function viewPhotoFromUUID(url, data, headersData) {
      var response = _AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(url, data, {
        headers: headersData
      }).then(function (resp) {
        return resp;
      })["catch"](function (error) {
        console.log(error);
      });
      return {
        payload: response
      };
    }
  }]);
  return FileUpload;
}();
/* harmony default export */ __webpack_exports__["default"] = (new FileUpload());

/***/ })

}]);