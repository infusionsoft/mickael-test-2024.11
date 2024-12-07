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
 * The Link model module.
 * @module com.keap.sdk.core/model/Link
 * @version 0.0.32
 */
var Link = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Link</code>.
   * @alias module:com.keap.sdk.core/model/Link
   */
  function Link() {
    _classCallCheck(this, Link);
    Link.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Link, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Link} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Link} The populated <code>Link</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Link();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('link_type_id')) {
          obj['link_type_id'] = _ApiClient["default"].convertToType(data['link_type_id'], 'String');
        }
        if (data.hasOwnProperty('link_type_name')) {
          obj['link_type_name'] = _ApiClient["default"].convertToType(data['link_type_name'], 'String');
        }
        if (data.hasOwnProperty('linked_contact_id')) {
          obj['linked_contact_id'] = _ApiClient["default"].convertToType(data['linked_contact_id'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Link</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Link</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['link_type_id'] && !(typeof data['link_type_id'] === 'string' || data['link_type_id'] instanceof String)) {
        throw new Error("Expected the field `link_type_id` to be a primitive type in the JSON string but got " + data['link_type_id']);
      }
      // ensure the json data is a string
      if (data['link_type_name'] && !(typeof data['link_type_name'] === 'string' || data['link_type_name'] instanceof String)) {
        throw new Error("Expected the field `link_type_name` to be a primitive type in the JSON string but got " + data['link_type_name']);
      }
      // ensure the json data is a string
      if (data['linked_contact_id'] && !(typeof data['linked_contact_id'] === 'string' || data['linked_contact_id'] instanceof String)) {
        throw new Error("Expected the field `linked_contact_id` to be a primitive type in the JSON string but got " + data['linked_contact_id']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} id
 */
Link.prototype['id'] = undefined;

/**
 * @member {String} link_type_id
 */
Link.prototype['link_type_id'] = undefined;

/**
 * @member {String} link_type_name
 */
Link.prototype['link_type_name'] = undefined;

/**
 * @member {String} linked_contact_id
 */
Link.prototype['linked_contact_id'] = undefined;
var _default = exports["default"] = Link;