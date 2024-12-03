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
 * The EmailAddress model module.
 * @module com.keap.sdk.core/model/EmailAddress
 * @version 0.0.27
 */
var EmailAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailAddress</code>.
   * @alias module:com.keap.sdk.core/model/EmailAddress
   */
  function EmailAddress() {
    _classCallCheck(this, EmailAddress);
    EmailAddress.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(EmailAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>EmailAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/EmailAddress} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/EmailAddress} The populated <code>EmailAddress</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailAddress();
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('email_opt_status')) {
          obj['email_opt_status'] = _ApiClient["default"].convertToType(data['email_opt_status'], 'String');
        }
        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], 'String');
        }
        if (data.hasOwnProperty('is_opt_in')) {
          obj['is_opt_in'] = _ApiClient["default"].convertToType(data['is_opt_in'], 'Boolean');
        }
        if (data.hasOwnProperty('opt_in_reason')) {
          obj['opt_in_reason'] = _ApiClient["default"].convertToType(data['opt_in_reason'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailAddress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailAddress</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
        throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
      }
      // ensure the json data is a string
      if (data['email_opt_status'] && !(typeof data['email_opt_status'] === 'string' || data['email_opt_status'] instanceof String)) {
        throw new Error("Expected the field `email_opt_status` to be a primitive type in the JSON string but got " + data['email_opt_status']);
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
EmailAddress.prototype['email'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/EmailAddress.EmailOptStatusEnum} email_opt_status
 */
EmailAddress.prototype['email_opt_status'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/EmailAddress.FieldEnum} field
 */
EmailAddress.prototype['field'] = undefined;

/**
 * @member {Boolean} is_opt_in
 */
EmailAddress.prototype['is_opt_in'] = undefined;

/**
 * @member {String} opt_in_reason
 */
EmailAddress.prototype['opt_in_reason'] = undefined;

/**
 * Allowed values for the <code>email_opt_status</code> property.
 * @enum {String}
 * @readonly
 */
EmailAddress['EmailOptStatusEnum'] = {
  /**
   * value: "UNENGAGED_MARKETABLE"
   * @const
   */
  "UNENGAGED_MARKETABLE": "UNENGAGED_MARKETABLE",
  /**
   * value: "SINGLE_OPT_IN"
   * @const
   */
  "SINGLE_OPT_IN": "SINGLE_OPT_IN",
  /**
   * value: "DOUBLE_OPT_IN"
   * @const
   */
  "DOUBLE_OPT_IN": "DOUBLE_OPT_IN",
  /**
   * value: "CONFIRMED"
   * @const
   */
  "CONFIRMED": "CONFIRMED",
  /**
   * value: "UNENGAGED_NON_MARKETABLE"
   * @const
   */
  "UNENGAGED_NON_MARKETABLE": "UNENGAGED_NON_MARKETABLE",
  /**
   * value: "NON_MARKETABLE"
   * @const
   */
  "NON_MARKETABLE": "NON_MARKETABLE",
  /**
   * value: "LOCKDOWN"
   * @const
   */
  "LOCKDOWN": "LOCKDOWN",
  /**
   * value: "BOUNCE"
   * @const
   */
  "BOUNCE": "BOUNCE",
  /**
   * value: "HARD_BOUNCE"
   * @const
   */
  "HARD_BOUNCE": "HARD_BOUNCE",
  /**
   * value: "MANUAL"
   * @const
   */
  "MANUAL": "MANUAL",
  /**
   * value: "ADMIN"
   * @const
   */
  "ADMIN": "ADMIN",
  /**
   * value: "SYSTEM"
   * @const
   */
  "SYSTEM": "SYSTEM",
  /**
   * value: "LIST_UNSUBSCRIBE"
   * @const
   */
  "LIST_UNSUBSCRIBE": "LIST_UNSUBSCRIBE",
  /**
   * value: "FEEDBACK"
   * @const
   */
  "FEEDBACK": "FEEDBACK",
  /**
   * value: "SPAM"
   * @const
   */
  "SPAM": "SPAM",
  /**
   * value: "INVALID"
   * @const
   */
  "INVALID": "INVALID",
  /**
   * value: "DEACTIVATED"
   * @const
   */
  "DEACTIVATED": "DEACTIVATED",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>field</code> property.
 * @enum {String}
 * @readonly
 */
EmailAddress['FieldEnum'] = {
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
var _default = exports["default"] = EmailAddress;