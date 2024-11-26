"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The CreateEmailSentRequest model module.
 * @module com.keap.sdk.core/model/CreateEmailSentRequest
 * @version 0.0.19
 */
var CreateEmailSentRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateEmailSentRequest</code>.
   * @alias module:com.keap.sdk.core/model/CreateEmailSentRequest
   * @param sentToAddress {String} 
   */
  function CreateEmailSentRequest(sentToAddress) {
    _classCallCheck(this, CreateEmailSentRequest);
    CreateEmailSentRequest.initialize(this, sentToAddress);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreateEmailSentRequest, null, [{
    key: "initialize",
    value: function initialize(obj, sentToAddress) {
      obj['sent_to_address'] = sentToAddress;
    }

    /**
     * Constructs a <code>CreateEmailSentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateEmailSentRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateEmailSentRequest} The populated <code>CreateEmailSentRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateEmailSentRequest();
        if (data.hasOwnProperty('clicked_time')) {
          obj['clicked_time'] = _ApiClient["default"].convertToType(data['clicked_time'], 'String');
        }
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'String');
        }
        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _ApiClient["default"].convertToType(data['headers'], 'String');
        }
        if (data.hasOwnProperty('html_content')) {
          obj['html_content'] = _ApiClient["default"].convertToType(data['html_content'], 'String');
        }
        if (data.hasOwnProperty('opened_time')) {
          obj['opened_time'] = _ApiClient["default"].convertToType(data['opened_time'], 'String');
        }
        if (data.hasOwnProperty('original_provider')) {
          obj['original_provider'] = _ApiClient["default"].convertToType(data['original_provider'], 'String');
        }
        if (data.hasOwnProperty('original_provider_id')) {
          obj['original_provider_id'] = _ApiClient["default"].convertToType(data['original_provider_id'], 'String');
        }
        if (data.hasOwnProperty('plain_content')) {
          obj['plain_content'] = _ApiClient["default"].convertToType(data['plain_content'], 'String');
        }
        if (data.hasOwnProperty('provider_source_id')) {
          obj['provider_source_id'] = _ApiClient["default"].convertToType(data['provider_source_id'], 'String');
        }
        if (data.hasOwnProperty('received_time')) {
          obj['received_time'] = _ApiClient["default"].convertToType(data['received_time'], 'String');
        }
        if (data.hasOwnProperty('sent_from_address')) {
          obj['sent_from_address'] = _ApiClient["default"].convertToType(data['sent_from_address'], 'String');
        }
        if (data.hasOwnProperty('sent_from_reply_address')) {
          obj['sent_from_reply_address'] = _ApiClient["default"].convertToType(data['sent_from_reply_address'], 'String');
        }
        if (data.hasOwnProperty('sent_time')) {
          obj['sent_time'] = _ApiClient["default"].convertToType(data['sent_time'], 'String');
        }
        if (data.hasOwnProperty('sent_to_address')) {
          obj['sent_to_address'] = _ApiClient["default"].convertToType(data['sent_to_address'], 'String');
        }
        if (data.hasOwnProperty('sent_to_bcc_address_list')) {
          obj['sent_to_bcc_address_list'] = _ApiClient["default"].convertToType(data['sent_to_bcc_address_list'], ['String']);
        }
        if (data.hasOwnProperty('sent_to_cc_address_list')) {
          obj['sent_to_cc_address_list'] = _ApiClient["default"].convertToType(data['sent_to_cc_address_list'], ['String']);
        }
        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateEmailSentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEmailSentRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateEmailSentRequest.RequiredProperties),
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
      if (data['clicked_time'] && !(typeof data['clicked_time'] === 'string' || data['clicked_time'] instanceof String)) {
        throw new Error("Expected the field `clicked_time` to be a primitive type in the JSON string but got " + data['clicked_time']);
      }
      // ensure the json data is a string
      if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
        throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
      }
      // ensure the json data is a string
      if (data['headers'] && !(typeof data['headers'] === 'string' || data['headers'] instanceof String)) {
        throw new Error("Expected the field `headers` to be a primitive type in the JSON string but got " + data['headers']);
      }
      // ensure the json data is a string
      if (data['html_content'] && !(typeof data['html_content'] === 'string' || data['html_content'] instanceof String)) {
        throw new Error("Expected the field `html_content` to be a primitive type in the JSON string but got " + data['html_content']);
      }
      // ensure the json data is a string
      if (data['opened_time'] && !(typeof data['opened_time'] === 'string' || data['opened_time'] instanceof String)) {
        throw new Error("Expected the field `opened_time` to be a primitive type in the JSON string but got " + data['opened_time']);
      }
      // ensure the json data is a string
      if (data['original_provider'] && !(typeof data['original_provider'] === 'string' || data['original_provider'] instanceof String)) {
        throw new Error("Expected the field `original_provider` to be a primitive type in the JSON string but got " + data['original_provider']);
      }
      // ensure the json data is a string
      if (data['original_provider_id'] && !(typeof data['original_provider_id'] === 'string' || data['original_provider_id'] instanceof String)) {
        throw new Error("Expected the field `original_provider_id` to be a primitive type in the JSON string but got " + data['original_provider_id']);
      }
      // ensure the json data is a string
      if (data['plain_content'] && !(typeof data['plain_content'] === 'string' || data['plain_content'] instanceof String)) {
        throw new Error("Expected the field `plain_content` to be a primitive type in the JSON string but got " + data['plain_content']);
      }
      // ensure the json data is a string
      if (data['provider_source_id'] && !(typeof data['provider_source_id'] === 'string' || data['provider_source_id'] instanceof String)) {
        throw new Error("Expected the field `provider_source_id` to be a primitive type in the JSON string but got " + data['provider_source_id']);
      }
      // ensure the json data is a string
      if (data['received_time'] && !(typeof data['received_time'] === 'string' || data['received_time'] instanceof String)) {
        throw new Error("Expected the field `received_time` to be a primitive type in the JSON string but got " + data['received_time']);
      }
      // ensure the json data is a string
      if (data['sent_from_address'] && !(typeof data['sent_from_address'] === 'string' || data['sent_from_address'] instanceof String)) {
        throw new Error("Expected the field `sent_from_address` to be a primitive type in the JSON string but got " + data['sent_from_address']);
      }
      // ensure the json data is a string
      if (data['sent_from_reply_address'] && !(typeof data['sent_from_reply_address'] === 'string' || data['sent_from_reply_address'] instanceof String)) {
        throw new Error("Expected the field `sent_from_reply_address` to be a primitive type in the JSON string but got " + data['sent_from_reply_address']);
      }
      // ensure the json data is a string
      if (data['sent_time'] && !(typeof data['sent_time'] === 'string' || data['sent_time'] instanceof String)) {
        throw new Error("Expected the field `sent_time` to be a primitive type in the JSON string but got " + data['sent_time']);
      }
      // ensure the json data is a string
      if (data['sent_to_address'] && !(typeof data['sent_to_address'] === 'string' || data['sent_to_address'] instanceof String)) {
        throw new Error("Expected the field `sent_to_address` to be a primitive type in the JSON string but got " + data['sent_to_address']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['sent_to_bcc_address_list'])) {
        throw new Error("Expected the field `sent_to_bcc_address_list` to be an array in the JSON data but got " + data['sent_to_bcc_address_list']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['sent_to_cc_address_list'])) {
        throw new Error("Expected the field `sent_to_cc_address_list` to be an array in the JSON data but got " + data['sent_to_cc_address_list']);
      }
      // ensure the json data is a string
      if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
        throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
      }
      return true;
    }
  }]);
}();
CreateEmailSentRequest.RequiredProperties = ["sent_to_address"];

/**
 * @member {String} clicked_time
 */
CreateEmailSentRequest.prototype['clicked_time'] = undefined;

/**
 * @member {String} contact_id
 */
CreateEmailSentRequest.prototype['contact_id'] = undefined;

/**
 * @member {String} headers
 */
CreateEmailSentRequest.prototype['headers'] = undefined;

/**
 * Base64 encoded HTML
 * @member {String} html_content
 */
CreateEmailSentRequest.prototype['html_content'] = undefined;

/**
 * @member {String} opened_time
 */
CreateEmailSentRequest.prototype['opened_time'] = undefined;

/**
 * Provider that sent the email, defaults to UNKNOWN
 * @member {module:com.keap.sdk.core/model/CreateEmailSentRequest.OriginalProviderEnum} original_provider
 */
CreateEmailSentRequest.prototype['original_provider'] = undefined;

/**
 * Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record.
 * @member {String} original_provider_id
 */
CreateEmailSentRequest.prototype['original_provider_id'] = undefined;

/**
 * Base64 encoded text
 * @member {String} plain_content
 */
CreateEmailSentRequest.prototype['plain_content'] = undefined;

/**
 * The email address of the synced email account that generated this message.
 * @member {String} provider_source_id
 */
CreateEmailSentRequest.prototype['provider_source_id'] = undefined;

/**
 * @member {String} received_time
 */
CreateEmailSentRequest.prototype['received_time'] = undefined;

/**
 * @member {String} sent_from_address
 */
CreateEmailSentRequest.prototype['sent_from_address'] = undefined;

/**
 * @member {String} sent_from_reply_address
 */
CreateEmailSentRequest.prototype['sent_from_reply_address'] = undefined;

/**
 * @member {String} sent_time
 */
CreateEmailSentRequest.prototype['sent_time'] = undefined;

/**
 * @member {String} sent_to_address
 */
CreateEmailSentRequest.prototype['sent_to_address'] = undefined;

/**
 * @member {Array.<String>} sent_to_bcc_address_list
 */
CreateEmailSentRequest.prototype['sent_to_bcc_address_list'] = undefined;

/**
 * @member {Array.<String>} sent_to_cc_address_list
 */
CreateEmailSentRequest.prototype['sent_to_cc_address_list'] = undefined;

/**
 * @member {String} subject
 */
CreateEmailSentRequest.prototype['subject'] = undefined;

/**
 * Allowed values for the <code>original_provider</code> property.
 * @enum {String}
 * @readonly
 */
CreateEmailSentRequest['OriginalProviderEnum'] = {
  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN",
  /**
   * value: "INFUSIONSOFT"
   * @const
   */
  "INFUSIONSOFT": "INFUSIONSOFT",
  /**
   * value: "MICROSOFT"
   * @const
   */
  "MICROSOFT": "MICROSOFT",
  /**
   * value: "GOOGLE"
   * @const
   */
  "GOOGLE": "GOOGLE",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = CreateEmailSentRequest;