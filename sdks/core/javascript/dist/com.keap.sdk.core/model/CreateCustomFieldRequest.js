"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCustomFieldOptionRequest = _interopRequireDefault(require("./CreateCustomFieldOptionRequest"));
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
 * The CreateCustomFieldRequest model module.
 * @module com.keap.sdk.core/model/CreateCustomFieldRequest
 * @version 2.70.0.739356-hf-202411181744
 */
var CreateCustomFieldRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCustomFieldRequest</code>.
   * @alias module:com.keap.sdk.core/model/CreateCustomFieldRequest
   * @param fieldType {module:com.keap.sdk.core/model/CreateCustomFieldRequest.FieldTypeEnum} 
   * @param label {String} 
   */
  function CreateCustomFieldRequest(fieldType, label) {
    _classCallCheck(this, CreateCustomFieldRequest);
    CreateCustomFieldRequest.initialize(this, fieldType, label);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreateCustomFieldRequest, null, [{
    key: "initialize",
    value: function initialize(obj, fieldType, label) {
      obj['field_type'] = fieldType;
      obj['label'] = label;
    }

    /**
     * Constructs a <code>CreateCustomFieldRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateCustomFieldRequest} The populated <code>CreateCustomFieldRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCustomFieldRequest();
        if (data.hasOwnProperty('field_type')) {
          obj['field_type'] = _ApiClient["default"].convertToType(data['field_type'], 'String');
        }
        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient["default"].convertToType(data['group_id'], 'String');
        }
        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_CreateCustomFieldOptionRequest["default"]]);
        }
        if (data.hasOwnProperty('user_group_id')) {
          obj['user_group_id'] = _ApiClient["default"].convertToType(data['user_group_id'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCustomFieldRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCustomFieldRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateCustomFieldRequest.RequiredProperties),
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
      if (data['field_type'] && !(typeof data['field_type'] === 'string' || data['field_type'] instanceof String)) {
        throw new Error("Expected the field `field_type` to be a primitive type in the JSON string but got " + data['field_type']);
      }
      // ensure the json data is a string
      if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
        throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
      }
      // ensure the json data is a string
      if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
        throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
      }
      if (data['options']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['options'])) {
          throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
        }
        // validate the optional field `options` (array)
        var _iterator2 = _createForOfIteratorHelper(data['options']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _CreateCustomFieldOptionRequest["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['user_group_id'] && !(typeof data['user_group_id'] === 'string' || data['user_group_id'] instanceof String)) {
        throw new Error("Expected the field `user_group_id` to be a primitive type in the JSON string but got " + data['user_group_id']);
      }
      return true;
    }
  }]);
}();
CreateCustomFieldRequest.RequiredProperties = ["field_type", "label"];

/**
 * @member {module:com.keap.sdk.core/model/CreateCustomFieldRequest.FieldTypeEnum} field_type
 */
CreateCustomFieldRequest.prototype['field_type'] = undefined;

/**
 * An optional tab group to place the field under in the interface.  If not specified, will default to the 'Custom Fields' tab.
 * @member {String} group_id
 */
CreateCustomFieldRequest.prototype['group_id'] = undefined;

/**
 * @member {String} label
 */
CreateCustomFieldRequest.prototype['label'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CreateCustomFieldOptionRequest>} options
 */
CreateCustomFieldRequest.prototype['options'] = undefined;

/**
 * An optional user group to choose from when selecting values for User or UserListBox fields.
 * @member {String} user_group_id
 */
CreateCustomFieldRequest.prototype['user_group_id'] = undefined;

/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateCustomFieldRequest['FieldTypeEnum'] = {
  /**
   * value: "CURRENCY"
   * @const
   */
  "CURRENCY": "CURRENCY",
  /**
   * value: "DATE"
   * @const
   */
  "DATE": "DATE",
  /**
   * value: "DATE_TIME"
   * @const
   */
  "DATE_TIME": "DATE_TIME",
  /**
   * value: "DAY_OF_WEEK"
   * @const
   */
  "DAY_OF_WEEK": "DAY_OF_WEEK",
  /**
   * value: "DECIMAL_NUMBER"
   * @const
   */
  "DECIMAL_NUMBER": "DECIMAL_NUMBER",
  /**
   * value: "DRILLDOWN"
   * @const
   */
  "DRILLDOWN": "DRILLDOWN",
  /**
   * value: "DROPDOWN"
   * @const
   */
  "DROPDOWN": "DROPDOWN",
  /**
   * value: "EMAIL"
   * @const
   */
  "EMAIL": "EMAIL",
  /**
   * value: "LIST_BOX"
   * @const
   */
  "LIST_BOX": "LIST_BOX",
  /**
   * value: "MONTH"
   * @const
   */
  "MONTH": "MONTH",
  /**
   * value: "NAME"
   * @const
   */
  "NAME": "NAME",
  /**
   * value: "PERCENT"
   * @const
   */
  "PERCENT": "PERCENT",
  /**
   * value: "PHONE_NUMBER"
   * @const
   */
  "PHONE_NUMBER": "PHONE_NUMBER",
  /**
   * value: "RADIO"
   * @const
   */
  "RADIO": "RADIO",
  /**
   * value: "SOCIAL_SECURITY_NUMBER"
   * @const
   */
  "SOCIAL_SECURITY_NUMBER": "SOCIAL_SECURITY_NUMBER",
  /**
   * value: "STATE"
   * @const
   */
  "STATE": "STATE",
  /**
   * value: "TEXT"
   * @const
   */
  "TEXT": "TEXT",
  /**
   * value: "TEXT_AREA"
   * @const
   */
  "TEXT_AREA": "TEXT_AREA",
  /**
   * value: "USER"
   * @const
   */
  "USER": "USER",
  /**
   * value: "USER_LIST_BOX"
   * @const
   */
  "USER_LIST_BOX": "USER_LIST_BOX",
  /**
   * value: "WEBSITE"
   * @const
   */
  "WEBSITE": "WEBSITE",
  /**
   * value: "WHOLE_NUMBER"
   * @const
   */
  "WHOLE_NUMBER": "WHOLE_NUMBER",
  /**
   * value: "YEAR"
   * @const
   */
  "YEAR": "YEAR",
  /**
   * value: "YES_NO"
   * @const
   */
  "YES_NO": "YES_NO",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = CreateCustomFieldRequest;