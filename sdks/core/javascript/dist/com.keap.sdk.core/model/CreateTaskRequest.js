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
 * The CreateTaskRequest model module.
 * @module com.keap.sdk.core/model/CreateTaskRequest
 * @version 0.0.37
 */
var CreateTaskRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTaskRequest</code>.
   * @alias module:com.keap.sdk.core/model/CreateTaskRequest
   * @param assignedToUserId {String} 
   */
  function CreateTaskRequest(assignedToUserId) {
    _classCallCheck(this, CreateTaskRequest);
    CreateTaskRequest.initialize(this, assignedToUserId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreateTaskRequest, null, [{
    key: "initialize",
    value: function initialize(obj, assignedToUserId) {
      obj['assigned_to_user_id'] = assignedToUserId;
    }

    /**
     * Constructs a <code>CreateTaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateTaskRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateTaskRequest} The populated <code>CreateTaskRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTaskRequest();
        if (data.hasOwnProperty('assigned_to_user_id')) {
          obj['assigned_to_user_id'] = _ApiClient["default"].convertToType(data['assigned_to_user_id'], 'String');
        }
        if (data.hasOwnProperty('completed')) {
          obj['completed'] = _ApiClient["default"].convertToType(data['completed'], 'Boolean');
        }
        if (data.hasOwnProperty('completion_time')) {
          obj['completion_time'] = _ApiClient["default"].convertToType(data['completion_time'], 'String');
        }
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('due_time')) {
          obj['due_time'] = _ApiClient["default"].convertToType(data['due_time'], 'String');
        }
        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }
        if (data.hasOwnProperty('remind_time_mins')) {
          obj['remind_time_mins'] = _ApiClient["default"].convertToType(data['remind_time_mins'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateTaskRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTaskRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateTaskRequest.RequiredProperties),
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
      if (data['assigned_to_user_id'] && !(typeof data['assigned_to_user_id'] === 'string' || data['assigned_to_user_id'] instanceof String)) {
        throw new Error("Expected the field `assigned_to_user_id` to be a primitive type in the JSON string but got " + data['assigned_to_user_id']);
      }
      // ensure the json data is a string
      if (data['completion_time'] && !(typeof data['completion_time'] === 'string' || data['completion_time'] instanceof String)) {
        throw new Error("Expected the field `completion_time` to be a primitive type in the JSON string but got " + data['completion_time']);
      }
      // ensure the json data is a string
      if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
        throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['due_time'] && !(typeof data['due_time'] === 'string' || data['due_time'] instanceof String)) {
        throw new Error("Expected the field `due_time` to be a primitive type in the JSON string but got " + data['due_time']);
      }
      // ensure the json data is a string
      if (data['priority'] && !(typeof data['priority'] === 'string' || data['priority'] instanceof String)) {
        throw new Error("Expected the field `priority` to be a primitive type in the JSON string but got " + data['priority']);
      }
      // ensure the json data is a string
      if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
        throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      return true;
    }
  }]);
}();
CreateTaskRequest.RequiredProperties = ["assigned_to_user_id"];

/**
 * @member {String} assigned_to_user_id
 */
CreateTaskRequest.prototype['assigned_to_user_id'] = undefined;

/**
 * @member {Boolean} completed
 */
CreateTaskRequest.prototype['completed'] = undefined;

/**
 * @member {String} completion_time
 */
CreateTaskRequest.prototype['completion_time'] = undefined;

/**
 * @member {String} contact_id
 */
CreateTaskRequest.prototype['contact_id'] = undefined;

/**
 * @member {String} description
 */
CreateTaskRequest.prototype['description'] = undefined;

/**
 * @member {String} due_time
 */
CreateTaskRequest.prototype['due_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CreateTaskRequest.PriorityEnum} priority
 */
CreateTaskRequest.prototype['priority'] = undefined;

/**
 * Value in minutes before start_date to show pop-up reminder.  Acceptable values are [5,10,15,30,60,120,240,480,1440,2880]
 * @member {Number} remind_time_mins
 */
CreateTaskRequest.prototype['remind_time_mins'] = undefined;

/**
 * @member {String} title
 */
CreateTaskRequest.prototype['title'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CreateTaskRequest.TypeEnum} type
 */
CreateTaskRequest.prototype['type'] = undefined;

/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
CreateTaskRequest['PriorityEnum'] = {
  /**
   * value: "CRITICAL"
   * @const
   */
  "CRITICAL": "CRITICAL",
  /**
   * value: "ESSENTIAL"
   * @const
   */
  "ESSENTIAL": "ESSENTIAL",
  /**
   * value: "NONESSENTIAL"
   * @const
   */
  "NONESSENTIAL": "NONESSENTIAL",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateTaskRequest['TypeEnum'] = {
  /**
   * value: "EMAIL"
   * @const
   */
  "EMAIL": "EMAIL",
  /**
   * value: "CALL"
   * @const
   */
  "CALL": "CALL",
  /**
   * value: "APPOINTMENT"
   * @const
   */
  "APPOINTMENT": "APPOINTMENT",
  /**
   * value: "FAX"
   * @const
   */
  "FAX": "FAX",
  /**
   * value: "LETTER"
   * @const
   */
  "LETTER": "LETTER",
  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = CreateTaskRequest;