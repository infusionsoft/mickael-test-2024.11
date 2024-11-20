"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AffiliateCommission = _interopRequireDefault(require("./AffiliateCommission"));
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
 * The ListAffiliateCommissionResponse model module.
 * @module com.keap.sdk.core/model/ListAffiliateCommissionResponse
 * @version 2.70.0.739356-hf-202411181744
 */
var ListAffiliateCommissionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAffiliateCommissionResponse</code>.
   * @alias module:com.keap.sdk.core/model/ListAffiliateCommissionResponse
   */
  function ListAffiliateCommissionResponse() {
    _classCallCheck(this, ListAffiliateCommissionResponse);
    ListAffiliateCommissionResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ListAffiliateCommissionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListAffiliateCommissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListAffiliateCommissionResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListAffiliateCommissionResponse} The populated <code>ListAffiliateCommissionResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAffiliateCommissionResponse();
        if (data.hasOwnProperty('AffiliateCommissions')) {
          obj['AffiliateCommissions'] = _ApiClient["default"].convertToType(data['AffiliateCommissions'], [_AffiliateCommission["default"]]);
        }
        if (data.hasOwnProperty('next_page_token')) {
          obj['next_page_token'] = _ApiClient["default"].convertToType(data['next_page_token'], 'String');
        }
        if (data.hasOwnProperty('total_aff_comm_earned')) {
          obj['total_aff_comm_earned'] = _ApiClient["default"].convertToType(data['total_aff_comm_earned'], 'Number');
        }
        if (data.hasOwnProperty('total_claw_back')) {
          obj['total_claw_back'] = _ApiClient["default"].convertToType(data['total_claw_back'], 'Number');
        }
        if (data.hasOwnProperty('total_comm_earned')) {
          obj['total_comm_earned'] = _ApiClient["default"].convertToType(data['total_comm_earned'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListAffiliateCommissionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAffiliateCommissionResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['AffiliateCommissions']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['AffiliateCommissions'])) {
          throw new Error("Expected the field `AffiliateCommissions` to be an array in the JSON data but got " + data['AffiliateCommissions']);
        }
        // validate the optional field `AffiliateCommissions` (array)
        var _iterator = _createForOfIteratorHelper(data['AffiliateCommissions']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _AffiliateCommission["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
        throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Array.<module:com.keap.sdk.core/model/AffiliateCommission>} AffiliateCommissions
 */
ListAffiliateCommissionResponse.prototype['AffiliateCommissions'] = undefined;

/**
 * @member {String} next_page_token
 */
ListAffiliateCommissionResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Number} total_aff_comm_earned
 */
ListAffiliateCommissionResponse.prototype['total_aff_comm_earned'] = undefined;

/**
 * @member {Number} total_claw_back
 */
ListAffiliateCommissionResponse.prototype['total_claw_back'] = undefined;

/**
 * @member {Number} total_comm_earned
 */
ListAffiliateCommissionResponse.prototype['total_comm_earned'] = undefined;
var _default = exports["default"] = ListAffiliateCommissionResponse;