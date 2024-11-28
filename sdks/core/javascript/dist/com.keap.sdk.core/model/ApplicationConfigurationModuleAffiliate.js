"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ApplicationConfigurationModuleAffiliateCommission = _interopRequireDefault(require("./ApplicationConfigurationModuleAffiliateCommission"));
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
 * The ApplicationConfigurationModuleAffiliate model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate
 * @version 0.0.22
 */
var ApplicationConfigurationModuleAffiliate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationConfigurationModuleAffiliate</code>.
   * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate
   */
  function ApplicationConfigurationModuleAffiliate() {
    _classCallCheck(this, ApplicationConfigurationModuleAffiliate);
    ApplicationConfigurationModuleAffiliate.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ApplicationConfigurationModuleAffiliate, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ApplicationConfigurationModuleAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate} The populated <code>ApplicationConfigurationModuleAffiliate</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationConfigurationModuleAffiliate();
        if (data.hasOwnProperty('choose_affiliate')) {
          obj['choose_affiliate'] = _ApiClient["default"].convertToType(data['choose_affiliate'], 'Boolean');
        }
        if (data.hasOwnProperty('commission')) {
          obj['commission'] = _ApplicationConfigurationModuleAffiliateCommission["default"].constructFromObject(data['commission']);
        }
        if (data.hasOwnProperty('custom_affiliate_url')) {
          obj['custom_affiliate_url'] = _ApiClient["default"].convertToType(data['custom_affiliate_url'], 'String');
        }
        if (data.hasOwnProperty('display_affiliate_ip_address')) {
          obj['display_affiliate_ip_address'] = _ApiClient["default"].convertToType(data['display_affiliate_ip_address'], 'Boolean');
        }
        if (data.hasOwnProperty('do_not_notify_affiliate')) {
          obj['do_not_notify_affiliate'] = _ApiClient["default"].convertToType(data['do_not_notify_affiliate'], 'Boolean');
        }
        if (data.hasOwnProperty('skip_pay_if_unused')) {
          obj['skip_pay_if_unused'] = _ApiClient["default"].convertToType(data['skip_pay_if_unused'], 'Boolean');
        }
        if (data.hasOwnProperty('use_referral_history_if_no_tracking_cookie')) {
          obj['use_referral_history_if_no_tracking_cookie'] = _ApiClient["default"].convertToType(data['use_referral_history_if_no_tracking_cookie'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleAffiliate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleAffiliate</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `commission`
      if (data['commission']) {
        // data not null
        _ApplicationConfigurationModuleAffiliateCommission["default"].validateJSON(data['commission']);
      }
      // ensure the json data is a string
      if (data['custom_affiliate_url'] && !(typeof data['custom_affiliate_url'] === 'string' || data['custom_affiliate_url'] instanceof String)) {
        throw new Error("Expected the field `custom_affiliate_url` to be a primitive type in the JSON string but got " + data['custom_affiliate_url']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Boolean} choose_affiliate
 */
ApplicationConfigurationModuleAffiliate.prototype['choose_affiliate'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliateCommission} commission
 */
ApplicationConfigurationModuleAffiliate.prototype['commission'] = undefined;

/**
 * @member {String} custom_affiliate_url
 */
ApplicationConfigurationModuleAffiliate.prototype['custom_affiliate_url'] = undefined;

/**
 * @member {Boolean} display_affiliate_ip_address
 */
ApplicationConfigurationModuleAffiliate.prototype['display_affiliate_ip_address'] = undefined;

/**
 * @member {Boolean} do_not_notify_affiliate
 */
ApplicationConfigurationModuleAffiliate.prototype['do_not_notify_affiliate'] = undefined;

/**
 * @member {Boolean} skip_pay_if_unused
 */
ApplicationConfigurationModuleAffiliate.prototype['skip_pay_if_unused'] = undefined;

/**
 * @member {Boolean} use_referral_history_if_no_tracking_cookie
 */
ApplicationConfigurationModuleAffiliate.prototype['use_referral_history_if_no_tracking_cookie'] = undefined;
var _default = exports["default"] = ApplicationConfigurationModuleAffiliate;