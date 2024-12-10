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
 * The EmailAddressRequest model module.
 * @module com.keap.sdk.core/model/EmailAddressRequest
 * @version 0.0.38
 */
var EmailAddressRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailAddressRequest</code>.
   * @alias module:com.keap.sdk.core/model/EmailAddressRequest
   */
  function EmailAddressRequest() {
    _classCallCheck(this, EmailAddressRequest);
    EmailAddressRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(EmailAddressRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>EmailAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/EmailAddressRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/EmailAddressRequest} The populated <code>EmailAddressRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailAddressRequest();
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], 'String');
        }
        if (data.hasOwnProperty('opt_in_reason')) {
          obj['opt_in_reason'] = _ApiClient["default"].convertToType(data['opt_in_reason'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailAddressRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailAddressRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
        throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
      }
      // ensure the json data is a string
      if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
        throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
      }
      // ensure the json data is a string
      if (data['opt_in_reason'] && !(typeof data['opt_in_reason'] === 'string' || data['opt_in_reason'] instanceof String)) {
        throw new Error("Expected the field `opt_in_reason` to be a primitive type in the JSON string but got " + data['opt_in_reason']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} email
 */
EmailAddressRequest.prototype['email'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/EmailAddressRequest.FieldEnum} field
 */
EmailAddressRequest.prototype['field'] = undefined;

/**
 * @member {String} opt_in_reason
 */
EmailAddressRequest.prototype['opt_in_reason'] = undefined;

/**
 * Allowed values for the <code>field</code> property.
 * @enum {String}
 * @readonly
 */
EmailAddressRequest['FieldEnum'] = {
  /**
   * value: "EMAIL_FIELD_UNSPECIFIED"
   * @const
   */
  "EMAIL_FIELD_UNSPECIFIED": "EMAIL_FIELD_UNSPECIFIED",
  /**
   * value: "EMAIL1"
   * @const
   */
  "EMAIL1": "EMAIL1",
  /**
   * value: "EMAIL2"
   * @const
   */
  "EMAIL2": "EMAIL2",
  /**
   * value: "EMAIL3"
   * @const
   */
  "EMAIL3": "EMAIL3",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = EmailAddressRequest;