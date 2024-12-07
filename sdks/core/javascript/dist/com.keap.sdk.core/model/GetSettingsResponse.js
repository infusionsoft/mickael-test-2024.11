"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ApplicationConfigurationModuleAffiliate = _interopRequireDefault(require("./ApplicationConfigurationModuleAffiliate"));
var _ApplicationConfigurationModuleApplication = _interopRequireDefault(require("./ApplicationConfigurationModuleApplication"));
var _ApplicationConfigurationModuleAppointment = _interopRequireDefault(require("./ApplicationConfigurationModuleAppointment"));
var _ApplicationConfigurationModuleContact = _interopRequireDefault(require("./ApplicationConfigurationModuleContact"));
var _ApplicationConfigurationModuleEcommerce = _interopRequireDefault(require("./ApplicationConfigurationModuleEcommerce"));
var _ApplicationConfigurationModuleEmail = _interopRequireDefault(require("./ApplicationConfigurationModuleEmail"));
var _ApplicationConfigurationModuleForms = _interopRequireDefault(require("./ApplicationConfigurationModuleForms"));
var _ApplicationConfigurationModuleFulfillment = _interopRequireDefault(require("./ApplicationConfigurationModuleFulfillment"));
var _ApplicationConfigurationModuleInvoice = _interopRequireDefault(require("./ApplicationConfigurationModuleInvoice"));
var _ApplicationConfigurationModuleNote = _interopRequireDefault(require("./ApplicationConfigurationModuleNote"));
var _ApplicationConfigurationModuleOpportunity = _interopRequireDefault(require("./ApplicationConfigurationModuleOpportunity"));
var _ApplicationConfigurationModuleTask = _interopRequireDefault(require("./ApplicationConfigurationModuleTask"));
var _ApplicationConfigurationModuleTemplate = _interopRequireDefault(require("./ApplicationConfigurationModuleTemplate"));
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
 * The GetSettingsResponse model module.
 * @module com.keap.sdk.core/model/GetSettingsResponse
 * @version 0.0.32
 */
var GetSettingsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetSettingsResponse</code>.
   * @alias module:com.keap.sdk.core/model/GetSettingsResponse
   */
  function GetSettingsResponse() {
    _classCallCheck(this, GetSettingsResponse);
    GetSettingsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(GetSettingsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>GetSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/GetSettingsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/GetSettingsResponse} The populated <code>GetSettingsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetSettingsResponse();
        if (data.hasOwnProperty('affiliate')) {
          obj['affiliate'] = _ApplicationConfigurationModuleAffiliate["default"].constructFromObject(data['affiliate']);
        }
        if (data.hasOwnProperty('application')) {
          obj['application'] = _ApplicationConfigurationModuleApplication["default"].constructFromObject(data['application']);
        }
        if (data.hasOwnProperty('appointment')) {
          obj['appointment'] = _ApplicationConfigurationModuleAppointment["default"].constructFromObject(data['appointment']);
        }
        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _ApplicationConfigurationModuleContact["default"].constructFromObject(data['contact']);
        }
        if (data.hasOwnProperty('ecommerce')) {
          obj['ecommerce'] = _ApplicationConfigurationModuleEcommerce["default"].constructFromObject(data['ecommerce']);
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApplicationConfigurationModuleEmail["default"].constructFromObject(data['email']);
        }
        if (data.hasOwnProperty('forms')) {
          obj['forms'] = _ApplicationConfigurationModuleForms["default"].constructFromObject(data['forms']);
        }
        if (data.hasOwnProperty('fulfillment')) {
          obj['fulfillment'] = _ApplicationConfigurationModuleFulfillment["default"].constructFromObject(data['fulfillment']);
        }
        if (data.hasOwnProperty('invoice')) {
          obj['invoice'] = _ApplicationConfigurationModuleInvoice["default"].constructFromObject(data['invoice']);
        }
        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApplicationConfigurationModuleNote["default"].constructFromObject(data['note']);
        }
        if (data.hasOwnProperty('opportunity')) {
          obj['opportunity'] = _ApplicationConfigurationModuleOpportunity["default"].constructFromObject(data['opportunity']);
        }
        if (data.hasOwnProperty('task')) {
          obj['task'] = _ApplicationConfigurationModuleTask["default"].constructFromObject(data['task']);
        }
        if (data.hasOwnProperty('template')) {
          obj['template'] = _ApplicationConfigurationModuleTemplate["default"].constructFromObject(data['template']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetSettingsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetSettingsResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `affiliate`
      if (data['affiliate']) {
        // data not null
        _ApplicationConfigurationModuleAffiliate["default"].validateJSON(data['affiliate']);
      }
      // validate the optional field `application`
      if (data['application']) {
        // data not null
        _ApplicationConfigurationModuleApplication["default"].validateJSON(data['application']);
      }
      // validate the optional field `appointment`
      if (data['appointment']) {
        // data not null
        _ApplicationConfigurationModuleAppointment["default"].validateJSON(data['appointment']);
      }
      // validate the optional field `contact`
      if (data['contact']) {
        // data not null
        _ApplicationConfigurationModuleContact["default"].validateJSON(data['contact']);
      }
      // validate the optional field `ecommerce`
      if (data['ecommerce']) {
        // data not null
        _ApplicationConfigurationModuleEcommerce["default"].validateJSON(data['ecommerce']);
      }
      // validate the optional field `email`
      if (data['email']) {
        // data not null
        _ApplicationConfigurationModuleEmail["default"].validateJSON(data['email']);
      }
      // validate the optional field `forms`
      if (data['forms']) {
        // data not null
        _ApplicationConfigurationModuleForms["default"].validateJSON(data['forms']);
      }
      // validate the optional field `fulfillment`
      if (data['fulfillment']) {
        // data not null
        _ApplicationConfigurationModuleFulfillment["default"].validateJSON(data['fulfillment']);
      }
      // validate the optional field `invoice`
      if (data['invoice']) {
        // data not null
        _ApplicationConfigurationModuleInvoice["default"].validateJSON(data['invoice']);
      }
      // validate the optional field `note`
      if (data['note']) {
        // data not null
        _ApplicationConfigurationModuleNote["default"].validateJSON(data['note']);
      }
      // validate the optional field `opportunity`
      if (data['opportunity']) {
        // data not null
        _ApplicationConfigurationModuleOpportunity["default"].validateJSON(data['opportunity']);
      }
      // validate the optional field `task`
      if (data['task']) {
        // data not null
        _ApplicationConfigurationModuleTask["default"].validateJSON(data['task']);
      }
      // validate the optional field `template`
      if (data['template']) {
        // data not null
        _ApplicationConfigurationModuleTemplate["default"].validateJSON(data['template']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate} affiliate
 */
GetSettingsResponse.prototype['affiliate'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleApplication} application
 */
GetSettingsResponse.prototype['application'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAppointment} appointment
 */
GetSettingsResponse.prototype['appointment'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContact} contact
 */
GetSettingsResponse.prototype['contact'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEcommerce} ecommerce
 */
GetSettingsResponse.prototype['ecommerce'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEmail} email
 */
GetSettingsResponse.prototype['email'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleForms} forms
 */
GetSettingsResponse.prototype['forms'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleFulfillment} fulfillment
 */
GetSettingsResponse.prototype['fulfillment'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleInvoice} invoice
 */
GetSettingsResponse.prototype['invoice'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleNote} note
 */
GetSettingsResponse.prototype['note'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunity} opportunity
 */
GetSettingsResponse.prototype['opportunity'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleTask} task
 */
GetSettingsResponse.prototype['task'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleTemplate} template
 */
GetSettingsResponse.prototype['template'] = undefined;
var _default = exports["default"] = GetSettingsResponse;