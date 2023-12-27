(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/croy_sutro_application.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/croy_sutro_application.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/ValidationFile */ "./resources/js/helpers/ValidationFile.js");
/* harmony import */ var _Form_landinfo_croy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Form/landinfo_croy */ "./resources/js/components/Form/landinfo_croy.vue");
/* harmony import */ var _Form_grohita_croy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Form/grohita_croy */ "./resources/js/components/Form/grohita_croy.vue");
/* harmony import */ var _Form_protinidhi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Form/protinidhi */ "./resources/js/components/Form/protinidhi.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/FileUpload */ "./resources/js/helpers/FileUpload.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Form_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Form/Tab */ "./resources/js/components/Form/Tab.vue");
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
  name: 'CroySutroApplication',
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('checkDataCroySutro', ['firstStepData', 'imageInfo', 'secondStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('checkDataCroySutro', ['fetchFirstStepData', 'fetchSecondStepData', 'fetchThirdStepData', 'fetchFullStateData'])),
  components: {
    landinfo_croy: _Form_landinfo_croy__WEBPACK_IMPORTED_MODULE_3__["default"],
    grohita_croy: _Form_grohita_croy__WEBPACK_IMPORTED_MODULE_4__["default"],
    protinidhi: _Form_protinidhi__WEBPACK_IMPORTED_MODULE_5__["default"],
    Tab: _Form_Tab__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      JSONString: '',
      upazila_id_state: '',
      upazila_list: [],
      active_tab: 'tofsil',
      componentKey: 0,
      protinidhi_tmp_img: '',
      applicationData: {
        is_next_page: 1,
        regular_applicaton: 0,
        khatian_txt: '',
        selected_record_id: 0
      },
      applicationPrimaryInfo: {
        owner_type: ''
      },
      loading_icon: false,
      land_ownership_reference_ids: [],
      land_ownership_reference: [],
      selected_land_ownership_reference_text: [],
      land_amount_types: {},
      land_record_types: {},
      required_documents: {},
      application_land_schedules: [{
        main_data: [{
          land_record_type_id: 0,
          khatian_no: '',
          dag_no: '',
          amount_of_land: '',
          land_amount_type_id: 1,
          dalil_no: '',
          dalil_date: '',
          sub_register_office_name_text: '',
          sub_register_office_name: '',
          if_dag: 1,
          if_dalil: 0,
          first_row: 1,
          others_row: 0,
          if_main: 1,
          daglist: [],
          ownerList: [],
          dag_flag: 0,
          amount_of_land_flag: 0,
          dalil_no_flag: 0,
          dalil_date_flag: 0,
          sub_offc_flag: 0,
          loading_icon: false,
          ldTax_info_found: 0,
          ldTaxArray: [],
          is_dolil_found: 0,
          file_path: '',
          agoto_khatian_jomir_poriman_txt: '',
          korton_krito_jomir_poriman_txt: '',
          sub_reg_district_id: '',
          sub_reg_office_list: {},
          land_rate_in_mouja: '',
          land_rate_in_mouja_is_required: false,
          is_readable: 0
        }],
        first_row: 1,
        others_row: 0,
        if_main: 1,
        total_land_khotian: '',
        dag_button: true,
        dalil_button: true
      }],
      nidPhotoContainer: {
        citizen_applicant: [],
        Delegate: []
      },
      signaturePhotoContainer: {
        citizen_applicant: []
      },
      citizen_applicant: [],
      citizen_applicant_under18_probahsi: [],
      //new added
      donor_list: [],
      //new added
      Delegate: [],
      documentFilePath: [{
        path: '',
        doc_type: ''
      }],
      storageData: {
        office_info: [],
        is_company_transfard: '',
        last_tax_given: '',
        chekc_nid_exist: '',
        check_rs_exist: '',
        is_rs_owner: '',
        is_namjari_exist: '',
        district_text: '',
        upazila_text: '',
        office_text: '',
        mouja_text: '',
        division_id: '',
        district_id: '',
        upazila_id: '',
        mouja_id: '',
        office_id: '',
        land_ownership_reference: [],
        land_ownership_reference_ids: [],
        citizen_applicant: [],
        citizen_applicant_under18_probahsi: [],
        //new added
        donor_list: [],
        //new added
        Delegate: [],
        application_land_schedules: [],
        total_land_amount: 0,
        total_land_amount_txt: '',
        selected_record_id: 0
      },
      allDistricts: [],
      tempNidArray: [],
      tempCompanyNameArray: [],
      finalOwnerShipText: '',
      land_rate_enable_month_count: "12"
    };
  },
  mounted: function mounted() {
    this.forceRerender();
    this.$forceUpdate();
    var commonStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"])(this.allCommonDataFirstPage);
    var ownerShipData = commonStateData.ownerShipData;
    for (var prop in ownerShipData) {
      if (ownerShipData[prop].active) {
        this.selected_land_ownership_reference_text.push(ownerShipData[prop].display);
      }
    }
    var requestData = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_8__["default"].decryption(this.$route.params.id);
    if (requestData == 1) {
      return window.location.href = '/application-request';
    }
    var firstStepStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"])(this.fetchFirstStepData);
    var secondStepStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"])(this.fetchSecondStepData);
    this.allDistricts = firstStepStateData.allDistricts;
    this.getToken();
    this.getNamjariData();
    this.getAllDistricts();
    var commonQuestionData = this.allCommonDataFirstPage.questions;
    this.applicationData.selected_record_id = typeof commonQuestionData.last_jorip_info != "undefined" && commonQuestionData.last_jorip_info != '' ? commonQuestionData.last_jorip_info : 6;
    if (this.$store.state.firstPageCommonData.form_type == 4) {
      // this.setPrevPageData('');
      // this.setPrevPageData(firstStepStateData);
    }
    if (!secondStepStateData) {
      this.setPrevPageData(firstStepStateData);
    }

    /*RESET APPLICANT DATA BASED ON CITIZEN TYPE FROM PREVIOUS PAGE*/
    if (secondStepStateData) {
      /**
       * check citizen mobile no has been changed or not.
       * if changed then update secondStepStateData
       */

      secondStepStateData.Delegate[0].mobile = firstStepStateData.Delegate.mobile;
      if (secondStepStateData.citizen_applicant.length > 0) {
        secondStepStateData.citizen_applicant[0].mobile = firstStepStateData.Owner.mobile;
      }
      var ownerState = commonStateData.questions.owner_type_state;
      if (ownerState.split('_')[0] != '' && ownerState.split('_')[0] != ownerState.split('_')[1]) {
        // owner has been changed
        if (ownerState.split('_')[1] == 2) {
          // notun vabe protinidhi hoice
          // remove applicant citizen 1st index data
          secondStepStateData.citizen_applicant.splice(0, 1);
        } else if (ownerState.split('_')[1] == 1) {
          // notun vabe grohita hoice
          // add applicant citizen at 1st index
          secondStepStateData.citizen_applicant.splice(0, 0, secondStepStateData.Delegate[0]);
        }
        this.getSecondStepData('');
        this.getSecondStepData(secondStepStateData);

        /*UPDATE OWNER STATE DATA*/
        commonStateData.questions.owner_type_state = ownerState.split('_')[1] + '_' + ownerState.split('_')[1];
        this.setFirstPageCommonData('');
        this.setFirstPageCommonData(commonStateData);
      }
      if (this.$store.state.firstPageCommonData.form_type == 4 || this.$store.state.firstPageCommonData.form_type == 5) {
        this.donor_list = secondStepStateData.donor_list;
      }
    }
    if (secondStepStateData) {
      this.setStorageDataSecondStep();
      this.tempNidArray = [];
      this.tempCompanyNameArray = [];
      if (secondStepStateData.tempNidArray) {
        var tempNidArrayLength = secondStepStateData.tempNidArray.length;
        if (tempNidArrayLength > 0) {
          for (var i = 0; i < tempNidArrayLength; i++) {
            if (secondStepStateData.tempNidArray[i] != '') {
              this.tempNidArray.push(secondStepStateData.tempNidArray[i]);
            }
          }
        }
      }
      if (secondStepStateData.tempCompanyNameArray) {
        var tempCompanyNameArrayLength = secondStepStateData.tempCompanyNameArray.length;
        if (tempCompanyNameArrayLength > 0) {
          for (var _i = 0; _i < tempCompanyNameArrayLength; _i++) {
            if (secondStepStateData.tempCompanyNameArray[_i] != '') {
              this.tempCompanyNameArray.push(secondStepStateData.tempCompanyNameArray[_i]);
            }
          }
        }
      }
      if (this.allCommonDataFirstPage.questions.check_nid_exist == 1) {
        this.citizen_applicant_under18_probahsi = [];
      }
    }
    var main_row = 0;
    if (secondStepStateData.application_land_schedules) {
      main_row = secondStepStateData.application_land_schedules.length;
    }
    var land_schedules_stateData = secondStepStateData.application_land_schedules;
    if (main_row > 0) {
      this.setLandScheduleStorage(main_row, land_schedules_stateData);
    }
    this.prepareOwnershipText();
  },
  created: function created() {
    if (this.allCommonDataFirstPage == '') {
      return window.location.href = '/';
    }
    if (this.allCommonDataFirstPage.questions.check_nid_exist == 2) {
      var secondStepStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"])(this.fetchSecondStepData);
      if (secondStepStateData) {
        this.citizen_applicant_under18_probahsi = secondStepStateData.citizen_applicant_under18_probahsi;
        if (this.citizen_applicant_under18_probahsi.length > 0) {
          for (var i = 0; i < this.citizen_applicant_under18_probahsi.length; i++) {
            this.viewImage(this.citizen_applicant_under18_probahsi[i].uuid, 'under18_probahsi', i);
          }
        }
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('tokenState', ['getToken'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('checkDataCroySutro', ['getFirstStepData', 'getImageInfo', 'getSecondStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData', 'setTrackingNo', 'setMasterTrackingNo', 'setFormType', 'setAppType'])), {}, {
    forceRerender: function forceRerender() {
      this.componentKey += 1;
    },
    customDateFormat: function customDateFormat(date) {
      return moment__WEBPACK_IMPORTED_MODULE_6___default()(date).format('YYYY-MM-DD');
    },
    nextPage: function nextPage(e) {
      this.applicationData.actionBtn = e;
      this.$refs.applicant_citizen_child_ref.application_citizen_data_format();
    },
    application_citizen_set_data: function application_citizen_set_data(formatted_data) {
      this.application_citizen_applicant = [];
      this.application_citizen_applicant = formatted_data;
    },
    getNamjariData: function getNamjariData() {
      var _this = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/namjari-data', '', {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this.divisions = resp.data.data.divisions;
          _this.land_amount_types = resp.data.data.land_amount_types;
          _this.land_record_types = resp.data.data.land_record_types;
          _this.required_documents = resp.data.data.required_documents;
        }
        // else{
        //     console.log(resp.data.message);
        // }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    getAllDistricts: function getAllDistricts() {
      var _this2 = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/get-all-district', '', {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this2.allDistricts = resp.data.data.districts;
        }
        // else{
        //     console.log(resp.data.message);
        // }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    saveApplicationForm: function saveApplicationForm() {
      var is_exist_grohita = 0;
      if (this.tempNidArray.length > 0) {
        is_exist_grohita = 1;
      }
      if (this.tempCompanyNameArray.length > 0) {
        is_exist_grohita = 2;
      }
      if (is_exist_grohita === 0) {
        alert('গ্রহীতার তথ্য সংযোজন করা হয়নি');
        return false;
      }
      if (this.citizen_applicant.length == 0 && this.citizen_applicant_under18_probahsi.length == 0) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_8__["default"].sweetAlertInformativeBox(this, 'বাদী/গ্রহীতার তথ্য প্রদান করুন। ', 'ঠিক আছে');
        return false;
      }
      var validateData = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_2__["default"].validationMechanism(this.$refs.application_form_land_info, '.required_field', 'required');
      var validateCitizenData = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_2__["default"].validationMechanism(this.$refs.applicant_citizens, '.required_field', 'required');
      var validateProtinidiData = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_2__["default"].validationMechanism(this.$refs.applicantion_protinidhi, '.required_field', 'required');
      var validateDataDatePicker = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_2__["default"].validationMechanism(this.$refs.application_form_land_info, '.required_date_picker', 'date_picker');
      if (!validateData || !validateCitizenData || !validateDataDatePicker || !validateProtinidiData) {
        return false;
      }
      this.loading_icon = true;
      this.removeTempImage();
      this.storageData.citizen_applicant = this.citizen_applicant;
      this.storageData.citizen_applicant_under18_probahsi = this.citizen_applicant_under18_probahsi,
      //new added;
      this.storageData.donor_list = this.donor_list,
      //new added;
      this.storageData.tempNidArray = this.tempNidArray;
      this.storageData.tempCompanyNameArray = this.tempCompanyNameArray;
      this.storageData.Delegate = this.Delegate;
      this.storageData.application_land_schedules = [];
      this.storageData.application_land_schedules = this.application_land_schedules;
      this.storageData.total_land_amount = this.applicationData.total_land_amount;
      this.storageData.total_land_amount_txt = this.applicationData.total_land_amount_txt;
      this.storageData.basic_data = this.applicationData;
      this.getSecondStepData('');
      this.getSecondStepData(this.storageData);
      this.loading_icon = false;
      return this.$router.push({
        path: '/application-document/' + this.$route.params.id
      });
    },
    setNidImageToContainer: function setNidImageToContainer(imageInfo, type, key) {
      var _this3 = this;
      if (typeof imageInfo != 'undefined' && imageInfo != null) {
        var url = this.apiBaseURL + '/fetch-base64';
        var form_data = new FormData();
        form_data.append('uuid', imageInfo);
        _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_7__["default"].getNidImgByUUID(url, form_data, this.headers).payload.then(function (data) {
          _this3.forceRerender();
          _this3.$forceUpdate();
          _this3.nidPhotoContainer[type][key] = data.data.data.base64;
          if (type == 'citizen_applicant') {
            _this3.citizen_applicant[key].temp_img = data.data.data.base64;
          } else if (type == 'Delegate') {
            _this3.Delegate[key].temp_img = data.data.data.base64;
          }
          _this3.forceRerender();
          _this3.$forceUpdate();
        })["catch"](function (err) {
          console.log("something went wrong");
        });
      }
    },
    setSignImageToContainer: function setSignImageToContainer(imageInfo, type, key) {
      var _this4 = this;
      if (typeof imageInfo != 'undefined' && imageInfo != '') {
        var url = this.apiBaseURL + '/fetch-base64';
        var form_data = new FormData();
        form_data.append('uuid', imageInfo);
        _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_7__["default"].getNidImgByUUID(url, form_data, this.headers).payload.then(function (data) {
          _this4.forceRerender();
          _this4.$forceUpdate();
          _this4.signaturePhotoContainer[type][key] = 'data:image/png;base64,' + data.data.data.base64;
          if (type == 'citizen_applicant') {
            _this4.citizen_applicant[key].temp_sig = data.data.data.base64;
          } else if (type == 'Delegate') {
            _this4.Delegate[key].temp_sig = data.data.data.base64;
          }
        })["catch"](function () {
          console.log("something went wrong");
        });
      }
    },
    viewImage: function viewImage(uuid, type, index) {
      var _this5 = this;
      var url = this.apiBaseURL + '/fetch-base64';
      var form_data = new FormData();
      form_data.append('uuid', uuid);
      var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_7__["default"].viewPhotoFromUUID(url, form_data, this.headers);
      response.payload.then(function (data) {
        if (type == 'under18_probahsi') {
          _this5.citizen_applicant_under18_probahsi[index].photoUploadLoading = false;
          _this5.citizen_applicant_under18_probahsi[index].temp_img = data.data.data.base64;
          _this5.$forceUpdate();
        }
      })["catch"](function (err) {
        console.log(err.response.data.message);
        if (type == 'under18_probahsi') {
          _this5.citizen_applicant_under18_probahsi[index].photoUploadLoading = false;
        }
      });
    },
    setPrevPageData: function setPrevPageData(obj) {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var single_district_obj, district_id_state, formData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this6.land_ownership_reference_ids = obj.land_ownership_reference_ids;
                _this6.land_ownership_reference = obj.land_ownership_reference;
                _this6.application_land_schedules[0].main_data[0].land_record_type_id = _this6.applicationData.selected_record_id;
                _this6.allDistricts = obj.allDistricts;
                single_district_obj = _this6.allDistricts.find(function (_ref) {
                  var name_bn = _ref.name_bn;
                  return name_bn === obj.Delegate.district_text;
                });
                district_id_state = '';
                if (single_district_obj) {
                  district_id_state = single_district_obj.id;
                }
                formData = new FormData();
                formData.append('district_id', Number(district_id_state));
                _context.next = 11;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(_this6.apiBaseURL + '/get-upazilas-by-district', formData, {
                  headers: _this6.headers
                }).then(function (resp) {
                  if (resp.data.status == 200 && resp.data.responseCode == 200) {
                    _this6.upazila_list = resp.data.data.upazilas;
                    var single_upazila_obj = Object.keys(_this6.upazila_list).find(function (key) {
                      return _this6.upazila_list[key] === obj.Delegate.upazila_text;
                    });
                    _this6.upazila_id_state = '';
                    if (single_upazila_obj) {
                      _this6.upazila_id_state = single_upazila_obj;
                    }
                  }
                  // else{
                  //     console.log(resp.data.message);
                  // }
                })["catch"](function (error) {
                  console.log('something went wrong to fetch all districts :' + error.response.data.message);
                });
              case 11:
                if (obj.is_grohita == 1) {
                  if (obj.Owner.nid != '' && obj.Owner.dob != '') {
                    _this6.tempNidArray.push(obj.Owner.nid);
                    _this6.citizen_applicant.push({
                      owner_type_text: obj.Owner.owner_type_text,
                      nid: obj.Owner.nid,
                      dob: obj.Owner.dob != '' ? _this6.customDateFormat(obj.Owner.dob) : '',
                      mobile: obj.Owner.mobile,
                      nid_photo: '',
                      photoUploadLoading: '',
                      nid_name: obj.Owner.nid_name,
                      nid_name_en: obj.Owner.nid_name_en,
                      nid_father_name: obj.Owner.nid_father_name,
                      nid_mother_name: obj.Owner.nid_mother_name,
                      nid_address: obj.Owner.nid_address,
                      nid_gender: obj.Owner.nid_gender,
                      spouse: obj.Owner.spouse,
                      hash: obj.Owner.hash,
                      email: obj.Owner.email,
                      is_delete: obj.Owner.is_delete,
                      nid_verified: typeof obj.Owner.nid_verified != "undefined" ? obj.Owner.nid_verified : '',
                      requested_uid: obj.Owner.requested_uid,
                      signature_url_process: 0,
                      signature_url: '',
                      district_id: district_id_state,
                      upazila_id: _this6.upazila_id_state,
                      upazilas: _this6.upazila_list,
                      is_master: true
                    });
                    _this6.signaturePhotoContainer.citizen_applicant[0] = '';

                    // this.tempNidArray.push(obj.Owner.nid);

                    _this6.Delegate.push({
                      nid: obj.Owner.nid,
                      dob: obj.Owner.dob != '' ? _this6.customDateFormat(obj.Owner.dob) : '',
                      mobile: obj.Owner.mobile,
                      nid_photo: '',
                      nid_name: obj.Owner.nid_name,
                      nid_name_en: obj.Owner.nid_name_en,
                      nid_father_name: obj.Owner.nid_father_name,
                      nid_mother_name: obj.Owner.nid_mother_name,
                      nid_address: obj.Owner.nid_address,
                      nid_gender: obj.Owner.nid_gender,
                      spouse: obj.Owner.spouse,
                      hash: obj.Owner.hash,
                      email: obj.Owner.email,
                      designation: obj.Owner.designation,
                      is_delete: obj.Owner.is_delete,
                      nid_verified: typeof obj.Owner.nid_verified != "undefined" ? obj.Owner.nid_verified : '',
                      requested_uid: obj.Owner.requested_uid,
                      district_id: district_id_state,
                      upazila_id: _this6.upazila_id_state,
                      upazilas: _this6.upazila_list,
                      is_protinidi: false
                    });
                  } else {
                    // this condition new added for when select chnage protinidi to grohita
                    _this6.tempNidArray.push(obj.Delegate.nid);
                    _this6.citizen_applicant.push({
                      owner_type_text: '',
                      nid: obj.Delegate.nid,
                      dob: obj.Delegate.dob != '' ? _this6.customDateFormat(obj.Delegate.dob) : '',
                      mobile: obj.Delegate.mobile,
                      nid_photo: obj.Delegate.nid_photo,
                      photoUploadLoading: '',
                      uuid: '',
                      nid_name: obj.Delegate.nid_name,
                      nid_name_en: obj.Delegate.nid_name_en,
                      nid_father_name: obj.Delegate.nid_father_name,
                      nid_mother_name: obj.Delegate.nid_mother_name,
                      nid_address: obj.Delegate.nid_address,
                      nid_gender: obj.Delegate.nid_gender,
                      spouse: obj.Delegate.spouse,
                      hash: obj.Delegate.hash,
                      email: obj.Delegate.email,
                      is_delete: obj.Delegate.is_delete,
                      nid_verified: typeof obj.Delegate.nid_verified != "undefined" ? obj.Delegate.nid_verified : '',
                      requested_uid: obj.Delegate.requested_uid,
                      signature_url_process: 0,
                      signature_url: '',
                      district_id: district_id_state,
                      upazila_id: _this6.upazila_id_state,
                      upazilas: _this6.upazila_list,
                      is_master: true
                    });
                    _this6.signaturePhotoContainer.citizen_applicant[0] = '';
                    _this6.Delegate.push({
                      nid: obj.Delegate.nid,
                      dob: obj.Delegate.dob != '' ? _this6.customDateFormat(obj.Delegate.dob) : '',
                      mobile: obj.Delegate.mobile,
                      nid_photo: obj.Delegate.nid_photo,
                      nid_name: obj.Delegate.nid_name,
                      nid_name_en: obj.Delegate.nid_name_en,
                      nid_father_name: obj.Delegate.nid_father_name,
                      nid_mother_name: obj.Delegate.nid_mother_name,
                      nid_address: obj.Delegate.nid_address,
                      nid_gender: obj.Delegate.nid_gender,
                      spouse: obj.Delegate.spouse,
                      hash: obj.Delegate.hash,
                      email: obj.Delegate.email,
                      is_delete: obj.Delegate.is_delete,
                      nid_verified: typeof obj.Delegate.nid_verified != "undefined" ? obj.Delegate.nid_verified : '',
                      requested_uid: obj.Delegate.requested_uid,
                      district_id: district_id_state,
                      upazila_id: _this6.upazila_id_state,
                      upazilas: _this6.upazila_list,
                      is_protinidi: true
                    });
                  }
                } else {
                  _this6.tempNidArray.push(obj.Delegate.nid);
                  _this6.Delegate.push({
                    nid: obj.Delegate.nid,
                    dob: obj.Delegate.dob != '' ? _this6.customDateFormat(obj.Delegate.dob) : '',
                    mobile: obj.Delegate.mobile,
                    nid_photo: obj.Delegate.nid_photo,
                    nid_name: obj.Delegate.nid_name,
                    nid_name_en: obj.Delegate.nid_name_en,
                    nid_father_name: obj.Delegate.nid_father_name,
                    nid_mother_name: obj.Delegate.nid_mother_name,
                    nid_address: obj.Delegate.nid_address,
                    nid_gender: obj.Delegate.nid_gender,
                    spouse: obj.Delegate.spouse,
                    hash: obj.Delegate.hash,
                    email: obj.Delegate.email,
                    is_delete: obj.Delegate.is_delete,
                    nid_verified: typeof obj.Delegate.nid_verified != "undefined" ? obj.Delegate.nid_verified : '',
                    requested_uid: obj.Delegate.requested_uid,
                    district_id: district_id_state,
                    upazila_id: _this6.upazila_id_state,
                    upazilas: _this6.upazila_list,
                    is_protinidi: true
                  });
                }
                _this6.setImage();
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setImage: function setImage() {
      var imageInfo = this.allCommonDataFirstPage.citizenData.imageInfo;
      this.setUuidNidImage(imageInfo);
    },
    setUuidNidImage: function setUuidNidImage(imageInfo) {
      this.Delegate[0].nid_photo = imageInfo.uuid;
      this.setNidImageToContainer(imageInfo.uuid, 'Delegate', 0);
      if (imageInfo.is_grohita == 1) {
        if (this.citizen_applicant.length) {
          this.citizen_applicant[0].nid_photo = imageInfo.uuid;
          this.setNidImageToContainer(imageInfo.uuid, 'citizen_applicant', 0);
        }
      }
    },
    setStorageDataSecondStep: function setStorageDataSecondStep() {
      var secondStepStateData = this.fetchSecondStepData;
      if (secondStepStateData.citizen_applicant) {
        if (secondStepStateData.citizen_applicant.length > 0) {
          var citizen_applicant = secondStepStateData.citizen_applicant;
          this.citizen_applicant = [];
          for (var i = 0; i < citizen_applicant.length; i++) {
            this.setNidImageToContainer(citizen_applicant[i].nid_photo, 'citizen_applicant', i);
            this.setSignImageToContainer(citizen_applicant[i].signature_url, 'citizen_applicant', i);
            this.citizen_applicant.push({
              address: citizen_applicant[i].address,
              company_name: citizen_applicant[i].company_name,
              district_id: citizen_applicant[i].district_id,
              district_text: citizen_applicant[i].district_text,
              designation: citizen_applicant[i].designation,
              dob: citizen_applicant[i].dob,
              email: citizen_applicant[i].email,
              incorporation_date: citizen_applicant[i].incorporation_date,
              etin_number: citizen_applicant[i].etin_number,
              is_delete: citizen_applicant[i].is_delete,
              is_master: citizen_applicant[i].is_master,
              mobile: citizen_applicant[i].mobile,
              nid: citizen_applicant[i].nid,
              nid_address: citizen_applicant[i].nid_address,
              nid_father_name: citizen_applicant[i].nid_father_name,
              nid_gender: citizen_applicant[i].nid_gender,
              spouse: citizen_applicant[i].spouse,
              nid_mother_name: citizen_applicant[i].nid_mother_name,
              nid_name: citizen_applicant[i].nid_name,
              nid_name_en: citizen_applicant[i].nid_name_en,
              nid_photo: citizen_applicant[i].nid_photo,
              photoUploadLoading: citizen_applicant[i].photoUploadLoading,
              uuid: citizen_applicant[i].uuid,
              hash: citizen_applicant[i].hash,
              owner_index_txt: citizen_applicant[i].owner_index_txt,
              representative: citizen_applicant[i].representative,
              requested_uid: citizen_applicant[i].requested_uid,
              rjsc: citizen_applicant[i].rjsc,
              signature_url_process: citizen_applicant[i].signature_url_process,
              signature_url: citizen_applicant[i].signature_url,
              upazila_id: citizen_applicant[i].upazila_id,
              upazilas: citizen_applicant[i].upazilas,
              upazila_text: citizen_applicant[i].upazila_text,
              nid_verified: this.$store.state.firstPageCommonData.form_type == 4 || this.$store.state.firstPageCommonData.form_type == 5 ? citizen_applicant[i].nid_verified : ''
            });
          }
        }
      }
      if (secondStepStateData.Delegate) {
        this.Delegate.push({
          address: secondStepStateData.Delegate[0].address,
          company_name: secondStepStateData.Delegate[0].company_name,
          district_id: secondStepStateData.Delegate[0].district_id,
          dob: secondStepStateData.Delegate[0].dob,
          email: secondStepStateData.Delegate[0].email,
          incorporation_date: secondStepStateData.Delegate[0].incorporation_date,
          is_delete: secondStepStateData.Delegate[0].is_delete,
          is_protinidi: secondStepStateData.Delegate[0].is_protinidi,
          mobile: secondStepStateData.Delegate[0].mobile,
          nid: secondStepStateData.Delegate[0].nid,
          nid_address: secondStepStateData.Delegate[0].nid_address,
          nid_father_name: secondStepStateData.Delegate[0].nid_father_name,
          nid_gender: secondStepStateData.Delegate[0].nid_gender,
          spouse: secondStepStateData.Delegate[0].spouse,
          nid_mother_name: secondStepStateData.Delegate[0].nid_mother_name,
          nid_name: secondStepStateData.Delegate[0].nid_name,
          nid_photo: secondStepStateData.Delegate[0].nid_photo,
          hash: secondStepStateData.Delegate[0].hash,
          owner_index_txt: secondStepStateData.Delegate[0].owner_index_txt,
          representative: secondStepStateData.Delegate[0].representative,
          requested_uid: secondStepStateData.Delegate[0].requested_uid,
          rjsc: secondStepStateData.Delegate[0].rjsc,
          temp_img: secondStepStateData.Delegate[0].temp_img,
          upazila_id: secondStepStateData.Delegate[0].upazila_id,
          upazilas: secondStepStateData.Delegate[0].upazilas
        });
        this.setNidImageToContainer(secondStepStateData.Delegate[0].nid_photo, 'Delegate', 0);
      }
    },
    setLandScheduleStorage: function setLandScheduleStorage(main_row, land_schedules_stateData) {
      this.applicationData.total_land_amount = this.$store.state.checkDataCroySutro.secondStepData.total_land_amount;
      this.application_land_schedules = [];
      for (var i = 0; i < main_row; i++) {
        this.application_land_schedules.push({
          main_data: [],
          first_row: land_schedules_stateData[i].first_row,
          others_row: land_schedules_stateData[i].others_row,
          if_main: land_schedules_stateData[i].if_main,
          total_land_khotian: land_schedules_stateData[i].total_land_khotian,
          dag_button: land_schedules_stateData[i].dag_button,
          dalil_button: land_schedules_stateData[i].dalil_button
        });
        var main_data_row = land_schedules_stateData[i].main_data.length;
        for (var j = 0; j < main_data_row; j++) {
          var dataObject = {};
          if (land_schedules_stateData[i].main_data[j].if_dalil == 1) {
            dataObject = {
              dalil_no: land_schedules_stateData[i].main_data[j].dalil_no,
              loading_icon: land_schedules_stateData[i].main_data[j].loading_icon,
              dalil_date: land_schedules_stateData[i].main_data[j].dalil_date,
              sub_register_office_name_text: land_schedules_stateData[i].main_data[j].sub_register_office_name_text,
              sub_register_office_name: land_schedules_stateData[i].main_data[j].sub_register_office_name,
              if_main: land_schedules_stateData[i].main_data[j].if_main,
              if_dag: land_schedules_stateData[i].main_data[j].if_dag,
              if_dalil: land_schedules_stateData[i].main_data[j].if_dalil,
              first_row: land_schedules_stateData[i].main_data[j].first_row,
              others_row: land_schedules_stateData[i].main_data[j].others_row,
              daglist: land_schedules_stateData[i].main_data[j].daglist,
              is_dolil_found: land_schedules_stateData[i].main_data[j].is_dolil_found,
              file_path: land_schedules_stateData[i].main_data[j].file_path,
              sub_reg_district_id: land_schedules_stateData[i].main_data[j].sub_reg_district_id,
              sub_reg_office_list: land_schedules_stateData[i].main_data[j].sub_reg_office_list,
              land_rate_in_mouja: land_schedules_stateData[i].main_data[j].land_rate_in_mouja,
              land_rate_in_mouja_is_required: land_schedules_stateData[i].main_data[j].land_rate_in_mouja_is_required,
              is_readable: land_schedules_stateData[i].main_data[j].is_readable
            };
            this.application_land_schedules[i].main_data.push(dataObject);
          } else if (land_schedules_stateData[i].main_data[j].if_dalil == 0) {
            if (land_schedules_stateData[i].main_data[j].first_row == 1) {
              dataObject = {
                dalil_no: land_schedules_stateData[i].main_data[j].dalil_no,
                loading_icon: land_schedules_stateData[i].main_data[j].loading_icon,
                dalil_date: land_schedules_stateData[i].main_data[j].dalil_date,
                sub_register_office_name_text: land_schedules_stateData[i].main_data[j].sub_register_office_name_text,
                sub_register_office_name: land_schedules_stateData[i].main_data[j].sub_register_office_name,
                if_main: land_schedules_stateData[i].main_data[j].if_main,
                if_dag: land_schedules_stateData[i].main_data[j].if_dag,
                if_dalil: land_schedules_stateData[i].main_data[j].if_dalil,
                first_row: land_schedules_stateData[i].main_data[j].first_row,
                others_row: land_schedules_stateData[i].main_data[j].others_row,
                daglist: land_schedules_stateData[i].main_data[j].daglist,
                ownerList: land_schedules_stateData[i].main_data[j].ownerList,
                dag_no: land_schedules_stateData[i].main_data[j].dag_no,
                amount_of_land: land_schedules_stateData[i].main_data[j].amount_of_land,
                land_amount_type_id: land_schedules_stateData[i].main_data[j].land_amount_type_id,
                dag_flag: land_schedules_stateData[i].main_data[j].dag_flag,
                land_record_type_id: land_schedules_stateData[i].main_data[j].land_record_type_id,
                khatian_no: land_schedules_stateData[i].main_data[j].khatian_no,
                agoto_khatian_jomir_poriman_txt: land_schedules_stateData[i].main_data[j].agoto_khatian_jomir_poriman_txt,
                korton_krito_jomir_poriman_txt: land_schedules_stateData[i].main_data[j].korton_krito_jomir_poriman_txt,
                is_dolil_found: land_schedules_stateData[i].main_data[j].is_dolil_found,
                file_path: land_schedules_stateData[i].main_data[j].file_path,
                sub_reg_district_id: land_schedules_stateData[i].main_data[j].sub_reg_district_id,
                sub_reg_office_list: land_schedules_stateData[i].main_data[j].sub_reg_office_list,
                land_rate_in_mouja: land_schedules_stateData[i].main_data[j].land_rate_in_mouja,
                land_rate_in_mouja_is_required: land_schedules_stateData[i].main_data[j].land_rate_in_mouja_is_required,
                is_readable: land_schedules_stateData[i].main_data[j].is_readable
              };
            } else {
              dataObject = {
                dalil_no: land_schedules_stateData[i].main_data[j].dalil_no,
                loading_icon: land_schedules_stateData[i].main_data[j].loading_icon,
                dalil_date: land_schedules_stateData[i].main_data[j].dalil_date,
                sub_register_office_name_text: land_schedules_stateData[i].main_data[j].sub_register_office_name_text,
                sub_register_office_name: land_schedules_stateData[i].main_data[j].sub_register_office_name,
                if_main: land_schedules_stateData[i].main_data[j].if_main,
                if_dag: land_schedules_stateData[i].main_data[j].if_dag,
                if_dalil: land_schedules_stateData[i].main_data[j].if_dalil,
                first_row: land_schedules_stateData[i].main_data[j].first_row,
                others_row: land_schedules_stateData[i].main_data[j].others_row,
                daglist: land_schedules_stateData[i].main_data[j].daglist,
                dag_no: land_schedules_stateData[i].main_data[j].dag_no,
                amount_of_land: land_schedules_stateData[i].main_data[j].amount_of_land,
                land_amount_type_id: land_schedules_stateData[i].main_data[j].land_amount_type_id,
                dag_flag: land_schedules_stateData[i].main_data[j].dag_flag,
                korton_krito_jomir_poriman_txt: land_schedules_stateData[i].main_data[j].korton_krito_jomir_poriman_txt,
                agoto_khatian_jomir_poriman_txt: land_schedules_stateData[i].main_data[j].agoto_khatian_jomir_poriman_txt,
                is_dolil_found: land_schedules_stateData[i].main_data[j].is_dolil_found,
                file_path: land_schedules_stateData[i].main_data[j].file_path,
                sub_reg_district_id: land_schedules_stateData[i].main_data[j].sub_reg_district_id,
                sub_reg_office_list: land_schedules_stateData[i].main_data[j].sub_reg_office_list,
                land_rate_in_mouja: land_schedules_stateData[i].main_data[j].land_rate_in_mouja,
                land_rate_in_mouja_is_required: land_schedules_stateData[i].main_data[j].land_rate_in_mouja_is_required,
                is_readable: land_schedules_stateData[i].main_data[j].is_readable
              };
            }
            this.application_land_schedules[i].main_data.push(dataObject);
          }
        }
      }
    },
    removeTempImage: function removeTempImage() {
      if (this.citizen_applicant.length > 0) {
        for (var i = 0; i < this.citizen_applicant.length; i++) {
          delete this.citizen_applicant[i].temp_img;
        }
      }
      if (this.citizen_applicant_under18_probahsi.length > 0) {
        for (var _i2 = 0; _i2 < this.citizen_applicant_under18_probahsi.length; _i2++) {
          this.citizen_applicant_under18_probahsi[_i2].temp_img = "";
        }
      }
    },
    prepareOwnershipText: function prepareOwnershipText() {
      for (var prop in this.selected_land_ownership_reference_text) {
        this.finalOwnerShipText += this.selected_land_ownership_reference_text[prop] + ', ';
      }
      this.finalOwnerShipText = this.finalOwnerShipText.slice(0, -2);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/croy_sutro_application.vue?vue&type=template&id=443467c4&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/croy_sutro_application.vue?vue&type=template&id=443467c4& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("Tab", {
    attrs: {
      active_tab: _vm.active_tab
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "page-landinfo-content"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "page-content mb-5 bg-white"
  }, [_vm._m(0), _vm._v(" "), _c("form", {
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
    staticClass: "landinfo-content"
  }, [_c("div", {
    staticClass: "landinfo-body"
  }, [_c("div", {
    staticClass: "landinfo-title have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-number"
  }, [_vm._v("৩.১")]), _vm._v(" "), _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("আবেদিত জমির তফসিল")]), _vm._v(" "), _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("জমির মালিকানা সূত্র: " + _vm._s(this.finalOwnerShipText) + ", আবেদিত জমি " + _vm._s(_vm.fetchFirstStepData.office_text) + " "), _c("b", [_vm._v(_vm._s(_vm.fetchFirstStepData.mouja_text))]), _vm._v(" মৌজার অন্তর্ভুক্ত")])]), _vm._v(" "), _c("div", {
    ref: "application_form_land_info"
  }, [_c("landinfo_croy", {
    attrs: {
      land_amount_types: _vm.land_amount_types,
      application_land_schedules: _vm.application_land_schedules,
      land_record_types: _vm.land_record_types,
      land_rate_enable_month_count: _vm.land_rate_enable_month_count,
      applicationData: _vm.applicationData
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "landinfo-content mb-5"
  }, [_c("div", {
    ref: "applicant_citizens"
  }, [_c("grohita_croy", {
    ref: "applicant_citizen_child_ref",
    attrs: {
      applicationData: _vm.applicationData,
      citizen_applicant: _vm.citizen_applicant,
      citizen_applicant_under18_probahsi: _vm.citizen_applicant_under18_probahsi,
      componentKey: _vm.componentKey,
      allDistricts: _vm.allDistricts,
      tempNidArray: _vm.tempNidArray,
      tempCompanyNameArray: _vm.tempCompanyNameArray,
      nidPhotoContainer: _vm.nidPhotoContainer,
      signaturePhoto: _vm.signaturePhotoContainer
    },
    on: {
      application_citizen_set_data: _vm.application_citizen_set_data
    }
  })], 1), _vm._v(" "), _c("div", {
    ref: "applicantion_protinidhi"
  }, [_c("protinidhi", {
    attrs: {
      Delegate: _vm.Delegate,
      allDistricts: _vm.allDistricts,
      nidPhotoContainer: _vm.nidPhotoContainer,
      componentKey: _vm.componentKey
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-footer bg-light"
  }, [_c("div", {
    staticClass: "col-md-12 text-center"
  }, [_c("router-link", {
    staticClass: "btn btn-outline-primary mx-3 m-icon-left namjariApplicationBtn",
    attrs: {
      to: "/application-request"
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" পূর্ববর্তী")]), _vm._v(" "), _c("button", {
    staticClass: "btn active btn-outline-success ml-3 m-icon-right namjariApplicationBtn",
    on: {
      click: function click($event) {
        return _vm.nextPage("Submit");
      }
    }
  }, [_vm._v("পরবর্তী "), _c("i", {
    staticClass: "fa fa-arrow-right",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), this.loading_icon ? _c("div", {
    staticClass: "spinner-border text-primary ml-3 m-icon-right",
    staticStyle: {
      margin: "auto"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _vm._e()], 1)])])])])])], 1)])]);
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n/*@import '/css/font-awesome.min.css';*/\r\n/*@import '/css/custom_style.css';*/\r\n/*@import '/css/firstpage.css';*/\r\n/*p {*/\r\n/*    font-size: 14px;*/\r\n/*}*/\n.vdp-datepicker {\r\n    position: inherit !important;\n}\n.vdp-datepicker__calendar {\r\n    width: 250px !important;\r\n    font-size: 14px !important;\n}\n.error_message_custom {\r\n    font-size: 14px;\r\n    color: white;\r\n    font-weight: bold;\r\n    /*background: red;*/\r\n    padding: 5px !important;\n}\n.table-responsive {\r\n    overflow-x: inherit !important;\n}\ninput[type=text], select {\r\n    font-size: 14px !important;\n}\n@media screen and (max-width: 960px) {\n.table-responsive {\r\n        overflow-x: auto !important;\n}\n}\n@media screen and (min-device-width: 320px) and (max-device-width: 640px) {\n.namjariApplicationBtn{\r\n        padding: 9px;\r\n        font-size: 13px !important;\n}\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css&");

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

/***/ "./resources/js/components/Application/croy_sutro_application.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Application/croy_sutro_application.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _croy_sutro_application_vue_vue_type_template_id_443467c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./croy_sutro_application.vue?vue&type=template&id=443467c4& */ "./resources/js/components/Application/croy_sutro_application.vue?vue&type=template&id=443467c4&");
/* harmony import */ var _croy_sutro_application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./croy_sutro_application.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/croy_sutro_application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _croy_sutro_application_vue_vue_type_style_index_0_id_443467c4_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css& */ "./resources/js/components/Application/croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _croy_sutro_application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _croy_sutro_application_vue_vue_type_template_id_443467c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _croy_sutro_application_vue_vue_type_template_id_443467c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/croy_sutro_application.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/croy_sutro_application.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Application/croy_sutro_application.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./croy_sutro_application.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/croy_sutro_application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Application/croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_style_index_0_id_443467c4_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/croy_sutro_application.vue?vue&type=style&index=0&id=443467c4&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_style_index_0_id_443467c4_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_style_index_0_id_443467c4_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_style_index_0_id_443467c4_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_style_index_0_id_443467c4_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/croy_sutro_application.vue?vue&type=template&id=443467c4&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Application/croy_sutro_application.vue?vue&type=template&id=443467c4& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_template_id_443467c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./croy_sutro_application.vue?vue&type=template&id=443467c4& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/croy_sutro_application.vue?vue&type=template&id=443467c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_template_id_443467c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_croy_sutro_application_vue_vue_type_template_id_443467c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);