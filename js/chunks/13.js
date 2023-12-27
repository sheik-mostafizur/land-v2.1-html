(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/JomiCalculator */ "./resources/js/helpers/JomiCalculator.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/ValidationFile */ "./resources/js/helpers/ValidationFile.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/AttachmentMachine */ "./resources/js/helpers/AttachmentMachine.js");
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
  name: "application_doc_khotian_info",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])('checkDataCroySutro', ['fetchFirstStepData', 'fetchSecondStepData', 'fetchThirdStepData', 'fetchFullStateData'])),
  props: ['is_payment_option_enable', 'Khatians'],
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      JSONString: '',
      apiBaseURL: "http://localhost:8000/api",
      config_per_page_amount: "1280",
      tempBaseUrl: "http://localhost:8000/",
      tempDir: "doc31",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      khotian_list_owner: [],
      owner_list_khation: [],
      khotion_wise_selected_owner_list: [{
        khotian: '',
        owner_name: ''
      }],
      modal_owner_data: {
        division_id: '',
        division_name: '',
        district_id: '',
        district_name: '',
        upazila_id: '',
        upazila_name: '',
        mobile: '',
        holding_address: '',
        holding_no: '',
        land_portion: '',
        khatian_no: '',
        owner_list: {},
        owner_data: '',
        owner_dob: '',
        owner_nid: '',
        duplicate_owner: 0,
        duplicate_holding_owner: 0,
        land_amount_type_id: 1,
        land_amount_txt: '',
        is_tax_clear: 0,
        is_api_data_found: 0,
        holding_owner_list: {},
        land_amount_akor: 0,
        add_btn: false,
        total_amount_exits_msg: false,
        //new add
        checked_dead_info: 0,
        check_dead: '',
        warish_name: '',
        warish_relationship: '',
        death_certificate_file_obj: '',
        death_certificate: '',
        death_certificate_file_path: '',
        number_of_pages: '',
        //error
        mobile_error: false,
        owner_nid_error: false,
        land_portion_error: false,
        holding_no_error: false
      },
      application_land_schedules: [],
      details_list: [],
      divisions: {},
      districts: {},
      upazilas: {},
      area_data: {
        division_id: '',
        district_id: '',
        upazila_id: ''
      },
      district_loading: false,
      upazila_loading: false,
      holdingOwners: [],
      total_land_amount_of_this_khatian_akor: 0,
      total_land_count_all_khotian: 0,
      total_land_khotian_value: '',
      main_remaining_amount_value: '',
      remaining_amount_value: ''
    };
  },
  mounted: function mounted() {
    var getSecondStateData = this.fetchSecondStepData;
    this.getAllDistricts();
    var thirdStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.fetchThirdStepData);
    var application_land_schedules_key = [];
    var application_land_schedules = [];
    if (getSecondStateData && getSecondStateData.application_land_schedules.length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(getSecondStateData.application_land_schedules, function (key, value) {
        application_land_schedules_key.push(key);
        application_land_schedules.push(value);
      });
    }
    var datarInfo = [];
    if (typeof thirdStateData != 'undefined' || thirdStateData != '') {
      if (typeof thirdStateData.datarInfo != 'undefined' && thirdStateData.datarInfo.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(thirdStateData.datarInfo, function (key, value) {
          if (typeof application_land_schedules[key] != 'undefined' && value.main.khatian_no == application_land_schedules[key].main_data[0].khatian_no) {
            datarInfo.push(value);
          }
        });
      }
    }
    this.prepareDathalist(application_land_schedules, datarInfo);
  },
  watch: {
    'modal_owner_data.check_dead': function modal_owner_dataCheck_dead(newValue) {
      if (newValue == 1) {
        this.modal_owner_data.checked_dead_info = 0;
        // this.modal_owner_data.check_dead = '';
        this.modal_owner_data.warish_name = '';
        this.modal_owner_data.warish_relationship = '';
        this.modal_owner_data.death_certificate = '';
      }
      if (newValue == 2) {
        this.modal_owner_data.checked_dead_info = 1;
      }
    },
    'modal_owner_data.mobile': function modal_owner_dataMobile(value) {
      if (value.length > 0) {
        var regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_8__["default"].convert2English(value).match(regex);
        if (found) {
          this.modal_owner_data.mobile_error = false;
        } else {
          this.modal_owner_data.mobile_error = true;
        }
      } else {
        this.modal_owner_data.mobile_error = false;
      }
    },
    'modal_owner_data.land_portion': function modal_owner_dataLand_portion(value) {
      if (value.length > 0) {
        var regex = /[^A-z]\d*(\.\d+)?$/;
        var found = value.match(regex);
        if (found) {
          this.modal_owner_data.land_portion_error = false;
        } else {
          this.modal_owner_data.land_portion_error = true;
        }
      } else {
        this.modal_owner_data.land_portion_error = false;
      }
    },
    'modal_owner_data.owner_nid': function modal_owner_dataOwner_nid(value) {
      if (value.length > 0) {
        var regex = /^\d+$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_8__["default"].convert2English(value).match(regex);
        if (found) {
          if (value.length == 10 || value.length == 13 || value.length == 17) {
            this.modal_owner_data.owner_nid_error = false;
          } else {
            this.modal_owner_data.owner_nid_error = true;
          }
        } else {
          this.modal_owner_data.owner_nid_error = true;
        }
      } else {
        this.modal_owner_data.owner_nid_error = false;
      }
    } // 'modal_owner_data.holding_no'(value) {
    //     if (value.length > 0) {
    //         this.modal_owner_data.holding_no_error = false;
    //     }else{
    //         this.modal_owner_data.holding_no_error = true;
    //     }
    // }
  },
  methods: {
    prepareDathalist: function prepareDathalist(application_land_schedules, datarInfo) {
      var _this = this;
      var formData = new FormData();
      formData.append('application_land_schedules', JSON.stringify(application_land_schedules));
      formData.append('datarInfo', JSON.stringify(datarInfo));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(this.apiBaseURL + '/prepare-datha-list', formData, {
        headers: this.headers
      }).then(function (resp) {
        resp.data.data.data.Khatians.map(function (ele) {
          if (ele.main.owner_list.length == 0 && _this.fetchSecondStepData.donor_list.length != 0) {
            ele.main.owner_list = _this.fetchSecondStepData.donor_list;
          }
          _this.Khatians.push(ele);
        });
        _this.total_land_count_all_khotian = resp.data.data.data.total_land_count_all_khotian;
        var res = true;
        _this.Khatians.forEach(function (ele) {
          res = Number(ele.main.remaining_amount) != 0 ? false : true;
        });
        if (res) {
          _this.is_payment_option_enable.is_data_info_ready = true;
        }
      })["catch"](function (error) {
        console.log("".concat(error, " + datha list cannot be prepared"));
      });
    },
    addKhatianOwner: function addKhatianOwner(master_index, khatian_no, total_land_khotian, main_remaining_amount, remaining_amount) {
      var _this2 = this;
      this.total_land_khotian_value = total_land_khotian;
      this.main_remaining_amount_value = main_remaining_amount;
      this.remaining_amount_value = remaining_amount;
      this.modal_owner_data.index = master_index;
      this.modal_owner_data.khatian_no = this.Khatians[master_index].main.khatian_no;
      this.modal_owner_data.district_id = this.fetchFirstStepData.district_id.trim();
      this.modal_owner_data.upazila_id = this.fetchFirstStepData.upazila_id;
      this.modal_owner_data.district_name = this.fetchFirstStepData.district_text.trim();
      this.modal_owner_data.upazila_name = this.fetchFirstStepData.upazila_text.trim();
      this.modal_owner_data.owner_list = this.Khatians[master_index].main.owner_list;
      this.modal_owner_data.holding_owner_list = this.Khatians[master_index].main.ldTaxArray;
      this.modal_owner_data.owner_data = '';
      this.modal_owner_data.mobile = '';
      this.modal_owner_data.owner_nid = '';
      this.modal_owner_data.owner_dob = '';
      this.modal_owner_data.land_portion = '';
      this.modal_owner_data.holding_address = '';
      this.modal_owner_data.holding_no = '';
      this.modal_owner_data.duplicate_owner = 0;
      this.modal_owner_data.add_btn = false;
      this.modal_owner_data.total_amount_exits_msg = false;
      this.total_land_amount_of_this_khatian_akor = this.Khatians[master_index].main.total_land_khotian != undefined ? _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__["default"].get_acher_value(1, this.Khatians[master_index].main.total_land_khotian) : 0;
      this.modal_owner_data.checked_dead_info = 0;
      this.modal_owner_data.check_dead = '1';
      this.modal_owner_data.warish_name = '';
      this.modal_owner_data.warish_relationship = '';
      this.modal_owner_data.death_certificate = '';
      this.modal_owner_data.land_amount_type_id = 1;
      this.$refs['my-modal'].show();
      if (this.fetchFirstStepData.district_id != '') {
        // let districts = this.$refs['my-modal'].$parent.districts;
        // const found_names = districts.filter(v => (v.id == this.fetchFirstStepData.district_id));
        // let divId = found_names[0]['division_id']
        var formData = new FormData();
        formData.append('division_id', this.fetchFirstStepData.division_id);
        formData.append('district_id', this.fetchFirstStepData.district_id);
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(this.apiBaseURL + '/get-upazilas', formData, {
          headers: this.headers
        }).then(function (resp) {
          if (resp.data.status == 200 && resp.data.responseCode == 200) {
            _this2.upazilas = resp.data.data.upazilas;
            // this.modal_owner_data.upazila_id = '';
          } else {
            console.log(resp.data.message);
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    removeMalik: function removeMalik(master_index, child_index) {
      if (!confirm('আপনি কি সংযুক্ত দাতার তথ্য মুছে ফেলতে ইচ্ছুক?')) {
        return false;
      }
      this.total_land_amount_of_this_khatian_akor = 0;
      this.Khatians[master_index].main.add_btn_show = true;
      this.total_land_count_all_khotian = Number(this.total_land_count_all_khotian) + Number(this.Khatians[master_index].main.information[child_index].land_amount_akor);
      this.Khatians[master_index].main.information.splice(child_index, 1);
      var exiting_total_land_amount_akor = 0;
      if (this.Khatians[master_index].main.information && this.Khatians[master_index].main.information.length > 0) {
        for (var i = 0; i < this.Khatians[master_index].main.information.length; i++) {
          exiting_total_land_amount_akor += parseFloat(this.Khatians[master_index].main.information[i].land_amount_akor);
        }
      }
      var amount_with_to_fixed = parseFloat(this.Khatians[master_index].main.total_land_khotian) - parseFloat(exiting_total_land_amount_akor);
      this.Khatians[master_index].main.remaining_amount = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__["default"].get_acher_value(1, amount_with_to_fixed.toFixed(4));
      this.is_payment_option_enable.is_data_info_ready = false;
    },
    addKhatianOwnerList: function addKhatianOwnerList(data) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var validateDataReq, validateDataMobile, regex, found, finalData, formData, response, single_portion_akor, i, now_in_total_amount, remaining_amount;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                validateDataReq = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_5__["default"].validationMechanism(_this3.$refs.datarTotthoModal, '.required_field', 'required');
                validateDataMobile = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_5__["default"].validationMechanism(_this3.$refs.datarTotthoModal, '.mobile_bn', 'mobile');
                if (!(!validateDataReq || !validateDataMobile)) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return", false);
              case 4:
                if (!(_this3.modal_owner_data.check_dead == '')) {
                  _context.next = 7;
                  break;
                }
                alert("দাতার তথ্য জীবিত /মৃত সিলেক্ট করুন। ");
                return _context.abrupt("return", false);
              case 7:
                if (!(_this3.modal_owner_data.land_portion.length > 0)) {
                  _context.next = 13;
                  break;
                }
                regex = /[^A-z]\d*(\.\d+)?$/;
                found = _this3.modal_owner_data.land_portion.match(regex);
                if (found) {
                  _context.next = 13;
                  break;
                }
                _this3.modal_owner_data.land_portion_error = true;
                return _context.abrupt("return", false);
              case 13:
                data.add_btn = true;

                //get dead certificate file path
                if (!(_this3.modal_owner_data.check_dead == '2')) {
                  _context.next = 24;
                  break;
                }
                finalData = _this3.modal_owner_data.death_certificate_file_obj;
                formData = new FormData();
                formData.append('file', finalData);
                formData.append('index', JSON.stringify(0));
                _context.next = 21;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(_this3.apiBaseURL + '/tmp-new-store', formData, {
                  headers: _this3.headers
                });
              case 21:
                response = _context.sent;
                _this3.modal_owner_data.death_certificate_file_path = response.data.data.filePath;
                _this3.modal_owner_data.death_certificate_file_obj = '';
              case 24:
                _this3.Khatians[data.index].main.information.push({
                  owner_name: data.owner_data,
                  division_id: data.division_id,
                  division_name: data.division_name,
                  district_id: data.district_id,
                  district_name: data.district_name,
                  upazila_id: data.upazila_id,
                  upazila_name: data.upazila_name,
                  mobile: data.mobile,
                  holding_address: data.holding_address,
                  holding_no: data.holding_no,
                  land_portion: data.land_portion,
                  land_amount_type_id: data.land_amount_type_id,
                  land_amount_txt: data.land_amount_txt,
                  owner_dob: data.owner_dob != '' ? _this3.customDateFormat(data.owner_dob) : '',
                  owner_nid: data.owner_nid,
                  land_amount_akor: data.land_amount_akor,
                  // new add
                  checked_dead_info: data.checked_dead_info,
                  check_dead: data.check_dead != '' ? data.check_dead : '',
                  warish_name: data.warish_name != '' ? data.warish_name : '',
                  warish_relationship: data.warish_relationship != '' ? data.warish_relationship : '',
                  // death_certificate: data.death_certificate != '' ? data.death_certificate : '',
                  death_certificate: '',
                  death_certificate_file_path: data.death_certificate_file_path != '' ? data.death_certificate_file_path : '',
                  number_of_pages: data.number_of_pages != '' ? data.number_of_pages : 0
                });
                single_portion_akor = 0; // if (this.Khatians[data.index].main.information && this.Khatians[data.index].main.information.length > 0) {
                //     for (let i = 0; i < this.Khatians[data.index].main.information.length; i++) {
                //         //console.log(this.Khatians[data.index].main.information[i].land_amount_akor);
                //         exiting_total_land_amount_akor += Number(this.Khatians[data.index].main.information[i].land_amount_akor);
                //     }
                // }
                //this.total_land_count_all_khotian = this.total_land_count_all_khotian - Number(data.land_amount_akor);
                // this.total_land_count_all_khotian = this.total_land_count_all_khotian.toFixed(4);
                //this.JSONString = JSON.stringify(this.Khatians[0].main.information[0]);
                if (_this3.Khatians && _this3.Khatians[data.index].main.information != undefined && _this3.Khatians[data.index].main.information.length > 0) {
                  for (i = 0; i < _this3.Khatians[data.index].main.information.length; i++) {
                    single_portion_akor += Number(_this3.Khatians[data.index].main.information[i].land_amount_akor);
                  }
                  _this3.total_land_count_all_khotian = _this3.total_land_count_all_khotian - Number(data.land_amount_akor);
                  _this3.total_land_count_all_khotian = _this3.total_land_count_all_khotian.toFixed(4);
                }

                // if (this.total_land_count_all_khotian == 0) {
                _this3.is_payment_option_enable.is_data_info_ready = true;

                // }
                now_in_total_amount = _this3.Khatians[data.index].main.total_land_khotian != undefined ? _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__["default"].get_acher_value(1, _this3.Khatians[data.index].main.total_land_khotian) : 0;
                remaining_amount = parseFloat(now_in_total_amount) - parseFloat(single_portion_akor);
                _this3.Khatians[data.index].main.remaining_amount = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__["default"].get_acher_value(1, remaining_amount.toFixed(4));

                //console.log('X this.Khatians[data.index].main.total_land_khotian :'+this.Khatians[data.index].main.total_land_khotian);
                //console.log('Y now_in_total_amount :'+now_in_total_amount);
                //console.log('Z single_portion_akor :'+single_portion_akor);
                //console.log('A remaining_amount :'+remaining_amount);
                //console.log('B this.total_land_count_all_khotian :'+this.total_land_count_all_khotian);
                //console.log('C this.is_payment_option_enable.is_data_info_ready :'+this.is_payment_option_enable.is_data_info_ready);

                if (remaining_amount <= 0) {
                  _this3.Khatians[_this3.modal_owner_data.index].main.add_btn_show = false;
                } else {
                  _this3.Khatians[_this3.modal_owner_data.index].main.add_btn_show = true;
                }
                _this3.JSONString = JSON.stringify(_this3.Khatians);
                _this3.clearModalOwnerData();
                _this3.$refs['my-modal'].hide();
              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchShonodlPdf: function fetchShonodlPdf(event, file_path) {
      event.preventDefault();
      if (file_path != '') {
        var filePath = this.tempBaseUrl + this.tempDir + '/temp_uploaded_files/' + file_path;
        console.log(filePath);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#modal-agreement').show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fileDisplay').attr('src', '');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fileDisplay').attr('src', filePath);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fileDisplay').attr('src', '');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#modal-agreement').hide();
      }
    },
    customDateFormat: function customDateFormat(date) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format('YYYY-MM-DD');
    },
    clearModalOwnerData: function clearModalOwnerData() {
      this.modal_owner_data.owner_data = '';
      this.modal_owner_data.owner_name = '';
      this.modal_owner_data.division_id = '';
      this.modal_owner_data.division_name = '';
      this.modal_owner_data.district_id = '';
      this.modal_owner_data.district_name = '';
      this.modal_owner_data.upazila_id = '';
      this.modal_owner_data.upazila_name = '';
      this.modal_owner_data.mobile = '';
      this.modal_owner_data.holding_address = '';
      this.modal_owner_data.holding_no = '';
      this.modal_owner_data.land_portion = '';
      this.modal_owner_data.owner_nid = '';
      this.modal_owner_data.owner_dob = '';
      this.modal_owner_data.land_amount_type_id = 1;
      this.modal_owner_data.land_amount_txt = '';
      this.modal_owner_data.land_amount_akor = 0;
      this.modal_owner_data.add_btn = true;
      this.modal_owner_data.total_amount_exits_msg = false;
      this.total_land_amount_of_this_khatian_akor = 0;
    },
    hideModal: function hideModal() {
      this.clearModalOwnerData();
      this.$refs['my-modal'].hide();
    },
    getAllDistricts: function getAllDistricts() {
      var _this4 = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(this.apiBaseURL + '/get-all-district', '', {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this4.districts = resp.data.data.districts;
          _this4.district_loading = false;
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
        this.district_loading = false;
      });
    },
    getUpazila: function getUpazila(event) {
      var _this5 = this;
      this.upazila_loading = true;
      var disIdWithDivId = event.target.options[event.target.options.selectedIndex].getAttribute('district_name');
      var district_name = event.target.options[event.target.options.selectedIndex].text;
      this.modal_owner_data.district_name = district_name;
      var formData = new FormData();
      formData.append('division_id', disIdWithDivId.split('_')[1]);
      formData.append('district_id', disIdWithDivId.split('_')[0]);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(this.apiBaseURL + '/get-upazilas', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this5.upazilas = resp.data.data.upazilas;
          _this5.modal_owner_data.upazila_id = '';
          _this5.upazila_loading = false;
          // console.log(this.upazilas);this.upazilas = resp.data.response.upazilas;
          _this5.modal_owner_data.upazila_id = '';
          _this5.upazila_loading = false;
          // console.log(this.upazilas);
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
        this.upazila_loading = false;
      });
    },
    setUpazilaName: function setUpazilaName(event) {
      var upazila_name = event.target.options[event.target.options.selectedIndex].getAttribute('upazila_name');
      this.modal_owner_data.upazila_name = upazila_name;
    },
    setMalikAddr: function setMalikAddr(event, master_index) {
      var selected_name = event.target.options[event.target.options.selectedIndex].text;
      var checked = false;
      if (this.Khatians[master_index].main.information.length > 0) {
        for (var i = 0; i < this.Khatians[master_index].main.information.length; i++) {
          if (this.Khatians[master_index].main.information[i].owner_name == selected_name) {
            checked = true;
          }
        }
      }
      if (checked) {
        this.modal_owner_data.owner_data = '';
        this.modal_owner_data.duplicate_owner = 1;
      } else {
        this.modal_owner_data.duplicate_owner = 0;
        var address = event.target.options[event.target.options.selectedIndex].getAttribute('ref_address');
        this.modal_owner_data.holding_address = address;
        //new add

        var result = this.modal_owner_data.owner_list.filter(function (word) {
          return word.name == selected_name;
        });
        // console.log(result[0].mobile)
        if (result.length > 0) {
          this.modal_owner_data.owner_nid = typeof result[0].nid !== 'undefined' ? result[0].nid : '';
          this.modal_owner_data.owner_dob = typeof result[0].dob !== 'undefined' ? moment__WEBPACK_IMPORTED_MODULE_4___default()(String(result[0].dob)).format('YYYY-MM-DD') : '';
          this.modal_owner_data.mobile = result[0].mobile != null ? result[0].mobile : '';
        }
      }
    },
    // for dead certificate
    deadCertificateUpload: function deadCertificateUpload(e) {
      var _this6 = this;
      var file = e.target.files[0];
      _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_9__["default"].readFile(file, function (event) {
        if (!event.target.result.match(/\/Type[\s]*\/Page[^s]/g)) {
          // without page
          _this6.fileError = true;
          _this6.fileErrMsg = 'File format pdf is not valid';
        }
        var pageCount = event.target.result.match(/\/Type[\s]*\/Page[^s]/g).length;
        _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_9__["default"].getBlobUrl(file, function (bloburl) {
          _this6.modal_owner_data.death_certificate_file_obj = file;
          _this6.modal_owner_data.death_certificate = bloburl;
          _this6.modal_owner_data.number_of_pages = pageCount;
        });
      });
    },
    displayFile: function displayFile(event) {
      var finalData = this.modal_owner_data.death_certificate;
      event.preventDefault();
      if (finalData != '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#modal-agreement').show();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fileDisplay').attr('src', '');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fileDisplay').attr('src', finalData);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fileDisplay').attr('src', '');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#modal-agreement').hide();
      }
    },
    closeModal: function closeModal() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fileDisplay').attr('src', '');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#modal-agreement').hide();
    },
    // end of dead certificate
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
    get_land_calculation: function get_land_calculation(unit, amount) {
      //this.JSONString = JSON.stringify(this.Khatians);
      if (unit && amount) {
        var akor_value = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__["default"].get_acher_value(unit, amount);
        return _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__["default"].get_acher_string(akor_value);
      }
    },
    calculationLand: function calculationLand() {
      var unit = this.modal_owner_data.land_amount_type_id;
      var amount = this.modal_owner_data.land_portion == '' || this.modal_owner_data.land_portion == 0 ? 0 : this.modal_owner_data.land_portion;
      amount = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_8__["default"].convert2English(amount);
      if (unit == 2 && amount.toString().indexOf('.') !== -1) {
        alert('শতকের ক্ষেত্রে দশমিক(.) গ্রহণযোগ্য নয়');
        this.modal_owner_data.land_portion = '';
        this.modal_owner_data.land_amount_txt = '';
        this.modal_owner_data.total_amount_exits_msg = false;
        return false;
      }
      if (unit == 2 && amount >= 10000) {
        alert('আপনার জমির পরিমাণ ১০০ শতক বা তার বেশি হলে অপসন থেকে একর সিলেক্ট করে তথ্য দিন');
        this.modal_owner_data.land_portion = '';
        this.modal_owner_data.land_amount_txt = '';
        this.modal_owner_data.total_amount_exits_msg = false;
        return false;
      }
      this.modal_owner_data.land_amount_txt = this.get_land_calculation(unit, amount);
      this.totalAmountMechanism(unit, amount);
    },
    totalAmountMechanism: function totalAmountMechanism(unit, amount) {
      if (unit == undefined || amount == undefined) {
        return false;
      }
      var amount_akor = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_2__["default"].get_acher_value(unit, amount);
      this.modal_owner_data.land_amount_akor = amount_akor;
      var exiting_total_land_amount_akor = 0;
      if (this.Khatians[this.modal_owner_data.index].main.information && this.Khatians[this.modal_owner_data.index].main.information.length > 0) {
        for (var i = 0; i < this.Khatians[this.modal_owner_data.index].main.information.length; i++) {
          exiting_total_land_amount_akor += Number(this.Khatians[this.modal_owner_data.index].main.information[i].land_amount_akor);
        }
      }
      var final_total_amount = Number(exiting_total_land_amount_akor) + Number(amount_akor);
      if (this.total_land_amount_of_this_khatian_akor < parseFloat(final_total_amount.toFixed(4))) {
        this.modal_owner_data.add_btn = true;
        this.modal_owner_data.total_amount_exits_msg = true;
        this.modal_owner_data.land_portion = '';
      } else {
        this.modal_owner_data.add_btn = false;
        this.modal_owner_data.total_amount_exits_msg = false;
      }
    },
    checkTax: function checkTax(event, master_index) {
      var isTaxClear = event.target.options[event.target.options.selectedIndex].getAttribute('tax_clear');
      var tax_data = event.target.options[event.target.options.selectedIndex].text;
      var selectedVal = event.target.options[event.target.options.selectedIndex].value;
      var checked = false;
      if (this.Khatians[master_index].main.information.length > 0) {
        for (var i = 0; i < this.Khatians[master_index].main.information.length; i++) {
          if (this.Khatians[master_index].main.information[i].holding_no == selectedVal) {
            checked = true;
          }
        }
      }
      if (checked) {
        this.modal_owner_data.holding_no = '';
        this.modal_owner_data.duplicate_holding_owner = 1;
        return;
      } else {
        this.modal_owner_data.duplicate_holding_owner = 0;
      }
      if (selectedVal != '') {
        if (isTaxClear == 'Yes') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tax_msg').html('হোল্ডিং নং :' + tax_data + ' এর কর পরিশোধ রয়েছে।');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tax_msg').html('হোল্ডিং নং :' + tax_data + ' এর কর পরিশোধ করা নেই।');
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tax_msg').html('');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_document.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/application_document.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_doc_khotian_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_doc_khotian_info */ "./resources/js/components/Form/application_doc_khotian_info.vue");
/* harmony import */ var _document_attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document_attachment */ "./resources/js/components/Form/document_attachment.vue");
/* harmony import */ var _attachment_mechanism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachment_mechanism */ "./resources/js/components/Form/attachment_mechanism.vue");
/* harmony import */ var _information_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information_preview */ "./resources/js/components/Form/information_preview.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/FileUpload */ "./resources/js/helpers/FileUpload.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/AttachmentMachine */ "./resources/js/helpers/AttachmentMachine.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tab */ "./resources/js/components/Form/Tab.vue");
/* harmony import */ var _landinfo_croy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landinfo_croy */ "./resources/js/components/Form/landinfo_croy.vue");
/* harmony import */ var _grohita_croy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grohita_croy */ "./resources/js/components/Form/grohita_croy.vue");
/* harmony import */ var _protinidhi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./protinidhi */ "./resources/js/components/Form/protinidhi.vue");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }














