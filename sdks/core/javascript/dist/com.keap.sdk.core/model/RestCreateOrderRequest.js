"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressInformation = _interopRequireDefault(require("./AddressInformation"));
var _CreateRestOrderItemRequest = _interopRequireDefault(require("./CreateRestOrderItemRequest"));
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
 * The RestCreateOrderRequest model module.
 * @module com.keap.sdk.core/model/RestCreateOrderRequest
 * @version 0.0.23
 */
var RestCreateOrderRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestCreateOrderRequest</code>.
   * @alias module:com.keap.sdk.core/model/RestCreateOrderRequest
   * @param contactId {String} 
   * @param orderItems {Array.<module:com.keap.sdk.core/model/CreateRestOrderItemRequest>} 
   * @param orderTime {String} 
   * @param orderTitle {String} 
   * @param orderType {module:com.keap.sdk.core/model/RestCreateOrderRequest.OrderTypeEnum} 
   */
  function RestCreateOrderRequest(contactId, orderItems, orderTime, orderTitle, orderType) {
    _classCallCheck(this, RestCreateOrderRequest);
    RestCreateOrderRequest.initialize(this, contactId, orderItems, orderTime, orderTitle, orderType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestCreateOrderRequest, null, [{
    key: "initialize",
    value: function initialize(obj, contactId, orderItems, orderTime, orderTitle, orderType) {
      obj['contact_id'] = contactId;
      obj['order_items'] = orderItems;
      obj['order_time'] = orderTime;
      obj['order_title'] = orderTitle;
      obj['order_type'] = orderType;
    }

    /**
     * Constructs a <code>RestCreateOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestCreateOrderRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestCreateOrderRequest} The populated <code>RestCreateOrderRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCreateOrderRequest();
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'String');
        }
        if (data.hasOwnProperty('lead_affiliate_id')) {
          obj['lead_affiliate_id'] = _ApiClient["default"].convertToType(data['lead_affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('order_items')) {
          obj['order_items'] = _ApiClient["default"].convertToType(data['order_items'], [_CreateRestOrderItemRequest["default"]]);
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
     * Validates the JSON data with respect to <code>RestCreateOrderRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestCreateOrderRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(RestCreateOrderRequest.RequiredProperties),
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
      if (data['lead_affiliate_id'] && !(typeof data['lead_affiliate_id'] === 'string' || data['lead_affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `lead_affiliate_id` to be a primitive type in the JSON string but got " + data['lead_affiliate_id']);
      }
      if (data['order_items']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['order_items'])) {
          throw new Error("Expected the field `order_items` to be an array in the JSON data but got " + data['order_items']);
        }
        // validate the optional field `order_items` (array)
        var _iterator2 = _createForOfIteratorHelper(data['order_items']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _CreateRestOrderItemRequest["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
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
RestCreateOrderRequest.RequiredProperties = ["contact_id", "order_items", "order_time", "order_title", "order_type"];

/**
 * @member {String} contact_id
 */
RestCreateOrderRequest.prototype['contact_id'] = undefined;

/**
 * @member {String} lead_affiliate_id
 */
RestCreateOrderRequest.prototype['lead_affiliate_id'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CreateRestOrderItemRequest>} order_items
 */
RestCreateOrderRequest.prototype['order_items'] = undefined;

/**
 * @member {String} order_time
 */
RestCreateOrderRequest.prototype['order_time'] = undefined;

/**
 * @member {String} order_title
 */
RestCreateOrderRequest.prototype['order_title'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestCreateOrderRequest.OrderTypeEnum} order_type
 */
RestCreateOrderRequest.prototype['order_type'] = undefined;

/**
 * Uses multiple strings as promo codes. The corresponding discount will be applied to the order.
 * @member {Array.<String>} promo_codes
 */
RestCreateOrderRequest.prototype['promo_codes'] = undefined;

/**
 * @member {String} sales_affiliate_id
 */
RestCreateOrderRequest.prototype['sales_affiliate_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/AddressInformation} shipping_address
 */
RestCreateOrderRequest.prototype['shipping_address'] = undefined;

/**
 * Allowed values for the <code>order_type</code> property.
 * @enum {String}
 * @readonly
 */
RestCreateOrderRequest['OrderTypeEnum'] = {
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
var _default = exports["default"] = RestCreateOrderRequest;