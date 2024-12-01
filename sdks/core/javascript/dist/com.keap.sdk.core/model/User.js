"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Address = _interopRequireDefault(require("./Address"));
var _EmailAddress = _interopRequireDefault(require("./EmailAddress"));
var _FaxNumber = _interopRequireDefault(require("./FaxNumber"));
var _PhoneNumber = _interopRequireDefault(require("./PhoneNumber"));
var _SocialAccount = _interopRequireDefault(require("./SocialAccount"));
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
 * The User model module.
 * @module com.keap.sdk.core/model/User
 * @version 0.0.25
 */
var User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:com.keap.sdk.core/model/User
   */
  function User() {
    _classCallCheck(this, User);
    User.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/User} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/User} The populated <code>User</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _Address["default"].constructFromObject(data['address']);
        }
        if (data.hasOwnProperty('admin')) {
          obj['admin'] = _ApiClient["default"].convertToType(data['admin'], 'Boolean');
        }
        if (data.hasOwnProperty('company_name')) {
          obj['company_name'] = _ApiClient["default"].convertToType(data['company_name'], 'String');
        }
        if (data.hasOwnProperty('create_time')) {
          obj['create_time'] = _ApiClient["default"].convertToType(data['create_time'], 'String');
        }
        if (data.hasOwnProperty('created_by')) {
          obj['created_by'] = _ApiClient["default"].convertToType(data['created_by'], 'Number');
        }
        if (data.hasOwnProperty('email_addresses')) {
          obj['email_addresses'] = _ApiClient["default"].convertToType(data['email_addresses'], [_EmailAddress["default"]]);
        }
        if (data.hasOwnProperty('family_name')) {
          obj['family_name'] = _ApiClient["default"].convertToType(data['family_name'], 'String');
        }
        if (data.hasOwnProperty('fax_numbers')) {
          obj['fax_numbers'] = _ApiClient["default"].convertToType(data['fax_numbers'], [_FaxNumber["default"]]);
        }
        if (data.hasOwnProperty('given_name')) {
          obj['given_name'] = _ApiClient["default"].convertToType(data['given_name'], 'String');
        }
        if (data.hasOwnProperty('global_user_id')) {
          obj['global_user_id'] = _ApiClient["default"].convertToType(data['global_user_id'], 'Number');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('keap_id')) {
          obj['keap_id'] = _ApiClient["default"].convertToType(data['keap_id'], 'String');
        }
        if (data.hasOwnProperty('partner')) {
          obj['partner'] = _ApiClient["default"].convertToType(data['partner'], 'Boolean');
        }
        if (data.hasOwnProperty('phone_numbers')) {
          obj['phone_numbers'] = _ApiClient["default"].convertToType(data['phone_numbers'], [_PhoneNumber["default"]]);
        }
        if (data.hasOwnProperty('social_accounts')) {
          obj['social_accounts'] = _ApiClient["default"].convertToType(data['social_accounts'], [_SocialAccount["default"]]);
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('time_zone')) {
          obj['time_zone'] = _ApiClient["default"].convertToType(data['time_zone'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('update_time')) {
          obj['update_time'] = _ApiClient["default"].convertToType(data['update_time'], 'String');
        }
        if (data.hasOwnProperty('updated_by')) {
          obj['updated_by'] = _ApiClient["default"].convertToType(data['updated_by'], 'Number');
        }
        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>User</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `address`
      if (data['address']) {
        // data not null
        _Address["default"].validateJSON(data['address']);
      }
      // ensure the json data is a string
      if (data['company_name'] && !(typeof data['company_name'] === 'string' || data['company_name'] instanceof String)) {
        throw new Error("Expected the field `company_name` to be a primitive type in the JSON string but got " + data['company_name']);
      }
      // ensure the json data is a string
      if (data['create_time'] && !(typeof data['create_time'] === 'string' || data['create_time'] instanceof String)) {
        throw new Error("Expected the field `create_time` to be a primitive type in the JSON string but got " + data['create_time']);
      }
      if (data['email_addresses']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['email_addresses'])) {
          throw new Error("Expected the field `email_addresses` to be an array in the JSON data but got " + data['email_addresses']);
        }
        // validate the optional field `email_addresses` (array)
        var _iterator = _createForOfIteratorHelper(data['email_addresses']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _EmailAddress["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['family_name'] && !(typeof data['family_name'] === 'string' || data['family_name'] instanceof String)) {
        throw new Error("Expected the field `family_name` to be a primitive type in the JSON string but got " + data['family_name']);
      }
      if (data['fax_numbers']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['fax_numbers'])) {
          throw new Error("Expected the field `fax_numbers` to be an array in the JSON data but got " + data['fax_numbers']);
        }
        // validate the optional field `fax_numbers` (array)
        var _iterator2 = _createForOfIteratorHelper(data['fax_numbers']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _FaxNumber["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['given_name'] && !(typeof data['given_name'] === 'string' || data['given_name'] instanceof String)) {
        throw new Error("Expected the field `given_name` to be a primitive type in the JSON string but got " + data['given_name']);
      }
      // ensure the json data is a string
      if (data['keap_id'] && !(typeof data['keap_id'] === 'string' || data['keap_id'] instanceof String)) {
        throw new Error("Expected the field `keap_id` to be a primitive type in the JSON string but got " + data['keap_id']);
      }
      if (data['phone_numbers']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['phone_numbers'])) {
          throw new Error("Expected the field `phone_numbers` to be an array in the JSON data but got " + data['phone_numbers']);
        }
        // validate the optional field `phone_numbers` (array)
        var _iterator3 = _createForOfIteratorHelper(data['phone_numbers']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            _PhoneNumber["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      if (data['social_accounts']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['social_accounts'])) {
          throw new Error("Expected the field `social_accounts` to be an array in the JSON data but got " + data['social_accounts']);
        }
        // validate the optional field `social_accounts` (array)
        var _iterator4 = _createForOfIteratorHelper(data['social_accounts']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item3 = _step4.value;
            _SocialAccount["default"].validateJSON(_item3);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['time_zone'] && !(typeof data['time_zone'] === 'string' || data['time_zone'] instanceof String)) {
        throw new Error("Expected the field `time_zone` to be a primitive type in the JSON string but got " + data['time_zone']);
      }
      // ensure the json data is a string
      if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
        throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
      }
      // ensure the json data is a string
      if (data['update_time'] && !(typeof data['update_time'] === 'string' || data['update_time'] instanceof String)) {
        throw new Error("Expected the field `update_time` to be a primitive type in the JSON string but got " + data['update_time']);
      }
      // ensure the json data is a string
      if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
        throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:com.keap.sdk.core/model/Address} address
 */
