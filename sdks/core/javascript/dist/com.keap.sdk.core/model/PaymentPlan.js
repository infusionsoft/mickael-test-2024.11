"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _RestPaymentGateway = _interopRequireDefault(require("./RestPaymentGateway"));
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
 * The PaymentPlan model module.
 * @module com.keap.sdk.core/model/PaymentPlan
 * @version 0.0.33
 */
var PaymentPlan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentPlan</code>.
   * @alias module:com.keap.sdk.core/model/PaymentPlan
   * @param daysBetweenPayments {Number} 
   * @param numberOfPayments {Number} 
   * @param planStartDate {String} 
   */
  function PaymentPlan(daysBetweenPayments, numberOfPayments, planStartDate) {
    _classCallCheck(this, PaymentPlan);
    PaymentPlan.initialize(this, daysBetweenPayments, numberOfPayments, planStartDate);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(PaymentPlan, null, [{
    key: "initialize",
    value: function initialize(obj, daysBetweenPayments, numberOfPayments, planStartDate) {
      obj['days_between_payments'] = daysBetweenPayments;
      obj['number_of_payments'] = numberOfPayments;
      obj['plan_start_date'] = planStartDate;
    }

    /**
     * Constructs a <code>PaymentPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PaymentPlan} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PaymentPlan} The populated <code>PaymentPlan</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentPlan();
        if (data.hasOwnProperty('auto_charge')) {
          obj['auto_charge'] = _ApiClient["default"].convertToType(data['auto_charge'], 'Boolean');
        }
        if (data.hasOwnProperty('credit_card_id')) {
          obj['credit_card_id'] = _ApiClient["default"].convertToType(data['credit_card_id'], 'String');
        }
        if (data.hasOwnProperty('days_between_payments')) {
          obj['days_between_payments'] = _ApiClient["default"].convertToType(data['days_between_payments'], 'Number');
        }
        if (data.hasOwnProperty('initial_payment_amount')) {
          obj['initial_payment_amount'] = _ApiClient["default"].convertToType(data['initial_payment_amount'], 'Number');
        }
        if (data.hasOwnProperty('initial_payment_date')) {
          obj['initial_payment_date'] = _ApiClient["default"].convertToType(data['initial_payment_date'], 'String');
        }
        if (data.hasOwnProperty('initial_payment_percent')) {
          obj['initial_payment_percent'] = _ApiClient["default"].convertToType(data['initial_payment_percent'], 'Number');
        }
        if (data.hasOwnProperty('number_of_payments')) {
          obj['number_of_payments'] = _ApiClient["default"].convertToType(data['number_of_payments'], 'Number');
        }
        if (data.hasOwnProperty('payment_gateway')) {
          obj['payment_gateway'] = _RestPaymentGateway["default"].constructFromObject(data['payment_gateway']);
        }
        if (data.hasOwnProperty('payment_method_id')) {
          obj['payment_method_id'] = _ApiClient["default"].convertToType(data['payment_method_id'], 'String');
        }
        if (data.hasOwnProperty('plan_start_date')) {
          obj['plan_start_date'] = _ApiClient["default"].convertToType(data['plan_start_date'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentPlan</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentPlan</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(PaymentPlan.RequiredProperties),
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
      if (data['credit_card_id'] && !(typeof data['credit_card_id'] === 'string' || data['credit_card_id'] instanceof String)) {
        throw new Error("Expected the field `credit_card_id` to be a primitive type in the JSON string but got " + data['credit_card_id']);
      }
      // ensure the json data is a string
      if (data['initial_payment_date'] && !(typeof data['initial_payment_date'] === 'string' || data['initial_payment_date'] instanceof String)) {
        throw new Error("Expected the field `initial_payment_date` to be a primitive type in the JSON string but got " + data['initial_payment_date']);
      }
      // validate the optional field `payment_gateway`
      if (data['payment_gateway']) {
        // data not null
        _RestPaymentGateway["default"].validateJSON(data['payment_gateway']);
      }
      // ensure the json data is a string
      if (data['payment_method_id'] && !(typeof data['payment_method_id'] === 'string' || data['payment_method_id'] instanceof String)) {
        throw new Error("Expected the field `payment_method_id` to be a primitive type in the JSON string but got " + data['payment_method_id']);
      }
      // ensure the json data is a string
      if (data['plan_start_date'] && !(typeof data['plan_start_date'] === 'string' || data['plan_start_date'] instanceof String)) {
        throw new Error("Expected the field `plan_start_date` to be a primitive type in the JSON string but got " + data['plan_start_date']);
      }
      return true;
    }
  }]);
}();
PaymentPlan.RequiredProperties = ["days_between_payments", "number_of_payments", "plan_start_date"];

/**
 * @member {Boolean} auto_charge
 */
PaymentPlan.prototype['auto_charge'] = undefined;

/**
 * @member {String} credit_card_id
 */
PaymentPlan.prototype['credit_card_id'] = undefined;

/**
 * @member {Number} days_between_payments
 */
PaymentPlan.prototype['days_between_payments'] = undefined;

/**
 * @member {Number} initial_payment_amount
 */
PaymentPlan.prototype['initial_payment_amount'] = undefined;

/**
 * @member {String} initial_payment_date
 */
PaymentPlan.prototype['initial_payment_date'] = undefined;

/**
 * @member {Number} initial_payment_percent
 */
PaymentPlan.prototype['initial_payment_percent'] = undefined;

/**
 * @member {Number} number_of_payments
 */
PaymentPlan.prototype['number_of_payments'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestPaymentGateway} payment_gateway
 */
PaymentPlan.prototype['payment_gateway'] = undefined;

/**
 * @member {String} payment_method_id
 */
PaymentPlan.prototype['payment_method_id'] = undefined;

/**
 * @member {String} plan_start_date
 */
PaymentPlan.prototype['plan_start_date'] = undefined;
var _default = exports["default"] = PaymentPlan;