(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contact.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/ValidationFile */ "./resources/js/helpers/ValidationFile.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Contact",
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      contactInfo: {
        name: '',
        mobile: '',
        email: '',
        details: ''
      },
      addNumber1: Math.floor(Math.random() * 10),
      addNumber2: Math.floor(Math.random() * 10),
      addNumberResult: 0,
      calculation: '',
      email_error: '',
      mobile_error: ''
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('tokenState', ['getToken'])), {}, {
    reset: function reset() {
      this.contactInfo.name = '', this.contactInfo.mobile = '', this.contactInfo.email = '', this.contactInfo.details = '', this.calculation = '';
    },
    cToBangla: function cToBangla(value) {
      return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].convert2Bangla(value);
    },
    saveContact: function saveContact() {
      var _this = this;
      // math captcha validation
      this.addNumberResult = this.addNumber1 + this.addNumber2;
      if (this.addNumberResult != parseInt(this.calculation)) {
        var msg = 'Oops, আপনার  যোগফল ঠিক মতো হয়নি !';
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].sweetAlertToastNotification(this, 'top-end', false, false, 'error', msg);
        this.calculation = '';
        this.searchResultData = '';
        return false;
      }
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_3__["default"].header().post(this.apiBaseURL + '/save-contact-info', this.contactInfo).then(function (resp) {
        if (resp.data.status == 200) {
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].sweetAlertToastNotification(_this, 'top-end', true, true, 'success', resp.data.message);
          _this.reset();
        } else {
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].sweetAlertToastNotification(_this, 'top-end', true, true, 'error', resp.data.message);
        }
      })["catch"](function (error) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].sweetAlertToastNotification(_this, 'top-end', true, true, 'error', error.response.data.message);
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
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "page-contact"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "lmt-contact"
  }, [_c("div", {
    staticClass: "feature-white-box p-0"
  }, [_c("div", {
    staticClass: "lmt-contact-row"
  }, [_c("div", {
    staticClass: "lmt-contact-info d-flex-center"
  }, [_c("h5", [_vm._v("যোগাযোগের তথ্য")]), _vm._v(" "), _c("div", {
    staticClass: "lmt-call-sec"
  }, [_c("button", {
    staticClass: "btn lmt-call-btn"
  }, [_vm._m(0), _vm._v("\n                                    " + _vm._s(_vm.cToBangla(16122)))])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-call-option mt-4 d-flex-center"
  })]), _vm._v(" "), _c("div", {
    ref: "contact_form",
    staticClass: "lmt-contact-form"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveContact();
      }
    }
  }, [_c("div", {
    staticClass: "content-body",
    staticStyle: {
      padding: "1rem 3rem!important"
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("নাম")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contactInfo.name,
      expression: "contactInfo.name"
    }],
    staticClass: "form-control required_field",
    attrs: {
      type: "text",
      placeholder: "নাম লিখুন",
      required: ""
    },
    domProps: {
      value: _vm.contactInfo.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contactInfo, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("মোবাইল নম্বর")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contactInfo.mobile,
      expression: "contactInfo.mobile"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "মোবাইল নম্বর লিখুন",
      required: ""
    },
    domProps: {
      value: _vm.contactInfo.mobile
    },
    on: {
      focusout: function focusout() {
        return _vm.checkMobileNoValue(_vm.contactInfo.mobile);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contactInfo, "mobile", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.mobile_error ? _c("p", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("\n                                            আপনার ভ্যালুটি ভুল")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("ইমেল")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contactInfo.email,
      expression: "contactInfo.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "ইমেল লিখুন",
      required: ""
    },
    domProps: {
      value: _vm.contactInfo.email
    },
    on: {
      focusout: function focusout() {
        return _vm.checkEmailValue(_vm.contactInfo.email);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contactInfo, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.email_error ? _c("p", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("\n                                            আপনার ভ্যালুটি ভুল")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("বর্ণনা ")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contactInfo.details,
      expression: "contactInfo.details"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "20",
      rows: "2",
      placeholder: "বর্ণনা লিখুন",
      required: ""
    },
    domProps: {
      value: _vm.contactInfo.details
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contactInfo, "details", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-0"
  }, [_c("label", [_vm._v("যোগ করুন (" + _vm._s(_vm.addNumber1) + " + " + _vm._s(_vm.addNumber2) + ") ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calculation,
      expression: "calculation"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "add_count",
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
  })]), _vm._v(" "), _vm._m(1)])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "btn-call-icon"
  }, [_c("img", {
    attrs: {
      src: "images/icon-phone-call.svg",
      alt: "icon"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pt-2 text-center"
  }, [_c("button", {
    staticClass: "btn lmt-contact-submit btn-success",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("সাবমিট")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.lmt-contact-info{\n    height: 500px;\n}\n/* == Responsive mobile device == */\n@media screen and (min-width: 800px) {\n.lmt-contact-row{\n        height: 500px;\n}\n.content-body {\n        padding: 1rem 3rem;\n}\n}\n@media screen and (min-device-width: 320px) and (max-device-width: 799px) {\n.content-body {\n        padding: 2rem 1rem !important;\n}\n.lmt-contact-submit{\n        font-size: 14px;\n}\n}\n@media (min-device-width: 800px) and (max-width: 991px) {\n.lmt-contact-row .lmt-contact-form, .lmt-contact-row .lmt-contact-info {\n        max-width: 100%;\n        flex: 0 0 50%;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css&");

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

/***/ "./resources/js/components/Contact.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Contact.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=4c2584f6& */ "./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/components/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Contact_vue_vue_type_style_index_0_id_4c2584f6_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css& */ "./resources/js/components/Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Contact.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Contact.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4c2584f6_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=style&index=0&id=4c2584f6&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4c2584f6_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4c2584f6_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4c2584f6_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4c2584f6_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=4c2584f6& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contact.vue?vue&type=template&id=4c2584f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_4c2584f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/ValidationFile.js":
/*!************************************************!*\
  !*** ./resources/js/helpers/ValidationFile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ValidationFile = /*#__PURE__*/function () {
  function ValidationFile() {
    _classCallCheck(this, ValidationFile);
  }
  _createClass(ValidationFile, [{
    key: "validationMechanism",
    value: function validationMechanism(ref_obj, selector, validation_roles) {
      function convert2English(banVal) {
        banVal = banVal.toString();
        banVal = banVal.replaceAll("০", "0");
        banVal = banVal.replaceAll("১", "1");
        banVal = banVal.replaceAll("২", "2");
        banVal = banVal.replaceAll("৩", "3");
        banVal = banVal.replaceAll("৪", "4");
        banVal = banVal.replaceAll("৫", "5");
        banVal = banVal.replaceAll("৬", "6");
        banVal = banVal.replaceAll("৭", "7");
        banVal = banVal.replaceAll("৮", "8");
        banVal = banVal.replaceAll("৯", "9");
        banVal = banVal.replaceAll("।", ".");
        return banVal;
      }
      var allSelector = ref_obj.querySelectorAll(selector);
      var allFieldValidate = [];
      // for required roles
      if (validation_roles === 'required') {
        allSelector.forEach(function (e) {
          if (e.value === "" || e.value === undefined) {
            e.className += ' error_message_required';
            allFieldValidate.push(0);
          } else {
            e.classList.remove("error_message_required");
          }
        });
      }
      if (validation_roles === 'email') {
        allSelector.forEach(function (e) {
          if (e.value.length) {
            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var found = e.value.match(regex);
            if (found) {
              e.classList.remove("error_message_email");
            } else {
              e.className += ' error_message_email';
              allFieldValidate.push(0);
            }
          } else {
            e.classList.remove("error_message_email");
          }
        });
      }
      if (validation_roles === 'mobile') {
        allSelector.forEach(function (e) {
          if (e.value.length) {
            var regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
            var found = convert2English(e.value).match(regex);
            if (found) {
              e.classList.remove("error_message_mobile_bn");
            } else {
              e.className += ' error_message_mobile_bn';
              allFieldValidate.push(0);
            }
          } else {
            e.classList.remove("error_message_mobile_bn");
          }
        });
      }
      if (validation_roles === 'only_character') {
        allSelector.forEach(function (e) {
          if (e.value.length) {
            var regex = /^[a-zA-Z]+$/;
            var found = convert2English(e.value).match(regex);
            if (found) {
              e.classList.remove("error_message_only_character");
            } else {
              e.className += ' error_message_only_character';
              allFieldValidate.push(0);
            }
          } else {
            e.classList.remove("error_message_only_character");
          }
        });
      }
      if (validation_roles === 'date_picker') {
        allSelector.forEach(function (e) {
          var value = e.querySelector('.input-group').querySelector('input').value;
          if (value === "" || value === undefined) {
            e.className += ' error_message_required';
            allFieldValidate.push(0);
          } else {
            e.classList.remove("error_message_required");
          }
        });
      }
      if (validation_roles === 'only_number') {
        allSelector.forEach(function (e) {
          if (e.value.length) {
            var regex = /^[0-9.,'০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']{1,}([/])?([0-9.,'০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']{1,})?$/;
            var found = e.value.match(regex);
            if (found) {
              e.classList.remove("error_message_mobile_bn");
            } else {
              e.className += ' error_message_mobile_bn';
              allFieldValidate.push(0);
            }
          } else {
            e.classList.remove("error_message_mobile_bn");
          }
        });
      }
      if (validation_roles === 'nid') {
        allSelector.forEach(function (e) {
          if (e.value.length) {
            var regex = /^\d+$/;
            var found = convert2English(e.value).match(regex);
            if (found) {
              if (e.value.length == 10 || e.value.length == 13 || e.value.length == 17) {
                e.classList.remove('error_message_required');
              } else {
                e.classList.remove('error_message_required');
                e.className += ' error_message_required';
                allFieldValidate.push(0);
              }
            } else {
              e.classList.remove('error_message_required');
              e.className += ' error_message_required';
              allFieldValidate.push(0);
            }
          } else {
            // e.classList.remove('error_message_required');
          }
        });
      }
      return allFieldValidate.indexOf(0) === -1;
    }
  }]);
  return ValidationFile;
}();
/* harmony default export */ __webpack_exports__["default"] = (new ValidationFile());

/***/ })

}]);