"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateEmailSentRequest = _interopRequireDefault(require("./CreateEmailSentRequest"));
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
 * The EmailSentCreateError model module.
 * @module com.keap.sdk.core/model/EmailSentCreateError
 * @version 0.0.26
 */
var EmailSentCreateError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailSentCreateError</code>.
   * @alias module:com.keap.sdk.core/model/EmailSentCreateError
   */
  function EmailSentCreateError() {
    _classCallCheck(this, EmailSentCreateError);
    EmailSentCreateError.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(EmailSentCreateError, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>EmailSentCreateError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/EmailSentCreateError} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/EmailSentCreateError} The populated <code>EmailSentCreateError</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailSentCreateError();
        if (data.hasOwnProperty('email')) {
          obj['email'] = _CreateEmailSentRequest["default"].constructFromObject(data['email']);
        }
        if (data.hasOwnProperty('error_message')) {
          obj['error_message'] = _ApiClient["default"].convertToType(data['error_message'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailSentCreateError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailSentCreateError</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `email`
      if (data['email']) {
        // data not null
        _CreateEmailSentRequest["default"].validateJSON(data['email']);
      }
      // ensure the json data is a string
      if (data['error_message'] && !(typeof data['error_message'] === 'string' || data['error_message'] instanceof String)) {
        throw new Error("Expected the field `error_message` to be a primitive type in the JSON string but got " + data['error_message']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:com.keap.sdk.core/model/CreateEmailSentRequest} email
 */
EmailSentCreateError.prototype['email'] = undefined;

/**
 * @member {String} error_message
 */
EmailSentCreateError.prototype['error_message'] = undefined;
var _default = exports["default"] = EmailSentCreateError;