/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CroySutroPhase3',
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])('checkDataCroySutro', ['firstStepData', 'imageInfo', 'secondStepData', 'thirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])('firstPageCommonData', ['firstPageCommonDatas', 'tracking_no', 'master_tracking_no', 'form_type', 'app_type'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage', 'getStateFormType', 'getStateAppType', 'getStateTrackingNo', 'getStateMasterTrackingNo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('checkDataCroySutro', ['fetchFirstStepData', 'fetchSecondStepData', 'fetchThirdStepData', 'fetchFullStateData'])),
  data: function data() {
    return {
      JSONString: '',
      apiBaseURL: "http://localhost:8000/api",
      ftpBaseUrl: "http://localhost:8000/",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      application_land_schedules: [],
      filePath: [],
      filePathNew: {
        dalil_document: {},
        khatian_document: {},
        jomir_chohoddi_document: {}
      },
      active_tab: 'datha_attachment',
      khatian_list: [],
      dalil_list_new: [],
      dalil_list: [],
      displayFileArray: [],
      datarInfo: [],
      isDisabled: false,
      button_text: 'আবেদন দাখিল করুন',
      is_payment_active: true,
      is_payment_option_enable: {
        is_data_info_ready: false,
        is_doc_ready: false
      },
      firstInputArray: [],
      secondInputArray: [],
      paymentAmountInfo: {
        totalPayment: 0,
        payment_type: 0,
        is_submit_data: false,
        paymentDetails: []
      },
      storageData: {},
      fileForState: [],
      countDocReady: 0,
      is_draft_before: 0,
      modal_text: 'আপনার তথ্যগুলো আপডেট করা হচ্ছে',
      submit_papers_3_days: false,
      submit_papers_3_days_text: "আমি আবেদন সাবমিট করার ৩ কর্মদিবসের মধ্যে সকল পেপারস এসিল্যান্ড অফিসে এসে জমা দিবো",
      submit_papers_sunani: false,
      submit_papers_sunani_text: "আমি শুনানির দিন সকল পেপারস জমা দিবো",
      loading_icon: false,
      finaleDocumentList: [],
      jomir_chohoddi_image: {
        base64TempData: '',
        file_path: '',
        file_text: 'জমির চৌহদ্দি সহকর্মী নকশা',
        file_type: 'land_map',
        fileMime: '',
        row_index: ''
      },
      other_doc_image: {
        base64TempData: '',
        file_path: '',
        file_text: 'অন্যান্য',
        file_type: 'others',
        fileMime: '',
        row_index: ''
      },
      dalil_list_json: '',
      khatian_list_json: '',
      if_khation_dalil_available: [],
      chohoddi_json: '',
      finaleDocumentList_json: '',
      declaration: false,
      finalDocumentList: {
        "dalil": {},
        "khatian": {},
        "chowhoddi": {},
        "others": {},
        "under18_or_probashi_info": {},
        "ouarish_sonod": {}
      }
    };
  },
  components: {
    application_doc_khotian_info: _application_doc_khotian_info__WEBPACK_IMPORTED_MODULE_0__["default"],
    document_attachment: _document_attachment__WEBPACK_IMPORTED_MODULE_1__["default"],
    attachment_mechanism: _attachment_mechanism__WEBPACK_IMPORTED_MODULE_2__["default"],
    information_preview: _information_preview__WEBPACK_IMPORTED_MODULE_3__["default"],
    Tab: _Tab__WEBPACK_IMPORTED_MODULE_9__["default"]
    // paymentPage
  },
  created: function created() {
    if (this.allCommonDataFirstPage == '') {
      return window.location.href = '/';
    }
  },
  mounted: function mounted() {
    // if second page khation verify successfull found.
    for (var i = 0; i < this.secondStepData.application_land_schedules.length; i++) {
      if (this.secondStepData.application_land_schedules[i].main_data[0].daglist.length > 0) {
        for (var j = 0; j < this.secondStepData.application_land_schedules[i].main_data.length; j++) {
          this.if_khation_dalil_available.push({
            'type': 'online_khatian',
            'khatian_type': this.secondStepData.application_land_schedules[i].main_data[j].land_record_type_id,
            'khation_no': this.secondStepData.application_land_schedules[i].main_data[0].khatian_no,
            'division_id': this.secondStepData.application_land_schedules[i].main_data[0].division_id,
            'district_id': this.secondStepData.application_land_schedules[i].main_data[0].district_id,
            'upazila_id': this.secondStepData.application_land_schedules[i].main_data[0].upazila_id,
            'mouja_id': this.secondStepData.application_land_schedules[i].main_data[0].mouja_id,
            'jl_no': this.secondStepData.application_land_schedules[i].main_data[0].jl_no
          });
        }
      }
      // if second page dolil verify successfull found.
      for (var j = 0; j < this.secondStepData.application_land_schedules[i].main_data.length; j++) {
        if (this.secondStepData.application_land_schedules[i].main_data[j].is_dolil_found == 1) {
          this.if_khation_dalil_available.push({
            'type': 'online_dalil',
            'khation_no': this.secondStepData.application_land_schedules[i].main_data[0].khatian_no,
            'dalil_no': this.secondStepData.application_land_schedules[i].main_data[j].dalil_no,
            'dalil_date': this.secondStepData.application_land_schedules[i].main_data[j].dalil_date,
            'file_path': this.secondStepData.application_land_schedules[i].main_data[j].file_path,
            'sub_register_office_id': this.secondStepData.application_land_schedules[i].main_data[j].sub_register_office_name
          });
        }
      }
    }
    this.is_draft_before = _typeof(this.getStateFormType) != undefined && this.getStateFormType != '' && _typeof(this.getStateAppType) != undefined && this.getStateAppType != '' ? 1 : 0;
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('checkDataCroySutro', ['getFirstStepData', 'getAreaData', 'getImageInfo', 'getSecondStepData', 'getThirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData', 'setTrackingNo', 'setFormType', 'setAppType'])), {}, {
    paymentEnable: function paymentEnable() {
      var alertMsg = '';
      var dataInfoCheck = false;
      var docCheck = false;
      var declarationCheck = false;

      /*দাতার তথ্য*/
      if (this.is_payment_option_enable.is_data_info_ready) {
        dataInfoCheck = true;
      } else {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertInformativeBox(this, 'দাতার তথ্য প্রদান করুন। ', 'ঠিক আছে');
        dataInfoCheck = false;
        this.is_payment_active = false;
        this.isDisabled = false;
        this.button_text = 'আবেদন দাখিল করুন';
        return false;
      }

      /*সংযুক্তি*/
      if (this.submit_papers_3_days == false && this.submit_papers_sunani == false) {
        if (this.documentValidation()) {
          docCheck = true;
        } else {
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertInformativeBox(this, 'সংযুক্তি প্রদান করুন। ', 'ঠিক আছে');
          docCheck = false;
          this.is_payment_active = false;
          this.isDisabled = false;
          this.button_text = 'আবেদন দাখিল করুন';
          return false;
        }
      } else {
        docCheck = true;
      }

      /*অঙ্গীকারনামা*/
      if (this.declaration) {
        declarationCheck = true;
      } else {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertInformativeBox(this, 'অঙ্গীকারনামা নিচের চেকবক্স সিলেক্টের মাধ্যমে প্রদান করুন', 'ঠিক আছে');
        declarationCheck = false;
        this.is_payment_active = false;
        this.isDisabled = false;
        this.button_text = 'আবেদন দাখিল করুন';
        return false;
      }
      if (dataInfoCheck == false || docCheck == false || declarationCheck == false) {
        this.is_payment_active = false;
      } else {
        this.is_payment_active = true;
      }
    },
    documentValidation: function documentValidation() {
      var attachmentValidation = true;
      if (this.finaleDocumentList.length == 0) {
        attachmentValidation = false;
      } else {
        if (this.finalDocumentList.dalil.length > 0) {
          var _iterator = _createForOfIteratorHelper(this.finalDocumentList.dalil),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var singleAttachment = _step.value;
              if (singleAttachment.fileObj == '' && singleAttachment.file_path == '') {
                attachmentValidation = false;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        // for (let singleAttachment of this.finalDocumentList.chowhoddi) {
        //     if(singleAttachment.fileObj == '' && singleAttachment.file_path == '') {
        //         attachmentValidation = false;
        //         break;
        //     }
        // }
        if (this.finalDocumentList.khatian.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(this.finalDocumentList.khatian),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _singleAttachment = _step2.value;
              if (_singleAttachment.fileObj == '' && _singleAttachment.file_path == '') {
                attachmentValidation = false;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (this.finalDocumentList.under18_or_probashi_info.length > 0) {
          //new add
          var _iterator3 = _createForOfIteratorHelper(this.finalDocumentList.under18_or_probashi_info),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _singleAttachment2 = _step3.value;
              if (_singleAttachment2.fileObj == '' && _singleAttachment2.file_path == '') {
                attachmentValidation = false;
                break;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        if (this.finalDocumentList.ouarish_sonod.length > 0) {
          //new add
          var _iterator4 = _createForOfIteratorHelper(this.finalDocumentList.ouarish_sonod),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _singleAttachment3 = _step4.value;
              if (_singleAttachment3.fileObj == '' && _singleAttachment3.file_path == '') {
                attachmentValidation = false;
                break;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
      return attachmentValidation;
    },
    dakhil: function dakhil() {
      var _this = this;
      /*
          * prepare state data
          * api call for updating data in mongoDB
          * in successful api response fetch updated tracking_no
          * reroute payment page with tracking_no
          * clicking on "continue" button after selecting one gateway, all application data will be stored in
          * divisional database and proceed payment
          *
      */
      this.isDisabled = true;
      this.button_text = 'Processing...';
      this.finaleDocumentList = [];
      if (Object.keys(this.finalDocumentList.dalil).length > 0) {
        var _iterator5 = _createForOfIteratorHelper(this.finalDocumentList.dalil),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var obj = _step5.value;
            if (obj.fileObj == "" && obj.file_path == "") continue;
            this.finaleDocumentList.push(obj);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      if (Object.keys(this.finalDocumentList.khatian).length > 0) {
        var _iterator6 = _createForOfIteratorHelper(this.finalDocumentList.khatian),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _obj = _step6.value;
            if (_obj.fileObj == "" && _obj.file_path == "") continue;
            this.finaleDocumentList.push(_obj);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      if (Object.keys(this.finalDocumentList.under18_or_probashi_info).length > 0) {
        var _iterator7 = _createForOfIteratorHelper(this.finalDocumentList.under18_or_probashi_info),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _obj2 = _step7.value;
            if (_obj2.fileObj == "" && _obj2.file_path == "") continue;
            this.finaleDocumentList.push(_obj2);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
      if (Object.keys(this.finalDocumentList.ouarish_sonod).length > 0) {
        var _iterator8 = _createForOfIteratorHelper(this.finalDocumentList.ouarish_sonod),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _obj3 = _step8.value;
            if (_obj3.fileObj == "" && _obj3.file_path == "") continue;
            this.finaleDocumentList.push(_obj3);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      if (Object.keys(this.finalDocumentList.chowhoddi).length > 0) {
        var _iterator9 = _createForOfIteratorHelper(this.finalDocumentList.chowhoddi),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _obj4 = _step9.value;
            if (_obj4.fileObj == "" && _obj4.file_path == "") continue;
            this.finaleDocumentList.push(_obj4);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
      if (Object.keys(this.finalDocumentList.others).length > 0) {
        var _iterator10 = _createForOfIteratorHelper(this.finalDocumentList.others),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _obj5 = _step10.value;
            if (_obj5.fileObj == "" && _obj5.file_path == "") continue;
            this.finaleDocumentList.push(_obj5);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
      this.paymentEnable();
      if (this.is_payment_active == true) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertBox(this, 'আপনি কি আপনার আবেদনটি দাখিল করতে ইচ্ছুক?').then(function (res) {
          if (res.isDismissed || res.isDenied) {
            _this.isDisabled = false;
            _this.button_text = 'আবেদন দাখিল করুন';
            return false;
          }
          _this.$refs['document_upload'].show();
          _this.loading_icon = true;
          if (_this.finaleDocumentList.length > 0) {
            _this.fileToDraftForUpload(0, 'dakhil');
          } else {
            _this.fileDataStoreToStorage();
            // this.storageData.displayFileArray = this.displayFileArray;
            _this.storageData.displayFileArray = '';
            _this.paymentAmountInfo.is_submit_data = true;
            _this.dataToStateAndDakhil(_this.storageData);
          }
        });
      } else {
        this.loading_icon = false;
        this.isDisabled = false;
        this.button_text = 'আবেদন দাখিল করুন';
        return false;
      }
    },
    saveAsDraftApplication: function saveAsDraftApplication() {
      var _this2 = this;
      _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertBox(this, 'আপনি কি আপনার আবেদনটি ড্রাফট হিসেবে সংরক্ষণ করতে ইচ্ছুক?').then(function (res) {
        if (res.isDismissed || res.isDenied) {
          return false;
        }
        _this2.saveToDraft();
      });
    },
    saveToDraft: function saveToDraft() {
      this.loading_icon = true;
      this.$refs['document_upload'].show();
      if (Object.keys(this.finalDocumentList.dalil).length > 0) {
        var _iterator11 = _createForOfIteratorHelper(this.finalDocumentList.dalil),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var obj = _step11.value;
            if (obj.fileObj == "" && obj.file_path == "") continue;
            this.finaleDocumentList.push(obj);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      }
      if (Object.keys(this.finalDocumentList.khatian).length > 0) {
        var _iterator12 = _createForOfIteratorHelper(this.finalDocumentList.khatian),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var _obj6 = _step12.value;
            if (_obj6.fileObj == "" && _obj6.file_path == "") continue;
            this.finaleDocumentList.push(_obj6);
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
      if (Object.keys(this.finalDocumentList.under18_or_probashi_info).length > 0) {
        var _iterator13 = _createForOfIteratorHelper(this.finalDocumentList.under18_or_probashi_info),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var _obj7 = _step13.value;
            if (_obj7.fileObj == "" && _obj7.file_path == "") continue;
            this.finaleDocumentList.push(_obj7);
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }
      if (Object.keys(this.finalDocumentList.ouarish_sonod).length > 0) {
        var _iterator14 = _createForOfIteratorHelper(this.finalDocumentList.ouarish_sonod),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _obj8 = _step14.value;
            if (_obj8.fileObj == "" && _obj8.file_path == "") continue;
            this.finaleDocumentList.push(_obj8);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
      if (Object.keys(this.finalDocumentList.chowhoddi).length > 0) {
        var _iterator15 = _createForOfIteratorHelper(this.finalDocumentList.chowhoddi),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _obj9 = _step15.value;
            if (_obj9.fileObj == "" && _obj9.file_path == "") continue;
            this.finaleDocumentList.push(_obj9);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
      if (Object.keys(this.finalDocumentList.others).length > 0) {
        var _iterator16 = _createForOfIteratorHelper(this.finalDocumentList.others),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _obj10 = _step16.value;
            if (_obj10.fileObj == "" && _obj10.file_path == "") continue;
            this.finaleDocumentList.push(_obj10);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }
      if (this.finaleDocumentList.length > 0) {
        this.fileToDraftForUpload(0, 'draft');
      } else {
        this.proceedToStoreNew('draft');
      }
    },
    fileDataStoreToStorage: function fileDataStoreToStorage() {
      this.storageData.datarInfo = this.datarInfo;
      this.storageData.filePath = this.fileForState;
      this.storageData.submit_papers_3_days = this.submit_papers_3_days;
      this.storageData.submit_papers_sunani = this.submit_papers_sunani;
      // this.storageData.avaiable_kothain_dolil_info = this.if_khation_dalil_available;
    },
    dataToStateAndDakhil: function dataToStateAndDakhil(data) {
      var _this3 = this;
      this.getThirdStepData('');
      this.getThirdStepData(data);
      delete this.fetchFirstStepData.allDistricts;
      delete this.fetchSecondStepData.allDistricts;
      delete this.fetchSecondStepData.Delegate[0].temp_img;
      delete this.fetchThirdStepData.displayFileArray;
      var commonStateData = this.allCommonDataFirstPage;
      var saveAsDraftData = {
        'app_type': 'draft',
        'form_type': this.getStateFormType != 'undefined' && this.getStateFormType != '' ? this.getStateFormType : 1,
        // 1-> new form; 2-> old form
        'tracking_no': _typeof(this.getStateTrackingNo) != undefined && this.getStateTrackingNo != '' ? this.getStateTrackingNo : '',
        'master_tracking_no': _typeof(this.getStateMasterTrackingNo) != undefined && this.getStateMasterTrackingNo != '' ? this.getStateMasterTrackingNo : '',
        'data': {
          'commonStateData': commonStateData,
          'stateData': this.fetchFullStateData
        }
      };
      var fullJsonDataForDraft = JSON.stringify(saveAsDraftData);
      var formData = new FormData();
      formData.append('jsonData', fullJsonDataForDraft);
      formData.append('request_type', 'store');
      var self = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_6__["default"].header(this.headers).post(this.apiBaseURL + '/application-store', formData).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == "RSP200") {
          /*
             * in successful api response fetch updated tracking_no
             * reroute payment page with tracking_no
          */
          _this3.loading_icon = false;
          var urlCrypt = __webpack_require__(/*! url-crypt */ "./node_modules/url-crypt/index.js")('~{ry*I)==yU/]9<7DPk!Hj"R#:-/Z7(hTBnlRS=4CXF');
          // let final_tracking_no = (typeof resp.data.data.masterTrackingNo != "undefined" && resp.data.data.masterTrackingNo !='') ? resp.data.data.masterTrackingNo : resp.data.data.tracking_no;
          var final_tracking_no = resp.data.data.tracking_no + '_' + resp.data.data.masterTrackingNo;

          // var encryptData = urlCrypt.cryptObj(resp.data.data.tracking_no+'#'+commonStateData.areaInfo.upazila_id+'#' + 1 + '#' + 1);
          var encryptData = urlCrypt.cryptObj(final_tracking_no + '#' + commonStateData.areaInfo.upazila_id + '#' + 1 + '#' + 1);
          // this.clearAllStateData();
          return _this3.$router.push({
            path: '/payment',
            query: {
              data: encryptData
            }
          });
        } else {
          _this3.loading_icon = false;
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(self, 'top-end', true, true, 'error', resp.data.message);
        }
      })["catch"](function (error) {
        _this3.loading_icon = false;
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(self, 'top-end', true, true, 'error', error.response.data.message);
      });
      return;
    },
    // draft data store in mongo
    dataToStateAndStore: function dataToStateAndStore(data) {
      var _this4 = this;
      this.getThirdStepData('');
      this.getThirdStepData(data);
      this.loading_icon = false;
      this.$refs['document_upload'].hide();
      delete this.fetchFirstStepData.allDistricts;
      delete this.fetchSecondStepData.allDistricts;
      delete this.fetchSecondStepData.Delegate[0].temp_img;
      var saveAsDraftData = {
        'app_type': 'draft',
        // 'form_type' : '1',  // 1-> new form; 2-> old form
        'form_type': this.getStateFormType != 'undefined' && this.getStateFormType != '' ? this.getStateFormType : 1,
        // 1-> new form; 2-> old form
        'tracking_no': _typeof(this.getStateTrackingNo) != undefined && this.getStateTrackingNo != '' ? this.getStateTrackingNo : '',
        'master_tracking_no': _typeof(this.getStateMasterTrackingNo) != undefined && this.getStateMasterTrackingNo != '' ? this.getStateMasterTrackingNo : '',
        'data': {
          'commonStateData': this.allCommonDataFirstPage,
          'stateData': this.fetchFullStateData
        }
      };
      var fullJsonDataForDraft = JSON.stringify(saveAsDraftData);
      var formData = new FormData();
      formData.append('jsonData', fullJsonDataForDraft);
      formData.append('request_type', 'store');
      var self = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_6__["default"].header(this.headers).post(this.apiBaseURL + '/application-store', formData).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == "RSP200") {
          _this4.clearAllStateData();
          var urlCrypt = __webpack_require__(/*! url-crypt */ "./node_modules/url-crypt/index.js")('~{ry*I)==yU/]9<7DPk!Hj"R#:-/Z7(hTBnlRS=4CXF');
          var encryptTrackingNo = urlCrypt.cryptObj(resp.data.data.tracking_no);
          return _this4.$router.push({
            path: '/',
            query: {
              tracking_no: encryptTrackingNo
            }
          });
        } else {
          self.$refs['document_upload'].hide();
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(self, 'top-end', false, true, 'error', error.response.data.message);
          // console.log(resp.data.message);
        }
      })["catch"](function (error) {
        self.$refs['document_upload'].hide();
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_7__["default"].sweetAlertToastNotification(self, 'top-end', false, true, 'error', error.response.data.message);
        // console.log(error);
      });

      return;
    },
    fileUpload: function fileUpload(fileData, submission_type) {
      var _this5 = this;
      var fileDataObj = {};
      this.fileForState = [];
      var fileCount = 0;
      for (var prop in this.filePath) {
        if (typeof this.filePath[prop].base64TempData != 'undefined' && this.filePath[prop].base64TempData != '') {
          fileCount++;
        }
      }
      if (typeof fileData.base64TempData != 'undefined' && fileData.base64TempData != '') {
        var formData = new FormData();
        formData.append('file', fileData.base64TempData);
        formData.append('mime', fileData.fileMime);
        var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_5__["default"].upload(this.apiBaseURL, formData, this.headers);
        response.payload.then(function (data) {
          if (data.data.status == 200) {
            _this5.countDocReady++;
            fileDataObj = {
              file_path: data.data.data.filePath,
              file_text: fileData.file_text,
              file_type: fileData.file_type,
              fileMime: fileData.fileMime,
              row_index: fileData.row_index,
              base64TempData: ''
            };
            if (fileData.file_type == 'dalil') {
              fileDataObj.dolil_no = fileData.dolil_no;
              fileDataObj.dolil_date = fileData.dolil_date;
              fileDataObj.office_id = fileData.office_id;
              fileDataObj.is_dolil_found = fileData.is_dolil_found;
            }
            if (fileData.file_type == 'khatian') {
              fileDataObj.khatian_no = fileData.khatian_no;
            }
            if (fileData.file_type == 'under18_or_probashi_info') {
              //new added
              fileDataObj.birth_reg_number = fileData.birth_reg_number;
            }
            _this5.fileForState.push(fileDataObj);
            _this5.proceedToStore(submission_type, fileCount);
          }
        });
      } else {
        var fileDataObjWithoutBase64 = {};
        fileDataObj = {
          file_path: '',
          file_text: fileData.file_text,
          file_type: fileData.file_type,
          fileMime: fileData.fileMime,
          row_index: fileData.row_index,
          base64TempData: ''
        };
        if (fileData.file_type == 'dalil') {
          fileDataObj.dolil_no = fileData.dolil_no;
          fileDataObj.dolil_date = fileData.dolil_date;
          fileDataObj.office_id = fileData.office_id;
          fileDataObj.is_dolil_found = fileData.is_dolil_found;
        }
        if (fileData.file_type == 'khatian') {
          fileDataObj.khatian_no = fileData.khatian_no;
        }
        if (fileData.file_type == 'under18_or_probashi_info') {
          //new added
          fileDataObj.birth_reg_number = fileData.birth_reg_number;
        }
        this.fileForState.push(fileDataObj);
        this.proceedToStore(submission_type, fileCount);
      }
    },
    fileToDraftForUpload: function fileToDraftForUpload() {
      var _arguments = arguments,
        _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var fileComplete, type, fileData, formData, filePath, response, _filePath, index;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fileComplete = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
                type = _arguments.length > 1 ? _arguments[1] : undefined;
                _context.prev = 2;
                fileData = _this6.finaleDocumentList[fileComplete];
                formData = new FormData();
                formData.append('file', fileData.fileObj);
                formData.append('index', JSON.stringify(fileComplete));
                if (!fileData.file_path) {
                  _context.next = 13;
                  break;
                }
                filePath = fileData.file_path;
                _this6.setFilePathData(fileComplete, filePath);
                if (fileComplete + 1 < _this6.finaleDocumentList.length) {
                  fileComplete++;
                  _this6.fileToDraftForUpload(fileComplete, type);
                } else if (fileComplete + 1 == _this6.finaleDocumentList.length) {
                  _this6.proceedToStoreNew(type);
                }
                _context.next = 20;
                break;
              case 13:
                _context.next = 15;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_6__["default"].header().post(_this6.apiBaseURL + '/tmp-new-store', formData, {
                  headers: _this6.headers
                });
              case 15:
                response = _context.sent;
                _filePath = response.data.data.filePath;
                index = response.data.data.index;
                _this6.setFilePathData(index, _filePath);
                if (fileComplete + 1 < _this6.finaleDocumentList.length) {
                  fileComplete++;
                  _this6.fileToDraftForUpload(fileComplete, type);
                } else if (fileComplete + 1 == _this6.finaleDocumentList.length) {
                  _this6.proceedToStoreNew(type);
                }
              case 20:
                _context.next = 28;
                break;
              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](2);
                console.log("Error catch for try : " + _context.t0);
                console.log("Error catch for try : " + _context.t0.lineNumber);
                console.log("Error catch for try : " + _context.t0.stack);
                console.log("Error catch for try : " + _context.t0.line);
              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 22]]);
      }))();
    },
    setFilePathData: function setFilePathData(index, filePath) {
      var fileDataObj = {
        file_path: filePath,
        file_text: this.finaleDocumentList[index].file_text,
        file_type: this.finaleDocumentList[index].file_type,
        fileMime: this.finaleDocumentList[index].fileMime,
        row_index: this.finaleDocumentList[index].row_index,
        number_of_pages: this.finaleDocumentList[index].number_of_pages,
        base64TempData: ''
      };
      if (this.finaleDocumentList[index].file_type == 'dalil') {
        fileDataObj.dolil_no = this.finaleDocumentList[index].dolil_no;
        fileDataObj.dolil_date = this.finaleDocumentList[index].dolil_date;
        fileDataObj.office_id = this.finaleDocumentList[index].office_id;
        fileDataObj.is_dolil_found = this.finaleDocumentList[index].is_dolil_found;
        fileDataObj.land_rate_in_mouja = this.finaleDocumentList[index].land_rate_in_mouja;
        fileDataObj.land_rate_in_mouja_is_required = this.finaleDocumentList[index].land_rate_in_mouja_is_required;
      }
      if (this.finaleDocumentList[index].file_type == 'khatian') {
        fileDataObj.khatian_no = this.finaleDocumentList[index].khatian_no;
      }
      if (this.finaleDocumentList[index].file_type == 'under18_or_probashi_info') {
        //new add
        fileDataObj.birth_reg_number = this.finaleDocumentList[index].birth_reg_number;
      }
      this.fileForState.push(fileDataObj);
    },
    proceedToStore: function proceedToStore(submission_type, fileCount) {
      var myTimeout;
      if (parseInt(this.countDocReady) == parseInt(fileCount)) {
        this.fileDataStoreToStorage();
        if (submission_type == 'dakhil') {
          // this.storageData.displayFileArray = this.displayFileArray;
          this.storageData.displayFileArray = '';
          this.paymentAmountInfo.is_submit_data = true;
          this.dataToStateAndDakhil(this.storageData);
        } else {
          this.dataToStateAndStore(this.storageData);
        }
        clearTimeout(myTimeout);
      }
    },
    proceedToStoreNew: function proceedToStoreNew(submission_type) {
      var myTimeout;
      this.fileDataStoreToStorage();

      /*SET COMMON DATA TO STORAGE*/
      this.storageData.submit_papers_3_days = this.submit_papers_3_days;
      this.storageData.submit_papers_sunani = this.submit_papers_sunani;
      this.storageData.declaration = this.declaration;
      if (submission_type == 'dakhil') {
        // this.storageData.displayFileArray = this.displayFileArray;
        this.storageData.displayFileArray = '';
        this.paymentAmountInfo.is_submit_data = true;
        this.dataToStateAndDakhil(this.storageData);
      } else {
        this.dataToStateAndStore(this.storageData);
      }
      clearTimeout(myTimeout);
    },
    dolilDataToFilePath: function dolilDataToFilePath() {
      var _this7 = this;
      var dolilCount = this.dalil_list.length;
      var _loop = function _loop(i) {
        var fileMime = '';
        var own = _this7;
        if (_this7.dalil_list[i].file_path != '') {
          fileMime = _this7.dalil_list[i].file_path.split('.').pop();
          fetch(_this7.ftpBaseUrl + _this7.dalil_list[i].file_path).then(function (res) {
            return res.blob();
          }).then(function (blob) {
            var promise = _this7.getBase64Data(blob);
            promise.then(function (result) {
              own.filePath.push({
                path: '',
                row_index: i,
                base64TempData: result,
                fileMime: fileMime,
                file_text: own.dalil_list[i].file_text
              });
            });
          });
        }
      };
      for (var i = 0; i < dolilCount; i++) {
        _loop(i);
      }
    },
    getBase64Data: function getBase64Data(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
    clearAllStateData: function clearAllStateData() {
      this.setFirstPageCommonData('');
      this.setFormType('');
      this.setAppType('');
      this.setTrackingNo('');
      this.getAreaData('');
      this.getImageInfo('');
      this.getFirstStepData('');
      this.getSecondStepData('');
      this.getThirdStepData('');
    },
    change_submit_papers_3_days: function change_submit_papers_3_days(value) {
      this.submit_papers_3_days = value;
    },
    change_submit_papers_sunani: function change_submit_papers_sunani(value) {
      this.submit_papers_sunani = value;
    }
  }),
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/attachment_mechanism.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/attachment_mechanism.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/AttachmentMachine */ "./resources/js/helpers/AttachmentMachine.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AttachmentMechanism',
  props: ['is_payment_option_enable', 'filePath', 'displayFileArray', 'submit_papers_3_days', 'submit_papers_3_days_text', 'submit_papers_sunani', 'submit_papers_sunani_text', 'dalil_list', 'khatian_list', 'jomir_chohoddi_image', 'other_doc_image', 'finalDocumentList'],
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('checkDataCroySutro', ['firstStepData', 'imageInfo', 'secondStepData', 'thirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('firstPageCommonData', ['firstPageCommonDatas', 'tracking_no', 'form_type', 'app_type'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage', 'getStateFormType', 'getStateAppType', 'getStateTrackingNo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('checkDataCroySutro', ['fetchFirstStepData', 'fetchSecondStepData', 'fetchThirdStepData', 'fetchFullStateData'])), {}, {
    jomi_johoddi_index: function jomi_johoddi_index() {
      return (this.finalDocumentList.dalil ? Object.keys(this.finalDocumentList.dalil).length : 0) + (this.finalDocumentList.khatian ? Object.keys(this.finalDocumentList.khatian).length : 0) + (this.finalDocumentList.under18_or_probashi_info ? Object.keys(this.finalDocumentList.under18_or_probashi_info).length : 0);
    }
  }),
  components: {},
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      tempBaseUrl: "http://localhost:8000/",
      tempDir: "doc31",
      config_per_page_amount: "1280",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      JSONString: '',
      pagecount: '',
      pdf_loading: false,
      total_doc_uploadable: 0,
      tmp_submit_papers_3_days: false,
      tmp_submit_papers_sunani: false,
      documentUrl: '',
      documentBlobUrl: '',
      blobUrl: false,
      docUrl: false,
      fileErrMsg: '',
      fileError: false,
      warishSonodApi: {
        if_warish_selected: 1,
        online_warish_available: 0,
        online_sonod_no: '',
        online_sonod_link: '',
        online_sonod_response: '',
        online_sonod_verify: false
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var urlCrypt = __webpack_require__(/*! url-crypt */ "./node_modules/url-crypt/index.js")('~{ry*I)==yU/]9<7DPk!Hj"R#:-/Z7(hTBnlRS=4CXF');
    var requestData = urlCrypt.decryptObj(this.$route.params.id);
    if (requestData == 1) {
      return window.location.href = '/application-request';
    }
    this.getToken();
    var application_land_schedules = this.fetchSecondStepData.application_land_schedules;
    var citizen_applicant_under18_probahsi = this.fetchSecondStepData.citizen_applicant_under18_probahsi; //new added

    var main_row = application_land_schedules.length;
    var thirdStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.fetchThirdStepData);
    this.prepareDocumentSection(thirdStateData, application_land_schedules, citizen_applicant_under18_probahsi);
    this.setJomirChohoddiImage(thirdStateData);
    this.total_doc_uploadable = this.jomi_johoddi_index + 1;
    this.$forceUpdate();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('tokenState', ['getToken'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('checkDataCroySutro', ['getFirstStepData', 'getAreaData', 'getImageInfo', 'getSecondStepData', 'getThirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData', 'setTrackingNo', 'setFormType', 'setAppType'])), {}, {
    prepareDocumentSection: function prepareDocumentSection(thirdStateData, application_land_schedules, citizen_applicant_under18_probahsi) {
      var _this = this;
      var formData = new FormData();
      var state_document = '';
      if (typeof thirdStateData != 'undefined' && thirdStateData != '') {
        if (thirdStateData.filePath.length > 0) {
          state_document = thirdStateData.filePath;
        }
      }
      //this.JSONString = JSON.stringify(application_land_schedules);
      formData.append('application_land_schedules', JSON.stringify(application_land_schedules));
      formData.append('citizen_applicant_under18_probahsi', JSON.stringify(citizen_applicant_under18_probahsi));
      formData.append('land_ownership_reference_ids', JSON.stringify(this.allCommonDataFirstPage.land_ownership_reference_ids));
      formData.append('state_document', JSON.stringify(state_document));
      formData.append('allCommonDataFIrstPage', JSON.stringify(this.allCommonDataFirstPage));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_5__["default"].header().post(this.apiBaseURL + '/prepare-document-section', formData, {
        headers: this.headers
      }).then(function (resp) {
        _this.finalDocumentList.dalil = resp.data.data.data.dalil ? resp.data.data.data.dalil : {};
        _this.finalDocumentList.khatian = resp.data.data.data.khatian ? resp.data.data.data.khatian : {};
        _this.finalDocumentList.others = resp.data.data.data.others ? resp.data.data.data.others : {};
        _this.finalDocumentList.chowhoddi = resp.data.data.data.chowhoddi ? resp.data.data.data.chowhoddi : {};
        _this.finalDocumentList.under18_or_probashi_info = resp.data.data.data.under18_or_probashi_info ? resp.data.data.data.under18_or_probashi_info : {};
        _this.finalDocumentList.ouarish_sonod = resp.data.data.data.ouarish_sonod ? resp.data.data.data.ouarish_sonod : {};

        // this.setBase64ForDocument()
      })["catch"](function () {});
    },
    onFileChange: function onFileChange(e, data_value, index, type) {
      var _this2 = this;
      var rest = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var file = e.target.files[0];
      _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_4__["default"].readFile(file, function (event) {
        if (!event.target.result.match(/\/Type[\s]*\/Page[^s]/g)) {
          // without page
          _this2.fileError = true;
          _this2.fileErrMsg = 'File format pdf is not valid';
        }
        var pageCount = event.target.result.match(/\/Type[\s]*\/Page[^s]/g).length;
        if (file.size / 1024 > _this2.config_per_page_amount * pageCount) {
          _this2.fileError = true;
          _this2.fileErrMsg = 'Per page minimum file size exceded';
        }
        if (data_value === 'land_map') {
          _this2.finalDocumentList.chowhoddi[0].base64TempData = '';
          _this2.finalDocumentList.chowhoddi[0].fileMime = '';
          _this2.finalDocumentList.chowhoddi[0].fileObj = file;
          _this2.finalDocumentList.chowhoddi[0].number_of_pages = pageCount;
        }
        /COMMON DATA OBJ/;
        var dataObj = {
          file_path: '',
          fileMime: '',
          row_index: index,
          base64TempData: '',
          fileObj: ''
        };
        if (type === 'dalil') {
          dataObj.dolil_no = data_value.dolil_no;
          dataObj.dolil_date = data_value.dolil_date;
          dataObj.office_id = data_value.office_id;
          dataObj.is_dolil_found = data_value.is_dolil_found;
          dataObj.land_rate_in_mouja = data_value.land_rate_in_mouja;
          _this2.finalDocumentList.dalil[index].base64TempData = '';
          _this2.finalDocumentList.dalil[index].fileMime = '';
          _this2.finalDocumentList.dalil[index].fileObj = file;
          _this2.finalDocumentList.dalil[index].number_of_pages = pageCount;
          _this2.finalDocumentList.dalil[index].land_rate_in_mouja = data_value.land_rate_in_mouja;
          _this2.finalDocumentList.dalil[index].land_rate_in_mouja_is_required = data_value.land_rate_in_mouja_is_required;
        }
        if (type === 'khotian') {
          _this2.finalDocumentList.khatian[rest].base64TempData = '';
          _this2.finalDocumentList.khatian[rest].fileMime = '';
          _this2.finalDocumentList.khatian[rest].fileObj = file;
          _this2.finalDocumentList.khatian[rest].number_of_pages = pageCount;
        }
        if (type === 'under18_or_probashi_info') {
          _this2.finalDocumentList.under18_or_probashi_info[rest].base64TempData = '';
          _this2.finalDocumentList.under18_or_probashi_info[rest].fileMime = '';
          _this2.finalDocumentList.under18_or_probashi_info[rest].fileObj = file;
          _this2.finalDocumentList.under18_or_probashi_info[rest].number_of_pages = pageCount;
        }
        if (data_value === 'ouarish_sonod') {
          _this2.finalDocumentList.ouarish_sonod[0].base64TempData = '';
          _this2.finalDocumentList.ouarish_sonod[0].fileMime = '';
          _this2.finalDocumentList.ouarish_sonod[0].fileObj = file;
          _this2.finalDocumentList.ouarish_sonod[0].number_of_pages = pageCount;
        }
        if (data_value === 'others') {
          _this2.finalDocumentList.others[0].base64TempData = '';
          _this2.finalDocumentList.others[0].fileMime = '';
          _this2.finalDocumentList.others[0].fileObj = file;
          _this2.finalDocumentList.others[0].number_of_pages = pageCount;
        }
      });
    },
    showHelpModal: function showHelpModal() {
      this.$refs['my-modal'].show();
    },
    setJomirChohoddiImage: function setJomirChohoddiImage(thirdStateData) {
      var _this3 = this;
      var checkInsert = false;
      if (typeof thirdStateData != 'undefined' && thirdStateData != '') {
        if (thirdStateData.filePath.length > 0) {
          var _iterator = _createForOfIteratorHelper(thirdStateData.filePath),
            _step;
          try {
            var _loop = function _loop() {
              var fileData = _step.value;
              if (fileData.file_type == 'land_map') {
                if (fileData.file_path != '') {
                  var srcData = 'data:';
                  if (fileData.fileMime == 'pdf') {
                    srcData += 'application/pdf';
                  } else {
                    srcData += 'image/png';
                  }
                  var fullFileUrl = _this3.tempBaseUrl + _this3.tempDir + '/temp_uploaded_files/' + fileData.file_path;
                  fetch(fullFileUrl).then(function (response) {
                    return response.blob();
                  }).then(function (blob) {
                    var reader = new FileReader();
                    reader.onload = function () {
                      _this3.jomir_chohoddi_image.base64TempData = reader.result.split(',')[1];
                      _this3.jomir_chohoddi_image.fileMime = fileData.fileMime;
                      _this3.jomir_chohoddi_image.file_path = '';
                    };
                    reader.readAsDataURL(blob);
                    reader.onerror = function (error) {
                      console.log('Error: ', error);
                    };
                  })["catch"](function (err) {
                    return console.log("".concat(err, " something wrong on image process"));
                  });
                  checkInsert = true;
                  return "break";
                }
              }
            };
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _ret = _loop();
              if (_ret === "break") break;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      if (!checkInsert) {
        this.jomir_chohoddi_image.base64TempData = '';
        this.jomir_chohoddi_image.fileMime = '';
        this.jomir_chohoddi_image.file_path = '';
      }
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    convert2Bangla: function convert2Bangla(engVal) {
      return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_3__["default"].convert2Bangla(engVal);
    },
    displayFile: function displayFile(event, fileObj) {
      var _this4 = this;
      event.preventDefault();
      if (fileObj.fileObj) {
        _helpers_AttachmentMachine__WEBPACK_IMPORTED_MODULE_4__["default"].getBlobUrl(fileObj.fileObj, function (blobUrl) {
          if (blobUrl) {
            _this4.documentBlobUrl = blobUrl;
            _this4.blobUrl = true;
            _this4.$refs['document-view-modal'].show();
          } else {
            _this4.docUrl = false;
            _this4.blobUrl = false;
            _this4.$refs['document-view-modal'].hide();
          }
        });
      } else if (fileObj.file_path) {
        var extranalRootpath = fileObj.file_path.split("/");
        if (extranalRootpath[2] != 'undefined' && extranalRootpath[2] == 'prottoyon.gov.bd') {
          this.documentBlobUrl = fileObj.file_path;
          window.open(fileObj.file_path, '_blank');
        } else {
          this.documentBlobUrl = this.tempBaseUrl + this.tempDir + '/temp_uploaded_files/' + fileObj.file_path;
          this.blobUrl = true;
          this.$refs['document-view-modal'].show();
        }
      } else if (fileObj) {
        this.documentBlobUrl = fileObj;
        this.blobUrl = true;
        this.$refs['document-view-modal'].show();
      }
    },
    closeModal: function closeModal() {
      this.docUrl = false;
      this.blobUrl = false;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#modal-agreement-file-view').hide();
    },
    fileRemove: function fileRemove(type, key) {
      this.finalDocumentList[type][key].fileObj = "";
      this.finalDocumentList[type][key].file_path = "";
    },
    hideHelpModal: function hideHelpModal() {
      this.$refs['help-modal'].show();
    },
    helpModal: function helpModal() {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#help_modal').show();
    },
    fetchDolilPdf: function fetchDolilPdf(event, file_path, filemime) {
      this.pdf_loading = true;
      if (file_path != '') {
        this.pdf_loading = false;
        this.displayFile(event, this.tempBaseUrl + this.tempDir + '/temp_uploaded_files/' + file_path, filemime, 'from_path');
      } else {
        this.pdf_loading = false;
      }
    },
    countMbKb: function countMbKb(size) {
      return size > 1024 ? (size / 1024).toFixed(2) + 'MB' : Math.round(size) + 'KB';
    },
    verifyWarishSonod: function verifyWarishSonod() {
      var _this5 = this;
      if (typeof this.warishSonodApi.online_sonod_no == 'undefined' || this.warishSonodApi.online_sonod_no == '') {
        alert('Please provide valid warish sonod no');
        this.warishSonodApi.online_sonod_link = '';
        this.warishSonodApi.online_sonod_response = '';
        this.warishSonodApi.online_sonod_verify = false;
        return false;
      }
      var formData = new FormData();
      formData.append('online_sonod_no', this.warishSonodApi.online_sonod_no);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_5__["default"].header().post(this.apiBaseURL + '/online-warish-sonod-verify', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 'RSP200') {
          _this5.warishSonodApi.online_sonod_link = resp.data.data.link;
          _this5.warishSonodApi.online_sonod_response = resp.data.data.response;
          _this5.warishSonodApi.online_sonod_verify = true;
          _this5.finalDocumentList.ouarish_sonod[0].base64TempData = '';
          _this5.finalDocumentList.ouarish_sonod[0].fileMime = '';
          _this5.finalDocumentList.ouarish_sonod[0].file_path = resp.data.data.link;
          _this5.finalDocumentList.ouarish_sonod[0].fileObj = '';
          _this5.finalDocumentList.ouarish_sonod[0].number_of_pages = '';
        } else {
          _this5.finalDocumentList.ouarish_sonod[0].base64TempData = '';
          _this5.finalDocumentList.ouarish_sonod[0].fileMime = '';
          _this5.finalDocumentList.ouarish_sonod[0].file_path = '';
          _this5.finalDocumentList.ouarish_sonod[0].fileObj = '';
          _this5.finalDocumentList.ouarish_sonod[0].number_of_pages = '';
          _this5.warishSonodApi.online_sonod_link = '';
          _this5.warishSonodApi.online_sonod_response = '';
          _this5.warishSonodApi.online_sonod_verify = false;
        }
      })["catch"](function (error) {
        _this5.finalDocumentList.ouarish_sonod[0].base64TempData = '';
        _this5.finalDocumentList.ouarish_sonod[0].fileMime = '';
        _this5.finalDocumentList.ouarish_sonod[0].file_path = '';
        _this5.finalDocumentList.ouarish_sonod[0].fileObj = '';
        _this5.finalDocumentList.ouarish_sonod[0].number_of_pages = '';
        _this5.warishSonodApi.online_sonod_link = '';
        _this5.warishSonodApi.online_sonod_response = error.response.data.message.response;
        _this5.warishSonodApi.online_sonod_verify = false;
      });
    }
  }),
  watch: {
    tmp_submit_papers_3_days: function tmp_submit_papers_3_days(value) {
      this.$emit("change_submit_papers_3_days", value);
      for (var i = 0; i < this.finalDocumentList.dalil.length; i++) {
        this.finalDocumentList.dalil[i].fileObj = '';
        this.finalDocumentList.dalil[i].file_path = '';
      }
      for (var _i = 0; _i < this.finalDocumentList.khatian.length; _i++) {
        this.finalDocumentList.khatian[_i].fileObj = '';
        this.finalDocumentList.khatian[_i].file_path = '';
      }
      for (var _i2 = 0; _i2 < this.finalDocumentList.chowhoddi.length; _i2++) {
        this.finalDocumentList.chowhoddi[_i2].fileObj = '';
        this.finalDocumentList.chowhoddi[_i2].file_path = '';
      }
      for (var _i3 = 0; _i3 < this.finalDocumentList.others.length; _i3++) {
        this.finalDocumentList.others[_i3].fileObj = '';
        this.finalDocumentList.others[_i3].file_path = '';
      }
    },
    tmp_submit_papers_sunani: function tmp_submit_papers_sunani(value) {
      this.$emit("change_submit_papers_sunani", value);
      for (var i = 0; i < this.finalDocumentList.dalil.length; i++) {
        this.finalDocumentList.dalil[i].fileObj = '';
        this.finalDocumentList.dalil[i].file_path = '';
      }
      for (var _i4 = 0; _i4 < this.finalDocumentList.khatian.length; _i4++) {
        this.finalDocumentList.khatian[_i4].fileObj = '';
        this.finalDocumentList.khatian[_i4].file_path = '';
      }
      for (var _i5 = 0; _i5 < this.finalDocumentList.chowhoddi.length; _i5++) {
        this.finalDocumentList.chowhoddi[_i5].fileObj = '';
        this.finalDocumentList.chowhoddi[_i5].file_path = '';
      }
      for (var _i6 = 0; _i6 < this.finalDocumentList.others.length; _i6++) {
        this.finalDocumentList.others[_i6].fileObj = '';
        this.finalDocumentList.others[_i6].file_path = '';
      }
    },
    // 'applicationData.if_warish_selected': function () {
    //     if(this.applicationData.if_warish_selected == 0){
    //         this.applicationData.online_warish_available = '';
    //         this.applicationData.online_sonod_no = '';
    //         this.applicationData.online_sonod_response = '';
    //         this.applicationData.online_sonod_link =''
    //
    //     }
    // },
    'applicationData.online_warish_available': function applicationDataOnline_warish_available() {
      if (this.applicationData.online_warish_available == 0) {
        this.applicationData.online_sonod_no = '';
        this.applicationData.online_sonod_response = '';
        this.applicationData.online_sonod_link = '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/document_attachment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/document_attachment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ApplicationDoc',
  props: ['is_payment_option_enable', 'filePath', 'displayFileArray', 'submit_papers_3_days', 'submit_papers_3_days_text', 'submit_papers_sunani', 'submit_papers_sunani_text', 'dalil_list', 'khatian_list', 'jomir_chohoddi_image', 'other_doc_image', 'finalDocumentList'],
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('checkDataCroySutro', ['firstStepData', 'imageInfo', 'secondStepData', 'thirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('firstPageCommonData', ['firstPageCommonDatas', 'tracking_no', 'form_type', 'app_type'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage', 'getStateFormType', 'getStateAppType', 'getStateTrackingNo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('checkDataCroySutro', ['fetchFirstStepData', 'fetchSecondStepData', 'fetchThirdStepData', 'fetchFullStateData'])), {}, {
    jomi_johoddi_index: function jomi_johoddi_index() {
      return (this.finalDocumentList.dalil ? Object.keys(this.finalDocumentList.dalil).length : 0) + (this.finalDocumentList.khatian ? Object.keys(this.finalDocumentList.khatian).length : 0);
    }
  }),
  components: {},
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      tempBaseUrl: "http://localhost:8000/",
      tempDir: "doc31",
      config_per_page_amount: "1280",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      JSONString: '',
      pagecount: '',
      pdf_loading: false,
      total_doc_uploadable: 0,
      tmp_submit_papers_3_days: false,
      tmp_submit_papers_sunani: false,
      documentUrl: '',
      documentBlobUrl: '',
      blobUrl: false,
      docUrl: false
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var urlCrypt = __webpack_require__(/*! url-crypt */ "./node_modules/url-crypt/index.js")('~{ry*I)==yU/]9<7DPk!Hj"R#:-/Z7(hTBnlRS=4CXF');
    var requestData = urlCrypt.decryptObj(this.$route.params.id);
    if (requestData == 1) {
      return window.location.href = '/application-request';
    }
    this.getToken();
    var application_land_schedules = this.fetchSecondStepData.application_land_schedules;
    var main_row = application_land_schedules.length;
    var thirdStateData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.fetchThirdStepData);
    this.prepareDocumentSection(thirdStateData, application_land_schedules);
    for (var i = 0; i < main_row; i++) {
      var main_data_row = application_land_schedules[i].main_data.length;
      for (var j = 0; j < main_data_row; j++) {
        if (application_land_schedules[i].main_data[j].khatian_no != undefined) {
          if (application_land_schedules[i].main_data[j].daglist.length == 0) {
            this.getBase64ForkhatiaDalilList(thirdStateData, 'khatian', application_land_schedules[i].main_data[j]);
          }
        }
        if (application_land_schedules[i].main_data[j].dalil_no != '') {
          if (this.dalilAttachmentExits(application_land_schedules[i].main_data[j])) {
            continue;
          }
          this.getBase64ForkhatiaDalilList(thirdStateData, 'dalil', application_land_schedules[i].main_data[j]);
        }
      }
    }
    this.setJomirChohoddiImage(thirdStateData);

    /*** temporary offf
     if (typeof thirdStateData != 'undefined' && thirdStateData != '') {
          for (let fileData in thirdStateData.filePath) {
            if (typeof thirdStateData.filePath[fileData].row_index != 'undefined') {
                for (let fileData in thirdStateData.filePath) {
                    this.filePath[thirdStateData.filePath[fileData].row_index] = thirdStateData.filePath[fileData];
                }
                  if (thirdStateData.filePath[fileData].file_type == 'dalil') {
                    this.dalil_list[thirdStateData.filePath[fileData].row_index].fileMime = thirdStateData.filePath[fileData].fileMime;
                }
                  if (thirdStateData.filePath[fileData].file_path != '') {
                      let srcData = 'data:';
                    if (thirdStateData.filePath[fileData].fileMime == 'pdf') {
                        srcData += 'application/pdf';
                    } else {
                        srcData += 'image/png';
                    }
                      let fullFileUrl = this.tempBaseUrl + this.tempDir + '/temp_uploaded_files/' + thirdStateData.filePath[fileData].file_path;
                      let fullFileUrl = this.tempBaseUrl + this.uploadFolder + '/temp_uploaded_files/' + thirdStateData.filePath[fileData].file_path;
                      let self = this;
                    fetch(fullFileUrl)
                        .then(response => response.blob())
                        .then(blob => {
                            let reader = new FileReader();
                            reader.onload = () => {
                                  let base64FileData = srcData + ';base64,' + reader.result.split(',')[1];
                                  if (thirdStateData.filePath[fileData].file_type == 'dalil') {
                                      this.setBase64DataDalilData(base64FileData, thirdStateData.filePath[fileData].dolil_no, thirdStateData.filePath[fileData].office_id);
                                      $(document.body).find("#remove_button_" + thirdStateData.filePath[fileData].dolil_no + "_" + thirdStateData.filePath[fileData].office_id).show();
                                    $(document.body).find("#display_" + thirdStateData.filePath[fileData].dolil_no + "_" + thirdStateData.filePath[fileData].office_id).show();
                                    $(document.body).find('#file_input_' + thirdStateData.filePath[fileData].dolil_no + "_" + thirdStateData.filePath[fileData].office_id).hide();
                                  } else if (thirdStateData.filePath[fileData].file_type == 'khatian') {
                                      this.setBase64DataKhatianData(base64FileData, thirdStateData.filePath[fileData].khatian_no);
                                      $(document.body).find("#remove_button_" + thirdStateData.filePath[fileData].khatian_no).show();
                                    $(document.body).find("#display_" + thirdStateData.filePath[fileData].khatian_no).show();
                                    $(document.body).find('#file_input_' + thirdStateData.filePath[fileData].khatian_no).hide();
                                  } else if (thirdStateData.filePath[fileData].file_type == 'land_map') {
                                    this.setBase64DataLandMapData(base64FileData);
                                      $(document.body).find("#remove_button_land_map").show();
                                    $(document.body).find("#display_land_map").show();
                                    $(document.body).find('#file_input_land_map').hide();
                                }
                                  self.displayFileArray[thirdStateData.filePath[fileData].row_index] = srcData + ';base64,' + reader.result.split(',')[1];
                                self.filePath[thirdStateData.filePath[fileData].row_index].base64TempData = reader.result.split(',')[1];
                                self.filePath[thirdStateData.filePath[fileData].row_index].isStateData = true;
                              };
                            reader.readAsDataURL(blob);
                            reader.onerror = function (error) {
                                console.log('Error: ', error);
                            }
                        }).catch(err => console.log(`${err} something wrong on image process`));
                }
            }
        }
    }
     */

    this.total_doc_uploadable = this.jomi_johoddi_index + 1;
    this.$forceUpdate();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('tokenState', ['getToken'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('checkDataCroySutro', ['getFirstStepData', 'getAreaData', 'getImageInfo', 'getSecondStepData', 'getThirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData', 'setTrackingNo', 'setFormType', 'setAppType'])), {}, {
    // saveApplicationForm: function () {
    //     this.$refs['my-modal'].show();
    // },

    prepareDocumentSection: function prepareDocumentSection(thirdStateData, application_land_schedules) {
      var _this = this;
      var formData = new FormData();
      var state_document = '';
      if (typeof thirdStateData != 'undefined' && thirdStateData != '') {
        if (thirdStateData.filePath.length > 0) {
          state_document = thirdStateData.filePath;
        }
      }
      //this.JSONString = JSON.stringify(application_land_schedules);
      formData.append('application_land_schedules', JSON.stringify(application_land_schedules));
      formData.append('state_document', JSON.stringify(state_document));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/prepare-document-section', formData, {
        headers: this.headers
      }).then(function (resp) {
        _this.finalDocumentList.dalil = resp.data.data.data.dalil ? resp.data.data.data.dalil : {};
        _this.finalDocumentList.khatian = resp.data.data.data.khatian ? resp.data.data.data.khatian : {};
        _this.finalDocumentList.others = resp.data.data.data.others ? resp.data.data.data.others : {};
        _this.finalDocumentList.chowhoddi = resp.data.data.data.chowhoddi ? resp.data.data.data.chowhoddi : {};
        _this.setBase64ForDocument();
      })["catch"](function () {});
    },
    setBase64ForDocument: function setBase64ForDocument() {
      var _this2 = this;
      if (this.finalDocumentList.dalil.length > 0) {
        this.finalDocumentList.dalil.forEach(function (element, index) {
          if (element.file_path) {
            _this2.takeBase64AndSetByFilePath('dalil', index, element.fileMime, element.file_path);
          }
        });

        // for(let index in this.finalDocumentList.dalil) {
        //     let obj = this.finalDocumentList.dalil[index];
        //     if(obj.file_path) {
        //         this.takeBase64AndSetByFilePath('dalil', index, obj.fileMime, obj.file_path );
        //     }
        // }
      }

      if (this.finalDocumentList.khatian.length > 0) {
        for (var index in this.finalDocumentList.khatian) {
          var obj = this.finalDocumentList.khatian[index];
          if (obj.file_path) {
            this.takeBase64AndSetByFilePath('khatian', index, obj.fileMime, obj.file_path);
          }
        }
      }
      if (this.finalDocumentList.chowhoddi.length > 0) {
        for (var _index in this.finalDocumentList.chowhoddi) {
          var _obj = this.finalDocumentList.chowhoddi[_index];
          if (_obj.file_path) {
            this.takeBase64AndSetByFilePath('chowhoddi', _index, _obj.fileMime, _obj.file_path);
          }
        }
      }
      if (this.finalDocumentList.others.length > 0) {
        for (var _index2 in this.finalDocumentList.others) {
          var _obj2 = this.finalDocumentList.others[_index2];
          if (_obj2.file_path) {
            this.takeBase64AndSetByFilePath('others', _index2, _obj2.fileMime, _obj2.file_path);
          }
        }
      }
    },
    takeBase64AndSetByFilePath: function takeBase64AndSetByFilePath(type, index, mimeType, filePath) {
      var _this3 = this;
      if (filePath) {
        var srcData = 'data:';
        if (mimeType == 'pdf') {
          srcData += 'application/pdf';
        } else {
          srcData += 'image/png';
        }
        var fullFileUrl = this.tempBaseUrl + this.tempDir + '/temp_uploaded_files/' + filePath;
        fetch(fullFileUrl).then(function (response) {
          return response.blob();
        }).then(function (blob) {
          var reader = new FileReader();
          reader.onload = function () {
            _this3.finalDocumentList[type][index].base64TempData = reader.result.split(',')[1];
          };
          reader.readAsDataURL(blob);
          reader.onerror = function (error) {
            console.log('Error: ', error);
          };
        })["catch"](function (err) {
          return console.log("".concat(err, " something wrong on image process"));
        });
      }
    },
    showHelpModal: function showHelpModal() {
      this.$refs['my-modal'].show();
    },
    dalilAttachmentExits: function dalilAttachmentExits(objOfLandSehedule) {
      var isExits = false;
      var _iterator = _createForOfIteratorHelper(this.dalil_list),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var singleData = _step.value;
          if (singleData.dolil_no == objOfLandSehedule.dalil_no && singleData.office_id == objOfLandSehedule.sub_register_office_name) {
            isExits = true;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return isExits;
    },
    getBase64ForkhatiaDalilList: function getBase64ForkhatiaDalilList(thirdStateData, type, objOfLandSehedule) {
      var _this4 = this;
      var checkInsert = false;
      if (typeof thirdStateData != 'undefined' && thirdStateData != '') {
        if (thirdStateData.filePath.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(thirdStateData.filePath),
            _step2;
          try {
            var _loop = function _loop() {
              var fileData = _step2.value;
              if (type == 'dalil') {
                if (fileData.dolil_no == objOfLandSehedule.dalil_no && fileData.office_id == objOfLandSehedule.sub_register_office_name && fileData.file_path != '') {
                  var srcData = 'data:';
                  if (fileData.fileMime == 'pdf') {
                    srcData += 'application/pdf';
                  } else {
                    srcData += 'image/png';
                  }
                  var fullFileUrl = _this4.tempBaseUrl + _this4.tempDir + '/temp_uploaded_files/' + fileData.file_path;
                  fetch(fullFileUrl).then(function (response) {
                    return response.blob();
                  }).then(function (blob) {
                    var reader = new FileReader();
                    reader.onload = function () {
                      // let base64FileData = srcData + ';base64,' + reader.result.split(',')[1];
                      var base64FileData = reader.result.split(',')[1];
                      _this4.dalil_list.push({
                        base64TempData: base64FileData,
                        dolil_no: objOfLandSehedule.dalil_no,
                        dolil_date: objOfLandSehedule.dalil_date,
                        office_id: objOfLandSehedule.sub_register_office_name,
                        is_dolil_found: objOfLandSehedule.is_dolil_found,
                        fileMime: fileData.fileMime,
                        file_path: objOfLandSehedule.file_path,
                        file_text: 'দলিল নম্বর: ' + _this4.convert2Bangla(objOfLandSehedule.dalil_no),
                        file_type: 'dalil',
                        row_index: ''
                      });
                    };
                    reader.readAsDataURL(blob);
                    reader.onerror = function (error) {
                      console.log('Error: ', error);
                    };
                  })["catch"](function (err) {
                    return console.log("".concat(err, " something wrong on image process"));
                  });
                  checkInsert = true;
                  return "break";
                }
              } else if (type == 'khatian') {
                if (fileData.khatian_no == objOfLandSehedule.khatian_no && fileData.file_path != '') {
                  var _srcData = 'data:';
                  if (fileData.fileMime == 'pdf') {
                    _srcData += 'application/pdf';
                  } else {
                    _srcData += 'image/png';
                  }
                  var _fullFileUrl = _this4.tempBaseUrl + _this4.tempDir + '/temp_uploaded_files/' + fileData.file_path;
                  fetch(_fullFileUrl).then(function (response) {
                    return response.blob();
                  }).then(function (blob) {
                    var reader = new FileReader();
                    reader.onload = function () {
                      var base64FileData = reader.result.split(',')[1];
                      _this4.khatian_list.push({
                        base64TempData: base64FileData,
                        khatian_no: objOfLandSehedule.khatian_no,
                        file_text: 'খতিয়ান নম্বর: ' + _this4.convert2Bangla(objOfLandSehedule.khatian_no),
                        file_type: 'khatian',
                        fileMime: fileData.fileMime,
                        file_path: objOfLandSehedule.file_path
                      });
                    };
                    reader.readAsDataURL(blob);
                    reader.onerror = function (error) {
                      console.log('Error: ', error);
                    };
                  })["catch"](function (err) {
                    return console.log("".concat(err, " something wrong on image process"));
                  });
                  checkInsert = true;
                  return "break";
                }
              }
            };
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _ret = _loop();
              if (_ret === "break") break;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
      if (!checkInsert) {
        if (type == 'khatian') {
          this.khatian_list.push({
            base64TempData: '',
            khatian_no: objOfLandSehedule.khatian_no,
            file_text: 'খতিয়ান নম্বর: ' + this.convert2Bangla(objOfLandSehedule.khatian_no),
            file_type: 'khatian',
            fileMime: '',
            file_path: objOfLandSehedule.file_path
          });
        } else if (type == 'dalil') {
          this.dalil_list.push({
            base64TempData: '',
            dolil_no: objOfLandSehedule.dalil_no,
            dolil_date: objOfLandSehedule.dalil_date,
            office_id: objOfLandSehedule.sub_register_office_name,
            is_dolil_found: objOfLandSehedule.is_dolil_found,
            fileMime: '',
            file_path: objOfLandSehedule.file_path,
            file_text: 'দলিল নম্বর: ' + this.convert2Bangla(objOfLandSehedule.dalil_no),
            file_type: 'dalil',
            row_index: ''
          });
        }
      }
    },
    setJomirChohoddiImage: function setJomirChohoddiImage(thirdStateData) {
      var _this5 = this;
      var checkInsert = false;
      if (typeof thirdStateData != 'undefined' && thirdStateData != '') {
        if (thirdStateData.filePath.length > 0) {
          var _iterator3 = _createForOfIteratorHelper(thirdStateData.filePath),
            _step3;
          try {
            var _loop2 = function _loop2() {
              var fileData = _step3.value;
              if (fileData.file_type == 'land_map') {
                if (fileData.file_path != '') {
                  var srcData = 'data:';
                  if (fileData.fileMime == 'pdf') {
                    srcData += 'application/pdf';
                  } else {
                    srcData += 'image/png';
                  }
                  var fullFileUrl = _this5.tempBaseUrl + _this5.tempDir + '/temp_uploaded_files/' + fileData.file_path;
                  fetch(fullFileUrl).then(function (response) {
                    return response.blob();
                  }).then(function (blob) {
                    var reader = new FileReader();
                    reader.onload = function () {
                      _this5.jomir_chohoddi_image.base64TempData = reader.result.split(',')[1];
                      _this5.jomir_chohoddi_image.fileMime = fileData.fileMime;
                      _this5.jomir_chohoddi_image.file_path = '';
                    };
                    reader.readAsDataURL(blob);
                    reader.onerror = function (error) {
                      console.log('Error: ', error);
                    };
                  })["catch"](function (err) {
                    return console.log("".concat(err, " something wrong on image process"));
                  });
                  checkInsert = true;
                  return "break";
                }
              }
            };
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _ret2 = _loop2();
              if (_ret2 === "break") break;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
      if (!checkInsert) {
        this.jomir_chohoddi_image.base64TempData = '';
        this.jomir_chohoddi_image.fileMime = '';
        this.jomir_chohoddi_image.file_path = '';
      }
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    convert2Bangla: function convert2Bangla(engVal) {
      return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_3__["default"].convert2Bangla(engVal);
    },
    getBase64: function getBase64(event, data_value, index, type) {
      var _arguments = arguments,
        _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var restParams, file, reader;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                restParams = _arguments.length > 4 && _arguments[4] !== undefined ? _arguments[4] : null;
                file = event.target.files[0];
                if (file) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return", false);
              case 4:
                if (!(file.type != 'application/pdf')) {
                  _context.next = 8;
                  break;
                }
                alert('File type must be jpg, png or pdf');
                event.target.value = '';
                return _context.abrupt("return", false);
              case 8:
                if (!(file.size > 26214400)) {
                  _context.next = 12;
                  break;
                }
                alert('File size may not be more than 25 mb');
                event.target.value = '';
                return _context.abrupt("return", false);
              case 12:
                reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = function () {
                  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#base64Data' + index).attr('base', reader.result.split(',')[1]);
                  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#base64_ready' + index).val('processing');
                };
                reader.onerror = function (error) {
                  console.log('Error: ', error);
                };
                _this6.fileMime = event.target.files[0].name.split('.').pop();
                _context.next = 19;
                return _this6.readFile(event.target.files[0], function (e) {
                  if (!e.target.result.match(/\/Type[\s]*\/Page[^s]/g)) {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#success_message_file_up' + index).html('');
                    var error_message_html = '</br>আপনার আপলোডকৃত ফাইলটি সঠিক নয়, ফাইল সর্বনিন্ম এক পেজ থাকতে হবে, অনুগ্রহ করে সঠিক ফাইল আপলোড করুন';
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#error_message_file_up' + index).html(error_message_html);
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()(document.body).find(".help_modal_message").html(error_message_html);
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#file_upload_need_help" + index).show();
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#file_input_' + index).val('');
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#base64_ready' + index).val('complete');
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#base64Data' + index).attr('base', '');
                    this.bData = '';
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#page_count_ready' + index).val('process_reject');
                    return;
                  }
                  this.pagecount = e.target.result.match(/\/Type[\s]*\/Page[^s]/g).length;
                  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#output_pdf_page_count' + index).val(this.pagecount);
                  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#page_count_ready' + index).val('process_accepted');
                });
              case 19:
                _context.next = 21;
                return _this6.base64Check(event, data_value, index, type, file.size, restParams);
              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    readFile: function readFile(file, onLoadCallback) {
      var reader = new FileReader();
      reader.onloadend = onLoadCallback;
      reader.readAsBinaryString(file);
    },
    base64Check: function base64Check(event, data_value, index, type, file_size, restParams) {
      var _this7 = this;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("#file_upload_need_help" + index).hide();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".help_modal_message").html('');
      if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#page_count_ready' + index).val() == 'process_accepted') {
        var countPage = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#output_pdf_page_count' + index).val();
        var total_max_size = this.config_per_page_amount * countPage;
        var total_current = file_size / 1024;
        var message_total_Limit = this.countMbKb(total_max_size);
        var message_total_current = this.countMbKb(total_current);
        if (countPage > 0) {
          if (total_max_size <= total_current) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#success_message_file_up' + index).html('');
            var error_message_html = '</br>আপনার আপলোডকৃত ফাইলের সাইজ ' + message_total_current + ', ফাইলের সাইজ অবশ্যই সর্বোচ্চ (পেজের সংখ্যা x ' + this.countMbKb(this.config_per_page_amount) + ' ) অর্থাৎ (' + countPage + '*' + this.countMbKb(this.config_per_page_amount) + ' =' + message_total_Limit + ') হতে হবে';
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#error_message_file_up' + index).html(error_message_html);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(document.body).find(".help_modal_message").html(error_message_html);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#file_upload_need_help" + index).show();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#file_input_' + index).val('');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#base64_ready' + index).val('complete');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#base64Data' + index).attr('base', '');
            this.bData = '';
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#page_count_ready' + index).val('process_reject');
            return;
          } else {
            if (!event.target.files[0]) {
              return false;
            }
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#error_message_file_up' + index).html('');
            this.dataToBase64(event, data_value, index, type, file_size, restParams);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#success_message_file_up' + index).html('<span> </br></br>' + event.target.files[0].name + ' </span><span style="color: green;"></br>পেজের সংখ্যা: ' + countPage + ', ফাইলের সাইজ: ' + message_total_current + '</span>');
          }
        }
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#page_count_ready' + index).val('process_reject');
      } else {
        setTimeout(function () {
          _this7.base64Check(event, data_value, index, type, file_size, restParams);
        }, 100);
      }
    },
    dataToBase64: function dataToBase64(event, data_value, index, type, file_size, restParams) {
      if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#base64_ready' + index).val() == 'processing') {
        this.bData = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#base64Data' + index).attr('base');
        if (this.bData != '' && this.bData) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('#base64_ready' + index).val('complete');
          var srcData = 'data:';
          if (this.fileMime == 'pdf') {
            srcData += 'application/pdf';
          } else {
            srcData += 'image/png';
          }
          var base64withheadertype = srcData + ';base64,' + this.bData;
          this.displayFileArray[index] = base64withheadertype;
          this.total_doc_uploadable--;
          if (this.total_doc_uploadable == 0) {
            this.is_payment_option_enable.is_doc_ready = true;
          }
          var tmpFileText = '';
          var tmpFileType = '';
          var dolil_no = '';
          var khatian_no = '';
          var dolil_date = '';
          var office_id = '';
          var is_dolil_found = '';
          var dataObj = {};
          if (data_value == 'land_map') {
            tmpFileText = 'জমির চৌহদ্দি সহকর্মী নকশা';
            tmpFileType = 'land_map';
            this.finalDocumentList.chowhoddi[0].base64TempData = this.bData;
            this.finalDocumentList.chowhoddi[0].fileMime = this.fileMime;

            // this.jomir_chohoddi_image.base64TempData = this.bData;
            // this.jomir_chohoddi_image.fileMime = this.fileMime;
          } else {
            tmpFileText = data_value.file_text;
            tmpFileType = data_value.file_type;
          }
          /COMMON DATA OBJ/;
          dataObj = {
            file_path: '',
            file_text: tmpFileText,
            file_type: tmpFileType,
            fileMime: this.fileMime,
            row_index: index,
            base64TempData: this.bData
          };
          if (type == 'dalil') {
            dataObj.dolil_no = data_value.dolil_no;
            dataObj.dolil_date = data_value.dolil_date;
            dataObj.office_id = data_value.office_id;
            dataObj.is_dolil_found = data_value.is_dolil_found;
            this.finalDocumentList.dalil[index].base64TempData = this.bData;
            this.finalDocumentList.dalil[index].fileMime = this.fileMime;

            // this.setBase64DataDalilData(this.bData, data_value.dolil_no, data_value.office_id, this.fileMime);
          }

          if (type == 'khotian') {
            // dataObj.khatian_no = data_value.khatian_no;
            // this.setBase64DataKhatianData(this.bData, data_value.khatian_no, this.fileMime);
            this.finalDocumentList.khatian[restParams].base64TempData = this.bData;
            this.finalDocumentList.khatian[restParams].fileMime = this.fileMime;
          }
          if (data_value == 'others') {
            this.finalDocumentList.others[0].base64TempData = this.bData;
            this.finalDocumentList.others[0].fileMime = this.fileMime;
          }
          this.$forceUpdate();
        }
      } else {
        console.log((event, data_value, index, type, file_size));
      }
    },
    base64ToBlob: function base64ToBlob(b64Data) {
      var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
      var byteCharacters = atob(b64Data);
      var byteArrays = [];
      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      var blob = new Blob(byteArrays, {
        type: contentType
      });
      return blob;
    },
    displayFile: function displayFile(event, data, fileMime) {
      var from_path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'base_64';
      event.preventDefault();
      if (from_path == 'base_64') {
        var blob = this.base64ToBlob(data, 'application/pdf');
        this.documentBlobUrl = URL.createObjectURL(blob);
        this.blobUrl = true;
        this.$refs['document-view-modal'].show();
      } else if (from_path == 'from_path') {
        this.documentUrl = data;
        this.docUrl = true;
        this.$refs['document-view-modal'].show();
      } else {
        this.docUrl = false;
        this.blobUrl = false;
        this.$refs['document-view-modal'].hide();
      }
    },
    closeModal: function closeModal() {
      this.docUrl = false;
      this.blobUrl = false;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#modal-agreement-file-view').hide();
    },
    removeFile: function removeFile(index) {
      this.total_doc_uploadable++;
      this.is_payment_option_enable.is_doc_ready = false;
      for (var loopIndex in this.filePath) {
        if (this.filePath[loopIndex].row_index == index) {
          if (this.filePath[loopIndex].file_type == 'dalil') {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#file_input_' + this.filePath[loopIndex].dolil_no + '_' + this.filePath[loopIndex].office_id).val('');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#file_input_' + this.filePath[loopIndex].dolil_no + '_' + this.filePath[loopIndex].office_id).show();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#remove_button_" + this.filePath[loopIndex].dolil_no + '_' + this.filePath[loopIndex].office_id).hide();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#display_" + this.filePath[loopIndex].dolil_no + '_' + this.filePath[loopIndex].office_id).hide();
          } else if (this.filePath[loopIndex].file_type == 'khatian') {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#file_input_' + this.filePath[loopIndex].khatian_no).val('');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#file_input_' + this.filePath[loopIndex].khatian_no).show();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#remove_button_" + this.filePath[loopIndex].khatian_no).hide();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#display_" + this.filePath[loopIndex].khatian_no).hide();
          } else if (this.filePath[loopIndex].file_type == 'land_map') {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#file_input_land_map').val('');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#file_input_land_map').show();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#remove_button_land_map").hide();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#display_land_map").hide();
          }
          if (typeof this.filePath[loopIndex].isStateData == 'undefined' && this.filePath[loopIndex].isStateData != true) {
            this.filePath.splice(loopIndex, 1);
          } else {
            this.filePath.filter(function (e) {
              if (e.row_index == index) {
                e.base64TempData = '';
              }
              return;
            });
          }
          this.displayFileArray[index] = '';
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('#success_message_file_up' + index).html('');
        }
      }
    },
    removeFileNew: function removeFileNew(index, type) {
      var dalil_no = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var office_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var khatian_no = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      if (type == 'land_map') {
        this.jomir_chohoddi_image.base64TempData = '';
      } else if (type == 'dalil') {
        for (var dalil in this.dalil_list) {
          if (this.dalil_list[dalil].dolil_no == dalil_no && this.dalil_list[dalil].office_id == office_id) {
            this.dalil_list[dalil].base64TempData = '';
          }
        }
      } else if (type == 'khatian') {
        for (var khatian in this.khatian_list) {
          if (this.khatian_list[khatian].khatian_no == khatian_no) {
            this.khatian_list[khatian].base64TempData = '';
          }
        }
      }
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#success_message_file_up' + index).html('');
    },
    fileRemove: function fileRemove(type, key, index) {
      this.finalDocumentList[type][key].base64TempData = "";
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#success_message_file_up' + index).html('');
    },
    hideHelpModal: function hideHelpModal() {
      this.$refs['help-modal'].show();
    },
    helpModal: function helpModal() {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#help_modal').show();
    },
    fetchDolilPdf: function fetchDolilPdf(event, file_path, filemime) {
      this.pdf_loading = true;
      if (file_path != '') {
        this.pdf_loading = false;
        this.displayFile(event, this.tempBaseUrl + this.tempDir + '/temp_uploaded_files/' + file_path, filemime, 'from_path');
      } else {
        this.pdf_loading = false;
      }
    },
    countMbKb: function countMbKb(size) {
      return size > 1024 ? (size / 1024).toFixed(2) + 'MB' : Math.round(size) + 'KB';
    },
    setBase64DataDalilData: function setBase64DataDalilData(base64, dalil_no, office_id, fileMime) {
      for (var dalil in this.dalil_list) {
        if (this.dalil_list[dalil].dolil_no == dalil_no && this.dalil_list[dalil].office_id == office_id) {
          this.dalil_list[dalil].base64TempData = base64;
          this.dalil_list[dalil].fileMime = fileMime;
        }
      }
    },
    setBase64DataKhatianData: function setBase64DataKhatianData(base64, khatian_no, fileMime) {
      for (var khatian in this.khatian_list) {
        if (this.khatian_list[khatian].khatian_no == khatian_no) {
          this.khatian_list[khatian].base64TempData = base64;
          this.khatian_list[khatian].fileMime = fileMime;
        }
      }
    },
    setBase64DataLandMapData: function setBase64DataLandMapData(base64) {
      this.jomir_chohoddi_image.base64TempData = base64;
    }
  }),
  watch: {
    tmp_submit_papers_3_days: function tmp_submit_papers_3_days(value) {
      this.$emit("change_submit_papers_3_days", value);
    },
    tmp_submit_papers_sunani: function tmp_submit_papers_sunani(value) {
      this.$emit("change_submit_papers_sunani", value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/information_preview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/information_preview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Application_common_page_comp_land_ownership__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Application/common_page_comp/land-ownership */ "./resources/js/components/Application/common_page_comp/land-ownership.vue");
/* harmony import */ var _Application_common_page_comp_initial_data_area_applicant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Application/common_page_comp/initial_data_area_applicant */ "./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "information_preview",
  props: ['applicationData', 'Khatians'],
  data: function data() {
    return {
      applicant_citizen: [],
      land_information: {},
      representative_info: {},
      JSONString: '',
      question: '',
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
      KhationTypeList: '',
      selected_land_ownership_reference_text: [],
      finalOwnerShipText: ''
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('checkDataCroySutro', ['firstStepData', 'imageInfo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])),
  mounted: function mounted() {
    this.applicant_citizen.push(this.$store.state.checkDataCroySutro.secondStepData.citizen_applicant);
    this.representative_info = this.$store.state.checkDataCroySutro.secondStepData.Delegate;
    this.land_information = this.$store.state.checkDataCroySutro.secondStepData.application_land_schedules;

    //  this.JSONString = JSON.stringify(this.$store.state.checkDataCroySutro);
    //   this.JSONString = JSON.stringify(this.applicant_citizen);

    // console.log(this.land_information);

    //land ownership data
    var ownerShipData = this.allCommonDataFirstPage.ownerShipData;
    for (var prop in ownerShipData) {
      if (ownerShipData[prop].active) {
        this.selected_land_ownership_reference_text.push(ownerShipData[prop].display);
      }
    }
    this.prepareOwnershipText();
  },
  created: function created() {
    this.question = this.allCommonDataFirstPage.questions;
    this.khatianTypeListView();
  },
  methods: {
    prepareOwnershipText: function prepareOwnershipText() {
      for (var prop in this.selected_land_ownership_reference_text) {
        this.finalOwnerShipText += this.selected_land_ownership_reference_text[prop] + ', ';
      }
      this.finalOwnerShipText = this.finalOwnerShipText.slice(0, -2);
    },
    khatianTypeListView: function khatianTypeListView() {
      var _this = this;
      var TypeName = this.khatian_type_list.filter(function (item) {
        if (item.id == _this.question.last_jorip_info) {
          _this.KhationTypeList = item.data;
        }
      });
    },
    customDateFormat: function customDateFormat(date) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format('YYYY-MM-DD');
    },
    get_land_calculation: function get_land_calculation(unit, amount) {
      var land_amount_type_id_value = unit;
      var amount_of_land_value = amount;
      if (land_amount_type_id_value == 2) {
        amount_of_land_value = amount_of_land_value.toString();
        if (amount_of_land_value.length === 1) {
          amount_of_land_value = "0" + amount_of_land_value;
        }
        // amount_of_land_value = '0.' + amount_of_land_value.rpad("0", 4)
      } else {
        amount_of_land_value = amount_of_land_value.toString();
        var splited_amount_of_land_value = amount_of_land_value.split('.');
        if (splited_amount_of_land_value[1] !== undefined) {
          var sotok_part_amount_of_land_value = splited_amount_of_land_value[1];
          sotok_part_amount_of_land_value = sotok_part_amount_of_land_value.toString();
          if (sotok_part_amount_of_land_value.length === 1) {
            sotok_part_amount_of_land_value = "0" + sotok_part_amount_of_land_value;
          }
          // sotok_part_amount_of_land_value = sotok_part_amount_of_land_value.rpad("0", 4);
          amount_of_land_value = splited_amount_of_land_value[0] + '.' + sotok_part_amount_of_land_value;
        }
      }
      var ekor_land_amount_value = 0;
      var shotok_land_amount_value = '00';
      var ozutangsho_land_amount_value = '00';
      if (amount_of_land_value) {
        var message_array = amount_of_land_value.split('.');
        ekor_land_amount_value = message_array[0];
        if (message_array[1] !== undefined) {
          shotok_land_amount_value = message_array[1].substr(0, 2);
          ozutangsho_land_amount_value = message_array[1].substr(2, 2);
        }
      }
      var message_show_user = ekor_land_amount_value + ' একর ' + shotok_land_amount_value + ' শতক ' + ozutangsho_land_amount_value + ' অযুতাংশ';
      return message_show_user;
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=template&id=543ca582&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=template&id=543ca582&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "section-body"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticStyle: {
      clear: "both",
      height: "20px"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c("div", {
    staticClass: "lmt-table"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_vm._l(_vm.Khatians, function (master_item, master_index) {
    return _c("div", {
      key: master_index,
      staticClass: "card mt-3 p-0"
    }, [_c("div", {
      staticClass: "card-body p-2"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12"
    }, [_c("div", {
      staticClass: "d-flex"
    }, [_c("span", {
      staticClass: "form-sec-title"
    }, [_vm._v("খতিয়ান নম্বর : "), _c("b", [_vm._v(_vm._s(_vm.convert2Bangla(master_item.main.khatian_no)))]), _vm._v("  ")]), _vm._v(" "), _c("small", {
      staticClass: "mt-1"
    }, [_vm._v("( অত্র খতিয়ানের জমির পরিমাণ "), _c("span", {
      staticStyle: {
        color: "darkred"
      }
    }, [_vm._v(_vm._s(_vm.convert2Bangla(_vm.get_land_calculation(1, master_item.main.total_land_khotian))))]), _vm._v(" অংশ হস্তান্তর হয়েছে ) "), master_item.main.remaining_amount > 0 ? _c("i", {
      staticStyle: {
        color: "darkred"
      }
    }, [_vm._v(" -- ( অত্র খতিয়ানের জমির পরিমাণ " + _vm._s(_vm.convert2Bangla(_vm.get_land_calculation(1, master_item.main.remaining_amount))) + " অংশ বাকি আছে )")]) : _vm._e()])])]), _vm._v(" "), _c("div", {
      staticClass: "col-12",
      staticStyle: {
        padding: "0 8px"
      }
    }, [master_item.main.information.length > 0 ? _c("table", {
      staticClass: "table table-bordered table-striped sm-screen-sm-tbl input_bangla_normal"
    }, [_vm._m(1, true), _vm._v(" "), _vm._l(master_item.main.information, function (child_item, child_index) {
      return _c("tr", {
        key: child_index
      }, [_c("td", [_c("p", [_c("b", [_vm._v("নাম :")]), _vm._v(" " + _vm._s(child_item.owner_name) + " " + _vm._s(child_item.check_dead == 2 ? "(মৃত)" : ""))]), _vm._v(" "), child_item.warish_name != "" ? _c("p", [_c("b", [_vm._v("ওয়ারিশের নাম :")]), _vm._v(" " + _vm._s(child_item.warish_name))]) : _vm._e(), _vm._v(" "), child_item.warish_relationship != "" ? _c("p", [_c("b", [_vm._v("নিবন্ধিত দাতার সঙ্গে ওয়ারিশের সম্পর্ক :")]), _vm._v(" " + _vm._s(child_item.warish_relationship))]) : _vm._e(), _vm._v(" "), child_item.holding_no != "" ? _c("p", [_c("b", [_vm._v("হোল্ডিং নং :")]), _vm._v("\n                                                " + _vm._s(_vm.convert2Bangla(child_item.holding_no)))]) : _vm._e(), _vm._v(" "), child_item.death_certificate_file_path != "" && child_item.check_dead == "2" ? _c("p", [_c("b", [_vm._v("ওয়ারিশের সনদ :")]), _vm._v(" "), child_item.death_certificate_file_path != "" ? _c("button", {
        staticClass: "btn btn-success btn-sm",
        staticStyle: {
          padding: "0px 10px 0px"
        },
        on: {
          click: function click(event) {
            return _vm.fetchShonodlPdf(event, child_item.death_certificate_file_path);
          }
        }
      }, [_vm._v("সনদ দেখুন")]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("td", [_c("span", {
        staticClass: "input_bangla_normal"
      }, [_vm._v(_vm._s(child_item.holding_address) + ", " + _vm._s(child_item.upazila_name) + ", " + _vm._s(child_item.district_name))]), _vm._v(" "), child_item.mobile != "" ? _c("span", {
        staticClass: "input_bangla_normal"
      }, [_c("br"), _c("b", [_vm._v("মোবাইল :")]), _vm._v(" " + _vm._s(_vm.convert2Bangla(child_item.mobile)))]) : _vm._e(), _vm._v(" "), child_item.owner_dob != "" ? _c("span", {
        staticClass: "input_bangla_normal"
      }, [_c("br"), _c("b", [_vm._v("জন্মতারিখ :")]), _vm._v(" " + _vm._s(_vm.convert2Bangla(child_item.owner_dob)))]) : _vm._e(), _vm._v(" "), child_item.owner_nid != "" ? _c("span", {
        staticClass: "input_bangla_normal"
      }, [_c("br"), _c("b", [_vm._v("জাতীয় পরিচয়পত্রের নম্বর :")]), _vm._v(" " + _vm._s(_vm.convert2Bangla(child_item.owner_nid)))]) : _vm._e()]), _vm._v(" "), _c("td", [_c("span", {
        staticClass: "input_bangla_normal"
      }, [_vm._v(_vm._s(_vm.convert2Bangla(child_item.land_amount_txt)))])]), _vm._v(" "), _c("td", {
        staticStyle: {
          "vertical-align": "middle"
        }
      }, [_c("button", {
        staticClass: "btn btn-danger btn-sm m-1",
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.removeMalik(master_index, child_index);
          }
        }
      }, [_c("i", {
        staticClass: "fa fa-trash mt-1"
      })])])]);
    })], 2) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "col-12"
    }, [master_item.main.add_btn_show ? _c("button", {
      staticClass: "btn btn-primary btn-sm mr-2 mt-1",
      attrs: {
        type: "button",
        id: "khotianButton"
      },
      on: {
        click: function click($event) {
          _vm.addKhatianOwner(master_index, master_item.main.khatian_no, _vm.convert2Bangla(_vm.get_land_calculation(1, master_item.main.total_land_khotian)), master_item.main.remaining_amount, _vm.convert2Bangla(_vm.get_land_calculation(1, master_item.main.remaining_amount)));
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-plus"
    }), _vm._v(" দাতার তথ্য সংযোজন\n                                    করুন\n                                ")]) : _vm._e()])])])]);
  }), _vm._v(" "), _c("div", {
    staticStyle: {
      clear: "both",
      height: "15px"
    }
  }, [_vm._v(" ")])], 2), _vm._v(" "), _c("b-modal", {
    ref: "my-modal",
    attrs: {
      size: "lg",
      "hide-footer": "",
      title: "দাতার তথ্য"
    }
  }, [_c("div", {
    ref: "datarTotthoModal"
  }, [_c("div", {
    staticClass: "card p-0",
    staticStyle: {
      border: "1px solid #b1dfbb",
      "background-color": "#EFEFEF"
    }
  }, [_c("div", {
    staticClass: "card-body p-2"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_c("small", {
    staticClass: "mt-1"
  }, [_vm._v("( অত্র খতিয়ানের জমির পরিমাণ "), _c("span", {
    staticStyle: {
      color: "darkred"
    }
  }, [_vm._v(_vm._s(_vm.total_land_khotian_value))]), _vm._v(" অংশ হস্তান্তর হয়েছে ) "), _vm.main_remaining_amount_value > 0 ? _c("i", {
    staticStyle: {
      color: "darkred"
    }
  }, [_vm._v(" -- ( অত্র খতিয়ানের জমির পরিমাণ " + _vm._s(_vm.remaining_amount_value) + " অংশ বাকি আছে )")]) : _vm._e()])])])])])]), _vm._v(" "), _c("div", {
    staticStyle: {
      clear: "both",
      height: "15px"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("মালিক:"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_vm.modal_owner_data.owner_list != undefined && _vm.modal_owner_data.owner_list.length > 0 ? _c("div", [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.owner_data,
      expression: "modal_owner_data.owner_data"
    }],
    staticClass: "form-control red-bordered required_field",
    attrs: {
      id: "division_id"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.modal_owner_data, "owner_data", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function (event) {
        return _vm.setMalikAddr(event, _vm.modal_owner_data.index);
      }]
    }
  }, [_c("option", {
    domProps: {
      value: ""
    }
  }, [_vm._v("মালিক নির্বাচন করুন")]), _vm._v(" "), _vm._l(_vm.modal_owner_data.owner_list, function (value, index) {
    return _c("option", {
      key: index,
      attrs: {
        ref_address: value.address
      },
      domProps: {
        value: value.name
      }
    }, [_vm._v("\n                                        " + _vm._s(value.name) + "\n                                    ")]);
  })], 2), _vm._v(" "), _vm.modal_owner_data.duplicate_owner == 1 ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("আপনি ইতোমধ্যেই\n                                    উক্ত\n                                    মালিকের তথ্য পূরণ করেছেন।\n                                ")]) : _vm._e()]) : _vm.modal_owner_data.owner_list != undefined && _vm.modal_owner_data.owner_list.length > 0 ? _c("div", [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.owner_data,
      expression: "modal_owner_data.owner_data"
    }],
    staticClass: "form-control red-bordered required_field",
    attrs: {
      id: "division_id"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.modal_owner_data, "owner_data", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function (event) {
        return _vm.setMalikAddr(event, _vm.modal_owner_data.index);
      }]
    }
  }, [_c("option", {
    domProps: {
      value: ""
    }
  }, [_vm._v("মালিক নির্বাচন করুন")]), _vm._v(" "), _vm._l(_vm.modal_owner_data.owner_list, function (value, index) {
    return _c("option", {
      key: index,
      attrs: {
        ref_address: value.address
      },
      domProps: {
        value: value.name
      }
    }, [_vm._v("\n                                        " + _vm._s(value.name) + "\n                                    ")]);
  })], 2), _vm._v(" "), _vm.modal_owner_data.duplicate_owner == 1 ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("আপনি ইতোমধ্যেই\n                                    উক্ত\n                                    মালিকের তথ্য পূরণ করেছেন।\n                                ")]) : _vm._e()]) : _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.owner_data,
      expression: "modal_owner_data.owner_data"
    }],
    staticClass: "form-control red-bordered required_field",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.modal_owner_data.owner_data
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.modal_owner_data, "owner_data", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.check_dead,
      expression: "modal_owner_data.check_dead"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      required: "",
      name: "check_dead",
      id: "check_dead1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.modal_owner_data.check_dead, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.modal_owner_data, "check_dead", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_dead1"
    }
  }, [_vm._v(" জীবিত ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.check_dead,
      expression: "modal_owner_data.check_dead"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "check_dead",
      id: "check_dead2",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.modal_owner_data.check_dead, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.modal_owner_data, "check_dead", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_dead2"
    }
  }, [_vm._v("মৃত")])])])]), _vm._v(" "), _vm.modal_owner_data.checked_dead_info == 1 ? _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("ওয়ারিশের নাম:"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.warish_name,
      expression: "modal_owner_data.warish_name"
    }],
    staticClass: "form-control red-bordered required_field",
    attrs: {
      type: "text",
      title: "ওয়ারিশের নাম"
    },
    domProps: {
      value: _vm.modal_owner_data.warish_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.modal_owner_data, "warish_name", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.modal_owner_data.checked_dead_info == 1 ? _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("নিবন্ধিত দাতার সঙ্গে ওয়ারিশের সম্পর্ক:"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.warish_relationship,
      expression: "modal_owner_data.warish_relationship"
    }],
    staticClass: "form-control red-bordered required_field",
    attrs: {
      type: "text",
      title: "নিবন্ধিত দাতার সঙ্গে ওয়ারিশের সম্পর্ক"
    },
    domProps: {
      value: _vm.modal_owner_data.warish_relationship
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.modal_owner_data, "warish_relationship", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.modal_owner_data.checked_dead_info == 1 ? _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("ওয়ারিশের সনদ:"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    staticClass: "form-control red-bordered required_field",
    attrs: {
      type: "file",
      accept: "application/pdf",
      title: "ওয়ারিশের সনদ"
    },
    on: {
      change: function change(event) {
        return _vm.deadCertificateUpload(event);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_vm.modal_owner_data.death_certificate != "" ? _c("a", {
    staticClass: "btn btn-success btn-sm",
    staticStyle: {
      padding: "0px 10px 0px"
    },
    attrs: {
      target: "_blank",
      href: "#"
    },
    on: {
      click: function click(event) {
        return _vm.displayFile(event);
      }
    }
  }, [_vm._v(" সনদ দেখুন "), _c("i", {
    staticClass: "fa fa-eye-slash",
    attrs: {
      "aria-hidden": "true"
    }
  })]) : _vm._e()])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("হোল্ডিং নং(LD-Tax):\n                            "), _vm.modal_owner_data.holding_owner_list != undefined && _vm.modal_owner_data.holding_owner_list.length > 0 ? _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_vm.modal_owner_data.holding_owner_list != undefined && _vm.modal_owner_data.holding_owner_list.length > 0 ? _c("div", [_vm.modal_owner_data.holding_owner_list[0].tax_clear_uptodate == "yes" ? _c("div", [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.holding_no,
      expression: "modal_owner_data.holding_no"
    }],
    staticClass: "form-control red-bordered required_field",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.modal_owner_data, "holding_no", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function (event) {
        return _vm.checkTax(event, _vm.modal_owner_data.index);
      }]
    }
  }, [_c("option", {
    domProps: {
      value: ""
    }
  }, [_vm._v("হোল্ডিং নির্বাচন করুন")]), _vm._v(" "), _vm._l(_vm.modal_owner_data.holding_owner_list[0].owner_information, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: value.name
      }
    }, [_vm._v("\n                                            " + _vm._s(_vm.modal_owner_data.holding_owner_list[0].holding_no) + " - " + _vm._s(value.name) + "\n                                        ")]);
  })], 2), _vm._v(" "), _vm.modal_owner_data.duplicate_holding_owner == 1 ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("আপনি\n                                        ইতোমধ্যেই উক্ত\n                                        মালিকের তথ্য পূরণ করেছেন।\n                                    ")]) : _vm._e()]) : _c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.holding_no,
      expression: "modal_owner_data.holding_no"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    attrs: {
      type: "text",
      placeholder: "",
      title: "হোল্ডিং নং"
    },
    domProps: {
      value: _vm.modal_owner_data.holding_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.modal_owner_data, "holding_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.modal_owner_data.holding_no_error ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-7"
  }, [_c("p", {
    staticStyle: {
      color: "red",
      "margin-top": "5px",
      "margin-left": "3px",
      "font-size": "12px"
    }
  }, [_c("b", [_vm._v("ফিল্ড টি পূরণ করুন। ")])])])]) : _vm._e()])]) : _c("div", [_vm._v("\n                                আপনার হোল্ডিং ইনফরমেশন খুঁজে পাওয়া যায়নি।\n                            ")]), _vm._v(" "), _c("small", {
    staticClass: "text-danger",
    attrs: {
      id: "tax_msg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("মোবাইল নং:"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.mobile,
      expression: "modal_owner_data.mobile"
    }],
    staticClass: "form-control input_bangla red-bordered required_field mobile_bn",
    attrs: {
      type: "text",
      placeholder: "",
      title: "মোবাইল নং"
    },
    domProps: {
      value: _vm.modal_owner_data.mobile
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.modal_owner_data, "mobile", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.modal_owner_data.mobile_error ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-7"
  }, [_c("p", {
    staticStyle: {
      color: "red",
      "margin-top": "5px",
      "margin-left": "3px",
      "font-size": "12px"
    }
  }, [_c("b", [_vm._v("মোবাইল নম্বর টি সঠিক নয়। ")])])])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4"
  }, [_vm._v(_vm._s(_vm.modal_owner_data.check_dead == 2 ? "ওয়ারিশের জাতীয় পরিচয়পত্র নম্বর" : "জাতীয় পরিচয়পত্র নম্বর") + ":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.owner_nid,
      expression: "modal_owner_data.owner_nid"
    }],
    staticClass: "form-control input_bangla",
    attrs: {
      type: "text",
      title: "জাতীয় পরিচয় পত্রের নম্বর"
    },
    domProps: {
      value: _vm.modal_owner_data.owner_nid
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.modal_owner_data, "owner_nid", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.modal_owner_data.owner_nid_error ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-7"
  }, [_c("p", {
    staticStyle: {
      color: "red",
      "margin-top": "5px",
      "margin-left": "3px",
      "font-size": "12px"
    }
  }, [_c("b", [_vm._v("জাতীয় পরিচয়পত্র নম্বর টি সঠিক নয়।")])])])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4"
  }, [_vm._v("জন্মতারিখ:")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("datepicker", {
    staticClass: "date_1",
    attrs: {
      "bootstrap-styling": true,
      title: "জন্মতারিখ",
      placeholder: "জন্মতারিখ",
      format: _vm.customDateFormat
    },
    model: {
      value: _vm.modal_owner_data.owner_dob,
      callback: function callback($$v) {
        _vm.$set(_vm.modal_owner_data, "owner_dob", $$v);
      },
      expression: "modal_owner_data.owner_dob"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("জমির পরিমাণ:"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.land_portion,
      expression: "modal_owner_data.land_portion"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    attrs: {
      type: "text",
      placeholder: "",
      title: "অংশ"
    },
    domProps: {
      value: _vm.modal_owner_data.land_portion
    },
    on: {
      blur: function blur($event) {
        return _vm.calculationLand();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.modal_owner_data, "land_portion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append",
    staticStyle: {
      width: "30%"
    }
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      readonly: "",
      value: "একর",
      placeholder: "একর"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "input_bangla",
    staticStyle: {
      "font-size": "11px !important",
      "font-style": "italic"
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.modal_owner_data.land_amount_txt) + "\n                            ")]), _vm._v(" "), _vm.modal_owner_data.land_portion_error ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-7"
  }, [_c("p", {
    staticStyle: {
      color: "red",
      "margin-top": "5px",
      "margin-left": "3px",
      "font-size": "12px"
    }
  }, [_c("b", [_vm._v("জমির পরিমাণ ভ্যালু টি সঠিক নয়।")])])])]) : _vm._e()])]), _vm._v(" "), _vm.modal_owner_data.total_amount_exits_msg ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("p", {
    staticStyle: {
      color: "red",
      "font-size": "12px"
    }
  }, [_c("b", [_vm._v("মোট জমির পরিমাণ অতিক্রম করেছে ।")])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("জেলা:"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_vm.district_loading ? _c("span", [_vm._v("Loading...")]) : _vm._e(), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.district_id,
      expression: "modal_owner_data.district_id"
    }],
    staticClass: "form-control red-bordered required_field",
    attrs: {
      id: "district_id"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.modal_owner_data, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function (event) {
        return _vm.getUpazila(event);
      }]
    }
  }, [_c("option", {
    attrs: {
      district_name: ""
    },
    domProps: {
      value: ""
    }
  }, [_vm._v("জেলা নির্বাচন করুন")]), _vm._v(" "), _vm._l(_vm.districts, function (value, index) {
    return _c("option", {
      key: index,
      attrs: {
        district_name: value.id + "_" + value.division_id
      },
      domProps: {
        value: value.id
      }
    }, [_vm._v("\n                                    " + _vm._s(value.name_bn) + "\n                                ")]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("উপজেলা:"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_vm.upazila_loading ? _c("span", [_vm._v("Loading...")]) : _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.upazila_id,
      expression: "modal_owner_data.upazila_id"
    }],
    staticClass: "form-control red-bordered required_field",
    attrs: {
      id: "upazila_id"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.modal_owner_data, "upazila_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function (event) {
        return _vm.setUpazilaName(event);
      }]
    }
  }, [_c("option", {
    attrs: {
      upazila_name: ""
    },
    domProps: {
      value: ""
    }
  }, [_vm._v("উপজেলা নির্বাচন করুন")]), _vm._v(" "), _vm._l(_vm.upazilas, function (value, index) {
    return _c("option", {
      key: index,
      attrs: {
        upazila_name: value
      },
      domProps: {
        value: index
      }
    }, [_vm._v("\n                                    " + _vm._s(value) + "\n                                ")]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("পিতা/স্বামী,গ্রাম/মহল্লা,বাসা ও সড়ক নং:"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_owner_data.holding_address,
      expression: "modal_owner_data.holding_address"
    }],
    staticClass: "form-control red-bordered required_field",
    attrs: {
      type: "text",
      placeholder: "",
      title: "গ্রাম/মহল্লা,বাসা ও সড়ক নং"
    },
    domProps: {
      value: _vm.modal_owner_data.holding_address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.modal_owner_data, "holding_address", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row inputSpacing"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_vm._v("\n                             \n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("button", {
    staticClass: "btn active btn-outline-danger float-left ml-3 m-icon-left",
    staticStyle: {
      "margin-left": "0px !important"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.hideModal();
      }
    }
  }, [_vm._v("বাতিল")]), _vm._v(" "), _c("button", {
    staticClass: "btn active btn-outline-primary float-left ml-3 m-icon-left",
    attrs: {
      type: "button",
      disabled: _vm.modal_owner_data.add_btn
    },
    on: {
      click: function click($event) {
        return _vm.addKhatianOwnerList(_vm.modal_owner_data);
      }
    }
  }, [_vm._v("সংযোজন")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal",
    attrs: {
      id: "modal-agreement",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    },
    on: {
      click: _vm.closeModal
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _vm._m(2)])])])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "landinfo-title have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-number"
  }, [_vm._v("৫")]), _vm._v(" "), _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("দাতার তথ্য প্রদান করুন")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticStyle: {
      width: "30%"
    }
  }, [_vm._v("নাম ও হোল্ডিং নং")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("পিতা/স্বামী, ঠিকানা")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "14%"
    }
  }, [_vm._v("জমির পরিমাণ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "6%"
    }
  }, [_vm._v("পদক্ষেপ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body",
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
      src: "",
      gesture: "media",
      allow: "encrypted-media",
      allowfullscreen: "",
      id: "fileDisplay",
      frameborder: "0"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_document.vue?vue&type=template&id=625e7d3a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/application_document.vue?vue&type=template&id=625e7d3a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "page-songjukti pt-4"
  }, [_c("Tab", {
    attrs: {
      active_tab: _vm.active_tab
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "page-content mb-5 bg-white"
  }, [_c("form", {
    attrs: {
      action: ""
    }
  }, [_c("div", {
    staticStyle: {
      clear: "both",
      height: "15px"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c("application_doc_khotian_info", {
    attrs: {
      is_payment_option_enable: _vm.is_payment_option_enable,
      Khatians: _vm.datarInfo
    }
  }), _vm._v(" "), _c("attachment_mechanism", {
    attrs: {
      is_payment_option_enable: _vm.is_payment_option_enable,
      filePath: _vm.filePath,
      displayFileArray: _vm.displayFileArray,
      dalil_list: _vm.dalil_list,
      khatian_list: _vm.khatian_list,
      jomir_chohoddi_image: _vm.jomir_chohoddi_image,
      other_doc_image: _vm.other_doc_image,
      submit_papers_3_days: _vm.submit_papers_3_days,
      submit_papers_3_days_text: _vm.submit_papers_3_days_text,
      submit_papers_sunani: _vm.submit_papers_sunani,
      finalDocumentList: _vm.finalDocumentList,
      submit_papers_sunani_text: _vm.submit_papers_sunani_text
    },
    on: {
      change_submit_papers_3_days: _vm.change_submit_papers_3_days,
      change_submit_papers_sunani: _vm.change_submit_papers_sunani
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "section-footer border-top text-center"
  }, [_c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.declaration,
      expression: "declaration"
    }],
    attrs: {
      type: "checkbox",
      value: "1",
      id: "declaration_text"
    },
    domProps: {
      checked: Array.isArray(_vm.declaration) ? _vm._i(_vm.declaration, "1") > -1 : _vm.declaration
    },
    on: {
      change: function change($event) {
        var $$a = _vm.declaration,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.declaration = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.declaration = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.declaration = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticStyle: {
      "font-size": "13px"
    },
    attrs: {
      "for": "declaration_text"
    }
  }, [_vm._v("আবেদনে প্রদত্ত যাবতীয় তথ্য এবং সংযুক্তি দলিলাদি সঠিক মর্মে জমা প্রদান করছি। আবেদনকারী হিসেবে কোনো ধরণের মিথ্যা তথ্য বা বানোয়াট দলিলের ক্ষেত্রে দায়-দায়িত্ব সম্পূর্ণভাবে বহন করবো।")])]), _vm._v(" "), _c("div", {
    staticClass: "section-footer border-top text-center"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("button", {
    staticClass: "btn active btn-outline-success float-right ml-3 m-icon-right",
    attrs: {
      type: "button",
      disabled: _vm.isDisabled
    },
    on: {
      click: function click($event) {
        return _vm.dakhil();
      }
    }
  }, [_vm._v(_vm._s(_vm.button_text) + " "), _c("i", {
    staticClass: "fa fa-arrow-right",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn active btn-outline-info float-right ml-3 m-icon-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.saveAsDraftApplication
    }
  }, [_vm.is_draft_before == 1 ? _c("span", [_vm._v("পুনরায় খসড়া সংরক্ষণ করুন")]) : _c("span", [_vm._v("খসড়া সংরক্ষণ করুন")])]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-primary float-right mx-3 m-icon-left",
    attrs: {
      to: "/namjari-application/skDYihM3r42BpL_HvUntII82lKqsMOw-VPZ03RENMP3EA_UkdyeCwBQoxIKVXBXTLQ04NtxqwEsc-LWSPPYU4g"
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" পূর্ববর্তী")])], 1)])])])], 1)])])], 1), _vm._v(" "), _c("b-modal", {
    ref: "document_upload",
    attrs: {
      size: "sm",
      title: "ডকুমেন্ট আপলোড",
      "hide-footer": ""
    }
  }, [_c("span", [_vm._v(_vm._s(this.modal_text))]), _vm._v(" "), _vm.loading_icon ? _c("span", {
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
  }, [_vm._v("Loading...")])]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/attachment_mechanism.vue?vue&type=template&id=b1dba866&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/attachment_mechanism.vue?vue&type=template&id=b1dba866&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "section-body px-4"
  }, [_c("div", {
    staticStyle: {
      clear: "both",
      height: "20px"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      clear: "both",
      height: "20px"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticStyle: {
      clear: "both",
      height: "20px"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c("div", {
    staticClass: "info-box mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("p", {
    staticClass: "text-justify"
  }, [_vm._v("আবেদনের সাথে প্রয়োজনীয় কাগজপত্র সংযুক্তির ক্ষেত্রে স্ক্যান ফাইলটি অবশ্যই pdf ফরমেটে হতে হবে । অন্য কোন ফরমেটে ফাইলটি আপলোড করা যাবেনা। pdf ফাইল সাইজ অবশ্য সর্বোচ্চ ( পেজের সংখ্যা " + _vm._s(_vm.convert2Bangla(_vm.countMbKb(_vm.config_per_page_amount))) + ") এর মধ্যে হতে হবে এবং অবশ্যই ২৫ mb এর মধ্যে হতে হবে")]), _vm._v(" "), _c("p", {
    staticStyle: {
      display: "none"
    }
  }, [_vm._v("কারিগরি সমস্যার কারণে ডকুমেন্ট ছাড়া আবেদন সাবমিট করতে চাইলে নিম্নোক্ত যেকোনো একটি অপশন নির্বাচন করুন")]), _vm._v(" "), _c("form", {
    attrs: {
      action: ""
    }
  }, [_c("div", {
    staticClass: "pl-3",
    staticStyle: {
      display: "none"
    }
  }, [_c("div", {
    staticClass: "lmt-form-group m-0"
  }, [_c("div", {
    staticClass: "bs_checkbox mb-1"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tmp_submit_papers_3_days,
      expression: "tmp_submit_papers_3_days"
    }],
    attrs: {
      type: "checkbox",
      name: "papers_3_days",
      id: "papers_3_days",
      disabled: _vm.tmp_submit_papers_sunani
    },
    domProps: {
      checked: Array.isArray(_vm.tmp_submit_papers_3_days) ? _vm._i(_vm.tmp_submit_papers_3_days, null) > -1 : _vm.tmp_submit_papers_3_days
    },
    on: {
      change: function change($event) {
        var $$a = _vm.tmp_submit_papers_3_days,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.tmp_submit_papers_3_days = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.tmp_submit_papers_3_days = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.tmp_submit_papers_3_days = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "papers_3_days"
    }
  }, [_vm._v("আমি আবেদন সাবমিট করার ৩ কর্মদিবসের মধ্যে সকল\n                              ডকুমেন্ট (প্রয়োজনীয় কাগজপত্র) এসিল্যান্ড অফিসে এসে জমা দিবো ")])])]), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group m-0"
  }, [_c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tmp_submit_papers_sunani,
      expression: "tmp_submit_papers_sunani"
    }],
    attrs: {
      type: "checkbox",
      name: "papers_sunani_day",
      id: "papers_sunani_day",
      disabled: _vm.tmp_submit_papers_3_days
    },
    domProps: {
      checked: Array.isArray(_vm.tmp_submit_papers_sunani) ? _vm._i(_vm.tmp_submit_papers_sunani, null) > -1 : _vm.tmp_submit_papers_sunani
    },
    on: {
      change: function change($event) {
        var $$a = _vm.tmp_submit_papers_sunani,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.tmp_submit_papers_sunani = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.tmp_submit_papers_sunani = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.tmp_submit_papers_sunani = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "papers_sunani_day"
    }
  }, [_vm._v("আমি শুনানির দিন সকল (প্রয়োজনীয় কাগজপত্র)\n                              জমা দিবো ")])])])])])]), _vm._v(" "), typeof _vm.allCommonDataFirstPage.land_ownership_reference_ids != "undefined" && _vm.allCommonDataFirstPage.land_ownership_reference_ids.includes(2) ? _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("উত্তরাধিকার সনদ সংযুক্তি অনলাইনে করা আছে কি?")]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.warishSonodApi.online_warish_available,
      expression: "warishSonodApi.online_warish_available"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "is_online_warish_available_yes",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.warishSonodApi.online_warish_available, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.warishSonodApi, "online_warish_available", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_online_warish_available_yes"
    }
  }, [_vm._v("হ্যাঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.warishSonodApi.online_warish_available,
      expression: "warishSonodApi.online_warish_available"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "is_online_warish_available_no",
      value: "0"
    },
    domProps: {
      checked: _vm._q(_vm.warishSonodApi.online_warish_available, "0")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.warishSonodApi, "online_warish_available", "0");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_online_warish_available_no"
    }
  }, [_vm._v("না")])]), _vm._v(" "), _vm.warishSonodApi.online_warish_available != "" && _vm.warishSonodApi.online_warish_available == 1 ? _c("div", {
    staticClass: "input-group col-md-4 mt-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.warishSonodApi.online_sonod_no,
      expression: "warishSonodApi.online_sonod_no"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "অনলাইন সনদ নম্বর লিখুন"
    },
    domProps: {
      value: _vm.warishSonodApi.online_sonod_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.warishSonodApi, "online_sonod_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-outline-success btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.verifyWarishSonod
    }
  }, [_vm._v("খুঁজুন")])])]) : _vm._e(), _vm._v(" "), _vm.warishSonodApi.online_sonod_response != "" && _vm.warishSonodApi.online_sonod_link != "" && this.warishSonodApi.online_sonod_verify == true ? _c("h6", {
    staticClass: "text-success mt-1 ml-3"
  }, [_vm._v("Verified")]) : _vm._e(), _vm._v(" "), this.warishSonodApi.online_sonod_verify == false ? _c("h6", {
    staticClass: "text-danger mt-1 ml-3"
  }, [_vm._v(_vm._s(this.warishSonodApi.online_sonod_response))]) : _vm._e()]) : _vm._e(), _vm._v(" "), this.tmp_submit_papers_3_days == false && this.tmp_submit_papers_sunani == false ? _c("div", {
    staticClass: "lmt-table"
  }, [_c("table", {
    staticClass: "table"
  }, [_c("tbody", [_vm._m(2), _vm._v(" "), _vm._l(this.finalDocumentList.dalil, function (dalil, key) {
    return _c("tr", {
      key: "dalil_" + key
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v("৬." + _vm._s(_vm.convert2Bangla(key + 1)))]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [_vm._v("\n                      মূল দলিল এর স্ক্যান কপি (দলিল নম্বর: " + _vm._s(_vm.convert2Bangla(dalil.dolil_no)) + ")\n                  ")]), _vm._v(" "), _c("td", [dalil.is_dolil_found != 1 && dalil.fileObj == "" && dalil.file_path == "" ? _c("div", {
      staticClass: "upload-btn-wrapper"
    }, [_c("button", {
      staticClass: "btn btn-primary additionBtn"
    }, [_vm._v(" + সংযোজন করুন")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.onFileChange(event, dalil, key, "dalil");
        }
      }
    })]) : _vm._e(), _vm._v(" "), (dalil.fileObj != "" || dalil.file_path != "") && dalil.is_dolil_found != 1 ? _c("a", {
      staticClass: "btn btn-sm btn-primary text-white",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: ""
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, dalil);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), (dalil.fileObj != "" || dalil.file_path != "") && dalil.is_dolil_found != 1 ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.fileRemove("dalil", key);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e(), _vm._v(" "), dalil.is_dolil_found == 1 ? _c("p", {
      staticClass: "m-0 ml-2 p-0"
    }, [_c("small", [_c("a", {
      staticClass: "dolil_view",
      attrs: {
        type: "button"
      },
      on: {
        click: function click(event) {
          return _vm.fetchDolilPdf(event, dalil.file_path, dalil.fileMime);
        }
      }
    }, [_vm._v("দলিল\n                                  দেখুন >>")])])]) : _vm._e()])]);
  }), _vm._v(" "), _vm._l(this.finalDocumentList.khatian, function (khatian, key2) {
    return _c("tr", {
      key: "khatian_" + khatian.khatian_no + key2
    }, [_c("td", {
      staticClass: "text-center"
    }, [Object.keys(_vm.finalDocumentList.dalil).length != 0 ? _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.finalDocumentList.dalil.length + 1 + key2)))]) : Object.keys(_vm.finalDocumentList.khatian).length != 0 ? _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.finalDocumentList.khatian.length + key2)))]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [_vm._v("খতিয়ানের স্ক্যান কপি (খতিয়ান নম্বর: " + _vm._s(_vm.convert2Bangla(khatian.khatian_no)) + ")\n                  ")]), _vm._v(" "), _c("td", [khatian.fileObj == "" && khatian.file_path == "" ? _c("div", {
      staticClass: "upload-btn-wrapper"
    }, [_c("button", {
      staticClass: "btn btn-primary additionBtn"
    }, [_vm._v(" + সংযোজন করুন")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.onFileChange(event, khatian, _vm.finalDocumentList.dalil.length + key2, "khotian", key2);
        }
      }
    })]) : _vm._e(), _vm._v(" "), khatian.fileObj != "" || khatian.file_path != "" ? _c("a", {
      staticClass: "btn btn-sm btn-primary text-white",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: "#"
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, khatian);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), khatian.fileObj != "" || khatian.file_path != "" ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.fileRemove("khatian", key2);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e()])]);
  }), _vm._v(" "), _vm._l(this.finalDocumentList.under18_or_probashi_info, function (under18_probashi, key5) {
    return _vm.finalDocumentList.under18_or_probashi_info.length > 0 ? _c("tr", {
      key: "under18_or_probashi_info" + under18_probashi.birth_reg_number + key5
    }, [_c("td", {
      staticClass: "text-center"
    }, [Object.keys(_vm.finalDocumentList.khatian).length != 0 && Object.keys(_vm.finalDocumentList.dalil).length != 0 ? _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.finalDocumentList.khatian.length + _vm.finalDocumentList.dalil.length + 1 + key5)))]) : Object.keys(_vm.finalDocumentList.khatian).length != 0 ? _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.finalDocumentList.khatian.length + 1 + key5)))]) : Object.keys(_vm.finalDocumentList.dalil).length != 0 ? _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.finalDocumentList.dalil.length + 1 + key5)))]) : _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.jomi_johoddi_index + key5 - 1)))])]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [_vm._v("জন্মনিবন্ধনের স্ক্যান কপি (জন্ম-নিবন্ধন নম্বর: " + _vm._s(_vm.convert2Bangla(under18_probashi.birth_reg_number)) + ")\n                  ")]), _vm._v(" "), _c("td", [under18_probashi.fileObj == "" && under18_probashi.file_path == "" ? _c("div", {
      staticClass: "upload-btn-wrapper"
    }, [_c("button", {
      staticClass: "btn btn-primary additionBtn"
    }, [_vm._v(" + সংযোজন করুন")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.onFileChange(event, under18_probashi, _vm.finalDocumentList.khatian.length + key5, "under18_or_probashi_info", key5);
        }
      }
    })]) : _vm._e(), _vm._v(" "), under18_probashi.fileObj != "" || under18_probashi.file_path != "" ? _c("a", {
      staticClass: "btn btn-sm btn-primary text-white",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: "#"
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, under18_probashi);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), under18_probashi.fileObj != "" || under18_probashi.file_path != "" ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.fileRemove("under18_or_probashi_info", key5);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e()])]) : _vm._e();
  }), _vm._v(" "), _vm._l(this.finalDocumentList.ouarish_sonod, function (ouarish_sonod, key6) {
    return _c("tr", {
      key: "ouarish_sonod_" + _vm.jomi_johoddi_index + key6
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v("\n                      ৬." + _vm._s(_vm.convert2Bangla(_vm.jomi_johoddi_index + 1)) + "\n                  ")]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [_vm._v("ওয়ারিশ সনদের স্ক্যান কপি")]), _vm._v(" "), _c("td", [ouarish_sonod.fileObj == "" && ouarish_sonod.file_path == "" ? _c("div", {
      staticClass: "upload-btn-wrapper"
    }, [_c("button", {
      staticClass: "btn btn-primary additionBtn"
    }, [_vm._v(" + সংযোজন করুন")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.onFileChange(event, "ouarish_sonod", _vm.jomi_johoddi_index, "ouarish_sonod");
        }
      }
    })]) : _vm._e(), _vm._v(" "), ouarish_sonod.fileObj != "" || ouarish_sonod.file_path != "" ? _c("a", {
      staticClass: "btn btn-sm btn-primary text-white",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: "#"
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, ouarish_sonod);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), ouarish_sonod.fileObj != "" || ouarish_sonod.file_path != "" ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.fileRemove("ouarish_sonod", key6);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e()])]);
  }), _vm._v(" "), _vm._l(this.finalDocumentList.chowhoddi, function (chowhoddi, key3) {
    return _c("tr", {
      key: "chowhoddi_" + _vm.jomi_johoddi_index + key3
    }, [_c("td", {
      staticClass: "text-center"
    }, [Object.keys(_vm.finalDocumentList.ouarish_sonod).length != 0 ? _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.jomi_johoddi_index + 2)))]) : _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.jomi_johoddi_index + 1)))])]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [_vm._v("জমির চৌহদ্দিসহ হাত নকশা")]), _vm._v(" "), _c("td", [chowhoddi.fileObj == "" && chowhoddi.file_path == "" ? _c("div", {
      staticClass: "upload-btn-wrapper"
    }, [_c("button", {
      staticClass: "btn btn-primary additionBtn"
    }, [_vm._v(" + সংযোজন করুন")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.onFileChange(event, "land_map", _vm.jomi_johoddi_index, "land_map_file");
        }
      }
    })]) : _vm._e(), _vm._v(" "), chowhoddi.fileObj != "" || chowhoddi.file_path != "" ? _c("a", {
      staticClass: "btn btn-sm btn-primary text-white",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: "#"
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, chowhoddi);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), chowhoddi.fileObj != "" || chowhoddi.file_path != "" ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.fileRemove("chowhoddi", key3);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e()])]);
  }), _vm._v(" "), _vm._l(this.finalDocumentList.others, function (other, key4) {
    return _c("tr", {
      key: "others_" + _vm.jomi_johoddi_index + key4 + 1
    }, [_c("td", {
      staticClass: "text-center"
    }, [Object.keys(_vm.finalDocumentList.ouarish_sonod).length != 0 ? _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.jomi_johoddi_index + 3)))]) : _c("span", [_vm._v("৬." + _vm._s(_vm.convert2Bangla(_vm.jomi_johoddi_index + 2)))])]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [_vm._v("অন্যান্য")]), _vm._v(" "), _c("td", [other.fileObj == "" && other.file_path == "" ? _c("div", {
      staticClass: "upload-btn-wrapper"
    }, [_c("button", {
      staticClass: "btn btn-primary additionBtn"
    }, [_vm._v(" + সংযোজন করুন")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.onFileChange(event, "others", _vm.jomi_johoddi_index + 1, "others_doc");
        }
      }
    })]) : _vm._e(), _vm._v(" "), other.fileObj != "" || other.file_path != "" ? _c("a", {
      staticClass: "btn btn-sm btn-primary text-white",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: "#"
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, other);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), other.fileObj != "" || other.file_path != "" ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.fileRemove("others", key4);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e()])]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _c("b-modal", {
    ref: "document-view-modal",
    staticClass: "document-view-modal",
    attrs: {
      id: "document-view-modal",
      size: "lg",
      "hide-footer": "",
      title: ""
    }
  }, [_c("div", {
    staticStyle: {
      padding: "0px",
      height: "580px",
      width: "100%"
    }
  }, [_vm.blobUrl ? _c("iframe", {
    staticStyle: {
      overflow: "auto"
    },
    attrs: {
      src: _vm.documentBlobUrl,
      type: "application/pdf",
      width: "100%",
      height: "100%"
    }
  }) : _vm._e(), _vm._v(" "), _vm.docUrl ? _c("iframe", {
    staticStyle: {
      height: "100%",
      width: "100%"
    },
    attrs: {
      src: _vm.documentUrl,
      gesture: "media",
      allow: "encrypted-media",
      allowfullscreen: "",
      frameborder: "0"
    }
  }) : _vm._e()])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "landinfo-title have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-number"
  }, [_vm._v("৬")]), _vm._v(" "), _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("প্রয়োজনীয় কাগজপত্র সংযুক্তি প্রদান করুন")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0"
  }, [_c("span", {
    staticClass: "text-center form-sec-title font-20 text-danger"
  }, [_vm._v("স্ক্যান কপি সংযুক্তি সম্পর্কিত নির্দেশাবলী")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "text-center",
    attrs: {
      width: "100"
    }
  }, [_vm._v("নং")]), _vm._v(" "), _c("td", [_vm._v("প্রয়োজনীয় কাগজপত্রের নাম\n                      "), _c("span", {
    staticClass: "required"
  }, [_vm._v(" *")]), _vm._v(" "), _c("i", {
    staticClass: "fa fa-info-circle text-info",
    attrs: {
      title: "প্রয়োজনীয় সকল কাগজপত্র সংযুক্ত করতে হবে",
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("td", {
    attrs: {
      width: "240"
    }
  }, [_vm._v("পিডিএফ ফাইল আপলোড")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/document_attachment.vue?vue&type=template&id=67e98332&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/document_attachment.vue?vue&type=template&id=67e98332&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container_disable_box card border-success mt-3 p-1"
  }, [_c("div", {
    staticClass: "card-body p-2"
  }, [_c("div", [_vm._v(_vm._s(_vm.JSONString))]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 border p-4 mt-4"
  }, [_c("h5", {
    staticClass: "text-danger"
  }, [_vm._v("স্ক্যান কপি সংযুক্তি সম্পর্কিত নির্দেশাবলী")]), _vm._v(" "), _c("div", [_c("p", [_vm._v(" আবেদনের সাথে প্রয়োজনীয় কাগজপত্রের সংযুক্তির ক্ষেত্রে স্ক্যান ফাইলটি অবশ্যই pdf ফরমেটে হতে হবে ।\n                    অন্য কোন\n                    ফরমেটে হলে ফাইলটি আপলোড করা\n                    যাবেনা এবং ফাইলটির সাইজ অবশ্যই সর্বোচ্চ (পেজ সংখ্যা *\n                    " + _vm._s(_vm.convert2Bangla(_vm.countMbKb(_vm.config_per_page_amount))) + ") এর\n                    মধ্যে হতে হবে এবং অবশ্যই ২৫ MB এর মধ্যে হতে হবে।")])]), _vm._v(" "), _c("div", {
    staticClass: "pt-3"
  }, [_c("p", {
    staticClass: "font-weight-bold text-danger"
  }, [_vm._v("কারিগরি সমস্যার কারণে ডকুমেন্ট ছাড়া আবেদন সাবমিট করতে চাইলে নিম্নোক্ত\n                    যেকোনো অপশন নির্বাচন করুন ")]), _vm._v(" "), _c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tmp_submit_papers_3_days,
      expression: "tmp_submit_papers_3_days"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "papers_3_days",
      id: "papers_3_days",
      disabled: _vm.tmp_submit_papers_sunani
    },
    domProps: {
      checked: Array.isArray(_vm.tmp_submit_papers_3_days) ? _vm._i(_vm.tmp_submit_papers_3_days, null) > -1 : _vm.tmp_submit_papers_3_days
    },
    on: {
      change: function change($event) {
        var $$a = _vm.tmp_submit_papers_3_days,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.tmp_submit_papers_3_days = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.tmp_submit_papers_3_days = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.tmp_submit_papers_3_days = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "papers_3_days"
    }
  }, [_vm._v("আমি আবেদন সাবমিট করার ৩ কর্মদিবসের মধ্যে সকল\n                        ডকুমেন্ট (প্রয়োজনীয় কাগজপত্র) এসিল্যান্ড অফিসে এসে জমা দিবো ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tmp_submit_papers_sunani,
      expression: "tmp_submit_papers_sunani"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "papers_sunani_day",
      id: "papers_sunani_day",
      disabled: _vm.tmp_submit_papers_3_days
    },
    domProps: {
      checked: Array.isArray(_vm.tmp_submit_papers_sunani) ? _vm._i(_vm.tmp_submit_papers_sunani, null) > -1 : _vm.tmp_submit_papers_sunani
    },
    on: {
      change: function change($event) {
        var $$a = _vm.tmp_submit_papers_sunani,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.tmp_submit_papers_sunani = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.tmp_submit_papers_sunani = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.tmp_submit_papers_sunani = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "papers_sunani_day"
    }
  }, [_vm._v("আমি শুনানির দিন সকল (প্রয়োজনীয় কাগজপত্র)\n                        জমা দিবো ")])])])]), _vm._v(" "), this.tmp_submit_papers_3_days == false && this.tmp_submit_papers_sunani == false ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped fixed mt-4 sm-screen-md-tbl"
  }, [_c("tbody", [_vm._m(0), _vm._v(" "), _vm._l(this.finalDocumentList.dalil, function (dalil, key) {
    return _c("tr", {
      key: "dalil_" + key
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v("\n                        ৬." + _vm._s(_vm.convert2Bangla(key + 1)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("মূল দলিল এর স্ক্যান কপি (দলিল নম্বর: " + _vm._s(_vm.convert2Bangla(dalil.dolil_no)) + ")")]), _vm._v(" "), _c("td", [dalil.is_dolil_found != 1 && dalil.base64TempData == "" ? _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.getBase64(event, dalil, key, "dalil");
        }
      }
    }) : _vm._e(), _vm._v(" "), dalil.base64TempData != "" && dalil.is_dolil_found != 1 ? _c("a", {
      staticClass: "btn btn-sm btn-primary",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: _vm.displayFileArray[key]
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, dalil.base64TempData, dalil.fileMime);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "output_pdf_page_count" + Number(key)
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "page_count_ready" + Number(key),
        value: "process_reject"
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "base64Data" + Number(key)
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        value: "complete",
        id: "base64_ready" + Number(key)
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        color: "red"
      },
      attrs: {
        id: "error_message_file_up" + Number(key)
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "file_upload_need_help" + Number(key)
      }
    }, [_c("span", {
      staticClass: "btn",
      on: {
        click: function click($event) {
          return _vm.showHelpModal();
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-lg fa-question-circle"
    })])]), _vm._v(" "), dalil.base64TempData != "" && dalil.is_dolil_found != 1 ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.fileRemove("dalil", key, key);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e(), _vm._v(" "), _c("span", {
      attrs: {
        id: "success_message_file_up" + Number(key)
      }
    }), _vm._v(" "), dalil.is_dolil_found == 1 ? _c("p", {
      staticClass: "m-0 ml-2 p-0"
    }, [_c("small", [_c("a", {
      staticClass: "dolil_view",
      attrs: {
        type: "button"
      },
      on: {
        click: function click(event) {
          return _vm.fetchDolilPdf(event, dalil.file_path, dalil.fileMime);
        }
      }
    }, [_vm._v("দলিল\n                                    দেখুন >>")])])]) : _vm._e(), _vm._v(" "), _vm.pdf_loading ? _c("span", [_vm._v("Loading...")]) : _vm._e()])]);
  }), _vm._v(" "), _vm._l(this.finalDocumentList.khatian, function (khatian, key2) {
    return _c("tr", {
      key: "khatian_" + khatian.khatian_no + key2
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v("\n                        ৬." + _vm._s(_vm.convert2Bangla(_vm.finalDocumentList.dalil.length + 1 + key2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("খতিয়ানের স্ক্যান কপি (খতিয়ান নম্বর: " + _vm._s(_vm.convert2Bangla(khatian.khatian_no)) + ")\n                    ")]), _vm._v(" "), _c("td", [khatian.base64TempData == "" ? _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.getBase64(event, khatian, _vm.finalDocumentList.dalil.length + key2, "khotian", key2);
        }
      }
    }) : _vm._e(), _vm._v(" "), khatian.base64TempData != "" ? _c("a", {
      staticClass: "btn btn-sm btn-primary",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: _vm.displayFileArray[_vm.dalil_list.length + key2]
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, khatian.base64TempData, khatian.fileMime);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "output_pdf_page_count" + Number(_vm.finalDocumentList.dalil.length + key2)
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "page_count_ready" + Number(_vm.finalDocumentList.dalil.length + key2),
        value: "process_reject"
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "base64Data" + Number(_vm.finalDocumentList.dalil.length + key2)
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        value: "complete",
        id: "base64_ready" + Number(_vm.finalDocumentList.dalil.length + key2)
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        color: "red"
      },
      attrs: {
        id: "error_message_file_up" + Number(_vm.finalDocumentList.dalil.length + key2)
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "file_upload_need_help" + Number(_vm.finalDocumentList.dalil.length + key2)
      }
    }, [_c("span", {
      staticClass: "btn",
      on: {
        click: function click($event) {
          return _vm.showHelpModal();
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-lg fa-question-circle"
    })])]), _vm._v(" "), khatian.base64TempData != "" ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          _vm.fileRemove("khatian", key2, Number(_vm.finalDocumentList.dalil.length + key2));
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e(), _vm._v(" "), _c("span", {
      attrs: {
        id: "success_message_file_up" + Number(_vm.finalDocumentList.dalil.length + key2)
      }
    })])]);
  }), _vm._v(" "), _vm._l(this.finalDocumentList.chowhoddi, function (chowhoddi, key3) {
    return _c("tr", {
      key: "chowhoddi_" + _vm.jomi_johoddi_index + key3
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v("\n                        ৬." + _vm._s(_vm.convert2Bangla(_vm.jomi_johoddi_index + 1)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("জমির চৌহদ্দিসহ কলমি নকশা")]), _vm._v(" "), _c("td", [chowhoddi.base64TempData == "" ? _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.getBase64(event, "land_map", _vm.jomi_johoddi_index, "land_map_file");
        }
      }
    }) : _vm._e(), _vm._v(" "), chowhoddi.base64TempData != "" ? _c("a", {
      staticClass: "btn btn-sm btn-primary",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: _vm.displayFileArray[_vm.jomi_johoddi_index]
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, chowhoddi.base64TempData, chowhoddi.fileMime);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "output_pdf_page_count" + Number(_vm.jomi_johoddi_index)
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "page_count_ready" + Number(_vm.jomi_johoddi_index),
        value: "process_reject"
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "base64Data" + Number(_vm.jomi_johoddi_index)
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        value: "complete",
        id: "base64_ready" + Number(_vm.jomi_johoddi_index)
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        color: "red"
      },
      attrs: {
        id: "error_message_file_up" + Number(_vm.jomi_johoddi_index)
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "file_upload_need_help" + Number(_vm.jomi_johoddi_index)
      }
    }, [_c("span", {
      staticClass: "btn",
      on: {
        click: function click($event) {
          return _vm.showHelpModal();
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-lg fa-question-circle"
    })])]), _vm._v(" "), chowhoddi.base64TempData != "" ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          _vm.fileRemove("chowhoddi", key3, Number(_vm.jomi_johoddi_index));
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e(), _vm._v(" "), _c("span", {
      attrs: {
        id: "success_message_file_up" + Number(_vm.jomi_johoddi_index)
      }
    })])]);
  }), _vm._v(" "), _vm._l(this.finalDocumentList.others, function (other, key4) {
    return _c("tr", {
      key: "others_" + _vm.jomi_johoddi_index + key4 + 1
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v("\n                        ৬." + _vm._s(_vm.convert2Bangla(_vm.jomi_johoddi_index + 2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("অন্যান্য")]), _vm._v(" "), _c("td", [other.base64TempData == "" ? _c("input", {
      attrs: {
        type: "file",
        accept: "application/pdf"
      },
      on: {
        change: function change(event) {
          return _vm.getBase64(event, "others", _vm.jomi_johoddi_index + 1, "others_doc");
        }
      }
    }) : _vm._e(), _vm._v(" "), other.base64TempData != "" ? _c("a", {
      staticClass: "btn btn-sm btn-primary",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        href: _vm.displayFileArray[_vm.jomi_johoddi_index + 1]
      },
      on: {
        click: function click(event) {
          return _vm.displayFile(event, other.base64TempData, other.fileMime);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e(), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "output_pdf_page_count" + Number(_vm.jomi_johoddi_index + 1)
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "page_count_ready" + Number(_vm.jomi_johoddi_index + 1),
        value: "process_reject"
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        id: "base64Data" + Number(_vm.jomi_johoddi_index + 1)
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "hidden",
        value: "complete",
        id: "base64_ready" + Number(_vm.jomi_johoddi_index + 1)
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        color: "red"
      },
      attrs: {
        id: "error_message_file_up" + Number(_vm.jomi_johoddi_index + 1)
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "file_upload_need_help" + Number(_vm.jomi_johoddi_index + 1)
      }
    }, [_c("span", {
      staticClass: "btn",
      on: {
        click: function click($event) {
          return _vm.showHelpModal();
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-lg fa-question-circle"
    })])]), _vm._v(" "), other.base64TempData != "" ? _c("button", {
      staticClass: "btn btn-sm btn-danger",
      staticStyle: {
        "margin-left": "15px"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          _vm.fileRemove("others", key4, Number(_vm.jomi_johoddi_index + 1));
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e(), _vm._v(" "), _c("span", {
      attrs: {
        id: "success_message_file_up" + Number(_vm.jomi_johoddi_index + 1)
      }
    })])]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticStyle: {
      clear: "both",
      height: "10px"
    }
  }), _vm._v(" "), _c("div", {
    staticStyle: {
      clear: "both",
      color: "red",
      "font-size": "11px"
    }
  }, [_vm._v("দ্রষ্টব্য:")]), _vm._v(" "), _c("div", {
    staticStyle: {
      clear: "both",
      color: "red",
      "font-size": "11px"
    }
  }, [_vm._v("আবেদনে প্রদত্ত উপরোক্ত ন্যূনতম সংযুক্তি ছাড়াও\n                ভবিষ্যতে জমি বা মালিকানার ধরন অনুযায়ী অন্যান্য সংশ্লিষ্ট প্রামাণিক দলিল / ডকুমেন্ট আপনাকে ভূমি\n                অফিসে প্রদান করতে হতে পারে।\n            ")])]) : _vm._e()]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("b-modal", {
    ref: "my-modal",
    attrs: {
      size: "lg",
      "hide-footer": "",
      title: "Help Manual"
    }
  }, [_vm._v("\n            আবেদনের সাথে প্রয়োজনীয় কাগজপত্রের সংযুক্তির ক্ষেত্রে স্ক্যান ফাইলটি অবশ্যই pdf ফরমেটে হতে হবে । অন্য কোন\n            ফরমেটে হলে ফাইলটি আপলোড করা যাবেনা এবং ফাইলটির সাইজ অবশ্যই সর্বোচ্চ (পেজ সংখ্যা *\n            " + _vm._s(_vm.countMbKb(_vm.config_per_page_amount)) + " ) এর মধ্যে হতে\n            হবে ।\n            "), _c("div", {
    staticClass: "help_modal_message",
    staticStyle: {
      color: "red"
    }
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal",
    attrs: {
      id: "modal-agreement-file-view",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered document-view-modal",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    },
    on: {
      click: _vm.closeModal
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body",
    staticStyle: {
      padding: "0px",
      height: "580px"
    }
  }, [_vm.blobUrl ? _c("iframe", {
    staticStyle: {
      overflow: "auto"
    },
    attrs: {
      src: _vm.documentBlobUrl,
      type: "application/pdf",
      width: "100%",
      height: "100%"
    }
  }) : _vm._e(), _vm._v(" "), _vm.docUrl ? _c("iframe", {
    staticStyle: {
      height: "100%",
      width: "100%"
    },
    attrs: {
      src: _vm.documentUrl,
      gesture: "media",
      allow: "encrypted-media",
      allowfullscreen: "",
      frameborder: "0"
    }
  }) : _vm._e()])])])]), _vm._v(" "), _c("b-modal", {
    ref: "document-view-modal",
    staticClass: "document-view-modal",
    attrs: {
      id: "document-view-modal",
      size: "lg",
      "hide-footer": "",
      title: ""
    }
  }, [_c("div", {
    staticStyle: {
      padding: "0px",
      height: "580px",
      width: "100%"
    }
  }, [_vm.blobUrl ? _c("iframe", {
    staticStyle: {
      overflow: "auto"
    },
    attrs: {
      src: _vm.documentBlobUrl,
      type: "application/pdf",
      width: "100%",
      height: "100%"
    }
  }) : _vm._e(), _vm._v(" "), _vm.docUrl ? _c("iframe", {
    staticStyle: {
      height: "100%",
      width: "100%"
    },
    attrs: {
      src: _vm.documentUrl,
      gesture: "media",
      allow: "encrypted-media",
      allowfullscreen: "",
      frameborder: "0"
    }
  }) : _vm._e()])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "modal",
    attrs: {
      id: "help_modal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.hideHelpModal();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _vm._m(3)])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "header-unbold text-center"
  }, [_c("th", {
    staticClass: "font-weight-bold",
    attrs: {
      width: "10%"
    }
  }, [_vm._v("নং")]), _vm._v(" "), _c("th", {
    staticClass: "text-left font-weight-bold",
    attrs: {
      width: "50%"
    }
  }, [_vm._v("প্রয়োজনীয় কাগজপত্রের নাম\n                        "), _c("span", {
    staticClass: "required"
  }, [_vm._v(" *")]), _vm._v(" "), _c("i", {
    staticClass: "fa fa-info-circle text-info",
    attrs: {
      title: "প্রয়োজনীয় সকল কাগজপত্র সংযুক্ত করতে হবে",
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("th", {
    staticClass: "text-left font-weight-bold",
    attrs: {
      width: "40%"
    }
  }, [_vm._v("PDF ফাইল আপলোড")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "footer_top_bg pt-20"
  }, [_c("img", {
    staticClass: "img-responsive",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      src: "images/footer_top_bg.png",
      alt: ""
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "help_modal",
      role: "dialog"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c("h4", {
    staticClass: "modal-title"
  }, [_vm._v("Modal Header")])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("p", [_vm._v("Some text in the modal.")])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      type: "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "row"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/information_preview.vue?vue&type=template&id=45f10756&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/information_preview.vue?vue&type=template&id=45f10756&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container_disable_box card border-success mt-3 p-2"
  }, [_c("h5", {
    staticClass: "card-title mt-3",
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("জমির মালিকানা সূত্র ")]), _vm._v(" "), _c("span", [_vm._v(" জমির মালিকানা সূত্র : " + _vm._s(_vm.finalOwnerShipText))]), _vm._v(" "), _c("h5", {
    staticClass: "card-title mt-3",
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v(" আবেদনকারীর তথ্য (" + _vm._s(_vm.allCommonDataFirstPage.citizenData.owner_type == 1 ? "গ্রহীতা" : "প্রতিনিধি") + ")")]), _vm._v(" "), _vm._l(_vm.representative_info, function (data, key) {
    return _c("div", {
      key: key + ".",
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-6 text-left"
    }, [_c("p", {
      staticClass: "input_bangla"
    }, [_c("strong", [_vm._v("নাম :")]), _vm._v("              " + _vm._s(data.nid_name))]), _vm._v(" "), _c("p", {
      staticClass: "input_bangla"
    }, [_c("strong", [_vm._v("জাতীয় পরিচয়পত্র নম্বর :")]), _vm._v(" " + _vm._s(data.nid))]), _vm._v(" "), _c("p", {
      staticClass: "col-md-12 input_bangla"
    }, [_c("strong", [_vm._v("ঠিকানা :")]), _vm._v(" " + _vm._s(data.nid_address))])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-6 text-left"
    }, [_c("p", {
      staticClass: "input_bangla"
    }, [_c("strong", [_vm._v("মোবাইল  :")]), _vm._v(" " + _vm._s(data.mobile))]), _vm._v(" "), _c("p", [_c("strong", {
      staticClass: "input_bangla"
    }, [_vm._v("ইমেইল :")]), _vm._v(" " + _vm._s(data.email))])])]);
  }), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_vm._m(0), _vm._v(" "), _c("tr", [_c("td", [_vm.question.for_person_or_institute == 1 ? _c("p", [_vm._v("ব্যক্তি মালিকানাধীন জমির জন্য আবেদন")]) : _vm._e(), _vm._v(" "), _vm.question.for_person_or_institute == 2 ? _c("p", [_vm._v("প্রাতিষ্ঠানিক মালিকানাধীন জমির জন্য আবেদন")]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\r\n                  হ্যাঁ\r\n              ")])]), _vm._v(" "), _vm.question.for_person_or_institute == 1 ? _c("tr", [_c("td", [_vm.question.for_person_or_institute == 1 ? _c("p", [_vm._v("সকল গ্রহীতার জাতীয় পরিচয়পত্র আছে কিনা?")]) : _vm._e()]), _vm._v(" "), _c("td", [_vm.question.for_person_or_institute == 1 && _vm.question.check_nid_exist == 1 ? _c("p", {
    staticClass: "text-center"
  }, [_vm._v("হ্যাঁ")]) : _vm._e(), _vm._v(" "), _vm.question.for_person_or_institute == 1 && _vm.question.check_nid_exist == 2 ? _c("p", {
    staticClass: "text-center"
  }, [_vm._v("না")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.question.check_nid_exist == 1 ? _c("tr", [_c("td", [_vm.allCommonDataFirstPage.citizenData.owner_type == 1 ? _c("p", [_vm._v("গ্রহীতা")]) : _vm._e(), _vm._v(" "), _vm.allCommonDataFirstPage.citizenData.owner_type == 2 ? _c("p", [_vm._v("প্রতিনিধি")]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.allCommonDataFirstPage.citizenData.owner_type == 1 || _vm.allCommonDataFirstPage.citizenData.owner_type == 2 ? _c("p", [_vm._v("হ্যাঁ")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.question.for_person_or_institute == 2 ? _c("tr", [_c("td", [_vm.allCommonDataFirstPage.citizenData.institute_owner_type == 12 ? _c("p", [_vm._v("RJSC নিবন্ধিত প্রতিষ্ঠান")]) : _vm._e(), _vm._v(" "), _vm.allCommonDataFirstPage.citizenData.institute_owner_type == 13 ? _c("p", [_vm._v("সরকারি অফিস বা সংস্থা")]) : _vm._e(), _vm._v(" "), _vm.allCommonDataFirstPage.citizenData.institute_owner_type == 14 ? _c("p", [_vm._v("অন্যান্য প্রতিষ্ঠান বা সংস্থা")]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  })]) : _vm._e(), _vm._v(" "), _vm.allCommonDataFirstPage.citizenData.institute_owner_type == 12 && _vm.question.is_company_transfard == true ? _c("tr", [_c("td", [_vm.allCommonDataFirstPage.citizenData.institute_owner_type == 12 && _vm.question.is_company_transfard == true ? _c("p", [_vm._v("এক কোম্পানি থেকে অন্য কোম্পানিতে হস্তান্তর কিনা")]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.allCommonDataFirstPage.citizenData.institute_owner_type == 12 && _vm.question.is_company_transfard == true ? _c("p", [_vm._v("হ্যাঁ")]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), _c("h5", {
    staticClass: "card-title mt-3",
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("আবেদন সংক্রান্ত ঘোষণা ")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("৪.১ সর্বশেষ রেকর্ড অথবা নামজারি হতে জমির মালিকানার ধারাবাহিকতা আছে কিনা ?")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.question.is_record_flow == 1 ? _c("p", [_vm._v("হ্যাঁ")]) : _c("p", [_vm._v("না")])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("৪.২ আবেদনকারীর দলিলমূলে মালিকানা দাবী ও হিস্যা সঠিক আছে কি না ?")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.question.is_ownership_check == 1 ? _c("p", [_vm._v("হ্যাঁ")]) : _c("p", [_vm._v("না")])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("৪.৩ আবেদিত জমি দখলে আছে কি না ?")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.question.land_grabbing_check == 1 ? _c("p", [_vm._v("হ্যাঁ")]) : _c("p", [_vm._v("না")]), _vm._v(" "), _vm.question.land_not_grabbing_reason != "" ? _c("p", [_vm._v("(" + _vm._s(_vm.question.land_not_grabbing_reason) + ")")]) : _vm._e()])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("৪.৪ আংশিক খাস/ আংশিক অর্পিত/ আংশিক অধিগ্রহণকৃত আছে কি না?")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.question.check_acquisition == 1 ? _c("p", [_vm._v("হ্যাঁ")]) : _c("p", [_vm._v("না")]), _vm._v(" "), _vm.question.check_acquisition_reason != "" ? _c("p", [_vm._v(_vm._s(_vm.question.check_acquisition_reason))]) : _vm._e()])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\r\n          ৪.৫ আবেদিত জমিতে কোন দেওয়ানী মামলা আছে কি না ?\r\n        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.question.check_civil_case == 1 ? _c("p", [_vm._v("হ্যাঁ")]) : _c("p", [_vm._v("না")]), _vm._v(" "), _vm.question.civil_case_info != "" ? _c("p", [_vm._v("(" + _vm._s(_vm.question.civil_case_info) + ")")]) : _vm._e()])]), _vm._v(" "), _vm.question.check_civil_case == 1 ? _c("tr", [_c("td", [_vm._v("\r\n               হস্তান্তরে নিষেধাজ্ঞা আছে কিনা ?\r\n        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.question.check_civil_case == 1 && _vm.question.is_civil_case_prohibited == 1 ? _c("p", [_vm._v("হ্যাঁ")]) : _c("p", [_vm._v("না")])])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", [_vm._v("৪.৬ জমিতে সরকারি স্বার্থ আছে কি না ? ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.question.check_gov_interests == 1 ? _c("p", [_vm._v("হ্যাঁ")]) : _c("p", [_vm._v("না")]), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason1 == true ? _c("span", [_vm._v("খাস,")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason2 == true ? _c("span", [_vm._v("অর্পিত,")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason3 == true ? _c("span", [_vm._v("পরিত্যক্ত,")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason4 == true ? _c("span", [_vm._v("ওয়াকফ,")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason5 == true ? _c("span", [_vm._v("বিনিময়,")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason6 == true ? _c("span", [_vm._v("দেবত্তর,")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason7 == true ? _c("span", [_vm._v("অধিগ্রহণকৃত,")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason8 == true ? _c("span", [_vm._v("খাসমহাল,")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason9 == true ? _c("span", [_vm._v("কোর্ট অফ ওয়ার্ডস,")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason10 == true ? _c("span", [_vm._v("সরকারি সংস্থা")]) : _vm._e(), _vm._v(" "), _vm.question.govt_interested_reason.gov_interests_reason11 == true ? _c("span", [_vm._v("অন্যান্য")]) : _vm._e()])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("৪.৭ সর্বশেষ অর্থ বছরের ভূমি উন্নয়ন কর পরিশোধ করা আছে কি না? ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.question.last_tax_given == 1 ? _c("p", [_vm._v("হ্যাঁ")]) : _c("p", [_vm._v("না")])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("৪.৮ আবেদনে তফসিলভুক্ত জমির সর্বশেষ জরিপের তথ্য ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\r\n            " + _vm._s(_vm.KhationTypeList) + "\r\n        ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("৪.৯ আবেদনে বর্ণিত তফসিল ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.question.declared_tofsil == 1 ? _c("p", [_vm._v("হ্যাঁ")]) : _c("p", [_vm._v("না")])])])])]), _vm._v(" "), _c("h5", {
    staticClass: "card-title mt-3",
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v(" মৌজা তথ্য")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("p", {
    staticClass: "input_bangla"
  }, [_c("strong", [_vm._v("বিভাগ : ")]), _vm._v(" " + _vm._s(_vm.allCommonDataFirstPage.areaInfo.division_text))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("p", {
    staticClass: "input_bangla"
  }, [_c("strong", [_vm._v("জেলা : ")]), _vm._v(" " + _vm._s(_vm.allCommonDataFirstPage.areaInfo.district_text))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("p", {
    staticClass: "input_bangla"
  }, [_c("strong", [_vm._v("উপজেলা : ")]), _vm._v(" " + _vm._s(_vm.allCommonDataFirstPage.areaInfo.upazila_text))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("p", {
    staticClass: "input_bangla"
  }, [_c("strong", [_vm._v("মৌজা :  ")]), _vm._v(" " + _vm._s(_vm.allCommonDataFirstPage.areaInfo.mouja_text))])])]), _vm._v(" "), _c("label", {
    staticStyle: {
      "font-size": "15px",
      "font-weight": "500",
      "margin-top": "10px"
    }
  }, [_vm._v("আবেদিত জমি "), _c("b", {
    staticStyle: {
      background: "yellow"
    }
  }, [_vm._v(_vm._s(_vm.$store.state.checkDataCroySutro.firstStepData.mouja_text))]), _vm._v(" মৌজার অন্তর্ভুক্ত")]), _vm._v(" "), _c("h5", {
    staticClass: "card-title mt-3",
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("আবেদিত জমির তথ্য")]), _vm._v(" "), _vm._l(_vm.land_information, function (data, key) {
    return _c("div", {
      key: key,
      staticStyle: {
        width: "100%",
        border: "1px solid #e3e3e3",
        "margin-top": "15px",
        padding: "5px"
      }
    }, [_vm._l(data.main_data, function (childData, childKey) {
      return _c("div", {
        key: childKey,
        staticClass: "row no-gutters",
        staticStyle: {
          "margin-bottom": "10px"
        }
      }, [_c("div", {
        staticClass: "col-md-2"
      }, [childData.if_dag == 1 && childData.if_main != 0 ? _c("div", {
        staticClass: "card bg-light"
      }, [childData.land_record_type_id == 2 ? _c("div", {
        staticClass: "card-header",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("\r\n                  রেকর্ডীয় খতিয়ান নং\r\n                ")]) : _vm._e(), _vm._v(" "), childData.land_record_type_id == 6 ? _c("div", {
        staticClass: "card-header",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("\r\n                  নামজারি খতিয়ান নং\r\n                ")]) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "card-body input_bangla",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("\r\n                  " + _vm._s(childData.khatian_no) + "\r\n                ")])]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "col-md-2"
      }, [childData.if_dag == 1 ? _c("div", {
        staticClass: "card bg-light"
      }, [_c("div", {
        staticClass: "card-header",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("দাগ নং")]), _vm._v(" "), _c("div", {
        staticClass: "card-body input_bangla",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("\r\n                  " + _vm._s(childData.dag_no) + "\r\n                ")])]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "col-md-4"
      }, [childData.if_dag == 1 ? _c("div", {
        staticClass: "card bg-light"
      }, [_c("div", {
        staticClass: "card-header",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("জমির পরিমাণ")]), _vm._v(" "), _c("div", {
        staticClass: "card-body input_bangla",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("\r\n                    " + _vm._s(_vm.get_land_calculation(1, data.total_land_khotian)) + "\r\n                ")])]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "col-md-2"
      }, [_c("div", {
        staticClass: "card bg-light"
      }, [_c("div", {
        staticClass: "card-header",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("দলিল/মামলা নং")]), _vm._v(" "), _c("div", {
        staticClass: "card-body input_bangla",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("\r\n                  " + _vm._s(childData.dalil_no) + "\r\n                ")])])]), _vm._v(" "), _c("div", {
        staticClass: "col-md-2"
      }, [_c("div", {
        staticClass: "card bg-light"
      }, [_c("div", {
        staticClass: "card-header",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("দলিল/মামলা তারিখ")]), _vm._v(" "), _c("div", {
        staticClass: "card-body input_bangla",
        staticStyle: {
          padding: "0px !important",
          "text-align": "center"
        }
      }, [_vm._v("\r\n                  " + _vm._s(_vm.customDateFormat(childData.dalil_date)) + "\r\n                ")])])]), _vm._v(" "), _c("div", {
        staticClass: "col-md-12"
      }, [_c("div", {
        staticClass: "card bg-light col-md-6 pull-right"
      }, [_c("div", {
        staticClass: "card-body",
        staticStyle: {
          padding: "0px !important"
        }
      }, [_vm._v("\r\n                  সাব রেজিস্টার অফিসের নাম : " + _vm._s(childData.sub_register_office_name_text) + "\r\n                ")])])])]);
    }), _vm._v(" "), _c("div", {
      staticClass: "card bg-light",
      staticStyle: {
        "margin-top": "25px"
      }
    }, [_c("div", {
      staticClass: "card-body input_bangla",
      staticStyle: {
        padding: "0px !important",
        "background-color": "rgb(198 204 204)",
        "font-weight": "bold"
      }
    }, [_vm._v("\r\n          খতিয়ানে আবেদনকৃত মোট জমির পরিমাণ (একর) : " + _vm._s(_vm.get_land_calculation(1, data.total_land_khotian)) + "\r\n        ")])])], 2);
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._v("\r\n       \r\n    ")]), _vm._v(" "), _c("h5", {
    staticClass: "card-title mt-3",
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("বাদী/গ্রহীতার তথ্য")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_vm._m(2), _vm._v(" "), _vm._l(_vm.applicant_citizen, function (data, key) {
    return _c("tbody", {
      key: key
    }, _vm._l(data, function (childData, childKey) {
      return _c("tr", {
        key: childKey
      }, [_c("td", {
        staticClass: "input_bangla text-center",
        staticStyle: {
          width: "5%"
        }
      }, [_vm._v(_vm._s(childKey + 1))]), _vm._v(" "), _c("td", {
        staticStyle: {
          width: "25%"
        }
      }, [_vm._v(_vm._s(childData.company_name) + _vm._s(childData.nid_name))]), _vm._v(" "), _c("td", {
        staticClass: "input_bangla",
        staticStyle: {
          width: "20%"
        }
      }, [_vm._v(_vm._s(childData.mobile))]), _vm._v(" "), _c("td", {
        staticStyle: {
          width: "30%"
        }
      }, [_vm._v(_vm._s(childData.address) + _vm._s(childData.nid_address))])]);
    }), 0);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._v("\r\n       \r\n    ")]), _vm._v(" "), _c("h5", {
    staticClass: "card-title",
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v(" দাতার তথ্য")]), _vm._v(" "), _vm._l(_vm.Khatians, function (master_items, index_master) {
    return _c("div", {
      key: index_master + "-"
    }, [_c("div", {
      staticClass: "card-body p-2"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12"
    }, [_c("div", {
      staticClass: "d-flex"
    }, [_c("h5", {
      staticClass: "card-title"
    }, [_vm._v("খতিয়ান নম্বর : " + _vm._s(_vm.convert2Bangla(master_items.main.khatian_no)))]), _vm._v(" "), _c("small", {
      staticClass: "mt-1"
    }, [_vm._v("( অত্র খতিয়ানের জমির পরিমাণ\r\n                " + _vm._s(_vm.convert2Bangla(_vm.get_land_calculation(1, master_items.main.total_land_khotian))) + " অংশ\r\n                হস্তান্তর হয়েছে ) "), master_items.main.remaining_amount > 0 ? _c("i", {
      staticStyle: {
        color: "darkred"
      }
    }, [_vm._v(" -- ( অত্র খতিয়ানের\r\n                  জমির পরিমাণ\r\n                  " + _vm._s(_vm.convert2Bangla(_vm.get_land_calculation(1, master_items.main.remaining_amount))) + " অংশ\r\n                  বাকি আছে )")]) : _vm._e()])])]), _vm._v(" "), _c("div", {
      staticClass: "col-12"
    }, [master_items.main.information.length > 0 ? _c("table", {
      staticClass: "table table-bordered table-responsive table-striped"
    }, [_vm._m(3, true), _vm._v(" "), _vm._l(master_items.main.information, function (child_items, index_child) {
      return _c("tr", {
        key: index_child
      }, [_c("td", [_c("p", [_vm._v("নাম : " + _vm._s(child_items.owner_name))]), _vm._v(" "), child_items.warish_name != "" ? _c("p", [_vm._v("ওয়ারিশের নাম : " + _vm._s(child_items.warish_name))]) : _vm._e(), _vm._v(" "), child_items.warish_relationship != "" ? _c("p", [_vm._v("নিবন্ধিত দাতার সঙ্গে ওয়ারিশের সম্পর্ক\r\n                    : " + _vm._s(child_items.warish_relationship))]) : _vm._e(), _vm._v(" "), child_items.holding_no != "" ? _c("p", [_vm._v("হোল্ডিং নং :\r\n                    " + _vm._s(_vm.convert2Bangla(child_items.holding_no)))]) : _vm._e()]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(child_items.holding_address) + ", "), child_items.upazila_name != "" ? _c("span", [_vm._v(_vm._s(child_items.upazila_name) + ",")]) : _vm._e(), _vm._v(" "), child_items.district_name != "" ? _c("span", [_vm._v(_vm._s(child_items.district_name))]) : _vm._e()]), _vm._v(" "), child_items.mobile != "" ? _c("span", {
        staticClass: "input_bangla_normal"
      }, [_c("br"), _vm._v("মোবাইল: " + _vm._s(_vm.convert2Bangla(child_items.mobile)))]) : _vm._e(), _vm._v(" "), child_items.owner_dob != "" ? _c("span", {
        staticClass: "input_bangla_normal"
      }, [_c("br"), _vm._v("জন্মতারিখ: " + _vm._s(_vm.convert2Bangla(child_items.owner_dob)))]) : _vm._e(), _vm._v(" "), child_items.owner_nid != "" ? _c("span", {
        staticClass: "input_bangla_normal"
      }, [_c("br"), _vm._v("জাতীয় পরিচয় পত্রের নম্বর: " + _vm._s(_vm.convert2Bangla(child_items.owner_nid)))]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.convert2Bangla(child_items.land_amount_txt)))])]);
    })], 2) : _vm._e()])])])]);
  })], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v(" প্রশ্ন")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v(" আবেদনকারীর দেওয়া তথ্য  ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("প্রশ্ন")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("আবেদনকারীর দেওয়া তথ্য")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      width: "5%"
    }
  }, [_vm._v("ক্রমিক")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "25%"
    }
  }, [_vm._v("নাম")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "15%"
    }
  }, [_vm._v("মোবাইল")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "30%"
    }
  }, [_vm._v("ঠিকানা")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticStyle: {
      width: "30%"
    }
  }, [_vm._v("নাম ও হোল্ডিং নং")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("ঠিকানা")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "14%"
    }
  }, [_vm._v("জমির পরিমাণ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.inputSpacing[data-v-543ca582] {\r\n    margin-bottom: 10px;\n}\n.tableStyle[data-v-543ca582] {\r\n    margin-top: 10px;\n}\nselect option[data-v-543ca582]::-moz-placeholder {\r\n    font-size: 13px !important;\n}\nselect[data-v-543ca582], select option[data-v-543ca582]::placeholder {\r\n    font-size: 13px !important;\n}\np[data-v-543ca582] {\r\n    /*font-size: 13px !important;*/\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Kalpurush !important;\n}\n.input_bangla_normal[data-v-543ca582] {\r\n    font-family: Kalpurush !important;\n}\n.section-body[data-v-543ca582]{\r\n    padding-left: 1.5rem !important;\r\n    padding-right: 1.5rem !important;\n}\r\n/* == Responsive mobile device == */\n@media screen and (min-device-width: 320px) and (max-device-width: 640px) {\n.section-body[data-v-543ca582]{\r\n        padding-left: 10px !important;\r\n        padding-right: 10px !important;\n}\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.collapsed > .when-opened[data-v-625e7d3a],\n:not(.collapsed) > .when-closed[data-v-625e7d3a] {\n    display: none;\n    /*transition-timing-function: ease;*/\n    /*transition-duration: 3s;*/\n    transition: .35s ease-in-out;\n}\n. modal-header[data-v-625e7d3a] {\n    background: rgb(34 141 59) !important;\n}\n.section-footer[data-v-625e7d3a]{\n    padding: 1rem 3rem;\n}\n/* == Responsive mobile device == */\n@media screen and (min-device-width: 320px) and (max-device-width: 640px) {\n.section-footer[data-v-625e7d3a]{\n        padding: 16px 10px;\n}\n.section-footer .btn[data-v-625e7d3a]{\n        font-size: 12px !important;\n}\n}\n\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n/*@import '/css/font-awesome.min.css';*/\n/*@import '/css/custom_style.css';*/\n/*@import '/css/firstpage.css';*/\n\n/*p {*/\n/*    font-size: 15px;*/\n/*    margin-bottom: 5px;*/\n/*}*/\n\n/*tr {*/\n/*    font-size: 13px;*/\n/*}*/\n.dolil_view[data-v-b1dba866] {\n    color: blue;\n    pointer: cursor;\n}\n.dolil_view[data-v-b1dba866]:hover {\n    text-decoration: underline;\n}\n.document-view-modal[data-v-b1dba866] {\n    width: 1200px !important;\n    height: 80%;\n}\n@media (min-width: 992px) {\n.document-view-modal[data-v-b1dba866], .modal-xl[data-v-b1dba866] {\n        max-width: 1200px !important;\n}\n}\n.upload-btn-wrapper[data-v-b1dba866] {\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n}\n.upload-btn-wrapper input[type=file][data-v-b1dba866] {\n    font-size: 100px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n}\n/* == Responsive mobile device == */\n@media screen and (min-device-width: 320px) and (max-device-width: 640px) {\n.additionBtn[data-v-b1dba866], .section-footer[data-v-b1dba866]{\n      font-size: 12px !important;\n}\n.info-box[data-v-b1dba866]{\n        padding: 1rem 0.9rem 0.5rem;\n        font-size: 14px;\n}\n}\n\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n/*@import '/css/font-awesome.min.css';*/\n/*@import '/css/custom_style.css';*/\n/*@import '/css/firstpage.css';*/\n\n/*p {*/\n/*    font-size: 15px;*/\n/*    margin-bottom: 5px;*/\n/*}*/\n\n/*tr {*/\n/*    font-size: 13px;*/\n/*}*/\n.dolil_view[data-v-67e98332] {\n    color: blue;\n    pointer: cursor;\n}\n.dolil_view[data-v-67e98332]:hover {\n    text-decoration: underline;\n}\n.document-view-modal[data-v-67e98332] {\n    width: 1200px !important;\n    height: 80%;\n}\n@media (min-width: 992px) {\n.document-view-modal[data-v-67e98332], .modal-xl[data-v-67e98332] {\n        max-width: 1200px !important;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.input_bangla[data-v-45f10756]{\n    font-size: 12px !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css&");

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

/***/ "./resources/js/components/Form/application_doc_khotian_info.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Form/application_doc_khotian_info.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_doc_khotian_info_vue_vue_type_template_id_543ca582_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_doc_khotian_info.vue?vue&type=template&id=543ca582&scoped=true& */ "./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=template&id=543ca582&scoped=true&");
/* harmony import */ var _application_doc_khotian_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application_doc_khotian_info.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _application_doc_khotian_info_vue_vue_type_style_index_0_id_543ca582_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css& */ "./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _application_doc_khotian_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _application_doc_khotian_info_vue_vue_type_template_id_543ca582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _application_doc_khotian_info_vue_vue_type_template_id_543ca582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "543ca582",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/application_doc_khotian_info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_doc_khotian_info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_style_index_0_id_543ca582_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=style&index=0&id=543ca582&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_style_index_0_id_543ca582_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_style_index_0_id_543ca582_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_style_index_0_id_543ca582_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_style_index_0_id_543ca582_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=template&id=543ca582&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=template&id=543ca582&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_template_id_543ca582_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_doc_khotian_info.vue?vue&type=template&id=543ca582&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_doc_khotian_info.vue?vue&type=template&id=543ca582&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_template_id_543ca582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_doc_khotian_info_vue_vue_type_template_id_543ca582_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Form/application_document.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Form/application_document.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_document_vue_vue_type_template_id_625e7d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_document.vue?vue&type=template&id=625e7d3a&scoped=true& */ "./resources/js/components/Form/application_document.vue?vue&type=template&id=625e7d3a&scoped=true&");
/* harmony import */ var _application_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application_document.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/application_document.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _application_document_vue_vue_type_style_index_0_id_625e7d3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css& */ "./resources/js/components/Form/application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _application_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _application_document_vue_vue_type_template_id_625e7d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _application_document_vue_vue_type_template_id_625e7d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "625e7d3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/application_document.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/application_document.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Form/application_document.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_document.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_document.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Form/application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_style_index_0_id_625e7d3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_document.vue?vue&type=style&index=0&id=625e7d3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_style_index_0_id_625e7d3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_style_index_0_id_625e7d3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_style_index_0_id_625e7d3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_style_index_0_id_625e7d3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Form/application_document.vue?vue&type=template&id=625e7d3a&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Form/application_document.vue?vue&type=template&id=625e7d3a&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_template_id_625e7d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./application_document.vue?vue&type=template&id=625e7d3a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/application_document.vue?vue&type=template&id=625e7d3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_template_id_625e7d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_application_document_vue_vue_type_template_id_625e7d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Form/attachment_mechanism.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Form/attachment_mechanism.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attachment_mechanism_vue_vue_type_template_id_b1dba866_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachment_mechanism.vue?vue&type=template&id=b1dba866&scoped=true& */ "./resources/js/components/Form/attachment_mechanism.vue?vue&type=template&id=b1dba866&scoped=true&");
/* harmony import */ var _attachment_mechanism_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attachment_mechanism.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/attachment_mechanism.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _attachment_mechanism_vue_vue_type_style_index_0_id_b1dba866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css& */ "./resources/js/components/Form/attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _attachment_mechanism_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attachment_mechanism_vue_vue_type_template_id_b1dba866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attachment_mechanism_vue_vue_type_template_id_b1dba866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b1dba866",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/attachment_mechanism.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/attachment_mechanism.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Form/attachment_mechanism.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./attachment_mechanism.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/attachment_mechanism.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Form/attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_style_index_0_id_b1dba866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/attachment_mechanism.vue?vue&type=style&index=0&id=b1dba866&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_style_index_0_id_b1dba866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_style_index_0_id_b1dba866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_style_index_0_id_b1dba866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_style_index_0_id_b1dba866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Form/attachment_mechanism.vue?vue&type=template&id=b1dba866&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Form/attachment_mechanism.vue?vue&type=template&id=b1dba866&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_template_id_b1dba866_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./attachment_mechanism.vue?vue&type=template&id=b1dba866&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/attachment_mechanism.vue?vue&type=template&id=b1dba866&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_template_id_b1dba866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_attachment_mechanism_vue_vue_type_template_id_b1dba866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Form/document_attachment.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Form/document_attachment.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _document_attachment_vue_vue_type_template_id_67e98332_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document_attachment.vue?vue&type=template&id=67e98332&scoped=true& */ "./resources/js/components/Form/document_attachment.vue?vue&type=template&id=67e98332&scoped=true&");
/* harmony import */ var _document_attachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document_attachment.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/document_attachment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _document_attachment_vue_vue_type_style_index_0_id_67e98332_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css& */ "./resources/js/components/Form/document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _document_attachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _document_attachment_vue_vue_type_template_id_67e98332_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _document_attachment_vue_vue_type_template_id_67e98332_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67e98332",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/document_attachment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/document_attachment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Form/document_attachment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./document_attachment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/document_attachment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Form/document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_style_index_0_id_67e98332_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/document_attachment.vue?vue&type=style&index=0&id=67e98332&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_style_index_0_id_67e98332_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_style_index_0_id_67e98332_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_style_index_0_id_67e98332_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_style_index_0_id_67e98332_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Form/document_attachment.vue?vue&type=template&id=67e98332&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Form/document_attachment.vue?vue&type=template&id=67e98332&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_template_id_67e98332_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./document_attachment.vue?vue&type=template&id=67e98332&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/document_attachment.vue?vue&type=template&id=67e98332&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_template_id_67e98332_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_document_attachment_vue_vue_type_template_id_67e98332_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Form/information_preview.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Form/information_preview.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _information_preview_vue_vue_type_template_id_45f10756_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information_preview.vue?vue&type=template&id=45f10756&scoped=true& */ "./resources/js/components/Form/information_preview.vue?vue&type=template&id=45f10756&scoped=true&");
/* harmony import */ var _information_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information_preview.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/information_preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _information_preview_vue_vue_type_style_index_0_id_45f10756_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css& */ "./resources/js/components/Form/information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _information_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _information_preview_vue_vue_type_template_id_45f10756_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _information_preview_vue_vue_type_template_id_45f10756_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45f10756",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/information_preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/information_preview.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Form/information_preview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./information_preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/information_preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Form/information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_style_index_0_id_45f10756_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/information_preview.vue?vue&type=style&index=0&id=45f10756&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_style_index_0_id_45f10756_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_style_index_0_id_45f10756_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_style_index_0_id_45f10756_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_style_index_0_id_45f10756_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Form/information_preview.vue?vue&type=template&id=45f10756&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Form/information_preview.vue?vue&type=template&id=45f10756&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_template_id_45f10756_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./information_preview.vue?vue&type=template&id=45f10756&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/information_preview.vue?vue&type=template&id=45f10756&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_template_id_45f10756_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_information_preview_vue_vue_type_template_id_45f10756_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);