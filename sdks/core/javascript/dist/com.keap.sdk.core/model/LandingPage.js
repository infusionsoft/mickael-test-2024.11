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
 * The LandingPage model module.
 * @module com.keap.sdk.core/model/LandingPage
 * @version 0.0.18
 */
var LandingPage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LandingPage</code>.
   * @alias module:com.keap.sdk.core/model/LandingPage
   */
  function LandingPage() {
    _classCallCheck(this, LandingPage);
    LandingPage.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(LandingPage, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>LandingPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/LandingPage} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/LandingPage} The populated <code>LandingPage</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LandingPage();
        if (data.hasOwnProperty('html_preview_url')) {
          obj['html_preview_url'] = _ApiClient["default"].convertToType(data['html_preview_url'], 'String');
        }
        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('template_group_status')) {
          obj['template_group_status'] = _ApiClient["default"].convertToType(data['template_group_status'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LandingPage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LandingPage</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['html_preview_url'] && !(typeof data['html_preview_url'] === 'string' || data['html_preview_url'] instanceof String)) {
        throw new Error("Expected the field `html_preview_url` to be a primitive type in the JSON string but got " + data['html_preview_url']);
      }
      // ensure the json data is a string
      if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
        throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['template_group_status'] && !(typeof data['template_group_status'] === 'string' || data['template_group_status'] instanceof String)) {
        throw new Error("Expected the field `template_group_status` to be a primitive type in the JSON string but got " + data['template_group_status']);
      }
      // ensure the json data is a string
      if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
        throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} html_preview_url
 */
LandingPage.prototype['html_preview_url'] = undefined;

/**
 * @member {String} html_url
 */
LandingPage.prototype['html_url'] = undefined;

/**
 * @member {String} id
 */
LandingPage.prototype['id'] = undefined;

/**
 * @member {String} template_group_status
 */
LandingPage.prototype['template_group_status'] = undefined;

/**
 * @member {String} title
 */
LandingPage.prototype['title'] = undefined;
var _default = exports["default"] = LandingPage;