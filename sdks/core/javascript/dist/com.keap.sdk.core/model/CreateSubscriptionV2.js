"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The CreateSubscriptionV2 model module.
 * @module com.keap.sdk.core/model/CreateSubscriptionV2
 * @version 2.70.0.736468-hf-202411121210
 */
var CreateSubscriptionV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateSubscriptionV2</code>.
   * @alias module:com.keap.sdk.core/model/CreateSubscriptionV2
   * @param contactId {String} 
   */
  function CreateSubscriptionV2(contactId) {
    _classCallCheck(this, CreateSubscriptionV2);
    CreateSubscriptionV2.initialize(this, contactId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreateSubscriptionV2, null, [{
    key: "initialize",
    value: function initialize(obj, contactId) {
      obj['contact_id'] = contactId;
    }

    /**
     * Constructs a <code>CreateSubscriptionV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateSubscriptionV2} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateSubscriptionV2} The populated <code>CreateSubscriptionV2</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSubscriptionV2();
        if (data.hasOwnProperty('allow_duplicate')) {
          obj['allow_duplicate'] = _ApiClient["default"].convertToType(data['allow_duplicate'], 'Boolean');
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
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'String');
        }
        if (data.hasOwnProperty('first_bill_date')) {
          obj['first_bill_date'] = _ApiClient["default"].convertToType(data['first_bill_date'], 'Date');
        }
        if (data.hasOwnProperty('payment_method_id')) {
          obj['payment_method_id'] = _ApiClient["default"].convertToType(data['payment_method_id'], 'String');
        }
        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
        if (data.hasOwnProperty('sale_affiliate_id')) {
          obj['sale_affiliate_id'] = _ApiClient["default"].convertToType(data['sale_affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('subscription_plan_id')) {
          obj['subscription_plan_id'] = _ApiClient["default"].convertToType(data['subscription_plan_id'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSubscriptionV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSubscriptionV2</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateSubscriptionV2.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
        throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
      }
      // ensure the json data is a string
      if (data['payment_method_id'] && !(typeof data['payment_method_id'] === 'string' || data['payment_method_id'] instanceof String)) {
        throw new Error("Expected the field `payment_method_id` to be a primitive type in the JSON string but got " + data['payment_method_id']);
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
CreateSubscriptionV2.RequiredProperties = ["contact_id"];

/**
 * If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false.
 * @member {Boolean} allow_duplicate
 */
CreateSubscriptionV2.prototype['allow_duplicate'] = undefined;

/**
 * Only works if the product the product subscription is for is taxable. Default is false.
 * @member {Boolean} allow_tax
 */
CreateSubscriptionV2.prototype['allow_tax'] = undefined;

/**
 * Defaults to true.
 * @member {Boolean} auto_charge
 */
CreateSubscriptionV2.prototype['auto_charge'] = undefined;

/**
 * Must be 0 or greater. Default is the price in the product subscription.
 * @member {Number} billing_amount
 */
CreateSubscriptionV2.prototype['billing_amount'] = undefined;

/**
 * @member {String} contact_id
 */
CreateSubscriptionV2.prototype['contact_id'] = undefined;

/**
 * The first day the subscription will bill, in EST. Must not be in the past. Default is today.
 * @member {Date} first_bill_date
 */
CreateSubscriptionV2.prototype['first_bill_date'] = undefined;

/**
 * Default is the contact's most recently used card, if auto charge is true. Default is 0 otherwise.
 * @member {String} payment_method_id
 */
CreateSubscriptionV2.prototype['payment_method_id'] = undefined;

/**
 * Must be greater than 0. Default is 1.
 * @member {Number} quantity
 */
CreateSubscriptionV2.prototype['quantity'] = undefined;

/**
 * @member {String} sale_affiliate_id
 */
CreateSubscriptionV2.prototype['sale_affiliate_id'] = undefined;

/**
 * Id of the product subscription.
 * @member {String} subscription_plan_id
 */
CreateSubscriptionV2.prototype['subscription_plan_id'] = undefined;
var _default = exports["default"] = CreateSubscriptionV2;