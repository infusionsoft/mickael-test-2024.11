"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BasicContact = _interopRequireDefault(require("./BasicContact"));
var _PaymentPlan = _interopRequireDefault(require("./PaymentPlan"));
var _RestV2OrderItem = _interopRequireDefault(require("./RestV2OrderItem"));
var _ShippingInformation = _interopRequireDefault(require("./ShippingInformation"));
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
 * The RestV2Order model module.
 * @module com.keap.sdk.core/model/RestV2Order
 * @version 0.0.20
 */
var RestV2Order = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestV2Order</code>.
   * @alias module:com.keap.sdk.core/model/RestV2Order
   */
  function RestV2Order() {
    _classCallCheck(this, RestV2Order);
    RestV2Order.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestV2Order, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RestV2Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestV2Order} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestV2Order} The populated <code>RestV2Order</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestV2Order();
        if (data.hasOwnProperty('allow_payment')) {
          obj['allow_payment'] = _ApiClient["default"].convertToType(data['allow_payment'], 'Boolean');
        }
        if (data.hasOwnProperty('allow_paypal')) {
          obj['allow_paypal'] = _ApiClient["default"].convertToType(data['allow_paypal'], 'Boolean');
        }
        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _BasicContact["default"].constructFromObject(data['contact']);
        }
        if (data.hasOwnProperty('creation_time')) {
          obj['creation_time'] = _ApiClient["default"].convertToType(data['creation_time'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('invoice_number')) {
          obj['invoice_number'] = _ApiClient["default"].convertToType(data['invoice_number'], 'String');
        }
        if (data.hasOwnProperty('lead_affiliate_id')) {
          obj['lead_affiliate_id'] = _ApiClient["default"].convertToType(data['lead_affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('modification_time')) {
          obj['modification_time'] = _ApiClient["default"].convertToType(data['modification_time'], 'String');
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }
        if (data.hasOwnProperty('order_items')) {
          obj['order_items'] = _ApiClient["default"].convertToType(data['order_items'], [_RestV2OrderItem["default"]]);
        }
        if (data.hasOwnProperty('order_time')) {
          obj['order_time'] = _ApiClient["default"].convertToType(data['order_time'], 'String');
        }
        if (data.hasOwnProperty('order_type')) {
          obj['order_type'] = _ApiClient["default"].convertToType(data['order_type'], 'String');
        }
        if (data.hasOwnProperty('payment_plan')) {
          obj['payment_plan'] = _PaymentPlan["default"].constructFromObject(data['payment_plan']);
        }
        if (data.hasOwnProperty('recurring')) {
          obj['recurring'] = _ApiClient["default"].convertToType(data['recurring'], 'Boolean');
        }
        if (data.hasOwnProperty('refund_total')) {
          obj['refund_total'] = _ApiClient["default"].convertToType(data['refund_total'], 'Number');
        }
        if (data.hasOwnProperty('sales_affiliate_id')) {
          obj['sales_affiliate_id'] = _ApiClient["default"].convertToType(data['sales_affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('shipping_information')) {
          obj['shipping_information'] = _ShippingInformation["default"].constructFromObject(data['shipping_information']);
        }
        if (data.hasOwnProperty('source_type')) {
          obj['source_type'] = _ApiClient["default"].convertToType(data['source_type'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('terms')) {
          obj['terms'] = _ApiClient["default"].convertToType(data['terms'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('total_due')) {
          obj['total_due'] = _ApiClient["default"].convertToType(data['total_due'], 'Number');
        }
        if (data.hasOwnProperty('total_paid')) {
          obj['total_paid'] = _ApiClient["default"].convertToType(data['total_paid'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2Order</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2Order</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `contact`
      if (data['contact']) {
        // data not null
        _BasicContact["default"].validateJSON(data['contact']);
      }
      // ensure the json data is a string
      if (data['creation_time'] && !(typeof data['creation_time'] === 'string' || data['creation_time'] instanceof String)) {
        throw new Error("Expected the field `creation_time` to be a primitive type in the JSON string but got " + data['creation_time']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['invoice_number'] && !(typeof data['invoice_number'] === 'string' || data['invoice_number'] instanceof String)) {
        throw new Error("Expected the field `invoice_number` to be a primitive type in the JSON string but got " + data['invoice_number']);
      }
      // ensure the json data is a string
      if (data['lead_affiliate_id'] && !(typeof data['lead_affiliate_id'] === 'string' || data['lead_affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `lead_affiliate_id` to be a primitive type in the JSON string but got " + data['lead_affiliate_id']);
      }
      // ensure the json data is a string
      if (data['modification_time'] && !(typeof data['modification_time'] === 'string' || data['modification_time'] instanceof String)) {
        throw new Error("Expected the field `modification_time` to be a primitive type in the JSON string but got " + data['modification_time']);
      }
      // ensure the json data is a string
      if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
        throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
      }
      if (data['order_items']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['order_items'])) {
          throw new Error("Expected the field `order_items` to be an array in the JSON data but got " + data['order_items']);
        }
        // validate the optional field `order_items` (array)
        var _iterator = _createForOfIteratorHelper(data['order_items']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _RestV2OrderItem["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['order_time'] && !(typeof data['order_time'] === 'string' || data['order_time'] instanceof String)) {
        throw new Error("Expected the field `order_time` to be a primitive type in the JSON string but got " + data['order_time']);
      }
      // ensure the json data is a string
      if (data['order_type'] && !(typeof data['order_type'] === 'string' || data['order_type'] instanceof String)) {
        throw new Error("Expected the field `order_type` to be a primitive type in the JSON string but got " + data['order_type']);
      }
      // validate the optional field `payment_plan`
      if (data['payment_plan']) {
        // data not null
        _PaymentPlan["default"].validateJSON(data['payment_plan']);
      }
      // ensure the json data is a string
      if (data['sales_affiliate_id'] && !(typeof data['sales_affiliate_id'] === 'string' || data['sales_affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `sales_affiliate_id` to be a primitive type in the JSON string but got " + data['sales_affiliate_id']);
      }
      // validate the optional field `shipping_information`
      if (data['shipping_information']) {
        // data not null
        _ShippingInformation["default"].validateJSON(data['shipping_information']);
      }
      // ensure the json data is a string
      if (data['source_type'] && !(typeof data['source_type'] === 'string' || data['source_type'] instanceof String)) {
        throw new Error("Expected the field `source_type` to be a primitive type in the JSON string but got " + data['source_type']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['terms'] && !(typeof data['terms'] === 'string' || data['terms'] instanceof String)) {
        throw new Error("Expected the field `terms` to be a primitive type in the JSON string but got " + data['terms']);
      }
      // ensure the json data is a string
      if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
        throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Boolean} allow_payment
 */
RestV2Order.prototype['allow_payment'] = undefined;

/**
 * @member {Boolean} allow_paypal
 */
RestV2Order.prototype['allow_paypal'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/BasicContact} contact
 */
RestV2Order.prototype['contact'] = undefined;

/**
 * @member {String} creation_time
 */
RestV2Order.prototype['creation_time'] = undefined;

/**
 * @member {String} id
 */
RestV2Order.prototype['id'] = undefined;

/**
 * @member {String} invoice_number
 */
RestV2Order.prototype['invoice_number'] = undefined;

/**
 * @member {String} lead_affiliate_id
 */
RestV2Order.prototype['lead_affiliate_id'] = undefined;

/**
 * @member {String} modification_time
 */
RestV2Order.prototype['modification_time'] = undefined;

/**
 * @member {String} notes
 */
RestV2Order.prototype['notes'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/RestV2OrderItem>} order_items
 */
RestV2Order.prototype['order_items'] = undefined;

/**
 * @member {String} order_time
 */
RestV2Order.prototype['order_time'] = undefined;

/**
 * @member {String} order_type
 */
RestV2Order.prototype['order_type'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/PaymentPlan} payment_plan
 */
RestV2Order.prototype['payment_plan'] = undefined;

/**
 * @member {Boolean} recurring
 */
RestV2Order.prototype['recurring'] = undefined;

/**
 * @member {Number} refund_total
 */
RestV2Order.prototype['refund_total'] = undefined;

/**
 * @member {String} sales_affiliate_id
 */
RestV2Order.prototype['sales_affiliate_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ShippingInformation} shipping_information
 */
RestV2Order.prototype['shipping_information'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestV2Order.SourceTypeEnum} source_type
 */
RestV2Order.prototype['source_type'] = undefined;

/**
 * @member {String} status
 */
RestV2Order.prototype['status'] = undefined;

/**
 * @member {String} terms
 */
RestV2Order.prototype['terms'] = undefined;

/**
 * @member {String} title
 */
RestV2Order.prototype['title'] = undefined;

/**
 * @member {Number} total
 */
RestV2Order.prototype['total'] = undefined;

/**
 * @member {Number} total_due
 */
RestV2Order.prototype['total_due'] = undefined;

/**
 * @member {Number} total_paid
 */
RestV2Order.prototype['total_paid'] = undefined;

/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
RestV2Order['SourceTypeEnum'] = {
  /**
   * value: "INVOICE"
   * @const
   */
  "INVOICE": "INVOICE",
  /**
   * value: "API"
   * @const
   */
  "API": "API",
  /**
   * value: "CHECKOUT_FORM"
   * @const
   */
  "CHECKOUT_FORM": "CHECKOUT_FORM",
  /**
   * value: "MANUAL_PAYMENT"
   * @const
   */
  "MANUAL_PAYMENT": "MANUAL_PAYMENT",
  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN",
  /**
   * value: "QBO_SYNC"
   * @const
   */
  "QBO_SYNC": "QBO_SYNC",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = RestV2Order;