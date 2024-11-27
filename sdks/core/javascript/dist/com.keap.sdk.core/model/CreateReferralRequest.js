"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The CreateReferralRequest model module.
 * @module com.keap.sdk.core/model/CreateReferralRequest
 * @version 0.0.21
 */
var CreateReferralRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateReferralRequest</code>.
   * @alias module:com.keap.sdk.core/model/CreateReferralRequest
   */
  function CreateReferralRequest() {
    _classCallCheck(this, CreateReferralRequest);
    CreateReferralRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreateReferralRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateReferralRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateReferralRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateReferralRequest} The populated <code>CreateReferralRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateReferralRequest();
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('expiration_time')) {
          obj['expiration_time'] = _ApiClient["default"].convertToType(data['expiration_time'], 'String');
        }
        if (data.hasOwnProperty('ip_address')) {
          obj['ip_address'] = _ApiClient["default"].convertToType(data['ip_address'], 'String');
        }
        if (data.hasOwnProperty('referral_partner_id')) {
          obj['referral_partner_id'] = _ApiClient["default"].convertToType(data['referral_partner_id'], 'String');
        }
        if (data.hasOwnProperty('referral_time')) {
          obj['referral_time'] = _ApiClient["default"].convertToType(data['referral_time'], 'String');
        }
        if (data.hasOwnProperty('referral_type')) {
          obj['referral_type'] = _ApiClient["default"].convertToType(data['referral_type'], 'String');
        }
        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateReferralRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateReferralRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
        throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['expiration_time'] && !(typeof data['expiration_time'] === 'string' || data['expiration_time'] instanceof String)) {
        throw new Error("Expected the field `expiration_time` to be a primitive type in the JSON string but got " + data['expiration_time']);
      }
      // ensure the json data is a string
      if (data['ip_address'] && !(typeof data['ip_address'] === 'string' || data['ip_address'] instanceof String)) {
        throw new Error("Expected the field `ip_address` to be a primitive type in the JSON string but got " + data['ip_address']);
      }
      // ensure the json data is a string
      if (data['referral_partner_id'] && !(typeof data['referral_partner_id'] === 'string' || data['referral_partner_id'] instanceof String)) {
        throw new Error("Expected the field `referral_partner_id` to be a primitive type in the JSON string but got " + data['referral_partner_id']);
      }
      // ensure the json data is a string
      if (data['referral_time'] && !(typeof data['referral_time'] === 'string' || data['referral_time'] instanceof String)) {
        throw new Error("Expected the field `referral_time` to be a primitive type in the JSON string but got " + data['referral_time']);
      }
      // ensure the json data is a string
      if (data['referral_type'] && !(typeof data['referral_type'] === 'string' || data['referral_type'] instanceof String)) {
        throw new Error("Expected the field `referral_type` to be a primitive type in the JSON string but got " + data['referral_type']);
      }
      // ensure the json data is a string
      if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
        throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} contact_id
 */
CreateReferralRequest.prototype['contact_id'] = undefined;

/**
 * @member {String} description
 */
CreateReferralRequest.prototype['description'] = undefined;

/**
 * @member {String} expiration_time
 */
CreateReferralRequest.prototype['expiration_time'] = undefined;

/**
 * @member {String} ip_address
 */
CreateReferralRequest.prototype['ip_address'] = undefined;

/**
 * @member {String} referral_partner_id
 */
CreateReferralRequest.prototype['referral_partner_id'] = undefined;

/**
 * @member {String} referral_time
 */
CreateReferralRequest.prototype['referral_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CreateReferralRequest.ReferralTypeEnum} referral_type
 */
CreateReferralRequest.prototype['referral_type'] = undefined;

/**
 * @member {String} source
 */
CreateReferralRequest.prototype['source'] = undefined;

/**
 * Allowed values for the <code>referral_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateReferralRequest['ReferralTypeEnum'] = {
  /**
   * value: "COOKIE"
   * @const
   */
  "COOKIE": "COOKIE",
  /**
   * value: "PERMANENT"
   * @const
   */
  "PERMANENT": "PERMANENT",
  /**
   * value: "MANUAL"
   * @const
   */
  "MANUAL": "MANUAL",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = CreateReferralRequest;