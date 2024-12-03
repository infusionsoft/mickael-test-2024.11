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
 * The AddressInformation model module.
 * @module com.keap.sdk.core/model/AddressInformation
 * @version 0.0.27
 */
var AddressInformation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressInformation</code>.
   * @alias module:com.keap.sdk.core/model/AddressInformation
   */
  function AddressInformation() {
    _classCallCheck(this, AddressInformation);
    AddressInformation.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(AddressInformation, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AddressInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AddressInformation} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AddressInformation} The populated <code>AddressInformation</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressInformation();
        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }
        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }
        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }
        if (data.hasOwnProperty('is_invoice_to_company')) {
          obj['is_invoice_to_company'] = _ApiClient["default"].convertToType(data['is_invoice_to_company'], 'Boolean');
        }
        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }
        if (data.hasOwnProperty('line1')) {
          obj['line1'] = _ApiClient["default"].convertToType(data['line1'], 'String');
        }
        if (data.hasOwnProperty('line2')) {
          obj['line2'] = _ApiClient["default"].convertToType(data['line2'], 'String');
        }
        if (data.hasOwnProperty('locality')) {
          obj['locality'] = _ApiClient["default"].convertToType(data['locality'], 'String');
        }
        if (data.hasOwnProperty('middle_name')) {
          obj['middle_name'] = _ApiClient["default"].convertToType(data['middle_name'], 'String');
        }
        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }
        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }
        if (data.hasOwnProperty('zip_code')) {
          obj['zip_code'] = _ApiClient["default"].convertToType(data['zip_code'], 'String');
        }
        if (data.hasOwnProperty('zip_four')) {
          obj['zip_four'] = _ApiClient["default"].convertToType(data['zip_four'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressInformation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressInformation</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['company'] && !(typeof data['company'] === 'string' || data['company'] instanceof String)) {
        throw new Error("Expected the field `company` to be a primitive type in the JSON string but got " + data['company']);
      }
      // ensure the json data is a string
      if (data['country_code'] && !(typeof data['country_code'] === 'string' || data['country_code'] instanceof String)) {
        throw new Error("Expected the field `country_code` to be a primitive type in the JSON string but got " + data['country_code']);
      }
      // ensure the json data is a string
      if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
        throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
      }
      // ensure the json data is a string
      if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
        throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
      }
      // ensure the json data is a string
      if (data['line1'] && !(typeof data['line1'] === 'string' || data['line1'] instanceof String)) {
        throw new Error("Expected the field `line1` to be a primitive type in the JSON string but got " + data['line1']);
      }
      // ensure the json data is a string
      if (data['line2'] && !(typeof data['line2'] === 'string' || data['line2'] instanceof String)) {
        throw new Error("Expected the field `line2` to be a primitive type in the JSON string but got " + data['line2']);
      }
      // ensure the json data is a string
      if (data['locality'] && !(typeof data['locality'] === 'string' || data['locality'] instanceof String)) {
        throw new Error("Expected the field `locality` to be a primitive type in the JSON string but got " + data['locality']);
      }
      // ensure the json data is a string
      if (data['middle_name'] && !(typeof data['middle_name'] === 'string' || data['middle_name'] instanceof String)) {
        throw new Error("Expected the field `middle_name` to be a primitive type in the JSON string but got " + data['middle_name']);
      }
      // ensure the json data is a string
      if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
        throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
      }
      // ensure the json data is a string
      if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
        throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
      }
      // ensure the json data is a string
      if (data['zip_code'] && !(typeof data['zip_code'] === 'string' || data['zip_code'] instanceof String)) {
        throw new Error("Expected the field `zip_code` to be a primitive type in the JSON string but got " + data['zip_code']);
      }
      // ensure the json data is a string
      if (data['zip_four'] && !(typeof data['zip_four'] === 'string' || data['zip_four'] instanceof String)) {
        throw new Error("Expected the field `zip_four` to be a primitive type in the JSON string but got " + data['zip_four']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} company
 */
AddressInformation.prototype['company'] = undefined;

/**
 * @member {String} country_code
 */
AddressInformation.prototype['country_code'] = undefined;

/**
 * @member {String} first_name
 */
AddressInformation.prototype['first_name'] = undefined;

/**
 * @member {Boolean} is_invoice_to_company
 */
AddressInformation.prototype['is_invoice_to_company'] = undefined;

/**
 * @member {String} last_name
 */
AddressInformation.prototype['last_name'] = undefined;

/**
 * @member {String} line1
 */
AddressInformation.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
AddressInformation.prototype['line2'] = undefined;

/**
 * @member {String} locality
 */
AddressInformation.prototype['locality'] = undefined;

/**
 * @member {String} middle_name
 */
AddressInformation.prototype['middle_name'] = undefined;

/**
 * @member {String} phone
 */
AddressInformation.prototype['phone'] = undefined;

/**
 * @member {String} region
 */
AddressInformation.prototype['region'] = undefined;

/**
 * @member {String} zip_code
 */
AddressInformation.prototype['zip_code'] = undefined;

/**
 * @member {String} zip_four
 */
AddressInformation.prototype['zip_four'] = undefined;
var _default = exports["default"] = AddressInformation;