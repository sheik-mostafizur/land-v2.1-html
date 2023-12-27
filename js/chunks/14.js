(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/infographic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/infographic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "infographic",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('tokenState', ['tokenData'])),
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      office: '',
      new_application: '',
      total_nispotti: '',
      average_nispotti: '',
      monjur_har: '',
      pending_application: '',
      twenty_eight_days_up: '',
      last_updated_at: ''
    };
  },
  mounted: function mounted() {
    var _this = this;
    var qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
    var credentials = qs.stringify({
      'username': "mongo_namjari",
      'password': "mongo@namjari",
      'clientid': "namjari_draft"
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.apiBaseURL + '/getToken', credentials).then(function (resp) {
      _this.headers = {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + resp.data.token
      };
      _this.infographic();
    })["catch"](function (error) {
      console.log(error.response.data.message);
    });
  },
  methods: {
    sendLastUpdatedData: function sendLastUpdatedData(time) {
      this.$emit('getDateTime', time);
    },
    numberFormated: function numberFormated(numberOrString) {
      return parseInt(numberOrString, 10).toLocaleString('bn-bd');
    },
    infographic: function infographic() {
      var _this2 = this;
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(this.apiBaseURL + '/area-wise-namjari-documentary').then(function (resp) {
        // this.office= (resp.data.data.office).slice(0, -3);
        // this.total_application= (resp.data.data.total_application).slice(0, -3);
        // this.granted_ration= resp.data.data.granted_ration;
        // this.average_settlement= (resp.data.data.average_settlement).slice(0, -3);
        _this2.office = _this2.numberFormated(resp.data.data.office);
        _this2.new_application = _this2.numberFormated(resp.data.data.new_application);
        _this2.total_nispotti = _this2.numberFormated(resp.data.data.total_nispotti);
        _this2.average_nispotti = _this2.numberFormated(resp.data.data.average_nispotti);
        _this2.monjur_har = _this2.numberFormated(resp.data.data.monjur_har);
        _this2.pending_application = _this2.numberFormated(resp.data.data.pending_application);
        _this2.twenty_eight_days_up = _this2.numberFormated(resp.data.data.twenty_eight_days_up);
        _this2.last_updated_at = "সর্বশেষ হালনাগাদ: " + resp.data.data.last_updated_at;
        _this2.sendLastUpdatedData(resp.data.data.last_updated_at);
      })["catch"](function (error) {
        console.log("".concat(error, " + datha list cannot be prepared"));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/ValidationFile */ "./resources/js/helpers/ValidationFile.js");
/* harmony import */ var _Form_infographic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form/infographic */ "./resources/js/components/Form/infographic.vue");
/* harmony import */ var _NamjariDocumentary_AreaNamjariDivison__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NamjariDocumentary/AreaNamjariDivison */ "./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue");
/* harmony import */ var _NamjariDocumentary_AreaNamjariDistrict__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NamjariDocumentary/AreaNamjariDistrict */ "./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue");
/* harmony import */ var _NamjariDocumentary_AreaNamjariThana__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NamjariDocumentary/AreaNamjariThana */ "./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home.vue",
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('tokenState', ['tokenData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('checkDataCroySutro', ['firstStepData', 'areaData', 'imageInfo'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('firstPageCommonData', ['firstPageCommonDatas', 'tracking_no', 'form_type', 'app_type'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('searchApplication', ['applicationSearchData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('searchApplication', ['fullApplicationSearchData'])), {}, {
    currentNamjariAreaComponentProps: function currentNamjariAreaComponentProps() {
      switch (this.current_area_component) {
        case "AreaNamjariDistrict":
          return {
            'division_id': this.namjari_division_id,
            'division_name': this.namjari_division_name,
            'division_avg_nisponno': this.namjari_division_avg_nisponno
          };
          break;
        case "AreaNamjariThana":
          return {
            'division_id': this.namjari_division_id,
            'district_id': this.namjari_district_id,
            'district_name': this.namjari_district_name,
            'district_avg_nisponno': this.namjari_district_avg_nisponno
          };
          break;
      }
    }
  }),
  components: {
    infographic: _Form_infographic__WEBPACK_IMPORTED_MODULE_4__["default"],
    AreaNamjariDivison: _NamjariDocumentary_AreaNamjariDivison__WEBPACK_IMPORTED_MODULE_5__["default"],
    AreaNamjariDistrict: _NamjariDocumentary_AreaNamjariDistrict__WEBPACK_IMPORTED_MODULE_6__["default"],
    AreaNamjariThana: _NamjariDocumentary_AreaNamjariThana__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      given_tracking_no: '',
      given_phone_no: '',
      draft_tracking_no: '',
      office: '',
      total_application: '',
      granted_ration: '',
      average_settlement: '',
      is_draft_msg: false,
      success_message: '',
      error_message: '',
      tracking_error_message: '',
      mobile_error_message: '',
      loading_icon: false,
      is_doc_read: false,
      old_site_base_url: "https://trland7.land.gov.bd/application",
      // Namjari Documentary //
      current_area_component: 'AreaNamjariDivison',
      namjari_division_id: '',
      namjari_division_name: '',
      namjari_division_avg_nisponno: '',
      namjari_district_name: '',
      namjari_district_id: '',
      namjari_district_avg_nisponno: '',
      last_updated_date_time: null
    };
  },
  created: function created() {
    this.getToken();
  },
  mounted: function mounted() {
    if (this.$route.query.tracking_no != undefined && this.$route.query.tracking_no != '') {
      this.setFirstPageCommonData('');
      this.clearAllOldFormStateData('');
      var decryptTrackingNo = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].decryption(this.$route.query.tracking_no);
      this.is_draft_msg = true;
      this.draft_tracking_no = decryptTrackingNo;
    } else {
      this.is_draft_msg = false;
      this.draft_tracking_no = '';
    }
  },
  watch: {
    'given_phone_no': function given_phone_no(value) {
      if (value.length > 0) {
        var regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
        var found = _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].convert2English(value).match(regex);
        if (found) {
          this.mobile_error_message = '';
        } else {
          this.mobile_error_message = 'আপনার মোবাইল নম্বর টি সঠিক নয়। ';
        }
      } else {
        this.mobile_error_message = '';
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('tokenState', ['getToken'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('checkDataCroySutro', ['getFirstStepData', 'getAreaData', 'getImageInfo', 'getSecondStepData', 'getThirdStepData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('firstPageCommonData', ['setFirstPageCommonData', 'setTrackingNo', 'setMasterTrackingNo', 'setFormType', 'setAppType'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('oldFormState', ['clearAllOldFormStateData', 'setOldFormStateData', 'setCitizenCommonData'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('searchApplication', ['setSearchApplication'])), {}, {
    //
    newApp: function newApp() {
      // this.$refs['proceed-to-new-application'].show();
      // this.$refs['application_type_selection'].show();
      return this.$router.push({
        path: '/application-request'
      });
    },
    srchDraftApplicationModal: function srchDraftApplicationModal() {
      this.given_tracking_no = '';
      this.given_phone_no = '';
      this.success_message = '';
      this.error_message = '';
      this.$refs['my-modal-draft-application'].show();
    },
    goSearchApp: function goSearchApp() {
      this.setSearchApplication('');
      return this.$router.push({
        path: '/search-application'
      });
    },
    clearErrMsg: function clearErrMsg() {
      this.error_message = "";
      this.tracking_error_message = "";
      this.mobile_error_message = "";
    },
    srchDraft: function srchDraft() {
      var _this = this;
      var validateRequired = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_3__["default"].validationMechanism(this.$refs.search_form, '.required_field', 'required');
      var validateOnlyNumber = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_3__["default"].validationMechanism(this.$refs.search_form, '.mobile', 'mobile');
      var validateMobileNumber = _helpers_ValidationFile__WEBPACK_IMPORTED_MODULE_3__["default"].validationMechanism(this.$refs.search_form, '.only_number', 'only_number');
      if (!validateOnlyNumber || !validateRequired || !validateMobileNumber) {
        return false;
      }
      var formData = new FormData();
      formData.append('tracking_no', _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].convert2English(this.given_tracking_no.trim()));
      formData.append('mobile_no', _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_2__["default"].convert2English(this.given_phone_no.trim()));
      formData.append('request_type', 'search');
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_1__["default"].header().post(this.apiBaseURL + '/application-draft-search', formData).then(function (resp) {
        if (resp.data.status == 200 && resp.data.responseCode == 'RSP200') {
          var respDraftStateData = JSON.parse(resp.data.data);
          var master_tracking_no = typeof respDraftStateData.master_tracking_no != "undefined" && respDraftStateData.master_tracking_no != '' ? respDraftStateData.master_tracking_no : '';
          _this.setFirstPageCommonData('');
          _this.setFirstPageCommonData(respDraftStateData.data.commonStateData);
          _this.setTrackingNo(_this.given_tracking_no.trim());
          _this.setMasterTrackingNo(master_tracking_no.trim());
          _this.setFormType(respDraftStateData.form_type);
          _this.setAppType(respDraftStateData.app_type);

          /* CLEAR EXISTING STATE DATA AND STORE DATA FROM API */
          if (respDraftStateData.form_type !== undefined && respDraftStateData.form_type == 1) {
            _this.getAreaData('');
            _this.getAreaData(respDraftStateData.data.stateData.areaData);
            _this.getFirstStepData('');
            _this.getFirstStepData(respDraftStateData.data.stateData.firstStepData);
            _this.getSecondStepData('');
            _this.getSecondStepData(respDraftStateData.data.stateData.secondStepData);
            _this.getThirdStepData('');
            _this.getThirdStepData(respDraftStateData.data.stateData.thirdStepData);
          } else if (respDraftStateData.form_type == 4 || respDraftStateData.form_type == 5) {
            _this.getAreaData('');
            _this.getAreaData(respDraftStateData.data.stateData.areaData);
            _this.getFirstStepData('');
            _this.getFirstStepData(respDraftStateData.data.stateData.firstStepData);
            _this.getSecondStepData('');
            _this.getSecondStepData(respDraftStateData.data.stateData.secondStepData);
            _this.getThirdStepData('');
            _this.getThirdStepData(respDraftStateData.data.stateData.thirdStepData);
          } else if (respDraftStateData.form_type === 2) {
            // old form data store to state
            _this.setOldFormStateData(respDraftStateData.data.stateData);
            _this.setCitizenCommonData({
              'delegate': respDraftStateData.data.stateData.citizen_common_data.delegate,
              'owner': respDraftStateData.data.stateData.citizen_common_data.owner
            });
          }
          _this.$refs['my-modal-draft-application'].hide();
          return _this.$router.push({
            path: '/application-request'
          });
        } else {
          _this.error_message = "উক্ত নম্বর দিয়ে আবেদন খুঁজে পাওয়া যায় নি।";
        }
        _this.loading_icon = false;
      })["catch"](function (error) {
        console.log(error);
        _this.error_message = error.response.data.message;
        _this.loading_icon = false;
      });
    },
    updateNamjariAreaComponent: function updateNamjariAreaComponent(incomingData) {
      this.current_area_component = incomingData.component;
      delete incomingData.component;
      if (Object.keys(incomingData).length === 0) {
        return;
      }
      switch (this.current_area_component) {
        case "AreaNamjariDistrict":
          this.namjari_division_id = incomingData.division_id;
          this.namjari_division_name = incomingData.division_name;
          this.namjari_division_avg_nisponno = incomingData.avg_nisponno;
          break;
        case "AreaNamjariThana":
          this.namjari_district_id = incomingData.district_id;
          this.namjari_district_name = incomingData.district_name;
          this.namjari_district_avg_nisponno = incomingData.district_avg_nisponno;
          break;
      }
    },
    getDate: function getDate(payload) {
      this.last_updated_date_time = "সর্বশেষ হালনাগাদ: " + payload;
    }
  }),
  beforeMount: function beforeMount() {
    //this.infographic()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AreaNamjariDistrict",
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      division_name: '',
      districtData: [],
      loading_icon: false
    };
  },
  props: ['necessaryData'],
  filters: {
    en2bn: function en2bn(enValue) {
      if (!Boolean(enValue)) {
        return '০';
      }
      return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].convert2Bangla(enValue);
    },
    number_format: function number_format(numberOrString) {
      return parseInt(numberOrString, 10).toLocaleString('bn-bd');
    }
  },
  methods: {
    getDistrictData: function getDistrictData() {
      var _this = this;
      this.loading_icon = true;
      var formData = {
        'type': 'district',
        'division_id': this.necessaryData.division_id
      };
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/area-wise-namjari-documentary', formData).then(function (response) {
        _this.districtData = response.data.data;
        _this.loading_icon = false;
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    previousComponent: function previousComponent() {
      this.$emit('changeNamjariAreaComponent', {
        'component': 'AreaNamjariDivison'
      });
    },
    callAreaNamjariThanaComponent: function callAreaNamjariThanaComponent(district_id, district_name, avg_nisponno) {
      this.$emit('changeNamjariAreaComponent', {
        'district_id': district_id,
        'district_name': district_name,
        'district_avg_nisponno': avg_nisponno,
        'component': 'AreaNamjariThana'
      });
    }
  },
  mounted: function mounted() {
    this.getDistrictData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AreaNamjariDivison",
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + process.env.MIX_HOME_TOKEN
      },
      divisionData: [],
      national_avg_nisponno: '',
      loading_icon: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('tokenState', ['tokenData'])), {}, {
    filterDivisionData: function filterDivisionData() {
      var filterData = this.divisionData.filter(function (el) {
        return el.division_id != 0;
      });
      return filterData;
    }
  }),
  filters: {
    en2bn: function en2bn(enValue) {
      if (!Boolean(enValue)) {
        return '০';
      }
      return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_0__["default"].convert2Bangla(enValue);
    },
    number_format: function number_format(numberOrString) {
      return parseInt(numberOrString, 10).toLocaleString('bn-bd');
    }
  },
  methods: {
    getDivisionData: function getDivisionData() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.apiBaseURL + '/area-wise-namjari-documentary', {
        'type': 'division'
      }, {
        headers: this.headers
      }).then(function (response) {
        _this.divisionData = response.data.data.divisionWiseData;
        _this.national_avg_nisponno = response.data.data.global_avg_nisponno;
        _this.loading_icon = false;
      })["catch"](function (error) {
        if (error.response.status == 401) {
          _this.tempGetToken();
        }
        console.log(error.response.data.message);
      });
    },
    tempGetToken: function tempGetToken() {
      var _this2 = this;
      var qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
      var credentials = qs.stringify({
        'username': "mongo_namjari",
        'password': "mongo@namjari",
        'clientid': "namjari_draft"
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.apiBaseURL + '/getToken', credentials).then(function (resp) {
        _this2.headers = {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + resp.data.token
        };
        _this2.getDivisionData();
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    callAreaNamjariDistrictComponent: function callAreaNamjariDistrictComponent(division_id, division_name, avg_nisponno) {
      this.$emit('changeNamjariAreaComponent', {
        'division_id': division_id,
        'division_name': division_name,
        'avg_nisponno': avg_nisponno,
        'component': 'AreaNamjariDistrict'
      });
    }
  },
  mounted: function mounted() {
    this.loading_icon = true;
    this.getDivisionData();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/AppAxios */ "./resources/js/helpers/AppAxios.js");
/* harmony import */ var _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/CommonFunction */ "./resources/js/helpers/CommonFunction.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AreaNamjariThana",
  data: function data() {
    return {
      apiBaseURL: "http://localhost:8000/api",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.$store.state.tokenState.tokenData
      },
      district_name: '',
      subDistrictData: [],
      loading_icon: false
    };
  },
  props: ['necessaryData'],
  filters: {
    en2bn: function en2bn(enValue) {
      if (!Boolean(enValue)) {
        return '০';
      }
      return _helpers_CommonFunction__WEBPACK_IMPORTED_MODULE_1__["default"].convert2Bangla(enValue);
    },
    number_format: function number_format(numberOrString) {
      return parseInt(numberOrString, 10).toLocaleString('bn-bd');
    }
  },
  methods: {
    getsubDistrictData: function getsubDistrictData() {
      var _this = this;
      this.loading_icon = true;
      var formData = {
        'type': 'sub-district',
        'division_id': this.necessaryData.division_id,
        'district_id': this.necessaryData.district_id
      };
      _helpers_AppAxios__WEBPACK_IMPORTED_MODULE_0__["default"].header().post(this.apiBaseURL + '/area-wise-namjari-documentary', formData).then(function (response) {
        _this.subDistrictData = response.data.data;
        _this.loading_icon = false;
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    previousComponent: function previousComponent(component) {
      this.$emit('changeNamjariAreaComponent', {
        'component': component
      });
    }
  },
  mounted: function mounted() {
    this.getsubDistrictData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/infographic.vue?vue&type=template&id=5cfa56cc&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form/infographic.vue?vue&type=template&id=5cfa56cc& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "documentary-section"
  }, [_c("div", {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "land-documentary-sec"
  }, [_c("div", {
    staticClass: "documentary-item"
  }, [_c("div", {
    staticClass: "docs-content"
  }, [_c("span", {
    staticClass: "doc-text"
  }, [_vm._v("অফিস")]), _vm._v(" "), _c("span", {
    staticClass: "doc-num"
  }, [_vm._v(_vm._s(this.office))])])]), _vm._v(" "), _c("div", {
    staticClass: "documentary-item"
  }, [_c("div", {
    staticClass: "docs-content"
  }, [_c("span", {
    staticClass: "doc-text"
  }, [_vm._v("নতুন আবেদন")]), _vm._v(" "), _c("span", {
    staticClass: "doc-num"
  }, [_vm._v(_vm._s(this.new_application))])])]), _vm._v(" "), _c("div", {
    staticClass: "documentary-item"
  }, [_c("div", {
    staticClass: "docs-content"
  }, [_c("span", {
    staticClass: "doc-text"
  }, [_vm._v("মোট নিস্পত্তিকৃত আবেদন")]), _vm._v(" "), _c("span", {
    staticClass: "doc-num"
  }, [_vm._v(_vm._s(this.total_nispotti))])])]), _vm._v(" "), _c("div", {
    staticClass: "documentary-item"
  }, [_c("div", {
    staticClass: "docs-content"
  }, [_c("span", {
    staticClass: "doc-text"
  }, [_vm._v("গড় নিস্পত্তি")]), _vm._v(" "), _c("span", {
    staticClass: "doc-num"
  }, [_vm._v(_vm._s(this.average_nispotti) + " দিন")])])]), _vm._v(" "), _c("div", {
    staticClass: "documentary-item"
  }, [_c("div", {
    staticClass: "docs-content"
  }, [_c("span", {
    staticClass: "doc-text"
  }, [_vm._v("মঞ্জুর হার")]), _vm._v(" "), _c("span", {
    staticClass: "doc-num"
  }, [_vm._v(_vm._s(this.monjur_har) + "%")])])]), _vm._v(" "), _c("div", {
    staticClass: "documentary-item item-2x"
  }, [_c("div", {
    staticClass: "prev-unc-docs"
  }, [_c("span", {
    staticClass: "doc-text mb-3"
  }, [_vm._v("গতকাল পর্যন্ত অনিস্পত্তিকৃত")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "docs-content"
  }, [_c("span", {
    staticClass: "doc-text"
  }, [_vm._v("মোট আবেদন")]), _vm._v(" "), _c("span", {
    staticClass: "doc-num"
  }, [_vm._v(_vm._s(this.pending_application))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "docs-content"
  }, [_c("span", {
    staticClass: "doc-text"
  }, [_vm._v("২৮ দিনের উর্দ্ধে")]), _vm._v(" "), _c("span", {
    staticClass: "doc-num"
  }, [_vm._v(_vm._s(this.twenty_eight_days_up) + "%")])])])])])])]), _vm._v(" "), _vm._m(1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12 mb-3"
  }, [_c("div", {
    staticClass: "section-title text-center"
  }, [_c("h2", [_vm._v("তথ্যচিত্র")]), _vm._v(" "), _c("p", [_vm._v("(সমগ্র বাংলাদেশের বিগত ৯০ দিনের )")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "nb-text text-center mb-3"
  }, [_c("p", {
    staticClass: "text-font-sm"
  }, [_c("span", {
    staticClass: "clr-red"
  }, [_vm._v("*")]), _vm._v(" জুলাই ১, ২০২২ তারিখ হতে জমাকৃত আবেদনের নিস্পত্তির\n                সময়কে বিবেচনা করে গড় নিস্পত্তি দিন গণনা করা হয়েছে")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._m(0), _vm._v(" "), _vm.is_draft_msg ? _c("div", {
    staticClass: "documentary-section bg-white"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_c("h5", {
    staticClass: "alert alert-success",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("আপনার আবেদন সফলভাবে ড্রাফট\n                                হিসেবে সংরক্ষণ করা হয়েছে। আপনার ট্র্যাকিং নম্বর :\n                                "), _c("strong", [_vm._v(_vm._s(_vm.draft_tracking_no))]), _vm._v(" এই ট্র্যাকিং নম্বর দিয়ে আগামী সাত দিনের মধ্যে\n                                আপনার ড্রাফট আবেদন পুনরায় সার্চ করতে পারবেন। ")])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "home-feature"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row col-space-40"
  }, [_c("div", {
    staticClass: "col-lg-4 col-space mb-5"
  }, [_c("div", {
    staticClass: "feature-white-box p-0"
  }, [_c("router-link", {
    staticClass: "feature-card imgIconBlock",
    attrs: {
      to: "/nirdeshika"
    }
  }, [_c("div", {
    staticClass: "feature-card-icon imgIcon"
  }, [_c("img", {
    staticClass: "iconShow",
    attrs: {
      src: "/images/icon-nirdeshika-green.svg",
      alt: "icon"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "iconHover",
    attrs: {
      src: "/images/icon-nirdeshika-white.svg",
      alt: "icon"
    }
  })]), _vm._v(" "), _c("h4", [_vm._v("নির্দেশিকা")])]), _vm._v(" "), _c("router-link", {
    staticClass: "feature-card imgIconBlock",
    attrs: {
      to: "/tutorial"
    }
  }, [_c("div", {
    staticClass: "feature-card-icon imgIcon"
  }, [_c("img", {
    staticClass: "iconShow",
    attrs: {
      src: "/images/icon-tutorial-green.svg",
      alt: "icon"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "iconHover",
    attrs: {
      src: "/images/icon-tutorial-white.svg",
      alt: "icon"
    }
  })]), _vm._v(" "), _c("h4", [_vm._v("টিওটোরিয়াল")])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 col-space mb-5"
  }, [_c("div", {
    staticClass: "feature-white-box p-0"
  }, [_c("b-modal", {
    ref: "proceed-to-new-application",
    attrs: {
      "no-close-on-backdrop": "",
      size: "",
      "header-class": "border-0 py-0",
      "body-class": "text-justify",
      "hide-footer": ""
    }
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.is_doc_read,
      expression: "is_doc_read"
    }],
    staticClass: "form-check-input mr-3",
    attrs: {
      type: "checkbox",
      id: "is_doc_read",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.is_doc_read) ? _vm._i(_vm.is_doc_read, "1") > -1 : _vm.is_doc_read
    },
    on: {
      change: function change($event) {
        var $$a = _vm.is_doc_read,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.is_doc_read = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.is_doc_read = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.is_doc_read = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "is_doc_read"
    }
  }, [_vm._v(" আবেদন ফরমটি পূরণে করণীয়\n                                            সম্পর্কে ভূমি মন্ত্রণালয় কর্তৃক প্রণীত নির্দেশাবলী পড়ে সংশ্লিষ্ট তথ্য দিয়ে\n                                            আবেদন করছি। ")])]), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-3"
  }, [_c("router-link", {
    attrs: {
      to: "/application-request"
    }
  }, [_c("button", {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      disabled: !_vm.is_doc_read
    }
  }, [_vm._v("\n                                                পরবর্তী "), _c("i", {
    staticClass: "fa fa-arrow-right"
  })])])], 1)]), _vm._v(" "), _c("b-modal", {
    ref: "application_type_selection",
    attrs: {
      "no-close-on-backdrop": "",
      size: "",
      "header-class": "border-0 py-0",
      "body-class": "text-justify",
      "hide-footer": ""
    }
  }, [_c("div", [_c("p", [_vm._v("আপনি ক্রয়/হেবা ব্যতীত অন্যান্য সূত্রে হস্তান্তরকৃত জমির নামজারি আবেদন করতে\n                                                                            চাইলে এখানে\n                                                                            "), _c("a", {
    staticStyle: {
      color: "#007bff !important"
    },
    attrs: {
      href: _vm.old_site_base_url
    }
  }, [_vm._v("ক্লিক\n                                                                                করুন")])]), _vm._v(" "), _c("p", [_vm._v("শুধুমাত্র ক্রয়/হেবা এর মাধ্যমে নামজারি আবেদন করতে চাইলে পরবর্তী বাটনে ক্লিক\n                                                                            করুন, "), _c("br"), _vm._v(" প্রয়োজনে ভূমি মন্ত্রণালয় প্রণীত নির্দেশিকা ভালো করে পড়ে প্রস্তুতি\n                                                                            নিয়ে ফরমটি পূরণ করবেন।")])]), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-3"
  }, [_c("router-link", {
    attrs: {
      to: "/application-request"
    }
  }, [_c("button", {
    staticClass: "btn btn-sm btn-success"
  }, [_vm._v("\n                                                                                পরবর্তী "), _c("i", {
    staticClass: "fa fa-arrow-right"
  })])])], 1)]), _vm._v(" "), _c("b-modal", {
    ref: "my-modal-draft-application",
    attrs: {
      "no-close-on-backdrop": "",
      size: "sm",
      title: "খসড়া আবেদন",
      "hide-footer": ""
    }
  }, [_c("div", {
    staticClass: "row draft_src"
  }, [_c("div", {
    ref: "search_form",
    staticClass: "col-md-12 m-auto"
  }, [_c("small", {
    staticClass: "form-text text-danger"
  }, [_vm._v(_vm._s(_vm.error_message) + " ")]), _vm._v(" "), _c("small", {
    staticClass: "form-text text-success"
  }, [_vm._v(_vm._s(_vm.success_message) + " ")]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.srchDraft();
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "tracking_no"
    }
  }, [_vm._v("আবেদনের ট্র্যাকিং\n                                                        নম্বর ")]), _vm._v(" "), _vm.loading_icon ? _c("div", {
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
  }, [_vm._v("Loading...")])]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.given_tracking_no,
      expression: "given_tracking_no"
    }],
    staticClass: "form-control required_field",
    attrs: {
      type: "text",
      min: "0",
      id: "tracking_no",
      "aria-describedby": "emailHelp",
      placeholder: "আবেদনের ট্র্যাকিং নম্বরটি দিন"
    },
    domProps: {
      value: _vm.given_tracking_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.given_tracking_no = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "form-text text-danger"
  }, [_vm._v(_vm._s(_vm.tracking_error_message) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "tracking_no"
    }
  }, [_vm._v("ফোন নম্বর ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.given_phone_no,
      expression: "given_phone_no"
    }],
    staticClass: "form-control input_bangla mobile required_field",
    attrs: {
      type: "text",
      min: "0",
      "aria-describedby": "phone",
      placeholder: "আবেদিত ফরমে ব্যবহৃত মোবাইল নম্বর প্রদান করুন"
    },
    domProps: {
      value: _vm.given_phone_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.given_phone_no = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "form-text text-danger"
  }, [_vm._v(_vm._s(_vm.mobile_error_message) + " ")])]), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-sm btn-primary",
    staticStyle: {
      display: "block",
      margin: "0 auto"
    },
    attrs: {
      type: "submit"
    }
  }, [_c("i", {
    staticClass: "fa fa-search fa"
  }), _vm._v(" খুঁজুন\n                                                    ")])])])])])]), _vm._v(" "), _c("a", {
    staticClass: "feature-card imgIconBlock",
    on: {
      click: function click($event) {
        return _vm.newApp();
      }
    }
  }, [_vm._m(1), _vm._v(" "), _c("h4", {
    staticClass: "text-center"
  }, [_vm._v("নামজারি আবেদন")])]), _vm._v(" "), _c("a", {
    staticClass: "feature-card imgIconBlock",
    on: {
      click: _vm.srchDraftApplicationModal
    }
  }, [_vm._m(2), _vm._v(" "), _c("h4", [_vm._v("খসড়া আবেদন")])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 col-space mb-5"
  }, [_c("div", {
    staticClass: "feature-white-box"
  }, [_c("router-link", {
    staticClass: "feature-card imgIconBlock",
    attrs: {
      to: "/search-application"
    }
  }, [_c("div", {
    staticClass: "feature-card-icon imgIcon"
  }, [_c("img", {
    staticClass: "iconShow",
    attrs: {
      src: "/images/icon-folder-src-green.svg",
      alt: "icon"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "iconHover",
    attrs: {
      src: "/images/icon-folder-src-white.svg",
      alt: "icon"
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "text-center"
  }, [_vm._v("আবেদনের সর্বশেষ অবস্থা")])])], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "documentary-section bg-white"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("infographic", {
    on: {
      getDateTime: _vm.getDate
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "area-namjari-docs bg-white"
  }, [_c(_vm.current_area_component, {
    tag: "component",
    attrs: {
      necessaryData: _vm.currentNamjariAreaComponentProps
    },
    on: {
      changeNamjariAreaComponent: _vm.updateNamjariAreaComponent
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("h6", {
    staticClass: "input_bangla text-right",
    staticStyle: {
      "font-size": "11px !important"
    }
  }, [_vm._v(_vm._s(_vm.last_updated_date_time))])])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "home-slider"
  }, [_c("div", {
    staticClass: "carousel slide",
    attrs: {
      id: "lmtHomeSlider"
    }
  }, [_c("div", {
    staticClass: "carousel-inner"
  }, [_c("div", {
    staticClass: "carousel-item active"
  }, [_c("div", {
    staticClass: "lmt-home-slider-item",
    staticStyle: {
      "background-image": "url('/images/slider/image-01.jpg')"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("div", {
    staticClass: "lmt-home-slider-item",
    staticStyle: {
      "background-image": "url('/images/slider/image-06.jpg')"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("div", {
    staticClass: "lmt-home-slider-item",
    staticStyle: {
      "background-image": "url('/images/slider/image-07.jpeg')"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "home-slider-nav"
  }, [_c("a", {
    staticClass: "carousel-control-prev",
    attrs: {
      href: "#lmtHomeSlider",
      role: "button",
      "data-slide": "prev"
    }
  }, [_c("span", {
    staticClass: "carousel-control-prev-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Previous")])]), _vm._v(" "), _c("ol", {
    staticClass: "carousel-indicators"
  }, [_c("li", {
    staticClass: "active",
    attrs: {
      "data-target": "#lmtHomeSlider",
      "data-slide-to": "2"
    }
  }, [_c("div", {
    staticClass: "lmt-hs-nav-item",
    staticStyle: {
      "background-image": "url('/images/slider/image-01.jpg')"
    }
  })]), _vm._v(" "), _c("li", {
    attrs: {
      "data-target": "#lmtHomeSlider",
      "data-slide-to": "3"
    }
  }, [_c("div", {
    staticClass: "lmt-hs-nav-item",
    staticStyle: {
      "background-image": "url('/images/slider/image-06.jpg')"
    }
  })]), _vm._v(" "), _c("li", {
    attrs: {
      "data-target": "#lmtHomeSlider",
      "data-slide-to": "4"
    }
  }, [_c("div", {
    staticClass: "lmt-hs-nav-item",
    staticStyle: {
      "background-image": "url('/images/slider/image-07.jpeg')"
    }
  })])]), _vm._v(" "), _c("a", {
    staticClass: "carousel-control-next",
    attrs: {
      href: "#lmtHomeSlider",
      role: "button",
      "data-slide": "next"
    }
  }, [_c("span", {
    staticClass: "carousel-control-next-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Next")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "feature-card-icon imgIcon"
  }, [_c("img", {
    staticClass: "iconShow",
    attrs: {
      src: "/images/icon-namjari-green.svg",
      alt: "icon"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "iconHover",
    attrs: {
      src: "/images/icon-namjari-white.svg",
      alt: "icon"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "feature-card-icon imgIcon"
  }, [_c("img", {
    staticClass: "iconShow",
    attrs: {
      src: "/images/Draft-Green.svg",
      alt: "icon"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "iconHover",
    attrs: {
      src: "/images/Draft-White.svg",
      alt: "icon"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=template&id=ad7b21ac&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=template&id=ad7b21ac&scoped=true& ***!
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
    staticClass: "area-namjari-docs bg-white"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12 mb-4"
  }, [_c("div", {
    staticClass: "section-title text-center"
  }, [_c("h2", [_vm._v("এলাকা ভিওিক নামজারি তথ্যচিত্র")]), _vm._v(" "), _c("p", [_vm._v("(" + _vm._s(_vm.necessaryData.division_name) + " বিভাগ এর  বিগত ৯০ দিনের )")])])])]), _vm._v(" "), _c("div", {
    staticClass: "area-namjari-container"
  }, [_vm.loading_icon ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      "margin-left": "47%",
      height: "45px",
      width: "45px",
      "font-size": "19px"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _c("div", {
    staticClass: "area-namjari-docs-list"
  }, [_c("div", {
    staticClass: "area-land-njd-info"
  }, [_c("div", {
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
    staticClass: "btn btn-success",
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: function click($event) {
        return _vm.previousComponent();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-chevron-circle-left",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" পূর্বে")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: function click($event) {
        return _vm.previousComponent();
      }
    }
  }, [_vm._v(" বিভাগ")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active",
    attrs: {
      "aria-current": "page"
    }
  }, [_vm._v("জেলা")])])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm.districtData.length ? _c("div", {
    staticClass: "list-items"
  }, _vm._l(_vm.districtData, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "area-land-njd-item",
      "class": {
        "orange-item": parseInt(item.average_nispotti) > parseInt(_vm.necessaryData.division_avg_nisponno)
      }
    }, [_c("div", {
      staticClass: "area-info-col ari-sl-no"
    }, [_c("span", {
      staticClass: "sl-round-num"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(index + 1)))])]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col ari-sl-dist"
    }, [_vm._v("\n                                    " + _vm._s(Boolean(item.district) ? item.district.trim() : "") + "\n                                ")]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("number_format")(item.new_application)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("number_format")(item.total_nispotti)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(item.average_nispotti)) + " দিন\n")]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(item.monjur_har)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("number_format")(item.pending_application)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(item.twenty_eight_days_up)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col ari-link"
    }, [_c("a", {
      staticClass: "icon-arrow-circle",
      attrs: {
        href: "javascript:void(0)"
      },
      on: {
        click: function click($event) {
          _vm.callAreaNamjariThanaComponent(item.district_id, item.district.trim(), item.average_nispotti);
        }
      }
    }, [_c("img", {
      attrs: {
        src: "/images/slider-arrow-right.png",
        alt: "icon"
      }
    })])])]);
  }), 0) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "area-land-njd-item area-land-njd-title"
  }, [_c("div", {
    staticClass: "area-info-col ari-col-4"
  }, [_vm._v("বিগত ৯০ দিনে")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col ari-col-2"
  }, [_vm._v("গতকাল পর্যন্ত অনিস্পত্তিকৃত")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "area-land-njd-item area-land-njd-head"
  }, [_c("div", {
    staticClass: "area-info-col ari-sl-no"
  }, [_vm._v("ক্রম")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col ari-sl-dist"
  }, [_vm._v("জেলা")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("নতুন আবেদন")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("মোট নিস্পত্তিকৃত আবেদন")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("গড় নিস্পত্তি "), _c("span", {
    staticClass: "clr-red text-star"
  }, [_vm._v(" * ")])]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("মঞ্জুর হার")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("মোট আবেদন")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("২৮ দিনের উর্দ্ধে")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col ari-link"
  }, [_vm._v("#")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=template&id=867bdca4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=template&id=867bdca4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "area-namjari-docs bg-white"
  }, [_c("div", {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "area-namjari-container"
  }, [_vm.loading_icon ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      "margin-left": "47%",
      height: "45px",
      width: "45px",
      "font-size": "19px"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _c("div", {
    staticClass: "area-namjari-docs-list"
  }, [_c("div", {
    staticClass: "area-land-njd-info"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm.filterDivisionData.length ? _c("div", {
    staticClass: "list-items"
  }, _vm._l(_vm.filterDivisionData, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "area-land-njd-item",
      "class": {
        "orange-item": parseInt(item.average_nispotti) > parseInt(_vm.national_avg_nisponno)
      }
    }, [_c("div", {
      staticClass: "area-info-col ari-sl-no"
    }, [_c("span", {
      staticClass: "sl-round-num"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(index + 1)))])]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col ari-sl-dist"
    }, [_vm._v("\n                                    " + _vm._s(Boolean(item.division) ? item.division.trim() : "") + "\n                                ")]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("number_format")(item.new_application)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("number_format")(item.total_nispotti)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(item.average_nispotti)) + " দিন\n")]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(item.monjur_har)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("number_format")(item.pending_application)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(item.twenty_eight_days_up)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col ari-link"
    }, [_c("a", {
      staticClass: "icon-arrow-circle",
      attrs: {
        href: "javascript:void(0)"
      },
      on: {
        click: function click($event) {
          _vm.callAreaNamjariDistrictComponent(item.division_id, item.division.trim(), item.average_nispotti);
        }
      }
    }, [_c("img", {
      attrs: {
        src: "/images/slider-arrow-right.png",
        alt: "icon"
      }
    })])])]);
  }), 0) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12 mb-4"
  }, [_c("div", {
    staticClass: "section-title text-center"
  }, [_c("h2", [_vm._v("এলাকা ভিওিক নামজারি তথ্যচিত্র")]), _vm._v("\n                        (সমগ্র বাংলাদেশের বিগত ৯০ দিনের )\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "area-land-njd-item area-land-njd-title"
  }, [_c("div", {
    staticClass: "area-info-col ari-col-4"
  }, [_vm._v("বিগত ৯০ দিনে")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col ari-col-2"
  }, [_vm._v("গতকাল পর্যন্ত অনিস্পত্তিকৃত")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "area-land-njd-item area-land-njd-head"
  }, [_c("div", {
    staticClass: "area-info-col ari-sl-no"
  }, [_vm._v("ক্রম")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col ari-sl-dist"
  }, [_vm._v("বিভাগ")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("নতুন আবেদন")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("মোট নিস্পত্তিকৃত আবেদন")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("গড় নিস্পত্তি "), _c("span", {
    staticClass: "clr-red text-star"
  }, [_vm._v(" * ")])]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("মঞ্জুর হার")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("মোট আবেদন")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("২৮ দিনের উর্দ্ধে")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col ari-link"
  }, [_vm._v("#")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=template&id=79f447f4&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=template&id=79f447f4&scoped=true& ***!
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
    staticClass: "area-namjari-docs bg-white"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12 mb-4"
  }, [_c("div", {
    staticClass: "section-title text-center"
  }, [_c("h2", [_vm._v("এলাকা ভিওিক নামজারি তথ্যচিত্র")]), _vm._v(" "), _c("p", [_vm._v("(" + _vm._s(_vm.necessaryData.district_name) + " জেলা এর  বিগত ৯০ দিনের )")])])])]), _vm._v(" "), _c("div", {
    staticClass: "area-namjari-container"
  }, [_vm.loading_icon ? _c("div", {
    staticClass: "spinner-border text-primary",
    staticStyle: {
      "margin-left": "47%",
      height: "45px",
      width: "45px",
      "font-size": "19px"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _c("div", {
    staticClass: "area-namjari-docs-list"
  }, [_c("div", {
    staticClass: "area-land-njd-info"
  }, [_c("div", {
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
    staticClass: "btn btn-success",
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: function click($event) {
        return _vm.previousComponent("AreaNamjariDistrict");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-chevron-circle-left",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" পূর্বে")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: function click($event) {
        return _vm.previousComponent("AreaNamjariDivison");
      }
    }
  }, [_vm._v(" বিভাগ")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: function click($event) {
        return _vm.previousComponent("AreaNamjariDistrict");
      }
    }
  }, [_vm._v(" জেলা")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active",
    attrs: {
      "aria-current": "page"
    }
  }, [_vm._v("উপজেলা")])])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm.subDistrictData.length ? _c("div", {
    staticClass: "list-items"
  }, _vm._l(_vm.subDistrictData, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "area-land-njd-item",
      "class": {
        "orange-item": parseInt(item.average_nispotti) > parseInt(_vm.necessaryData.district_avg_nisponno)
      }
    }, [_c("div", {
      staticClass: "area-info-col ari-sl-no"
    }, [_c("span", {
      staticClass: "sl-round-num"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(index + 1)))])]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col ari-sl-dist"
    }, [_vm._v("\n                                    " + _vm._s(Boolean(item.upazila) ? item.upazila.trim() : "") + "\n                                ")]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("number_format")(item.new_application)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("number_format")(item.total_nispotti)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(item.average_nispotti)) + " দিন\n")]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(item.monjur_har)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("number_format")(item.pending_application)))]), _vm._v(" "), _c("div", {
      staticClass: "area-info-col"
    }, [_vm._v(_vm._s(_vm._f("en2bn")(item.twenty_eight_days_up)))])]);
  }), 0) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "area-land-njd-item area-land-njd-title"
  }, [_c("div", {
    staticClass: "area-info-col ari-col-4"
  }, [_vm._v("বিগত ৯০ দিনে")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col ari-col-2"
  }, [_vm._v("গতকাল পর্যন্ত অনিস্পত্তিকৃত")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "area-land-njd-item area-land-njd-head"
  }, [_c("div", {
    staticClass: "area-info-col ari-sl-no"
  }, [_vm._v("ক্রম")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col ari-sl-dist"
  }, [_vm._v("উপজেলা")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("নতুন আবেদন")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("মোট নিস্পত্তিকৃত আবেদন")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("গড় নিস্পত্তি "), _c("span", {
    staticClass: "clr-red text-star"
  }, [_vm._v(" * ")])]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("মঞ্জুর হার")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("মোট আবেদন")]), _vm._v(" "), _c("div", {
    staticClass: "area-info-col"
  }, [_vm._v("২৮ দিনের উর্দ্ধে")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.feature-card h4[data-v-f2b6376c], .feature-card h3[data-v-f2b6376c] {\r\n    font-size: 1.08rem;\r\n    line-height: 1.1;\r\n    margin: 5px 0;\r\n    text-align: center;\n}\n@media (min-width: 1200px) {\n.row.col-space-40 .col-space[data-v-f2b6376c] {\r\n        padding-left: 35px;\r\n        padding-right: 35px;\n}\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.activeSpinners[data-v-ad7b21ac] {\r\n    text-align: center;\r\n    padding-top: 18px;\n}\n.bg-warning-modified[data-v-ad7b21ac] {\r\n    background-color: #ffc1073d !important;\n}\ntable tr > th[data-v-ad7b21ac] {\r\n    vertical-align: top !important;\n}\ntable tr > td[data-v-ad7b21ac] {\r\n    vertical-align: middle !important;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.activeSpinners[data-v-867bdca4] {\r\n    text-align: center;\r\n    padding-top: 18px;\n}\n.bg-warning-modified[data-v-867bdca4] {\r\n    background-color: #ffc1073d !important;\n}\n.table-header[data-v-867bdca4] {\r\n    border: 1px solid #ABCD9D;\r\n    background: #DFEBE5;\r\n    padding: 10px;\n}\ntable tr > th[data-v-867bdca4] {\r\n    vertical-align: top !important;\n}\ntable tr > td[data-v-867bdca4] {\r\n    vertical-align: middle !important;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.activeSpinners[data-v-79f447f4] {\r\n    text-align: center;\r\n    padding-top: 18px;\n}\n.bg-warning-modified[data-v-79f447f4] {\r\n    background-color: #ffc1073d !important;\n}\ntable tr > th[data-v-79f447f4] {\r\n    vertical-align: top !important;\n}\ntable tr > td[data-v-79f447f4] {\r\n    vertical-align: middle !important;\n}\n.area-land-njd-info .area-land-njd-item[data-v-79f447f4] {\r\n    position: relative;\r\n    padding-left: 200px;\r\n    padding-right: 0px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    border-bottom: 1px solid #bbddfe;\r\n    border-top: none;\n}\n@media (max-width: 991px){\n.area-land-njd-info .area-land-njd-item[data-v-79f447f4] {\r\n        position: relative;\r\n        padding-left: 145px;\r\n        padding-right: 0px;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        border-bottom: 1px solid #bbddfe;\r\n        border-top: none;\n}\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css&");

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

/***/ "./resources/js/components/Form/infographic.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Form/infographic.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infographic_vue_vue_type_template_id_5cfa56cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infographic.vue?vue&type=template&id=5cfa56cc& */ "./resources/js/components/Form/infographic.vue?vue&type=template&id=5cfa56cc&");
/* harmony import */ var _infographic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infographic.vue?vue&type=script&lang=js& */ "./resources/js/components/Form/infographic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _infographic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _infographic_vue_vue_type_template_id_5cfa56cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _infographic_vue_vue_type_template_id_5cfa56cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form/infographic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form/infographic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Form/infographic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infographic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./infographic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/infographic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infographic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form/infographic.vue?vue&type=template&id=5cfa56cc&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Form/infographic.vue?vue&type=template&id=5cfa56cc& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_infographic_vue_vue_type_template_id_5cfa56cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./infographic.vue?vue&type=template&id=5cfa56cc& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form/infographic.vue?vue&type=template&id=5cfa56cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_infographic_vue_vue_type_template_id_5cfa56cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_infographic_vue_vue_type_template_id_5cfa56cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2b6376c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AreaNamjariDistrict_vue_vue_type_template_id_ad7b21ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreaNamjariDistrict.vue?vue&type=template&id=ad7b21ac&scoped=true& */ "./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=template&id=ad7b21ac&scoped=true&");
/* harmony import */ var _AreaNamjariDistrict_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AreaNamjariDistrict.vue?vue&type=script&lang=js& */ "./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AreaNamjariDistrict_vue_vue_type_style_index_0_id_ad7b21ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css& */ "./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AreaNamjariDistrict_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AreaNamjariDistrict_vue_vue_type_template_id_ad7b21ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AreaNamjariDistrict_vue_vue_type_template_id_ad7b21ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ad7b21ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariDistrict.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_style_index_0_id_ad7b21ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=style&index=0&id=ad7b21ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_style_index_0_id_ad7b21ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_style_index_0_id_ad7b21ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_style_index_0_id_ad7b21ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_style_index_0_id_ad7b21ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=template&id=ad7b21ac&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=template&id=ad7b21ac&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_template_id_ad7b21ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariDistrict.vue?vue&type=template&id=ad7b21ac&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDistrict.vue?vue&type=template&id=ad7b21ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_template_id_ad7b21ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDistrict_vue_vue_type_template_id_ad7b21ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AreaNamjariDivison_vue_vue_type_template_id_867bdca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreaNamjariDivison.vue?vue&type=template&id=867bdca4&scoped=true& */ "./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=template&id=867bdca4&scoped=true&");
/* harmony import */ var _AreaNamjariDivison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AreaNamjariDivison.vue?vue&type=script&lang=js& */ "./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AreaNamjariDivison_vue_vue_type_style_index_0_id_867bdca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css& */ "./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AreaNamjariDivison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AreaNamjariDivison_vue_vue_type_template_id_867bdca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AreaNamjariDivison_vue_vue_type_template_id_867bdca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "867bdca4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariDivison.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_style_index_0_id_867bdca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=style&index=0&id=867bdca4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_style_index_0_id_867bdca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_style_index_0_id_867bdca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_style_index_0_id_867bdca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_style_index_0_id_867bdca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=template&id=867bdca4&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=template&id=867bdca4&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_template_id_867bdca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariDivison.vue?vue&type=template&id=867bdca4&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariDivison.vue?vue&type=template&id=867bdca4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_template_id_867bdca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariDivison_vue_vue_type_template_id_867bdca4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AreaNamjariThana_vue_vue_type_template_id_79f447f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreaNamjariThana.vue?vue&type=template&id=79f447f4&scoped=true& */ "./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=template&id=79f447f4&scoped=true&");
/* harmony import */ var _AreaNamjariThana_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AreaNamjariThana.vue?vue&type=script&lang=js& */ "./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AreaNamjariThana_vue_vue_type_style_index_0_id_79f447f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css& */ "./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AreaNamjariThana_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AreaNamjariThana_vue_vue_type_template_id_79f447f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AreaNamjariThana_vue_vue_type_template_id_79f447f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79f447f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NamjariDocumentary/AreaNamjariThana.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariThana.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_style_index_0_id_79f447f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=style&index=0&id=79f447f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_style_index_0_id_79f447f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_style_index_0_id_79f447f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_style_index_0_id_79f447f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_style_index_0_id_79f447f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=template&id=79f447f4&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=template&id=79f447f4&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_template_id_79f447f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaNamjariThana.vue?vue&type=template&id=79f447f4&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NamjariDocumentary/AreaNamjariThana.vue?vue&type=template&id=79f447f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_template_id_79f447f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaNamjariThana_vue_vue_type_template_id_79f447f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/ValidationFile.js":
/*!************************************************!*\
  !*** ./resources/js/helpers/ValidationFile.js ***!
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
var ValidationFile = /*#__PURE__*/function () {
  function ValidationFile() {
    _classCallCheck(this, ValidationFile);
  }
  _createClass(ValidationFile, [{
    key: "validationMechanism",
    value: function validationMechanism(ref_obj, selector, validation_roles) {
      function convert2English(banVal) {
        banVal = banVal.toString();
        banVal = banVal.replaceAll("০", "0");
        banVal = banVal.replaceAll("১", "1");
        banVal = banVal.replaceAll("২", "2");
        banVal = banVal.replaceAll("৩", "3");
        banVal = banVal.replaceAll("৪", "4");
        banVal = banVal.replaceAll("৫", "5");
        banVal = banVal.replaceAll("৬", "6");
        banVal = banVal.replaceAll("৭", "7");
        banVal = banVal.replaceAll("৮", "8");
        banVal = banVal.replaceAll("৯", "9");
        banVal = banVal.replaceAll("।", ".");
        return banVal;
      }
      var allSelector = ref_obj.querySelectorAll(selector);
      var allFieldValidate = [];
      // for required roles
      if (validation_roles === 'required') {
        allSelector.forEach(function (e) {
          if (e.value === "" || e.value === undefined) {
            e.className += ' error_message_required';
            allFieldValidate.push(0);
          } else {
            e.classList.remove("error_message_required");
          }
        });
      }
      if (validation_roles === 'email') {
        allSelector.forEach(function (e) {
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
      }
      if (validation_roles === 'mobile') {
        allSelector.forEach(function (e) {
          if (e.value.length) {
            var regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
            var found = convert2English(e.value).match(regex);
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
      }
      if (validation_roles === 'only_character') {
        allSelector.forEach(function (e) {
          if (e.value.length) {
            var regex = /^[a-zA-Z]+$/;
            var found = convert2English(e.value).match(regex);
            if (found) {
              e.classList.remove("error_message_only_character");
            } else {
              e.className += ' error_message_only_character';
              allFieldValidate.push(0);
            }
          } else {
            e.classList.remove("error_message_only_character");
          }
        });
      }
      if (validation_roles === 'date_picker') {
        allSelector.forEach(function (e) {
          var value = e.querySelector('.input-group').querySelector('input').value;
          if (value === "" || value === undefined) {
            e.className += ' error_message_required';
            allFieldValidate.push(0);
          } else {
            e.classList.remove("error_message_required");
          }
        });
      }
      if (validation_roles === 'only_number') {
        allSelector.forEach(function (e) {
          if (e.value.length) {
            var regex = /^[0-9.,'০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']{1,}([/])?([0-9.,'০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']{1,})?$/;
            var found = e.value.match(regex);
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
      }
      if (validation_roles === 'nid') {
        allSelector.forEach(function (e) {
          if (e.value.length) {
            var regex = /^\d+$/;
            var found = convert2English(e.value).match(regex);
            if (found) {
              if (e.value.length == 10 || e.value.length == 13 || e.value.length == 17) {
                e.classList.remove('error_message_required');
              } else {
                e.classList.remove('error_message_required');
                e.className += ' error_message_required';
                allFieldValidate.push(0);
              }
            } else {
              e.classList.remove('error_message_required');
              e.className += ' error_message_required';
              allFieldValidate.push(0);
            }
          } else {
            // e.classList.remove('error_message_required');
          }
        });
      }
      return allFieldValidate.indexOf(0) === -1;
    }
  }]);
  return ValidationFile;
}();
/* harmony default export */ __webpack_exports__["default"] = (new ValidationFile());

/***/ })

}]);