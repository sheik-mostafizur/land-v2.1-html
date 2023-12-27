(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SupportRequest.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SupportRequest.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SearchApplication',
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('user', ['userInfo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('searchApplication', ['applicationSearchData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('searchApplication', ['fullApplicationSearchData'])),
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a,
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      loading_icon: false,
      addNumber1: Math.floor(Math.random() * 10),
      addNumber2: Math.floor(Math.random() * 10),
      calculation: '',
      loading_background_opacity: {
        opacity: '1',
        "pointer-events": ''
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getToken();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['getUserInfo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('searchApplication', ['setSearchApplication'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('tokenState', ['getToken'])), {}, {
    dataReset: function dataReset() {
      this.getApplicationInfo('');
      return this.$router.push({
        path: '/'
      });
    },
    hideModal: function hideModal() {
      this.$refs['cashPayment-modal'].hide();
    },
    setProperties: function setProperties() {
      this.isLoading = false;
      this.addNumberResult = this.addNumber1 + this.addNumber2;
    },
    convert2Bangla: function convert2Bangla(engVal) {
      engVal = engVal.toString();
      engVal = engVal.replaceAll("0", "০");
      engVal = engVal.replaceAll("1", "১");
      engVal = engVal.replaceAll("2", "২");
      engVal = engVal.replaceAll("3", "৩");
      engVal = engVal.replaceAll("4", "৪");
      engVal = engVal.replaceAll("5", "৫");
      engVal = engVal.replaceAll("6", "৬");
      engVal = engVal.replaceAll("7", "৭");
      engVal = engVal.replaceAll("8", "৮");
      engVal = engVal.replaceAll("9", "৯");
      return engVal;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SupportRequest.vue?vue&type=template&id=c8d8022a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SupportRequest.vue?vue&type=template&id=c8d8022a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "main-content"
  }, [_c("div", {
    staticClass: "page-terms"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "lmt-breadcrumb"
  }, [_c("nav", {
    attrs: {
      "aria-label": "breadcrumb"
    }
  }, [_c("ol", {
    staticClass: "breadcrumb"
  }, [_c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("router-link", {
    attrs: {
      to: "/"
    }
  }, [_vm._v("হোম")])], 1), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active",
    attrs: {
      "aria-current": "page"
    }
  }, [_vm._v("সাপোর্ট রিকোয়েস্ট")])])])]), _vm._v(" "), _c("div", {
    ref: "search_form",
    staticClass: "page-container-sm"
  }, [_vm._m(0), _vm._v(" "), _c("form", {
    style: _vm.loading_background_opacity,
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.searchApplication();
      }
    }
  }, [_c("div", {
    staticClass: "content-body bdr-top-bottom p-4"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-0"
  }, [_c("label", [_vm._v("যোগ করুন (" + _vm._s(_vm.addNumber1) + " + " + _vm._s(_vm.addNumber2) + ")")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calculation,
      expression: "calculation"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "add_count",
      placeholder: "এখানে শুধু ইংলিশ সংখ্যা ইনপুট হিসেবে নিবে",
      required: ""
    },
    domProps: {
      value: _vm.calculation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.calculation = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _vm._m(6)]), _vm._v(" "), _vm.loading_icon ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      position: "absolute",
      top: "40%",
      left: "300px",
      "z-index": "9999"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticStyle: {
      height: "50px",
      clear: "both"
    }
  }, [_vm._v(" ")])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section-title text-center"
  }, [_c("h4", [_vm._v("সাপোর্ট রিকোয়েস্ট")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("বিষয়")]), _vm._v(" "), _c("select", {
    staticClass: "form-control required_field"
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("নামজারি সেবা প্রাপ্তির সময়")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("নাম")]), _vm._v(" "), _c("input", {
    staticClass: "form-control required_field input_bangla",
    attrs: {
      type: "text",
      placeholder: "নাম লিখুন",
      required: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("মোবাইল নম্বর")]), _vm._v(" "), _c("input", {
    staticClass: "form-control required_field input_bangla",
    attrs: {
      type: "text",
      placeholder: "মোবাইল নম্বর",
      required: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("ইমেইল")]), _vm._v(" "), _c("input", {
    staticClass: "form-control required_field input_bangla",
    attrs: {
      type: "text",
      placeholder: "ইমেইল লিখুন",
      required: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("আপনার সমস্যা বর্ণনা করুন")]), _vm._v(" "), _c("textarea", {
    staticClass: "form-control input_bangla",
    staticStyle: {
      height: "80px",
      resize: "none"
    },
    attrs: {
      required: "",
      placeholder: "বর্ণনা লিখুন"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "content-footer text-center pt-4"
  }, [_c("button", {
    staticClass: "btn active btn-outline-success mx-3"
  }, [_c("i", {
    staticClass: "fa mr-2 fa-save",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" সাবমিট")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/SupportRequest.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/SupportRequest.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SupportRequest_vue_vue_type_template_id_c8d8022a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupportRequest.vue?vue&type=template&id=c8d8022a&scoped=true& */ "./resources/js/components/SupportRequest.vue?vue&type=template&id=c8d8022a&scoped=true&");
/* harmony import */ var _SupportRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupportRequest.vue?vue&type=script&lang=js& */ "./resources/js/components/SupportRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SupportRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SupportRequest_vue_vue_type_template_id_c8d8022a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SupportRequest_vue_vue_type_template_id_c8d8022a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c8d8022a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SupportRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SupportRequest.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/SupportRequest.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SupportRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SupportRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SupportRequest.vue?vue&type=template&id=c8d8022a&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/SupportRequest.vue?vue&type=template&id=c8d8022a&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportRequest_vue_vue_type_template_id_c8d8022a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./SupportRequest.vue?vue&type=template&id=c8d8022a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SupportRequest.vue?vue&type=template&id=c8d8022a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportRequest_vue_vue_type_template_id_c8d8022a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportRequest_vue_vue_type_template_id_c8d8022a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);