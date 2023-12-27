(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_application.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/new_application.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _old_form_comp_land_ownership__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./old_form_comp/land-ownership */ "./resources/js/components/Application/old_form_comp/land-ownership.vue");
/* harmony import */ var _new_form_comp_land_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new_form_comp/land-info */ "./resources/js/components/Application/new_form_comp/land-info.vue");
/* harmony import */ var _old_form_comp_kharij_owner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./old_form_comp/kharij-owner */ "./resources/js/components/Application/old_form_comp/kharij-owner.vue");
/* harmony import */ var _old_form_comp_applicant_defendant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./old_form_comp/applicant-defendant */ "./resources/js/components/Application/old_form_comp/applicant-defendant.vue");
/* harmony import */ var _old_form_comp_representative__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./old_form_comp/representative */ "./resources/js/components/Application/old_form_comp/representative.vue");
/* harmony import */ var _old_form_comp_documents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./old_form_comp/documents */ "./resources/js/components/Application/old_form_comp/documents.vue");
/* harmony import */ var _old_form_comp_submission__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./old_form_comp/submission */ "./resources/js/components/Application/old_form_comp/submission.vue");
/* harmony import */ var _old_form_comp_application_preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./old_form_comp/application-preview */ "./resources/js/components/Application/old_form_comp/application-preview.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/ValidationFile */ "./resources/js/helpers/ValidationFile.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }













