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
 * The StackTraceElement model module.
 * @module com.keap.sdk.core/model/StackTraceElement
 * @version 0.0.32
 */
var StackTraceElement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StackTraceElement</code>.
   * @alias module:com.keap.sdk.core/model/StackTraceElement
   */
  function StackTraceElement() {
    _classCallCheck(this, StackTraceElement);
    StackTraceElement.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(StackTraceElement, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>StackTraceElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/StackTraceElement} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/StackTraceElement} The populated <code>StackTraceElement</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StackTraceElement();
        if (data.hasOwnProperty('classLoaderName')) {
          obj['classLoaderName'] = _ApiClient["default"].convertToType(data['classLoaderName'], 'String');
        }
        if (data.hasOwnProperty('className')) {
          obj['className'] = _ApiClient["default"].convertToType(data['className'], 'String');
        }
        if (data.hasOwnProperty('fileName')) {
          obj['fileName'] = _ApiClient["default"].convertToType(data['fileName'], 'String');
        }
        if (data.hasOwnProperty('lineNumber')) {
          obj['lineNumber'] = _ApiClient["default"].convertToType(data['lineNumber'], 'Number');
        }
        if (data.hasOwnProperty('methodName')) {
          obj['methodName'] = _ApiClient["default"].convertToType(data['methodName'], 'String');
        }
        if (data.hasOwnProperty('moduleName')) {
          obj['moduleName'] = _ApiClient["default"].convertToType(data['moduleName'], 'String');
        }
        if (data.hasOwnProperty('moduleVersion')) {
          obj['moduleVersion'] = _ApiClient["default"].convertToType(data['moduleVersion'], 'String');
        }
        if (data.hasOwnProperty('nativeMethod')) {
          obj['nativeMethod'] = _ApiClient["default"].convertToType(data['nativeMethod'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StackTraceElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StackTraceElement</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['classLoaderName'] && !(typeof data['classLoaderName'] === 'string' || data['classLoaderName'] instanceof String)) {
        throw new Error("Expected the field `classLoaderName` to be a primitive type in the JSON string but got " + data['classLoaderName']);
      }
      // ensure the json data is a string
      if (data['className'] && !(typeof data['className'] === 'string' || data['className'] instanceof String)) {
        throw new Error("Expected the field `className` to be a primitive type in the JSON string but got " + data['className']);
      }
      // ensure the json data is a string
      if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
        throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
      }
      // ensure the json data is a string
      if (data['methodName'] && !(typeof data['methodName'] === 'string' || data['methodName'] instanceof String)) {
        throw new Error("Expected the field `methodName` to be a primitive type in the JSON string but got " + data['methodName']);
      }
      // ensure the json data is a string
      if (data['moduleName'] && !(typeof data['moduleName'] === 'string' || data['moduleName'] instanceof String)) {
        throw new Error("Expected the field `moduleName` to be a primitive type in the JSON string but got " + data['moduleName']);
      }
      // ensure the json data is a string
      if (data['moduleVersion'] && !(typeof data['moduleVersion'] === 'string' || data['moduleVersion'] instanceof String)) {
        throw new Error("Expected the field `moduleVersion` to be a primitive type in the JSON string but got " + data['moduleVersion']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} classLoaderName
 */
StackTraceElement.prototype['classLoaderName'] = undefined;

/**
 * @member {String} className
 */
StackTraceElement.prototype['className'] = undefined;

/**
 * @member {String} fileName
 */
StackTraceElement.prototype['fileName'] = undefined;

/**
 * @member {Number} lineNumber
 */
StackTraceElement.prototype['lineNumber'] = undefined;

/**
 * @member {String} methodName
 */
StackTraceElement.prototype['methodName'] = undefined;

/**
 * @member {String} moduleName
 */
StackTraceElement.prototype['moduleName'] = undefined;

/**
 * @member {String} moduleVersion
 */
StackTraceElement.prototype['moduleVersion'] = undefined;

/**
 * @member {Boolean} nativeMethod
 */
StackTraceElement.prototype['nativeMethod'] = undefined;
var _default = exports["default"] = StackTraceElement;