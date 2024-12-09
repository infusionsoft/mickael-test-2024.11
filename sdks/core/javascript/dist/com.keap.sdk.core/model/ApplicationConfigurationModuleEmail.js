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
 * The ApplicationConfigurationModuleEmail model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleEmail
 * @version 0.0.36
 */
var ApplicationConfigurationModuleEmail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationConfigurationModuleEmail</code>.
   * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleEmail
   */
  function ApplicationConfigurationModuleEmail() {
    _classCallCheck(this, ApplicationConfigurationModuleEmail);
    ApplicationConfigurationModuleEmail.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ApplicationConfigurationModuleEmail, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ApplicationConfigurationModuleEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEmail} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEmail} The populated <code>ApplicationConfigurationModuleEmail</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationConfigurationModuleEmail();
        if (data.hasOwnProperty('append_contact_key_to_links')) {
          obj['append_contact_key_to_links'] = _ApiClient["default"].convertToType(data['append_contact_key_to_links'], 'Boolean');
        }
        if (data.hasOwnProperty('default_opt_in_link')) {
          obj['default_opt_in_link'] = _ApiClient["default"].convertToType(data['default_opt_in_link'], 'String');
        }
        if (data.hasOwnProperty('default_opt_out_link')) {
          obj['default_opt_out_link'] = _ApiClient["default"].convertToType(data['default_opt_out_link'], 'String');
        }
        if (data.hasOwnProperty('hide_emails_to_and_from_domains')) {
          obj['hide_emails_to_and_from_domains'] = _ApiClient["default"].convertToType(data['hide_emails_to_and_from_domains'], 'String');
        }
        if (data.hasOwnProperty('whitelisted_domains')) {
          obj['whitelisted_domains'] = _ApiClient["default"].convertToType(data['whitelisted_domains'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleEmail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleEmail</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['default_opt_in_link'] && !(typeof data['default_opt_in_link'] === 'string' || data['default_opt_in_link'] instanceof String)) {
        throw new Error("Expected the field `default_opt_in_link` to be a primitive type in the JSON string but got " + data['default_opt_in_link']);
      }
      // ensure the json data is a string
      if (data['default_opt_out_link'] && !(typeof data['default_opt_out_link'] === 'string' || data['default_opt_out_link'] instanceof String)) {
        throw new Error("Expected the field `default_opt_out_link` to be a primitive type in the JSON string but got " + data['default_opt_out_link']);
      }
      // ensure the json data is a string
      if (data['hide_emails_to_and_from_domains'] && !(typeof data['hide_emails_to_and_from_domains'] === 'string' || data['hide_emails_to_and_from_domains'] instanceof String)) {
        throw new Error("Expected the field `hide_emails_to_and_from_domains` to be a primitive type in the JSON string but got " + data['hide_emails_to_and_from_domains']);
      }
      // ensure the json data is a string
      if (data['whitelisted_domains'] && !(typeof data['whitelisted_domains'] === 'string' || data['whitelisted_domains'] instanceof String)) {
        throw new Error("Expected the field `whitelisted_domains` to be a primitive type in the JSON string but got " + data['whitelisted_domains']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Boolean} append_contact_key_to_links
 */
ApplicationConfigurationModuleEmail.prototype['append_contact_key_to_links'] = undefined;

/**
 * @member {String} default_opt_in_link
 */
ApplicationConfigurationModuleEmail.prototype['default_opt_in_link'] = undefined;

/**
 * @member {String} default_opt_out_link
 */
ApplicationConfigurationModuleEmail.prototype['default_opt_out_link'] = undefined;

/**
 * @member {String} hide_emails_to_and_from_domains
 */
ApplicationConfigurationModuleEmail.prototype['hide_emails_to_and_from_domains'] = undefined;

/**
 * @member {String} whitelisted_domains
 */
ApplicationConfigurationModuleEmail.prototype['whitelisted_domains'] = undefined;
var _default = exports["default"] = ApplicationConfigurationModuleEmail;