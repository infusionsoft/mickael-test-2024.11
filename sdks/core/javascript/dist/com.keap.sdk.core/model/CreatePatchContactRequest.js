"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Address = _interopRequireDefault(require("./Address"));
var _BasicCompany = _interopRequireDefault(require("./BasicCompany"));
var _CreateContactUtmPropertiesRequest = _interopRequireDefault(require("./CreateContactUtmPropertiesRequest"));
var _CustomFieldValue = _interopRequireDefault(require("./CustomFieldValue"));
var _EmailAddressRequest = _interopRequireDefault(require("./EmailAddressRequest"));
var _FaxNumber = _interopRequireDefault(require("./FaxNumber"));
var _OriginRequest = _interopRequireDefault(require("./OriginRequest"));
var _PhoneNumber = _interopRequireDefault(require("./PhoneNumber"));
var _SocialAccount = _interopRequireDefault(require("./SocialAccount"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The CreatePatchContactRequest model module.
 * @module com.keap.sdk.core/model/CreatePatchContactRequest
 * @version 0.0.31
 */
var CreatePatchContactRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePatchContactRequest</code>.
   * @alias module:com.keap.sdk.core/model/CreatePatchContactRequest
   */
  function CreatePatchContactRequest() {
    _classCallCheck(this, CreatePatchContactRequest);
    CreatePatchContactRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreatePatchContactRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreatePatchContactRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreatePatchContactRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreatePatchContactRequest} The populated <code>CreatePatchContactRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePatchContactRequest();
        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], [_Address["default"]]);
        }
        if (data.hasOwnProperty('anniversary_date')) {
          obj['anniversary_date'] = _ApiClient["default"].convertToType(data['anniversary_date'], 'String');
        }
        if (data.hasOwnProperty('birth_date')) {
          obj['birth_date'] = _ApiClient["default"].convertToType(data['birth_date'], 'String');
        }
        if (data.hasOwnProperty('company')) {
          obj['company'] = _BasicCompany["default"].constructFromObject(data['company']);
        }
        if (data.hasOwnProperty('contact_type')) {
          obj['contact_type'] = _ApiClient["default"].convertToType(data['contact_type'], 'String');
        }
        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _ApiClient["default"].convertToType(data['custom_fields'], [_CustomFieldValue["default"]]);
        }
        if (data.hasOwnProperty('email_addresses')) {
          obj['email_addresses'] = _ApiClient["default"].convertToType(data['email_addresses'], [_EmailAddressRequest["default"]]);
        }
        if (data.hasOwnProperty('family_name')) {
          obj['family_name'] = _ApiClient["default"].convertToType(data['family_name'], 'String');
        }
        if (data.hasOwnProperty('fax_numbers')) {
          obj['fax_numbers'] = _ApiClient["default"].convertToType(data['fax_numbers'], [_FaxNumber["default"]]);
        }
        if (data.hasOwnProperty('given_name')) {
          obj['given_name'] = _ApiClient["default"].convertToType(data['given_name'], 'String');
        }
        if (data.hasOwnProperty('job_title')) {
          obj['job_title'] = _ApiClient["default"].convertToType(data['job_title'], 'String');
        }
        if (data.hasOwnProperty('leadsource_id')) {
          obj['leadsource_id'] = _ApiClient["default"].convertToType(data['leadsource_id'], 'String');
        }
        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient["default"].convertToType(data['middle_name'], 'String');
        }
        if (data.hasOwnProperty('origin')) {
          obj['origin'] = _OriginRequest["default"].constructFromObject(data['origin']);
        }
        if (data.hasOwnProperty('owner_id')) {
          obj['owner_id'] = _ApiClient["default"].convertToType(data['owner_id'], 'String');
        }
        if (data.hasOwnProperty('phone_numbers')) {
          obj['phone_numbers'] = _ApiClient["default"].convertToType(data['phone_numbers'], [_PhoneNumber["default"]]);
        }
        if (data.hasOwnProperty('preferred_locale')) {
          obj['preferred_locale'] = _ApiClient["default"].convertToType(data['preferred_locale'], 'String');
        }
        if (data.hasOwnProperty('preferred_name')) {
          obj['preferred_name'] = _ApiClient["default"].convertToType(data['preferred_name'], 'String');
        }
        if (data.hasOwnProperty('prefix')) {
          obj['prefix'] = _ApiClient["default"].convertToType(data['prefix'], 'String');
        }
        if (data.hasOwnProperty('referral_code')) {
          obj['referral_code'] = _ApiClient["default"].convertToType(data['referral_code'], 'String');
        }
        if (data.hasOwnProperty('social_accounts')) {
          obj['social_accounts'] = _ApiClient["default"].convertToType(data['social_accounts'], [_SocialAccount["default"]]);
        }
        if (data.hasOwnProperty('source_type')) {
          obj['source_type'] = _ApiClient["default"].convertToType(data['source_type'], 'String');
        }
        if (data.hasOwnProperty('spouse_name')) {
          obj['spouse_name'] = _ApiClient["default"].convertToType(data['spouse_name'], 'String');
        }
        if (data.hasOwnProperty('suffix')) {
          obj['suffix'] = _ApiClient["default"].convertToType(data['suffix'], 'String');
        }
        if (data.hasOwnProperty('time_zone')) {
          obj['time_zone'] = _ApiClient["default"].convertToType(data['time_zone'], 'String');
        }
        if (data.hasOwnProperty('utm_parameters')) {
          obj['utm_parameters'] = _CreateContactUtmPropertiesRequest["default"].constructFromObject(data['utm_parameters']);
        }
        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePatchContactRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePatchContactRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['addresses']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['addresses'])) {
          throw new Error("Expected the field `addresses` to be an array in the JSON data but got " + data['addresses']);
        }
        // validate the optional field `addresses` (array)
        var _iterator = _createForOfIteratorHelper(data['addresses']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _Address["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['anniversary_date'] && !(typeof data['anniversary_date'] === 'string' || data['anniversary_date'] instanceof String)) {
        throw new Error("Expected the field `anniversary_date` to be a primitive type in the JSON string but got " + data['anniversary_date']);
      }
      // ensure the json data is a string
      if (data['birth_date'] && !(typeof data['birth_date'] === 'string' || data['birth_date'] instanceof String)) {
        throw new Error("Expected the field `birth_date` to be a primitive type in the JSON string but got " + data['birth_date']);
      }
      // validate the optional field `company`
      if (data['company']) {
        // data not null
        _BasicCompany["default"].validateJSON(data['company']);
      }
      // ensure the json data is a string
      if (data['contact_type'] && !(typeof data['contact_type'] === 'string' || data['contact_type'] instanceof String)) {
        throw new Error("Expected the field `contact_type` to be a primitive type in the JSON string but got " + data['contact_type']);
      }
      if (data['custom_fields']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['custom_fields'])) {
          throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
        }
        // validate the optional field `custom_fields` (array)
        var _iterator2 = _createForOfIteratorHelper(data['custom_fields']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _CustomFieldValue["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['email_addresses']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['email_addresses'])) {
          throw new Error("Expected the field `email_addresses` to be an array in the JSON data but got " + data['email_addresses']);
        }
        // validate the optional field `email_addresses` (array)
        var _iterator3 = _createForOfIteratorHelper(data['email_addresses']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            _EmailAddressRequest["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['family_name'] && !(typeof data['family_name'] === 'string' || data['family_name'] instanceof String)) {
        throw new Error("Expected the field `family_name` to be a primitive type in the JSON string but got " + data['family_name']);
      }
      if (data['fax_numbers']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['fax_numbers'])) {
          throw new Error("Expected the field `fax_numbers` to be an array in the JSON data but got " + data['fax_numbers']);
        }
        // validate the optional field `fax_numbers` (array)
        var _iterator4 = _createForOfIteratorHelper(data['fax_numbers']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item3 = _step4.value;
            _FaxNumber["default"].validateJSON(_item3);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['given_name'] && !(typeof data['given_name'] === 'string' || data['given_name'] instanceof String)) {
        throw new Error("Expected the field `given_name` to be a primitive type in the JSON string but got " + data['given_name']);
      }
      // ensure the json data is a string
      if (data['job_title'] && !(typeof data['job_title'] === 'string' || data['job_title'] instanceof String)) {
        throw new Error("Expected the field `job_title` to be a primitive type in the JSON string but got " + data['job_title']);
      }
      // ensure the json data is a string
      if (data['leadsource_id'] && !(typeof data['leadsource_id'] === 'string' || data['leadsource_id'] instanceof String)) {
        throw new Error("Expected the field `leadsource_id` to be a primitive type in the JSON string but got " + data['leadsource_id']);
      }
      // ensure the json data is a string
      if (data['middle_name'] && !(typeof data['middle_name'] === 'string' || data['middle_name'] instanceof String)) {
        throw new Error("Expected the field `middle_name` to be a primitive type in the JSON string but got " + data['middle_name']);
      }
      // validate the optional field `origin`
      if (data['origin']) {
        // data not null
        _OriginRequest["default"].validateJSON(data['origin']);
      }
      // ensure the json data is a string
      if (data['owner_id'] && !(typeof data['owner_id'] === 'string' || data['owner_id'] instanceof String)) {
        throw new Error("Expected the field `owner_id` to be a primitive type in the JSON string but got " + data['owner_id']);
      }
      if (data['phone_numbers']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['phone_numbers'])) {
          throw new Error("Expected the field `phone_numbers` to be an array in the JSON data but got " + data['phone_numbers']);
        }
        // validate the optional field `phone_numbers` (array)
        var _iterator5 = _createForOfIteratorHelper(data['phone_numbers']),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _item4 = _step5.value;
            _PhoneNumber["default"].validateJSON(_item4);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['preferred_locale'] && !(typeof data['preferred_locale'] === 'string' || data['preferred_locale'] instanceof String)) {
        throw new Error("Expected the field `preferred_locale` to be a primitive type in the JSON string but got " + data['preferred_locale']);
      }
      // ensure the json data is a string
      if (data['preferred_name'] && !(typeof data['preferred_name'] === 'string' || data['preferred_name'] instanceof String)) {
        throw new Error("Expected the field `preferred_name` to be a primitive type in the JSON string but got " + data['preferred_name']);
      }
      // ensure the json data is a string
      if (data['prefix'] && !(typeof data['prefix'] === 'string' || data['prefix'] instanceof String)) {
        throw new Error("Expected the field `prefix` to be a primitive type in the JSON string but got " + data['prefix']);
      }
      // ensure the json data is a string
      if (data['referral_code'] && !(typeof data['referral_code'] === 'string' || data['referral_code'] instanceof String)) {
        throw new Error("Expected the field `referral_code` to be a primitive type in the JSON string but got " + data['referral_code']);
      }
      if (data['social_accounts']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['social_accounts'])) {
          throw new Error("Expected the field `social_accounts` to be an array in the JSON data but got " + data['social_accounts']);
        }
        // validate the optional field `social_accounts` (array)
        var _iterator6 = _createForOfIteratorHelper(data['social_accounts']),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _item5 = _step6.value;
            _SocialAccount["default"].validateJSON(_item5);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['source_type'] && !(typeof data['source_type'] === 'string' || data['source_type'] instanceof String)) {
        throw new Error("Expected the field `source_type` to be a primitive type in the JSON string but got " + data['source_type']);
      }
      // ensure the json data is a string
      if (data['spouse_name'] && !(typeof data['spouse_name'] === 'string' || data['spouse_name'] instanceof String)) {
        throw new Error("Expected the field `spouse_name` to be a primitive type in the JSON string but got " + data['spouse_name']);
      }
      // ensure the json data is a string
      if (data['suffix'] && !(typeof data['suffix'] === 'string' || data['suffix'] instanceof String)) {
        throw new Error("Expected the field `suffix` to be a primitive type in the JSON string but got " + data['suffix']);
      }
      // ensure the json data is a string
      if (data['time_zone'] && !(typeof data['time_zone'] === 'string' || data['time_zone'] instanceof String)) {
        throw new Error("Expected the field `time_zone` to be a primitive type in the JSON string but got " + data['time_zone']);
      }
      // validate the optional field `utm_parameters`
      if (data['utm_parameters']) {
        // data not null
        _CreateContactUtmPropertiesRequest["default"].validateJSON(data['utm_parameters']);
      }
      // ensure the json data is a string
      if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
        throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
      }
      return true;
    }
  }]);
}();
/**
 * If an empty array is specified, all existing values will be removed.
 * @member {Array.<module:com.keap.sdk.core/model/Address>} addresses
 */
