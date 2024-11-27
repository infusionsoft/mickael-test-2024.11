"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ApplicationConfigurationModuleContactAddressLabels = _interopRequireDefault(require("./ApplicationConfigurationModuleContactAddressLabels"));
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
 * The ApplicationConfigurationModuleContact model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleContact
 * @version 0.0.21
 */
var ApplicationConfigurationModuleContact = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationConfigurationModuleContact</code>.
   * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleContact
   */
  function ApplicationConfigurationModuleContact() {
    _classCallCheck(this, ApplicationConfigurationModuleContact);
    ApplicationConfigurationModuleContact.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ApplicationConfigurationModuleContact, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ApplicationConfigurationModuleContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContact} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContact} The populated <code>ApplicationConfigurationModuleContact</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationConfigurationModuleContact();
        if (data.hasOwnProperty('address_labels')) {
          obj['address_labels'] = _ApplicationConfigurationModuleContactAddressLabels["default"].constructFromObject(data['address_labels']);
        }
        if (data.hasOwnProperty('contact_types')) {
          obj['contact_types'] = _ApiClient["default"].convertToType(data['contact_types'], 'String');
        }
        if (data.hasOwnProperty('default_new_contact_form')) {
          obj['default_new_contact_form'] = _ApiClient["default"].convertToType(data['default_new_contact_form'], 'String');
        }
        if (data.hasOwnProperty('disable_contact_edit_in_client_login')) {
          obj['disable_contact_edit_in_client_login'] = _ApiClient["default"].convertToType(data['disable_contact_edit_in_client_login'], 'Boolean');
        }
        if (data.hasOwnProperty('fax_types')) {
          obj['fax_types'] = _ApiClient["default"].convertToType(data['fax_types'], 'String');
        }
        if (data.hasOwnProperty('phone_types')) {
          obj['phone_types'] = _ApiClient["default"].convertToType(data['phone_types'], 'String');
        }
        if (data.hasOwnProperty('suffix_types')) {
          obj['suffix_types'] = _ApiClient["default"].convertToType(data['suffix_types'], 'String');
        }
        if (data.hasOwnProperty('title_types')) {
          obj['title_types'] = _ApiClient["default"].convertToType(data['title_types'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleContact</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleContact</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `address_labels`
      if (data['address_labels']) {
        // data not null
        _ApplicationConfigurationModuleContactAddressLabels["default"].validateJSON(data['address_labels']);
      }
      // ensure the json data is a string
      if (data['contact_types'] && !(typeof data['contact_types'] === 'string' || data['contact_types'] instanceof String)) {
        throw new Error("Expected the field `contact_types` to be a primitive type in the JSON string but got " + data['contact_types']);
      }
      // ensure the json data is a string
      if (data['default_new_contact_form'] && !(typeof data['default_new_contact_form'] === 'string' || data['default_new_contact_form'] instanceof String)) {
        throw new Error("Expected the field `default_new_contact_form` to be a primitive type in the JSON string but got " + data['default_new_contact_form']);
      }
      // ensure the json data is a string
      if (data['fax_types'] && !(typeof data['fax_types'] === 'string' || data['fax_types'] instanceof String)) {
        throw new Error("Expected the field `fax_types` to be a primitive type in the JSON string but got " + data['fax_types']);
      }
      // ensure the json data is a string
      if (data['phone_types'] && !(typeof data['phone_types'] === 'string' || data['phone_types'] instanceof String)) {
        throw new Error("Expected the field `phone_types` to be a primitive type in the JSON string but got " + data['phone_types']);
      }
      // ensure the json data is a string
      if (data['suffix_types'] && !(typeof data['suffix_types'] === 'string' || data['suffix_types'] instanceof String)) {
        throw new Error("Expected the field `suffix_types` to be a primitive type in the JSON string but got " + data['suffix_types']);
      }
      // ensure the json data is a string
      if (data['title_types'] && !(typeof data['title_types'] === 'string' || data['title_types'] instanceof String)) {
        throw new Error("Expected the field `title_types` to be a primitive type in the JSON string but got " + data['title_types']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContactAddressLabels} address_labels
 */
ApplicationConfigurationModuleContact.prototype['address_labels'] = undefined;

/**
 * @member {String} contact_types
 */
ApplicationConfigurationModuleContact.prototype['contact_types'] = undefined;

/**
 * @member {String} default_new_contact_form
 */
ApplicationConfigurationModuleContact.prototype['default_new_contact_form'] = undefined;

/**
 * @member {Boolean} disable_contact_edit_in_client_login
 */
ApplicationConfigurationModuleContact.prototype['disable_contact_edit_in_client_login'] = undefined;

/**
 * @member {String} fax_types
 */
ApplicationConfigurationModuleContact.prototype['fax_types'] = undefined;

/**
 * @member {String} phone_types
 */
ApplicationConfigurationModuleContact.prototype['phone_types'] = undefined;

/**
 * @member {String} suffix_types
 */
ApplicationConfigurationModuleContact.prototype['suffix_types'] = undefined;

/**
 * @member {String} title_types
 */
ApplicationConfigurationModuleContact.prototype['title_types'] = undefined;
var _default = exports["default"] = ApplicationConfigurationModuleContact;