(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/grohita_croy.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/grohita_croy.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/FileUpload */ "./resources/js/helpers/FileUpload.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/ValidationFile */ "./resources/js/helpers/ValidationFile.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









var dictionary = {
  en: {
    // attributes: {
    //     birth_reg_number: 'আপনার জন্ম-নিবন্ধন নম্বর দিন'
    // },
  },
  custom: {
    birth_reg_number: {
      required: 'আপনার জন্ম-নিবন্ধন নম্বর দিন।'
      // digits: 'আপনার ১৭ ডিজিটের সঠিক জন্ম-নিবন্ধন নম্বর দিন।',
    },

    dob: {
      required: 'সঠিক তথ্য দিন।'
    },
    applicant_name: {
      required: 'নাম সংযুক্ত করেন।'
    },
    nid_father_name: {
      required: 'পিতার নাম সংযুক্ত করেন।'
    },
    nid_mother_name: {
      required: 'মাতার নাম সংযুক্ত করেন।'
    },
    mobile: {
      required: 'আপনি ১১ ডিজিটের সঠিক নাম্বার ইনপুট দেন।',
      digits: 'আপনি ভুল ইনপুট দিচ্ছেন শুধুমাত্র ১১ ডিজিটের সঠিক নম্বর দিন। '
    },
    guardian: {
      required: 'অভিবাবকের ঠিকানা দিন।'
    },
    local_representative: {
      required: 'স্থানীয় প্রতিনিধির তথ্য দিন।'
    },
    address: {
      required: 'আপনার সঠিক ঠিকানা দিন।'
    },
    division_id: {
      required: 'বিভাগ সিলেক্ট করুন।'
    },
    district_id: {
      required: 'জেলা সিলেক্ট করুন।'
    },
    upazila_id: {
      required: 'উপাজেলা সিলেক্ট করুন।'
    }
  }
};
vee_validate__WEBPACK_IMPORTED_MODULE_8__["Validator"].localize('en', dictionary);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "citizen-applicant",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])),
  props: ['applicationData', 'citizen_applicant', 'citizen_applicant_under18_probahsi', 'allDistricts', 'tempNidArray', 'tempCompanyNameArray', 'nidPhotoContainer', 'signaturePhoto', 'componentKey'],
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.uuid = this.$store.state.checkDataCroySutro.uuid;
    this.signaturePhotoContainer = this.signaturePhoto;
    this.selectOwner();
  },
  data: function data() {
    return {
      JSONString: '',
      form_type: '',
      Districts: [],
      uuid: '',
      nid_image: '',
      croppieImage: '',
      cropped: null,
      add_row_applicant_index: 1,
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      bData: '',
      fileMime: '',
      filePath: [{
        path: ''
      }],
      citizen: [{
        "owner_type": false,
        "nid": false,
        "dob": false,
        "mobile": false,
        "email": false,
        "company_name": false,
        "representative": false,
        "designation": false,
        "rjsc": false,
        "incorporation_date": false,
        "etin_number": false,
        "district_id": false,
        "upazila_id": false,
        "address": false
      }],
      CitizenFields: {
        owner_type: false,
        nid: false,
        dob: false,
        mobile: true,
        email: false,
        company_name: false,
        representative: false,
        designation: false,
        rjsc: false,
        incorporation_date: false,
        etin_number: false,
        district_id: false,
        upazila_id: false,
        address: false
      },
      citizenData: {
        owner_index: 0,
        owner_type: '',
        owner_type_id: '',
        nid: '',
        dob: '',
        mobile: '',
        company_name: '',
        representative: '',
        address: '',
        rjsc: '',
        incorporation_date: '',
        etin_number: '',
        designation: '',
        nid_photo: '',
        nid_name: '',
        nid_name_en: '',
        nid_father_name: '',
        nid_mother_name: '',
        nid_address: '',
        nid_gender: '',
        spouse: '',
        hash: '',
        email: '',
        upazilas: [],
        division_id: '',
        district_id: '',
        upazila_id: '',
        upazila_text: '',
        district_text: '',
        //new add
        guardian: '',
        birth_reg_number: '',
        applicant_name: '',
        local_representative: '',
        photoUploadLoading: false
      },
      application_citizen_formatted_data: [],
      owner_type: '',
      owner_type_text: '',
      selected_person_or_institute: '',
      nid: '',
      dob: '',
      nid_invalid: false,
      nidProcessing: false,
      verifyNidButtonSpinner: false,
      nid_verification_message_error: false,
      nid_verification_message_success: false,
      nid_gender: '',
      divisions: {},
      districts: {},
      upazilas: {},
      signaturePhotoContainer: {
        citizen_applicant: []
      },
      disabledDates: {
        from: new Date(Date.now())
      },
      nid_upazila_list: [],
      nid_upazila_id: '',
      //new added
      under_18_or_probashi: '',
      active_under_18: false,
      active_probashi: false,
      bDataReady: false,
      photoUploadLoading: false,
      smart_nid_no: ''
    };
  },
  created: function created() {
    var _this = this;
    _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/get-divisions', '', {
      headers: this.headers
    }).then(function (resp) {
      _this.divisions = resp.data.data.divisions;
    })["catch"](function (error) {
      console.log(error.response.data.message);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.required_field').on("focusout", function () {
      var val = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
      var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('placeholder');
      var err = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().hasClass('error_message_required');
      if (val == '' && err == false) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().attr('style', 'background:red;');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).after('<div class="ml-2 error-msg" style="font-size: 17px;color:white;font-weight: bold;">' + data + '</div>');
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.required_field').on("input", function () {
      var val = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
      if (val !== '') jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().removeAttr('style');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().remove();
    });
    this.form_type = this.$store.state.firstPageCommonData.form_type;
  },
  methods: {
    nidValidationCheck: function nidValidationCheck(event) {
      if (event.target.value) {
        var regex = /^\d+$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__["default"].convert2English(event.target.value).match(regex);
        if (found) {
          if (event.target.value.length == 10 || event.target.value.length == 13 || event.target.value.length == 17) {
            event.target.classList.remove('error_message_required');
          } else {
            event.target.classList.remove('error_message_required');
            event.target.className += ' error_message_required';
          }
        } else {
          event.target.classList.remove('error_message_required');
          event.target.className += ' error_message_required';
        }
      } else {
        event.target.classList.remove('error_message_required');
        event.target.className += ' error_message_required';
      }
    },
    checkValueRequiredMobile: function checkValueRequiredMobile(event) {
      if (event.target.value) {
        var regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__["default"].convert2English(event.target.value).match(regex);
        if (found) {
          event.target.classList.remove('error_message_required');
        } else {
          event.target.classList.remove('error_message_required');
          event.target.className += ' error_message_required';
        }
      } else {
        event.target.classList.remove('error_message_required');
        event.target.className += ' error_message_required';
      }
    },
    validationMechanism: function validationMechanism() {
      var allFieldValidate = [];
      var allRequiredClass = this.$refs.grohita_croy.querySelectorAll('.required_field');
      allRequiredClass.forEach(function (e) {
        if (e.value == "" || e.value == undefined) {
          e.className += ' error_message_required';
          allFieldValidate.push(0);
        } else {
          e.classList.remove("error_message_required");
        }
      });
      var allMobileBn = this.$refs.grohita_croy.querySelectorAll('.mobile_bn');
      allMobileBn.forEach(function (e) {
        if (e.value.length) {
          var regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
          var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__["default"].convert2English(e.value).match(regex);
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
      var allEmail = this.$refs.grohita_croy.querySelectorAll('.email_validate');
      allEmail.forEach(function (e) {
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
      if (allFieldValidate.indexOf(0) === -1) {
        return true;
      }
      return false;
    },
    clearcitizenData: function clearcitizenData() {
      this.nid_invalid = false;
      this.nid_verification_message_error = false;
      this.nid_verification_message_success = false;
      this.nid_image = '';
      this.citizenData.nid = '';
      this.citizenData.dob = '';
      this.citizenData.mobile = '';
      this.citizenData.company_name = '';
      this.citizenData.representative = '';
      this.citizenData.address = '';
      this.citizenData.rjsc = '';
      this.citizenData.incorporation_date = '';
      this.citizenData.etin_number = '';
      this.citizenData.designation = '';
      this.citizenData.nid_photo = '';
      this.citizenData.nid_name = '';
      this.citizenData.nid_name_en = '';
      this.citizenData.nid_father_name = '';
      this.citizenData.nid_mother_name = '';
      this.citizenData.nid_address = '';
      this.citizenData.nid_gender = '';
      this.citizenData.spouse = '';
      this.citizenData.hash = '';
      this.citizenData.email = '';
      this.citizenData.upazilas = [];
      this.citizenData.division_id = '';
      this.citizenData.district_id = '';
      this.citizenData.upazila_id = '';
      this.citizenData.upazila_text = '';
      this.citizenData.district_text = '';

      //new added
      this.under_18_or_probashi = '', this.citizenData.guardian = '', this.citizenData.birth_reg_number = '', this.citizenData.applicant_name = '', this.citizenData.local_representative = '';
      this.active_probashi = false, this.active_under_18 = false;
    },
    selectOwner: function selectOwner() {
      var CommonStateData = this.allCommonDataFirstPage;
      var CommonQuestionData = CommonStateData.questions;
      var CommonCitizenData = CommonStateData.citizenData;
      this.citizenData.owner_type = CommonCitizenData.institute_owner_text;
      this.citizenData.owner_type_id = CommonCitizenData.institute_owner_type;
      this.owner_type_text = CommonQuestionData.for_person_or_institute == 1 ? 'ব্যক্তি মালিকানাধীন' : CommonCitizenData.institute_owner_text;
      this.selected_person_or_institute = CommonQuestionData.for_person_or_institute;
      if (CommonQuestionData.for_person_or_institute == 1) {
        // bakti malikana
        this.CitizenFields.nid = true;
        this.CitizenFields.dob = true;
        this.CitizenFields.email = true;
      } else {
        // institute
        if (CommonCitizenData.institute_owner_type == 12) {
          // RJSC
          this.CitizenFields.owner_type = true;
          this.CitizenFields.company_name = true;
          this.CitizenFields.representative = true;
          this.CitizenFields.designation = true;
          this.CitizenFields.rjsc = true;
          this.CitizenFields.incorporation_date = true;
          this.CitizenFields.etin_number = true;
          this.CitizenFields.district_id = true;
          this.CitizenFields.upazila_id = true;
          this.CitizenFields.address = true;
        } else if (CommonCitizenData.institute_owner_type == 13) {
          // govt office
          this.CitizenFields.owner_type = true;
          this.CitizenFields.company_name = true;
          this.CitizenFields.representative = true;
          this.CitizenFields.designation = true;
          this.CitizenFields.district_id = true;
          this.CitizenFields.upazila_id = true;
          this.CitizenFields.address = true;
        } else if (CommonCitizenData.institute_owner_type == 14) {
          // others
          this.CitizenFields.owner_type = true;
          this.CitizenFields.company_name = true;
          this.CitizenFields.representative = true;
          this.CitizenFields.designation = true;
          // this.CitizenFields.incorporation_date = true;
          this.CitizenFields.etin_number = true;
          this.CitizenFields.district_id = true;
          this.CitizenFields.upazila_id = true;
          this.CitizenFields.address = true;
        }
      }
      // console.log(this.selected_person_or_institute);
    },
    customDateFormat: function customDateFormat(date) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format('YYYY-MM-DD');
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
      this.$refs['without-nid-my-modal'].hide();
      this.under_18_or_probashi = '';
      this.nidProcessing = false;
    },
    removecitizen: function removecitizen(index, type) {
      if (type == 'person') {
        this.tempNidArrayRemove(this.citizen_applicant[index].nid);
        this.citizen_applicant.splice(index, 1);
      }
      if (type == 'under18_probashi') {
        this.citizen_applicant_under18_probahsi.splice(index, 1);
      }
      if (type == 'institute') {
        this.tempCompanyNameArrayRemove(this.citizen_applicant[index].company_name);
        this.citizen_applicant.splice(index, 1);
      }
      // else{
      //     this.tempCompanyNameArrayRemove(this.citizen_applicant[index].company_name);
      //     this.citizen_applicant.splice(index, 1);
      // }
    },

    addApplicantCitizens: function addApplicantCitizens() {
      this.clearcitizenData();
      this.nidProcessing = false;
      this.$refs['my-modal'].show();
    },
    withoutNidVerifyaddApplicantCitizens: function withoutNidVerifyaddApplicantCitizens() {
      //new added
      this.clearcitizenData();
      this.$refs['without-nid-my-modal'].show();
    },
    grohitaAddWithoutNIDVerify: function grohitaAddWithoutNIDVerify() {
      var validateData = this.validationMechanism();
      var validateMobile = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_5__["default"].validationMechanism(this.$refs.grohita_croy, '.mobile_bn', 'mobile');
      var validateNid = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_5__["default"].validationMechanism(this.$refs.grohita_croy, '.nid', 'nid');
      var validateEmail = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_5__["default"].validationMechanism(this.$refs.grohita_croy, '.email', 'email');
      if (!validateData || !validateMobile || !validateNid || !validateEmail) {
        return false;
      }
      var CommonStateData = this.allCommonDataFirstPage;
      var CommonQuestionData = CommonStateData.questions;
      var CommonCitizenData = CommonStateData.citizenData;

      /*
      if (Number(this.owner_type) == 0) {
          return false;
      }
      */
      // if (this.owner_type == 1 || this.owner_type == 3 || this.owner_type == 9 || this.owner_type == 10 || this.owner_type == 11) {
      if (CommonQuestionData.for_person_or_institute == 1) {
        var validateDataDatePicker = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_5__["default"].validationMechanism(this.$refs.grohita_croy, '.required_date_picker', 'date_picker');
        if (!validateDataDatePicker) {
          return false;
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nid_exist').hide();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#company_exist').hide();
        var nid_data = this.citizenData.nid.trim();
        /*if (this.tempNidArray.includes(nid_data)) {
            $('#nid_exist').show();
            return;
        }*/
        if (this.verifyNid()) {
          // this.tempNidArray.push(nid_data)
        } else {
          this.nid_invalid = true;
        }
      } else {
        var company_name_data = this.citizenData.company_name.trim();
        if (this.tempCompanyNameArray.includes(company_name_data)) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#company_exist').show();
          return;
        }
        this.tempCompanyNameArray.push(company_name_data);
        // let district_value = this.citizenData.district_id.split("_");
        // this.citizenData.division_id = district_value[1];
        // this.citizenData.district_id = district_value[0];

        var corpDate = this.citizenData.incorporation_date ? moment__WEBPACK_IMPORTED_MODULE_3___default()(this.citizenData.incorporation_date).format('YYYY-MM-DD') : '';

        /*COMMON OBJECT*/
        var citizenObj = {
          owner_type: this.citizenData.owner_type_id,
          /*nid: this.citizenData.nid,
          dob: this.citizenData.dob,*/
          mobile: this.citizenData.mobile,
          company_name: this.citizenData.company_name,
          representative: this.citizenData.representative,
          address: this.citizenData.address + ", " + this.citizenData.upazila_text + ", " + this.citizenData.district_text,
          division_id: this.citizenData.division_id.trim(),
          district_id: this.citizenData.district_id.trim(),
          upazila_id: this.citizenData.upazila_id,
          rjsc: this.citizenData.rjsc,
          etin_number: this.citizenData.etin_number,
          incorporation_date: corpDate,
          designation: this.citizenData.designation,
          is_delete: 1,
          signature_url_process: 0,
          upazilas: [],
          upazila_text: this.citizenData.upazila_text,
          district_text: this.citizenData.district_text
        };
        this.citizen_applicant.push(citizenObj);
        this.$refs['my-modal'].hide();
      }
    },
    grohitaAddWithoutNIDVerifyUnderEgihtyProbashi: function grohitaAddWithoutNIDVerifyUnderEgihtyProbashi(e) {
      var _this2 = this;
      e.preventDefault();

      //  var validateDataReq = ValidationFile.validationMechanism(this.$refs.without_nid_grohita_croy_probashi, '.required_field', 'required');
      //  var validateDataMobile = ValidationFile.validationMechanism(this.$refs.without_nid_grohita_croy_probashi, '.mobile_bn', 'mobile');
      //  var validateDataEmail = ValidationFile.validationMechanism(this.$refs.without_nid_grohita_croy_probashi, '.email_validate', 'email');
      //  var validateDataNumber = ValidationFile.validationMechanism(this.$refs.without_nid_grohita_croy_probashi, '.only_number', 'only_number');
      //  //var validateNID = ValidationFile.validationMechanism(this.$refs.without_nid_grohita_croy_probashi, '.nid', 'nid');
      // // var validateOnlineCharacter = ValidationFile.validationMechanism(this.$refs.without_nid_grohita_croy_probashi, '.only_character', 'only_character');
      //
      //
      //
      //  if (!validateDataReq || !validateDataMobile || !validateDataEmail || !validateDataNumber) {
      //      alert('সকল ঘর পূরণ করতে হবে ');
      //      return false;
      //      // CommonFunction.sweetAlertForRemoveButton(this, '<i class="fa fas fa-exclamation-circle" style="font-size: 40px; color:#C00000;"></i> </i><h6 align="center" style="padding-top:10px;"> <strong>সকল লাল চিহ্নিত ঘর পূরণ করতে হবে।</strong></h6>').then(res => {
      //      //     if (res.isDismissed || res.isDenied) {
      //      //         return false;
      //      //     }
      //      // });
      //  }

      this.$validator.validate().then(function (valid) {
        if (valid) {
          var CommonStateData = _this2.allCommonDataFirstPage;
          var CommonQuestionData = CommonStateData.questions;
          var CommonCitizenData = CommonStateData.citizenData;

          // let district_value = this.citizenData.district_id.split("_");
          // this.citizenData.division_id = district_value[1];
          // this.citizenData.district_id = district_value[0];

          /*COMMON OBJECT*/
          var citizenObj = {
            owner_type: _this2.citizenData.owner_type_id,
            /*nid: this.citizenData.nid,*/
            dob: moment__WEBPACK_IMPORTED_MODULE_3___default()(_this2.citizenData.dob).format('YYYY-MM-DD'),
            mobile: _this2.citizenData.mobile,
            // company_name: this.citizenData.company_name,
            representative: _this2.citizenData.representative,
            // address: this.citizenData.address + ", " + this.citizenData.upazila_text + ", " + this.citizenData.district_text,
            address: _this2.citizenData.address,
            division_id: _this2.citizenData.division_id.trim(),
            district_id: _this2.citizenData.district_id.trim(),
            upazila_id: _this2.citizenData.upazila_id,
            email: _this2.citizenData.email,
            //rjsc: this.citizenData.rjsc,
            //etin_number: this.citizenData.etin_number,
            //incorporation_date: corpDate,
            //designation: this.citizenData.designation,
            is_delete: 1,
            //signature_url_process: 0,
            upazilas: [],
            upazila_text: _this2.citizenData.upazila_text,
            district_text: _this2.citizenData.district_text,
            //new added
            guardian: _this2.citizenData.guardian,
            birth_reg_number: _this2.citizenData.birth_reg_number,
            applicant_name: _this2.citizenData.applicant_name,
            local_representative: _this2.citizenData.local_representative,
            nid: '',
            under_18_or_probashi: _this2.under_18_or_probashi,
            photoUploadLoading: false,
            father_name: _this2.citizenData.nid_father_name,
            mother_name: _this2.citizenData.nid_mother_name
          };
          // this.citizen_applicant.push(citizenObj);
          _this2.citizen_applicant_under18_probahsi.push(citizenObj);
          _this2.$refs['without-nid-my-modal'].hide();
        }
      });
    },
    application_citizen_data_format: function application_citizen_data_format() {
      this.application_citizen_formatted_data = [];
      this.$emit('application_citizen_set_data', this.application_citizen_formatted_data);
    },
    hideSmartNidMsgModal: function hideSmartNidMsgModal() {
      this.$refs['smart-nid-found-modal'].hide();
    },
    verifyNid: function verifyNid() {
      var _this3 = this;
      this.nidProcessing = true;
      this.verifyNidButtonSpinner = true;
      this.nid_invalid = false;
      var formData = new FormData();
      this.dob = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.citizenData.dob).format('YYYY-MM-DD');
      this.nid = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__["default"].convert2English(this.citizenData.nid);
      formData.append('nid', this.nid);
      formData.append('dob', this.dob);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/nid-verify', formData, {
        headers: this.headers
      }).then(function (resp) {
        var responseData = resp.data.data.data;
        if (responseData.photo != '') {
          _this3.setNidImage(responseData.photo);
        }
        _this3.nid_verification_message_success = true;
        _this3.verifyNidButtonSpinner = false;
        _this3.citizenData.owner_index = _this3.owner_type;
        _this3.citizenData.nid = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__["default"].convert2English(_this3.nid);
        _this3.citizenData.dob = _this3.dob;
        _this3.citizenData.nid_photo = _this3.nid_image;
        _this3.citizenData.nid_name = responseData.name;
        _this3.citizenData.nid_name_en = responseData.nameEn;
        _this3.citizenData.nid_father_name = responseData.father;
        _this3.citizenData.nid_mother_name = responseData.mother;
        _this3.citizenData.nid_address = responseData.permanentAddress;
        _this3.citizenData.upazila_text = responseData.permanentUpazila;
        _this3.citizenData.district_text = responseData.permanentDistrict;
        _this3.citizenData.nid_gender = responseData.gender;
        _this3.citizenData.spouse = responseData.spouse;
        _this3.citizenData.hash = responseData.hash;
        _this3.nid_gender = responseData.gender === 'male' ? 'পুরুষ' : 'মহিলা';

        //new added
        _this3.citizenData.birth_reg_number = '';
        _this3.citizenData.nid_verified = "yes";
      })["catch"](function (error) {
        if (typeof error.response.data.data.responseCode != 'undefined' && error.response.data.data.responseCode == -1) {
          _this3.smart_nid_no = error.response.data.data.smart_nid_no;
          _this3.$refs['my-modal'].hide();
          _this3.$refs['smart-nid-found-modal'].show();
          _this3.nid_verification_message_error = false;
        } else {
          _this3.nid_verification_message_error = true;
        }
        _this3.verifyNidButtonSpinner = false;
      });
    },
    tempNidArrayRemove: function tempNidArrayRemove(nid) {
      var index = this.tempNidArray.indexOf(nid);
      if (index > -1) {
        this.tempNidArray.splice(index, 1);
      }
    },
    tempCompanyNameArrayRemove: function tempCompanyNameArrayRemove(company_name) {
      var index = this.tempCompanyNameArray.indexOf(company_name);
      if (index > -1) {
        this.tempCompanyNameArray.splice(index, 1);
        this.signaturePhotoContainer.citizen_applicant.splice(index, 1);
      }
    },
    setNidImage: function setNidImage(filePath) {
      var _this4 = this;
      var url = this.apiBaseURL + '/store-base64';
      fetch(filePath).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = function () {
          _this4.nid_image = reader.result.split(',')[1];
          var form_data = new FormData();
          form_data.append('file', reader.result.split(',')[1]);
          var resp = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_1__["default"].storeNidImgAsBase64(url, form_data, _this4.headers);
          _this4.storeNidImageResp(resp);
        };
        reader.onerror = function () {
          console.log('Error: something wrong on image read');
        };
      })["catch"](function () {
        return console.log("something wrong on image fetch");
      });
    },
    storeNidImageResp: function storeNidImageResp(db_response) {
      var self = this;
      db_response.payload.then(function (data) {
        if (data.data.status == 200) {
          self.citizenData.nid_photo = data.data.data.uuid;
          return data.data.data.uuid;
        }
      });
    },
    setNidImageToContainer: function setNidImageToContainer(imageInfo, type, key) {
      var _this5 = this;
      var url = this.apiBaseURL + '/fetch-base64';
      var form_data = new FormData();
      form_data.append('uuid', imageInfo);
      _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_1__["default"].getNidImgByUUID(url, form_data, this.headers).payload.then(function (data) {
        _this5.$forceUpdate();
        _this5[type][key].temp_img = data.data.data.base64;
        _this5.$forceUpdate();
      })["catch"](function () {
        return console.log("something wrong on image fetch");
      });
    },
    grohitaAddAfterNIDVerify: function grohitaAddAfterNIDVerify() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var image_info, citizen_type, index_key, single_district_obj, nid_district_id, formData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this6.hideModal();
                _this6.tempNidArray.push(_this6.citizenData.nid);
                image_info = _this6.citizenData.nid_photo;
                citizen_type = 'citizen_applicant';
                index_key = _this6.citizen_applicant.length;
                _this6.citizenData.owner_index = _this6.owner_type;
                single_district_obj = _this6.allDistricts.find(function (_ref) {
                  var name_bn = _ref.name_bn;
                  return name_bn === _this6.citizenData.district_text;
                });
                nid_district_id = '';
                if (single_district_obj) {
                  nid_district_id = single_district_obj.id;
                }
                //  get upazila
                formData = new FormData();
                formData.append('district_id', Number(nid_district_id));
                _context.next = 13;
                return _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(_this6.apiBaseURL + '/get-upazilas-by-district', formData, {
                  headers: _this6.headers
                }).then(function (resp) {
                  if (resp.data.status == 200 && resp.data.responseCode == 200) {
                    _this6.nid_upazila_list = resp.data.data.upazilas;
                    var single_upazila_obj = Object.keys(_this6.nid_upazila_list).find(function (key) {
                      return _this6.nid_upazila_list[key] === _this6.citizenData.upazila_text;
                    });
                    _this6.nid_upazila_id = '';
                    if (single_upazila_obj) {
                      _this6.nid_upazila_id = single_upazila_obj;
                    }
                  } else {
                    console.log(resp.data.message);
                  }
                })["catch"](function (error) {
                  console.log(error.response.data.message);
                });
              case 13:
                _this6.citizen_applicant.push({
                  owner_index_txt: _this6.citizenData.owner_index_txt,
                  nid: _this6.citizenData.nid,
                  dob: _this6.dob,
                  mobile: _this6.citizenData.mobile,
                  company_name: _this6.citizenData.company_name,
                  representative: _this6.citizenData.representative,
                  address: _this6.citizenData.address,
                  rjsc: _this6.citizenData.rjsc,
                  incorporation_date: _this6.citizenData.incorporation_date,
                  nid_photo: _this6.citizenData.nid_photo,
                  nid_name: _this6.citizenData.nid_name,
                  nid_name_en: _this6.citizenData.nid_name_en,
                  nid_father_name: _this6.citizenData.nid_father_name,
                  nid_mother_name: _this6.citizenData.nid_mother_name,
                  nid_address: _this6.citizenData.nid_address,
                  nid_gender: _this6.citizenData.nid_gender,
                  spouse: _this6.citizenData.spouse,
                  hash: _this6.citizenData.hash,
                  email: _this6.citizenData.email,
                  is_delete: 1,
                  signature_url_process: 0,
                  district_id: nid_district_id,
                  upazila_id: _this6.nid_upazila_id,
                  upazilas: _this6.nid_upazila_list,
                  upazila_text: _this6.citizenData.upazila_text,
                  district_text: _this6.citizenData.district_text,
                  //new field
                  nid_verified: _this6.citizenData.nid_verified
                });
                _this6.setNidImageToContainer(image_info, citizen_type, index_key);
                _this6.setSignToContainer(citizen_type, index_key);
              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setSignToContainer: function setSignToContainer(citizen_type, index_key) {
      this.signaturePhotoContainer[citizen_type][index_key] = '';
    },
    getBase64: function getBase64(event, index) {
      var file = event.target.files[0];
      if (file.type != 'image/png' && file.type != 'image/jpeg' && file.type != 'application/pdf') {
        alert('File type must be jpg, png or pdf');
        event.target.value = '';
        return false;
      }
      if (file.size > 26214400) {
        alert('File size may not be more than 25 mb');
        event.target.value = '';
        return false;
      }
      this.fileMime = event.target.files[0].name.split('.').pop();
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#base64Data').attr('base', reader.result.split(',')[1]);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#base64_ready').val('processing');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#progressBar').css('width', '100%');
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
      this.base64Check(event, index);
    },
    base64Check: function base64Check(event, index) {
      var _this7 = this;
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#base64_ready').val() == 'processing') {
        this.bData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#base64Data').attr('base');
        if (this.bData != '') {
          this.fileUpload(index);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#base64_ready').val('complete');
        }
      } else {
        setTimeout(function () {
          _this7.base64Check(event, index);
        }, 100);
      }
    },
    fileUpload: function fileUpload(index) {
      if (this.bData != '' && this.bData) {
        var formData = new FormData();
        formData.append('file', this.bData);
        formData.append('mime', this.fileMime);
        var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_1__["default"].upload(this.apiBaseURL, formData, this.headers);
        response.payload.then(function (data) {
          if (data.data.status == 200) {
            console.log(index);
          }
        });
      }
    },
    croppie: function croppie(e, index, citizen_type) {
      var _this8 = this;
      var ref_ver = 'croppieRef_' + citizen_type + '_' + index;
      var ref_ver_modal = 'my-modal_' + citizen_type + '_' + index;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      var reader = new FileReader();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + ref_ver_modal).show();
      this[citizen_type][index].signature_url_process = 1;
      reader.onload = function (e) {
        _this8.$refs[ref_ver][0].bind({
          url: e.target.result
        });
      };
      reader.readAsDataURL(files[0]);
    },
    crop: function crop(index, type, citizen_type) {
      var _this9 = this;
      var options = {
        type: 'base64',
        // size: {width: 600, height: 450},
        format: 'png'
      };
      var ref_ver = 'croppieRef_' + citizen_type + '_' + index;
      this.$refs[ref_ver][0].result(options, function (output) {
        _this9.signaturePhotoContainer[citizen_type][index] = _this9.croppieImage = output;
        output = output.split(',');
        _this9.storeSignatureImage(output[1], citizen_type, index, type);
      });
      this[citizen_type][index].signature_url_process = 2;
      var ref_ver_modal = 'my-modal_' + citizen_type + '_' + index;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + ref_ver_modal).hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#signature_' + citizen_type + '_' + index).val('');
    },
    storeSignatureImage: function storeSignatureImage(filePath, citizen_type, index, type) {
      var url = this.apiBaseURL + '/store-base64';
      var form_data = new FormData();
      form_data.append('file', filePath);
      var resp = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_1__["default"].storeNidImgAsBase64(url, form_data, this.headers);
      this.storeSignatureResp(resp, citizen_type, index, type);
    },
    storeSignatureResp: function storeSignatureResp(db_response, citizen_type, index, type) {
      var _this10 = this;
      db_response.payload.then(function (data) {
        if (data.data.status == 200) {
          _this10[citizen_type][index][type] = data.data.data.uuid;
          return data.data.data.uuid;
        }
      });
    },
    hideModalSignature: function hideModalSignature(citizen_type, index) {
      var ref_ver_modal = 'my-modal_' + citizen_type + '_' + index;
      this[citizen_type][index].signature_url_process = 2;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + ref_ver_modal).hide();
    },
    onChange: function onChange(event, type) {
      this.citizenData[type] = event.target.options[event.target.options.selectedIndex].text;
    },
    getDistricts: function getDistricts(event) {
      var _this11 = this;
      var division_id = event.target.value;
      var formData = new FormData();
      formData.append('division_id', Number(division_id));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/get-districts', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this11.districts = resp.data.data.districts;
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getUpazila: function getUpazila(event, key, type, district_value) {
      var _this12 = this;
      var is_master = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var district_name = event.target.options[event.target.options.selectedIndex].text;
      this[type][key].district_name = district_name;
      if (is_master) {
        this.$root.$emit('district_change_event', {
          'district_name': district_name,
          'district_id': event.target.value
        });
      }
      var formData = new FormData();
      formData.append('division_id', Number(district_value));
      formData.append('district_id', Number(district_value));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/get-upazilas-by-district', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          if (type == 'citizen_applicant') {
            _this12.citizen_applicant[key].upazilas = resp.data.data.upazilas;
            _this12.citizen_applicant[key].upazila_id = '';
          }
          if (type == 'citizen_applicant_under18_probahsi') {
            _this12.citizen_applicant_under18_probahsi[key].upazilas = resp.data.data.upazilas;
            _this12.citizen_applicant_under18_probahsi[key].upazila_id = '';
          }
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
        this.upazila_loading = false;
      });
    },
    changeUpazila: function changeUpazila(event) {
      var is_master = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (is_master) {
        this.$root.$emit('upazila_change_event', {
          'upazila_id': event.target.value
        });
      }
    },
    getNidImage: function getNidImage(imageInfo, type, key) {
      var _this13 = this;
      var url = this.apiBaseURL + '/fetch-base64';
      var form_data = new FormData();
      form_data.append('uuid', imageInfo);
      _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_1__["default"].getNidImgByUUID(url, form_data, this.headers).payload.then(function (data) {
        _this13.nidPhotoContainer[type][key] = data.data.response.base64;
      })["catch"](function () {
        return console.log("something wrong on image fetch");
      });
    },
    // new add
    handleFileUpload: function handleFileUpload(event, type, index) {
      var _this14 = this;
      if (type == 'citizen_applicant') {
        this.citizen_applicant[index].photoUploadLoading = true;
        this.fileMime = event.target.files[0].name.split('.').pop();
        if (this.fileMime == 'jpg' || this.fileMime == 'JPG' || this.fileMime == 'png' || this.fileMime == 'jpeg' || this.fileMime == 'JPEG' || this.fileMime == 'PNG') {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = function () {
            _this14.bData = reader.result.split(',')[1];
            _this14.bDataReady = true;
          };
          reader.onerror = function () {
            _this14.citizen_applicant[index].photoUploadLoading = false;
          };
          this.base64CheckNew(event, type, index);

          // if(type =='photo'){
          //     this.setNidImageToContainer(event, index);
          // }
        } else {
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__["default"].sweetAlertForRemoveButton(this, '<i class="fa fas fa-exclamation-circle" style="font-size: 40px; color:#C00000;"></i> </i><h6 align="center" style="padding-top:10px;"> <strong>দুঃখিত! শুধুমাত্র (JPG, JPEG, PNG) টাইপ এর ছবি আপলোড করতে পারবেন।</strong></h6>').then(function (res) {
            if (res.isDismissed || res.isDenied) {
              _this14.citizen_applicant[index].photoUploadLoading = false;
              return false;
            }
            _this14.citizen_applicant[index].photoUploadLoading = false;
          });
        }
      }
      if (type == 'under18_probahsi') {
        this.citizen_applicant_under18_probahsi[index].photoUploadLoading = true;
        this.fileMime = event.target.files[0].name.split('.').pop();
        if (this.fileMime == 'jpg' || this.fileMime == 'JPG' || this.fileMime == 'png' || this.fileMime == 'jpeg' || this.fileMime == 'JPEG' || this.fileMime == 'PNG') {
          var _reader = new FileReader();
          _reader.readAsDataURL(event.target.files[0]);
          _reader.onload = function () {
            _this14.bData = _reader.result.split(',')[1];
            _this14.bDataReady = true;
          };
          _reader.onerror = function () {
            _this14.citizen_applicant_under18_probahsi[index].photoUploadLoading = false;
          };
          this.base64CheckNew(event, type, index);

          // if(type =='photo'){
          //     this.setNidImageToContainer(event, index);
          // }
        } else {
          _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__["default"].sweetAlertForRemoveButton(this, '<i class="fa fas fa-exclamation-circle" style="font-size: 40px; color:#C00000;"></i> </i><h6 align="center" style="padding-top:10px;"> <strong>দুঃখিত! শুধুমাত্র (JPG, JPEG, PNG) টাইপ এর ছবি আপলোড করতে পারবেন।</strong></h6>').then(function (res) {
            if (res.isDismissed || res.isDenied) {
              console.log(11);
              _this14.citizen_applicant_under18_probahsi[index].photoUploadLoading = false;
              return false;
            }
          });
          this.citizen_applicant_under18_probahsi[index].photoUploadLoading = false;
        }
      }
    },
    base64CheckNew: function base64CheckNew(event, type, index) {
      var _this15 = this;
      if (this.bDataReady) {
        if (this.bData != '') {
          this.bDataReady = false;
          var url = this.apiBaseURL + '/store-base64';
          var form_data = new FormData();
          form_data.append('file', this.bData);
          var resp = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_1__["default"].storeNidImgAsBase64(url, form_data, this.headers);
          resp.payload.then(function (data) {
            if (data.data.status == 200) {
              if (type == 'citizen_applicant') {
                _this15.citizen_applicant[index].nid_photo = data.data.data.uuid;
                _this15.viewImage(_this15.citizen_applicant[index].nid_photo, 'citizen_applicant', index);
              }
              if (type == 'under18_probahsi') {
                _this15.citizen_applicant_under18_probahsi[index].uuid = data.data.data.uuid;
                _this15.viewImage(_this15.citizen_applicant_under18_probahsi[index].uuid, 'under18_probahsi', index);
              }
            }
          })["catch"](function () {})["finally"](function () {
            // this.citizen_applicant_under18_probahsi[index].photoUploadLoading = false;
          });
        }
      } else {
        setTimeout(function () {
          _this15.base64CheckNew(event, type, index);
        }, 1000);
      }
    },
    viewImage: function viewImage(uuid, type, index) {
      var _this16 = this;
      var url = this.apiBaseURL + '/fetch-base64';
      var form_data = new FormData();
      form_data.append('uuid', uuid);
      var response = _helpers_FileUpload__WEBPACK_IMPORTED_MODULE_1__["default"].viewPhotoFromUUID(url, form_data, this.headers);
      response.payload.then(function (data) {
        if (type == 'under18_probahsi') {
          _this16.citizen_applicant_under18_probahsi[index].temp_img = data.data.data.base64;
          _this16.citizen_applicant_under18_probahsi[index].photoUploadLoading = false;
          _this16.$forceUpdate();
        }
        if (type == 'citizen_applicant') {
          _this16.citizen_applicant[index].temp_img = data.data.data.base64;
          _this16.citizen_applicant[index].photoUploadLoading = false;
          _this16.$forceUpdate();
        }
      })["catch"](function (err) {
        console.log(err.response.data.message);
        if (type == 'under18_probahsi') {
          _this16.citizen_applicant_under18_probahsi[index].photoUploadLoading = false;
        }
        if (type == 'citizen_applicant') {
          _this16.citizen_applicant[index].photoUploadLoading = false;
        }
      });
    },
    removeImage: function removeImage(uuid, index) {
      this.citizen_applicant_under18_probahsi[index].temp_img = '';
      this.$forceUpdate();
    },
    removeNidImage: function removeNidImage(uuid, index) {
      this.citizen_applicant[index].temp_img = '';
      this.$forceUpdate();
    },
    chek18Years: function chek18Years(event) {
      if (this.under_18_or_probashi == 'under_18') {
        var birthday = event;
        var date18YrsAgo = new Date();
        date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
        if (birthday <= date18YrsAgo) {
          this.citizenData.dob = null;
          alert("আবেদনকারীর বয়স ১৮ বছর বয়সের ঊর্ধ্বে, তাই NID এর ভিত্তিতে গ্রহীতার তথ্য সংযুক্ত করতে হবে।");
          return false;
        }
      }
    }
  },
  watch: {
    'citizenData.district_id': function citizenDataDistrict_id() {
      var _this17 = this;
      var district_value = this.citizenData.district_id.split("_");
      var formData = new FormData();
      formData.append('division_id', Number(district_value[1]));
      formData.append('district_id', Number(district_value[0]));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_4__["default"].header().post(this.apiBaseURL + '/get-upazilas-by-district', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          // this.upazilas = resp.data.response.upazilas;
          _this17.citizenData.upazilas = resp.data.data.upazilas;
          _this17.citizenData.upazila_id = '';
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    // 'under_18_or_probashi':function(){
    //     this.citizenData.dob = ''
    // },
    'under_18_or_probashi': {
      handler: function handler(newValue, oldValue) {
        // some function },
        if (newValue == 'under_18') {
          this.active_probashi = true;
        }
        if (newValue == 'probashi') {
          this.active_under_18 = true;
        }
        // if(newValue != oldValue){
        //     // this.hideModal()
        //     // this.$refs['without-nid-my-modal'].show();
        //     this.citizenData.nid = '';
        //     this.citizenData.dob = '';
        //     this.citizenData.mobile = '';
        //     this.citizenData.address = '';
        //     this.citizenData.email = '';
        //     this.citizenData.upazilas = [];
        //     this.citizenData.division_id = '';
        //     this.citizenData.district_id = '';
        //     this.citizenData.upazila_id = '';
        //     this.citizenData.upazila_text = '';
        //     this.citizenData.district_text = '';
        //
        //     //new added
        //       this.under_18_or_probashi= newValue,
        //         this.citizenData.guardian='',
        //         this.citizenData.birth_reg_number='',
        //         this.citizenData.applicant_name='',
        //         this.citizenData.local_representative=''
        //     this.citizenData.dob = ''
        //
        //
        // }
        deep: true;
      }
    },
    // 'citizenData.dob': {
    //     handler(newValue, oldValue) {
    //         if(this.under_18_or_probashi == 'under_18'){
    //             let birthday = this.citizenData.dob
    //             const date18YrsAgo = new Date();
    //             date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
    //
    //             if(birthday <= date18YrsAgo){
    //                 alert("আবেদনকারীর বয়স ১৮ বছর বয়সের ঊর্ধ্বে, তাই NID এর ভিত্তিতে গ্রহীতার তথ্য সংযুক্ত করতে হবে।")
    //                 this.citizenData.dob = ''
    //                 return false
    //             }
    //
    //         }
    //         deep:true
    //     }
    //
    // },
    'citizenData.birth_reg_number': function citizenDataBirth_reg_number() {
      this.citizenData.birth_reg_number = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__["default"].convert2English(this.citizenData.birth_reg_number);
    },
    'citizenData.mobile': function citizenDataMobile() {
      this.citizenData.mobile = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_6__["default"].convert2English(this.citizenData.mobile);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/landinfo_croy.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/landinfo_croy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/JomiCalculator */ "./resources/js/helpers/JomiCalculator.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
String.prototype.rpad = function (padString, length) {
  var str = this;
  while (str.length < length) {
    str = str + padString;
  }
  return str;
};







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "land-info",
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])('checkDataCroySutro', ['firstStepData', 'imageInfo', 'secondStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])('checkDataCroySutro', ['fetchFirstStepData', 'fetchSecondStepData', 'fetchThirdStepData', 'fetchFullStateData'])),
  props: ['divisions', 'land_amount_types', 'land_record_types', 'applicationData', 'districts', 'upazilas', 'select2Mouja', 'application_land_schedules', 'land_rate_enable_month_count'],
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
      dalilButton: true,
      JSONString: '',
      KhatinRecordOwner: {
        "owner": [{
          "name": "Ali Akbar",
          "address": "Dhaka,Bangladesh"
        }, {
          "name": "Mahbubul Alal",
          "address": "Nikunja-2,Dhaka,Bangladesh"
        }],
        "dag": [{
          "dag_no": 4544,
          "portion": 10
        }, {
          "dag_no": 44,
          "portion": 150
        }]
      },
      subRegisterOffice: {},
      loading_icon: false,
      disabledDates: {
        from: new Date(Date.now())
      },
      allDistrictList: [],
      prev_selected_district_id: '',
      //input data get form allDistrictList
      khatian_list: [],
      checkDoiliInfoRequried: ""
    };
  },
  created: function created() {
    if (this.fetchSecondStepData.application_land_schedules) {
      this.khotianButton = false;
    }
    this.allDistrict();
  },
  mounted: function mounted() {
    var _this = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#base64_ready').val('processing');
    var secondStepStateData = this.fetchSecondStepData;
    if (!secondStepStateData) {
      this.prev_selected_district_id = typeof this.fetchFirstStepData.district_id != 'undefined' ? this.fetchFirstStepData.district_id : '';
      this.application_land_schedules[0].main_data[0].sub_reg_district_id = this.prev_selected_district_id.trim();
      this.application_land_schedules[0].main_data[0].sub_reg_office_list = this.subRegisterOffice;
      this.initRegOfficeSet(this.application_land_schedules[0].main_data[0].sub_reg_district_id, 0, 0);
    }
    var commonStateData = this.allCommonDataFirstPage;
    commonStateData.khatian_type_list.filter(function (ele) {
      if (ele.id == commonStateData.questions.last_jorip_info) {
        _this.khatian_list.push(ele);
      }
      ;
    });
    var staticObj = {
      "id": 6,
      "data": "নামজারি"
    };
    this.khatian_list.push(staticObj);
    this.checkDoiliInfoRequried = this.allCommonDataFirstPage.land_ownership_reference_ids.includes(2) || this.allCommonDataFirstPage.land_ownership_reference_ids.includes(4) || this.allCommonDataFirstPage.land_ownership_reference_ids.includes(5) || this.allCommonDataFirstPage.land_ownership_reference_ids.includes(6) || this.allCommonDataFirstPage.land_ownership_reference_ids.includes(7) || this.allCommonDataFirstPage.land_ownership_reference_ids.includes(8);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])('tokenState', ['getToken'])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])('checkDataCroySutro', ['getFirstStepData', 'getImageInfo', 'getSecondStepData'])), {}, {
    initRegOfficeSet: function initRegOfficeSet(dis_id, key) {
      var _this2 = this;
      var childkey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var formData = new FormData();
      formData.append('district_id', dis_id);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_2__["default"].header().post(this.apiBaseURL + '/get-register-office', formData, {
        headers: this.headers
      }).then(function (resp) {
        _this2.application_land_schedules[key].main_data[childkey].sub_reg_office_list = resp.data.response.data ? resp.data.response.data : [];
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    subRegisterOfficeData: function subRegisterOfficeData(event, key, childkey) {
      var _this3 = this;
      this.application_land_schedules[key].main_data[childkey].sub_reg_district_id = event.target.value;
      this.application_land_schedules[key].main_data[childkey].sub_reg_office_list = {};
      this.application_land_schedules[key].main_data[childkey].sub_register_office_name = '';
      var selected_district_id = event.target.value;
      var formData = new FormData();
      formData.append('district_id', selected_district_id);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_2__["default"].header().post(this.apiBaseURL + '/get-register-office', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (selected_district_id != '') {
          _this3.application_land_schedules[key].main_data[childkey].sub_reg_office_list = resp.data.response.data ? resp.data.response.data : {};
        } else {
          _this3.application_land_schedules[key].main_data[childkey].sub_reg_office_list = resp.data.response.data ? resp.data.response.data : {};
        }
      })["catch"](function () {
        console.log('data cannot be fetched');
      });
    },
    allDistrict: function allDistrict() {
      var _this4 = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_2__["default"].header().post(this.apiBaseURL + '/get-all-district', '', {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this4.allDistrictList = resp.data.data.districts;
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    addLandSchedules: function addLandSchedules(type, index) {
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
          dalil_no: '',
          loading_icon: false,
          dalil_date: '',
          sub_register_office_name_text: sub_register_office_name_text,
          sub_register_office_name: sub_register_office_name,
          if_main: 0,
          if_dag: 0,
          if_dalil: 1,
          first_row: 0,
          others_row: 1,
          daglist: [],
          is_dolil_found: 0,
          file_path: '',
          sub_reg_district_id: this.prev_selected_district_id.trim(),
          sub_reg_office_list: {},
          land_rate_in_mouja: '',
          land_rate_in_mouja_is_required: false,
          is_readable: 0
        });
        lastScheduleKey = parseInt(index);
        lastMainDataKey = Object.keys(this.application_land_schedules[lastScheduleKey].main_data).pop();
      }
      if (type == 'dag') {
        this.application_land_schedules[index].main_data.push({
          // land_record_type_id: '',
          // khatian_no: '',
          dag_no: '',
          amount_of_land: '',
          land_amount_type_id: 1,
          loading_icon: false,
          dalil_no: '',
          dalil_date: '',
          sub_register_office_name_text: sub_register_office_name_text,
          sub_register_office_name: sub_register_office_name,
          if_main: 0,
          if_dag: 1,
          if_dalil: 0,
          first_row: 0,
          others_row: 1,
          daglist: this.application_land_schedules[index].main_data[0].daglist,
          dag_flag: this.application_land_schedules[index].main_data[0].dag_flag > 0 ? 1 : 0,
          amount_of_land_flag: 1,
          dalil_no_flag: 1,
          dalil_date_flag: 1,
          sub_offc_flag: 1,
          is_dolil_found: 0,
          file_path: '',
          korton_krito_jomir_poriman_txt: '',
          agoto_khatian_jomir_poriman_txt: '',
          is_khatian_checked: false,
          sub_reg_district_id: this.prev_selected_district_id.trim(),
          sub_reg_office_list: {},
          land_rate_in_mouja: '',
          land_rate_in_mouja_is_required: false,
          is_readable: 0
        });
        var total_row_count = this.application_land_schedules[index].main_data.length;
        var dag_exits_row = 0;
        for (var i = 0; i < total_row_count; i++) {
          if (this.application_land_schedules[index].main_data[i].if_dag === 1) {
            dag_exits_row += 1;
          }
        }
        if (this.application_land_schedules[index].main_data[0].daglist.length > 0 && this.application_land_schedules[index].main_data[0].daglist.length <= dag_exits_row) {
          this.application_land_schedules[index].dag_button = true;
        } else {
          this.application_land_schedules[index].dag_button = false;
        }
        lastScheduleKey = parseInt(index);
        lastMainDataKey = Object.keys(this.application_land_schedules[lastScheduleKey].main_data).pop();
      }
      if (type == 'main') {
        this.application_land_schedules.push({
          main_data: [{
            land_record_type_id: this.applicationData.selected_record_id,
            khatian_no: '',
            dag_no: '',
            amount_of_land: '',
            land_amount_type_id: 1,
            loading_icon: false,
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
            ldTax_info_found: 0,
            ldTaxArray: [],
            is_dolil_found: 0,
            file_path: '',
            agoto_khatian_jomir_poriman_txt: '',
            korton_krito_jomir_poriman_txt: '',
            is_khatian_checked: false,
            sub_reg_district_id: this.prev_selected_district_id.trim(),
            sub_reg_office_list: {},
            land_rate_in_mouja: '',
            land_rate_in_mouja_is_required: false,
            is_readable: 0
          }],
          first_row: 0,
          others_row: 0,
          if_main: 1,
          total_land_khotian: '',
          dag_button: true,
          dalil_button: true
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
      var _this5 = this;
      if (childData.khatian_no || childData.dag_no || childData.amount_of_land || childData.dalil_no || childData.dalil_date || childData.sub_register_office_name) {
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].sweetAlertBox(this, 'আপনি কি ডাটা সহ মুছে ফেলতে ইচ্ছুক?').then(function (res) {
          if (res.isConfirmed) {
            _this5.removeLandRow(type, index, childIndex);
          }
        });
      } else {
        this.removeLandRow(type, index, childIndex);
      }
    },
    removeLandRow: function removeLandRow(type, index, childIndex) {
      if (type == 'dag_dalil') {
        var if_dalil = this.application_land_schedules[index].main_data[childIndex].if_dalil;
        this.application_land_schedules[index].main_data.splice(childIndex, 1);
        if (if_dalil == 0) {
          this.calculationLand(index, childIndex);
          this.landAmountCorrection(index, childIndex);
          if (this.application_land_schedules[index].main_data[childIndex]) {
            this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
          }
          var total_row_count = this.application_land_schedules[index].main_data.length;
          var dag_exits_row = 0;
          for (var i = 0; i < total_row_count; i++) {
            if (this.application_land_schedules[index].main_data[i].if_dag === 1) {
              dag_exits_row += 1;
            }
          }
          if (this.application_land_schedules[index].main_data[0].daglist.length > 0 && this.application_land_schedules[index].main_data[0].daglist.length <= dag_exits_row) {
            this.application_land_schedules[index].dag_button = true;
          } else {
            this.application_land_schedules[index].dag_button = false;
          }
        }
      }
      if (type == 'main') {
        this.application_land_schedules.splice(index, 1);
        this.calculationForAllKhatian();
        this.khotianButton = false;
        this.dagButton = false;
      }
    },
    visibleDagKhotianButton: function visibleDagKhotianButton(event) {
      if (event.target.value) {
        this.khotianButton = false;
        this.dagButton = false;
      } else {
        this.khotianButton = true;
        this.dagButton = true;
      }
    },
    landAmountValidation: function landAmountValidation(event, index, childIndex) {
      if (_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(event.target.value) && !isNaN(_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(event.target.value))) {
        event.target.classList.remove('error_message_required');
      } else {
        event.target.classList.remove('error_message_required');
        event.target.className += ' error_message_required';
        this.application_land_schedules[index].main_data[childIndex].amount_of_land = '';
      }
    },
    landAmountCorrection: function landAmountCorrection(index, childIndex) {
      var land_amount_type_id_value = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#land_amount_type_id_" + index + childIndex).val();
      var amount_of_land_value = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_" + index + childIndex).val();
      amount_of_land_value = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(amount_of_land_value);
      var main_land_amount_value = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dag_no_" + index + childIndex + " option:selected").attr('jomir_portion');
      if (land_amount_type_id_value == 2 && amount_of_land_value.toString().indexOf('.') !== -1) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_" + index + childIndex).val('');
        this.application_land_schedules[index].main_data[childIndex].amount_of_land = '';
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_message_" + index + childIndex).html('');
        this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
        alert("শতকের ক্ষেত্রে দশমিক(.) গ্রহণযোগ্য নয়");
        return false;
      }
      if (land_amount_type_id_value == 2 && amount_of_land_value >= 10000) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_" + index + childIndex).val('');
        this.application_land_schedules[index].main_data[childIndex].amount_of_land = '';
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_message_" + index + childIndex).html('');
        this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
        alert("আপনার জমির পরিমাণ ১০০ শতক বা তার বেশি হলে অপসন থেকে একর সিলেক্ট করে তথ্য দিন");
        return false;
      }
      if (main_land_amount_value != undefined && main_land_amount_value > 0) {
        var input_value = Number(this.diff_land_calculation(land_amount_type_id_value, amount_of_land_value));
        var exist_value = Number(this.diff_land_calculation(1, main_land_amount_value));
        if (input_value > exist_value) {
          alert('উক্ত দাগে জমির পরিমাণ : ' + this.totalAmountCalculate(exist_value) + ', এর বেশি এন্ট্রি করা যাবে না');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_" + index + childIndex).val('');
          this.application_land_schedules[index].main_data[childIndex].amount_of_land = '';
          this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_message_" + index + childIndex).html('');
        }
      }
    },
    calculationForAllKhatian: function calculationForAllKhatian() {
      this.applicationData.total_land_amount = 0;
      for (var i = 0; i < this.application_land_schedules.length; i++) {
        this.applicationData.total_land_amount += Number(_helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_value(1, _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(this.application_land_schedules[i].total_land_khotian)));
      }
      this.applicationData.total_land_amount = Number(this.applicationData.total_land_amount).toFixed(4);
      this.applicationData.total_land_amount_text = this.totalAmountCalculate(this.applicationData.total_land_amount);
    },
    diff_land_calculation: function diff_land_calculation(unit, amount) {
      if (amount == undefined || amount == '') {
        return false;
      }
      var land_amount_type_id_value = unit;
      var amount_of_land_value = amount;
      var land_amount = 0;
      if (land_amount_type_id_value == 2) {
        land_amount = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_value(2, amount_of_land_value);
      } else {
        land_amount = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_value(1, amount_of_land_value);
      }
      return land_amount;
    },
    calculationLand: function calculationLand(index, childIndex) {
      // let land_amount_type_id_value = $("#land_amount_type_id_" + index + childIndex).val();
      // let land_amount_type_id_value = this.application_land_schedules[index].main_data[childIndex].land_amount_type_id;
      var land_amount_type_id_value = 1;
      var amount_of_land_value = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_" + index + childIndex).val();
      amount_of_land_value = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(amount_of_land_value);
      var ekor_value = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_value(land_amount_type_id_value, amount_of_land_value);
      var calculator_string = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_string(ekor_value);
      if (amount_of_land_value > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_message_" + index + childIndex).html(calculator_string);
        if (this.application_land_schedules[index].main_data[childIndex]) {
          this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = calculator_string;
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_message_" + index + childIndex).html('');
        if (this.application_land_schedules[index].main_data[childIndex]) {
          this.application_land_schedules[index].main_data[childIndex].korton_krito_jomir_poriman_txt = '';
        }
      }
      var main_land_amount_value = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#dag_no_" + index + childIndex + " option:selected").attr('jomir_portion');
      if (main_land_amount_value != undefined && main_land_amount_value > 0 && amount_of_land_value > 0) {
        this.landAmountCorrection(index, childIndex);
      }
      this.application_land_schedules[index].total_land_khotian = 0;
      var land_amount = 0;
      for (var i = 0; i < this.application_land_schedules[index].main_data.length; i++) {
        if (this.application_land_schedules[index].main_data[i].amount_of_land && this.application_land_schedules[index].main_data[i].if_dag == 1) {
          var amount_of_land = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(this.application_land_schedules[index].main_data[i].amount_of_land);
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
      this.applicationData.total_land_amount_txt = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2Bangla(this.totalAmountCalculate(this.applicationData.total_land_amount));
    },
    totalAmountCalculate: function totalAmountCalculate(total_amount_akor) {
      if (total_amount_akor != undefined && total_amount_akor.toString().length > 0) {
        var ekor_value = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_value(1, total_amount_akor);
        var calculator_string = _helpers_JomiCalculator__WEBPACK_IMPORTED_MODULE_3__["default"].get_acher_string(ekor_value);
        return calculator_string;
      }
    },
    checkValueExist: function checkValueExist(value, parent_id) {
      if (!value) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + parent_id).addClass('error_message_custom');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + parent_id).removeClass('error_message_custom');
      }
    },
    showPortion: function showPortion(key, childKey, event) {
      var options = event.target.options;
      this.application_land_schedules[key].main_data[childKey].amount_of_land = '';
      if (options.selectedIndex > -1) {
        for (var i = 0; i < this.application_land_schedules[key].main_data.length; i++) {
          if (i == childKey) {
            continue;
          }
          if (this.application_land_schedules[key].main_data[i].dag_no == this.application_land_schedules[key].main_data[childKey].dag_no) {
            this.application_land_schedules[key].main_data[childKey].dag_no = '';
            this.application_land_schedules[key].main_data[childKey].agoto_khatian_jomir_poriman_txt = '';
            alert('উক্ত দাগ নং পূর্বে ব্যবহার করা হয়েছে।');
            return;
          }
        }
        var jomir_portion = options[options.selectedIndex].getAttribute('jomir_portion');
        this.application_land_schedules[key].main_data[childKey].agoto_khatian_jomir_poriman_txt = this.totalAmountCalculate(jomir_portion);
      }
    },
    removeRow: function removeRow(masterIndex, childIndex) {
      this.application_land_schedules[masterIndex].main_data.splice(childIndex, 1);
    },
    checkDolilInfo: function checkDolilInfo(childData, master_key, child_Key) {
      var _this6 = this;
      var flag = true;
      if (childData.dalil_no == '' || childData.dalil_date == '' || childData.sub_register_office_name == '') {
        flag = false;
      }
      this.application_land_schedules[master_key].main_data[child_Key].dalil_no = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(this.application_land_schedules[master_key].main_data[child_Key].dalil_no);
      if (flag) {
        var form_data_dolil = new FormData();
        form_data_dolil.append('officeId', parseInt(childData.sub_register_office_name));
        form_data_dolil.append('deedNo', _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(childData.dalil_no));
        form_data_dolil.append('registrationDate', this.customDateFormat(childData.dalil_date, 'DD/MM/YYYY'));
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_2__["default"].header().post(this.apiBaseURL + '/get-dalil-pdf', form_data_dolil, {
          headers: this.headers
        }).then(function (resp) {
          if (resp.data.data.filePath != '') {
            _this6.application_land_schedules[master_key].main_data[child_Key].is_dolil_found = 1;
            _this6.application_land_schedules[master_key].main_data[child_Key].file_path = resp.data.data.filePath;
          } else {
            _this6.application_land_schedules[master_key].main_data[child_Key].is_dolil_found = 0;
            _this6.application_land_schedules[master_key].main_data[child_Key].file_path = '';
          }
        })["catch"](function (error) {
          _this6.application_land_schedules[master_key].main_data[child_Key].is_dolil_found = 0;
          _this6.application_land_schedules[master_key].main_data[child_Key].file_path = '';
          console.log(error.response.data.message);
        });
      } else {
        this.application_land_schedules[master_key].main_data[child_Key].is_dolil_found = 0;
      }
      this.checkDolilDate(childData, master_key, child_Key);
    },
    customDateFormat: function customDateFormat(date, dateFormat) {
      return moment__WEBPACK_IMPORTED_MODULE_6___default()(date).format(dateFormat);
    },
    changedLandRecordType: function changedLandRecordType(master_key, child_Key) {
      var is_khotian_no_remove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.application_land_schedules[master_key].main_data[child_Key].dag_no = '';
      this.application_land_schedules[master_key].main_data[child_Key].daglist = [];
      this.application_land_schedules[master_key].main_data[child_Key].ownerList = [];
      this.application_land_schedules[master_key].main_data[child_Key].portion = '';
      this.application_land_schedules[master_key].main_data[child_Key].agoto_khatian_jomir_poriman_txt = '';
      this.application_land_schedules[master_key].main_data[child_Key].korton_krito_jomir_poriman_txt = '';
      if (this.$store.state.firstPageCommonData.form_type != 4 && this.application_land_schedules[master_key].main_data[child_Key].is_readable != 'undefined' && this.application_land_schedules[master_key].main_data[child_Key].is_readable == 0) {
        this.application_land_schedules[master_key].main_data[child_Key].dalil_no = '';
        this.application_land_schedules[master_key].main_data[child_Key].dalil_date = '';
        this.application_land_schedules[master_key].main_data[child_Key].sub_register_office_name = '';
        this.application_land_schedules[master_key].main_data[child_Key].sub_register_office_name_text = '';
      }
      this.application_land_schedules[master_key].main_data[child_Key].amount_of_land = '';
      if (is_khotian_no_remove) {
        this.application_land_schedules[master_key].main_data[child_Key].khatian_no = '';
      }
      this.application_land_schedules[master_key].total_land_khotian = '';
      this.application_land_schedules[master_key].main_data[child_Key].dag_flag = 0;
      this.application_land_schedules[master_key].main_data[child_Key].amount_of_land_flag = 0;
      if (this.$store.state.firstPageCommonData.form_type != 4 && this.application_land_schedules[master_key].main_data[child_Key].is_readable != 'undefined' && this.application_land_schedules[master_key].main_data[child_Key].is_readable == 0) {
        this.application_land_schedules[master_key].main_data[child_Key].dalil_no_flag = 0;
        this.application_land_schedules[master_key].main_data[child_Key].dalil_date_flag = 0;
        this.application_land_schedules[master_key].main_data[child_Key].sub_offc_flag = 0;
      }
      var totalChield = this.application_land_schedules[master_key].main_data.length - 1;
      this.application_land_schedules[master_key].main_data.splice(1, totalChield);
      this.application_land_schedules[master_key].main_data[child_Key].is_khatian_checked = false;
    },
    khotianDag: function khotianDag(event) {
      var pattern = /^[0-9]{1,}([/])?([0-9]{1,}([/]))?([0-9]{1,}([/]))?([0-9]{1,}([/]))?([0-9]{1,})?$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = '';
      }
    },
    verifyKhatian: function verifyKhatian(khatian_no, master_key, child_Key) {
      var _this7 = this;
      khatian_no = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(khatian_no);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#amount_of_land_" + master_key + child_Key).val('');
      this.application_land_schedules[master_key].main_data[child_Key].amount_of_land = '';
      this.application_land_schedules[master_key].main_data[child_Key].agoto_khatian_jomir_poriman_txt = '';
      this.application_land_schedules[master_key].main_data[child_Key].korton_krito_jomir_poriman_txt = '';
      this.application_land_schedules[master_key].main_data[child_Key].is_khatian_checked = false;
      this.calculationLand(master_key, child_Key);
      if (khatian_no != '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#khatian_no_' + master_key + child_Key).removeClass('error_message_required');
        this.changedLandRecordType(master_key, child_Key, false);
        this.application_land_schedules[master_key].main_data[child_Key].loading_icon = true;
        var form_data = new FormData();
        form_data.append('division_id', parseInt(this.$store.state.checkDataCroySutro.firstStepData.division_id));
        form_data.append('district_id', parseInt(this.$store.state.checkDataCroySutro.firstStepData.district_id));
        form_data.append('upazila_id', parseInt(this.$store.state.checkDataCroySutro.firstStepData.upazila_id));
        form_data.append('mouja_id', parseInt(this.$store.state.checkDataCroySutro.firstStepData.mouja_id));
        form_data.append('jl_no', parseInt(this.$store.state.checkDataCroySutro.firstStepData.jl_no));
        form_data.append('land_record_type_id', this.application_land_schedules[master_key].main_data[child_Key].land_record_type_id);
        form_data.append('khatian_no', khatian_no);
        if (this.application_land_schedules[master_key].main_data[child_Key].land_record_type_id == 6) {
          form_data.append('khatian_type', 'namjari');
        } else if (_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].isInArray(this.application_land_schedules[master_key].main_data[child_Key].land_record_type_id, [3, 7, 12, 13, 11, 4, 5, 8, 9, 10, 14])) {
          //3,7,12,13
          form_data.append('khatian_type', 'record');
        }
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_2__["default"].header().post(this.apiBaseURL + '/data-from-apis', form_data, {
          headers: this.headers
        }).then(function (resp) {
          if (resp.data.status == 200) {
            if (resp.data.error == true) {
              // if error found
              _this7.application_land_schedules[master_key].main_data[child_Key].loading_icon = false;
              _this7.application_land_schedules[master_key].main_data[child_Key].is_khatian_checked = true;
              _this7.application_land_schedules[master_key].main_data[child_Key].ownerList = [];
              _this7.application_land_schedules[master_key].main_data[child_Key].daglist = [];
              _this7.application_land_schedules[master_key].main_data[child_Key].dag_no = '';
              _this7.application_land_schedules[master_key].main_data[child_Key].dag_flag = 1;
              _this7.application_land_schedules[master_key].main_data[child_Key].amount_of_land_flag = 1;
              // new condition for E-reg Data
              if (_this7.$store.state.firstPageCommonData.form_type != 4 && _this7.application_land_schedules[master_key].main_data[child_Key].is_readable != 'undefined' && _this7.application_land_schedules[master_key].main_data[child_Key].is_readable == 0) {
                _this7.application_land_schedules[master_key].main_data[child_Key].dalil_no_flag = 1;
                _this7.application_land_schedules[master_key].main_data[child_Key].dalil_date_flag = 1;
                _this7.application_land_schedules[master_key].main_data[child_Key].sub_offc_flag = 1;
              }
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jomir_portion_' + master_key + child_Key).html('');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jomir_portion_' + master_key + child_Key).closest('p').css("display", "none");
            } else {
              // if successfully found data
              _this7.application_land_schedules[master_key].main_data[child_Key].dag_flag = 0;
              _this7.application_land_schedules[master_key].main_data[child_Key].dag_no = '';
              _this7.application_land_schedules[master_key].main_data[child_Key].daglist = [];
              _this7.application_land_schedules[master_key].main_data[child_Key].ownerList = [];
              _this7.application_land_schedules[master_key].main_data[child_Key].amount_of_land_flag = 1;
              if (_this7.$store.state.firstPageCommonData.form_type != 4 && _this7.application_land_schedules[master_key].main_data[child_Key].is_readable != 'undefined' && _this7.application_land_schedules[master_key].main_data[child_Key].is_readable == 0) {
                _this7.application_land_schedules[master_key].main_data[child_Key].dalil_no_flag = 1;
                _this7.application_land_schedules[master_key].main_data[child_Key].dalil_date_flag = 1;
                _this7.application_land_schedules[master_key].main_data[child_Key].sub_offc_flag = 1;
              }
              //new add
              _this7.application_land_schedules[master_key].main_data[child_Key].division_id = _this7.$store.state.checkDataCroySutro.firstStepData.division_id;
              _this7.application_land_schedules[master_key].main_data[child_Key].district_id = _this7.$store.state.checkDataCroySutro.firstStepData.district_id;
              _this7.application_land_schedules[master_key].main_data[child_Key].upazila_id = _this7.$store.state.checkDataCroySutro.firstStepData.upazila_id;
              _this7.application_land_schedules[master_key].main_data[child_Key].mouja_id = _this7.$store.state.checkDataCroySutro.firstStepData.mouja_id;
              _this7.application_land_schedules[master_key].main_data[child_Key].jl_no = _this7.$store.state.checkDataCroySutro.firstStepData.jl_no;
              if (resp.data.response.dag.length > 0) {
                for (var i = 0; i < resp.data.response.dag.length; i++) {
                  if (i == 0) {
                    _this7.application_land_schedules[master_key].main_data[child_Key].dag_no = resp.data.response.dag[i].dag_no;
                    _this7.application_land_schedules[master_key].main_data[child_Key].portion = resp.data.response.dag[i].portion;
                    _this7.application_land_schedules[master_key].main_data[child_Key].agoto_khatian_jomir_poriman_txt = _this7.totalAmountCalculate(resp.data.response.dag[i].portion);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jomir_portion_' + master_key + child_Key).html(' <span style="font-size: 12px;font-style: italic">' + _this7.totalAmountCalculate(resp.data.response.dag[i].portion) + '</span>');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jomir_portion_' + master_key + child_Key).closest('p').css("display", "block");
                  }
                  _this7.application_land_schedules[master_key].main_data[child_Key].daglist.push({
                    id: resp.data.response.dag[i].dag_no,
                    data: resp.data.response.dag[i].dag_no,
                    portion: resp.data.response.dag[i].portion
                  });
                }
                if (resp.data.response.owner.length > 0) {
                  for (var _i2 = 0; _i2 < resp.data.response.owner.length; _i2++) {
                    _this7.application_land_schedules[master_key].main_data[child_Key].ownerList.push(resp.data.response.owner[_i2]);
                  }
                }
              }
              _this7.application_land_schedules[master_key].main_data[child_Key].is_khatian_checked = false;
            }
          } else {
            _this7.application_land_schedules[master_key].main_data[child_Key].ownerList = [];
            _this7.application_land_schedules[master_key].main_data[child_Key].daglist = [];
            _this7.application_land_schedules[master_key].main_data[child_Key].dag_no = '';
            _this7.application_land_schedules[master_key].main_data[child_Key].dag_flag = 1;
            _this7.application_land_schedules[master_key].main_data[child_Key].amount_of_land_flag = 1;
            if (_this7.$store.state.firstPageCommonData.form_type != 4 && _this7.application_land_schedules[master_key].main_data[child_Key].is_readable != 'undefined' && _this7.application_land_schedules[master_key].main_data[child_Key].is_readable == 0) {
              _this7.application_land_schedules[master_key].main_data[child_Key].dalil_no_flag = 1;
              _this7.application_land_schedules[master_key].main_data[child_Key].dalil_date_flag = 1;
              _this7.application_land_schedules[master_key].main_data[child_Key].sub_offc_flag = 1;
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jomir_portion_' + master_key + child_Key).html('');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jomir_portion_' + master_key + child_Key).closest('p').css("display", "none");
          }
          _this7.application_land_schedules[master_key].main_data[child_Key].loading_icon = false;
          _this7.application_land_schedules[master_key].dalil_button = false;
          if (_this7.application_land_schedules[master_key].main_data[child_Key].daglist.length > 0 && _this7.application_land_schedules[master_key].main_data[child_Key].daglist.length === 1) {
            // online info found
            _this7.application_land_schedules[master_key].dag_button = true;
          } else {
            _this7.application_land_schedules[master_key].dag_button = false;
          }
        })["catch"](function (error) {
          _this7.application_land_schedules[master_key].main_data[child_Key].loading_icon = false;
          _this7.application_land_schedules[master_key].main_data[child_Key].is_khatian_checked = false;
        });

        /*
        LDTAX API CALL
        */

        var form_data_ldtax = new FormData();
        form_data_ldtax.append('division_id', parseInt(this.$store.state.checkDataCroySutro.firstStepData.division_id));
        form_data_ldtax.append('district_id', parseInt(this.$store.state.checkDataCroySutro.firstStepData.district_id));
        form_data_ldtax.append('upazila_id', parseInt(this.$store.state.checkDataCroySutro.firstStepData.upazila_id));
        form_data_ldtax.append('mouja_id', parseInt(this.$store.state.checkDataCroySutro.firstStepData.mouja_id));
        form_data_ldtax.append('khotian_no', parseInt(khatian_no));
        _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_2__["default"].header().post(this.apiBaseURL + '/get-ldtax-info', form_data_ldtax, {
          headers: this.headers
        }).then(function (resp) {
          if (resp.data.status == 200 && resp.data.response.responseCode == 1) {
            _this7.application_land_schedules[master_key].main_data[child_Key].ldTax_info_found = 1;
            _this7.application_land_schedules[master_key].main_data[child_Key].ldTaxArray = [];
            _this7.application_land_schedules[master_key].main_data[child_Key].ldTaxArray.push(resp.data.response.data);
          } else {
            _this7.application_land_schedules[master_key].main_data[child_Key].ldTax_info_found = 0;
            _this7.application_land_schedules[master_key].main_data[child_Key].ldTaxArray = [];
          }
        })["catch"](function (error) {
          console.log(error.response.data.message);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#khatian_no_' + master_key + child_Key).addClass('error_message_required');
      }
    },
    onRegisterOfficeChange: function onRegisterOfficeChange(event, masterIndex, childIndex, childData) {
      if (typeof event.target.options[event.target.options.selectedIndex] !== 'undefined') {
        this.application_land_schedules[masterIndex].main_data[childIndex].sub_register_office_name_text = event.target.options[event.target.options.selectedIndex].text;
      } else {
        this.application_land_schedules[masterIndex].main_data[childIndex].sub_register_office_name_text = '';
      }
      this.checkDolilInfo(childData, masterIndex, childIndex);
    },
    checkDuplicatekhatianNoIn: function checkDuplicatekhatianNoIn(master_key, child_key) {
      var _this8 = this;
      if (this.khatianDuplicateCheckTimer) {
        clearTimeout(this.khatianDuplicateCheckTimer);
      }
      this.khatianDuplicateCheckTimer = setTimeout(function () {
        var khatian_no = _this8.application_land_schedules[master_key].main_data[child_key].khatian_no;
        var land_record_type_id = _this8.application_land_schedules[master_key].main_data[child_key].land_record_type_id;
        var lengthOfApLS = _this8.application_land_schedules.length;
        for (var i = 0; i < lengthOfApLS; i++) {
          if (i === master_key) continue;
          // if (this.application_land_schedules[i].main_data[0].khatian_no === khatian_no && this.application_land_schedules[i].main_data[0].land_record_type_id === land_record_type_id) {
          if (_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(_this8.application_land_schedules[i].main_data[0].khatian_no) === _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(khatian_no) && _this8.application_land_schedules[i].main_data[0].land_record_type_id === land_record_type_id) {
            _this8.application_land_schedules[master_key].main_data[child_key].khatian_no = '';
            alert('উক্ত খাতিয়ান নং পূর্বে ব্যবহার করা হয়েছে।');
            return;
          }
        }
      }, 1000);
    },
    // checkDuplicateDagNoIn(master_key, child_key) {
    //     if(this.DagDuplicateCheckTimer) {
    //         clearTimeout(this.DagDuplicateCheckTimer);
    //     }
    //
    //     this.DagDuplicateCheckTimer  = setTimeout(() => {
    //         let dag_no = this.application_land_schedules[master_key].main_data[child_key].dag_no;
    //         let lengthOfApLS = this.application_land_schedules.length;
    //
    //         for (let i = 0; i < lengthOfApLS; i++) {
    //
    //             for (let j = 0; j < this.application_land_schedules[i].main_data; i++) {
    //                 if (j === child_key) continue;
    //                 if (CommonFunction.convert2English(this.application_land_schedules[i].main_data[j].dag_no) === CommonFunction.convert2English(dag_no)) {
    //                     this.application_land_schedules[master_key].main_data[child_key].dag_no = '';
    //                     alert('উক্ত Dag নং পূর্বে ব্যবহার করা হয়েছে।');
    //                     return;
    //                 }
    //             }
    //
    //
    //         }
    //
    //     },1000);
    // },
    nonSpclDagKha: function nonSpclDagKha(event, type, master_key, child_key) {
      var errFlag = false;
      if (event.target.value) {
        var regex = /^[0-9]{1,}([/])?([0-9]{1,}([/]))?([0-9]{1,}([/]))?([0-9]{1,}([/]))?([0-9]{1,})?$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(event.target.value).match(regex);
        if (found) {
          event.target.classList.remove('error_message_required');
          errFlag = false;
          /**
           * check the dag is already exists
           */
          var mainDataArr = this.application_land_schedules[master_key].main_data;
          for (var i = 0; i < mainDataArr.length - 1; i++) {
            if (mainDataArr[i].dag_no === event.target.value && i != child_key) {
              mainDataArr[child_key].dag_no = '';
              mainDataArr[child_key].agoto_khatian_jomir_poriman_txt = '';
              alert('উক্ত দাগ নং পূর্বে ব্যবহার করা হয়েছে।');
              return;
            }
          }
        } else {
          event.target.classList.remove('error_message_required');
          event.target.className += ' error_message_required';
          errFlag = true;
        }
      } else {
        event.target.classList.remove('error_message_required');
        event.target.className += ' error_message_required';
        errFlag = true;
      }
      if (errFlag == true && type == 'khatian') {
        this.application_land_schedules[master_key].main_data[child_key].khatian_no = '';
      }
      if (errFlag == true && type == 'dag') {
        this.application_land_schedules[master_key].main_data[child_key].dag_no = '';
      }
    },
    checkDolilDate: function checkDolilDate(childData, master_key, child_key) {
      var _this9 = this;
      /**
       * show land_rate_in_mouja field based on dalil_date
       * condition:
       * if the given dalil_date is less then Configured date (12/15 months)
       *      then show the field & required
       * else
       *      the field will kept hidden
       */

      this.$nextTick(function () {
        var d = new Date();
        d.setMonth(d.getMonth() - parseInt(_this9.land_rate_enable_month_count));
        var maxPrev = d.toLocaleDateString('en-us', {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        var givenDate = Date.parse(childData.dalil_date);
        maxPrev = Date.parse(maxPrev);
        if (givenDate >= maxPrev) {
          _this9.application_land_schedules[master_key].main_data[child_key].land_rate_in_mouja_is_required = true;
        } else {
          _this9.application_land_schedules[master_key].main_data[child_key].land_rate_in_mouja = '';
          _this9.application_land_schedules[master_key].main_data[child_key].land_rate_in_mouja_is_required = false;
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/protinidhi.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/protinidhi.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "protinidhi",
  props: ['Delegate', 'allDistricts', 'nidPhotoContainer', 'componentKey'],
  components: {},
  mounted: function mounted() {
    var _this = this;
    this.$root.$on('district_change_event', function (data) {
      _this.Delegate[0].district_id = data.district_id;
      _this.getUpazilaChangeData(data.district_id);
    });
    this.$root.$on('upazila_change_event', function (data) {
      _this.Delegate[0].upazila_id = data.upazila_id;
    });
  },
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      upazilas: [],
      JSONString: ''
    };
  },
  methods: {
    getUpazila: function getUpazila(event, key, type, district_value) {
      var _this2 = this;
      var district_name = event.target.options[event.target.options.selectedIndex].text;
      this[type][key].district_name = district_name;
      var formData = new FormData();
      formData.append('district_id', Number(district_value));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/get-upazilas-by-district', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          if (type == 'Delegate') {
            _this2.Delegate[key].upazilas = resp.data.data.upazilas;
            _this2.Delegate[key].upazila_id = '';
          }
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
        this.upazila_loading = false;
      });
    },
    getUpazilaChangeData: function getUpazilaChangeData(data) {
      var _this3 = this;
      var formData = new FormData();
      formData.append('division_id', Number(data));
      formData.append('district_id', Number(data));
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/get-upazilas-by-district', formData, {
        headers: this.headers
      }).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 200) {
          _this3.Delegate[0].upazilas = resp.data.data.upazilas;
          _this3.Delegate[0].upazila_id = '';
        } else {
          console.log(resp.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
        this.upazila_loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/grohita_croy.vue?vue&type=template&id=87b31e94&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/grohita_croy.vue?vue&type=template&id=87b31e94& ***!
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
  return _c("div", {
    key: _vm.componentKey
  }, [_c("div", {
    staticClass: "px-4 grohita-section"
  }, [_c("div", {
    staticClass: "card border mt-3 p-0",
    staticStyle: {
      background: "#F9FFF9"
    }
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "table-responsive grohita"
  }, [_vm.citizen_applicant.length > 0 && this.selected_person_or_institute == 1 ? _c("div", {
    staticClass: "grohitattl"
  }, [_c("div", {
    staticClass: "landinfo-title have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("মালিকানার ধরন: " + _vm._s(this.owner_type_text) + " "), _vm.form_type != 4 ? _c("strong", [_vm._v("(NID যাচাইকৃত)")]) : _vm._e()])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered sm-screen-sm-tbl"
  }, _vm._l(_vm.citizen_applicant, function (data, key) {
    return _c("tbody", {
      key: key,
      staticClass: "text-center"
    }, [_vm.form_type == 4 ? _c("tr", [data.nid_verified != "undefined" && data.nid_verified == "yes" ? _c("td", {
      staticClass: "text-left",
      attrs: {
        colspan: "4"
      }
    }, [_c("strong", [_vm._v("(NID যাচাইকৃত)")])]) : _vm._e(), _vm._v(" "), data.nid_verified != "undefined" && data.nid_verified == "no" ? _c("td", {
      staticClass: "text-left",
      attrs: {
        colspan: "4"
      }
    }, [_c("strong", [_vm._v("(NID যাচাইকৃত নয়)")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "text-center input_bangla",
      staticStyle: {
        width: "4%"
      }
    }, [_c("div", {
      staticClass: "col-sm-12 form-group padding-l padding-r"
    }, [key == 0 ? _c("span", [_vm._v("নং")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "col-sm-12 form-group padding-l padding-r input_bangla"
    }, [_vm._v("\n                                            " + _vm._s(key + 1) + "\n                                        ")])]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: "0px !important",
        width: "76%"
      },
      attrs: {
        colspan: "3"
      }
    }, [_c("table", {
      staticStyle: {
        width: "100%",
        padding: "0px",
        border: "0px !important"
      }
    }, [_c("tr", [_c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important",
        width: "33%"
      }
    }, [_vm._v("নাম\n                                                    "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.nid_name,
        expression: "data.nid_name"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      staticStyle: {
        "min-width": "180px"
      },
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.nid_name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "nid_name", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-right": "0px !important",
        width: "33%"
      }
    }, [_vm._v("\n                                                    জাতীয় পরিচয়পত্র "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.nid,
        expression: "data.nid"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.nid
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "nid", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-right": "0px !important",
        width: "34%"
      }
    }, [_vm._v("জন্ম তারিখ\n\n                                                    "), _vm.form_type == 4 || _vm.form_type == 5 ? _c("datepicker", {
      staticClass: "input_bangla_date_pick required_date_picker",
      attrs: {
        "bootstrap-styling": true,
        title: "জন্মতারিখ",
        placeholder: "জন্মতারিখ",
        "disabled-dates": _vm.disabledDates,
        format: _vm.customDateFormat
      },
      model: {
        value: data.dob,
        callback: function callback($$v) {
          _vm.$set(data, "dob", $$v);
        },
        expression: "data.dob"
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.dob,
        expression: "data.dob"
      }],
      staticClass: "form-control input_bangla",
      staticStyle: {
        "min-width": "180px"
      },
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: data.dob
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "dob", $event.target.value);
        }
      }
    })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      }
    }, [_vm._v("মোবাইল নম্বর\n                                                    "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.mobile,
        expression: "data.mobile"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.mobile
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "mobile", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px"
      }
    }, [_vm._v("জেলা\n                                                    "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.district_id,
        expression: "data.district_id"
      }],
      staticClass: "form-control input_bangla red-bordered required_field",
      attrs: {
        placeholder: "জেলা",
        id: "citizen_applicant_" + key + "_dist"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(data, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function (event) {
          return _vm.getUpazila(event, key, "citizen_applicant", data.district_id, data.is_master);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("জেলা")]), _vm._v(" "), _vm._l(_vm.allDistricts, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: value.id
        }
      }, [_vm._v(_vm._s(value.name_bn.trim()) + "\n                                                        ")]);
    })], 2)]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-right": "0px !important"
      }
    }, [_vm._v("উপজেলা\n                                                    "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.upazila_id,
        expression: "data.upazila_id"
      }],
      staticClass: "form-control input_bangla red-bordered required_field",
      attrs: {
        placeholder: "উপজেলা"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(data, "upazila_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function (event) {
          return _vm.changeUpazila(event, data.is_master);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("উপজেলা")]), _vm._v(" "), _vm._l(data.upazilas, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: index
        }
      }, [_vm._v(_vm._s(value) + "\n                                                        ")]);
    })], 2)])]), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "text-left",
      staticStyle: {
        "border-bottom": "0px !important",
        "border-right": "0px !important"
      },
      attrs: {
        colspan: "3"
      }
    }, [_vm._v("ঠিকানা\n                                                    "), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.nid_address,
        expression: "data.nid_address"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text"
      },
      domProps: {
        value: data.nid_address
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "nid_address", $event.target.value);
        }
      }
    })])])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center",
      staticStyle: {
        width: "20%"
      }
    }, [_vm._v("ছবি\n                                        "), data.is_delete == 1 ? _c("button", {
      staticClass: "pull-right btn btn-danger btn-sm m-1",
      staticStyle: {
        "margin-top": "-14px !important",
        height: "27px",
        "margin-right": "-12px !important"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removecitizen(key, "person");
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e(), _vm._v(" "), [data.photoUploadLoading ? _c("div", {
      staticClass: "spinner-border text-primary",
      staticStyle: {
        "margin-top": "100px !important",
        "margin-left": "4px",
        height: "20px",
        width: "20px",
        "font-size": "11px"
      },
      attrs: {
        role: "status"
      }
    }) : _vm._e(), _vm._v(" "), data.temp_img ? _c("div", {
      staticClass: "text-center grohita_image_box"
    }, [!data.photoUploadLoading ? _c("img", {
      staticClass: "rounded-circle",
      staticStyle: {
        width: "130px!important",
        height: "130px!important",
        "margin-top": "50px !important"
      },
      attrs: {
        src: "data:image/png;base64,".concat(data.temp_img),
        alt: ""
      }
    }) : _vm._e(), _vm._v(" "), !data.photoUploadLoading ? _c("label", {
      staticClass: "drag-text"
    }, [_c("span", {
      staticStyle: {
        cursor: "pointer",
        color: "darkred"
      },
      on: {
        click: function click($event) {
          return _vm.removeNidImage(data.uuid, key);
        }
      }
    }, [_vm._v("ছবি পরিবর্তন  করুন")]), _vm._v(" "), _c("br")]) : _vm._e()]) : _c("span", [!data.photoUploadLoading ? _c("div", {
      staticClass: "image-upload-wrap mt-auto",
      staticStyle: {
        "margin-top": "80px !important"
      }
    }, [_c("label", {
      staticClass: "drag-text"
    }, [_c("input", {
      staticClass: "file-upload-input required_field",
      attrs: {
        type: "file",
        accept: "image/*"
      },
      on: {
        change: function change(event) {
          return _vm.handleFileUpload(event, "citizen_applicant", key);
        }
      }
    }), _vm._v(" "), _c("span", [_vm._v("ছবি সংযুক্ত করুন")]), _vm._v(" "), _c("br")])]) : _vm._e()])]], 2)])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.citizen_applicant.length > 0 && this.selected_person_or_institute == 2 ? _c("div", {
    staticClass: "v-gap"
  }) : _vm._e(), _vm._v(" "), _vm.citizen_applicant.length > 0 && this.selected_person_or_institute == 2 ? _c("div", {
    staticClass: "grohitattl"
  }, [_c("p", [_vm._v("মালিকানার ধরন: " + _vm._s(this.owner_type_text))]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered sm-screen-sm-tbl"
  }, _vm._l(_vm.citizen_applicant, function (data, key) {
    return _c("tbody", {
      key: key,
      staticClass: "text-center"
    }, [_c("tr", [_c("td", {
      staticClass: "text-center",
      staticStyle: {
        width: "4%"
      }
    }, [_c("div", {
      staticClass: "col-sm-12 form-group padding-l padding-r"
    }, [key == 0 ? _c("span", [_vm._v("নং")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "col-sm-12 form-group padding-l padding-r input_bangla"
    }, [_vm._v("\n                                            " + _vm._s(key + 1) + "\n                                        ")])]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: "0px !important",
        width: "70%"
      },
      attrs: {
        colspan: "3"
      }
    }, [_c("div", {
      staticClass: "row justify-content-between m-1"
    }, [_vm.CitizenFields.company_name == 1 ? _c("div", {
      staticClass: "col-md-6 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("প্রতিষ্ঠানের নাম")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.company_name,
        expression: "data.company_name"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.company_name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "company_name", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.rjsc == 1 ? _c("div", {
      staticClass: "col-md-6 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("RJSC রেজিট্রেশন নং")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.rjsc,
        expression: "data.rjsc"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.rjsc
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "rjsc", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.mobile == 1 ? _c("div", {
      staticClass: "col-md-6 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("মোবাইল নম্বর")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.mobile,
        expression: "data.mobile"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.mobile
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "mobile", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.etin_number == 1 ? _c("div", {
      staticClass: "col-md-6 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("eTIN নম্বর")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.etin_number,
        expression: "data.etin_number"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.etin_number
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "etin_number", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.incorporation_date == 1 ? _c("div", {
      staticClass: "col-md-6 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("ইনকর্পোরেশনের তারিখ")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.incorporation_date,
        expression: "data.incorporation_date"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.incorporation_date
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "incorporation_date", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.representative == 1 ? _c("div", {
      staticClass: "col-md-6 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("প্রতিনিধিত্বকারীর নাম")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.representative,
        expression: "data.representative"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.representative
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "representative", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.district_id == 1 ? _c("div", {
      staticClass: "col-md-6 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("জেলা")]), _vm._v(" "), _vm.form_type == 4 || _vm.form_type == 5 ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.district_id,
        expression: "data.district_id"
      }],
      staticClass: "form-control input_bangla red-bordered required_field",
      attrs: {
        placeholder: "জেলা",
        id: "citizen_applicant_" + key + "_dist"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(data, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function (event) {
          return _vm.getUpazila(event, key, "citizen_applicant", data.district_id, data.is_master);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("জেলা")]), _vm._v(" "), _vm._l(_vm.allDistricts, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: value.id
        }
      }, [_vm._v(_vm._s(value.name_bn.trim()) + "\n                                                    ")]);
    })], 2) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.district_text,
        expression: "data.district_text"
      }],
      staticClass: "form-control p-1",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: data.district_text
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "district_text", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.designation == 1 ? _c("div", {
      staticClass: "col-md-6 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("পদবি")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.designation,
        expression: "data.designation"
      }],
      staticClass: "form-control p-1",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.designation
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "designation", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.upazila_id == 1 ? _c("div", {
      staticClass: "col-md-6 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("উপজেলা")]), _vm._v(" "), _vm.form_type == 4 || _vm.form_type == 5 ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.upazila_id,
        expression: "data.upazila_id"
      }],
      staticClass: "form-control input_bangla red-bordered required_field",
      attrs: {
        placeholder: "উপজেলা"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(data, "upazila_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function (event) {
          return _vm.changeUpazila(event, data.is_master);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("উপজেলা")]), _vm._v(" "), _vm._l(data.upazilas, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: index
        }
      }, [_vm._v(_vm._s(value) + "\n                                                    ")]);
    })], 2) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.upazila_text,
        expression: "data.upazila_text"
      }],
      staticClass: "form-control p-1",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: data.upazila_text
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "upazila_text", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.address == 1 ? _c("div", {
      staticClass: "col-md-12 my-2"
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("ঠিকানা")]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.address,
        expression: "data.address"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      domProps: {
        value: data.address
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "address", $event.target.value);
        }
      }
    })]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticClass: "text-center",
      staticStyle: {
        width: "26%"
      }
    }, [data.is_delete == 1 ? _c("button", {
      staticClass: "btn btn-danger btn-sm m-1 pull-right",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removecitizen(key, "institute");
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), [_c("div", {
      staticClass: "modal",
      attrs: {
        id: "my-modal_citizen_applicant_" + key,
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
    }, [_vm._v("\n                                                            ইমেজ মডিফাই লিংক : "), _c("a", {
      attrs: {
        href: "https://picresize.com/",
        target: "_blank"
      }
    }, [_vm._v("https://picresize.com/")]), _vm._v(" "), _c("button", {
      staticClass: "close",
      attrs: {
        type: "button",
        "data-dismiss": "modal",
        "aria-label": "Close"
      },
      on: {
        click: function click($event) {
          return _vm.hideModalSignature("citizen_applicant", key);
        }
      }
    }, [_c("span", {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
      staticClass: "modal-body"
    }, [data.signature_url_process == 1 ? _c("vue-croppie", {
      ref: "croppieRef_citizen_applicant_" + key,
      refInFor: true,
      attrs: {
        enableOrientation: true,
        enableResize: false,
        boundary: {
          width: 320,
          height: 100
        },
        viewport: {
          width: 300,
          height: 80,
          type: "square"
        }
      }
    }) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [data.signature_url_process == 1 ? _c("button", {
      staticClass: "btn btn-sm btn-primary offset-3 col-2",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.crop(key, "signature_url", "citizen_applicant");
        }
      }
    }, [_vm._v("\n                                                                    সম্পাদন\n                                                                ")]) : _vm._e(), _vm._v(" "), _c("b-button", {
      staticClass: "offset-1 col-2",
      attrs: {
        variant: "outline-danger",
        block: ""
      },
      on: {
        click: function click($event) {
          return _vm.hideModalSignature("citizen_applicant", key);
        }
      }
    }, [_vm._v("\n                                                                    বাতিল\n                                                                ")])], 1)], 1)])])]), _vm._v(" "), _vm.signaturePhotoContainer.citizen_applicant[key] ? _c("img", {
      staticStyle: {
        height: "40px",
        width: "150px"
      },
      attrs: {
        src: _vm.signaturePhotoContainer.citizen_applicant[key]
      }
    }) : _vm._e(), _vm._v(" "), _vm.signaturePhotoContainer.citizen_applicant[key] ? _c("br") : _vm._e(), _vm._v(" "), _vm.signaturePhotoContainer.citizen_applicant[key] ? _c("br") : _vm._e(), _vm._v(" "), !_vm.signaturePhotoContainer.citizen_applicant[key] ? _c("div", {
      staticClass: "image-upload-wrap"
    }, [_c("label", {
      staticClass: "drag-text"
    }, [_c("input", {
      staticClass: "file-upload-input required_field",
      attrs: {
        type: "file",
        accept: "image/*",
        id: "signature_citizen_applicant_" + key
      },
      on: {
        change: [function (event) {
          return _vm.getBase64(event, key);
        }, function (event) {
          return _vm.croppie(event, key, "citizen_applicant");
        }]
      }
    }), _vm._v(" "), _c("span", [_vm._v("সাক্ষর সংযুক্ত করুন ")]), _vm._v(" "), _c("br")])]) : _vm._e(), _vm._v(" "), _vm.signaturePhotoContainer.citizen_applicant[key] ? _c("div", {
      staticClass: "image-upload-wrap-success"
    }, [_c("label", {
      staticClass: "drag-text"
    }, [_c("input", {
      staticClass: "file-upload-input",
      attrs: {
        type: "file",
        accept: "image/*",
        id: "signature_citizen_applicant_" + key
      },
      on: {
        change: [function (event) {
          return _vm.getBase64(event, key);
        }, function (event) {
          return _vm.croppie(event, key, "citizen_applicant");
        }]
      }
    }), _vm._v(" "), _c("span", [_vm._v("সাক্ষর সম্পাদন করুন ")]), _vm._v(" "), _c("br")])]) : _vm._e()]], 2)])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.citizen_applicant_under18_probahsi.length > 0 && this.allCommonDataFirstPage.questions.check_nid_exist == 2 ? _c("div", {
    staticClass: "grohitattl"
  }, [_c("p", [_vm._v("মালিকানার ধরন: " + _vm._s(this.owner_type_text) + " "), _c("strong", [_vm._v("(NID ব্যতীত গ্রহীতার তথ্য)")])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered sm-screen-sm-tbl"
  }, _vm._l(_vm.citizen_applicant_under18_probahsi, function (data, key) {
    return _c("tbody", {
      key: key,
      staticClass: "text-center"
    }, [_c("tr", [_c("td", {
      staticClass: "text-center input_bangla",
      staticStyle: {
        width: "4%"
      }
    }, [_c("div", {
      staticClass: "col-sm-12 form-group padding-l padding-r"
    }, [key == 0 ? _c("span", [_vm._v("নং")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "col-sm-12 form-group padding-l padding-r input_bangla"
    }, [_vm._v("\n                                            " + _vm._s(key + 1) + "\n                                        ")])]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: "0px !important",
        width: "76%"
      },
      attrs: {
        colspan: "3"
      }
    }, [_c("table", {
      staticStyle: {
        width: "100%",
        padding: "0px",
        border: "0px !important"
      }
    }, [_c("tr", [_c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important",
        width: "33%"
      }
    }, [_vm._v("আবেদনকারীর নাম "), _c("strong", [_vm._v("(" + _vm._s(data.under_18_or_probashi == "under_18" ? "অপ্রাপ্ত বয়স্ক" : "প্রবাসী") + ")")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.applicant_name,
        expression: "data.applicant_name"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      staticStyle: {
        "min-width": "180px"
      },
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.applicant_name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "applicant_name", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-right": "0px !important",
        width: "33%"
      }
    }, [_vm._v("\n                                                    জন্ম-নিবন্ধন নম্বর "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.birth_reg_number,
        expression: "data.birth_reg_number"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.birth_reg_number
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "birth_reg_number", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-right": "0px !important",
        width: "34%"
      }
    }, [_vm._m(1, true), _vm._v(" "), _vm.form_type == 4 || _vm.form_type == 5 ? _c("datepicker", {
      staticClass: "input_bangla_date_pick required_date_picker",
      attrs: {
        "bootstrap-styling": true,
        title: "জন্মতারিখ",
        placeholder: "জন্মতারিখ",
        "disabled-dates": _vm.disabledDates,
        format: _vm.customDateFormat
      },
      model: {
        value: data.dob,
        callback: function callback($$v) {
          _vm.$set(data, "dob", $$v);
        },
        expression: "data.dob"
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.dob,
        expression: "data.dob"
      }],
      staticClass: "form-control input_bangla",
      staticStyle: {
        "min-width": "180px"
      },
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: data.dob
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "dob", $event.target.value);
        }
      }
    })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      }
    }, [_vm._v("মোবাইল নম্বর\n                                                    "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.mobile,
        expression: "data.mobile"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.mobile
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "mobile", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px"
      }
    }, [_vm._v("জেলা\n\n                                                    "), _vm.form_type == 4 || _vm.form_type == 5 ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.district_id,
        expression: "data.district_id"
      }],
      staticClass: "form-control input_bangla red-bordered required_field",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        placeholder: "জেলা",
        id: "citizen_applicant_" + key + "_dist"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(data, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function (event) {
          return _vm.getUpazila(event, key, "citizen_applicant_under18_probahsi", data.district_id);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("জেলা")]), _vm._v(" "), _vm._l(_vm.allDistricts, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: value.id
        }
      }, [_vm._v(_vm._s(value.name_bn.trim()) + "\n                                                        ")]);
    })], 2) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.district_text,
        expression: "data.district_text"
      }],
      staticClass: "form-control p-1",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: data.district_text
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "district_text", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-left",
      staticStyle: {
        padding: "0px",
        "border-right": "0px !important"
      }
    }, [_vm._v("উপজেলা\n\n                                                    "), (_vm.form_type == 4 || _vm.form_type == 5) && data.upazila_id == "" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.upazila_id,
        expression: "data.upazila_id"
      }],
      staticClass: "form-control input_bangla red-bordered required_field",
      attrs: {
        placeholder: "উপজেলা"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(data, "upazila_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function (event) {
          return _vm.changeUpazila(event, data.is_master);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("উপজেলা")]), _vm._v(" "), _vm._l(data.upazilas, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: index
        }
      }, [_vm._v(_vm._s(value) + "\n                                                        ")]);
    })], 2) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.upazila_text,
        expression: "data.upazila_text"
      }],
      staticClass: "form-control p-1",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: data.upazila_text
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "upazila_text", $event.target.value);
        }
      }
    })])]), _vm._v(" "), _c("tr", [_c("td", {
      staticStyle: {
        padding: "0px",
        "border-top": "0px !important",
        "border-left": "0px !important"
      },
      attrs: {
        colspan: "3"
      }
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-6 text-left"
    }, [_vm._v("\n                                                            পিতার নাম\n                                                            "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.father_name,
        expression: "data.father_name"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.father_name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "father_name", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-6 text-left"
    }, [_vm._v("\n                                                            মাতার নাম\n                                                            "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.mother_name,
        expression: "data.mother_name"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.mother_name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "mother_name", $event.target.value);
        }
      }
    })])])])]), _vm._v(" "), _c("tr", [data.under_18_or_probashi == "under_18" ? _c("td", {
      staticClass: "text-left",
      staticStyle: {
        "border-bottom": "0px !important",
        "border-right": "0px !important"
      },
      attrs: {
        colspan: "3"
      }
    }, [_vm._v("অভিভাবকের তথ্য\n                                                    "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.guardian,
        expression: "data.guardian"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.guardian
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "guardian", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), data.under_18_or_probashi == "probashi" ? _c("td", {
      staticClass: "text-left",
      staticStyle: {
        "border-bottom": "0px !important",
        "border-right": "0px !important"
      },
      attrs: {
        colspan: "3"
      }
    }, [_vm._v("স্থানীয় প্রতিনিধি\n                                                    "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.local_representative,
        expression: "data.local_representative"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.local_representative
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "local_representative", $event.target.value);
        }
      }
    })]) : _vm._e()]), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "text-left",
      staticStyle: {
        "border-bottom": "0px !important",
        "border-right": "0px !important"
      },
      attrs: {
        colspan: "3"
      }
    }, [_vm._v("ঠিকানা\n                                                    "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.address,
        expression: "data.address"
      }],
      staticClass: "form-control input_bangla",
      "class": _vm.form_type == 4 ? "red-bordered required_field" : "",
      attrs: {
        type: "text",
        disabled: _vm.form_type == 4 ? false : true
      },
      domProps: {
        value: data.address
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "address", $event.target.value);
        }
      }
    })])])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center",
      staticStyle: {
        width: "26%"
      }
    }, [_vm._v("ছবি\n                                        "), data.is_delete == 1 ? _c("button", {
      staticClass: "pull-right btn btn-danger btn-sm m-1",
      staticStyle: {
        "margin-top": "-14px !important",
        height: "27px",
        "margin-right": "-12px !important"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removecitizen(key, "under18_probashi");
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), [data.photoUploadLoading ? _c("div", {
      staticClass: "spinner-border text-primary",
      staticStyle: {
        "margin-top": "100px !important",
        "margin-left": "4px",
        height: "20px",
        width: "20px",
        "font-size": "11px"
      },
      attrs: {
        role: "status"
      }
    }) : _vm._e(), _vm._v(" "), typeof data.temp_img != "undefined" && data.temp_img != "" ? _c("div", {
      staticClass: "text-center grohita_image_box"
    }, [!data.photoUploadLoading ? _c("img", {
      staticClass: "rounded-circle",
      staticStyle: {
        width: "130px!important",
        height: "130px!important",
        "margin-top": "50px !important"
      },
      attrs: {
        src: "data:image/png;base64,".concat(data.temp_img),
        alt: ""
      }
    }) : _vm._e(), _vm._v(" "), !data.photoUploadLoading ? _c("label", {
      staticClass: "drag-text"
    }, [_c("span", {
      staticStyle: {
        cursor: "pointer",
        color: "darkred"
      },
      on: {
        click: function click($event) {
          return _vm.removeImage(data.uuid, key);
        }
      }
    }, [_vm._v("ছবি পরিবর্তন  করুন")]), _vm._v(" "), _c("br")]) : _vm._e()]) : _c("span", [!data.photoUploadLoading ? _c("div", {
      staticClass: "image-upload-wrap mt-auto",
      staticStyle: {
        "margin-top": "80px !important"
      }
    }, [_c("label", {
      staticClass: "drag-text"
    }, [_c("input", {
      staticClass: "file-upload-input required_field",
      attrs: {
        type: "file",
        accept: "image/*"
      },
      on: {
        change: function change(event) {
          return _vm.handleFileUpload(event, "under18_probahsi", key);
        }
      }
    }), _vm._v(" "), _c("span", [_vm._v("ছবি সংযুক্ত করুন")]), _vm._v(" "), _c("br")])]) : _vm._e()])]], 2)])]);
  }), 0)]) : _vm._e(), _vm._v(" "), this.allCommonDataFirstPage.questions.check_nid_exist != 2 ? _c("button", {
    staticClass: "btn btn-primary btn-sm mr-2 mt-1",
    staticStyle: {
      "min-width": "180px"
    },
    attrs: {
      type: "button",
      id: "khotianButton"
    },
    on: {
      click: function click($event) {
        return _vm.addApplicantCitizens();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" গ্রহীতার তথ্য সংযুক্ত করুন\n                        ")]) : _vm._e(), _vm._v(" "), this.allCommonDataFirstPage.questions.check_nid_exist == 2 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 text-center"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-sm mr-2 mt-1",
    staticStyle: {
      "min-width": "180px"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.addApplicantCitizens();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v("  NID এর ভিত্তিতে গ্রহীতার তথ্য সংযুক্ত করুন\n                                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm mr-2 mt-1",
    staticStyle: {
      "min-width": "180px",
      background: "yellow",
      color: "black"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.withoutNidVerifyaddApplicantCitizens();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" NID ব্যতীত গ্রহীতার তথ্য সংযুক্ত করুন\n                                ")])])]) : _vm._e()])])]), _vm._v(" "), _c("div", [_c("b-modal", {
    ref: "my-modal",
    attrs: {
      "no-close-on-backdrop": "",
      size: "lg",
      "hide-footer": "",
      title: "আবেদনকারী / গ্রহীতার তথ্য"
    }
  }, [this.nidProcessing ? _c("div", {}, [this.verifyNidButtonSpinner ? _c("div", [_c("div", {
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
    staticStyle: {
      margin: "auto",
      display: "block"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [this.nid_verification_message_error ? _c("div", {
    staticClass: "col-12 text-center",
    staticStyle: {
      color: "red",
      "font-size": "14px"
    }
  }, [_c("p", [_vm._v("জাতীয় পরিচয় পত্রের ভেরিফাই সফল হয় নাই ")])]) : _vm._e(), _vm._v(" "), this.nid_verification_message_success ? _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center",
    staticStyle: {
      color: "green",
      "font-size": "14px"
    }
  }, [_c("p", [_vm._v("জাতীয় পরিচয় পত্রের ভেরিফাই সফল হয়েছে ")])]), _vm._v(" "), _c("div", {
    staticClass: "row col-12"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-5"
  }, [this.nid_image ? _c("div", {
    staticClass: "nid-image"
  }, [_c("img", {
    staticClass: "rounded-circle",
    staticStyle: {
      width: "130px!important",
      height: "130px!important"
    },
    attrs: {
      src: "data:image/png;base64,".concat(this.nid_image)
    }
  })]) : _c("div", [_c("div", {
    staticClass: "spinner-border text-primary",
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
  }, [_vm._v("\n                                                        নাম\n                                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v("\n                                                        : " + _vm._s(this.citizenData.nid_name) + "\n                                                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v("\n                                                        পিতার নাম\n                                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v("\n                                                        : " + _vm._s(this.citizenData.nid_father_name) + "\n                                                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v("\n                                                        মাতার নাম\n                                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v("\n                                                        : " + _vm._s(this.citizenData.nid_mother_name) + "\n                                                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v("\n                                                        লিঙ্গ\n                                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v("\n                                                        : " + _vm._s(this.nid_gender) + "\n                                                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v("\n                                                        ঠিকানা\n                                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v("\n                                                        : " + _vm._s(this.citizenData.nid_address) + "\n                                                    ")])])])])])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c("div", {
    staticClass: "col-6"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [this.nid_verification_message_success ? _c("b-button", {
    staticClass: "col-4 pull-right btn-sm",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      variant: "outline-success"
    },
    on: {
      click: _vm.grohitaAddAfterNIDVerify
    }
  }, [_vm._v("ঠিক আছে\n                                ")]) : _vm._e(), _vm._v(" "), _c("b-button", {
    staticClass: "col-4 pull-right btn-sm",
    staticStyle: {
      "margin-left": "5px"
    },
    attrs: {
      variant: "outline-danger"
    },
    on: {
      click: _vm.hideModal
    }
  }, [_vm._v("বাতিল\n                                ")])], 1)])]) : _c("div", {
    ref: "grohita_croy"
  }, [_vm.CitizenFields.owner_type == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("মালিকানার ধরন"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.owner_type,
      expression: "citizenData.owner_type"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      readonly: ""
    },
    domProps: {
      value: _vm.citizenData.owner_type
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "owner_type", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", [_vm.CitizenFields.nid == 1 ? _c("div", {
    staticClass: "row mb-2"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("জাতীয় পরিচয় পত্রের নম্বর"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(": "), _c("i", {
    staticClass: "fa fa-info-circle text-info",
    attrs: {
      title: "আপনার জাতীয় পরিচয় পত্রের নম্বরটি ১০, ১৩ কিংবা ১৭ ডিজিটের হতে হবে",
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.nid,
      expression: "citizenData.nid"
    }],
    staticClass: "form-control input_bangla nid required_field only_number place",
    attrs: {
      type: "text",
      required: "required",
      placeholder: "জাতীয় পরিচয় পত্রের নম্বর"
    },
    domProps: {
      value: _vm.citizenData.nid
    },
    on: {
      blur: _vm.nidValidationCheck,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "nid", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.dob == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("জন্মতারিখ"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("datepicker", {
    staticClass: "input_bangla_date_pick required_date_picker",
    attrs: {
      "bootstrap-styling": true,
      title: "জন্মতারিখ",
      placeholder: "জন্মতারিখ",
      "disabled-dates": _vm.disabledDates,
      format: _vm.customDateFormat
    },
    model: {
      value: _vm.citizenData.dob,
      callback: function callback($$v) {
        _vm.$set(_vm.citizenData, "dob", $$v);
      },
      expression: "citizenData.dob"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.company_name == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("প্রতিষ্ঠানের নাম"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.company_name,
      expression: "citizenData.company_name"
    }],
    staticClass: "form-control input_bangla required_field",
    attrs: {
      type: "text",
      placeholder: "প্রতিষ্ঠানের নাম"
    },
    domProps: {
      value: _vm.citizenData.company_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "company_name", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.representative == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("প্রতিনিধিত্বকারীর নাম "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.representative,
      expression: "citizenData.representative"
    }],
    staticClass: "form-control input_bangla required_field",
    attrs: {
      type: "text",
      placeholder: "প্রতিনিধির নাম"
    },
    domProps: {
      value: _vm.citizenData.representative
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "representative", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.mobile == 1 ? _c("div", {
    staticClass: "row mb-2"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("মোবাইল নম্বর"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.mobile,
      expression: "citizenData.mobile"
    }],
    staticClass: "form-control input_bangla required_field mobile_bn",
    attrs: {
      type: "text",
      placeholder: "মোবাইল নম্বর"
    },
    domProps: {
      value: _vm.citizenData.mobile
    },
    on: {
      blur: _vm.checkValueRequiredMobile,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "mobile", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.email == 1 ? _c("div", {
    staticClass: "row mb-2"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("ইমেইল")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.email,
      expression: "citizenData.email"
    }],
    staticClass: "form-control email_validate email",
    attrs: {
      type: "text",
      placeholder: "ইমেইল"
    },
    domProps: {
      value: _vm.citizenData.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "email", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.designation == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("পদবি"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.designation,
      expression: "citizenData.designation"
    }],
    staticClass: "form-control input_bangla required_field",
    attrs: {
      type: "text",
      placeholder: "পদবি"
    },
    domProps: {
      value: _vm.citizenData.designation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "designation", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.rjsc == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("RJSC নিবন্ধন নম্বর"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.rjsc,
      expression: "citizenData.rjsc"
    }],
    staticClass: "form-control p-1 required_field",
    attrs: {
      type: "text",
      placeholder: "RJSC রেজিট্রেশন নং"
    },
    domProps: {
      value: _vm.citizenData.rjsc
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "rjsc", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.incorporation_date == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("ইনকর্পোরেশনের তারিখ:")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("datepicker", {
    staticClass: "input_bangla_date_pick",
    attrs: {
      "bootstrap-styling": true,
      title: "ইনকর্পোরেশনের তারিখ",
      placeholder: "তারিখ",
      format: _vm.customDateFormat
    },
    model: {
      value: _vm.citizenData.incorporation_date,
      callback: function callback($$v) {
        _vm.$set(_vm.citizenData, "incorporation_date", $$v);
      },
      expression: "citizenData.incorporation_date"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.etin_number == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("eTIN নম্বর:\n                                    "), _vm.citizenData.owner_type_id == 12 ? _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.etin_number,
      expression: "citizenData.etin_number"
    }],
    staticClass: "form-control p-1",
    "class": _vm.citizenData.owner_type_id == 12 ? "required_field" : "",
    attrs: {
      type: "text",
      placeholder: "eTIN নম্বর"
    },
    domProps: {
      value: _vm.citizenData.etin_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "etin_number", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star",
    attrs: {
      "for": "division_id"
    }
  }, [_vm._v("বিভাগ"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.division_id,
      expression: "citizenData.division_id"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    attrs: {
      id: "division_id",
      name: "division_id",
      placeholder: "বিভাগ"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.citizenData, "division_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function (event) {
        return _vm.getDistricts(event);
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("বিভাগ")]), _vm._v(" "), _vm._l(_vm.divisions, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: index
      }
    }, [_vm._v("\n                                            " + _vm._s(value) + "\n                                        ")]);
  })], 2)])]), _vm._v(" "), _vm.CitizenFields.district_id == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star",
    attrs: {
      "for": "district_id"
    }
  }, [_vm._v("জেলা"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.district_id,
      expression: "citizenData.district_id"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    attrs: {
      id: "district_id",
      placeholder: "জেলা"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.citizenData, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.onChange($event, "district_text");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("জেলা")]), _vm._v(" "), _vm._l(_vm.districts, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: index
      }
    }, [_vm._v("\n                                            " + _vm._s(value) + "\n                                        ")]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.upazila_id == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star",
    attrs: {
      "for": "upazila_id"
    }
  }, [_vm._v("উপজেলা"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.upazila_id,
      expression: "citizenData.upazila_id"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    attrs: {
      id: "upazila_id",
      placeholder: "উপজেলা"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.citizenData, "upazila_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.onChange($event, "upazila_text");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("উপজেলা")]), _vm._v(" "), _vm._l(_vm.citizenData.upazilas, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: index
      }
    }, [_vm._v(_vm._s(value) + "\n                                        ")]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _vm.CitizenFields.address == 1 ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("নিবন্ধিত  ঠিকানা:")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.address,
      expression: "citizenData.address"
    }],
    staticClass: "form-control input_bangla",
    attrs: {
      type: "text",
      placeholder: "ঠিকানা"
    },
    domProps: {
      value: _vm.citizenData.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "address", $event.target.value);
      }
    }
  })])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12",
    staticStyle: {
      display: "none",
      color: "red"
    },
    attrs: {
      id: "nid_exist"
    }
  }, [_vm._v("আপনার দেয়া এনআইডি দিয়ে তথ্য দেয়া হয়েছে অন্য নম্বর দিয়ে চেষ্টা করুন ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12",
    staticStyle: {
      display: "none",
      color: "red"
    },
    attrs: {
      id: "company_exist"
    }
  }, [_vm._v("আপনার দেয়া প্রতিষ্ঠানের নাম দিয়ে তথ্য দেয়া হয়েছে অন্য নাম দিয়ে চেষ্টা করুন ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.nid_invalid,
      expression: "nid_invalid"
    }],
    staticClass: "col-md-12"
  }, [_vm._v("এনআইডি ভেরিফিকেশন সফল হয়নাই। দোয়া করে সঠিক ডাটা প্রদান করুন। ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 text-center"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("b-button", {
    staticClass: "col-2 btn-sm",
    attrs: {
      variant: "outline-danger"
    },
    on: {
      click: _vm.hideModal
    }
  }, [_vm._v("বাতিল\n                                        ")]), _vm._v(" "), _c("b-button", {
    staticClass: "col-2 btn-sm",
    attrs: {
      variant: "outline-success"
    },
    on: {
      click: function click($event) {
        return _vm.grohitaAddWithoutNIDVerify();
      }
    }
  }, [_vm._v("দাখিল\n                                        ")])], 1)])])])])]), _vm._v(" "), _c("b-modal", {
    ref: "without-nid-my-modal",
    attrs: {
      "no-close-on-backdrop": "",
      size: "lg",
      "hide-footer": "",
      title: _vm.under_18_or_probashi == "under_18" ? "আবেদনকারী / গ্রহীতার তথ্য (অপ্রাপ্ত বয়স্ক)" : _vm.under_18_or_probashi == "probashi" ? "আবেদনকারী / গ্রহীতার তথ্য (প্রবাসী)" : "আবেদনকারী / গ্রহীতার তথ্য"
    }
  }, [_c("div", {
    ref: "without_nid_grohita_croy_probashi"
  }, [_vm.under_18_or_probashi == "" ? _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [!_vm.active_under_18 ? _c("div", {
    staticClass: "form-check-inline"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [!_vm.active_under_18 ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.under_18_or_probashi,
      expression: "under_18_or_probashi"
    }],
    staticClass: "form-check-input",
    "class": _vm.active_under_18,
    attrs: {
      type: "radio",
      disabled: _vm.active_under_18,
      name: "age_other_country"
    },
    domProps: {
      value: "under_18",
      checked: _vm._q(_vm.under_18_or_probashi, "under_18")
    },
    on: {
      change: function change($event) {
        _vm.under_18_or_probashi = "under_18";
      }
    }
  }) : _vm._e(), _vm._v("অপ্রাপ্ত বয়স্ক\n                                ")])]) : _vm._e(), _vm._v(" "), !_vm.active_probashi ? _c("div", {
    staticClass: "form-check-inline"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [!_vm.active_probashi ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.under_18_or_probashi,
      expression: "under_18_or_probashi"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      disabled: _vm.active_probashi,
      name: "age_other_country"
    },
    domProps: {
      value: "probashi",
      checked: _vm._q(_vm.under_18_or_probashi, "probashi")
    },
    on: {
      change: function change($event) {
        _vm.under_18_or_probashi = "probashi";
      }
    }
  }) : _vm._e(), _vm._v("প্রবাসী\n                                ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.under_18_or_probashi == "under_18" || _vm.under_18_or_probashi == "probashi" ? _c("div", [_c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("জন্মতারিখ"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("datepicker", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "input_bangla_date_pick required_date_picker",
    attrs: {
      "bootstrap-styling": true,
      title: "জন্মতারিখ",
      name: "dob",
      placeholder: "জন্মতারিখ",
      "disabled-dates": _vm.disabledDates,
      format: _vm.customDateFormat
    },
    on: {
      input: _vm.chek18Years
    },
    model: {
      value: _vm.citizenData.dob,
      callback: function callback($$v) {
        _vm.$set(_vm.citizenData, "dob", $$v);
      },
      expression: "citizenData.dob"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("dob")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("জন্ম-নিবন্ধন নম্বর"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(": "), _c("i", {
    staticClass: "fa fa-info-circle text-info",
    attrs: {
      title: "জন্ম-নিবন্ধন নম্বর",
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.birth_reg_number,
      expression: "citizenData.birth_reg_number"
    }],
    staticClass: "form-control input_bangla nid required_field",
    attrs: {
      name: "birth_reg_number",
      type: "text",
      required: "required",
      placeholder: "জন্ম-নিবন্ধন নম্বর"
    },
    domProps: {
      value: _vm.citizenData.birth_reg_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "birth_reg_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("birth_reg_number")))])])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("আবেদনকারীর নাম "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.applicant_name,
      expression: "citizenData.applicant_name"
    }],
    staticClass: "form-control input_bangla required_field red-bordered",
    attrs: {
      type: "text",
      placeholder: "আবেদনকারীর নাম",
      name: "applicant_name"
    },
    domProps: {
      value: _vm.citizenData.applicant_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "applicant_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("applicant_name")))])])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("পিতার নাম "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.nid_father_name,
      expression: "citizenData.nid_father_name"
    }],
    staticClass: "form-control input_bangla required_field red-bordered",
    attrs: {
      type: "text",
      placeholder: "পিতার নাম",
      name: "nid_father_name"
    },
    domProps: {
      value: _vm.citizenData.nid_father_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "nid_father_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nid_father_name")))])])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("মাতার নাম "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.nid_mother_name,
      expression: "citizenData.nid_mother_name"
    }],
    staticClass: "form-control input_bangla required_field red-bordered",
    attrs: {
      type: "text",
      placeholder: "মাতার নাম",
      name: "nid_mother_name"
    },
    domProps: {
      value: _vm.citizenData.nid_mother_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "nid_mother_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nid_mother_name")))])])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("মোবাইল নম্বর"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|digits:11",
      expression: "'required|digits:11'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.mobile,
      expression: "citizenData.mobile"
    }],
    staticClass: "form-control input_bangla required_field mobile_bn",
    attrs: {
      type: "text",
      name: "mobile",
      placeholder: "মোবাইল নম্বর"
    },
    domProps: {
      value: _vm.citizenData.mobile
    },
    on: {
      blur: _vm.checkValueRequiredMobile,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "mobile", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("mobile")))])])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("ইমেইল")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.email,
      expression: "citizenData.email"
    }],
    staticClass: "form-control email_validate email",
    attrs: {
      type: "text",
      placeholder: "ইমেইল"
    },
    domProps: {
      value: _vm.citizenData.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star",
    attrs: {
      "for": "division_id"
    }
  }, [_vm._v("বিভাগ"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.division_id,
      expression: "citizenData.division_id"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    attrs: {
      id: "division_id",
      name: "division_id",
      placeholder: "বিভাগ"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.citizenData, "division_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function (event) {
        return _vm.getDistricts(event);
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("বিভাগ")]), _vm._v(" "), _vm._l(_vm.divisions, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: index
      }
    }, [_vm._v("\n                                            " + _vm._s(value) + "\n                                        ")]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("division_id")))])])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star",
    attrs: {
      "for": "district_id"
    }
  }, [_vm._v("জেলা"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.district_id,
      expression: "citizenData.district_id"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    attrs: {
      id: "district_id",
      name: "district_id",
      placeholder: "জেলা"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.citizenData, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.onChange($event, "district_text");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("জেলা")]), _vm._v(" "), _vm._l(_vm.districts, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: index
      }
    }, [_vm._v("\n                                            " + _vm._s(value) + "\n                                        ")]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("district_id")))])])]), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star",
    attrs: {
      "for": "upazila_id"
    }
  }, [_vm._v("উপজেলা"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.upazila_id,
      expression: "citizenData.upazila_id"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    attrs: {
      id: "upazila_id",
      name: "upazila_id",
      placeholder: "উপজেলা"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.citizenData, "upazila_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.onChange($event, "upazila_text");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("উপজেলা")]), _vm._v(" "), _vm._l(_vm.citizenData.upazilas, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: index
      }
    }, [_vm._v(_vm._s(value) + "\n                                        ")]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("upazila_id")))])])]), _vm._v(" "), _vm.under_18_or_probashi == "under_18" ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("  অভিভাবকের তথ্য"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(": "), _c("i", {
    staticClass: "fa fa-info-circle text-info",
    attrs: {
      title: "অভিভাবকের নাম, ঠিকানা এবং মোবাইল নম্বর দিন",
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: _vm.under_18_or_probashi == "under_18" ? "required" : "",
      expression: "under_18_or_probashi=='under_18'?'required':''"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.guardian,
      expression: "citizenData.guardian"
    }],
    staticClass: "form-control input_bangla",
    attrs: {
      placeholder: " অভিভাবকের তথ্য",
      name: "guardian"
    },
    domProps: {
      value: _vm.citizenData.guardian
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "guardian", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("guardian")))])])]) : _vm._e(), _vm._v(" "), _vm.under_18_or_probashi == "probashi" ? _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v("  স্থানীয় প্রতিনিধি"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(": "), _c("i", {
    staticClass: "fa fa-info-circle text-info",
    attrs: {
      title: "স্থানীয় প্রতিনিধির নাম, ঠিকানা এবং মোবাইল নম্বর দিন",
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: _vm.under_18_or_probashi == "probashi" ? "required" : "",
      expression: "under_18_or_probashi=='probashi'?'required':''"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.local_representative,
      expression: "citizenData.local_representative"
    }],
    staticClass: "form-control input_bangla",
    attrs: {
      placeholder: " স্থানীয় প্রতিনিধি",
      name: "local_representative"
    },
    domProps: {
      value: _vm.citizenData.local_representative
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "local_representative", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("local_representative")))])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row form-group"
  }, [_c("label", {
    staticClass: "col-md-4 required-star"
  }, [_vm._v(" ঠিকানা"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(":")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.citizenData.address,
      expression: "citizenData.address"
    }],
    staticClass: "form-control input_bangla",
    attrs: {
      type: "text",
      placeholder: "ঠিকানা",
      name: "address"
    },
    domProps: {
      value: _vm.citizenData.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.citizenData, "address", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("address")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 text-center"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("b-button", {
    staticClass: "col-2 btn-sm",
    attrs: {
      variant: "outline-danger"
    },
    on: {
      click: _vm.hideModal
    }
  }, [_vm._v("বাতিল\n                                        ")]), _vm._v(" "), _c("b-button", {
    staticClass: "col-2 btn-sm",
    attrs: {
      variant: "outline-success"
    },
    on: {
      click: function click($event) {
        return _vm.grohitaAddWithoutNIDVerifyUnderEgihtyProbashi($event);
      }
    }
  }, [_vm._v("দাখিল\n                                        ")])], 1)])])]) : _vm._e()])]), _vm._v(" "), _c("b-modal", {
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
  }, [_vm._v("বাতিল\n                            ")])], 1)])])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "landinfo-title have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-number"
  }, [_vm._v("২.১")]), _vm._v(" "), _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("বাদী/গ্রহীতার তথ্য")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_vm._v("জন্ম তারিখ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 text-right"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/landinfo_croy.vue?vue&type=template&id=ad8b28c2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/landinfo_croy.vue?vue&type=template&id=ad8b28c2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
      }, [typeof childData.is_readable != "undefined" && childData.is_readable != 1 ? _c("button", {
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
      })]) : _vm._e()]) : _vm._e(), _vm._v(" "), childData.if_dag == 0 && childData.if_main != 1 ? _c("div", {
        staticClass: "landinfo-col"
      }, [typeof childData.is_readable != "undefined" && childData.is_readable != 1 ? _c("button", {
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
      })]) : _vm._e()]) : _vm._e(), _vm._v(" "), key != 0 && childData.if_main == 1 ? _c("div", {
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
        staticClass: "form-control lmt-select required_field input_bangla",
        staticStyle: {
          "font-size": "13px !important",
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
      }, _vm._l(_vm.khatian_list, function (item) {
        return _c("option", {
          key: item.id,
          domProps: {
            value: item.id
          }
        }, [_vm._v(_vm._s(item.data))]);
      }), 0) : _vm._e()])]) : _vm._e(), _vm._v(" "), childData.if_main == 1 ? _c("div", {
        staticClass: "landinfo-col"
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
        staticClass: "form-control input_bangla li_khation_num red-bordered required_field",
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
          change: function change(event) {
            return _vm.visibleDagKhotianButton(event);
          },
          blur: function blur(event) {
            return _vm.nonSpclDagKha(event, "khatian", key, childKey);
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
      }, [_vm._v(" খতিয়ান নং দিন ")]), _vm._v(" "), !childData.loading_icon ? _c("div", {
        staticClass: "input-group-append"
      }, [_c("button", {
        staticClass: "btn btn-success",
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.verifyKhatian(childData.khatian_no, key, childKey);
          }
        }
      }, [_vm._v("ভেরিফাই")])]) : _vm._e(), _vm._v(" "), childData.loading_icon ? _c("div", {
        staticClass: "spinner-border text-primary",
        staticStyle: {
          "margin-right": "3px"
        },
        attrs: {
          role: "status"
        }
      }, [_c("span", {
        staticClass: "sr-only"
      }, [_vm._v("Loading...")])]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), childData.if_main == 1 || childData.if_dag == 1 ? _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_vm._m(2, true), _vm._v(" "), (data.if_main == 1 || childData.if_dag == 1) && childData.daglist.length == 0 ? _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.dag_no,
          expression: "childData.dag_no"
        }],
        staticClass: "form-control input_bangla red-bordered required_field",
        attrs: _defineProperty({
          type: "text",
          title: "দাগ নং (বাটা দাগের জন্য '/' ব্যবহার করুন)",
          id: "dag_no_" + key + childKey,
          disabled: childData.dag_flag == 0,
          placeholder: ""
        }, "placeholder", "দাগ নং"),
        domProps: {
          value: childData.dag_no
        },
        on: {
          blur: function blur(event) {
            return _vm.nonSpclDagKha(event, "dag", key, childKey);
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(childData, "dag_no", $event.target.value);
          }
        }
      }) : _vm._e(), _vm._v(" "), (data.if_main == 1 || childData.if_dag == 1) && childData.daglist.length > 0 ? _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.dag_no,
          expression: "childData.dag_no"
        }],
        staticClass: "form-control required_field input_bangla",
        attrs: {
          id: "dag_no_" + key + childKey
        },
        on: {
          change: [function ($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
              return o.selected;
            }).map(function (o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(childData, "dag_no", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }, function (event) {
            return _vm.showPortion(key, childKey, event);
          }]
        }
      }, _vm._l(childData.daglist, function (item) {
        return _c("option", {
          key: item.id,
          attrs: {
            jomir_portion: item.portion
          },
          domProps: {
            value: item.data
          }
        }, [_vm._v("\n                                        " + _vm._s(item.data) + "\n                                    ")]);
      }), 0) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "invalid-feedback"
      }, [_vm._v("দাগ নং দিতে হবে")])])]) : _vm._e(), _vm._v(" "), childData.if_main == 1 || childData.if_dag == 1 ? _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_vm._m(3, true), _vm._v(" "), _c("div", {
        staticClass: "landinfo-acor"
      }, [childData.if_main == 1 || childData.if_dag == 1 ? _c("input", {
        staticClass: "acor-text form-control",
        attrs: {
          type: "text",
          disabled: "disabled",
          readonly: "readonly",
          id: "land_amount_type_id_" + key + childKey,
          value: "একর",
          placeholder: "একর"
        }
      }) : _vm._e(), _vm._v(" "), childData.if_main == 1 || childData.if_dag == 1 ? _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.amount_of_land,
          expression: "childData.amount_of_land"
        }],
        staticClass: "form-control acor-amount input_bangla red-bordered required_field",
        attrs: {
          type: "text",
          placeholder: "জমির পরিমাণ",
          title: "জমির পরিমাণ",
          id: "amount_of_land_" + key + childKey,
          disabled: childData.amount_of_land_flag == 0,
          oninput: "if(this.value < 0) this.value = '';"
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
      }) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "invalid-feedback"
      }, [_vm._v("জমির পরিমাণ দিন")])])]), _vm._v(" "), childData.korton_krito_jomir_poriman_txt ? _c("span", {
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
      }, [_c("label", [_vm._v("দলিল নং"), !_vm.checkDoiliInfoRequried ? _c("span", {
        staticClass: "required"
      }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), childData.if_main == 1 ? _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.dalil_no,
          expression: "childData.dalil_no"
        }],
        staticClass: "form-control input_bangla",
        "class": !_vm.checkDoiliInfoRequried ? "red-bordered required_field" : "",
        attrs: {
          type: "text",
          title: "দলিল নং",
          readonly: _vm.$store.state.firstPageCommonData.form_type == 4 && typeof childData.is_readable != "undefined" && childData.is_readable == 1 ? true : false,
          disabled: childData.dalil_no_flag == 0,
          placeholder: "দলিল নং",
          id: "dalil_no_" + key + childKey
        },
        domProps: {
          value: childData.dalil_no
        },
        on: {
          blur: function blur($event) {
            return _vm.checkDolilInfo(childData, key, childKey);
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(childData, "dalil_no", $event.target.value);
          }
        }
      }) : _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.dalil_no,
          expression: "childData.dalil_no"
        }],
        staticClass: "form-control input_bangla",
        "class": !_vm.checkDoiliInfoRequried ? "red-bordered required_field" : "",
        attrs: {
          type: "text",
          title: "দলিল নং",
          disabled: childData.dalil_no_flag == 0,
          readonly: _vm.$store.state.firstPageCommonData.form_type == 4 && typeof childData.is_readable != "undefined" && childData.is_readable == 1 ? true : false,
          placeholder: "দলিল নং",
          id: "dalil_no_" + key + childKey
        },
        domProps: {
          value: childData.dalil_no
        },
        on: {
          blur: function blur($event) {
            return _vm.checkDolilInfo(childData, key, childKey);
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(childData, "dalil_no", $event.target.value);
          }
        }
      })])]), _vm._v(" "), _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_c("label", [_vm._v("দলিল তারিখ"), !_vm.checkDoiliInfoRequried ? _c("span", {
        staticClass: "required"
      }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "vdp-datepicker input_bangla_date_pick",
        "class": !_vm.checkDoiliInfoRequried ? "required_date_picker" : "",
        attrs: {
          title: "দলিল তারিখ"
        }
      }, [childData.if_main == 1 ? _c("datepicker", {
        staticClass: "input_bangla_date_pick",
        "class": !_vm.checkDoiliInfoRequried ? "required_date_picker" : "",
        attrs: {
          disabled: childData.dalil_date_flag == 0 || typeof childData.is_readable != "undefined" && childData.is_readable == 1,
          readonly: _vm.$store.state.firstPageCommonData.form_type == 4 && typeof childData.is_readable != "undefined" && childData.is_readable == 1 ? true : false,
          "bootstrap-styling": true,
          title: "দলিল তারিখ",
          id: "dalil_date_" + key + childKey,
          format: _vm.customDateFormat(childData.dalil_date, "DD/MM/YYYY"),
          "disabled-dates": _vm.disabledDates,
          placeholder: ""
        },
        on: {
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
      }) : _c("datepicker", {
        staticClass: "input_bangla_date_pick",
        attrs: {
          disabled: childData.dalil_date_flag == 0 || typeof childData.is_readable != "undefined" && childData.is_readable == 1,
          "bootstrap-styling": true,
          title: "দলিল তারিখ",
          id: "dalil_date_" + key + childKey,
          format: _vm.customDateFormat(childData.dalil_date, "DD/MM/YYYY"),
          "disabled-dates": _vm.disabledDates,
          placeholder: ""
        },
        on: {
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
      }, [_vm._v("দলিল তারিখ দিন")])], 1)])])]), _vm._v(" "), _c("div", {
        staticClass: "landinfo-row"
      }, [_c("div", {
        staticClass: "landinfo-col-2x"
      }, [childData.if_dalil != 1 && childData.portion != "" && childData.agoto_khatian_jomir_poriman_txt != "" ? _c("span", {
        staticClass: "text-sm mt-1 d-block"
      }, [_c("i", {
        staticClass: "input_bangla"
      }, [_vm._v("উক্ত দাগে জমির পরিমাণ: " + _vm._s(childData.agoto_khatian_jomir_poriman_txt))])]) : _vm._e(), _vm._v(" "), childData.land_record_type_id == 2 ? _c("span", {
        staticClass: "text-sm mt-1 d-block"
      }, [_c("i", [_vm._v("বি আর এস, আর এস, মহানগর")])]) : _vm._e(), _vm._v(" "), childData.is_khatian_checked ? _c("span", {
        staticClass: "text-sm mt-1 d-block"
      }, [_c("i", [_vm._v("উক্ত জমির তথ্য পাওয়া যায়নি আপনি বাকি তথ্য গুলো নিজে নিজে পূরণ করুন।")])]) : _vm._e()]), _vm._v(" "), _c("div", {
        staticClass: "landinfo-col"
      }), _vm._v(" "), _c("div", {
        staticClass: "landinfo-col"
      }, [childData.land_rate_in_mouja_is_required ? _c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_c("label", [_vm._v("দলিলে ভূমির মূল্য"), !_vm.checkDoiliInfoRequried ? _c("span", {
        staticClass: "required"
      }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.land_rate_in_mouja,
          expression: "childData.land_rate_in_mouja"
        }],
        staticClass: "form-control input_bangla",
        "class": childData.land_rate_in_mouja_is_required && !_vm.checkDoiliInfoRequried ? "red-bordered required_field" : "",
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
      }, [_c("label", [_vm._v("জেলা"), !_vm.checkDoiliInfoRequried ? _c("span", {
        staticClass: "required"
      }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.sub_reg_district_id,
          expression: "childData.sub_reg_district_id"
        }],
        staticClass: "form-control red-bordered",
        attrs: {
          disabled: _vm.$store.state.firstPageCommonData.form_type == 4 && typeof childData.is_readable != "undefined" && childData.is_readable == 1 ? true : false
        },
        on: {
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
      }, [_c("option", {
        domProps: {
          value: ""
        }
      }, [_vm._v("জেলা")]), _vm._v(" "), _vm._l(_vm.allDistrictList, function (value, index) {
        return _c("option", {
          key: index,
          domProps: _defineProperty({
            value: value.id
          }, "value", value.id)
        }, [_vm._v(_vm._s(value.name_bn))]);
      })], 2)])]), _vm._v(" "), _c("div", {
        staticClass: "landinfo-col"
      }, [_c("div", {
        staticClass: "form-group landinfo-input-block"
      }, [_c("label", [_vm._v("সাব রেজিস্টার অফিসের নাম"), !_vm.checkDoiliInfoRequried ? _c("span", {
        staticClass: "required"
      }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), childData.if_main == 1 ? _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: childData.sub_register_office_name,
          expression: "childData.sub_register_office_name"
        }],
        staticClass: "form-control",
        "class": !_vm.checkDoiliInfoRequried ? "red-bordered required_field" : "",
        attrs: {
          disabled: childData.sub_offc_flag == 0 || typeof childData.is_readable != "undefined" && childData.is_readable == 1
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
        staticClass: "form-control",
        "class": !_vm.checkDoiliInfoRequried ? "red-bordered required_field" : "",
        attrs: {
          disabled: childData.sub_offc_flag == 0 || typeof childData.is_readable != "undefined" && childData.is_readable == 1
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
    }, [_vm._m(4, true), _vm._v(" "), _c("div", {
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
        focusout: function focusout($event) {
          return _vm.checkValueExist(data.total_land_khotian, "total_land_khotian_box_" + key);
        },
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
  }, [_vm._m(5), _vm._v(" "), _c("div", {
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
  }, [_vm._v(_vm._s(_vm.totalAmountCalculate(_vm.applicationData.total_land_amount)))])])])]), _vm._v(" "), _c("div", {
    staticClass: "landinfo-col-2x text-right"
  }, [_c("div", {
    staticClass: "form-group landinfo-input-block"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button",
      disabled: _vm.khotianButton == 1,
      id: "khotianButton"
    },
    on: {
      click: function click($event) {
        return _vm.addLandSchedules("main", _vm.add_row_index);
      }
    }
  }, [_vm._v("আরও খতিয়ান সংযুক্ত করুন")])])])])])], 2)]);
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
  return _c("div", {
    staticClass: "landinfo-col-2x flex-align-center text-right"
  }, [_c("label", {
    staticClass: "mb-0 landinfo-footer-text"
  }, [_vm._v("খতিয়ানে আবেদনকৃত মোট জমির পরিমাণ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "landinfo-col-2x flex-align-center text-right"
  }, [_c("label", {
    staticClass: "mb-0 landinfo-footer-text"
  }, [_vm._v("আবেদিত মোট জমির পরিমাণ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/protinidhi.vue?vue&type=template&id=0be2f938&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/protinidhi.vue?vue&type=template&id=0be2f938& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    key: _vm.componentKey
  }, [_c("div", {
    staticClass: "px-4 protinidhi-section"
  }, [_c("div", {
    staticClass: "card border mt-3 p-0",
    staticStyle: {
      background: "#F9FFF9"
    }
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticStyle: {
      clear: "both",
      height: "20px"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive grohita"
  }, [_vm.Delegate.length > 0 ? _c("table", {
    staticClass: "table table-bordered table-striped sm-screen-sm-tbl"
  }, _vm._l(_vm.Delegate, function (data, key) {
    return _c("tbody", {
      key: key,
      staticClass: "text-center"
    }, [_c("tr", [_c("td", [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("নাম")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.nid_name,
        expression: "data.nid_name"
      }],
      staticClass: "form-control input_bangla",
      staticStyle: {
        "min-width": "180px"
      },
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: data.nid_name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "nid_name", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("জাতীয় পরিচয়পত্র")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.nid,
        expression: "data.nid"
      }],
      staticClass: "form-control input_bangla",
      staticStyle: {
        "min-width": "180px"
      },
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: data.nid
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "nid", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("জন্ম তারিখ")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.dob,
        expression: "data.dob"
      }],
      staticClass: "form-control input_bangla",
      staticStyle: {
        "min-width": "180px"
      },
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: data.dob
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "dob", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      attrs: {
        rowspan: "3"
      }
    }, [_c("div", {
      staticClass: "clear-both"
    }, [_vm._v("ছবি")]), _vm._v(" "), data.nid_photo && data.temp_img ? _c("div", {}, [_c("img", {
      staticClass: "rounded-circle",
      staticStyle: {
        width: "130px!important",
        height: "130px!important"
      },
      attrs: {
        src: "data:image/png;base64,".concat(data.temp_img)
      }
    })]) : _vm._e()])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("মোবাইল নম্বর")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.mobile,
        expression: "data.mobile"
      }],
      staticClass: "form-control input_bangla",
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: data.mobile
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "mobile", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      attrs: {
        colspan: "2"
      }
    }, [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("ঠিকানা")]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.nid_address,
        expression: "data.nid_address"
      }],
      staticClass: "form-control input_bangla",
      domProps: {
        value: data.nid_address
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "nid_address", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("tr", [_c("td", [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("ই-মেইল")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.email,
        expression: "data.email"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: data.email
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(data, "email", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("জেলা")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.district_id,
        expression: "data.district_id"
      }],
      staticClass: "form-control input_bangla red-bordered required_field",
      attrs: {
        placeholder: "জেলা"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(data, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function (event) {
          return _vm.getUpazila(event, key, "Delegate", data.district_id);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("জেলা")]), _vm._v(" "), _vm._l(_vm.allDistricts, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: value.id
        }
      }, [_vm._v("\n                                            " + _vm._s(value.name_bn) + "\n                                        ")]);
    })], 2)]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "clear-both text-left"
    }, [_vm._v("উপজেলা")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: data.upazila_id,
        expression: "data.upazila_id"
      }],
      staticClass: "form-control input_bangla red-bordered required_field",
      attrs: {
        placeholder: "উপজেলা"
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(data, "upazila_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("উপজেলা")]), _vm._v(" "), _vm._l(data.upazilas, function (value, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: index
        }
      }, [_vm._v(_vm._s(value) + "\n                                        ")]);
    })], 2)])])]);
  }), 0) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "landinfo-title have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-number"
  }, [_vm._v("২.২")]), _vm._v(" "), _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("আবেদনকারীর তথ্য (প্রতিনিধি)")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.error_message_required {\r\n    border: 1px solid red !important;\n}\n#primaryInfoBirthdate {\r\n    font-family: boishakhi !important;\r\n    font-size: 90%;\n}\n.modal-md {\r\n    max-width: 571px !important;\r\n    border-width: 0px;\r\n    position: absolute;\r\n    left: -35px;\r\n    top: 90px;\r\n    height: auto;\r\n    display: flex;\n}\n.modal-md .row {\r\n    margin-bottom: 5px !important;\n}\n.grohita > .table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: #fff !important;\n}\n.grohita > .table-bordered th, .table-bordered td {\r\n    border: 1px solid #dee2e6;\n}\n.padding-l {\r\n    padding-left: 0px !important;\n}\n.padding-r {\r\n    padding-right: 0px !important;\n}\n.grohitattl {\r\n    font-size: 14px;\n}\n.v-gap {\r\n    height: 10px;\r\n    clear: both;\n}\n.modal-lg {\r\n    max-width: 650px !important;\n}\n.image-upload-wrap-success {\r\n    border: 2px dashed #DDDDDD;\r\n    position: relative;\r\n    height: 50px;\n}\n.image-upload-wrap {\r\n    border: 2px dashed #ff0000;\r\n    position: relative;\r\n    height: 50px;\n}\n.image-upload-wrap:hover {\r\n    background-color: #f1f1f1;\r\n    border: 2px dashed #ccc;\n}\n.file-upload-input {\r\n    position: absolute;\r\n    margin: 0;\r\n    /* padding: 0; */\r\n    width: 100%;\r\n    height: 100%;\r\n    outline: none;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    display: block;\r\n    padding: 21px 0px;\n}\n.drag-text {\r\n    text-align: center;\r\n    padding: 10px 0px;\n}\n.grohita_image_box {\r\n    position: relative;\n}\n.grohita_image_box button {\r\n    position: absolute;\r\n    right: 0;\r\n    /*border-radius: 50%;*/\n}\n.nid-image img {\r\n    width:200px;height:200px;margin:auto;display:block\n}\n.landinfo-title {\r\n    padding-bottom: 10px;\n}\n.form-control::-webkit-input-placeholder {\r\n    font-size: 14px !important;\n}\r\n/*input[type=file] {*/\r\n/*    font-size: 10px;*/\r\n/*    !*padding: 0px;*!*/\r\n/*}*/\r\n\r\n/*.red-bordered{*/\r\n/*    border: 1px solid red !important;*/\r\n/*}*/\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\ntd > .vdp-datepicker > .vdp-datepicker__calendar[data-v-ad8b28c2] {\r\n    width: 250px !important;\n}\n@media only screen and (max-width: 650px) {\n.form-control[data-v-ad8b28c2] {\r\n        width: auto !important;\n}\n}\n.form-group[data-v-ad8b28c2] {\r\n    margin-bottom: 5px !important;\n}\n.mt-3[data-v-ad8b28c2], .my-3[data-v-ad8b28c2] {\r\n    margin-top: 5px !important;\n}\n.container_disable_box label[data-v-ad8b28c2] {\r\n    font-size: 13px !important;\n}\n.base_font_size[data-v-ad8b28c2] {\r\n    font-size: 12px !important;\n}\n.error_message_required[data-v-ad8b28c2] {\r\n    border: 1px solid red !important;\n}\n@media screen and (min-width: 958px) {\n.custome-responsive[data-v-ad8b28c2]{\r\n        display: flex;\r\n        flex-flow: column;\r\n        width: 100%;\n}\n}\n[data-v-ad8b28c2]::-moz-placeholder{\r\n    font-size: 10px !important;\n}\n[data-v-ad8b28c2]::placeholder{\r\n    font-size: 10px !important;\n}\n.acor-amount[data-v-ad8b28c2]::-moz-placeholder{\r\n    font-size: 12px !important;\n}\n.acor-amount[data-v-ad8b28c2]::placeholder{\r\n    font-size: 12px !important;\n}\n.vdp-datepicker.input-group input[data-v-ad8b28c2]::-moz-placeholder{\r\n    color: red !important;\n}\n.vdp-datepicker.input-group input[data-v-ad8b28c2]::placeholder{\r\n    color: red !important;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n#primaryInfoBirthdate {\n    font-family: boishakhi !important;\n    font-size: 90%;\n}\n.modal-md {\n    max-width: 571px !important;\n    border-width: 0px;\n    position: absolute;\n    left: -35px;\n    top: 90px;\n    height: auto;\n    display: flex;\n}\n.modal-md .row {\n    margin-bottom: 5px !important;\n}\n.grohita > .table-striped tbody tr:nth-of-type(odd) {\n    background-color: #fff !important;\n}\n.grohita > .table-bordered th, .table-bordered td {\n    border: 1px solid #dee2e6;\n}\n.padding-l {\n    padding-left: 0px !important;\n}\n.padding-r {\n    padding-right: 0px !important;\n}\n.grohitattl {\n    font-size: 14px;\n}\n.v-gap {\n    height: 10px;\n    clear: both;\n}\n.input_bangla {\n    font-family: boishakhi !important;\n    font-size: 14px !important;\n    padding: 3px !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css&");

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

