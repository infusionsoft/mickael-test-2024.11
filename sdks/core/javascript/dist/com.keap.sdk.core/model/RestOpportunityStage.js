"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CheckListItem = _interopRequireDefault(require("./CheckListItem"));
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
 * The RestOpportunityStage model module.
 * @module com.keap.sdk.core/model/RestOpportunityStage
 * @version 0.0.23
 */
var RestOpportunityStage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestOpportunityStage</code>.
   * @alias module:com.keap.sdk.core/model/RestOpportunityStage
   */
  function RestOpportunityStage() {
    _classCallCheck(this, RestOpportunityStage);
    RestOpportunityStage.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(RestOpportunityStage, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RestOpportunityStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestOpportunityStage} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestOpportunityStage} The populated <code>RestOpportunityStage</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestOpportunityStage();
        if (data.hasOwnProperty('check_list_items')) {
          obj['check_list_items'] = _ApiClient["default"].convertToType(data['check_list_items'], [_CheckListItem["default"]]);
        }
        if (data.hasOwnProperty('created_time')) {
          obj['created_time'] = _ApiClient["default"].convertToType(data['created_time'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('order')) {
          obj['order'] = _ApiClient["default"].convertToType(data['order'], 'Number');
        }
        if (data.hasOwnProperty('probability')) {
          obj['probability'] = _ApiClient["default"].convertToType(data['probability'], 'Number');
        }
        if (data.hasOwnProperty('target_number_days')) {
          obj['target_number_days'] = _ApiClient["default"].convertToType(data['target_number_days'], 'Number');
        }
        if (data.hasOwnProperty('updated_time')) {
          obj['updated_time'] = _ApiClient["default"].convertToType(data['updated_time'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestOpportunityStage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestOpportunityStage</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['check_list_items']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['check_list_items'])) {
          throw new Error("Expected the field `check_list_items` to be an array in the JSON data but got " + data['check_list_items']);
        }
        // validate the optional field `check_list_items` (array)
        var _iterator = _createForOfIteratorHelper(data['check_list_items']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _CheckListItem["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['created_time'] && !(typeof data['created_time'] === 'string' || data['created_time'] instanceof String)) {
        throw new Error("Expected the field `created_time` to be a primitive type in the JSON string but got " + data['created_time']);
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
      if (data['updated_time'] && !(typeof data['updated_time'] === 'string' || data['updated_time'] instanceof String)) {
        throw new Error("Expected the field `updated_time` to be a primitive type in the JSON string but got " + data['updated_time']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Array.<module:com.keap.sdk.core/model/CheckListItem>} check_list_items
 */
RestOpportunityStage.prototype['check_list_items'] = undefined;

/**
 * @member {String} created_time
 */
RestOpportunityStage.prototype['created_time'] = undefined;

/**
 * @member {String} id
 */
RestOpportunityStage.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RestOpportunityStage.prototype['name'] = undefined;

/**
 * @member {Number} order
 */
RestOpportunityStage.prototype['order'] = undefined;

/**
 * @member {Number} probability
 */
RestOpportunityStage.prototype['probability'] = undefined;

/**
 * @member {Number} target_number_days
 */
RestOpportunityStage.prototype['target_number_days'] = undefined;

/**
 * @member {String} updated_time
 */
RestOpportunityStage.prototype['updated_time'] = undefined;
var _default = exports["default"] = RestOpportunityStage;