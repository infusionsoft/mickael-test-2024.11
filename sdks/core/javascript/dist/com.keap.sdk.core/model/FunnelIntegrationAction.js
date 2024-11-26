"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _FunnelIntegrationSchemaField = _interopRequireDefault(require("./FunnelIntegrationSchemaField"));
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
 * The FunnelIntegrationAction model module.
 * @module com.keap.sdk.core/model/FunnelIntegrationAction
 * @version 0.0.20
 */
var FunnelIntegrationAction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FunnelIntegrationAction</code>.
   * @alias module:com.keap.sdk.core/model/FunnelIntegrationAction
   */
  function FunnelIntegrationAction() {
    _classCallCheck(this, FunnelIntegrationAction);
    FunnelIntegrationAction.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(FunnelIntegrationAction, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>FunnelIntegrationAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/FunnelIntegrationAction} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/FunnelIntegrationAction} The populated <code>FunnelIntegrationAction</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FunnelIntegrationAction();
        if (data.hasOwnProperty('base_url')) {
          obj['base_url'] = _ApiClient["default"].convertToType(data['base_url'], 'String');
        }
        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }
        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('icon_url')) {
          obj['icon_url'] = _ApiClient["default"].convertToType(data['icon_url'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('schema_fields')) {
          obj['schema_fields'] = _ApiClient["default"].convertToType(data['schema_fields'], [_FunnelIntegrationSchemaField["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FunnelIntegrationAction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FunnelIntegrationAction</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['base_url'] && !(typeof data['base_url'] === 'string' || data['base_url'] instanceof String)) {
        throw new Error("Expected the field `base_url` to be a primitive type in the JSON string but got " + data['base_url']);
      }
      // ensure the json data is a string
      if (data['context'] && !(typeof data['context'] === 'string' || data['context'] instanceof String)) {
        throw new Error("Expected the field `context` to be a primitive type in the JSON string but got " + data['context']);
      }
      // ensure the json data is a string
      if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
        throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      if (data['schema_fields']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['schema_fields'])) {
          throw new Error("Expected the field `schema_fields` to be an array in the JSON data but got " + data['schema_fields']);
        }
        // validate the optional field `schema_fields` (array)
        var _iterator = _createForOfIteratorHelper(data['schema_fields']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _FunnelIntegrationSchemaField["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
}();
/**
 * The base URL of the trigger, that will be used to call the integration related REST endpoints.
 * @member {String} base_url
 */
FunnelIntegrationAction.prototype['base_url'] = undefined;

/**
 * The context of the trigger, that will be used internally to identify the integration.
 * @member {String} context
 */
FunnelIntegrationAction.prototype['context'] = undefined;

/**
 * The flag to enable or disable the integration trigger.
 * @member {Boolean} enabled
 */
FunnelIntegrationAction.prototype['enabled'] = undefined;

/**
 * The icon URL of the trigger, that will be used to display the icon of this specific integration trigger.
 * @member {String} icon_url
 */
FunnelIntegrationAction.prototype['icon_url'] = undefined;

/**
 * The name of the trigger, that will be used internally to identify and initiate the trigger.
 * @member {String} name
 */
FunnelIntegrationAction.prototype['name'] = undefined;

/**
 * The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated.
 * @member {Array.<module:com.keap.sdk.core/model/FunnelIntegrationSchemaField>} schema_fields
 */
FunnelIntegrationAction.prototype['schema_fields'] = undefined;
var _default = exports["default"] = FunnelIntegrationAction;