CreatePatchContactRequest.prototype['addresses'] = undefined;

/**
 * @member {String} anniversary_date
 */
CreatePatchContactRequest.prototype['anniversary_date'] = undefined;

/**
 * @member {String} birth_date
 */
CreatePatchContactRequest.prototype['birth_date'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/BasicCompany} company
 */
CreatePatchContactRequest.prototype['company'] = undefined;

/**
 * @member {String} contact_type
 */
CreatePatchContactRequest.prototype['contact_type'] = undefined;

/**
 * If an empty array is specified, all existing values will be removed.
 * @member {Array.<module:com.keap.sdk.core/model/CustomFieldValue>} custom_fields
 */
CreatePatchContactRequest.prototype['custom_fields'] = undefined;

/**
 * If an empty array is specified, all existing values will be removed.
 * @member {Array.<module:com.keap.sdk.core/model/EmailAddressRequest>} email_addresses
 */
CreatePatchContactRequest.prototype['email_addresses'] = undefined;

/**
 * @member {String} family_name
 */
CreatePatchContactRequest.prototype['family_name'] = undefined;

/**
 * If an empty array is specified, all existing values will be removed.
 * @member {Array.<module:com.keap.sdk.core/model/FaxNumber>} fax_numbers
 */
CreatePatchContactRequest.prototype['fax_numbers'] = undefined;

