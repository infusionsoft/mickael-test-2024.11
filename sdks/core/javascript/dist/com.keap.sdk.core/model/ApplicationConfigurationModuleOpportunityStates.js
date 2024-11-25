"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ApplicationConfigurationModuleOpportunityStatesActive = _interopRequireDefault(require("./ApplicationConfigurationModuleOpportunityStatesActive"));
var _ApplicationConfigurationModuleOpportunityStatesLoss = _interopRequireDefault(require("./ApplicationConfigurationModuleOpportunityStatesLoss"));
var _ApplicationConfigurationModuleOpportunityStatesWin = _interopRequireDefault(require("./ApplicationConfigurationModuleOpportunityStatesWin"));
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
 * The ApplicationConfigurationModuleOpportunityStates model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStates
 * @version 0.0.18
 */
var ApplicationConfigurationModuleOpportunityStates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationConfigurationModuleOpportunityStates</code>.
   * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStates
   */
  function ApplicationConfigurationModuleOpportunityStates() {
    _classCallCheck(this, ApplicationConfigurationModuleOpportunityStates);
    ApplicationConfigurationModuleOpportunityStates.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ApplicationConfigurationModuleOpportunityStates, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ApplicationConfigurationModuleOpportunityStates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStates} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStates} The populated <code>ApplicationConfigurationModuleOpportunityStates</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationConfigurationModuleOpportunityStates();
        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApplicationConfigurationModuleOpportunityStatesActive["default"].constructFromObject(data['active']);
        }
        if (data.hasOwnProperty('loss')) {
          obj['loss'] = _ApplicationConfigurationModuleOpportunityStatesLoss["default"].constructFromObject(data['loss']);
        }
        if (data.hasOwnProperty('win')) {
          obj['win'] = _ApplicationConfigurationModuleOpportunityStatesWin["default"].constructFromObject(data['win']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleOpportunityStates</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleOpportunityStates</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `active`
      if (data['active']) {
        // data not null
        _ApplicationConfigurationModuleOpportunityStatesActive["default"].validateJSON(data['active']);
      }
      // validate the optional field `loss`
      if (data['loss']) {
        // data not null
        _ApplicationConfigurationModuleOpportunityStatesLoss["default"].validateJSON(data['loss']);
      }
      // validate the optional field `win`
      if (data['win']) {
        // data not null
        _ApplicationConfigurationModuleOpportunityStatesWin["default"].validateJSON(data['win']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesActive} active
 */
ApplicationConfigurationModuleOpportunityStates.prototype['active'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesLoss} loss
 */
ApplicationConfigurationModuleOpportunityStates.prototype['loss'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesWin} win
 */
ApplicationConfigurationModuleOpportunityStates.prototype['win'] = undefined;
var _default = exports["default"] = ApplicationConfigurationModuleOpportunityStates;