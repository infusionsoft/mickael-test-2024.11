"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Address = _interopRequireDefault(require("./Address"));
var _CustomFieldValue = _interopRequireDefault(require("./CustomFieldValue"));
var _EmailAddress = _interopRequireDefault(require("./EmailAddress"));
var _FaxNumber = _interopRequireDefault(require("./FaxNumber"));
var _PhoneNumber = _interopRequireDefault(require("./PhoneNumber"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
 * The CreateCompanyRequest model module.
 * @module com.keap.sdk.core/model/CreateCompanyRequest
 * @version 0.0.30
 */
var CreateCompanyRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCompanyRequest</code>.
   * @alias module:com.keap.sdk.core/model/CreateCompanyRequest
   * @param companyName {String} 
   */
  function CreateCompanyRequest(companyName) {
    _classCallCheck(this, CreateCompanyRequest);
    CreateCompanyRequest.initialize(this, companyName);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreateCompanyRequest, null, [{
    key: "initialize",
    value: function initialize(obj, companyName) {
      obj['company_name'] = companyName;
    }

    /**
     * Constructs a <code>CreateCompanyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateCompanyRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateCompanyRequest} The populated <code>CreateCompanyRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCompanyRequest();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _Address["default"].constructFromObject(data['address']);
        }
        if (data.hasOwnProperty('company_name')) {
          obj['company_name'] = _ApiClient["default"].convertToType(data['company_name'], 'String');
        }
        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _ApiClient["default"].convertToType(data['custom_fields'], [_CustomFieldValue["default"]]);
        }
        if (data.hasOwnProperty('email_address')) {
          obj['email_address'] = _EmailAddress["default"].constructFromObject(data['email_address']);
        }
        if (data.hasOwnProperty('fax_number')) {
          obj['fax_number'] = _FaxNumber["default"].constructFromObject(data['fax_number']);
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }
        if (data.hasOwnProperty('phone_number')) {
          obj['phone_number'] = _PhoneNumber["default"].constructFromObject(data['phone_number']);
        }
        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCompanyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCompanyRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateCompanyRequest.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `address`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['address']) {
        // data not null
        _Address["default"].validateJSON(data['address']);
      }
      // ensure the json data is a string
      if (data['company_name'] && !(typeof data['company_name'] === 'string' || data['company_name'] instanceof String)) {
        throw new Error("Expected the field `company_name` to be a primitive type in the JSON string but got " + data['company_name']);
      }
      if (data['custom_fields']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['custom_fields'])) {
          throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
        }
        // validate the optional field `custom_fields` (array)
        var _iterator2 = _createForOfIteratorHelper(data['custom_fields']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _CustomFieldValue["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // validate the optional field `email_address`
      if (data['email_address']) {
        // data not null
        _EmailAddress["default"].validateJSON(data['email_address']);
      }
      // validate the optional field `fax_number`
      if (data['fax_number']) {
        // data not null
        _FaxNumber["default"].validateJSON(data['fax_number']);
      }
      // ensure the json data is a string
      if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
        throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
      }
      // validate the optional field `phone_number`
      if (data['phone_number']) {
        // data not null
        _PhoneNumber["default"].validateJSON(data['phone_number']);
      }
      // ensure the json data is a string
      if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
        throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
      }
      return true;
    }
  }]);
}();
CreateCompanyRequest.RequiredProperties = ["company_name"];

/**
 * @member {module:com.keap.sdk.core/model/Address} address
 */
CreateCompanyRequest.prototype['address'] = undefined;

/**
 * @member {String} company_name
 */
CreateCompanyRequest.prototype['company_name'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomFieldValue>} custom_fields
 */
CreateCompanyRequest.prototype['custom_fields'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/EmailAddress} email_address
 */
CreateCompanyRequest.prototype['email_address'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/FaxNumber} fax_number
 */
CreateCompanyRequest.prototype['fax_number'] = undefined;

/**
 * @member {String} notes
 */
CreateCompanyRequest.prototype['notes'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/PhoneNumber} phone_number
 */
CreateCompanyRequest.prototype['phone_number'] = undefined;

/**
 * @member {String} website
 */
CreateCompanyRequest.prototype['website'] = undefined;
var _default = exports["default"] = CreateCompanyRequest;