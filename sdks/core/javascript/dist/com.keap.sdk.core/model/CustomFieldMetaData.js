"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CustomFieldOption = _interopRequireDefault(require("./CustomFieldOption"));
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
 * The CustomFieldMetaData model module.
 * @module com.keap.sdk.core/model/CustomFieldMetaData
 * @version 0.0.22
 */
var CustomFieldMetaData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomFieldMetaData</code>.
   * @alias module:com.keap.sdk.core/model/CustomFieldMetaData
   */
  function CustomFieldMetaData() {
    _classCallCheck(this, CustomFieldMetaData);
    CustomFieldMetaData.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CustomFieldMetaData, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CustomFieldMetaData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CustomFieldMetaData} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CustomFieldMetaData} The populated <code>CustomFieldMetaData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomFieldMetaData();
        if (data.hasOwnProperty('default_value')) {
          obj['default_value'] = _ApiClient["default"].convertToType(data['default_value'], 'String');
        }
        if (data.hasOwnProperty('field_name')) {
          obj['field_name'] = _ApiClient["default"].convertToType(data['field_name'], 'String');
        }
        if (data.hasOwnProperty('field_type')) {
          obj['field_type'] = _ApiClient["default"].convertToType(data['field_type'], 'String');
        }
        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient["default"].convertToType(data['group_id'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_CustomFieldOption["default"]]);
        }
        if (data.hasOwnProperty('record_type')) {
          obj['record_type'] = _ApiClient["default"].convertToType(data['record_type'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldMetaData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldMetaData</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['default_value'] && !(typeof data['default_value'] === 'string' || data['default_value'] instanceof String)) {
        throw new Error("Expected the field `default_value` to be a primitive type in the JSON string but got " + data['default_value']);
      }
      // ensure the json data is a string
      if (data['field_name'] && !(typeof data['field_name'] === 'string' || data['field_name'] instanceof String)) {
        throw new Error("Expected the field `field_name` to be a primitive type in the JSON string but got " + data['field_name']);
      }
      // ensure the json data is a string
      if (data['field_type'] && !(typeof data['field_type'] === 'string' || data['field_type'] instanceof String)) {
        throw new Error("Expected the field `field_type` to be a primitive type in the JSON string but got " + data['field_type']);
      }
      // ensure the json data is a string
      if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
        throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
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
        var _iterator = _createForOfIteratorHelper(data['options']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _CustomFieldOption["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['record_type'] && !(typeof data['record_type'] === 'string' || data['record_type'] instanceof String)) {
        throw new Error("Expected the field `record_type` to be a primitive type in the JSON string but got " + data['record_type']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} default_value
 */
CustomFieldMetaData.prototype['default_value'] = undefined;

/**
 * @member {String} field_name
 */
CustomFieldMetaData.prototype['field_name'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CustomFieldMetaData.FieldTypeEnum} field_type
 */
CustomFieldMetaData.prototype['field_type'] = undefined;

/**
 * @member {String} group_id
 */
CustomFieldMetaData.prototype['group_id'] = undefined;

/**
 * @member {String} id
 */
CustomFieldMetaData.prototype['id'] = undefined;

/**
 * @member {String} label
 */
CustomFieldMetaData.prototype['label'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomFieldOption>} options
 */
CustomFieldMetaData.prototype['options'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CustomFieldMetaData.RecordTypeEnum} record_type
 */
CustomFieldMetaData.prototype['record_type'] = undefined;

/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldMetaData['FieldTypeEnum'] = {
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

/**
 * Allowed values for the <code>record_type</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldMetaData['RecordTypeEnum'] = {
  /**
   * value: "CONTACT"
   * @const
   */
  "CONTACT": "CONTACT",
  /**
   * value: "REFERRAL_PARTNER"
   * @const
   */
  "REFERRAL_PARTNER": "REFERRAL_PARTNER",
  /**
   * value: "OPPORTUNITY"
   * @const
   */
  "OPPORTUNITY": "OPPORTUNITY",
  /**
   * value: "TASK_NOTE_APPOINTMENT"
   * @const
   */
  "TASK_NOTE_APPOINTMENT": "TASK_NOTE_APPOINTMENT",
  /**
   * value: "COMPANY"
   * @const
   */
  "COMPANY": "COMPANY",
  /**
   * value: "ORDER"
   * @const
   */
  "ORDER": "ORDER",
  /**
   * value: "SUBSCRIPTION"
   * @const
   */
  "SUBSCRIPTION": "SUBSCRIPTION",
  /**
   * value: "unknown_default_open_api"
   * @const
   */
  "unknown_default_open_api": "unknown_default_open_api"
};
var _default = exports["default"] = CustomFieldMetaData;