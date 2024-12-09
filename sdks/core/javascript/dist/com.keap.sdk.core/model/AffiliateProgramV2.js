"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DefaultCommission = _interopRequireDefault(require("./DefaultCommission"));
var _ProductCommission = _interopRequireDefault(require("./ProductCommission"));
var _SubscriptionCommission = _interopRequireDefault(require("./SubscriptionCommission"));
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
 * The AffiliateProgramV2 model module.
 * @module com.keap.sdk.core/model/AffiliateProgramV2
 * @version 0.0.36
 */
var AffiliateProgramV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AffiliateProgramV2</code>.
   * @alias module:com.keap.sdk.core/model/AffiliateProgramV2
   */
  function AffiliateProgramV2() {
    _classCallCheck(this, AffiliateProgramV2);
    AffiliateProgramV2.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(AffiliateProgramV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AffiliateProgramV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AffiliateProgramV2} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AffiliateProgramV2} The populated <code>AffiliateProgramV2</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AffiliateProgramV2();
        if (data.hasOwnProperty('affiliate_id')) {
          obj['affiliate_id'] = _ApiClient["default"].convertToType(data['affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('create_time')) {
          obj['create_time'] = _ApiClient["default"].convertToType(data['create_time'], 'Date');
        }
        if (data.hasOwnProperty('default_commission')) {
          obj['default_commission'] = _DefaultCommission["default"].constructFromObject(data['default_commission']);
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
        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }
        if (data.hasOwnProperty('product_commissions')) {
          obj['product_commissions'] = _ApiClient["default"].convertToType(data['product_commissions'], [_ProductCommission["default"]]);
        }
        if (data.hasOwnProperty('subscription_commissions')) {
          obj['subscription_commissions'] = _ApiClient["default"].convertToType(data['subscription_commissions'], [_SubscriptionCommission["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AffiliateProgramV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AffiliateProgramV2</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['affiliate_id'] && !(typeof data['affiliate_id'] === 'string' || data['affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `affiliate_id` to be a primitive type in the JSON string but got " + data['affiliate_id']);
      }
      // validate the optional field `default_commission`
      if (data['default_commission']) {
        // data not null
        _DefaultCommission["default"].validateJSON(data['default_commission']);
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
      // ensure the json data is a string
      if (data['priority'] && !(typeof data['priority'] === 'string' || data['priority'] instanceof String)) {
        throw new Error("Expected the field `priority` to be a primitive type in the JSON string but got " + data['priority']);
      }
      if (data['product_commissions']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['product_commissions'])) {
          throw new Error("Expected the field `product_commissions` to be an array in the JSON data but got " + data['product_commissions']);
        }
        // validate the optional field `product_commissions` (array)
        var _iterator = _createForOfIteratorHelper(data['product_commissions']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _ProductCommission["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      if (data['subscription_commissions']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['subscription_commissions'])) {
          throw new Error("Expected the field `subscription_commissions` to be an array in the JSON data but got " + data['subscription_commissions']);
        }
        // validate the optional field `subscription_commissions` (array)
        var _iterator2 = _createForOfIteratorHelper(data['subscription_commissions']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _SubscriptionCommission["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      return true;
    }
  }]);
}();
/**
 * The affiliate_Id for Affiliate commission program
 * @member {String} affiliate_id
 */
AffiliateProgramV2.prototype['affiliate_id'] = undefined;

/**
 * The created time of affiliate commission program
 * @member {Date} create_time
 */
AffiliateProgramV2.prototype['create_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/DefaultCommission} default_commission
 */
AffiliateProgramV2.prototype['default_commission'] = undefined;

/**
 * The affiliate commission program name
 * @member {String} id
 */
AffiliateProgramV2.prototype['id'] = undefined;

/**
 * The affiliate commission program name
 * @member {String} name
 */
AffiliateProgramV2.prototype['name'] = undefined;

/**
 * The affiliate commission program notes
 * @member {String} notes
 */
AffiliateProgramV2.prototype['notes'] = undefined;

/**
 * The Affiliate commission program priority
 * @member {String} priority
 */
AffiliateProgramV2.prototype['priority'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/ProductCommission>} product_commissions
 */
AffiliateProgramV2.prototype['product_commissions'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/SubscriptionCommission>} subscription_commissions
 */
AffiliateProgramV2.prototype['subscription_commissions'] = undefined;
var _default = exports["default"] = AffiliateProgramV2;