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
 * The BusinessProfileAddressResponse model module.
 * @module com.keap.sdk.core/model/BusinessProfileAddressResponse
 * @version 0.0.21
 */
var BusinessProfileAddressResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BusinessProfileAddressResponse</code>.
   * @alias module:com.keap.sdk.core/model/BusinessProfileAddressResponse
   */
  function BusinessProfileAddressResponse() {
    _classCallCheck(this, BusinessProfileAddressResponse);
    BusinessProfileAddressResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(BusinessProfileAddressResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>BusinessProfileAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/BusinessProfileAddressResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/BusinessProfileAddressResponse} The populated <code>BusinessProfileAddressResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BusinessProfileAddressResponse();
        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }
        if (data.hasOwnProperty('line1')) {
          obj['line1'] = _ApiClient["default"].convertToType(data['line1'], 'String');
        }
        if (data.hasOwnProperty('line2')) {
          obj['line2'] = _ApiClient["default"].convertToType(data['line2'], 'String');
        }
        if (data.hasOwnProperty('locality')) {
          obj['locality'] = _ApiClient["default"].convertToType(data['locality'], 'String');
        }
        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }
        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BusinessProfileAddressResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BusinessProfileAddressResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['country_code'] && !(typeof data['country_code'] === 'string' || data['country_code'] instanceof String)) {
        throw new Error("Expected the field `country_code` to be a primitive type in the JSON string but got " + data['country_code']);
      }
      // ensure the json data is a string
      if (data['line1'] && !(typeof data['line1'] === 'string' || data['line1'] instanceof String)) {
        throw new Error("Expected the field `line1` to be a primitive type in the JSON string but got " + data['line1']);
      }
      // ensure the json data is a string
      if (data['line2'] && !(typeof data['line2'] === 'string' || data['line2'] instanceof String)) {
        throw new Error("Expected the field `line2` to be a primitive type in the JSON string but got " + data['line2']);
      }
      // ensure the json data is a string
      if (data['locality'] && !(typeof data['locality'] === 'string' || data['locality'] instanceof String)) {
        throw new Error("Expected the field `locality` to be a primitive type in the JSON string but got " + data['locality']);
      }
      // ensure the json data is a string
      if (data['postal_code'] && !(typeof data['postal_code'] === 'string' || data['postal_code'] instanceof String)) {
        throw new Error("Expected the field `postal_code` to be a primitive type in the JSON string but got " + data['postal_code']);
      }
      // ensure the json data is a string
      if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
        throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
      }
      return true;
    }
  }]);
}();
/**
 * An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
 * @member {String} country_code
 */
BusinessProfileAddressResponse.prototype['country_code'] = undefined;

/**
 * @member {String} line1
 */
BusinessProfileAddressResponse.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
BusinessProfileAddressResponse.prototype['line2'] = undefined;

/**
 * The municipality to which the address belongs
 * @member {String} locality
 */
BusinessProfileAddressResponse.prototype['locality'] = undefined;

/**
 * @member {String} postal_code
 */
BusinessProfileAddressResponse.prototype['postal_code'] = undefined;

/**
 * The long-name descriptive version of the Region Code
 * @member {String} region
 */
BusinessProfileAddressResponse.prototype['region'] = undefined;
var _default = exports["default"] = BusinessProfileAddressResponse;