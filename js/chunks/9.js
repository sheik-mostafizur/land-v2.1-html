(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "area-info",
  props: ['divisions', 'applicationData', 'districts', 'upazilas', 'select2Mouja'],
  components: {
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_0__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])),
  data: function data() {
    return {
      nid_no_error_one: false,
      dob_error_one: false,
      nid_no_error_two: false,
      dob_error_two: false,
      owner_type_error: false,
      JSONString: '',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      apiBaseURL: "http://localhost:8000/api",
      verifyNidButtonSpinner: false,
      nid_verification_message_success: false,
      nid_verification_message_error: false,
      verifyNidButton: true,
      citizen: [{
        "nid": false,
        "dob": false,
        "mobile": false,
        "company_name": false,
        "representative": false,
        "address": false,
        "rjsc": false,
        "incorporation_date": false,
        "designation": false
      }, {
        "nid": true,
        "dob": true,
        "mobile": true,
        "company_name": false,
        "representative": false,
        "address": false,
        "rjsc": false,
        "incorporation_date": false,
        "designation": false
      }, {
        "nid": false,
        "dob": false,
        "mobile": true,
        "company_name": true,
        "representative": true,
        "address": true,
        "rjsc": false,
        "incorporation_date": false,
        "designation": false
      }, {
        "nid": true,
        "dob": true,
        "mobile": true,
        "company_name": false,
        "representative": false,
        "address": false,
        "rjsc": false,
        "incorporation_date": false,
        "designation": false
      }, {
        "nid": false,
        "dob": false,
        "mobile": true,
        "company_name": true,
        "representative": true,
        "address": true,
        "rjsc": false,
        "incorporation_date": false,
        "designation": false
      }, {
        "nid": false,
        "dob": false,
        "mobile": true,
        "company_name": true,
        "representative": true,
        "address": true,
        "rjsc": true,
        "incorporation_date": true,
        "designation": true
      }, {
        "nid": false,
        "dob": false,
        "mobile": true,
        "company_name": true,
        "representative": true,
        "address": true,
        "rjsc": false,
        "incorporation_date": false,
        "designation": false
      }, {
        "nid": false,
        "dob": false,
        "mobile": true,
        "company_name": true,
        "representative": true,
        "address": true,
        "rjsc": true,
        "incorporation_date": true,
        "designation": true
      }, {
        "nid": false,
        "dob": false,
        "mobile": true,
        "company_name": true,
        "representative": true,
        "address": true,
        "rjsc": false,
        "incorporation_date": false,
        "designation": true
      }, {
        "nid": true,
        "dob": true,
        "mobile": true,
        "company_name": false,
        "representative": false,
        "address": false,
        "rjsc": false,
        "incorporation_date": false,
        "designation": false
      }, {
        "nid": true,
        "dob": true,
        "mobile": true,
        "company_name": false,
        "representative": false,
        "address": false,
        "rjsc": false,
        "incorporation_date": false,
        "designation": false
      }, {
        "nid": true,
        "dob": true,
        "mobile": true,
        "company_name": false,
        "representative": false,
        "address": false,
        "rjsc": false,
        "incorporation_date": false,
        "designation": false
      }],
      CitizenFields: {
        nid: false,
        dob: false,
        mobile: false,
        company_name: false,
        representative: false,
        address: false,
        rjsc: false,
        incorporation_date: false,
        designation: false
      },
      nid: '',
      dob: '',
      disabledDates: {
        from: new Date(Date.now())
      },
      tempCount: 0
    };
  },
  mounted: function mounted() {},
  created: function created() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.red-bordered').on("focusout", function () {
      var val = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).val();
      var data = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr('placeholder');
      var err = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).next().hasClass('error-msg');
      if (val == '' && err == false) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).parent().attr('style', 'background:red;');
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).after('<div class="ml-2 error-msg" style="font-size: 17px;color:white;font-weight: bold;">' + data + '</div>');
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.red-bordered').on("input", function () {
      var val = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).val();
      if (val !== '') jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).parent().removeAttr('style');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).next().remove();
    });
  },
  methods: {
    checkValueRequired: function checkValueRequired(event) {
      if (event.target.value) {
        event.target.classList.remove('error_message_required');
      } else {
        event.target.classList.remove('error_message_required');
        event.target.className += ' error_message_required';
      }
    },
    nidValidationCheck: function nidValidationCheck(event) {
      if (event.target.value) {
        var regex = /^\d+$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(event.target.value).match(regex);
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
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(event.target.value).match(regex);
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
    checkValueEmail: function checkValueEmail(event) {
      if (event.target.value) {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var found = event.target.value.match(regex);
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
    clickMoujaRequired: function clickMoujaRequired() {
      if (this.applicationData.mouja_id && this.applicationData.mouja_id != 0) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#mouja_id').removeClass('error_message_required');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#mouja_id').addClass('error_message_required');
      }
    },
    /*
            clearcitizenData() {
                this.applicationData.nid_invalid = false;
                this.applicationData.citizenData.owner_index = 0;
                this.applicationData.citizenData.owner_index_txt = '';
                this.applicationData.citizenData.nid = '';
                this.applicationData.citizenData.dob = '';
                this.applicationData.citizenData.mobile = '';
                this.applicationData.citizenData.company_name = '';
                this.applicationData.citizenData.representative = '';
                this.applicationData.citizenData.address = '';
                this.applicationData.citizenData.rjsc = '';
                this.applicationData.citizenData.incorporation_date = '';
                this.applicationData.citizenData.nid_photo = '';
                this.applicationData.citizenData.nid_name = '';
                this.applicationData.citizenData.nid_name_en = '';
                this.applicationData.citizenData.nid_father_name = '';
                this.applicationData.citizenData.nid_mother_name = '';
                this.applicationData.citizenData.nid_address = '';
                this.applicationData.citizenData.nid_gender = '';
                this.applicationData.citizenData.email = '';
                this.applicationData.citizenData.designation = '';
                this.applicationData.owner_type = '';
                this.applicationData.owner_index_txt = '';
            },
    
            defaultOwner: function () {
                this.clearcitizenData()
                this.CitizenFields.nid = this.citizen[1].nid;
                this.CitizenFields.dob = this.citizen[1].dob;
                this.CitizenFields.mobile = this.citizen[1].mobile;
                this.CitizenFields.company_name = this.citizen[1].company_name;
                this.CitizenFields.representative = this.citizen[1].representative;
                this.CitizenFields.address = this.citizen[1].address;
                this.CitizenFields.rjsc = this.citizen[1].rjsc;
                this.CitizenFields.incorporation_date = this.citizen[1].incorporation_date;
                this.CitizenFields.designation = this.citizen[1].designation;
                this.CitizenFields.email = 1;
                this.applicationData.owner_type = 1;
                this.applicationData.owner_index_txt = 'বেসরকারি মালিক';
            },
    
            selectOwner: function (event) {
                this.clearcitizenData()
                this.CitizenFields.nid = this.citizen[event.target.value].nid
                this.CitizenFields.dob = this.citizen[event.target.value].dob
                this.CitizenFields.mobile = this.citizen[event.target.value].mobile
                this.CitizenFields.company_name = this.citizen[event.target.value].company_name
                this.CitizenFields.representative = this.citizen[event.target.value].representative
                this.CitizenFields.address = this.citizen[event.target.value].address
                this.CitizenFields.rjsc = this.citizen[event.target.value].rjsc
                this.CitizenFields.incorporation_date = this.citizen[event.target.value].incorporation_date
                this.CitizenFields.designation = this.citizen[event.target.value].designation
                this.applicationData.owner_type = event.target.value;
                this.applicationData.owner_index_txt = event.target.options[event.target.options.selectedIndex].text;
            },
    */

    applicantTypeChange: function applicantTypeChange() {
      this.applicationData.citizenData.nid = '';
      this.applicationData.citizenData.dob = '';
      this.applicationData.citizenData.mobile = '';
      this.applicationData.citizenData.email = '';
    },
    instituteTypeChange: function instituteTypeChange(event) {
      this.applicationData.citizenData.institute_owner_text = event.target.options[event.target.options.selectedIndex].text;
    },
    mySelectEvent: function mySelectEvent(_ref) {
      var id = _ref.id,
        text = _ref.text;
      var data = id.split("-");
      this.applicationData.mouja_id = data[0];
      this.applicationData.jl_no = data[1];
      this.applicationData.mouja_id_text = text;
      this.applicationData.mouja_text = text;
      if (this.applicationData.mouja_id && this.applicationData.mouja_id != 0) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#mouja_id').removeClass('error_message_required');
      }
    },
    customDateFormat: function customDateFormat(date) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format('YYYY-MM-DD');
    },
    onChange: function onChange(event, type) {
      this.applicationData[type] = event.target.options.selectedIndex >= 0 ? event.target.options[event.target.options.selectedIndex].text : '';
      // this.applicationData.mouja_id = '';
    }
  },

  watch: {
    'applicationData.for_person_or_institute': function applicationDataFor_person_or_institute() {
      this.tempCount++;
      var commonStateData = this.allCommonDataFirstPage;
      if (this.applicationData.for_person_or_institute == 2) {
        // institute
        this.applicationData.check_nid_exist = '';
        this.applicationData.show_nid_collect_section = true;
        this.applicationData.citizenData.owner_type = 2;
      }
      if (this.applicationData.for_person_or_institute == 1) {
        if (this.tempCount === 1 && commonStateData) {
          this.applicationData.show_nid_collect_section = false;
          this.applicationData.citizenData.owner_type = commonStateData.citizenData.owner_type;
        } else {
          this.applicationData.show_nid_collect_section = false;
          this.applicationData.citizenData.institute_owner_type = '';
          this.applicationData.citizenData.owner_type = '';
        }
      }
    },
    'applicationData.check_nid_exist': function applicationDataCheck_nid_exist() {
      var commonStateData = this.allCommonDataFirstPage;
      if (this.applicationData.check_nid_exist != '') {
        this.applicationData.show_nid_collect_section = this.applicationData.check_nid_exist == 2;
        if (this.tempCount === 1 && commonStateData) {
          this.applicationData.citizenData.owner_type = this.applicationData.check_nid_exist == 2 ? 2 : commonStateData.citizenData.owner_type ? commonStateData.citizenData.owner_type : '';
        } else {
          this.applicationData.citizenData.owner_type = this.applicationData.check_nid_exist == 2 ? 2 : '';
        }
      }
    },
    'applicationData.citizenData.owner_type': function applicationDataCitizenDataOwner_type() {
      var commonStateData = this.allCommonDataFirstPage;
      var questionStateData = commonStateData.questions;
      var prevSelectedOwnerType = '';
      if (questionStateData) {
        prevSelectedOwnerType = commonStateData.citizenData.owner_type;
      }
      this.applicationData.show_nid_collect_section = this.applicationData.citizenData.owner_type != '';
      this.applicationData.owner_type_state = '';
      this.applicationData.owner_type_state = prevSelectedOwnerType + '_' + this.applicationData.citizenData.owner_type;
    },
    'applicationData.citizenData.institute_owner_type': function applicationDataCitizenDataInstitute_owner_type() {
      if (this.applicationData.citizenData.institute_owner_type != 12) {
        this.applicationData.is_company_transfard = 0;
      }
      this.applicationData.show_nid_collect_section = this.applicationData.citizenData.owner_type != '';
    },
    'applicationData.citizenData.mobile': function applicationDataCitizenDataMobile() {
      this.applicationData.citizenData.mobile = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(this.applicationData.citizenData.mobile);
    },
    'applicationData.citizenData.nid': function applicationDataCitizenDataNid() {
      this.applicationData.citizenData.nid = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__["default"].convert2English(this.applicationData.citizenData.nid);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
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
      this.applicationData.other_reference_text = null;
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
      if (_helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].isInArray(2, this.check_land_ownership_reference) || _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].isInArray(4, this.check_land_ownership_reference) || _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].isInArray(5, this.check_land_ownership_reference) || _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].isInArray(6, this.check_land_ownership_reference) || _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].isInArray(7, this.check_land_ownership_reference) || _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].isInArray(8, this.check_land_ownership_reference)) {
        // this.applicationData.regular_applicaton = 1;
        this.applicationData.if_only_croy = 1;
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
    }

    /*isInArray: function (value, array) {
        return array.indexOf(value) > -1;
    }*/
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=template&id=138d13a0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=template&id=138d13a0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-number"
  }, [_vm._v("২")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.for_person_or_institute,
      expression: "applicationData.for_person_or_institute"
    }],
    ref: "for_person_or_institute",
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "for_person",
      id: "for_person",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.for_person_or_institute, "1")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.applicationData, "for_person_or_institute", "1");
      }, function ($event) {
        return _vm.applicantTypeChange($event);
      }]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "for_person"
    }
  }, [_vm._v(" ব্যক্তি মালিকানাধীন জমির জন্য আবেদন ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.for_person_or_institute,
      expression: "applicationData.for_person_or_institute"
    }],
    ref: "for_person_or_institute",
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "for_institute",
      id: "for_institute",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.for_person_or_institute, "2")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.applicationData, "for_person_or_institute", "2");
      }, function ($event) {
        return _vm.applicantTypeChange($event);
      }]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "for_institute"
    }
  }, [_vm._v("প্রাতিষ্ঠানিক মালিকানাধীন জমির জন্য আবেদন")])])]), _vm._v(" "), _vm.applicationData.for_person_or_institute == 1 ? _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.check_nid_exist,
      expression: "applicationData.check_nid_exist"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "check_nid_exist",
      id: "check_nid_exist1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.check_nid_exist, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "check_nid_exist", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_nid_exist1"
    }
  }, [_vm._v("  হ্যাঁঁ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.check_nid_exist,
      expression: "applicationData.check_nid_exist"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "check_nid_exist",
      id: "check_nid_exist2",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.check_nid_exist, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData, "check_nid_exist", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check_nid_exist2"
    }
  }, [_vm._v("  না")])])]) : _vm._e(), _vm._v(" "), _vm.applicationData.for_person_or_institute == 1 && _vm.applicationData.check_nid_exist == 1 ? _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.citizenData.owner_type,
      expression: "applicationData.citizenData.owner_type"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "owner_type_1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.citizenData.owner_type, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData.citizenData, "owner_type", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "owner_type_1"
    }
  }, [_vm._v(" গ্রহীতা ")])]), _vm._v(" "), _c("div", {
    staticClass: "bs_radio"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.citizenData.owner_type,
      expression: "applicationData.citizenData.owner_type"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "owner_type_2",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.applicationData.citizenData.owner_type, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.applicationData.citizenData, "owner_type", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "owner_type_2"
    }
  }, [_vm._v("প্রতিনিধি")])])]) : _vm._e(), _vm._v(" "), _vm.applicationData.for_person_or_institute == 2 ? _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-6 mb-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm._m(2), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.citizenData.institute_owner_type,
      expression: "applicationData.citizenData.institute_owner_type"
    }],
    staticClass: "form-control",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.applicationData.citizenData, "institute_owner_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.instituteTypeChange($event);
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("নির্বাচন করুন")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "12"
    }
  }, [_vm._v("RJSC নিবন্ধিত প্রতিষ্ঠান")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "13"
    }
  }, [_vm._v("সরকারি অফিস বা সংস্থা")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "14"
    }
  }, [_vm._v("অন্যান্য প্রতিষ্ঠান বা সংস্থা ")])]), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(" মালিকের ধরণ দিতে হবে ")])])]), _vm._v(" "), _vm.applicationData.citizenData.institute_owner_type == 12 ? _c("div", {
    staticClass: "col-md-9 col-lg-9 mb-2"
  }, [_c("div", {
    staticClass: "form-group",
    staticStyle: {
      "margin-top": "35px"
    }
  }, [_c("div", {
    staticClass: "bs_checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.is_company_transfard,
      expression: "applicationData.is_company_transfard"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      name: "gov_interests_reason",
      id: "is_company_transfard",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.applicationData.is_company_transfard) ? _vm._i(_vm.applicationData.is_company_transfard, "1") > -1 : _vm.applicationData.is_company_transfard
    },
    on: {
      change: function change($event) {
        var $$a = _vm.applicationData.is_company_transfard,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.applicationData, "is_company_transfard", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.applicationData, "is_company_transfard", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.applicationData, "is_company_transfard", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_company_transfard"
    }
  }, [_vm._v(" এক কোম্পানি থেকে অন্য কোম্পানিতে হস্তান্তর কিনা")])])])]) : _vm._e(), _vm._v(" "), _vm.applicationData.citizenData.institute_owner_type == 12 ? _c("label", {
    staticStyle: {
      "margin-left": "18px",
      "margin-top": "-20px"
    }
  }, [_vm._v("\n                বাংলাদেশ বিনিয়োগ উন্নয়ন কর্তৃপক্ষ (বিডা)'র ওয়ান স্টপ সার্ভিস সিস্টেম হতে প্রেরিত সকল আবেদন ৭\n                কার্যদিবসের মধ্যে নিস্পত্তি করার জন্য ভূমি মন্ত্রণালয় নির্দেশনা প্রদান করেছে।বিডা ওয়ান স্টপ সার্ভিস\n                সিস্টেম হতে আবেদন করতে ক্লিক করুন\n                "), _c("a", {
    staticStyle: {
      "text-decoration": "underline !important",
      cursor: "pointer",
      color: "#0a6cd6 !important",
      "font-size": "18px !important"
    },
    attrs: {
      target: "_blank",
      href: "https://bidaquickserv.org/"
    }
  }, [_vm._v("\n                    ( https://bidaquickserv.org/ )\n                ")])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.applicationData.show_nid_collect_section ? _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-title"
  }, [_vm.applicationData.citizenData.owner_type == 1 ? _c("span", [_vm._v("গ্রহীতার ")]) : _vm._e(), _vm._v(" "), _vm.applicationData.citizenData.owner_type == 2 ? _c("span", [_vm._v("প্রতিনিধির ")]) : _vm._e(), _vm._v("\n            জাতীয় পরিচয়পত্র তথ্য প্রদান করুন")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-3 mb-2"
  }, [_vm._m(3), _vm._v(" "), _c("i", {
    staticClass: "fa fa-info-circle text-info ml-2",
    attrs: {
      title: "আপনার জাতীয় পরিচয়পত্র নম্বরটি ১০, ১৩ কিংবা ১৭ ডিজিটের হতে হবে",
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.citizenData.nid,
      expression: "applicationData.citizenData.nid"
    }],
    staticClass: "form-control is_grohita input_bangla required_field only_number nid place",
    attrs: {
      type: "text",
      placeholder: "জাতীয় পরিচয়পত্র নম্বর"
    },
    domProps: {
      value: _vm.applicationData.citizenData.nid
    },
    on: {
      blur: _vm.nidValidationCheck,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.applicationData.citizenData, "nid", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                    জাতীয় পরিচয়পত্র নম্বর দিতে হবে\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6 mb-2"
  }, [_vm._m(4), _vm._v(" "), _c("datepicker", {
    staticClass: "date_2 input_bangla_date_pick",
    attrs: {
      id: "input_bangla_date_pick",
      "bootstrap-styling": true,
      title: "জন্মতারিখ",
      placeholder: "জন্মতারিখ",
      format: _vm.customDateFormat,
      initialView: "year",
      minimumView: "day",
      "disabled-dates": _vm.disabledDates,
      maximumView: "year"
    },
    model: {
      value: _vm.applicationData.citizenData.dob,
      callback: function callback($$v) {
        _vm.$set(_vm.applicationData.citizenData, "dob", $$v);
      },
      expression: "applicationData.citizenData.dob"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                    জন্মতারিখ দিতে হবে\n                ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6 mb-2"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.citizenData.mobile,
      expression: "applicationData.citizenData.mobile"
    }],
    staticClass: "form-control input_bangla required_field mobile_bn",
    attrs: {
      type: "text",
      placeholder: "মোবাইল নম্বর"
    },
    domProps: {
      value: _vm.applicationData.citizenData.mobile
    },
    on: {
      blur: _vm.checkValueRequiredMobile,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.applicationData.citizenData, "mobile", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                    মোবাইল নম্বর দিতে হবে\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6 mb-2"
  }, [_c("label", [_vm._v("ইমেইল")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.citizenData.email,
      expression: "applicationData.citizenData.email"
    }],
    staticClass: "form-control email_validate",
    attrs: {
      type: "text",
      placeholder: "ইমেইল"
    },
    domProps: {
      value: _vm.applicationData.citizenData.email
    },
    on: {
      blur: _vm.checkValueEmail,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.applicationData.citizenData, "email", $event.target.value);
      }
    }
  })])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-number"
  }, [_vm._v("৩")]), _vm._v(" "), _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("মৌজা নির্বাচন করুন")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-6 mb-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm._m(6), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.division_id,
      expression: "applicationData.division_id"
    }],
    staticClass: "form-control red-bordered input_bangla required_field",
    staticStyle: {
      "font-size": "14px !important"
    },
    attrs: {
      id: "division_id",
      disabled: _vm.$store.state.firstPageCommonData.form_type == 4 || _vm.$store.state.firstPageCommonData.form_type == 5,
      placeholder: "বিভাগ"
    },
    on: {
      blur: _vm.checkValueRequired,
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.applicationData, "division_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.onChange($event, "division_text");
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
    }, [_vm._v("\n                            " + _vm._s(value) + "\n                        ")]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6 mb-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.district_id,
      expression: "applicationData.district_id"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    staticStyle: {
      "font-size": "14px !important"
    },
    attrs: {
      id: "district_id",
      disabled: _vm.$store.state.firstPageCommonData.form_type == 4 || _vm.$store.state.firstPageCommonData.form_type == 5
    },
    on: {
      blur: _vm.checkValueRequired,
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.applicationData, "district_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
    }, [_vm._v("\n                            " + _vm._s(value) + "\n                        ")]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6 mb-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.upazila_id,
      expression: "applicationData.upazila_id"
    }],
    staticClass: "form-control input_bangla red-bordered required_field",
    staticStyle: {
      "font-size": "14px !important"
    },
    attrs: {
      id: "upazila_id",
      disabled: _vm.$store.state.firstPageCommonData.form_type == 4 || _vm.$store.state.firstPageCommonData.form_type == 5,
      placeholder: "উপজেলা"
    },
    on: {
      blur: _vm.checkValueRequired,
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.applicationData, "upazila_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.onChange($event, "upazila_text");
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("উপজেলা")]), _vm._v(" "), _vm._l(_vm.upazilas, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: index
      }
    }, [_vm._v(_vm._s(value) + "\n                        ")]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6 mb-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    attrs: {
      id: "mouja_id_parent"
    },
    on: {
      click: _vm.clickMoujaRequired
    }
  }, [_vm._m(11), _vm._v(" "), _vm._m(12), _vm._v(" "), _c("Select2", {
    staticClass: "required_filed",
    staticStyle: {
      "font-size": "13px",
      color: "#333 !important"
    },
    attrs: {
      id: "mouja_id",
      "bootstrap-styling": true,
      placeholder: "মৌজা",
      options: _vm.select2Mouja,
      settings: _defineProperty({
        settingOption: _vm.applicationData.mouja_id + "-" + _vm.applicationData.jl_no
      }, "settingOption", _vm.applicationData.mouja_id + "-" + _vm.applicationData.jl_no)
    },
    on: {
      select: function select($event) {
        return _vm.mySelectEvent($event);
      }
    },
    model: {
      value: _vm.applicationData.select2_mouja_jl,
      callback: function callback($$v) {
        _vm.$set(_vm.applicationData, "select2_mouja_jl", $$v);
      },
      expression: "applicationData.select2_mouja_jl"
    }
  })], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("ক্রেতা/বাদী/গ্রহীতার তথ্য "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v(" ১৮ বছরের ঊর্ধ্বে সকল গ্রহীতার জাতীয় পরিচয়পত্র আছে কিনা?"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("মালিকের ধরণ"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("জাতীয় পরিচয়পত্র নম্বর "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("জন্মতারিখ "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("মোবাইল নম্বর"), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("বিভাগ "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("জেলা "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-primary",
    staticStyle: {
      "margin-right": "3px",
      display: "none"
    },
    attrs: {
      id: "district_loading",
      role: "status"
    }
  }, [_c("span", [_vm._v("Loading...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "upazila_id"
    }
  }, [_vm._v("উপজেলা "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-primary",
    staticStyle: {
      "margin-right": "3px",
      display: "none"
    },
    attrs: {
      id: "upazila_loading",
      role: "status"
    }
  }, [_c("span", [_vm._v("Loading...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("মৌজা "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-primary",
    staticStyle: {
      "margin-right": "3px",
      display: "none"
    },
    attrs: {
      id: "mouja_loading",
      role: "status"
    }
  }, [_c("span", [_vm._v("Loading...")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=template&id=5925e057&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=template&id=5925e057&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "lmt-form-group have-form-number"
  }, [_c("span", {
    staticClass: "form-sec-number"
  }, [_vm._v("১")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._l(_vm.land_ownership_reference, function (s, id) {
    return _c("div", {
      key: id,
      staticClass: "bs_checkbox"
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
      attrs: {
        "for": s.value
      }
    }, [_vm._v(_vm._s(s.display) + " ")])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 p-1"
  }, [_vm.applicationData.other_reference ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.applicationData.other_reference_text,
      expression: "applicationData.other_reference_text"
    }],
    staticClass: "form-control input_bangla",
    staticStyle: {
      height: "30px",
      "font-size": "13px !important"
    },
    attrs: {
      type: "text",
      maxlength: "100",
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
  }) : _vm._e()])], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-sec-title"
  }, [_vm._v("জমির মালিকানা সূত্র "), _c("span", {
    staticClass: "required"
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\np[data-v-138d13a0]{\r\n    font-size: 17px !important;\n}\n.error_message_required[data-v-138d13a0] {\r\n    border: 1px solid red !important;\n}\n.error_message_mobile_bn[data-v-138d13a0] {\r\n    border: 1px solid red !important;\n}\n.error_message_email[data-v-138d13a0] {\r\n    border: 1px solid red !important;\n}\n.select2-container--default .select2-results > .select2-results__options[data-v-138d13a0] {\r\n    font-size: 12px !important;\n}\n.select2-container--default .select2-selection--single .select2-selection__rendered[data-v-138d13a0] {\r\n    font-weight: normal !important;\n}\n.select2-container .select2-selection--single[data-v-138d13a0] {\r\n    height: 32px !important;\n}\n.select2-selection__placeholder[data-v-138d13a0] {\r\n    color: #666 !important;\n}\n[data-v-138d13a0]::-moz-placeholder {\r\n    font-size: 14px!important;\n}\n[data-v-138d13a0]::placeholder {\r\n    font-size: 14px!important;\n}\nselect[data-v-138d13a0]{\r\n        font-size: 14px !important;\n}\n#input_bangla_date_pick[data-v-138d13a0] ::-moz-placeholder{\r\n    font-size:  12px !important;\n}\n#input_bangla_date_pick[data-v-138d13a0] ::placeholder{\r\n    font-size:  12px !important;\n}\n.page-content .select2-container--default[data-v-138d13a0]{\r\n    font-size: 0px !important;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\ninput[data-v-5925e057]::-moz-placeholder{\r\n    font-size: 12px !important;\n}\ninput[data-v-5925e057]::placeholder{\r\n    font-size: 12px !important;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css&");

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

/***/ "./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_data_area_applicant_vue_vue_type_template_id_138d13a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial_data_area_applicant.vue?vue&type=template&id=138d13a0&scoped=true& */ "./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=template&id=138d13a0&scoped=true&");
/* harmony import */ var _initial_data_area_applicant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial_data_area_applicant.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _initial_data_area_applicant_vue_vue_type_style_index_0_id_138d13a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css& */ "./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _initial_data_area_applicant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _initial_data_area_applicant_vue_vue_type_template_id_138d13a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _initial_data_area_applicant_vue_vue_type_template_id_138d13a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "138d13a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./initial_data_area_applicant.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_style_index_0_id_138d13a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=style&index=0&id=138d13a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_style_index_0_id_138d13a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_style_index_0_id_138d13a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_style_index_0_id_138d13a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_style_index_0_id_138d13a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=template&id=138d13a0&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=template&id=138d13a0&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_template_id_138d13a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./initial_data_area_applicant.vue?vue&type=template&id=138d13a0&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/initial_data_area_applicant.vue?vue&type=template&id=138d13a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_template_id_138d13a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_initial_data_area_applicant_vue_vue_type_template_id_138d13a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/land-ownership.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/land-ownership.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _land_ownership_vue_vue_type_template_id_5925e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./land-ownership.vue?vue&type=template&id=5925e057&scoped=true& */ "./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=template&id=5925e057&scoped=true&");
/* harmony import */ var _land_ownership_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./land-ownership.vue?vue&type=script&lang=js& */ "./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _land_ownership_vue_vue_type_style_index_0_id_5925e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css& */ "./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _land_ownership_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _land_ownership_vue_vue_type_template_id_5925e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _land_ownership_vue_vue_type_template_id_5925e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5925e057",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Application/common_page_comp/land-ownership.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-ownership.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_style_index_0_id_5925e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=style&index=0&id=5925e057&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_style_index_0_id_5925e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_style_index_0_id_5925e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_style_index_0_id_5925e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_style_index_0_id_5925e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=template&id=5925e057&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=template&id=5925e057&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_template_id_5925e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./land-ownership.vue?vue&type=template&id=5925e057&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Application/common_page_comp/land-ownership.vue?vue&type=template&id=5925e057&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_template_id_5925e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_land_ownership_vue_vue_type_template_id_5925e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);