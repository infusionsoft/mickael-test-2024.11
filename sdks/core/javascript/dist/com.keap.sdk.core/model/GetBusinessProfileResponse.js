"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BusinessProfileAddressResponse = _interopRequireDefault(require("./BusinessProfileAddressResponse"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
 * The GetBusinessProfileResponse model module.
 * @module com.keap.sdk.core/model/GetBusinessProfileResponse
 * @version 0.0.20
 */
var GetBusinessProfileResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBusinessProfileResponse</code>.
   * Profile information about the business that owns/uses this account
   * @alias module:com.keap.sdk.core/model/GetBusinessProfileResponse
   */
  function GetBusinessProfileResponse() {
    _classCallCheck(this, GetBusinessProfileResponse);
    GetBusinessProfileResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(GetBusinessProfileResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>GetBusinessProfileResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/GetBusinessProfileResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/GetBusinessProfileResponse} The populated <code>GetBusinessProfileResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBusinessProfileResponse();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _BusinessProfileAddressResponse["default"].constructFromObject(data['address']);
        }
        if (data.hasOwnProperty('business_goals')) {
          obj['business_goals'] = _ApiClient["default"].convertToType(data['business_goals'], ['String']);
        }
        if (data.hasOwnProperty('business_primary_color')) {
          obj['business_primary_color'] = _ApiClient["default"].convertToType(data['business_primary_color'], 'String');
        }
        if (data.hasOwnProperty('business_secondary_color')) {
          obj['business_secondary_color'] = _ApiClient["default"].convertToType(data['business_secondary_color'], 'String');
        }
        if (data.hasOwnProperty('business_type')) {
          obj['business_type'] = _ApiClient["default"].convertToType(data['business_type'], 'String');
        }
        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('language_tag')) {
          obj['language_tag'] = _ApiClient["default"].convertToType(data['language_tag'], 'String');
        }
        if (data.hasOwnProperty('logo_url')) {
          obj['logo_url'] = _ApiClient["default"].convertToType(data['logo_url'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }
        if (data.hasOwnProperty('time_zone')) {
          obj['time_zone'] = _ApiClient["default"].convertToType(data['time_zone'], 'String');
        }
        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetBusinessProfileResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBusinessProfileResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `address`
      if (data['address']) {
        // data not null
        _BusinessProfileAddressResponse["default"].validateJSON(data['address']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['business_goals'])) {
        throw new Error("Expected the field `business_goals` to be an array in the JSON data but got " + data['business_goals']);
      }
      // ensure the json data is a string
      if (data['business_primary_color'] && !(typeof data['business_primary_color'] === 'string' || data['business_primary_color'] instanceof String)) {
        throw new Error("Expected the field `business_primary_color` to be a primitive type in the JSON string but got " + data['business_primary_color']);
      }
      // ensure the json data is a string
      if (data['business_secondary_color'] && !(typeof data['business_secondary_color'] === 'string' || data['business_secondary_color'] instanceof String)) {
        throw new Error("Expected the field `business_secondary_color` to be a primitive type in the JSON string but got " + data['business_secondary_color']);
      }
      // ensure the json data is a string
      if (data['business_type'] && !(typeof data['business_type'] === 'string' || data['business_type'] instanceof String)) {
        throw new Error("Expected the field `business_type` to be a primitive type in the JSON string but got " + data['business_type']);
      }
      // ensure the json data is a string
      if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
        throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
      }
      // ensure the json data is a string
      if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
        throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
      }
      // ensure the json data is a string
      if (data['language_tag'] && !(typeof data['language_tag'] === 'string' || data['language_tag'] instanceof String)) {
        throw new Error("Expected the field `language_tag` to be a primitive type in the JSON string but got " + data['language_tag']);
      }
      // ensure the json data is a string
      if (data['logo_url'] && !(typeof data['logo_url'] === 'string' || data['logo_url'] instanceof String)) {
        throw new Error("Expected the field `logo_url` to be a primitive type in the JSON string but got " + data['logo_url']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
        throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
      }
      // ensure the json data is a string
      if (data['time_zone'] && !(typeof data['time_zone'] === 'string' || data['time_zone'] instanceof String)) {
        throw new Error("Expected the field `time_zone` to be a primitive type in the JSON string but got " + data['time_zone']);
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
 * @member {module:com.keap.sdk.core/model/BusinessProfileAddressResponse} address
 */
GetBusinessProfileResponse.prototype['address'] = undefined;

/**
 * The goals of this business, ie. Grow Business, Convert more leads
 * @member {Array.<String>} business_goals
 */
GetBusinessProfileResponse.prototype['business_goals'] = undefined;

/**
 * @member {String} business_primary_color
 */
GetBusinessProfileResponse.prototype['business_primary_color'] = undefined;

/**
 * @member {String} business_secondary_color
 */
GetBusinessProfileResponse.prototype['business_secondary_color'] = undefined;

/**
 * The type of business
 * @member {String} business_type
 */
GetBusinessProfileResponse.prototype['business_type'] = undefined;

/**
 * ISO 4217 Currency Code
 * @member {String} currency_code
 */
GetBusinessProfileResponse.prototype['currency_code'] = undefined;

/**
 * @member {String} email
 */
GetBusinessProfileResponse.prototype['email'] = undefined;

/**
 * @member {String} language_tag
 */
GetBusinessProfileResponse.prototype['language_tag'] = undefined;

/**
 * @member {String} logo_url
 */
GetBusinessProfileResponse.prototype['logo_url'] = undefined;

/**
 * @member {String} name
 */
GetBusinessProfileResponse.prototype['name'] = undefined;

/**
 * @member {String} phone
 */
GetBusinessProfileResponse.prototype['phone'] = undefined;

/**
 * @member {String} time_zone
 */
GetBusinessProfileResponse.prototype['time_zone'] = undefined;

/**
 * @member {String} website
 */
GetBusinessProfileResponse.prototype['website'] = undefined;
var _default = exports["default"] = GetBusinessProfileResponse;