/**
 * @member {String} given_name
 */
CreatePatchContactRequest.prototype['given_name'] = undefined;

/**
 * @member {String} job_title
 */
CreatePatchContactRequest.prototype['job_title'] = undefined;

/**
 * @member {String} leadsource_id
 */
CreatePatchContactRequest.prototype['leadsource_id'] = undefined;

/**
 * @member {String} middle_name
 */
CreatePatchContactRequest.prototype['middle_name'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/OriginRequest} origin
 */
CreatePatchContactRequest.prototype['origin'] = undefined;

/**
 * @member {String} owner_id
 */
CreatePatchContactRequest.prototype['owner_id'] = undefined;

/**
 * If an empty array is specified, all existing values will be removed.
 * @member {Array.<module:com.keap.sdk.core/model/PhoneNumber>} phone_numbers
 */
CreatePatchContactRequest.prototype['phone_numbers'] = undefined;

/**
 * @member {String} preferred_locale
 */
CreatePatchContactRequest.prototype['preferred_locale'] = undefined;

/**
 * @member {String} preferred_name
 */
CreatePatchContactRequest.prototype['preferred_name'] = undefined;

/**
 * @member {String} prefix
 */
CreatePatchContactRequest.prototype['prefix'] = undefined;

/**
 * @member {String} referral_code
 */
