"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _HistoricalCounts = _interopRequireDefault(require("./HistoricalCounts"));
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
 * The Goal model module.
 * @module com.keap.sdk.core/model/Goal
 * @version 0.0.31
 */
var Goal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Goal</code>.
   * @alias module:com.keap.sdk.core/model/Goal
   */
  function Goal() {
    _classCallCheck(this, Goal);
    Goal.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Goal, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Goal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Goal} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Goal} The populated <code>Goal</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Goal();
        if (data.hasOwnProperty('historical_contact_counts')) {
          obj['historical_contact_counts'] = _HistoricalCounts["default"].constructFromObject(data['historical_contact_counts']);
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('next_sequence_ids')) {
          obj['next_sequence_ids'] = _ApiClient["default"].convertToType(data['next_sequence_ids'], ['String']);
        }
        if (data.hasOwnProperty('previous_sequence_ids')) {
          obj['previous_sequence_ids'] = _ApiClient["default"].convertToType(data['previous_sequence_ids'], ['String']);
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Goal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Goal</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `historical_contact_counts`
      if (data['historical_contact_counts']) {
        // data not null
        _HistoricalCounts["default"].validateJSON(data['historical_contact_counts']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['next_sequence_ids'])) {
        throw new Error("Expected the field `next_sequence_ids` to be an array in the JSON data but got " + data['next_sequence_ids']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['previous_sequence_ids'])) {
        throw new Error("Expected the field `previous_sequence_ids` to be an array in the JSON data but got " + data['previous_sequence_ids']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:com.keap.sdk.core/model/HistoricalCounts} historical_contact_counts
 */
Goal.prototype['historical_contact_counts'] = undefined;

/**
 * @member {String} id
 */
Goal.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Goal.prototype['name'] = undefined;

/**
 * @member {Array.<String>} next_sequence_ids
 */
Goal.prototype['next_sequence_ids'] = undefined;

/**
 * @member {Array.<String>} previous_sequence_ids
 */
Goal.prototype['previous_sequence_ids'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Goal.TypeEnum} type
 */
Goal.prototype['type'] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Goal['TypeEnum'] = {
  /**
   * value: "WebForm"
   * @const
   */
  "WebForm": "WebForm",
  /**
   * value: "LandingPage"
   * @const
   */
  "LandingPage": "LandingPage",
  /**
   * value: "Survey"
   * @const
   */
  "Survey": "Survey",
  /**
   * value: "LinkClick"
   * @const
   */
  "LinkClick": "LinkClick",
  /**
   * value: "EmailOpened"
   * @const
   */
  "EmailOpened": "EmailOpened",
  /**
   * value: "Score"
   * @const
   */
  "Score": "Score",
  /**
   * value: "Purchase"
   * @const
   */
  "Purchase": "Purchase",
  /**
   * value: "FailedPurchase"
   * @const
   */
  "FailedPurchase": "FailedPurchase",
  /**
   * value: "Quote"
   * @const
   */
  "Quote": "Quote",
  /**
   * value: "WebsiteTrigger"
   * @const
   */
  "WebsiteTrigger": "WebsiteTrigger",
  /**
   * value: "InternalForm"
   * @const
   */
  "InternalForm": "InternalForm",
  /**
   * value: "SmartForm"
   * @const
   */
  "SmartForm": "SmartForm",
  /**
   * value: "AppointmentEvent"
   * @const
   */
  "AppointmentEvent": "AppointmentEvent",
  /**
   * value: "Task"
   * @const
   */
  "Task": "Task",
  /**
   * value: "StageMove"
   * @const
   */
  "StageMove": "StageMove",
  /**
   * value: "Note"
   * @const
   */
  "Note": "Note",
  /**
   * value: "Tag"
   * @const
   */
  "Tag": "Tag",
  /**
   * value: "PipelineStageMove"
   * @const
   */
  "PipelineStageMove": "PipelineStageMove",
  /**
   * value: "UnlayerLandingPage"
   * @const
   */
  "UnlayerLandingPage": "UnlayerLandingPage",
  /**
   * value: "GroSocial"
   * @const
   */
  "GroSocial": "GroSocial",
  /**
   * value: "TwitterForm"
   * @const
   */
  "TwitterForm": "TwitterForm",
  /**
   * value: "API"
   * @const
   */
  "API": "API",
  /**
   * value: "WordPress"
   * @const
   */
  "WordPress": "WordPress",
  /**
   * value: "NewLandingPage"
   * @const
   */
  "NewLandingPage": "NewLandingPage",
  /**
   * value: "IntegrationTrigger"
   * @const
   */
  "IntegrationTrigger": "IntegrationTrigger",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = Goal;