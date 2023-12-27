(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Advice.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Advice.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
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
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      loading_icon: false,
      addNumber1: Math.floor(Math.random() * 10),
      addNumber2: Math.floor(Math.random() * 10),
      addNumberResult: 0,
      calculation: '',
      email_error: '',
      error_message: '',
      success_message: '',
      mobile_error: '',
      loading_background_opacity: {
        opacity: '1',
        "pointer-events": ''
      },
      userFeedback: {
        'name': '',
        'subject': '',
        'email': '',
        'mobile': '',
        'description': ''
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.setProperties();
    this.getToken();
    // this.getAllFeedbacks();
  },

  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['getUserInfo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('searchApplication', ['setSearchApplication'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('tokenState', ['getToken'])), {}, {
    reset: function reset() {
      this.userFeedback.name = '', this.userFeedback.subject = '', this.userFeedback.mobile = '', this.userFeedback.email = '', this.userFeedback.description = '', this.calculation = '';
    },
    getAllFeedbacks: function getAllFeedbacks() {
      var _this = this;
      // math captcha validation
      this.addNumberResult = this.addNumber1 + this.addNumber2;
      if (this.addNumberResult != parseInt(this.calculation)) {
        var msg = 'Oops, আপনার  যোগফল ঠিক মতো হয়নি !';
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].sweetAlertToastNotification(this, 'top-end', false, false, 'error', msg);
        this.calculation = '';
        this.userFeedback = '';
        return false;
      }
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/user-feedback', this.userFeedback).then(function (resp) {
        if (resp.data.status == 200) {
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].sweetAlertToastNotification(_this, 'top-end', true, true, 'success', resp.data.message);
          _this.reset();
          console.log(resp.data.message);
        } else {
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].sweetAlertToastNotification(_this, 'top-end', true, true, 'error', resp.data.message);
        }
      })["catch"](function (error) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].sweetAlertToastNotification(_this, 'top-end', true, true, 'error', error.response.data.message);
        _this.loading_icon = false;
      });
    },
    checkEmailValue: function checkEmailValue(value) {
      if (value) {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var found = value.match(regex);
        if (found) {
          this.email_error = false;
        } else {
          this.email_error = true;
        }
      } else {
        this.email_error = false;
      }
    },
    checkMobileNoValue: function checkMobileNoValue(value) {
      if (value) {
        var regex = /^01([3456789])([0-9]{8})$/;
        var found = value.match(regex);
        if (found) {
          this.mobile_error = false;
          if (value.length != 11) {
            this.mobile_error = true;
          } else {
            this.mobile_error = false;
          }
        } else {
          this.mobile_error = true;
        }
      } else {
        this.mobile_error = false;
      }
    },
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Advice.vue?vue&type=template&id=37eeef23&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Advice.vue?vue&type=template&id=37eeef23&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("পোর্টালের মান উন্নয়নের পরামর্শ")])])])]), _vm._v(" "), _c("div", {
    ref: "search_form",
    staticClass: "page-container-sm"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("form", {
    style: _vm.loading_background_opacity,
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.getAllFeedbacks();
      }
    }
  }, [_c("div", {
    staticClass: "content-body bdr-top-bottom"
  }, [_c("small", {
    staticClass: "form-text text-danger"
  }, [_vm._v(_vm._s(_vm.error_message) + " ")]), _vm._v(" "), _c("small", {
    staticClass: "form-text text-success"
  }, [_vm._v(_vm._s(_vm.success_message) + " ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("বিষয়")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userFeedback.subject,
      expression: "userFeedback.subject"
    }],
    staticClass: "form-control required_field input_bangla",
    attrs: {
      type: "text",
      placeholder: "বিষয় লিখুন",
      required: ""
    },
    domProps: {
      value: _vm.userFeedback.subject
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.userFeedback, "subject", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("নাম")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userFeedback.name,
      expression: "userFeedback.name"
    }],
    staticClass: "form-control required_field input_bangla",
    attrs: {
      type: "text",
      placeholder: "নাম লিখুন",
      required: ""
    },
    domProps: {
      value: _vm.userFeedback.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.userFeedback, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("মোবাইল নম্বর")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userFeedback.mobile,
      expression: "userFeedback.mobile"
    }],
    staticClass: "form-control required_field input_bangla",
    attrs: {
      type: "text",
      placeholder: "মোবাইল নম্বর",
      required: ""
    },
    domProps: {
      value: _vm.userFeedback.mobile
    },
    on: {
      focusout: function focusout() {
        return _vm.checkMobileNoValue(_vm.userFeedback.mobile);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.userFeedback, "mobile", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.mobile_error ? _c("p", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("\n                                    আপনার ভ্যালুটি ভুল")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("ইমেইল")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userFeedback.email,
      expression: "userFeedback.email"
    }],
    staticClass: "form-control required_field",
    attrs: {
      type: "email",
      placeholder: "ইমেইল লিখুন",
      required: ""
    },
    domProps: {
      value: _vm.userFeedback.email
    },
    on: {
      focusout: function focusout() {
        return _vm.checkEmailValue(_vm.userFeedback.email);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.userFeedback, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.email_error ? _c("p", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("\n                                    আপনার ভ্যালুটি ভুল")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("পোর্টালের মান উন্নয়নে আপনার পরামর্শ লিখুন")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userFeedback.description,
      expression: "userFeedback.description"
    }],
    staticClass: "form-control input_bangla",
    staticStyle: {
      height: "80px",
      resize: "none"
    },
    attrs: {
      required: "",
      placeholder: "বর্ণনা লিখুন"
    },
    domProps: {
      value: _vm.userFeedback.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.userFeedback, "description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
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
  })])]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _vm.loading_icon ? _c("div", {
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
  }, [_c("h4", [_vm._v("পোর্টালের মান উন্নয়নের পরামর্শ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "content-footer text-center"
  }, [_c("div", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_vm._v("ভূমি সেবা সংক্রান্ত অভিযোগ, মান উন্নয়েন আপনার পরামর্শ এবং কোন জিজ্ঞাসা থাকলে "), _c("b", [_vm._v("১৬১২২")]), _vm._v(" তে কল করুন।")]), _vm._v(" "), _c("div", [_vm._v(" ")])]);
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
  }), _vm._v(" সাবমিট")]), _vm._v(" "), _c("div", [_vm._v(" ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.content-body[data-v-37eeef23]{\r\n    padding: 1.5rem ;\n}\r\n/* == Responsive mobile device == */\n@media screen and (min-device-width: 320px) and (max-device-width: 640px) {\n.content-body[data-v-37eeef23]{\r\n        padding: .5rem 0 0 0;\n}\n.content-footer button[data-v-37eeef23]{\r\n        font-size: 14px;\r\n        padding: 5px 6px 5px 4px;\n}\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/Advice.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Advice.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Advice_vue_vue_type_template_id_37eeef23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Advice.vue?vue&type=template&id=37eeef23&scoped=true& */ "./resources/js/components/Advice.vue?vue&type=template&id=37eeef23&scoped=true&");
/* harmony import */ var _Advice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Advice.vue?vue&type=script&lang=js& */ "./resources/js/components/Advice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Advice_vue_vue_type_style_index_0_id_37eeef23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css& */ "./resources/js/components/Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Advice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Advice_vue_vue_type_template_id_37eeef23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Advice_vue_vue_type_template_id_37eeef23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "37eeef23",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Advice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Advice.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Advice.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Advice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Advice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_style_index_0_id_37eeef23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Advice.vue?vue&type=style&index=0&id=37eeef23&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_style_index_0_id_37eeef23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_style_index_0_id_37eeef23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_style_index_0_id_37eeef23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_style_index_0_id_37eeef23_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Advice.vue?vue&type=template&id=37eeef23&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Advice.vue?vue&type=template&id=37eeef23&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_template_id_37eeef23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Advice.vue?vue&type=template&id=37eeef23&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Advice.vue?vue&type=template&id=37eeef23&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_template_id_37eeef23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Advice_vue_vue_type_template_id_37eeef23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);