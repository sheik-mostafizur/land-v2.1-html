(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/NidVerify.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Payment/NidVerify.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NidVerify",
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('checkDataCroySutro', ['firstStepData', 'imageInfo', 'secondStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('firstPageCommonData', ['allCommonDataFirstPage'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('checkDataCroySutro', ['fetchFirstStepData', 'fetchSecondStepData', 'fetchThirdStepData', 'fetchFullStateData'])),
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      ftpBaseUrl: "http://localhost:8000/",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      show_info_icon: false,
      success_message: false,
      submit_loading: false,
      error_message: false,
      loading_icon: false,
      mobile_error: '',
      addNumber1: Math.floor(Math.random() * 10),
      addNumber2: Math.floor(Math.random() * 10),
      addNumberResult: 0,
      calculation: '',
      loading_background_opacity: {
        "opacity": '1',
        "pointer-events": ''
      },
      encript_application_id: '',
      encript_division_id: '',
      district_id: '',
      tracking_no: '',
      payment_type: '',
      encript_application_citizen_id: '',
      application_id: '',
      division_id: '',
      upazila_id: '',
      nid: '',
      dob: '',
      mobile_no: '',
      search_panel: true,
      verifyNidButtonSpinner: false,
      smart_nid_no: '',
      nid_verification_message_error: false,
      nid_verification_message_success: false,
      completeNIDImageFetch: false,
      NidData: {
        nid: '',
        dob: '',
        mobile: '',
        email: '',
        nid_photo: '',
        nid_name: '',
        nid_name_en: '',
        nid_father_name: '',
        nid_mother_name: '',
        nid_address: '',
        nid_gender: ''
      }
    };
  },
  mounted: function mounted() {
    this.encript_application_id = this.$route.params.application_id;
    this.encript_division_id = this.$route.params.jomi_division_id;
    this.encript_application_citizen_id = this.$route.params.citizen_id;
    if (this.encript_application_id != '' && this.encript_division_id != '' && this.encript_application_citizen_id != '') {
      this.verifyRequest();
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('tokenState', ['getToken'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('checkDataCroySutro', ['getFirstStepData', 'getAreaData', 'getImageInfo', 'getSecondStepData', 'getThirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData', 'setTrackingNo', 'setFormType', 'setAppType'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('oldFormState', ['clearAllOldFormStateData'])), {}, {
    verifyRequest: function verifyRequest() {
      var _this = this;
      var formData = new FormData();
      formData.append('encript_application_id', this.encript_application_id);
      formData.append('encript_division_id', this.encript_division_id);
      formData.append('encript_application_citizen_id', this.encript_application_citizen_id);
      this.loading_icon = true;
      this.search_panel = true;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(this.apiBaseURL + '/verify-nid-request', formData, {
        headers: this.headers
      }).then(function (resp) {
        _this.nid = resp.data.data.nid;
        _this.mobile_no = resp.data.data.mobile_no;
        _this.success_message = true;
        _this.loading_icon = false;
        _this.loading_background_opacity.opacity = '1';
        //console.log(resp.data.data.information);
      })["catch"](function () {
        _this.error_message = true;
        _this.loading_icon = false;
        _this.loading_background_opacity.opacity = '1';
      });
    },
    verifyNID: function verifyNID() {
      var _this2 = this;
      this.addNumberResult = this.addNumber1 + this.addNumber2;
      if (this.addNumberResult != parseInt(this.calculation)) {
        var msg = 'Oops, আপনার  যোগফল ঠিক মতো হয়নি !';
        _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].sweetAlertToastNotification(this, 'top-end', false, false, 'error', msg);
        this.calculation = '';
        return false;
      }
      var formData = new FormData();
      formData.append('nid', this.nid);
      formData.append('dob', this.customDateFormat(this.dob, 'YYYY-MM-DD'));
      formData.append('encript_application_id', this.encript_application_id);
      formData.append('encript_division_id', this.encript_division_id);
      formData.append('page', 'nidVerify');
      this.loading_icon = false;
      this.loading_message = true;
      var self = this;
      self.verifyNidButtonSpinner = true;
      self.nid_verification_message_success = false;
      self.nid_verification_message_error = false;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(this.apiBaseURL + '/nid-verify', formData, {
        headers: this.headers
      }).then(function (resp) {
        self.processNidData(resp.data.data.data);

        // save NID response on localStorage for log
        // const nidResponse = {...resp.data.data.data}; // copy immutably
        // delete nidResponse.photo;
        // const encodedNidResponse = encodeURIComponent(JSON.stringify(nidResponse));
        // localStorage.setItem('logInfo', encodedNidResponse);

        //console.log(this.NidData)

        if (_this2.NidData.nid_address != '') {
          self.loading_icon = false;
          self.loading_message = false;
          self.nid_verification_message_success = true;
          self.verifyNidButtonSpinner = false;
          self.search_panel = false;
          self.updateNumber();
          self.updateCitizenRecord();
        }
      })["catch"](function (error) {
        if (typeof error.response.data.data.responseCode != 'undefined' && error.response.data.data.responseCode == -1) {
          _this2.smart_nid_no = error.response.data.data.smart_nid_no;
          self.loading_icon = false;
          self.loading_message = false;
          self.verifyNidButtonSpinner = false;
          self.globalErrorValidationForNextButton = false;
          _this2.$refs['smart-nid-found-modal'].show();
          _this2.nid_verification_message_error = false;
          self.updateNumber();
        } else {
          _this2.nid_verification_message_error = true;
          self.verifyNidButtonSpinner = false;
        }

        /*this.verifyNidButtonSpinner = false;
        console.log(error);
        self.loading_icon = false;
        self.loading_message = false;
        self.globalErrorValidationForNextButton = false;
          self.nid_verification_message_error = true;
        self.verifyNidButtonSpinner = false;
        self.updateNumber();*/
      });
    },

    hideSmartNidMsgModal: function hideSmartNidMsgModal() {
      this.$refs['smart-nid-found-modal'].hide();
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
    },
    customDateFormat: function customDateFormat(date, dateFormat) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format(dateFormat);
    },
    nextToPayment: function nextToPayment() {
      alert('GO for payment');
    },
    processNidData: function processNidData(responseData) {
      this.NidData.nid_photo = responseData.photo;
      this.NidData.nid = this.convert2English(this.nid);
      this.NidData.dob = this.customDateFormat(this.dob, 'YYYY-MM-DD');
      this.NidData.mobile = this.convert2English(this.mobile_no);
      this.NidData.nid_name = responseData.name;
      this.NidData.nid_name_en = responseData.nameEn;
      this.NidData.nid_father_name = responseData.father;
      this.NidData.nid_mother_name = responseData.mother;
      this.NidData.nid_address = responseData.permanentAddress;
      this.NidData.nid_gender = responseData.gender === 'male' ? 'পুরুষ' : 'মহিলা';
    },
    updateNumber: function updateNumber() {
      this.addNumber1 = Math.floor(Math.random() * 10);
      this.addNumber2 = Math.floor(Math.random() * 10);
      this.addNumberResult = 0;
      this.calculation = '';
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
    },
    batialRequest: function batialRequest() {
      this.show_info_icon = false;
      this.success_message = false;
      this.submit_loading = false;
      this.error_message = false;
      this.loading_icon = false;
      this.search_panel = true;
      this.verifyNidButtonSpinner = false;
      this.nid_verification_message_error = false;
      this.nid_verification_message_success = false;
      this.completeNIDImageFetch = false;
      this.updateNumber();
      this.verifyRequest();
    },
    updateCitizenRecord: function updateCitizenRecord() {
      var _this3 = this;
      var formData = new FormData();
      formData.append('encript_application_id', this.encript_application_id);
      formData.append('encript_division_id', this.encript_division_id);
      formData.append('encript_application_citizen_id', this.encript_application_citizen_id);
      formData.append('national_id_no', this.NidData.nid);
      formData.append('dob', this.NidData.dob);
      formData.append('mobile_no', this.mobile_no);
      formData.append('name_en', this.NidData.nid_name_en);
      formData.append('address_en', this.NidData.nid_address);
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(this.apiBaseURL + '/update-citizen-nid-data', formData, {
        headers: this.headers
      }).then(function (resp) {
        _this3.success_message = true;
        _this3.loading_icon = false;
        _this3.loading_background_opacity.opacity = '1';
        _this3.application_id = resp.data.data.application_id;
        _this3.division_id = resp.data.data.division_id;
        _this3.upazila_id = resp.data.data.upazila_id;
        _this3.payment_type = resp.data.data.payment_type;
      })["catch"](function () {
        _this3.error_message = true;
        _this3.loading_icon = false;
        _this3.loading_background_opacity.opacity = '1';
      });
    },
    PaymentNextProcess: function PaymentNextProcess() {
      var paymentType = 0;
      if (this.payment_type == 'SUBMIT') {
        paymentType = 1;
      } else if (this.payment_type == 'DCR') {
        paymentType = 2;
      }
      var user_msg = 'আপনাকে পেমেন্টের পেইজে নিয়ে যাওয়া হচ্ছে।';
      _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].sweetAlertToastNotification(this, 'top-end', true, true, 'info', user_msg);
      var selfData = this;
      setTimeout(function () {
        var encryptData = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].encryption(selfData.application_id + '#' + selfData.upazila_id + '#' + 0 + '#' + paymentType + '#' + selfData.division_id);
        return selfData.$router.push({
          path: '/payment',
          query: {
            data: encryptData
          }
        });
      }, 2000);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/NidVerify.vue?vue&type=template&id=379c239e&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Payment/NidVerify.vue?vue&type=template&id=379c239e& ***!
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
    staticClass: "section-body px-4 py-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [this.verifyNidButtonSpinner ? _c("div", {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [this.nid_verification_message_error ? _c("div", {
    staticClass: "col-md-12 text-center text-danger",
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._m(3)]) : _vm._e(), _vm._v(" "), this.nid_verification_message_success ? _c("div", {}, [_vm._m(4), _vm._v(" "), this.nid_verification_message_success ? _c("div", {
    staticClass: "row col-md-10",
    staticStyle: {
      "float": "none",
      margin: "auto"
    }
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [this.NidData.nid_photo ? _c("div", {
    staticClass: "nid-image",
    staticStyle: {
      width: "115px",
      height: "115px",
      "border-radius": "100% !important"
    }
  }, [_c("img", {
    staticClass: "rounded-circle",
    attrs: {
      src: "".concat(this.NidData.nid_photo)
    }
  })]) : _c("div", [_vm._m(5)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" নাম ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.NidData.nid_name) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" পিতার নাম ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.NidData.nid_father_name) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" মাতার নাম ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.NidData.nid_mother_name) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" লিঙ্গ ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.NidData.nid_gender) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm._v(" ঠিকানা ")]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_vm._v(" : " + _vm._s(this.NidData.nid_address) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c("div", {
    staticClass: "col-md-3"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [this.nid_verification_message_success ? _c("b-button", {
    staticClass: "col-4 pull-right btn-sm",
    staticStyle: {
      padding: "0.475rem 0.100rem !important",
      "margin-left": "10px"
    },
    attrs: {
      variant: "outline-success"
    },
    on: {
      click: _vm.PaymentNextProcess
    }
  }, [_vm._v("পরবর্তী\n                                                                        ")]) : _vm._e(), _vm._v(" "), this.nid_verification_message_success ? _c("router-link", {
    staticClass: "btn btn-outline-warning mx-3",
    attrs: {
      to: "/search-application",
      variant: "outline-success"
    }
  }, [_vm._v("বাতিল")]) : _vm._e()], 1)])])]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("b-modal", {
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
  }, [_vm._v("বাতিল\n                                                            ")])], 1)])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm.search_panel == true ? _c("div", {
    staticClass: "col-md-6",
    staticStyle: {
      "float": "none",
      margin: "auto"
    }
  }, [_c("div", {
    staticClass: "content-body bdr-top-bottom p-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("জাতীয় পরিচয়পত্র নম্বর")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nid,
      expression: "nid"
    }],
    staticClass: "form-control required_field input_bangla",
    attrs: {
      type: "text",
      placeholder: "জাতীয় পরিচয়পত্র নম্বর লিখুন",
      required: ""
    },
    domProps: {
      value: _vm.nid
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.nid = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("জন্ম তারিখ")]), _vm._v(" "), _c("datepicker", {
    staticClass: "input_bangla_date_pick",
    attrs: {
      required: "",
      "bootstrap-styling": true,
      title: "জন্ম তারিখ লিখুন",
      format: _vm.customDateFormat(_vm.dob, "YYYY-MM-DD"),
      placeholder: "জন্ম তারিখ লিখুন"
    },
    model: {
      value: _vm.dob,
      callback: function callback($$v) {
        _vm.dob = $$v;
      },
      expression: "dob"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("মোবাইল নম্বর")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mobile_no,
      expression: "mobile_no"
    }],
    staticClass: "form-control required_field input_bangla",
    attrs: {
      type: "text",
      placeholder: "মোবাইল নম্বর",
      required: ""
    },
    domProps: {
      value: _vm.mobile_no
    },
    on: {
      focusout: function focusout() {
        return _vm.checkMobileNoValue(_vm.mobile_no);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.mobile_no = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.mobile_error ? _c("p", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("আপনার ভ্যালুটি ভুল")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-0"
  }, [_c("label", [_vm._v("যোগ করুন (" + _vm._s(_vm.addNumber1) + " + " + _vm._s(_vm.addNumber2) + ")")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calculation,
      expression: "calculation"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
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
  })])]), _vm._v(" "), _c("div", {
    staticClass: "content-footer text-center pt-4"
  }, [_c("button", {
    staticClass: "btn active btn-outline-success mx-3",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.verifyNID
    }
  }, [_c("i", {
    staticClass: "fa mr-2 fa-save",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" সাবমিট")])])]) : _vm._e()]), _vm._v(" "), _vm.loading_icon ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      position: "absolute",
      top: "50%",
      left: "50%"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _vm._e()])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section-header border-bottom px-5 py-3"
  }, [_c("h5", {
    staticClass: "text-center font-weight-bold"
  }, [_vm._v("জাতীয় পরিচয়পত্রের যাচাইকৃত তথ্য ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "col-md-10 col-md-offset-1 text-center"
  }, [_c("span", {
    staticClass: "text-success text-center"
  }, [_vm._v("বাংলাদেশ নির্বাচন কমিশন থেকে জাতীয় পরিচয়পত্র যাচাই হচ্ছে ...")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
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
  }, [_vm._v("Loading...")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_vm._v("আপনার জাতীয় পরিচয়পত্রের ভেরিফিকেশন সফল হয় নাই। NID সার্ভার এর সাথে সংযোগ সমস্যার কারণেও হতে পারে। জাতীয় পরিচয় পত্রের নম্বর এবং জন্মতারিখ ঠিক আছে কিনা যাচাই করে "), _c("b", [_vm._v(" কিছুক্ষন পর ")]), _vm._v("পুনরায় চেষ্টা করুন।  ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12 text-center text-success",
    staticStyle: {
      "font-size": "14px"
    }
  }, [_c("p", [_vm._v(" জাতীয় পরিচয়পত্র ভেরিফিকেশন সফল হয়েছে ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
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
  }, [_vm._v("Loading...")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/components/Payment/NidVerify.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Payment/NidVerify.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NidVerify_vue_vue_type_template_id_379c239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NidVerify.vue?vue&type=template&id=379c239e& */ "./resources/js/components/Payment/NidVerify.vue?vue&type=template&id=379c239e&");
/* harmony import */ var _NidVerify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NidVerify.vue?vue&type=script&lang=js& */ "./resources/js/components/Payment/NidVerify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NidVerify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NidVerify_vue_vue_type_template_id_379c239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NidVerify_vue_vue_type_template_id_379c239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Payment/NidVerify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Payment/NidVerify.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Payment/NidVerify.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NidVerify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NidVerify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/NidVerify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NidVerify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Payment/NidVerify.vue?vue&type=template&id=379c239e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Payment/NidVerify.vue?vue&type=template&id=379c239e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NidVerify_vue_vue_type_template_id_379c239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./NidVerify.vue?vue&type=template&id=379c239e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/NidVerify.vue?vue&type=template&id=379c239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NidVerify_vue_vue_type_template_id_379c239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NidVerify_vue_vue_type_template_id_379c239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);