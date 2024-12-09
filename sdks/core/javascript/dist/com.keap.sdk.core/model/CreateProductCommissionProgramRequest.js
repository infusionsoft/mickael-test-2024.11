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
 * The CreateProductCommissionProgramRequest model module.
 * @module com.keap.sdk.core/model/CreateProductCommissionProgramRequest
 * @version 0.0.34
 */
var CreateProductCommissionProgramRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateProductCommissionProgramRequest</code>.
   * @alias module:com.keap.sdk.core/model/CreateProductCommissionProgramRequest
   */
  function CreateProductCommissionProgramRequest() {
    _classCallCheck(this, CreateProductCommissionProgramRequest);
    CreateProductCommissionProgramRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CreateProductCommissionProgramRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateProductCommissionProgramRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateProductCommissionProgramRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateProductCommissionProgramRequest} The populated <code>CreateProductCommissionProgramRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateProductCommissionProgramRequest();
        if (data.hasOwnProperty('dollar_amount')) {
          obj['dollar_amount'] = _ApiClient["default"].convertToType(data['dollar_amount'], 'String');
        }
        if (data.hasOwnProperty('percentage')) {
          obj['percentage'] = _ApiClient["default"].convertToType(data['percentage'], 'String');
        }
        if (data.hasOwnProperty('product_id')) {
          obj['product_id'] = _ApiClient["default"].convertToType(data['product_id'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateProductCommissionProgramRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProductCommissionProgramRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['dollar_amount'] && !(typeof data['dollar_amount'] === 'string' || data['dollar_amount'] instanceof String)) {
        throw new Error("Expected the field `dollar_amount` to be a primitive type in the JSON string but got " + data['dollar_amount']);
      }
      // ensure the json data is a string
      if (data['percentage'] && !(typeof data['percentage'] === 'string' || data['percentage'] instanceof String)) {
        throw new Error("Expected the field `percentage` to be a primitive type in the JSON string but got " + data['percentage']);
      }
      // ensure the json data is a string
      if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
        throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} dollar_amount
 */
CreateProductCommissionProgramRequest.prototype['dollar_amount'] = undefined;

/**
 * @member {String} percentage
 */
CreateProductCommissionProgramRequest.prototype['percentage'] = undefined;

/**
 * @member {String} product_id
 */
CreateProductCommissionProgramRequest.prototype['product_id'] = undefined;
var _default = exports["default"] = CreateProductCommissionProgramRequest;