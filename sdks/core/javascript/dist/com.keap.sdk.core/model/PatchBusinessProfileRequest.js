"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BusinessProfileAddressRequest = _interopRequireDefault(require("./BusinessProfileAddressRequest"));
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
 * The PatchBusinessProfileRequest model module.
 * @module com.keap.sdk.core/model/PatchBusinessProfileRequest
 * @version 0.0.26
 */
var PatchBusinessProfileRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PatchBusinessProfileRequest</code>.
   * Update profile information about the business that owns/uses this account
   * @alias module:com.keap.sdk.core/model/PatchBusinessProfileRequest
   */
  function PatchBusinessProfileRequest() {
    _classCallCheck(this, PatchBusinessProfileRequest);
    PatchBusinessProfileRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(PatchBusinessProfileRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>PatchBusinessProfileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PatchBusinessProfileRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PatchBusinessProfileRequest} The populated <code>PatchBusinessProfileRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchBusinessProfileRequest();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _BusinessProfileAddressRequest["default"].constructFromObject(data['address']);
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
        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }
        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchBusinessProfileRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchBusinessProfileRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `address`
      if (data['address']) {
        // data not null
        _BusinessProfileAddressRequest["default"].validateJSON(data['address']);
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
      if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
        throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
      }
      // ensure the json data is a string
      if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
        throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
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
      if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
        throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:com.keap.sdk.core/model/BusinessProfileAddressRequest} address
 */
PatchBusinessProfileRequest.prototype['address'] = undefined;

/**
 * The goals of this business, ie. Grow Business, Convert more leads
 * @member {Array.<String>} business_goals
 */
PatchBusinessProfileRequest.prototype['business_goals'] = undefined;

/**
 * @member {String} business_primary_color
 */
PatchBusinessProfileRequest.prototype['business_primary_color'] = undefined;

/**
 * @member {String} business_secondary_color
 */
PatchBusinessProfileRequest.prototype['business_secondary_color'] = undefined;

/**
 * ISO 4217 Currency Code
 * @member {String} currency_code
 */
PatchBusinessProfileRequest.prototype['currency_code'] = undefined;

/**
 * @member {String} email
 */
PatchBusinessProfileRequest.prototype['email'] = undefined;

/**
 * @member {String} name
 */
PatchBusinessProfileRequest.prototype['name'] = undefined;

/**
 * @member {String} phone
 */
PatchBusinessProfileRequest.prototype['phone'] = undefined;

/**
 * @member {String} website
 */
PatchBusinessProfileRequest.prototype['website'] = undefined;
var _default = exports["default"] = PatchBusinessProfileRequest;