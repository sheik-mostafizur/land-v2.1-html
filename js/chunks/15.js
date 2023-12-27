(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/application_request.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/application_request.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_page_comp_land_ownership__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common_page_comp/land-ownership */ "./resources/js/components/Application/common_page_comp/land-ownership.vue");
/* harmony import */ var _common_page_comp_land_queston__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common_page_comp/land-queston */ "./resources/js/components/Application/common_page_comp/land-queston.vue");
/* harmony import */ var _common_page_comp_initial_data_area_applicant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common_page_comp/initial_data_area_applicant */ "./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue");
/* harmony import */ var _Form_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Form/Tab */ "./resources/js/components/Form/Tab.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/FileUpload */ "./resources/js/helpers/FileUpload.js");
/* harmony import */ var _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/ValidationFile */ "./resources/js/helpers/ValidationFile.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/*  old components
import landOwnership from "./old_form_comp/land-ownership";
import landQueston from "./old_form_comp/land-queston";
import initial_data_area_applicant from "../Form/initial_data_area_applicant";
*/











/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Application',
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('checkDataCroySutro', ['firstStepData', 'areaData', 'imageInfo', 'fetchSecondStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('firstPageCommonData', ['firstPageCommonDatas', 'tracking_no', 'master_tracking_no', 'form_type', 'app_type'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage', 'getStateFormType', 'getStateAppType', 'getStateTrackingNo', 'getStateMasterTrackingNo'])),
  components: {
    landOwnership: _common_page_comp_land_ownership__WEBPACK_IMPORTED_MODULE_2__["default"],
    landQueston: _common_page_comp_land_queston__WEBPACK_IMPORTED_MODULE_3__["default"],
    initial_data_area_applicant: _common_page_comp_initial_data_area_applicant__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tab: _Form_Tab__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      oldLandProtal: "https://trland7.land.gov.bd/application",
      apiClientId: "namjari_draft",
      apiClientSecret: "mongo@namjari",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      nid_image: '',
      completeNIDImageFetch: false,
      JSONString: '',
      active_tab: 'ghosona',
      MainData: {
        Delegate: {
          nid: '',
          dob: '',
          gender: '',
          mobile: '',
          email: '',
          nid_photo: '',
          nid_name: '',
          nid_name_en: '',
          nid_father_name: '',
          nid_mother_name: '',
          nid_address: '',
          nid_gender: '',
          spouse: '',
          is_delete: 0,
          hash: '',
          nid_verified: 'no'
        },
        Owner: {
          owner_index: 0,
          owner_index_txt: '',
          nid: '',
          dob: '',
          mobile: '',
          company_name: '',
          representative: '',
          address: '',
          rjsc: '',
          incorporation_date: '',
          nid_photo: '',
          nid_name: '',
          nid_name_en: '',
          nid_father_name: '',
          nid_mother_name: '',
          nid_address: '',
          nid_gender: '',
          spouse: '',
          email: '',
          is_delete: 0,
          hash: '',
          nid_verified: 'no'
        },
        land_ownership_reference: [],
        land_ownership_reference_ids: [],
        office_info: [],
        is_grohita: '',
        is_company_transfard: 0,
        last_tax_given: 0,
        check_nid_exist: 0,
        check_rs_exist: 0,
        is_rs_owner: 0,
        is_namjari_exist: 0,
        division_text: '',
        district_text: '',
        upazila_text: '',
        office_text: '',
        mouja_text: ''
      },
      applicationData: {
        /*
            newly added as prototype
         */
        for_person_or_institute: '',
        check_nid_exist: '',
        show_nid_collect_section: false,
        is_company_transfard: 0,
        citizenData: {
          institute_owner_type: '',
          institute_owner_text: '',
          owner_type: '',
          nid: '',
          dob: '',
          mobile: '',
          email: '',
          imageInfo: {}
        },
        if_only_croy: 1,
        regular_applicaton: 1,
        /* QUESTION */
        is_record_flow: '',
        is_ownership_check: '',
        land_grabbing_check: '',
        land_not_grabbing_reason: '',
        check_acquisition: '',
        check_acquisition_reason: '',
        check_civil_case: '',
        civil_case_info: '',
        is_civil_case_prohibited: '',
        check_gov_interests: '',
        gov_interests_reason1: '',
        gov_interests_reason2: '',
        gov_interests_reason3: '',
        gov_interests_reason4: '',
        gov_interests_reason5: '',
        gov_interests_reason6: '',
        gov_interests_reason7: '',
        gov_interests_reason8: '',
        gov_interests_reason9: '',
        gov_interests_reason10: '',
        gov_interests_reason11: '',
        last_tax_given: '',
        last_jorip_info: '',
        declared_tofsil: '',
        khatian_type_list: [{
          "id": 7,
          "data": "আর এস"
        }, {
          "id": 8,
          "data": "এস এ"
        }, {
          "id": 4,
          "data": "সি এস"
        }, {
          "id": 9,
          "data": "পেটি"
        }, {
          "id": 5,
          "data": "দিয়ারা"
        }, {
          "id": 10,
          "data": "খেবট"
        }, {
          "id": 3,
          "data": "সিটি / মহানগর"
        }, {
          "id": 11,
          "data": "মিউনিসিপ্যালিটী"
        }, {
          "id": 12,
          "data": "বি এস"
        }, {
          "id": 13,
          "data": "বি আর এস"
        }, {
          "id": 14,
          "data": "অন্যান্য"
        }],
        is_khatian_exist_in_mouja: '',
        khatian_list_in_mouja: '',
        owner_type_state: '',
        /* AREA */
        division_id: '',
        district_id: '',
        upazila_id: '',
        mouja_id: '',
        select2_mouja_jl: 0,
        /* APPLICANT_INFO */
        owner_type: '',
        owner_index_txt: '',
        check_who_application_type: 1,
        nid_invalid: false,
        is_owner_main: true,
        /* OFFICE */
        office_info: [],
        office_id: 0,
        division_text: '',
        district_text: '',
        upazila_text: '',
        office_text: '',
        mouja_text: ''
      },
      land_ownership_reference: [],
      divisions: {
        ' 1': 'বরিশাল',
        ' 2': 'চট্টগ্রাম',
        ' 3': 'ঢাকা',
        ' 4': 'খুলনা',
        ' 5': 'রাজশাহী',
        ' 6': 'রংপুর',
        ' 7': 'সিলেট',
        ' 8': 'ময়মনসিংহ'
      },
      districts: {},
      upazilas: {},
      moujas: {},
      select2Mouja: [{
        id: '',
        text: 'মৌজা'
      }],
      commonDataFirstPage: {
        areaInfo: {
          division_id: '',
          division_text: '',
          district_id: '',
          district_text: '',
          upazila_id: '',
          upazila_text: '',
          mouja_id: '',
          select2_mouja_jl: '',
          mouja_text: '',
          office_id: ''
        },
        citizenData: {
          check_who_application_type: '',
          owner_type: '',
          owner_index_txt: '',
          dob: '',
          nid: '',
          mobile: '',
          email: '',
          imageInfo: {}
        },
        ownerShipData: {},
        land_ownership_reference_ids: [],
        other_reference_text: '',
        questions: {
          govt_interested_reason: []
        },
        regular_applicaton: 1
      },
      loading_icon: false,
      loading_message: false,
      requested_nid: '',
      requested_dob: '',
      requested_uid: '',
      requested_email: '',
      requested_mobile: '',
      requested_owner_type: '',
      nid_gender: '',
      verifyNidButtonSpinner: true,
      nid_verification_message_error: false,
      nid_verification_message_success: false,
      seconds: 59,
      minutes: 4,
      otp_mobile: '',
      user_otp_key: '',
      again_send_otp: false,
      otp_verify_error: false,
      otp_length_verify_error: false,
      otp_length_verify_error_txt: '',
      otp_message_sent: true,
      allDistricts: [],
      timeCountStart: true,
      smart_nid_no: ''
    };
  },
  created: function created() {
    this.getToken();
  },
  mounted: function mounted() {
    var _this = this;
    var qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
    var credentials = qs.stringify({
      'username': "mongo_namjari",
      'password': "mongo@namjari",
      'clientid': "namjari_draft"
    });
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(this.apiBaseURL + '/getToken', credentials).then(function (resp) {
      _this.headers = {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + resp.data.token
      };
      _this.getNamjariData();
    })["catch"](function (error) {
      console.log(error.response.data.message);
    });
    var commonStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(this.allCommonDataFirstPage);
    if (commonStateData) {
      this.applicationData.citizenData.owner_type = parseInt(commonStateData.citizenData.owner_type);
      this.applicationData.citizenData.institute_owner_type = commonStateData.citizenData.institute_owner_type;
      this.applicationData.citizenData.institute_owner_text = commonStateData.citizenData.institute_owner_text;
      this.applicationData.citizenData.nid = commonStateData.citizenData.nid;
      this.applicationData.citizenData.dob = commonStateData.citizenData.dob;
      this.applicationData.citizenData.mobile = commonStateData.citizenData.mobile;
      this.applicationData.citizenData.email = commonStateData.citizenData.email;
      if (Object.keys(commonStateData.citizenData.imageInfo).length > 0) {
        this.applicationData.citizenData.imageInfo = commonStateData.citizenData.imageInfo;
        this.applicationData.citizenData.owner_index = commonStateData.citizenData.imageInfo.owner_index;
      }
      this.applicationData.for_person_or_institute = commonStateData.questions.for_person_or_institute;
      this.applicationData.show_nid_collect_section = commonStateData.questions.show_nid_collect_section;
      this.applicationData.owner_type_state = commonStateData.questions.owner_type_state;
      this.applicationData.is_company_transfard = commonStateData.questions.is_company_transfard;
      this.applicationData.check_nid_exist = commonStateData.questions.check_nid_exist;
      this.applicationData.is_record_flow = commonStateData.questions.is_record_flow;
      this.applicationData.is_ownership_check = commonStateData.questions.is_ownership_check;
      this.applicationData.land_grabbing_check = commonStateData.questions.land_grabbing_check;
      this.applicationData.land_not_grabbing_reason = commonStateData.questions.land_not_grabbing_reason;
      this.applicationData.check_acquisition = commonStateData.questions.check_acquisition;
      this.applicationData.check_acquisition_reason = commonStateData.questions.check_acquisition_reason;
      this.applicationData.check_civil_case = commonStateData.questions.check_civil_case;
      this.applicationData.civil_case_info = commonStateData.questions.civil_case_info;
      this.applicationData.is_civil_case_prohibited = commonStateData.questions.is_civil_case_prohibited;
      this.applicationData.check_gov_interests = commonStateData.questions.check_gov_interests;
      this.applicationData.last_tax_given = commonStateData.questions.last_tax_given;
      this.applicationData.last_jorip_info = commonStateData.questions.last_jorip_info;
      this.applicationData.declared_tofsil = commonStateData.questions.declared_tofsil;
      this.applicationData.is_khatian_exist_in_mouja = commonStateData.questions.is_khatian_exist_in_mouja;
      this.applicationData.khatian_list_in_mouja = commonStateData.questions.khatian_list_in_mouja;
      this.applicationData.gov_interests_reason1 = commonStateData.questions.govt_interested_reason.gov_interests_reason1;
      this.applicationData.gov_interests_reason2 = commonStateData.questions.govt_interested_reason.gov_interests_reason2;
      this.applicationData.gov_interests_reason3 = commonStateData.questions.govt_interested_reason.gov_interests_reason3;
      this.applicationData.gov_interests_reason4 = commonStateData.questions.govt_interested_reason.gov_interests_reason4;
      this.applicationData.gov_interests_reason5 = commonStateData.questions.govt_interested_reason.gov_interests_reason5;
      this.applicationData.gov_interests_reason6 = commonStateData.questions.govt_interested_reason.gov_interests_reason6;
      this.applicationData.gov_interests_reason7 = commonStateData.questions.govt_interested_reason.gov_interests_reason7;
      this.applicationData.gov_interests_reason8 = commonStateData.questions.govt_interested_reason.gov_interests_reason8;
      this.applicationData.gov_interests_reason9 = commonStateData.questions.govt_interested_reason.gov_interests_reason9;
      this.applicationData.gov_interests_reason10 = commonStateData.questions.govt_interested_reason.gov_interests_reason10;
      this.applicationData.gov_interests_reason11 = commonStateData.questions.govt_interested_reason.gov_interests_reason11;
      this.applicationData.khatian_type_list = commonStateData.khatian_type_list;
      this.applicationData.regular_applicaton = commonStateData.regular_applicaton;
    }
    var areaStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(this.firstPageCommonDatas.areaInfo);
    if (areaStateData) {
      this.applicationData.division_id = ' ' + areaStateData.division_id;
      this.applicationData.mouja_id = areaStateData.mouja_id;
      this.applicationData.jl_no = areaStateData.jl_no;
      this.applicationData.select2_mouja_jl = areaStateData.select2_mouja_jl;
      this.applicationData.division_text = areaStateData.division_text;
      this.applicationData.district_text = areaStateData.district_text;
      this.applicationData.upazila_text = areaStateData.upazila_text;
      this.applicationData.mouja_text = areaStateData.mouja_text;
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('tokenState', ['getToken'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('checkDataCroySutro', ['getFirstStepData', 'getAreaData', 'getImageInfo', 'getSecondStepData', 'getThirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData', 'setTrackingNo', 'setMasterTrackingNo', 'setFormType', 'setAppType'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('oldFormState', ['setCitizenCommonData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('oldFormState', ['clearAllOldFormStateData'])), {}, {
    questionsValidation: function questionsValidation() {
      var queslist = [];
      if (this.applicationData.if_only_croy == 1) {
        // question list displayed

        queslist.push(this.applicationData.for_person_or_institute);
        // "ব্যক্তি মালিকানাধীন" হলে "জাতীয় পরিচয়পত্র আছে কিনা" এই প্রশ্নের উত্তর দিতে হবে
        if (this.applicationData.for_person_or_institute == 1) {
          queslist.push(this.applicationData.check_nid_exist);
        }

        // "জাতীয় পরিচয়পত্র আছে" এর উত্তর "হ্যাঁঁ" হলে 'গ্রহীতা/প্রতিনিধি' এর উত্তর দিতে
        if (this.applicationData.check_nid_exist == 1) {
          queslist.push(this.applicationData.citizenData.owner_type);
        }

        // "প্রাতিষ্ঠানিক মালিকানাধীন" হলে "মালিকের ধরণ" সিলেক্ট করতে হবে
        if (this.applicationData.for_person_or_institute == 2) {
          queslist.push(this.applicationData.citizenData.institute_owner_type);
        }
        queslist.push(this.applicationData.is_record_flow);
        queslist.push(this.applicationData.is_ownership_check);
        queslist.push(this.applicationData.land_grabbing_check);
        queslist.push(this.applicationData.check_acquisition);
        queslist.push(this.applicationData.check_civil_case);
        queslist.push(this.applicationData.check_gov_interests);
        queslist.push(this.applicationData.last_tax_given);
        queslist.push(this.applicationData.last_jorip_info);
        queslist.push(this.applicationData.declared_tofsil);
        queslist.push(this.applicationData.is_khatian_exist_in_mouja);
      }
      if (queslist.length > 0) {
        var flag = true;
        var _iterator = _createForOfIteratorHelper(queslist),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var ele = _step.value;
            if (ele == '') {
              flag = false;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return flag;
      } else {
        return true;
      }
    },
    validationMechanism: function validationMechanism() {
      var allFieldValidate = [];
      var mouja = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#mouja_id').val();
      //
      // if(this.applicationData.for_person_or_institute ==1){
      //
      // }else if (this.applicationData.for_person_or_institute ==2){
      //
      // }else{
      //     alert("সকল ষ্টার যুক্ত ফিল্ড গুলো পূরণ করুন। ");
      // }

      if (mouja) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('#mouja_id').removeClass('error_message_required');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('#mouja_id').addClass('error_message_required');
        allFieldValidate.push(0);
      }
      if (allFieldValidate.indexOf(0) === -1) {
        return true;
      }
      return false;
    },
    setLandOwnershipStateData: function setLandOwnershipStateData() {
      var landOwnerShipStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(this.firstPageCommonDatas.ownerShipData);
      if (landOwnerShipStateData) {
        for (var prop in landOwnerShipStateData) {
          this.land_ownership_reference[prop].active = landOwnerShipStateData[prop].active;
          this.land_ownership_reference[prop].display = landOwnerShipStateData[prop].display;
          this.land_ownership_reference[prop].value = landOwnerShipStateData[prop].value;
        }
        if (this.land_ownership_reference['Other'].active == true) {
          this.applicationData.other_reference = true;
          this.applicationData.other_reference_text = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(this.firstPageCommonDatas.other_reference_text);
        } else {
          this.applicationData.other_reference = false;
        }
        if (this.land_ownership_reference['Auction'].active == true || this.land_ownership_reference['Decree'].active == true || this.land_ownership_reference['Settlement'].active == true || this.land_ownership_reference['Inherit'].active == true || this.land_ownership_reference['Odhigrohon'].active == true || this.land_ownership_reference['Other'].active == true) {
          this.applicationData.if_only_croy = 0;
        }
      }
    },
    getNamjariData: function getNamjariData() {
      var _this2 = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/namjari-data', '', {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this2.land_ownership_reference = resp.data.data.land_ownership_reference;
          _this2.setLandOwnershipStateData();
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/get-all-district', '', {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this2.allDistricts = resp.data.data.districts;
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    customDateFormat: function customDateFormat(date) {
      return moment__WEBPACK_IMPORTED_MODULE_6___default()(date).format('YYYY-MM-DD');
    },
    hideModal: function hideModal() {
      this.$refs['nid-verify-modal'].hide();
    },
    hideSmartNidMsgModal: function hideSmartNidMsgModal() {
      this.$refs['smart-nid-found-modal'].hide();
    },
    verifyNid: function verifyNid() {
      var _this3 = this;
      this.completeNIDImageFetch = this.nid_image == '' ? false : true;
      this.$refs['nid-verify-modal'].show();
      this.$refs['smart-nid-found-modal'].hide();
      var formData = new FormData();
      formData.append('nid', this.requested_nid);
      formData.append('dob', this.requested_dob);
      this.loading_icon = true;
      this.loading_message = true;
      var self = this;
      self.nid_verification_message_success = false;
      self.nid_verification_message_error = false;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/nid-verify', formData, {
        headers: this.headers
      }).then(function (resp) {
        /*if(resp.data.data == -1){
            this.$refs['nid-verify-modal'].hide();
            this.$refs['smart-nid-found-modal'].show();
            return false;
        }*/
        _this3.processNidData(resp.data.data.data);
        // save NID response on localStorage for log
        var nidResponse = _objectSpread({}, resp.data.data.data); // copy immutably
        delete nidResponse.photo;
        var encodedNidResponse = encodeURIComponent(JSON.stringify(nidResponse));
        localStorage.setItem('logInfo', encodedNidResponse);

        // Clear State Data after Verify NID starts
        if (_this3.$store.state.firstPageCommonData.form_type != 5) {
          _this3.removeStateData();
        }
        self.loading_icon = false;
        self.loading_message = false;
        self.nid_verification_message_success = true;
        self.verifyNidButtonSpinner = false;
      })["catch"](function (error) {
        if (typeof error.response.data.data.responseCode != 'undefined' && error.response.data.data.responseCode == -1) {
          _this3.smart_nid_no = error.response.data.data.smart_nid_no;
          _this3.$refs['nid-verify-modal'].hide();
          _this3.$refs['smart-nid-found-modal'].show();
          self.nid_verification_message_error = false;
        } else {
          self.nid_verification_message_error = true;
        }
        self.loading_icon = false;
        self.loading_message = false;
        self.globalErrorValidationForNextButton = false;
        self.verifyNidButtonSpinner = false;
      });
    },
    eRegProcess: function () {
      var _eRegProcess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this4 = this;
        var formData, base64;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.manageStateForFirstPageCommonData();
              case 2:
                _context.next = 4;
                return this.setFirstPageCommonData(this.commonDataFirstPage);
              case 4:
                formData = new FormData();
                formData.append('MainData', JSON.stringify(this.MainData));
                formData.append('commonDataFirstPage', JSON.stringify(this.firstPageCommonDatas));
                formData.append('secondPageData', JSON.stringify(this.$store.state.checkDataCroySutro.secondStepData));
                formData.append('tracking_no', this.$store.state.firstPageCommonData.tracking_no);
                formData.append('master_tracking_no', this.$store.state.firstPageCommonData.master_tracking_no);
                base64 = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_12__["default"].encryption(this.applicationData.regular_applicaton);
                _context.next = 13;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/EReg-draft-search-with-nid-data', formData).then(function (resp) {
                  if (resp.data.status == 200 && resp.data.responseCode == 'RSP200') {
                    var respDraftStateData = resp.data.data;

                    // console.log(respDraftStateData.data.stateData.secondStepData,455);

                    _this4.setFirstPageCommonData('');
                    _this4.setFirstPageCommonData(respDraftStateData.data.commonStateData);

                    // this.setTrackingNo(this.given_tracking_no.trim());
                    _this4.setFormType(respDraftStateData.form_type);
                    _this4.setAppType(respDraftStateData.app_type);
                    _this4.getAreaData('');
                    _this4.getAreaData(respDraftStateData.data.stateData.areaData);
                    _this4.getFirstStepData('');
                    _this4.getFirstStepData(respDraftStateData.data.stateData.firstStepData);
                    _this4.getSecondStepData('');
                    _this4.getSecondStepData(respDraftStateData.data.stateData.secondStepData);
                    _this4.getThirdStepData('');
                    _this4.getThirdStepData(respDraftStateData.data.stateData.thirdStepData);
                  } else {
                    _this4.error_message = "উক্ত নম্বর দিয়ে আবেদন খুঁজে পাওয়া যায় নি।";
                  }
                  _this4.loading_icon = false;
                })["catch"](function (error) {
                  console.log(error);
                  // this.error_message = error.response.data.message;
                  _this4.loading_icon = false;
                });
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function eRegProcess() {
        return _eRegProcess.apply(this, arguments);
      }
      return eRegProcess;
    }(),
    nextPageAfterVerify: function () {
      var _nextPageAfterVerify = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var base64;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                base64 = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_12__["default"].encryption(this.applicationData.regular_applicaton);
                if (!(this.$store.state.firstPageCommonData.form_type == 5)) {
                  _context2.next = 4;
                  break;
                }
                _context2.next = 4;
                return this.eRegProcess();
              case 4:
                if (!(this.$store.state.firstPageCommonData.form_type != 5)) {
                  _context2.next = 9;
                  break;
                }
                _context2.next = 7;
                return this.manageStateForFirstPageCommonData();
              case 7:
                _context2.next = 9;
                return this.setFirstPageCommonData(this.commonDataFirstPage);
              case 9:
                /**
                 * check citizen mobile no has been changed or not.
                 * if changed then update MainData
                 */
                this.MainData.Delegate.mobile = this.MainData.Delegate.mobile == this.commonDataFirstPage.citizenData.mobile ? this.MainData.Delegate.mobile : this.commonDataFirstPage.citizenData.mobile;
                this.MainData.Owner.mobile = this.MainData.Owner.mobile == this.commonDataFirstPage.citizenData.mobile ? this.MainData.Owner.mobile : this.commonDataFirstPage.citizenData.mobile;
                if (!(this.$store.state.firstPageCommonData.form_type != 5)) {
                  _context2.next = 16;
                  break;
                }
                _context2.next = 14;
                return this.getFirstStepData('');
              case 14:
                _context2.next = 16;
                return this.getFirstStepData(this.MainData);
              case 16:
                _context2.next = 18;
                return this.setCitizenCommonData({
                  'delegate': this.MainData.Delegate,
                  'owner': this.MainData.Owner
                });
              case 18:
                if (!(this.applicationData.regular_applicaton == 1)) {
                  _context2.next = 24;
                  break;
                }
                _context2.next = 21;
                return this.hideModal();
              case 21:
                return _context2.abrupt("return", this.$router.push({
                  path: '/application/' + base64
                }));
              case 24:
                if (!(this.applicationData.regular_applicaton == 0)) {
                  _context2.next = 28;
                  break;
                }
                _context2.next = 27;
                return this.hideModal();
              case 27:
                return _context2.abrupt("return", this.$router.push({
                  path: '/namjari-application/' + base64
                }));
              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function nextPageAfterVerify() {
        return _nextPageAfterVerify.apply(this, arguments);
      }
      return nextPageAfterVerify;
    }(),
    processNidData: function processNidData(responseData) {
      if (responseData.photo != '') {
        this.storeNidImage(responseData.photo);
      }
      if (this.MainData.is_grohita == 0) {
        this.MainData.Delegate.nid = this.convert2English(this.applicationData.citizenData.nid);
        this.MainData.Delegate.dob = this.customDateFormat(this.applicationData.citizenData.dob);
        this.MainData.Delegate.mobile = this.convert2English(this.applicationData.citizenData.mobile);
        this.MainData.Delegate.email = this.applicationData.citizenData.email;
        this.MainData.Delegate.nid_name = responseData.name;
        this.MainData.Delegate.nid_name_en = responseData.nameEn;
        this.MainData.Delegate.nid_father_name = responseData.father;
        this.MainData.Delegate.nid_mother_name = responseData.mother;
        this.MainData.Delegate.nid_address = responseData.permanentAddress;
        this.MainData.Delegate.nid_gender = responseData.gender;
        this.MainData.Delegate.spouse = responseData.spouse;
        this.MainData.Delegate.hash = responseData.hash;
        this.MainData.Delegate.district_text = responseData.permanentDistrict;
        this.MainData.Delegate.upazila_text = responseData.permanentUpazila;
        this.MainData.Delegate.requested_uid = this.requested_uid;
        this.MainData.Delegate.nid_verified = 'yes';
        this.nid_gender = responseData.gender === 'male' ? 'পুরুষ' : 'মহিলা';
      } else {
        this.MainData.Delegate.nid = this.convert2English(this.applicationData.citizenData.nid);
        this.MainData.Delegate.dob = this.customDateFormat(this.applicationData.citizenData.dob);
        this.MainData.Delegate.mobile = this.convert2English(this.applicationData.citizenData.mobile);
        this.MainData.Delegate.company_name = '';
        this.MainData.Delegate.representative = '';
        this.MainData.Delegate.address = '';
        this.MainData.Delegate.rjsc = '';
        this.MainData.Delegate.incorporation_date = '';
        this.MainData.Delegate.nid_name = responseData.name;
        this.MainData.Delegate.nid_name_en = responseData.nameEn;
        this.MainData.Delegate.nid_father_name = responseData.father;
        this.MainData.Delegate.nid_mother_name = responseData.mother;
        this.MainData.Delegate.nid_address = responseData.permanentAddress;
        this.MainData.Delegate.nid_gender = responseData.gender;
        this.MainData.Delegate.spouse = responseData.spouse;
        this.MainData.Delegate.hash = responseData.hash;
        this.MainData.Delegate.district_text = responseData.permanentDistrict;
        this.MainData.Delegate.upazila_text = responseData.permanentUpazila;
        this.MainData.Delegate.requested_uid = this.requested_uid;
        this.nid_gender = responseData.gender === 'male' ? 'পুরুষ' : 'মহিলা';
        this.MainData.Delegate.email = this.applicationData.citizenData.email;
        this.MainData.Delegate.nid_verified = 'yes';
        this.MainData.Owner.owner_index = this.applicationData.owner_type;
        this.MainData.Owner.owner_type_text = this.applicationData.for_person_or_institute == 1 ? 'ব্যক্তি মালিকানাধীন' : this.applicationData.institute_owner_text;
        this.MainData.Owner.nid = this.applicationData.citizenData.nid;
        this.MainData.Owner.dob = this.customDateFormat(this.applicationData.citizenData.dob);
        this.MainData.Owner.mobile = this.applicationData.citizenData.mobile;
        this.MainData.Owner.company_name = '';
        this.MainData.Owner.representative = '';
        this.MainData.Owner.address = '';
        this.MainData.Owner.rjsc = '';
        this.MainData.Owner.incorporation_date = '';
        this.MainData.Owner.nid_name = responseData.name;
        this.MainData.Owner.nid_name_en = responseData.nameEn;
        this.MainData.Owner.nid_father_name = responseData.father;
        this.MainData.Owner.nid_mother_name = responseData.mother;
        this.MainData.Owner.nid_address = responseData.permanentAddress;
        this.MainData.Owner.nid_gender = responseData.gender;
        this.MainData.Owner.spouse = responseData.spouse;
        this.MainData.Owner.hash = responseData.hash;
        this.MainData.Owner.requested_uid = this.requested_uid;
        this.MainData.Owner.email = this.applicationData.citizenData.email;
        this.MainData.Owner.nid_verified = 'yes';
      }
      this.MainData.allDistricts = this.allDistricts;
    },
    storeNidImage: function () {
      var _storeNidImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(filePath) {
        var _this5 = this;
        var url;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = this.apiBaseURL + '/store-base64';
                _context3.next = 3;
                return fetch(filePath).then(function (response) {
                  return response.blob();
                }).then(function (blob) {
                  var reader = new FileReader();
                  reader.readAsDataURL(blob);
                  reader.onload = function () {
                    _this5.nid_image = reader.result.split(',')[1];
                    var form_data = new FormData();
                    form_data.append('file', reader.result.split(',')[1]);
                    var resp = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_8__["default"].storeNidImgAsBase64(url, form_data, _this5.headers);
                    _this5.storeNidImageResp(resp);
                  };
                  reader.onerror = function (error) {
                    console.log('Error: ', error);
                  };
                })["catch"](function (err) {
                  return console.log("".concat(err, " something wrong on image store"));
                });
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function storeNidImage(_x) {
        return _storeNidImage.apply(this, arguments);
      }
      return storeNidImage;
    }(),
    storeNidImageResp: function storeNidImageResp(db_response) {
      var _this6 = this;
      var self = this;
      db_response.payload.then(function (data) {
        if (data.data.status == 200) {
          // if(self.applicationData.check_who_application_type == 1 ){
          if (self.applicationData.citizenData.owner_type == 1) {
            self.commonDataFirstPage.citizenData.imageInfo.is_grohita = self.MainData.is_grohita;
            self.applicationData.citizenData.imageInfo.is_grohita = self.MainData.is_grohita;
          } else {
            self.commonDataFirstPage.citizenData.imageInfo.is_grohita = 0;
            self.applicationData.citizenData.imageInfo.is_grohita = 0;
          }
          self.commonDataFirstPage.citizenData.imageInfo.uuid = data.data.data.uuid;
          self.commonDataFirstPage.citizenData.imageInfo.owner_index = self.applicationData.citizenData.owner_type;
          self.applicationData.citizenData.imageInfo.uuid = data.data.data.uuid;
          self.applicationData.citizenData.imageInfo.owner_index = self.applicationData.citizenData.owner_type;
          self.MainData.Delegate.nid_photo = data.data.data.uuid;
          self.MainData.Owner.nid_photo = data.data.data.uuid;
          _this6.requested_uid = data.data.data.uuid;
          return data.data.data.uuid;
        }
      });
    },
    removeStateData: function removeStateData() {
      var redirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setFirstPageCommonData('');
      this.getFirstStepData('');
      this.getSecondStepData('');
      this.getThirdStepData('');
      this.getAreaData('');
      this.getImageInfo('');
      this.setTrackingNo('');
      this.setMasterTrackingNo('');
      this.setFormType('');
      this.setAppType('');
      this.setFirstPageCommonData('');
      this.clearAllOldFormStateData('');
      if (redirect) {
        return this.$router.push({
          path: '/'
        });
      }
    },
    manageStateForFirstPageCommonData: function manageStateForFirstPageCommonData() {
      this.commonDataFirstPage.ownerShipData = this.land_ownership_reference;
      this.commonDataFirstPage.land_ownership_reference_ids = this.MainData.land_ownership_reference_ids;
      this.commonDataFirstPage.other_reference_text = this.applicationData.other_reference_text;
      this.commonDataFirstPage.areaInfo.division_id = this.applicationData.division_id.trim();
      this.commonDataFirstPage.areaInfo.division_text = this.applicationData.division_text;
      this.commonDataFirstPage.areaInfo.district_id = this.applicationData.district_id.trim();
      this.commonDataFirstPage.areaInfo.district_text = this.applicationData.district_text;
      this.commonDataFirstPage.areaInfo.upazila_id = this.applicationData.upazila_id.trim();
      this.commonDataFirstPage.areaInfo.upazila_text = this.applicationData.upazila_text;
      this.commonDataFirstPage.areaInfo.office_id = this.applicationData.office_id;
      this.commonDataFirstPage.areaInfo.mouja_id = this.applicationData.mouja_id.trim();
      this.commonDataFirstPage.areaInfo.select2_mouja_jl = this.applicationData.select2_mouja_jl.trim();
      this.commonDataFirstPage.areaInfo.mouja_text = this.applicationData.mouja_text;
      this.commonDataFirstPage.citizenData.check_who_application_type = this.applicationData.check_who_application_type;
      this.commonDataFirstPage.citizenData.is_grohita = this.MainData.is_grohita;
      // this.commonDataFirstPage.citizenData.owner_index_txt = this.applicationData.owner_index_txt;

      this.commonDataFirstPage.citizenData.nid = this.applicationData.citizenData.nid;
      this.commonDataFirstPage.citizenData.dob = this.applicationData.citizenData.dob;
      this.commonDataFirstPage.citizenData.email = this.applicationData.citizenData.email;
      this.commonDataFirstPage.citizenData.mobile = this.applicationData.citizenData.mobile;
      this.commonDataFirstPage.citizenData.owner_type = this.applicationData.citizenData.owner_type;
      this.commonDataFirstPage.citizenData.institute_owner_type = this.applicationData.citizenData.institute_owner_type;
      this.commonDataFirstPage.citizenData.institute_owner_text = this.applicationData.citizenData.institute_owner_text;
      /*
      this.commonDataFirstPage.citizenData.nid = (this.applicationData.check_who_application_type == 1) ? this.applicationData.citizenData.nid : this.applicationData.Defender.nid;
      this.commonDataFirstPage.citizenData.dob = (this.applicationData.check_who_application_type == 1) ? this.applicationData.citizenData.dob : this.applicationData.Defender.dob;
      this.commonDataFirstPage.citizenData.email = (this.applicationData.check_who_application_type == 1) ? this.applicationData.citizenData.email : this.applicationData.Defender.email;
      this.commonDataFirstPage.citizenData.mobile = (this.applicationData.check_who_application_type == 1) ? this.applicationData.citizenData.mobile : this.applicationData.Defender.mobile;
      */
      this.commonDataFirstPage.citizenData.imageInfo = this.applicationData.citizenData.imageInfo;
      /** questions */

      this.commonDataFirstPage.questions.for_person_or_institute = this.applicationData.for_person_or_institute;
      this.commonDataFirstPage.questions.show_nid_collect_section = this.applicationData.show_nid_collect_section;
      this.commonDataFirstPage.questions.owner_type_state = this.applicationData.owner_type_state;
      this.commonDataFirstPage.questions.is_company_transfard = this.applicationData.is_company_transfard;
      this.commonDataFirstPage.questions.check_nid_exist = this.applicationData.check_nid_exist;
      this.commonDataFirstPage.questions.is_record_flow = this.applicationData.is_record_flow;
      this.commonDataFirstPage.questions.is_ownership_check = this.applicationData.is_ownership_check;
      this.commonDataFirstPage.questions.land_grabbing_check = this.applicationData.land_grabbing_check;
      this.commonDataFirstPage.questions.land_not_grabbing_reason = this.applicationData.land_not_grabbing_reason;
      this.commonDataFirstPage.questions.check_acquisition = this.applicationData.check_acquisition;
      this.commonDataFirstPage.questions.check_acquisition_reason = this.applicationData.check_acquisition_reason;
      this.commonDataFirstPage.questions.check_civil_case = this.applicationData.check_civil_case;
      this.commonDataFirstPage.questions.civil_case_info = this.applicationData.civil_case_info;
      this.commonDataFirstPage.questions.is_civil_case_prohibited = this.applicationData.is_civil_case_prohibited;
      this.commonDataFirstPage.questions.check_gov_interests = this.applicationData.check_gov_interests;
      this.commonDataFirstPage.questions.last_tax_given = this.applicationData.last_tax_given;
      this.commonDataFirstPage.questions.last_jorip_info = this.applicationData.last_jorip_info;
      this.commonDataFirstPage.questions.declared_tofsil = this.applicationData.declared_tofsil;
      this.commonDataFirstPage.questions.is_khatian_exist_in_mouja = this.applicationData.is_khatian_exist_in_mouja;
      this.commonDataFirstPage.questions.khatian_list_in_mouja = this.applicationData.khatian_list_in_mouja;
      var govt_interested_reason = {};
      govt_interested_reason.gov_interests_reason1 = this.applicationData.gov_interests_reason1;
      govt_interested_reason.gov_interests_reason2 = this.applicationData.gov_interests_reason2;
      govt_interested_reason.gov_interests_reason3 = this.applicationData.gov_interests_reason3;
      govt_interested_reason.gov_interests_reason4 = this.applicationData.gov_interests_reason4;
      govt_interested_reason.gov_interests_reason5 = this.applicationData.gov_interests_reason5;
      govt_interested_reason.gov_interests_reason6 = this.applicationData.gov_interests_reason6;
      govt_interested_reason.gov_interests_reason7 = this.applicationData.gov_interests_reason7;
      govt_interested_reason.gov_interests_reason8 = this.applicationData.gov_interests_reason8;
      govt_interested_reason.gov_interests_reason9 = this.applicationData.gov_interests_reason9;
      govt_interested_reason.gov_interests_reason10 = this.applicationData.gov_interests_reason10;
      govt_interested_reason.gov_interests_reason11 = this.applicationData.gov_interests_reason11;
      this.commonDataFirstPage.questions.govt_interested_reason = govt_interested_reason;

      /** questions */
      this.commonDataFirstPage.khatian_type_list = this.applicationData.khatian_type_list;
      this.commonDataFirstPage.regular_applicaton = this.applicationData.regular_applicaton;
    },
    proceedNextPage: function proceedNextPage() {
      var validateDataReq = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_9__["default"].validationMechanism(this.$refs.application_form_first_page, '.required_field', 'required');
      var validateDataMobile = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_9__["default"].validationMechanism(this.$refs.application_form, '.mobile_bn', 'mobile');
      var validateDataEmail = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_9__["default"].validationMechanism(this.$refs.application_form, '.email_validate', 'email');
      var validateDataNumber = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_9__["default"].validationMechanism(this.$refs.application_form, '.only_number', 'only_number');
      var validateNID = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_9__["default"].validationMechanism(this.$refs.application_form, '.nid', 'nid');
      var validateData = this.validationMechanism();
      if (!validateData || !validateDataReq || !validateDataMobile || !validateDataEmail || !validateDataNumber || !validateNID || !this.questionsValidation()) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_12__["default"].sweetAlertInformativeBox(this, 'আপনার জমির মালিকানা সূত্র,আবেদনকারীর তথ্য,মৌজার তথ্য সহ সকল প্রয়োজনীয় তথ্য পূরণ করে অগ্রসর হন। ', 'ঠিক আছে');
        return false;
      }
      if (this.applicationData.mouja_id == '') {
        this.applicationData.select2_mouja_jl = '';
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_12__["default"].sweetAlertInformativeBox(this, 'মৌজা সিলেক্ট করুন। ', 'ঠিক আছে');
        return false;
      }
      this.MainData.land_ownership_reference_ids = [];
      for (var prop in this.land_ownership_reference) {
        if (this.land_ownership_reference[prop].active) {
          this.MainData.land_ownership_reference_ids.push(this.land_ownership_reference[prop].value);
          if (prop == 'Other') {
            this.MainData.other_reference = this.applicationData.other_reference;
            this.MainData.other_reference_text = this.applicationData.other_reference_text;
          }
        }
      }

      /* SET APPLICATION WILL REDIRECT WHERE */

      /*  check the ownership list first
              else
          check the questions answers */
      // if (
      //         (CommonFunction.isInArray(2, this.MainData.land_ownership_reference_ids) ||
      //         CommonFunction.isInArray(4, this.MainData.land_ownership_reference_ids) ||
      //         CommonFunction.isInArray(5, this.MainData.land_ownership_reference_ids) ||
      //         CommonFunction.isInArray(6, this.MainData.land_ownership_reference_ids) ||
      //         CommonFunction.isInArray(7, this.MainData.land_ownership_reference_ids) ||
      //         CommonFunction.isInArray(8, this.MainData.land_ownership_reference_ids))
      //             ||
      //         (parseInt(this.applicationData.check_nid_exist) == 2 ||
      //         parseInt(this.applicationData.is_record_flow) == 0 ||
      //         // parseInt(this.applicationData.last_tax_given) == 0 ||
      //         !CommonFunction.isInArray(parseInt(this.applicationData.last_jorip_info),[3,7,12,13]))
      //     )
      // {
      //     this.applicationData.regular_applicaton = 1;    //old form
      // }
      // else{
      this.applicationData.regular_applicaton = 0; // new form
      // }

      this.MainData.regular_applicaton = this.applicationData.regular_applicaton;
      this.MainData.is_company_transfard = this.applicationData.is_company_transfard;
      this.MainData.last_tax_given = this.applicationData.last_tax_given;
      this.MainData.check_nid_exist = this.applicationData.check_nid_exist;
      // this.MainData.check_rs_exist = this.applicationData.check_rs_exist;
      // this.MainData.is_rs_owner = this.applicationData.is_rs_owner;
      // this.MainData.is_namjari_exist = (this.applicationData.is_namjari_exist == '') ? 0 : this.applicationData.is_namjari_exist;
      this.MainData.division_id = this.applicationData.division_id;
      this.MainData.district_id = this.applicationData.district_id;
      this.MainData.upazila_id = this.applicationData.upazila_id;
      this.MainData.mouja_id = this.applicationData.mouja_id;
      this.MainData.jl_no = this.applicationData.jl_no;
      this.MainData.select2_mouja_jl = this.applicationData.select2_mouja_jl;
      this.MainData.office_info = this.applicationData.office_info;
      this.MainData.office_id = this.applicationData.office_id;
      this.MainData.land_ownership_reference = this.land_ownership_reference;
      this.MainData.division_text = this.applicationData.division_text;
      this.MainData.district_text = this.applicationData.district_text;
      this.MainData.upazila_text = this.applicationData.upazila_text;
      this.MainData.mouja_text = this.applicationData.mouja_text;
      this.MainData.office_text = this.applicationData.office_info.title_bn;
      this.requested_nid = this.convert2English(this.applicationData.citizenData.nid);
      this.requested_dob = this.customDateFormat(this.applicationData.citizenData.dob);
      this.requested_email = this.applicationData.citizenData.email;
      this.requested_mobile = this.convert2English(this.applicationData.citizenData.mobile);
      this.MainData.is_grohita = this.applicationData.citizenData.owner_type == 1 ? 1 : 0;
      var commonStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(this.allCommonDataFirstPage);
      if (commonStateData) {
        if (this.applicationData.for_person_or_institute != commonStateData.questions.for_person_or_institute) {
          // Clear State Data after Verify NID starts
          this.removeStateData();
          this.applicationData.owner_type_state = '_' + this.applicationData.for_person_or_institute;
          // Clear State Data after Verify NID ends
        }
      }

      this.otpMechanism();
    },
    checkDataStateChange: function checkDataStateChange() {
      var appData = this.applicationData;
      var citizenData = this.$store.state.firstPageCommonData.firstPageCommonDatas.citizenData;
      var areaData = this.$store.state.firstPageCommonData.firstPageCommonDatas.areaInfo;
      var is_data_changed = false;
      if (areaData) {
        if (appData['division_id'].trim() !== areaData.division_id) {
          is_data_changed = true;
        }
        if (appData['district_id'].trim() !== areaData.district_id) {
          is_data_changed = true;
        }
        if (appData['upazila_id'].trim() !== areaData.upazila_id) {
          is_data_changed = true;
        }
        if (appData['mouja_id'].trim() !== areaData.mouja_id) {
          is_data_changed = true;
        }
      }
      return is_data_changed;
    },
    otpMechanism: function otpMechanism() {
      var _this7 = this;
      var mobile = this.convert2English(this.applicationData.citizenData.mobile);
      var storage_mobile = typeof this.$store.state.firstPageCommonData.firstPageCommonDatas.citizenData == 'undefined' ? '' : this.$store.state.firstPageCommonData.firstPageCommonDatas.citizenData.mobile;
      if (storage_mobile != mobile) {
        this.otp_mobile = mobile;
        var formData = new FormData();
        formData.append('mobile', this.otp_mobile);
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/otp-send', formData).then(function () {
          _this7.minutes = 4;
          _this7.seconds = 59;
        })["catch"](function () {
          console.log('Otp cannot send');
        });
        this.$refs['otp-modal'].show();
        if (this.timeCountStart) {
          this.countDownTimer();
          this.timeCountStart = false;
        }
      } else {
        this.afterOtpVerify();
      }
    },
    againSend: function againSend() {
      var _this8 = this;
      var formData = new FormData();
      formData.append('mobile', this.otp_mobile);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/otp-send', formData).then(function (resp) {
        _this8.otp_verify_error = false;
        _this8.otp_length_verify_error = false;
        _this8.otp_length_verify_error_txt = null;
        _this8.minutes = 4;
        _this8.seconds = 59;
        _this8.countDownTimer();
        _this8.otp_message_sent = true;
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    hideOTPModal: function hideOTPModal() {
      this.user_otp_key = '';
      this.otp_verify_error = false;
      this.otp_length_verify_error = false;
      this.otp_length_verify_error_txt = null;
      this.$refs['otp-modal'].hide();
    },
    otpConfirm: function otpConfirm() {
      var _this9 = this;
      if (this.user_otp_key.toString().length == 4) {
        this.user_otp_key = this.convert2English(this.user_otp_key);
        this.otp_length_verify_error = false;
        var formData = new FormData();
        var self = this;
        formData.append('mobile', this.otp_mobile);
        formData.append('code', this.user_otp_key);
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/otp-verify', formData).then(function (resp) {
          if (resp.data.status == 200) {
            _this9.otp_verify_error = false;
            _this9.user_otp_key = '';
            _this9.$refs['otp-modal'].hide();
            _this9.afterOtpVerify();
          } else {
            _this9.otp_verify_error = true;
            _this9.otp_length_verify_error_txt = 'আপনার OTP ভেরিফিকেশন সফল হয় নাই। ';
          }
        })["catch"](function (error) {
          console.log(error.response.data.message);
          self.otp_verify_error = true;
          _this9.otp_length_verify_error_txt = 'আপনার OTP ভেরিফিকেশন সফল হয় নাই। ';
        });
      } else {
        this.otp_length_verify_error = true;
        this.otp_length_verify_error_txt = 'আপনার OTP কোড ৪ ডিজিটের হইতে হবে।  ';
        return false;
      }
    },
    countDownTimer: function countDownTimer() {
      var _this10 = this;
      var timer;
      if (this.seconds > 0) {
        timer = setTimeout(function () {
          _this10.seconds -= 1;
          if (_this10.seconds === 0 && _this10.minutes === 0) {
            _this10.again_send_otp = true;
            _this10.otp_message_sent = false;
            clearTimeout(timer);
          } else if (_this10.seconds === 0) {
            _this10.minutes--;
            _this10.seconds = 59;
            _this10.countDownTimer();
          } else {
            _this10.countDownTimer();
          }
        }, 1000);
      }
    },
    afterOtpVerify: function afterOtpVerify() {
      var allCommonDataFirstPage = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(this.allCommonDataFirstPage);
      if (allCommonDataFirstPage) {
        // let is_applicant_type_change = (this.applicationData.citizenData.owner_type != allCommonDataFirstPage.citizenData.owner_type) ? 1 : 0;
        var storage_nid = typeof allCommonDataFirstPage.citizenData == 'undefined' ? '' : allCommonDataFirstPage.citizenData.nid;
        var storage_dob = typeof allCommonDataFirstPage.citizenData == 'undefined' ? '' : allCommonDataFirstPage.citizenData.dob;
        if (storage_nid === this.requested_nid && this.customDateFormat(storage_dob) == this.requested_dob && this.$store.state.firstPageCommonData.form_type != 5) {
          if (this.$store.state.firstPageCommonData.form_type && this.$store.state.firstPageCommonData.form_type == 2) {
            this.setMainDataWithOutNidVerifyForOldForm();
          } else {
            this.setMainDataWithOutNidVerify(allCommonDataFirstPage);
          }
          this.getAreaData('');
          this.nextPageAfterVerify();
        } else {
          this.verifyNid();
        }
      } else {
        this.verifyNid();
      }
    },
    setMainDataWithOutNidVerify: function setMainDataWithOutNidVerify(allCommonDataFirstPage) {
      var croySutroCloneData = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(this.$store.state.checkDataCroySutro);
      this.MainData.Delegate.nid = croySutroCloneData.firstStepData.Delegate.nid;
      this.MainData.Delegate.dob = croySutroCloneData.firstStepData.Delegate.dob;
      this.MainData.Delegate.mobile = croySutroCloneData.firstStepData.Delegate.mobile == allCommonDataFirstPage.citizenData.mobile ? croySutroCloneData.firstStepData.Delegate.mobile : allCommonDataFirstPage.citizenData.mobile;
      this.MainData.Delegate.email = croySutroCloneData.firstStepData.Delegate.email;
      this.MainData.Delegate.nid_photo = croySutroCloneData.firstStepData.Delegate.nid_photo;
      this.MainData.Delegate.nid_name = croySutroCloneData.firstStepData.Delegate.nid_name;
      this.MainData.Delegate.nid_name_en = croySutroCloneData.firstStepData.Delegate.nid_name_en;
      this.MainData.Delegate.nid_father_name = croySutroCloneData.firstStepData.Delegate.nid_father_name;
      this.MainData.Delegate.nid_mother_name = croySutroCloneData.firstStepData.Delegate.nid_mother_name;
      this.MainData.Delegate.nid_address = croySutroCloneData.firstStepData.Delegate.nid_address;
      this.MainData.Delegate.nid_gender = croySutroCloneData.firstStepData.Delegate.nid_gender;
      this.MainData.Delegate.hash = croySutroCloneData.firstStepData.Delegate.hash;
      this.MainData.Delegate.is_delete = croySutroCloneData.firstStepData.Delegate.is_delete;
      this.MainData.Delegate.company_name = croySutroCloneData.firstStepData.Delegate.company_name;
      this.MainData.Delegate.representative = croySutroCloneData.firstStepData.Delegate.representative;
      this.MainData.Delegate.address = croySutroCloneData.firstStepData.Delegate.address;
      this.MainData.Delegate.rjsc = croySutroCloneData.firstStepData.Delegate.rjsc;
      this.MainData.Delegate.incorporation_date = croySutroCloneData.firstStepData.Delegate.incorporation_date;
      this.MainData.Delegate.requested_uid = croySutroCloneData.firstStepData.Delegate.requested_uid;
      this.MainData.Delegate.district_text = croySutroCloneData.firstStepData.Delegate.district_text;
      this.MainData.Delegate.upazila_text = croySutroCloneData.firstStepData.Delegate.upazila_text;
      this.MainData.Owner.owner_index = croySutroCloneData.firstStepData.Owner.owner_index;
      this.MainData.Owner.owner_index_txt = croySutroCloneData.firstStepData.Owner.owner_index_txt;
      this.MainData.Owner.nid = croySutroCloneData.firstStepData.Owner.nid;
      this.MainData.Owner.dob = croySutroCloneData.firstStepData.Owner.dob;
      this.MainData.Owner.mobile = croySutroCloneData.firstStepData.Owner.mobile == allCommonDataFirstPage.citizenData.mobile ? croySutroCloneData.firstStepData.Owner.mobile : allCommonDataFirstPage.citizenData.mobile;
      this.MainData.Owner.company_name = croySutroCloneData.firstStepData.Owner.company_name;
      this.MainData.Owner.representative = croySutroCloneData.firstStepData.Owner.representative;
      this.MainData.Owner.address = croySutroCloneData.firstStepData.Owner.address;
      this.MainData.Owner.rjsc = croySutroCloneData.firstStepData.Owner.rjsc;
      this.MainData.Owner.incorporation_date = croySutroCloneData.firstStepData.Owner.incorporation_date;
      this.MainData.Owner.nid_photo = croySutroCloneData.firstStepData.Owner.nid_photo;
      this.MainData.Owner.nid_name = croySutroCloneData.firstStepData.Owner.nid_name;
      this.MainData.Owner.nid_name_en = croySutroCloneData.firstStepData.Owner.nid_name_en;
      this.MainData.Owner.nid_father_name = croySutroCloneData.firstStepData.Owner.nid_father_name;
      this.MainData.Owner.nid_address = croySutroCloneData.firstStepData.Owner.nid_address;
      this.MainData.Owner.nid_gender = croySutroCloneData.firstStepData.Owner.nid_gender;
      this.MainData.Owner.hash = croySutroCloneData.firstStepData.Owner.hash;
      this.MainData.Owner.email = croySutroCloneData.firstStepData.Owner.email;
      this.MainData.Owner.is_delete = croySutroCloneData.firstStepData.Owner.is_delete;
      this.MainData.Owner.requested_uid = croySutroCloneData.firstStepData.Owner.requested_uid;
      var ownerState = this.applicationData.owner_type_state;
      if (ownerState.split('_')[0] != '' && ownerState.split('_')[0] != ownerState.split('_')[1]) {
        // owner has been changed
        if (ownerState.split('_')[1] == 2) {
          // notun vabe protinidhi hoice
          // remove owner index data
          this.MainData.Owner.owner_index = '';
          this.MainData.Owner.owner_index_txt = '';
          this.MainData.Owner.nid = '';
          this.MainData.Owner.dob = '';
          this.MainData.Owner.mobile = '';
          this.MainData.Owner.company_name = '';
          this.MainData.Owner.representative = '';
          this.MainData.Owner.address = '';
          this.MainData.Owner.rjsc = '';
          this.MainData.Owner.incorporation_date = '';
          this.MainData.Owner.nid_photo = '';
          this.MainData.Owner.nid_name = '';
          this.MainData.Owner.nid_name_en = '';
          this.MainData.Owner.nid_father_name = '';
          this.MainData.Owner.nid_address = '';
          this.MainData.Owner.nid_gender = '';
          this.MainData.Owner.spouse = '';
          this.MainData.Owner.hash = '';
          this.MainData.Owner.email = '';
          this.MainData.Owner.is_delete = '';
          this.MainData.Owner.requested_uid = '';
        }
      }
      this.MainData.allDistricts = this.allDistricts;
    },
    setMainDataWithOutNidVerifyForOldForm: function setMainDataWithOutNidVerifyForOldForm() {
      var oldFormStateCloneData = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"])(this.$store.state.oldFormState);
      this.MainData.Delegate = oldFormStateCloneData.citizenCommonData.delegate;
      this.MainData.Owner = oldFormStateCloneData.citizenCommonData.owner;
      this.MainData.allDistricts = this.allDistricts;
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
    },
    convert2English: function convert2English(engVal) {
      engVal = engVal.toString();
      engVal = engVal.replaceAll("০", "0");
      engVal = engVal.replaceAll("১", "1");
      engVal = engVal.replaceAll("২", "2");
      engVal = engVal.replaceAll("৩", "3");
      engVal = engVal.replaceAll("৪", "4");
      engVal = engVal.replaceAll("৫", "5");
      engVal = engVal.replaceAll("৬", "6");
      engVal = engVal.replaceAll("৭", "7");
      engVal = engVal.replaceAll("৮", "8");
      engVal = engVal.replaceAll("৯", "9");
      engVal = engVal.replaceAll("।", ".");
      return engVal;
    }
  }),
  watch: {
    'applicationData.division_id': function applicationDataDivision_id() {
      var _this11 = this;
      if (this.applicationData.division_id != '' && this.applicationData.division_id != undefined) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("#district_loading").show();
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('#district_id').hide();
        var formData = new FormData();
        formData.append('division_id', this.applicationData.division_id);
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/get-districts', formData).then(function (resp) {
          if (resp.data.status == 200 && resp.data.responseCode == 200) {
            _this11.districts = resp.data.data.districts;
            jquery__WEBPACK_IMPORTED_MODULE_7___default()("#district_loading").hide();
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#district_id').show();
            var areaStateData = _this11.firstPageCommonDatas.areaInfo;
            if (typeof areaStateData != "undefined" && typeof areaStateData.district_id != "undefined") {
              _this11.applicationData.district_id = ' ' + areaStateData.district_id;
            } else {
              _this11.applicationData.district_id = '';
            }
            jquery__WEBPACK_IMPORTED_MODULE_7___default()("#mouja_loading").hide();
            _this11.applicationData.upazila_id = '';
            _this11.select2Mouja = [{
              id: '',
              text: 'মৌজা'
            }];
          } else {
            console.log(resp.data.message);
          }
        })["catch"](function (error) {
          console.log(error.response.data.message);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("#mouja_loading").hide();
        this.applicationData.district_id = '';
        this.applicationData.upazila_id = '';
        this.select2Mouja = [{
          id: '',
          text: 'মৌজা'
        }];
      }
    },
    'applicationData.district_id': function applicationDataDistrict_id() {
      var _this12 = this;
      if (this.applicationData.division_id != '' && this.applicationData.division_id != undefined && this.applicationData.district_id != '' && this.applicationData.district_id != undefined) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("#upazila_loading").show();
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('#upazila_id').hide();
        var formData = new FormData();
        formData.append('division_id', this.applicationData.division_id);
        formData.append('district_id', this.applicationData.district_id);
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/get-upazilas', formData, {
          headers: this.headers
        }).then(function (resp) {
          if (resp.data.status == 200 && resp.data.responseCode == 200) {
            _this12.upazilas = resp.data.data.upazilas;
            jquery__WEBPACK_IMPORTED_MODULE_7___default()("#upazila_loading").hide();
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#upazila_id').show();
            var areaStateData = _this12.firstPageCommonDatas.areaInfo;
            if (typeof areaStateData != "undefined" && typeof areaStateData.upazila_id != "undefined") {
              _this12.applicationData.upazila_id = ' ' + areaStateData.upazila_id;
            } else {
              _this12.applicationData.upazila_id = '';
            }
            jquery__WEBPACK_IMPORTED_MODULE_7___default()("#mouja_loading").hide();
            _this12.select2Mouja = [{
              id: '',
              text: 'মৌজা'
            }];
          } else {
            console.log(resp.data.message);
          }
        })["catch"](function (error) {
          console.log(error.response.data.message);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("#mouja_loading").hide();
        this.applicationData.upazila_id = '';
        this.select2Mouja = [{
          id: '',
          text: 'মৌজা'
        }];
      }
    },
    'applicationData.upazila_id': function applicationDataUpazila_id() {
      var _this13 = this;
      if (this.applicationData.upazila_id != '' && this.applicationData.upazila_id != undefined && this.applicationData.district_id != '' && this.applicationData.district_id != undefined) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("#mouja_loading").show();
        this.select2Mouja = [{
          id: '',
          text: 'মৌজা'
        }];
        var formData = new FormData();
        formData.append('upazila_id', this.applicationData.upazila_id);
        formData.append('district_id', this.applicationData.district_id);
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/get-moujas', formData, {
          headers: this.headers
        }).then(function (resp) {
          if (resp.data.status == 200 && resp.data.responseCode == 200) {
            _this13.Moujas = resp.data.data.moujas;
            _this13.applicationData.office_info = resp.data.data.office_info;
            if (resp.data.data.office_info) {
              _this13.applicationData.office_id = resp.data.data.office_info[0].id;
            }
            _this13.isLoading = false;
            jquery__WEBPACK_IMPORTED_MODULE_7___default()("#mouja_loading").hide();
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#mouja_id').show();
            var i = 0;
            for (i = 0; i < _this13.Moujas.length; i++) {
              var engbatamouja = _this13.Moujas[i].dglr_code + (_this13.Moujas[i].bata_mouja ? '/' + _this13.Moujas[i].bata_mouja : '');
              _this13.select2Mouja.push({
                id: _this13.Moujas[i].index + '-' + engbatamouja,
                text: _this13.Moujas[i].name_bn + '  (জে এল নং :' + _this13.convert2Bangla(_this13.Moujas[i].dglr_code) + (_this13.Moujas[i].bata_mouja ? '/' + _this13.convert2Bangla(_this13.Moujas[i].bata_mouja) : '') + " [" + engbatamouja + "])"
              });
            }
          } else {
            console.log(resp.data.message);
          }
        })["catch"](function (error) {
          console.log(error.response.data.message);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()("#mouja_loading").hide();
        this.select2Mouja = [{
          id: '',
          text: 'মৌজা'
        }];
      }
    },
    'nid_image': function nid_image() {
      this.completeNIDImageFetch = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "land-queston",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])),
  props: ['applicationData'],
  data: function data() {
    return {
      questionKey: 0,
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      }
    };
  },
  mounted: function mounted() {},
  watch: {
    'applicationData.land_grabbing_check': function applicationDataLand_grabbing_check() {
      if (this.applicationData.land_grabbing_check == 1) {
        this.applicationData.land_not_grabbing_reason = '';
      }
    },
    'applicationData.check_acquisition': function applicationDataCheck_acquisition() {
      if (this.applicationData.check_acquisition == 0) {
        this.applicationData.check_acquisition_reason = null;
      }
    },
    'applicationData.is_khatian_exist_in_mouja': function applicationDataIs_khatian_exist_in_mouja() {
      if (this.applicationData.is_khatian_exist_in_mouja == 0) {
        this.applicationData.khatian_list_in_mouja = null;
      }
    },
    'applicationData.check_gov_interests': function applicationDataCheck_gov_interests() {
      if (this.applicationData.check_gov_interests == 0) {
        this.applicationData.gov_interests_reason1 = null;
        this.applicationData.gov_interests_reason2 = null;
        this.applicationData.gov_interests_reason3 = null;
        this.applicationData.gov_interests_reason4 = null;
        this.applicationData.gov_interests_reason5 = null;
        this.applicationData.gov_interests_reason6 = null;
        this.applicationData.gov_interests_reason7 = null;
        this.applicationData.gov_interests_reason8 = null;
        this.applicationData.gov_interests_reason9 = null;
        this.applicationData.gov_interests_reason10 = null;
        this.applicationData.gov_interests_reason11 = null;
      }
    },
    'applicationData.check_civil_case': function applicationDataCheck_civil_case() {
      if (this.applicationData.check_civil_case == 0) {
        this.applicationData.civil_case_info = '';
        this.applicationData.is_civil_case_prohibited = '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/application_request.vue?vue&type=template&id=c141bd74&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/application_request.vue?vue&type=template&id=c141bd74& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "page-ghoshona pt-4"
  }, [_c("Tab", {
    attrs: {
      active_tab: _vm.active_tab,
      applicationData: _vm.applicationData
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "page-content mb-5 bg-white"
  }, [_c("form", {
    ref: "application_form",
    attrs: {
      id: "application",
      action: "#"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "section-body"
  }, [_c("landOwnership", {
    attrs: {
      land_ownership_reference: _vm.land_ownership_reference,
      applicationData: _vm.applicationData
    }
  }), _vm._v(" "), _c("div", {
    ref: "application_form_first_page"
  }, [_c("initial_data_area_applicant", {
    attrs: {
      applicationData: _vm.applicationData,
      divisions: _vm.divisions,
      districts: _vm.districts,
      upazilas: _vm.upazilas,
      select2Mouja: _vm.select2Mouja
    }
  }), _vm._v(" "), _c("landQueston", {
    attrs: {
      applicationData: _vm.applicationData
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "section-footer border-top text-center py-3 px-4"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("button", {
    staticClass: "btn btn-outline-danger mx-3 m-icon-left namjariBtn",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.removeStateData(true);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-home",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" বাতিল করুন")]), _vm._v(" "), _c("button", {
    staticClass: "btn active btn-outline-success mx-3 m-icon-left namjariBtn",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.proceedNextPage();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-right",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" পরবর্তী\n                                ")])])])])])])])], 1), _vm._v(" "), _c("b-modal", {
    ref: "nid-verify-modal",
    attrs: {
      size: "lg",
      "hide-footer": "",
      title: "",
      "no-close-on-backdrop": ""
    }
  }, [this.verifyNidButtonSpinner ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "col-md-10 col-md-offset-1 text-center"
  }, [_c("span", {
    staticClass: "text-success text-center"
  }, [_vm._v("বাংলাদেশ নির্বাচন কমিশন থেকে জাতীয় পরিচয়পত্র যাচাই হচ্ছে ...")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "col-md-10 col-md-offset-1 text-center"
  }, [_c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [this.nid_verification_message_error ? _c("div", {
    staticClass: "col-md-12 text-center text-danger",
    staticStyle: {
      "font-size": "14px"
    }
  }, [_c("p", [_vm._v("আপনার জাতীয় পরিচয়পত্রের ভেরিফিকেশন সফল হয় নাই। NID সার্ভার এর সাথে সংযোগ সমস্যার কারণেও হতে পারে। জাতীয় পরিচয় পত্রের নম্বর এবং জন্মতারিখ ঠিক আছে কিনা যাচাই করে "), _c("b", [_vm._v(" কিছুক্ষন পর ")]), _vm._v("পুনরায় চেষ্টা করুন।  ")])]) : _vm._e(), _vm._v(" "), this.nid_verification_message_success ? _c("div", {}, [_c("div", {
    staticClass: "col-md-12 text-center text-success",
    staticStyle: {
      "font-size": "14px"
    }
  }, [_c("p", [_vm._v(" জাতীয় পরিচয়পত্র ভেরিফিকেশন সফল হয়েছে ")])]), _vm._v(" "), _c("div", {
    staticClass: "row col-md-12"
  }, [_c("div", {
    staticClass: "col-md-5"
  }, [this.nid_image ? _c("div", {
    staticClass: "nid-image"
  }, [_c("img", {
    staticClass: "rounded-circle",
    attrs: {
      src: "data:image/png;base64,".concat(this.nid_image)
    }
  })]) : _c("div", [_c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      margin: "auto",
      display: "block"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" নাম ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.MainData.Delegate.nid_name) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" পিতার নাম ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.MainData.Delegate.nid_father_name) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" মাতার নাম ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.MainData.Delegate.nid_mother_name) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" লিঙ্গ ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.nid_gender) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" ঠিকানা ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.MainData.Delegate.nid_address) + " ")])])])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c("div", {
    staticClass: "col-md-7"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [this.nid_verification_message_success ? _c("b-button", {
    staticClass: "col-4 pull-right btn-sm",
    staticStyle: {
      padding: "0.475rem 0.100rem !important",
      "margin-left": "10px"
    },
    attrs: {
      variant: "outline-success",
      disabled: this.completeNIDImageFetch != true
    },
    on: {
      click: _vm.nextPageAfterVerify
    }
  }, [_vm._v("পরবর্তী\n                ")]) : _vm._e(), _vm._v(" "), _c("b-button", {
    staticClass: "col-4 pull-right btn-sm",
    staticStyle: {
      padding: "0.475rem 0.100rem !important",
      "margin-left": "10px"
    },
    attrs: {
      variant: "outline-danger"
    },
    on: {
      click: _vm.hideModal
    }
  }, [_vm._v("বাতিল\n                ")])], 1)])]), _vm._v(" "), _c("b-modal", {
    ref: "otp-modal",
    attrs: {
      size: "lg",
      "hide-footer": "",
      title: "",
      "no-close-on-backdrop": ""
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "col-md-12 col-md-offset-1 text-center"
  }, [_vm.otp_message_sent ? _c("span", {
    staticClass: "text-success text-center"
  }, [_vm._v("\n                        আপনার " + _vm._s(this.otp_mobile) + " মোবাইল নম্বরে One Time Password (OTP) প্রেরণ করা হয়েছে। অনুগ্রহপূর্বক অপেক্ষা করুন। One Time Password (OTP) টি\n                        "), _c("b", {
    staticStyle: {
      background: "yellow",
      color: "red"
    }
  }, [_vm._v(" [ 0" + _vm._s(_vm.minutes) + " : " + _vm._s(_vm.seconds.toString().length === 2 ? _vm.seconds : "0" + _vm.seconds) + " ]")]), _vm._v(" মিনিটের মধ্যে ব্যবহার করতে হবে।\n                    ")]) : _c("span", {
    staticClass: "text-success text-center"
  }, [_vm._v("\n                        আপনার OTP ম্যাসেজ এর ৫ (পাঁচ) মিনিটের সময়সীমা অতিক্রম করেছে । OTP টি পুনরায় পাঠানোর জন্য ( পুনরায় OTP পাঠান ) বাটনে ক্লিক করুন ।\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-8 offset-3 form-group",
    staticStyle: {
      "margin-top": "6px"
    }
  }, [_vm.otp_message_sent ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user_otp_key,
      expression: "user_otp_key"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      autofocus: "",
      placeholder: "দয়া করে OTP কোড দিন"
    },
    domProps: {
      value: _vm.user_otp_key
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.user_otp_key = $event.target.value;
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.otp_verify_error || _vm.otp_length_verify_error ? _c("div", {
    staticClass: "text-left"
  }, [_c("p", {
    staticStyle: {
      color: "red",
      "font-weight": "bold",
      "margin-top": "5px"
    }
  }, [_vm._v(_vm._s(_vm.otp_length_verify_error_txt))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row",
    staticStyle: {
      "margin-top": "16px"
    }
  }, [_vm.otp_message_sent ? _c("div", {
    staticClass: "col-5 text-center"
  }, [_c("button", {
    staticClass: "btn btn-success btn-sm",
    on: {
      click: _vm.otpConfirm
    }
  }, [_vm._v("যাচাই করুন")])]) : _c("div", {
    staticClass: "col-6 text-center"
  }, [_vm.again_send_otp ? _c("button", {
    staticClass: "btn btn-warning btn-sm",
    on: {
      click: _vm.againSend
    }
  }, [_vm._v("পুনরায় OTP পাঠান ")]) : _vm._e()])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c("div", {
    staticClass: "col-7"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-5"
  }, [_c("b-button", {
    staticClass: "col-4 pull-right btn-sm",
    staticStyle: {
      padding: "0.475rem 0.100rem !important",
      "margin-left": "10px"
    },
    attrs: {
      variant: "outline-danger"
    },
    on: {
      click: _vm.hideOTPModal
    }
  }, [_vm._v(" বাতিল\n                ")])], 1)])]), _vm._v(" "), _c("b-modal", {
    ref: "smart-nid-found-modal",
    attrs: {
      size: "lg",
      "hide-footer": "",
      title: "",
      "no-close-on-backdrop": ""
    }
  }, [this.verifyNidButtonSpinner ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "col-md-10 col-md-offset-1 text-center"
  }, [_c("span", {
    staticClass: "text-success text-center"
  }, [_vm._v("বাংলাদেশ নির্বাচন কমিশন থেকে জাতীয় পরিচয়পত্র যাচাই হচ্ছে ...")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "col-md-10 col-md-offset-1 text-center"
  }, [_c("div", {
    staticClass: "spinner-border text-primary",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 text-center text-danger",
    staticStyle: {
      "font-size": "14px"
    }
  }, [_c("p", [_vm._v("আপনার প্রদান করা জাতীয় পরিচয়পত্র নাম্বারের বর্তমান স্মার্ট জাতীয় পরিচয়পত্র নাম্বার : " + _vm._s(_vm.smart_nid_no) + " অনুগ্রহ করে স্মার্ট জাতীয় পরিচয়পত্র নাম্বারটি ব্যাবহার করে আবার চেষ্টা করুন।")])])]), _vm._v(" "), _c("div", {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c("div", {
    staticClass: "col-md-7"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [_c("b-button", {
    staticClass: "col-4 pull-right btn-sm",
    staticStyle: {
      padding: "0.475rem 0.100rem !important",
      "margin-left": "10px"
    },
    attrs: {
      variant: "outline-danger"
    },
    on: {
      click: _vm.hideSmartNidMsgModal
    }
  }, [_vm._v("বাতিল\n                ")])], 1)])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section-header border-bottom text-center p-3"
  }, [_c("h4", [_vm._v("নামজারি আবেদন")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=template&id=4a7f9629&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=template&id=4a7f9629&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-number"
  }, [_vm._v("৪")]), _vm._v(" "), _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("আবেদন সংক্রান্ত ঘোষণা")]), _vm._v(" "), _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.১ সর্বশেষ রেকর্ড অথবা নামজারি হতে জমির মালিকানার ধারাবাহিকতা আছে কিনা ?")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.is_record_flow,
      expression: "applicationData.is_record_flow"
    }],
    staticClass: "form-check-input",
    "class": _vm.applicationData.if_only_croy == 1 ? "required_field" : "",
    attrs: {
      type: "radio",
      id: "is_record_flow",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.is_record_flow, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "is_record_flow", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_record_flow"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.is_record_flow,
      expression: "applicationData.is_record_flow"
    }],
    staticClass: "form-check-input",
    "class": _vm.applicationData.if_only_croy == 1 ? "required_field" : "",
    attrs: {
      type: "radio",
      id: "is_record_flow1",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.is_record_flow, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "is_record_flow", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_record_flow1"
    }
  }, [_vm._v("না")])])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.২ আবেদনকারীর দলিলমূলে মালিকানা দাবী ও হিস্যা সঠিক আছে কি না ?")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.is_ownership_check,
      expression: "applicationData.is_ownership_check"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "is_ownership_check",
      id: "is_ownership_check1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.is_ownership_check, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "is_ownership_check", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_ownership_check1"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.is_ownership_check,
      expression: "applicationData.is_ownership_check"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "is_ownership_check",
      id: "is_ownership_check2",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.is_ownership_check, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "is_ownership_check", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_ownership_check2"
    }
  }, [_vm._v("না")])])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.৩ আবেদিত জমি দখলে আছে কি না ?")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.land_grabbing_check,
      expression: "applicationData.land_grabbing_check"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "land_grabbing_check",
      id: "land_grabbing_check1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.land_grabbing_check, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "land_grabbing_check", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "land_grabbing_check1"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.land_grabbing_check,
      expression: "applicationData.land_grabbing_check"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "land_grabbing_check",
      id: "land_grabbing_check2",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.land_grabbing_check, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "land_grabbing_check", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "land_grabbing_check2"
    }
  }, [_vm._v("না")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_vm.applicationData.land_grabbing_check != "" && _vm.applicationData.land_grabbing_check == 0 ? _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.land_not_grabbing_reason,
      expression: "applicationData.land_not_grabbing_reason"
    }],
    staticClass: "form-control input_bangla",
    staticStyle: {
      resize: "none"
    },
    attrs: {
      cols: "30",
      rows: "1",
      type: "text",
      placeholder: "না থাকার ব্যাখ্যা লিখুন"
    },
    domProps: {
      value: _vm.applicationData.land_not_grabbing_reason
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.applicationData, "land_not_grabbing_reason", $event.target.value);
      }
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.৪ আংশিক খাস/ আংশিক অর্পিত/ আংশিক অধিগ্রহণকৃত আছে কি না?")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.check_acquisition,
      expression: "applicationData.check_acquisition"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "check_acquisition",
      id: "check_acquisition1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.check_acquisition, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "check_acquisition", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_acquisition1"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.check_acquisition,
      expression: "applicationData.check_acquisition"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "check_acquisition",
      id: "check_acquisition2",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.check_acquisition, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "check_acquisition", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_acquisition2"
    }
  }, [_vm._v("না")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_vm.applicationData.check_acquisition != "" && _vm.applicationData.check_acquisition == 1 ? _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.check_acquisition_reason,
      expression: "applicationData.check_acquisition_reason"
    }],
    staticClass: "form-control input_bangla",
    staticStyle: {
      resize: "none"
    },
    attrs: {
      cols: "30",
      rows: "1",
      type: "text",
      placeholder: "হ্যাঁ থাকার ব্যাখ্যা লিখুন"
    },
    domProps: {
      value: _vm.applicationData.check_acquisition_reason
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.applicationData, "check_acquisition_reason", $event.target.value);
      }
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.৫ আবেদিত জমিতে কোন দেওয়ানী মামলা আছে কি না ?")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.check_civil_case,
      expression: "applicationData.check_civil_case"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "check_civil_case1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.check_civil_case, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "check_civil_case", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_civil_case1"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.check_civil_case,
      expression: "applicationData.check_civil_case"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "check_civil_case2",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.check_civil_case, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "check_civil_case", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_civil_case2"
    }
  }, [_vm._v("না")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_vm.applicationData.check_civil_case != "" && _vm.applicationData.check_civil_case == 1 ? _c("table", {
    staticClass: "table table-bordered table-stripped input_bangla"
  }, [_vm._m(0), _vm._v(" "), _c("tr", [_c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.civil_case_info,
      expression: "applicationData.civil_case_info"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.applicationData.civil_case_info
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.applicationData, "civil_case_info", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "text-center font-weight-normal align-middle"
  }, [_c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.is_civil_case_prohibited,
      expression: "applicationData.is_civil_case_prohibited"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "is_prohibited",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.is_civil_case_prohibited, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "is_civil_case_prohibited", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_prohibited"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.is_civil_case_prohibited,
      expression: "applicationData.is_civil_case_prohibited"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "not_prohibited",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.is_civil_case_prohibited, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "is_civil_case_prohibited", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "not_prohibited"
    }
  }, [_vm._v("না")])])])])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.৬ জমিতে সরকারি স্বার্থ আছে কি না ?")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.check_gov_interests,
      expression: "applicationData.check_gov_interests"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "check_gov_interests",
      id: "check_gov_interests1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.check_gov_interests, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "check_gov_interests", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_gov_interests1"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.check_gov_interests,
      expression: "applicationData.check_gov_interests"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "check_gov_interests",
      id: "check_gov_interests2",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.check_gov_interests, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "check_gov_interests", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_gov_interests2"
    }
  }, [_vm._v("না")])]), _vm._v(" "), _vm.applicationData.check_gov_interests == "1" ? _c("div", {
    staticClass: "mt-3"
  }, [_c("div", {
    staticClass: "card-body p-3"
  }, [_c("p", {
    staticClass: "mb-0"
  }, [_vm._v("কিভাবে সরকারি স্বার্থ রয়েছে ? ")]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason1,
      expression: "applicationData.gov_interests_reason1"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason1",
      value: "খাস"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason1) ? _vm._i(_vm.applicationData.gov_interests_reason1, "খাস") > -1 : _vm.applicationData.gov_interests_reason1
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason1,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "খাস",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason1", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason1", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason1", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason1"
    }
  }, [_vm._v(" খাস ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason2,
      expression: "applicationData.gov_interests_reason2"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason2",
      value: "অর্পিত"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason2) ? _vm._i(_vm.applicationData.gov_interests_reason2, "অর্পিত") > -1 : _vm.applicationData.gov_interests_reason2
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason2,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "অর্পিত",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason2", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason2", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason2", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason2"
    }
  }, [_vm._v(" অর্পিত ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason3,
      expression: "applicationData.gov_interests_reason3"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason3",
      value: "পরিত্যক্ত"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason3) ? _vm._i(_vm.applicationData.gov_interests_reason3, "পরিত্যক্ত") > -1 : _vm.applicationData.gov_interests_reason3
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason3,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "পরিত্যক্ত",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason3", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason3", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason3", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason3"
    }
  }, [_vm._v(" পরিত্যক্ত ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason4,
      expression: "applicationData.gov_interests_reason4"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason4",
      value: "ওয়াকফ"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason4) ? _vm._i(_vm.applicationData.gov_interests_reason4, "ওয়াকফ") > -1 : _vm.applicationData.gov_interests_reason4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "ওয়াকফ",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason4"
    }
  }, [_vm._v(" ওয়াকফ ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason5,
      expression: "applicationData.gov_interests_reason5"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason5",
      value: "বিনিময়"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason5) ? _vm._i(_vm.applicationData.gov_interests_reason5, "বিনিময়") > -1 : _vm.applicationData.gov_interests_reason5
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason5,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "বিনিময়",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason5", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason5", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason5", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason5"
    }
  }, [_vm._v(" বিনিময় ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason6,
      expression: "applicationData.gov_interests_reason6"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason6",
      value: "দেবত্তর"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason6) ? _vm._i(_vm.applicationData.gov_interests_reason6, "দেবত্তর") > -1 : _vm.applicationData.gov_interests_reason6
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason6,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "দেবত্তর",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason6", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason6", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason6", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason6"
    }
  }, [_vm._v(" দেবত্তর ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason7,
      expression: "applicationData.gov_interests_reason7"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason7",
      value: "অধিগ্রহণকৃত"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason7) ? _vm._i(_vm.applicationData.gov_interests_reason7, "অধিগ্রহণকৃত") > -1 : _vm.applicationData.gov_interests_reason7
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason7,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "অধিগ্রহণকৃত",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason7", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason7", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason7", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason7"
    }
  }, [_vm._v(" অধিগ্রহণকৃত ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason8,
      expression: "applicationData.gov_interests_reason8"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason8",
      value: "খাসমহাল"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason8) ? _vm._i(_vm.applicationData.gov_interests_reason8, "খাসমহাল") > -1 : _vm.applicationData.gov_interests_reason8
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason8,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "খাসমহাল",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason8", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason8", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason8", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason8"
    }
  }, [_vm._v(" খাসমহাল ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason9,
      expression: "applicationData.gov_interests_reason9"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason9",
      value: "কোর্ট অফ ওয়ার্ডস"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason9) ? _vm._i(_vm.applicationData.gov_interests_reason9, "কোর্ট অফ ওয়ার্ডস") > -1 : _vm.applicationData.gov_interests_reason9
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason9,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "কোর্ট অফ ওয়ার্ডস",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason9", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason9", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason9", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason9"
    }
  }, [_vm._v(" কোর্ট অফ ওয়ার্ডস ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason10,
      expression: "applicationData.gov_interests_reason10"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason10",
      value: "সরকারি সংস্থা"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason10) ? _vm._i(_vm.applicationData.gov_interests_reason10, "সরকারি সংস্থা") > -1 : _vm.applicationData.gov_interests_reason10
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason10,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "সরকারি সংস্থা",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason10", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason10", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason10", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason10"
    }
  }, [_vm._v(" সরকারি সংস্থা ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.gov_interests_reason11,
      expression: "applicationData.gov_interests_reason11"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "gov_interests_reason11",
      value: "অন্যান্য"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.gov_interests_reason11) ? _vm._i(_vm.applicationData.gov_interests_reason11, "অন্যান্য") > -1 : _vm.applicationData.gov_interests_reason11
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.gov_interests_reason11,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "অন্যান্য",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "gov_interests_reason11", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "gov_interests_reason11", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "gov_interests_reason11", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gov_interests_reason11"
    }
  }, [_vm._v(" অন্যান্য ")])])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.৭ সর্বশেষ অর্থ বছরের ভূমি উন্নয়ন কর পরিশোধ করা আছে কি না?")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.last_tax_given,
      expression: "applicationData.last_tax_given"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "last_tax_given1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.last_tax_given, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "last_tax_given", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "last_tax_given1"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.last_tax_given,
      expression: "applicationData.last_tax_given"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "last_tax_given2",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.last_tax_given, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "last_tax_given", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "last_tax_given2"
    }
  }, [_vm._v("না")])])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.৮ আবেদনে তফসিলভুক্ত জমির সর্বশেষ জরিপের তথ্য")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-6 mb-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.last_jorip_info,
      expression: "applicationData.last_jorip_info"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.applicationData, "last_jorip_info", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("নির্বাচন করুন")]), _vm._v(" "), _vm._l(_vm.applicationData.khatian_type_list, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v("\n                            " + _vm._s(item.data) + "\n                        ")]);
  })], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.৯ আবেদনে বর্ণিত তফসিল")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.declared_tofsil,
      expression: "applicationData.declared_tofsil"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "tofsil_jomi",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.declared_tofsil, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "declared_tofsil", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "tofsil_jomi"
    }
  }, [_vm._v("  জমি")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.declared_tofsil,
      expression: "applicationData.declared_tofsil"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "tofsil_flat",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.declared_tofsil, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "declared_tofsil", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "tofsil_flat"
    }
  }, [_vm._v("  এপার্টমেন্ট / ফ্লোর স্পেস")])])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("৪.১০ গ্রহীতাদের এই মৌজায় বর্তমানে কোনো খতিয়ান আছে কিনা ?")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.is_khatian_exist_in_mouja,
      expression: "applicationData.is_khatian_exist_in_mouja"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "is_khatian_exist_in_mouja_yes",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.is_khatian_exist_in_mouja, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "is_khatian_exist_in_mouja", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_khatian_exist_in_mouja_yes"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.is_khatian_exist_in_mouja,
      expression: "applicationData.is_khatian_exist_in_mouja"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "is_khatian_exist_in_mouja_no",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.is_khatian_exist_in_mouja, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "is_khatian_exist_in_mouja", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_khatian_exist_in_mouja_no"
    }
  }, [_vm._v("না")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_vm.applicationData.is_khatian_exist_in_mouja != "" && _vm.applicationData.is_khatian_exist_in_mouja == 1 ? _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.khatian_list_in_mouja,
      expression: "applicationData.khatian_list_in_mouja"
    }],
    staticClass: "form-control input_bangla",
    staticStyle: {
      resize: "none"
    },
    attrs: {
      cols: "30",
      rows: "1",
      type: "text",
      placeholder: "খতিয়ান নম্বরসমূহ এন্ট্রি করুন"
    },
    domProps: {
      value: _vm.applicationData.khatian_list_in_mouja
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.applicationData, "khatian_list_in_mouja", $event.target.value);
      }
    }
  }) : _vm._e()])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "text-center"
  }, [_c("td", [_vm._v("মামলা নম্বর, কোর্টের নাম, মামলার সর্বশেষ অবস্থা এবং তফসিলভুক্ত জমির তথ্য")]), _vm._v(" "), _c("td", [_vm._v("হস্তান্তরে নিষেধাজ্ঞা আছে কিনা ?")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n/*@import '/css/font-awesome.min.css';*/\n/*@import '/css/custom_style.css';*/\n/*@import '/css/firstpage.css';*/\n/*p {*/\n/*    font-size: 14px;*/\n/*}*/\n.vdp-datepicker {\n    position: inherit !important;\n}\n.vdp-datepicker__calendar {\n    width: 250px !important;\n    font-size: 14px !important;\n}\n#mouja_id > select > option {\n    font-size: 12px !important\n}\n.select2-results__option  {\n    font-size: 12px !important\n}\n.nid-image img {\n    width:200px;height:200px;margin:auto;display:block\n}\n\n/* == Responsive mobile device == */\n.section-body{\n    padding: 1.5rem 3rem ;\n}\n.namjariBtn{\n    font-size: 1rem;\n}\n@media screen and (min-device-width: 320px) and (max-device-width: 640px) {\n.section-body{\n        padding: 1.5rem 1rem ;\n}\n.namjariBtn{\n        padding: 7px 4px;\n        font-size: 13px !important;\n}\n.section-footer .btn {\n        min-width: 100px;\n}\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.form-check-label[data-v-4a7f9629] {\r\n    cursor: pointer;\r\n    margin-left: 5px;\n}\ninput[data-v-4a7f9629] {\r\n    cursor: pointer;\n}\n.mt-3[data-v-4a7f9629], .my-3[data-v-4a7f9629] {\r\n    margin-top: 10px !important;\n}\n.p-3[data-v-4a7f9629] {\r\n    padding: 12px !important;\n}\r\n\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/Application/application_request.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Application/application_request.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_request_vue_vue_type_template_id_c141bd74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_request.vue?vue&type=template&id=c141bd74& */ "./resources/js/components/Application/application_request.vue?vue&type=template&id=c141bd74&");
/* harmony import */ var _application_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application_request.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/application_request.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _application_request_vue_vue_type_style_index_0_id_c141bd74_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css& */ "./resources/js/components/Application/application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _application_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _application_request_vue_vue_type_template_id_c141bd74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _application_request_vue_vue_type_template_id_c141bd74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/application_request.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/application_request.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Application/application_request.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_request.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/application_request.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Application/application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_style_index_0_id_c141bd74_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/application_request.vue?vue&type=style&index=0&id=c141bd74&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_style_index_0_id_c141bd74_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_style_index_0_id_c141bd74_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_style_index_0_id_c141bd74_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_style_index_0_id_c141bd74_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/application_request.vue?vue&type=template&id=c141bd74&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Application/application_request.vue?vue&type=template&id=c141bd74& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_template_id_c141bd74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_request.vue?vue&type=template&id=c141bd74& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/application_request.vue?vue&type=template&id=c141bd74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_template_id_c141bd74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_request_vue_vue_type_template_id_c141bd74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/land-queston.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/land-queston.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _land_queston_vue_vue_type_template_id_4a7f9629_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./land-queston.vue?vue&type=template&id=4a7f9629&scoped=true& */ "./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=template&id=4a7f9629&scoped=true&");
/* harmony import */ var _land_queston_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./land-queston.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _land_queston_vue_vue_type_style_index_0_id_4a7f9629_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css& */ "./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _land_queston_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _land_queston_vue_vue_type_template_id_4a7f9629_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _land_queston_vue_vue_type_template_id_4a7f9629_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a7f9629",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/common_page_comp/land-queston.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-queston.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_style_index_0_id_4a7f9629_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=style&index=0&id=4a7f9629&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_style_index_0_id_4a7f9629_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_style_index_0_id_4a7f9629_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_style_index_0_id_4a7f9629_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_style_index_0_id_4a7f9629_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=template&id=4a7f9629&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=template&id=4a7f9629&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_template_id_4a7f9629_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-queston.vue?vue&type=template&id=4a7f9629&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-queston.vue?vue&type=template&id=4a7f9629&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_template_id_4a7f9629_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_queston_vue_vue_type_template_id_4a7f9629_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);