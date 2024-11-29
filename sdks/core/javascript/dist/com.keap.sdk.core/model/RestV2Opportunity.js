"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CustomField = _interopRequireDefault(require("./CustomField"));
var _OpportunityContact = _interopRequireDefault(require("./OpportunityContact"));
var _OpportunityStage = _interopRequireDefault(require("./OpportunityStage"));
var _RestV2User = _interopRequireDefault(require("./RestV2User"));
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
 * The RestV2Opportunity model module.
 * @module com.keap.sdk.core/model/RestV2Opportunity
 * @version 0.0.23
 */
var RestV2Opportunity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestV2Opportunity</code>.
   * @alias module:com.keap.sdk.core/model/RestV2Opportunity
   * @param contact {module:com.keap.sdk.core/model/OpportunityContact} 
   * @param opportunityTitle {String} 
   * @param stage {module:com.keap.sdk.core/model/OpportunityStage} 
   */
  function RestV2Opportunity(contact, opportunityTitle, stage) {
    _classCallCheck(this, RestV2Opportunity);
    RestV2Opportunity.initialize(this, contact, opportunityTitle, stage);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestV2Opportunity, null, [{
    key: "initialize",
    value: function initialize(obj, contact, opportunityTitle, stage) {
      obj['contact'] = contact;
      obj['opportunity_title'] = opportunityTitle;
      obj['stage'] = stage;
    }

    /**
     * Constructs a <code>RestV2Opportunity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestV2Opportunity} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestV2Opportunity} The populated <code>RestV2Opportunity</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestV2Opportunity();
        if (data.hasOwnProperty('affiliate_id')) {
          obj['affiliate_id'] = _ApiClient["default"].convertToType(data['affiliate_id'], 'String');
        }
        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _OpportunityContact["default"].constructFromObject(data['contact']);
        }
        if (data.hasOwnProperty('created_time')) {
          obj['created_time'] = _ApiClient["default"].convertToType(data['created_time'], 'String');
        }
        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _ApiClient["default"].convertToType(data['custom_fields'], [_CustomField["default"]]);
        }
        if (data.hasOwnProperty('estimated_close_time')) {
          obj['estimated_close_time'] = _ApiClient["default"].convertToType(data['estimated_close_time'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('include_in_forecast')) {
          obj['include_in_forecast'] = _ApiClient["default"].convertToType(data['include_in_forecast'], 'Boolean');
        }
        if (data.hasOwnProperty('last_updated_time')) {
          obj['last_updated_time'] = _ApiClient["default"].convertToType(data['last_updated_time'], 'String');
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
        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _OpportunityStage["default"].constructFromObject(data['stage']);
        }
        if (data.hasOwnProperty('user')) {
          obj['user'] = _RestV2User["default"].constructFromObject(data['user']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2Opportunity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2Opportunity</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(RestV2Opportunity.RequiredProperties),
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
      if (data['affiliate_id'] && !(typeof data['affiliate_id'] === 'string' || data['affiliate_id'] instanceof String)) {
        throw new Error("Expected the field `affiliate_id` to be a primitive type in the JSON string but got " + data['affiliate_id']);
      }
      // validate the optional field `contact`
      if (data['contact']) {
        // data not null
        _OpportunityContact["default"].validateJSON(data['contact']);
      }
      // ensure the json data is a string
      if (data['created_time'] && !(typeof data['created_time'] === 'string' || data['created_time'] instanceof String)) {
        throw new Error("Expected the field `created_time` to be a primitive type in the JSON string but got " + data['created_time']);
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
            _CustomField["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['estimated_close_time'] && !(typeof data['estimated_close_time'] === 'string' || data['estimated_close_time'] instanceof String)) {
        throw new Error("Expected the field `estimated_close_time` to be a primitive type in the JSON string but got " + data['estimated_close_time']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['last_updated_time'] && !(typeof data['last_updated_time'] === 'string' || data['last_updated_time'] instanceof String)) {
        throw new Error("Expected the field `last_updated_time` to be a primitive type in the JSON string but got " + data['last_updated_time']);
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
      // validate the optional field `stage`
      if (data['stage']) {
        // data not null
        _OpportunityStage["default"].validateJSON(data['stage']);
      }
      // validate the optional field `user`
      if (data['user']) {
        // data not null
        _RestV2User["default"].validateJSON(data['user']);
      }
      return true;
    }
  }]);
}();
RestV2Opportunity.RequiredProperties = ["contact", "opportunity_title", "stage"];

/**
 * @member {String} affiliate_id
 */
RestV2Opportunity.prototype['affiliate_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/OpportunityContact} contact
 */
RestV2Opportunity.prototype['contact'] = undefined;

/**
 * @member {String} created_time
 */
RestV2Opportunity.prototype['created_time'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomField>} custom_fields
 */
RestV2Opportunity.prototype['custom_fields'] = undefined;

/**
 * @member {String} estimated_close_time
 */
RestV2Opportunity.prototype['estimated_close_time'] = undefined;

/**
 * @member {String} id
 */
RestV2Opportunity.prototype['id'] = undefined;

/**
 * @member {Boolean} include_in_forecast
 */
RestV2Opportunity.prototype['include_in_forecast'] = undefined;

/**
 * @member {String} last_updated_time
 */
RestV2Opportunity.prototype['last_updated_time'] = undefined;

/**
 * @member {String} next_action_notes
 */
RestV2Opportunity.prototype['next_action_notes'] = undefined;

/**
 * @member {String} next_action_time
 */
RestV2Opportunity.prototype['next_action_time'] = undefined;

/**
 * @member {String} opportunity_notes
 */
RestV2Opportunity.prototype['opportunity_notes'] = undefined;

/**
 * @member {String} opportunity_title
 */
RestV2Opportunity.prototype['opportunity_title'] = undefined;

/**
 * @member {Number} projected_revenue_high
 */
RestV2Opportunity.prototype['projected_revenue_high'] = undefined;

/**
 * @member {Number} projected_revenue_low
 */
RestV2Opportunity.prototype['projected_revenue_low'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/OpportunityStage} stage
 */
RestV2Opportunity.prototype['stage'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestV2User} user
 */
RestV2Opportunity.prototype['user'] = undefined;
var _default = exports["default"] = RestV2Opportunity;