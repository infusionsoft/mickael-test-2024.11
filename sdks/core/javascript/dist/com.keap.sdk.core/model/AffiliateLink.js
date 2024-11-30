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
 * The AffiliateLink model module.
 * @module com.keap.sdk.core/model/AffiliateLink
 * @version 0.0.24
 */
var AffiliateLink = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AffiliateLink</code>.
   * @alias module:com.keap.sdk.core/model/AffiliateLink
   */
  function AffiliateLink() {
    _classCallCheck(this, AffiliateLink);
    AffiliateLink.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(AffiliateLink, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AffiliateLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AffiliateLink} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AffiliateLink} The populated <code>AffiliateLink</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AffiliateLink();
        if (data.hasOwnProperty('affiliate_id')) {
          obj['affiliate_id'] = _ApiClient["default"].convertToType(data['affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('date_created')) {
          obj['date_created'] = _ApiClient["default"].convertToType(data['date_created'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('local_url_code')) {
          obj['local_url_code'] = _ApiClient["default"].convertToType(data['local_url_code'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('program_ids')) {
          obj['program_ids'] = _ApiClient["default"].convertToType(data['program_ids'], ['String']);
        }
        if (data.hasOwnProperty('redirect_url')) {
          obj['redirect_url'] = _ApiClient["default"].convertToType(data['redirect_url'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AffiliateLink</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AffiliateLink</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['affiliate_id'] && !(typeof data['affiliate_id'] === 'string' || data['affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `affiliate_id` to be a primitive type in the JSON string but got " + data['affiliate_id']);
      }
      // ensure the json data is a string
      if (data['date_created'] && !(typeof data['date_created'] === 'string' || data['date_created'] instanceof String)) {
        throw new Error("Expected the field `date_created` to be a primitive type in the JSON string but got " + data['date_created']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['local_url_code'] && !(typeof data['local_url_code'] === 'string' || data['local_url_code'] instanceof String)) {
        throw new Error("Expected the field `local_url_code` to be a primitive type in the JSON string but got " + data['local_url_code']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['program_ids'])) {
        throw new Error("Expected the field `program_ids` to be an array in the JSON data but got " + data['program_ids']);
      }
      // ensure the json data is a string
      if (data['redirect_url'] && !(typeof data['redirect_url'] === 'string' || data['redirect_url'] instanceof String)) {
        throw new Error("Expected the field `redirect_url` to be a primitive type in the JSON string but got " + data['redirect_url']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} affiliate_id
 */
AffiliateLink.prototype['affiliate_id'] = undefined;

/**
 * @member {String} date_created
 */
AffiliateLink.prototype['date_created'] = undefined;

/**
 * @member {String} id
 */
AffiliateLink.prototype['id'] = undefined;

/**
 * @member {String} local_url_code
 */
AffiliateLink.prototype['local_url_code'] = undefined;

/**
 * @member {String} name
 */
AffiliateLink.prototype['name'] = undefined;

/**
 * @member {Array.<String>} program_ids
 */
AffiliateLink.prototype['program_ids'] = undefined;

/**
 * @member {String} redirect_url
 */
AffiliateLink.prototype['redirect_url'] = undefined;
var _default = exports["default"] = AffiliateLink;