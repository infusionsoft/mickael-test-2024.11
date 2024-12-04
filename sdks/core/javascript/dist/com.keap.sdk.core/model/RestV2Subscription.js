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
 * The RestV2Subscription model module.
 * @module com.keap.sdk.core/model/RestV2Subscription
 * @version 0.0.29
 */
var RestV2Subscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestV2Subscription</code>.
   * @alias module:com.keap.sdk.core/model/RestV2Subscription
   */
  function RestV2Subscription() {
    _classCallCheck(this, RestV2Subscription);
    RestV2Subscription.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestV2Subscription, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RestV2Subscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestV2Subscription} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestV2Subscription} The populated <code>RestV2Subscription</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestV2Subscription();
        if (data.hasOwnProperty('subscription_active')) {
          obj['subscription_active'] = _ApiClient["default"].convertToType(data['subscription_active'], 'Boolean');
        }
        if (data.hasOwnProperty('subscription_cycles_completed')) {
          obj['subscription_cycles_completed'] = _ApiClient["default"].convertToType(data['subscription_cycles_completed'], 'Number');
        }
        if (data.hasOwnProperty('subscription_end_date')) {
          obj['subscription_end_date'] = _ApiClient["default"].convertToType(data['subscription_end_date'], 'String');
        }
        if (data.hasOwnProperty('subscription_id')) {
          obj['subscription_id'] = _ApiClient["default"].convertToType(data['subscription_id'], 'String');
        }
        if (data.hasOwnProperty('subscription_next_bill_date')) {
          obj['subscription_next_bill_date'] = _ApiClient["default"].convertToType(data['subscription_next_bill_date'], 'String');
        }
        if (data.hasOwnProperty('subscription_start_date')) {
          obj['subscription_start_date'] = _ApiClient["default"].convertToType(data['subscription_start_date'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2Subscription</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2Subscription</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['subscription_end_date'] && !(typeof data['subscription_end_date'] === 'string' || data['subscription_end_date'] instanceof String)) {
        throw new Error("Expected the field `subscription_end_date` to be a primitive type in the JSON string but got " + data['subscription_end_date']);
      }
      // ensure the json data is a string
      if (data['subscription_id'] && !(typeof data['subscription_id'] === 'string' || data['subscription_id'] instanceof String)) {
        throw new Error("Expected the field `subscription_id` to be a primitive type in the JSON string but got " + data['subscription_id']);
      }
      // ensure the json data is a string
      if (data['subscription_next_bill_date'] && !(typeof data['subscription_next_bill_date'] === 'string' || data['subscription_next_bill_date'] instanceof String)) {
        throw new Error("Expected the field `subscription_next_bill_date` to be a primitive type in the JSON string but got " + data['subscription_next_bill_date']);
      }
      // ensure the json data is a string
      if (data['subscription_start_date'] && !(typeof data['subscription_start_date'] === 'string' || data['subscription_start_date'] instanceof String)) {
        throw new Error("Expected the field `subscription_start_date` to be a primitive type in the JSON string but got " + data['subscription_start_date']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Boolean} subscription_active
 */
RestV2Subscription.prototype['subscription_active'] = undefined;

/**
 * @member {Number} subscription_cycles_completed
 */
RestV2Subscription.prototype['subscription_cycles_completed'] = undefined;

/**
 * @member {String} subscription_end_date
 */
RestV2Subscription.prototype['subscription_end_date'] = undefined;

/**
 * @member {String} subscription_id
 */
RestV2Subscription.prototype['subscription_id'] = undefined;

/**
 * @member {String} subscription_next_bill_date
 */
RestV2Subscription.prototype['subscription_next_bill_date'] = undefined;

/**
 * @member {String} subscription_start_date
 */
RestV2Subscription.prototype['subscription_start_date'] = undefined;
var _default = exports["default"] = RestV2Subscription;