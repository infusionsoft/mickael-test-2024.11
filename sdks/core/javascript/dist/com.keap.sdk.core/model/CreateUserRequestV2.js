"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _EmailAddressRequest = _interopRequireDefault(require("./EmailAddressRequest"));
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
 * The CreateUserRequestV2 model module.
 * @module com.keap.sdk.core/model/CreateUserRequestV2
 * @version 0.0.26
 */
var CreateUserRequestV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateUserRequestV2</code>.
   * @alias module:com.keap.sdk.core/model/CreateUserRequestV2
   * @param emailAddress {module:com.keap.sdk.core/model/EmailAddressRequest} 
   * @param givenName {String} 
   */
  function CreateUserRequestV2(emailAddress, givenName) {
    _classCallCheck(this, CreateUserRequestV2);
    CreateUserRequestV2.initialize(this, emailAddress, givenName);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreateUserRequestV2, null, [{
    key: "initialize",
    value: function initialize(obj, emailAddress, givenName) {
      obj['email_address'] = emailAddress;
      obj['given_name'] = givenName;
    }

    /**
     * Constructs a <code>CreateUserRequestV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateUserRequestV2} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateUserRequestV2} The populated <code>CreateUserRequestV2</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateUserRequestV2();
        if (data.hasOwnProperty('admin')) {
          obj['admin'] = _ApiClient["default"].convertToType(data['admin'], 'Boolean');
        }
        if (data.hasOwnProperty('email_address')) {
          obj['email_address'] = _EmailAddressRequest["default"].constructFromObject(data['email_address']);
        }
        if (data.hasOwnProperty('given_name')) {
          obj['given_name'] = _ApiClient["default"].convertToType(data['given_name'], 'String');
        }
        if (data.hasOwnProperty('partner')) {
          obj['partner'] = _ApiClient["default"].convertToType(data['partner'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateUserRequestV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateUserRequestV2</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateUserRequestV2.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `email_address`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['email_address']) {
        // data not null
        _EmailAddressRequest["default"].validateJSON(data['email_address']);
      }
      // ensure the json data is a string
      if (data['given_name'] && !(typeof data['given_name'] === 'string' || data['given_name'] instanceof String)) {
        throw new Error("Expected the field `given_name` to be a primitive type in the JSON string but got " + data['given_name']);
      }
      return true;
    }
  }]);
}();
CreateUserRequestV2.RequiredProperties = ["email_address", "given_name"];

/**
 * @member {Boolean} admin
 */
CreateUserRequestV2.prototype['admin'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/EmailAddressRequest} email_address
 */
CreateUserRequestV2.prototype['email_address'] = undefined;

/**
 * @member {String} given_name
 */
CreateUserRequestV2.prototype['given_name'] = undefined;

/**
 * @member {Boolean} partner
 */
CreateUserRequestV2.prototype['partner'] = undefined;
var _default = exports["default"] = CreateUserRequestV2;