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
 * The RestEmailAddress model module.
 * @module com.keap.sdk.core/model/RestEmailAddress
 * @version 0.0.30
 */
var RestEmailAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestEmailAddress</code>.
   * @alias module:com.keap.sdk.core/model/RestEmailAddress
   * @param email {String} 
   * @param optedIn {Boolean} 
   * @param status {module:com.keap.sdk.core/model/RestEmailAddress.StatusEnum} 
   */
  function RestEmailAddress(email, optedIn, status) {
    _classCallCheck(this, RestEmailAddress);
    RestEmailAddress.initialize(this, email, optedIn, status);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestEmailAddress, null, [{
    key: "initialize",
    value: function initialize(obj, email, optedIn, status) {
      obj['email'] = email;
      obj['opted_in'] = optedIn;
      obj['status'] = status;
    }

    /**
     * Constructs a <code>RestEmailAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestEmailAddress} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestEmailAddress} The populated <code>RestEmailAddress</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestEmailAddress();
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('opted_in')) {
          obj['opted_in'] = _ApiClient["default"].convertToType(data['opted_in'], 'Boolean');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestEmailAddress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestEmailAddress</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(RestEmailAddress.RequiredProperties),
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
      if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
        throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      return true;
    }
  }]);
}();
RestEmailAddress.RequiredProperties = ["email", "opted_in", "status"];

/**
 * @member {String} email
 */
RestEmailAddress.prototype['email'] = undefined;

/**
 * @member {Boolean} opted_in
 */
RestEmailAddress.prototype['opted_in'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestEmailAddress.StatusEnum} status
 */
RestEmailAddress.prototype['status'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
RestEmailAddress['StatusEnum'] = {
  /**
   * value: "Unengaged Marketable"
   * @const
   */
  "Unengaged Marketable": "Unengaged Marketable",
  /**
   * value: "Unconfirmed"
   * @const
   */
  "Unconfirmed": "Unconfirmed",
  /**
   * value: "Confirmed (Legacy)"
   * @const
   */
  "Confirmed (Legacy)": "Confirmed (Legacy)",
  /**
   * value: "Confirmed"
   * @const
   */
  "Confirmed": "Confirmed",
  /**
   * value: "Unengaged NonMarketable"
   * @const
   */
  "Unengaged NonMarketable": "Unengaged NonMarketable",
  /**
   * value: "Non-marketable"
   * @const
   */
  "Non-marketable": "Non-marketable",
  /**
   * value: "Lockdown"
   * @const
   */
  "Lockdown": "Lockdown",
  /**
   * value: "Soft Bounce"
   * @const
   */
  "Soft Bounce": "Soft Bounce",
  /**
   * value: "Hard Bounce"
   * @const
   */
  "Hard Bounce": "Hard Bounce",
  /**
   * value: "Opt-Out"
   * @const
   */
  "Opt-Out": "Opt-Out",
  /**
   * value: "Opt-Out: Admin"
   * @const
   */
  "Opt-Out: Admin": "Opt-Out: Admin",
  /**
   * value: "Opt-Out: System"
   * @const
   */
  "Opt-Out: System": "Opt-Out: System",
  /**
   * value: "List Unsubscribe"
   * @const
   */
  "List Unsubscribe": "List Unsubscribe",
  /**
   * value: "Provided Feedback"
   * @const
   */
  "Provided Feedback": "Provided Feedback",
  /**
   * value: "Reported Spam"
   * @const
   */
  "Reported Spam": "Reported Spam",
  /**
   * value: "Invalid Email"
   * @const
   */
  "Invalid Email": "Invalid Email",
  /**
   * value: "Deactivated/Delinquent Mailbox"
   * @const
   */
  "Deactivated/Delinquent Mailbox": "Deactivated/Delinquent Mailbox",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = RestEmailAddress;