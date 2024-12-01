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
 * The RestSubscriptionV2 model module.
 * @module com.keap.sdk.core/model/RestSubscriptionV2
 * @version 0.0.25
 */
var RestSubscriptionV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestSubscriptionV2</code>.
   * @alias module:com.keap.sdk.core/model/RestSubscriptionV2
   */
  function RestSubscriptionV2() {
    _classCallCheck(this, RestSubscriptionV2);
    RestSubscriptionV2.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestSubscriptionV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RestSubscriptionV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestSubscriptionV2} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestSubscriptionV2} The populated <code>RestSubscriptionV2</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSubscriptionV2();
        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
        if (data.hasOwnProperty('allow_tax')) {
          obj['allow_tax'] = _ApiClient["default"].convertToType(data['allow_tax'], 'Boolean');
        }
        if (data.hasOwnProperty('auto_charge')) {
          obj['auto_charge'] = _ApiClient["default"].convertToType(data['auto_charge'], 'Boolean');
        }
        if (data.hasOwnProperty('billing_amount')) {
          obj['billing_amount'] = _ApiClient["default"].convertToType(data['billing_amount'], 'Number');
        }
        if (data.hasOwnProperty('billing_cycle')) {
          obj['billing_cycle'] = _ApiClient["default"].convertToType(data['billing_cycle'], 'String');
        }
        if (data.hasOwnProperty('billing_frequency')) {
          obj['billing_frequency'] = _ApiClient["default"].convertToType(data['billing_frequency'], 'Number');
        }
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'String');
        }
        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('next_bill_date')) {
          obj['next_bill_date'] = _ApiClient["default"].convertToType(data['next_bill_date'], 'Date');
        }
        if (data.hasOwnProperty('payment_gateway_id')) {
          obj['payment_gateway_id'] = _ApiClient["default"].convertToType(data['payment_gateway_id'], 'String');
        }
        if (data.hasOwnProperty('payment_method_id')) {
          obj['payment_method_id'] = _ApiClient["default"].convertToType(data['payment_method_id'], 'Number');
        }
        if (data.hasOwnProperty('product_id')) {
          obj['product_id'] = _ApiClient["default"].convertToType(data['product_id'], 'String');
        }
        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
        if (data.hasOwnProperty('sale_affiliate_id')) {
          obj['sale_affiliate_id'] = _ApiClient["default"].convertToType(data['sale_affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }
        if (data.hasOwnProperty('subscription_plan_id')) {
          obj['subscription_plan_id'] = _ApiClient["default"].convertToType(data['subscription_plan_id'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestSubscriptionV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestSubscriptionV2</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['billing_cycle'] && !(typeof data['billing_cycle'] === 'string' || data['billing_cycle'] instanceof String)) {
        throw new Error("Expected the field `billing_cycle` to be a primitive type in the JSON string but got " + data['billing_cycle']);
      }
      // ensure the json data is a string
      if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
        throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['payment_gateway_id'] && !(typeof data['payment_gateway_id'] === 'string' || data['payment_gateway_id'] instanceof String)) {
        throw new Error("Expected the field `payment_gateway_id` to be a primitive type in the JSON string but got " + data['payment_gateway_id']);
      }
      // ensure the json data is a string
      if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
        throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
      }
      // ensure the json data is a string
      if (data['sale_affiliate_id'] && !(typeof data['sale_affiliate_id'] === 'string' || data['sale_affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `sale_affiliate_id` to be a primitive type in the JSON string but got " + data['sale_affiliate_id']);
      }
      // ensure the json data is a string
      if (data['subscription_plan_id'] && !(typeof data['subscription_plan_id'] === 'string' || data['subscription_plan_id'] instanceof String)) {
        throw new Error("Expected the field `subscription_plan_id` to be a primitive type in the JSON string but got " + data['subscription_plan_id']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Boolean} active
 */
RestSubscriptionV2.prototype['active'] = undefined;

/**
 * @member {Boolean} allow_tax
 */
RestSubscriptionV2.prototype['allow_tax'] = undefined;

/**
 * @member {Boolean} auto_charge
 */
RestSubscriptionV2.prototype['auto_charge'] = undefined;

/**
 * @member {Number} billing_amount
 */
RestSubscriptionV2.prototype['billing_amount'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestSubscriptionV2.BillingCycleEnum} billing_cycle
 */
RestSubscriptionV2.prototype['billing_cycle'] = undefined;

/**
 * @member {Number} billing_frequency
 */
RestSubscriptionV2.prototype['billing_frequency'] = undefined;

/**
 * @member {String} contact_id
 */
RestSubscriptionV2.prototype['contact_id'] = undefined;

/**
 * @member {Date} end_date
 */
RestSubscriptionV2.prototype['end_date'] = undefined;

/**
 * @member {String} id
 */
RestSubscriptionV2.prototype['id'] = undefined;

/**
 * @member {Date} next_bill_date
 */
RestSubscriptionV2.prototype['next_bill_date'] = undefined;

/**
 * @member {String} payment_gateway_id
 */
RestSubscriptionV2.prototype['payment_gateway_id'] = undefined;

/**
 * @member {Number} payment_method_id
 */
RestSubscriptionV2.prototype['payment_method_id'] = undefined;

/**
 * @member {String} product_id
 */
RestSubscriptionV2.prototype['product_id'] = undefined;

/**
 * @member {Number} quantity
 */
RestSubscriptionV2.prototype['quantity'] = undefined;

/**
 * @member {String} sale_affiliate_id
 */
RestSubscriptionV2.prototype['sale_affiliate_id'] = undefined;

/**
 * @member {Date} start_date
 */
RestSubscriptionV2.prototype['start_date'] = undefined;

/**
 * @member {String} subscription_plan_id
 */
RestSubscriptionV2.prototype['subscription_plan_id'] = undefined;

/**
 * Allowed values for the <code>billing_cycle</code> property.
 * @enum {String}
 * @readonly
 */
RestSubscriptionV2['BillingCycleEnum'] = {
  /**
   * value: "YEAR"
   * @const
   */
  "YEAR": "YEAR",
  /**
   * value: "MONTH"
   * @const
   */
  "MONTH": "MONTH",
  /**
   * value: "WEEK"
   * @const
   */
  "WEEK": "WEEK",
  /**
   * value: "DAY"
   * @const
   */
  "DAY": "DAY",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = RestSubscriptionV2;