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
 * The ApplicationCompany model module.
 * @module com.keap.sdk.core/model/ApplicationCompany
 * @version 0.0.33
 */
var ApplicationCompany = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationCompany</code>.
   * @alias module:com.keap.sdk.core/model/ApplicationCompany
   */
  function ApplicationCompany() {
    _classCallCheck(this, ApplicationCompany);
    ApplicationCompany.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ApplicationCompany, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ApplicationCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationCompany} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationCompany} The populated <code>ApplicationCompany</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationCompany();
        if (data.hasOwnProperty('caller_id_number')) {
          obj['caller_id_number'] = _ApiClient["default"].convertToType(data['caller_id_number'], 'String');
        }
        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }
        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }
        if (data.hasOwnProperty('phone_ext')) {
          obj['phone_ext'] = _ApiClient["default"].convertToType(data['phone_ext'], 'String');
        }
        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
        if (data.hasOwnProperty('street_address_1')) {
          obj['street_address_1'] = _ApiClient["default"].convertToType(data['street_address_1'], 'String');
        }
        if (data.hasOwnProperty('street_address_2')) {
          obj['street_address_2'] = _ApiClient["default"].convertToType(data['street_address_2'], 'String');
        }
        if (data.hasOwnProperty('web_logo_url')) {
          obj['web_logo_url'] = _ApiClient["default"].convertToType(data['web_logo_url'], 'String');
        }
        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }
        if (data.hasOwnProperty('zip')) {
          obj['zip'] = _ApiClient["default"].convertToType(data['zip'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationCompany</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationCompany</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['caller_id_number'] && !(typeof data['caller_id_number'] === 'string' || data['caller_id_number'] instanceof String)) {
        throw new Error("Expected the field `caller_id_number` to be a primitive type in the JSON string but got " + data['caller_id_number']);
      }
      // ensure the json data is a string
      if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
        throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
      }
      // ensure the json data is a string
      if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
        throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
      }
      // ensure the json data is a string
      if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
        throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
        throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
      }
      // ensure the json data is a string
      if (data['phone_ext'] && !(typeof data['phone_ext'] === 'string' || data['phone_ext'] instanceof String)) {
        throw new Error("Expected the field `phone_ext` to be a primitive type in the JSON string but got " + data['phone_ext']);
      }
      // ensure the json data is a string
      if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
        throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
      }
      // ensure the json data is a string
      if (data['street_address_1'] && !(typeof data['street_address_1'] === 'string' || data['street_address_1'] instanceof String)) {
        throw new Error("Expected the field `street_address_1` to be a primitive type in the JSON string but got " + data['street_address_1']);
      }
      // ensure the json data is a string
      if (data['street_address_2'] && !(typeof data['street_address_2'] === 'string' || data['street_address_2'] instanceof String)) {
        throw new Error("Expected the field `street_address_2` to be a primitive type in the JSON string but got " + data['street_address_2']);
      }
      // ensure the json data is a string
      if (data['web_logo_url'] && !(typeof data['web_logo_url'] === 'string' || data['web_logo_url'] instanceof String)) {
        throw new Error("Expected the field `web_logo_url` to be a primitive type in the JSON string but got " + data['web_logo_url']);
      }
      // ensure the json data is a string
      if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
        throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
      }
      // ensure the json data is a string
      if (data['zip'] && !(typeof data['zip'] === 'string' || data['zip'] instanceof String)) {
        throw new Error("Expected the field `zip` to be a primitive type in the JSON string but got " + data['zip']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} caller_id_number
 */
ApplicationCompany.prototype['caller_id_number'] = undefined;

/**
 * @member {String} city
 */
ApplicationCompany.prototype['city'] = undefined;

/**
 * @member {String} country
 */
ApplicationCompany.prototype['country'] = undefined;

/**
 * @member {String} email
 */
ApplicationCompany.prototype['email'] = undefined;

/**
 * @member {String} name
 */
ApplicationCompany.prototype['name'] = undefined;

/**
 * @member {String} phone
 */
ApplicationCompany.prototype['phone'] = undefined;

/**
 * @member {String} phone_ext
 */
ApplicationCompany.prototype['phone_ext'] = undefined;

/**
 * @member {String} state
 */
ApplicationCompany.prototype['state'] = undefined;

/**
 * @member {String} street_address_1
 */
ApplicationCompany.prototype['street_address_1'] = undefined;

/**
 * @member {String} street_address_2
 */
ApplicationCompany.prototype['street_address_2'] = undefined;

/**
 * @member {String} web_logo_url
 */
ApplicationCompany.prototype['web_logo_url'] = undefined;

/**
 * @member {String} website
 */
ApplicationCompany.prototype['website'] = undefined;

/**
 * @member {String} zip
 */
ApplicationCompany.prototype['zip'] = undefined;
var _default = exports["default"] = ApplicationCompany;