/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Application',
  components: {
    landOwnership: _old_form_comp_land_ownership__WEBPACK_IMPORTED_MODULE_2__["default"],
    landInfo: _new_form_comp_land_info__WEBPACK_IMPORTED_MODULE_3__["default"],
    kharijOwner: _old_form_comp_kharij_owner__WEBPACK_IMPORTED_MODULE_4__["default"],
    applicantDefendant: _old_form_comp_applicant_defendant__WEBPACK_IMPORTED_MODULE_5__["default"],
    representative: _old_form_comp_representative__WEBPACK_IMPORTED_MODULE_6__["default"],
    documents: _old_form_comp_documents__WEBPACK_IMPORTED_MODULE_7__["default"],
    submission: _old_form_comp_submission__WEBPACK_IMPORTED_MODULE_8__["default"],
    Modal: _old_form_comp_application_preview__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      apiClientId: "namjari_draft",
      apiClientSecret: "mongo@namjari",
      JSONString: '',
      loading_icon: false,
      applicationData: {
        regular_applicaton: 1,
        is_next_page: 1,
        declear_call: 0,
        loading_icon: false
      },
      land_ownership_reference_id: [],
      land_owner_types: [],
      land_ownership_reference: [],
      land_amount_types: {},
      oldFormSecondPageAllData: {
        tracking_no: '',
        form_type: '',
        app_type: '',
        data: {
          commonStateData: {},
          stateData: {
            land_info: {
              total_land_amount: '',
              total_land_amount_text: ''
            },
            file_info: {},
            application_land_schedules: {
              total_land_amount: ''
            },
            kharij_owner: {
              application_citizen_record: {},
              application_land_schedules_is_last: {}
            },
            applicant_defendant: {
              application_citizen_applicant: {},
              applicantImage: {},
              application_citizen_defendant: {}
            },
            application_citizen_representative: {
              declear_call: '',
              is_next_page: '',
              regular_applicaton: ''
            },
            emergency_info: {}
          }
        }
      },
      land_record_types: {},
      required_documents: {},
      application_land_schedules: [{
        main_data: [{
          land_record_type_id: 2,
          khatian_no: '',
          dag_no: '',
          amount_of_land: '',
          land_amount_type_id: 1,
          dalil_no: '',
          dalil_date: '',
          if_dag: 1,
          if_dalil: 0,
          first_row: 1,
          others_row: 0,
          if_main: 1,
          khatian_no_error: false,
          khatian_no_error_two: false,
          dag_no_error: false,
          amount_of_land_error: false,
          amount_of_land_error_two: false,
          sub_register_office_name: '',
          sub_reg_district_id: '',
          sub_reg_office_list: {},
          land_rate_in_mouja: '',
          land_rate_in_mouja_is_required: false
        }],
        first_row: 1,
        others_row: 0,
        if_main: 1,
        kate_error: false,
        kate_error_two: false,
        is_kate: false,
        dag_button: true,
        dalil_button: true,
        total_land_khotian: ''
      }],
      application_land_schedules_is_last: [{
        land_record_type_id: 2,
        khatian_no: '',
        dag_no: '',
        amount_of_land: '',
        land_amount_type_id: 1,
        first_row: 1
      }],
      application_citizen_record: [{
        name: '',
        address: '',
        first_row: 1,
        name_error: false,
        address_error: false
      }],
      application_citizen_applicant: [{
        owner_type: '',
        name: '',
        father_name: '',
        mother_name: '',
        address: '',
        national_id_no: '',
        mobile_no: '',
        gender: '',
        photo: '',
        signature: '',
        dob: '',
        first_row: 1,
        name_error: false,
        address_error: false,
        mobile_no_error: false,
        national_id_no_error: false,
        nid_verification_message_error: false,
        email_error_2: false,
        photo_error: false,
        photo_loading: false,
        signature_loading: false
      }],
      application_citizen_defendant: [{
        name: '',
        address: '',
        mobile_no: '',
        national_id_no: '',
        email: '',
        first_row: 1,
        name_error: false,
        address_error: false,
        national_id_no_error: false,
        nid_verification_message_error: false,
        email_error: false
      }],
      application_citizen_representative: {
        name: '',
        address: '',
        mobile_no: '',
        national_id_no: '',
        relation: '',
        age: '',
        email: '',
        dob: '',
        if_representative: '',
        name_error: false,
        address_error: false,
        relation_error: false,
        age_error: false,
        mobile_no_error: false,
        photo: '',
        signature: '',
        photo_loading: false,
        signature_loading: false
      },
      documentFilePath: [],
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      validationErrors: {},
      globalErrorValidationForNextButton: true,
      globalErrorValidationForSubmitButton: true,
      applicantImage: [{
        pictureBase64: '',
        pictureExt: '',
        signstureBase64: '',
        signstureExt: ''
      }],
      representativeImage: {
        pictureBase64: '',
        pictureExt: '',
        signstureBase64: '',
        signstureExt: ''
      },
      uploadedFilePath: [],
      fileUploadSuccess: true,
      emergencyInfo: {
        isImportant: false,
        importantText: ''
      },
      //new added for get dolil info from modal
      dolilInfo: [],
      land_rate_enable_month_count: "12"
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('firstPageCommonData', ['firstPageCommonDatas', 'tracking_no', 'form_type', 'app_type'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("firstPageCommonData", ["allCommonDataFirstPage", "getStateTrackingNo"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("oldFormState", ["getOldFormStateData", "getCitizenCommonData"])),
  created: function created() {
    if (this.allCommonDataFirstPage == '') {
      return window.location.href = '/';
    }
    this.getNamjariData();
    this.setApplicationStateData();
  },
  mounted: function mounted() {
    var urlCrypt = __webpack_require__(/*! url-crypt */ "./node_modules/url-crypt/index.js")('~{ry*I)==yU/]9<7DPk!Hj"R#:-/Z7(hTBnlRS=4CXF');
    var requestData = urlCrypt.decryptObj(this.$route.params.id);
    if (requestData == 0) {
      return window.location.href = '/application-request';
    }
    this.getToken();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('tokenState', ['getToken'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData', 'setTrackingNo', 'setFormType', 'setAppType'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('oldFormState', ['clearAllOldFormStateData'])), {}, {
    getNamjariData: function getNamjariData() {
      var _this = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/namjari-data', '', {
        headers: this.headers
      }).then(function (resp) {
        _this.land_owner_types = resp.data.data.land_owner_types;
        _this.land_amount_types = resp.data.data.land_amount_types;
        _this.land_record_types = resp.data.data.land_record_types;
        _this.required_documents = resp.data.data.required_documents;
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    setApplicationStateData: function setApplicationStateData() {
      /** Land ownership Page */
      if (this.allCommonDataFirstPage) {
        this.land_ownership_reference_id = this.allCommonDataFirstPage.land_ownership_reference_ids;
        this.land_ownership_reference = this.allCommonDataFirstPage.ownerShipData;
        this.applicationData.other_reference = this.allCommonDataFirstPage.ownerShipData.Other.active;
        this.applicationData.other_reference_text = this.allCommonDataFirstPage.other_reference_text;
      }
      if (this.getOldFormStateData) {
        /** Application land schedule */
        this.application_land_schedules = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.application_land_schedules);
        this.applicationData.total_land_amount = this.getOldFormStateData.land_info.total_land_amount;
        this.applicationData.total_land_amount_text = this.getOldFormStateData.land_info.total_land_amount_text;

        /** kharij owner , application_land_schedules_is_last, application_citizen_record */
        this.application_land_schedules_is_last = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.kharij_owner.application_land_schedules_is_last);
        this.application_citizen_record = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.kharij_owner.application_citizen_record);

        /** Applicant citizen applicant & defendent */
        this.application_citizen_applicant = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.applicant_defendant.application_citizen_applicant);
        this.application_citizen_defendant = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.applicant_defendant.application_citizen_defendant);
        this.applicantImage = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.applicant_defendant.applicantImage);

        /** Document set */
        this.documentFilePath = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.file_info);
        this.emergencyInfo = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.emergency_info);
        this.application_citizen_applicant = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.applicant_defendant.application_citizen_applicant);
        this.application_citizen_representative = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getOldFormStateData.application_citizen_representative);
      } else {
        /**  Citizen common data */
        var application_citizen_applicant = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getCitizenCommonData.owner);
        var application_citizen_representative = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.getCitizenCommonData.delegate);
        if (this.allCommonDataFirstPage && this.allCommonDataFirstPage.citizenData.is_grohita === 1) {
          this.application_citizen_applicant = [{
            owner_type: application_citizen_applicant.owner_type,
            name: application_citizen_applicant.nid_name != '' ? application_citizen_applicant.nid_name : application_citizen_applicant.company_name,
            nid_name_en: application_citizen_applicant.nid_name_en != '' ? application_citizen_applicant.nid_name_en : '',
            father_name: application_citizen_applicant.nid_father_name,
            mother_name: application_citizen_applicant.nid_mother_name,
            address: application_citizen_applicant.nid_address != '' ? 'পিতা: ' + application_citizen_applicant.nid_father_name + ' ' + application_citizen_applicant.nid_address : application_citizen_applicant.address,
            national_id_no: application_citizen_applicant.nid,
            mobile_no: application_citizen_applicant.mobile,
            gender: application_citizen_applicant.nid_gender,
            photo: application_citizen_applicant.nid_photo,
            dob: application_citizen_applicant.dob,
            first_row: 1,
            signature: '',
            photo_loading: false,
            signature_loading: false
          }];
          this.application_citizen_representative = {
            owner_type: application_citizen_applicant.owner_type,
            name: application_citizen_applicant.nid_name != '' ? application_citizen_applicant.nid_name : application_citizen_applicant.company_name,
            father_name: application_citizen_applicant.nid_father_name,
            mother_name: application_citizen_applicant.nid_mother_name,
            address: application_citizen_applicant.nid_address != '' ? 'পিতা: ' + application_citizen_applicant.nid_father_name + ' ' + application_citizen_applicant.nid_address : application_citizen_applicant.address,
            national_id_no: application_citizen_applicant.nid,
            mobile_no: application_citizen_applicant.mobile,
            gender: application_citizen_applicant.nid_gender,
            photo: application_citizen_applicant.nid_photo,
            dob: application_citizen_applicant.dob,
            if_representative: 1,
            signature: '',
            photo_loading: false,
            signature_loading: false
          };
        } else if (this.allCommonDataFirstPage.citizenData.is_grohita === 0) {
          this.application_citizen_representative = {
            name: application_citizen_representative.nid_name,
            name_en: application_citizen_representative.nid_name_en,
            father_name: application_citizen_representative.nid_father_name,
            mother_name: application_citizen_representative.nid_mother_name,
            address: application_citizen_representative.nid_address != '' ? 'পিতা: ' + application_citizen_representative.nid_father_name + ' ' + application_citizen_representative.nid_address : application_citizen_representative.address,
            national_id_no: application_citizen_representative.nid,
            dob: application_citizen_representative.dob,
            email: application_citizen_representative.email,
            age: application_citizen_representative.age != undefined ? application_citizen_representative.age : '',
            relation: application_citizen_representative.relation != undefined ? application_citizen_representative.relation : '',
            mobile_no: application_citizen_representative.mobile,
            gender: application_citizen_representative.nid_gender,
            photo: application_citizen_representative.nid_photo,
            if_representative: 1,
            signature: '',
            photo_loading: false,
            signature_loading: false
          };
        }
      }
    },
    saveAsDraft: function saveAsDraft() {
      var _this2 = this;
      /** With Debounce mechanism */
      if (this.timeOutId) {
        clearTimeout(this.timeOutId);
      }
      this.timeOutId = setTimeout(function () {
        _this2.loading_icon = true;
        _this2.jsonPrepareSaveAsDraft();
        _this2.saveAsDraftInDatabase();
      }, 300);
    },
    fileUploadMechanism: function fileUploadMechanism() {
      var _this3 = this;
      /** new file mechanism */
      if (this.documentFilePath.length > 0) {
        this.fileToDraftForUpload(0);

        /** remove duplicate file from array **/
        if (this.documentFilePath.length > 0) {
          var formData = new FormData();
          formData.append('file', JSON.stringify(this.uploadedFilePath));
          _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/get-unique-file-path', formData, {
            headers: this.headers
          }).then(function (resp) {
            if (resp.status == 200 && resp.data.data.length > 0) {
              _this3.uploadedFilePath = resp.data.data;
            }
          })["catch"](function (error) {
            console.log(error.response.data.message);
          });
        }
      }
      /** new file mechanism */
    },
    fileToDraftForUpload: function fileToDraftForUpload() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var fileComplete, fileData, fileDataFromState, formData, response, fileDataObj, _fileDataObj;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fileComplete = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
                _context.prev = 1;
                fileData = _this4.documentFilePath[fileComplete]; // let fileDataFromState = this.getOldFormStateData.file_info
                fileDataFromState = _this4.documentFilePath;
                if (!(fileData.fileObj && fileData.doc_type)) {
                  _context.next = 17;
                  break;
                }
                formData = new FormData();
                formData.append('file', fileData.fileObj);
                formData.append('file_path', JSON.stringify(fileDataFromState)); //from state
                formData.append('index', JSON.stringify(fileComplete));
                _context.next = 11;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(_this4.apiBaseURL + '/tmp-new-store', formData, {
                  headers: _this4.headers
                });
              case 11:
                response = _context.sent;
                fileData.fileObj = '';
                fileDataObj = {
                  path: response.data.data.filePath,
                  name: fileData.name,
                  fileMime: fileData.fileMime,
                  doc_type: fileData.doc_type,
                  number_of_pages: fileData.number_of_pages,
                  land_rate_in_mouja: fileData.land_rate_in_mouja
                };
                _this4.uploadedFilePath.push(fileDataObj);
                _context.next = 18;
                break;
              case 17:
                if (fileData.path) {
                  _fileDataObj = {
                    path: fileData.path,
                    name: fileData.name,
                    fileMime: fileData.fileMime,
                    doc_type: fileData.doc_type,
                    number_of_pages: fileData.number_of_pages,
                    land_rate_in_mouja: fileData.land_rate_in_mouja
                  };
                  _this4.uploadedFilePath.push(_fileDataObj);
                }
              case 18:
                if (fileComplete + 1 < _this4.documentFilePath.length) {
                  fileComplete++;
                  _this4.fileToDraftForUpload(fileComplete);
                } else if (fileComplete + 1 === _this4.documentFilePath.length) {
                  _this4.$refs['my-modal'].show();
                  _this4.applicationData.loading_icon = false;
                }
                _context.next = 26;
                break;
              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](1);
                _this4.applicationData.loading_icon = false;
                console.log(_context.t0);
                _this4.fileUploadSuccess = false;
              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 21]]);
      }))();
    },
    /**
     ** Tanbeer
     * josn prepair for old form version 2
     * */
    jsonPrepareSaveAsDraft: function jsonPrepareSaveAsDraft() {
      this.oldFormSecondPageAllData.data.commonStateData = this.firstPageCommonDatas;
      this.oldFormSecondPageAllData.data.stateData.citizen_common_data = this.getCitizenCommonData;
      this.oldFormSecondPageAllData.data.stateData.file_info = this.uploadedFilePath;
      this.oldFormSecondPageAllData.data.stateData.kharij_owner.application_citizen_record = this.application_citizen_record;
      this.oldFormSecondPageAllData.data.stateData.kharij_owner.application_land_schedules_is_last = this.application_land_schedules_is_last;
      this.oldFormSecondPageAllData.data.stateData.application_land_schedules = this.application_land_schedules;
      this.oldFormSecondPageAllData.data.stateData.applicant_defendant.application_citizen_applicant = this.application_citizen_applicant;
      this.oldFormSecondPageAllData.data.stateData.applicant_defendant.application_citizen_defendant = this.application_citizen_defendant;
      this.oldFormSecondPageAllData.data.stateData.application_citizen_representative = this.application_citizen_representative;
      this.oldFormSecondPageAllData.data.stateData.application_citizen_representative.declear_call = this.applicationData.declear_call;
      this.oldFormSecondPageAllData.data.stateData.application_citizen_representative.is_next_page = this.applicationData.is_next_page;
      this.oldFormSecondPageAllData.data.stateData.application_citizen_representative.regular_applicaton = this.applicationData.regular_applicaton;
      this.oldFormSecondPageAllData.data.stateData.emergency_info = this.emergencyInfo;
      this.oldFormSecondPageAllData.data.stateData.land_info.total_land_amount = this.applicationData.total_land_amount;
      this.oldFormSecondPageAllData.data.stateData.land_info.total_land_amount_text = this.applicationData.total_land_amount_text;
      this.oldFormSecondPageAllData.data.stateData.applicant_defendant.applicantImage = this.applicantImage;
    },
    saveAsDraftInDatabase: function saveAsDraftInDatabase() {
      var _this5 = this;
      this.oldFormSecondPageAllData.form_type = 2;
      this.oldFormSecondPageAllData.app_type = 'draft';
      this.oldFormSecondPageAllData.tracking_no = _typeof(this.getStateTrackingNo) != undefined && this.getStateTrackingNo != '' ? this.getStateTrackingNo : '';
      console.log(this.oldFormSecondPageAllData, 222);
      var formData = new FormData();
      formData.append('jsonData', JSON.stringify(this.oldFormSecondPageAllData));
      formData.append('request_type', 'store');
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/application-store', formData).then(function (resp) {
        _this5.loading_icon = false;
        if (resp.data.status == 200) {
          /** Tanbeer reset first page common data when save as draft */
          // this.setFirstPageCommonData('');
          // this.clearAllOldFormStateData('');
          var urlCrypt = __webpack_require__(/*! url-crypt */ "./node_modules/url-crypt/index.js")('~{ry*I)==yU/]9<7DPk!Hj"R#:-/Z7(hTBnlRS=4CXF');
          var encryptTrackingNo = urlCrypt.cryptObj(resp.data.data.tracking_no);
          return _this5.$router.push({
            path: '/',
            query: {
              tracking_no: encryptTrackingNo
            }
          });
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    SubmissionData: function SubmissionData() {
      var _this6 = this;
      /** Submission check*/
      /** With Debounce mechanism */
      if (this.subTimeOutId) {
        clearTimeout(this.subTimeOutId);
      }
      this.subTimeOutId = setTimeout(function () {
        _this6.applicationData.declear_call = 0;
        _this6.loading_icon = true;
        _this6.applicationSubmit();
      }, 300);
    },
    applicationSubmit: function applicationSubmit() {
      var _this7 = this;
      this.jsonPrepareSaveAsDraft();
      this.oldFormSecondPageAllData.form_type = 2;
      this.oldFormSecondPageAllData.app_type = 'submit';
      this.oldFormSecondPageAllData.tracking_no = _typeof(this.getStateTrackingNo) != undefined && this.getStateTrackingNo != '' ? this.getStateTrackingNo : '';
      // console.log(this.oldFormSecondPageAllData,111);
      var formData = new FormData();
      formData.append('jsonData', JSON.stringify(this.oldFormSecondPageAllData));
      formData.append('request_type', 'store');
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/application-store', formData).then(function (resp) {
        _this7.loading_icon = false;
        if (resp.data.status == 200) {
          var commonStateData = _this7.allCommonDataFirstPage;
          /** Tanbeer reset first page common data when save as draft */
          // this.setFirstPageCommonData('');
          // this.clearAllOldFormStateData('');
          var urlCrypt = __webpack_require__(/*! url-crypt */ "./node_modules/url-crypt/index.js")('~{ry*I)==yU/]9<7DPk!Hj"R#:-/Z7(hTBnlRS=4CXF');
          var encryptData = urlCrypt.cryptObj(resp.data.data.tracking_no + '#' + commonStateData.areaInfo.upazila_id + '#' + 1 + '#' + 1);
          return _this7.$router.push({
            path: '/payment',
            query: {
              data: encryptData
            }
          });
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    nextPage: function nextPage(e) {
      this.applicationData.actionBtn = e;
    },
    saveApplicationForm: function saveApplicationForm() {
      //TOdo:: validation need here

      var validateDataReq = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_11__["default"].validationMechanism(this.$refs.application_old_form, '.required_field', 'required');
      var validateDataMobile = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_11__["default"].validationMechanism(this.$refs.application_old_form, '.mobile_bn', 'mobile');
      var validateDataEmail = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_11__["default"].validationMechanism(this.$refs.application_old_form, '.email_validate', 'email');
      var validateDataNumber = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_11__["default"].validationMechanism(this.$refs.application_old_form, '.only_number', 'only_number');
      var validateNID = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_11__["default"].validationMechanism(this.$refs.application_old_form, '.nid', 'nid');
      var validateOnlineCharacter = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_11__["default"].validationMechanism(this.$refs.application_old_form, '.only_character', 'only_character');
      if (!validateDataReq || !validateDataMobile || !validateDataEmail || !validateDataNumber || !validateNID || !validateOnlineCharacter) {
        // alert('সকল লাল চিহ্নিত ঘর পূরণ করতে হবে ');
        // return false;
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_12__["default"].sweetAlertForRemoveButton(this, '<i class="fa fas fa-exclamation-circle" style="font-size: 40px; color:#C00000;"></i> </i><h6 align="center" style="padding-top:10px;"> <strong>সকল লাল চিহ্নিত ঘর পূরণ করতে হবে।</strong></h6>').then(function (res) {
          if (res.isDismissed || res.isDenied) {
            return false;
          }
        });
      } else {
        // if(this.documentFilePath.length == 0){
        //
        //     CommonFunction.sweetAlertForRemoveButton(this, '<i class="fa fas fa-exclamation-circle" style="font-size: 40px; color:#C00000;"></i> </i><h6 align="center" style="padding-top:10px;"> <strong>ডকুমেন্ট সংযুক্ত করুন।</strong></h6>').then(res => {
        //         if (res.isDismissed || res.isDenied) {
        //             return false;
        //         }
        //     });
        // }else{
        //     this.applicationData.loading_icon = true
        //     this.fileUploadMechanism();
        // }

        // if(this.documentFilePath.length == 0){
        //
        //
        // }

        if (this.documentFilePath.length == 0) {
          this.$refs['my-modal'].show();
        } else {
          this.applicationData.loading_icon = true;
          this.fileUploadMechanism();
        }
      }
    }
  }),
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/JomiCalculator */ "./resources/js/helpers/JomiCalculator.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "land-info",
  props: ['divisions', 'land_amount_types', 'land_record_types', 'applicationData', 'districts', 'upazilas', 'select2Mouja', 'application_land_schedules', 'dolilInfo', 'req_doc', 'land_rate_enable_month_count'],
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      add_row_index: 0,
      khotianButton: true,
      dagButton: true,
      final_mouja_text: '',
      subRegisterOffice: {},
      allDistrictList: [],
      prev_selected_district_id: '',
      //input data get form allDistrictList
      disabledDates: {
        from: new Date(Date.now())
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])),
  created: function created() {
    this.allDistrict();
  },
  mounted: function mounted() {
    this.getDolilData();
    var mouja_string = this.allCommonDataFirstPage.areaInfo.mouja_text;
    this.final_mouja_text = mouja_string != '' ? mouja_string.slice(0, mouja_string.indexOf('[')) + ')' : '';
    if (typeof this.application_land_schedules != 'undefined' && this.application_land_schedules.length > 0) {
      var landScheduledData = this.application_land_schedules;
      var lastLandScheduleObjIndex = Object.keys(landScheduledData)[Object.keys(landScheduledData).length - 1];
      if (landScheduledData[lastLandScheduleObjIndex].main_data[0].khatian_no != '') {
        this.visibleDagKhotianButtonMechanism(true);
      }
      this.add_row_index = this.application_land_schedules.length - 1;
    }
    //for selected district & sub register office data
    this.prev_selected_district_id = typeof this.allCommonDataFirstPage.areaInfo.district_id != 'undefined' ? this.allCommonDataFirstPage.areaInfo.district_id : '';
    this.application_land_schedules[0].main_data[0].sub_reg_district_id = this.prev_selected_district_id.trim();
    this.application_land_schedules[0].main_data[0].sub_reg_office_list = this.subRegisterOffice;
    this.initRegOfficeSet(this.application_land_schedules[0].main_data[0].sub_reg_district_id, 0, 0);
    this.setIsLandScheduleUpdate(1); //check for new dolil info
  },

  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('oldFormState', ['setIsLandScheduleUpdate'])), {}, {
    getDolilData: function getDolilData() {
      var _this = this;
      var formData = new FormData();
      formData.append('application_land_schedules', JSON.stringify(this.application_land_schedules));
      formData.append('req_doc', JSON.stringify(this.req_doc));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header(this.headers).post(this.apiBaseURL + '/oldform-landschedule-dolil-info', formData).then(function (resp) {
        _this.finalDolilInfo = resp.data.data.data.generateFinalDolilInfo;
        //this.req_doc = resp.data.data.data.dolilNumText
        _this.$emit('updateReqDoc', resp.data.data.data.dolilNumText);
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    subRegisterOfficeData: function subRegisterOfficeData(event, key, childkey) {
      var _this2 = this;
      this.application_land_schedules[key].main_data[childkey].sub_reg_district_id = event.target.value;
      this.application_land_schedules[key].main_data[childkey].sub_reg_office_list = {};
      this.application_land_schedules[key].main_data[childkey].sub_register_office_name = '';
      var selected_district_id = event.target.value;
      var formData = new FormData();
      formData.append('district_id', selected_district_id);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/get-register-office', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (selected_district_id != '') {
          _this2.application_land_schedules[key].main_data[childkey].sub_reg_office_list = resp.data.response.data ? resp.data.response.data : {};
        } else {
          _this2.application_land_schedules[key].main_data[childkey].sub_reg_office_list = resp.data.response.data ? resp.data.response.data : {};
        }
      })["catch"](function () {
        console.log('data cannot be fetched');
      });
    },
    onRegisterOfficeChange: function onRegisterOfficeChange(event, masterIndex, childIndex, childData) {
      if (typeof event.target.options[event.target.options.selectedIndex] !== 'undefined') {
        this.application_land_schedules[masterIndex].main_data[childIndex].sub_register_office_name_text = event.target.options[event.target.options.selectedIndex].text;
      } else {
        this.application_land_schedules[masterIndex].main_data[childIndex].sub_register_office_name_text = '';
      }
      this.checkDolilInfo(childData, masterIndex, childIndex);
    },
    checkDolilInfo: function checkDolilInfo(childData, master_key, child_Key) {
      var _this3 = this;
      var flag = true;
      if (childData.dalil_no == '' || childData.dalil_date == '' || childData.sub_register_office_name == '') {
        flag = false;
      }
      this.setIsLandScheduleUpdate(1);
      if (flag) {
        var form_data_dolil = new FormData();
        form_data_dolil.append('officeId', parseInt(childData.sub_register_office_name));
        form_data_dolil.append('deedNo', _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(childData.dalil_no));
        form_data_dolil.append('registrationDate', this.customDateFormat(childData.dalil_date, 'DD/MM/YYYY'));
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/get-dalil-pdf', form_data_dolil, {
          headers: this.headers
        }).then(function (resp) {
          if (resp.data.data.filePath != '') {
            _this3.application_land_schedules[master_key].main_data[child_Key].is_dolil_found = 1;
            _this3.application_land_schedules[master_key].main_data[child_Key].file_path = resp.data.data.filePath;
          } else {
            _this3.application_land_schedules[master_key].main_data[child_Key].is_dolil_found = 0;
            _this3.application_land_schedules[master_key].main_data[child_Key].file_path = '';
          }
        })["catch"](function (error) {
          _this3.application_land_schedules[master_key].main_data[child_Key].is_dolil_found = 0;
          _this3.application_land_schedules[master_key].main_data[child_Key].file_path = '';
          console.log(error.response.data.message);
        });
      } else {
        this.application_land_schedules[master_key].main_data[child_Key].is_dolil_found = 0;
      }
      this.checkDolilDate(childData, master_key, child_Key);
    },
    initRegOfficeSet: function initRegOfficeSet(dis_id, key) {
      var _this4 = this;
      var childkey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var formData = new FormData();
      formData.append('district_id', dis_id);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/get-register-office', formData, {
        headers: this.headers
      }).then(function (resp) {
        _this4.application_land_schedules[key].main_data[childkey].sub_reg_office_list = resp.data.response.data ? resp.data.response.data : [];
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    allDistrict: function allDistrict() {
      var _this5 = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/get-all-district', '', {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this5.allDistrictList = resp.data.data.districts;
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    addLandSchedules: function addLandSchedules(type, index) {
      // console.log(this.application_land_schedules[0].main_data[0].sub_reg_office_list,123)

      this.setIsLandScheduleUpdate(1); //check for new dolil info
      this.getDolilData();
      var sub_register_office_name = '';
      var sub_register_office_name_text = '';
      var lastScheduleKey = '';
      var lastMainDataKey = '';
      if (type == 'dalil' || type == 'dag') {
        var prev_index = this.application_land_schedules[index].main_data.length - 1;
        sub_register_office_name = this.application_land_schedules[index].main_data[prev_index].sub_register_office_name;
        sub_register_office_name_text = this.application_land_schedules[index].main_data[prev_index].sub_register_office_name_text;
      }
      if (type == 'dalil') {
        this.application_land_schedules[index].main_data.push({
          land_record_type_id: this.application_land_schedules[index].main_data[0].land_record_type_id,
          dalil_no: '',
          dalil_no_error: '',
          dalil_no_error_two: '',
          dalil_date: '',
          sub_register_office_name_text: sub_register_office_name_text,
          sub_register_office_name: sub_register_office_name,
          if_main: 0,
          if_dag: 0,
          if_dalil: 1,
          first_row: 0,
          others_row: 1,
          sub_reg_district_id: this.prev_selected_district_id.trim(),
          sub_reg_office_list: {},
          land_rate_in_mouja: '',
          land_rate_in_mouja_is_required: false
        });
        lastScheduleKey = parseInt(index);
        lastMainDataKey = Object.keys(this.application_land_schedules[lastScheduleKey].main_data).pop();
      }
      if (type == 'dag') {
        this.application_land_schedules[index].main_data.push({
          land_record_type_id: this.application_land_schedules[index].main_data[0].land_record_type_id,
          dag_no: '',
          dag_no_error: false,
          amount_of_land: '',
          amount_of_land_error: false,
          amount_of_land_error_two: false,
          land_amount_type_id: 1,
          dalil_no: '',
          dalil_no_error: '',
          dalil_no_error_two: '',
          dalil_date: '',
          dalil_date_no_error: '',
          dalil_date_no_error_two: '',
          sub_register_office_name_text: sub_register_office_name_text,
          sub_register_office_name: sub_register_office_name,
          if_main: 0,
          if_dag: 1,
          if_dalil: 0,
          first_row: 0,
          others_row: 1,
          korton_krito_jomir_poriman_txt: '',
          sub_reg_district_id: this.prev_selected_district_id.trim(),
          sub_reg_office_list: {},
          land_rate_in_mouja: '',
          land_rate_in_mouja_is_required: false
        });

        // let total_row_count = this.application_land_schedules[index].main_data.length;
        // let dag_exits_row = 0;
        // for (let i = 0; i < total_row_count; i++) {
        //     if (this.application_land_schedules[index].main_data[i].if_dag === 1) {
        //         dag_exits_row += 1;
        //     }
        // }

        // if (this.application_land_schedules[index].main_data[0].daglist.length > 0 && this.application_land_schedules[index].main_data[0].daglist.length <= dag_exits_row) {
        //     this.application_land_schedules[index].dag_button = true;
        // } else {
        this.application_land_schedules[index].dag_button = false;
        // }

        lastScheduleKey = parseInt(index);
        lastMainDataKey = Object.keys(this.application_land_schedules[lastScheduleKey].main_data).pop();
      }
      if (type == 'main') {
        this.application_land_schedules.push({
          main_data: [{
            land_record_type_id: 2,
            khatian_no: '',
            khatian_no_error: false,
            khatian_no_error_two: false,
            dag_no: '',
            dag_no_error: false,
            dag_no_error_two: false,
            amount_of_land: '',
            amount_of_land_error: false,
            amount_of_land_error_two: false,
            land_amount_type_id: 1,
            dalil_no: '',
            dalil_date: '',
            dalil_date_no_error: '',
            dalil_date_no_error_two: '',
            sub_register_office_name: '',
            if_dag: 1,
            if_dalil: 0,
            first_row: 1,
            others_row: 0,
            if_main: 1,
            korton_krito_jomir_poriman_txt: '',
            sub_reg_district_id: this.prev_selected_district_id.trim(),
            sub_reg_office_list: {},
            land_rate_in_mouja: '',
            land_rate_in_mouja_is_required: false
          }],
          first_row: 0,
          others_row: 0,
          if_main: 1,
          kate_error: false,
          kate_error_two: false,
          dag_button: true,
          dalil_button: true,
          is_kate: false,
          total_land_khotian: '',
          amount_of_land_text: ''
        });
        this.khotianButton = true;
        this.dagButton = true;
        lastScheduleKey = Object.keys(this.application_land_schedules).pop();
        lastMainDataKey = Object.keys(this.application_land_schedules[lastScheduleKey].main_data).pop();
      }
      this.add_row_index = this.application_land_schedules.length >= 0 ? this.application_land_schedules.length - 1 : 0;
      this.initRegOfficeSet(this.prev_selected_district_id.trim(), lastScheduleKey, lastMainDataKey);
    },
    removeLandSchedules: function removeLandSchedules(type, index, childIndex, childData) {
      var _this6 = this;
      if (childData.khatian_no || childData.dag_no || childData.amount_of_land || childData.dalil_no || childData.dalil_date || childData.sub_register_office_name) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].sweetAlertBox(this, 'আপনি কি ডাটা সহ মুছে ফেলতে ইচ্ছুক?').then(function (res) {
          if (res.isConfirmed) {
            _this6.removeLandRow(type, index, childIndex);
          }
        });
      } else {
        this.removeLandRow(type, index, childIndex);
      }
    },
    removeLandRow: function removeLandRow(type, index, childIndex) {
      this.setIsLandScheduleUpdate(1);
      this.getDolilData();
      if (type == 'dag_dalil') {
        var if_dalil = this.application_land_schedules[index].main_data[childIndex].if_dalil;
        this.application_land_schedules[index].main_data.splice(childIndex, 1);
        if (if_dalil == 0) {
          this.calculationLand(index, childIndex);
          this.landAmountCorrection(index, childIndex);
          if (this.application_land_schedules[index].main_data[childIndex]) {
            this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
          }
          this.application_land_schedules[index].dag_button = false;
        }
      }
      if (type == 'main') {
        this.application_land_schedules.splice(index, 1);
        this.calculationForAllKhatian();
        this.khotianButton = false;
        this.dagButton = false;
      }
    },
    calculationForAllKhatian: function calculationForAllKhatian() {
      this.applicationData.total_land_amount = 0;
      for (var i = 0; i < this.application_land_schedules.length; i++) {
        this.applicationData.total_land_amount += Number(_helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_value(1, _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(this.application_land_schedules[i].total_land_khotian)));
      }
      this.applicationData.total_land_amount = Number(this.applicationData.total_land_amount).toFixed(4);
      this.applicationData.total_land_amount_text = this.totalAmountCalculate(this.applicationData.total_land_amount);
    },
    totalAmountCalculate: function totalAmountCalculate(total_amount_akor) {
      if (total_amount_akor != undefined && total_amount_akor.toString().length > 0) {
        var ekor_value = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_value(1, total_amount_akor);
        var calculator_string = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_string(ekor_value);
        return calculator_string;
      }
    },
    checkKate: function checkKate(data, index, childIndex) {
      if (data) {
        // document.getElementById("amount_of_land_" + index + '_' + childIndex).setAttribute('required', 'required');
        // document.getElementById("total_land_khotian_" + index).removeAttribute('disabled');
        this.application_land_schedules[index].is_kate = true;
        this.removeAllLandTypeExitError(index);
      } else {
        // document.getElementById("amount_of_land_" + index + '_' + childIndex).removeAttribute('required');
        // document.getElementById("total_land_khotian_" + index).setAttribute('disabled', true);
        // document.getElementById("total_land_khotian_box_" + index).classList.remove('error_message_custom');
        this.application_land_schedules[index].is_kate = false;
        // this.application_land_schedules[index].total_land_khotian = '';
        this.application_land_schedules[index].kate_error = false;
        this.application_land_schedules[index].kate_error_two = false;
      }
    },
    removeAllLandTypeExitError: function removeAllLandTypeExitError(index) {
      var total_row = this.application_land_schedules[index].main_data.length;
      for (var i = 0; i < total_row; i++) {
        // document.getElementById("amount_of_land_box_" + index + i).classList.remove('error_message_custom');
      }
    },
    checkValueExist: function checkValueExist(value, parent_id, key, childKey, propertyData) {
      if (!value) {
        // document.getElementById(parent_id).classList.add('error_message_custom');
        this.application_land_schedules[key].main_data[childKey][propertyData] = true;
      } else {
        // document.getElementById(parent_id).classList.remove('error_message_custom');
        this.application_land_schedules[key].main_data[childKey][propertyData] = false;
      }
    },
    checkValueExistForKhatian: function checkValueExistForKhatian(value, parent_id, key, childKey, propertyData) {
      if (!_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value)) {
        // document.getElementById(parent_id).classList.add('error_message_custom');
        this.application_land_schedules[key].main_data[childKey][propertyData] = true;
        this.application_land_schedules[key].main_data[childKey].khatian_no_error_two = false;
        this.visibleDagKhotianButtonMechanism(false);
      } else {
        var regex = /^([-+] ?)?[0-9]+(\/[0-9]+)?$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value).match(regex);
        if (found) {
          // document.getElementById(parent_id).classList.remove('error_message_custom');
          this.application_land_schedules[key].main_data[childKey][propertyData] = false;
          this.application_land_schedules[key].main_data[childKey].khatian_no_error_two = false;
          this.visibleDagKhotianButtonMechanism(true);
          this.application_land_schedules[key].dalil_button = false;

          //
          // if ((this.application_land_schedules[key].main_data[childKey].daglist.length > 0) && (this.application_land_schedules[key].main_data[childKey].daglist.length === 1)) {    // online info found
          //
          //     this.application_land_schedules[key].dag_button = true;
          // }
          // else {

          this.application_land_schedules[key].dag_button = false;
          // }
        } else {
          // document.getElementById(parent_id).classList.add('error_message_custom');
          this.application_land_schedules[key].main_data[childKey][propertyData] = false;
          this.application_land_schedules[key].main_data[childKey].khatian_no_error_two = true;
          this.application_land_schedules[key].main_data[childKey].khatian_no = '';
        }
      }
    },
    checkValueExistForDag: function checkValueExistForDag(value, key, childKey, propertyData) {
      if (!_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value)) {
        this.application_land_schedules[key].main_data[childKey][propertyData] = true;
        this.application_land_schedules[key].main_data[childKey].dag_no_error_two = false;
      } else {
        var regex = /^([-+] ?)?[0-9]+(\/[0-9]+)?$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value).match(regex);
        if (found) {
          this.application_land_schedules[key].main_data[childKey][propertyData] = false;
          this.application_land_schedules[key].main_data[childKey].dag_no_error_two = false;
        } else {
          this.application_land_schedules[key].main_data[childKey][propertyData] = false;
          this.application_land_schedules[key].main_data[childKey].dag_no_error_two = true;
          this.application_land_schedules[key].main_data[childKey].dag_no = '';
        }
      }
    },
    checkValueExistForDalil: function checkValueExistForDalil(value, key, childKey, propertyData) {
      if (!_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value)) {
        this.application_land_schedules[key].main_data[childKey].dalil_no_error = true;
        this.application_land_schedules[key].main_data[childKey].dalil_no_error_two = false;
      } else {
        var regex = /^([-+] ?)?[0-9]+(\/[0-9]+)?$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value).match(regex);
        if (found) {
          this.application_land_schedules[key].main_data[childKey].dalil_no_error = false;
          this.application_land_schedules[key].main_data[childKey].dalil_no_error_two = false;
        } else {
          this.application_land_schedules[key].main_data[childKey].dalil_no_error = false;
          this.application_land_schedules[key].main_data[childKey].dalil_no_error_two = true;
          this.application_land_schedules[key].main_data[childKey].dalil_no = '';
        }
      }
    },
    checkValueExistForLandAmount: function checkValueExistForLandAmount(value, parent_id, key, childKey, propertyData) {
      if (!_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value)) {
        // document.getElementById(parent_id).classList.add('error_message_custom');
        this.application_land_schedules[key].main_data[childKey][propertyData] = true;
        this.application_land_schedules[key].main_data[childKey].amount_of_land_error_two = false;
        this.application_land_schedules[key].main_data[childKey].amount_of_land = '';
      } else {
        var regex = /^[0-9.]*$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value).match(regex);
        if (found) {
          // document.getElementById(parent_id).classList.remove('error_message_custom');
          this.application_land_schedules[key].main_data[childKey][propertyData] = false;
          this.application_land_schedules[key].main_data[childKey].amount_of_land_error_two = false;
        } else {
          // document.getElementById(parent_id).classList.add('error_message_custom');
          this.application_land_schedules[key].main_data[childKey].amount_of_land_error_two = true;
          this.application_land_schedules[key].main_data[childKey].amount_of_land = '';
        }
      }
    },
    checkValueOnlyNumber: function checkValueOnlyNumber(value, parent_id, key, childKey) {
      if (!_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value)) {
        // document.getElementById(parent_id).classList.remove('error_message_custom');
        this.application_land_schedules[key].main_data[childKey].amount_of_land_error_two = false;
      } else {
        var regex = /^[0-9.]*$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value).match(regex);
        if (found) {
          // document.getElementById(parent_id).classList.remove('error_message_custom');
          this.application_land_schedules[key].main_data[childKey].amount_of_land_error_two = false;
        } else {
          // document.getElementById(parent_id).classList.add('error_message_custom');
          this.application_land_schedules[key].main_data[childKey].amount_of_land_error_two = true;
          this.application_land_schedules[key].main_data[childKey].amount_of_land = '';
        }
      }
    },
    checkValueExistForKateAmount: function checkValueExistForKateAmount(value, parent_id, key, propertyData) {
      if (!_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value)) {
        // document.getElementById(parent_id).classList.add('error_message_custom');
        this.application_land_schedules[key][propertyData] = true;
      } else {
        this.application_land_schedules[key][propertyData] = false;
        var regex = /^[0-9.]*$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(value).match(regex);
        if (found) {
          // document.getElementById(parent_id).classList.remove('error_message_custom');
          this.application_land_schedules[key].kate_error_two = false;
        } else {
          // document.getElementById(parent_id).classList.add('error_message_custom');
          this.application_land_schedules[key].kate_error_two = true;
          this.application_land_schedules[key].total_land_khotian = '';
        }
      }
    },
    calculationForKate: function calculationForKate(key, event) {
      var value = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(event.target.value);
      if (this.isValidNumber(value)) {
        this.calculationForAllKhatian();
      }
    },
    isValidNumber: function isValidNumber(value) {
      var regex = /^[0-9.]*$/;
      return value.match(regex);
    },
    customDateFormat: function customDateFormat(date) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format('YYYY-MM-DD');
    },
    visibleDagKhotianButtonMechanism: function visibleDagKhotianButtonMechanism(flag) {
      if (flag) {
        this.khotianButton = false;
        // this.dagButton = false;
      } else {
        this.khotianButton = true;
        // this.dagButton = true;
      }
    },
    checkDuplicatekhatianNoIn: function checkDuplicatekhatianNoIn(master_key, child_key) {
      var _this7 = this;
      if (this.khatianDuplicateCheckTimer) {
        clearTimeout(this.khatianDuplicateCheckTimer);
      }
      this.khatianDuplicateCheckTimer = setTimeout(function () {
        var khatian_no = _this7.application_land_schedules[master_key].main_data[child_key].khatian_no;
        var land_record_type_id = _this7.application_land_schedules[master_key].main_data[child_key].land_record_type_id;
        var lengthOfApLS = _this7.application_land_schedules.length;
        for (var i = 0; i < lengthOfApLS; i++) {
          if (i === master_key) continue;
          if (_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(_this7.application_land_schedules[i].main_data[0].khatian_no) === _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(khatian_no) && _this7.application_land_schedules[i].main_data[0].land_record_type_id === land_record_type_id) {
            // this.application_land_schedules[master_key].main_data[child_key].khatian_no = '';
            // alert('উক্ত খাতিয়ান নং পূর্বে ব্যবহার করা হয়েছে।');
            _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].sweetAlertForRemoveButton(_this7, '<i class="fa fas fa-exclamation-circle" style="font-size: 40px; color:#C00000;"></i> </i><h6 align="center" style="padding-top:10px;"> <strong>উক্ত খাতিয়ান নং পূর্বে ব্যবহার করা হয়েছে।</strong></h6>').then(function (res) {
              if (res.isConfirmed) {
                _this7.application_land_schedules[master_key].main_data[child_key].khatian_no = '';
                return;
              } else {
                _this7.application_land_schedules[master_key].main_data[child_key].khatian_no = '';
                return;
              }
            });
          }
        }
      }, 1000);
    },
    changedLandRecordType: function changedLandRecordType(master_key, child_Key) {
      var is_khotian_no_remove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.application_land_schedules[master_key].main_data[child_Key].dag_no = '';
      this.application_land_schedules[master_key].main_data[child_Key].daglist = [];
      this.application_land_schedules[master_key].main_data[child_Key].ownerList = [];
      this.application_land_schedules[master_key].main_data[child_Key].portion = '';
      this.application_land_schedules[master_key].main_data[child_Key].agoto_khatian_jomir_poriman_txt = '';
      this.application_land_schedules[master_key].main_data[child_Key].korton_krito_jomir_poriman_txt = '';
      this.application_land_schedules[master_key].main_data[child_Key].dalil_no = '';
      this.application_land_schedules[master_key].main_data[child_Key].dalil_date = '';
      this.application_land_schedules[master_key].main_data[child_Key].sub_register_office_name = '';
      this.application_land_schedules[master_key].main_data[child_Key].sub_register_office_name_text = '';
      this.application_land_schedules[master_key].main_data[child_Key].amount_of_land = '';
      if (is_khotian_no_remove) {
        this.application_land_schedules[master_key].main_data[child_Key].khatian_no = '';
      }
      this.application_land_schedules[master_key].total_land_khotian = '';
    },
    //new added

    calculationLand: function calculationLand(index, childIndex) {
      // let land_amount_type_id_value = $("#land_amount_type_id_" + index + childIndex).val();
      // let land_amount_type_id_value = this.application_land_schedules[index].main_data[childIndex].land_amount_type_id;
      var land_amount_type_id_value = 1;
      var amount_of_land_value = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_" + index + childIndex).val();
      amount_of_land_value = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(amount_of_land_value);
      var ekor_value = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_value(land_amount_type_id_value, amount_of_land_value);
      var calculator_string = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_string(ekor_value);
      if (amount_of_land_value > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_message_" + index + childIndex).html(calculator_string);
        if (this.application_land_schedules[index].main_data[childIndex]) {
          this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = calculator_string;
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_message_" + index + childIndex).html('');
        if (this.application_land_schedules[index].main_data[childIndex]) {
          this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
        }
      }
      var main_land_amount_value = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#dag_no_" + index + childIndex + " option:selected").attr('jomir_portion');
      if (main_land_amount_value != undefined && main_land_amount_value > 0 && amount_of_land_value > 0) {
        this.landAmountCorrection(index, childIndex);
      }
      this.application_land_schedules[index].total_land_khotian = 0;
      var land_amount = 0;
      for (var i = 0; i < this.application_land_schedules[index].main_data.length; i++) {
        if (this.application_land_schedules[index].main_data[i].amount_of_land && this.application_land_schedules[index].main_data[i].if_dag == 1) {
          var amount_of_land = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(this.application_land_schedules[index].main_data[i].amount_of_land);
          land_amount = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_value(this.application_land_schedules[index].main_data[i].land_amount_type_id, amount_of_land);
          this.application_land_schedules[index].total_land_khotian += Number(land_amount);
        }
      }
      this.application_land_schedules[index].total_land_khotian = Number(this.application_land_schedules[index].total_land_khotian).toFixed(4);
      this.applicationData.total_land_amount = 0;
      for (var _i = 0; _i < this.application_land_schedules.length; _i++) {
        this.applicationData.total_land_amount += Number(this.application_land_schedules[_i].total_land_khotian);
      }
      this.applicationData.total_land_amount = this.applicationData.total_land_amount.toFixed(4);
      this.applicationData.total_land_amount_txt = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2Bangla(this.totalAmountCalculate(this.applicationData.total_land_amount));
    },
    landAmountValidation: function landAmountValidation(event, index, childIndex) {
      if (_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(event.target.value) && !isNaN(_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(event.target.value))) {
        event.target.classList.remove('error_message_required');
      } else {
        event.target.classList.remove('error_message_required');
        event.target.className += ' error_message_required';
        this.application_land_schedules[index].main_data[childIndex].amount_of_land = '';
      }
    },
    landAmountCorrection: function landAmountCorrection(index, childIndex) {
      var land_amount_type_id_value = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#land_amount_type_id_" + index + childIndex).val();
      var amount_of_land_value = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_" + index + childIndex).val();
      amount_of_land_value = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_5__["default"].convert2English(amount_of_land_value);
      var main_land_amount_value = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#dag_no_" + index + childIndex + " option:selected").attr('jomir_portion');
      if (land_amount_type_id_value == 2 && amount_of_land_value.toString().indexOf('.') !== -1) {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_" + index + childIndex).val('');
        this.application_land_schedules[index].main_data[childIndex].amount_of_land = '';
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_message_" + index + childIndex).html('');
        this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
        alert("শতকের ক্ষেত্রে দশমিক(.) গ্রহণযোগ্য নয়");
        return false;
      }
      if (land_amount_type_id_value == 2 && amount_of_land_value >= 10000) {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_" + index + childIndex).val('');
        this.application_land_schedules[index].main_data[childIndex].amount_of_land = '';
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_message_" + index + childIndex).html('');
        this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
        alert("আপনার জমির পরিমাণ ১০০ শতক বা তার বেশি হলে অপসন থেকে একর সিলেক্ট করে তথ্য দিন");
        return false;
      }
      if (main_land_amount_value != undefined && main_land_amount_value > 0) {
        var input_value = Number(this.diff_land_calculation(land_amount_type_id_value, amount_of_land_value));
        var exist_value = Number(this.diff_land_calculation(1, main_land_amount_value));
        if (input_value > exist_value) {
          alert('উক্ত দাগে জমির পরিমাণ : ' + this.totalAmountCalculate(exist_value) + ', এর বেশি এন্ট্রি করা যাবে না');
          jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_" + index + childIndex).val('');
          this.application_land_schedules[index].main_data[childIndex].amount_of_land = '';
          this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
          jquery__WEBPACK_IMPORTED_MODULE_6___default()("#amount_of_land_message_" + index + childIndex).html('');
        }
      }
    },
    checkDolilDate: function checkDolilDate(childData, master_key, child_key) {
      var _this8 = this;
      /**
       * show land_rate_in_mouja field based on dalil_date
       * condition:
       * if the given dalil_date is less then Configured date (12/15 months)
       *      then show the field & required
       * else
       *      the field will kept hidden
       */
      // console.log(this.application_land_schedules);

      this.$nextTick(function () {
        var d = new Date();
        d.setMonth(d.getMonth() - parseInt(_this8.land_rate_enable_month_count));
        var maxPrev = d.toLocaleDateString('en-us', {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        var givenDate = Date.parse(childData.dalil_date);
        maxPrev = Date.parse(maxPrev);
        if (givenDate >= maxPrev) {
          _this8.application_land_schedules[master_key].main_data[child_key].land_rate_in_mouja_is_required = true;
        } else {
          _this8.application_land_schedules[master_key].main_data[child_key].land_rate_in_mouja = '';
          _this8.application_land_schedules[master_key].main_data[child_key].land_rate_in_mouja_is_required = false;
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/FileUpload */ "./resources/js/helpers/FileUpload.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "applicant-defendant",
  props: ['applicationData', 'application_citizen_applicant', 'application_citizen_defendant', 'applicantImage'],
  data: function data() {
    return {
      add_row_applicant_index: 1,
      add_row_defendant_index: 1,
      apiBaseURL: "http://localhost:8000/api",
      apiClientId: "namjari_draft",
      apiClientSecret: "mongo@namjari",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      bData: '',
      bDataReady: false,
      base64imageView: '',
      nidImgView: '',
      nidImageFlag: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    /* SET FIRST APPLICANT IMAGE AFTER VERIFY NID */
    var citizenData = this.application_citizen_applicant;
    if (typeof citizenData != 'undefined') {
      if (citizenData[0].photo != '') {
        var url = this.apiBaseURL + '/fetch-base64';
        var form_data = new FormData();
        form_data.append('uuid', citizenData[0].photo);
        var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"].viewPhotoFromUUID(url, form_data, this.headers);
        response.payload.then(function (data) {
          _this.applicantImage[0].pictureBase64 = data.data.data.base64;
          _this.applicantImage[0].pictureExt = "png";
          _this.applicantImage[0].signstureBase64 = '';
          _this.nidImageFlag = true;
        })["catch"](function () {
          console.log('Image cannot be fetched');
        });
      }
    }
  },
  methods: {
    addApplicationCitizen: function addApplicationCitizen() {
      this.application_citizen_applicant.push({
        name: '',
        address: '',
        mobile_no: '',
        national_id_no: '',
        email: '',
        photo: '',
        signature: '',
        first_row: 0,
        name_error: false,
        address_error: false,
        mobile_no_error: false,
        national_id_no_error: false,
        nid_verification_message_error: false,
        photo_error: false,
        photo_loading: false,
        signature_loading: false
      });
      this.applicantImage.push({
        pictureBase64: '',
        pictureExt: '',
        signstureBase64: '',
        signstureExt: ''
      });
    },
    addApplicationDefendant: function addApplicationDefendant() {
      this.application_citizen_defendant.push({
        name: '',
        address: '',
        mobile_no: '',
        mobile_no_error: false,
        national_id_no: '',
        email: '',
        first_row: 0,
        name_error: false,
        address_error: false,
        national_id_no_error: false,
        nid_verification_message_error: false,
        email_error: false
      });
    },
    setNidImageToContainer: function setNidImageToContainer(imageInfo, key) {
      var _this2 = this;
      console.log(imageInfo, key);
      var url = this.apiBaseURL + '/fetch-base64';
      var form_data = new FormData();
      form_data.append('uuid', imageInfo);
      _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"].getNidImgByUUID(url, form_data, this.headers).payload.then(function (data) {
        _this2.$forceUpdate();
        _this2[type][key].temp_img = data.data.data.base64;
        _this2.$forceUpdate();
      })["catch"](function () {
        return console.log("something wrong on image fetch");
      });
    },
    removeApplicationCitizen: function removeApplicationCitizen(index, childData) {
      var _this3 = this;
      if (childData.name || childData.address || childData.mobile_no || childData.national_id_no || childData.email) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].sweetAlertBox(this, 'আপনি কি ডাটা সহ মুছে ফেলতে ইচ্ছুক?').then(function (res) {
          if (res.isConfirmed) {
            _this3.application_citizen_applicant.splice(index, 1);
            _this3.applicantImage.splice(index, 1);
          }
        });
      } else {
        this.application_citizen_applicant.splice(index, 1);
        this.applicantImage.splice(index, 1);
      }
    },
    removeApplicationDefendant: function removeApplicationDefendant(index, childData) {
      var _this4 = this;
      if (childData.name || childData.address || childData.mobile_no) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].sweetAlertBox(this, 'আপনি কি ডাটা সহ মুছে ফেলতে ইচ্ছুক?').then(function (res) {
          if (res.isConfirmed) {
            _this4.application_citizen_defendant.splice(index, 1);
          }
        });
      } else {
        this.application_citizen_defendant.splice(index, 1);
      }
    },
    handleFileUpload: function handleFileUpload(event, type, index) {
      var _this5 = this;
      this.fileMime = event.target.files[0].name.split('.').pop();
      if (this.fileMime == 'jpg' || this.fileMime == 'JPG' || this.fileMime == 'png' || this.fileMime == 'jpeg' || this.fileMime == 'JPEG' || this.fileMime == 'PNG') {
        this.application_citizen_applicant[index][type + '_loading'] = true;
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function () {
          _this5.bData = reader.result.split(',')[1];
          _this5.bDataReady = true;
        };
        reader.onerror = function () {
          _this5.application_citizen_applicant[index][type + '_loading'] = false;
        };
        this.base64CheckNew(event, type, index);

        // if(type =='photo'){
        //     this.setNidImageToContainer(event, index);
        // }
      } else {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].sweetAlertForRemoveButton(this, '<i class="fa fas fa-exclamation-circle" style="font-size: 40px; color:#C00000;"></i> </i><h6 align="center" style="padding-top:10px;"> <strong>দুঃখিত! শুধুমাত্র (JPG, JPEG, PNG) টাইপ এর ছবি আপলোড করতে পারবেন।</strong></h6>').then(function (res) {
          if (res.isDismissed || res.isDenied) {
            return false;
          }
        });
      }
    },
    base64CheckNew: function base64CheckNew(event, type, index) {
      var _this6 = this;
      if (this.bDataReady) {
        if (this.bData != '') {
          this.bDataReady = false;
          var url = this.apiBaseURL + '/store-base64';
          var form_data = new FormData();
          form_data.append('file', this.bData);
          var resp = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"].storeNidImgAsBase64(url, form_data, this.headers);
          resp.payload.then(function (data) {
            if (data.data.status == 200) {
              _this6.application_citizen_applicant[index][type] = data.data.data.uuid;
              if (type == 'photo') {
                _this6.applicantImage[index].pictureBase64 = _this6.bData;
                _this6.applicantImage[index].pictureExt = event.target.files[0].type.split('/')[1];
                _this6.application_citizen_applicant[index].pictureBase64 = _this6.bData;
                _this6.application_citizen_applicant[index].pictureExt = event.target.files[0].type.split('/')[1];
              }
              if (type == 'signature') {
                _this6.applicantImage[index].signstureBase64 = _this6.bData;
                _this6.applicantImage[index].signstureExt = event.target.files[0].type.split('/')[1];
                _this6.application_citizen_applicant[index].signstureBase64 = _this6.bData;
                _this6.application_citizen_applicant[index].signstureExt = event.target.files[0].type.split('/')[1];
              }
            }
            _this6.application_citizen_applicant[index][type + '_loading'] = false;
          })["catch"](function () {
            _this6.application_citizen_applicant[index][type + '_loading'] = false;
          });
        }
      } else {
        setTimeout(function () {
          _this6.base64CheckNew(event, type, index);
        }, 1000);
      }
    },
    viewImage: function viewImage(uuid, type, index) {
      var _this7 = this;
      this.application_citizen_applicant[index][type + '_loading'] = true;
      var url = this.apiBaseURL + '/fetch-base64';
      var form_data = new FormData();
      form_data.append('uuid', uuid);
      var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"].viewPhotoFromUUID(url, form_data, this.headers);
      response.payload.then(function (data) {
        _this7.application_citizen_applicant[index][type + '_loading'] = false;
        _this7.$refs['photo-view'].show();
        _this7.base64imageView = "data:image/png;base64," + data.data.data.base64;
      })["catch"](function (err) {
        console.log(err.response.data.message);
      });
    },
    viewNidImage: function viewNidImage(uuid, type, index) {
      var _this8 = this;
      var url = this.apiBaseURL + '/fetch-base64';
      var form_data = new FormData();
      form_data.append('uuid', uuid);
      var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"].viewPhotoFromUUID(url, form_data, this.headers);
      response.payload.then(function (data) {
        _this8.nidImgView = "data:image/png;base64," + data.data.data.base64;
      })["catch"](function (err) {
        console.log(err.response.data.message);
      });
      return this.nidImgView;
    },
    validateDefendandErrorMessage: function validateDefendandErrorMessage(event, key, fieldname) {
      if (event.target.value) {
        this.application_citizen_defendant[key][fieldname] = false;
      }
    },
    validateApplicantErrorMessage: function validateApplicantErrorMessage(event, key, fieldname) {
      if (event.target.value) {
        this.application_citizen_applicant[key][fieldname] = false;
      }
    },
    checkValueExist: function checkValueExist(value, parent_id, key, property, main_data) {
      if (!value) {
        this[main_data][key][property] = true;
      } else {
        this[main_data][key][property] = false;
      }
    },
    checkValueExistForNationalId: function checkValueExistForNationalId(value, parent_id) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var fieldName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (!value) {
        this.application_citizen_applicant[key][fieldName] = true;
        this.application_citizen_applicant[key].nid_verification_message_error = false;
      } else {
        this.application_citizen_applicant[key][fieldName] = false;
        var nidLength = value.toString().length;
        if (nidLength == 10 || nidLength == 13 || nidLength == 17) {
          this.application_citizen_applicant[key].nid_verification_message_error = false;
        } else {
          this.application_citizen_applicant[key].nid_verification_message_error = true;
        }
      }
    },
    checkValueExistForBibadiNationalId: function checkValueExistForBibadiNationalId(value, parent_id) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var fieldName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (!value) {
        this.application_citizen_defendant[key][fieldName] = true;
        this.application_citizen_defendant[key].nid_verification_message_error = false;
      } else {
        this.application_citizen_defendant[key][fieldName] = false;
        var nidLength = value.toString().length;
        if (nidLength == 10 || nidLength == 13 || nidLength == 17) {
          this.application_citizen_defendant[key].nid_verification_message_error = false;
        } else {
          this.application_citizen_defendant[key].nid_verification_message_error = true;
        }
      }
    },
    checkMobileValueExist: function checkMobileValueExist(value, parent_id) {
      var if_required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'required';
      var key = arguments.length > 3 ? arguments[3] : undefined;
      if (!value) {
        if (if_required === 'required') {
          this.application_citizen_applicant[key].mobile_no_error = true;
        }
      } else {
        var mobile_no_english = this.convert2English(value);
        var phoneno = /^01([3456789])([0-9]{8})$/;
        if (mobile_no_english.match(phoneno)) {
          this.application_citizen_applicant[key].mobile_no_error = false;
        } else {
          this.application_citizen_applicant[key].mobile_no_error = true;
        }
      }
    },
    checkMobileValueExistDefendant: function checkMobileValueExistDefendant(value, parent_id) {
      var if_required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'required';
      var key = arguments.length > 3 ? arguments[3] : undefined;
      if (!value) {
        this.application_citizen_defendant[key].mobile_no_error = false;
      } else {
        var mobile_no_english = this.convert2English(value);
        var phoneno = /^01([3456789])([0-9]{8})$/;
        this.application_citizen_defendant[key].mobile_no_error = false;
        if (mobile_no_english.match(phoneno)) {
          this.application_citizen_defendant[key].mobile_no_error = false;
        } else {
          this.application_citizen_defendant[key].mobile_no_error = true;
        }
      }
    },
    checkEmailValue: function checkEmailValue(value, parent_id) {
      var if_required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'required';
      var key = arguments.length > 3 ? arguments[3] : undefined;
      if (value) {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var found = value.match(regex);
        if (found) {
          this.application_citizen_applicant[key].email_error_2 = false;
        } else {
          this.application_citizen_applicant[key].email_error_2 = true;
        }
      } else {
        this.application_citizen_applicant[key].email_error_2 = false;
      }
    },
    checkBibadiEmailValue: function checkBibadiEmailValue(value, parent_id) {
      var if_required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'required';
      var key = arguments.length > 3 ? arguments[3] : undefined;
      if (value) {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var found = value.match(regex);
        if (found) {
          this.application_citizen_defendant[key].email_error = false;
        } else {
          this.application_citizen_defendant[key].email_error = true;
        }
      } else {
        this.application_citizen_defendant[key].email_error = false;
      }
    },
    convert2English: function convert2English(engVal) {
      return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].convert2English(engVal);
    },
    removeImage: function removeImage(uuid, type, index) {
      this.applicantImage[index].pictureBase64 = '';
      this.applicantImage[index].pictureExt = '';
      this.application_citizen_applicant[index].pictureBase64 = '';
    }
  },
  watch: {
    application_citizen_defendant: {
      handler: function handler(newVal, oldVal) {
        for (var i = 0; i < newVal.length; i++) {
          if (newVal[i].mobile_no) {
            var mobile_no_english = this.convert2English(newVal[i].mobile_no);
            var phoneno = /^(?:\+88|88)?(01[3-9]\d{8})$/;
            if (mobile_no_english.match(phoneno)) {
              this.application_citizen_defendant[i].mobile_no_error = false;
            } else {
              this.application_citizen_defendant[i].mobile_no_error = true;
            }
          }
          if (newVal[i].national_id_no) {
            if (newVal[i].national_id_no.length == 10 || newVal[i].national_id_no.length == 13 || newVal[i].national_id_no.length == 17) {
              this.application_citizen_defendant[i].nid_verification_message_error = false;
            } else {
              this.application_citizen_defendant[i].nid_verification_message_error = true;
            }
          } else {
            this.application_citizen_defendant[i].nid_verification_message_error = false;
          }
        }
      },
      deep: true
    },
    application_citizen_applicant: {
      handler: function handler(newVal, oldVal) {
        for (var i = 0; i < newVal.length; i++) {
          if (newVal[i].mobile_no) {
            var mobile_no_english = this.convert2English(newVal[i].mobile_no);
            var phoneno = /^(?:\+88|88)?(01[3-9]\d{8})$/;
            if (mobile_no_english.match(phoneno)) {
              this.application_citizen_applicant[i].mobile_no_error = false;
            } else {
              this.application_citizen_applicant[i].mobile_no_error = true;
            }
          }
          if (newVal[i].national_id_no) {
            if (newVal[i].national_id_no.length == 10 || newVal[i].national_id_no.length == 13 || newVal[i].national_id_no.length == 17) {
              this.application_citizen_applicant[i].nid_verification_message_error = false;
            } else {
              this.application_citizen_applicant[i].nid_verification_message_error = true;
            }
          }
        }
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/JomiCalculator */ "./resources/js/helpers/JomiCalculator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['applicationData', 'filePath', 'divisions', 'districts', 'upazilas', 'select2Mouja', 'land_amount_types', 'land_record_types', 'application_land_schedules', 'application_citizen_applicant', 'application_citizen_representative', 'application_citizen_defendant', 'application_citizen_record', 'application_land_schedules_is_last', 'required_documents', 'land_ownership_reference', 'applicantImage', 'representativeImage', 'emergencyInfo'],
  data: function data() {
    return {
      ditrictData: '',
      upazilasData: '',
      docTickCross: [],
      applicationReferenceData: '',
      isLastKhatianDataExist: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("oldFormState", ["getOldFormStateData", "getCitizenCommonData"])),
  mounted: function mounted() {
    console.log(this.application_land_schedules, 55);
    for (var x in this.filePath) {
      if (this.filePath[x].doc_type != '') {
        this.docTickCross.push(this.filePath[x].doc_type);
      }
    }
    this.organizeReferenceData();
    var lastKhatianData = typeof this.application_land_schedules_is_last != 'undefined' ? this.application_land_schedules_is_last : '';
    if (lastKhatianData != '') {
      var lastKhatianObjIndex = Object.keys(lastKhatianData)[Object.keys(lastKhatianData).length - 1];
      if (lastKhatianData[lastKhatianObjIndex].khatian_no != '') {
        this.isLastKhatianDataExist = true;
      }
    }
  },
  methods: {
    showModal: function showModal() {
      this.$refs['my-modal'].show();
    },
    isInArray: function isInArray(value, array) {
      return array.indexOf(value) > -1;
    },
    organizeReferenceData: function organizeReferenceData() {
      var stateData = this.allCommonDataFirstPage.ownerShipData;
      var textData = '';
      for (var singleData in stateData) {
        if (stateData[singleData].active === true) {
          textData += ', ' + stateData[singleData].display.toString();
        }
      }
      this.applicationReferenceData = textData.slice(2, textData.length);
    },
    convert2Bangla: function convert2Bangla(engVal) {
      return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].convert2Bangla(engVal);
    },
    totalAmountCalculate: function totalAmountCalculate(total_amount_akor) {
      if (total_amount_akor != undefined && total_amount_akor.toString().length > 0) {
        var ekor_value = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__["default"].get_acher_value(1, total_amount_akor);
        var calculator_string = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__["default"].get_acher_string(ekor_value);
        return calculator_string;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/AttachmentMachine */ "./resources/js/helpers/AttachmentMachine.js");
/* harmony import */ var _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/FileUpload */ "./resources/js/helpers/FileUpload.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "documents",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("oldFormState", ["getIsLandScheduleUpdate"])),
  // props: ['req_doc', 'filePath'],
  props: ['applicationData', 'application_citizen_representative', 'representativeImage', 'req_doc', 'application_land_schedules', 'filePath'],
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      ftpBaseUrl: process.env.VUE_APP_FTP_ROOT_PATH,
      tempBaseUrl: "http://localhost:8000/",
      tempDir: "doc31",
      uploadFolder: "doc31",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      progress: 0,
      bData: '',
      bDataReady: '',
      fileExist: true,
      isInitial: true,
      fileUploadProgress: true,
      documentBlobUrl: '',
      fileObject: '',
      //representative
      fileMime: '',
      repBData: '',
      repBDataReady: false,
      base64imageView: '',
      isGrohitaNidImg: '',
      //new added for get dolil info from modal
      documentshowSection: false,
      finalDolilInfo: '',
      dolilNumberWithText: '',
      age_error2: '',
      relation_error2: '',
      nid_verification_message_error: '',
      national_id_no_error: '',
      docSecValidFlag: 0
    };
  },
  mounted: function mounted() {
    var _this = this;
    /* SET FIRST APPLICANT IMAGE AFTER VERIFY NID */
    var representative = this.application_citizen_representative;
    if (typeof representative != 'undefined') {
      if (representative.photo != '') {
        var url = this.apiBaseURL + '/fetch-base64';
        var form_data = new FormData();
        form_data.append('uuid', representative.photo);
        var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_2__["default"].viewPhotoFromUUID(url, form_data, this.headers);
        response.payload.then(function (data) {
          _this.isGrohitaNidImg = data.data.data.base64;
        })["catch"](function () {
          console.log('Image cannot be fetched');
        });
      }
    }
    this.setIsLandScheduleUpdate(1);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('tokenState', ['getToken'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('oldFormState', ['setIsLandScheduleUpdate'])), {}, {
    getDolilData: function getDolilData() {
      var _this2 = this;
      var formData = new FormData();
      formData.append('application_land_schedules', JSON.stringify(this.application_land_schedules));
      formData.append('req_doc', JSON.stringify(this.req_doc));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_3__["default"].header(this.headers).post(this.apiBaseURL + '/oldform-landschedule-dolil-info', formData).then(function (resp) {
        _this2.finalDolilInfo = resp.data.data.data.generateFinalDolilInfo;
        //this.req_doc = resp.data.data.data.dolilNumText
        _this2.$emit('updateReqDoc', resp.data.data.data.dolilNumText);

        // setTimeout(() => {
        //     this.fileUploadProgress = false;
        // }, 5000)
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    documentSectiontoggle: function documentSectiontoggle() {
      this.getDolilData();
      // this.documentshowSection = !this.documentshowSection
      this.documentshowSection = true;
      this.setIsLandScheduleUpdate(0);
    },
    onFileChange: function onFileChange(event) {
      var _this3 = this;
      var file = event.target.files[0];
      _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_1__["default"].readFile(file, function (event) {
        if (!event.target.result.match(/\/Type[\s]*\/Page[^s]/g)) {
          // without page
          alert('File format pdf is not valid');
          event.target.value = '';
          return false;
        }
        var pageCount = event.target.result.match(/\/Type[\s]*\/Page[^s]/g).length;
        if (file.size / 1024 > _this3.config_per_page_amount * pageCount) {
          alert('Per page minimum file size exceded');
          event.target.value = '';
          return false;
        }

        // this.fileUploadProgress = true;
        _this3.fileExist = true;
        // this.isInitial = false;
        _this3.isInitial = false;
        _this3.filePath.push({
          path: '',
          doc_type: '',
          name: file.name,
          fileObj: file,
          number_of_pages: pageCount
        });
        setTimeout(function () {
          _this3.isInitial = true;
          _this3.fileUploadProgress = false;
        }, 500);
        _this3.fileUploadProgress = true;
      });
      this.getDolilData();
      event.target.value = null;
    },
    removeDocRecord: function removeDocRecord(index) {
      this.filePath.splice(index, 1);
      this.getDolilData();
    },
    displayFile: function displayFile(event, fileObj) {
      var _this4 = this;
      event.preventDefault();
      if (fileObj.fileObj && fileObj.fileObj != undefined) {
        _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_1__["default"].getBlobUrl(fileObj.fileObj, function (blobUrl) {
          if (blobUrl) {
            _this4.documentBlobUrl = blobUrl;
            _this4.$refs['modal-lg'].show();
          } else {
            _this4.documentBlobUrl = '';
            _this4.$refs['modal-lg'].hide();
          }
        });
      } else if (fileObj.path) {
        this.documentBlobUrl = this.tempBaseUrl + this.tempDir + '/temp_uploaded_files/' + fileObj.path;
        this.$refs['modal-lg'].show();
      }
    },
    //representative
    handleFileUpload: function handleFileUpload(event, type) {
      var _this5 = this;
      this.fileMime = event.target.files[0].name.split('.').pop();
      if (this.fileMime == 'jpg' || this.fileMime == 'JPG' || this.fileMime == 'png' || this.fileMime == 'jpeg' || this.fileMime == 'JPEG' || this.fileMime == 'PNG') {
        this.application_citizen_representative[type + '_loading'] = true;
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function () {
          _this5.repBData = reader.result.split(',')[1];
          _this5.repBDataReady = true;
        };
        reader.onerror = function () {
          _this5.application_citizen_representative[type + '_loading'] = false;
        };
        this.base64CheckNew(event, type);
      } else {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].sweetAlertForRemoveButton(this, '<i class="fa fas fa-exclamation-circle" style="font-size: 40px; color:#C00000;"></i> </i><h6 align="center" style="padding-top:10px;"> <strong>দুঃখিত! শুধুমাত্র (JPG, JPEG, PNG) টাইপ এর ছবি আপলোড করতে পারবেন।</strong></h6>').then(function (res) {
          if (res.isDismissed || res.isDenied) {
            return false;
          }
        });
      }
    },
    base64CheckNew: function base64CheckNew(event, type) {
      var _this6 = this;
      if (this.repBDataReady) {
        if (this.repBData != '') {
          this.repBDataReady = false;
          var url = this.apiBaseURL + '/store-base64';
          var form_data = new FormData();
          form_data.append('file', this.repBData);
          var resp = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_2__["default"].storeNidImgAsBase64(url, form_data, this.headers);
          resp.payload.then(function (data) {
            if (data.data.status == 200) {
              _this6.application_citizen_representative[type] = data.data.data.uuid;
              if (type == 'photo') {
                _this6.representativeImage.pictureBase64 = _this6.repBData;
                _this6.representativeImage.pictureExt = event.target.files[0].type.split('/')[1];
                _this6.application_citizen_representative.pictureBase64 = _this6.repBData;
                _this6.application_citizen_representative.pictureExt = event.target.files[0].type.split('/')[1];
              }
              if (type == 'signature') {
                _this6.representativeImage.signstureBase64 = _this6.repBData;
                _this6.representativeImage.signstureExt = event.target.files[0].type.split('/')[1];
                _this6.application_citizen_representative.signstureBase64 = _this6.repBData;
                _this6.application_citizen_representative.signstureExt = event.target.files[0].type.split('/')[1];
              }
            }
            _this6.application_citizen_representative[type + '_loading'] = false;
          })["catch"](function () {
            _this6.application_citizen_representative[type + '_loading'] = false;
          });
        }
      } else {
        setTimeout(function () {
          _this6.base64CheckNew(event, type);
        }, 1000);
      }
    },
    checkValueExistForNationalId: function checkValueExistForNationalId(value) {
      if (!_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(value)) {
        this.application_citizen_representative.national_id_no_error = true;
        this.application_citizen_representative.nid_verification_message_error = false;
      } else {
        this.application_citizen_representative.national_id_no_error = false;
        var nidLength = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(value).toString().length;
        if (nidLength == 10 || nidLength == 13 || nidLength == 17) {
          this.application_citizen_representative.nid_verification_message_error = false;
        } else {
          this.application_citizen_representative.nid_verification_message_error = true;
        }
      }
    },
    validateRepresentativeErrorMessage: function validateRepresentativeErrorMessage(data, fieldName) {
      if (data) {
        if (fieldName == 'name_error') {
          this.application_citizen_representative[fieldName] = false;
        }
        if (fieldName == 'address_error') {
          this.application_citizen_representative[fieldName] = false;
        }
        if (fieldName == 'mobile_no_error') {
          this.application_citizen_representative[fieldName] = false;
        }
        if (fieldName == 'age_error') {
          var regex = /^([-+] ?)?[0-9]+(\/[0-9]+)?$/;
          var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(data).match(regex);
          if (found) {
            this.application_citizen_representative[fieldName] = false;
            this.age_error2 = false;
          } else {
            this.application_citizen_representative[fieldName] = false;
            this.age_error2 = true;
          }
        }

        // if(fieldName == 'relation_error'){
        //     const regex = /^([-+] ?)?[0-9]+(\/[0-9]+)?$/;
        //     const found = event.target.value.match(regex);
        //     if(found){
        //         this.application_citizen_representative[fieldName] = false;
        //         this.relation_error2 = true;
        //     }else{
        //         this.application_citizen_representative[fieldName] = false;
        //         this.relation_error2 = false;
        //     }
        // }
      } else {
        this.application_citizen_representative[fieldName] = false;
        this.age_error2 = false;
      }
    },
    viewImage: function viewImage(uuid, type) {
      var _this7 = this;
      this.application_citizen_representative[type] = true;
      var url = this.apiBaseURL + '/fetch-base64';
      var form_data = new FormData();
      form_data.append('uuid', uuid);
      var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_2__["default"].viewPhotoFromUUID(url, form_data, this.headers);
      response.payload.then(function (data) {
        _this7.application_citizen_representative[type] = false;
        _this7.$refs['photo-view'].show();
        _this7.base64imageView = "data:image/png;base64," + data.data.data.base64;
      })["catch"](function () {
        _this7.application_citizen_representative[type] = false;
      });
    }
  }),
  watch: {
    'application_citizen_representative.national_id_no': function application_citizen_representativeNational_id_no(val) {
      if (!_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(val)) {
        this.application_citizen_representative.national_id_no_error = true;
        this.application_citizen_representative.nid_verification_message_error = false;
      } else {
        this.application_citizen_representative.national_id_no_error = false;
        var nidLength = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(val).toString().length;
        if (nidLength == 10 || nidLength == 13 || nidLength == 17) {
          this.application_citizen_representative.nid_verification_message_error = false;
        } else {
          this.application_citizen_representative.nid_verification_message_error = true;
        }
      }
    },
    'application_citizen_representative.mobile_no': function application_citizen_representativeMobile_no(val) {
      var mobile_no_english = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(val);
      var phoneno = /^(?:\+88|88)?(01[3-9]\d{8})$/;
      if (mobile_no_english.match(phoneno)) {
        this.application_citizen_representative.mobile_no_error = false;
      } else {
        this.application_citizen_representative.mobile_no_error = true;
      }
    }
  }
  // watch:{
  //     'application_land_schedules': {
  //         handler: function (val, oldVal) {
  //             for (let i=0 ; i < val.length; i++){
  //                 for (let j=0 ; j < val[i].main_data.length; j++){
  //                     // console.log(val[i].main_data[j],4444444444444444444)
  //                     // console.log(val[i].main_data[j].dalil_no)
  //                     // console.log(val[i].main_data[j].dalil_date)
  //                     // console.log(val[i].main_data[j].sub_reg_district_id)
  //                     // console.log(val[i].main_data[j].sub_register_office_name)
  //                     // console.log(val[i].main_data[j].sub_register_office_name_text)
  //                     // this.dolilInfo.dalil_no = val[i].main_data[j].dalil_no
  //                     // this.dolilInfo.dalil_date = val[i].main_data[j].dalil_date
  //                     if(val[i].main_data[j].dalil_no != '' && val[i].main_data[j].dalil_date != '' && val[i].main_data[j].sub_reg_district_id != '' && val[i].main_data[j].sub_register_office_name != '' && val[i].main_data[j].sub_register_office_name_text !=''){
  //                         this.dolilInfo[j]= [
  //                             val[i].main_data[j].dalil_no,
  //                             val[i].main_data[j].dalil_date,
  //                             val[i].main_data[j].sub_reg_district_id,
  //                             val[i].main_data[j].sub_register_office_name,
  //                             val[i].main_data[j].sub_register_office_name_text,
  //                         ]
  //                         this.req_doc[j] = 'মূল দলিলের সার্টিফাইড/ফটোকপি(' + val[i].main_data[j].dalil_no +')'
  //                     }
  //                     else {
  //                         this.dolilInfo[j]=[];
  //                         delete this.req_doc[j]
  //
  //                     }
  //
  //                 }
  //
  //
  //             }
  //
  //         },
  //         deep: true,
  //
  //     },
  //
  // },
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "kharij-owner",
  props: ['land_record_types', 'applicationData', 'application_land_schedules_is_last', 'land_amount_types', 'application_citizen_record'],
  data: function data() {
    return {
      recordButton: false
    };
  },
  methods: {
    addLandSchedulesLast: function addLandSchedulesLast() {
      this.application_land_schedules_is_last.push({
        land_record_type_id: 2,
        khatian_no: '',
        dag_no: '',
        amount_of_land: '',
        land_amount_type_id: 1
      });
    },
    checkValueExistForKhatian: function checkValueExistForKhatian(value, key, propertyData) {
      if (_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__["default"].convert2English(value)) {
        var regex = /^([-+] ?)?[0-9]+(\/[0-9]+)?$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__["default"].convert2English(value).match(regex);
        if (found) {
          this.application_land_schedules_is_last[key][propertyData] = false;
        } else {
          // this.application_land_schedules_is_last[key][propertyData] = true;
          this.application_land_schedules_is_last[key].khatian_no = '';
        }
      }
    },
    checkValueExistForDag: function checkValueExistForDag(value, key, propertyData) {
      if (_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__["default"].convert2English(value)) {
        var regex = /^([-+] ?)?[0-9]+(\/[0-9]+)?$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__["default"].convert2English(value).match(regex);
        if (found) {
          this.application_land_schedules_is_last[key][propertyData] = false;
        } else {
          // this.application_land_schedules_is_last[key][propertyData] = true;
          this.application_land_schedules_is_last[key].dag_no = '';
        }
      }
    },
    checkValueOnlyNumber: function checkValueOnlyNumber(value, key, propertyData) {
      console.log(value, key, propertyData);
      if (_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__["default"].convert2English(value)) {
        var regex = /^[0-9.]*$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__["default"].convert2English(value).match(regex);
        if (found) {
          this.application_land_schedules_is_last[key][propertyData] = false;
        } else {
          // this.application_land_schedules_is_last[key][propertyData] = true;
          this.application_land_schedules_is_last[key].amount_of_land = '';
        }
      }
    },
    addApplicationCitizenRecord: function addApplicationCitizenRecord() {
      this.application_citizen_record.push({
        name: '',
        address: '',
        first_row: 0,
        name_error: false,
        address_error: false
      });
    },
    removeCitizenRecord: function removeCitizenRecord(index, childData) {
      var _this = this;
      if (childData.name || childData.address) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__["default"].sweetAlertBox(this, 'আপনি কি ডাটা সহ মুছে ফেলতে ইচ্ছুক?').then(function (res) {
          if (res.isConfirmed) {
            _this.application_citizen_record.splice(index, 1);
          }
        });
      } else {
        this.application_citizen_record.splice(index, 1);
      }
    },
    removeLandSchedulesLast: function removeLandSchedulesLast(index, childData) {
      var _this2 = this;
      if (childData.khatian_no || childData.dag_no || childData.amount_of_land) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__["default"].sweetAlertBox(this, 'আপনি কি ডাটা সহ মুছে ফেলতে ইচ্ছুক?').then(function (res) {
          if (res.isConfirmed) {
            _this2.application_land_schedules_is_last.splice(index, 1);
          }
        });
      } else {
        this.application_land_schedules_is_last.splice(index, 1);
      }
    },
    validateOwnerErrorMessage: function validateOwnerErrorMessage(event, key, fieldname) {
      if (event.target.value) {
        this.application_citizen_record[key][fieldname] = false;
      }
    },
    checkValueExist: function checkValueExist(value, parent_id, key, property) {
      if (!value) {
        this.application_citizen_record[key][property] = true;
      } else {
        this.application_citizen_record[key][property] = false;
      }
    }
  },
  watch: {
    // application_land_schedules_is_last:{
    //     handler: function (newVal, oldVal) {
    //         for(let i=0; i<newVal.length; i++){
    //             newVal[i].amount_of_land_error=true
    //             if(newVal[i].amount_of_land){
    //                 console.log(newVal[i])
    //                 if (isNaN(newVal[i].amount_of_land)) {
    //                     alert("wrong input");
    //                     newVal[i].amount_of_land=''
    //                     newVal[i].amount_of_land_error=false
    //                     return false;
    //                 }
    //             }
    //         }
    //
    //     },
    //     deep: true
    // },
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "land-ownership",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])),
  props: ['land_ownership_reference', 'applicationData'],
  data: function data() {
    return {
      check_land_ownership_reference: [],
      ownership_reference_check: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.ownership_reference_check = _this.applicationData.is_next_page == 1;
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    visibleColumnsChanged: function visibleColumnsChanged(column, event) {
      this.applicationData.other_reference = this.land_ownership_reference['Other'].active == true;
      if (column.active) {
        return;
      }
      if (!Object.values(this.land_ownership_reference).find(function (c) {
        return c.active;
      })) {
        column.active = true;
        event.target.checked = true;
      }
    },
    checkCroySutro: function checkCroySutro() {
      this.check_land_ownership_reference = [];
      for (var prop in this.land_ownership_reference) {
        if (this.land_ownership_reference[prop].active) {
          this.check_land_ownership_reference.push(this.land_ownership_reference[prop].value);
        }
      }
      if (this.isInArray(2, this.check_land_ownership_reference) || this.isInArray(4, this.check_land_ownership_reference) || this.isInArray(5, this.check_land_ownership_reference) || this.isInArray(6, this.check_land_ownership_reference) || this.isInArray(7, this.check_land_ownership_reference)) {
        this.applicationData.regular_applicaton = 1;
        this.applicationData.if_only_croy = 0;
        var firstPageCommonStateData = this.allCommonDataFirstPage;
        if (firstPageCommonStateData) {
          this.applicationData.is_company_transfard = '';
          this.applicationData.last_tax_given = '';
          this.applicationData.chekc_nid_exist = '';
          this.applicationData.check_rs_exist = '';
          this.applicationData.is_rs_owner = '';
          this.applicationData.is_namjari_exist = '';
        } else {
          delete this.applicationData.is_company_transfard;
          delete this.applicationData.last_tax_given;
          delete this.applicationData.chekc_nid_exist;
          delete this.applicationData.check_rs_exist;
          delete this.applicationData.is_rs_owner;
          delete this.applicationData.is_namjari_exist;
        }
      } else {
        this.applicationData.if_only_croy = 1;
      }
    },
    isInArray: function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/representative.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/representative.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/FileUpload */ "./resources/js/helpers/FileUpload.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "representative",
  props: ['applicationData', 'application_citizen_representative', 'representativeImage'],
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      fileMime: '',
      repBData: '',
      repBDataReady: false,
      base64imageView: ''
    };
  },
  mounted: function mounted() {
    var _this = this;
    /* SET FIRST APPLICANT IMAGE AFTER VERIFY NID */
    var representative = this.application_citizen_representative;
    if (typeof representative != 'undefined') {
      if (representative.photo != '') {
        var url = this.apiBaseURL + '/fetch-base64';
        var form_data = new FormData();
        form_data.append('uuid', representative.photo);
        var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"].viewPhotoFromUUID(url, form_data, this.headers);
        response.payload.then(function (data) {
          _this.representativeImage.pictureBase64 = data.data.data.base64;
          _this.representativeImage.pictureExt = "png";
        })["catch"](function () {
          console.log('Image cannot be fetched');
        });
      }
    }
  },
  methods: {
    handleFileUpload: function handleFileUpload(event, type) {
      var _this2 = this;
      this.application_citizen_representative[type + '_loading'] = true;
      this.fileMime = event.target.files[0].name.split('.').pop();
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function () {
        _this2.repBData = reader.result.split(',')[1];
        _this2.repBDataReady = true;
      };
      reader.onerror = function () {
        _this2.application_citizen_representative[type + '_loading'] = false;
      };
      this.base64CheckNew(event, type);
    },
    base64CheckNew: function base64CheckNew(event, type) {
      var _this3 = this;
      if (this.repBDataReady) {
        if (this.repBData != '') {
          this.repBDataReady = false;
          var url = this.apiBaseURL + '/store-base64';
          var form_data = new FormData();
          form_data.append('file', this.repBData);
          var resp = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"].storeNidImgAsBase64(url, form_data, this.headers);
          resp.payload.then(function (data) {
            if (data.data.status == 200) {
              _this3.application_citizen_representative[type] = data.data.data.uuid;
              if (type == 'photo') {
                _this3.representativeImage.pictureBase64 = _this3.repBData;
                _this3.representativeImage.pictureExt = event.target.files[0].type.split('/')[1];
                _this3.application_citizen_representative.pictureBase64 = _this3.repBData;
                _this3.application_citizen_representative.pictureExt = event.target.files[0].type.split('/')[1];
              }
              if (type == 'signature') {
                _this3.representativeImage.signstureBase64 = _this3.repBData;
                _this3.representativeImage.signstureExt = event.target.files[0].type.split('/')[1];
                _this3.application_citizen_representative.signstureBase64 = _this3.repBData;
                _this3.application_citizen_representative.signstureExt = event.target.files[0].type.split('/')[1];
              }
            }
            _this3.application_citizen_representative[type + '_loading'] = false;
          })["catch"](function () {
            _this3.application_citizen_representative[type + '_loading'] = false;
          });
        }
      } else {
        setTimeout(function () {
          _this3.base64CheckNew(event, type);
        }, 1000);
      }
    },
    validateRepresentativeErrorMessage: function validateRepresentativeErrorMessage(event, fieldName) {
      if (event.target.value) {
        this.application_citizen_representative[fieldName] = false;
      }
    },
    viewImage: function viewImage(uuid, type) {
      var _this4 = this;
      this.application_citizen_representative[type] = true;
      var url = this.apiBaseURL + '/fetch-base64';
      var form_data = new FormData();
      form_data.append('uuid', uuid);
      var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"].viewPhotoFromUUID(url, form_data, this.headers);
      response.payload.then(function (data) {
        _this4.application_citizen_representative[type] = false;
        _this4.$refs['photo-view'].show();
        _this4.base64imageView = "data:image/png;base64," + data.data.data.base64;
      })["catch"](function () {
        _this4.application_citizen_representative[type] = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
  name: "submission",
  props: ['applicationData', 'globalErrorValidationForSubmitButton', 'emergencyInfo'],
  data: function data() {
    return {
      isImportant: false,
      loading_icon: false
    };
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('oldFormState', ['clearAllOldFormStateData'])), {}, {
    previewButton: function previewButton(e) {
      this.applicationData.actionBtn = e;
    },
    removeStateDataAndBack: function removeStateDataAndBack() {
      this.setFirstPageCommonData('');
      this.clearAllOldFormStateData('');
      return this.$router.push({
        path: '/'
      });
    }
  }),
  watch: {
    'emergencyInfo.isImportant': function emergencyInfoIsImportant(val) {
      this.emergencyInfo.isImportant = val;
      if (!val) {
        this.emergencyInfo.importantText = '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_application.vue?vue&type=template&id=0899f657&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/new_application.vue?vue&type=template&id=0899f657& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("main", {
    staticClass: "main-content"
  }, [_c("div", {
    staticClass: "page-tofsil pt-4"
  }, [_c("div", {
    staticClass: "page-landinfo-content"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "page-content mb-5 bg-white"
  }, [_vm._m(0), _vm._v(" "), _c("form", {
    ref: "application_old_form",
    attrs: {
      id: "application",
      action: "#"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveApplicationForm();
      }
    }
  }, [_c("div", {
    staticClass: "container_disable_box"
  }, [_c("div", {
    staticClass: "card-body px-4 mb-2"
  }, [_c("landOwnership", {
    attrs: {
      land_ownership_reference: _vm.land_ownership_reference,
      applicationData: _vm.applicationData
    }
  }), _vm._v(" "), _c("landInfo", {
    attrs: {
      validationErrors: _vm.validationErrors,
      land_amount_types: _vm.land_amount_types,
      land_record_types: _vm.land_record_types,
      applicationData: _vm.applicationData,
      application_land_schedules: _vm.application_land_schedules,
      dolilInfo: _vm.dolilInfo,
      land_rate_enable_month_count: _vm.land_rate_enable_month_count,
      req_doc: _vm.required_documents
    }
  }), _vm._v(" "), _c("kharijOwner", {
    attrs: {
      land_record_types: _vm.land_record_types,
      application_land_schedules_is_last: _vm.application_land_schedules_is_last,
      land_amount_types: _vm.land_amount_types,
      application_citizen_record: _vm.application_citizen_record
    }
  }), _vm._v(" "), _c("applicantDefendant", {
    attrs: {
      application_citizen_applicant: _vm.application_citizen_applicant,
      application_citizen_defendant: _vm.application_citizen_defendant,
      applicantImage: _vm.applicantImage
    }
  }), _vm._v(" "), _c("documents", {
    attrs: {
      req_doc: _vm.required_documents,
      filePath: _vm.documentFilePath,
      applicationData: _vm.applicationData,
      representativeImage: _vm.representativeImage,
      application_citizen_representative: _vm.application_citizen_representative,
      dolilInfo: _vm.dolilInfo,
      application_land_schedules: _vm.application_land_schedules
    },
    on: {
      updateReqDoc: function updateReqDoc($event) {
        _vm.required_documents = $event;
      }
    }
  }), _vm._v(" "), _c("submission", {
    attrs: {
      globalErrorValidationForSubmitButton: _vm.globalErrorValidationForSubmitButton,
      applicationData: _vm.applicationData,
      emergencyInfo: _vm.emergencyInfo
    }
  }), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      size: "xl",
      "hide-footer": "",
      title: "আবেদনের প্রিভিউ "
    }
  }, [_c("Modal", {
    attrs: {
      applicationData: _vm.applicationData,
      land_amount_types: _vm.land_amount_types,
      application_citizen_record: _vm.application_citizen_record,
      land_record_types: _vm.land_record_types,
      land_ownership_reference: _vm.land_ownership_reference,
      application_citizen_defendant: _vm.application_citizen_defendant,
      application_land_schedules: _vm.application_land_schedules,
      application_land_schedules_is_last: _vm.application_land_schedules_is_last,
      application_citizen_applicant: _vm.application_citizen_applicant,
      application_citizen_representative: _vm.application_citizen_representative,
      filePath: _vm.documentFilePath,
      required_documents: _vm.required_documents,
      applicantImage: _vm.applicantImage,
      representativeImage: _vm.representativeImage,
      emergencyInfo: _vm.emergencyInfo
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-success pull-left col-1",
    attrs: {
      disabled: _vm.applicationData.declear_call == 0
    },
    on: {
      click: function click($event) {
        return _vm.SubmissionData("Submit");
      }
    }
  }, [_vm._v("দাখিল\n                                            ")]), _vm._v(" "), _vm.loading_icon ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      "margin-left": "4px",
      height: "20px",
      width: "20px",
      "font-size": "11px"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-info pull-left col-1",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      disabled: _vm.loading_icon
    },
    on: {
      click: _vm.saveAsDraft
    }
  }, [_vm._v("খসড়া\n                                            ")]), _vm._v(" "), _c("b-button", {
    staticClass: "col-1 btn-sm pull-right",
    attrs: {
      variant: "outline-danger"
    },
    on: {
      click: _vm.hideModal
    }
  }, [_vm._v("বাতিল\n                                            ")])], 1)], 1), _vm._v(" "), _vm.applicationData.is_namjari_exist == 1 || _vm.applicationData.is_rs_owner == 1 ? _c("div", {
    staticClass: "card-footer bg-light"
  }, [_c("div", {
    staticClass: "col-md-12 text-center"
  }, [_c("button", {
    staticClass: "btn btn-light",
    attrs: {
      type: "button"
    }
  }, [_vm._v("বাতিল করুন")]), _vm._v(" "), _vm.globalErrorValidationForNextButton ? _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n                                                পরবর্তী\n                                            ")]) : _c("button", {
    staticClass: "btn btn-success",
    on: {
      click: function click($event) {
        return _vm.nextPage("Submit");
      }
    }
  }, [_vm._v("পরবর্তী")])])]) : _vm._e()])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section-header border-bottom text-center p-3"
  }, [_c("h4", [_vm._v(" নামজারি ও জমাভাগ/জমা একত্রিকরণ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=template&id=0ce809b2&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=template&id=0ce809b2& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "mt-2 pt-1 border"
  }, [_c("div", {
    staticClass: "landinfo-body"
  }, [_c("div", {
    staticClass: "landinfo-title",
    staticStyle: {
      "margin-left": "20px",
      "padding-top": "2px"
    }
  }, [_c("span", {
    staticClass: "form-sec-title",
    staticStyle: {
      "font-size": "0.95rem"
    }
  }, [_vm._v("আবেদিত জমি:- " + _vm._s(_vm.allCommonDataFirstPage.areaInfo.division_text) + ", " + _vm._s(_vm.allCommonDataFirstPage.areaInfo.district_text) + ", " + _vm._s(_vm.allCommonDataFirstPage.areaInfo.upazila_text) + ",  "), _c("b", [_vm._v(_vm._s(_vm.final_mouja_text))]), _vm._v(" মৌজার অন্তর্ভুক্ত")])])])]), _vm._v(" "), _c("div", {
    staticClass: "scroll"
  }, [_c("div", {
    staticClass: "landinfo-form-content mb-2"
  }, [_vm._l(_vm.application_land_schedules, function (data, key) {
    return _c("span", {
      key: key,
      staticClass: "d-block mb-3"
    }, [_vm._l(data.main_data, function (childData, childKey) {
      return _c("div", {
        key: childKey,
        staticClass: "landinfo-khotiyan-block mt-3 bdr-radius-bottom-0"
      }, [childData.if_dag == 1 && childData.if_main != 1 ? _c("div", {
        staticClass: "landinfo-col"
      }, [_c("button", {
        staticClass: "btn landinfoCloseBtn btn-danger btn-sm m-1",
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.removeLandSchedules("dag_dalil", key, childKey, childData);
          }
        }
      }, [_c("i", {
        staticClass: "fa fa-times"
      })])]) : _vm._e(), _vm._v(" "), childData.if_dag == 0 && childData.if_main != 1 ? _c("div", {
        staticClass: "landinfo-col"
      }, [_c("button", {
        staticClass: "btn landinfoCloseBtn btn-danger btn-sm m-1",
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.removeLandSchedules("dag_dalil", key, childKey, childData);
          }
        }
      }, [_c("i", {
        staticClass: "fa fa-times"
      })])]) : _vm._e(), _vm._v(" "), key != 0 && childData.if_main == 1 ? _c("div", {
        staticClass: "landinfo-col"
      }, [key != 0 && childData.if_main == 1 ? _c("button", {
        staticClass: "btn landinfoCloseBtn btn-danger btn-sm m-1",
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.removeLandSchedules("main", key, childKey, childData);
          }
        }
      }, [_c("i", {
        staticClass: "fa fa-times"
      })]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "landinfo-row"
      }, [childData.if_main == 1 ? _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group input-khotiyan-type landinfo-input-block"
      }, [_vm._m(0, true), _vm._v(" "), childData.if_main == 1 ? _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.land_record_type_id,
          expression: "childData.land_record_type_id"
        }],
        staticClass: "form-control lmt-select required_field red-bordered input_bangla",
        staticStyle: {
          "font-size": "12px !important",
          "min-width": "120px"
        },
        attrs: _defineProperty({
          id: "land_record_type_id00"
        }, "id", "land_record_type_id" + key + childKey),
        on: {
          change: [function ($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
              return o.selected;
            }).map(function (o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(childData, "land_record_type_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }, function ($event) {
            return _vm.changedLandRecordType(key, childKey);
          }]
        }
      }, _vm._l(_vm.land_record_types, function (value, index) {
        return _c("option", {
          key: index,
          domProps: {
            value: index
          }
        }, [_vm._v("\n                  " + _vm._s(value) + "\n                ")]);
      }), 0) : _vm._e()])]) : _vm._e(), _vm._v(" "), childData.if_main == 1 ? _c("div", {
        staticClass: "landinfo-col",
        attrs: {
          id: "khatian_no_box_" + key + childKey
        }
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_vm._m(1, true), _vm._v(" "), _c("div", {
        staticClass: "input-group landinfo-khotiyan-verify"
      }, [data.if_main == 1 ? _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.khatian_no,
          expression: "childData.khatian_no"
        }],
        staticClass: "form-control input_bangla li_khation_num red-bordered required_field only_number",
        style: childData.khatian_no ? "" : "border: 1px solid red !important;",
        attrs: {
          type: "text",
          placeholder: "",
          id: "khatian_no_" + key + childKey,
          title: "খতিয়ান নং (বাটা খতিয়ানের জন্য '/' ব্যবহার করুন)"
        },
        domProps: {
          value: childData.khatian_no
        },
        on: {
          focusout: function focusout($event) {
            return _vm.checkValueExistForKhatian(childData.khatian_no, "khatian_no_box_" + key + childKey, key, childKey, "khatian_no_error");
          },
          keyup: function keyup(event) {
            return _vm.checkDuplicatekhatianNoIn(key, childKey);
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(childData, "khatian_no", $event.target.value);
          }
        }
      }) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "invalid-feedback"
      }, [_vm._v(" খতিয়ান নং দিন ")])])]), _vm._v(" "), childData.khatian_no_error ? _c("p", {
        staticStyle: {
          color: "red"
        }
      }, [_c("b", [_vm._v("খতিয়ান নং দিন")])]) : _vm._e(), _vm._v(" "), childData.khatian_no_error_two ? _c("p", {
        staticStyle: {
          color: "red"
        }
      }, [_c("b", [_vm._v("শুধুমাত্র পজেটিভ নম্বর এবং\n                                (/) ব্যবহার করা যাবে।")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), childData.if_main == 1 || childData.if_dag == 1 ? _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_vm._m(2, true), _vm._v(" "), childData.if_main == 1 ? _c("input", {
        directives: [{
          name: "b-tooltip",
          rawName: "v-b-tooltip.hover",
          modifiers: {
            hover: true
          }
        }, {
          name: "model",
          rawName: "v-model",
          value: childData.kate,
          expression: "childData.kate"
        }],
        staticClass: "form-check-input",
        staticStyle: {
          "margin-left": "-17px"
        },
        attrs: {
          name: "kate",
          type: "checkbox",
          value: "option5",
          title: "কাতে"
        },
        domProps: {
          checked: Array.isArray(childData.kate) ? _vm._i(childData.kate, "option5") > -1 : childData.kate
        },
        on: {
          change: [function ($event) {
            var $$a = childData.kate,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = "option5",
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && _vm.$set(childData, "kate", $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(childData, "kate", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(childData, "kate", $$c);
            }
          }, function (event) {
            return _vm.checkKate(childData.kate, key, childKey);
          }]
        }
      }) : _vm._e(), _vm._v(" "), data.if_main == 1 || childData.if_dag == 1 ? _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.dag_no,
          expression: "childData.dag_no"
        }],
        staticClass: "form-control input_bangla red-bordered required_field only_number",
        style: childData.dag_no ? "" : "border: 1px solid red !important;",
        attrs: {
          type: "text",
          title: "দাগ নং (বাটা দাগের জন্য '/' ব্যবহার করুন)",
          id: "dag_no_box_" + key + childKey,
          disabled: childData.dag_flag == 0,
          placeholder: ""
        },
        domProps: {
          value: childData.dag_no
        },
        on: {
          focusout: function focusout($event) {
            return _vm.checkValueExistForDag(childData.dag_no, key, childKey, "dag_no_error");
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(childData, "dag_no", $event.target.value);
          }
        }
      }) : _vm._e()]), _vm._v(" "), childData.dag_no_error ? _c("p", {
        staticStyle: {
          color: "red"
        }
      }, [_c("b", [_vm._v("দাগ নং দিন")])]) : _vm._e(), _vm._v(" "), childData.dag_no_error_two ? _c("p", {
        staticStyle: {
          color: "red"
        }
      }, [_c("b", [_vm._v("শুধুমাত্র পজেটিভ নম্বর ব্যবহার করা যাবে।")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), childData.if_main == 1 || childData.if_dag == 1 ? _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_vm._m(3, true), _vm._v(" "), _c("div", {
        staticClass: "landinfo-acor"
      }, [_c("input", {
        staticClass: "acor-text form-control",
        attrs: {
          type: "text",
          disabled: "disabled",
          readonly: "readonly",
          id: "land_amount_type_id_" + key + childKey,
          value: "একর",
          placeholder: "একর"
        }
      }), _vm._v(" "), data.is_kate ? _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.amount_of_land,
          expression: "childData.amount_of_land"
        }, {
          name: "b-tooltip",
          rawName: "v-b-tooltip.hover",
          modifiers: {
            hover: true
          }
        }],
        staticClass: "form-control acor-amount input_bangla red-bordered required_field only_number",
        style: childData.amount_of_land ? "" : "border: 1px solid red !important;",
        attrs: {
          type: "text",
          placeholder: "",
          title: "জমির পরিমাণ",
          id: "amount_of_land_" + key + childKey
        },
        domProps: {
          value: childData.amount_of_land
        },
        on: {
          keyup: function keyup($event) {
            return _vm.calculationLand(key, childKey);
          },
          blur: [function (event) {
            return _vm.landAmountValidation(event, key, childKey);
          }, function ($event) {
            return _vm.landAmountCorrection(key, childKey);
          }],
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(childData, "amount_of_land", $event.target.value);
          }
        }
      }) : _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.amount_of_land,
          expression: "childData.amount_of_land"
        }],
        staticClass: "form-control acor-amount input_bangla red-bordered required_field only_number",
        style: childData.amount_of_land ? "" : "border: 1px solid red !important;",
        attrs: {
          type: "text",
          placeholder: "",
          title: "জমির পরিমাণ",
          id: "amount_of_land_" + key + childKey
        },
        domProps: {
          value: childData.amount_of_land
        },
        on: {
          keyup: function keyup($event) {
            return _vm.calculationLand(key, childKey);
          },
          blur: [function (event) {
            return _vm.landAmountValidation(event, key, childKey);
          }, function ($event) {
            return _vm.landAmountCorrection(key, childKey);
          }],
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(childData, "amount_of_land", $event.target.value);
          }
        }
      })])]), _vm._v(" "), childData.amount_of_land_error ? _c("p", {
        staticStyle: {
          color: "red"
        }
      }, [_c("b", [_vm._v("জমির পরিমাণ দিন")])]) : _vm._e(), _vm._v(" "), childData.amount_of_land_error_two ? _c("p", {
        staticStyle: {
          color: "red"
        }
      }, [_c("b", [_vm._v("শুধুমাত্র পজেটিভ নম্বর ব্যবহার করা যাবে।")])]) : _vm._e(), _vm._v(" "), childData.korton_krito_jomir_poriman_txt ? _c("span", {
        staticClass: "text-sm mt-1 d-block pull-right"
      }, [_c("i", {
        staticClass: "input_bangla",
        staticStyle: {
          "font-size": "10px !important"
        }
      }, [_vm._v(_vm._s(childData.korton_krito_jomir_poriman_txt))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_vm._m(4, true), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.dalil_no,
          expression: "childData.dalil_no"
        }],
        staticClass: "form-control input_bangla red-bordered required_field only_number",
        style: childData.dalil_no ? "" : "border: 1px solid red !important;",
        attrs: {
          type: "text",
          title: "দলিল নং",
          placeholder: ""
        },
        domProps: {
          value: childData.dalil_no
        },
        on: {
          focusout: function focusout($event) {
            return _vm.checkValueExistForDalil(childData.dalil_no, key, childKey);
          },
          blur: function blur($event) {
            return _vm.checkDolilInfo(childData, key, childKey);
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(childData, "dalil_no", $event.target.value);
          }
        }
      })]), _vm._v(" "), childData.dalil_no_error ? _c("p", {
        staticStyle: {
          color: "red"
        }
      }, [_c("b", [_vm._v("দলিল নং দিন")])]) : _vm._e(), _vm._v(" "), childData.dalil_no_error_two ? _c("p", {
        staticStyle: {
          color: "red"
        }
      }, [_c("b", [_vm._v("শুধুমাত্র পজেটিভ নম্বর ব্যবহার করা যাবে।")])]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_c("label", [_vm._v("দলিল তারিখ"), childData.if_main == 1 ? _c("span", {
        staticClass: "required"
      }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "vdp-datepicker required_date_picker input_bangla_date_pick",
        style: childData.dalil_date ? "border: 1px solid green !important; border-radius: 5px!important;  height: 31px!important;" : "border: 1px solid red !important; border-radius: 5px!important;  height: 31px!important;",
        attrs: {
          title: "দলিল তারিখ"
        }
      }, [_c("datepicker", {
        staticClass: "required_date_picker input_bangla_date_pick",
        attrs: {
          "bootstrap-styling": true,
          title: "দলিল তারিখ",
          id: "dalil_date_" + key + childKey,
          format: _vm.customDateFormat(childData.dalil_date, "DD/MM/YYYY"),
          "disabled-dates": _vm.disabledDates,
          placeholder: ""
        },
        on: {
          focusout: function focusout($event) {
            return _vm.checkValueExistForDalilDate(childData.dalil_date, key, childKey);
          },
          selected: function selected($event) {
            return _vm.checkDolilInfo(childData, key, childKey);
          }
        },
        model: {
          value: childData.dalil_date,
          callback: function callback($$v) {
            _vm.$set(childData, "dalil_date", $$v);
          },
          expression: "childData.dalil_date"
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "invalid-feedback"
      }, [_vm._v("দলিল তারিখ দিন")])], 1)]), _vm._v(" "), childData.dalil_date_no_error ? _c("p", {
        staticStyle: {
          color: "red"
        }
      }, [_c("b", [_vm._v("দলিল তারিখ দিন")])]) : _vm._e()])]), _vm._v(" "), _c("div", {
        staticClass: "landinfo-row"
      }, [_c("div", {
        staticClass: "landinfo-col"
      }, [childData.land_rate_in_mouja_is_required ? _c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_vm._m(5, true), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.land_rate_in_mouja,
          expression: "childData.land_rate_in_mouja"
        }],
        staticClass: "form-control input_bangla",
        "class": childData.land_rate_in_mouja_is_required ? "red-bordered required_field" : "",
        attrs: {
          type: "text",
          title: "দলিলে ভূমির মূল্য",
          placeholder: "দলিলে ভূমির মূল্য",
          id: "land_rate_" + key + childKey
        },
        domProps: {
          value: childData.land_rate_in_mouja
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(childData, "land_rate_in_mouja", $event.target.value);
          }
        }
      })]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_vm._m(6, true), _vm._v(" "), _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.sub_reg_district_id,
          expression: "childData.sub_reg_district_id"
        }],
        staticClass: "form-control red-bordered",
        style: childData.sub_reg_district_id ? "" : "border: 1px solid red !important;",
        on: {
          selected: function selected($event) {
            return _vm.checkDolilInfo(childData, key, childKey);
          },
          change: [function ($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
              return o.selected;
            }).map(function (o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(childData, "sub_reg_district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }, function (event) {
            return _vm.subRegisterOfficeData(event, key, childKey);
          }]
        }
      }, [_vm._v(">\n                  "), _c("option", {
        domProps: {
          value: ""
        }
      }, [_vm._v("জেলা")]), _vm._v(" "), _vm._l(_vm.allDistrictList, function (value, index) {
        return _c("option", {
          key: index,
          domProps: {
            value: value.id
          }
        }, [_vm._v(_vm._s(value.name_bn))]);
      })], 2)])]), _vm._v(" "), _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_c("label", [_vm._v("সাব রেজিস্টার অফিসের নাম"), childData.if_main == 1 ? _c("span", {
        staticClass: "required"
      }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), childData.if_main == 1 ? _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.sub_register_office_name,
          expression: "childData.sub_register_office_name"
        }],
        staticClass: "form-control red-bordered required_field",
        style: childData.sub_register_office_name ? "" : "border: 1px solid red !important;",
        attrs: {
          disabled: childData.sub_offc_flag == 0
        },
        on: {
          change: [function ($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
              return o.selected;
            }).map(function (o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(childData, "sub_register_office_name", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }, function ($event) {
            return _vm.onRegisterOfficeChange($event, key, childKey, childData);
          }]
        }
      }, [_c("option", {
        domProps: {
          value: ""
        }
      }, [_vm._v("রেজিস্টার অফিসের নাম")]), _vm._v(" "), _vm._l(childData.sub_reg_office_list, function (value, index) {
        return _c("option", {
          key: index + "main_district_exit",
          domProps: {
            value: index
          }
        }, [_vm._v("\n                         " + _vm._s(value) + "\n                  ")]);
      })], 2) : _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.sub_register_office_name,
          expression: "childData.sub_register_office_name"
        }],
        staticClass: "form-control red-bordered required_field",
        style: childData.sub_register_office_name ? "" : "border: 1px solid red !important;",
        attrs: {
          disabled: childData.sub_offc_flag == 0
        },
        on: {
          change: [function ($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
              return o.selected;
            }).map(function (o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(childData, "sub_register_office_name", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }, function ($event) {
            return _vm.onRegisterOfficeChange($event, key, childKey, childData);
          }]
        }
      }, [_c("option", {
        domProps: {
          value: ""
        }
      }, [_vm._v("রেজিস্টার অফিসের নাম")]), _vm._v(" "), _vm._l(childData.sub_reg_office_list, function (value, index) {
        return _c("option", {
          key: index + "main_null_district_exit",
          domProps: {
            value: index
          }
        }, [_vm._v("\n                                        " + _vm._s(value) + "\n                                    ")]);
      })], 2)])])])]);
    }), _vm._v(" "), _c("div", {
      staticClass: "landinfo-khotiyan-footer bdr-radius-top-0"
    }, [_c("div", {
      staticClass: "landinfo-row"
    }, [_vm._m(7, true), _vm._v(" "), _c("div", {
      staticClass: "landinfo-col-1x",
      staticStyle: {
        width: "16%",
        "padding-right": "8px"
      }
    }, [_c("div", {
      staticClass: "form-group landinfo-input-block",
      attrs: {
        id: "total_land_khotian_box_" + key
      }
    }, [data.is_kate ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.total_land_khotian,
        expression: "data.total_land_khotian"
      }],
      staticClass: "form-control input_bangla",
      attrs: {
        type: "text",
        placeholder: "0",
        title: "খতিয়ানে আবেদনকৃত মোট জমির পরিমাণ",
        id: "total_land_khotian_" + key
      },
      domProps: {
        value: data.total_land_khotian
      },
      on: {
        focusout: function focusout($event) {
          return _vm.checkValueExistForKateAmount(data.total_land_khotian, "total_land_khotian_box_" + key, key, "kate_error");
        },
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "total_land_khotian", $event.target.value);
        }, function (event) {
          return _vm.calculationForKate(key, event);
        }]
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.total_land_khotian,
        expression: "data.total_land_khotian"
      }],
      staticClass: "form-control input_bangla",
      attrs: {
        type: "text",
        placeholder: "0",
        title: "খতিয়ানে আবেদনকৃত মোট জমির পরিমাণ",
        id: "total_land_khotian_" + key,
        disabled: ""
      },
      domProps: {
        value: data.total_land_khotian
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "total_land_khotian", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("p", {
      staticClass: "input_bangla",
      staticStyle: {
        "font-size": "10px !important",
        "font-style": "italic",
        padding: "0px !important",
        margin: "0px !important"
      }
    }, [_vm._v(_vm._s(_vm.totalAmountCalculate(data.total_land_khotian)))])])]), _vm._v(" "), _c("div", {
      staticClass: "landinfo-col"
    }, [_c("div", {
      staticClass: "form-group landinfo-input-block"
    }, [_c("button", {
      staticClass: "btn btn-primary aro_dalil_add",
      attrs: {
        type: "button",
        disabled: data.dalil_button == 1
      },
      on: {
        click: function click($event) {
          return _vm.addLandSchedules("dalil", key);
        }
      }
    }, [_vm._v(" আরও দলিল সংযুক্ত করুন")])])]), _vm._v(" "), _c("div", {
      staticClass: "landinfo-col"
    }, [_c("div", {
      staticClass: "form-group landinfo-input-block"
    }, [_c("button", {
      staticClass: "btn btn-info aro_dag_add",
      attrs: {
        type: "button",
        disabled: data.dag_button == 1
      },
      on: {
        click: function click($event) {
          return _vm.addLandSchedules("dag", key);
        }
      }
    }, [_vm._v("আরও দাগ সংযুক্ত করুন")])])])])])], 2);
  }), _vm._v(" "), _c("div", {
    staticClass: "landinfo-footer"
  }, [_c("div", {
    staticClass: "landinfo-row"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "landinfo-col-1x",
    staticStyle: {
      width: "16%",
      "padding-right": "8px"
    }
  }, [_c("div", {
    staticClass: "form-group landinfo-input-block"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.total_land_amount,
      expression: "applicationData.total_land_amount"
    }],
    staticClass: "form-control input_bangla",
    attrs: {
      type: "text",
      placeholder: "0",
      title: "আবেদিত মোট জমির পরিমাণ "
    },
    domProps: {
      value: _vm.applicationData.total_land_amount
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.applicationData, "total_land_amount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-sm mt-1 d-block"
  }, [_c("i", {
    staticClass: "input_bangla"
  }, [_vm._v(_vm._s(_vm.totalAmountCalculate(_vm.applicationData.total_land_amount)))])])])]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "landinfo-col-1x text-right",
    staticStyle: {
      "margin-right": "10px"
    }
  }, [_c("div", {
    staticClass: "form-group landinfo-input-block"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button",
      disabled: _vm.khotianButton,
      id: "khotianButton"
    },
    on: {
      click: function click($event) {
        return _vm.addLandSchedules("main", _vm.add_row_index);
      }
    }
  }, [_vm._v("আরও খতিয়ান সংযুক্ত করুন")])])])])])], 2)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("খতিয়ানের ধরণ"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("খতিয়ান নং"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("দাগ নং"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("জমির মাপক ও জমির পরিমাণ"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("দলিল নং"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("দলিলে ভূমির মূল্য"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("জেলা"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "landinfo-col-2x flex-align-center text-right"
  }, [_c("label", {
    staticClass: "mb-0 landinfo-footer-text"
  }, [_vm._v("খতিয়ানে আবেদনকৃত মোট জমির পরিমাণ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "landinfo-col-1x flex-align-center text-right",
    staticStyle: {
      "margin-right": "10px"
    }
  }, [_c("label", {
    staticClass: "mb-0 landinfo-footer-text"
  }, [_vm._v("আবেদিত মোট জমির পরিমাণ (একর)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "landinfo-col-1x",
    staticStyle: {
      width: "16%",
      "padding-right": "8px"
    }
  }, [_c("div", {
    staticClass: "form-group landinfo-input-block"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=template&id=7ba9600f&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=template&id=7ba9600f&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h5", {
    staticClass: "card-title mt-3"
  }, [_vm._v("আবেদনকারীর তথ্য")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-md-12 p-2 border",
    staticStyle: {
      "font-size": "0.85rem !important"
    }
  }, [_c("h6", {
    staticStyle: {
      "margin-left": "8px"
    }
  }, [_vm._v("আবেদনকারীর নাম ও পূর্ণ ঠিকানা")]), _vm._v(" "), _c("div", {
    staticClass: "grohita-section"
  }, [_c("div", {
    staticClass: "card border mt-3 p-0",
    staticStyle: {
      background: "#F9FFF9"
    }
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("div", {
    staticClass: "table-responsive-sm table-responsive-md table-responsive-lg grohita"
  }, [_c("div", {
    staticClass: "grohitattl"
  }, [_c("table", {
    staticClass: "table table-bordered sm-screen-sm-tbl",
    staticStyle: {
      width: "100%",
      "padding-top": "10px!important",
      border: "1px solid #ebebeb !important"
    }
  }, _vm._l(_vm.application_citizen_applicant, function (data, key) {
    return _c("tbody", {
      key: key,
      staticClass: "text-center"
    }, [_c("tr", [_c("td", {
      staticClass: "text-center input_bangla",
      staticStyle: {
        width: "3% !important"
      }
    }, [_c("div", {
      staticClass: "col-sm-12 form-group padding-l padding-r"
    }, [key == 0 ? _c("span", [_vm._v("নং")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "col-sm-12 form-group padding-l padding-r input_bangla"
    }, [_vm._v("\n                                                    " + _vm._s(key + 1) + "\n\n                                                ")])]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: "0px !important",
        width: "77%"
      },
      attrs: {
        colspan: "3"
      }
    }, [_c("table", {
      staticStyle: {
        width: "100%",
        border: "0px !important"
      }
    }, [_c("tr", [_c("td", {
      staticClass: "text-left",
      staticStyle: {
        "border-top": "0px !important",
        "border-left": "0px !important",
        width: "33%"
      }
    }, [_vm._m(0, true), _vm._v(" "), _c("div", {
      attrs: {
        id: "name_box_" + key
      }
    }, [_c("input", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }, {
        name: "model",
        rawName: "v-model",
        value: data.name,
        expression: "data.name"
      }],
      staticClass: "form-control input_bangla required_field applicant_name",
      style: data.name ? "" : "border: 1px solid red !important;",
      attrs: {
        type: "text",
        name: "applicant_name",
        placeholder: "",
        title: "আবেদনকারীর নাম"
      },
      domProps: {
        value: data.name
      },
      on: {
        focusout: function focusout() {
          return _vm.checkValueExist(data.name, "name_box_" + key, key, "name_error", "application_citizen_applicant");
        },
        keyup: function keyup(event) {
          return _vm.validateApplicantErrorMessage(event, key, "name_error");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "name", $event.target.value);
        }
      }
    }), _vm._v(" "), data.name_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("আবেদনকারীর নাম ")]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-right": "0px !important",
        width: "33%"
      }
    }, [_c("div", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-right": "0px !important",
        width: "100%"
      },
      attrs: {
        id: "national_id_no_box_" + key
      }
    }, [_vm._m(1, true), _vm._v(" "), _c("input", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }, {
        name: "model",
        rawName: "v-model",
        value: data.national_id_no,
        expression: "data.national_id_no"
      }],
      staticClass: "form-control input_bangla required_field applicant_NID nid",
      style: data.national_id_no ? "" : "border: 1px solid red !important;",
      attrs: {
        type: "text",
        name: "applicant_NID",
        placeholder: "ন্যাশনাল আইডি",
        title: "ন্যাশনাল আইডি"
      },
      domProps: {
        value: data.national_id_no
      },
      on: {
        keyup: function keyup($event) {
          return _vm.checkValueExistForNationalId(data.national_id_no, "national_id_no_box_" + key, key, "national_id_no_error");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "national_id_no", $event.target.value);
        }
      }
    }), _vm._v(" "), data.national_id_no_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("\n                                                                    আপনার ভ্যালুটি ভুল")]) : _vm._e(), _vm._v(" "), data.nid_verification_message_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("\n                                                                    আপনার প্রদত্ত ইনপুটটি ১০ কিংবা ১৩ কিংবা ১৭ ডিজিটের হতে হবে")]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-right": "0px !important",
        width: "34%"
      }
    }, [_c("div", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      },
      attrs: {
        id: "email_box_" + key,
        "class": "text-left "
      }
    }, [_c("label", {}, [_vm._v("ই-মেইল")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.email,
        expression: "data.email"
      }],
      staticClass: "form-control email_validate",
      attrs: {
        type: "email",
        name: "applicant_email",
        placeholder: "ই-মেইল"
      },
      domProps: {
        value: data.email
      },
      on: {
        keyup: function keyup($event) {
          return _vm.checkEmailValue(data.email, "email_box_" + key, "", key);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "email", $event.target.value);
        }
      }
    }), _vm._v(" "), data.email_error_2 ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("\n                                                                    আপনার ভ্যালুটি ভুল")]) : _vm._e()])])]), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important",
        "border-bottom": "0px !important"
      }
    }, [_c("div", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      },
      attrs: {
        id: "mobile_no_box_" + key
      }
    }, [_vm._m(2, true), _vm._v(" "), _c("input", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }, {
        name: "model",
        rawName: "v-model",
        value: data.mobile_no,
        expression: "data.mobile_no"
      }],
      staticClass: "form-control input_bangla required_field applicant_mobile mobile_bn",
      style: data.mobile_no ? "" : "border: 1px solid red !important;",
      attrs: {
        type: "text",
        name: "applicant_mobile",
        placeholder: "মোবাইল নং",
        title: "মোবাইল নং"
      },
      domProps: {
        value: data.mobile_no
      },
      on: {
        focusout: function focusout() {
          return _vm.checkMobileValueExist(data.mobile_no, "mobile_no_box_" + key, "required", key);
        },
        keyup: function keyup(event) {
          return _vm.validateApplicantErrorMessage(event, key, "mobile_no_error");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "mobile_no", $event.target.value);
        }
      }
    }), _vm._v(" "), data.mobile_no_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("আপনার ভ্যালুটি ভুল")]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        "border-bottom": "0px !important",
        "border-right": "0px !important"
      },
      attrs: {
        colspan: "2"
      }
    }, [_c("div", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      },
      attrs: {
        id: "address_box_" + key
      }
    }, [_vm._m(3, true), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }, {
        name: "model",
        rawName: "v-model",
        value: data.address,
        expression: "data.address"
      }],
      staticClass: "form-control required_field owner_parents_name",
      staticStyle: {
        height: "50px"
      },
      style: data.address ? "" : "border: 1px solid red !important;",
      attrs: {
        name: "owner_parents_name",
        placeholder: "",
        title: "পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা"
      },
      domProps: {
        value: data.address
      },
      on: {
        focusout: function focusout() {
          return _vm.checkValueExist(data.address, "address_box_" + key, key, "address_error", "application_citizen_applicant");
        },
        keyup: function keyup(event) {
          return _vm.validateApplicantErrorMessage(event, key, "address_error");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "address", $event.target.value);
        }
      }
    }), _vm._v(" "), data.address_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা")]) : _vm._e()])])])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center",
      staticStyle: {
        width: "20%"
      }
    }, [data.first_row != 1 ? _c("button", {
      staticClass: "btn btn-danger btn-sm m1",
      staticStyle: {
        "float": "right",
        "margin-right": "-10px",
        "margin-top": "-10px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeApplicationCitizen(key, data);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })]) : _vm._e(), _vm._v(" "), data.photo && _vm.applicantImage[key].pictureBase64 ? _c("div", {
      staticClass: "mb-2"
    }, [key == 0 && _vm.nidImageFlag ? _c("div", {
      staticClass: "text-center grohita_image_box"
    }, [_c("img", {
      staticClass: "rounded-circle",
      staticStyle: {
        width: "130px!important",
        height: "130px!important"
      },
      attrs: {
        src: "data:image/png;base64,".concat(_vm.applicantImage[key].pictureBase64)
      }
    })]) : _c("div", {
      staticClass: "text-center grohita_image_box"
    }, [_c("img", {
      staticClass: "rounded-circle",
      staticStyle: {
        width: "130px!important",
        height: "130px!important"
      },
      attrs: {
        src: "data:image/png;base64,".concat(_vm.applicantImage[key].pictureBase64)
      }
    }), _c("br"), _vm._v(" "), _c("div", {
      staticClass: "imgdiv2",
      style: data.photo ? "" : "border: 1px solid red !important; margin-top: 61%;"
    }, [_c("label", {
      staticClass: "imglabel",
      staticStyle: {
        "font-size": "10px!important",
        color: "#0a6cd6!important"
      },
      attrs: {
        "for": "imgChange" + key
      }
    }, [_vm._v("ছবি পরিবর্তন\n                                                                "), _c("input", {
      staticClass: "form-control applicant_image2 imginput2",
      attrs: {
        id: "imgChange" + key,
        type: "file",
        name: "applicant_image2",
        accept: "image/*"
      },
      on: {
        change: function change(event) {
          return _vm.handleFileUpload(event, "photo", key);
        }
      }
    })])])])]) : _c("div", [!data.photo ? _c("div", {
      staticClass: "imgdiv",
      style: data.photo ? "" : "border: 1px solid red !important; margin-top: 61%;"
    }, [_c("label", {
      staticClass: "imglabel",
      staticStyle: {
        "font-size": "10px!important"
      },
      attrs: {
        "for": "inputTag2" + key
      }
    }, [_c("i", {
      staticClass: "fa fa-2x fa-camera",
      staticStyle: {
        color: "#61676D",
        "margin-left": "-8px",
        "margin-top": "8px"
      }
    }), _vm._v(" "), _c("input", {
      staticClass: "form-control required_field applicant_image imginput",
      attrs: {
        id: "inputTag2" + key,
        type: "file",
        name: "applicant_image",
        accept: "image/*"
      },
      on: {
        change: function change(event) {
          return _vm.handleFileUpload(event, "photo", key);
        }
      }
    })])]) : _vm._e()]), _vm._v(" "), data.photo_loading ? _c("div", {
      staticClass: "spinner-border text-primary",
      staticStyle: {
        "margin-left": "4px",
        height: "20px",
        width: "20px",
        "font-size": "11px"
      },
      attrs: {
        role: "status"
      }
    }) : _vm._e(), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "base64Data_" + key
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "base64_ready_" + key,
        value: "complete"
      }
    }), _vm._v(" "), data.photo_error ? _c("p", {
      staticStyle: {
        "font-size": "12px",
        color: "red"
      }
    }, [_vm._v("Applicant Picture is\n                                                    Required")]) : _vm._e(), _vm._v(" "), _c("br")])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("span", {
    staticClass: "btn btn-primary btn-sm",
    staticStyle: {
      "font-size": "0.70rem !important"
    },
    attrs: {
      id: "ApplicantButtonData"
    },
    on: {
      click: function click($event) {
        return _vm.addApplicationCitizen(_vm.add_row_applicant_index);
      }
    }
  }, [_vm._v("আরও")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 p-2 border",
    staticStyle: {
      "font-size": "0.85rem !important"
    }
  }, [_c("h6", [_vm._v("যাদের নাম হতে কর্তন হবে/২য় পক্ষের (বিবাদি) নাম ও পূর্ণ ঠিকানা")]), _vm._v(" "), _c("div", {
    staticClass: "grohita-section"
  }, [_c("div", {
    staticClass: "card border mt-3 p-0",
    staticStyle: {
      background: "#F9FFF9"
    }
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("div", {
    staticClass: "table-responsive-sm table-responsive-md table-responsive-lg grohita"
  }, [_c("div", {
    staticClass: "scroll"
  }, [_vm._l(_vm.application_citizen_defendant, function (data, key) {
    return _c("table", {
      key: key,
      staticClass: "table table-bordered sm-screen-sm-tbl",
      staticStyle: {
        border: "1px solid #ebebeb !important"
      }
    }, [_c("tbody", [_c("tr", [_c("td", {
      staticClass: "input_bangla",
      staticStyle: {
        "padding-left": "10px !important",
        "padding-top": "0px !important"
      },
      attrs: {
        rowspan: "3"
      }
    }, [_vm._v(_vm._s(key + 1))]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "30%"
      }
    }, [_c("div", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      },
      attrs: {
        id: "name_no_box_" + key
      }
    }, [_vm._m(4, true), _vm._v(" "), _c("input", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }, {
        name: "model",
        rawName: "v-model",
        value: data.name,
        expression: "data.name"
      }],
      staticClass: "form-control input_bangla required_field bibadi_name",
      style: data.name ? "" : "border: 1px solid red !important;",
      attrs: {
        type: "text",
        name: "bibadi_name",
        placeholder: "",
        title: "বিবাদীর নাম"
      },
      domProps: {
        value: data.name
      },
      on: {
        keyup: [function ($event) {
          return _vm.checkValueExist(data.name, "name_no_box_" + key, key, "name_error", "application_citizen_defendant");
        }, function (event) {
          return _vm.validateDefendandErrorMessage(event, key, "name_error");
        }],
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "name", $event.target.value);
        }
      }
    }), _vm._v(" "), data.name_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("বিবাদীর নাম")]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "30%"
      }
    }, [_c("div", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      },
      attrs: {
        id: "mobile_no_box_one_" + key
      }
    }, [_c("label", {}, [_vm._v("মোবাইল নম্বর ")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.mobile_no,
        expression: "data.mobile_no"
      }, {
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }],
      staticClass: "form-control input_bangla mobile_bn",
      staticStyle: {
        "min-width": "180px"
      },
      attrs: {
        type: "text",
        name: "mobile_no",
        placeholder: "",
        title: "মোবাইল নং"
      },
      domProps: {
        value: data.mobile_no
      },
      on: {
        keyup: function keyup($event) {
          return _vm.checkMobileValueExistDefendant(data.mobile_no, "mobile_no_box_one_" + key, "not_required", key);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "mobile_no", $event.target.value);
        }
      }
    })]), _vm._v(" "), data.mobile_no_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("আপনার ভ্যালুটি ভুল")]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "35%"
      }
    }, [data.first_row != 1 ? _c("button", {
      staticClass: "btn btn-danger btn-sm m-1",
      staticStyle: {
        "float": "right",
        "margin-right": "-13px !important",
        "margin-top": "-13px !important"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeApplicationDefendant(key, data);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times",
      staticStyle: {
        "font-size": "10px !important"
      }
    })]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      },
      attrs: {
        id: "national_id_bibadi_no_box_" + key
      }
    }, [_c("label", {}, [_vm._v("জাতীয় পরিচয়পত্র ")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }, {
        name: "model",
        rawName: "v-model",
        value: data.national_id_no,
        expression: "data.national_id_no"
      }],
      staticClass: "form-control input_bangla bibadi_NID nid",
      attrs: {
        type: "text",
        name: "bibadi_NID",
        placeholder: "",
        title: "ন্যাশনাল আইডি"
      },
      domProps: {
        value: data.national_id_no
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "national_id_no", $event.target.value);
        }
      }
    }), _vm._v(" "), data.national_id_no_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("\n                                                        আপনার ভ্যালুটি ভুল")]) : _vm._e(), _vm._v(" "), data.nid_verification_message_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("\n                                                        আপনার প্রদত্ত ইনপুটটি ১০ কিংবা ১৩ কিংবা ১৭ ডিজিটের হতে হবে")]) : _vm._e()])])]), _vm._v(" "), _c("tr", [_c("td", [_c("div", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      },
      attrs: {
        id: "bibadi_email_box_" + key
      }
    }, [_c("label", {}, [_vm._v("ই-মেইল")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.email,
        expression: "data.email"
      }],
      staticClass: "form-control email_validate",
      attrs: {
        type: "email",
        name: "bibadi_email",
        placeholder: ""
      },
      domProps: {
        value: data.email
      },
      on: {
        keyup: function keyup($event) {
          return _vm.checkBibadiEmailValue(data.email, "bibadi_email_box_" + key, "", key);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "email", $event.target.value);
        }
      }
    }), _vm._v(" "), data.email_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("\n                                                        আপনার ভ্যালুটি ভুল")]) : _vm._e()])]), _vm._v(" "), _c("td", {
      attrs: {
        colspan: "3"
      }
    }, [_c("div", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      },
      attrs: {
        id: "address_no_box_" + key
      }
    }, [_vm._m(5, true), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }, {
        name: "model",
        rawName: "v-model",
        value: data.address,
        expression: "data.address"
      }],
      staticClass: "form-control input_bangla required_field owner_parents_name",
      style: data.address ? "" : "border: 1px solid red !important;",
      attrs: {
        name: "owner_parents_name",
        rows: "2",
        placeholder: "",
        title: "বিবাদীর পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা"
      },
      domProps: {
        value: data.address
      },
      on: {
        keyup: [function ($event) {
          return _vm.checkValueExist(data.address, "address_no_box_" + key, key, "address_error", "application_citizen_defendant");
        }, function (event) {
          return _vm.validateDefendandErrorMessage(event, key, "address_error");
        }],
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "address", $event.target.value);
        }
      }
    }), _vm._v(" "), data.address_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("বিবাদীর পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা")]) : _vm._e()])])])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "row",
    staticStyle: {
      padding: "10px"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("span", {
    staticClass: "btn btn-primary btn-sm",
    staticStyle: {
      "font-size": "0.70rem"
    },
    attrs: {
      id: "DefendantButton"
    },
    on: {
      click: function click($event) {
        return _vm.addApplicationDefendant(_vm.add_row_defendant_index);
      }
    }
  }, [_vm._v("আরও")])])])], 2)])])])])])]), _vm._v(" "), _c("b-modal", {
    ref: "photo-view",
    attrs: {
      size: "sm",
      "hide-footer": "",
      title: ""
    }
  }, [_c("center", [_c("img", {
    staticClass: "img-thumbnail rounded",
    staticStyle: {
      width: "200px",
      height: "200px"
    },
    attrs: {
      src: _vm.base64imageView,
      alt: ""
    }
  })])], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {}, [_vm._v("আবেদনকারীর নাম "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {}, [_vm._v(" জাতীয় পরিচয়পত্র "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticStyle: {
      "margin-top": "4.5px"
    }
  }, [_vm._v("মোবাইল নম্বর "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {}, [_vm._v("পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {}, [_vm._v("বিবাদীর নাম "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {}, [_vm._v("বিবাদীর পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=template&id=a3a2e118&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=template&id=a3a2e118&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_vm._m(0), _vm._v(" "), _c("p", {
    staticClass: "commissioner"
  }, [_c("strong", [_vm._v("সহকারী কমিশনার (ভূমি),")]), _c("br"), _vm._v(" "), _c("strong", [_vm._v("উপজেলা/সার্কেল - " + _vm._s(_vm.allCommonDataFirstPage.areaInfo.upazila_text))]), _c("br"), _vm._v(" "), _c("strong", [_vm._v("জেলা - " + _vm._s(_vm.allCommonDataFirstPage.areaInfo.district_text))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 text-right"
  }, _vm._l(this.applicantImage, function (value, index) {
    return _c("span", {
      key: index,
      staticStyle: {
        "margin-right": "5px"
      }
    }, [_c("img", {
      staticClass: "img-responsive img-thumbnail",
      staticStyle: {
        height: "100px !important",
        width: "85px !important"
      },
      attrs: {
        src: "data:image/" + value.pictureExt + ";base64," + value.pictureBase64,
        alt: ""
      }
    })]);
  }), 0)]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("p", [_c("strong", [_vm._v("জনাব,"), _c("br"), _vm._v("আমি নিম্ন তফসিল বর্ণিত ভূমি\n                " + _vm._s(_vm.applicationReferenceData) + "\n                সূত্রে মালিকানা প্রাপ্ত হয়ে ভোগদখলে আছি । সে পরিপ্রেক্ষিতে আমি উক্ত জমির নামজারি/জমাখারিজ/জমা\n                একত্রিকরণের জন্য আবেদন করছি ।")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-8 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _vm._l(_vm.application_land_schedules, function (data, key) {
    return _c("tbody", {
      key: key
    }, _vm._l(data.main_data, function (childData, childKey) {
      return childData["if_dag"] == 1 ? _c("tr", {
        key: childKey
      }, [_c("td", [_vm._v(_vm._s(_vm.allCommonDataFirstPage.areaInfo.mouja_text))]), _vm._v(" "), childData["land_record_type_id"] == 1 ? _c("td", [_vm._v("\n                            এসএ/এম.আর.আর\n                        ")]) : childData["land_record_type_id"] == 2 ? _c("td", [_vm._v("\n                            আর.এস/বি.এস\n                        ")]) : childData["land_record_type_id"] == 3 ? _c("td", [_vm._v("\n                            মহানগর\n                        ")]) : childData["land_record_type_id"] == 4 ? _c("td", [_vm._v("\n                            সিএস\n                        ")]) : childData["land_record_type_id"] == 5 ? _c("td", [_vm._v("\n                            দিয়ারা জরিপ\n                        ")]) : _c("td", [_vm._v("\n                            নামজারি\n                        ")]), _vm._v(" "), _c("td", {
        staticClass: "input_bangla text-center"
      }, [_vm._v(_vm._s(childData["khatian_no"]))]), _vm._v(" "), childKey == 0 ? _c("td", {
        staticClass: "input_bangla text-center"
      }, [_vm._v(_vm._s(data["total_land_khotian"]))]) : _c("td", {
        staticClass: "input_bangla text-center"
      }), _vm._v(" "), _c("td", {
        staticClass: "input_bangla text-center"
      }, [_vm._v(_vm._s(childData["dag_no"]))]), _vm._v(" "), _c("td", {
        staticClass: "input_bangla text-center"
      }, [_vm._v(_vm._s(childData["amount_of_land"]))])]) : _vm._e();
    }), 0);
  })], 2), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      width: "65%"
    }
  }, [_c("tr", [_c("td", {
    staticStyle: {
      width: "16%"
    }
  }, [_vm._v("মোট জমির পরিমাণ")]), _vm._v(" "), _c("td", {
    staticClass: "input_bangla",
    staticStyle: {
      width: "12%"
    }
  }, [_vm._v(_vm._s(_vm.applicationData.total_land_amount) + " (একর)")]), _vm._v(" "), _c("td", {
    staticClass: "input_bangla",
    staticStyle: {
      width: "10%"
    }
  }, [_vm._v("কথায়")]), _vm._v(" "), _c("td", {
    staticClass: "input_bangla",
    staticStyle: {
      width: "23%"
    }
  }, [_vm._v(_vm._s(_vm.totalAmountCalculate(_vm.applicationData.total_land_amount)))])])])])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-5 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.application_land_schedules_is_last, function (data, key) {
    return _vm.isLastKhatianDataExist == true ? _c("tr", {
      key: key
    }, [data["land_record_type_id"] == 1 ? _c("td", {
      staticClass: "text-center"
    }, [_vm._v("এসএ/এম.আর.আর")]) : data["land_record_type_id"] == 2 ? _c("td", {
      staticClass: "text-center"
    }, [_vm._v("আর.এস/বি.এস")]) : data["land_record_type_id"] == 3 ? _c("td", {
      staticClass: "text-center"
    }, [_vm._v("মহানগর")]) : data["land_record_type_id"] == 4 ? _c("td", {
      staticClass: "text-center"
    }, [_vm._v("সিএস")]) : data["land_record_type_id"] == 5 ? _c("td", {
      staticClass: "text-center"
    }, [_vm._v("দিয়ারা জরিপ")]) : _c("td", {
      staticClass: "text-center"
    }, [_vm._v("নামজারি")]), _vm._v(" "), _c("td", {
      staticClass: "input_bangla text-center"
    }, [_vm._v(_vm._s(data.khatian_no))]), _vm._v(" "), _c("td", {
      staticClass: "input_bangla text-center"
    }, [_vm._v(_vm._s(data.dag_no))]), _vm._v(" "), _c("td", {
      staticClass: "input_bangla text-center"
    }, [_vm._v(_vm._s(data.amount_of_land))])]) : _c("tr", [_c("td", {
      staticClass: "text-center",
      attrs: {
        colspan: "4"
      }
    }, [_vm._v("কোনো তথ্য সংযুক্ত করা হয় নি।")])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", _vm._l(_vm.required_documents, function (value, doc_index) {
    return _c("tr", {
      key: doc_index
    }, [_c("td", {
      staticClass: "input_bangla text-center"
    }, [_vm._v(_vm._s(doc_index.split("_")[0]))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(value))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm.isInArray(doc_index, _vm.docTickCross) ? _c("img", {
      attrs: {
        src: "/images/tick_icon_blue.png",
        alt: ""
      }
    }) : _c("img", {
      attrs: {
        src: "/images/cross_icon.png",
        alt: ""
      }
    })]), _vm._v(" "), _c("td")]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", _vm._l(_vm.application_citizen_applicant, function (data, key) {
    return _c("div", {
      key: key
    }, [_c("span", {
      staticClass: "input_bangla"
    }, [_vm._v(_vm._s(_vm.convert2Bangla(key + 1)) + ")")]), _vm._v(" নাম:- " + _vm._s(data.name)), _c("br"), _vm._v("\n                                " + _vm._s(data.address)), _c("br"), _vm._v("\n                                মোবাইল নং:- " + _vm._s(data.mobile_no)), _c("br"), _vm._v("\n                                ন্যাশনাল আইডি:- " + _vm._s(data.national_id_no) + "\n                                "), _c("br"), _vm._v(" "), data.signstureExt ? _c("img", {
      staticClass: "img-responsive",
      attrs: {
        width: "80",
        height: "50",
        src: "data:image/" + data.signstureExt + ";base64," + data.signstureBase64,
        alt: ""
      }
    }) : _vm._e(), _vm._v(" "), _c("br")]);
  }), 0), _vm._v(" "), _c("td", [_vm._v("\n                            ১) নাম:- " + _vm._s(_vm.application_citizen_representative.name)), _c("br"), _vm._v("\n                            " + _vm._s(_vm.application_citizen_representative.address)), _c("br"), _vm._v("\n                            মোবাইল নং:- " + _vm._s(_vm.application_citizen_representative.mobile_no)), _c("br"), _vm._v("\n                            ন্যাশনাল আইডি:- " + _vm._s(_vm.application_citizen_representative.national_id_no)), _c("br"), _vm._v("\n                            বয়স:- " + _vm._s(_vm.application_citizen_representative.age)), _c("br"), _vm._v("\n                            সম্পর্ক:- " + _vm._s(_vm.application_citizen_representative.relation)), _c("br"), _vm._v("\n                            ই-মেইল:- " + _vm._s(_vm.application_citizen_representative.email)), _c("br"), _vm._v(" "), _vm.application_citizen_representative.signstureExt ? _c("img", {
    staticClass: "img-responsive",
    attrs: {
      width: "80",
      height: "50",
      src: "data:image/" + _vm.application_citizen_representative.signstureExt + ";base64," + _vm.application_citizen_representative.signstureBase64,
      alt: ""
    }
  }) : _vm._e()]), _vm._v(" "), _c("td", _vm._l(_vm.application_citizen_defendant, function (data, key) {
    return _c("div", {
      key: key
    }, [_vm._v("\n                                " + _vm._s(_vm.convert2Bangla(key + 1)) + ") নাম:- " + _vm._s(data.name)), _c("br"), _vm._v("\n                                " + _vm._s(data.address)), _c("br"), _vm._v("\n                                মোবাইল নং:- " + _vm._s(data.mobile_no) + "\n                                "), _c("br")]);
  }), 0), _vm._v(" "), _c("td", _vm._l(_vm.application_citizen_record, function (data, key) {
    return _c("div", {
      key: key
    }, [_vm._v("\n                                " + _vm._s(_vm.convert2Bangla(key + 1)) + ") নাম:- " + _vm._s(data.name)), _c("br"), _vm._v("\n                                " + _vm._s(data.address) + "\n                                "), _c("br")]);
  }), 0)])])])])]), _vm._v(" "), _vm.emergencyInfo.isImportant ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      width: "10%"
    }
  }, [_vm._m(8), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.emergencyInfo.importantText))])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("label", {
    attrs: {
      "for": "inlineCheckbox1"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.declear_call,
      expression: "applicationData.declear_call"
    }],
    staticClass: "d-inline-block",
    attrs: {
      type: "checkbox",
      value: "1",
      id: "inlineCheckbox1"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.declear_call) ? _vm._i(_vm.applicationData.declear_call, "1") > -1 : _vm.applicationData.declear_call
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.declear_call,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "declear_call", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "declear_call", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "declear_call", $$c);
        }
      }
    }
  }), _vm._v("   আমি/আমরা এই\n                    মর্মে ঘোষণা করছি যে, উপরে বর্ণিত তথ্যাদি ও দাখিলকৃত কাগজপত্রাদি সঠিক এবং নির্ভয়যোগ্য।\n                ")])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c("strong", [_vm._v("বরাবর")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-5"
  }, [_c("p", [_c("strong", [_vm._v("বিষয় : "), _c("u", [_vm._v("নামজারি/জমাখারিজ/জমাএকত্রিকরণ এর আবেদন")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      width: "19%",
      padding: "4px 2px"
    }
  }, [_vm._v(" মৌজা")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "12%",
      padding: "4px 2px"
    }
  }, [_vm._v(" খতিয়ানের ধরন")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "9%",
      padding: "4px 2px"
    }
  }, [_vm._v(" খতিয়ান নং")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "27%",
      padding: "4px 2px"
    }
  }, [_vm._v(" খতিয়ানে মোট জমির পরিমাণ (একর)")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "6%",
      padding: "4px 2px"
    }
  }, [_vm._v(" দাগ নং")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "12%",
      padding: "4px 2px"
    }
  }, [_vm._v(" জমির পরিমাণ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("h4", [_vm._v("সর্বশেষ খারিজ খতিয়ান (প্রযোজ্য ক্ষেত্রে)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      width: "25%",
      "text-align": "center"
    }
  }, [_vm._v("খতিয়ানের ধরন")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "25%",
      "text-align": "center"
    }
  }, [_vm._v("খতিয়ান নং")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "25%",
      "text-align": "center"
    }
  }, [_vm._v("দাগ নং")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "25%",
      "text-align": "center"
    }
  }, [_vm._v("জমির পরিমাণ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("h4", [_vm._v("আবেদনের সাথে সংযুক্ত কাগজপত্র ও তথ্যাদির বিবরণ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      width: "5%",
      "text-align": "center"
    }
  }, [_vm._v("ক্রঃ নং")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "45%",
      "text-align": "left"
    }
  }, [_vm._v("বিবরণ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "25%",
      "text-align": "center"
    }
  }, [_vm._v("জমা দেওয়া হয়েছে/হয়নি (অনুস্বাক্ষর)")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "25%",
      "text-align": "center"
    }
  }, [_vm._v("মন্তব্য")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "input_bangla",
    staticStyle: {
      width: "20%",
      "font-size": "11px"
    }
  }, [_vm._v("12 । আবেদনকারীর নাম ও পূর্ণ\n                            ঠিকানা\n                        ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "36%",
      "font-size": "11px"
    }
  }, [_vm._v(" প্রতিনিধির পূর্ণ নাম\n                            ও ঠিকানা, বয়স, সম্পর্ক\n                        ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "25%",
      "font-size": "11px"
    }
  }, [_vm._v("যাদের নাম হতে কর্তন হবে/২য় পক্ষের (বিবাদি) নাম ও পূর্ণ\n                            ঠিকানা\n                        ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "15%",
      "font-size": "11px"
    }
  }, [_vm._v("রেকর্ডীয় মালিকের নাম ও ঠিকানা")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("জরুরীর কারন")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("h6", [_c("strong", [_c("u", [_vm._v("আবেদনকারী/প্রতিনিধির ঘোষণা")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=template&id=5018cebe&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=template&id=5018cebe&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_vm.application_citizen_representative.if_representative == 1 ? _c("div", {
    staticClass: "col-md-12 p-2 border",
    staticStyle: {
      "font-size": "0.85rem !important"
    }
  }, [_c("h6", {
    staticStyle: {
      "margin-left": "8px"
    }
  }, [_vm._v("প্রতিনিধির নাম ও পূর্ণ ঠিকানা, বয়স, সম্পর্ক")]), _vm._v(" "), _c("div", {
    staticClass: "grohita-section"
  }, [_c("div", {
    staticClass: "card border mt-3 p-0",
    staticStyle: {
      background: "#F9FFF9"
    }
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("div", {
    staticClass: "table-responsive-sm table-responsive-md table-responsive-lg grohita"
  }, [_c("div", {
    staticClass: "grohitattl"
  }, [_c("table", {
    staticClass: "table table-bordered sm-screen-sm-tbl",
    staticStyle: {
      width: "100%",
      "padding-top": "10px!important",
      border: "1px solid #ebebeb !important"
    }
  }, [_c("tbody", {
    staticClass: "text-center"
  }, [_c("tr", [_c("td", {
    staticStyle: {
      width: "77%"
    },
    attrs: {
      colspan: "3"
    }
  }, [_c("table", {
    staticStyle: {
      width: "100%",
      border: "0px !important"
    }
  }, [_c("tr", [_c("td", {
    staticClass: "text-left",
    staticStyle: {
      "border-top": "0px !important",
      "border-left": "0px !important",
      width: "33%"
    }
  }, [_c("div", {
    staticClass: "text-left"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.name,
      expression: "application_citizen_representative.name"
    }],
    staticClass: "form-control required_field input_bangla representative_name",
    style: _vm.application_citizen_representative.name ? "" : "border: 1px solid red !important;",
    attrs: {
      type: "text",
      name: "representative_name",
      id: "representative_name",
      placeholder: ""
    },
    domProps: {
      value: _vm.application_citizen_representative.name
    },
    on: {
      keyup: function keyup($event) {
        return _vm.validateRepresentativeErrorMessage(_vm.application_citizen_representative.name, "name_error");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.name_error ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v("\n                                                                প্রতিনিধির নাম")]) : _vm._e()])]), _vm._v(" "), _c("td", {
    staticClass: "text-left",
    staticStyle: {
      padding: "0px",
      "border-top": "0px !important",
      "border-right": "0px !important",
      width: "33%"
    }
  }, [_c("div", {
    staticStyle: {
      padding: "0px"
    }
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.national_id_no,
      expression: "application_citizen_representative.national_id_no"
    }],
    staticClass: "form-control input_bangla required_field national_id nid",
    style: _vm.application_citizen_representative.national_id_no ? "" : "border: 1px solid red !important;",
    attrs: {
      type: "text",
      name: "national_id",
      placeholder: "ন্যাশনাল আইডি"
    },
    domProps: {
      value: _vm.application_citizen_representative.national_id_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "national_id_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.national_id_no_error ? _c("p", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("\n                                                                আপনার ভ্যালুটি ভুল")]) : _vm._e(), _vm._v(" "), _vm.application_citizen_representative.nid_verification_message_error ? _c("p", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("\n                                                                আপনার প্রদত্ত ইনপুটটি ১০ কিংবা ১৩ কিংবা ১৭ ডিজিটের হতে হবে")]) : _vm._e()])]), _vm._v(" "), _c("td", {
    staticClass: "text-left",
    staticStyle: {
      padding: "0px",
      "border-top": "0px !important",
      "border-right": "0px !important",
      width: "33%"
    }
  }, [_c("div", {
    staticClass: "text-left",
    staticStyle: {
      padding: "0px"
    }
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.mobile_no,
      expression: "application_citizen_representative.mobile_no"
    }],
    staticClass: "form-control input_bangla required_field mobile_no mobile_bn",
    style: _vm.application_citizen_representative.mobile_no ? "" : "border: 1px solid red !important;",
    attrs: {
      type: "text",
      name: "mobile_no",
      placeholder: "মোবাইল নং"
    },
    domProps: {
      value: _vm.application_citizen_representative.mobile_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "mobile_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.mobile_no_error ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v("মোবাইল নং")]) : _vm._e()])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-left",
    staticStyle: {
      "border-top": "0px !important",
      "border-left": "0px !important",
      width: "33%"
    }
  }, [_c("div", {
    staticClass: "text-left",
    staticStyle: {
      padding: "0px"
    }
  }, [_c("label", [_vm._v("ই-মেইল")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.email,
      expression: "application_citizen_representative.email"
    }],
    staticClass: "form-control email_validate",
    staticStyle: {
      "min-width": "180px"
    },
    attrs: {
      type: "text",
      name: "applicant_email",
      placeholder: ""
    },
    domProps: {
      value: _vm.application_citizen_representative.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("td", {
    staticClass: "text-left",
    staticStyle: {
      padding: "0px",
      "border-top": "0px !important",
      "border-right": "0px !important",
      width: "33%"
    }
  }, [_c("div", {
    staticClass: "text-left",
    staticStyle: {
      padding: "0px"
    }
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.age,
      expression: "application_citizen_representative.age"
    }],
    staticClass: "form-control required_field input_bangla applicant_age only_number",
    style: _vm.application_citizen_representative.age ? "" : "border: 1px solid red !important;",
    attrs: {
      type: "text",
      name: "applicant_age",
      placeholder: ""
    },
    domProps: {
      value: _vm.application_citizen_representative.age
    },
    on: {
      keyup: function keyup($event) {
        return _vm.validateRepresentativeErrorMessage(_vm.application_citizen_representative.age, "age_error");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "age", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.age_error ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v("\n                                                                বয়স দিন")]) : _vm._e(), _vm._v(" "), _vm.age_error2 ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v("\n                                                                আপনার ভ্যালুটি ভুল")]) : _vm._e()])]), _vm._v(" "), _c("td", {
    staticClass: "text-left",
    staticStyle: {
      padding: "0px",
      "border-top": "0px !important",
      "border-right": "0px !important",
      width: "33%"
    }
  }, [_c("div", {
    staticClass: "text-left",
    staticStyle: {
      padding: "0px"
    }
  }, [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.relation,
      expression: "application_citizen_representative.relation"
    }],
    staticClass: "form-control required_field input_bangla applicant_relation",
    style: _vm.application_citizen_representative.relation ? "" : "border: 1px solid red !important;",
    attrs: {
      type: "text",
      name: "applicant_relation",
      placeholder: ""
    },
    domProps: {
      value: _vm.application_citizen_representative.relation
    },
    on: {
      keyup: function keyup($event) {
        return _vm.validateRepresentativeErrorMessage(_vm.application_citizen_representative.relation, "relation_error");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "relation", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.relation_error2 ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v("আপনার ভ্যালুটি ভুল")]) : _vm._e()])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      padding: "0px",
      "border-top": "0px !important",
      "border-right": "0px !important",
      "border-left": "0px !important",
      "border-bottom": "0px !important"
    },
    attrs: {
      colspan: "3"
    }
  }, [_c("div", {
    staticClass: "text-left",
    staticStyle: {
      padding: "0px"
    }
  }, [_vm._m(5), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.address,
      expression: "application_citizen_representative.address"
    }],
    staticClass: "owner_parents_name required_field form-control",
    style: _vm.application_citizen_representative.address ? "" : "border: 1px solid red !important;",
    attrs: {
      name: "owner_parents_name",
      rows: "1",
      placeholder: "পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা"
    },
    domProps: {
      value: _vm.application_citizen_representative.address
    },
    on: {
      keyup: function keyup($event) {
        return _vm.validateRepresentativeErrorMessage(_vm.application_citizen_representative.address, "address_error");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "address", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.address_error ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v(" নাম এবং পূর্ণ ঠিকানা")]) : _vm._e()])])])])]), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    staticStyle: {
      width: "20%"
    }
  }, [_c("label", [_vm._v("ছবি")]), _vm._v(" "), _vm.application_citizen_representative.photo && _vm.isGrohitaNidImg ? _c("div", {
    staticClass: "mb-2"
  }, [_c("div", {
    staticClass: "text-center grohita_image_box"
  }, [_c("img", {
    staticClass: "rounded-circle",
    attrs: {
      src: "data:image/png;base64,".concat(this.isGrohitaNidImg),
      width: "130px",
      height: "130px"
    }
  })])]) : _c("div", [_c("input", {
    attrs: {
      type: "hidden",
      id: "rep_base64Data"
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      id: "rep_base64_ready",
      value: "complete"
    }
  })]), _vm._v(" "), _c("br")])])])])])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 border"
  }, [_c("h6", {
    staticClass: "mt-3"
  }, [_vm._v("কাগজপত্রের স্ক্যান কপি সংযুক্তি")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-2 mb-4"
  }), _vm._v(" "), _c("p", [_vm.getIsLandScheduleUpdate ? _c("button", {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.documentSectiontoggle
    }
  }, [_c("i", {
    staticClass: "fa fa-upload",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("   "), _c("span", {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v(" স্ক্যান কপি সংযুক্ত করুন। ")])]) : _vm._e()]), _vm._v(" "), !_vm.getIsLandScheduleUpdate ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.documentshowSection,
      expression: "documentshowSection"
    }]
  }, [_c("div", {
    staticClass: "card card-body"
  }, [_vm.fileExist ? _c("table", {
    staticClass: "table table-bordered"
  }, _vm._l(_vm.filePath, function (value, index) {
    return _c("tr", {
      key: index
    }, [value.path == "" ? _c("td", {
      staticStyle: {
        width: "40%"
      }
    }, [_c("a", {
      attrs: {
        href: "",
        title: value.name
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, value);
        }
      }
    }, [_vm._v(_vm._s(value.name.slice(-25)))])]) : _c("td", {
      staticStyle: {
        width: "40%"
      }
    }, [_c("a", {
      attrs: {
        href: "",
        title: value.name
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, value);
        }
      }
    }, [_vm._v(_vm._s(value.name.slice(-25)))])]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "50%"
      }
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: value.doc_type,
        expression: "value.doc_type"
      }],
      staticClass: "form-control required_field",
      style: value.doc_type ? "margin-top:5px;" : "border: 1px solid red !important; margin-top:5px;",
      attrs: {
        name: "doc_type",
        placeholder: "সংযুক্ত কাগজের ধরণ নির্বাচন করুন",
        id: "doc_type"
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(value, "doc_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("সংযুক্ত কাগজের ধরণ নির্বাচন করুন")]), _vm._v(" "), _vm._l(_vm.req_doc, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: index
        }
      }, [_vm._v("\n                                        " + _vm._s(value) + "\n                                    ")]);
    })], 2)]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "10%"
      }
    }, [_c("button", {
      staticClass: "btn btn-danger btn-sm m-1",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeDocRecord(index);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })])])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.fileUploadProgress ? _c("div", {
    staticClass: "progress",
    staticStyle: {
      width: "300px",
      height: "6px"
    }
  }, [_c("div", {
    staticClass: "progress-bar",
    style: _vm.isInitial ? "width:0%;clear: both" : "width:100%;clear: both",
    attrs: {
      id: "progressBar",
      role: "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "upload-btn-wrapper"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-sm additionBtn"
  }, [_vm._v(" + সংযোজন করুন")]), _vm._v(" "), _c("input", {
    attrs: {
      type: "file",
      accept: "application/pdf"
    },
    on: {
      change: _vm.onFileChange
    }
  })])])]) : _vm._e(), _vm._v(" "), _vm._m(6)]), _vm._v(" "), _c("b-modal", {
    ref: "modal-lg",
    staticClass: "modal-lg",
    attrs: {
      id: "modal-lg",
      size: "lg",
      "hide-footer": "",
      title: ""
    }
  }, [_c("div", {
    staticStyle: {
      padding: "0px",
      height: "580px"
    }
  }, [_c("iframe", {
    staticStyle: {
      height: "100%",
      width: "100%"
    },
    attrs: {
      src: _vm.documentBlobUrl,
      gesture: "media",
      allow: "encrypted-media",
      allowfullscreen: "",
      id: "fileDisplay",
      frameborder: "0"
    }
  })])]), _vm._v(" "), _c("b-modal", {
    ref: "photo-view",
    attrs: {
      size: "sm",
      "hide-footer": "",
      title: ""
    }
  }, [_c("center", [_c("img", {
    staticClass: "img-thumbnail rounded",
    staticStyle: {
      width: "200px",
      height: "200px"
    },
    attrs: {
      src: _vm.base64imageView,
      alt: ""
    }
  })])], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v(" প্রতিনিধির নাম "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("ন্যাশনাল আইডি "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("মোবাইল নং "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("বয়স "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("সম্পর্ক "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v(" পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা "), _c("span", {
    staticClass: "required",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "margin-top": "30px"
    }
  }, [_c("h6", {
    staticClass: "text-danger mt-3 p-0"
  }, [_vm._v("স্ক্যান কপি সংযুক্তি সম্পর্কিত নির্দেশবলী")]), _vm._v(" "), _c("hr", {
    staticClass: "m-0"
  }), _vm._v(" "), _c("p", {
    staticClass: "m-0 p-0"
  }, [_vm._v("১। আবেদনের সাথে প্রয়োজনীয় কাগজপত্রের সংযুক্তির ক্ষেত্রে স্ক্যান ফাইলটি অবশ্যই jpg, png\n                    অথবা pdf ফরমেটে হতে হবে । অন্য কোন ফরমেটে হলে ফাইলটি আপলোড করা যাবেনা ।")]), _vm._v(" "), _c("p", {
    staticClass: "m-0 p-0"
  }, [_vm._v("২। স্ক্যান ফাইলটির সাইজ অবশ্যই ২৫ মেগাবাইটের (MB) এর মধ্যে হতে হবে ।")]), _vm._v(" "), _c("p", {
    staticClass: "m-0 p-0"
  }, [_vm._v("৩। ফাইল সাইজ ২৫ মেগাবাইটের বেশি হলে "), _c("a", {
    staticStyle: {
      color: "#ba8b00 !important",
      "font-size": "12px"
    },
    attrs: {
      href: "https://www.pdf2go.com/resize-pdf",
      target: "_blank"
    }
  }, [_vm._v("https://www.pdf2go.com/resize-pdf ")]), _vm._v("   অথবা\n                    "), _c("a", {
    staticStyle: {
      color: "#ba8b00 !important",
      "font-size": "12px"
    },
    attrs: {
      href: "https://www.sejda.com/compress-pdf",
      target: "_blank"
    }
  }, [_vm._v("https://www.sejda.com/compress-pdf ")]), _vm._v("   অথবা এধরনের যেকোন অনলাইন টুল ব্যবহার করে pdf ফাইল সাইজ অনেক কমিয়ে আনা\n                    যায় ।")]), _vm._v(" "), _c("p", {
    staticClass: "m-0 p-0"
  }, [_vm._v("৪। স্ক্যান ফাইলটি আপলোড হওয়ার পর তা কি ধরনের ফাইল (দলিল/খতিয়ান/ওয়ারিশ সনদ) তা ড্রপডাউন\n                    হতে সিলেক্ট করে দিতে হবে ।")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=template&id=44cbc27c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=template&id=44cbc27c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-md-12 p-2"
  }, [_c("h6", {
    staticStyle: {
      "font-size": "0.95rem"
    }
  }, [_vm._v("সর্বশেষ খারিজ খতিয়ান (প্রযোজ্য ক্ষেত্রে)")]), _vm._v(" "), _c("div", {
    staticClass: "scroll"
  }, [_c("div", {
    staticClass: "landinfo-form-content mb-2"
  }, [_c("div", {
    staticClass: "landinfo-khotiyan-block mt-3 bdr-radius-bottom-0"
  }, _vm._l(_vm.application_land_schedules_is_last, function (data, key) {
    return _c("tr", {
      key: key
    }, [_c("td", {
      staticStyle: {
        width: "28%",
        padding: "7px"
      }
    }, [_c("div", {
      staticClass: "form-group input-khotiyan-type landinfo-input-block"
    }, [_c("label", [_vm._v("খতিয়ানের ধরণ")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.land_record_type_id,
        expression: "data.land_record_type_id"
      }],
      staticClass: "form-control lmt-select required_field input_bangla",
      attrs: {
        name: "sa_id",
        id: "sa_id"
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(data, "land_record_type_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(_vm.land_record_types, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: index
        }
      }, [_vm._v("\n                                        " + _vm._s(value) + "\n                                    ")]);
    }), 0)])]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "22.5%",
        padding: "7px"
      }
    }, [_c("div", {
      staticClass: "form-group landinfo-input-block"
    }, [_c("label", [_vm._v("খতিয়ান নং")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.khatian_no,
        expression: "data.khatian_no"
      }],
      staticClass: "form-control input_bangla li_khation_num only_number",
      attrs: {
        type: "text",
        name: "khatian_no",
        placeholder: ""
      },
      domProps: {
        value: data.khatian_no
      },
      on: {
        keyup: function keyup($event) {
          return _vm.checkValueExistForKhatian(data.khatian_no, key, "khatian_no_error");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "khatian_no", $event.target.value);
        }
      }
    })]), _vm._v(" "), data.khatian_no_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_c("b", [_vm._v("শুধুমাত্র পজেটিভ নম্বর এবং\n                                (/) ব্যবহার করা যাবে।")])]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "22.5%",
        padding: "7px"
      }
    }, [_c("div", {
      staticClass: "form-group landinfo-input-block"
    }, [_c("label", [_vm._v("দাগ নং")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.dag_no,
        expression: "data.dag_no"
      }],
      staticClass: "form-control input_bangla only_number",
      attrs: {
        type: "text",
        name: "dag_no",
        placeholder: ""
      },
      domProps: {
        value: data.dag_no
      },
      on: {
        keyup: function keyup($event) {
          return _vm.checkValueExistForDag(data.dag_no, key, "dag_no_error");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "dag_no", $event.target.value);
        }
      }
    })]), _vm._v(" "), data.dag_no_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_c("b", [_vm._v("শুধুমাত্র পজেটিভ নম্বর ব্যবহার করা যাবে।")])]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "22%",
        padding: "7px"
      }
    }, [_c("div", {
      staticClass: "form-group landinfo-input-block"
    }, [_c("label", [_vm._v("জমির পরিমাণ")]), _vm._v(" "), _c("div", {
      staticClass: "landinfo-acor"
    }, [_c("input", {
      staticClass: "acor-text form-control",
      attrs: {
        type: "text",
        disabled: "disabled",
        readonly: "readonly",
        value: "একর",
        placeholder: "একর"
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.amount_of_land,
        expression: "data.amount_of_land"
      }],
      staticClass: "form-control input_bangla only_number",
      staticStyle: {
        "padding-left": "70px !important"
      },
      attrs: {
        type: "text",
        placeholder: "",
        title: "জমির পরিমাণ",
        name: "amount_of_land"
      },
      domProps: {
        value: data.amount_of_land
      },
      on: {
        keyup: function keyup($event) {
          return _vm.checkValueOnlyNumber(data.amount_of_land, key, "amount_of_land_error");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "amount_of_land", $event.target.value);
        }
      }
    })])]), _vm._v(" "), data.amount_of_land_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_c("b", [_vm._v("শুধুমাত্র পজেটিভ নম্বর ব্যবহার করা যাবে।")])]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "15%",
        padding: "7px"
      }
    }, [_c("div", {
      staticClass: "form-group landinfo-input-block"
    }, [_c("label", [_vm._v(".")]), _vm._v(" "), data.first_row == 1 ? _c("button", {
      staticClass: "btn btn-primary btn-sm",
      staticStyle: {
        "font-size": "0.70rem"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: _vm.addLandSchedulesLast
      }
    }, [_vm._v("আরও\n                                ")]) : _vm._e(), _vm._v(" "), data.first_row != 1 ? _c("button", {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeLandSchedulesLast(key, data);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })]) : _vm._e()])])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 p-2"
  }, [_c("h5", {
    staticStyle: {
      "font-size": "0.95rem"
    }
  }, [_vm._v("রেকর্ডীয় মালিকের নাম ও ঠিকানা")]), _vm._v(" "), _c("div", {
    staticClass: "scroll"
  }, [_c("div", {
    staticClass: "landinfo-form-content mb-2"
  }, [_c("div", {
    staticClass: "landinfo-khotiyan-block mt-3 bdr-radius-bottom-0"
  }, _vm._l(_vm.application_citizen_record, function (data, key) {
    return _c("div", {
      key: key,
      staticClass: "landinfo-row"
    }, [_c("table", {
      staticStyle: {
        width: "100%"
      }
    }, [_c("tr", [_c("td", {
      staticStyle: {
        width: "35%",
        "vertical-align": "top"
      }
    }, [_c("div", {
      staticClass: "form-group input-khotiyan-type landinfo-input-block",
      staticStyle: {
        "margin-right": "10px"
      },
      attrs: {
        id: "name_box_" + key
      }
    }, [_vm._m(0, true), _vm._v(" "), _c("input", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }, {
        name: "model",
        rawName: "v-model",
        value: data.name,
        expression: "data.name"
      }],
      staticClass: "pr-1 form-control red-bordered required_field old_owner_name",
      style: data.name ? "" : "border: 1px solid red !important;",
      attrs: {
        type: "text",
        name: "owner_name",
        placeholder: "",
        title: "মালিকের নাম"
      },
      domProps: {
        value: data.name
      },
      on: {
        keyup: function keyup(event) {
          return _vm.validateOwnerErrorMessage(event, key, "name_error");
        },
        focusout: function focusout($event) {
          return _vm.checkValueExist(data.name, "name_box_" + key, key, "name_error");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "name", $event.target.value);
        }
      }
    }), _vm._v(" "), data.name_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("মালিকের নাম")]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "55%"
      }
    }, [_c("div", {
      staticClass: "form-group input-khotiyan-type landinfo-input-block",
      attrs: {
        id: "address_box_" + key
      }
    }, [_vm._m(1, true), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.address,
        expression: "data.address"
      }, {
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }],
      staticClass: "form-control red-bordered required_field input_bangla old_owner_address",
      style: data.address ? "" : "border: 1px solid red !important;",
      attrs: {
        name: "owner_parents_name",
        rows: "2",
        placeholder: "",
        title: "মালিকের পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা"
      },
      domProps: {
        value: data.address
      },
      on: {
        keyup: function keyup(event) {
          return _vm.validateOwnerErrorMessage(event, key, "address_error");
        },
        focusout: function focusout($event) {
          return _vm.checkValueExist(data.address, "address_box_" + key, key, "address_error");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "address", $event.target.value);
        }
      }
    }), _vm._v(" "), data.address_error ? _c("p", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("মালিকের পিতা/স্বামীর নাম এবং পূর্ণ\n                                            ঠিকানা")]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "10%"
      }
    }, [_c("div", {
      staticClass: "form-group text-right input-khotiyan-type landinfo-input-block"
    }, [_c("label", [_vm._v(".")]), _vm._v(" "), data.first_row == 1 ? _c("button", {
      staticClass: "btn btn-primary btn-sm p-1 m-1",
      attrs: {
        type: "button",
        id: "recordButton"
      },
      on: {
        click: _vm.addApplicationCitizenRecord
      }
    }, [_vm._v("আরও\n                                        ")]) : _vm._e(), _vm._v(" "), data.first_row != 1 ? _c("button", {
      staticClass: "btn btn-danger btn-sm m-1",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeCitizenRecord(key, data);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })]) : _vm._e()])])])])]);
  }), 0)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("মালিকের নাম"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("মালিকের পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=template&id=4492b518&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=template&id=4492b518& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row border",
    staticStyle: {
      "text-align": "center",
      "margin-right": "0px",
      "margin-left": "0px"
    }
  }, [_c("div", {
    staticClass: "col-md-2 py-3",
    staticStyle: {
      "font-size": "0.95rem"
    }
  }, [_vm._v(" ১. জমির মালিকানা সূত্র")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 py-3"
  }, _vm._l(_vm.land_ownership_reference, function (s, id) {
    return _c("div", {
      key: id,
      staticClass: "form-check form-check-inline"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: s.active,
        expression: "s.active"
      }],
      staticClass: "form-check-input ownership_reference_check",
      attrs: {
        disabled: _vm.ownership_reference_check,
        type: "checkbox",
        id: s.value
      },
      domProps: {
        value: s.value,
        checked: Array.isArray(s.active) ? _vm._i(s.active, s.value) > -1 : s.active
      },
      on: {
        change: [function ($event) {
          var $$a = s.active,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = s.value,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(s, "active", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(s, "active", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(s, "active", $$c);
          }
        }, function (event) {
          return _vm.visibleColumnsChanged(s, event);
        }, _vm.checkCroySutro]
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label",
      staticStyle: {
        color: "#3a3939"
      },
      attrs: {
        "for": s.value
      }
    }, [_vm._v(_vm._s(s.display) + " ")])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 p-2"
  }, [_vm.applicationData.other_reference ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.other_reference_text,
      expression: "applicationData.other_reference_text"
    }],
    staticClass: "form-control input_bangla",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      type: "text",
      name: "rules",
      disabled: _vm.ownership_reference_check,
      placeholder: "সূত্র অন্যান্য হলে লিখুন",
      id: "rules"
    },
    domProps: {
      value: _vm.applicationData.other_reference_text
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.applicationData, "other_reference_text", $event.target.value);
      }
    }
  }) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/representative.vue?vue&type=template&id=2b1d3104&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/representative.vue?vue&type=template&id=2b1d3104& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_vm.application_citizen_representative.if_representative == 1 ? _c("div", {
    staticClass: "col-md-6 p-2 border",
    staticStyle: {
      "font-size": "0.70rem !important"
    }
  }, [_c("div", {
    staticClass: "grohita-section"
  }, [_c("div", {
    staticClass: "card border mt-3 p-0",
    staticStyle: {
      background: "#F9FFF9"
    }
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("div", {
    staticClass: "table-responsive grohita"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped sm-screen-sm-tbl"
  }, [_c("tbody", [_vm._m(0), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-left"
  }, [_vm._v("\n                            প্রতিনিধির নাম\n                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.name,
      expression: "application_citizen_representative.name"
    }],
    staticClass: "form-control input_bangla red-bordered",
    staticStyle: {
      "min-width": "180px"
    },
    attrs: {
      type: "text",
      name: "representative_name",
      id: "representative_name",
      placeholder: ""
    },
    domProps: {
      value: _vm.application_citizen_representative.name
    },
    on: {
      keyup: function keyup(event) {
        return _vm.validateRepresentativeErrorMessage(event, "name_error");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.name_error ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v("\n                                Donor Name is Required")]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticClass: "text-left",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("\n                            পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা\n                                "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.address,
      expression: "application_citizen_representative.address"
    }],
    staticClass: "red-bordered form-control",
    staticStyle: {
      resize: "none",
      "min-width": "200px"
    },
    attrs: {
      name: "owner_parents_name",
      rows: "3",
      placeholder: "পিতা/স্বামীর নাম এবং পূর্ণ ঠিকানা"
    },
    domProps: {
      value: _vm.application_citizen_representative.address
    },
    on: {
      keyup: function keyup(event) {
        return _vm.validateRepresentativeErrorMessage(event, "address_error");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "address", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.address_error ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v(" Donor Address is Required")]) : _vm._e()])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-left"
  }, [_vm._v("\n                            মোবাইল নং\n                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.mobile_no,
      expression: "application_citizen_representative.mobile_no"
    }],
    staticClass: "form-control input_bangla red-bordered",
    staticStyle: {
      "min-width": "180px"
    },
    attrs: {
      type: "text",
      name: "mobile_no",
      placeholder: "মোবাইল নং"
    },
    domProps: {
      value: _vm.application_citizen_representative.mobile_no
    },
    on: {
      keyup: function keyup(event) {
        return _vm.validateRepresentativeErrorMessage(event, "mobile_no_error");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "mobile_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.mobile_no_error ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v("Donor Name is Required")]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticClass: "text-left",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("\n                            ন্যাশনাল আইডি/পাসপোর্ট/জন্ম নিবন্ধন\n                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.national_id_no,
      expression: "application_citizen_representative.national_id_no"
    }],
    staticClass: "form-control input_bangla red-bordered",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      type: "text",
      name: "national_id",
      placeholder: "ন্যাশনাল আইডি/পাসপোর্ট/জন্ম নিবন্ধন"
    },
    domProps: {
      value: _vm.application_citizen_representative.national_id_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "national_id_no", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-left",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                            ই-মেইল\n                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.email,
      expression: "application_citizen_representative.email"
    }],
    staticClass: "form-control",
    staticStyle: {
      "min-width": "180px"
    },
    attrs: {
      type: "text",
      name: "applicant_email",
      placeholder: ""
    },
    domProps: {
      value: _vm.application_citizen_representative.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "text-left"
  }, [_vm._v("\n                            বয়স\n                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.age,
      expression: "application_citizen_representative.age"
    }],
    staticClass: "form-control red-bordered",
    attrs: {
      type: "text",
      name: "applicant_age",
      placeholder: ""
    },
    domProps: {
      value: _vm.application_citizen_representative.age
    },
    on: {
      keyup: function keyup(event) {
        return _vm.validateRepresentativeErrorMessage(event, "age_error");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "age", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.age_error ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v("\n                                Donor Name is Required")]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticClass: "text-left"
  }, [_vm._v("\n                            সম্পর্ক\n                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.application_citizen_representative.relation,
      expression: "application_citizen_representative.relation"
    }],
    staticClass: "form-control red-bordered",
    attrs: {
      type: "text",
      name: "applicant_relation",
      placeholder: ""
    },
    domProps: {
      value: _vm.application_citizen_representative.relation
    },
    on: {
      keyup: function keyup(event) {
        return _vm.validateRepresentativeErrorMessage(event, "relation_error");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.application_citizen_representative, "relation", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.relation_error ? _c("p", {
    staticStyle: {
      "font-size": "12px",
      color: "red"
    }
  }, [_vm._v("Donor Name is Required")]) : _vm._e()])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", [_vm._v("পাসপোর্ট সাইজের ১ কপি ছবি")]), _vm._v(" "), _c("input", {
    staticClass: "form-control col-md-8 red-bordered",
    attrs: {
      type: "file",
      name: "applicant_name"
    },
    on: {
      change: function change(event) {
        return _vm.handleFileUpload(event, "photo");
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.photo_loading ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      "margin-left": "4px",
      height: "20px",
      width: "20px",
      "font-size": "11px"
    },
    attrs: {
      role: "status"
    }
  }) : _vm._e(), _vm._v(" "), _vm.application_citizen_representative.photo ? _c("a", {
    staticClass: "text-center",
    staticStyle: {
      "font-size": "10px",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.viewImage(_vm.application_citizen_representative.photo, "photo_loading");
      }
    }
  }, [_vm._v("View\n                                Photo")]) : _vm._e(), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      id: "rep_base64Data"
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      id: "rep_base64_ready",
      value: "complete"
    }
  })]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", [_vm._v("স্বাক্ষর")]), _vm._v(" "), _c("input", {
    staticClass: "form-control col-md-8",
    attrs: {
      type: "file",
      name: "applicant_name"
    },
    on: {
      change: function change(event) {
        return _vm.handleFileUpload(event, "signature");
      }
    }
  }), _vm._v(" "), _vm.application_citizen_representative.signature_loading ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      "margin-left": "4px",
      height: "20px",
      width: "20px",
      "font-size": "11px"
    },
    attrs: {
      role: "status"
    }
  }) : _vm._e(), _vm._v(" "), _vm.application_citizen_representative.signature ? _c("a", {
    staticClass: "text-center",
    staticStyle: {
      "font-size": "10px",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.viewImage(_vm.application_citizen_representative.signature, "signature_loading");
      }
    }
  }, [_vm._v("View\n                                Signature")]) : _vm._e()])])])])])])])])]) : _vm._e(), _vm._v(" "), _c("b-modal", {
    ref: "photo-view",
    attrs: {
      size: "sm",
      "hide-footer": "",
      title: ""
    }
  }, [_c("center", [_c("img", {
    staticStyle: {
      width: "200px",
      height: "200px"
    },
    attrs: {
      src: _vm.base64imageView,
      alt: ""
    }
  })])], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v(" প্রতিনিধির নাম ও পূর্ণ ঠিকানা, বয়স, সম্পর্ক")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=template&id=5364a2b3&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=template&id=5364a2b3&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-md-12 p-0 m-0"
  }, [_c("table", {
    staticClass: "table table-striped border",
    staticStyle: {
      width: "100%"
    }
  }, [_c("tr", [_c("td", {
    staticStyle: {
      width: "20%"
    }
  }, [_c("div", {
    staticClass: "form-check form-check-inline py-2 px-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.emergencyInfo.isImportant,
      expression: "emergencyInfo.isImportant"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "imrgncy",
      value: "1",
      name: "is_imrgncy"
    },
    domProps: {
      checked: Array.isArray(_vm.emergencyInfo.isImportant) ? _vm._i(_vm.emergencyInfo.isImportant, "1") > -1 : _vm.emergencyInfo.isImportant
    },
    on: {
      change: function change($event) {
        var $$a = _vm.emergencyInfo.isImportant,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.emergencyInfo, "isImportant", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.emergencyInfo, "isImportant", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.emergencyInfo, "isImportant", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "imrgncy"
    }
  }, [_vm._v(" জরুরী কিনা?")])])]), _vm._v(" "), _vm.emergencyInfo.isImportant ? _c("td", {
    staticStyle: {
      width: "80%"
    }
  }, [_c("div", {
    staticClass: "form-group form-check form-check-inline py-2 px-3"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.emergencyInfo.importantText,
      expression: "emergencyInfo.importantText"
    }],
    staticClass: "form-control important-text",
    "class": _vm.emergencyInfo.isImportant ? "required_field" : "",
    style: _vm.emergencyInfo.importantText ? "" : "border: 1px solid red !important;",
    attrs: {
      name: "",
      id: "",
      rows: "1",
      placeholder: "কারণ"
    },
    domProps: {
      value: _vm.emergencyInfo.importantText
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.emergencyInfo, "importantText", $event.target.value);
      }
    }
  })])]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "row card-footer border"
  }, [_c("div", {
    staticClass: "my-2 mx-auto"
  }, [_c("button", {
    staticClass: "btn btn-sm mr-2 border",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.removeStateDataAndBack
    }
  }, [_vm._v("বাতিল করুন")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      disabled: _vm.applicationData.loading_icon
    },
    on: {
      click: function click($event) {
        return _vm.previewButton("Submit");
      }
    }
  }, [_vm._v("দাখিল")]), _vm._v(" "), _vm.applicationData.loading_icon ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      "margin-left": "4px",
      height: "20px",
      width: "20px",
      "font-size": "11px"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _vm._e()])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_application.vue?vue&type=style&index=0&id=0899f657&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/new_application.vue?vue&type=style&index=0&id=0899f657&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.form-control {\n    font-size: .70rem !important;\n}\n.page-content p, .page-content li {\n    font-size: .70rem !important;\n}\np {\n    font-size: 14px;\n}\n.vdp-datepicker {\n    position: inherit !important;\n}\n.vdp-datepicker__calendar {\n    width: 250px !important;\n    font-size: 14px !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\ntd > .vdp-datepicker > .vdp-datepicker__calendar {\r\n    width: 250px !important;\n}\ninput::-webkit-input-placeholder {\r\n    font-size: 11px !important;\n}\n.red-bordered{\r\n    border: 1px solid red !important;\n}\n.li_khation_num{\r\n    border-top-right-radius: 5px !important;\r\n    border-bottom-right-radius: 5px !important;\n}\n.form-control{\r\n    font-size: .80rem !important;\n}\nlabel {\r\n    /*margin-bottom: 0.5rem;*/\r\n    font-size: 0.80rem !important;\n}\n@media (max-width: 575.98px) {\n.scroll {\r\n        overflow-x: scroll;\n}\n}\n@media (max-width: 767.98px) {\n.scroll {\r\n        overflow-x: scroll;\n}\n}\n@media (max-width: 991.98px) {\n.scroll {\r\n        overflow-x: scroll;\n}\n}\n@media only screen and (max-width: 650px) {\n.form-control {\r\n        width: auto !important;\n}\n.vdp-datepicker__calendar {\r\n        position: absolute;\r\n        z-index: 100;\r\n        background: #fff;\r\n        width: 300px;\r\n        border: 1px solid #ccc;\r\n        right: 0px;\n}\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n.scroll {\r\n        overflow-x: scroll;\n}\n}\r\n\r\n/*Alert! Don't delete this css properties. Because this all properties used for validation*/\n.error_message_mobile_bn {\r\n    border: 1px solid red !important;\n}\n.error_message_required{\r\n    border: 1px solid red !important;\n}\n.error_message_email{\r\n    border: 1px solid red !important;\n}\n.error_message_only_character{\r\n    border: 1px solid red !important;\n}\r\n/*Alert! Don't delete this css properties. Because this all properties used for validation*/\n.vdp-datepicker .input-group input {\r\n    border-color: #ffff !important;\r\n    height: 29px!important;\n}\n@media (min-width: 320px) and (max-width: 740px) {\n.form-sec-title{\r\n        font-size: 0.70rem !important;\n}\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.applicant_name[data-v-7ba9600f]{\r\n    min-width: 180px;\n}\n.applicant_mobile[data-v-7ba9600f]{\r\n    min-width: 180px;\n}\n.applicant_NID[data-v-7ba9600f]{\r\n    min-width: 200px;\n}\n.owner_parents_name[data-v-7ba9600f]{\r\n    resize: none;\r\n    min-width: 200px;\n}\n.bibadi_name[data-v-7ba9600f]{\r\n    min-width: 180px;\n}\n.owner_parents_name[data-v-7ba9600f]{\r\n    resize: none;\r\n    min-width: 200px;\n}\n@media (max-width: 575.98px) {\n.scroll[data-v-7ba9600f] {\r\n        overflow-x: scroll;\r\n        white-space: nowrap;\n}\n}\n@media (max-width: 767.98px) {\n.scroll[data-v-7ba9600f] {\r\n        overflow-x: scroll;\r\n        white-space: nowrap;\n}\n}\n@media (max-width: 991.98px) {\n.scroll[data-v-7ba9600f] {\r\n        overflow-x: scroll;\r\n        white-space: nowrap;\n}\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n.scroll[data-v-7ba9600f] {\r\n        overflow-x: scroll;\r\n        white-space: nowrap;\n}\n}\n@media only screen and (max-width: 650px) {\n.form-control[data-v-7ba9600f] {\r\n            width: auto !important;\n}\n}\n.error_message_custom[data-v-7ba9600f] {\r\n        font-size: 17px;\r\n        color: white;\r\n        font-weight: bold;\r\n        /*background: red;*/\r\n        padding: 10px !important;\n}\n.table th[data-v-7ba9600f], .table td[data-v-7ba9600f] {\r\n        border-top: 5px !important;\n}\n.imgdiv[data-v-7ba9600f]{\r\n    text-align:center;\r\n    padding-top:2%;\r\n    border:1px solid #42A045;\r\n    border-radius: 5px;\n}\n.imgdiv2[data-v-7ba9600f]{\r\n    text-align:center;\n}\n.imginput[data-v-7ba9600f]{\r\n    /*visibility: hidden;*/\r\n    display: none;\n}\n.imginput2[data-v-7ba9600f]{\r\n    visibility: hidden;\r\n    display: none;\n}\n.imglabel[data-v-7ba9600f]{\r\n    cursor:pointer;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    color: #5a6268;\n}\r\n\r\n/*.table th, .table td {*/\r\n/*    padding-top: 0px !important;*/\r\n/*}*/\n.form-control[data-v-7ba9600f]{\r\n    font-size: 11.4px !important;\n}\nlabel[data-v-7ba9600f] {\r\n    font-size: 11.4px !important;\n}\r\n\r\n/*Alert! Don't delete this css properties. Because this all properties used for validation*/\n.error_message_mobile_bn[data-v-7ba9600f] {\r\n    border: 1px solid red !important;\n}\n.error_message_required[data-v-7ba9600f]{\r\n    border: 1px solid red !important;\n}\n.error_message_email[data-v-7ba9600f]{\r\n    border: 1px solid red !important;\n}\n.error_message_only_character[data-v-7ba9600f]{\r\n    border: 1px solid red !important;\n}\r\n/*Alert! Don't delete this css properties. Because this all properties used for validation*/\r\n/*.grohitattl table table td {*/\r\n/*    padding: 10px !important;*/\r\n/*}*/\n.btn-sm[data-v-7ba9600f] {\r\n    padding: 5px;\r\n    font-size: 8px;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nbody[data-v-a3a2e118], *[data-v-a3a2e118] {\n    font-family: 'Kalpurush' !important;\n}\n.input_bangla[data-v-a3a2e118] {\n    font-family: boishakhi !important;\n}\np[data-v-a3a2e118] {\n    font-size: 14px !important;\n}\n.commissioner[data-v-a3a2e118] {\n    margin-top: -18px;\n    margin-left: 20px;\n    color: #333333;\n}\ntd[data-v-a3a2e118], th[data-v-a3a2e118] {\n    padding: 4px 2px !important;\n    font-size: 12px !important;\n}\n\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.representative_name[data-v-5018cebe]{\r\n    min-width: 180px;\n}\n.owner_parents_name[data-v-5018cebe]{\r\n    resize: none; min-width: 200px;\n}\n.mobile_no[data-v-5018cebe]{\r\n    min-width: 180px;\n}\n.national_id[data-v-5018cebe]{\r\n    min-width: 200px;\n}\np[data-v-5018cebe] {\r\n        line-height: 25px;\n}\n.modal-lg[data-v-5018cebe] {\r\n        width: 1200px !important;\r\n        height: 80%;\n}\n@media (min-width: 992px) {\n.modal-lg[data-v-5018cebe], .modal-xl[data-v-5018cebe] {\r\n            max-width: 1200px !important;\n}\n}\n.form-control[data-v-5018cebe]{\r\n    font-size: 11.4px !important;\n}\nlabel[data-v-5018cebe] {\r\n    font-size: 11.4px !important;\n}\n.imgdiv[data-v-5018cebe]{\r\n    text-align:center;\r\n    padding-top:2%;\r\n    border:1px solid #42A045;\r\n    border-radius: 5px;\n}\n.imginput[data-v-5018cebe]{\r\n    /*visibility: hidden;*/\r\n    display: none;\n}\n.imglabel[data-v-5018cebe]{\r\n    cursor:pointer;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    color: #5a6268;\n}\n.table th[data-v-5018cebe], .table td[data-v-5018cebe] {\r\n    border-top: 0px !important;\n}\n.table th[data-v-5018cebe], .table td[data-v-5018cebe] {\r\n    padding-top: 0px !important;\n}\ntextarea[data-v-5018cebe]::-moz-placeholder{\r\n    font-size: 12px !important;\n}\ntextarea[data-v-5018cebe]::placeholder{\r\n    font-size: 12px !important;\n}\r\n\r\n/*Alert! Don't delete this css properties. Because this all properties used for validation*/\n.error_message_mobile_bn[data-v-5018cebe] {\r\n    border: 1px solid red !important;\n}\n.error_message_required[data-v-5018cebe]{\r\n    border: 1px solid red !important;\n}\n.error_message_email[data-v-5018cebe]{\r\n    border: 1px solid red !important;\n}\n.error_message_only_character[data-v-5018cebe]{\r\n    border: 1px solid red !important;\n}\r\n/*Alert! Don't delete this css properties. Because this all properties used for validation*/\n.hideProgress[data-v-5018cebe]{\r\n    display: none;\n}\n.showProgress[data-v-5018cebe]{\r\n    display: inline;\n}\n.upload-btn-wrapper[data-v-5018cebe] {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    margin-top:5px;\n}\n.upload-btn-wrapper input[type=file][data-v-5018cebe] {\r\n    font-size: 100px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.old_owner_name[data-v-44cbc27c]{\n}\n.old_owner_address[data-v-44cbc27c]{\r\n    resize: none;\n}\n.landinfo-row[data-v-44cbc27c] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    justify-content: safe flex-end;\n}\n.landinfo-row .landinfo-col[data-v-44cbc27c] {\r\n    max-width: 16.666667% !important;\n}\n@media (min-width: 1200px) and (max-width: 1439px) {\n.landinfo-form-content .form-group .form-control[data-v-44cbc27c], .landinfo-form-content .btn[data-v-44cbc27c], .landinfo-form-content span[data-v-44cbc27c], .landinfo-form-content label[data-v-44cbc27c], .landinfo-form-content .form-group label[data-v-44cbc27c] {\r\n        font-size: 0.71rem !important;\n}\n}\n@media (max-width: 575.98px) {\n.scroll[data-v-44cbc27c] {\r\n        overflow-x: scroll;\r\n        white-space: nowrap;\n}\n.landinfo-row[data-v-44cbc27c]{\r\n        justify-content: left;\n}\n}\n@media (max-width: 767.98px) {\n.scroll[data-v-44cbc27c] {\r\n        overflow-x: scroll;\r\n        white-space: nowrap;\n}\n.landinfo-row[data-v-44cbc27c]{\r\n        justify-content: left;\n}\n}\n@media (max-width: 991.98px) {\n.scroll[data-v-44cbc27c] {\r\n        overflow-x: scroll;\r\n        white-space: nowrap;\n}\n.landinfo-row[data-v-44cbc27c]{\r\n        justify-content: left;\n}\n}\n@media only screen and (max-width: 650px) {\n.form-control[data-v-44cbc27c] {\r\n        width: auto !important;\n}\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.important-text[data-v-5364a2b3] {\n    border: 1px solid red;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_application.vue?vue&type=style&index=0&id=0899f657&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/new_application.vue?vue&type=style&index=0&id=0899f657&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./new_application.vue?vue&type=style&index=0&id=0899f657&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_application.vue?vue&type=style&index=0&id=0899f657&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css&");

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

/***/ "./resources/js/components/Application/new_application.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Application/new_application.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_application_vue_vue_type_template_id_0899f657___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new_application.vue?vue&type=template&id=0899f657& */ "./resources/js/components/Application/new_application.vue?vue&type=template&id=0899f657&");
/* harmony import */ var _new_application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new_application.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/new_application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _new_application_vue_vue_type_style_index_0_id_0899f657_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new_application.vue?vue&type=style&index=0&id=0899f657&lang=css& */ "./resources/js/components/Application/new_application.vue?vue&type=style&index=0&id=0899f657&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _new_application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_application_vue_vue_type_template_id_0899f657___WEBPACK_IMPORTED_MODULE_0__["render"],
  _new_application_vue_vue_type_template_id_0899f657___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/new_application.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/new_application.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Application/new_application.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./new_application.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/new_application.vue?vue&type=style&index=0&id=0899f657&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Application/new_application.vue?vue&type=style&index=0&id=0899f657&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_style_index_0_id_0899f657_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./new_application.vue?vue&type=style&index=0&id=0899f657&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_application.vue?vue&type=style&index=0&id=0899f657&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_style_index_0_id_0899f657_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_style_index_0_id_0899f657_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_style_index_0_id_0899f657_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_style_index_0_id_0899f657_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/new_application.vue?vue&type=template&id=0899f657&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Application/new_application.vue?vue&type=template&id=0899f657& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_template_id_0899f657___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./new_application.vue?vue&type=template&id=0899f657& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_application.vue?vue&type=template&id=0899f657&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_template_id_0899f657___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_new_application_vue_vue_type_template_id_0899f657___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/new_form_comp/land-info.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Application/new_form_comp/land-info.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _land_info_vue_vue_type_template_id_0ce809b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./land-info.vue?vue&type=template&id=0ce809b2& */ "./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=template&id=0ce809b2&");
/* harmony import */ var _land_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./land-info.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _land_info_vue_vue_type_style_index_0_id_0ce809b2_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css& */ "./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _land_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _land_info_vue_vue_type_template_id_0ce809b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _land_info_vue_vue_type_template_id_0ce809b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/new_form_comp/land-info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_style_index_0_id_0ce809b2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=style&index=0&id=0ce809b2&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_style_index_0_id_0ce809b2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_style_index_0_id_0ce809b2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_style_index_0_id_0ce809b2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_style_index_0_id_0ce809b2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=template&id=0ce809b2&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=template&id=0ce809b2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_template_id_0ce809b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-info.vue?vue&type=template&id=0ce809b2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/new_form_comp/land-info.vue?vue&type=template&id=0ce809b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_template_id_0ce809b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_info_vue_vue_type_template_id_0ce809b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/applicant-defendant.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/applicant-defendant.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applicant_defendant_vue_vue_type_template_id_7ba9600f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicant-defendant.vue?vue&type=template&id=7ba9600f&scoped=true& */ "./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=template&id=7ba9600f&scoped=true&");
/* harmony import */ var _applicant_defendant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applicant-defendant.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _applicant_defendant_vue_vue_type_style_index_0_id_7ba9600f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css& */ "./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _applicant_defendant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _applicant_defendant_vue_vue_type_template_id_7ba9600f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _applicant_defendant_vue_vue_type_template_id_7ba9600f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ba9600f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/old_form_comp/applicant-defendant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./applicant-defendant.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_style_index_0_id_7ba9600f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=style&index=0&id=7ba9600f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_style_index_0_id_7ba9600f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_style_index_0_id_7ba9600f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_style_index_0_id_7ba9600f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_style_index_0_id_7ba9600f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=template&id=7ba9600f&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=template&id=7ba9600f&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_template_id_7ba9600f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./applicant-defendant.vue?vue&type=template&id=7ba9600f&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/applicant-defendant.vue?vue&type=template&id=7ba9600f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_template_id_7ba9600f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_applicant_defendant_vue_vue_type_template_id_7ba9600f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/application-preview.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/application-preview.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_preview_vue_vue_type_template_id_a3a2e118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-preview.vue?vue&type=template&id=a3a2e118&scoped=true& */ "./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=template&id=a3a2e118&scoped=true&");
/* harmony import */ var _application_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-preview.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _application_preview_vue_vue_type_style_index_0_id_a3a2e118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css& */ "./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _application_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _application_preview_vue_vue_type_template_id_a3a2e118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _application_preview_vue_vue_type_template_id_a3a2e118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a3a2e118",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/old_form_comp/application-preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./application-preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_style_index_0_id_a3a2e118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=style&index=0&id=a3a2e118&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_style_index_0_id_a3a2e118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_style_index_0_id_a3a2e118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_style_index_0_id_a3a2e118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_style_index_0_id_a3a2e118_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=template&id=a3a2e118&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=template&id=a3a2e118&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_template_id_a3a2e118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./application-preview.vue?vue&type=template&id=a3a2e118&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/application-preview.vue?vue&type=template&id=a3a2e118&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_template_id_a3a2e118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_preview_vue_vue_type_template_id_a3a2e118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/documents.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/documents.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _documents_vue_vue_type_template_id_5018cebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents.vue?vue&type=template&id=5018cebe&scoped=true& */ "./resources/js/components/Application/old_form_comp/documents.vue?vue&type=template&id=5018cebe&scoped=true&");
/* harmony import */ var _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/old_form_comp/documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _documents_vue_vue_type_style_index_0_id_5018cebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css& */ "./resources/js/components/Application/old_form_comp/documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _documents_vue_vue_type_template_id_5018cebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _documents_vue_vue_type_template_id_5018cebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5018cebe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/old_form_comp/documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/documents.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/documents.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_style_index_0_id_5018cebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=style&index=0&id=5018cebe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_style_index_0_id_5018cebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_style_index_0_id_5018cebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_style_index_0_id_5018cebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_style_index_0_id_5018cebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/documents.vue?vue&type=template&id=5018cebe&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/documents.vue?vue&type=template&id=5018cebe&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_5018cebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=template&id=5018cebe&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/documents.vue?vue&type=template&id=5018cebe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_5018cebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_5018cebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/kharij-owner.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/kharij-owner.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kharij_owner_vue_vue_type_template_id_44cbc27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kharij-owner.vue?vue&type=template&id=44cbc27c&scoped=true& */ "./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=template&id=44cbc27c&scoped=true&");
/* harmony import */ var _kharij_owner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kharij-owner.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _kharij_owner_vue_vue_type_style_index_0_id_44cbc27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css& */ "./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _kharij_owner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _kharij_owner_vue_vue_type_template_id_44cbc27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _kharij_owner_vue_vue_type_template_id_44cbc27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44cbc27c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/old_form_comp/kharij-owner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./kharij-owner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_style_index_0_id_44cbc27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=style&index=0&id=44cbc27c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_style_index_0_id_44cbc27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_style_index_0_id_44cbc27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_style_index_0_id_44cbc27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_style_index_0_id_44cbc27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=template&id=44cbc27c&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=template&id=44cbc27c&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_template_id_44cbc27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./kharij-owner.vue?vue&type=template&id=44cbc27c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/kharij-owner.vue?vue&type=template&id=44cbc27c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_template_id_44cbc27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_kharij_owner_vue_vue_type_template_id_44cbc27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/land-ownership.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/land-ownership.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _land_ownership_vue_vue_type_template_id_4492b518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./land-ownership.vue?vue&type=template&id=4492b518& */ "./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=template&id=4492b518&");
/* harmony import */ var _land_ownership_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./land-ownership.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _land_ownership_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _land_ownership_vue_vue_type_template_id_4492b518___WEBPACK_IMPORTED_MODULE_0__["render"],
  _land_ownership_vue_vue_type_template_id_4492b518___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/old_form_comp/land-ownership.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-ownership.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=template&id=4492b518&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=template&id=4492b518& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_template_id_4492b518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-ownership.vue?vue&type=template&id=4492b518& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/land-ownership.vue?vue&type=template&id=4492b518&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_template_id_4492b518___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_template_id_4492b518___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/representative.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/representative.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _representative_vue_vue_type_template_id_2b1d3104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./representative.vue?vue&type=template&id=2b1d3104& */ "./resources/js/components/Application/old_form_comp/representative.vue?vue&type=template&id=2b1d3104&");
