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
 * The ContactUtmResponse model module.
 * @module com.keap.sdk.core/model/ContactUtmResponse
 * @version 0.0.22
 */
var ContactUtmResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactUtmResponse</code>.
   * @alias module:com.keap.sdk.core/model/ContactUtmResponse
   */
  function ContactUtmResponse() {
    _classCallCheck(this, ContactUtmResponse);
    ContactUtmResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ContactUtmResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ContactUtmResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ContactUtmResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ContactUtmResponse} The populated <code>ContactUtmResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactUtmResponse();
        if (data.hasOwnProperty('dateCreated')) {
          obj['dateCreated'] = _ApiClient["default"].convertToType(data['dateCreated'], 'Date');
        }
        if (data.hasOwnProperty('firstTouch')) {
          obj['firstTouch'] = _ApiClient["default"].convertToType(data['firstTouch'], 'Boolean');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('keapSourceId')) {
          obj['keapSourceId'] = _ApiClient["default"].convertToType(data['keapSourceId'], 'String');
        }
        if (data.hasOwnProperty('lastTouch')) {
          obj['lastTouch'] = _ApiClient["default"].convertToType(data['lastTouch'], 'Boolean');
        }
        if (data.hasOwnProperty('utmCampaign')) {
          obj['utmCampaign'] = _ApiClient["default"].convertToType(data['utmCampaign'], 'String');
        }
        if (data.hasOwnProperty('utmContent')) {
          obj['utmContent'] = _ApiClient["default"].convertToType(data['utmContent'], 'String');
        }
        if (data.hasOwnProperty('utmMedium')) {
          obj['utmMedium'] = _ApiClient["default"].convertToType(data['utmMedium'], 'String');
        }
        if (data.hasOwnProperty('utmSource')) {
          obj['utmSource'] = _ApiClient["default"].convertToType(data['utmSource'], 'String');
        }
        if (data.hasOwnProperty('utmTerm')) {
          obj['utmTerm'] = _ApiClient["default"].convertToType(data['utmTerm'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactUtmResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactUtmResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['keapSourceId'] && !(typeof data['keapSourceId'] === 'string' || data['keapSourceId'] instanceof String)) {
        throw new Error("Expected the field `keapSourceId` to be a primitive type in the JSON string but got " + data['keapSourceId']);
      }
      // ensure the json data is a string
      if (data['utmCampaign'] && !(typeof data['utmCampaign'] === 'string' || data['utmCampaign'] instanceof String)) {
        throw new Error("Expected the field `utmCampaign` to be a primitive type in the JSON string but got " + data['utmCampaign']);
      }
      // ensure the json data is a string
      if (data['utmContent'] && !(typeof data['utmContent'] === 'string' || data['utmContent'] instanceof String)) {
        throw new Error("Expected the field `utmContent` to be a primitive type in the JSON string but got " + data['utmContent']);
      }
      // ensure the json data is a string
      if (data['utmMedium'] && !(typeof data['utmMedium'] === 'string' || data['utmMedium'] instanceof String)) {
        throw new Error("Expected the field `utmMedium` to be a primitive type in the JSON string but got " + data['utmMedium']);
      }
      // ensure the json data is a string
      if (data['utmSource'] && !(typeof data['utmSource'] === 'string' || data['utmSource'] instanceof String)) {
        throw new Error("Expected the field `utmSource` to be a primitive type in the JSON string but got " + data['utmSource']);
      }
      // ensure the json data is a string
      if (data['utmTerm'] && !(typeof data['utmTerm'] === 'string' || data['utmTerm'] instanceof String)) {
        throw new Error("Expected the field `utmTerm` to be a primitive type in the JSON string but got " + data['utmTerm']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Date} dateCreated
 */
ContactUtmResponse.prototype['dateCreated'] = undefined;

/**
 * @member {Boolean} firstTouch
 */
ContactUtmResponse.prototype['firstTouch'] = undefined;

/**
 * @member {Number} id
 */
ContactUtmResponse.prototype['id'] = undefined;

/**
 * @member {String} keapSourceId
 */
ContactUtmResponse.prototype['keapSourceId'] = undefined;

/**
 * @member {Boolean} lastTouch
 */
ContactUtmResponse.prototype['lastTouch'] = undefined;

/**
 * @member {String} utmCampaign
 */
ContactUtmResponse.prototype['utmCampaign'] = undefined;

/**
 * @member {String} utmContent
 */
ContactUtmResponse.prototype['utmContent'] = undefined;

/**
 * @member {String} utmMedium
 */
ContactUtmResponse.prototype['utmMedium'] = undefined;

/**
 * @member {String} utmSource
 */
ContactUtmResponse.prototype['utmSource'] = undefined;

/**
 * @member {String} utmTerm
 */
ContactUtmResponse.prototype['utmTerm'] = undefined;
var _default = exports["default"] = ContactUtmResponse;