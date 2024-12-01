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
 * The DeleteEmailsRequest model module.
 * @module com.keap.sdk.core/model/DeleteEmailsRequest
 * @version 0.0.25
 */
var DeleteEmailsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteEmailsRequest</code>.
   * @alias module:com.keap.sdk.core/model/DeleteEmailsRequest
   */
  function DeleteEmailsRequest() {
    _classCallCheck(this, DeleteEmailsRequest);
    DeleteEmailsRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(DeleteEmailsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>DeleteEmailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DeleteEmailsRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DeleteEmailsRequest} The populated <code>DeleteEmailsRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteEmailsRequest();
        if (data.hasOwnProperty('email_ids')) {
          obj['email_ids'] = _ApiClient["default"].convertToType(data['email_ids'], ['String']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteEmailsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteEmailsRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is an array
      if (!Array.isArray(data['email_ids'])) {
        throw new Error("Expected the field `email_ids` to be an array in the JSON data but got " + data['email_ids']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Array.<String>} email_ids
 */
DeleteEmailsRequest.prototype['email_ids'] = undefined;
var _default = exports["default"] = DeleteEmailsRequest;