/* harmony import */ var _representative_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./representative.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/old_form_comp/representative.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _representative_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _representative_vue_vue_type_template_id_2b1d3104___WEBPACK_IMPORTED_MODULE_0__["render"],
  _representative_vue_vue_type_template_id_2b1d3104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/old_form_comp/representative.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/representative.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/representative.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_representative_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./representative.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/representative.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_representative_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/representative.vue?vue&type=template&id=2b1d3104&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/representative.vue?vue&type=template&id=2b1d3104& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_representative_vue_vue_type_template_id_2b1d3104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./representative.vue?vue&type=template&id=2b1d3104& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/representative.vue?vue&type=template&id=2b1d3104&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_representative_vue_vue_type_template_id_2b1d3104___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_representative_vue_vue_type_template_id_2b1d3104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/submission.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/submission.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _submission_vue_vue_type_template_id_5364a2b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submission.vue?vue&type=template&id=5364a2b3&scoped=true& */ "./resources/js/components/Application/old_form_comp/submission.vue?vue&type=template&id=5364a2b3&scoped=true&");
/* harmony import */ var _submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submission.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/old_form_comp/submission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _submission_vue_vue_type_style_index_0_id_5364a2b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css& */ "./resources/js/components/Application/old_form_comp/submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _submission_vue_vue_type_template_id_5364a2b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _submission_vue_vue_type_template_id_5364a2b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5364a2b3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/old_form_comp/submission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/submission.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/submission.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./submission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_style_index_0_id_5364a2b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=style&index=0&id=5364a2b3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_style_index_0_id_5364a2b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_style_index_0_id_5364a2b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_style_index_0_id_5364a2b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_style_index_0_id_5364a2b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/old_form_comp/submission.vue?vue&type=template&id=5364a2b3&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Application/old_form_comp/submission.vue?vue&type=template&id=5364a2b3&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_template_id_5364a2b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./submission.vue?vue&type=template&id=5364a2b3&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/old_form_comp/submission.vue?vue&type=template&id=5364a2b3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_template_id_5364a2b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_submission_vue_vue_type_template_id_5364a2b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ }),

