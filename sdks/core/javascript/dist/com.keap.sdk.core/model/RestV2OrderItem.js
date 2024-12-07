"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Discount = _interopRequireDefault(require("./Discount"));
var _OrderItemTax = _interopRequireDefault(require("./OrderItemTax"));
var _RestProduct = _interopRequireDefault(require("./RestProduct"));
var _RestSubscriptionPlan = _interopRequireDefault(require("./RestSubscriptionPlan"));
var _RestV2Subscription = _interopRequireDefault(require("./RestV2Subscription"));
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
 * The RestV2OrderItem model module.
 * @module com.keap.sdk.core/model/RestV2OrderItem
 * @version 0.0.32
 */
var RestV2OrderItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestV2OrderItem</code>.
   * @alias module:com.keap.sdk.core/model/RestV2OrderItem
   */
  function RestV2OrderItem() {
    _classCallCheck(this, RestV2OrderItem);
    RestV2OrderItem.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestV2OrderItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RestV2OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestV2OrderItem} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestV2OrderItem} The populated <code>RestV2OrderItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestV2OrderItem();
        if (data.hasOwnProperty('billing_cycle')) {
          obj['billing_cycle'] = _ApiClient["default"].convertToType(data['billing_cycle'], 'Number');
        }
        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'Number');
        }
        if (data.hasOwnProperty('cycle')) {
          obj['cycle'] = _ApiClient["default"].convertToType(data['cycle'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('discount')) {
          obj['discount'] = _ApiClient["default"].convertToType(data['discount'], 'Number');
        }
        if (data.hasOwnProperty('frequency')) {
          obj['frequency'] = _ApiClient["default"].convertToType(data['frequency'], 'Number');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }
        if (data.hasOwnProperty('number_of_payments')) {
          obj['number_of_payments'] = _ApiClient["default"].convertToType(data['number_of_payments'], 'Number');
        }
        if (data.hasOwnProperty('order_item_taxes')) {
          obj['order_item_taxes'] = _ApiClient["default"].convertToType(data['order_item_taxes'], [_OrderItemTax["default"]]);
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }
        if (data.hasOwnProperty('product')) {
          obj['product'] = _RestProduct["default"].constructFromObject(data['product']);
        }
        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
        if (data.hasOwnProperty('special')) {
          obj['special'] = _Discount["default"].constructFromObject(data['special']);
        }
        if (data.hasOwnProperty('subscription')) {
          obj['subscription'] = _RestV2Subscription["default"].constructFromObject(data['subscription']);
        }
        if (data.hasOwnProperty('subscription_based')) {
          obj['subscription_based'] = _ApiClient["default"].convertToType(data['subscription_based'], 'Boolean');
        }
        if (data.hasOwnProperty('subscription_id')) {
          obj['subscription_id'] = _ApiClient["default"].convertToType(data['subscription_id'], 'String');
        }
        if (data.hasOwnProperty('subscription_plan')) {
          obj['subscription_plan'] = _RestSubscriptionPlan["default"].constructFromObject(data['subscription_plan']);
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2OrderItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2OrderItem</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['cycle'] && !(typeof data['cycle'] === 'string' || data['cycle'] instanceof String)) {
        throw new Error("Expected the field `cycle` to be a primitive type in the JSON string but got " + data['cycle']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
        throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
      }
      if (data['order_item_taxes']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['order_item_taxes'])) {
          throw new Error("Expected the field `order_item_taxes` to be an array in the JSON data but got " + data['order_item_taxes']);
        }
        // validate the optional field `order_item_taxes` (array)
        var _iterator = _createForOfIteratorHelper(data['order_item_taxes']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _OrderItemTax["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // validate the optional field `product`
      if (data['product']) {
        // data not null
        _RestProduct["default"].validateJSON(data['product']);
      }
      // validate the optional field `special`
      if (data['special']) {
        // data not null
        _Discount["default"].validateJSON(data['special']);
      }
      // validate the optional field `subscription`
      if (data['subscription']) {
        // data not null
        _RestV2Subscription["default"].validateJSON(data['subscription']);
      }
      // ensure the json data is a string
      if (data['subscription_id'] && !(typeof data['subscription_id'] === 'string' || data['subscription_id'] instanceof String)) {
        throw new Error("Expected the field `subscription_id` to be a primitive type in the JSON string but got " + data['subscription_id']);
      }
      // validate the optional field `subscription_plan`
      if (data['subscription_plan']) {
        // data not null
        _RestSubscriptionPlan["default"].validateJSON(data['subscription_plan']);
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
 * @member {Number} billing_cycle
 */
RestV2OrderItem.prototype['billing_cycle'] = undefined;

/**
 * @member {Number} cost
 */
RestV2OrderItem.prototype['cost'] = undefined;

/**
 * The interval at which the customer is charged for the subscription.
 * @member {module:com.keap.sdk.core/model/RestV2OrderItem.CycleEnum} cycle
 */
RestV2OrderItem.prototype['cycle'] = undefined;

/**
 * @member {String} description
 */
RestV2OrderItem.prototype['description'] = undefined;

/**
 * @member {Number} discount
 */
RestV2OrderItem.prototype['discount'] = undefined;

/**
 * Interval at which a customer receives a product or service as part of a subscription plan.
 * @member {Number} frequency
 */
RestV2OrderItem.prototype['frequency'] = undefined;

/**
 * @member {String} id
 */
RestV2OrderItem.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RestV2OrderItem.prototype['name'] = undefined;

/**
 * @member {String} notes
 */
RestV2OrderItem.prototype['notes'] = undefined;

/**
 * @member {Number} number_of_payments
 */
RestV2OrderItem.prototype['number_of_payments'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/OrderItemTax>} order_item_taxes
 */
RestV2OrderItem.prototype['order_item_taxes'] = undefined;

/**
 * @member {Number} price
 */
RestV2OrderItem.prototype['price'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestProduct} product
 */
RestV2OrderItem.prototype['product'] = undefined;

/**
 * @member {Number} quantity
 */
RestV2OrderItem.prototype['quantity'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Discount} special
 */
RestV2OrderItem.prototype['special'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestV2Subscription} subscription
 */
RestV2OrderItem.prototype['subscription'] = undefined;

/**
 * @member {Boolean} subscription_based
 */
RestV2OrderItem.prototype['subscription_based'] = undefined;

/**
 * @member {String} subscription_id
 */
RestV2OrderItem.prototype['subscription_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestSubscriptionPlan} subscription_plan
 */
RestV2OrderItem.prototype['subscription_plan'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestV2OrderItem.TypeEnum} type
 */
RestV2OrderItem.prototype['type'] = undefined;

/**
 * Allowed values for the <code>cycle</code> property.
 * @enum {String}
 * @readonly
 */
RestV2OrderItem['CycleEnum'] = {
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
   * value: "DAY_OF_YEAR"
   * @const
   */
  "DAY_OF_YEAR": "DAY_OF_YEAR",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RestV2OrderItem['TypeEnum'] = {
  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN",
  /**
   * value: "SHIPPING"
   * @const
   */
  "SHIPPING": "SHIPPING",
  /**
   * value: "TAX"
   * @const
   */
  "TAX": "TAX",
  /**
   * value: "SERVICE"
   * @const
   */
  "SERVICE": "SERVICE",
  /**
   * value: "PRODUCT"
   * @const
   */
  "PRODUCT": "PRODUCT",
  /**
   * value: "UPSELL"
   * @const
   */
  "UPSELL": "UPSELL",
  /**
   * value: "FINANCECHARGE"
   * @const
   */
  "FINANCECHARGE": "FINANCECHARGE",
  /**
   * value: "SPECIAL"
   * @const
   */
  "SPECIAL": "SPECIAL",
  /**
   * value: "PROGRAM"
   * @const
   */
  "PROGRAM": "PROGRAM",
  /**
   * value: "SUBSCRIPTION"
   * @const
   */
  "SUBSCRIPTION": "SUBSCRIPTION",
  /**
   * value: "SPECIAL_FREE_TRAIL_DAYS"
   * @const
   */
  "SPECIAL_FREE_TRAIL_DAYS": "SPECIAL_FREE_TRAIL_DAYS",
  /**
   * value: "SPECIAL_ORDER_TOTAL"
   * @const
   */
  "SPECIAL_ORDER_TOTAL": "SPECIAL_ORDER_TOTAL",
  /**
   * value: "SPECIAL_PRODUCT"
   * @const
   */
  "SPECIAL_PRODUCT": "SPECIAL_PRODUCT",
  /**
   * value: "SPECIAL_CATEGORY"
   * @const
   */
  "SPECIAL_CATEGORY": "SPECIAL_CATEGORY",
  /**
   * value: "SPECIAL_SHIPPING"
   * @const
   */
  "SPECIAL_SHIPPING": "SPECIAL_SHIPPING",
  /**
   * value: "TIP"
   * @const
   */
  "TIP": "TIP",
  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = RestV2OrderItem;