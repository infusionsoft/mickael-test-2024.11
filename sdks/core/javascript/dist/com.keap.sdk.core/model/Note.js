"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BasicUser = _interopRequireDefault(require("./BasicUser"));
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
 * The Note model module.
 * @module com.keap.sdk.core/model/Note
 * @version 0.0.25
 */
var Note = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Note</code>.
   * @alias module:com.keap.sdk.core/model/Note
   */
  function Note() {
    _classCallCheck(this, Note);
    Note.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Note, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Note} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Note} The populated <code>Note</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Note();
        if (data.hasOwnProperty('assigned_to_user')) {
          obj['assigned_to_user'] = _BasicUser["default"].constructFromObject(data['assigned_to_user']);
        }
        if (data.hasOwnProperty('contact_id')) {
          obj['contact_id'] = _ApiClient["default"].convertToType(data['contact_id'], 'String');
        }
        if (data.hasOwnProperty('create_time')) {
          obj['create_time'] = _ApiClient["default"].convertToType(data['create_time'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('last_updated_by_user_id')) {
          obj['last_updated_by_user_id'] = _ApiClient["default"].convertToType(data['last_updated_by_user_id'], 'String');
        }
        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('update_time')) {
          obj['update_time'] = _ApiClient["default"].convertToType(data['update_time'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Note</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Note</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `assigned_to_user`
      if (data['assigned_to_user']) {
        // data not null
        _BasicUser["default"].validateJSON(data['assigned_to_user']);
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
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['last_updated_by_user_id'] && !(typeof data['last_updated_by_user_id'] === 'string' || data['last_updated_by_user_id'] instanceof String)) {
        throw new Error("Expected the field `last_updated_by_user_id` to be a primitive type in the JSON string but got " + data['last_updated_by_user_id']);
      }
      // ensure the json data is a string
      if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
        throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
      }
      // ensure the json data is a string
      if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
        throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      // ensure the json data is a string
      if (data['update_time'] && !(typeof data['update_time'] === 'string' || data['update_time'] instanceof String)) {
        throw new Error("Expected the field `update_time` to be a primitive type in the JSON string but got " + data['update_time']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:com.keap.sdk.core/model/BasicUser} assigned_to_user
 */
Note.prototype['assigned_to_user'] = undefined;

/**
 * @member {String} contact_id
 */
Note.prototype['contact_id'] = undefined;

/**
 * @member {String} create_time
 */
Note.prototype['create_time'] = undefined;

/**
 * @member {String} id
 */
Note.prototype['id'] = undefined;

/**
 * @member {String} last_updated_by_user_id
 */
Note.prototype['last_updated_by_user_id'] = undefined;

/**
 * @member {String} text
 */
Note.prototype['text'] = undefined;

/**
 * @member {String} title
 */
Note.prototype['title'] = undefined;

/**
 * @member {String} type
 */
Note.prototype['type'] = undefined;

/**
 * @member {String} update_time
 */
Note.prototype['update_time'] = undefined;
var _default = exports["default"] = Note;