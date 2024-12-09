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
 * The UpdateTaskResponse model module.
 * @module com.keap.sdk.core/model/UpdateTaskResponse
 * @version 0.0.35
 */
var UpdateTaskResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateTaskResponse</code>.
   * @alias module:com.keap.sdk.core/model/UpdateTaskResponse
   */
  function UpdateTaskResponse() {
    _classCallCheck(this, UpdateTaskResponse);
    UpdateTaskResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(UpdateTaskResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>UpdateTaskResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateTaskResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateTaskResponse} The populated <code>UpdateTaskResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateTaskResponse();
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
        if (data.hasOwnProperty('create_time')) {
          obj['create_time'] = _ApiClient["default"].convertToType(data['create_time'], 'String');
        }
        if (data.hasOwnProperty('created_by_user_id')) {
          obj['created_by_user_id'] = _ApiClient["default"].convertToType(data['created_by_user_id'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('due_time')) {
          obj['due_time'] = _ApiClient["default"].convertToType(data['due_time'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('modification_time')) {
          obj['modification_time'] = _ApiClient["default"].convertToType(data['modification_time'], 'String');
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
     * Validates the JSON data with respect to <code>UpdateTaskResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTaskResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
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
      if (data['create_time'] && !(typeof data['create_time'] === 'string' || data['create_time'] instanceof String)) {
        throw new Error("Expected the field `create_time` to be a primitive type in the JSON string but got " + data['create_time']);
      }
      // ensure the json data is a string
      if (data['created_by_user_id'] && !(typeof data['created_by_user_id'] === 'string' || data['created_by_user_id'] instanceof String)) {
        throw new Error("Expected the field `created_by_user_id` to be a primitive type in the JSON string but got " + data['created_by_user_id']);
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
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['modification_time'] && !(typeof data['modification_time'] === 'string' || data['modification_time'] instanceof String)) {
        throw new Error("Expected the field `modification_time` to be a primitive type in the JSON string but got " + data['modification_time']);
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
/**
 * @member {String} assigned_to_user_id
 */
UpdateTaskResponse.prototype['assigned_to_user_id'] = undefined;

/**
 * @member {Boolean} completed
 */
UpdateTaskResponse.prototype['completed'] = undefined;

/**
 * @member {String} completion_time
 */
UpdateTaskResponse.prototype['completion_time'] = undefined;

/**
 * @member {String} contact_id
 */
UpdateTaskResponse.prototype['contact_id'] = undefined;

/**
 * On initial object the returned value for this property may not accurately represent the exact stored value.
 * @member {String} create_time
 */
UpdateTaskResponse.prototype['create_time'] = undefined;

/**
 * @member {String} created_by_user_id
 */
UpdateTaskResponse.prototype['created_by_user_id'] = undefined;

/**
 * @member {String} description
 */
UpdateTaskResponse.prototype['description'] = undefined;

/**
 * @member {String} due_time
 */
UpdateTaskResponse.prototype['due_time'] = undefined;

/**
 * @member {String} id
 */
UpdateTaskResponse.prototype['id'] = undefined;

/**
 * @member {String} modification_time
 */
UpdateTaskResponse.prototype['modification_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/UpdateTaskResponse.PriorityEnum} priority
 */
UpdateTaskResponse.prototype['priority'] = undefined;

/**
 * @member {Number} remind_time_mins
 */
UpdateTaskResponse.prototype['remind_time_mins'] = undefined;

/**
 * @member {String} title
 */
UpdateTaskResponse.prototype['title'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/UpdateTaskResponse.TypeEnum} type
 */
UpdateTaskResponse.prototype['type'] = undefined;

/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
UpdateTaskResponse['PriorityEnum'] = {
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
UpdateTaskResponse['TypeEnum'] = {
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
var _default = exports["default"] = UpdateTaskResponse;