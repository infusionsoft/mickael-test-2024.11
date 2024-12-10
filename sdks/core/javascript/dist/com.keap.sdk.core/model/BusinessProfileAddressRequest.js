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
 * The BusinessProfileAddressRequest model module.
 * @module com.keap.sdk.core/model/BusinessProfileAddressRequest
 * @version 0.0.38
 */
var BusinessProfileAddressRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BusinessProfileAddressRequest</code>.
   * @alias module:com.keap.sdk.core/model/BusinessProfileAddressRequest
   * @param countryCode {String} An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
   * @param line1 {String} 
   * @param line2 {String} 
   * @param locality {String} The municipality to which the address belongs
   * @param postalCode {String} 
   * @param region {String} The long-name descriptive version of the Region Code
   */
  function BusinessProfileAddressRequest(countryCode, line1, line2, locality, postalCode, region) {
    _classCallCheck(this, BusinessProfileAddressRequest);
    BusinessProfileAddressRequest.initialize(this, countryCode, line1, line2, locality, postalCode, region);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(BusinessProfileAddressRequest, null, [{
    key: "initialize",
    value: function initialize(obj, countryCode, line1, line2, locality, postalCode, region) {
      obj['country_code'] = countryCode;
      obj['line1'] = line1;
      obj['line2'] = line2;
      obj['locality'] = locality;
      obj['postal_code'] = postalCode;
      obj['region'] = region;
    }

    /**
     * Constructs a <code>BusinessProfileAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/BusinessProfileAddressRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/BusinessProfileAddressRequest} The populated <code>BusinessProfileAddressRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BusinessProfileAddressRequest();
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
     * Validates the JSON data with respect to <code>BusinessProfileAddressRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BusinessProfileAddressRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(BusinessProfileAddressRequest.RequiredProperties),
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
BusinessProfileAddressRequest.RequiredProperties = ["country_code", "line1", "line2", "locality", "postal_code", "region"];

/**
 * An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
 * @member {String} country_code
 */
BusinessProfileAddressRequest.prototype['country_code'] = undefined;

/**
 * @member {String} line1
 */
BusinessProfileAddressRequest.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
BusinessProfileAddressRequest.prototype['line2'] = undefined;

/**
 * The municipality to which the address belongs
 * @member {String} locality
 */
BusinessProfileAddressRequest.prototype['locality'] = undefined;

/**
 * @member {String} postal_code
 */
BusinessProfileAddressRequest.prototype['postal_code'] = undefined;

/**
 * The long-name descriptive version of the Region Code
 * @member {String} region
 */
BusinessProfileAddressRequest.prototype['region'] = undefined;
var _default = exports["default"] = BusinessProfileAddressRequest;