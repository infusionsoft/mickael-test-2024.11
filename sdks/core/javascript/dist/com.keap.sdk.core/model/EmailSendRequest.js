"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _EmailSendRequestAttachment = _interopRequireDefault(require("./EmailSendRequestAttachment"));
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
 * The EmailSendRequest model module.
 * @module com.keap.sdk.core/model/EmailSendRequest
 * @version 0.0.18
 */
var EmailSendRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailSendRequest</code>.
   * @alias module:com.keap.sdk.core/model/EmailSendRequest
   * @param contacts {Array.<String>} An array of Contact Ids to receive the email
   * @param subject {String} The subject line of the email
   * @param userId {String} The infusionsoft user to send the email on behalf of
   */
  function EmailSendRequest(contacts, subject, userId) {
    _classCallCheck(this, EmailSendRequest);
    EmailSendRequest.initialize(this, contacts, subject, userId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(EmailSendRequest, null, [{
    key: "initialize",
    value: function initialize(obj, contacts, subject, userId) {
      obj['contacts'] = contacts;
      obj['subject'] = subject;
      obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>EmailSendRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/EmailSendRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/EmailSendRequest} The populated <code>EmailSendRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailSendRequest();
        if (data.hasOwnProperty('address_field')) {
          obj['address_field'] = _ApiClient["default"].convertToType(data['address_field'], 'String');
        }
        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _ApiClient["default"].convertToType(data['attachments'], [_EmailSendRequestAttachment["default"]]);
        }
        if (data.hasOwnProperty('contacts')) {
          obj['contacts'] = _ApiClient["default"].convertToType(data['contacts'], ['String']);
        }
        if (data.hasOwnProperty('html_content')) {
          obj['html_content'] = _ApiClient["default"].convertToType(data['html_content'], 'String');
        }
        if (data.hasOwnProperty('plain_content')) {
          obj['plain_content'] = _ApiClient["default"].convertToType(data['plain_content'], 'String');
        }
        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailSendRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailSendRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(EmailSendRequest.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['address_field'] && !(typeof data['address_field'] === 'string' || data['address_field'] instanceof String)) {
        throw new Error("Expected the field `address_field` to be a primitive type in the JSON string but got " + data['address_field']);
      }
      if (data['attachments']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['attachments'])) {
          throw new Error("Expected the field `attachments` to be an array in the JSON data but got " + data['attachments']);
        }
        // validate the optional field `attachments` (array)
        var _iterator2 = _createForOfIteratorHelper(data['attachments']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _EmailSendRequestAttachment["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is an array
      if (!Array.isArray(data['contacts'])) {
        throw new Error("Expected the field `contacts` to be an array in the JSON data but got " + data['contacts']);
      }
      // ensure the json data is a string
      if (data['html_content'] && !(typeof data['html_content'] === 'string' || data['html_content'] instanceof String)) {
        throw new Error("Expected the field `html_content` to be a primitive type in the JSON string but got " + data['html_content']);
      }
      // ensure the json data is a string
      if (data['plain_content'] && !(typeof data['plain_content'] === 'string' || data['plain_content'] instanceof String)) {
        throw new Error("Expected the field `plain_content` to be a primitive type in the JSON string but got " + data['plain_content']);
      }
      // ensure the json data is a string
      if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
        throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
      }
      // ensure the json data is a string
      if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
        throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
      }
      return true;
    }
  }]);
}();
EmailSendRequest.RequiredProperties = ["contacts", "subject", "user_id"];

/**
 * Email field of each Contact record to address the email to, such as 'Email', 'EmailAddress2', 'EmailAddress3' or '_CustomFieldName', defaulting to the contact's primary email
 * @member {String} address_field
 */
EmailSendRequest.prototype['address_field'] = undefined;

/**
 * Attachments to be sent with each copy of the email, maximum of 10 with size of 1MB each
 * @member {Array.<module:com.keap.sdk.core/model/EmailSendRequestAttachment>} attachments
 */
EmailSendRequest.prototype['attachments'] = undefined;

/**
 * An array of Contact Ids to receive the email
 * @member {Array.<String>} contacts
 */
EmailSendRequest.prototype['contacts'] = undefined;

/**
 * The HTML-formatted content of the email, encoded in Base64
 * @member {String} html_content
 */
EmailSendRequest.prototype['html_content'] = undefined;

/**
 * The plain-text content of the email, encoded in Base64
 * @member {String} plain_content
 */
EmailSendRequest.prototype['plain_content'] = undefined;

/**
 * The subject line of the email
 * @member {String} subject
 */
EmailSendRequest.prototype['subject'] = undefined;

/**
 * The infusionsoft user to send the email on behalf of
 * @member {String} user_id
 */
EmailSendRequest.prototype['user_id'] = undefined;
var _default = exports["default"] = EmailSendRequest;