(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Charts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Charts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Charts",
  data: function data() {
    return {
      series: this.data,
      chartOptions: {
        colors: ['#62B597', '#EA9D6F', '#D07D79', '#f0c304', '#f500ff', '#C6E1E8', '#3AA1BD'],
        chart: {
          width: this.type,
          height: 300,
          type: this.type,
          foreColor: '#040404'
        },
        stroke: {
          show: false
        },
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 2,
            offsetY: 2,
            customScale: 0.7,
            dataLabels: {
              offset: 80,
              minAngleToShowLabel: 5
            }
          }
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [0],
          formatter: function formatter(val, opts) {
            var landOwnershipLabels = 'ক্রয় (১,৮০৮,৩৪৩),ওয়ারিশ (৯৬,৭৯২),হেবা (১২৭,৭৫৮),ডিক্রি (৪,৬৭৩),নিলাম (১০৮),বন্দোবস্ত (৩৫,৩৮৬),অন্যান্য (২৪৮,৪০৮)';
            var incomingKhatianRecordTypeLabels = 'আর.এস/বি.এস (২,১০১,৫৫২),এসএ/এম.আর.আর (২১৫,৩০২),দিয়ারা জরিপ (১৮,৬২৩),মহানগর (১০০,৭১৮),সিএস (১,২৪৪)';
            var landOwnershipValues = [1808343, 96792, 127758, 4673, 108, 35386, 248408];
            var incomingKhatianRecordTypeValues = [2101552, 215302, 18623, 100718, 1244];
            if (opts.w.config.labels.toString() === landOwnershipLabels) {
              return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].convert2Bangla(landOwnershipValues[opts.seriesIndex].toLocaleString());
            } else if (opts.w.config.labels.toString() === incomingKhatianRecordTypeLabels) {
              return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].convert2Bangla(incomingKhatianRecordTypeValues[opts.seriesIndex].toLocaleString());
            }
          },
          textAnchor: 'middle',
          distributed: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: ['#040404']
          },
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
          }
        },
        labels: this.labels,
        responsive: [{
          breakpoint: 1000,
          options: {
            chart: {
              width: 300,
              height: 390
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        tooltip: {
          custom: function custom(_ref) {
            var series = _ref.series,
              seriesIndex = _ref.seriesIndex,
              dataPointIndex = _ref.dataPointIndex,
              w = _ref.w;
            var landOwnership = {
              '1808343': 'ক্রয়',
              '96792': 'ওয়ারিশ',
              '46730': 'ডিক্রি',
              '127758': 'হেবা',
              '40800': 'নিলাম',
              '70386': 'বন্দোবস্ত',
              '248408': 'অন্যান্য',
              '2101552': 'আর.এস/বি.এস',
              '215302': 'এসএ/এম.আর.আর',
              '186230': 'দিয়ারা জরিপ',
              //
              '200718': 'মহানগর',
              //
              '74440': 'সিএস'
            };
            var replaceValues = {
              '74440': 1244,
              '40800': 108,
              '186230': 18623,
              '200718': 100718,
              '70386': 35386,
              '46730': 4673
            };
            var seriesValue = typeof replaceValues[series[seriesIndex]] != 'undefined' ? replaceValues[series[seriesIndex]] : series[seriesIndex];
            return '<div class="arrow_box" style="padding: 2px;\n' + '    background: #4fad4f;\n' + '    border: none;" >' + '<span>' + landOwnership[series[seriesIndex].toString()] + ' : ' + _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].convert2Bangla(seriesValue.toLocaleString()) + '</span>' + '</div>';
          }
        }
      }
    };
  },
  props: {
    type: {
      type: String,
      "default": 'pie',
      required: true
    },
    width: {
      type: Number,
      "default": 380,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Statistic.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Statistic.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Charts */ "./resources/js/components/Charts.vue");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Statistic",
  components: {
    Charts: _Charts__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      landOwnershipLabels: ['ক্রয় (১,৮০৮,৩৪৩)', 'ওয়ারিশ (৯৬,৭৯২)', 'হেবা (১২৭,৭৫৮)', 'ডিক্রি (৪,৬৭৩)', 'নিলাম (১০৮)', 'বন্দোবস্ত (৩৫,৩৮৬)', 'অন্যান্য (২৪৮,৪০৮)'],
      landOwnershipValues: [1808343, 96792, 127758, 46730, 40800, 70386, 248408],
      incomingKhatianRecordTypeLabels: ['আর.এস/বি.এস (২,১০১,৫৫২)', 'এসএ/এম.আর.আর (২১৫,৩০২)', 'দিয়ারা জরিপ (১৮,৬২৩)', 'মহানগর (১০০,৭১৮)', 'সিএস (১,২৪৪)'],
      incomingKhatianRecordTypeValues: [2101552, 215302, 186230, 200718, 74440]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Charts.vue?vue&type=template&id=340ac000&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Charts.vue?vue&type=template&id=340ac000&scoped=true& ***!
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
  return _c("apexchart", {
    attrs: {
      type: _vm.type,
      width: _vm.width,
      options: _vm.chartOptions,
      series: _vm.series
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Statistic.vue?vue&type=template&id=1657fb75&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Statistic.vue?vue&type=template&id=1657fb75&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "row mt-5"
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
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "section-body"
  }, [_vm._m(1), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("\n                                            জমির মালিকানা সুত্র অনুযায়ী আবেদন ( ১ জানুয়ারি ২০২১ থেকে ৩১ ডিসেম্বর\n                                            ২০২১)\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-6 offset-md-3"
  }, [_c("Charts", {
    attrs: {
      type: "pie",
      width: 500,
      labels: _vm.landOwnershipLabels,
      data: _vm.landOwnershipValues
    }
  })], 1)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("\n                                            আগত খতিয়ান এর রেকর্ড টাইপ অনুযায়ী আবেদন ( ১ জানুয়ারি ২০২১ থেকে ৩১\n                                            ডিসেম্বর ২০২১)\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-6 offset-md-3"
  }, [_c("Charts", {
    attrs: {
      type: "pie",
      width: 565,
      labels: _vm.incomingKhatianRecordTypeLabels,
      data: _vm.incomingKhatianRecordTypeValues
    }
  })], 1)])])])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section-header border-bottom"
  }, [_c("h5", [_c("b", [_vm._v("পরিসংখ্যান")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "mb-0"
  }, [_c("li", [_c("b", [_vm._v("• ই-নামজারি সিস্টেমের পটভূমি ।")])]), _vm._v(" "), _c("li", [_c("p", {
    staticClass: "text-justify"
  }, [_vm._v("১২ ফেব্রুয়ারি, ২০১৭ তারিখে পরীক্ষামূলকভাবে\n                                            ই-নামজারি সিস্টেম চালু হয়।\n                                            বর্তমানে ই-নামজারি সিস্টেমের মাধ্যমে সারাদেশে ৬১ জেলার সকল উপজেলা\n                                            ভূমি অফিসে ১০০% ই-নামজারি চালু রয়েছে। সিস্টেমের ইউজারদের কারিগরি\n                                            সহায়তার জন্য একটি হেল্পলাইন এবং সাধারণ জনগণের জন্য একটি কল সেন্টার চলমান\n                                            আছে।")])]), _vm._v(" "), _c("li", [_c("b", [_vm._v("• ই-নামজারি সিস্টেমের সক্রিয় অফিস এবং ব্যবহারকারী ।")])]), _vm._v(" "), _c("li", [_c("p", [_vm._v(" বর্তমান ৬১ টি জেলায় ৪,৬০৫ টি অফিসে নামজারি সিস্টেমের কার্যক্রম\n                                            চলমান\n                                            আছে।")]), _vm._v(" "), _c("p", [_vm._v(" নামজারি সিস্টেমের মোট সক্রিয় ব্যবহারকারীর সংখ্যা ৮,৩৬৬ জন ।")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.arrow_box[data-v-340ac000] {\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n/* == Responsive mobile device == */\n.section-header[data-v-1657fb75] {\r\n    padding: 1rem 3rem;\n}\n.section-body[data-v-1657fb75] {\r\n    padding: 0.5rem 1.5rem 1rem 1.5rem;\n}\r\n\r\n/*Galaxy Phones*/\n@media screen and (min-device-width: 320px) and (max-device-width: 640px) {\n.section-header[data-v-1657fb75] {\r\n        padding: 1rem 2rem;\n}\n.section-body[data-v-1657fb75] {\r\n        padding: 0.5rem 20px 1rem 10px;\n}\r\n\r\n    /*.card-body {*/\r\n    /*    margin-left: -46px;*/\r\n    /*}*/\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css&");

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

/***/ "./resources/js/components/Charts.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Charts.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Charts_vue_vue_type_template_id_340ac000_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Charts.vue?vue&type=template&id=340ac000&scoped=true& */ "./resources/js/components/Charts.vue?vue&type=template&id=340ac000&scoped=true&");
/* harmony import */ var _Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Charts.vue?vue&type=script&lang=js& */ "./resources/js/components/Charts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Charts_vue_vue_type_style_index_0_id_340ac000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css& */ "./resources/js/components/Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Charts_vue_vue_type_template_id_340ac000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Charts_vue_vue_type_template_id_340ac000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "340ac000",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Charts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Charts.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Charts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Charts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Charts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_style_index_0_id_340ac000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Charts.vue?vue&type=style&index=0&id=340ac000&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_style_index_0_id_340ac000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_style_index_0_id_340ac000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_style_index_0_id_340ac000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_style_index_0_id_340ac000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Charts.vue?vue&type=template&id=340ac000&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Charts.vue?vue&type=template&id=340ac000&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_template_id_340ac000_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Charts.vue?vue&type=template&id=340ac000&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Charts.vue?vue&type=template&id=340ac000&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_template_id_340ac000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_template_id_340ac000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Statistic.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Statistic.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Statistic_vue_vue_type_template_id_1657fb75_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statistic.vue?vue&type=template&id=1657fb75&scoped=true& */ "./resources/js/components/Statistic.vue?vue&type=template&id=1657fb75&scoped=true&");
/* harmony import */ var _Statistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Statistic.vue?vue&type=script&lang=js& */ "./resources/js/components/Statistic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Statistic_vue_vue_type_style_index_0_id_1657fb75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css& */ "./resources/js/components/Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Statistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Statistic_vue_vue_type_template_id_1657fb75_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Statistic_vue_vue_type_template_id_1657fb75_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1657fb75",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Statistic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Statistic.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Statistic.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Statistic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Statistic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_style_index_0_id_1657fb75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Statistic.vue?vue&type=style&index=0&id=1657fb75&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_style_index_0_id_1657fb75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_style_index_0_id_1657fb75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_style_index_0_id_1657fb75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_style_index_0_id_1657fb75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Statistic.vue?vue&type=template&id=1657fb75&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Statistic.vue?vue&type=template&id=1657fb75&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_template_id_1657fb75_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Statistic.vue?vue&type=template&id=1657fb75&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Statistic.vue?vue&type=template&id=1657fb75&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_template_id_1657fb75_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_template_id_1657fb75_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);