User.prototype['address'] = undefined;

/**
 * @member {Boolean} admin
 */
User.prototype['admin'] = undefined;

/**
 * @member {String} company_name
 */
User.prototype['company_name'] = undefined;

/**
 * @member {String} create_time
 */
User.prototype['create_time'] = undefined;

/**
 * @member {Number} created_by
 */
User.prototype['created_by'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/EmailAddress>} email_addresses
 */
User.prototype['email_addresses'] = undefined;

/**
 * @member {String} family_name
 */
User.prototype['family_name'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/FaxNumber>} fax_numbers
 */
User.prototype['fax_numbers'] = undefined;

/**
 * @member {String} given_name
 */
User.prototype['given_name'] = undefined;

/**
 * @member {Number} global_user_id
 */
User.prototype['global_user_id'] = undefined;

/**
 * @member {Number} id
 */
User.prototype['id'] = undefined;

/**
 * @member {String} keap_id
 */
User.prototype['keap_id'] = undefined;

/**
 * @member {Boolean} partner
 */
User.prototype['partner'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/PhoneNumber>} phone_numbers
 */
User.prototype['phone_numbers'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/SocialAccount>} social_accounts
 */
User.prototype['social_accounts'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/User.StatusEnum} status
 */
User.prototype['status'] = undefined;

/**
 * @member {String} time_zone
 */
User.prototype['time_zone'] = undefined;

/**
 * @member {String} title
 */
User.prototype['title'] = undefined;

/**
 * @member {String} update_time
 */
User.prototype['update_time'] = undefined;

/**
 * @member {Number} updated_by
 */
User.prototype['updated_by'] = undefined;

/**
 * @member {String} website
 */
User.prototype['website'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
User['StatusEnum'] = {
  /**
   * value: "Active"
   * @const
   */
  "Active": "Active",
  /**
   * value: "Invited"
   * @const
   */
  "Invited": "Invited",
  /**
   * value: "Inactive"
   * @const
   */
  "Inactive": "Inactive",
  /**
   * value: "NotAUser"
   * @const
   */
  "NotAUser": "NotAUser",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = User;