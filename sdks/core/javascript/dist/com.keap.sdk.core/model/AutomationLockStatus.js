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
 * The AutomationLockStatus model module.
 * @module com.keap.sdk.core/model/AutomationLockStatus
 * @version 0.0.25
 */
var AutomationLockStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AutomationLockStatus</code>.
   * @alias module:com.keap.sdk.core/model/AutomationLockStatus
   */
  function AutomationLockStatus() {
    _classCallCheck(this, AutomationLockStatus);
    AutomationLockStatus.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(AutomationLockStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AutomationLockStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AutomationLockStatus} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AutomationLockStatus} The populated <code>AutomationLockStatus</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AutomationLockStatus();
        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }
        if (data.hasOwnProperty('user_firstname')) {
          obj['user_firstname'] = _ApiClient["default"].convertToType(data['user_firstname'], 'String');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('user_name')) {
          obj['user_name'] = _ApiClient["default"].convertToType(data['user_name'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AutomationLockStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutomationLockStatus</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['user_firstname'] && !(typeof data['user_firstname'] === 'string' || data['user_firstname'] instanceof String)) {
        throw new Error("Expected the field `user_firstname` to be a primitive type in the JSON string but got " + data['user_firstname']);
      }
      // ensure the json data is a string
      if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
        throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
      }
      // ensure the json data is a string
      if (data['user_name'] && !(typeof data['user_name'] === 'string' || data['user_name'] instanceof String)) {
        throw new Error("Expected the field `user_name` to be a primitive type in the JSON string but got " + data['user_name']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Boolean} locked
 */
AutomationLockStatus.prototype['locked'] = undefined;

/**
 * @member {String} user_firstname
 */
AutomationLockStatus.prototype['user_firstname'] = undefined;

/**
 * @member {String} user_id
 */
AutomationLockStatus.prototype['user_id'] = undefined;

/**
 * @member {String} user_name
 */
AutomationLockStatus.prototype['user_name'] = undefined;
var _default = exports["default"] = AutomationLockStatus;