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
 * The AffiliateCommission model module.
 * @module com.keap.sdk.core/model/AffiliateCommission
 * @version 0.0.30
 */
var AffiliateCommission = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AffiliateCommission</code>.
   * @alias module:com.keap.sdk.core/model/AffiliateCommission
   */
  function AffiliateCommission() {
    _classCallCheck(this, AffiliateCommission);
    AffiliateCommission.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(AffiliateCommission, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AffiliateCommission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AffiliateCommission} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AffiliateCommission} The populated <code>AffiliateCommission</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AffiliateCommission();
        if (data.hasOwnProperty('aff_owed_id')) {
          obj['aff_owed_id'] = _ApiClient["default"].convertToType(data['aff_owed_id'], 'Number');
        }
        if (data.hasOwnProperty('amount_earned')) {
          obj['amount_earned'] = _ApiClient["default"].convertToType(data['amount_earned'], 'Number');
        }
        if (data.hasOwnProperty('contact_first_name')) {
          obj['contact_first_name'] = _ApiClient["default"].convertToType(data['contact_first_name'], 'String');
        }
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'Number');
        }
        if (data.hasOwnProperty('contact_last_name')) {
          obj['contact_last_name'] = _ApiClient["default"].convertToType(data['contact_last_name'], 'String');
        }
        if (data.hasOwnProperty('date_earned')) {
          obj['date_earned'] = _ApiClient["default"].convertToType(data['date_earned'], 'Date');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('invoice_id')) {
          obj['invoice_id'] = _ApiClient["default"].convertToType(data['invoice_id'], 'Number');
        }
        if (data.hasOwnProperty('product_name')) {
          obj['product_name'] = _ApiClient["default"].convertToType(data['product_name'], 'String');
        }
        if (data.hasOwnProperty('sales_affiliate_id')) {
          obj['sales_affiliate_id'] = _ApiClient["default"].convertToType(data['sales_affiliate_id'], 'Number');
        }
        if (data.hasOwnProperty('sold_by_first_name')) {
          obj['sold_by_first_name'] = _ApiClient["default"].convertToType(data['sold_by_first_name'], 'String');
        }
        if (data.hasOwnProperty('sold_by_last_name')) {
          obj['sold_by_last_name'] = _ApiClient["default"].convertToType(data['sold_by_last_name'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AffiliateCommission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AffiliateCommission</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['contact_first_name'] && !(typeof data['contact_first_name'] === 'string' || data['contact_first_name'] instanceof String)) {
        throw new Error("Expected the field `contact_first_name` to be a primitive type in the JSON string but got " + data['contact_first_name']);
      }
      // ensure the json data is a string
      if (data['contact_last_name'] && !(typeof data['contact_last_name'] === 'string' || data['contact_last_name'] instanceof String)) {
        throw new Error("Expected the field `contact_last_name` to be a primitive type in the JSON string but got " + data['contact_last_name']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['product_name'] && !(typeof data['product_name'] === 'string' || data['product_name'] instanceof String)) {
        throw new Error("Expected the field `product_name` to be a primitive type in the JSON string but got " + data['product_name']);
      }
      // ensure the json data is a string
      if (data['sold_by_first_name'] && !(typeof data['sold_by_first_name'] === 'string' || data['sold_by_first_name'] instanceof String)) {
        throw new Error("Expected the field `sold_by_first_name` to be a primitive type in the JSON string but got " + data['sold_by_first_name']);
      }
      // ensure the json data is a string
      if (data['sold_by_last_name'] && !(typeof data['sold_by_last_name'] === 'string' || data['sold_by_last_name'] instanceof String)) {
        throw new Error("Expected the field `sold_by_last_name` to be a primitive type in the JSON string but got " + data['sold_by_last_name']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Number} aff_owed_id
 */
AffiliateCommission.prototype['aff_owed_id'] = undefined;

/**
 * @member {Number} amount_earned
 */
AffiliateCommission.prototype['amount_earned'] = undefined;

/**
 * @member {String} contact_first_name
 */
AffiliateCommission.prototype['contact_first_name'] = undefined;

/**
 * @member {Number} contact_id
 */
AffiliateCommission.prototype['contact_id'] = undefined;

/**
 * @member {String} contact_last_name
 */
AffiliateCommission.prototype['contact_last_name'] = undefined;

/**
 * @member {Date} date_earned
 */
AffiliateCommission.prototype['date_earned'] = undefined;

/**
 * @member {String} description
 */
AffiliateCommission.prototype['description'] = undefined;

/**
 * @member {Number} invoice_id
 */
AffiliateCommission.prototype['invoice_id'] = undefined;

/**
 * @member {String} product_name
 */
AffiliateCommission.prototype['product_name'] = undefined;

/**
 * @member {Number} sales_affiliate_id
 */
AffiliateCommission.prototype['sales_affiliate_id'] = undefined;

/**
 * @member {String} sold_by_first_name
 */
AffiliateCommission.prototype['sold_by_first_name'] = undefined;

/**
 * @member {String} sold_by_last_name
 */
AffiliateCommission.prototype['sold_by_last_name'] = undefined;
var _default = exports["default"] = AffiliateCommission;