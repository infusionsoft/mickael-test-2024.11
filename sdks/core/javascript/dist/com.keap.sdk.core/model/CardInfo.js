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
 * The CardInfo model module.
 * @module com.keap.sdk.core/model/CardInfo
 * @version 0.0.31
 */
var CardInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CardInfo</code>.
   * @alias module:com.keap.sdk.core/model/CardInfo
   */
  function CardInfo() {
    _classCallCheck(this, CardInfo);
    CardInfo.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CardInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CardInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CardInfo} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CardInfo} The populated <code>CardInfo</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CardInfo();
        if (data.hasOwnProperty('brand')) {
          obj['brand'] = _ApiClient["default"].convertToType(data['brand'], 'String');
        }
        if (data.hasOwnProperty('cardType')) {
          obj['cardType'] = _ApiClient["default"].convertToType(data['cardType'], 'String');
        }
        if (data.hasOwnProperty('expirationMonth')) {
          obj['expirationMonth'] = _ApiClient["default"].convertToType(data['expirationMonth'], 'String');
        }
        if (data.hasOwnProperty('expirationYear')) {
          obj['expirationYear'] = _ApiClient["default"].convertToType(data['expirationYear'], 'String');
        }
        if (data.hasOwnProperty('lastFour')) {
          obj['lastFour'] = _ApiClient["default"].convertToType(data['lastFour'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CardInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CardInfo</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['brand'] && !(typeof data['brand'] === 'string' || data['brand'] instanceof String)) {
        throw new Error("Expected the field `brand` to be a primitive type in the JSON string but got " + data['brand']);
      }
      // ensure the json data is a string
      if (data['cardType'] && !(typeof data['cardType'] === 'string' || data['cardType'] instanceof String)) {
        throw new Error("Expected the field `cardType` to be a primitive type in the JSON string but got " + data['cardType']);
      }
      // ensure the json data is a string
      if (data['expirationMonth'] && !(typeof data['expirationMonth'] === 'string' || data['expirationMonth'] instanceof String)) {
        throw new Error("Expected the field `expirationMonth` to be a primitive type in the JSON string but got " + data['expirationMonth']);
      }
      // ensure the json data is a string
      if (data['expirationYear'] && !(typeof data['expirationYear'] === 'string' || data['expirationYear'] instanceof String)) {
        throw new Error("Expected the field `expirationYear` to be a primitive type in the JSON string but got " + data['expirationYear']);
      }
      // ensure the json data is a string
      if (data['lastFour'] && !(typeof data['lastFour'] === 'string' || data['lastFour'] instanceof String)) {
        throw new Error("Expected the field `lastFour` to be a primitive type in the JSON string but got " + data['lastFour']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} brand
 */
CardInfo.prototype['brand'] = undefined;

/**
 * @member {String} cardType
 */
CardInfo.prototype['cardType'] = undefined;

/**
 * @member {String} expirationMonth
 */
CardInfo.prototype['expirationMonth'] = undefined;

/**
 * @member {String} expirationYear
 */
CardInfo.prototype['expirationYear'] = undefined;

/**
 * @member {String} lastFour
 */
CardInfo.prototype['lastFour'] = undefined;
var _default = exports["default"] = CardInfo;