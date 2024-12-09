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
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The CreateRestOrderItemRequest model module.
 * @module com.keap.sdk.core/model/CreateRestOrderItemRequest
 * @version 0.0.36
 */
var CreateRestOrderItemRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateRestOrderItemRequest</code>.
   * @alias module:com.keap.sdk.core/model/CreateRestOrderItemRequest
   * @param productId {String} The id of the product to be added to the order.
   * @param quantity {Number} Quantity must be greater than or equal to 1
   */
  function CreateRestOrderItemRequest(productId, quantity) {
    _classCallCheck(this, CreateRestOrderItemRequest);
    CreateRestOrderItemRequest.initialize(this, productId, quantity);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreateRestOrderItemRequest, null, [{
    key: "initialize",
    value: function initialize(obj, productId, quantity) {
      obj['product_id'] = productId;
      obj['quantity'] = quantity;
    }

    /**
     * Constructs a <code>CreateRestOrderItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateRestOrderItemRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateRestOrderItemRequest} The populated <code>CreateRestOrderItemRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateRestOrderItemRequest();
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }
        if (data.hasOwnProperty('product_id')) {
          obj['product_id'] = _ApiClient["default"].convertToType(data['product_id'], 'String');
        }
        if (data.hasOwnProperty('product_type')) {
          obj['product_type'] = _ApiClient["default"].convertToType(data['product_type'], 'String');
        }
        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateRestOrderItemRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateRestOrderItemRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateRestOrderItemRequest.RequiredProperties),
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
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
        throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
      }
      // ensure the json data is a string
      if (data['product_type'] && !(typeof data['product_type'] === 'string' || data['product_type'] instanceof String)) {
        throw new Error("Expected the field `product_type` to be a primitive type in the JSON string but got " + data['product_type']);
      }
      return true;
    }
  }]);
}();
CreateRestOrderItemRequest.RequiredProperties = ["product_id", "quantity"];

/**
 * @member {String} description
 */
CreateRestOrderItemRequest.prototype['description'] = undefined;

/**
 * Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0.
 * @member {Number} price
 */
CreateRestOrderItemRequest.prototype['price'] = undefined;

/**
 * The id of the product to be added to the order.
 * @member {String} product_id
 */
CreateRestOrderItemRequest.prototype['product_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CreateRestOrderItemRequest.ProductTypeEnum} product_type
 */
CreateRestOrderItemRequest.prototype['product_type'] = undefined;

/**
 * Quantity must be greater than or equal to 1
 * @member {Number} quantity
 */
CreateRestOrderItemRequest.prototype['quantity'] = undefined;

/**
 * Allowed values for the <code>product_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateRestOrderItemRequest['ProductTypeEnum'] = {
  /**
   * value: "PRODUCT"
   * @const
   */
  "PRODUCT": "PRODUCT",
  /**
   * value: "DIGITAL"
   * @const
   */
  "DIGITAL": "DIGITAL",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = CreateRestOrderItemRequest;