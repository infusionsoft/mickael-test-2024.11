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
 * The UpdateAutomationCategoryRequest model module.
 * @module com.keap.sdk.core/model/UpdateAutomationCategoryRequest
 * @version 0.0.24
 */
var UpdateAutomationCategoryRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateAutomationCategoryRequest</code>.
   * @alias module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest
   */
  function UpdateAutomationCategoryRequest() {
    _classCallCheck(this, UpdateAutomationCategoryRequest);
    UpdateAutomationCategoryRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(UpdateAutomationCategoryRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>UpdateAutomationCategoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest} The populated <code>UpdateAutomationCategoryRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateAutomationCategoryRequest();
        if (data.hasOwnProperty('apply_category')) {
          obj['apply_category'] = _ApiClient["default"].convertToType(data['apply_category'], 'Boolean');
        }
        if (data.hasOwnProperty('automation_ids')) {
          obj['automation_ids'] = _ApiClient["default"].convertToType(data['automation_ids'], ['Number']);
        }
        if (data.hasOwnProperty('category_ids')) {
          obj['category_ids'] = _ApiClient["default"].convertToType(data['category_ids'], ['Number']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateAutomationCategoryRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateAutomationCategoryRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is an array
      if (!Array.isArray(data['automation_ids'])) {
        throw new Error("Expected the field `automation_ids` to be an array in the JSON data but got " + data['automation_ids']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['category_ids'])) {
        throw new Error("Expected the field `category_ids` to be an array in the JSON data but got " + data['category_ids']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Boolean} apply_category
 */
UpdateAutomationCategoryRequest.prototype['apply_category'] = undefined;

/**
 * @member {Array.<Number>} automation_ids
 */
UpdateAutomationCategoryRequest.prototype['automation_ids'] = undefined;

/**
 * @member {Array.<Number>} category_ids
 */
UpdateAutomationCategoryRequest.prototype['category_ids'] = undefined;
var _default = exports["default"] = UpdateAutomationCategoryRequest;