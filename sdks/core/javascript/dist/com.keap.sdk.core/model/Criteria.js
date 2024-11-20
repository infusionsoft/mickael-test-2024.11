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
 * The Criteria model module.
 * @module com.keap.sdk.core/model/Criteria
 * @version 2.70.0.739356-hf-202411181744
 */
var Criteria = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Criteria</code>.
   * @alias module:com.keap.sdk.core/model/Criteria
   */
  function Criteria() {
    _classCallCheck(this, Criteria);
    Criteria.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Criteria, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Criteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Criteria} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Criteria} The populated <code>Criteria</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Criteria();
        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
        if (data.hasOwnProperty('criteria_id')) {
          obj['criteria_id'] = _ApiClient["default"].convertToType(data['criteria_id'], 'String');
        }
        if (data.hasOwnProperty('end_range_date')) {
          obj['end_range_date'] = _ApiClient["default"].convertToType(data['end_range_date'], 'String');
        }
        if (data.hasOwnProperty('start_range_date')) {
          obj['start_range_date'] = _ApiClient["default"].convertToType(data['start_range_date'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Criteria</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Criteria</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
        throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
      }
      // ensure the json data is a string
      if (data['criteria_id'] && !(typeof data['criteria_id'] === 'string' || data['criteria_id'] instanceof String)) {
        throw new Error("Expected the field `criteria_id` to be a primitive type in the JSON string but got " + data['criteria_id']);
      }
      // ensure the json data is a string
      if (data['end_range_date'] && !(typeof data['end_range_date'] === 'string' || data['end_range_date'] instanceof String)) {
        throw new Error("Expected the field `end_range_date` to be a primitive type in the JSON string but got " + data['end_range_date']);
      }
      // ensure the json data is a string
      if (data['start_range_date'] && !(typeof data['start_range_date'] === 'string' || data['start_range_date'] instanceof String)) {
        throw new Error("Expected the field `start_range_date` to be a primitive type in the JSON string but got " + data['start_range_date']);
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
 * @member {String} code
 */
Criteria.prototype['code'] = undefined;

/**
 * @member {String} criteria_id
 */
Criteria.prototype['criteria_id'] = undefined;

/**
 * @member {String} end_range_date
 */
Criteria.prototype['end_range_date'] = undefined;

/**
 * @member {String} start_range_date
 */
Criteria.prototype['start_range_date'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Criteria.TypeEnum} type
 */
Criteria.prototype['type'] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Criteria['TypeEnum'] = {
  /**
   * value: "date range"
   * @const
   */
  "date range": "date range",
  /**
   * value: "promo code"
   * @const
   */
  "promo code": "promo code",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = Criteria;