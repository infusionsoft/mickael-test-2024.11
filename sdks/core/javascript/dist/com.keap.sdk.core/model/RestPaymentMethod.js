"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CardInfo = _interopRequireDefault(require("./CardInfo"));
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
 * The RestPaymentMethod model module.
 * @module com.keap.sdk.core/model/RestPaymentMethod
 * @version 0.0.26
 */
var RestPaymentMethod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestPaymentMethod</code>.
   * @alias module:com.keap.sdk.core/model/RestPaymentMethod
   */
  function RestPaymentMethod() {
    _classCallCheck(this, RestPaymentMethod);
    RestPaymentMethod.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestPaymentMethod, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RestPaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestPaymentMethod} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestPaymentMethod} The populated <code>RestPaymentMethod</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestPaymentMethod();
        if (data.hasOwnProperty('cardInfo')) {
          obj['cardInfo'] = _CardInfo["default"].constructFromObject(data['cardInfo']);
        }
        if (data.hasOwnProperty('dateCreated')) {
          obj['dateCreated'] = _ApiClient["default"].convertToType(data['dateCreated'], 'Date');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('paymentMethodType')) {
          obj['paymentMethodType'] = _ApiClient["default"].convertToType(data['paymentMethodType'], 'String');
        }
        if (data.hasOwnProperty('processorId')) {
          obj['processorId'] = _ApiClient["default"].convertToType(data['processorId'], 'String');
        }
        if (data.hasOwnProperty('processorType')) {
          obj['processorType'] = _ApiClient["default"].convertToType(data['processorType'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestPaymentMethod</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestPaymentMethod</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `cardInfo`
      if (data['cardInfo']) {
        // data not null
        _CardInfo["default"].validateJSON(data['cardInfo']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['paymentMethodType'] && !(typeof data['paymentMethodType'] === 'string' || data['paymentMethodType'] instanceof String)) {
        throw new Error("Expected the field `paymentMethodType` to be a primitive type in the JSON string but got " + data['paymentMethodType']);
      }
      // ensure the json data is a string
      if (data['processorId'] && !(typeof data['processorId'] === 'string' || data['processorId'] instanceof String)) {
        throw new Error("Expected the field `processorId` to be a primitive type in the JSON string but got " + data['processorId']);
      }
      // ensure the json data is a string
      if (data['processorType'] && !(typeof data['processorType'] === 'string' || data['processorType'] instanceof String)) {
        throw new Error("Expected the field `processorType` to be a primitive type in the JSON string but got " + data['processorType']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:com.keap.sdk.core/model/CardInfo} cardInfo
 */
RestPaymentMethod.prototype['cardInfo'] = undefined;

/**
 * @member {Date} dateCreated
 */
RestPaymentMethod.prototype['dateCreated'] = undefined;

/**
 * @member {String} id
 */
RestPaymentMethod.prototype['id'] = undefined;

/**
 * @member {String} paymentMethodType
 */
RestPaymentMethod.prototype['paymentMethodType'] = undefined;

/**
 * @member {String} processorId
 */
RestPaymentMethod.prototype['processorId'] = undefined;

/**
 * @member {String} processorType
 */
RestPaymentMethod.prototype['processorType'] = undefined;
var _default = exports["default"] = RestPaymentMethod;