"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressInformation = _interopRequireDefault(require("./AddressInformation"));
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
 * The RestV2PatchOrderRequest model module.
 * @module com.keap.sdk.core/model/RestV2PatchOrderRequest
 * @version 0.0.28
 */
var RestV2PatchOrderRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestV2PatchOrderRequest</code>.
   * @alias module:com.keap.sdk.core/model/RestV2PatchOrderRequest
   */
  function RestV2PatchOrderRequest() {
    _classCallCheck(this, RestV2PatchOrderRequest);
    RestV2PatchOrderRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestV2PatchOrderRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RestV2PatchOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestV2PatchOrderRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestV2PatchOrderRequest} The populated <code>RestV2PatchOrderRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestV2PatchOrderRequest();
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'String');
        }
        if (data.hasOwnProperty('lead_affiliate_id')) {
          obj['lead_affiliate_id'] = _ApiClient["default"].convertToType(data['lead_affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('order_time')) {
          obj['order_time'] = _ApiClient["default"].convertToType(data['order_time'], 'String');
        }
        if (data.hasOwnProperty('order_title')) {
          obj['order_title'] = _ApiClient["default"].convertToType(data['order_title'], 'String');
        }
        if (data.hasOwnProperty('order_type')) {
          obj['order_type'] = _ApiClient["default"].convertToType(data['order_type'], 'String');
        }
        if (data.hasOwnProperty('promo_codes')) {
          obj['promo_codes'] = _ApiClient["default"].convertToType(data['promo_codes'], ['String']);
        }
        if (data.hasOwnProperty('sales_affiliate_id')) {
          obj['sales_affiliate_id'] = _ApiClient["default"].convertToType(data['sales_affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('shipping_address')) {
          obj['shipping_address'] = _AddressInformation["default"].constructFromObject(data['shipping_address']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2PatchOrderRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2PatchOrderRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
        throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
      }
      // ensure the json data is a string
      if (data['lead_affiliate_id'] && !(typeof data['lead_affiliate_id'] === 'string' || data['lead_affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `lead_affiliate_id` to be a primitive type in the JSON string but got " + data['lead_affiliate_id']);
      }
      // ensure the json data is a string
      if (data['order_time'] && !(typeof data['order_time'] === 'string' || data['order_time'] instanceof String)) {
        throw new Error("Expected the field `order_time` to be a primitive type in the JSON string but got " + data['order_time']);
      }
      // ensure the json data is a string
      if (data['order_title'] && !(typeof data['order_title'] === 'string' || data['order_title'] instanceof String)) {
        throw new Error("Expected the field `order_title` to be a primitive type in the JSON string but got " + data['order_title']);
      }
      // ensure the json data is a string
      if (data['order_type'] && !(typeof data['order_type'] === 'string' || data['order_type'] instanceof String)) {
        throw new Error("Expected the field `order_type` to be a primitive type in the JSON string but got " + data['order_type']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['promo_codes'])) {
        throw new Error("Expected the field `promo_codes` to be an array in the JSON data but got " + data['promo_codes']);
      }
      // ensure the json data is a string
      if (data['sales_affiliate_id'] && !(typeof data['sales_affiliate_id'] === 'string' || data['sales_affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `sales_affiliate_id` to be a primitive type in the JSON string but got " + data['sales_affiliate_id']);
      }
      // validate the optional field `shipping_address`
      if (data['shipping_address']) {
        // data not null
        _AddressInformation["default"].validateJSON(data['shipping_address']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} contact_id
 */
RestV2PatchOrderRequest.prototype['contact_id'] = undefined;

/**
 * @member {String} lead_affiliate_id
 */
RestV2PatchOrderRequest.prototype['lead_affiliate_id'] = undefined;

/**
 * @member {String} order_time
 */
RestV2PatchOrderRequest.prototype['order_time'] = undefined;

/**
 * @member {String} order_title
 */
RestV2PatchOrderRequest.prototype['order_title'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestV2PatchOrderRequest.OrderTypeEnum} order_type
 */
RestV2PatchOrderRequest.prototype['order_type'] = undefined;

/**
 * Uses multiple strings as promo codes. The corresponding discount will be applied to the order.
 * @member {Array.<String>} promo_codes
 */
RestV2PatchOrderRequest.prototype['promo_codes'] = undefined;

/**
 * @member {String} sales_affiliate_id
 */
RestV2PatchOrderRequest.prototype['sales_affiliate_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/AddressInformation} shipping_address
 */
RestV2PatchOrderRequest.prototype['shipping_address'] = undefined;

/**
 * Allowed values for the <code>order_type</code> property.
 * @enum {String}
 * @readonly
 */
RestV2PatchOrderRequest['OrderTypeEnum'] = {
  /**
   * value: "OFFLINE"
   * @const
   */
  "OFFLINE": "OFFLINE",
  /**
   * value: "ONLINE"
   * @const
   */
  "ONLINE": "ONLINE",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = RestV2PatchOrderRequest;