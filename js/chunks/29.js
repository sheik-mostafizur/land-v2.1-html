(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Query.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Query.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
// import axios from 'axios';



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Query",
  components: {
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      sample_variable: false,
      allQuestion: [],
      onlyQuestion: [{
        id: '',
        text: ''
      }],
      optionSelected: 0,
      visible_section: [{
        "visible": true
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }, {
        "visible": false
      }]
    };
  },
  mounted: function mounted() {
    this.getQuestion();
  },
  created: function created() {},
  methods: {
    mySelectEvent: function mySelectEvent(_ref) {
      var id = _ref.id,
        text = _ref.text;
      for (var i = 0; i <= 42; i++) {
        this.visible_section[i].visible = false;
      }
      this.visible_section[id].visible = true;
      //alert(event.target.options.selectedIndex);
      //alert(this.visible_section[event.target.options.selectedIndex].visible);
    },
    getQuestion: function getQuestion(event) {
      var _this = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/questionnaire', {
        headers: this.headers
      }).then(function (resp) {
        _this.allQuestion = resp.data.data;
        var i = 0;
        for (i = 0; i < resp.data.data.length; i++) {
          _this.onlyQuestion.push({
            id: i,
            text: '(' + _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].convert2Bangla(i + 1) + ') ' + _this.allQuestion[i].question
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Query.vue?vue&type=template&id=66a3ed6d&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Query.vue?vue&type=template&id=66a3ed6d&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "page-jigasha"
  }, [_c("div", {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-8 offset-lg-2"
  }, [_c("div", {
    staticClass: "form-group page-content"
  }, [_c("Select2", {
    staticClass: "js-example-basic-single",
    staticStyle: {
      "font-size": "13px",
      color: "#333 !important"
    },
    attrs: {
      id: "select_question",
      "bootstrap-styling": true,
      options: _vm.onlyQuestion
    },
    on: {
      select: function select($event) {
        return _vm.mySelectEvent($event);
      }
    },
    model: {
      value: _vm.optionSelected,
      callback: function callback($$v) {
        _vm.optionSelected = $$v;
      },
      expression: "optionSelected"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-5"
  }, [_c("div", {
    staticClass: "col-lg-10 offset-lg-1"
  }, [_c("div", {
    staticClass: "page-content bg-white mb-5"
  }, [_c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
    staticClass: "tab-pane fade show active",
    attrs: {
      role: "tabpanel"
    }
  }, _vm._l(_vm.allQuestion, function (mydata, index) {
    return _vm.visible_section[index].visible == true ? _c("div", [_c("div", {
      staticClass: "section-header border-bottom px-5 py-3"
    }, [_c("h3", {
      staticClass: "text-success mb-0 text-justify"
    }, [_vm._v(_vm._s(mydata.question))])]), _vm._v(" "), _c("div", {
      staticClass: "section-body p-4"
    }, [_c("ul", {
      staticClass: "mb-0 stl"
    }, [mydata.answer.title ? _c("span", [_vm._v(_vm._s(mydata.answer.title)), _c("br"), _c("br")]) : _vm._e(), _vm._v(" "), _vm._l(mydata.answer.answer, function (myans, index) {
      return _c("span", [_vm._v(_vm._s(myans.title) + "\n\n\n                                                "), mydata.answer.answer[0].length > 0 ? _c("span", [_c("br"), _c("br")]) : _vm._e(), _vm._v(" "), _vm._l(myans.answer, function (myans2, index) {
        return _c("span", [myans2 ? _c("li", [_vm._v(_vm._s(myans2))]) : _vm._e()]);
      }), _vm._v(" "), _c("br")], 2);
    })], 2)])]) : _vm._e();
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "section-footer border-top py-3 px-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "helpful-sec"
  }, [_c("span", {
    staticClass: "helpful-text"
  }, [_vm._v("এই অনুচ্ছেদটি সহায়ক?")]), _vm._v(" "), _c("div", {
    staticClass: "helpful-btn-grp"
  }, [_c("button", {
    staticClass: "btn btn-outline-success",
    attrs: {
      type: "button",
      id: "yes-button",
      title: "Solved my problem"
    }
  }, [_vm._v("হ্যা")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-success",
    attrs: {
      type: "button",
      id: "no-button",
      to: "/contact"
    }
  }, [_vm._v("না")])], 1)])])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "lmt-breadcrumb"
  }, [_c("nav", {
    attrs: {
      "aria-label": "breadcrumb"
    }
  }, [_c("ol", {
    staticClass: "breadcrumb"
  }, [_c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    attrs: {
      href: "home.html"
    }
  }, [_vm._v("হোম")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active",
    attrs: {
      "aria-current": "page"
    }
  }, [_vm._v("জিজ্ঞাসা")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row",
    staticStyle: {
      padding: "0 8px"
    }
  }, [_c("div", {
    staticClass: "col-sm-12 mb-2"
  }, [_c("div", {
    staticClass: "section-title text-center"
  }, [_c("h2", {
    staticClass: "mb-3"
  }, [_vm._v("নামজারি সংক্রান্ত সাধারণ তথ্য ও জিজ্ঞাসা বিষয়")])]), _vm._v(" "), _c("p", {
    staticClass: "text-justify"
  }, [_vm._v("নামজারি বা মিউটেশন হচ্ছে জমি সংক্রান্ত বিষয়ে মালিকানা পরিবর্তন করা। কোন ব্যক্তি বা প্রতিষ্ঠান কোন বৈধ পন্থায় ভূমি/জমির মালিকানা অর্জন করলে সরকারি রেকর্ড সংশোধন করে তার নামে রেকর্ড আপটুডেট (হালনাগাদ) করাকেই নামজারি বলা হয়। কোন ব্যক্তির নামজারি সম্পন্ন হলে তাকে একটি খতিয়ান দেয়া হয় যেখানে তার অর্জিত জমির একখানি সংক্ষিপ্ত হিসাব বিবরণী উল্লেখ থাকে। উক্ত হিসাব বিবরণী অর্থাৎ খতিয়ানে মালিক বা মালিকগণের  নাম, মৌজা নাম ও নম্বর (জেএল নম্বর), জমির দাগ নম্বর, দাগে জমির পরিমাণ, মালিকের জমির প্রাপ্য অংশ ও জমির পরিমাণ ইত্যাদি তথ্য লিপিবদ্ধ থাকে। মন্তব্য কলামে সংশ্লিষ্ট কিছু তথ্য থাকতে পারে। ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nul.stl[data-v-66a3ed6d] {\r\n    list-style-type: disc !important;\n}\n.page-content ul li[data-v-66a3ed6d] {\r\n    display: list-item !important;\n}\n.stl li[data-v-66a3ed6d] {\r\n    margin-left: 20px;\r\n    list-style-type: disc !important;\n}\noption[data-v-66a3ed6d] {\r\n    font-size: 12px !important;\n}\nh3[data-v-66a3ed6d]{\r\n    font-size: 20px !important;\r\n    color: black !important;\n}\r\n/* == Responsive mobile device == */\n.section-header[data-v-66a3ed6d]{\r\n    padding: 1rem 3rem;\n}\n.section-body[data-v-66a3ed6d]{\r\n    padding: 0 1.5rem 1rem  1.5rem;\n}\r\n\r\n/*#select_question.select_question.select2-container--default .select2-selection--single {*/\r\n/*    border: 1px solid green !important;*/\r\n/*}*/\n@media screen and (min-device-width: 320px) and (max-device-width: 640px) {\n.section-body[data-v-66a3ed6d]{\r\n        padding: 10px 8px 0 2px;\n}\n.section-header[data-v-66a3ed6d]{\r\n        padding:  1rem 1rem;\n}\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css&");

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

/***/ "./resources/js/components/Query.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Query.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Query_vue_vue_type_template_id_66a3ed6d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Query.vue?vue&type=template&id=66a3ed6d&scoped=true& */ "./resources/js/components/Query.vue?vue&type=template&id=66a3ed6d&scoped=true&");
/* harmony import */ var _Query_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Query.vue?vue&type=script&lang=js& */ "./resources/js/components/Query.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Query_vue_vue_type_style_index_0_id_66a3ed6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css& */ "./resources/js/components/Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Query_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Query_vue_vue_type_template_id_66a3ed6d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Query_vue_vue_type_template_id_66a3ed6d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66a3ed6d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Query.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Query.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Query.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Query.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Query.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_style_index_0_id_66a3ed6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Query.vue?vue&type=style&index=0&id=66a3ed6d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_style_index_0_id_66a3ed6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_style_index_0_id_66a3ed6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_style_index_0_id_66a3ed6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_style_index_0_id_66a3ed6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Query.vue?vue&type=template&id=66a3ed6d&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Query.vue?vue&type=template&id=66a3ed6d&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_template_id_66a3ed6d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Query.vue?vue&type=template&id=66a3ed6d&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Query.vue?vue&type=template&id=66a3ed6d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_template_id_66a3ed6d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Query_vue_vue_type_template_id_66a3ed6d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);