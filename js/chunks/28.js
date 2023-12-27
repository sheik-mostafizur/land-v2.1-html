(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WalletConfirmation",
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      ftpBaseUrl: "http://localhost:8000/",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      route_tracking_no: '',
      user_mobile_no: '',
      user_tracking_no: '',
      confirm_data: '',
      loading_icon: false,
      loading_background_opacity: {
        "opacity": '1',
        "pointer-events": ''
      }
    };
  },
  mounted: function mounted() {
    this.getAppData();
  },
  methods: {
    getAppData: function getAppData() {
      var _this = this;
      this.route_tracking_no = typeof this.$route.params.id != "undefined" ? this.$route.params.id : '';
      if (this.route_tracking_no == '') {
        return window.location.href = '/';
      }
      this.loading_icon = true;
      this.loading_background_opacity.opacity = '.2';
      this.loading_background_opacity.pointerEvents = 'none';
      var formData = new FormData();
      formData.append('tracking_no', this.route_tracking_no);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/payment-confirmation-data', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200) {
          _this.user_tracking_no = resp.data.data.mobileTrackingNo;
          _this.user_mobile_no = resp.data.data.mobile_no;
          _this.confirm_data = resp.data.data;
          _this.loading_icon = false;
          _this.loading_background_opacity.opacity = '1';
          _this.loading_background_opacity.pointerEvents = '';
        }
      })["catch"](function (error) {
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        this.loading_background_opacity.pointerEvents = '';
        console.log(error.response.data.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=template&id=b942667c&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=template&id=b942667c& ***!
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
  return _c("div", [_c("div", {
    staticClass: "container transparent_background"
  }, [_c("form", {
    ref: "application_form",
    attrs: {
      id: "application",
      action: "#"
    }
  }, [_c("div", {
    staticClass: "card border-bottom-0"
  }, [_c("div", {
    staticClass: "container_disable_box mb-3",
    style: _vm.loading_background_opacity
  }, [_c("div", {
    staticClass: "col-md-12 col-md-offset-1 text-center mb-5"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body border border-success px-4 mb-2"
  }, [_c("h6", [_vm._v("আপনার মোবাইলে (" + _vm._s(_vm.user_mobile_no) + ") একটি ট্র্যাকিং (" + _vm._s(_vm.user_tracking_no) + ") নম্বর প্রদান করা হয়েছে। মোবাইল ওয়ালেট থেকে এই ট্র্যাকিং নম্বর ব্যবহার করে ফি প্রদান করতে হবে। আবেদন ফি প্রদান না করলে আপনার আবদেনটি সাবমিট হবে না।")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("router-link", {
    staticClass: "btn btn-primary btn-sm text-white",
    attrs: {
      to: "/"
    }
  }, [_vm._v("মূল পেজে ফিরুন")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-success btn-sm text-white",
    attrs: {
      href: _vm.confirm_data.application_print_preview,
      target: "_blank"
    }
  }, [_vm._v("আবেদন প্রিন্ট")])], 1)])]), _vm._v(" "), _vm.loading_icon ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      position: "absolute",
      top: "50%",
      left: "50%"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _vm._e()])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-success text-white mt-4",
    staticStyle: {
      "font-size": "18px"
    }
  }, [_c("i", {
    staticClass: "fa fa-home"
  }), _vm._v(" আবেদন ফি পরিশোধ সংক্রান্ত তথ্য\n                        ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n/*@import '/css/font-awesome.min.css';*/\r\n/*@import '/css/custom_style.css';*/\r\n/*@import '/css/firstpage.css';*/\r\n/*p {*/\r\n/*    font-size: 14px;*/\r\n/*}*/\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/Payment/WalletConfirmation.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Payment/WalletConfirmation.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WalletConfirmation_vue_vue_type_template_id_b942667c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletConfirmation.vue?vue&type=template&id=b942667c& */ "./resources/js/components/Payment/WalletConfirmation.vue?vue&type=template&id=b942667c&");
/* harmony import */ var _WalletConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletConfirmation.vue?vue&type=script&lang=js& */ "./resources/js/components/Payment/WalletConfirmation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WalletConfirmation_vue_vue_type_style_index_0_id_b942667c_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css& */ "./resources/js/components/Payment/WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WalletConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WalletConfirmation_vue_vue_type_template_id_b942667c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WalletConfirmation_vue_vue_type_template_id_b942667c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Payment/WalletConfirmation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Payment/WalletConfirmation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Payment/WalletConfirmation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletConfirmation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Payment/WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Payment/WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_style_index_0_id_b942667c_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=style&index=0&id=b942667c&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_style_index_0_id_b942667c_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_style_index_0_id_b942667c_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_style_index_0_id_b942667c_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_style_index_0_id_b942667c_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Payment/WalletConfirmation.vue?vue&type=template&id=b942667c&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Payment/WalletConfirmation.vue?vue&type=template&id=b942667c& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_template_id_b942667c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./WalletConfirmation.vue?vue&type=template&id=b942667c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/WalletConfirmation.vue?vue&type=template&id=b942667c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_template_id_b942667c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConfirmation_vue_vue_type_template_id_b942667c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);