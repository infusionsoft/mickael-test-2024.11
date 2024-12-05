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
 * The ListRestMerchantAccountResponse model module.
 * @module com.keap.sdk.core/model/ListRestMerchantAccountResponse
 * @version 0.0.30
 */
var ListRestMerchantAccountResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListRestMerchantAccountResponse</code>.
   * @alias module:com.keap.sdk.core/model/ListRestMerchantAccountResponse
   */
  function ListRestMerchantAccountResponse() {
    _classCallCheck(this, ListRestMerchantAccountResponse);
    ListRestMerchantAccountResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ListRestMerchantAccountResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListRestMerchantAccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListRestMerchantAccountResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListRestMerchantAccountResponse} The populated <code>ListRestMerchantAccountResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListRestMerchantAccountResponse();
        if (data.hasOwnProperty('account_name')) {
          obj['account_name'] = _ApiClient["default"].convertToType(data['account_name'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('is_test')) {
          obj['is_test'] = _ApiClient["default"].convertToType(data['is_test'], 'Boolean');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListRestMerchantAccountResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListRestMerchantAccountResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['account_name'] && !(typeof data['account_name'] === 'string' || data['account_name'] instanceof String)) {
        throw new Error("Expected the field `account_name` to be a primitive type in the JSON string but got " + data['account_name']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} account_name
 */
ListRestMerchantAccountResponse.prototype['account_name'] = undefined;

/**
 * @member {String} id
 */
ListRestMerchantAccountResponse.prototype['id'] = undefined;

/**
 * @member {Boolean} is_test
 */
ListRestMerchantAccountResponse.prototype['is_test'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ListRestMerchantAccountResponse.TypeEnum} type
 */
ListRestMerchantAccountResponse.prototype['type'] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ListRestMerchantAccountResponse['TypeEnum'] = {
  /**
   * value: "USE_DEFAULT"
   * @const
   */
  "USE_DEFAULT": "USE_DEFAULT",
  /**
   * value: "PAY_PAL"
   * @const
   */
  "PAY_PAL": "PAY_PAL",
  /**
   * value: "PAY_PAL_PAYFLOW_PRO"
   * @const
   */
  "PAY_PAL_PAYFLOW_PRO": "PAY_PAL_PAYFLOW_PRO",
  /**
   * value: "PAYPAL_COMMERCE"
   * @const
   */
  "PAYPAL_COMMERCE": "PAYPAL_COMMERCE",
  /**
   * value: "PAYPAL_COMMERCE_UCC"
   * @const
   */
  "PAYPAL_COMMERCE_UCC": "PAYPAL_COMMERCE_UCC",
  /**
   * value: "GATEWAY_PAYFLOW_PRO"
   * @const
   */
  "GATEWAY_PAYFLOW_PRO": "GATEWAY_PAYFLOW_PRO",
  /**
   * value: "AUTHORIZE"
   * @const
   */
  "AUTHORIZE": "AUTHORIZE",
  /**
   * value: "AUTHORIZE_CARD_PRESENT"
   * @const
   */
  "AUTHORIZE_CARD_PRESENT": "AUTHORIZE_CARD_PRESENT",
  /**
   * value: "POWER_PAY"
   * @const
   */
  "POWER_PAY": "POWER_PAY",
  /**
   * value: "CART_CONNECT"
   * @const
   */
  "CART_CONNECT": "CART_CONNECT",
  /**
   * value: "SAGE_PAY"
   * @const
   */
  "SAGE_PAY": "SAGE_PAY",
  /**
   * value: "E_WAY"
   * @const
   */
  "E_WAY": "E_WAY",
  /**
   * value: "USA_E_PAY"
   * @const
   */
  "USA_E_PAY": "USA_E_PAY",
  /**
   * value: "MONERIS"
   * @const
   */
  "MONERIS": "MONERIS",
  /**
   * value: "DPS"
   * @const
   */
  "DPS": "DPS",
  /**
   * value: "DUMMY"
   * @const
   */
  "DUMMY": "DUMMY",
  /**
   * value: "INTERNET_SECURE"
   * @const
   */
  "INTERNET_SECURE": "INTERNET_SECURE",
  /**
   * value: "EASY_PAY_DIRECT"
   * @const
   */
  "EASY_PAY_DIRECT": "EASY_PAY_DIRECT",
  /**
   * value: "NEXUS"
   * @const
   */
  "NEXUS": "NEXUS",
  /**
   * value: "INF_PAY"
   * @const
   */
  "INF_PAY": "INF_PAY",
  /**
   * value: "FLEXPAY"
   * @const
   */
  "FLEXPAY": "FLEXPAY",
  /**
   * value: "STRIPE"
   * @const
   */
  "STRIPE": "STRIPE",
  /**
   * value: "STRIPE_ELEMENTS"
   * @const
   */
  "STRIPE_ELEMENTS": "STRIPE_ELEMENTS",
  /**
   * value: "WORLD_PAY"
   * @const
   */
  "WORLD_PAY": "WORLD_PAY",
  /**
   * value: "RAINFOREST"
   * @const
   */
  "RAINFOREST": "RAINFOREST",
  /**
   * value: "WEPAY"
   * @const
   */
  "WEPAY": "WEPAY",
  /**
   * value: "KEAPPAY"
   * @const
   */
  "KEAPPAY": "KEAPPAY",
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
var _default = exports["default"] = ListRestMerchantAccountResponse;