CreatePatchContactRequest.prototype['referral_code'] = undefined;

/**
 * If an empty array is specified, all existing values will be removed.
 * @member {Array.<module:com.keap.sdk.core/model/SocialAccount>} social_accounts
 */
CreatePatchContactRequest.prototype['social_accounts'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CreatePatchContactRequest.SourceTypeEnum} source_type
 */
CreatePatchContactRequest.prototype['source_type'] = undefined;

/**
 * @member {String} spouse_name
 */
CreatePatchContactRequest.prototype['spouse_name'] = undefined;

/**
 * @member {String} suffix
 */
CreatePatchContactRequest.prototype['suffix'] = undefined;

/**
 * @member {String} time_zone
 */
CreatePatchContactRequest.prototype['time_zone'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CreateContactUtmPropertiesRequest} utm_parameters
 */
CreatePatchContactRequest.prototype['utm_parameters'] = undefined;

/**
 * @member {String} website
 */
CreatePatchContactRequest.prototype['website'] = undefined;

/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
CreatePatchContactRequest['SourceTypeEnum'] = {
  /**
   * value: "SOURCE_TYPE_UNSPECIFIED"
   * @const
   */
  "SOURCE_TYPE_UNSPECIFIED": "SOURCE_TYPE_UNSPECIFIED",
  /**
   * value: "API"
   * @const
   */
  "API": "API",
  /**
   * value: "APPOINTMENT"
   * @const
   */
  "APPOINTMENT": "APPOINTMENT",
  /**
   * value: "FORM_API_HOSTED"
   * @const
   */
  "FORM_API_HOSTED": "FORM_API_HOSTED",
  /**
   * value: "FORM_API_INTERNAL"
   * @const
   */
  "FORM_API_INTERNAL": "FORM_API_INTERNAL",
  /**
   * value: "IMPORT"
   * @const
   */
  "IMPORT": "IMPORT",
  /**
   * value: "INTERNAL_FORM"
   * @const
   */
  "INTERNAL_FORM": "INTERNAL_FORM",
  /**
   * value: "LANDING_PAGE"
   * @const
   */
  "LANDING_PAGE": "LANDING_PAGE",
  /**
   * value: "MANUAL"
   * @const
   */
  "MANUAL": "MANUAL",
  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER",
  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN",
  /**
   * value: "WEBFORM"
   * @const
   */
  "WEBFORM": "WEBFORM",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = CreatePatchContactRequest;