/***/ "./resources/js/components/Form/grohita_croy.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Form/grohita_croy.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grohita_croy_vue_vue_type_template_id_87b31e94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grohita_croy.vue?vue&type=template&id=87b31e94& */ "./resources/js/components/Form/grohita_croy.vue?vue&type=template&id=87b31e94&");
/* harmony import */ var _grohita_croy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grohita_croy.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/grohita_croy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _grohita_croy_vue_vue_type_style_index_0_id_87b31e94_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css& */ "./resources/js/components/Form/grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _grohita_croy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _grohita_croy_vue_vue_type_template_id_87b31e94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _grohita_croy_vue_vue_type_template_id_87b31e94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/grohita_croy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/grohita_croy.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Form/grohita_croy.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./grohita_croy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/grohita_croy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Form/grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_style_index_0_id_87b31e94_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/grohita_croy.vue?vue&type=style&index=0&id=87b31e94&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_style_index_0_id_87b31e94_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_style_index_0_id_87b31e94_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_style_index_0_id_87b31e94_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_style_index_0_id_87b31e94_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Form/grohita_croy.vue?vue&type=template&id=87b31e94&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Form/grohita_croy.vue?vue&type=template&id=87b31e94& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_template_id_87b31e94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./grohita_croy.vue?vue&type=template&id=87b31e94& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/grohita_croy.vue?vue&type=template&id=87b31e94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_template_id_87b31e94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_grohita_croy_vue_vue_type_template_id_87b31e94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Form/landinfo_croy.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Form/landinfo_croy.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landinfo_croy_vue_vue_type_template_id_ad8b28c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landinfo_croy.vue?vue&type=template&id=ad8b28c2&scoped=true& */ "./resources/js/components/Form/landinfo_croy.vue?vue&type=template&id=ad8b28c2&scoped=true&");
/* harmony import */ var _landinfo_croy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landinfo_croy.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/landinfo_croy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _landinfo_croy_vue_vue_type_style_index_0_id_ad8b28c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css& */ "./resources/js/components/Form/landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _landinfo_croy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _landinfo_croy_vue_vue_type_template_id_ad8b28c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _landinfo_croy_vue_vue_type_template_id_ad8b28c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ad8b28c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/landinfo_croy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/landinfo_croy.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Form/landinfo_croy.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./landinfo_croy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/landinfo_croy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Form/landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_style_index_0_id_ad8b28c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/landinfo_croy.vue?vue&type=style&index=0&id=ad8b28c2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_style_index_0_id_ad8b28c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_style_index_0_id_ad8b28c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_style_index_0_id_ad8b28c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_style_index_0_id_ad8b28c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Form/landinfo_croy.vue?vue&type=template&id=ad8b28c2&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Form/landinfo_croy.vue?vue&type=template&id=ad8b28c2&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_template_id_ad8b28c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./landinfo_croy.vue?vue&type=template&id=ad8b28c2&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/landinfo_croy.vue?vue&type=template&id=ad8b28c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_template_id_ad8b28c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_landinfo_croy_vue_vue_type_template_id_ad8b28c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Form/protinidhi.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Form/protinidhi.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _protinidhi_vue_vue_type_template_id_0be2f938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protinidhi.vue?vue&type=template&id=0be2f938& */ "./resources/js/components/Form/protinidhi.vue?vue&type=template&id=0be2f938&");
/* harmony import */ var _protinidhi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protinidhi.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/protinidhi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _protinidhi_vue_vue_type_style_index_0_id_0be2f938_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css& */ "./resources/js/components/Form/protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _protinidhi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _protinidhi_vue_vue_type_template_id_0be2f938___WEBPACK_IMPORTED_MODULE_0__["render"],
  _protinidhi_vue_vue_type_template_id_0be2f938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/protinidhi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/protinidhi.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Form/protinidhi.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./protinidhi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/protinidhi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Form/protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_style_index_0_id_0be2f938_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/protinidhi.vue?vue&type=style&index=0&id=0be2f938&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_style_index_0_id_0be2f938_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_style_index_0_id_0be2f938_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_style_index_0_id_0be2f938_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_style_index_0_id_0be2f938_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Form/protinidhi.vue?vue&type=template&id=0be2f938&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Form/protinidhi.vue?vue&type=template&id=0be2f938& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_template_id_0be2f938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./protinidhi.vue?vue&type=template&id=0be2f938& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/protinidhi.vue?vue&type=template&id=0be2f938&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_template_id_0be2f938___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_protinidhi_vue_vue_type_template_id_0be2f938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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