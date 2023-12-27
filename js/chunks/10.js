(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/SearchApplication.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing/SearchApplication.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/ValidationFile */ "./resources/js/helpers/ValidationFile.js");
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/AttachmentMachine */ "./resources/js/helpers/AttachmentMachine.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-bootstrap-datetimepicker */ "./node_modules/vue-bootstrap-datetimepicker/dist/vue-bootstrap-datetimepicker.js");
/* harmony import */ var vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pc_bootstrap4_datetimepicker_build_css_bootstrap_datetimepicker_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css */ "./node_modules/pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css");
/* harmony import */ var pc_bootstrap4_datetimepicker_build_css_bootstrap_datetimepicker_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pc_bootstrap4_datetimepicker_build_css_bootstrap_datetimepicker_css__WEBPACK_IMPORTED_MODULE_12__);
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
  name: 'SearchApplication',
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('user', ['userInfo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('searchApplication', ['applicationSearchData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('searchApplication', ['fullApplicationSearchData'])),
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a,
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_5__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"],
    datePicker: vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_11___default.a
  },
  data: function data() {
    return {
      tempBaseUrl: "http://localhost:8000/",
      tempDir: "doc31",
      apiBaseURL: "http://localhost:8000/api",
      landPortalOldBaseUrl: process.env.MIX_LAND_OLD_BASE_URL,
      isSearchApplication: false,
      addNumber1: Math.floor(Math.random() * 10),
      addNumber2: Math.floor(Math.random() * 10),
      addNumberResult: 0,
      calculation: '',
      // calculation: addNumberResult,
      searchData: {
        division_id: '',
        app_id: '',
        nid_no: '',
        mobile_no: ''
      },
      getPdfParam: {},
      printPreviewData: '',
      searchResult: {},
      isLoading: true,
      fullPage: true,
      matchData: 1,
      hasNextPage: false,
      disabled: false,
      searchPageObject: '',
      paymentOption: {
        pament_type: '',
        errorPaySlctMsg: 0
      },
      searchResultData: '',
      errorMessage: '',
      suggestedMobileText: '',
      loading_icon: false,
      loading_background_opacity: {
        opacity: '1',
        "pointer-events": ''
      },
      searchPanel: 1,
      is_transaction_payment: '',
      //new add
      srchd_payment_method_wallet_verify: '',
      srchd_tracking_no_verify: '',
      srchd_transaction_no: '',
      wallet_verify_error_area: false,
      wallet_verify_msg: '',
      wallet_verify_err_type: 0,
      is_tried_for_verify: false,
      is_tried_for_cash_cancel: false,
      currentDate: '',
      caseLinkShow: false,
      isPaddingMainContent: true,
      isCancelButtonShow: true,
      isHomeButtonShow: true,
      fileExist: true,
      isInitial: true,
      addMoreDoucment: false,
      required_documents_list: [],
      shortFall_required_documents_list: [],
      shortFallDocs: [],
      shortFallSubmitLastDate: '',
      namonjurReasons: [],
      namonjurDocsText: [],
      //    new added
      config_per_page_amount: "1280",
      reconsideration: {
        isRequestDivShow: true,
        isSunaniRequestDivShow: true,
        request: {
          request_type: '',
          citizen_request: '',
          citizen_attachments: [],
          sunani_type: '',
          sunani_date: '',
          sunani_data_exist: false
        },
        required_documents_list: [],
        reopen_request_type: '',
        existing_request: '',
        sunani_pending_request_info: ''
      },
      // khatian correction
      khatianReconsideration: {
        isRequestDivShow: true,
        fileExist: true,
        isInitial: true,
        request: {
          request_type: '',
          citizen_request: '',
          citizen_attachments: []
        },
        required_documents_list: [],
        reopen_request_type: '',
        existing_request: ''
      },
      disabledDates: {
        to: new Date(Date.now() - 8640000)
      },
      buttonPermissionArr: {
        sunani_btn: true,
        namonjur_btn: true,
        khotian_btn: true,
        short_fall_btn: true
      },
      request_history: '',
      request_history_count: 0,
      documentUrl: '',
      documentBlobUrl: '',
      blobUrl: false,
      docUrl: false,
      documentShowType: '',
      docPreviewActive: false,
      docPreviewBackButton: false,
      testFlag: false,
      datetimeoptions: {
        format: 'YYYY-MM-DD hh:mm A',
        useCurrent: true,
        minDate: new Date(Date.now() - 8640000),
        stepping: 15
      }
    };
  },
  created: function created() {
    if (this.fullApplicationSearchData) {
      this.searchResultData = this.fullApplicationSearchData;
      this.isSearchApplication = true;
    }
  },
  mounted: function mounted() {
    this.currentDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(new Date()).format("YYYY-MM-DD");
    this.setProperties();
    this.getToken();
    var currentUrl = window.location.pathname.split('/');
    if (currentUrl[currentUrl.length - 1] == 'HF12') {
      this.isPaddingMainContent = false;
      this.isCancelButtonShow = false;
      this.isHomeButtonShow = false;
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('user', ['getUserInfo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('searchApplication', ['setSearchApplication'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('tokenState', ['getToken'])), {}, {
    redirection: function redirection() {
      return window.location = '/about';
    },
    // props preset
    setProperties: function setProperties() {
      this.isLoading = false;
      this.addNumberResult = this.addNumber1 + this.addNumber2;
      this.isSearchApplication = typeof this.fullApplicationSearchData.applicationSearchData != 'undefined';
    },
    resetSearchState: function resetSearchState() {
      this.setSearchApplication('');
      this.$router.push({
        path: '/'
      });
    },
    handleShortFallFileDocs: function handleShortFallFileDocs(type, value) {
      this.shortFallDocs[type - 1].files.push({
        file_path: '',
        doc_type: '',
        name: '',
        fileObj: '',
        number_of_pages: ''
      });
    },
    handleNamonjurFileDocs: function handleNamonjurFileDocs(type, value) {
      this.namonjurDocsText[type - 1].files.push({
        file_path: '',
        doc_type: '',
        name: '',
        fileObj: '',
        number_of_pages: ''
      });
    },
    searchApplication: function searchApplication() {
      var _this = this;
      // input data validation
      var validateDataReq = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_4__["default"].validationMechanism(this.$refs.search_form, '.required_field', 'required');
      var validateDataNumber = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_4__["default"].validationMechanism(this.$refs.search_form, '.only_number', 'only_number');
      if (!validateDataReq || !validateDataNumber) {
        return false;
      }

      // math captcha validation
      if (this.addNumberResult != parseInt(this.calculation)) {
        var msg = 'Oops, আপনার  যোগফল ঠিক মতো হয়নি !';
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(this, 'top-end', false, false, 'error', msg);
        this.calculation = '';
        this.searchResultData = '';
        return false;
      }
      if (this.matchData === 2) {
        this.searchData.nid_no = '';
      }
      this.loading_icon = true;
      this.loading_background_opacity.opacity = '.2';
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/search-main-application', this.searchData).then(function (resp) {
        _this.errorMessage = '';
        _this.searchData.mobile_no = '';
        _this.loading_icon = false;
        _this.loading_background_opacity.opacity = '1';
        if (resp.data.data.againSearch && resp.data.data.againSearch == true) {
          _this.matchData = 2; // mismatch
          _this.suggestedMobileText = resp.data.data.suggestedMobileText;
          _this.errorMessage = resp.data.message;
        } else {
          _this.matchData = 1; //matched
          _this.searchPanel = 0;
          _this.setSearchApplication('');
          _this.setSearchApplication(resp.data.data);
          _this.srchd_tracking_no_verify = resp.data.data.applicantInfo.tracking_no;
          _this.isSearchApplication = true;
          _this.searchResultData = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(_this.fullApplicationSearchData);
          if (_this.searchResultData.caseStatusUpdatesDataForOnlineCaseLink != null) {
            if (_this.searchResultData.caseStatusUpdatesDataForOnlineCaseLink.next_status_date < _this.currentDate) {
              _this.caseLinkShow = false;
            } else {
              _this.caseLinkShow = true;
            }
          } else {
            _this.caseLinkShow = true;
          }
          _this.required_documents_list = resp.data.data.required_documents;
          // this.shortFall_required_documents_list = resp.data.data.shortFallDocsText ? resp.data.data.shortFallDocsText : null;
          _this.shortFall_required_documents_list = _this.searchResultData.shortFallDocsText ? _this.searchResultData.shortFallDocsText : null;
          _this.shortFallSubmitLastDate = _this.searchResultData.shortFallSubmitLastDate ? _this.searchResultData.shortFallSubmitLastDate : null;
          _this.buttonPermissionArr.sunani_btn = resp.data.data.buttonPermissionArr.sunani_btn;
          _this.buttonPermissionArr.namonjur_btn = resp.data.data.buttonPermissionArr.namonjur_btn;
          _this.buttonPermissionArr.khotian_btn = resp.data.data.buttonPermissionArr.khotian_btn;
          _this.buttonPermissionArr.short_fall_btn = resp.data.data.buttonPermissionArr.short_fall_btn;
          if (_this.shortFall_required_documents_list != null && _this.shortFall_required_documents_list.length > 0) {
            for (var i = 0; i < _this.shortFall_required_documents_list.length; i++) {
              _this.shortFallDocs.push({
                type: _this.shortFall_required_documents_list[i],
                files: [{
                  file_path: '',
                  doc_type: '',
                  name: '',
                  fileObj: '',
                  number_of_pages: ''
                }]
              });
            }
          }
          _this.namonjurReasons = _this.searchResultData.namonjurReasons ? _this.searchResultData.namonjurReasons : [];

          // this.namonjurDocsText = this.searchResultData.namonjurReasons ? this.searchResultData.namonjurReasons : [];

          if (_this.namonjurReasons.length > 0 && _this.namonjurReasons[0].text != undefined) {
            for (var _i = 0; _i < _this.namonjurReasons[0].text.length; _i++) {
              _this.namonjurDocsText.push({
                type: _this.namonjurReasons[0].text[_i],
                files: [{
                  file_path: '',
                  doc_type: '',
                  name: '',
                  fileObj: '',
                  number_of_pages: ''
                }]
              });
            }
          }
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this, 'top-end', true, true, 'success', resp.data.message);
        }
      })["catch"](function (error) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this, 'top-end', true, true, 'error', error.response.data.message);
        _this.searchData.mobile_no = '';
        _this.loading_icon = false;
        _this.loading_background_opacity.opacity = '1';
        _this.isSearchApplication = false;
        _this.setSearchApplication('');
        _this.calculation = '';
      });
    },
    SpecialTextShowing: function SpecialTextShowing() {
      this.searchResultData.applicationSteps.is_special_order == true;
    },
    PaymentNextProcess: function PaymentNextProcess() {
      var paymentType = 0;
      if (this.searchResultData.paymentAddArray.payment_type == 'SUBMIT') {
        paymentType = 1;
      } else if (this.searchResultData.paymentAddArray.payment_type == 'DCR') {
        paymentType = 2;
      }
      /*
      after upazila -> 1 -> 'after submit applicaton', 0-> 'from search page'
      then 1 -> 'SUBMIT', 2-> 'DCR',  3-> 'SUBMIT_DCR'
      */

      var user_msg = 'আপনাকে পেমেন্টের পেইজে নিয়ে যাওয়া হচ্ছে।';
      _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(this, 'top-end', true, true, 'info', user_msg);
      var selfData = this;
      setTimeout(function () {
        var encryptData = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].encryption(selfData.searchResultData.applicantInfo.id + '#' + selfData.searchResultData.applicantInfo.upazila_id + '#' + 0 + '#' + paymentType + '#' + selfData.searchResultData.applicantInfo.jomi_division_id);
        return selfData.$router.push({
          path: '/payment',
          query: {
            data: encryptData
          }
        });
      }, 2000);
    },
    cancelCashPayment: function cancelCashPayment() {
      var _this2 = this;
      this.loading_icon = true;
      this.loading_background_opacity.opacity = '.2';
      this.wallet_verify_msg = '';
      this.wallet_verify_err_type = 0;
      _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertBox(this, 'আপনি হ্যাঁ বাটনে ক্লিক করলে বর্তমান পেমেন্ট অপশনটি  বাতিল হয়ে পুনরায় পেমেন্ট করার জন্য সকল অপশন পাবেন। ').then(function (res) {
        if (res.isDismissed || res.isDenied) {
          _this2.loading_icon = false;
          _this2.loading_background_opacity.opacity = '1';
          return false;
        }
        var formData = new FormData();
        formData.append('application_id', _this2.searchResultData.applicantInfo.id);
        formData.append('division_id', _this2.searchResultData.applicantInfo.jomi_division_id);
        var self = _this2;
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(_this2.apiBaseURL + '/cash-payment-cancel', formData, {
          headers: _this2.headers
        }).then(function (resp) {
          self.loading_icon = false;
          self.loading_background_opacity.opacity = '1';
          _this2.searchResultData.paymentAddArray = resp.data.data.updatedApplictionData;
          if (resp.data.data.pay_button == 1) {
            _this2.searchResultData.information['pay_button'] = true;
          }
          if (resp.data.data.dcr_pay_button == 1) {
            _this2.searchResultData.information['dcr_pay_button'] = true;
          }
          _this2.setSearchApplication(_this2.searchResultData);
          self.is_tried_for_cash_cancel = true;
        })["catch"](function (error) {
          self.loading_icon = false;
          self.loading_background_opacity.opacity = '1';
          self.is_tried_for_cash_cancel = false;
        });
      });
    },
    cancelPayment: function cancelPayment() {
      var _this3 = this;
      this.loading_icon = true;
      this.loading_background_opacity.opacity = '.2';
      this.wallet_verify_msg = '';
      this.wallet_verify_err_type = 0;
      _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertBox(this, 'আপনি হ্যাঁ বাটনে ক্লিক করলে বর্তমান পেমেন্ট অপশনটি  বাতিল হয়ে পুনরায় পেমেন্ট করার জন্য সকল অপশন পাবেন।').then(function (res) {
        if (res.isDismissed || res.isDenied) {
          _this3.loading_icon = false;
          _this3.loading_background_opacity.opacity = '1';
          return false;
        }
        var formData = new FormData();
        formData.append('application_id', _this3.searchResultData.applicantInfo.id);
        formData.append('division_id', _this3.searchResultData.applicantInfo.jomi_division_id);
        formData.append('payment_type', _this3.searchResultData.paymentAddArray.payment_type);
        formData.append('payment_id', _this3.searchResultData.paymentAddArray.payment_info_data.id);
        var self = _this3;
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(_this3.apiBaseURL + '/payment-cancel', formData, {
          headers: _this3.headers
        }).then(function (resp) {
          self.loading_icon = false;
          self.loading_background_opacity.opacity = '1';
          self.wallet_verify_msg = resp.data.data.msg;
          self.wallet_verify_err_type = 1;
          self.srchd_payment_method_wallet_verify = '';
          self.srchd_tracking_no_verify = '';
          self.srchd_transaction_no = '';
          _this3.searchResultData.paymentAddArray.payment_info_data.status = resp.data.data.status;
          if (resp.data.data.payment_type == 'SUBMIT') {
            _this3.searchResultData.information['pay_button'] = true;
            _this3.searchResultData.information.txt_0 = "আপনার আবেদনটিতে কার্যক্রম গ্রহণ করার জন্য আবেদন ফি প্রদান করা হয়নি। আপনি যদি আবেদন ফি (" + _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].convert2Bangla(resp.data.data.amount) + "টাকা) প্রদান করতে চান তাহলে নিম্নোক্ত বাটনে ক্লিক করুন।";
          }
          if (resp.data.data.payment_type == 'DCR' || resp.data.data.payment_type == 'SUBMIT_DCR') {
            _this3.searchResultData.information['dcr_pay_button'] = true;
            // this.searchResultData.information.txt_0 = "আপনার আবেদনটিতে কার্যক্রম গ্রহণ করার জন্য আবেদন ফি প্রদান করা হয়নি। আপনি যদি ডিসিআর ফি ( "+CommonFunction.convert2Bangla(resp.data.data.amount)+" টাকা) প্রদান করতে চান তাহলে নিম্নোক্ত বাটনে ক্লিক করুন।";
            _this3.searchResultData.information.txt_0 = "আপনার আবেদনটি (" + _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].convert2Bangla(_this3.searchResultData.applicantInfo.id) + ") মঞ্জুর হয়েছে। খতিয়ান চূড়ান্ত করার জন্য ডিসিআর ফি ( " + _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].convert2Bangla(resp.data.data.amount) + " টাকা) প্রদান করতে নিম্নোক্ত বাটনে ক্লিক করুন।";
          }
          _this3.setSearchApplication(_this3.searchResultData);
        })["catch"](function (error) {
          self.srchd_payment_method_wallet_verify = '';
          self.srchd_tracking_no_verify = '';
          self.srchd_transaction_no = '';
          self.loading_icon = false;
          self.loading_background_opacity.opacity = '1';
          self.wallet_verify_msg = error.response.data.data.msg;
          self.wallet_verify_err_type = -1;
        });
      });
    },
    paymentVerify: function paymentVerify() {
      var _this4 = this;
      this.loading_icon = true;
      this.loading_background_opacity.opacity = '.2';
      this.wallet_verify_msg = '';
      this.wallet_verify_err_type = 0;
      _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertBox(this, this.is_transaction_payment != '' && this.is_transaction_payment == 0 ? 'আপনি কি পেমেন্ট বাতিল করার প্রসেসে যেতে চাচ্ছেন?' : 'আপনি কি পেমেন্ট ভেরিফাই করতে চাচ্ছেন?').then(function (res) {
        if (res.isDismissed || res.isDenied) {
          _this4.loading_icon = false;
          _this4.loading_background_opacity.opacity = '1';
          return false;
        }
        if (_this4.is_transaction_payment == 1) {
          var validateDataReq = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_4__["default"].validationMechanism(_this4.$refs.payment_verify_form, '.required_field', 'required');
          if (!validateDataReq) {
            _this4.wallet_verify_error_area = true;
            _this4.loading_icon = false;
            _this4.loading_background_opacity.opacity = '1';
            return false;
          }
        }
        _this4.is_tried_for_verify = true;
        var formData = new FormData();
        formData.append('application_id', _this4.searchResultData.applicantInfo.id);
        formData.append('division_id', _this4.searchResultData.applicantInfo.jomi_division_id);
        formData.append('payment_type', _this4.searchResultData.paymentAddArray.payment_type);
        formData.append('payment_id', _this4.searchResultData.paymentAddArray.payment_info_data.id);
        formData.append('payment_method_wallet_verify', _this4.srchd_payment_method_wallet_verify);
        formData.append('tracking_no_verify', _this4.srchd_tracking_no_verify);
        formData.append('transaction_no', _this4.srchd_transaction_no);
        var self = _this4;
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(_this4.apiBaseURL + '/payment-verify', formData, {
          headers: _this4.headers
        }).then(function (resp) {
          self.loading_icon = false;
          self.loading_background_opacity.opacity = '1';
          self.wallet_verify_msg = resp.data.data.msg;
          self.wallet_verify_err_type = 1;
          self.srchd_payment_method_wallet_verify = '';
          self.srchd_tracking_no_verify = '';
          self.srchd_transaction_no = '';
        })["catch"](function (error) {
          self.srchd_payment_method_wallet_verify = '';
          self.srchd_tracking_no_verify = '';
          self.srchd_transaction_no = '';
          self.loading_icon = false;
          self.loading_background_opacity.opacity = '1';
          self.wallet_verify_msg = error.response.data.data.msg;
          self.wallet_verify_err_type = -1;
        });
      });
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
    againSearch: function againSearch() {
      this.setSearchApplication('');
      this.searchResultData = this.setSearchApplication('');
      this.searchPanel = 1;
      this.searchData.app_id = '';
      this.searchData = {
        division_id: '',
        app_id: '',
        nid_no: '',
        mobile_no: ''
      };
      this.calculation = '';
      this.isSearchApplication = false;
    },
    //input only number with avro input
    onlyNumber: function onlyNumber(event, type) {
      if (type == 'nid' && event.target.value.length < 10) {
        event.target.value = '';
        this.searchData.nid_no = '';
        alert('Please Enter Valid NID Number');
        return false;
      }
      var regex = /^[0-9]*$/;
      var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].convert2English(event.target.value).match(regex);
      if (found == null && type == 'appId') {
        this.searchData.app_id = found;
      }
      if (found == null && type == 'nid') {
        this.searchData.nid_no = found;
      }
    },
    checkValueRequiredMobile: function checkValueRequiredMobile(event) {
      if (event.target.value) {
        var regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
        var found = event.target.value.match(regex);
        if (found == null || found == 0) {
          alert('Please Enter Valid Mobile Number');
          return false;
        }
      }
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
    //    New add
    toggleReqDiv: function toggleReqDiv(type) {
      var _this5 = this;
      if (type == 1 && this.buttonPermissionArr.namonjur_btn || type == 2 && this.buttonPermissionArr.sunani_btn || type == 3 && this.buttonPermissionArr.khotian_btn || type == 4 && this.buttonPermissionArr.short_fall_btn) {
        return false;
      }
      this.reconsideration.request.request_type = type;
      var formData = new FormData();
      formData.append('application_id', this.searchResultData.applicantInfo.id);
      formData.append('division_id', this.searchResultData.applicantInfo.jomi_division_id);
      formData.append('req_type', type);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/check-reconsideration-request', formData).then(function (resp) {
        if (resp.data.status == 200) {
          // console.log(resp.data.data.reconsideration_req_count);
          _this5.reconsideration.existing_request = resp.data.data.reconsideration_req_count;
          _this5.reconsideration.sunani_pending_request_info = resp.data.data.sunani_pending_request;
          if (type == 2 && typeof resp.data.data.sunani_data != 'undefined') {
            var sunani_data = resp.data.data.sunani_data;
            _this5.reconsideration.request.sunani_type = typeof sunani_data.sunani_type != 'undefined' ? sunani_data.sunani_type : '';
            _this5.reconsideration.request.sunani_date = typeof sunani_data.next_status_date != 'undefined' ? sunani_data.next_status_date : '';
            _this5.reconsideration.request.sunani_data_exist = typeof sunani_data.next_status_date != 'undefined' ? true : false;
          }
        }
      })["catch"](function (error) {
        _this5.loading_icon = false;
        console.log(error);
      });
      this.requestHistory(type);
    },
    onShortFallFile: function onShortFallFile(event, file_id, docs_id) {
      var _this6 = this;
      var file = event.target.files[0];
      _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_9__["default"].readFile(file, function (event) {
        if (!event.target.result.match(/\/Type[\s]*\/Page[^s]/g)) {
          // without page
          alert('File format pdf is not valid');
          event.target.value = '';
          return false;
        }
        var pageCount = event.target.result.match(/\/Type[\s]*\/Page[^s]/g).length;
        if (file.size / 1024 > _this6.config_per_page_amount * pageCount) {
          alert('Per page minimum file size exceded');
          event.target.value = '';
          return false;
        }
        _this6.addMoreDoucment = true;
        _this6.fileExist = true;
        _this6.isInitial = false;
        _this6.shortFallDocs[docs_id - 1].files[file_id] = {
          file_path: '',
          doc_type: '',
          name: file.name,
          fileObj: file,
          number_of_pages: pageCount
        };
        _this6.$forceUpdate();
        // this.reconsideration.request.citizen_attachments.push({
        //     file_path: '',
        //     doc_type: '',
        //     name: file.name,
        //     fileObj: file,
        //     number_of_pages: pageCount,
        // });
        setTimeout(function () {
          _this6.isInitial = true;
        }, 1500);
      });
    },
    onNamonjurFileChange: function onNamonjurFileChange(event, file_id, docs_id) {
      var _this7 = this;
      var file = event.target.files[0];
      _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_9__["default"].readFile(file, function (event) {
        if (!event.target.result.match(/\/Type[\s]*\/Page[^s]/g)) {
          // without page
          alert('File format pdf is not valid');
          event.target.value = '';
          return false;
        }
        var pageCount = event.target.result.match(/\/Type[\s]*\/Page[^s]/g).length;
        if (file.size / 1024 > _this7.config_per_page_amount * pageCount) {
          alert('Per page minimum file size exceded');
          event.target.value = '';
          return false;
        }
        // this.addMoreDoucment = true;
        _this7.fileExist = true;
        _this7.isInitial = false;
        _this7.namonjurDocsText[docs_id - 1].files[file_id] = {
          file_path: '',
          doc_type: '',
          name: file.name,
          fileObj: file,
          number_of_pages: pageCount
        };
        _this7.$forceUpdate();
        setTimeout(function () {
          _this7.isInitial = true;
        }, 1500);
      });
    },
    onFileChange: function onFileChange(event) {
      var _this8 = this;
      var file = event.target.files[0];
      _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_9__["default"].readFile(file, function (event) {
        if (!event.target.result.match(/\/Type[\s]*\/Page[^s]/g)) {
          // without page
          alert('File format pdf is not valid');
          event.target.value = '';
          return false;
        }
        var pageCount = event.target.result.match(/\/Type[\s]*\/Page[^s]/g).length;
        if (file.size / 1024 > _this8.config_per_page_amount * pageCount) {
          alert('Per page minimum file size exceded');
          event.target.value = '';
          return false;
        }
        _this8.addMoreDoucment = true;
        _this8.fileExist = true;
        _this8.isInitial = false;
        _this8.reconsideration.request.citizen_attachments.push({
          file_path: '',
          doc_type: '',
          name: file.name,
          fileObj: file,
          number_of_pages: pageCount
        });
        setTimeout(function () {
          _this8.isInitial = true;
        }, 1500);
      });
    },
    removeDocRecord: function removeDocRecord(index) {
      this.reconsideration.request.citizen_attachments.splice(index, 1);
      this.$refs.fileValue.value = '';
      if (this.reconsideration.request.citizen_attachments.length == 0) {
        this.addMoreDoucment = false;
      }
    },
    removeShortFallDocRecord: function removeShortFallDocRecord(fileId, docsID) {
      this.shortFallDocs[docsID - 1].files.splice(fileId, 1);
    },
    removeNamonjurDocRecord: function removeNamonjurDocRecord(fileId, docsID) {
      this.namonjurDocsText[docsID - 1].files.splice(fileId, 1);
    },
    deleteRequest: function deleteRequest(type) {
      this.addMoreDoucment = false;
      if (type == 1 || type == 4) {
        this.reconsideration.request = {
          request_type: '',
          citizen_request: '',
          citizen_attachments: [],
          sunani_type: '',
          sunani_date: '',
          sunani_data_exist: false
        };
        this.shortFallDocs = [], this.namonjurDocsText = [], this.$refs.fileValue.value = '';
      }
      if (type == 2) {
        this.reconsideration.request = {
          request_type: '',
          citizen_request: '',
          citizen_attachments: [],
          sunani_type: '',
          sunani_date: '',
          sunani_data_exist: false
        };
        this.$refs.fileValue.value = '';
      }
      if (type == 3) {
        this.khatianReconsideration.request = {
          request_type: '',
          citizen_request: '',
          citizen_attachments: []
        };
        this.$refs.fileValueForKhatian.value = '';
      }
    },
    submitNamonjurRequest: function submitNamonjurRequest() {
      var isEmptyNamonjurFile = [];
      this.namonjurDocsText.forEach(function (val, index) {
        if (val.files[0].fileObj == '') {
          isEmptyNamonjurFile.push(0);
        }
      });
      if (isEmptyNamonjurFile.length > 0 && isEmptyNamonjurFile.includes(0)) {
        alert('রিকোয়েস্টটি সাবমিট করার জন্য চাহিত সকল কাগজপত্রের ধরণ অনুযায়ী নথি প্রদান করুন। ');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
      this.loading_icon = true;
      this.loading_background_opacity.opacity = '.2';
      if (this.namonjurDocsText.length > 0) {
        this.namonjurAttachmentUpload(0, 0, 'namonjur');
      } else {
        alert('রিকোয়েস্টটি সাবমিট করার জন্য মন্তব্য এবং ডকুমেন্ট প্রদান করুন। ');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
    },
    shortFallSubmitRequest: function shortFallSubmitRequest() {
      var isEmptyShortFile = [];
      this.shortFallDocs.forEach(function (val, index) {
        if (val.files[0].fileObj == '') {
          isEmptyShortFile.push(0);
        }
      });
      if (isEmptyShortFile.length > 0 && isEmptyShortFile.includes(0)) {
        alert('রিকোয়েস্টটি সাবমিট করার জন্য চাহিত সকল কাগজপত্রের ধরণ অনুযায়ী নথি প্রদান করুন। ');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
      this.loading_icon = true;
      this.loading_background_opacity.opacity = '.2';
      if (this.shortFallDocs.length > 0) {
        this.shortFallAttachmentUpload(0, 0, 'shortfall');
      } else {
        alert('রিকোয়েস্টটি সাবমিট করার জন্য মন্তব্য এবং ডকুমেন্ট প্রদান করুন। ');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
    },
    customDateFormat: function customDateFormat(date) {
      return moment__WEBPACK_IMPORTED_MODULE_8___default()(date).format('YYYY-MM-DD');
    },
    customDateFormat2: function customDateFormat2(date) {
      return moment__WEBPACK_IMPORTED_MODULE_8___default()(date).format('DD-MM-YYYY');
    },
    customDateTimeFormat: function customDateTimeFormat(date) {
      return moment__WEBPACK_IMPORTED_MODULE_8___default()(date).format('DD-MM-YYYY h:mm a');
    },
    attachmentUpload: function attachmentUpload() {
      var _arguments = arguments,
        _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var fileComplete, type, citizen_attachments, fileData, formData, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fileComplete = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
                type = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : null;
                _context.prev = 2;
                citizen_attachments = _this9.reconsideration.request.citizen_attachments;
                fileData = citizen_attachments[fileComplete];
                formData = new FormData();
                formData.append('file', fileData.fileObj);
                formData.append('index', JSON.stringify(fileComplete));
                _context.next = 10;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(_this9.apiBaseURL + '/tmp-new-store', formData, {
                  headers: _this9.headers
                });
              case 10:
                response = _context.sent;
                fileData.file_path = response.data.data.filePath;
                if (fileComplete + 1 < citizen_attachments.length) {
                  fileComplete++;
                  _this9.attachmentUpload(fileComplete, type);
                } else if (fileComplete + 1 == citizen_attachments.length) {
                  _this9.requestToSubmit(type);
                }
                _context.next = 21;
                break;
              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);
                console.log("Error catch for try : " + _context.t0);
                console.log("Error catch for try : " + _context.t0.lineNumber);
                console.log("Error catch for try : " + _context.t0.stack);
                console.log("Error catch for try : " + _context.t0.line);
              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 15]]);
      }))();
    },
    shortFallAttachmentUpload: function shortFallAttachmentUpload() {
      var _arguments2 = arguments,
        _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var fileArr, fileComplete, type, citizen_attachments, fileData, formData, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fileArr = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : 0;
                fileComplete = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 0;
                type = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : null;
                _context2.prev = 3;
                citizen_attachments = _this10.shortFallDocs;
                fileData = citizen_attachments[fileArr].files[fileComplete];
                formData = new FormData();
                formData.append('file', fileData.fileObj);
                formData.append('index', JSON.stringify(fileComplete));
                _context2.next = 11;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(_this10.apiBaseURL + '/tmp-new-store', formData, {
                  headers: _this10.headers
                });
              case 11:
                response = _context2.sent;
                fileData.file_path = response.data.data.filePath;
                if (fileComplete + 1 < citizen_attachments[fileArr].files.length) {
                  fileComplete++;
                  _this10.shortFallAttachmentUpload(fileArr, fileComplete, type);
                } else if (fileComplete + 1 == citizen_attachments[fileArr].files.length && fileArr + 1 < citizen_attachments.length) {
                  fileArr++;
                  fileComplete = 0;
                  _this10.shortFallAttachmentUpload(fileArr, fileComplete, type);
                } else if (fileArr + 1 == citizen_attachments.length) {
                  _this10.requestToSubmit(type);
                }
                _context2.next = 22;
                break;
              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](3);
                console.log("Error catch for try : " + _context2.t0);
                console.log("Error catch for try : " + _context2.t0.lineNumber);
                console.log("Error catch for try : " + _context2.t0.stack);
                console.log("Error catch for try : " + _context2.t0.line);
              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 16]]);
      }))();
    },
    namonjurAttachmentUpload: function namonjurAttachmentUpload() {
      var _arguments3 = arguments,
        _this11 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var fileArr, fileComplete, type, citizen_attachments, fileData, formData, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fileArr = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : 0;
                fileComplete = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : 0;
                type = _arguments3.length > 2 && _arguments3[2] !== undefined ? _arguments3[2] : null;
                _context3.prev = 3;
                citizen_attachments = _this11.namonjurDocsText;
                fileData = citizen_attachments[fileArr].files[fileComplete];
                formData = new FormData();
                formData.append('file', fileData.fileObj);
                formData.append('index', JSON.stringify(fileComplete));
                _context3.next = 11;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(_this11.apiBaseURL + '/tmp-new-store', formData, {
                  headers: _this11.headers
                });
              case 11:
                response = _context3.sent;
                fileData.file_path = response.data.data.filePath;
                if (fileComplete + 1 < citizen_attachments[fileArr].files.length) {
                  fileComplete++;
                  _this11.namonjurAttachmentUpload(fileArr, fileComplete, type);
                } else if (fileComplete + 1 == citizen_attachments[fileArr].files.length && fileArr + 1 < citizen_attachments.length) {
                  fileArr++;
                  fileComplete = 0;
                  _this11.namonjurAttachmentUpload(fileArr, fileComplete, type);
                } else if (fileArr + 1 == citizen_attachments.length) {
                  _this11.requestToSubmit(type);
                }
                _context3.next = 22;
                break;
              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](3);
                console.log("Error catch for try : " + _context3.t0);
                console.log("Error catch for try : " + _context3.t0.lineNumber);
                console.log("Error catch for try : " + _context3.t0.stack);
                console.log("Error catch for try : " + _context3.t0.line);
              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 16]]);
      }))();
    },
    submitSunaniRequest: function submitSunaniRequest() {
      var _this12 = this;
      this.loading_icon = true;
      this.loading_background_opacity.opacity = '.2';
      var formData = new FormData();
      formData.append('reconsideration_request', JSON.stringify(this.reconsideration.request));
      formData.append('application_id', this.searchResultData.applicantInfo.id);
      formData.append('division_id', this.searchResultData.applicantInfo.jomi_division_id);
      if (this.reconsideration.request.citizen_request == '') {
        alert('রিকোয়েস্টটি সাবমিট করার জন্য মন্তব্য প্রদান করুন। ');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
      if (this.reconsideration.request.sunani_date == '') {
        alert('শুনানির জন্য আপনার কাঙ্খিত তারিখ ও সময় নির্বাচন করুন।');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
      if (this.reconsideration.request.sunani_type == '') {
        alert('রিকোয়েস্টটি সাবমিট করার জন্য শুনানির ধরণ নির্বাচন করুন। ');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/sunani-request-store', formData).then(function (resp) {
        if (resp.data.status == 200) {
          _this12.resetReconsiderationRequest();
          // this.reconsideration.isSunaniRequestDivShow = false;
          _this12.loading_icon = false;
          _this12.loading_background_opacity.opacity = '1';
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this12, 'top-end', true, true, 'success', resp.data.message);
        } else {
          _this12.loading_icon = false;
          _this12.loading_background_opacity.opacity = '1';
          console.log(resp.data.message);
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this12, 'top-end', true, true, 'error', resp.data.message);
        }
        _this12.$refs.sunaniModalCls.click();
      })["catch"](function (error) {
        _this12.loading_icon = false;
        _this12.loading_background_opacity.opacity = '1';
        _this12.$refs.sunaniModalCls.click();
        console.log(error);
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this12, 'top-end', true, true, 'error', resp.data.message);
      });
      return;
    },
    resetReconsiderationRequest: function resetReconsiderationRequest() {
      this.reconsideration.isRequestDivShow = true;
      this.reconsideration.isSunaniRequestDivShow = true;
      this.reconsideration.request.request_type = '';
      this.reconsideration.request.citizen_request = '';
      this.reconsideration.request.citizen_attachments = [];
      this.reconsideration.request.sunani_type = '';
      this.reconsideration.request.sunani_date = '';
      this.reconsideration.required_documents_list = [];
      this.reconsideration.request_type_list = [];
      this.reconsideration.existing_request = '';
      this.isInitial = true;
    },
    requestToSubmit: function requestToSubmit(type) {
      var _this13 = this;
      // if(type != 'shortfall'){
      //     var validateDataReq = ValidationFile.validationMechanism(this.$refs.namonjurModal, '.required_field', 'required');
      //     if (!validateDataReq) {
      //         alert('সকল প্রয়োজনীয় তথ্যাদি প্রদান করুন ');
      //         this.loading_icon = false;
      //         this.loading_background_opacity.opacity = '1';
      //         return false;
      //     }
      // }
      if (type == 'shortfall') {
        this.reconsideration.request.citizen_attachments = this.shortFallDocs;
        this.shortFallDocs = [];
      } else if (type == 'namonjur') {
        this.reconsideration.request.citizen_attachments = this.namonjurDocsText;
        this.namonjurDocsText = [];
      }
      var formData = new FormData();
      formData.append('reconsideration_request', JSON.stringify(this.reconsideration.request));
      formData.append('application_id', this.searchResultData.applicantInfo.id);
      formData.append('division_id', this.searchResultData.applicantInfo.jomi_division_id);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/reconsideration-request-store', formData).then(function (resp) {
        if (resp.data.status == 200) {
          _this13.resetReconsiderationRequest();
          _this13.loading_icon = false;
          _this13.loading_background_opacity.opacity = '1';
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this13, 'top-end', true, true, 'success', resp.data.message);
        } else {
          _this13.loading_icon = false;
          console.log(resp.data.message);
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this13, 'top-end', true, true, 'error', resp.data.message);
        }
        if (type == 'shortfall') {
          _this13.$refs.shortFallAppModalCls.click();
        } else {
          _this13.$refs.naMonjurModalCls.click();
        }
      })["catch"](function (error) {
        _this13.loading_icon = false;
        console.log(error);
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this13, 'top-end', true, true, 'error', resp.data.message);
      });
      return;
    },
    // khatian correction
    khCorrtoggleReqDiv: function khCorrtoggleReqDiv(type) {
      var _this14 = this;
      this.khatianReconsideration.request.request_type = type;
      var formData = new FormData();
      formData.append('application_id', this.searchResultData.applicantInfo.id);
      formData.append('division_id', this.searchResultData.applicantInfo.jomi_division_id);
      formData.append('req_type', type);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/check-reconsideration-request', formData).then(function (resp) {
        if (resp.data.status == 200) {
          _this14.khatianReconsideration.existing_request = resp.data.data.reconsideration_req_count;
          _this14.reconsideration.sunani_pending_request_info = resp.data.data.sunani_pending_request;
        }
      })["catch"](function (error) {
        _this14.loading_icon = false;
        console.log(error);
      });
      this.requestHistory(type);
    },
    requestHistory: function requestHistory(type) {
      var _this15 = this;
      this.khatianReconsideration.request.request_type = type;
      var formData = new FormData();
      formData.append('application_id', this.searchResultData.applicantInfo.id);
      formData.append('division_id', this.searchResultData.applicantInfo.jomi_division_id);
      formData.append('req_type', type);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/check-reconsideration-request-history', formData).then(function (resp) {
        if (resp.data.status == 200) {
          _this15.request_history = resp.data.data.reconsideration_req_history;
          _this15.request_history_count = resp.data.data.reconsideration_req_history_count;
        }
      })["catch"](function (error) {
        _this15.loading_icon = false;
        console.log(error);
      });
    },
    onFileChangeForKhCorr: function onFileChangeForKhCorr(event) {
      var _this16 = this;
      var file = event.target.files[0];
      _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_9__["default"].readFile(file, function (event) {
        if (!event.target.result.match(/\/Type[\s]*\/Page[^s]/g)) {
          // without page
          alert('File format pdf is not valid');
          event.target.value = '';
          return false;
        }
        var pageCount = event.target.result.match(/\/Type[\s]*\/Page[^s]/g).length;
        if (file.size / 1024 > _this16.config_per_page_amount * pageCount) {
          alert('Per page minimum file size exceded');
          event.target.value = '';
          return false;
        }
        _this16.khatianReconsideration.fileExist = true;
        _this16.khatianReconsideration.isInitial = false;
        _this16.addMoreDoucment = true;
        _this16.khatianReconsideration.request.citizen_attachments.push({
          file_path: '',
          doc_type: '',
          name: file.name,
          fileObj: file,
          number_of_pages: pageCount
        });
        setTimeout(function () {
          _this16.khatianReconsideration.isInitial = true;
        }, 1500);
      });
    },
    khCorrRemoveDocRecord: function khCorrRemoveDocRecord(index) {
      this.khatianReconsideration.request.citizen_attachments.splice(index, 1);
      this.$refs.fileValueForKhatian.value = '';
      if (this.khatianReconsideration.request.citizen_attachments.length == 0) {
        this.addMoreDoucment = false;
      }
    },
    khCorrSubmitRequest: function khCorrSubmitRequest() {
      this.loading_icon = true;
      this.loading_background_opacity.opacity = '.5';
      if (this.khatianReconsideration.request.citizen_attachments.length > 0) {
        this.khCorrAttachmentUpload(0);
      } else {
        this.khCorrrequestToSubmit();
      }
    },
    khCorrAttachmentUpload: function khCorrAttachmentUpload() {
      var _arguments4 = arguments,
        _this17 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var fileComplete, citizen_attachments, fileData, formData, response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                fileComplete = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : 0;
                _context4.prev = 1;
                citizen_attachments = _this17.khatianReconsideration.request.citizen_attachments;
                fileData = citizen_attachments[fileComplete];
                formData = new FormData();
                formData.append('file', fileData.fileObj);
                formData.append('index', JSON.stringify(fileComplete));
                _context4.next = 9;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(_this17.apiBaseURL + '/tmp-new-store', formData, {
                  headers: _this17.headers
                });
              case 9:
                response = _context4.sent;
                fileData.file_path = response.data.data.filePath;
                if (fileComplete + 1 < citizen_attachments.length) {
                  fileComplete++;
                  _this17.khCorrAttachmentUpload(fileComplete);
                } else if (fileComplete + 1 == citizen_attachments.length) {
                  _this17.khCorrrequestToSubmit();
                }
                _context4.next = 20;
                break;
              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](1);
                console.log("Error catch for try : " + _context4.t0);
                console.log("Error catch for try : " + _context4.t0.lineNumber);
                console.log("Error catch for try : " + _context4.t0.stack);
                console.log("Error catch for try : " + _context4.t0.line);
              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 14]]);
      }))();
    },
    khCorrrequestToSubmit: function khCorrrequestToSubmit() {
      var _this18 = this;
      var validateDataReq = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_4__["default"].validationMechanism(this.$refs.khatianCorrModal, '.required_field', 'required');
      if (!validateDataReq) {
        alert('সকল প্রয়োজনীয় তথ্যাদি প্রদান করুন ');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
      var formData = new FormData();
      formData.append('reconsideration_request', JSON.stringify(this.khatianReconsideration.request));
      formData.append('application_id', this.searchResultData.applicantInfo.id);
      formData.append('division_id', this.searchResultData.applicantInfo.jomi_division_id);
      if (this.khatianReconsideration.request.citizen_request == '') {
        alert('রিকোয়েস্টটি সাবমিট করার জন্য মন্তব্য প্রদান করুন। ');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
      if (this.khatianReconsideration.request.citizen_attachments == '') {
        alert('রিকোয়েস্টটি সাবমিট করার জন্য ডকুমেন্ট প্রদান করুন। ');
        this.loading_icon = false;
        this.loading_background_opacity.opacity = '1';
        return false;
      }
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header(this.headers).post(this.apiBaseURL + '/khatian_correc-reconsideration-request-store', formData).then(function (resp) {
        if (resp.data.status == 200) {
          _this18.resetKhatiaCorrReconsiderationRequest();
          _this18.loading_icon = false;
          _this18.loading_background_opacity.opacity = '1';
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this18, 'top-end', true, true, 'success', resp.data.message);
        } else {
          _this18.loading_icon = false;
          console.log(resp.data.message);
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this18, 'top-end', true, true, 'error', resp.data.message);
        }
        _this18.$refs.khatianCorrModalCls.click();
      })["catch"](function (error) {
        _this18.loading_icon = false;
        console.log(error);
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(_this18, 'top-end', true, true, 'error', resp.data.message);
      });
      return;
    },
    resetKhatiaCorrReconsiderationRequest: function resetKhatiaCorrReconsiderationRequest() {
      this.khatianReconsideration.isRequestDivShow = true;
      this.khatianReconsideration.request.request_type = '';
      this.khatianReconsideration.request.citizen_request = '';
      this.khatianReconsideration.request.citizen_attachments = [];
      this.khatianReconsideration.required_documents_list = [];
      this.khatianReconsideration.request_type_list = [];
      this.khatianReconsideration.existing_request = '';
      this.khatianReconsideration.isInitial = true;
    },
    docNameSlice: function docNameSlice(docName) {
      var name = docName.split('.')[0];
      if (name.length > 15) {
        var extension = docName.split('.')[1];
        var shortName = name.slice(0, 15);
        var finalName = shortName + '.....' + extension;
        return finalName;
      } else {
        return docName;
      }
    },
    displayFile: function displayFile(event, value, type) {
      var _this19 = this;
      event.preventDefault();
      this.docPreviewActive = true;
      this.docPreviewBackButton = true;
      this.documentShowType = 3;
      if (value.fileObj) {
        _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_9__["default"].getBlobUrl(value.fileObj, function (blobUrl) {
          if (blobUrl) {
            _this19.documentBlobUrl = blobUrl;
            _this19.blobUrl = true;
            _this19.$refs['document-view-modal'].show();
            console.log(blobUrl);
          } else {
            _this19.docUrl = false;
            _this19.blobUrl = false;
            _this19.$refs['document-view-modal'].hide();
          }
        });
      } else if (fileObj.file_path) {
        this.documentBlobUrl = this.tempBaseUrl + this.tempDir + '/temp_uploaded_files/' + fileObj.file_path;
        this.blobUrl = true;
        this.$refs['document-view-modal'].show();
      } else if (fileObj) {
        this.documentBlobUrl = fileObj;
        this.blobUrl = true;
        this.$refs['document-view-modal'].show();
      }
    },
    docPreviewClose: function docPreviewClose() {
      this.docPreviewActive = false;
      this.docPreviewBackButton = false;
    },
    // dateTimeFormate(value,type){
    //     if (value && type=='only_date') {
    //         return CommonFunction.convert2Bangla(moment(String(value)).format('MM-DD-YYYY'))
    //     }
    //     if (value && type=='only_time') {
    //         return CommonFunction.convert2Bangla(moment(String(value)).format('hh:mm'))
    //     }
    // },
    dateTimeFormate: function dateTimeFormate(value, type) {
      if (value && type == 'only_date') {
        return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].convert2Bangla(moment__WEBPACK_IMPORTED_MODULE_8___default()(String(value)).format('MM-DD-YYYY'));
      }
      if (value && type == 'only_time') {
        return moment__WEBPACK_IMPORTED_MODULE_8___default()(String(value)).format('HH') != '00' ? _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].convert2Bangla(moment__WEBPACK_IMPORTED_MODULE_8___default()(String(value)).format('hh:mm')) : '';
      }
    }
  })
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/SearchApplication.vue?vue&type=template&id=477fa6d6&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing/SearchApplication.vue?vue&type=template&id=477fa6d6& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("main",{staticClass:"main-content"},[_c("div",{staticClass:"page-content","class":{"py-5":_vm.isPaddingMainContent}},[_c("div",{staticClass:"container"},[!_vm.isSearchApplication?_c("div",{ref:"search_form",staticClass:"page-container-sm page-container-custom"},[_vm._m(0),_vm._v(" "),_c("form",{style:_vm.loading_background_opacity,on:{submit:function submit($event){$event.preventDefault();return _vm.searchApplication();}}},[_c("div",{staticClass:"content-body bdr-top-bottom"},[_c("div",{staticClass:"form-group"},[_c("label",[_vm._v("বিভাগ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.searchData.division_id,expression:"searchData.division_id"}],staticClass:"form-control",staticStyle:{"font-size":"14px !important"},attrs:{name:"division",id:"division",required:"",disabled:_vm.matchData==2===true},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.searchData,"division_id",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"",selected:""}},[_vm._v("বিভাগ নির্বাচন করুন")]),_vm._v(" "),_c("option",{attrs:{value:"1"}},[_vm._v("বরিশাল")]),_vm._v(" "),_c("option",{attrs:{value:"2"}},[_vm._v("চট্টগ্রাম")]),_vm._v(" "),_c("option",{attrs:{value:"3"}},[_vm._v("ঢাকা")]),_vm._v(" "),_c("option",{attrs:{value:"4"}},[_vm._v("খুলনা")]),_vm._v(" "),_c("option",{attrs:{value:"5"}},[_vm._v("রাজশাহী")]),_vm._v(" "),_c("option",{attrs:{value:"6"}},[_vm._v("রংপুর")]),_vm._v(" "),_c("option",{attrs:{value:"7"}},[_vm._v("সিলেট")]),_vm._v(" "),_c("option",{attrs:{value:"8"}},[_vm._v("ময়মনসিংহ")])])]),_vm._v(" "),_c("div",{staticClass:"form-group"},[_vm._m(1),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.searchData.app_id,expression:"searchData.app_id"}],staticClass:"form-control required_field input_bangla only_number",attrs:{type:"text",name:"app_id",disabled:_vm.matchData==2===true,id:"app_id",placeholder:"আবেদন আই.ডি লিখুন",required:""},domProps:{value:_vm.searchData.app_id},on:{blur:function blur($event){return _vm.onlyNumber($event,"appId");},input:function input($event){if($event.target.composing)return;_vm.$set(_vm.searchData,"app_id",$event.target.value);}}})]),_vm._v(" "),_vm.matchData==1?_c("div",{staticClass:"form-group"},[_c("label",[_vm._v("জাতীয় পরিচয়পত্র নম্বর")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.searchData.nid_no,expression:"searchData.nid_no"}],staticClass:"form-control required_field input_bangla",attrs:{type:"text",name:"nid_no",disabled:_vm.matchData==2===true,placeholder:"জাতীয় পরিচয়পত্র নম্বর লিখুন",id:"nid_no",required:""},domProps:{value:_vm.searchData.nid_no},on:{blur:function blur($event){return _vm.onlyNumber($event,"nid");},input:function input($event){if($event.target.composing)return;_vm.$set(_vm.searchData,"nid_no",$event.target.value);}}})]):_vm._e(),_vm._v(" "),_vm.matchData==2?_c("div",{staticClass:"form-group"},[_c("label",[_vm._v("মোবাইল নম্বর")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.searchData.mobile_no,expression:"searchData.mobile_no"}],staticClass:"form-control input_bangla",attrs:{type:"text",name:"nid_no",id:"mobile_no",required:""},domProps:{value:_vm.searchData.mobile_no},on:{blur:_vm.checkValueRequiredMobile,input:function input($event){if($event.target.composing)return;_vm.$set(_vm.searchData,"mobile_no",$event.target.value);}}}),_vm._v(" "),_c("small",[_vm._v("সম্ভাব্য মোবাইল নম্বর:\n                                    "+_vm._s(_vm.suggestedMobileText)+"\n                                ")])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"form-group mb-0"},[_c("label",[_vm._v("যোগ করুন ("+_vm._s(_vm.addNumber1)+" + "+_vm._s(_vm.addNumber2)+") ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.calculation,expression:"calculation"}],staticClass:"form-control",attrs:{type:"number",name:"add_count",id:"add_count",placeholder:"এখানে শুধু ইংলিশ সংখ্যা ইনপুট হিসেবে নিবে",required:""},domProps:{value:_vm.calculation},on:{input:function input($event){if($event.target.composing)return;_vm.calculation=$event.target.value;}}})])]),_vm._v(" "),_c("div",{staticClass:"content-footer text-center pt-4"},[_vm.isCancelButtonShow?_c("a",{staticClass:"btn btn-outline-danger btn-simple cancelBtn",on:{click:_vm.resetSearchState}},[_c("i",{staticClass:"fa mr-1 fa-home",attrs:{"aria-hidden":"true"}}),_vm._v(" বাতিল করুন\n                            ")]):_vm._e(),_vm._v(" "),_vm._m(2)])]),_vm._v(" "),_vm.loading_icon?_c("div",{staticClass:"spinner-border text-primary",staticStyle:{position:"absolute",top:"40%",left:"300px","z-index":"9999"},attrs:{role:"status"}},[_c("span",{staticClass:"sr-only"},[_vm._v("Loading...")])]):_vm._e()]):_c("div",{staticClass:"main-content"},[_c("div",{staticClass:"src-container-box mb-5"},[_c("div",{staticClass:"section-title text-center"},[_c("h5",[_vm._v("নামজারী আবেদন নম্বর ("+_vm._s(_vm.convert2Bangla(_vm.searchResultData.applicantInfo.id))+") এর সর্বশেষ অবস্থা")]),_vm._v(" "),_vm.searchResultData.applicantInfo.case_no!=""&&_vm.searchResultData.applicantInfo.case_no?_c("span",[_c("h6",[_vm._v("নামজারি মামলা নম্বর- "+_vm._s(_vm.searchResultData.applicantInfo.case_no))])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"src-status-box-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-lg-7 col-md-12 bdr-right"},[_c("div",{staticClass:"content-body p-4"},[_c("div",{staticClass:"src-user-info"},[_c("div",{staticClass:"user-info-item"},[_c("div",{staticClass:"user-info-title"},[_vm._v("তফসিল")]),_vm._v(" "),_c("a",{attrs:{href:_vm.searchResultData.print_preview_url.application_print_preview,target:"_blank"}},[_c("span",{staticStyle:{cursor:"pointer",color:"#0a6cd6","text-decoration":"underline"}},[_vm._v("তফসিলের তথ্য দেখতে ক্লিক করুন")]),_vm._v(" "),_vm._m(3)])]),_vm._v(" "),_c("div",{staticClass:"user-info-item"},[_c("div",{staticClass:"user-info-title"},[_vm._v("সংশ্লিষ্ট অফিস")]),_vm._v(" "),_c("div",{staticClass:"user-info-desc"},[_vm._v(_vm._s(_vm.searchResultData.app_office_info.officeName))]),_vm._v(" "),_vm.searchResultData.app_office_info.officeMapStatus==1?_c("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],staticClass:"src-status-icon icon-map-link",attrs:{href:_vm.searchResultData.app_office_info.officeMapLocation,target:"_blank",title:"ম্যাপে খুজুন"}},[_c("img",{attrs:{src:"/images/2022/08/icon-google-maps-logo.svg",alt:"img"}})]):_vm._e()]),_vm._v(" "),_vm.searchResultData.applicantInfo.form_type==1||_vm.searchResultData.applicantInfo.form_type==4?_c("span",[_c("div",{staticClass:"user-info-item"},[_c("div",{staticClass:"user-info-title"},[_vm._v("আবেদনকারীর নাম")]),_vm._v(" "),_c("div",{staticClass:"user-info-desc"},[_vm._v(_vm._s(_vm.searchResultData.applicantInfo.name)+" (\n                                                        "+_vm._s(_vm.searchResultData.metaDataCheck==1?"গ্রহীতা":"প্রতিনিধি")+"\n                                                        )\n                                                    ")])])]):_c("span",[_c("div",{staticClass:"user-info-item"},[_c("div",{staticClass:"user-info-title"},[_vm._v("আবেদনকারীর নাম")]),_vm._v(" "),_c("div",{staticClass:"user-info-desc"},[_vm._v(_vm._s(_vm.searchResultData.applicantInfo.name)+" (\n                                                        "+_vm._s(_vm.searchResultData.applicantInfo.application_citizen_type_id==1?"গ্রহীতা":"প্রতিনিধি")+"\n                                                        )\n                                                    ")])])]),_vm._v(" "),_vm.searchResultData.applicantInfo.case_main_status_id==1&&_vm.searchResultData.applicantInfo.submission_pay_status==0?_c("span",{staticClass:"text-success"},[_vm._v(" নামজারি আবেদন পূরণ হলেও আবেদন ফি ৭০/- টাকা পরিশোধিত হয়নি। আবেদন ফি পরিশোধ করার পরই আবেদনটি ভূমি অফিসে পরবর্তী কার্যক্রম শুরু হবে।")]):_c("span",[_c("div",{staticClass:"user-info-item"},[_c("div",{staticClass:"user-info-title"},[_vm._v("যার কাছে বর্তমানে আছে")]),_vm._v(" "),_vm.searchResultData.userGroups!=""&&_vm.searchResultData.search_type==2?_c("span",[_vm.searchResultData.app_desk_info!=null&&_vm.searchResultData.app_desk_info.name!=""?_c("span",[_c("p",{staticClass:"user-info-desc"},[_vm._v(_vm._s(_vm.searchResultData.app_desk_info.name)+", ")])]):_vm._e()]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.case_main_status_id==31?_c("span",[_vm.searchResultData.applicantInfo.recepent!=""?_c("span",[_c("p",{staticClass:"user-info-desc"},[_vm._v(_vm._s(_vm.searchResultData.applicantInfo.recepent))])]):_vm._e()]):_c("span",[_vm.searchResultData.applicantInfo.recepent!=""?_c("span",[_c("p",{staticClass:"user-info-desc"},[_vm._v(_vm._s(_vm.searchResultData.applicantInfo.recepent)+",")])]):_vm._e()]),_vm._v(" "),_vm.searchResultData.app_desk_info!=null&&_vm.searchResultData.app_desk_info.mobile!=""?_c("span",[_c("p",{staticClass:"user-info-desc"},[_c("i",{staticClass:"fa fa-phone"}),_vm._v(" "+_vm._s(_vm.convert2Bangla(_vm.searchResultData.app_desk_info.mobile))+"\n                                                                    ")])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"user-info-item"},[_c("div",{staticClass:"user-info-title"},[_vm._v("বর্তমান অবস্থা")]),_vm._v(" "),_c("div",{staticClass:"user-info-desc"},[_vm.searchResultData.applicantInfo.case_main_status_id==20&&_vm.searchResultData.applicantInfo.dcr_pay_status==1&&_vm.searchResultData.khotianInfo.number_of_dcr_provided!="undefined"&&_vm.searchResultData.khotianInfo.number_of_dcr_provided>0?_c("span",[_vm._v("\n                                                            ডিসিআর ফি পরিশোধিত "),_c("br"),_c("br")]):_c("span",[_vm._v("\n                                                            "+_vm._s(_vm.searchResultData.applicantInfo.current_status)+" "),_c("br"),_c("br")]),_vm._v(" "),_vm.shortFall_required_documents_list!=null?_c("span",{staticClass:"text-justify"},[_vm._v("\n                                                        আবেদন নিষ্পত্তির জন্য প্রয়োজনীয় তথ্য/দলিলাদির তালিকাঃ\n                                                            "),_vm._l(_vm.shortFall_required_documents_list,function(val,index){return _c("li",{key:index},[_vm._v(_vm._s(_vm.convert2Bangla(++index))+") "+_vm._s(val))]);}),_vm._v(" "),_c("br")],2):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.case_main_status_id==9&&_vm.namonjurReasons.length>0?_c("span",{staticClass:"text-justify"},[_vm._v("\n                                                            না মঞ্জুর এর কারন সুমহ\n                                                            "),_vm.namonjurReasons.length==1?_c("span",_vm._l(_vm.namonjurReasons,function(val,index){return _c("li",{key:index,staticStyle:{"list-style-type":"square"}},[_vm._v("\n                                                                    "+_vm._s(val.reason)+"\n                                                                    "),typeof val.text!="undefined"&&val.text.length>0?_c("ul",_vm._l(val.text,function(reason,key){return _c("li",{key:key},[_vm._v("\n                                                                            "+_vm._s(_vm.convert2Bangla(++key))+") "+_vm._s(reason)+"\n                                                                        ")]);}),0):_vm._e()]);}),0):_c("span",_vm._l(_vm.namonjurReasons,function(val,index){return _c("li",{key:index},[_vm._v("\n                                                                    "+_vm._s(_vm.convert2Bangla(++index))+") "+_vm._s(val.reason)+"\n                                                                ")]);}),0),_vm._v(" "),_c("br")]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.order_statement!=null&&_vm.searchResultData.applicantInfo.order_statement?_c("p",{staticClass:"text-justify",domProps:{innerHTML:_vm._s(_vm.searchResultData.applicantInfo.order_statement)}}):_vm._e(),_vm._v(" "),this.searchResultData.applicantInfo.sunani_type?_c("a",{attrs:{type:"button",href:"#","data-target":this.searchResultData.applicantInfo.sunani_type?"#sunaniDetails":"","data-toggle":"modal"}},[_c("span",{staticClass:"text-sm",staticStyle:{cursor:"pointer",color:"#0a6cd6","text-decoration":"underline"}},[_vm._v("শুনানী সংক্রান্ত বিস্তারিত তথ্য দেখুন")])]):_vm._e()])]),_vm._v(" "),_vm.searchResultData.koronioQuestionAns!=null&&_vm.searchResultData.koronioQuestionAns?_c("div",{staticClass:"user-info-item"},[_vm.searchResultData.koronioQuestionAns.question!=""?_c("div",{staticClass:"user-info-title"},[_vm._v("করণীয় ")]):_vm._e(),_vm._v(" "),_vm.searchResultData.koronioQuestionAns.answer!=""?_c("div",{staticClass:"user-info-desc"},[_c("span",{staticClass:"text-justify"},[_vm._v(_vm._s(_vm.searchResultData.koronioQuestionAns.question))]),_c("br"),_c("br"),_vm._v(" "),_c("p",{staticClass:"text-justify"},[_vm._v("\n                                                            "+_vm._s(_vm.searchResultData.koronioQuestionAns.answer)+"\n                                                        ")])]):_vm._e()]):_vm._e()])])])]),_vm._v(" "),_c("div",{staticClass:"col-lg-5 col-md-12"},[_c("div",{staticClass:"src-content-right p-4"},[_c("div",{staticClass:"src-sec-block mb-4"},[_vm.searchResultData.applicantInfo.case_main_status_id==1?_c("span",[_vm.searchResultData.applicantInfo.submission_pay_status==0?_c("span",[_vm.searchResultData.applicantInfo.is_before_payment==1?_c("span",[_vm._m(4)]):_c("span",[_vm.searchResultData.applicantInfo.sub_pay_method==1?_c("span",[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"tracking_form my-2 mx-3"},[_vm.is_tried_for_cash_cancel==false?_c("div",{staticClass:"col-md-12"},[_c("p",{staticClass:"text-justify m-0"},[_vm._v(" আপনার ক্যাশ পেমেন্ট রিকোয়েস্ট গ্রহণ করা হয়েছে। আপনি সংশ্লিষ্ট উপজেলা ভূমি অফিসে গিয়ে পেমেন্ট সম্পন্ন করতে পারবেন। ")]),_vm._v(" "),_c("p",{staticClass:"text-justify m-0"},[_vm._v(" আপনি চাইলে ক্যাশ পেমেন্ট বাতিল করে অন্য পেমেন্ট অপশন নির্বাচন করতে চাইলে, বাতিল বাটনে ক্লিক করে আবার চেষ্টা করুন। ")]),_vm._v(" "),_c("div",{staticClass:"row text-center"},[_c("div",{staticClass:"col-md-12"},[_c("button",{staticClass:"btn btn-sm",staticStyle:{background:"#c9302c",color:"white",border:"1px solid #c9302c"},on:{click:_vm.cancelCashPayment}},[_vm._v("বাতিল করুন")])])])]):_vm._e(),_vm._v(" "),_vm.is_tried_for_cash_cancel==true?_c("div",{staticClass:"col-md-12"},[_vm.searchResultData.applicantInfo.national_id_no!=""&&_vm.searchResultData.applicantInfo.dob!=""&&_vm.searchResultData.applicantInfo.dob!="0000-00-00"?_c("p",{staticClass:"text-justify m-0"},[_vm._v("আপনার আবেদনটিতে কার্যক্রম গ্রহণ করার জন্য আবেদন ফি প্রদান করা হয়নি। আপনি যদি আবেদন ফি ("+_vm._s(_vm.searchResultData.paymentAddArray.totalPaymentAmount)+" টাকা) প্রদান করতে চান তাহলে নিম্নোক্ত বাটনে ক্লিক করুন।")]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.national_id_no==""||_vm.searchResultData.applicantInfo.dob==""||_vm.searchResultData.applicantInfo.dob=="0000-00-00"?_c("p",{staticClass:"text-justify m-0"},[_vm._v("আপনার আবেদনটিতে কার্যক্রম গ্রহণ করার জন্য আবেদন ফি প্রদান করা হয়নি। আপনি যদি আবেদন ফি ("+_vm._s(_vm.searchResultData.paymentAddArray.totalPaymentAmount)+' টাকা) প্রদান করতে চান তাহলে নিম্নোক্ত "অগ্রসর হউন" বাটনে ক্লিক  করে  আপনার এনআইডি ভেরিফাই করে পেমেন্ট সম্পন্ন করুন। ')]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"mt-2 text-center"},[_vm.searchResultData.applicantInfo.national_id_no==""||_vm.searchResultData.applicantInfo.national_id_no==null||_vm.searchResultData.applicantInfo.dob==""||_vm.searchResultData.applicantInfo.dob==null||_vm.searchResultData.applicantInfo.dob=="0000-00-00"?_c("router-link",{staticClass:"btn btnColor btn-sm",attrs:{to:"/nid-verify/".concat(_vm.searchResultData.applicantInfo.encript_application_id,"/").concat(_vm.searchResultData.applicantInfo.encript_division_id,"/").concat(_vm.searchResultData.applicantInfo.encript_application_citizen_id)}},[_vm._v("অগ্রসর হউন")]):_vm._e()],1)]):_vm._e()])])])])]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.sub_pay_method==0||_vm.searchResultData.applicantInfo.sub_pay_method==2?_c("span",[typeof _vm.searchResultData.paymentAddArray.payment_info_data!="undefined"&&(_vm.searchResultData.paymentAddArray.payment_info_data["status"]==-1||_vm.searchResultData.paymentAddArray.payment_info_data["status"]==0)?_c("span",[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"tracking_form my-2 mx-3 w-100",style:_vm.loading_background_opacity},[_vm.wallet_verify_msg!=""&&_vm.wallet_verify_err_type==1?_c("div",{staticClass:"alert alert-success text-center alert-dismissible fade show",attrs:{role:"alert"}},[_c("strong",[_vm._v(" "+_vm._s(_vm.wallet_verify_msg))]),_vm._v(" "),_vm._m(5)]):_vm._e(),_vm._v(" "),_vm.wallet_verify_msg!=""&&_vm.wallet_verify_err_type==-1?_c("div",{staticClass:"alert alert-danger text-center alert-dismissible fade show",attrs:{role:"alert"}},[_c("strong",[_vm._v(" "+_vm._s(_vm.wallet_verify_msg))]),_vm._v(" "),_vm._m(6)]):_vm._e(),_vm._v(" "),_vm.is_tried_for_verify==false?_c("div",{ref:"payment_verify_form"},[_vm.searchResultData.paymentAddArray.payment_gateway_mesaage.id==2?_c("span",[_c("p",{staticClass:"text-justify m-0 p-2"},[_vm._v("আপনার আবেদনের পেমেন্ট অপেক্ষমান অবস্থায় আছে, আপনি "+_vm._s(_vm.searchResultData.paymentAddArray.payment_gateway_mesaage.name_bn)+" গেটওয়ে নির্বাচন করেছেন।")]),_vm._v(" "),_c("div",{staticClass:"lmt-form-group",staticStyle:{"padding-left":"8px"}},[_c("span",{staticClass:"form-sec-title"},[_vm._v("আপনি ওয়ালেট দিয়ে পেমেন্ট করেছেন?")]),_vm._v(" "),_c("div",{staticClass:"bs_radio"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.is_transaction_payment,expression:"is_transaction_payment"}],staticClass:"form-check-input",attrs:{type:"radio",id:"is_transaction_payment",value:"1"},domProps:{checked:_vm._q(_vm.is_transaction_payment,"1")},on:{change:function change($event){_vm.is_transaction_payment="1";}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"is_transaction_payment"}},[_vm._v("হ্যাঁ")])]),_vm._v(" "),_c("div",{staticClass:"bs_radio"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.is_transaction_payment,expression:"is_transaction_payment"}],staticClass:"form-check-input",attrs:{type:"radio",id:"is_transaction_payment1",value:"0"},domProps:{checked:_vm._q(_vm.is_transaction_payment,"0")},on:{change:function change($event){_vm.is_transaction_payment="0";}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"is_transaction_payment1"}},[_vm._v("না")])])]),_vm._v(" "),_vm.is_transaction_payment==1?_c("span",[_c("div",{staticClass:"form-inline m-2"},[_c("label",{staticClass:"control-label col-md-4",staticStyle:{"padding-left":"0px !important"},attrs:{"for":"payment_method_wallet_verify"}},[_vm._v("ওয়ালেট মেথড")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.srchd_payment_method_wallet_verify,expression:"srchd_payment_method_wallet_verify"}],staticClass:"form-control col-md-8 required_field",attrs:{name:"payment_method_walet",id:"payment_method_wallet_verify",required:""},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.srchd_payment_method_wallet_verify=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:"",selected:"",hidden:""}},[_vm._v(" ওয়ালেট মেথড নির্বাচন করুন ")]),_vm._v(" "),_vm._l(_vm.searchResultData.paymentAddArray.payment_method_on_wallet,function(value,index){return _c("option",{key:index,domProps:{value:value.method_name}},[_vm._v("\n                                                                                                    "+_vm._s(value.method_name_bn)+"\n                                                                                                ")]);})],2)]),_vm._v(" "),_c("div",{staticClass:"form-inline m-2"},[_c("label",{staticClass:"col-md-4 control-label",attrs:{"for":"tracking_no_verify"}},[_vm._v("ট্রেকিং নম্বর")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.srchd_tracking_no_verify,expression:"srchd_tracking_no_verify"}],staticClass:"form-control col-md-8 required_field",attrs:{type:"text",readonly:"",id:"tracking_no_verify",required:""},domProps:{value:_vm.srchd_tracking_no_verify},on:{input:function input($event){if($event.target.composing)return;_vm.srchd_tracking_no_verify=$event.target.value;}}})]),_vm._v(" "),_c("div",{staticClass:"form-inline m-2"},[_c("label",{staticClass:"col-md-4 control-label",attrs:{"for":"transaction_no"}},[_vm._v("ট্রান্সাকশন নম্বর")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.srchd_transaction_no,expression:"srchd_transaction_no"}],staticClass:"form-control col-md-8 required_field",attrs:{type:"text",id:"transaction_no",required:""},domProps:{value:_vm.srchd_transaction_no},on:{input:function input($event){if($event.target.composing)return;_vm.srchd_transaction_no=$event.target.value;}}})]),_vm._v(" "),_vm.wallet_verify_error_area?_c("div",{staticClass:"text-danger"},[_vm._v(" ওয়ালেট মেথড এবং ট্রান্সাকশন নম্বর দিন\n                                                                                        ")]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"m-2 text-center"},[_c("button",{staticClass:"btn btn-sm btnColor",on:{click:_vm.paymentVerify}},[_vm._v("পেমেন্ট ভেরিফাই")])])]):_vm._e(),_vm._v(" "),_vm.is_transaction_payment!=""&&_vm.is_transaction_payment==0?_c("div",{staticClass:"m-2 text-justify"},[_c("p",[_vm._v("আপনি অন্য কোন গেটওয়ে ব্যবহার করে পেমেন্ট করতে চাইলে, নিচের বাটনে ক্লিক করে পরর্বতী প্রসেস সম্পন্ন করুন।")]),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btnColor",on:{click:_vm.paymentVerify}},[_vm._v("পরর্বতী "),_c("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}})])]):_vm._e()]):_c("span",[_c("p",{staticClass:"text-justify m-0 p-2"},[_vm._v("আপনার আবেদনের পেমেন্ট অপেক্ষমান অবস্থায় আছে, আপনি "+_vm._s(_vm.searchResultData.paymentAddArray.payment_gateway_mesaage.name_bn)+" গেটওয়ে নির্বাচন করেছেন।")]),_vm._v(" "),_c("div",{staticClass:"m-2 text-center"},[_c("button",{staticClass:"btn btn-sm btnColor",on:{click:_vm.paymentVerify}},[_vm._v("পেমেন্ট ভেরিফাই")])])])]):_vm._e(),_vm._v(" "),_vm.is_tried_for_verify==true?_c("div",{staticClass:"col-md-12"},[_c("h5",{staticClass:"text-center"},[_vm._v("পেমেন্ট বাতিল করতে নিচের বাটনে ক্লিক করুন। ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-center text-center"},[_c("button",{staticClass:"btn btn-sm",staticStyle:{background:"#c9302c",color:"white",border:"1px solid #c9302c"},on:{click:_vm.cancelPayment}},[_vm._v("বাতিল করুন")])])]):_vm._e()])])])])]):_c("span",[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"tracking_form my-2 mx-3"},[_vm.searchResultData.applicantInfo.national_id_no!=""&&_vm.searchResultData.applicantInfo.dob!=""&&_vm.searchResultData.applicantInfo.dob!="0000-00-00"?_c("p",{staticClass:"text-justify m-0"},[_vm._v("\n                                                                                "+_vm._s(_vm.searchResultData.information.txt_0)+"\n\n                                                                            ")]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.national_id_no==""||_vm.searchResultData.applicantInfo.dob==""||_vm.searchResultData.applicantInfo.dob=="0000-00-00"?_c("p",{staticClass:"text-justify m-0"},[_vm._v("\n                                                                               "+_vm._s(_vm.searchResultData.information.txt_0)+"\n                                                                            ")]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"mt-2 text-center"},[_vm.searchResultData.applicantInfo.national_id_no==""||_vm.searchResultData.applicantInfo.national_id_no==null||_vm.searchResultData.applicantInfo.dob==""||_vm.searchResultData.applicantInfo.dob==null||_vm.searchResultData.applicantInfo.dob=="0000-00-00"?_c("router-link",{staticClass:"btn btnColor btn-sm",attrs:{to:"/nid-verify/".concat(_vm.searchResultData.applicantInfo.encript_application_id,"/").concat(_vm.searchResultData.applicantInfo.encript_division_id,"/").concat(_vm.searchResultData.applicantInfo.encript_application_citizen_id)}},[_vm._v("অগ্রসর হউন")]):_vm._e()],1)])])])])])]):_vm._e()])]):_c("span",[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row d-block"},[_c("div",{staticClass:"tracking_form my-2 mx-3"},[_c("img",{staticStyle:{"float":"left",width:"5%","margin-right":"5px"},attrs:{src:"/images/images_check_mark.png",alt:""}}),_vm._v(" "),_vm.searchResultData.applicantInfo.is_sub_chalan_received==0?_c("p",{staticClass:"text-justify m-0"},[_vm._v(" "+_vm._s(_vm.searchResultData.paymentConfigArray.payment_success_without_challan)+" ")]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.is_sub_chalan_received==1?_c("p",{staticClass:"text-justify m-0"},[_vm._v(" "+_vm._s(_vm.searchResultData.paymentConfigArray.payment_success_with_challan)+" ")]):_vm._e()])])])])])]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.case_main_status_id==20||_vm.searchResultData.applicantInfo.case_main_status_id==22?_c("span",[typeof _vm.searchResultData.paymentAddArray.application_and_chalanPayment_condition!="undefined"&&_vm.searchResultData.paymentAddArray.application_and_chalanPayment_condition!=""?_c("span",[_vm._m(7)]):_vm._e(),_vm._v(" "),typeof _vm.searchResultData.khotianInfo.number_of_dcr_provided!="undefined"&&_vm.searchResultData.khotianInfo.number_of_dcr_provided>0&&_vm.searchResultData.applicantInfo.is_dcr_chalan_received==1?_c("span",[_vm._m(8)]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.dcr_pay_status==0?_c("span",[_vm.searchResultData.applicantInfo.is_before_payment==1?_c("span",[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"tracking_form my-2 mx-3"},[_c("span",{staticClass:"text-justify"},[_vm._v(" অভিনন্দন! আপনার এই মামলার খতিয়ান প্রস্তুত আছে। আপনি যদি ডিসিআর ফি ("+_vm._s(_vm.searchResultData.paymentAddArray.totalPaymentAmount)+" টাকা) প্রদান করতে চান তাহলে সংশ্লিষ্ট উপজেলা ভূমি অফিসে যোগাযোগ করুন।  ")])])])])])]):_c("span",[_vm.searchResultData.applicantInfo.dcr_pay_method==1?_c("span",[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"tracking_form my-2 mx-3"},[_vm.is_tried_for_cash_cancel==false?_c("div",{staticClass:"col-md-12"},[_c("p",{staticClass:"text-justify m-0"},[_vm._v(" আপনার এই মামলার ডিসিআর ফি প্রদানের জন্য ক্যাশ পেমেন্ট রিকোয়েস্ট গ্রহণ করা হয়েছে। আপনি সংশ্লিষ্ট উপজেলা ভূমি অফিসে গিয়ে পেমেন্ট সম্পন্ন করতে পারবেন। ")]),_vm._v(" "),_c("p",{staticClass:"text-justify m-0 border-top mt-2"},[_vm._v(" আপনি চাইলে ক্যাশ পেমেন্ট বাতিল করে অন্য পেমেন্ট অপশন নির্বাচন করতে চাইলে, বাতিল বাটনে ক্লিক করে আবার চেষ্টা করুন। ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-center text-center"},[_c("button",{staticClass:"btn btn-sm",staticStyle:{background:"#c9302c",color:"white",border:"1px solid #c9302c"},on:{click:_vm.cancelCashPayment}},[_vm._v("বাতিল করুন")])])]):_vm._e(),_vm._v(" "),_vm.is_tried_for_cash_cancel==true?_c("div",{staticClass:"col-md-12"},[_c("p",{staticClass:"text-justify m-0"},[_vm._v("আপনার আবেদনটিতে কার্যক্রম গ্রহণ করার জন্য আবেদন ফি প্রদান করা হয়নি। আপনি যদি আবেদন ফি ("+_vm._s(_vm.searchResultData.paymentAddArray.totalPaymentAmount)+" টাকা) প্রদান করতে চান তাহলে নিম্নোক্ত বাটনে ক্লিক করুন। ")])]):_vm._e()])])])])]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.dcr_pay_method==0||_vm.searchResultData.applicantInfo.dcr_pay_method==2?_c("span",[typeof _vm.searchResultData.paymentAddArray.payment_info_data!="undefined"&&(_vm.searchResultData.paymentAddArray.payment_info_data["status"]==-1||_vm.searchResultData.paymentAddArray.payment_info_data["status"]==0)?_c("span",[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"tracking_form my-2 mx-3",style:_vm.loading_background_opacity},[_vm.wallet_verify_msg!=""&&_vm.wallet_verify_err_type==1?_c("div",{staticClass:"alert alert-success text-center alert-dismissible fade show",attrs:{role:"alert"}},[_c("strong",[_vm._v(" "+_vm._s(_vm.wallet_verify_msg))]),_vm._v(" "),_vm._m(9)]):_vm._e(),_vm._v(" "),_vm.wallet_verify_msg!=""&&_vm.wallet_verify_err_type==-1?_c("div",{staticClass:"alert alert-danger text-center alert-dismissible fade show",attrs:{role:"alert"}},[_c("strong",[_vm._v(" "+_vm._s(_vm.wallet_verify_msg))]),_vm._v(" "),_vm._m(10)]):_vm._e(),_vm._v(" "),_vm.is_tried_for_verify==false?_c("div",{ref:"payment_verify_form"},[_vm.searchResultData.paymentAddArray.payment_gateway_mesaage.id==2?_c("span",[_c("p",{staticClass:"text-justify m-0 p-2"},[_vm._v("আপনার আবেদনের পেমেন্ট অপেক্ষমান অবস্থায় আছে, আপনি "+_vm._s(_vm.searchResultData.paymentAddArray.payment_gateway_mesaage.name_bn)+" গেটওয়ে নির্বাচন করেছেন।")]),_vm._v(" "),_c("div",{staticClass:"lmt-form-group",staticStyle:{"padding-left":"8px"}},[_c("span",{staticClass:"form-sec-title"},[_vm._v("আপনি ওয়ালেট দিয়ে পেমেন্ট করেছেন?")]),_vm._v(" "),_c("div",{staticClass:"bs_radio"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.is_transaction_payment,expression:"is_transaction_payment"}],staticClass:"form-check-input",attrs:{type:"radio",id:"is_transaction_payment",value:"1"},domProps:{checked:_vm._q(_vm.is_transaction_payment,"1")},on:{change:function change($event){_vm.is_transaction_payment="1";}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"is_transaction_payment"}},[_vm._v("হ্যাঁ")])]),_vm._v(" "),_c("div",{staticClass:"bs_radio"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.is_transaction_payment,expression:"is_transaction_payment"}],staticClass:"form-check-input",attrs:{type:"radio",id:"is_transaction_payment1",value:"0"},domProps:{checked:_vm._q(_vm.is_transaction_payment,"0")},on:{change:function change($event){_vm.is_transaction_payment="0";}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"is_transaction_payment1"}},[_vm._v("না")])])]),_vm._v(" "),_vm.is_transaction_payment==1?_c("span",[_c("div",{staticClass:"form-inline m-2"},[_c("label",{staticClass:"control-label col-md-4",attrs:{"for":"dcr_payment_method_wallet_verify"}},[_vm._v("ওয়ালেট মেথড")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.srchd_payment_method_wallet_verify,expression:"srchd_payment_method_wallet_verify"}],staticClass:"form-control col-md-8 required_field",attrs:{name:"payment_method_walet",id:"dcr_payment_method_wallet_verify",required:""},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.srchd_payment_method_wallet_verify=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c("option",{attrs:{value:"",selected:"",hidden:""}},[_vm._v(" ওয়ালেট মেথড নির্বাচন করুন ")]),_vm._v(" "),_vm._l(_vm.searchResultData.paymentAddArray.payment_method_on_wallet,function(value,index){return _c("option",{key:index,domProps:{value:value.method_name}},[_vm._v("\n                                                                                                                "+_vm._s(value.method_name_bn)+"\n                                                                                                            ")]);})],2)]),_vm._v(" "),_c("div",{staticClass:"form-inline m-2"},[_c("label",{staticClass:"col-md-4 control-label",attrs:{"for":"dcr_tracking_no_verify"}},[_vm._v("ট্রেকিং নম্বর")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.srchd_tracking_no_verify,expression:"srchd_tracking_no_verify"}],staticClass:"form-control col-md-8 required_field",attrs:{type:"text",readonly:"",id:"dcr_tracking_no_verify",required:""},domProps:{value:_vm.srchd_tracking_no_verify},on:{input:function input($event){if($event.target.composing)return;_vm.srchd_tracking_no_verify=$event.target.value;}}})]),_vm._v(" "),_c("div",{staticClass:"form-inline m-2"},[_c("label",{staticClass:"col-md-4 control-label",attrs:{"for":"dcr_transaction_no"}},[_vm._v("ট্রান্সাকশন নম্বর")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.srchd_transaction_no,expression:"srchd_transaction_no"}],staticClass:"form-control col-md-8 required_field",attrs:{type:"text",id:"dcr_transaction_no",required:""},domProps:{value:_vm.srchd_transaction_no},on:{input:function input($event){if($event.target.composing)return;_vm.srchd_transaction_no=$event.target.value;}}})]),_vm._v(" "),_vm.wallet_verify_error_area?_c("div",{staticClass:"text-danger text-center"},[_vm._v(" ওয়ালেট মেথড এবং ট্রান্সাকশন নম্বর দিন ")]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"m-2 text-center"},[_c("button",{staticClass:"btn btn-sm btnColor",on:{click:_vm.paymentVerify}},[_vm._v("পেমেন্ট ভেরিফাই")])])]):_vm._e(),_vm._v(" "),_vm.is_transaction_payment!=""&&_vm.is_transaction_payment==0?_c("div",{staticClass:"m-2 text-justify"},[_c("p",[_vm._v("আপনি অন্য কোন গেটওয়ে ব্যবহার করে পেমেন্ট করতে চাইলে, নিচের বাটনে ক্লিক করে পরর্বতী প্রসেস সম্পন্ন করুন।")]),_vm._v(" "),_c("button",{staticClass:"btn btn-sm btnColor",on:{click:_vm.paymentVerify}},[_vm._v("পরর্বতী "),_c("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}})])]):_vm._e()]):_c("span",[_c("div",{staticClass:"m-2 text-center"},[_c("button",{staticClass:"btn btn-sm btnColor",on:{click:_vm.paymentVerify}},[_vm._v("পেমেন্ট ভেরিফাই")])]),_vm._v(" "),_c("p",{staticClass:"text-justify m-0 p-2 border-top"},[_vm._v("আপনার আবেদনটির পেমেন্ট অপেক্ষমান অবস্থায় আছে, আপনি "+_vm._s(_vm.searchResultData.paymentAddArray.payment_gateway_mesaage.name_bn)+" গেটওয়ে ব্যবহার করেছেন ।")])])]):_vm._e(),_vm._v(" "),_vm.is_tried_for_verify==true?_c("div",{staticClass:"col-md-12"},[_c("h5",{staticClass:"text-center"},[_vm._v("পেমেন্ট বাতিল করতে নিচের বাটনে ক্লিক করুন। ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-center text-center"},[_c("button",{staticClass:"btn btn-sm",staticStyle:{background:"#c9302c",color:"white",border:"1px solid #c9302c"},on:{click:_vm.cancelPayment}},[_vm._v("বাতিল করুন")])])]):_vm._e()])])])])]):_c("span",[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"tracking_form my-2 mx-3"},[_vm.searchResultData.applicantInfo.national_id_no!=""&&_vm.searchResultData.applicantInfo.dob!=""&&_vm.searchResultData.applicantInfo.dob!="0000-00-00"?_c("p",{staticClass:"text-justify m-0"},[_vm._v("\n                                                                                "+_vm._s(_vm.searchResultData.information.txt_0)+"\n                                                                            ")]):_vm._e(),_vm._v(" "),_vm.searchResultData.applicantInfo.national_id_no==""||_vm.searchResultData.applicantInfo.dob==""||_vm.searchResultData.applicantInfo.dob=="0000-00-00"?_c("p",{staticClass:"text-justify m-0"},[_vm._v("\n                                                                                "+_vm._s(_vm.searchResultData.information.txt_0)+"\n                                                                            ")]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"mt-2 text-center"},[_vm.searchResultData.applicantInfo.national_id_no==""||_vm.searchResultData.applicantInfo.national_id_no==null||_vm.searchResultData.applicantInfo.dob==""||_vm.searchResultData.applicantInfo.dob==null||_vm.searchResultData.applicantInfo.dob=="0000-00-00"?_c("router-link",{staticClass:"btn btnColor btn-sm",attrs:{to:"/nid-verify/".concat(_vm.searchResultData.applicantInfo.encript_application_id,"/").concat(_vm.searchResultData.applicantInfo.encript_division_id,"/").concat(_vm.searchResultData.applicantInfo.encript_application_citizen_id)}},[_vm._v("অগ্রসর হউন")]):_vm._e()],1)])])])])])]):_vm._e()])]):_c("span")]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"src-btn-group"},[_vm.searchResultData.information["pay_button"]==true?_c("button",{staticClass:"src-info-btn btn-solid btn-green",attrs:{href:"#"},on:{click:_vm.PaymentNextProcess}},[_vm._m(11),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("সাবমিশন ফি")])]):_vm._e(),_vm._v(" "),_vm.searchResultData.information["dcr_pay_button"]==true?_c("button",{staticClass:"src-info-btn btn-solid btn-green",attrs:{href:"#"},on:{click:_vm.PaymentNextProcess}},[_vm._m(12),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("ডিসিআর ফি")])]):_vm._e(),_vm._v(" "),typeof _vm.searchResultData.applicantInfo!="undefined"&&_vm.searchResultData.applicantInfo.is_before_payment==0&&_vm.searchResultData.applicantInfo.dcr_pay_status==1&&_vm.searchResultData.applicantInfo.is_dcr_chalan_received==0?_c("span",[_c("a",{staticClass:"src-info-btn btn-solid btn-violet",attrs:{href:"https://ldtax.gov.bd/",target:"_blank\n"}},[_vm._m(13),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("কর পরিশোধ")])])]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"src-sec-block mb-4"},[typeof _vm.buttonPermissionArr.namonjur_btn!="undefined"&&(!this.buttonPermissionArr.short_fall_btn||!this.buttonPermissionArr.khotian_btn||!this.buttonPermissionArr.namonjur_btn||!this.buttonPermissionArr.sunani_btn)?_c("h5",[_vm._v("সম্পূরক আবেদন(যদি প্রয়োজন হয়)")]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"src-btn-group"},[!this.buttonPermissionArr.sunani_btn?_c("button",{staticClass:"src-info-btn btn-style-1",style:this.buttonPermissionArr.sunani_btn?"cursor: not-allowed;":"",attrs:{href:this.buttonPermissionArr.sunani_btn?"":"#sunaniSongkrantoModal",disabled:this.buttonPermissionArr.sunani_btn,"data-toggle":"modal"},on:{click:function click($event){return _vm.toggleReqDiv(2);}}},[_vm._m(14),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("শুনানির সংক্রান্ত")])]):_vm._e(),_vm._v(" "),typeof _vm.buttonPermissionArr.namonjur_btn!="undefined"&&!this.buttonPermissionArr.namonjur_btn?_c("button",{staticClass:"src-info-btn btn-style-2",style:this.buttonPermissionArr.namonjur_btn?"cursor: not-allowed;":"",attrs:{href:this.buttonPermissionArr.namonjur_btn?"":"#naMonjurAppBibechona",disabled:this.buttonPermissionArr.namonjur_btn,"data-toggle":"modal"},on:{click:function click($event){return _vm.toggleReqDiv(1);}}},[_vm._m(15),_vm._v(" "),_vm._m(16)]):_vm._e(),_vm._v(" "),!this.buttonPermissionArr.khotian_btn?_c("button",{staticClass:"src-info-btn btn-style-3",style:this.buttonPermissionArr.khotian_btn?"cursor: not-allowed;":"",attrs:{href:this.buttonPermissionArr.khotian_btn?"":"#khatianCorrection",disabled:this.buttonPermissionArr.khotian_btn,"data-toggle":"modal"},on:{click:function click($event){return _vm.khCorrtoggleReqDiv(3);}}},[_vm._m(17),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("খতিয়ানের করণিক ভুল সংশোধন")])]):_vm._e(),_vm._v(" "),!this.buttonPermissionArr.short_fall_btn?_c("button",{staticClass:"src-info-btn btn-style-4",style:this.buttonPermissionArr.short_fall_btn?"cursor: not-allowed;":"",attrs:{href:this.buttonPermissionArr.short_fall_btn?"":"#shortFallAppBibechona",disabled:this.buttonPermissionArr.short_fall_btn,"data-toggle":"modal"},on:{click:function click($event){return _vm.toggleReqDiv(4);}}},[_vm._m(18),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("অসম্পূর্ণ আবেদন সংক্রান্ত")])]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"src-sec-block"},[_c("h5",[_vm._v("আবেদন সংক্রান্ত নথি ডাউনলোড")]),_vm._v(" "),_c("div",{staticClass:"src-btn-group"},[(_vm.searchResultData.applicantInfo.dcr_pay_method==2||_vm.searchResultData.applicantInfo.dcr_pay_method==3)&&_vm.searchResultData.applicantInfo.dcr_pay_status==1&&(_vm.searchResultData.applicantInfo.is_dcr_chalan_received==0||_vm.searchResultData.applicantInfo.is_dcr_chalan_received==1)?_c("span",[_c("a",{staticClass:"src-info-btn btn-style-2",attrs:{target:"_blank",href:_vm.searchResultData.print_preview_url.generateOnlineDcrUrl}},[_vm._m(19),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("DCR ডাউনলোড")])])]):_vm._e(),_vm._v(" "),_vm.searchResultData.khatian_status.show_khasra_btn==true?_c("a",{staticClass:"src-info-btn btn-style-4",attrs:{href:_vm.searchResultData.print_preview_url.khasra_khatian_url,target:"_blank"}},[_vm._m(20),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("খসড়া খতিয়ান দেখুন")])]):_vm._e(),_vm._v(" "),_vm.searchResultData.khatian_status.show_khatian_btn==true?_c("a",{staticClass:"src-info-btn btn-style-4",attrs:{href:_vm.searchResultData.print_preview_url.final_khatian_url,target:"_blank"}},[_vm._m(21),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("খতিয়ান ডাউনলোড")])]):_vm._e(),_vm._v(" "),_c("a",{staticClass:"src-info-btn btn-style-5",attrs:{href:_vm.searchResultData.print_preview_url.application_print_preview,target:"_blank"}},[_vm._m(22),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v(" আবেদন প্রিন্ট")])]),_vm._v(" "),typeof _vm.searchResultData.applicantInfo!="undefined"&&_vm.searchResultData.applicantInfo.is_before_payment==0&&_vm.searchResultData.applicantInfo.dcr_pay_status==0&&_vm.searchResultData.applicantInfo.sub_pay_method!=1&&_vm.searchResultData.applicantInfo.submission_pay_status!=0?_c("span",[_c("a",{staticClass:"src-info-btn btn-style-6",attrs:{target:"_blank",href:_vm.searchResultData.print_preview_url.pay_reciept_url}},[_vm._m(23),_vm._v(" "),_c("span",{staticClass:"btn-text"},[_vm._v("পেমেন্ট রিসিপ্ট")])])]):_vm._e()])])])])])]),_vm._v(" "),_vm.reconsideration.isRequestDivShow?_c("div",{ref:"naMonjurAppBibechona",staticClass:"modal src-modal fade",attrs:{id:"naMonjurAppBibechona",tabindex:"-1","data-backdrop":"static","aria-labelledby":"naMonjurAppBibechona","aria-hidden":"true"}},[_c("div",{staticClass:"modal-dialog modal-lg"},[_c("div",{staticClass:"modal-content"},[_c("div",{staticClass:"modal-header text-center"},[_c("h5",{staticClass:"modal-title"},[_vm._v("নামঞ্জুর আবেদন পুর্নবিবেচনা")]),_vm._v(" "),_vm.docPreviewBackButton?_c("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function click($event){return _vm.docPreviewClose();}}},[_c("span",[_vm._v("×")])]):_c("button",{ref:"naMonjurModalCls",staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_vm.docPreviewActive?_c("span",[_c("div",{staticStyle:{padding:"0px",height:"580px",width:"100%"}},[_vm.blobUrl?_c("iframe",{staticStyle:{overflow:"auto"},attrs:{src:_vm.documentBlobUrl,type:"application/pdf",width:"100%",height:"100%"}}):_vm._e(),_vm._v(" "),_vm.docUrl?_c("iframe",{staticStyle:{height:"100%",width:"100%"},attrs:{src:_vm.documentUrl,gesture:"media",allow:"encrypted-media",allowfullscreen:"",frameborder:"0"}}):_vm._e()])]):_c("span",[_vm.reconsideration.existing_request>0?_c("span",[_c("div",{staticClass:"modal-body"},[_c("p",{staticStyle:{"font-size":"14px","text-align":"justify",color:"rgb(114, 28, 36)"}},[_vm._v("\n                                                আপনার নামজারি আবেদন ("+_vm._s(_vm.convert2Bangla(_vm.searchResultData.applicantInfo.id))+") এর আদেশ পূর্ণবিবেচনার অনুরোধ সহকারী কমিশনার ভূমি এর নিকট জমা হয়েছে । ধন্যবাদ। ")])])]):_c("span",{style:_vm.loading_background_opacity},[_c("form",{ref:"namonjurModal",on:{submit:function submit($event){$event.preventDefault();return _vm.submitNamonjurRequest();}}},[_c("div",{staticClass:"modal-body"},[_vm._m(24),_vm._v(" "),_c("div",{ref:"requiredFileType",staticClass:"document-list-table mb-3"},[_vm._m(25),_vm._v(" "),_c("table",{staticClass:"table-bordered table"},[_vm._m(26),_vm._v(" "),_vm.namonjurDocsText.length>0?_c("tbody",{},_vm._l(_vm.namonjurDocsText,function(value,docsID){return _c("tr",{key:docsID},[_c("td",{staticClass:"text-center",staticStyle:{width:"8%"}},[_vm._v(_vm._s(_vm.convert2Bangla(++docsID)))]),_vm._v(" "),_c("td",{staticStyle:{width:"40%"}},[_vm._v(_vm._s(value.type))]),_vm._v(" "),_c("td",{staticStyle:{width:"40%"}},[_c("table",{staticClass:"table table-striped",staticStyle:{width:"100%"}},_vm._l(value.files,function(val,fileId){return _c("tr",{key:fileId,staticStyle:{width:"100%"}},[val.name!=""?_c("td",{staticStyle:{width:"90%"}},[_c("a",{attrs:{href:"",title:val.name},on:{click:function click(event){return _vm.displayFile(event,val);}}},[_vm._v(_vm._s(_vm.docNameSlice(val.name)))])]):_c("td",{staticStyle:{width:"90%"}},[_c("input",{attrs:{type:"file",accept:"application/pdf"},on:{change:function change($event){return _vm.onNamonjurFileChange($event,fileId,docsID);}}})]),_vm._v(" "),val.name!=""?_c("td",{staticStyle:{width:"10%"}},[_c("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function click($event){return _vm.removeNamonjurDocRecord(fileId,docsID);}}},[_c("i",{staticClass:"fa fa-trash"})])]):_vm._e()]);}),0)]),_vm._v(" "),_c("td",{staticClass:"text-center",staticStyle:{width:"12%"}},[_c("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function click($event){return _vm.handleNamonjurFileDocs(docsID,value);}}},[_c("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])])]);}),0):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"form-group"},[_vm._m(27),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.reconsideration.request.citizen_request,expression:"reconsideration.request.citizen_request"}],staticClass:"form-control",attrs:{id:"shortFallComment",rows:"4",placeholder:"মন্তব্য করুন"},domProps:{value:_vm.reconsideration.request.citizen_request},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.reconsideration.request,"citizen_request",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"modal-footer"},[_c("button",{staticClass:"btn btn-outline-danger btn-left",attrs:{type:"button","data-dismiss":"modal"},on:{click:function click($event){return _vm.deleteRequest(4);}}},[_vm._v("বাতিল\n                                                    করুন\n                                                ")]),_vm._v(" "),_c("button",{staticClass:"btn modal-submit btn-success btn-right"},[_vm._v("দাখিল\n                                                ")])])]),_vm._v(" "),_vm.loading_icon?_c("div",{staticClass:"spinner-border text-primary",staticStyle:{position:"absolute",top:"40%",left:"300px","z-index":"9999"},attrs:{role:"status"}},[_c("span",{staticClass:"sr-only"},[_vm._v("Loading...")])]):_vm._e()])])])])]):_vm._e(),_vm._v(" "),_vm.reconsideration.isRequestDivShow?_c("div",{ref:"shortFallAppBibechona",staticClass:"modal src-modal fade",attrs:{id:"shortFallAppBibechona",tabindex:"-1","data-backdrop":"static","aria-labelledby":"shortFallAppBibechona","aria-hidden":"true"}},[_c("div",{staticClass:"modal-dialog modal-lg"},[_c("div",{staticClass:"modal-content"},[_c("div",{staticClass:"modal-header text-center"},[_c("h5",{staticClass:"modal-title"},[_vm._v("অ-সম্পূর্ণ আবেদন হওয়ায় সঠিক নথি / তথ্য প্রদান করে দাখিল করুন")]),_vm._v(" "),_vm.docPreviewBackButton?_c("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function click($event){return _vm.docPreviewClose();}}},[_c("span",[_vm._v("×")])]):_c("button",{ref:"shortFallAppModalCls",staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_vm.docPreviewActive?_c("span",[_c("div",{staticStyle:{padding:"0px",height:"580px",width:"100%"}},[_vm.blobUrl?_c("iframe",{staticStyle:{overflow:"auto"},attrs:{src:_vm.documentBlobUrl,type:"application/pdf",width:"100%",height:"100%"}}):_vm._e(),_vm._v(" "),_vm.docUrl?_c("iframe",{staticStyle:{height:"100%",width:"100%"},attrs:{src:_vm.documentUrl,gesture:"media",allow:"encrypted-media",allowfullscreen:"",frameborder:"0"}}):_vm._e()])]):_c("span",[_vm.reconsideration.existing_request>0?_c("span",[_c("div",{staticClass:"modal-body"},[_c("p",{staticStyle:{"font-size":"14px","text-align":"justify",color:"rgb(114, 28, 36)"}},[_vm._v("\n                                                    আপনার নামজারি আবেদন ("+_vm._s(_vm.convert2Bangla(_vm.searchResultData.applicantInfo.id))+") এর আদেশ পূর্ণবিবেচনার অনুরোধ সহকারী কমিশনার ভূমি এর নিকট জমা হয়েছে । ধন্যবাদ। ")])])]):_c("span",{style:_vm.loading_background_opacity},[_c("form",{ref:"shortFallModal",on:{submit:function submit($event){$event.preventDefault();return _vm.shortFallSubmitRequest();}}},[_c("div",{staticClass:"modal-body"},[_vm._m(28),_vm._v(" "),_c("div",{ref:"requiredFileType",staticClass:"document-list-table mb-3"},[_vm._m(29),_vm._v(" "),_c("table",{staticClass:"table-bordered table"},[_vm._m(30),_vm._v(" "),_vm.shortFallDocs.length>0?_c("tbody",{},_vm._l(_vm.shortFallDocs,function(value,docsID){return _c("tr",{key:docsID},[_c("td",{staticClass:"text-center",staticStyle:{width:"8%"}},[_vm._v(_vm._s(_vm.convert2Bangla(++docsID)))]),_vm._v(" "),_c("td",{staticStyle:{width:"40%"}},[_vm._v(_vm._s(value.type))]),_vm._v(" "),_c("td",{staticStyle:{width:"40%"}},[_c("table",{staticClass:"table table-striped",staticStyle:{width:"100%"}},_vm._l(value.files,function(val,fileId){return _c("tr",{key:fileId},[val.fileObj!=""?_c("td",{staticStyle:{width:"90%"}},[_c("a",{attrs:{href:"",title:val.name},on:{click:function click(event){return _vm.displayFile(event,val);}}},[_vm._v(_vm._s(_vm.docNameSlice(val.name)))])]):_c("td",{staticStyle:{width:"90%"}},[_c("input",{attrs:{type:"file",accept:"application/pdf"},on:{change:function change($event){return _vm.onShortFallFile($event,fileId,docsID);}}})]),_vm._v(" "),val.name!=""?_c("td",{staticStyle:{width:"10%"}},[_c("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function click($event){return _vm.removeShortFallDocRecord(fileId,docsID);}}},[_c("i",{staticClass:"fa fa-trash"})])]):_vm._e()]);}),0)]),_vm._v(" "),_c("td",{staticClass:"text-center",staticStyle:{width:"12%"}},[_c("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function click($event){return _vm.handleShortFallFileDocs(docsID,value);}}},[_c("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])])]);}),0):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"form-group"},[_vm._m(31),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.reconsideration.request.citizen_request,expression:"reconsideration.request.citizen_request"}],staticClass:"form-control",attrs:{id:"shortFallComment",rows:"4",placeholder:"মন্তব্য করুন"},domProps:{value:_vm.reconsideration.request.citizen_request},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.reconsideration.request,"citizen_request",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"modal-footer"},[_c("button",{staticClass:"btn btn-outline-danger btn-left",attrs:{type:"button","data-dismiss":"modal"},on:{click:function click($event){return _vm.deleteRequest(4);}}},[_vm._v("বাতিল\n                                                    করুন\n                                                ")]),_vm._v(" "),_c("button",{staticClass:"btn modal-submit btn-success btn-right"},[_vm._v("দাখিল\n                                                ")])])]),_vm._v(" "),_vm.loading_icon?_c("div",{staticClass:"spinner-border text-primary",staticStyle:{position:"absolute",top:"40%",left:"300px","z-index":"9999"},attrs:{role:"status"}},[_c("span",{staticClass:"sr-only"},[_vm._v("Loading...")])]):_vm._e()])])])])]):_vm._e(),_vm._v(" "),_vm.khatianReconsideration.isRequestDivShow?_c("div",{ref:"khatianCorrection",staticClass:"modal src-modal fade",attrs:{id:"khatianCorrection",tabindex:"-1","data-backdrop":"static","aria-labelledby":"khatianCorrection","aria-hidden":"true"}},[_c("div",{staticClass:"modal-dialog modal-lg"},[_c("div",{staticClass:"modal-content"},[_c("div",{staticClass:"modal-header text-center"},[_c("h5",{staticClass:"modal-title"},[_vm._v("খতিয়ান সংশোধনের অনুরোধ")]),_vm._v(" "),_vm.docPreviewBackButton?_c("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function click($event){return _vm.docPreviewClose();}}},[_c("span",[_vm._v("×")])]):_c("button",{ref:"khatianCorrModalCls",staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_vm.docPreviewActive?_c("span",[_c("div",{staticStyle:{padding:"0px",height:"580px",width:"100%"}},[_vm.blobUrl?_c("iframe",{staticStyle:{overflow:"auto"},attrs:{src:_vm.documentBlobUrl,type:"application/pdf",width:"100%",height:"100%"}}):_vm._e(),_vm._v(" "),_vm.docUrl?_c("iframe",{staticStyle:{height:"100%",width:"100%"},attrs:{src:_vm.documentUrl,gesture:"media",allow:"encrypted-media",allowfullscreen:"",frameborder:"0"}}):_vm._e()])]):_c("span",[_vm.request_history_count>0?_c("div",{staticClass:"modal-body"},[_c("div",{staticClass:"src-comments pt-3 mb-2"},[_c("div",{attrs:{id:"accordiontwo"}},[_c("div",{staticClass:"card"},[_vm._m(32),_vm._v(" "),_c("div",{staticClass:"collapse",attrs:{id:"collapseTwo","data-parent":"#accordiontwo"}},[_c("div",{staticClass:"card-body"},[_c("div",{},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(33),_vm._v(" "),_c("tbody",_vm._l(_vm.request_history,function(value,index){return _c("tr",{key:index},[_c("td",[_vm._v(_vm._s(_vm.convert2Bangla(index+1)))]),_vm._v(" "),_c("td",[_c("p",{staticClass:"text-justify"},[_vm._v(_vm._s(value.citizen_request))])]),_vm._v(" "),_c("td",[_vm._v(_vm._s(_vm.convert2Bangla(_vm.customDateFormat2(value.created_at))))]),_vm._v(" "),value.status==2?_c("td",[_vm._v("গৃহীত")]):_c("td",[_vm._v("বাতিল")]),_vm._v(" "),value.status==-1?_c("td",[_vm._v(_vm._s(value.comment))]):_c("td"),_vm._v(" "),_c("td",[_vm._v(_vm._s(_vm.convert2Bangla(_vm.customDateFormat2(value.updated_at))))])]);}),0)])])])])])])])])]):_vm._e(),_vm._v(" "),_vm.khatianReconsideration.existing_request>0?_c("span",[_vm._m(34)]):_c("span",{style:_vm.loading_background_opacity},[_c("form",{on:{submit:function submit($event){$event.preventDefault();return _vm.khCorrSubmitRequest();}}},[_c("div",{ref:"khatianCorrModal",staticClass:"modal-body"},[_c("div",{staticClass:"src-comments pt-3 mb-4"},[_vm._m(35),_vm._v(" "),_c("div",{staticClass:"form-group"},[_vm._m(36),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.khatianReconsideration.request.citizen_request,expression:"khatianReconsideration.request.citizen_request"}],staticClass:"form-control input_bangla required_field red-bordered",attrs:{id:"khatianCorrComment",rows:"4",placeholder:"মতামত দিন",required:""},domProps:{value:_vm.khatianReconsideration.request.citizen_request},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.khatianReconsideration.request,"citizen_request",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"added-documents-sec mb-4"},[_c("div",{staticClass:"add-documents-box mb-4"},[_c("div",{staticClass:"upload-btn-wrapper"},[_vm._m(37),_vm._v(" "),_vm.addMoreDoucment?_c("button",{staticClass:"btn btn-success btn-sm mb-4 additionBtn"},[_vm._v(" + আরো ডকুমেন্ট যোগ করুন")]):_c("button",{staticClass:"btn btn-success btn-sm mb-4 additionBtn"},[_vm._v(" ডকুমেন্ট যোগ করুন")]),_vm._v(" "),_c("input",{ref:"fileValueForKhatian",attrs:{type:"file",accept:"application/pdf"},on:{change:function change(event){return _vm.onFileChangeForKhCorr(event);}}})]),_vm._v(" "),_c("p",{staticClass:"text-sm text-gray"},[_vm._v("[ আবেদনের সাথে প্রয়োজনীয় কাগজপত্র সংযুক্তির ক্ষেত্রে স্ক্যান ফাইলটি অবশ্যই PDF ফরমেটে হতে হবে । অন্য কোন ফরমেটে ফাইলটি আপলোড করা যাবেনা। PDF ফাইল সাইজ অবশ্য সর্বোচ্চ ( ১ পেজ সর্বোচ্চ ১.২৫MB) এর মধ্যে হতে হবে এবং অবশ্যই ২৫ MB এর মধ্যে হতে হবে ]")])]),_vm._v(" "),_c("div",{staticClass:"document-list-table"},[_vm.khatianReconsideration.fileExist?_c("table",{staticClass:"table"},[_c("thead",[_vm._m(38),_vm._v(" "),_vm._l(_vm.khatianReconsideration.request.citizen_attachments,function(value,index){return _c("tr",{key:index},[value.path==""?_c("td",[_c("a",{attrs:{href:"",title:value.name,"data-dismiss":"modal"},on:{click:function click(event){return _vm.displayFile(event,value,3);}}},[_vm._v(_vm._s(_vm.docNameSlice(value.name)))])]):_c("td",[_c("a",{attrs:{href:"",title:value.name,"data-dismiss":"modal"},on:{click:function click(event){return _vm.displayFile(event,value,3);}}},[_vm._v(_vm._s(_vm.docNameSlice(value.name)))])]),_vm._v(" "),_c("td",[_c("div",{staticClass:"form-group"},[_vm._m(39,true),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:value.doc_type,expression:"value.doc_type"}],staticClass:"form-control required_field",attrs:{type:"text",placeholder:"সংযুক্ত কাগজের ধরণ লিখুন",id:"khatianCurrType",required:""},domProps:{value:value.doc_type},on:{input:function input($event){if($event.target.composing)return;_vm.$set(value,"doc_type",$event.target.value);}}})])]),_vm._v(" "),_c("td",{staticStyle:{width:"115px","text-align":"center"}},[_c("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function click($event){return _vm.khCorrRemoveDocRecord(index);}}},[_c("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),_vm._v(" মুছে ফেলুন\n                                                                    ")])])]);})],2)]):_vm._e()])])]),_vm._v(" "),_c("div",{staticClass:"modal-footer"},[_c("button",{staticClass:"btn btn-outline-danger btn-left",attrs:{type:"button","data-dismiss":"modal"},on:{click:function click($event){return _vm.deleteRequest(3);}}},[_vm._v("বাতিল\n                                                    করুন\n                                                ")]),_vm._v(" "),_c("button",{staticClass:"btn modal-submit btn-success btn-right"},[_vm._v("সাবমিট\n                                                ")])])]),_vm._v(" "),_vm.loading_icon?_c("div",{staticClass:"spinner-border text-primary",staticStyle:{position:"absolute",top:"40%",left:"380px","z-index":"9999"},attrs:{role:"status"}},[_c("span",{staticClass:"sr-only"},[_vm._v("Loading...")])]):_vm._e()])])])])]):_vm._e(),_vm._v(" "),_vm.reconsideration.isSunaniRequestDivShow?_c("div",{staticClass:"modal src-modal fade",attrs:{id:"sunaniSongkrantoModal",tabindex:"-1","data-backdrop":"static","aria-labelledby":"sunaniSongkrantoModal","aria-hidden":"true"}},[_c("div",{staticClass:"modal-dialog modal-lg"},[_c("div",{staticClass:"modal-content"},[_c("div",{staticClass:"modal-header text-center"},[_c("h5",{staticClass:"modal-title"},[_vm._v("শুনানি সংক্রান্ত পরিবর্তনের অনুরোধ")]),_vm._v(" "),_c("button",{ref:"sunaniModalCls",staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_vm.request_history_count>0?_c("div",{staticClass:"modal-body"},[_c("div",{staticClass:"src-comments pt-3 mb-2"},[_c("div",{attrs:{id:"accordionThree"}},[_c("div",{staticClass:"card"},[_vm._m(40),_vm._v(" "),_c("div",{staticClass:"collapse",attrs:{id:"collapseThree","data-parent":"#accordionThree"}},[_c("div",{staticClass:"card-body"},[_c("div",{},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(41),_vm._v(" "),_c("tbody",_vm._l(_vm.request_history,function(value,index){return _c("tr",{key:index},[_c("td",[_vm._v(_vm._s(_vm.convert2Bangla(index+1)))]),_vm._v(" "),_c("td",[_vm._v(_vm._s(value.citizen_request))]),_vm._v(" "),_c("td",[_vm._v(_vm._s(_vm.convert2Bangla(_vm.customDateFormat2(value.created_at))))]),_vm._v(" "),_c("td",[_vm._v(_vm._s(_vm.convert2Bangla(_vm.customDateTimeFormat(value.sunani_date))))]),_vm._v(" "),value.status==2?_c("td",{staticClass:"text-center"},[_vm._v("গৃহীত"),_c("br"),_c("span",{staticStyle:{"font-size":"13px"}},[_vm._v("("+_vm._s(_vm.convert2Bangla(_vm.customDateFormat2(value.updated_at)))+")")])]):_c("td",[_vm._v("বাতিল"),_c("br"),_c("span",{staticStyle:{"font-size":"13px"}},[_vm._v("("+_vm._s(_vm.convert2Bangla(_vm.customDateFormat2(value.updated_at)))+")")])]),_vm._v(" "),value.status==-1?_c("td",[_vm._v(_vm._s(value.comment))]):_c("td")]);}),0)])])])])])])])])]):_vm._e(),_vm._v(" "),_vm.reconsideration.existing_request>0?_c("span",[_c("div",{staticClass:"modal-body"},[_vm.reconsideration.sunani_pending_request_info!=""?_c("p",{staticClass:"input_bangla",staticStyle:{"text-align":"justify"}},[_vm._v("\n                                                 "+_vm._s(typeof _vm.reconsideration.sunani_pending_request_info!="undefined"&&_vm.reconsideration.sunani_pending_request_info.sunani_type==1?"অনলাইন":"ম্যানুয়াল")+" শুনানির জন্য আগামী\n                                                "+_vm._s(typeof _vm.reconsideration.sunani_pending_request_info!="undefined"?_vm.dateTimeFormate(_vm.reconsideration.sunani_pending_request_info.sunani_date,"only_date"):"")+" তারিখে\n                                                "+_vm._s(typeof _vm.reconsideration.sunani_pending_request_info!="undefined"&&_vm.dateTimeFormate(_vm.reconsideration.sunani_pending_request_info.sunani_date,"only_time")?_vm.dateTimeFormate(_vm.reconsideration.sunani_pending_request_info.sunani_date,"only_time")+" সময়ে ":"")+"\n                                                সহকারী কমিশনার (ভূমি) এর নিকট আপনার একটি অনুরোধ অপেক্ষমান অবস্থায় আছে।\n                                                উক্ত অনুরোধটি বাতিল বা গ্রহণযোগ্য হওয়ার পর পুনরায় নতুন অনুরোধ করতে পারবেন। ধন্যবাদ।\n                                            ")]):_vm._e(),_c("p")])]):_c("span",{style:_vm.loading_background_opacity},[_c("div",{staticClass:"modal-body"},[_c("div",{staticClass:"src-comments pt-3 mb-4"},[_vm.reconsideration.existing_request>0?_c("div",[_c("p",{staticStyle:{"font-size":"14px","text-align":"justify"}},[_vm._v("সহকারী কমিশনার (ভূমি) এর নিকট আপনার\n                                                        একটি অনুরোধ চলমান আছে। উক্ত অনুরোধটি বাতিল বা গ্রহণযোগ্য হওয়ার পর পুনরায় নতুন\n                                                        অনুরোধ করতে পারবেন। ধন্যবাদ। ")])]):_vm._e(),_vm._v(" "),_vm._m(42),_vm._v(" "),_c("div",{staticClass:"form-group"},[_vm._m(43),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.reconsideration.request.citizen_request,expression:"reconsideration.request.citizen_request"}],staticClass:"form-control input_bangla",attrs:{required:"",id:"sunaniComment",rows:"3",placeholder:"মতামত দিন"},domProps:{value:_vm.reconsideration.request.citizen_request},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.reconsideration.request,"citizen_request",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"mb-4"},[_c("div",{staticClass:"d-flex justify-content-between"},[_c("div",{},[_c("div",{staticClass:"form-group"},[_vm._m(44),_vm._v(" "),_c("div",{staticClass:"form-check form-check-inline"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.reconsideration.request.sunani_type,expression:"reconsideration.request.sunani_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"onlineRadio",value:"1"},domProps:{checked:_vm._q(_vm.reconsideration.request.sunani_type,"1")},on:{change:function change($event){return _vm.$set(_vm.reconsideration.request,"sunani_type","1");}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"onlineRadio"}},[_vm._v("অনলাইন")])]),_vm._v(" "),_c("div",{staticClass:"form-check form-check-inline"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.reconsideration.request.sunani_type,expression:"reconsideration.request.sunani_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"manualRadio",value:"2"},domProps:{checked:_vm._q(_vm.reconsideration.request.sunani_type,"2")},on:{change:function change($event){return _vm.$set(_vm.reconsideration.request,"sunani_type","2");}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"manualRadio"}},[_vm._v("ম্যানুয়াল")])])])]),_vm._v(" "),_c("div",{},[_c("div",{staticClass:"form-group"},[_vm._m(45),_vm._v(" "),_c("div",{staticStyle:{position:"relative","float":"right"}},[_c("datePicker",{ref:"dp1",staticClass:"date_2 input_bangla_date_pick",staticStyle:{display:"inline-block",width:"auto"},attrs:{id:"input_bangla_date_pick","bootstrap-styling":true,title:"তারিখ ও সময় নির্বাচন করুন",placeholder:"তারিখ ও সময় নির্বাচন করুন",config:_vm.datetimeoptions,initialView:"day",minDate:"day","disabled-dates":_vm.disabledDates,maximumView:"year"},model:{value:_vm.reconsideration.request.sunani_date,callback:function callback($$v){_vm.$set(_vm.reconsideration.request,"sunani_date",$$v);},expression:"reconsideration.request.sunani_date"}}),_vm._v(" "),_c("div",{staticStyle:{position:"absolute",top:"20%",right:"7%"},on:{click:function click($event){return _vm.$refs.dp1.dp.show();}}},[_c("i",{staticClass:"fa fa-calendar",attrs:{"aria-hidden":"true"}})])],1)])])]),_vm._v(" "),_vm.reconsideration.request.sunani_data_exist?_c("p",{staticClass:"text-muted text-sm-center"},[_vm._m(46)]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"modal-footer"},[_c("button",{staticClass:"btn btn-outline-danger btn-left",attrs:{type:"button","data-dismiss":"modal"},on:{click:function click($event){return _vm.deleteRequest(2);}}},[_vm._v("বাতিল\n                                                করুন\n                                            ")]),_vm._v(" "),_c("button",{staticClass:"btn modal-submit btn-success btn-right",attrs:{type:"button"},on:{click:function click($event){return _vm.submitSunaniRequest();}}},[_vm._v("সাবমিট\n                                            ")])]),_vm._v(" "),_vm.loading_icon?_c("div",{staticClass:"spinner-border text-primary",staticStyle:{position:"absolute",top:"40%",left:"300px","z-index":"9999"},attrs:{role:"status"}},[_c("span",{staticClass:"sr-only"},[_vm._v("Loading...")])]):_vm._e()])])])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"modal src-modal fade",attrs:{id:"sunaniDetails",tabindex:"-1","data-backdrop":"static","aria-labelledby":"naMonjurAppBibechona","aria-hidden":"true"}},[_c("div",{staticClass:"modal-dialog modal-lg"},[_c("div",{staticClass:"modal-content"},[_c("div",{staticClass:"modal-header text-center"},[_c("h5",{staticClass:"modal-title"},[_vm._v("শুনানির আদেশের বিস্তারিত")]),_vm._v(" "),_c("button",{ref:"sunaniDetailsModalCls",staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c("div",{staticClass:"modal-body"},[_c("p",{staticStyle:{"font-size":"14px"}},[_c("strong",[_vm._v("শুনানির তারিখ ও সময়  : ")]),_vm._v("\n                                            "+_vm._s(_vm.dateTimeFormate(_vm.searchResultData.applicantInfo.sunani_date,"only_date"))+" "+_vm._s(_vm.dateTimeFormate(_vm.searchResultData.applicantInfo.sunani_date,"only_time")?", "+_vm.dateTimeFormate(_vm.searchResultData.applicantInfo.sunani_date,"only_time"):"")+"\n                                        ")]),_vm._v(" "),_c("p",{staticStyle:{"font-size":"14px"}},[_c("strong",[_vm._v("শুনানির ধরণ: ")]),_vm._v("\n                                            "+_vm._s(this.searchResultData.applicantInfo.sunani_type==1?"অনলাইন":"ম্যানুয়াল")+"\n                                        ")]),_vm._v(" "),_c("p",{staticStyle:{"font-size":"14px"}},[_c("strong",[_vm._v("শুনানির "+_vm._s(this.searchResultData.applicantInfo.sunani_type==1?"লিংক":"ঠিকানা")+": ")]),_vm._v(" "),this.searchResultData.applicantInfo.sunani_type==1?_c("a",{staticStyle:{cursor:"pointer !important",color:"#0a6cd6 !important","text-decoration":"underline !important"},attrs:{href:this.searchResultData.applicantInfo.sunani_link,target:"_blank"}},[_vm._v("\n                                                "+_vm._s(this.searchResultData.applicantInfo.sunani_link)+"\n                                            ")]):_c("span",[_vm._v(_vm._s(this.searchResultData.applicantInfo.office_address))])])])])])])]),_vm._v(" "),_c("div",{staticClass:"src-container-box mb-5"},[_vm._m(47),_vm._v(" "),_c("div",{staticClass:"src-status-box-body"},[_c("div",{staticClass:"src-step-table terms-step-table"},[_c("div",{staticClass:"src-step-table-container"},[_vm._m(48),_vm._v(" "),_vm._l(_vm.searchResultData.applicationSteps,function(item,index){return _c("span",{key:index},[_vm.searchResultData.applicantInfo.case_main_status_id!=19||_vm.searchResultData.applicantInfo.case_main_status_id!=20||_vm.searchResultData.applicantInfo.case_main_status_id!=22?_vm._t("default",function(){return[(item.row_index==1||item.row_index==2||item.row_index==12||item.row_index==13)&&item.status==true?_vm._t("default",function(){return[_c("div",{staticClass:"src-step-item"},[_c("div",{staticClass:"step-title"},[_c("span",{staticClass:"steps-num"},[_c("span",[_vm._v(_vm._s(_vm.convert2Bangla(index+1)))])]),_vm._v(" "),_c("p",[_c("span",{staticClass:"step-title-text"},[_vm._v(_vm._s(item.txt))]),_vm._v(" "),item.is_special_order==true?_c("span",[_c("br"),_c("span",{domProps:{innerHTML:_vm._s(item.special_txt)}})]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"step-status"},[item.status?_c("span",{staticClass:"step-done"},[_c("img",{attrs:{src:"/images/2022/08/icon-step-done.svg",alt:"icon"}})]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"step-desc"},[_c("span",{staticClass:"desc-date"},[_vm._v(_vm._s(item.description))])])])];}):_vm._t("default",function(){return[_c("div",{staticClass:"src-step-item"},[_c("div",{staticClass:"step-title"},[_c("span",{staticClass:"steps-num"},[_c("span",[_vm._v(_vm._s(_vm.convert2Bangla(index+1)))])]),_vm._v(" "),_c("p",[_c("span",{staticClass:"step-title-text"},[_vm._v(_vm._s(item.txt))]),_vm._v(" "),item.is_special_order==true?_c("span",[_c("br"),_c("span",{domProps:{innerHTML:_vm._s(item.special_txt)}})]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"step-status"},[item.status?_c("span",{staticClass:"step-done"},[_c("img",{attrs:{src:"/images/2022/08/icon-step-done.svg",alt:"icon"}})]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"step-desc"},[_c("span",{staticClass:"desc-date"},[_vm._v(_vm._s(item.description))])])])];})];}):_vm._t("default",function(){return[(item.row_index==0||item.row_index==3||item.row_index==4||item.row_index==5||item.row_index==6)&&item.status==false?_vm._t("default",function(){return[_c("div",{staticClass:"src-step-item"},[_c("div",{staticClass:"step-title"},[_c("span",{staticClass:"steps-num"},[_c("span",[_vm._v(_vm._s(_vm.convert2Bangla(index+1)))])]),_vm._v(" "),_c("p",[_c("span",{staticClass:"step-title-text"},[_vm._v(_vm._s(item.txt))]),_vm._v(" "),item.is_special_order==true?_c("span",[_c("br"),_c("span",{domProps:{innerHTML:_vm._s(item.special_txt)}})]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"step-status"},[item.status?_c("span",{staticClass:"step-done"},[_c("img",{attrs:{src:"/images/2022/08/icon-step-done.svg",alt:"icon"}})]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"step-desc"},[_c("span",{staticClass:"desc-date"},[_vm._v(_vm._s(item.description))])])])];}):_vm._t("default",function(){return[(item.row_index==1||item.row_index==2||item.row_index==12||item.row_index==13)&&item.status==true?_vm._t("default",function(){return[_c("div",{staticClass:"src-step-item"},[_c("div",{staticClass:"step-title"},[_c("span",{staticClass:"steps-num"},[_c("span",[_vm._v(_vm._s(_vm.convert2Bangla(index+1)))])]),_vm._v(" "),_c("p",[_c("span",{staticClass:"step-title-text"},[_vm._v(_vm._s(item.txt))]),_vm._v(" "),item.is_special_order==true?_c("span",[_c("br"),_c("span",{domProps:{innerHTML:_vm._s(item.special_txt)}})]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"step-status"},[item.status?_c("span",{staticClass:"step-done"},[_c("img",{attrs:{src:"/images/2022/08/icon-step-done.svg",alt:"icon"}})]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"step-desc"},[_c("span",{staticClass:"desc-date"},[_vm._v(_vm._s(item.description))])])])];}):_vm._t("default",function(){return[_c("div",{staticClass:"src-step-item"},[_c("div",{staticClass:"step-title"},[_c("span",{staticClass:"steps-num"},[_c("span",[_vm._v(_vm._s(_vm.convert2Bangla(index+1)))])]),_vm._v(" "),_c("p",[_c("span",{staticClass:"step-title-text"},[_vm._v(_vm._s(item.txt))]),_vm._v(" "),item.is_special_order==true?_c("span",[_c("br"),_c("span",{domProps:{innerHTML:_vm._s(item.special_txt)}})]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"step-status"},[item.status?_c("span",{staticClass:"step-done"},[_c("img",{attrs:{src:"/images/2022/08/icon-step-done.svg",alt:"icon"}})]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"step-desc"},[_c("span",{staticClass:"desc-date"},[_vm._v(_vm._s(item.description))])])])];})];})];})],2);})],2)])])])])])])]);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"section-title text-center"},[_c("h4",[_vm._v("আবেদনের সঠিক তথ্য দিন")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_vm._v("আবেদন আই.ডি "),_c("span",{staticClass:"lmt-tooltip",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"আবেদন আই.ডি লিখুন"}},[_c("i",{staticClass:"fa fa-question-circle",attrs:{"aria-hidden":"true"}})])]);},function(){var _vm=this,_c=_vm._self._c;return _c("button",{staticClass:"btn active btn-outline-success btn-simple searchBtn",attrs:{tabindex:"0"}},[_c("i",{staticClass:"fa mr-2 fa-search",attrs:{"aria-hidden":"true"}}),_vm._v(" খুজুন\n                            ")]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-status-icon icon-ext-link"},[_c("img",{attrs:{src:"/images/2022/08/icon-link-external.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"tracking_form my-2 mx-3"},[_c("span",{staticClass:"text-justify"},[_vm._v(" আপনার আবেদনটিতে কার্যক্রম গ্রহণ করার জন্য আবেদন ফি প্রদান করা হয়নি। আপনি যদি আবেদন ফি প্রদান করতে চান তাহলে সংশ্লিষ্ট উপজেলা ভূমি অফিসে যোগাযোগ করুন। ")])])])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row d-block"},[_c("div",{staticClass:"tracking_form my-2 mx-3"},[_c("img",{staticStyle:{"float":"left",width:"5%","margin-right":"5px"},attrs:{src:"/images/images_check_mark.png",alt:""}}),_vm._v(" "),_c("p",{staticClass:"text-justify m-0"},[_vm._v("অভিনন্দন ! আপনার খতিয়ান ফি (পরিশোধিত)।")])])])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row d-block"},[_c("div",{staticClass:"tracking_form my-2 mx-3"},[_c("img",{staticStyle:{"float":"left",width:"5%","margin-right":"5px"},attrs:{src:"/images/images_check_mark.png",alt:""}}),_vm._v(" "),_c("p",{staticClass:"text-justify m-0"},[_vm._v(" অভিনন্দন! আপনার এই মামলার খতিয়ান প্রস্তুত আছে এবং আপনার খতিয়ান ফি (পরিশোধিত)। ")])])])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-src-dollar-white.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-src-dollar-white.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-document-blank.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-calendar-plus.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-list.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"btn-text"},[_vm._v("নামঞ্জুর আবেদন "),_c("br"),_vm._v("পুর্নবিবেচনা")]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-edit.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-list.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-download-color-1.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-download-color-2.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-download-color-2.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-print.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticClass:"src-btn-icon"},[_c("img",{attrs:{src:"/images/2022/08/icon-download-color-3.svg",alt:"img"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"src-comments pt-3 mb-4"},[_c("div",{staticClass:"form-group"},[_c("h6",[_vm._v("সহকারী কমিশনার (ভূমি) এর নিকট নামঞ্জুর আবেদন পুর্নবিবেচনা সংক্রান্ত কোনো অনুরোধ করতে চাইলে নিম্নোক্ত তথ্য প্রদান করুন। ")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("p",{staticClass:"text-sm text-gray left",staticStyle:{color:"gray"}},[_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v(" * ")]),_vm._v("ফাইলটি অবশ্যই PDF ফরমেটে হতে হবে।\n                                                         "),_c("br"),_vm._v(" "),_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v(" * ")]),_vm._v("\n                                                         PDF ফাইল সাইজঃ সর্বোচ্চ ২৫ MB এর মধ্যে হতে হবে। প্রতি পেজ সর্বোচ্চ ১.২৫MB এর মধ্যে হতে হবে।\n                                                     ")]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"text-center",attrs:{colspan:"4"}},[_vm._v("চাহিত তথ্য/দলিলের তালিকা  ")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"shortFallComment"}},[_c("b",[_vm._v("কারণ উল্লেখপূর্বক ব্যাখ্যা প্রদান করুন")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"src-comments pt-3 mb-4"},[_c("div",{staticClass:"form-group"},[_c("h6",[_vm._v("সহকারী কমিশনার (ভূমি) যে সকল কারনে আবেদনটি অসম্পূর্ণ হিসেবে গন্য করেছেন তৎসংশ্লিষ্ট সঠিক তথ্য/নথি প্রদান করে দাখিল করুন। ")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("p",{staticClass:"text-sm text-gray left",staticStyle:{color:"gray"}},[_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v(" * ")]),_vm._v("ফাইলটি অবশ্যই PDF ফরমেটে হতে হবে।\n                                                         "),_c("br"),_vm._v(" "),_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v(" * ")]),_vm._v("\n                                                         PDF ফাইল সাইজঃ সর্বোচ্চ ২৫ MB এর মধ্যে হতে হবে। প্রতি পেজ সর্বোচ্চ ১.২৫MB এর মধ্যে হতে হবে।\n                                                     ")]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",{staticClass:"text-center",attrs:{colspan:"4"}},[_vm._v("চাহিত তথ্য/দলিলের তালিকা ")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"shortFallComment"}},[_c("b",[_vm._v("কারণ উল্লেখপূর্বক ব্যাখ্যা প্রদান করুন")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("a",{staticClass:"card-link",attrs:{"data-toggle":"collapse",href:"#collapseTwo"}},[_c("div",{staticClass:"card-header",staticStyle:{"background-color":"#ECEFEB"}},[_c("span",{staticStyle:{color:"green"}},[_vm._v(" পূর্বে পাঠানো অনুরোধ গুলোর অবস্থা দেখুন                     "),_c("i",{staticClass:"fa fa-arrow-down",staticStyle:{"float":"right"}})])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",{staticStyle:{"background-color":"#EFEFEF"}},[_c("tr",[_c("td",[_vm._v("ক্রমিক নম্বর")]),_vm._v(" "),_c("td",[_vm._v("মতামত")]),_vm._v(" "),_c("td",[_vm._v("অনুরোধের তারিখ")]),_vm._v(" "),_c("td",[_vm._v("অবস্থা")]),_vm._v(" "),_c("td",[_vm._v("বাতিলের কারণ")]),_vm._v(" "),_c("td",[_vm._v("গ্রহনযোগ্য/বাতিলের তারিখ")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"modal-body"},[_c("p",{staticStyle:{"font-size":"14px","text-align":"justify",color:"#721c24"}},[_vm._v("সহকারী কমিশনার ভূমি এর নিকট আপনার\n                                                একটি অনুরোধ চলমান আছে। উক্ত অনুরোধটি বাতিল বা গ্রহণযোগ্য হওয়ার পর পুনরায় নতুন\n                                                অনুরোধ করতে পারবেন। ধন্যবাদ। ")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"form-group"},[_c("h6",[_vm._v("সহকারী কমিশনার (ভূমি) এর নিকট খতিয়ান সংশোধন সংক্রান্ত কোনো অনুরোধ করতে চাইলে নিম্নোক্ত তথ্য প্রদান করুন। ")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"namunjurComment"}},[_c("b",[_vm._v("কারণ উল্লেখপূর্বক ব্যাখ্যা প্রদান করুন")]),_vm._v(" "),_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v(" *")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",[_c("label",[_c("b",[_vm._v("প্রয়োজনে দালিলিক প্রমাণক সংযুক্ত করুন")]),_vm._v(" "),_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v("*")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("tr",[_c("th",{attrs:{width:"30%"}},[_vm._v("ডকুমেন্ট")]),_vm._v(" "),_c("th",{staticClass:"text-center"},[_vm._v("ডকুমেন্ট ধরন")]),_vm._v(" "),_c("th",{staticClass:"text-center"},[_vm._v("অ্যাকশন")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"khatianCurrType"}},[_vm._v("সংযুক্ত কাগজের ধরণ "),_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v(" *")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("a",{staticClass:"card-link",attrs:{"data-toggle":"collapse",href:"#collapseThree"}},[_c("div",{staticClass:"card-header",staticStyle:{"background-color":"#ECEFEB"}},[_c("span",{staticStyle:{color:"green"}},[_vm._v(" পূর্বে পাঠানো অনুরোধ গুলোর অবস্থা দেখুন                     "),_c("i",{staticClass:"fa fa-arrow-down",staticStyle:{"float":"right"}})])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",{staticStyle:{"background-color":"#EFEFEF"}},[_c("tr",[_c("td",[_vm._v("ক্রমিক নম্বর")]),_vm._v(" "),_c("td",[_vm._v("মতামত")]),_vm._v(" "),_c("td",[_vm._v("অনুরোধের তারিখ")]),_vm._v(" "),_c("td",[_vm._v("শুনানীর তারিখ")]),_vm._v(" "),_c("td",[_vm._v("অবস্থা")]),_vm._v(" "),_c("td",[_vm._v("বাতিলের কারণ")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"form-group"},[_c("h6",[_vm._v("সহকারী কমিশনার (ভূমি) এর নিকট শুনানি সংক্রান্ত কোনো পরিবর্তনের জন্য অনুরোধ করতে\n                                                        চাইলে নিম্নোক্ত তথ্য প্রদান করুন। ")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"sunaniComment"}},[_c("b",[_vm._v("কারণ উল্লেখপূর্বক ব্যাখ্যা প্রদান করুন")]),_vm._v(" "),_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_vm._v("শুনানির জন্য আপনার কাঙ্খিত ধরণ সিলেক্ট করুন "),_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_c("b",[_vm._v("শুনানির জন্য আপনার কাঙ্খিত তারিখ ও সময় নির্বাচন করুন")]),_vm._v(" "),_c("span",{staticClass:"required",staticStyle:{"font-size":"0.70rem !important"}},[_vm._v("*")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("small",[_vm._v("শুনানির জন্য আদেশে যে "),_c("b",[_vm._v("ধরণ")]),_vm._v(" এবং "),_c("b",[_vm._v("তারিখ")]),_vm._v(" দেয়া আছে সে মোতাবেক প্রাথমিক ভাবে সেট করে দেয়া আছে। আপনি পরিবর্তন করতে পারবেন।")]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"section-title text-center"},[_c("h5",[_vm._v("আবেদনের ধাপ")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"src-step-item step-thead"},[_c("div",{staticClass:"step-title"},[_vm._v("ধাপসমূহ")]),_vm._v(" "),_c("div",{staticClass:"step-status"},[_vm._v("অবস্থা")]),_vm._v(" "),_c("div",{staticClass:"step-desc"},[_vm._v("বিবরণ")])]);}];render._withStripped=true;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing/SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n#govt .on-head h3 {\r\n    font-size: 15px;\r\n    padding: 12px 0px 12px 0px;\n}\n.btnColor {\r\n    background: #7030a0 !important;\r\n    color: #fff !important;\r\n    border: 1px solid #7030a0 !important;\n}\n#govt .on-head {\r\n    text-align: center;\r\n    background: green;\r\n    color: white;\n}\n#govt .on-image img {\r\n    max-width: 70%;\r\n    max-height: 70%;\r\n    alignment: center;\r\n    size: 50px;\n}\n#govt .on-image {\r\n    width: 89%;\r\n    margin: auto;\r\n    margin-top: 58px;\r\n    alignment: center;\r\n    display: flex;\r\n    justify-content: center;\n}\n#govt .name {\r\n    text-align: center;\r\n    font-size: 19px;\r\n    margin-top: 30px;\n}\n.side_part #division {\r\n    text-align: left;\n}\n.side_part #appliID {\r\n    text-align: right;\n}\n#govt input#appliID {\r\n    width: 70%;\r\n    height: 39px;\r\n    border: 1px solid gainsboro;\r\n    border-radius: 5px;\r\n    margin-top: 23px;\r\n    margin-left: 10px;\n}\n#govt .search-button button {\r\n    background: white;\r\n    outline: none;\r\n    color: #656464;\r\n    border: 1px solid gainsboro;\r\n    box-shadow: 0 1px 5px rgb(134 159 178 60%);\r\n    padding: 5px 11px 5px 11px;\r\n    border-radius: 5px;\n}\n#govt .search-button {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    margin-bottom: 117px;\n}\n.tracking_form {\r\n    position: relative;\r\n    box-shadow: 0px 0px 5px #aaa;\r\n    padding: 10px;\r\n    background: white;\r\n    text-shadow: 0px 0px 0px #000000;\r\n    font-weight: 500;\r\n    margin: 10px 0px;\r\n    font-size: 14px;\n}\n.application_tracking_info td {\r\n    font-weight: normal;\n}\n.gatewayDiv {\r\n    margin: 10px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 10px #ddd;\r\n    width: 29%;\n}\n.gatewayDiv input[type=radio], .lvl2GatewayDiv input[type=radio] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n    visibility: hidden;\n}\n.gatewayDiv p {\r\n    text-align: center;\r\n    margin: 3px 0px;\r\n    font-size: 12px;\n}\n.gatewayDiv img {\r\n    height: 50px;\r\n    display: block;\r\n    margin: auto;\n}\n.is_application {\r\n    display: none;\n}\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n    /* display: none; <- Crashes Chrome on hover */\r\n    -webkit-appearance: none;\r\n    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */\n}\ninput[type=number] {\r\n    -moz-appearance: textfield; /* Firefox */\n}\n.form-group .requiredd:after {\r\n    content: \" *\";\r\n    color: red;\r\n    font-weight: 100;\n}\ninput::-moz-placeholder {\r\n    font-size: 14px !important;\n}\ninput::placeholder {\r\n    font-size: 14px !important;\n}\n.content-body {\r\n    padding: 1.5rem 0rem;\n}\n.btn-simple {\r\n    margin-left: 1rem;\n}\n#opinion::-moz-placeholder{\r\n    font-size: 13px !important;\n}\n#opinion::placeholder{\r\n    font-size: 13px !important;\n}\r\n\r\n/* == Responsive mobile device == */\n@media screen and (min-device-width: 320px) and (max-device-width: 640px) {\n.cancelBtn, .searchBtn {\r\n        padding: 6px 4px;\r\n        font-size: 14px;\n}\n.content-footer .btn {\r\n        min-width: 102px;\n}\n.btn-simple {\r\n        margin-left: 7px;\n}\n.page-container-custom {\r\n        padding-right: 15px;\r\n        padding-left: 15px;\n}\n.applicationStatusBtn, .tracking_form {\r\n        font-size: 12px;\n}\n}\r\n\r\n/*New add*/\n#input_bangla_date_pick::-moz-placeholder, #sunaniComment::-moz-placeholder {\r\n    font-size: 13px !important;\n}\n#input_bangla_date_pick::placeholder, #sunaniComment::placeholder {\r\n    font-size: 13px !important;\n}\n.upload-btn-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\n}\n.upload-btn-wrapper input[type=file] {\r\n    font-size: 100px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0;\n}\ntextarea::-moz-placeholder{\r\n    font-size: 12px !important;\n}\ntextarea::placeholder{\r\n    font-size: 12px !important;\n}\n.step-title p{\r\n    padding-bottom:0px!important;\r\n    margin-bottom: 0px!important;\n}\n.user-info-desc{\r\n    padding-bottom:0px!important;\r\n    margin-bottom: 5px!important;\n}\n.user-info-item{\r\n    padding-bottom:0px!important;\r\n    margin-bottom: 0px!important;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Landing/SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css&");

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

/***/ "./resources/js/components/Landing/SearchApplication.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Landing/SearchApplication.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchApplication_vue_vue_type_template_id_477fa6d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchApplication.vue?vue&type=template&id=477fa6d6& */ "./resources/js/components/Landing/SearchApplication.vue?vue&type=template&id=477fa6d6&");
/* harmony import */ var _SearchApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchApplication.vue?vue&type=script&lang=js& */ "./resources/js/components/Landing/SearchApplication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchApplication_vue_vue_type_style_index_0_id_477fa6d6_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css& */ "./resources/js/components/Landing/SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchApplication_vue_vue_type_template_id_477fa6d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchApplication_vue_vue_type_template_id_477fa6d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Landing/SearchApplication.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Landing/SearchApplication.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Landing/SearchApplication.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchApplication.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/SearchApplication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Landing/SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Landing/SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_style_index_0_id_477fa6d6_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/SearchApplication.vue?vue&type=style&index=0&id=477fa6d6&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_style_index_0_id_477fa6d6_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_style_index_0_id_477fa6d6_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_style_index_0_id_477fa6d6_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_style_index_0_id_477fa6d6_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Landing/SearchApplication.vue?vue&type=template&id=477fa6d6&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Landing/SearchApplication.vue?vue&type=template&id=477fa6d6& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_template_id_477fa6d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchApplication.vue?vue&type=template&id=477fa6d6& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Landing/SearchApplication.vue?vue&type=template&id=477fa6d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_template_id_477fa6d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchApplication_vue_vue_type_template_id_477fa6d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);