/***/ "./resources/js/helpers/JomiCalculator.js":
/*!************************************************!*\
  !*** ./resources/js/helpers/JomiCalculator.js ***!
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
var JomiCalculator = /*#__PURE__*/function () {
  function JomiCalculator() {
    _classCallCheck(this, JomiCalculator);
  }
  _createClass(JomiCalculator, [{
    key: "get_acher_value",
    value: function get_acher_value(jommi_unit, jomi_amount) {
      // console.log(typeof jomi_amount);
      // 	jommi_unit 1 =>  একর
      // 	jommi_unit 2 >  শতক
      var jomi_amount_str = jomi_amount.toString();
      if (jommi_unit == 1) {
        return Number(jomi_amount).toFixed(4);
        // if (jomi_amount_str.indexOf('.') !== -1) {
        //
        //     let jomi_amount_split = jomi_amount_str.split('.');
        //     let step_1 = jomi_amount_split[0] ? parseInt(jomi_amount_split[0]) : 0;
        //     console.log();
        //     let step_2 = '';
        //     if (jomi_amount_split[1]) {
        //         if (parseInt(jomi_amount_split[1]) >= 10) {
        //             step_2 = jomi_amount_split[1]
        //         } else {
        //             if (jomi_amount_split[1].length < 4) {
        //                 step_2 = '0' + parseInt(jomi_amount_split[1])
        //             } else {
        //                 step_2 = jomi_amount_split[1]
        //             }
        //         }
        //     }
        //     let step_3 = step_2.padEnd(4, '0');
        //     let step_4 = step_1 + '.' + step_3
        //     return step_4
        // } else {
        //     let step_1 = jomi_amount_str + '.0000';
        //     return step_1
        // }
      }

      if (jommi_unit == 2) {
        /*
        2 or 02=>0200
        02 or 02=>0200
        002=>0020
        0002=>0002
          10=>1000
        101=>1010
        1010=>1010
        5010=>5010
           */
        if (jomi_amount < 10 && jomi_amount.length <= 2) {
          jomi_amount_str = jomi_amount_str.padStart(2, '0');
        }
        return '0.' + jomi_amount_str.padEnd(4, '0');
      }
    }
  }, {
    key: "get_acher_string",
    value: function get_acher_string(jomi_amount) {
      if (jomi_amount > 0) {
        var jomi_amount_arr_step_1 = jomi_amount.toString().split('.');
        return jomi_amount_arr_step_1[0] + ' একর ' + jomi_amount_arr_step_1[1].substr(0, 2) + ' শতক ' + jomi_amount_arr_step_1[1].substr(2, 2) + ' অযুতাংশ';
      }
      return '';
    }
  }]);
  return JomiCalculator;
}();
/* harmony default export */ __webpack_exports__["default"] = (new JomiCalculator());

/***/ })

}]);