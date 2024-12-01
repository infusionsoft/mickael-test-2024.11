"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Goal = _interopRequireDefault(require("./Goal"));
var _Sequence = _interopRequireDefault(require("./Sequence"));
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
 * The Campaign model module.
 * @module com.keap.sdk.core/model/Campaign
 * @version 0.0.25
 */
var Campaign = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Campaign</code>.
   * @alias module:com.keap.sdk.core/model/Campaign
   */
  function Campaign() {
    _classCallCheck(this, Campaign);
    Campaign.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Campaign, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Campaign} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Campaign} The populated <code>Campaign</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Campaign();
        if (data.hasOwnProperty('active_contact_count')) {
          obj['active_contact_count'] = _ApiClient["default"].convertToType(data['active_contact_count'], 'Number');
        }
        if (data.hasOwnProperty('completed_contact_count')) {
          obj['completed_contact_count'] = _ApiClient["default"].convertToType(data['completed_contact_count'], 'Number');
        }
        if (data.hasOwnProperty('created_by_global_id')) {
          obj['created_by_global_id'] = _ApiClient["default"].convertToType(data['created_by_global_id'], 'String');
        }
        if (data.hasOwnProperty('date_created')) {
          obj['date_created'] = _ApiClient["default"].convertToType(data['date_created'], 'String');
        }
        if (data.hasOwnProperty('error_message')) {
          obj['error_message'] = _ApiClient["default"].convertToType(data['error_message'], 'String');
        }
        if (data.hasOwnProperty('goals')) {
          obj['goals'] = _ApiClient["default"].convertToType(data['goals'], [_Goal["default"]]);
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('published_date')) {
          obj['published_date'] = _ApiClient["default"].convertToType(data['published_date'], 'Date');
        }
        if (data.hasOwnProperty('published_status')) {
          obj['published_status'] = _ApiClient["default"].convertToType(data['published_status'], 'Boolean');
        }
        if (data.hasOwnProperty('published_time_zone')) {
          obj['published_time_zone'] = _ApiClient["default"].convertToType(data['published_time_zone'], 'String');
        }
        if (data.hasOwnProperty('sequences')) {
          obj['sequences'] = _ApiClient["default"].convertToType(data['sequences'], [_Sequence["default"]]);
        }
        if (data.hasOwnProperty('time_zone')) {
          obj['time_zone'] = _ApiClient["default"].convertToType(data['time_zone'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Campaign</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Campaign</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['created_by_global_id'] && !(typeof data['created_by_global_id'] === 'string' || data['created_by_global_id'] instanceof String)) {
        throw new Error("Expected the field `created_by_global_id` to be a primitive type in the JSON string but got " + data['created_by_global_id']);
      }
      // ensure the json data is a string
      if (data['date_created'] && !(typeof data['date_created'] === 'string' || data['date_created'] instanceof String)) {
        throw new Error("Expected the field `date_created` to be a primitive type in the JSON string but got " + data['date_created']);
      }
      // ensure the json data is a string
      if (data['error_message'] && !(typeof data['error_message'] === 'string' || data['error_message'] instanceof String)) {
        throw new Error("Expected the field `error_message` to be a primitive type in the JSON string but got " + data['error_message']);
      }
      if (data['goals']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['goals'])) {
          throw new Error("Expected the field `goals` to be an array in the JSON data but got " + data['goals']);
        }
        // validate the optional field `goals` (array)
        var _iterator = _createForOfIteratorHelper(data['goals']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _Goal["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['published_time_zone'] && !(typeof data['published_time_zone'] === 'string' || data['published_time_zone'] instanceof String)) {
        throw new Error("Expected the field `published_time_zone` to be a primitive type in the JSON string but got " + data['published_time_zone']);
      }
      if (data['sequences']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['sequences'])) {
          throw new Error("Expected the field `sequences` to be an array in the JSON data but got " + data['sequences']);
        }
        // validate the optional field `sequences` (array)
        var _iterator2 = _createForOfIteratorHelper(data['sequences']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _Sequence["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['time_zone'] && !(typeof data['time_zone'] === 'string' || data['time_zone'] instanceof String)) {
        throw new Error("Expected the field `time_zone` to be a primitive type in the JSON string but got " + data['time_zone']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Number} active_contact_count
 */
Campaign.prototype['active_contact_count'] = undefined;

/**
 * @member {Number} completed_contact_count
 */
Campaign.prototype['completed_contact_count'] = undefined;

/**
 * @member {String} created_by_global_id
 */
Campaign.prototype['created_by_global_id'] = undefined;

/**
 * @member {String} date_created
 */
Campaign.prototype['date_created'] = undefined;

/**
 * @member {String} error_message
 */
Campaign.prototype['error_message'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/Goal>} goals
 */
Campaign.prototype['goals'] = undefined;

/**
 * @member {String} id
 */
Campaign.prototype['id'] = undefined;

/**
 * @member {Boolean} locked
 */
Campaign.prototype['locked'] = undefined;

/**
 * @member {String} name
 */
Campaign.prototype['name'] = undefined;

/**
 * @member {Date} published_date
 */
Campaign.prototype['published_date'] = undefined;

/**
 * @member {Boolean} published_status
 */
Campaign.prototype['published_status'] = undefined;

/**
 * @member {String} published_time_zone
 */
Campaign.prototype['published_time_zone'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/Sequence>} sequences
 */
Campaign.prototype['sequences'] = undefined;

/**
 * @member {String} time_zone
 */
Campaign.prototype['time_zone'] = undefined;
var _default = exports["default"] = Campaign;