"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CustomField = _interopRequireDefault(require("./CustomField"));
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
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The PatchOpportunityRequest model module.
 * @module com.keap.sdk.core/model/PatchOpportunityRequest
 * @version 2.70.0.736468-hf-202411121210
 */
var PatchOpportunityRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PatchOpportunityRequest</code>.
   * @alias module:com.keap.sdk.core/model/PatchOpportunityRequest
   */
  function PatchOpportunityRequest() {
    _classCallCheck(this, PatchOpportunityRequest);
    PatchOpportunityRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(PatchOpportunityRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>PatchOpportunityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PatchOpportunityRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PatchOpportunityRequest} The populated <code>PatchOpportunityRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchOpportunityRequest();
        if (data.hasOwnProperty('affiliate_id')) {
          obj['affiliate_id'] = _ApiClient["default"].convertToType(data['affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'String');
        }
        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _ApiClient["default"].convertToType(data['custom_fields'], [_CustomField["default"]]);
        }
        if (data.hasOwnProperty('estimated_close_time')) {
          obj['estimated_close_time'] = _ApiClient["default"].convertToType(data['estimated_close_time'], 'String');
        }
        if (data.hasOwnProperty('include_in_forecast')) {
          obj['include_in_forecast'] = _ApiClient["default"].convertToType(data['include_in_forecast'], 'Boolean');
        }
        if (data.hasOwnProperty('next_action_notes')) {
          obj['next_action_notes'] = _ApiClient["default"].convertToType(data['next_action_notes'], 'String');
        }
        if (data.hasOwnProperty('next_action_time')) {
          obj['next_action_time'] = _ApiClient["default"].convertToType(data['next_action_time'], 'String');
        }
        if (data.hasOwnProperty('opportunity_notes')) {
          obj['opportunity_notes'] = _ApiClient["default"].convertToType(data['opportunity_notes'], 'String');
        }
        if (data.hasOwnProperty('opportunity_title')) {
          obj['opportunity_title'] = _ApiClient["default"].convertToType(data['opportunity_title'], 'String');
        }
        if (data.hasOwnProperty('projected_revenue_high')) {
          obj['projected_revenue_high'] = _ApiClient["default"].convertToType(data['projected_revenue_high'], 'Number');
        }
        if (data.hasOwnProperty('projected_revenue_low')) {
          obj['projected_revenue_low'] = _ApiClient["default"].convertToType(data['projected_revenue_low'], 'Number');
        }
        if (data.hasOwnProperty('stage_id')) {
          obj['stage_id'] = _ApiClient["default"].convertToType(data['stage_id'], 'String');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchOpportunityRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchOpportunityRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['affiliate_id'] && !(typeof data['affiliate_id'] === 'string' || data['affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `affiliate_id` to be a primitive type in the JSON string but got " + data['affiliate_id']);
      }
      // ensure the json data is a string
      if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
        throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
      }
      if (data['custom_fields']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['custom_fields'])) {
          throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
        }
        // validate the optional field `custom_fields` (array)
        var _iterator = _createForOfIteratorHelper(data['custom_fields']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _CustomField["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['estimated_close_time'] && !(typeof data['estimated_close_time'] === 'string' || data['estimated_close_time'] instanceof String)) {
        throw new Error("Expected the field `estimated_close_time` to be a primitive type in the JSON string but got " + data['estimated_close_time']);
      }
      // ensure the json data is a string
      if (data['next_action_notes'] && !(typeof data['next_action_notes'] === 'string' || data['next_action_notes'] instanceof String)) {
        throw new Error("Expected the field `next_action_notes` to be a primitive type in the JSON string but got " + data['next_action_notes']);
      }
      // ensure the json data is a string
      if (data['next_action_time'] && !(typeof data['next_action_time'] === 'string' || data['next_action_time'] instanceof String)) {
        throw new Error("Expected the field `next_action_time` to be a primitive type in the JSON string but got " + data['next_action_time']);
      }
      // ensure the json data is a string
      if (data['opportunity_notes'] && !(typeof data['opportunity_notes'] === 'string' || data['opportunity_notes'] instanceof String)) {
        throw new Error("Expected the field `opportunity_notes` to be a primitive type in the JSON string but got " + data['opportunity_notes']);
      }
      // ensure the json data is a string
      if (data['opportunity_title'] && !(typeof data['opportunity_title'] === 'string' || data['opportunity_title'] instanceof String)) {
        throw new Error("Expected the field `opportunity_title` to be a primitive type in the JSON string but got " + data['opportunity_title']);
      }
      // ensure the json data is a string
      if (data['stage_id'] && !(typeof data['stage_id'] === 'string' || data['stage_id'] instanceof String)) {
        throw new Error("Expected the field `stage_id` to be a primitive type in the JSON string but got " + data['stage_id']);
      }
      // ensure the json data is a string
      if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
        throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} affiliate_id
 */
PatchOpportunityRequest.prototype['affiliate_id'] = undefined;

/**
 * @member {String} contact_id
 */
PatchOpportunityRequest.prototype['contact_id'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomField>} custom_fields
 */
PatchOpportunityRequest.prototype['custom_fields'] = undefined;

/**
 * @member {String} estimated_close_time
 */
PatchOpportunityRequest.prototype['estimated_close_time'] = undefined;

/**
 * @member {Boolean} include_in_forecast
 */
PatchOpportunityRequest.prototype['include_in_forecast'] = undefined;

/**
 * @member {String} next_action_notes
 */
PatchOpportunityRequest.prototype['next_action_notes'] = undefined;

/**
 * @member {String} next_action_time
 */
PatchOpportunityRequest.prototype['next_action_time'] = undefined;

/**
 * @member {String} opportunity_notes
 */
PatchOpportunityRequest.prototype['opportunity_notes'] = undefined;

/**
 * @member {String} opportunity_title
 */
PatchOpportunityRequest.prototype['opportunity_title'] = undefined;

/**
 * @member {Number} projected_revenue_high
 */
PatchOpportunityRequest.prototype['projected_revenue_high'] = undefined;

/**
 * @member {Number} projected_revenue_low
 */
PatchOpportunityRequest.prototype['projected_revenue_low'] = undefined;

/**
 * @member {String} stage_id
 */
PatchOpportunityRequest.prototype['stage_id'] = undefined;

/**
 * @member {String} user_id
 */
PatchOpportunityRequest.prototype['user_id'] = undefined;
var _default = exports["default"] = PatchOpportunityRequest;